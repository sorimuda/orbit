// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/lib/Layout'

import * as React from 'react'
import * as Common from '@kiwicom/orbit-components/common'

export { Layout, Layout as default }

declare namespace Layout {
    type Type = "Search" | "Booking" | "MMB";

    interface Props extends Common.Global {
        readonly type: Type;
        readonly children: React.ReactNode;
    }
}

declare class Layout extends React.Component<Layout.Props> {}
