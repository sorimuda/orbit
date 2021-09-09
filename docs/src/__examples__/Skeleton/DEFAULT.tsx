import React from "react";
import { Skeleton } from "@kiwicom/orbit-components";

export default {
  Example: () => <Skeleton rowOffset={30} rowHeight={21} />,
  exampleKnobs: [
    {
      component: "Skeleton",
      knobs: [
        {
          name: "rows",
          type: "number",
          defaultValue: 1,
        },
        {
          name: "rowOffset",
          type: "number",
          defaultValue: 30,
        },
        {
          name: "rowHeight",
          type: "number",
          defaultValue: 21,
        },
      ],
    },
  ],
};
