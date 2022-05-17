!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).scrollama = t()
}(this, function() {
    "use strict";
    function S({id: e, step: t, marginTop: n}) {
        var {index: o, height: t} = t,
            o = `scrollama__debug-step--${e}-${o}`;
        let r = document.querySelector(`.${o}`);
        r = r || function(e) {
            const t = document.createElement("div");
            t.className = `scrollama__debug-step ${e}`,
                t.style.position = "fixed",
                t.style.left = "0",
                t.style.width = "100%",
                t.style.zIndex = "9999",
                t.style.borderTop = "2px solid black",
                t.style.borderBottom = "2px solid black";
            const n = document.createElement("p");
            return n.style.position = "absolute", n.style.left = "0", n.style.height = "1px", n.style.width = "100%", n.style.borderTop = "1px dashed black", t.appendChild(n), document.body.appendChild(t), t
        }(o),
            r.style.top = `${-1 * n}px`,
            r.style.height = `${t}px`,
            r.querySelector("p").style.top = `${t / 2}px`
    }
    function k(e) {
        console.error(`scrollama error: ${e}`)
    }
    function M(e) {
        return +e.getAttribute("data-scrollama-index")
    }
    function q(e) {
        if ("string" == typeof e && 0 < e.indexOf("px")) {
            var t = +e.replace("px", "");
            return isNaN(t) ? (err("offset value must be in 'px' format. Fallback to 0.5."), {
                format: "percent",
                value: .5
            }) : {
                format: "pixels",
                value: t
            }
        }
        return "number" != typeof e && isNaN(+e) ? null : (1 < e && err("offset value is greater than 1. Fallback to 1."), e < 0 && err("offset value is lower than 0. Fallback to 0."), {
            format: "percent",
            value: Math.min(Math.max(0, e), 1)
        })
    }
    let O,
        A,
        N;
    function T(e) {
        e = e ? e.scrollTop : window.pageYOffset;
        O !== e && (O = e, O > A ? N = "down" : O < A && (N = "up"), A = O)
    }
    return function() {
        let r = {},
            s = function() {
                var t = "abcdefghijklmnopqrstuvwxyz",
                    e = Date.now();
                const n = [];
                for (let e = 0; e < 6; e += 1) {
                    var o = t[Math.floor(Math.random() * t.length)];
                    n.push(o)
                }
                return `${n.join("")}${e}`
            }(),
            f = [],
            l,
            p,
            u = 0,
            t = !1,
            d = !1,
            h = !1,
            g = !1,
            o = [];
        function m() {
            r = {
                stepEnter: () => {},
                stepExit: () => {},
                stepProgress: () => {}
            },
                o = []
        }
        function v(e) {
            e && !t && w(),
            !e && t && b(),
                t = e
        }
        function i(e, t) {
            var n = M(e);
            const o = f[n];
            void 0 !== t && (o.progress = t);
            t = {
                element: e,
                index: n,
                progress: t,
                direction: N
            };
            "enter" === o.state && r.stepProgress(t)
        }
        function n([e]) {
            var t = M(e.target);
            const n = f[t];
            e = e.target.offsetHeight;
            e !== n.height && (n.height = e, x(n), E(n), y(n))
        }
        function a([e]) {
            T(p);
            var {isIntersecting: t, target: e} = e;
            (t ? function(e) {
                var t = M(e);
                const n = f[t];
                e = {
                    element: e,
                    index: t,
                    direction: N
                },
                    n.direction = N,
                    n.state = "enter",
                o[t] || r.stepEnter(e),
                g && (o[t] = !0)
            } : function(e) {
                var t = M(e);
                const n = f[t];
                n.state && (t = {
                    element: e,
                    index: t,
                    direction: N
                }, d && ("down" === N && n.progress < 1 ? i(e, 1) : "up" === N && 0 < n.progress && i(e, 0)), n.direction = N, n.state = "exit", r.stepExit(t))
            })(e)
        }
        function c([e]) {
            var t = M(e.target),
                n = f[t],
                {isIntersecting: o, intersectionRatio: t, target: e} = e;
            o && "enter" === n.state && i(e, t)
        }
        function x({observers: t}) {
            Object.keys(t).map(e => {
                t[e].disconnect()
            })
        }
        function b() {
            f.forEach(x)
        }
        function y(e) {
            const t = new ResizeObserver(n);
            t.observe(e.node),
                e.observers.resize = t
        }
        function E(e) {
            var t = window.innerHeight,
                n = e.offset || l,
                o = "pixels" === n.format ? 1 : t,
                n = n.value * o,
                o = e.height / 2 - n,
                n = e.height / 2 - (t - n);
            const r = new IntersectionObserver(a, {
                rootMargin: `${o}px 0px ${n}px 0px`,
                threshold: .5
            });
            r.observe(e.node),
                e.observers.step = r,
            h && S({
                id: s,
                step: e,
                marginTop: o,
                marginBottom: n
            })
        }
        function e(e) {
            var t = window.innerHeight,
                n = e.offset || l,
                o = "pixels" === n.format ? 1 : t,
                o = n.value * o,
                o = `${-o + e.height}px 0px ${o - t}px 0px`,
                t = function(e, t) {
                    var n = Math.ceil(e / t);
                    const o = [];
                    var r = 1 / n;
                    for (let e = 0; e < n + 1; e += 1)
                        o.push(e * r);
                    return o
                }(e.height, u);
            const r = new IntersectionObserver(c, {
                rootMargin: o,
                threshold: t
            });
            r.observe(e.node),
                e.observers.progress = r
        }
        function w() {
            b(),
                f.forEach(y),
                f.forEach(E),
            d && f.forEach(e)
        }
        const $ = {};
        return $.setup = ({step: e, parent: t, offset: n=.5, threshold: o=4, progress: r=!1, once: s=!1, debug: i=!1, container: a=void 0}) => {
            var c;
            return c = a, O = 0, A = 0, document.addEventListener("scroll", () => T(c)), f = ([e, t=document] = [e, t], ("string" == typeof e ? Array.from(t.querySelectorAll(e)) : e instanceof Element ? [e] : e instanceof NodeList ? Array.from(e) : e instanceof Array ? e : []).map((e, t) => ({
                index: t,
                direction: void 0,
                height: e.offsetHeight,
                node: e,
                observers: {},
                offset: q(e.dataset.offset),
                top: function(e) {
                    var {top: e} = e.getBoundingClientRect();
                    return e + window.pageYOffset - (document.body.clientTop || 0)
                }(e),
                progress: 0,
                state: void 0
            }))), f.length ? (d = r, g = s, h = i, u = Math.max(1, +o), l = q(n), p = a, m(), f.forEach(e => e.node.setAttribute("data-scrollama-index", e.index)), v(!0)) : k("no step elements"), $
        }, $.enable = () => (v(!0), $), $.disable = () => (v(!1), $), $.destroy = () => (v(!1), m(), $), $.resize = () => (w(), $), $.offset = e => null == e ? l.value : (l = q(e), w(), $), $.onStepEnter = e => ("function" == typeof e ? r.stepEnter = e : k("onStepEnter requires a function"), $), $.onStepExit = e => ("function" == typeof e ? r.stepExit = e : k("onStepExit requires a function"), $), $.onStepProgress = e => ("function" == typeof e ? r.stepProgress = e : k("onStepProgress requires a function"), $), $
    }
});

