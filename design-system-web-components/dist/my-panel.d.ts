import { LitElement } from 'lit';

export declare class MyPanel extends LitElement {
    static styles: import('lit').CSSResult;
    title: string;
    opened: boolean;
    icon: string;
    private onIconClickHandler;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLELementTagNameMap {
        'my-panel': MyPanel;
    }
}
