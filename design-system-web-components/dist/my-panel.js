import { css, LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
var __defProp = /* @__PURE__ */ (() => Object.defineProperty)();
var __getOwnPropDesc = /* @__PURE__ */ (() => Object.getOwnPropertyDescriptor)();
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let MyPanel = class extends LitElement {
  constructor() {
    super(...arguments);
    this.title = "Widget";
    this.opened = false;
    this.icon = "";
  }
  onIconClickHandler(e) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("icon-clicked", { bubbles: true }));
  }
  render() {
    return html`
        <div>
            <div class=${classMap({ "title": true, "closed": !this.opened })} @click=${() => this.opened = !this.opened}>${this.title}<div class="icon" @click=${this.onIconClickHandler}>${this.icon}</div></div>
                ${when(
      this.opened,
      () => html`
                        <div class="body">
                            <slot></slot>
                        </div>
                    `
    )}
            </div>
        </div>
        `;
  }
};
MyPanel.styles = css`
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
/* @__PURE__ */ __decorateClass([
  property({ type: String })
], MyPanel.prototype, "title", 2);
/* @__PURE__ */ __decorateClass([
  property({ type: Boolean })
], MyPanel.prototype, "opened", 2);
/* @__PURE__ */ __decorateClass([
  property({ type: String })
], MyPanel.prototype, "icon", 2);
MyPanel = /* @__PURE__ */ __decorateClass([
  customElement("my-panel")
], MyPanel);
export {
  MyPanel
};
