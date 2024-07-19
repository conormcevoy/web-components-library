import { createComponent } from "@lit/react";
import * as React from "react";
import { MyPanel } from "./my-panel";

export const MyPanelReact = createComponent({
    react: React,
    tagName: 'my-panel',
    elementClass: MyPanel, 
    events: {
        'onIconClicked': 'icon-clicked'
    },
    displayName: 'myPanel'
});