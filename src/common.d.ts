// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

declare module "@kiwicom/orbit-components/common";

/*
Common types used in @kiwicom/orbit-component declarations
*/

export type Translation = string | React.ElementType<React.ComponentType<any>>;
export type Callback = () => void | Promise<void>;
// Parameter event is not optional
// @see https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#optional-parameters-in-callbacks
export type Event<T> = (event: T) => void | Promise<void>;
export type Component = React.ComponentType<{ className: string }>;
export type Size = "small" | "normal" | "large";
export type InputSize = "small" | "normal";

export type Carrier = {
  code: string;
  name: string;
  type?: "airline" | "bus" | "train";
};

export type Translations = {
  [key: string]: string;
};

export interface Global {
  readonly dataTest?: string;
}

export interface Ref {
  readonly ref?: () => { current: HTMLElement | null };
}

export interface SpaceAfter {
  readonly spaceAfter?: "none" | "smallest" | "small" | "normal" | "medium" | "large" | "largest";
}
