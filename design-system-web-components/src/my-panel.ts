import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

@customElement('my-panel')
export class MyPanel extends LitElement {

    static styles = css`
        .title {
            background: var(--my-panel-primary-bg, #dc0b0b);
            color: var(--my-panel-primary-color, #fff);
            padding: 0.8rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.2s ease-in-out;
        }

        .title.closed {
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }

        .icon {
            cursor: pointer;
        }

        .body {
            padding: 1rem;
            border: 1px solid var(--my-panel-primary-bg, #000);
        }
    `;

    @property({ type: String }) 
    title = 'Widget';

    @property({ type: Boolean })
    opened = false;

    @property({ type: String })
    icon = '';

    private onIconClickHandler(e: MouseEvent) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('icon-clicked', { bubbles: true}));
    }

    render() {
        return html`
        <div>
            <div class=${classMap({ 'title': true, 'closed': !this.opened })} @click=${() => this.opened = !this.opened}>${ this.title }<div class="icon" @click=${this.onIconClickHandler}>${this.icon}</div></div>
                ${when(
                    this.opened, 
                    () => html`
                        <div class="body">
                            <slot></slot>
                        </div>
                    `,
                )}
            </div>
        </div>
        `
    }
}

declare global {
    interface HTMLELementTagNameMap {
        'my-panel': MyPanel;
    }
}
