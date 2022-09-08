import { $, fs, chalk, globby } from "zx";
import flowgen from "flowgen";
import dedent from "dedent";
import filedirname from "filedirname";

const [, __dirname] = filedirname();

export default async function generateTypeDeclarations() {
  await $`ts-node --esm config/typeFiles.mts`;

  await $`cpy "**/*.d.ts" ../lib --cwd src --parents`;
  await $`cpy "**/*.d.ts" ../es --cwd src --parents`;
  await $`del tsconfig.tsbuildinfo`; // reset potential incremental compilation information
  await $`tsc`;

  // generate flow declarations out of typescript definitions
  console.log(chalk.greenBright("Generating Flow declarations..."));
  const tsDeclarations = await globby("{lib,es}/**/*.d.ts");
  await Promise.all(
    tsDeclarations.map(async tsDeclPath => {
      const flowDeclPath = tsDeclPath.replace(".d.ts", ".jsx.flow");
      try {
        if (await fs.pathExists(flowDeclPath)) return;
        const flowDecl = flowgen.compiler.compileDefinitionFile(tsDeclPath, {
          interfaceRecords: true,
        });
        const content = dedent`
              // @flow
              ${flowgen.beautify(
                flowDecl
                  .replace("import React from", "import * as React from")
                  .replace("React.FC", "React.StatelessFunctionalComponent"),
              )}
            `;
        await fs.writeFile(flowDeclPath, content);
      } catch (err) {
        if (err instanceof Error) {
          err.message = dedent`
                Failed to create a Flow libdef
                ${__dirname}/${flowDeclPath}
                ${err.message}
              `;
          throw err;
        }
      }
    }),
  );
}
