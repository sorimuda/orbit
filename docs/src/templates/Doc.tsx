import React from "react";
import { graphql, PageRendererProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import DocLayout from "../components/DocLayout";

interface Props extends PageRendererProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
      };
      fields: {
        description: string;
        slug: string;
      };
      body: string;
    };
  };
}

export default function Doc({ data, location }: Props) {
  const { frontmatter, fields, body } = data.mdx;
  console.log(fields);
  return (
    <DocLayout
      path={fields.slug}
      location={location}
      title={frontmatter.title}
      description={fields.description}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </DocLayout>
  );
}

export const query = graphql`
  query DocQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      fields {
        description
        slug
      }
      body
    }
  }
`;
