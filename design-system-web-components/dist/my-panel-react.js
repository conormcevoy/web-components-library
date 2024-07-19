import { css, LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
function _mergeNamespaces(n2, m) {
  for (var i = 0; i < m.length; i++) {
    const e2 = m[i];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k in e2) {
        if (k !== "default" && !(k in n2)) {
          const d = Object.getOwnPropertyDescriptor(e2, k);
          if (d) {
            Object.defineProperty(n2, k, d.get ? d : {
              enumerable: true,
              get: () => e2[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), n$1 = /* @__PURE__ */ new WeakMap(), t$1 = (e2, t2, o2, l2, a) => {
  const s = a == null ? void 0 : a[t2];
  void 0 === s ? (e2[t2] = o2, null == o2 && t2 in HTMLElement.prototype && e2.removeAttribute(t2)) : o2 !== l2 && ((e3, t3, o3) => {
    let l3 = n$1.get(e3);
    void 0 === l3 && n$1.set(e3, l3 = /* @__PURE__ */ new Map());
    let a2 = l3.get(t3);
    void 0 !== o3 ? void 0 === a2 ? (l3.set(t3, a2 = { handleEvent: o3 }), e3.addEventListener(t3, a2)) : a2.handleEvent = o3 : void 0 !== a2 && (l3.delete(t3), e3.removeEventListener(t3, a2));
  })(e2, s, o2);
}, o = ({ react: n2, tagName: o2, elementClass: l2, events: a, displayName: s }) => {
  const c = new Set(Object.keys(a ?? {})), r2 = n2.forwardRef((s2, r3) => {
    const i = n2.useRef(/* @__PURE__ */ new Map()), d = n2.useRef(null), f = {}, u2 = {};
    for (const [n3, t2] of Object.entries(s2)) e.has(n3) ? f["className" === n3 ? "class" : n3] = t2 : c.has(n3) || n3 in l2.prototype ? u2[n3] = t2 : f[n3] = t2;
    return n2.useLayoutEffect(() => {
      if (null === d.current) return;
      const e2 = /* @__PURE__ */ new Map();
      for (const n3 in u2) t$1(d.current, n3, s2[n3], i.current.get(n3), a), i.current.delete(n3), e2.set(n3, s2[n3]);
      for (const [e3, n3] of i.current) t$1(d.current, e3, void 0, n3, a);
      i.current = e2;
    }), n2.useLayoutEffect(() => {
      var _a;
      (_a = d.current) == null ? void 0 : _a.removeAttribute("defer-hydration");
    }, []), f.suppressHydrationWarning = true, n2.createElement(o2, { ...f, ref: n2.useCallback((e2) => {
      d.current = e2, "function" == typeof r3 ? r3(e2) : null !== r3 && (r3.current = e2);
    }, [r3]) });
  });
  return r2.displayName = s ?? l2.name, r2;
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = /* @__PURE__ */ Symbol.for("react.element"), n = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), r = /* @__PURE__ */ Symbol.for("react.profiler"), t = /* @__PURE__ */ Symbol.for("react.provider"), u = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), z = /* @__PURE__ */ (() => Symbol.iterator)();
function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C = /* @__PURE__ */ (() => Object.assign)(), D = {};
function E(a, b, e2) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e2 || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = /* @__PURE__ */ (() => E.prototype)();
function G(a, b, e2) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e2 || B;
}
var H = G.prototype = /* @__PURE__ */ new F();
H.constructor = G;
/* @__PURE__ */ C(H, E.prototype);
H.isPureReactComponent = true;
var I = /* @__PURE__ */ (() => Array.isArray)(), J = /* @__PURE__ */ (() => Object.prototype.hasOwnProperty)(), K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
function M(a, b, e2) {
  var d, c = {}, k = null, h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e2;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
}
function N(a, b) {
  return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e2, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e2 = "", null != a && (e2 = a.replace(P, "$&/") + "/"), R(c, b, e2, "", function(a2) {
    return a2;
  })) : null != c && (O(c) && (c = N(c, e2 + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e2, f, c);
  }
  else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e2, f, c);
  else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e2) {
  if (null == a) return a;
  var d = [], c = 0;
  R(a, d, "", "", function(a2) {
    return b.call(e2, a2, c++);
  });
  return d;
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
function X() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S, forEach: function(a, b, e2) {
  S(a, function() {
    b.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b = 0;
  S(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E;
react_production_min.Fragment = p;
react_production_min.Profiler = r;
react_production_min.PureComponent = G;
react_production_min.StrictMode = q;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
react_production_min.act = X;
react_production_min.cloneElement = function(a, b, e2) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e2;
  else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    d.children = g;
  }
  return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M;
react_production_min.createFactory = function(a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v, render: a };
};
react_production_min.isValidElement = O;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
react_production_min.unstable_act = X;
react_production_min.useCallback = function(a, b) {
  return U.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e2) {
  return U.current.useImperativeHandle(a, b, e2);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e2) {
  return U.current.useReducer(a, b, e2);
};
react_production_min.useRef = function(a) {
  return U.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e2) {
  return U.current.useSyncExternalStore(a, b, e2);
};
react_production_min.useTransition = function() {
  return U.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = /* @__PURE__ */ (() => react.exports)();
const index = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [reactExports]);
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
  onIconClickHandler(e2) {
    e2.stopPropagation();
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
const MyPanelReact = /* @__PURE__ */ o({
  react: React,
  tagName: "my-panel",
  elementClass: MyPanel,
  events: {
    "onIconClicked": "icon-clicked"
  },
  displayName: "myPanel"
});
export {
  MyPanelReact
};
