import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ComponentStructure from "..";

const structure = platform => ({
  Image: props => <svg {...props} />,
  imageWidth: 124,
  parts: [
    {
      name: `${platform}One`,
      description: "This is one part of the component",
    },
    {
      name: `${platform}Two`,
      description: "This is another part of the component",
    },
  ],
});

describe("ComponentStructure", () => {
  it("should have expected DOM", async () => {
    render(
      <ComponentStructure
        component="Test"
        web={structure("Web")}
        ios={structure("iOS")}
        android={structure("Android")}
      />,
    );

    const tabWeb = screen.getByRole("tab", { name: "Web", selected: true });
    expect(tabWeb).toHaveAttribute("tabindex", "0");

    const tabIOS = screen.getByRole("tab", { name: "iOS", selected: false });
    expect(tabIOS).toHaveAttribute("tabindex", "-1");

    const tabAndroid = screen.getByRole("tab", { name: "Android", selected: false });
    expect(tabAndroid).toHaveAttribute("tabindex", "-1");

    screen.getByRole("tabpanel", { name: "Web" });
    screen.getByRole("img", { name: "Test component structure for Web" });
    screen.getByText(/WebOne/);
    screen.getByText(/WebTwo/);
  });

  it("should open tab on click", () => {
    render(
      <ComponentStructure
        component="Test"
        web={structure("Web")}
        ios={structure("iOS")}
        android={structure("Android")}
      />,
    );

    userEvent.click(screen.getByRole("tab", { name: "iOS" }));
    screen.getByText(/iOSOne/);
  });

  it("should move focus along tabs when pressing arrow keys", () => {
    render(
      <ComponentStructure
        component="Test"
        web={structure("Web")}
        ios={structure("iOS")}
        android={structure("Android")}
      />,
    );

    const tabWeb = screen.getByRole("tab", { name: "Web" });
    const tabIOS = screen.getByRole("tab", { name: "iOS" });
    const tabAndroid = screen.getByRole("tab", { name: "Android" });

    userEvent.tab();
    expect(tabWeb).toHaveFocus();

    userEvent.keyboard("{ArrowRight}");
    expect(tabIOS).toHaveFocus();

    expect(tabWeb).toHaveAttribute("tabindex", "-1");
    expect(tabIOS).toHaveAttribute("tabindex", "0");
    expect(tabAndroid).toHaveAttribute("tabindex", "-1");

    userEvent.keyboard("{ArrowLeft}");
    expect(tabWeb).toHaveFocus();

    expect(tabWeb).toHaveAttribute("tabindex", "0");
    expect(tabIOS).toHaveAttribute("tabindex", "-1");
    expect(tabAndroid).toHaveAttribute("tabindex", "-1");

    userEvent.keyboard("{ArrowLeft}");
    expect(tabAndroid).toHaveFocus();

    expect(tabWeb).toHaveAttribute("tabindex", "-1");
    expect(tabIOS).toHaveAttribute("tabindex", "-1");
    expect(tabAndroid).toHaveAttribute("tabindex", "0");

    userEvent.keyboard("{ArrowRight}");
    expect(tabWeb).toHaveFocus();

    expect(tabWeb).toHaveAttribute("tabindex", "0");
    expect(tabIOS).toHaveAttribute("tabindex", "-1");
    expect(tabAndroid).toHaveAttribute("tabindex", "-1");
  });

  it("should not have tabs if there's only one platform", () => {
    render(<ComponentStructure component="Test" web={structure("Web")} />);

    expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
    expect(screen.queryByRole("tabpanel")).not.toBeInTheDocument();

    screen.getByRole("img", { name: "Test component structure for Web" });
    screen.getByText(/WebOne/);
    screen.getByText(/WebTwo/);
  });
});
