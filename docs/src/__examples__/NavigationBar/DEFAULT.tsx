import React from "react";
import { LinkList, NavigationBar, ButtonLink, TextLink, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <NavigationBar>
      <Stack direction="row" align="center" justify="center">
        <ButtonLink href="https://orbit.kiwi">
          <img
            src="https://orbit.kiwi/files/2019/08/cropped-OrbitLogo-1.png"
            alt="Orbit by Kiwi.com"
            height="40px"
          />
        </ButtonLink>
        <LinkList direction="row">
          <TextLink type="secondary">Travel</TextLink>
          <TextLink type="secondary">Rooms</TextLink>
          <TextLink type="secondary">Careers</TextLink>
        </LinkList>
        <Stack inline>
          <LinkList direction="row">
            <TextLink type="secondary">English</TextLink>
            <TextLink type="secondary">Help</TextLink>
            <TextLink type="secondary">My account</TextLink>
          </LinkList>
        </Stack>
      </Stack>
    </NavigationBar>
  ),
  exampleKnobs: [
    {
      component: "NavigationBar",
      knobs: [{ name: "hideOnScroll", type: "boolean", defaultValue: true }],
    },
  ],
};
