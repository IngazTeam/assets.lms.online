! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
}(this, function () {
    return n = {}, i.m = s = [function (t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n() {
            if (0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (g = !0), g) return m = (0, p.default)(m, v), (0, u.default)(m, v.once), m
        }

        function o() {
            m = (0, f.default)(), n()
        }
        var a = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                }
                return t
            },
            r = (s(i(1)), i(6)),
            l = s(r),
            h = s(i(7)),
            d = s(i(8)),
            c = s(i(9)),
            u = s(i(10)),
            p = s(i(11)),
            f = s(i(14)),
            m = [],
            g = !1,
            v = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            };
        t.exports = {
            init: function (t) {
                v = a(v, t), m = (0, f.default)();
                var e, i = document.all && !window.atob;
                return !0 === (e = v.disable) || "mobile" === e && c.default.mobile() || "phone" === e && c.default.phone() || "tablet" === e && c.default.tablet() || "function" == typeof e && !0 === e() || i ? void m.forEach(function (t, e) {
                    t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                }) : (v.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), v.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", v.easing), document.querySelector("body").setAttribute("data-aos-duration", v.duration), document.querySelector("body").setAttribute("data-aos-delay", v.delay), "DOMContentLoaded" === v.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? n(!0) : "load" === v.startEvent ? window.addEventListener(v.startEvent, function () {
                    n(!0)
                }) : document.addEventListener(v.startEvent, function () {
                    n(!0)
                }), window.addEventListener("resize", (0, h.default)(n, v.debounceDelay, !0)), window.addEventListener("orientationchange", (0, h.default)(n, v.debounceDelay, !0)), window.addEventListener("scroll", (0, l.default)(function () {
                    (0, u.default)(m, v.once)
                }, v.throttleDelay)), v.disableMutationObserver || d.default.ready("[data-aos]", o), m)
            },
            refresh: n,
            refreshHard: o
        }
    }, function (t, e) {}, , , , , function (m, t) {
        (function (t) {
            "use strict";

            function o(s, n, t) {
                function o(t) {
                    var e = h,
                        i = d;
                    return h = d = void 0, m = t, u = s.apply(i, e)
                }

                function a(t) {
                    var e = t - f;
                    return void 0 === f || n <= e || e < 0 || v && c <= t - m
                }

                function r() {
                    var t, e, i = S();
                    return a(i) ? l(i) : void(p = setTimeout(r, (e = n - ((t = i) - f), v ? _(e, c - (t - m)) : e)))
                }

                function l(t) {
                    return p = void 0, i && h ? o(t) : (h = d = void 0, u)
                }

                function e() {
                    var t, e = S(),
                        i = a(e);
                    if (h = arguments, d = this, f = e, i) {
                        if (void 0 === p) return m = t = f, p = setTimeout(r, n), g ? o(t) : u;
                        if (v) return p = setTimeout(r, n), o(f)
                    }
                    return void 0 === p && (p = setTimeout(r, n)), u
                }
                var h, d, c, u, p, f, m = 0,
                    g = !1,
                    v = !1,
                    i = !0;
                if ("function" != typeof s) throw new TypeError(w);
                return n = b(n) || 0, y(t) && (g = !!t.leading, c = (v = "maxWait" in t) ? x(b(t.maxWait) || 0, n) : c, i = "trailing" in t ? !!t.trailing : i), e.cancel = function () {
                    void 0 !== p && clearTimeout(p), h = f = d = p = void(m = 0)
                }, e.flush = function () {
                    return void 0 === p ? u : l(S())
                }, e
            }

            function y(t) {
                var e = void 0 === t ? "undefined" : i(t);
                return t && ("object" == e || "function" == e)
            }

            function s(t) {
                return "symbol" == (void 0 === t ? "undefined" : i(t)) || (e = t) && "object" == (void 0 === e ? "undefined" : i(e)) && f.call(t) == a;
                var e
            }

            function b(t) {
                if ("number" == typeof t) return t;
                if (s(t)) return n;
                var e;
                if (y(t) && (t = y(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e), "string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(r, "");
                var i = h.test(t);
                return i || d.test(t) ? c(t.slice(2), i ? 2 : 8) : l.test(t) ? n : +t
            }
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                w = "Expected a function",
                n = NaN,
                a = "[object Symbol]",
                r = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                c = parseInt,
                e = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t,
                u = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
                p = e || u || Function("return this")(),
                f = Object.prototype.toString,
                x = Math.max,
                _ = Math.min,
                S = function () {
                    return p.Date.now()
                };
            m.exports = function (t, e, i) {
                var s = !0,
                    n = !0;
                if ("function" != typeof t) throw new TypeError(w);
                return y(i) && (s = "leading" in i ? !!i.leading : s, n = "trailing" in i ? !!i.trailing : n), o(t, e, {
                    leading: s,
                    maxWait: e,
                    trailing: n
                })
            }
        }).call(t, function () {
            return this
        }())
    }, function (f, t) {
        (function (t) {
            "use strict";

            function y(t) {
                var e = void 0 === t ? "undefined" : i(t);
                return t && ("object" == e || "function" == e)
            }

            function s(t) {
                return "symbol" == (void 0 === t ? "undefined" : i(t)) || (e = t) && "object" == (void 0 === e ? "undefined" : i(e)) && p.call(t) == o;
                var e
            }

            function b(t) {
                if ("number" == typeof t) return t;
                if (s(t)) return n;
                var e;
                if (y(t) && (t = y(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e), "string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(a, "");
                var i = l.test(t);
                return i || h.test(t) ? d(t.slice(2), i ? 2 : 8) : r.test(t) ? n : +t
            }

            function w() {
                return u.Date.now()
            }
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                n = NaN,
                o = "[object Symbol]",
                a = /^\s+|\s+$/g,
                r = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                d = parseInt,
                e = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t,
                c = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
                u = e || c || Function("return this")(),
                p = Object.prototype.toString,
                x = Math.max,
                _ = Math.min;
            f.exports = function (s, n, t) {
                function o(t) {
                    var e = h,
                        i = d;
                    return h = d = void 0, m = t, u = s.apply(i, e)
                }

                function a(t) {
                    var e = t - f;
                    return void 0 === f || n <= e || e < 0 || v && c <= t - m
                }

                function r() {
                    var t, e, i = w();
                    return a(i) ? l(i) : void(p = setTimeout(r, (e = n - ((t = i) - f), v ? _(e, c - (t - m)) : e)))
                }

                function l(t) {
                    return p = void 0, i && h ? o(t) : (h = d = void 0, u)
                }

                function e() {
                    var t, e = w(),
                        i = a(e);
                    if (h = arguments, d = this, f = e, i) {
                        if (void 0 === p) return m = t = f, p = setTimeout(r, n), g ? o(t) : u;
                        if (v) return p = setTimeout(r, n), o(f)
                    }
                    return void 0 === p && (p = setTimeout(r, n)), u
                }
                var h, d, c, u, p, f, m = 0,
                    g = !1,
                    v = !1,
                    i = !0;
                if ("function" != typeof s) throw new TypeError("Expected a function");
                return n = b(n) || 0, y(t) && (g = !!t.leading, c = (v = "maxWait" in t) ? x(b(t.maxWait) || 0, n) : c, i = "trailing" in t ? !!t.trailing : i), e.cancel = function () {
                    void 0 !== p && clearTimeout(p), h = f = d = p = void(m = 0)
                }, e.flush = function () {
                    return void 0 === p ? u : l(w())
                }, e
            }
        }).call(t, function () {
            return this
        }())
    }, function (t, e) {
        "use strict";

        function n() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function o(t) {
            t && t.forEach(function (t) {
                var e = Array.prototype.slice.call(t.addedNodes),
                    i = Array.prototype.slice.call(t.removedNodes);
                if (function t(e) {
                    for (var i = void 0, s = void 0, i = 0; i < e.length; i += 1) {
                        if ((s = e[i]).dataset && s.dataset.aos) return !0;
                        if (s.children && t(s.children)) return !0
                    }
                    return !1
                }(e.concat(i))) return a()
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function () {};
        e.default = {
            isSupported: function () {
                return !!n()
            },
            ready: function (t, e) {
                var i = window.document,
                    s = new(n())(o);
                a = e, s.observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }
    }, function (t, e) {
        "use strict";

        function i() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            n = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            r = (function (t, e, i) {
                return e && h(t.prototype, e), i && h(t, i), t
            }(l, [{
                key: "phone",
                value: function () {
                    var t = i();
                    return !(!s.test(t) && !n.test(t.substr(0, 4)))
                }
            }, {
                key: "mobile",
                value: function () {
                    var t = i();
                    return !(!o.test(t) && !a.test(t.substr(0, 4)))
                }
            }, {
                key: "tablet",
                value: function () {
                    return this.mobile() && !this.phone()
                }
            }]), l);

        function l() {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, l)
        }

        function h(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
        }
        e.default = new r
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function (t, a) {
            var r = window.pageYOffset,
                l = window.innerHeight;
            t.forEach(function (t, e) {
                var i, s, n, o;
                s = l + r, n = a, o = (i = t).node.getAttribute("data-aos-once"), s > i.position ? i.node.classList.add("aos-animate") : void 0 === o || "false" !== o && (n || "true" === o) || i.node.classList.remove("aos-animate")
            })
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, n = i(12),
            o = (s = n) && s.__esModule ? s : {
                default: s
            };
        e.default = function (t, i) {
            return t.forEach(function (t, e) {
                t.node.classList.add("aos-init"), t.position = (0, o.default)(t.node, i.offset)
            }), t
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, n = i(13),
            a = (s = n) && s.__esModule ? s : {
                default: s
            };
        e.default = function (t, e) {
            var i = 0,
                s = 0,
                n = window.innerHeight,
                o = {
                    offset: t.getAttribute("data-aos-offset"),
                    anchor: t.getAttribute("data-aos-anchor"),
                    anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                };
            switch (o.offset && !isNaN(o.offset) && (s = parseInt(o.offset)), o.anchor && document.querySelectorAll(o.anchor) && (t = document.querySelectorAll(o.anchor)[0]), i = (0, a.default)(t).top, o.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    i += t.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    i += t.offsetHeight;
                    break;
                case "top-center":
                    i += n / 2;
                    break;
                case "bottom-center":
                    i += n / 2 + t.offsetHeight;
                    break;
                case "center-center":
                    i += n / 2 + t.offsetHeight / 2;
                    break;
                case "top-top":
                    i += n;
                    break;
                case "bottom-top":
                    i += t.offsetHeight + n;
                    break;
                case "center-top":
                    i += t.offsetHeight / 2 + n
            }
            return o.anchorPlacement || o.offset || isNaN(e) || (s = e), i + s
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function (t) {
            for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
            return {
                top: i,
                left: e
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function (t) {
            return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function (t) {
                return {
                    node: t
                }
            })
        }
    }], i.c = n, i.p = "dist/", i(0);

    function i(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return s[t].call(e.exports, e, e.exports, i), e.loaded = !0, e.exports
    }
    var s, n
}),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (n) {
        "use strict";

        function i(m) {
            return function (t) {
                var e, i, s, n, o, a, r = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (r)
                    for (var l = 0, h = r.length; l < h; ++l) {
                        var d = r[l].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                            c = (o = d[0], a = o.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(a)),
                            u = d[1] || "",
                            p = d[3] || "",
                            f = null,
                            d = d[2];
                        g.hasOwnProperty(d) && (f = g[d], f = Number(m[f])), null !== f && ("!" === u && (i = f, n = s = void 0, s = "s", n = "", (e = p) && (s = 1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? e[0] : (n = e[0], e[1])), f = 1 < Math.abs(i) ? s : n), "" === u && f < 10 && (f = "0" + f.toString()), t = t.replace(c, f.toString()))
                    }
                return t.replace(/%%/, "%")
            }
        }
        var o = [],
            e = [],
            s = {
                precision: 100,
                elapse: !1,
                defer: !1
            };
        e.push(/^[0-9]*$/.source), e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), e = new RegExp(e.join("|"));

        function a(t, e, i) {
            this.el = t, this.$el = n(t), this.interval = null, this.offset = {}, this.options = n.extend({}, s), this.firstTick = !0, this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = n.extend({}, s, i)), this.setFinalDate(e), !1 === this.options.defer && this.start()
        }
        var g = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        };
        n.extend(a.prototype, {
            start: function () {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval(function () {
                    t.update.call(t)
                }, this.options.precision)
            },
            stop: function () {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function () {
                this.interval ? this.stop() : this.start()
            },
            pause: function () {
                this.stop()
            },
            resume: function () {
                this.start()
            },
            remove: function () {
                this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function (t) {
                this.finalDate = function (t) {
                    if (t instanceof Date) return t;
                    if (String(t).match(e)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
                    throw new Error("Couldn't cast `" + t + "` to a date object.")
                }(t)
            },
            update: function () {
                if (0 !== this.$el.closest("html").length) {
                    var t = new Date,
                        e = this.finalDate.getTime() - t.getTime();
                    return e = Math.ceil(e / 1e3), e = !this.options.elapse && e < 0 ? 0 : Math.abs(e), this.totalSecsLeft === e || this.firstTick ? void(this.firstTick = !1) : (this.totalSecsLeft = e, this.elapsed = t >= this.finalDate, this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - t.getFullYear()),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                        totalMinutes: Math.floor(this.totalSecsLeft / 60),
                        totalSeconds: this.totalSecsLeft
                    }, void(this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))))
                }
                this.remove()
            },
            dispatchEvent: function (t) {
                var e = n.Event(t + ".countdown");
                e.finalDate = this.finalDate, e.elapsed = this.elapsed, e.offset = n.extend({}, this.offset), e.strftime = i(this.offset), this.$el.trigger(e)
            }
        }), n.fn.countdown = function () {
            var s = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var t, e, i = n(this).data("countdown-instance");
                void 0 !== i ? (t = o[i], e = s[0], a.prototype.hasOwnProperty(e) ? t[e].apply(t, s.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (t.setFinalDate.call(t, e), t.start()) : n.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))) : new a(this, s[0], s[1])
            })
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    s = i[t] = i[t] || [];
                return -1 == s.indexOf(e) && s.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var s = i.indexOf(e);
                return -1 != s && i.splice(s, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                    var o = i[n];
                    s && s[o] && (this.off(t, o), delete s[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function () {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function (e, i) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (t) {
            return i(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function o(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function a(t, e, i) {
            if (!(this instanceof a)) return new a(t, e, i);
            var s, n = t;
            return "string" == typeof t && (n = document.querySelectorAll(t)), n ? (this.elements = (s = n, Array.isArray(s) ? s : "object" == typeof s && "number" == typeof s.length ? h.call(s) : [s]), this.options = o({}, this.options), "function" == typeof e ? i = e : o(this.options, e), i && this.on("always", i), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (n || t))
        }

        function i(t) {
            this.img = t
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var r = e.jQuery,
            l = e.console,
            h = Array.prototype.slice;
        (a.prototype = Object.create(t.prototype)).options = {}, a.prototype.getImages = function () {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, a.prototype.addElementImages = function (t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && d[e]) {
                for (var i = t.querySelectorAll("img"), s = 0; s < i.length; s++) {
                    var n = i[s];
                    this.addImage(n)
                }
                if ("string" == typeof this.options.background)
                    for (var o = t.querySelectorAll(this.options.background), s = 0; s < o.length; s++) {
                        var a = o[s];
                        this.addElementBackgroundImages(a)
                    }
            }
        };
        var d = {
            1: !0,
            9: !0,
            11: !0
        };
        return a.prototype.addElementBackgroundImages = function (t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(e.backgroundImage); null !== s;) {
                    var n = s && s[2];
                    n && this.addBackground(n, t), s = i.exec(e.backgroundImage)
                }
        }, a.prototype.addImage = function (t) {
            var e = new i(t);
            this.images.push(e)
        }, a.prototype.addBackground = function (t, e) {
            var i = new s(t, e);
            this.images.push(i)
        }, a.prototype.check = function () {
            function e(t, e, i) {
                setTimeout(function () {
                    s.progress(t, e, i)
                })
            }
            var s = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check()
            }) : void this.complete()
        }, a.prototype.progress = function (t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, a.prototype.complete = function () {
            var t, e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred && (t = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[t](this))
        }, (i.prototype = Object.create(t.prototype)).check = function () {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, i.prototype.getIsImageComplete = function () {
            return this.img.complete && this.img.naturalWidth
        }, i.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, i.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, i.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, i.prototype.unbindEvents = function () {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, (s.prototype = Object.create(i.prototype)).check = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, (a.makeJQueryPlugin = function (t) {
            (t = t || e.jQuery) && ((r = t).fn.imagesLoaded = function (t, e) {
                return new a(this, t, e).jqDeferred.promise(r(this))
            })
        })(), a
    }),
    function (e) {
        "undefined" != typeof jQuery && jQuery || "function" != typeof define || !define.amd ? "undefined" != typeof jQuery && jQuery || "object" != typeof exports ? e(jQuery, document, window, navigator) : e(require("jquery"), document, window, navigator) : define(["jquery"], function (t) {
            return e(t, document, window, navigator)
        })
    }(function (l, h, d, t, c) {
        "use strict";
        var e, i, s = 0,
            n = (i = /msie\s\d+/i, 0 < (e = t.userAgent).search(i) && i.exec(e).toString().split(" ")[1] < 9 && (l("html").addClass("lt-ie9"), !0));

        function o(t, e, i) {
            this.VERSION = "2.3.1", this.input = t, this.plugin_count = i, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, e = e || {}, this.$cache = {
                win: l(d),
                body: l(h.body),
                input: l(t),
                cont: null,
                rs: null,
                min: null,
                max: null,
                from: null,
                to: null,
                single: null,
                bar: null,
                line: null,
                s_single: null,
                s_from: null,
                s_to: null,
                shad_single: null,
                shad_from: null,
                shad_to: null,
                edge: null,
                grid: null,
                grid_labels: []
            }, this.coords = {
                x_gap: 0,
                x_pointer: 0,
                w_rs: 0,
                w_rs_old: 0,
                w_handle: 0,
                p_gap: 0,
                p_gap_left: 0,
                p_gap_right: 0,
                p_step: 0,
                p_pointer: 0,
                p_handle: 0,
                p_single_fake: 0,
                p_single_real: 0,
                p_from_fake: 0,
                p_from_real: 0,
                p_to_fake: 0,
                p_to_real: 0,
                p_bar_x: 0,
                p_bar_w: 0,
                grid_gap: 0,
                big_num: 0,
                big: [],
                big_w: [],
                big_p: [],
                big_x: []
            }, this.labels = {
                w_min: 0,
                w_max: 0,
                w_from: 0,
                w_to: 0,
                w_single: 0,
                p_min: 0,
                p_max: 0,
                p_from_fake: 0,
                p_from_left: 0,
                p_to_fake: 0,
                p_to_left: 0,
                p_single_fake: 0,
                p_single_left: 0
            };
            var s, n, o = this.$cache.input,
                a = o.prop("value"),
                r = {
                    skin: "flat",
                    type: "single",
                    min: 10,
                    max: 100,
                    from: null,
                    to: null,
                    step: 1,
                    min_interval: 0,
                    max_interval: 0,
                    drag_interval: !1,
                    values: [],
                    p_values: [],
                    from_fixed: !1,
                    from_min: null,
                    from_max: null,
                    from_shadow: !1,
                    to_fixed: !1,
                    to_min: null,
                    to_max: null,
                    to_shadow: !1,
                    prettify_enabled: !0,
                    prettify_separator: " ",
                    prettify: null,
                    force_edges: !1,
                    keyboard: !0,
                    grid: !1,
                    grid_margin: !0,
                    grid_num: 4,
                    grid_snap: !1,
                    hide_min_max: !1,
                    hide_from_to: !1,
                    prefix: "",
                    postfix: "",
                    max_postfix: "",
                    decorate_both: !0,
                    values_separator: " — ",
                    input_values_separator: ";",
                    disable: !1,
                    block: !1,
                    extra_classes: "",
                    scope: null,
                    onStart: null,
                    onChange: null,
                    onFinish: null,
                    onUpdate: null
                };
            for (n in "INPUT" !== o[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", o[0]), (s = {
                skin: o.data("skin"),
                type: o.data("type"),
                min: o.data("min"),
                max: o.data("max"),
                from: o.data("from"),
                to: o.data("to"),
                step: o.data("step"),
                min_interval: o.data("minInterval"),
                max_interval: o.data("maxInterval"),
                drag_interval: o.data("dragInterval"),
                values: o.data("values"),
                from_fixed: o.data("fromFixed"),
                from_min: o.data("fromMin"),
                from_max: o.data("fromMax"),
                from_shadow: o.data("fromShadow"),
                to_fixed: o.data("toFixed"),
                to_min: o.data("toMin"),
                to_max: o.data("toMax"),
                to_shadow: o.data("toShadow"),
                prettify_enabled: o.data("prettifyEnabled"),
                prettify_separator: o.data("prettifySeparator"),
                force_edges: o.data("forceEdges"),
                keyboard: o.data("keyboard"),
                grid: o.data("grid"),
                grid_margin: o.data("gridMargin"),
                grid_num: o.data("gridNum"),
                grid_snap: o.data("gridSnap"),
                hide_min_max: o.data("hideMinMax"),
                hide_from_to: o.data("hideFromTo"),
                prefix: o.data("prefix"),
                postfix: o.data("postfix"),
                max_postfix: o.data("maxPostfix"),
                decorate_both: o.data("decorateBoth"),
                values_separator: o.data("valuesSeparator"),
                input_values_separator: o.data("inputValuesSeparator"),
                disable: o.data("disable"),
                block: o.data("block"),
                extra_classes: o.data("extraClasses")
            }).values = s.values && s.values.split(","), s) s.hasOwnProperty(n) && (s[n] !== c && "" !== s[n] || delete s[n]);
            a !== c && "" !== a && ((a = a.split(s.input_values_separator || e.input_values_separator || ";"))[0] && a[0] == +a[0] && (a[0] = +a[0]), a[1] && a[1] == +a[1] && (a[1] = +a[1]), e && e.values && e.values.length ? (r.from = a[0] && e.values.indexOf(a[0]), r.to = a[1] && e.values.indexOf(a[1])) : (r.from = a[0] && +a[0], r.to = a[1] && +a[1])), l.extend(r, e), l.extend(r, s), this.options = r, this.update_check = {}, this.validate(), this.result = {
                input: this.$cache.input,
                slider: null,
                min: this.options.min,
                max: this.options.max,
                from: this.options.from,
                from_percent: 0,
                from_value: null,
                to: this.options.to,
                to_percent: 0,
                to_value: null
            }, this.init()
        }
        Function.prototype.bind || (Function.prototype.bind = function (s) {
            var n = this,
                o = [].slice;
            if ("function" != typeof n) throw new TypeError;
            var a = o.call(arguments, 1),
                r = function () {
                    if (this instanceof r) {
                        var t = function () {};
                        t.prototype = n.prototype;
                        var e = new t,
                            i = n.apply(e, a.concat(o.call(arguments)));
                        return Object(i) === i ? i : e
                    }
                    return n.apply(s, a.concat(o.call(arguments)))
                };
            return r
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
            var i;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var s = Object(this),
                n = s.length >>> 0;
            if (0 == n) return -1;
            var o = +e || 0;
            if (Math.abs(o) === 1 / 0 && (o = 0), n <= o) return -1;
            for (i = Math.max(0 <= o ? o : n - Math.abs(o), 0); i < n;) {
                if (i in s && s[i] === t) return i;
                i++
            }
            return -1
        }), o.prototype = {
            init: function (t) {
                this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
            },
            append: function () {
                var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
                this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
            },
            setTopHandler: function () {
                var t = this.options.min,
                    e = this.options.max,
                    i = this.options.from,
                    s = this.options.to;
                t < i && s === e ? this.$cache.s_from.addClass("type_last") : s < e && this.$cache.s_to.addClass("type_last")
            },
            changeLevel: function (t) {
                switch (t) {
                    case "single":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                        break;
                    case "from":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                }
            },
            appendDisableMask: function () {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
            },
            removeDisableMask: function () {
                this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
            },
            remove: function () {
                this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), n && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
            },
            bindEvents: function () {
                this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), n && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
            },
            pointerFocus: function (t) {
                var e, i;
                this.target || (e = (i = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, e += i.width() / 2 - 1, this.pointerClick("single", {
                    preventDefault: function () {},
                    pageX: e
                }))
            },
            pointerMove: function (t) {
                var e;
                this.dragging && (e = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX, this.coords.x_pointer = e - this.coords.x_gap, this.calc())
            },
            pointerUp: function (t) {
                this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, n && l("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (l.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
            },
            pointerDown: function (t, e) {
                e.preventDefault();
                var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                2 !== e.button && ("both" === t && this.setTempMinInterval(), t = t || this.target || "from", this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = i - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), n && l("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
            },
            pointerClick: function (t, e) {
                e.preventDefault();
                var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
            },
            key: function (t, e) {
                if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                    switch (e.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            e.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            e.preventDefault(), this.moveByKey(!0)
                    }
                    return !0
                }
            },
            moveByKey: function (t) {
                var e = this.coords.p_pointer,
                    i = (this.options.max - this.options.min) / 100,
                    i = this.options.step / i;
                t ? e += i : e -= i, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
            },
            setMinMax: function () {
                if (this.options) {
                    if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void(this.$cache.max[0].style.display = "none");
                    var t, e;
                    this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (t = this._prettify(this.options.min), e = this._prettify(this.options.max), this.result.min_pretty = t, this.result.max_pretty = e, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
                }
            },
            setTempMinInterval: function () {
                var t = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
            },
            restoreOriginalMinInterval: function () {
                null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
            },
            calc: function (t) {
                if (this.options && (this.calc_count++, 10 !== this.calc_count && !t || (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                    this.calcPointerPercent();
                    var e = this.getHandleX();
                    switch ("both" === this.target && (this.coords.p_gap = 0, e = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(e)), this.target) {
                        case "base":
                            var i = (this.options.max - this.options.min) / 100,
                                s = (this.result.from - this.options.min) / i,
                                n = (this.result.to - this.options.min) / i;
                            this.coords.p_single_real = this.toFixed(s), this.coords.p_from_real = this.toFixed(s), this.coords.p_to_real = this.toFixed(n), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            e = this.toFixed(e + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var o = this.convertToRealPercent(e),
                                a = this.result.from_percent,
                                r = this.result.to_percent - a,
                                l = r / 2,
                                h = o - l,
                                d = o + l;
                            h < 0 && (d = (h = 0) + r), 100 < d && (h = (d = 100) - r), this.coords.p_from_real = this.calcWithStep(h), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(d), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                    }
                    "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                }
            },
            calcPointerPercent: function () {
                this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
            },
            convertToRealPercent: function (t) {
                return t / (100 - this.coords.p_handle) * 100
            },
            convertToFakePercent: function (t) {
                return t / 100 * (100 - this.coords.p_handle)
            },
            getHandleX: function () {
                var t = 100 - this.coords.p_handle,
                    e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return e < 0 ? e = 0 : t < e && (e = t), e
            },
            calcHandlePercent: function () {
                "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
            },
            chooseHandle: function (t) {
                return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
            },
            calcMinMax: function () {
                this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
            },
            calcLabels: function () {
                this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
            },
            updateScene: function () {
                this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
            },
            drawHandles: function () {
                this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw || (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", this.old_from === this.result.from && !this.force_redraw || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), this.old_to === this.result.to && !this.force_redraw || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
            },
            drawLabels: function () {
                var t, e, i, s, n, o, a, r, l, h, d;
                this.options && (o = this.options.values.length, a = this.options.p_values, this.options.hide_from_to || ("single" === this.options.type ? (t = o ? this.decorate(a[this.result.from]) : (s = this._prettify(this.result.from), this.decorate(s, this.result.from)), this.$cache.single.html(t), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible") : (i = o ? (this.options.decorate_both ? (t = this.decorate(a[this.result.from]), t += this.options.values_separator, t += this.decorate(a[this.result.to])) : t = this.decorate(a[this.result.from] + this.options.values_separator + a[this.result.to]), e = this.decorate(a[this.result.from]), this.decorate(a[this.result.to])) : (s = this._prettify(this.result.from), n = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(s, this.result.from), t += this.options.values_separator, t += this.decorate(n, this.result.to)) : t = this.decorate(s + this.options.values_separator + n, this.result.to), e = this.decorate(s, this.result.from), this.decorate(n, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(e), this.$cache.to.html(i), this.calcLabels(), r = Math.min(this.labels.p_single_left, this.labels.p_from_left), l = this.labels.p_single_left + this.labels.p_single_fake, h = this.labels.p_to_left + this.labels.p_to_fake, d = Math.max(l, h), this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", d = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", h) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(l, h))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), r < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", d > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible")))
            },
            drawShadow: function () {
                var t, e, i, s, n = this.options,
                    o = this.$cache,
                    a = "number" == typeof n.from_min && !isNaN(n.from_min),
                    r = "number" == typeof n.from_max && !isNaN(n.from_max),
                    l = "number" == typeof n.to_min && !isNaN(n.to_min),
                    h = "number" == typeof n.to_max && !isNaN(n.to_max);
                "single" === n.type ? n.from_shadow && (a || r) ? (t = this.convertToPercent(a ? n.from_min : n.min), e = this.convertToPercent(r ? n.from_max : n.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, o.shad_single[0].style.display = "block", o.shad_single[0].style.left = t + "%", o.shad_single[0].style.width = e + "%") : o.shad_single[0].style.display = "none" : (n.from_shadow && (a || r) ? (t = this.convertToPercent(a ? n.from_min : n.min), e = this.convertToPercent(r ? n.from_max : n.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, o.shad_from[0].style.display = "block", o.shad_from[0].style.left = t + "%", o.shad_from[0].style.width = e + "%") : o.shad_from[0].style.display = "none", n.to_shadow && (l || h) ? (i = this.convertToPercent(l ? n.to_min : n.min), s = this.convertToPercent(h ? n.to_max : n.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), s = this.toFixed(s - this.coords.p_handle / 100 * s), i += this.coords.p_handle / 2, o.shad_to[0].style.display = "block", o.shad_to[0].style.left = i + "%", o.shad_to[0].style.width = s + "%") : o.shad_to[0].style.display = "none")
            },
            writeToInput: function () {
                "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
            },
            callOnStart: function () {
                this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
            },
            callOnChange: function () {
                this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
            },
            callOnFinish: function () {
                this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
            },
            callOnUpdate: function () {
                this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
            },
            toggleInput: function () {
                this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
            },
            convertToPercent: function (t, e) {
                var i, s = this.options.max - this.options.min,
                    n = s / 100;
                return s ? (i = (e ? t : t - this.options.min) / n, this.toFixed(i)) : (this.no_diapason = !0, 0)
            },
            convertToValue: function (t) {
                var e, i, s = this.options.min,
                    n = this.options.max,
                    o = s.toString().split(".")[1],
                    a = n.toString().split(".")[1],
                    r = 0,
                    l = 0;
                if (0 === t) return this.options.min;
                if (100 === t) return this.options.max;
                o && (r = e = o.length), a && (r = i = a.length), e && i && (r = i <= e ? e : i), s < 0 && (s = +(s + (l = Math.abs(s))).toFixed(r), n = +(n + l).toFixed(r));
                var h, d = (n - s) / 100 * t + s,
                    c = this.options.step.toString().split(".")[1],
                    d = c ? +d.toFixed(c.length) : (d /= this.options.step, +(d *= this.options.step).toFixed(0));
                return l && (d -= l), (h = c ? +d.toFixed(c.length) : this.toFixed(d)) < this.options.min ? h = this.options.min : h > this.options.max && (h = this.options.max), h
            },
            calcWithStep: function (t) {
                var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
                return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e)
            },
            checkMinInterval: function (t, e, i) {
                var s, n, o = this.options;
                return o.min_interval ? (s = this.convertToValue(t), n = this.convertToValue(e), "from" === i ? n - s < o.min_interval && (s = n - o.min_interval) : s - n < o.min_interval && (s = n + o.min_interval), this.convertToPercent(s)) : t
            },
            checkMaxInterval: function (t, e, i) {
                var s, n, o = this.options;
                return o.max_interval ? (s = this.convertToValue(t), n = this.convertToValue(e), "from" === i ? n - s > o.max_interval && (s = n - o.max_interval) : s - n > o.max_interval && (s = n + o.max_interval), this.convertToPercent(s)) : t
            },
            checkDiapason: function (t, e, i) {
                var s = this.convertToValue(t),
                    n = this.options;
                return "number" != typeof e && (e = n.min), "number" != typeof i && (i = n.max), s < e && (s = e), i < s && (s = i), this.convertToPercent(s)
            },
            toFixed: function (t) {
                return +t.toFixed(20)
            },
            _prettify: function (t) {
                return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t
            },
            prettify: function (t) {
                return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
            },
            checkEdges: function (t, e) {
                return this.options.force_edges && (t < 0 ? t = 0 : 100 - e < t && (t = 100 - e)), this.toFixed(t)
            },
            validate: function () {
                var t, e, i = this.options,
                    s = this.result,
                    n = i.values,
                    o = n.length;
                if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), o)
                    for (i.p_values = [], i.min = 0, i.max = o - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < o; e++) t = +n[e], t = isNaN(t) ? n[e] : (n[e] = t, this._prettify(t)), i.p_values.push(t);
                "number" == typeof i.from && !isNaN(i.from) || (i.from = i.min), "number" == typeof i.to && !isNaN(i.to) || (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max), i.to < i.min && (i.to = i.min), i.to > i.max && (i.to = i.max), this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)), i.from > i.to && (i.from = i.to), i.to < i.from && (i.to = i.from)), ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), s && (s.min !== i.min && (s.min = i.min), s.max !== i.max && (s.max = i.max), (s.from < s.min || s.from > s.max) && (s.from = i.from), (s.to < s.min || s.to > s.max) && (s.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
            },
            decorate: function (t, e) {
                var i = "",
                    s = this.options;
                return s.prefix && (i += s.prefix), i += t, s.max_postfix && (s.values.length && t === s.p_values[s.max] || e === s.max) && (i += s.max_postfix, s.postfix && (i += " ")), s.postfix && (i += s.postfix), i
            },
            updateFrom: function () {
                this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
            },
            updateTo: function () {
                this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
            },
            updateResult: function () {
                this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
            },
            appendGrid: function () {
                if (this.options.grid) {
                    var t, e, i, s, n, o, a = this.options,
                        r = a.max - a.min,
                        l = a.grid_num,
                        h = 0,
                        d = 4,
                        c = "";
                    for (this.calcGridMargin(), a.grid_snap && (l = r / a.step), 50 < l && (l = 50), i = this.toFixed(100 / l), 4 < l && (d = 3), 7 < l && (d = 2), 14 < l && (d = 1), 28 < l && (d = 0), t = 0; t < l + 1; t++) {
                        for (s = d, 100 < (h = this.toFixed(i * t)) && (h = 100), n = ((this.coords.big[t] = h) - i * (t - 1)) / (s + 1), e = 1; e <= s && 0 !== h; e++) c += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(h - n * e) + '%"></span>';
                        c += '<span class="irs-grid-pol" style="left: ' + h + '%"></span>', o = this.convertToValue(h), c += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + h + '%">' + (o = a.values.length ? a.p_values[o] : this._prettify(o)) + "</span>"
                    }
                    this.coords.big_num = Math.ceil(l + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(c), this.cacheGridLabels()
                }
            },
            cacheGridLabels: function () {
                for (var t, e = this.coords.big_num, i = 0; i < e; i++) t = this.$cache.grid.find(".js-grid-text-" + i), this.$cache.grid_labels.push(t);
                this.calcGridLabels()
            },
            calcGridLabels: function () {
                for (var t, e = [], i = [], s = this.coords.big_num, n = 0; n < s; n++) this.coords.big_w[n] = this.$cache.grid_labels[n].outerWidth(!1), this.coords.big_p[n] = this.toFixed(this.coords.big_w[n] / this.coords.w_rs * 100), this.coords.big_x[n] = this.toFixed(this.coords.big_p[n] / 2), e[n] = this.toFixed(this.coords.big[n] - this.coords.big_x[n]), i[n] = this.toFixed(e[n] + this.coords.big_p[n]);
                for (this.options.force_edges && (e[0] < -this.coords.grid_gap && (e[0] = -this.coords.grid_gap, i[0] = this.toFixed(e[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[s - 1] > 100 + this.coords.grid_gap && (i[s - 1] = 100 + this.coords.grid_gap, e[s - 1] = this.toFixed(i[s - 1] - this.coords.big_p[s - 1]), this.coords.big_x[s - 1] = this.toFixed(this.coords.big_p[s - 1] - this.coords.grid_gap))), this.calcGridCollision(2, e, i), this.calcGridCollision(4, e, i), n = 0; n < s; n++) t = this.$cache.grid_labels[n][0], this.coords.big_x[n] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[n] + "%")
            },
            calcGridCollision: function (t, e, i) {
                for (var s, n, o = this.coords.big_num, a = 0; a < o && !(o <= (s = a + t / 2)); a += t) n = this.$cache.grid_labels[s][0], i[a] <= e[s] ? n.style.visibility = "visible" : n.style.visibility = "hidden"
            },
            calcGridMargin: function () {
                this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
            },
            update: function (t) {
                this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = l.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
            },
            reset: function () {
                this.input && (this.updateResult(), this.update())
            },
            destroy: function () {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), l.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
            }
        }, l.fn.ionRangeSlider = function (t) {
            return this.each(function () {
                l.data(this, "ionRangeSlider") || l.data(this, "ionRangeSlider", new o(this, t, s++))
            })
        },
            function () {
                for (var o = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !d.requestAnimationFrame; ++e) d.requestAnimationFrame = d[t[e] + "RequestAnimationFrame"], d.cancelAnimationFrame = d[t[e] + "CancelAnimationFrame"] || d[t[e] + "CancelRequestAnimationFrame"];
                d.requestAnimationFrame || (d.requestAnimationFrame = function (t, e) {
                    var i = (new Date).getTime(),
                        s = Math.max(0, 16 - (i - o)),
                        n = d.setTimeout(function () {
                            t(i + s)
                        }, s);
                    return o = i + s, n
                }), d.cancelAnimationFrame || (d.cancelAnimationFrame = function (t) {
                    clearTimeout(t)
                })
            }()
    }),
    function (e, i) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
            return i(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
    }(window, function (t, e) {
        "use strict";

        function i(h, n, d) {
            (d = d || e || t.jQuery) && (n.prototype.option || (n.prototype.option = function (t) {
                d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t))
            }), d.fn[h] = function (t) {
                if ("string" != typeof t) return s = t, this.each(function (t, e) {
                    var i = d.data(e, h);
                    i ? (i.option(s), i._init()) : (i = new n(e, s), d.data(e, h, i))
                }), this;
                var e, o, a, r, l, s, i = c.call(arguments, 1);
                return a = i, l = "$()." + h + '("' + (o = t) + '")', (e = this).each(function (t, e) {
                    var i, s, n = d.data(e, h);
                    n ? (i = n[o]) && "_" != o.charAt(0) ? (s = i.apply(n, a), r = void 0 === r ? s : r) : u(l + " is not a valid method") : u(h + " not initialized. Cannot call methods, i.e. " + l)
                }), void 0 !== r ? r : e
            }, s(d))
        }

        function s(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var c = Array.prototype.slice,
            n = t.console,
            u = void 0 === n ? function () {} : function (t) {
                n.error(t)
            };
        return s(e || t.jQuery), i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    s = i[t] = i[t] || [];
                return -1 == s.indexOf(e) && s.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var s = i.indexOf(e);
                return -1 != s && i.splice(s, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                    var o = i[n];
                    s && s[o] && (this.off(t, o), delete s[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function () {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";

        function w(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function x(t) {
            var e = getComputedStyle(t);
            return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
        }

        function _(t) {
            if (C || (C = !0, (v = document.createElement("div")).style.width = "200px", v.style.padding = "1px 2px 3px 4px", v.style.borderStyle = "solid", v.style.borderWidth = "1px 2px 3px 4px", v.style.boxSizing = "border-box", (y = document.body || document.documentElement).appendChild(v), b = x(v), S = 200 == Math.round(w(b.width)), _.isBoxSizeOuter = S, y.removeChild(v)), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = x(t);
                if ("none" == e.display) return function () {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < E; e++) {
                        t[T[e]] = 0
                    }
                    return t
                }();
                var i = {};
                i.width = t.offsetWidth, i.height = t.offsetHeight;
                for (var s = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < E; n++) {
                    var o = T[n],
                        a = e[o],
                        r = parseFloat(a);
                    i[o] = isNaN(r) ? 0 : r
                }
                var l = i.paddingLeft + i.paddingRight,
                    h = i.paddingTop + i.paddingBottom,
                    d = i.marginLeft + i.marginRight,
                    c = i.marginTop + i.marginBottom,
                    u = i.borderLeftWidth + i.borderRightWidth,
                    p = i.borderTopWidth + i.borderBottomWidth,
                    f = s && S,
                    m = w(e.width);
                !1 !== m && (i.width = m + (f ? 0 : l + u));
                var g = w(e.height);
                return !1 !== g && (i.height = g + (f ? 0 : h + p)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (h + p), i.outerWidth = i.width + d, i.outerHeight = i.height + c, i
            }
            var v, y, b
        }
        var S, i = "undefined" == typeof console ? function () {} : function (t) {
                console.error(t)
            },
            T = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            E = T.length,
            C = !1;
        return _
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var i = function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var s = e[i] + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        return function (t, e) {
            return t[i](e)
        }
    }),
    function (e, i) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
            return i(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
    }(window, function (h, o) {
        var d = {
                extend: function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function (t, e) {
                    return (t % e + e) % e
                }
            },
            e = Array.prototype.slice;
        d.makeArray = function (t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
        }, d.removeFrom = function (t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, d.getParent = function (t, e) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, o(t, e)) return t
        }, d.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, d.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, d.filterFindElements = function (t, s) {
            t = d.makeArray(t);
            var n = [];
            return t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                    if (!s) return void n.push(t);
                    o(t, s) && n.push(t);
                    for (var e = t.querySelectorAll(s), i = 0; i < e.length; i++) n.push(e[i])
                }
            }), n
        }, d.debounceMethod = function (t, e, s) {
            s = s || 100;
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[o];
                clearTimeout(t);
                var e = arguments,
                    i = this;
                this[o] = setTimeout(function () {
                    n.apply(i, e), delete i[o]
                }, s)
            }
        }, d.docReady = function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, d.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var c = h.console;
        return d.htmlInit = function (r, l) {
            d.docReady(function () {
                var t = d.toDashed(l),
                    n = "data-" + t,
                    e = document.querySelectorAll("[" + n + "]"),
                    i = document.querySelectorAll(".js-" + t),
                    s = d.makeArray(e).concat(d.makeArray(i)),
                    o = n + "-options",
                    a = h.jQuery;
                s.forEach(function (e) {
                    var t, i = e.getAttribute(n) || e.getAttribute(o);
                    try {
                        t = i && JSON.parse(i)
                    } catch (t) {
                        return void(c && c.error("Error parsing " + n + " on " + e.className + ": " + t))
                    }
                    var s = new r(e, t);
                    a && a.data(e, l, s)
                })
            })
        }, d
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";

        function i(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var s = document.documentElement.style,
            n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            o = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            a = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [n],
            r = {
                transform: o,
                transition: n,
                transitionDuration: n + "Duration",
                transitionProperty: n + "Property",
                transitionDelay: n + "Delay"
            },
            l = i.prototype = Object.create(t.prototype);
        l.constructor = i, l._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function () {
            this.size = e(this.element)
        }, l.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                e[r[i] || i] = t[i]
            }
        }, l.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                s = t[e ? "left" : "right"],
                n = t[i ? "top" : "bottom"],
                o = parseFloat(s),
                a = parseFloat(n),
                r = this.layout.size; - 1 != s.indexOf("%") && (o = o / 100 * r.width), -1 != n.indexOf("%") && (a = a / 100 * r.height), o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = o, this.position.y = a
        }, l.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                s = this.layout._getOption("originTop"),
                n = i ? "paddingLeft" : "paddingRight",
                o = i ? "left" : "right",
                a = i ? "right" : "left",
                r = this.position.x + t[n];
            e[o] = this.getXValue(r), e[a] = "";
            var l = s ? "paddingTop" : "paddingBottom",
                h = s ? "top" : "bottom",
                d = s ? "bottom" : "top",
                c = this.position.y + t[l];
            e[h] = this.getYValue(c), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function (t, e) {
            this.getPosition();
            var i, s, n, o = this.position.x,
                a = this.position.y,
                r = t == this.position.x && e == this.position.y;
            this.setPosition(t, e), !r || this.isTransitioning ? (i = t - o, s = e - a, (n = {}).transform = this.getTranslate(i, s), this.transition({
                to: n,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })) : this.layoutPosition()
        }, l.getTranslate = function (t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
            this.position.x = parseFloat(t), this.position.y = parseFloat(e)
        }, l._nonTransition = function (t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function (t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                t.from && (this.css(t.from), this.element.offsetHeight, 0), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var h = "opacity," + o.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        });
        l.enableTransition = function () {
            var t;
            this.isTransitioning || (t = "number" == typeof (t = this.layout.options.transitionDuration) ? t + "ms" : t, this.css({
                transitionProperty: h,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(a, this, !1))
        }, l.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var d = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function (t) {
            var e, i;
            t.target === this.element && (e = this._transn, i = d[t.propertyName] || t.propertyName, delete e.ingProperties[i], function (t) {
                for (var e in t) return;
                return 1
            }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
        }, l.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function () {
            this.css(c)
        }, l.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function () {
            return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, l.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, l.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, i
    }),
    function (n, o) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, s) {
            return o(n, t, e, i, s)
        }) : "object" == typeof module && module.exports ? module.exports = o(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = o(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
    }(window, function (t, e, n, o, s) {
        "use strict";

        function a(t, e) {
            var i, s = o.getQueryElement(t);
            s ? (this.element = s, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e), i = ++d, this.element.outlayerGUID = i, (c[i] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (s || t))
        }

        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return (e.prototype = Object.create(t.prototype)).constructor = e
        }

        function i() {}
        var l = t.console,
            h = t.jQuery,
            d = 0,
            c = {};
        a.namespace = "outlayer", a.Item = s, a.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var u = a.prototype;
        o.extend(u, e.prototype), u.option = function (t) {
            o.extend(this.options, t)
        }, u._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, a.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, u._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, u.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, u._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, s = [], n = 0; n < e.length; n++) {
                var o = new i(e[n], this);
                s.push(o)
            }
            return s
        }, u._filterFindItemElements = function (t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, u.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element
            })
        }, u.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, u._init = u.layout, u._resetLayout = function () {
            this.getSize()
        }, u.getSize = function () {
            this.size = n(this.element)
        }, u._getMeasurement = function (t, e) {
            var i, s = this.options[t];
            s ? ("string" == typeof s ? i = this.element.querySelector(s) : s instanceof HTMLElement && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
        }, u.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, u._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored
            })
        }, u._layoutItems = function (t, i) {
            var s;
            this._emitCompleteOnItems("layout", t), t && t.length && (s = [], t.forEach(function (t) {
                var e = this._getItemLayoutPosition(t);
                e.item = t, e.isInstant = i || t.isLayoutInstant, s.push(e)
            }, this), this._processLayoutQueue(s))
        }, u._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, u._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, u.updateStagger = function () {
            var t = this.options.stagger;
            return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    i = e && e[1],
                    s = e && e[2];
                return i.length ? (i = parseFloat(i)) * (p[s] || 1) : 0
            }(t), this.stagger)
        }, u._positionItem = function (t, e, i, s, n) {
            s ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
        }, u._postLayout = function () {
            this.resizeContainer()
        }, u.resizeContainer = function () {
            var t;
            !this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }, u._getContainerSize = i, u._setContainerMeasure = function (t, e) {
            var i;
            void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
        }, u._emitCompleteOnItems = function (e, t) {
            function i() {
                o.dispatchEvent(e + "Complete", null, [t])
            }

            function s() {
                ++n == a && i()
            }
            var n, o = this,
                a = t.length;
            t && a ? (n = 0, t.forEach(function (t) {
                t.once(e, s)
            })) : i()
        }, u.dispatchEvent = function (t, e, i) {
            var s, n = e ? [e].concat(i) : i;
            this.emitEvent(t, n), h && (this.$element = this.$element || h(this.element), e ? ((s = h.Event(e)).type = t, this.$element.trigger(s, i)) : this.$element.trigger(t, i))
        }, u.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, u.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, u.stamp = function (t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, u.unstamp = function (t) {
            (t = this._find(t)) && t.forEach(function (t) {
                o.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, u._find = function (t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), o.makeArray(t)
        }, u._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, u._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, u._manageStamp = i, u._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                s = n(t);
            return {
                left: e.left - i.left - s.marginLeft,
                top: e.top - i.top - s.marginTop,
                right: i.right - e.right - s.marginRight,
                bottom: i.bottom - e.bottom - s.marginBottom
            }
        }, u.handleEvent = o.handleEvent, u.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, u.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, u.onresize = function () {
            this.resize()
        }, o.debounceMethod(a, "onresize", 100), u.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, u.needsResizeLayout = function () {
            var t = n(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, u.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, u.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, u.prepended = function (t) {
            var e, i = this._itemize(t);
            i.length && (e = this.items.slice(0), this.items = i.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(i, !0), this.reveal(i), this.layoutItems(e))
        }, u.reveal = function (t) {
            var i;
            this._emitCompleteOnItems("reveal", t), t && t.length && (i = this.updateStagger(), t.forEach(function (t, e) {
                t.stagger(e * i), t.reveal()
            }))
        }, u.hide = function (t) {
            var i;
            this._emitCompleteOnItems("hide", t), t && t.length && (i = this.updateStagger(), t.forEach(function (t, e) {
                t.stagger(e * i), t.hide()
            }))
        }, u.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, u.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, u.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, u.getItems = function (t) {
            t = o.makeArray(t);
            var i = [];
            return t.forEach(function (t) {
                var e = this.getItem(t);
                e && i.push(e)
            }, this), i
        }, u.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
                t.remove(), o.removeFrom(this.items, t)
            }, this)
        }, u.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete c[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
        }, a.data = function (t) {
            var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
            return e && c[e]
        }, a.create = function (t, e) {
            var i = r(a);
            return i.defaults = o.extend({}, a.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, a.compatOptions), i.namespace = t, i.data = a.data, i.Item = r(s), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
        };
        var p = {
            ms: 1,
            s: 1e3
        };
        return a.Item = s, a
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function (t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            s = i._create;
        i._create = function () {
            this.id = this.layout.itemGUID++, s.call(this), this.sortData = {}
        }, i.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var s = e[i];
                    this.sortData[i] = s(this.element, this)
                }
            }
        };
        var n = i.destroy;
        return i.destroy = function () {
            n.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function (e, i) {
        "use strict";

        function s(t) {
            (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var n = s.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
            n[t] = function () {
                return i.prototype[t].apply(this.isotope, arguments)
            }
        }), n.needsVerticalResizeLayout = function () {
            var t = e(this.isotope.element);
            return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
        }, n._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, n.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, n.getSegmentSize = function (t, e) {
            var i, s = t + e,
                n = "outer" + e;
            this._getMeasurement(s, n), this[s] || (i = this.getFirstItemSize(), this[s] = i && i[n] || this.isotope.size["inner" + e])
        }, n.getFirstItemSize = function () {
            var t = this.isotope.filteredItems[0];
            return t && t.element && e(t.element)
        }, n.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, s.modes = {}, s.create = function (t, e) {
            function i() {
                s.apply(this, arguments)
            }
            return (i.prototype = Object.create(n)).constructor = i, e && (i.options = e), s.modes[i.prototype.namespace = t] = i
        }, s
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, h) {
        var e = t.create("masonry");
        e.compatOptions.fitWidth = "isFitWidth";
        var i = e.prototype;
        return i._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, i.measureColumns = function () {
            var t, e;
            this.getContainerWidth(), this.columnWidth || (e = (t = this.items[0]) && t.element, this.columnWidth = e && h(e).outerWidth || this.containerWidth);
            var i = this.columnWidth += this.gutter,
                s = this.containerWidth + this.gutter,
                n = s / i,
                o = i - s % i,
                n = Math[o && o < 1 ? "round" : "floor"](n);
            this.cols = Math.max(n, 1)
        }, i.getContainerWidth = function () {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                e = h(t);
            this.containerWidth = e && e.innerWidth
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            for (var e = t.size.outerWidth % this.columnWidth, i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), i = Math.min(i, this.cols), s = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), n = {
                x: this.columnWidth * s.col,
                y: s.y
            }, o = s.y + t.size.outerHeight, a = i + s.col, r = s.col; r < a; r++) this.colYs[r] = o;
            return n
        }, i._getTopColPosition = function (t) {
            var e = this._getTopColGroup(t),
                i = Math.min.apply(Math, e);
            return {
                col: e.indexOf(i),
                y: i
            }
        }, i._getTopColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++) e[s] = this._getColGroupY(s, t);
            return e
        }, i._getColGroupY = function (t, e) {
            if (e < 2) return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i)
        }, i._getHorizontalColPosition = function (t, e) {
            var i = this.horizontalColIndex % this.cols,
                i = 1 < t && i + t > this.cols ? 0 : i,
                s = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = s ? i + t : this.horizontalColIndex, {
                col: i,
                y: this._getColGroupY(i, t)
            }
        }, i._manageStamp = function (t) {
            var e = h(t),
                i = this._getElementOffset(t),
                s = this._getOption("originLeft") ? i.left : i.right,
                n = s + e.outerWidth,
                o = Math.floor(s / this.columnWidth),
                o = Math.max(0, o),
                a = Math.floor(n / this.columnWidth);
            a -= n % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var r = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = o; l <= a; l++) this.colYs[l] = Math.max(r, this.colYs[l])
        }, i._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            s = i.prototype,
            n = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var o in e.prototype) n[o] || (s[o] = e.prototype[o]);
        var a = s.measureColumns;
        s.measureColumns = function () {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var r = s._getOption;
        return s._getOption = function (t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var s = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, s
        }, i._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            i = e.prototype;
        return i._resetLayout = function () {
            this.y = 0
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function () {
            return {
                height: this.y
            }
        }, e
    }),
    function (a, r) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (t, e, i, s, n, o) {
            return r(a, t, 0, i, s, n, o)
        }) : "object" == typeof module && module.exports ? module.exports = r(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : a.Isotope = r(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function (t, i, e, s, o, n, a) {
        var r = t.jQuery,
            h = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            d = i.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = n, d.LayoutMode = a;
        var l = d.prototype;
        l._create = function () {
            for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], a.modes) this._initLayoutMode(t)
        }, l.reloadItems = function () {
            this.itemGUID = 0, i.prototype.reloadItems.call(this)
        }, l._itemize = function () {
            for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
                t[e].id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, l._initLayoutMode = function (t) {
            var e = a.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, l.layout = function () {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, l._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, l.arrange = function (t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, l._init = l.arrange, l._hideReveal = function (t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, l._getIsInstant = function () {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e
        }, l._bindArrangeComplete = function () {
            function t() {
                e && i && s && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
            }
            var e, i, s, n = this;
            this.once("layoutComplete", function () {
                e = !0, t()
            }), this.once("hideComplete", function () {
                i = !0, t()
            }), this.once("revealComplete", function () {
                s = !0, t()
            })
        }, l._filter = function (t) {
            for (var e = (e = this.options.filter) || "*", i = [], s = [], n = [], o = this._getFilterTest(e), a = 0; a < t.length; a++) {
                var r, l = t[a];
                l.isIgnored || ((r = o(l)) && i.push(l), r && l.isHidden ? s.push(l) : r || l.isHidden || n.push(l))
            }
            return {
                matches: i,
                needReveal: s,
                needHide: n
            }
        }, l._getFilterTest = function (e) {
            return r && this.options.isJQueryFiltering ? function (t) {
                return r(t.element).is(e)
            } : "function" == typeof e ? function (t) {
                return e(t.element)
            } : function (t) {
                return s(t.element, e)
            }
        }, l.updateSortData = function (t) {
            var e = t ? (t = o.makeArray(t), this.getItems(t)) : this.items;
            this._getSorters(), this._updateItemsSortData(e)
        }, l._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = c(i)
            }
        }, l._updateItemsSortData = function (t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                t[i].updateSortData()
            }
        };
        var c = function (t) {
            if ("string" != typeof t) return t;
            var e, i, s = h(t).split(" "),
                n = s[0],
                o = n.match(/^\[(.+)\]$/),
                a = o && o[1],
                r = (i = n, (e = a) ? function (t) {
                    return t.getAttribute(e)
                } : function (t) {
                    var e = t.querySelector(i);
                    return e && e.textContent
                }),
                l = d.sortDataParsers[s[1]];
            return l ? function (t) {
                return t && l(r(t))
            } : function (t) {
                return t && r(t)
            }
        };
        d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            },
            parseFloat: function (t) {
                return parseFloat(t)
            }
        }, l._sort = function () {
            var t, e, a, r;
            this.options.sortBy && (t = o.makeArray(this.options.sortBy), this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)), a = this.sortHistory, r = this.options.sortAscending, e = function (t, e) {
                for (var i = 0; i < a.length; i++) {
                    var s = a[i],
                        n = t.sortData[s],
                        o = e.sortData[s];
                    if (o < n || n < o) return (o < n ? 1 : -1) * ((void 0 !== r[s] ? r[s] : r) ? 1 : -1)
                }
                return 0
            }, this.filteredItems.sort(e))
        }, l._getIsSameSortBy = function (t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, l._mode = function () {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, l._resetLayout = function () {
            i.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, l._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, l._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, l._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, l.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, l.appended = function (t) {
            var e, i = this.addItems(t);
            i.length && (e = this._filterRevealAdded(i), this.filteredItems = this.filteredItems.concat(e))
        }, l.prepended = function (t) {
            var e, i = this._itemize(t);
            i.length && (this._resetLayout(), this._manageStamps(), e = this._filterRevealAdded(i), this.layoutItems(this.filteredItems), this.filteredItems = e.concat(this.filteredItems), this.items = i.concat(this.items))
        }, l._filterRevealAdded = function (t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, l.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                for (var i, s = e.length, n = 0; n < s; n++) i = e[n], this.element.appendChild(i.element);
                var o = this._filter(e).matches;
                for (n = 0; n < s; n++) e[n].isLayoutInstant = !0;
                for (this.arrange(), n = 0; n < s; n++) delete e[n].isLayoutInstant;
                this.reveal(o)
            }
        };
        var u = l.remove;
        return l.remove = function (t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            u.call(this, t);
            for (var i = e && e.length, s = 0; i && s < i; s++) {
                var n = e[s];
                o.removeFrom(this.filteredItems, n)
            }
        }, l.shuffle = function () {
            for (var t = 0; t < this.items.length; t++) {
                this.items[t].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, l._noTransition = function (t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var s = t.apply(this, e);
            return this.options.transitionDuration = i, s
        }, l.getFilteredItemElements = function () {
            return this.filteredItems.map(function (t) {
                return t.element
            })
        }, d
    }),
    function (i) {
        var s = {};

        function n(t) {
            if (s[t]) return s[t].exports;
            var e = s[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
        }
        n.m = i, n.c = s, n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var s in e) n.d(i, s, function (t) {
                    return e[t]
                }.bind(null, s));
            return i
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 10)
    }([, , function (t, e) {
        t.exports = function (t) {
            "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
                "interactive" === document.readyState && t.call()
            }) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
        }
    }, function (i, t, e) {
        (function (t) {
            var e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
            i.exports = e
        }).call(this, e(4))
    }, function (t, e) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var s = function () {
            return this
        }();
        try {
            s = s || new Function("return this")()
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (s = window)
        }
        t.exports = s
    }, , , , , , function (t, e, i) {
        t.exports = i(11)
    }, function (t, e, i) {
        "use strict";
        i.r(e);
        var s = i(2),
            n = i.n(s),
            o = i(3),
            a = i(12);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var l, h, d = o.window.jarallax;
        o.window.jarallax = a.default, o.window.jarallax.noConflict = function () {
            return o.window.jarallax = d, this
        }, void 0 !== o.jQuery && ((l = function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            Array.prototype.unshift.call(e, this);
            var s = a.default.apply(o.window, e);
            return "object" !== r(s) ? s : this
        }).constructor = a.default.constructor, h = o.jQuery.fn.jarallax, o.jQuery.fn.jarallax = l, o.jQuery.fn.jarallax.noConflict = function () {
            return o.jQuery.fn.jarallax = h, this
        }), n()(function () {
            Object(a.default)(document.querySelectorAll("[data-jarallax]"))
        })
    }, function (t, e, i) {
        "use strict";
        i.r(e);
        var s = i(2),
            n = i.n(s),
            v = i(3);

        function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
            return s
        }

        function c(t) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
        }
        var a, y, u = v.window.navigator,
            r = -1 < u.userAgent.indexOf("MSIE ") || -1 < u.userAgent.indexOf("Trident/") || -1 < u.userAgent.indexOf("Edge/"),
            l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent),
            h = function () {
                for (var t = "transform WebkitTransform MozTransform".split(" "), e = document.createElement("div"), i = 0; i < t.length; i += 1)
                    if (e && void 0 !== e.style[t[i]]) return t[i];
                return !1
            }();

        function p() {
            y = l ? (!a && document.body && ((a = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(a)), (a ? a.clientHeight : 0) || v.window.innerHeight || document.documentElement.clientHeight) : v.window.innerHeight || document.documentElement.clientHeight
        }
        p(), v.window.addEventListener("resize", p), v.window.addEventListener("orientationchange", p), v.window.addEventListener("load", p), n()(function () {
            p()
        });
        var f = [];

        function m() {
            f.length && (f.forEach(function (t, e) {
                var i = t.instance,
                    s = t.oldData,
                    n = i.$item.getBoundingClientRect(),
                    o = {
                        width: n.width,
                        height: n.height,
                        top: n.top,
                        bottom: n.bottom,
                        wndW: v.window.innerWidth,
                        wndH: y
                    },
                    a = !s || s.wndW !== o.wndW || s.wndH !== o.wndH || s.width !== o.width || s.height !== o.height,
                    r = a || !s || s.top !== o.top || s.bottom !== o.bottom;
                f[e].oldData = o, a && i.onResize(), r && i.onScroll()
            }), v.window.requestAnimationFrame(m))
        }

        function g(t, e) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement)) ? t instanceof HTMLElement : t && "object" === c(t) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
            for (var i, s = t.length, n = 0, o = arguments.length, a = new Array(2 < o ? o - 2 : 0), r = 2; r < o; r++) a[r - 2] = arguments[r];
            for (; n < s; n += 1)
                if ("object" === c(e) || void 0 === e ? t[n].jarallax || (t[n].jarallax = new w(t[n], e)) : t[n].jarallax && (i = t[n].jarallax[e].apply(t[n].jarallax, a)), void 0 !== i) return i;
            return t
        }
        var b = 0,
            w = (o(x.prototype, [{
                key: "css",
                value: function (e, i) {
                    return "string" == typeof i ? v.window.getComputedStyle(e).getPropertyValue(i) : (i.transform && h && (i[h] = i.transform), Object.keys(i).forEach(function (t) {
                        e.style[t] = i[t]
                    }), e)
                }
            }, {
                key: "extend",
                value: function (i) {
                    for (var t = arguments.length, s = new Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) s[e - 1] = arguments[e];
                    return i = i || {}, Object.keys(s).forEach(function (e) {
                        s[e] && Object.keys(s[e]).forEach(function (t) {
                            i[t] = s[e][t]
                        })
                    }), i
                }
            }, {
                key: "getWindowData",
                value: function () {
                    return {
                        width: v.window.innerWidth || document.documentElement.clientWidth,
                        height: y,
                        y: document.documentElement.scrollTop
                    }
                }
            }, {
                key: "initImg",
                value: function () {
                    var t = this,
                        e = t.options.imgElement;
                    return e && "string" == typeof e && (e = t.$item.querySelector(e)), e instanceof Element || (t.options.imgSrc ? (e = new Image).src = t.options.imgSrc : e = null), e && (t.options.keepImg ? t.image.$item = e.cloneNode(!0) : (t.image.$item = e, t.image.$itemParent = e.parentNode), t.image.useImgTag = !0), !(!t.image.$item && (null === t.image.src && (t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", t.image.bgImage = t.css(t.$item, "background-image")), !t.image.bgImage || "none" === t.image.bgImage))
                }
            }, {
                key: "canInitParallax",
                value: function () {
                    return h && !this.options.disableParallax()
                }
            }, {
                key: "init",
                value: function () {
                    var t, e, i, s = this,
                        n = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: "none"
                        },
                        o = {};
                    s.options.keepImg || ((t = s.$item.getAttribute("style")) && s.$item.setAttribute("data-jarallax-original-styles", t), s.image.useImgTag && (e = s.image.$item.getAttribute("style")) && s.image.$item.setAttribute("data-jarallax-original-styles", e)), "static" === s.css(s.$item, "position") && s.css(s.$item, {
                        position: "relative"
                    }), "auto" === s.css(s.$item, "z-index") && s.css(s.$item, {
                        zIndex: 0
                    }), s.image.$container = document.createElement("div"), s.css(s.image.$container, n), s.css(s.image.$container, {
                        "z-index": s.options.zIndex
                    }), r && s.css(s.image.$container, {
                        opacity: .9999
                    }), s.image.$container.setAttribute("id", "jarallax-container-".concat(s.instanceID)), s.$item.appendChild(s.image.$container), s.image.useImgTag ? o = s.extend({
                        "object-fit": s.options.imgSize,
                        "object-position": s.options.imgPosition,
                        "font-family": "object-fit: ".concat(s.options.imgSize, "; object-position: ").concat(s.options.imgPosition, ";"),
                        "max-width": "none"
                    }, n, o) : (s.image.$item = document.createElement("div"), s.image.src && (o = s.extend({
                        "background-position": s.options.imgPosition,
                        "background-size": s.options.imgSize,
                        "background-repeat": s.options.imgRepeat,
                        "background-image": s.image.bgImage || 'url("'.concat(s.image.src, '")')
                    }, n, o))), "opacity" !== s.options.type && "scale" !== s.options.type && "scale-opacity" !== s.options.type && 1 !== s.options.speed || (s.image.position = "absolute"), "fixed" === s.image.position && (i = function (t) {
                        for (var e = []; null !== t.parentElement;) 1 === (t = t.parentElement).nodeType && e.push(t);
                        return e
                    }(s.$item).filter(function (t) {
                        var e = v.window.getComputedStyle(t),
                            i = e["-webkit-transform"] || e["-moz-transform"] || e.transform;
                        return i && "none" !== i || /(auto|scroll)/.test(e.overflow + e["overflow-y"] + e["overflow-x"])
                    }), s.image.position = i.length ? "absolute" : "fixed"), o.position = s.image.position, s.css(s.image.$item, o), s.image.$container.appendChild(s.image.$item), s.onResize(), s.onScroll(!0), s.options.onInit && s.options.onInit.call(s), "none" !== s.css(s.$item, "background-image") && s.css(s.$item, {
                        "background-image": "none"
                    }), s.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function () {
                    f.push({
                        instance: this
                    }), 1 === f.length && v.window.requestAnimationFrame(m)
                }
            }, {
                key: "removeFromParallaxList",
                value: function () {
                    var i = this;
                    f.forEach(function (t, e) {
                        t.instance.instanceID === i.instanceID && f.splice(e, 1)
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    var t = this;
                    t.removeFromParallaxList();
                    var e, i = t.$item.getAttribute("data-jarallax-original-styles");
                    t.$item.removeAttribute("data-jarallax-original-styles"), i ? t.$item.setAttribute("style", i) : t.$item.removeAttribute("style"), t.image.useImgTag && (e = t.image.$item.getAttribute("data-jarallax-original-styles"), t.image.$item.removeAttribute("data-jarallax-original-styles"), e ? t.image.$item.setAttribute("style", i) : t.image.$item.removeAttribute("style"), t.image.$itemParent && t.image.$itemParent.appendChild(t.image.$item)), t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles), t.image.$container && t.image.$container.parentNode.removeChild(t.image.$container), t.options.onDestroy && t.options.onDestroy.call(t), delete t.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function () {
                    var t, e, i, s, n;
                    "fixed" === this.image.position && (i = (e = (t = this).image.$container.getBoundingClientRect()).width, s = e.height, t.$clipStyles || (t.$clipStyles = document.createElement("style"), t.$clipStyles.setAttribute("type", "text/css"), t.$clipStyles.setAttribute("id", "jarallax-clip-".concat(t.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(t.$clipStyles)), n = "#jarallax-container-".concat(t.instanceID, " {\n           clip: rect(0 ").concat(i, "px ").concat(s, "px 0);\n           clip: rect(0, ").concat(i, "px, ").concat(s, "px, 0);\n        }"), t.$clipStyles.styleSheet ? t.$clipStyles.styleSheet.cssText = n : t.$clipStyles.innerHTML = n)
                }
            }, {
                key: "coverImage",
                value: function () {
                    var t, e = this,
                        i = e.image.$container.getBoundingClientRect(),
                        s = i.height,
                        n = e.options.speed,
                        o = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                        a = 0,
                        r = s;
                    return o && (n < 0 ? (a = n * Math.max(s, y), y < s && (a -= n * (s - y))) : a = n * (s + y), 1 < n ? r = Math.abs(a - y) : n < 0 ? r = a / n + Math.abs(a) : r += (y - s) * (1 - n), a /= 2), e.parallaxScrollDistance = a, t = o ? (y - r) / 2 : (s - r) / 2, e.css(e.image.$item, {
                        height: "".concat(r, "px"),
                        marginTop: "".concat(t, "px"),
                        left: "fixed" === e.image.position ? "".concat(i.left, "px") : "0",
                        width: "".concat(i.width, "px")
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: r,
                            marginTop: t
                        },
                        container: i
                    }
                }
            }, {
                key: "isVisible",
                value: function () {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function (t) {
                    var e, i, s, n, o, a, r, l, h, d, c = this,
                        u = c.$item.getBoundingClientRect(),
                        p = u.top,
                        f = u.height,
                        m = {},
                        g = u;
                    c.options.elementInViewport && (g = c.options.elementInViewport.getBoundingClientRect()), c.isElementInViewport = 0 <= g.bottom && 0 <= g.right && g.top <= y && g.left <= v.window.innerWidth, (t || c.isElementInViewport) && (e = Math.max(0, p), i = Math.max(0, f + p), s = Math.max(0, -p), n = Math.max(0, p + f - y), o = Math.max(0, f - (p + f - y)), a = Math.max(0, -p + y - f), r = 1 - (y - p) / (y + f) * 2, l = 1, f < y ? l = 1 - (s || n) / f : i <= y ? l = i / y : o <= y && (l = o / y), "opacity" !== c.options.type && "scale-opacity" !== c.options.type && "scroll-opacity" !== c.options.type || (m.transform = "translate3d(0,0,0)", m.opacity = l), "scale" !== c.options.type && "scale-opacity" !== c.options.type || (h = 1, c.options.speed < 0 ? h -= c.options.speed * l : h += c.options.speed * (1 - l), m.transform = "scale(".concat(h, ") translate3d(0,0,0)")), "scroll" !== c.options.type && "scroll-opacity" !== c.options.type || (d = c.parallaxScrollDistance * r, "absolute" === c.image.position && (d -= p), m.transform = "translate3d(0,".concat(d, "px,0)")), c.css(c.image.$item, m), c.options.onScroll && c.options.onScroll.call(c, {
                        section: u,
                        beforeTop: e,
                        beforeTopEnd: i,
                        afterTop: s,
                        beforeBottom: n,
                        beforeBottomEnd: o,
                        afterBottom: a,
                        visiblePercent: l,
                        fromViewportCenter: r
                    }))
                }
            }, {
                key: "onResize",
                value: function () {
                    this.coverImage(), this.clipContainer()
                }
            }]), x);

        function x(t, e) {
            ! function (t) {
                if (!(t instanceof x)) throw new TypeError("Cannot call a class as a function")
            }(this);
            var i = this;
            i.instanceID = b, b += 1, i.$item = t, i.defaults = {
                type: "scroll",
                speed: .5,
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                disableVideo: !1,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            var s, n, o = i.$item.dataset || {},
                a = {};
            Object.keys(o).forEach(function (t) {
                var e = t.substr(0, 1).toLowerCase() + t.substr(1);
                e && void 0 !== i.defaults[e] && (a[e] = o[t])
            }), i.options = i.extend({}, i.defaults, a, e), i.pureOptions = i.extend({}, i.options), Object.keys(i.options).forEach(function (t) {
                "true" === i.options[t] ? i.options[t] = !0 : "false" === i.options[t] && (i.options[t] = !1)
            }), i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))), "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)), i.options.disableParallax instanceof RegExp && (s = i.options.disableParallax, i.options.disableParallax = function () {
                return s.test(u.userAgent)
            }), "function" != typeof i.options.disableParallax && (i.options.disableParallax = function () {
                return !1
            }), "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)), i.options.disableVideo instanceof RegExp && (n = i.options.disableVideo, i.options.disableVideo = function () {
                return n.test(u.userAgent)
            }), "function" != typeof i.options.disableVideo && (i.options.disableVideo = function () {
                return !1
            });
            var r, l, h = i.options.elementInViewport;
            h && "object" === c(h) && void 0 !== h.length && (l = 1, h = (function (t) {
                if (Array.isArray(t)) return t
            }(r = h) || function (t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var i = [],
                        s = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var a, r = t[Symbol.iterator](); !(s = (a = r.next()).done) && (i.push(a.value), !e || i.length !== e); s = !0);
                    } catch (t) {
                        n = !0, o = t
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return i
                }
            }(r, l) || function (t, e) {
                if (t) {
                    if ("string" == typeof t) return d(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? d(t, e) : void 0
                }
            }(r, l) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0]), h instanceof Element || (h = null), i.options.elementInViewport = h, i.image = {
                src: i.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: /iPad|iPhone|iPod|Android/.test(u.userAgent) ? "absolute" : "fixed"
            }, i.initImg() && i.canInitParallax() && i.init()
        }
        g.constructor = w, e.default = g
    }]),
    function (h) {
        "use strict";
        h.ajaxChimp = {
            responses: {
                "We have sent you a confirmation email": 0,
                "Please enter a value": 1,
                "An email address must contain a single @": 2,
                "The domain portion of the email address is invalid (the portion after the @: )": 3,
                "The username portion of the email address is invalid (the portion before the @: )": 4,
                "This email address looks fake or invalid. Please enter a real email address": 5
            },
            translations: {
                en: null
            },
            init: function (t, e) {
                h(t).ajaxChimp(e)
            }
        }, h.fn.ajaxChimp = function (i) {
            return h(this).each(function (t, e) {
                var n = h(e),
                    o = n.find("input[type=email]"),
                    a = n.find("label[for=" + o.attr("id") + "]"),
                    r = h.extend({
                        url: n.attr("action"),
                        language: "en"
                    }, i),
                    l = r.url.replace("/post?", "/post-json?").concat("&c=?");
                n.attr("novalidate", "true"), o.attr("name", "EMAIL"), n.submit(function () {
                    var i;
                    var s = {},
                        t = n.serializeArray();
                    h.each(t, function (t, e) {
                        s[e.name] = e.value
                    }), h.ajax({
                        url: l,
                        data: s,
                        success: function (e) {
                            if ("success" === e.result) i = "We have sent you a confirmation email", a.removeClass("error").addClass("valid"), o.removeClass("error").addClass("valid");
                            else {
                                o.removeClass("valid").addClass("error"), a.removeClass("valid").addClass("error");
                                try {
                                    var t = e.msg.split(" - ", 2);
                                    i = void 0 === t[1] ? e.msg : parseInt(t[0], 10).toString() === t[0] ? (t[0], t[1]) : e.msg
                                } catch (t) {
                                    i = e.msg
                                }
                            }
                            "en" !== r.language && void 0 !== h.ajaxChimp.responses[i] && h.ajaxChimp.translations && h.ajaxChimp.translations[r.language] && h.ajaxChimp.translations[r.language][h.ajaxChimp.responses[i]] && (i = h.ajaxChimp.translations[r.language][h.ajaxChimp.responses[i]]), a.html(i), a.show(2e3), r.callback && r.callback(e)
                        },
                        dataType: "jsonp",
                        error: function (t, e) {
                            console.log("mailchimp ajax submit error: " + e)
                        }
                    });
                    var e = "Submitting...";
                    return "en" !== r.language && h.ajaxChimp.translations && h.ajaxChimp.translations[r.language] && h.ajaxChimp.translations[r.language].submit && (e = h.ajaxChimp.translations[r.language].submit), a.html(e).show(2e3), !1
                })
            }), this
        }
    }(jQuery),
    function (c) {
        c.fn.animatedHeadline = function (t) {
            function a(t) {
                var e, i, s = r(t);
                t.parents(".ah-headline").hasClass("type") ? ((e = t.parent(".ah-words-wrapper")).addClass("selected").removeClass("waiting"), setTimeout(function () {
                    e.removeClass("selected"), t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                }, h.selectionDuration), setTimeout(function () {
                    n(s, h.typeLettersDelay)
                }, h.typeAnimationDelay)) : t.parents(".ah-headline").hasClass("letters") ? (i = t.children("i").length >= s.children("i").length, function t(e, i, s, n) {
                    {
                        var o;
                        e.removeClass("in").addClass("out"), e.is(":last-child") ? s && setTimeout(function () {
                            a(r(i))
                        }, h.animationDelay) : setTimeout(function () {
                            t(e.next(), i, s, n)
                        }, n), e.is(":last-child") && c("html").hasClass("no-csstransitions") && (o = r(i), l(i, o))
                    }
                }(t.find("i").eq(0), t, i, h.lettersDelay), o(s.find("i").eq(0), s, i, h.lettersDelay)) : t.parents(".ah-headline").hasClass("clip") ? t.parents(".ah-words-wrapper").animate({
                    width: "2px"
                }, h.revealDuration, function () {
                    l(t, s), n(s)
                }) : t.parents(".ah-headline").hasClass("loading-bar") ? (t.parents(".ah-words-wrapper").removeClass("is-loading"), l(t, s), setTimeout(function () {
                    a(s)
                }, h.barAnimationDelay), setTimeout(function () {
                    t.parents(".ah-words-wrapper").addClass("is-loading")
                }, h.barWaiting)) : (l(t, s), setTimeout(function () {
                    a(s)
                }, h.animationDelay))
            }

            function n(t, e) {
                t.parents(".ah-headline").hasClass("type") ? (o(t.find("i").eq(0), t, !1, e), t.addClass("is-visible").removeClass("is-hidden")) : t.parents(".ah-headline").hasClass("clip") && t.parents(".ah-words-wrapper").animate({
                    width: t.width() + 10
                }, h.revealDuration, function () {
                    setTimeout(function () {
                        a(t)
                    }, h.revealAnimationDelay)
                })
            }

            function o(t, e, i, s) {
                t.addClass("in").removeClass("out"), t.is(":last-child") ? (e.parents(".ah-headline").hasClass("type") && setTimeout(function () {
                    e.parents(".ah-words-wrapper").addClass("waiting")
                }, 200), i || setTimeout(function () {
                    a(e)
                }, h.animationDelay)) : setTimeout(function () {
                    o(t.next(), e, i, s)
                }, s)
            }

            function r(t) {
                return t.is(":last-child") ? t.parent().children().eq(0) : t.next()
            }

            function l(t, e) {
                t.removeClass("is-visible").addClass("is-hidden"), e.removeClass("is-hidden").addClass("is-visible")
            }
            var h = c.extend({
                    animationType: "rotate-1",
                    animationDelay: 2500,
                    barAnimationDelay: 3800,
                    barWaiting: 800,
                    lettersDelay: 50,
                    typeLettersDelay: 150,
                    selectionDuration: 500,
                    typeAnimationDelay: 1300,
                    revealDuration: 600,
                    revealAnimationDelay: 1500
                }, t),
                d = h.animationDelay;
            this.each(function () {
                var t, e, s, n, o = c(this);
                h.animationType && ("type" == h.animationType || "rotate-2" == h.animationType || "rotate-3" == h.animationType || "scale" == h.animationType ? o.find(".ah-headline").addClass("letters " + h.animationType) : "clip" == h.animationType ? o.find(".ah-headline").addClass(h.animationType + " is-full-width") : o.find(".ah-headline").addClass(h.animationType)), c(".ah-headline.letters").find("b").each(function () {
                    var t = c(this),
                        e = t.text().split(""),
                        s = t.hasClass("is-visible");
                    for (i in e) 0 < t.parents(".rotate-2").length && (e[i] = "<em>" + e[i] + "</em>"), e[i] = s ? '<i class="in">' + e[i] + "</i>" : "<i>" + e[i] + "</i>";
                    var n = e.join("");
                    t.html(n).css("opacity", 1)
                }), o.hasClass("loading-bar") ? (d = h.barAnimationDelay, setTimeout(function () {
                    o.find(".ah-words-wrapper").addClass("is-loading")
                }, h.barWaiting)) : o.hasClass("clip") ? (e = (t = o.find(".ah-words-wrapper")).width() + 10, t.css("width", e)) : o.find(".ah-headline").hasClass("type") || (s = o.find(".ah-words-wrapper b"), n = 0, s.each(function () {
                    var t = c(this).width();
                    n < t && (n = t)
                }), o.find(".ah-words-wrapper").css("width", n)), setTimeout(function () {
                    a(o.find(".is-visible").eq(0))
                }, d)
            })
        }
    }(jQuery),
    function (i) {
        "use strict";
        i.fn.counterUp = function (t) {
            var e = i.extend({
                time: 400,
                delay: 10
            }, t);
            return this.each(function () {
                var l = i(this),
                    h = e;
                l.waypoint(function () {
                    for (var t = [], e = h.time / h.delay, i = l.text(), s = /[0-9]+,[0-9]+/.test(i), i = i.replace(/,/g, ""), n = (/^[0-9]+$/.test(i), /^[0-9]+\.[0-9]+$/.test(i)), o = n ? (i.split(".")[1] || []).length : 0, a = e; 1 <= a; a--) {
                        var r = parseInt(i / e * a);
                        if (n && (r = parseFloat(i / e * a).toFixed(o)), s)
                            for (;
                                /(\d+)(\d{3})/.test(r.toString());) r = r.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        t.unshift(r)
                    }
                    l.data("counterup-nums", t), l.text("0");
                    l.data("counterup-func", function () {
                        l.text(l.data("counterup-nums").shift()), l.data("counterup-nums").length ? setTimeout(l.data("counterup-func"), h.delay) : (l.data("counterup-nums"), l.data("counterup-nums", null), l.data("counterup-func", null))
                    }), setTimeout(l.data("counterup-func"), h.delay)
                }, {
                    offset: "100%",
                    triggerOnce: !0
                })
            })
        }
    }(jQuery),
    function (i) {
        "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function (t, e) {
            return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), i(e), e
        } : i(jQuery)
    }(function (d) {
        function o(t, e) {
            this.settings = e, this.checkSettings(), this.imgAnalyzerTimeout = null, this.entries = null, this.buildingRow = {
                entriesBuff: [],
                width: 0,
                height: 0,
                aspectRatio: 0
            }, this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.yield = {
                every: 2,
                flushed: 0
            }, this.border = 0 <= e.border ? e.border : e.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges(), this.offY = this.border, this.rows = 0, this.spinner = {
                phase: 0,
                timeSlot: 150,
                $el: d('<div class="jg-spinner"><span></span><span></span><span></span></div>'),
                intervalId: null
            }, this.scrollBarOn = !1, this.checkWidthIntervalId = null, this.galleryWidth = t.width(), this.$gallery = t
        }
        o.prototype.getSuffix = function (t, e) {
            for (var i = e < t ? t : e, s = 0; s < this.suffixRanges.length; s++)
                if (i <= this.suffixRanges[s]) return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];
            return this.settings.sizeRangeSuffixes[this.suffixRanges[s - 1]]
        }, o.prototype.removeSuffix = function (t, e) {
            return t.substring(0, t.length - e.length)
        }, o.prototype.endsWith = function (t, e) {
            return -1 !== t.indexOf(e, t.length - e.length)
        }, o.prototype.getUsedSuffix = function (t) {
            for (var e in this.settings.sizeRangeSuffixes)
                if (this.settings.sizeRangeSuffixes.hasOwnProperty(e)) {
                    if (0 === this.settings.sizeRangeSuffixes[e].length) continue;
                    if (this.endsWith(t, this.settings.sizeRangeSuffixes[e])) return this.settings.sizeRangeSuffixes[e]
                } return ""
        }, o.prototype.newSrc = function (t, e, i, s) {
            var n, o, a;
            return this.settings.thumbnailPath ? a = this.settings.thumbnailPath(t, e, i, s) : (o = null !== (n = t.match(this.settings.extension)) ? n[0] : "", a = t.replace(this.settings.extension, ""), a = this.removeSuffix(a, this.getUsedSuffix(a)), a += this.getSuffix(e, i) + o), a
        }, o.prototype.showImg = function (t, e) {
            this.settings.cssAnimation ? (t.addClass("jg-entry-visible"), e && e()) : (t.stop().fadeTo(this.settings.imagesAnimationDuration, 1, e), t.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration, 1, e))
        }, o.prototype.extractImgSrcFromImage = function (t) {
            var e = t.data("safe-src"),
                i = "data-safe-src";
            return void 0 === e && (e = t.attr("src"), i = "src"), t.data("jg.originalSrc", e), t.data("jg.src", e), t.data("jg.originalSrcLoc", i), e
        }, o.prototype.imgFromEntry = function (t) {
            var e = t.find(this.settings.imgSelector);
            return 0 === e.length ? null : e
        }, o.prototype.captionFromEntry = function (t) {
            var e = t.find("> .jg-caption");
            return 0 === e.length ? null : e
        }, o.prototype.displayEntry = function (t, e, i, s, n, o) {
            t.width(s), t.height(o), t.css("top", i), t.css("left", e);
            var a, r, l = this.imgFromEntry(t);
            null !== l ? (l.css("width", s), l.css("height", n), l.css("margin-left", -s / 2), l.css("margin-top", -n / 2), (a = l.data("jg.src")) && (a = this.newSrc(a, s, n, l[0]), l.one("error", function () {
                this.resetImgSrc(l)
            }), r = function () {
                l.attr("src", a)
            }, "skipped" === t.data("jg.loaded") && a ? this.onImageEvent(a, function () {
                this.showImg(t, r), t.data("jg.loaded", !0)
            }.bind(this)) : this.showImg(t, r))) : this.showImg(t), this.displayEntryCaption(t)
        }, o.prototype.displayEntryCaption = function (t) {
            var e, i, s = this.imgFromEntry(t);
            null !== s && this.settings.captions ? (null === (e = this.captionFromEntry(t)) && (i = s.attr("alt"), this.isValidCaption(i) || (i = t.attr("title")), this.isValidCaption(i) && (e = d('<div class="jg-caption">' + i + "</div>"), t.append(e), t.data("jg.createdCaption", !0))), null !== e && (this.settings.cssAnimation || e.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity), this.addCaptionEventsHandlers(t))) : this.removeCaptionEventsHandlers(t)
        }, o.prototype.isValidCaption = function (t) {
            return void 0 !== t && 0 < t.length
        }, o.prototype.onEntryMouseEnterForCaption = function (t) {
            var e = this.captionFromEntry(d(t.currentTarget));
            this.settings.cssAnimation ? e.addClass("jg-caption-visible").removeClass("jg-caption-hidden") : e.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.visibleOpacity)
        }, o.prototype.onEntryMouseLeaveForCaption = function (t) {
            var e = this.captionFromEntry(d(t.currentTarget));
            this.settings.cssAnimation ? e.removeClass("jg-caption-visible").removeClass("jg-caption-hidden") : e.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.nonVisibleOpacity)
        }, o.prototype.addCaptionEventsHandlers = function (t) {
            var e = t.data("jg.captionMouseEvents");
            void 0 === e && (e = {
                mouseenter: d.proxy(this.onEntryMouseEnterForCaption, this),
                mouseleave: d.proxy(this.onEntryMouseLeaveForCaption, this)
            }, t.on("mouseenter", void 0, void 0, e.mouseenter), t.on("mouseleave", void 0, void 0, e.mouseleave), t.data("jg.captionMouseEvents", e))
        }, o.prototype.removeCaptionEventsHandlers = function (t) {
            var e = t.data("jg.captionMouseEvents");
            void 0 !== e && (t.off("mouseenter", void 0, e.mouseenter), t.off("mouseleave", void 0, e.mouseleave), t.removeData("jg.captionMouseEvents"))
        }, o.prototype.clearBuildingRow = function () {
            this.buildingRow.entriesBuff = [], this.buildingRow.aspectRatio = 0, this.buildingRow.width = 0
        }, o.prototype.prepareBuildingRow = function (t, e) {
            var i, s, n, o, a, r = !0,
                l = 0,
                h = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                d = h / this.buildingRow.aspectRatio,
                c = this.settings.rowHeight,
                u = this.buildingRow.width / h > this.settings.justifyThreshold;
            if (e || t && "hide" === this.settings.lastRow && !u) {
                for (i = 0; i < this.buildingRow.entriesBuff.length; i++) s = this.buildingRow.entriesBuff[i], this.settings.cssAnimation ? s.removeClass("jg-entry-visible") : (s.stop().fadeTo(0, .1), s.find("> img, > a > img").fadeTo(0, 0));
                return -1
            }
            for (t && !u && "justify" !== this.settings.lastRow && "hide" !== this.settings.lastRow && (r = !1, 0 < this.rows && (r = (c = (this.offY - this.border - this.settings.margins * this.rows) / this.rows) * this.buildingRow.aspectRatio / h > this.settings.justifyThreshold)), i = 0; i < this.buildingRow.entriesBuff.length; i++) n = (s = this.buildingRow.entriesBuff[i]).data("jg.width") / s.data("jg.height"), a = r ? (o = i === this.buildingRow.entriesBuff.length - 1 ? h : d * n, d) : (o = c * n, c), h -= Math.round(o), s.data("jg.jwidth", Math.round(o)), s.data("jg.jheight", Math.ceil(a)), (0 === i || a < l) && (l = a);
            return this.buildingRow.height = l, r
        }, o.prototype.flushRow = function (t, e) {
            var i, s = this.settings,
                n = this.border,
                o = this.prepareBuildingRow(t, e);
            if (e || t && "hide" === s.lastRow && -1 === o) this.clearBuildingRow();
            else {
                if (this.maxRowHeight && this.maxRowHeight < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight), t && ("center" === s.lastRow || "right" === s.lastRow)) {
                    for (var a = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * s.margins, r = 0; r < this.buildingRow.entriesBuff.length; r++) a -= (i = this.buildingRow.entriesBuff[r]).data("jg.jwidth");
                    "center" === s.lastRow ? n += Math.round(a / 2) : "right" === s.lastRow && (n += a)
                }
                var l = this.buildingRow.entriesBuff.length - 1;
                for (r = 0; r <= l; r++) i = this.buildingRow.entriesBuff[this.settings.rtl ? l - r : r], this.displayEntry(i, n, this.offY, i.data("jg.jwidth"), i.data("jg.jheight"), this.buildingRow.height), n += i.data("jg.jwidth") + s.margins;
                this.galleryHeightToSet = this.offY + this.buildingRow.height + this.border, this.setGalleryTempHeight(this.galleryHeightToSet + this.getSpinnerHeight()), (!t || this.buildingRow.height <= s.rowHeight && o) && (this.offY += this.buildingRow.height + s.margins, this.rows += 1, this.clearBuildingRow(), this.settings.triggerEvent.call(this, "jg.rowflush"))
            }
        };
        var e = 0;
        o.prototype.rememberGalleryHeight = function () {
            e = this.$gallery.height(), this.$gallery.height(e)
        }, o.prototype.setGalleryTempHeight = function (t) {
            e = Math.max(t, e), this.$gallery.height(e)
        }, o.prototype.setGalleryFinalHeight = function (t) {
            e = t, this.$gallery.height(t)
        }, o.prototype.checkWidth = function () {
            this.checkWidthIntervalId = setInterval(d.proxy(function () {
                var t;
                this.$gallery.is(":visible") && (t = parseFloat(this.$gallery.width()), Math.abs(t - this.galleryWidth) > this.settings.refreshSensitivity && (this.galleryWidth = t, this.rewind(), this.rememberGalleryHeight(), this.startImgAnalyzer(!0)))
            }, this), this.settings.refreshTime)
        }, o.prototype.isSpinnerActive = function () {
            return null !== this.spinner.intervalId
        }, o.prototype.getSpinnerHeight = function () {
            return this.spinner.$el.innerHeight()
        }, o.prototype.stopLoadingSpinnerAnimation = function () {
            clearInterval(this.spinner.intervalId), this.spinner.intervalId = null, this.setGalleryTempHeight(this.$gallery.height() - this.getSpinnerHeight()), this.spinner.$el.detach()
        }, o.prototype.startLoadingSpinnerAnimation = function () {
            var t = this.spinner,
                e = t.$el.find("span");
            clearInterval(t.intervalId), this.$gallery.append(t.$el), this.setGalleryTempHeight(this.offY + this.buildingRow.height + this.getSpinnerHeight()), t.intervalId = setInterval(function () {
                t.phase < e.length ? e.eq(t.phase).fadeTo(t.timeSlot, 1) : e.eq(t.phase - e.length).fadeTo(t.timeSlot, 0), t.phase = (t.phase + 1) % (2 * e.length)
            }, t.timeSlot)
        }, o.prototype.rewind = function () {
            this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.offY = this.border, this.rows = 0, this.clearBuildingRow()
        }, o.prototype.getSelectorWithoutSpinner = function () {
            return this.settings.selector + ", div:not(.jg-spinner)"
        }, o.prototype.getAllEntries = function () {
            var t = this.getSelectorWithoutSpinner();
            return this.$gallery.children(t).toArray()
        }, o.prototype.updateEntries = function (t) {
            var e, i;
            return 0 < (i = t && null != this.lastFetchedEntry ? (e = this.getSelectorWithoutSpinner(), d(this.lastFetchedEntry).nextAll(e).toArray()) : (this.entries = [], this.getAllEntries())).length && (d.isFunction(this.settings.sort) ? i = this.sortArray(i) : this.settings.randomize && (i = this.shuffleArray(i)), this.lastFetchedEntry = i[i.length - 1], this.settings.filter ? i = this.filterArray(i) : this.resetFilters(i)), this.entries = this.entries.concat(i), !0
        }, o.prototype.insertToGallery = function (t) {
            var e = this;
            d.each(t, function () {
                d(this).appendTo(e.$gallery)
            })
        }, o.prototype.shuffleArray = function (t) {
            for (var e, i, s = t.length - 1; 0 < s; s--) e = Math.floor(Math.random() * (s + 1)), i = t[s], t[s] = t[e], t[e] = i;
            return this.insertToGallery(t), t
        }, o.prototype.sortArray = function (t) {
            return t.sort(this.settings.sort), this.insertToGallery(t), t
        }, o.prototype.resetFilters = function (t) {
            for (var e = 0; e < t.length; e++) d(t[e]).removeClass("jg-filtered")
        }, o.prototype.filterArray = function (t) {
            var i = this.settings;
            if ("string" === d.type(i.filter)) return t.filter(function (t) {
                var e = d(t);
                return e.is(i.filter) ? (e.removeClass("jg-filtered"), !0) : (e.addClass("jg-filtered").removeClass("jg-visible"), !1)
            });
            if (d.isFunction(i.filter)) {
                for (var e = t.filter(i.filter), s = 0; s < t.length; s++) - 1 === e.indexOf(t[s]) ? d(t[s]).addClass("jg-filtered").removeClass("jg-visible") : d(t[s]).removeClass("jg-filtered");
                return e
            }
        }, o.prototype.resetImgSrc = function (t) {
            "src" === t.data("jg.originalSrcLoc") ? t.attr("src", t.data("jg.originalSrc")) : t.attr("src", "")
        }, o.prototype.destroy = function () {
            clearInterval(this.checkWidthIntervalId), this.stopImgAnalyzerStarter(), d.each(this.getAllEntries(), d.proxy(function (t, e) {
                var i = d(e);
                i.css("width", ""), i.css("height", ""), i.css("top", ""), i.css("left", ""), i.data("jg.loaded", void 0), i.removeClass("jg-entry jg-filtered jg-entry-visible");
                var s = this.imgFromEntry(i);
                s && (s.css("width", ""), s.css("height", ""), s.css("margin-left", ""), s.css("margin-top", ""), this.resetImgSrc(s), s.data("jg.originalSrc", void 0), s.data("jg.originalSrcLoc", void 0), s.data("jg.src", void 0)), this.removeCaptionEventsHandlers(i);
                var n = this.captionFromEntry(i);
                i.data("jg.createdCaption") ? (i.data("jg.createdCaption", void 0), null !== n && n.remove()) : null !== n && n.fadeTo(0, 1)
            }, this)), this.$gallery.css("height", ""), this.$gallery.removeClass("justified-gallery"), this.$gallery.data("jg.controller", void 0), this.settings.triggerEvent.call(this, "jg.destroy")
        }, o.prototype.analyzeImages = function (t) {
            for (var e = this.lastAnalyzedIndex + 1; e < this.entries.length; e++) {
                var i = d(this.entries[e]);
                if (!0 === i.data("jg.loaded") || "skipped" === i.data("jg.loaded")) {
                    var s = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                        n = i.data("jg.width") / i.data("jg.height");
                    if (this.buildingRow.entriesBuff.push(i), this.buildingRow.aspectRatio += n, this.buildingRow.width += n * this.settings.rowHeight, this.lastAnalyzedIndex = e, s / (this.buildingRow.aspectRatio + n) < this.settings.rowHeight && (this.flushRow(!1, 0 < this.settings.maxRowsCount && this.rows === this.settings.maxRowsCount), ++this.yield.flushed >= this.yield.every)) return void this.startImgAnalyzer(t)
                } else if ("error" !== i.data("jg.loaded")) return
            }
            0 < this.buildingRow.entriesBuff.length && this.flushRow(!0, 0 < this.settings.maxRowsCount && this.rows === this.settings.maxRowsCount), this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(), this.stopImgAnalyzerStarter(), this.setGalleryFinalHeight(this.galleryHeightToSet), this.settings.triggerEvent.call(this, t ? "jg.resize" : "jg.complete")
        }, o.prototype.stopImgAnalyzerStarter = function () {
            this.yield.flushed = 0, null !== this.imgAnalyzerTimeout && (clearTimeout(this.imgAnalyzerTimeout), this.imgAnalyzerTimeout = null)
        }, o.prototype.startImgAnalyzer = function (t) {
            var e = this;
            this.stopImgAnalyzerStarter(), this.imgAnalyzerTimeout = setTimeout(function () {
                e.analyzeImages(t)
            }, .001)
        }, o.prototype.onImageEvent = function (t, e, i) {
            var s, n;
            (e || i) && (s = new Image, n = d(s), e && n.one("load", function () {
                n.off("load error"), e(s)
            }), i && n.one("error", function () {
                n.off("load error"), i(s)
            }), s.src = t)
        }, o.prototype.init = function () {
            var r = !1,
                l = !1,
                h = this;
            d.each(this.entries, function (t, e) {
                var i = d(e),
                    s = h.imgFromEntry(i);
                if (i.addClass("jg-entry"), !0 !== i.data("jg.loaded") && "skipped" !== i.data("jg.loaded"))
                    if (null !== h.settings.rel && i.attr("rel", h.settings.rel), null !== h.settings.target && i.attr("target", h.settings.target), null !== s) {
                        var n = h.extractImgSrcFromImage(s);
                        if (!1 === h.settings.waitThumbnailsLoad || !n) {
                            var o = parseFloat(s.attr("width")),
                                a = parseFloat(s.attr("height"));
                            if ("svg" === s.prop("tagName") && (o = parseFloat(s[0].getBBox().width), a = parseFloat(s[0].getBBox().height)), !isNaN(o) && !isNaN(a)) return i.data("jg.width", o), i.data("jg.height", a), i.data("jg.loaded", "skipped"), l = !0, h.startImgAnalyzer(!1), !0
                        }
                        i.data("jg.loaded", !1), r = !0, h.isSpinnerActive() || h.startLoadingSpinnerAnimation(), h.onImageEvent(n, function (t) {
                            i.data("jg.width", t.width), i.data("jg.height", t.height), i.data("jg.loaded", !0), h.startImgAnalyzer(!1)
                        }, function () {
                            i.data("jg.loaded", "error"), h.startImgAnalyzer(!1)
                        })
                    } else i.data("jg.loaded", !0), i.data("jg.width", i.width() | parseFloat(i.css("width")) | 1), i.data("jg.height", i.height() | parseFloat(i.css("height")) | 1)
            }), r || l || this.startImgAnalyzer(!1), this.checkWidth()
        }, o.prototype.checkOrConvertNumber = function (t, e) {
            if ("string" === d.type(t[e]) && (t[e] = parseFloat(t[e])), "number" !== d.type(t[e])) throw e + " must be a number";
            if (isNaN(t[e])) throw "invalid number for " + e
        }, o.prototype.checkSizeRangesSuffixes = function () {
            if ("object" !== d.type(this.settings.sizeRangeSuffixes)) throw "sizeRangeSuffixes must be defined and must be an object";
            var t = [];
            for (var e in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(e) && t.push(e);
            for (var i = {
                0: ""
            }, s = 0; s < t.length; s++)
                if ("string" === d.type(t[s])) try {
                    i[parseInt(t[s].replace(/^[a-z]+/, ""), 10)] = this.settings.sizeRangeSuffixes[t[s]]
                } catch (t) {
                    throw "sizeRangeSuffixes keys must contains correct numbers (" + t + ")"
                } else i[t[s]] = this.settings.sizeRangeSuffixes[t[s]];
            this.settings.sizeRangeSuffixes = i
        }, o.prototype.retrieveMaxRowHeight = function () {
            var t = null,
                e = this.settings.rowHeight;
            if ("string" === d.type(this.settings.maxRowHeight)) t = this.settings.maxRowHeight.match(/^[0-9]+%$/) ? e * parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100 : parseFloat(this.settings.maxRowHeight);
            else {
                if ("number" !== d.type(this.settings.maxRowHeight)) {
                    if (!1 === this.settings.maxRowHeight || null == this.settings.maxRowHeight) return null;
                    throw "maxRowHeight must be a number or a percentage"
                }
                t = this.settings.maxRowHeight
            }
            if (isNaN(t)) throw "invalid number for maxRowHeight";
            return t < e && (t = e), t
        }, o.prototype.checkSettings = function () {
            this.checkSizeRangesSuffixes(), this.checkOrConvertNumber(this.settings, "rowHeight"), this.checkOrConvertNumber(this.settings, "margins"), this.checkOrConvertNumber(this.settings, "border"), this.checkOrConvertNumber(this.settings, "maxRowsCount");
            var t = ["justify", "nojustify", "left", "center", "right", "hide"];
            if (-1 === t.indexOf(this.settings.lastRow)) throw "lastRow must be one of: " + t.join(", ");
            if (this.checkOrConvertNumber(this.settings, "justifyThreshold"), this.settings.justifyThreshold < 0 || 1 < this.settings.justifyThreshold) throw "justifyThreshold must be in the interval [0,1]";
            if ("boolean" !== d.type(this.settings.cssAnimation)) throw "cssAnimation must be a boolean";
            if ("boolean" !== d.type(this.settings.captions)) throw "captions must be a boolean";
            if (this.checkOrConvertNumber(this.settings.captionSettings, "animationDuration"), this.checkOrConvertNumber(this.settings.captionSettings, "visibleOpacity"), this.settings.captionSettings.visibleOpacity < 0 || 1 < this.settings.captionSettings.visibleOpacity) throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
            if (this.checkOrConvertNumber(this.settings.captionSettings, "nonVisibleOpacity"), this.settings.captionSettings.nonVisibleOpacity < 0 || 1 < this.settings.captionSettings.nonVisibleOpacity) throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
            if (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"), this.checkOrConvertNumber(this.settings, "refreshTime"), this.checkOrConvertNumber(this.settings, "refreshSensitivity"), "boolean" !== d.type(this.settings.randomize)) throw "randomize must be a boolean";
            if ("string" !== d.type(this.settings.selector)) throw "selector must be a string";
            if (!1 !== this.settings.sort && !d.isFunction(this.settings.sort)) throw "sort must be false or a comparison function";
            if (!1 !== this.settings.filter && !d.isFunction(this.settings.filter) && "string" !== d.type(this.settings.filter)) throw "filter must be false, a string or a filter function"
        }, o.prototype.retrieveSuffixRanges = function () {
            var t = [];
            for (var e in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(e) && t.push(parseInt(e, 10));
            return t.sort(function (t, e) {
                return e < t ? 1 : t < e ? -1 : 0
            }), t
        }, o.prototype.updateSettings = function (t) {
            this.settings = d.extend({}, this.settings, t), this.checkSettings(), this.border = 0 <= this.settings.border ? this.settings.border : this.settings.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges()
        }, o.prototype.defaults = {
            sizeRangeSuffixes: {},
            thumbnailPath: void 0,
            rowHeight: 120,
            maxRowHeight: !1,
            maxRowsCount: 0,
            margins: 1,
            border: -1,
            lastRow: "nojustify",
            justifyThreshold: .9,
            waitThumbnailsLoad: !0,
            captions: !0,
            cssAnimation: !0,
            imagesAnimationDuration: 500,
            captionSettings: {
                animationDuration: 500,
                visibleOpacity: .7,
                nonVisibleOpacity: 0
            },
            rel: null,
            target: null,
            extension: /\.[^.\\/]+$/,
            refreshTime: 200,
            refreshSensitivity: 0,
            randomize: !1,
            rtl: !1,
            sort: !1,
            filter: !1,
            selector: "a",
            imgSelector: "> img, > a > img, > svg, > a > svg",
            triggerEvent: function (t) {
                this.$gallery.trigger(t)
            }
        }, d.fn.justifiedGallery = function (n) {
            return this.each(function (t, e) {
                var i = d(e);
                i.addClass("justified-gallery");
                var s = i.data("jg.controller");
                if (void 0 === s) {
                    if (null != n && "object" !== d.type(n)) {
                        if ("destroy" === n) return;
                        throw "The argument must be an object"
                    }
                    s = new o(i, d.extend({}, o.prototype.defaults, n)), i.data("jg.controller", s)
                } else if ("norewind" !== n) {
                    if ("destroy" === n) return void s.destroy();
                    s.updateSettings(n), s.rewind()
                }
                s.updateEntries("norewind" === n) && s.init()
            })
        }
    }),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function (d) {
        function t() {}

        function c(t, e) {
            m.ev.on("mfp" + t + w, e)
        }

        function u(t, e, i, s) {
            var n = document.createElement("div");
            return n.className = "mfp-" + t, i && (n.innerHTML = i), s ? e && e.appendChild(n) : (n = d(n), e && n.appendTo(e)), n
        }

        function p(t, e) {
            m.ev.triggerHandler("mfp" + t, e), m.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), m.st.callbacks[t] && m.st.callbacks[t].apply(m, d.isArray(e) ? e : [e]))
        }

        function f(t) {
            return t === e && m.currTemplate.closeBtn || (m.currTemplate.closeBtn = d(m.st.closeMarkup.replace("%title%", m.st.tClose)), e = t), m.currTemplate.closeBtn
        }

        function o() {
            d.magnificPopup.instance || ((m = new t).init(), d.magnificPopup.instance = m)
        }
        var m, s, g, n, v, e, l = "Close",
            h = "BeforeClose",
            y = "MarkupParse",
            b = "Open",
            w = ".mfp",
            x = "mfp-ready",
            i = "mfp-removing",
            a = "mfp-prevent-close",
            r = !!window.jQuery,
            _ = d(window);
        t.prototype = {
            constructor: t,
            init: function () {
                var t = navigator.appVersion;
                m.isLowIE = m.isIE8 = document.all && !document.addEventListener, m.isAndroid = /android/gi.test(t), m.isIOS = /iphone|ipad|ipod/gi.test(t), m.supportsTransition = function () {
                    var t = document.createElement("p").style,
                        e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length;)
                        if (e.pop() + "Transition" in t) return !0;
                    return !1
                }(), m.probablyMobile = m.isAndroid || m.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), g = d(document), m.popupsCache = {}
            },
            open: function (t) {
                if (!1 === t.isObj) {
                    m.items = t.items.toArray(), m.index = 0;
                    for (var e, i = t.items, s = 0; s < i.length; s++)
                        if ((e = i[s]).parsed && (e = e.el[0]), e === t.el[0]) {
                            m.index = s;
                            break
                        }
                } else m.items = d.isArray(t.items) ? t.items : [t.items], m.index = t.index || 0;
                if (!m.isOpen) {
                    m.types = [], v = "", t.mainEl && t.mainEl.length ? m.ev = t.mainEl.eq(0) : m.ev = g, t.key ? (m.popupsCache[t.key] || (m.popupsCache[t.key] = {}), m.currTemplate = m.popupsCache[t.key]) : m.currTemplate = {}, m.st = d.extend(!0, {}, d.magnificPopup.defaults, t), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = u("bg").on("click" + w, function () {
                        m.close()
                    }), m.wrap = u("wrap").attr("tabindex", -1).on("click" + w, function (t) {
                        m._checkIfClose(t.target) && m.close()
                    }), m.container = u("container", m.wrap)), m.contentContainer = u("content"), m.st.preloader && (m.preloader = u("preloader", m.container, m.st.tLoading));
                    var n = d.magnificPopup.modules;
                    for (s = 0; s < n.length; s++) {
                        var o = (o = n[s]).charAt(0).toUpperCase() + o.slice(1);
                        m["init" + o].call(m)
                    }
                    p("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (c(y, function (t, e, i, s) {
                        i.close_replaceWith = f(s.type)
                    }), v += " mfp-close-btn-in") : m.wrap.append(f())), m.st.alignTop && (v += " mfp-align-top"), m.fixedContentPos ? m.wrap.css({
                        overflow: m.st.overflowY,
                        overflowX: "hidden",
                        overflowY: m.st.overflowY
                    }) : m.wrap.css({
                        top: _.scrollTop(),
                        position: "absolute"
                    }), !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({
                        height: g.height(),
                        position: "absolute"
                    }), m.st.enableEscapeKey && g.on("keyup" + w, function (t) {
                        27 === t.keyCode && m.close()
                    }), _.on("resize" + w, function () {
                        m.updateSize()
                    }), m.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && m.wrap.addClass(v);
                    var a, r = m.wH = _.height(),
                        l = {};
                    m.fixedContentPos && m._hasScrollBar(r) && ((a = m._getScrollbarSize()) && (l.marginRight = a)), m.fixedContentPos && (m.isIE7 ? d("body, html").css("overflow", "hidden") : l.overflow = "hidden");
                    var h = m.st.mainClass;
                    return m.isIE7 && (h += " mfp-ie7"), h && m._addClassToMFP(h), m.updateItemHTML(), p("BuildControls"), d("html").css(l), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || d(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function () {
                        m.content ? (m._addClassToMFP(x), m._setFocus()) : m.bgOverlay.addClass(x), g.on("focusin" + w, m._onFocusIn)
                    }, 16), m.isOpen = !0, m.updateSize(r), p(b), t
                }
                m.updateItemHTML()
            },
            close: function () {
                m.isOpen && (p(h), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(i), setTimeout(function () {
                    m._close()
                }, m.st.removalDelay)) : m._close())
            },
            _close: function () {
                p(l);
                var t, e = i + " " + x + " ";
                m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (e += m.st.mainClass + " "), m._removeClassFromMFP(e), m.fixedContentPos && (t = {
                    marginRight: ""
                }, m.isIE7 ? d("body, html").css("overflow", "") : t.overflow = "", d("html").css(t)), g.off("keyup.mfp focusin" + w), m.ev.off(w), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && d(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, p("AfterClose")
            },
            updateSize: function (t) {
                var e, i;
                m.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * e, m.wrap.css("height", i), m.wH = i) : m.wH = t || _.height(), m.fixedContentPos || m.wrap.css("height", m.wH), p("Resize")
            },
            updateItemHTML: function () {
                var t = m.items[m.index];
                m.contentContainer.detach(), m.content && m.content.detach(), t.parsed || (t = m.parseEl(m.index));
                var e, i = t.type;
                p("BeforeChange", [m.currItem ? m.currItem.type : "", i]), m.currItem = t, m.currTemplate[i] || (e = !!m.st[i] && m.st[i].markup, p("FirstMarkupParse", e), m.currTemplate[i] = !e || d(e)), n && n !== t.type && m.container.removeClass("mfp-" + n + "-holder");
                var s = m["get" + i.charAt(0).toUpperCase() + i.slice(1)](t, m.currTemplate[i]);
                m.appendContent(s, i), t.preloaded = !0, p("Change", t), n = t.type, m.container.prepend(m.contentContainer), p("AfterChange")
            },
            appendContent: function (t, e) {
                (m.content = t) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[e] ? m.content.find(".mfp-close").length || m.content.append(f()) : m.content = t: m.content = "", p("BeforeAppend"), m.container.addClass("mfp-" + e + "-holder"), m.contentContainer.append(m.content)
            },
            parseEl: function (t) {
                var e, i = m.items[t];
                if ((i = i.tagName ? {
                    el: d(i)
                } : (e = i.type, {
                    data: i,
                    src: i.src
                })).el) {
                    for (var s = m.types, n = 0; n < s.length; n++)
                        if (i.el.hasClass("mfp-" + s[n])) {
                            e = s[n];
                            break
                        } i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
                }
                return i.type = e || m.st.type || "inline", i.index = t, i.parsed = !0, m.items[t] = i, p("ElementParse", i), m.items[t]
            },
            addGroup: function (e, i) {
                function t(t) {
                    t.mfpEl = this, m._openClick(t, e, i)
                }
                var s = "click.magnificPopup";
                (i = i || {}).mainEl = e, i.items ? (i.isObj = !0, e.off(s).on(s, t)) : (i.isObj = !1, i.delegate ? e.off(s).on(s, i.delegate, t) : (i.items = e).off(s).on(s, t))
            },
            _openClick: function (t, e, i) {
                if ((void 0 !== i.midClick ? i.midClick : d.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                    var s = void 0 !== i.disableOn ? i.disableOn : d.magnificPopup.defaults.disableOn;
                    if (s)
                        if (d.isFunction(s)) {
                            if (!s.call(m)) return !0
                        } else if (_.width() < s) return !0;
                    t.type && (t.preventDefault(), m.isOpen && t.stopPropagation()), i.el = d(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), m.open(i)
                }
            },
            updateStatus: function (t, e) {
                var i;
                m.preloader && (s !== t && m.container.removeClass("mfp-s-" + s), e || "loading" !== t || (e = m.st.tLoading), p("UpdateStatus", i = {
                    status: t,
                    text: e
                }), t = i.status, e = i.text, m.preloader.html(e), m.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), m.container.addClass("mfp-s-" + t), s = t)
            },
            _checkIfClose: function (t) {
                if (!d(t).hasClass(a)) {
                    var e = m.st.closeOnContentClick,
                        i = m.st.closeOnBgClick;
                    if (e && i) return !0;
                    if (!m.content || d(t).hasClass("mfp-close") || m.preloader && t === m.preloader[0]) return !0;
                    if (t === m.content[0] || d.contains(m.content[0], t)) {
                        if (e) return !0
                    } else if (i && d.contains(document, t)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function (t) {
                m.bgOverlay.addClass(t), m.wrap.addClass(t)
            },
            _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), m.wrap.removeClass(t)
            },
            _hasScrollBar: function (t) {
                return (m.isIE7 ? g.height() : document.body.scrollHeight) > (t || _.height())
            },
            _setFocus: function () {
                (m.st.focus ? m.content.find(m.st.focus).eq(0) : m.wrap).focus()
            },
            _onFocusIn: function (t) {
                return t.target === m.wrap[0] || d.contains(m.wrap[0], t.target) ? void 0 : (m._setFocus(), !1)
            },
            _parseMarkup: function (n, t, e) {
                var o;
                e.data && (t = d.extend(e.data, t)), p(y, [n, t, e]), d.each(t, function (t, e) {
                    return void 0 === e || !1 === e || void(1 < (o = t.split("_")).length ? 0 < (i = n.find(w + "-" + o[0])).length && ("replaceWith" === (s = o[1]) ? i[0] !== e[0] && i.replaceWith(e) : "img" === s ? i.is("img") ? i.attr("src", e) : i.replaceWith(d("<img>").attr("src", e).attr("class", i.attr("class"))) : i.attr(o[1], e)) : n.find(w + "-" + t).html(e));
                    var i, s
                })
            },
            _getScrollbarSize: function () {
                var t;
                return void 0 === m.scrollbarSize && ((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), m.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)), m.scrollbarSize
            }
        }, d.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (t, e) {
                return o(), (t = t ? d.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t)
            },
            close: function () {
                return d.magnificPopup.instance && d.magnificPopup.instance.close()
            },
            registerModule: function (t, e) {
                e.options && (d.magnificPopup.defaults[t] = e.options), d.extend(this.proto, e.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, d.fn.magnificPopup = function (t) {
            o();
            var e, i, s, n = d(this);
            return "string" == typeof t ? "open" === t ? (e = r ? n.data("magnificPopup") : n[0].magnificPopup, i = parseInt(arguments[1], 10) || 0, s = e.items ? e.items[i] : (s = n, e.delegate && (s = s.find(e.delegate)), s.eq(i)), m._openClick({
                mfpEl: s
            }, n, e)) : m.isOpen && m[t].apply(m, Array.prototype.slice.call(arguments, 1)) : (t = d.extend(!0, {}, t), r ? n.data("magnificPopup", t) : n[0].magnificPopup = t, m.addGroup(n, t)), n
        };

        function S() {
            C && (E.after(C.addClass(T)).detach(), C = null)
        }
        var T, E, C, k = "inline";
        d.magnificPopup.registerModule(k, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function () {
                    m.types.push(k), c(l + "." + k, function () {
                        S()
                    })
                },
                getInline: function (t, e) {
                    if (S(), t.src) {
                        var i, s = m.st.inline,
                            n = d(t.src);
                        return n.length ? ((i = n[0].parentNode) && i.tagName && (E || (T = s.hiddenClass, E = u(T), T = "mfp-" + T), C = n.after(E).detach().removeClass(T)), m.updateStatus("ready")) : (m.updateStatus("error", s.tNotFound), n = d("<div>")), t.inlineElement = n
                    }
                    return m.updateStatus("ready"), m._parseMarkup(e, {}, t), e
                }
            }
        });

        function M() {
            z && d(document.body).removeClass(z)
        }

        function I() {
            M(), m.req && m.req.abort()
        }
        var z, $ = "ajax";
        d.magnificPopup.registerModule($, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function () {
                    m.types.push($), z = m.st.ajax.cursor, c(l + "." + $, I), c("BeforeChange." + $, I)
                },
                getAjax: function (n) {
                    z && d(document.body).addClass(z), m.updateStatus("loading");
                    var t = d.extend({
                        url: n.src,
                        success: function (t, e, i) {
                            var s = {
                                data: t,
                                xhr: i
                            };
                            p("ParseAjax", s), m.appendContent(d(s.data), $), n.finished = !0, M(), m._setFocus(), setTimeout(function () {
                                m.wrap.addClass(x)
                            }, 16), m.updateStatus("ready"), p("AjaxContentAdded")
                        },
                        error: function () {
                            M(), n.finished = n.loadError = !0, m.updateStatus("error", m.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, m.st.ajax.settings);
                    return m.req = d.ajax(t), ""
                }
            }
        });
        var P;
        d.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function () {
                    var t = m.st.image,
                        e = ".image";
                    m.types.push("image"), c(b + e, function () {
                        "image" === m.currItem.type && t.cursor && d(document.body).addClass(t.cursor)
                    }), c(l + e, function () {
                        t.cursor && d(document.body).removeClass(t.cursor), _.off("resize" + w)
                    }), c("Resize" + e, m.resizeImage), m.isLowIE && c("AfterChange", m.resizeImage)
                },
                resizeImage: function () {
                    var t, e = m.currItem;
                    e && e.img && m.st.image.verticalFit && (t = 0, m.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", m.wH - t))
                },
                _onImageHasSize: function (t) {
                    t.img && (t.hasSize = !0, P && clearInterval(P), t.isCheckingImgSize = !1, p("ImageHasSize", t), t.imgHidden && (m.content && m.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function (e) {
                    var i = 0,
                        s = e.img[0],
                        n = function (t) {
                            P && clearInterval(P), P = setInterval(function () {
                                return 0 < s.naturalWidth ? void m._onImageHasSize(e) : (200 < i && clearInterval(P), void(3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500)))
                            }, t)
                        };
                    n(1)
                },
                getImage: function (t, e) {
                    var i, s = 0,
                        n = function () {
                            t && (t.img[0].complete ? (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, p("ImageLoadComplete")) : ++s < 200 ? setTimeout(n, 100) : o())
                        },
                        o = function () {
                            t && (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("error", a.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
                        },
                        a = m.st.image,
                        r = e.find(".mfp-img");
                    return r.length && ((i = document.createElement("img")).className = "mfp-img", t.el && t.el.find("img").length && (i.alt = t.el.find("img").attr("alt")), t.img = d(i).on("load.mfploader", n).on("error.mfploader", o), i.src = t.src, r.is("img") && (t.img = t.img.clone()), 0 < (i = t.img[0]).naturalWidth ? t.hasSize = !0 : i.width || (t.hasSize = !1)), m._parseMarkup(e, {
                        title: function (t) {
                            if (t.data && void 0 !== t.data.title) return t.data.title;
                            var e = m.st.image.titleSrc;
                            if (e) {
                                if (d.isFunction(e)) return e.call(m, t);
                                if (t.el) return t.el.attr(e) || ""
                            }
                            return ""
                        }(t),
                        img_replaceWith: t.img
                    }, t), m.resizeImage(), t.hasSize ? (P && clearInterval(P), t.loadError ? (e.addClass("mfp-loading"), m.updateStatus("error", a.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), m.findImageSize(t))), e
                }
            }
        });
        var L;
        d.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function () {
                    var t, e, i, s, n, o, a = m.st.zoom,
                        r = ".zoom";
                    a.enabled && m.supportsTransition && (s = a.duration, n = function (t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            i = "all " + a.duration / 1e3 + "s " + a.easing,
                            s = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            n = "transition";
                        return s["-webkit-" + n] = s["-moz-" + n] = s["-o-" + n] = s[n] = i, e.css(s), e
                    }, o = function () {
                        m.content.css("visibility", "visible")
                    }, c("BuildControls" + r, function () {
                        if (m._allowZoom()) {
                            if (clearTimeout(e), m.content.css("visibility", "hidden"), !(t = m._getItemToZoom())) return void o();
                            (i = n(t)).css(m._getOffset()), m.wrap.append(i), e = setTimeout(function () {
                                i.css(m._getOffset(!0)), e = setTimeout(function () {
                                    o(), setTimeout(function () {
                                        i.remove(), t = i = null, p("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), c(h + r, function () {
                        if (m._allowZoom()) {
                            if (clearTimeout(e), m.st.removalDelay = s, !t) {
                                if (!(t = m._getItemToZoom())) return;
                                i = n(t)
                            }
                            i.css(m._getOffset(!0)), m.wrap.append(i), m.content.css("visibility", "hidden"), setTimeout(function () {
                                i.css(m._getOffset())
                            }, 16)
                        }
                    }), c(l + r, function () {
                        m._allowZoom() && (o(), i && i.remove(), t = null)
                    }))
                },
                _allowZoom: function () {
                    return "image" === m.currItem.type
                },
                _getItemToZoom: function () {
                    return !!m.currItem.hasSize && m.currItem.img
                },
                _getOffset: function (t) {
                    var e = t ? m.currItem.img : m.st.zoom.opener(m.currItem.el || m.currItem),
                        i = e.offset(),
                        s = parseInt(e.css("padding-top"), 10),
                        n = parseInt(e.css("padding-bottom"), 10);
                    i.top -= d(window).scrollTop() - s;
                    var o = {
                        width: e.width(),
                        height: (r ? e.innerHeight() : e[0].offsetHeight) - n - s
                    };
                    return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform), L ? o["-moz-transform"] = o.transform = "translate(" + i.left + "px," + i.top + "px)" : (o.left = i.left, o.top = i.top), o
                }
            }
        });

        function O(t) {
            var e;
            !m.currTemplate[A] || (e = m.currTemplate[A].find("iframe")).length && (t || (e[0].src = "//about:blank"), m.isIE8 && e.css("display", t ? "block" : "none"))
        }
        var A = "iframe";
        d.magnificPopup.registerModule(A, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function () {
                    m.types.push(A), c("BeforeChange", function (t, e, i) {
                        e !== i && (e === A ? O() : i === A && O(!0))
                    }), c(l + "." + A, function () {
                        O()
                    })
                },
                getIframe: function (t, e) {
                    var i = t.src,
                        s = m.st.iframe;
                    d.each(s.patterns, function () {
                        return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                    });
                    var n = {};
                    return s.srcAction && (n[s.srcAction] = i), m._parseMarkup(e, n, t), m.updateStatus("ready"), e
                }
            }
        });

        function D(t) {
            var e = m.items.length;
            return e - 1 < t ? t - e : t < 0 ? e + t : t
        }

        function j(t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
        }
        d.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function () {
                    var o = m.st.gallery,
                        t = ".mfp-gallery";
                    return m.direction = !0, !(!o || !o.enabled) && (v += " mfp-gallery", c(b + t, function () {
                        o.navigateByImgClick && m.wrap.on("click" + t, ".mfp-img", function () {
                            return 1 < m.items.length ? (m.next(), !1) : void 0
                        }), g.on("keydown" + t, function (t) {
                            37 === t.keyCode ? m.prev() : 39 === t.keyCode && m.next()
                        })
                    }), c("UpdateStatus" + t, function (t, e) {
                        e.text && (e.text = j(e.text, m.currItem.index, m.items.length))
                    }), c(y + t, function (t, e, i, s) {
                        var n = m.items.length;
                        i.counter = 1 < n ? j(o.tCounter, s.index, n) : ""
                    }), c("BuildControls" + t, function () {
                        var t, e, i;
                        1 < m.items.length && o.arrows && !m.arrowLeft && (t = o.arrowMarkup, e = m.arrowLeft = d(t.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(a), i = m.arrowRight = d(t.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(a), e.click(function () {
                            m.prev()
                        }), i.click(function () {
                            m.next()
                        }), m.container.append(e.add(i)))
                    }), c("Change" + t, function () {
                        m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function () {
                            m.preloadNearbyImages(), m._preloadTimeout = null
                        }, 16)
                    }), void c(l + t, function () {
                        g.off(t), m.wrap.off("click" + t), m.arrowRight = m.arrowLeft = null
                    }))
                },
                next: function () {
                    m.direction = !0, m.index = D(m.index + 1), m.updateItemHTML()
                },
                prev: function () {
                    m.direction = !1, m.index = D(m.index - 1), m.updateItemHTML()
                },
                goTo: function (t) {
                    m.direction = t >= m.index, m.index = t, m.updateItemHTML()
                },
                preloadNearbyImages: function () {
                    for (var t = m.st.gallery.preload, e = Math.min(t[0], m.items.length), i = Math.min(t[1], m.items.length), s = 1; s <= (m.direction ? i : e); s++) m._preloadItem(m.index + s);
                    for (s = 1; s <= (m.direction ? e : i); s++) m._preloadItem(m.index - s)
                },
                _preloadItem: function (t) {
                    var e;
                    t = D(t), m.items[t].preloaded || ((e = m.items[t]).parsed || (e = m.parseEl(t)), p("LazyLoad", e), "image" === e.type && (e.img = d('<img class="mfp-img" />').on("load.mfploader", function () {
                        e.hasSize = !0
                    }).on("error.mfploader", function () {
                        e.hasSize = !0, e.loadError = !0, p("LazyLoadError", e)
                    }).attr("src", e.src)), e.preloaded = !0)
                }
            }
        });
        var R = "retina";
        d.magnificPopup.registerModule(R, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function () {
                    var i, s;
                    1 < window.devicePixelRatio && (i = m.st.retina, s = i.ratio, 1 < (s = isNaN(s) ? s() : s) && (c("ImageHasSize." + R, function (t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / s,
                            width: "100%"
                        })
                    }), c("ElementParse." + R, function (t, e) {
                        e.src = i.replaceSrc(e, s)
                    })))
                }
            }
        }), o()
    }),
    function (i) {
        "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function (t, e) {
            return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), i(e), e
        } : i(jQuery)
    }(function (c) {
        "use strict";

        function i(t, e) {
            var i = this;
            i.element = t, i.$element = c(t), i.state = {
                multiple: !!i.$element.attr("multiple"),
                enabled: !1,
                opened: !1,
                currValue: -1,
                selectedIdx: -1,
                highlightedIdx: -1
            }, i.eventTriggers = {
                open: i.open,
                close: i.close,
                destroy: i.destroy,
                refresh: i.refresh,
                init: i.init
            }, i.init(e)
        }
        var e = c(document),
            l = c(window),
            s = ["a", "e", "i", "o", "u", "n", "c", "y"],
            n = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g];
        i.prototype = {
            utils: {
                isMobile: function () {
                    return /android|ip(hone|od|ad)/i.test(navigator.userAgent)
                },
                escapeRegExp: function (t) {
                    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                },
                replaceDiacritics: function (t) {
                    for (var e = n.length; e--;) t = t.toLowerCase().replace(n[e], s[e]);
                    return t
                },
                format: function (t) {
                    var s = arguments;
                    return ("" + t).replace(/\{(?:(\d+)|(\w+))\}/g, function (t, e, i) {
                        return i && s[1] ? s[1][i] : s[e]
                    })
                },
                nextEnabledItem: function (t, e) {
                    for (; t[e = (e + 1) % t.length].disabled;);
                    return e
                },
                previousEnabledItem: function (t, e) {
                    for (; t[e = (0 < e ? e : t.length) - 1].disabled;);
                    return e
                },
                toDash: function (t) {
                    return t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
                },
                triggerCallback: function (t, e) {
                    var i = e.element,
                        s = e.options["on" + t],
                        n = [i].concat([].slice.call(arguments).slice(1));
                    c.isFunction(s) && s.apply(i, n), c(i).trigger("selectric-" + this.toDash(t), n)
                },
                arrayToClassname: function (t) {
                    var e = c.grep(t, function (t) {
                        return !!t
                    });
                    return c.trim(e.join(" "))
                }
            },
            init: function (t) {
                var e, i, s, n, o, a, r, l = this;
                l.options = c.extend(!0, {}, c.fn.selectric.defaults, l.options, t), l.utils.triggerCallback("BeforeInit", l), l.destroy(!0), l.options.disableOnMobile && l.utils.isMobile() ? l.disableOnMobile = !0 : (l.classes = l.getClassNames(), e = c("<input/>", {
                    class: l.classes.input,
                    readonly: l.utils.isMobile()
                }), i = c("<div/>", {
                    class: l.classes.items,
                    tabindex: -1
                }), s = c("<div/>", {
                    class: l.classes.scroll
                }), n = c("<div/>", {
                    class: l.classes.prefix,
                    html: l.options.arrowButtonMarkup
                }), o = c("<span/>", {
                    class: "label"
                }), a = l.$element.wrap("<div/>").parent().append(n.prepend(o), i, e), r = c("<div/>", {
                    class: l.classes.hideselect
                }), l.elements = {
                    input: e,
                    items: i,
                    itemsScroll: s,
                    wrapper: n,
                    label: o,
                    outerWrapper: a
                }, l.options.nativeOnMobile && l.utils.isMobile() && (l.elements.input = void 0, r.addClass(l.classes.prefix + "-is-native"), l.$element.on("change", function () {
                    l.refresh()
                })), l.$element.on(l.eventTriggers).wrap(r), l.originalTabindex = l.$element.prop("tabindex"), l.$element.prop("tabindex", -1), l.populate(), l.activate(), l.utils.triggerCallback("Init", l))
            },
            activate: function () {
                var t = this,
                    e = t.elements.items.closest(":visible").children(":hidden").addClass(t.classes.tempshow),
                    i = t.$element.width();
                e.removeClass(t.classes.tempshow), t.utils.triggerCallback("BeforeActivate", t), t.elements.outerWrapper.prop("class", t.utils.arrayToClassname([t.classes.wrapper, t.$element.prop("class").replace(/\S+/g, t.classes.prefix + "-$&"), t.options.responsive ? t.classes.responsive : ""])), t.options.inheritOriginalWidth && 0 < i && t.elements.outerWrapper.width(i), t.unbindEvents(), t.$element.prop("disabled") ? (t.elements.outerWrapper.addClass(t.classes.disabled), t.elements.input && t.elements.input.prop("disabled", !0)) : (t.state.enabled = !0, t.elements.outerWrapper.removeClass(t.classes.disabled), t.$li = t.elements.items.removeAttr("style").find("li"), t.bindEvents()), t.utils.triggerCallback("Activate", t)
            },
            getClassNames: function () {
                var s = this,
                    n = s.options.customClass,
                    o = {};
                return c.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "), function (t, e) {
                    var i = n.prefix + e;
                    o[e.toLowerCase()] = n.camelCase ? i : s.utils.toDash(i)
                }), o.prefix = n.prefix, o
            },
            setLabel: function () {
                var t, e, i, s = this,
                    n = s.options.labelBuilder;
                s.state.multiple ? (t = 0 === (t = c.isArray(s.state.currValue) ? s.state.currValue : [s.state.currValue]).length ? [0] : t, e = c.map(t, function (e) {
                    return c.grep(s.lookupItems, function (t) {
                        return t.index === e
                    })[0]
                }), e = c.grep(e, function (t) {
                    return 1 < e.length || 0 === e.length ? "" !== c.trim(t.value) : t
                }), e = c.map(e, function (t) {
                    return c.isFunction(n) ? n(t) : s.utils.format(n, t)
                }), s.options.multiple.maxLabelEntries && (e.length >= s.options.multiple.maxLabelEntries + 1 ? (e = e.slice(0, s.options.multiple.maxLabelEntries)).push(c.isFunction(n) ? n({
                    text: "..."
                }) : s.utils.format(n, {
                    text: "..."
                })) : e.slice(e.length - 1)), s.elements.label.html(e.join(s.options.multiple.separator))) : (i = s.lookupItems[s.state.currValue], s.elements.label.html(c.isFunction(n) ? n(i) : s.utils.format(n, i)))
            },
            populate: function () {
                var s = this,
                    t = s.$element.children(),
                    e = s.$element.find("option"),
                    i = e.filter(":selected"),
                    n = e.index(i),
                    o = 0,
                    a = s.state.multiple ? [] : 0;
                1 < i.length && s.state.multiple && (n = [], i.each(function () {
                    n.push(c(this).index())
                })), s.state.currValue = ~n ? n : a, s.state.selectedIdx = s.state.currValue, s.state.highlightedIdx = s.state.currValue, s.items = [], s.lookupItems = [], t.length && (t.each(function (t) {
                    var i, e = c(this);
                    e.is("optgroup") ? (i = {
                        element: e,
                        label: e.prop("label"),
                        groupDisabled: e.prop("disabled"),
                        items: []
                    }, e.children().each(function (t) {
                        var e = c(this);
                        i.items[t] = s.getItemData(o, e, i.groupDisabled || e.prop("disabled")), s.lookupItems[o] = i.items[t], o++
                    }), s.items[t] = i) : (s.items[t] = s.getItemData(o, e, e.prop("disabled")), s.lookupItems[o] = s.items[t], o++)
                }), s.setLabel(), s.elements.items.append(s.elements.itemsScroll.html(s.getItemsMarkup(s.items))))
            },
            getItemData: function (t, e, i) {
                return {
                    index: t,
                    element: e,
                    value: e.val(),
                    className: e.prop("class"),
                    text: e.html(),
                    slug: c.trim(this.utils.replaceDiacritics(e.html())),
                    alt: e.attr("data-alt"),
                    selected: e.prop("selected"),
                    disabled: i
                }
            },
            getItemsMarkup: function (t) {
                var i = this,
                    s = "<ul>";
                return c.isFunction(i.options.listBuilder) && i.options.listBuilder && (t = i.options.listBuilder(t)), c.each(t, function (t, e) {
                    void 0 !== e.label ? (s += i.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', i.utils.arrayToClassname([i.classes.group, e.groupDisabled ? "disabled" : "", e.element.prop("class")]), i.classes.grouplabel, e.element.prop("label")), c.each(e.items, function (t, e) {
                        s += i.getItemMarkup(e.index, e)
                    }), s += "</ul>") : s += i.getItemMarkup(e.index, e)
                }), s + "</ul>"
            },
            getItemMarkup: function (t, e) {
                var i = this,
                    s = i.options.optionsItemBuilder,
                    n = {
                        value: e.value,
                        text: e.text,
                        slug: e.slug,
                        index: e.index
                    };
                return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>', t, i.utils.arrayToClassname([e.className, t === i.items.length - 1 ? "last" : "", e.disabled ? "disabled" : "", e.selected ? "selected" : ""]), c.isFunction(s) ? i.utils.format(s(e, this.$element, t), e) : i.utils.format(s, n))
            },
            unbindEvents: function () {
                this.elements.wrapper.add(this.$element).add(this.elements.outerWrapper).add(this.elements.input).off(".sl")
            },
            bindEvents: function () {
                var o = this;
                o.elements.outerWrapper.on("mouseenter.sl mouseleave.sl", function (t) {
                    c(this).toggleClass(o.classes.hover, "mouseenter" === t.type), o.options.openOnHover && (clearTimeout(o.closeTimer), "mouseleave" === t.type ? o.closeTimer = setTimeout(c.proxy(o.close, o), o.options.hoverIntentTimeout) : o.open())
                }), o.elements.wrapper.on("click.sl", function (t) {
                    o.state.opened ? o.close() : o.open(t)
                }), o.options.nativeOnMobile && o.utils.isMobile() || (o.$element.on("focus.sl", function () {
                    o.elements.input.focus()
                }), o.elements.input.prop({
                    tabindex: o.originalTabindex,
                    disabled: !1
                }).on("keydown.sl", c.proxy(o.handleKeys, o)).on("focusin.sl", function (t) {
                    o.elements.outerWrapper.addClass(o.classes.focus), o.elements.input.one("blur", function () {
                        o.elements.input.blur()
                    }), o.options.openOnFocus && !o.state.opened && o.open(t)
                }).on("focusout.sl", function () {
                    o.elements.outerWrapper.removeClass(o.classes.focus)
                }).on("input propertychange", function () {
                    var t = o.elements.input.val(),
                        n = new RegExp("^" + o.utils.escapeRegExp(t), "i");
                    clearTimeout(o.resetStr), o.resetStr = setTimeout(function () {
                        o.elements.input.val("")
                    }, o.options.keySearchTimeout), t.length && c.each(o.items, function (t, e) {
                        if (!e.disabled) {
                            if (n.test(e.text) || n.test(e.slug)) return void o.highlight(t);
                            if (e.alt)
                                for (var i = e.alt.split("|"), s = 0; s < i.length && i[s]; s++)
                                    if (n.test(i[s].trim())) return void o.highlight(t)
                        }
                    })
                })), o.$li.on({
                    mousedown: function (t) {
                        t.preventDefault(), t.stopPropagation()
                    },
                    click: function () {
                        return o.select(c(this).data("index")), !1
                    }
                })
            },
            handleKeys: function (t) {
                var e = this,
                    i = t.which,
                    s = e.options.keys,
                    n = -1 < c.inArray(i, s.previous),
                    o = -1 < c.inArray(i, s.next),
                    a = -1 < c.inArray(i, s.select),
                    r = -1 < c.inArray(i, s.open),
                    l = e.state.highlightedIdx,
                    h = n && 0 === l || o && l + 1 === e.items.length,
                    d = 0;
                if (13 !== i && 32 !== i || t.preventDefault(), n || o) {
                    if (!e.options.allowWrap && h) return;
                    n && (d = e.utils.previousEnabledItem(e.lookupItems, l)), o && (d = e.utils.nextEnabledItem(e.lookupItems, l)), e.highlight(d)
                }
                if (a && e.state.opened) return e.select(l), void(e.state.multiple && e.options.multiple.keepMenuOpen || e.close());
                r && !e.state.opened && e.open()
            },
            refresh: function () {
                this.populate(), this.activate(), this.utils.triggerCallback("Refresh", this)
            },
            setOptionsDimensions: function () {
                var t = this,
                    e = t.elements.items.closest(":visible").children(":hidden").addClass(t.classes.tempshow),
                    i = t.options.maxHeight,
                    s = t.elements.items.outerWidth(),
                    n = t.elements.wrapper.outerWidth() - (s - t.elements.items.width());
                !t.options.expandToItemText || s < n ? t.finalWidth = n : (t.elements.items.css("overflow", "scroll"), t.elements.outerWrapper.width(9e4), t.finalWidth = t.elements.items.width(), t.elements.items.css("overflow", ""), t.elements.outerWrapper.width("")), t.elements.items.width(t.finalWidth).height() > i && t.elements.items.height(i), e.removeClass(t.classes.tempshow)
            },
            isInViewport: function () {
                var t, e, i, s, n, o, a, r = this;
                !0 === r.options.forceRenderAbove ? r.elements.outerWrapper.addClass(r.classes.above) : !0 === r.options.forceRenderBelow ? r.elements.outerWrapper.addClass(r.classes.below) : (t = l.scrollTop(), e = l.height(), s = (i = r.elements.outerWrapper.offset().top) + r.elements.outerWrapper.outerHeight() + r.itemsHeight <= t + e, n = i - r.itemsHeight > t, a = !(o = !s && n), r.elements.outerWrapper.toggleClass(r.classes.above, o), r.elements.outerWrapper.toggleClass(r.classes.below, a))
            },
            detectItemVisibility: function (t) {
                var e = this,
                    i = e.$li.filter("[data-index]");
                e.state.multiple && (t = c.isArray(t) && 0 === t.length ? 0 : t, t = c.isArray(t) ? Math.min.apply(Math, t) : t);
                var s = i.eq(t).outerHeight(),
                    n = i[t].offsetTop,
                    o = e.elements.itemsScroll.scrollTop(),
                    a = n + 2 * s;
                e.elements.itemsScroll.scrollTop(a > o + e.itemsHeight ? a - e.itemsHeight : n - s < o ? n - s : o)
            },
            open: function (t) {
                var n = this;
                if (n.options.nativeOnMobile && n.utils.isMobile()) return !1;
                n.utils.triggerCallback("BeforeOpen", n), t && (t.preventDefault(), n.options.stopPropagation && t.stopPropagation()), n.state.enabled && (n.setOptionsDimensions(), c("." + n.classes.hideselect, "." + n.classes.open).children().selectric("close"), n.state.opened = !0, n.itemsHeight = n.elements.items.outerHeight(), n.itemsInnerHeight = n.elements.items.height(), n.elements.outerWrapper.addClass(n.classes.open), n.elements.input.val(""), t && "focusin" !== t.type && n.elements.input.focus(), setTimeout(function () {
                    e.on("click.sl", c.proxy(n.close, n)).on("scroll.sl", c.proxy(n.isInViewport, n))
                }, 1), n.isInViewport(), n.options.preventWindowScroll && e.on("mousewheel.sl DOMMouseScroll.sl", "." + n.classes.scroll, function (t) {
                    var e = t.originalEvent,
                        i = c(this).scrollTop(),
                        s = 0;
                    "detail" in e && (s = -1 * e.detail), "wheelDelta" in e && (s = e.wheelDelta), "wheelDeltaY" in e && (s = e.wheelDeltaY), "deltaY" in e && (s = -1 * e.deltaY), (i === this.scrollHeight - n.itemsInnerHeight && s < 0 || 0 === i && 0 < s) && t.preventDefault()
                }), n.detectItemVisibility(n.state.selectedIdx), n.highlight(n.state.multiple ? -1 : n.state.selectedIdx), n.utils.triggerCallback("Open", n))
            },
            close: function () {
                var t = this;
                t.utils.triggerCallback("BeforeClose", t), e.off(".sl"), t.elements.outerWrapper.removeClass(t.classes.open), t.state.opened = !1, t.utils.triggerCallback("Close", t)
            },
            change: function () {
                var i = this;
                i.utils.triggerCallback("BeforeChange", i), i.state.multiple ? (c.each(i.lookupItems, function (t) {
                    i.lookupItems[t].selected = !1, i.$element.find("option").prop("selected", !1)
                }), c.each(i.state.selectedIdx, function (t, e) {
                    i.lookupItems[e].selected = !0, i.$element.find("option").eq(e).prop("selected", !0)
                }), i.state.currValue = i.state.selectedIdx, i.setLabel(), i.utils.triggerCallback("Change", i)) : i.state.currValue !== i.state.selectedIdx && (i.$element.prop("selectedIndex", i.state.currValue = i.state.selectedIdx).data("value", i.lookupItems[i.state.selectedIdx].text), i.setLabel(), i.utils.triggerCallback("Change", i))
            },
            highlight: function (t) {
                var e = this,
                    i = e.$li.filter("[data-index]").removeClass("highlighted");
                e.utils.triggerCallback("BeforeHighlight", e), void 0 === t || -1 === t || e.lookupItems[t].disabled || (i.eq(e.state.highlightedIdx = t).addClass("highlighted"), e.detectItemVisibility(t), e.utils.triggerCallback("Highlight", e))
            },
            select: function (t) {
                var e, i = this,
                    s = i.$li.filter("[data-index]");
                i.utils.triggerCallback("BeforeSelect", i, t), void 0 === t || -1 === t || i.lookupItems[t].disabled || (i.state.multiple ? (i.state.selectedIdx = c.isArray(i.state.selectedIdx) ? i.state.selectedIdx : [i.state.selectedIdx], -1 !== (e = c.inArray(t, i.state.selectedIdx)) ? i.state.selectedIdx.splice(e, 1) : i.state.selectedIdx.push(t), s.removeClass("selected").filter(function (t) {
                    return -1 !== c.inArray(t, i.state.selectedIdx)
                }).addClass("selected")) : s.removeClass("selected").eq(i.state.selectedIdx = t).addClass("selected"), i.state.multiple && i.options.multiple.keepMenuOpen || i.close(), i.change(), i.utils.triggerCallback("Select", i, t))
            },
            destroy: function (t) {
                var e = this;
                e.state && e.state.enabled && (e.elements.items.add(e.elements.wrapper).add(e.elements.input).remove(), t || e.$element.removeData("selectric").removeData("value"), e.$element.prop("tabindex", e.originalTabindex).off(".sl").off(e.eventTriggers).unwrap().unwrap(), e.state.enabled = !1)
            }
        }, c.fn.selectric = function (e) {
            return this.each(function () {
                var t = c.data(this, "selectric");
                t && !t.disableOnMobile ? "string" == typeof e && t[e] ? t[e]() : t.init(e) : c.data(this, "selectric", new i(this, e))
            })
        }, c.fn.selectric.defaults = {
            onChange: function (t) {
                c(t).change()
            },
            maxHeight: 300,
            keySearchTimeout: 500,
            arrowButtonMarkup: '<b class="button">&#x25be;</b>',
            disableOnMobile: !1,
            nativeOnMobile: !0,
            openOnFocus: !0,
            openOnHover: !1,
            hoverIntentTimeout: 500,
            expandToItemText: !1,
            responsive: !1,
            preventWindowScroll: !0,
            inheritOriginalWidth: !1,
            allowWrap: !0,
            forceRenderAbove: !1,
            forceRenderBelow: !1,
            stopPropagation: !0,
            optionsItemBuilder: "{text}",
            labelBuilder: "{text}",
            listBuilder: !1,
            keys: {
                previous: [37, 38],
                next: [39, 40],
                select: [9, 13, 27],
                open: [13, 32, 37, 38, 39, 40],
                close: [9, 27]
            },
            customClass: {
                prefix: "selectric",
                camelCase: !1
            },
            multiple: {
                separator: ", ",
                keepMenuOpen: !0,
                maxLabelEntries: !1
            }
        }
    }),
    function (e, i) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
            return i(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
    }(window, function (t, e) {
        "use strict";

        function i(h, n, d) {
            (d = d || e || t.jQuery) && (n.prototype.option || (n.prototype.option = function (t) {
                d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t))
            }), d.fn[h] = function (t) {
                if ("string" != typeof t) return s = t, this.each(function (t, e) {
                    var i = d.data(e, h);
                    i ? (i.option(s), i._init()) : (i = new n(e, s), d.data(e, h, i))
                }), this;
                var e, o, a, r, l, s, i = c.call(arguments, 1);
                return a = i, l = "$()." + h + '("' + (o = t) + '")', (e = this).each(function (t, e) {
                    var i, s, n = d.data(e, h);
                    n ? (i = n[o]) && "_" != o.charAt(0) ? (s = i.apply(n, a), r = void 0 === r ? s : r) : u(l + " is not a valid method") : u(h + " not initialized. Cannot call methods, i.e. " + l)
                }), void 0 !== r ? r : e
            }, s(d))
        }

        function s(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var c = Array.prototype.slice,
            n = t.console,
            u = void 0 === n ? function () {} : function (t) {
                n.error(t)
            };
        return s(e || t.jQuery), i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    s = i[t] = i[t] || [];
                return -1 == s.indexOf(e) && s.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var s = i.indexOf(e);
                return -1 != s && i.splice(s, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                    var o = i[n];
                    s && s[o] && (this.off(t, o), delete s[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function () {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";

        function w(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function x(t) {
            var e = getComputedStyle(t);
            return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
        }

        function _(t) {
            if (C || (C = !0, (v = document.createElement("div")).style.width = "200px", v.style.padding = "1px 2px 3px 4px", v.style.borderStyle = "solid", v.style.borderWidth = "1px 2px 3px 4px", v.style.boxSizing = "border-box", (y = document.body || document.documentElement).appendChild(v), b = x(v), S = 200 == Math.round(w(b.width)), _.isBoxSizeOuter = S, y.removeChild(v)), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = x(t);
                if ("none" == e.display) return function () {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < E; e++) {
                        t[T[e]] = 0
                    }
                    return t
                }();
                var i = {};
                i.width = t.offsetWidth, i.height = t.offsetHeight;
                for (var s = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < E; n++) {
                    var o = T[n],
                        a = e[o],
                        r = parseFloat(a);
                    i[o] = isNaN(r) ? 0 : r
                }
                var l = i.paddingLeft + i.paddingRight,
                    h = i.paddingTop + i.paddingBottom,
                    d = i.marginLeft + i.marginRight,
                    c = i.marginTop + i.marginBottom,
                    u = i.borderLeftWidth + i.borderRightWidth,
                    p = i.borderTopWidth + i.borderBottomWidth,
                    f = s && S,
                    m = w(e.width);
                !1 !== m && (i.width = m + (f ? 0 : l + u));
                var g = w(e.height);
                return !1 !== g && (i.height = g + (f ? 0 : h + p)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (h + p), i.outerWidth = i.width + d, i.outerHeight = i.height + c, i
            }
            var v, y, b
        }
        var S, i = "undefined" == typeof console ? function () {} : function (t) {
                console.error(t)
            },
            T = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            E = T.length,
            C = !1;
        return _
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var i = function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var s = e[i] + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        return function (t, e) {
            return t[i](e)
        }
    }),
    function (e, i) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
            return i(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
    }(window, function (h, o) {
        var d = {
                extend: function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function (t, e) {
                    return (t % e + e) % e
                }
            },
            e = Array.prototype.slice;
        d.makeArray = function (t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
        }, d.removeFrom = function (t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, d.getParent = function (t, e) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, o(t, e)) return t
        }, d.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, d.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, d.filterFindElements = function (t, s) {
            t = d.makeArray(t);
            var n = [];
            return t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                    if (!s) return void n.push(t);
                    o(t, s) && n.push(t);
                    for (var e = t.querySelectorAll(s), i = 0; i < e.length; i++) n.push(e[i])
                }
            }), n
        }, d.debounceMethod = function (t, e, s) {
            s = s || 100;
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[o];
                clearTimeout(t);
                var e = arguments,
                    i = this;
                this[o] = setTimeout(function () {
                    n.apply(i, e), delete i[o]
                }, s)
            }
        }, d.docReady = function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, d.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var c = h.console;
        return d.htmlInit = function (r, l) {
            d.docReady(function () {
                var t = d.toDashed(l),
                    n = "data-" + t,
                    e = document.querySelectorAll("[" + n + "]"),
                    i = document.querySelectorAll(".js-" + t),
                    s = d.makeArray(e).concat(d.makeArray(i)),
                    o = n + "-options",
                    a = h.jQuery;
                s.forEach(function (e) {
                    var t, i = e.getAttribute(n) || e.getAttribute(o);
                    try {
                        t = i && JSON.parse(i)
                    } catch (t) {
                        return void(c && c.error("Error parsing " + n + " on " + e.className + ": " + t))
                    }
                    var s = new r(e, t);
                    a && a.data(e, l, s)
                })
            })
        }, d
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";

        function i(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var s = document.documentElement.style,
            n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            o = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            a = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [n],
            r = {
                transform: o,
                transition: n,
                transitionDuration: n + "Duration",
                transitionProperty: n + "Property",
                transitionDelay: n + "Delay"
            },
            l = i.prototype = Object.create(t.prototype);
        l.constructor = i, l._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function () {
            this.size = e(this.element)
        }, l.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                e[r[i] || i] = t[i]
            }
        }, l.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                s = t[e ? "left" : "right"],
                n = t[i ? "top" : "bottom"],
                o = parseFloat(s),
                a = parseFloat(n),
                r = this.layout.size; - 1 != s.indexOf("%") && (o = o / 100 * r.width), -1 != n.indexOf("%") && (a = a / 100 * r.height), o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = o, this.position.y = a
        }, l.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                s = this.layout._getOption("originTop"),
                n = i ? "paddingLeft" : "paddingRight",
                o = i ? "left" : "right",
                a = i ? "right" : "left",
                r = this.position.x + t[n];
            e[o] = this.getXValue(r), e[a] = "";
            var l = s ? "paddingTop" : "paddingBottom",
                h = s ? "top" : "bottom",
                d = s ? "bottom" : "top",
                c = this.position.y + t[l];
            e[h] = this.getYValue(c), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function (t, e) {
            this.getPosition();
            var i, s, n, o = this.position.x,
                a = this.position.y,
                r = t == this.position.x && e == this.position.y;
            this.setPosition(t, e), !r || this.isTransitioning ? (i = t - o, s = e - a, (n = {}).transform = this.getTranslate(i, s), this.transition({
                to: n,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })) : this.layoutPosition()
        }, l.getTranslate = function (t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
            this.position.x = parseFloat(t), this.position.y = parseFloat(e)
        }, l._nonTransition = function (t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function (t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                t.from && (this.css(t.from), this.element.offsetHeight, 0), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var h = "opacity," + o.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        });
        l.enableTransition = function () {
            var t;
            this.isTransitioning || (t = "number" == typeof (t = this.layout.options.transitionDuration) ? t + "ms" : t, this.css({
                transitionProperty: h,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(a, this, !1))
        }, l.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var d = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function (t) {
            var e, i;
            t.target === this.element && (e = this._transn, i = d[t.propertyName] || t.propertyName, delete e.ingProperties[i], function (t) {
                for (var e in t) return;
                return 1
            }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
        }, l.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function () {
            this.css(c)
        }, l.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function () {
            return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, l.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, l.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, i
    }),
    function (n, o) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, s) {
            return o(n, t, e, i, s)
        }) : "object" == typeof module && module.exports ? module.exports = o(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = o(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
    }(window, function (t, e, n, o, s) {
        "use strict";

        function a(t, e) {
            var i, s = o.getQueryElement(t);
            s ? (this.element = s, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e), i = ++d, this.element.outlayerGUID = i, (c[i] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (s || t))
        }

        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return (e.prototype = Object.create(t.prototype)).constructor = e
        }

        function i() {}
        var l = t.console,
            h = t.jQuery,
            d = 0,
            c = {};
        a.namespace = "outlayer", a.Item = s, a.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var u = a.prototype;
        o.extend(u, e.prototype), u.option = function (t) {
            o.extend(this.options, t)
        }, u._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, a.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, u._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, u.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, u._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, s = [], n = 0; n < e.length; n++) {
                var o = new i(e[n], this);
                s.push(o)
            }
            return s
        }, u._filterFindItemElements = function (t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, u.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element
            })
        }, u.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, u._init = u.layout, u._resetLayout = function () {
            this.getSize()
        }, u.getSize = function () {
            this.size = n(this.element)
        }, u._getMeasurement = function (t, e) {
            var i, s = this.options[t];
            s ? ("string" == typeof s ? i = this.element.querySelector(s) : s instanceof HTMLElement && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
        }, u.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, u._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored
            })
        }, u._layoutItems = function (t, i) {
            var s;
            this._emitCompleteOnItems("layout", t), t && t.length && (s = [], t.forEach(function (t) {
                var e = this._getItemLayoutPosition(t);
                e.item = t, e.isInstant = i || t.isLayoutInstant, s.push(e)
            }, this), this._processLayoutQueue(s))
        }, u._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, u._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, u.updateStagger = function () {
            var t = this.options.stagger;
            return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    i = e && e[1],
                    s = e && e[2];
                return i.length ? (i = parseFloat(i)) * (p[s] || 1) : 0
            }(t), this.stagger)
        }, u._positionItem = function (t, e, i, s, n) {
            s ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
        }, u._postLayout = function () {
            this.resizeContainer()
        }, u.resizeContainer = function () {
            var t;
            !this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }, u._getContainerSize = i, u._setContainerMeasure = function (t, e) {
            var i;
            void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
        }, u._emitCompleteOnItems = function (e, t) {
            function i() {
                o.dispatchEvent(e + "Complete", null, [t])
            }

            function s() {
                ++n == a && i()
            }
            var n, o = this,
                a = t.length;
            t && a ? (n = 0, t.forEach(function (t) {
                t.once(e, s)
            })) : i()
        }, u.dispatchEvent = function (t, e, i) {
            var s, n = e ? [e].concat(i) : i;
            this.emitEvent(t, n), h && (this.$element = this.$element || h(this.element), e ? ((s = h.Event(e)).type = t, this.$element.trigger(s, i)) : this.$element.trigger(t, i))
        }, u.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, u.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, u.stamp = function (t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, u.unstamp = function (t) {
            (t = this._find(t)) && t.forEach(function (t) {
                o.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, u._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
        }, u._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, u._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, u._manageStamp = i, u._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                s = n(t);
            return {
                left: e.left - i.left - s.marginLeft,
                top: e.top - i.top - s.marginTop,
                right: i.right - e.right - s.marginRight,
                bottom: i.bottom - e.bottom - s.marginBottom
            }
        }, u.handleEvent = o.handleEvent, u.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, u.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, u.onresize = function () {
            this.resize()
        }, o.debounceMethod(a, "onresize", 100), u.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, u.needsResizeLayout = function () {
            var t = n(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, u.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, u.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, u.prepended = function (t) {
            var e, i = this._itemize(t);
            i.length && (e = this.items.slice(0), this.items = i.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(i, !0), this.reveal(i), this.layoutItems(e))
        }, u.reveal = function (t) {
            var i;
            this._emitCompleteOnItems("reveal", t), t && t.length && (i = this.updateStagger(), t.forEach(function (t, e) {
                t.stagger(e * i), t.reveal()
            }))
        }, u.hide = function (t) {
            var i;
            this._emitCompleteOnItems("hide", t), t && t.length && (i = this.updateStagger(), t.forEach(function (t, e) {
                t.stagger(e * i), t.hide()
            }))
        }, u.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, u.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, u.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, u.getItems = function (t) {
            t = o.makeArray(t);
            var i = [];
            return t.forEach(function (t) {
                var e = this.getItem(t);
                e && i.push(e)
            }, this), i
        }, u.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
                t.remove(), o.removeFrom(this.items, t)
            }, this)
        }, u.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete c[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
        }, a.data = function (t) {
            var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
            return e && c[e]
        }, a.create = function (t, e) {
            var i = r(a);
            return i.defaults = o.extend({}, a.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, a.compatOptions), i.namespace = t, i.data = a.data, i.Item = r(s), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
        };
        var p = {
            ms: 1,
            s: 1e3
        };
        return a.Item = s, a
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, h) {
        var e = t.create("masonry");
        e.compatOptions.fitWidth = "isFitWidth";
        var i = e.prototype;
        return i._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, i.measureColumns = function () {
            var t, e;
            this.getContainerWidth(), this.columnWidth || (e = (t = this.items[0]) && t.element, this.columnWidth = e && h(e).outerWidth || this.containerWidth);
            var i = this.columnWidth += this.gutter,
                s = this.containerWidth + this.gutter,
                n = s / i,
                o = i - s % i,
                n = Math[o && o < 1 ? "round" : "floor"](n);
            this.cols = Math.max(n, 1)
        }, i.getContainerWidth = function () {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                e = h(t);
            this.containerWidth = e && e.innerWidth
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            for (var e = t.size.outerWidth % this.columnWidth, i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), i = Math.min(i, this.cols), s = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), n = {
                x: this.columnWidth * s.col,
                y: s.y
            }, o = s.y + t.size.outerHeight, a = i + s.col, r = s.col; r < a; r++) this.colYs[r] = o;
            return n
        }, i._getTopColPosition = function (t) {
            var e = this._getTopColGroup(t),
                i = Math.min.apply(Math, e);
            return {
                col: e.indexOf(i),
                y: i
            }
        }, i._getTopColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++) e[s] = this._getColGroupY(s, t);
            return e
        }, i._getColGroupY = function (t, e) {
            if (e < 2) return this.colYs[t];
            var i = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, i)
        }, i._getHorizontalColPosition = function (t, e) {
            var i = this.horizontalColIndex % this.cols,
                i = 1 < t && i + t > this.cols ? 0 : i,
                s = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = s ? i + t : this.horizontalColIndex, {
                col: i,
                y: this._getColGroupY(i, t)
            }
        }, i._manageStamp = function (t) {
            var e = h(t),
                i = this._getElementOffset(t),
                s = this._getOption("originLeft") ? i.left : i.right,
                n = s + e.outerWidth,
                o = Math.floor(s / this.columnWidth),
                o = Math.max(0, o),
                a = Math.floor(n / this.columnWidth);
            a -= n % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var r = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = o; l <= a; l++) this.colYs[l] = Math.max(r, this.colYs[l])
        }, i._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, e
    }),
    function (t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
    }(function () {
        return function o(a, r, l) {
            function h(e, t) {
                if (!r[e]) {
                    if (!a[e]) {
                        var i = "function" == typeof require && require;
                        if (!t && i) return i(e, !0);
                        if (d) return d(e, !0);
                        var s = new Error("Cannot find module '" + e + "'");
                        throw s.code = "MODULE_NOT_FOUND", s
                    }
                    var n = r[e] = {
                        exports: {}
                    };
                    a[e][0].call(n.exports, function (t) {
                        return h(a[e][1][t] || t)
                    }, n, n.exports, o, a, r, l)
                }
                return r[e].exports
            }
            for (var d = "function" == typeof require && require, t = 0; t < l.length; t++) h(l[t]);
            return h
        }({
            1: [function (t, e, i) {
                "use strict";
                var l = Object.getOwnPropertySymbols,
                    h = Object.prototype.hasOwnProperty,
                    d = Object.prototype.propertyIsEnumerable;
                e.exports = function () {
                    try {
                        if (!Object.assign) return;
                        var t = new String("abc");
                        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return;
                        for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                        if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                            return e[t]
                        }).join("")) return;
                        var s = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                            s[t] = t
                        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
                    } catch (t) {
                        return
                    }
                }() ? Object.assign : function (t, e) {
                    for (var i, s, n = function (t) {
                        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(t)
                    }(t), o = 1; o < arguments.length; o++) {
                        for (var a in i = Object(arguments[o])) h.call(i, a) && (n[a] = i[a]);
                        if (l) {
                            s = l(i);
                            for (var r = 0; r < s.length; r++) d.call(i, s[r]) && (n[s[r]] = i[s[r]])
                        }
                    }
                    return n
                }
            }, {}],
            2: [function (t, r, e) {
                (function (a) {
                    (function () {
                        var t, e, i, s, n, o;
                        "undefined" != typeof performance && null !== performance && performance.now ? r.exports = function () {
                            return performance.now()
                        } : null != a && a.hrtime ? (r.exports = function () {
                            return (t() - n) / 1e6
                        }, e = a.hrtime, s = (t = function () {
                            var t;
                            return 1e9 * (t = e())[0] + t[1]
                        })(), o = 1e9 * a.uptime(), n = s - o) : i = Date.now ? (r.exports = function () {
                            return Date.now() - i
                        }, Date.now()) : (r.exports = function () {
                            return (new Date).getTime() - i
                        }, (new Date).getTime())
                    }).call(this)
                }).call(this, t("_process"))
            }, {
                _process: 3
            }],
            3: [function (t, e, i) {
                function s() {
                    throw new Error("setTimeout has not been defined")
                }

                function n() {
                    throw new Error("clearTimeout has not been defined")
                }

                function o(e) {
                    if (d === setTimeout) return setTimeout(e, 0);
                    if ((d === s || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
                    try {
                        return d(e, 0)
                    } catch (t) {
                        try {
                            return d.call(null, e, 0)
                        } catch (t) {
                            return d.call(this, e, 0)
                        }
                    }
                }

                function a() {
                    m && p && (m = !1, p.length ? f = p.concat(f) : g = -1, f.length && r())
                }

                function r() {
                    if (!m) {
                        var t = o(a);
                        m = !0;
                        for (var e = f.length; e;) {
                            for (p = f, f = []; ++g < e;) p && p[g].run();
                            g = -1, e = f.length
                        }
                        p = null, m = !1,
                            function (e) {
                                if (c === clearTimeout) return clearTimeout(e);
                                if ((c === n || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
                                try {
                                    c(e)
                                } catch (t) {
                                    try {
                                        return c.call(null, e)
                                    } catch (t) {
                                        return c.call(this, e)
                                    }
                                }
                            }(t)
                    }
                }

                function l(t, e) {
                    this.fun = t, this.array = e
                }

                function h() {}
                var d, c, u = e.exports = {};
                ! function () {
                    try {
                        d = "function" == typeof setTimeout ? setTimeout : s
                    } catch (t) {
                        d = s
                    }
                    try {
                        c = "function" == typeof clearTimeout ? clearTimeout : n
                    } catch (t) {
                        c = n
                    }
                }();
                var p, f = [],
                    m = !1,
                    g = -1;
                u.nextTick = function (t) {
                    var e = new Array(arguments.length - 1);
                    if (1 < arguments.length)
                        for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                    f.push(new l(t, e)), 1 !== f.length || m || o(r)
                }, l.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = h, u.addListener = h, u.once = h, u.off = h, u.removeListener = h, u.removeAllListeners = h, u.emit = h, u.prependListener = h, u.prependOnceListener = h, u.listeners = function (t) {
                    return []
                }, u.binding = function (t) {
                    throw new Error("process.binding is not supported")
                }, u.cwd = function () {
                    return "/"
                }, u.chdir = function (t) {
                    throw new Error("process.chdir is not supported")
                }, u.umask = function () {
                    return 0
                }
            }, {}],
            4: [function (c, u, t) {
                (function (t) {
                    for (var s, n, o, a = c("performance-now"), e = "undefined" == typeof window ? t : window, i = ["moz", "webkit"], r = "AnimationFrame", l = e["request" + r], h = e["cancel" + r] || e["cancelRequest" + r], d = 0; !l && d < i.length; d++) l = e[i[d] + "Request" + r], h = e[i[d] + "Cancel" + r] || e[i[d] + "CancelRequest" + r];
                    l && h || (n = s = 0, o = [], l = function (t) {
                        var e, i;
                        return 0 === o.length && (e = a(), i = Math.max(0, 1e3 / 60 - (e - s)), s = i + e, setTimeout(function () {
                            for (var t = o.slice(0), e = o.length = 0; e < t.length; e++)
                                if (!t[e].cancelled) try {
                                    t[e].callback(s)
                                } catch (t) {
                                    setTimeout(function () {
                                        throw t
                                    }, 0)
                                }
                        }, Math.round(i))), o.push({
                            handle: ++n,
                            callback: t,
                            cancelled: !1
                        }), n
                    }, h = function (t) {
                        for (var e = 0; e < o.length; e++) o[e].handle === t && (o[e].cancelled = !0)
                    }), u.exports = function (t) {
                        return l.call(e, t)
                    }, u.exports.cancel = function () {
                        h.apply(e, arguments)
                    }, u.exports.polyfill = function () {
                        e.requestAnimationFrame = l, e.cancelAnimationFrame = h
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "performance-now": 2
            }],
            5: [function (t, e, i) {
                "use strict";
                var s = function (t, e, i) {
                        return e && h(t.prototype, e), i && h(t, i), t
                    },
                    l = t("raf"),
                    n = t("object-assign"),
                    p = {
                        propertyCache: {},
                        vendors: [null, ["-webkit-", "webkit"],
                            ["-moz-", "Moz"],
                            ["-o-", "O"],
                            ["-ms-", "ms"]
                        ],
                        clamp: function (t, e, i) {
                            return e < i ? t < e ? e : i < t ? i : t : t < i ? i : e < t ? e : t
                        },
                        data: function (t, e) {
                            return p.deserialize(t.getAttribute("data-" + e))
                        },
                        deserialize: function (t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
                        },
                        camelCase: function (t) {
                            return t.replace(/-+(.)?/g, function (t, e) {
                                return e ? e.toUpperCase() : ""
                            })
                        },
                        accelerate: function (t) {
                            p.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), p.css(t, "transform-style", "preserve-3d"), p.css(t, "backface-visibility", "hidden")
                        },
                        transformSupport: function (t) {
                            for (var e, i, s, n, o = document.createElement("div"), a = !1, r = null, l = !1, h = null, d = null, c = 0, u = p.vendors.length; c < u; c++)
                                if (d = null !== p.vendors[c] ? (h = p.vendors[c][0] + "transform", p.vendors[c][1] + "Transform") : h = "transform", void 0 !== o.style[d]) {
                                    a = !0;
                                    break
                                } switch (t) {
                                case "2D":
                                    l = a;
                                    break;
                                case "3D":
                                    a && (e = document.body || document.createElement("body"), s = (i = document.documentElement).style.overflow, n = !1, document.body || (n = !0, i.style.overflow = "hidden", i.appendChild(e), e.style.overflow = "hidden", e.style.background = ""), e.appendChild(o), o.style[d] = "translate3d(1px,1px,1px)", l = void 0 !== (r = window.getComputedStyle(o).getPropertyValue(h)) && 0 < r.length && "none" !== r, i.style.overflow = s, e.removeChild(o), n && (e.removeAttribute("style"), e.parentNode.removeChild(e)))
                            }
                            return l
                        },
                        css: function (t, e, i) {
                            var s = p.propertyCache[e];
                            if (!s)
                                for (var n = 0, o = p.vendors.length; n < o; n++)
                                    if (s = null !== p.vendors[n] ? p.camelCase(p.vendors[n][1] + "-" + e) : e, void 0 !== t.style[s]) {
                                        p.propertyCache[e] = s;
                                        break
                                    } t.style[s] = i
                        }
                    },
                    o = {
                        relativeInput: !1,
                        clipRelativeInput: !1,
                        inputElement: null,
                        hoverOnly: !1,
                        calibrationThreshold: 100,
                        calibrationDelay: 500,
                        supportDelay: 500,
                        calibrateX: !1,
                        calibrateY: !0,
                        invertX: !0,
                        invertY: !0,
                        limitX: !1,
                        limitY: !1,
                        scalarX: 10,
                        scalarY: 10,
                        frictionX: .1,
                        frictionY: .1,
                        originX: .5,
                        originY: .5,
                        pointerEvents: !1,
                        precision: 1,
                        onReady: null,
                        selector: null
                    },
                    a = (s(r, [{
                        key: "initialise",
                        value: function () {
                            void 0 === this.transform2DSupport && (this.transform2DSupport = p.transformSupport("2D"), this.transform3DSupport = p.transformSupport("3D")), this.transform3DSupport && p.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                        }
                    }, {
                        key: "doReadyCallback",
                        value: function () {
                            this.onReady && this.onReady()
                        }
                    }, {
                        key: "updateLayers",
                        value: function () {
                            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                            for (var t = 0; t < this.layers.length; t++) {
                                var e = this.layers[t];
                                this.transform3DSupport && p.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                                var i = p.data(e, "depth") || 0;
                                this.depthsX.push(p.data(e, "depth-x") || i), this.depthsY.push(p.data(e, "depth-y") || i)
                            }
                        }
                    }, {
                        key: "updateDimensions",
                        value: function () {
                            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                        }
                    }, {
                        key: "updateBounds",
                        value: function () {
                            this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                        }
                    }, {
                        key: "queueCalibration",
                        value: function (t) {
                            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
                        }
                    }, {
                        key: "enable",
                        value: function () {
                            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = l(this.onAnimationFrame))
                        }
                    }, {
                        key: "disable",
                        value: function () {
                            this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), l.cancel(this.raf))
                        }
                    }, {
                        key: "calibrate",
                        value: function (t, e) {
                            this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
                        }
                    }, {
                        key: "invert",
                        value: function (t, e) {
                            this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
                        }
                    }, {
                        key: "friction",
                        value: function (t, e) {
                            this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
                        }
                    }, {
                        key: "scalar",
                        value: function (t, e) {
                            this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
                        }
                    }, {
                        key: "limit",
                        value: function (t, e) {
                            this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
                        }
                    }, {
                        key: "origin",
                        value: function (t, e) {
                            this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
                        }
                    }, {
                        key: "setInputElement",
                        value: function (t) {
                            this.inputElement = t, this.updateDimensions()
                        }
                    }, {
                        key: "setPosition",
                        value: function (t, e, i) {
                            e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? p.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? p.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
                        }
                    }, {
                        key: "onOrientationTimer",
                        value: function () {
                            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onMotionTimer",
                        value: function () {
                            this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onCalibrationTimer",
                        value: function () {
                            this.calibrationFlag = !0
                        }
                    }, {
                        key: "onWindowResize",
                        value: function () {
                            this.updateDimensions()
                        }
                    }, {
                        key: "onAnimationFrame",
                        value: function () {
                            this.updateBounds();
                            var t = this.inputX - this.calibrationX,
                                e = this.inputY - this.calibrationY;
                            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = p.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = p.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var i = 0; i < this.layers.length; i++) {
                                var s = this.layers[i],
                                    n = this.depthsX[i],
                                    o = this.depthsY[i],
                                    a = this.velocityX * (n * (this.invertX ? -1 : 1)),
                                    r = this.velocityY * (o * (this.invertY ? -1 : 1));
                                this.setPosition(s, a, r)
                            }
                            this.raf = l(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function (t, e) {
                            var i = (t || 0) / 30,
                                s = (e || 0) / 30,
                                n = this.windowHeight > this.windowWidth;
                            this.portrait !== n && (this.portrait = n, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = s), this.inputX = i, this.inputY = s
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function (t) {
                            var e = t.beta,
                                i = t.gamma;
                            null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function (t) {
                            var e = t.rotationRate.beta,
                                i = t.rotationRate.gamma;
                            null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function (t) {
                            var e = t.clientX,
                                i = t.clientY;
                            if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
                            this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                            for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                            delete this.element, delete this.layers
                        }
                    }, {
                        key: "version",
                        value: function () {
                            return "3.1.0"
                        }
                    }]), r);

                function r(t, e) {
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, r), this.element = t;
                    var i = {
                        calibrateX: p.data(this.element, "calibrate-x"),
                        calibrateY: p.data(this.element, "calibrate-y"),
                        invertX: p.data(this.element, "invert-x"),
                        invertY: p.data(this.element, "invert-y"),
                        limitX: p.data(this.element, "limit-x"),
                        limitY: p.data(this.element, "limit-y"),
                        scalarX: p.data(this.element, "scalar-x"),
                        scalarY: p.data(this.element, "scalar-y"),
                        frictionX: p.data(this.element, "friction-x"),
                        frictionY: p.data(this.element, "friction-y"),
                        originX: p.data(this.element, "origin-x"),
                        originY: p.data(this.element, "origin-y"),
                        pointerEvents: p.data(this.element, "pointer-events"),
                        precision: p.data(this.element, "precision"),
                        relativeInput: p.data(this.element, "relative-input"),
                        clipRelativeInput: p.data(this.element, "clip-relative-input"),
                        hoverOnly: p.data(this.element, "hover-only"),
                        inputElement: document.querySelector(p.data(this.element, "input-element")),
                        selector: p.data(this.element, "selector")
                    };
                    for (var s in i) null === i[s] && delete i[s];
                    n(this, o, i, e), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                }

                function h(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }
                e.exports = a
            }, {
                "object-assign": 1,
                raf: 4
            }]
        }, {}, [5])(5)
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Rellax = e()
    }("undefined" != typeof window ? window : global, function () {
        var c = function (t, e) {
            var S = Object.create(c.prototype),
                o = 0,
                T = 0,
                a = 0,
                E = 0,
                C = [],
                k = !0,
                i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (t) {
                    return setTimeout(t, 1e3 / 60)
                },
                s = null,
                n = !1;
            try {
                var r = Object.defineProperty({}, "passive", {
                    get: function () {
                        n = !0
                    }
                });
                window.addEventListener("testPassive", null, r), window.removeEventListener("testPassive", null, r)
            } catch (t) {}
            var l = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
                h = window.transformProp || function () {
                    var t = document.createElement("div");
                    if (null === t.style.transform) {
                        var e, i = ["Webkit", "Moz", "ms"];
                        for (e in i)
                            if (void 0 !== t.style[i[e] + "Transform"]) return i[e] + "Transform"
                    }
                    return "transform"
                }();
            if (S.options = {
                speed: -2,
                verticalSpeed: null,
                horizontalSpeed: null,
                breakpoints: [576, 768, 1201],
                center: !1,
                wrapper: null,
                relativeToWrapper: !1,
                round: !0,
                vertical: !0,
                horizontal: !1,
                verticalScrollAxis: "y",
                horizontalScrollAxis: "x",
                callback: function () {}
            }, e && Object.keys(e).forEach(function (t) {
                S.options[t] = e[t]
            }), e && e.breakpoints && function () {
                if (3 === S.options.breakpoints.length && Array.isArray(S.options.breakpoints)) {
                    var e, i = !0,
                        s = !0;
                    if (S.options.breakpoints.forEach(function (t) {
                        "number" != typeof t && (s = !1), null !== e && t < e && (i = !1), e = t
                    }), i && s) return
                }
                S.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
            }(), 0 < (r = "string" == typeof (t = t || ".rellax") ? document.querySelectorAll(t) : [t]).length) {
                if (S.elems = r, S.options.wrapper && !S.options.wrapper.nodeType) {
                    if (!(r = document.querySelector(S.options.wrapper))) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                    S.options.wrapper = r
                }
                var M, I = function () {
                        for (var t = 0; t < C.length; t++) S.elems[t].style.cssText = C[t].style;
                        for (C = [], T = window.innerHeight, E = window.innerWidth, t = S.options.breakpoints, M = E < t[0] ? "xs" : E >= t[0] && E < t[1] ? "sm" : E >= t[1] && E < t[2] ? "md" : "lg", z(), t = 0; t < S.elems.length; t++) {
                            var e = void 0,
                                i = S.elems[t],
                                s = i.getAttribute("data-rellax-percentage"),
                                n = i.getAttribute("data-rellax-speed"),
                                o = i.getAttribute("data-rellax-xs-speed"),
                                a = i.getAttribute("data-rellax-mobile-speed"),
                                r = i.getAttribute("data-rellax-tablet-speed"),
                                l = i.getAttribute("data-rellax-desktop-speed"),
                                h = i.getAttribute("data-rellax-vertical-speed"),
                                d = i.getAttribute("data-rellax-horizontal-speed"),
                                c = i.getAttribute("data-rellax-vertical-scroll-axis"),
                                u = i.getAttribute("data-rellax-horizontal-scroll-axis"),
                                p = i.getAttribute("data-rellax-zindex") || 0,
                                f = i.getAttribute("data-rellax-min"),
                                m = i.getAttribute("data-rellax-max"),
                                g = i.getAttribute("data-rellax-min-x"),
                                v = i.getAttribute("data-rellax-max-x"),
                                y = i.getAttribute("data-rellax-min-y"),
                                b = i.getAttribute("data-rellax-max-y"),
                                w = !0;
                            o || a || r || l ? e = {
                                xs: o,
                                sm: a,
                                md: r,
                                lg: l
                            } : w = !1, o = S.options.wrapper ? S.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, S.options.relativeToWrapper && (o = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - S.options.wrapper.offsetTop);
                            var x = S.options.vertical && (s || S.options.center) ? o : 0,
                                _ = S.options.horizontal && (s || S.options.center) ? S.options.wrapper ? S.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                                o = x + i.getBoundingClientRect().top,
                                a = i.clientHeight || i.offsetHeight || i.scrollHeight,
                                r = _ + i.getBoundingClientRect().left,
                                l = i.clientWidth || i.offsetWidth || i.scrollWidth,
                                x = s || (x - o + T) / (a + T),
                                s = s || (_ - r + E) / (l + E);
                            S.options.center && (x = s = .5), e = w && null !== e[M] ? Number(e[M]) : n || S.options.speed, h = h || S.options.verticalSpeed, d = d || S.options.horizontalSpeed, c = c || S.options.verticalScrollAxis, u = u || S.options.horizontalScrollAxis, n = $(s, x, e, h, d), i = i.style.cssText, w = "", (s = /transform\s*:/i.exec(i)) && (w = (s = (w = i.slice(s.index)).indexOf(";")) ? " " + w.slice(11, s).replace(/\s/g, "") : " " + w.slice(11).replace(/\s/g, "")), C.push({
                                baseX: n.x,
                                baseY: n.y,
                                top: o,
                                left: r,
                                height: a,
                                width: l,
                                speed: e,
                                verticalSpeed: h,
                                horizontalSpeed: d,
                                verticalScrollAxis: c,
                                horizontalScrollAxis: u,
                                style: i,
                                transform: w,
                                zindex: p,
                                min: f,
                                max: m,
                                minX: g,
                                maxX: v,
                                minY: y,
                                maxY: b
                            })
                        }
                        L(), k && (window.addEventListener("resize", I), k = !1, P())
                    },
                    z = function () {
                        var t = o,
                            e = a;
                        return o = S.options.wrapper ? S.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, a = S.options.wrapper ? S.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, S.options.relativeToWrapper && (o = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - S.options.wrapper.offsetTop), !!(t != o && S.options.vertical || e != a && S.options.horizontal)
                    },
                    $ = function (t, e, i, s, n) {
                        var o = {};
                        return t = 100 * (n || i) * (1 - t), e = 100 * (s || i) * (1 - e), o.x = S.options.round ? Math.round(t) : Math.round(100 * t) / 100, o.y = S.options.round ? Math.round(e) : Math.round(100 * e) / 100, o
                    },
                    d = function () {
                        window.removeEventListener("resize", d), window.removeEventListener("orientationchange", d), (S.options.wrapper ? S.options.wrapper : window).removeEventListener("scroll", d), (S.options.wrapper ? S.options.wrapper : document).removeEventListener("touchmove", d), s = i(P)
                    },
                    P = function () {
                        z() && !1 === k ? (L(), s = i(P)) : (s = null, window.addEventListener("resize", d), window.addEventListener("orientationchange", d), (S.options.wrapper ? S.options.wrapper : window).addEventListener("scroll", d, !!n && {
                            passive: !0
                        }), (S.options.wrapper ? S.options.wrapper : document).addEventListener("touchmove", d, !!n && {
                            passive: !0
                        }))
                    },
                    L = function () {
                        for (var t = 0; t < S.elems.length; t++) {
                            var e = C[t].verticalScrollAxis.toLowerCase(),
                                i = C[t].horizontalScrollAxis.toLowerCase(),
                                s = -1 != e.indexOf("x") ? o : 0,
                                e = -1 != e.indexOf("y") ? o : 0,
                                n = -1 != i.indexOf("x") ? a : 0,
                                i = -1 != i.indexOf("y") ? a : 0;
                            i = (s = $((s + n - C[t].left + E) / (C[t].width + E), (e + i - C[t].top + T) / (C[t].height + T), C[t].speed, C[t].verticalSpeed, C[t].horizontalSpeed)).y - C[t].baseY, e = s.x - C[t].baseX, null !== C[t].min && (S.options.vertical && !S.options.horizontal && (i = i <= C[t].min ? C[t].min : i), S.options.horizontal && !S.options.vertical && (e = e <= C[t].min ? C[t].min : e)), null != C[t].minY && (i = i <= C[t].minY ? C[t].minY : i), null != C[t].minX && (e = e <= C[t].minX ? C[t].minX : e), null !== C[t].max && (S.options.vertical && !S.options.horizontal && (i = i >= C[t].max ? C[t].max : i), S.options.horizontal && !S.options.vertical && (e = e >= C[t].max ? C[t].max : e)), null != C[t].maxY && (i = i >= C[t].maxY ? C[t].maxY : i), null != C[t].maxX && (e = e >= C[t].maxX ? C[t].maxX : e), S.elems[t].style[h] = "translate3d(" + (S.options.horizontal ? e : "0") + "px," + (S.options.vertical ? i : "0") + "px," + C[t].zindex + "px) " + C[t].transform
                        }
                        S.options.callback(s)
                    };
                return S.destroy = function () {
                    for (var t = 0; t < S.elems.length; t++) S.elems[t].style.cssText = C[t].style;
                    k || (window.removeEventListener("resize", I), k = !0), l(s), s = null
                }, I(), S.refresh = I, S
            }
            console.warn("Rellax: The elements you're trying to select don't exist.")
        };
        return c
    }),
    function (x) {
        x.fn.theiaStickySidebar = function (t) {
            function e(t, e) {
                return !0 === t.initialized || !(x("body").width() < t.minWidth) && (i = e, (b = t).initialized = !0, 0 === x("#theia-sticky-sidebar-stylesheet-" + b.namespace).length && x("head").append(x('<style id="theia-sticky-sidebar-stylesheet-' + b.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), i.each(function () {
                    function y() {
                        t.fixedScrollTop = 0, t.sidebar.css({
                            "min-height": "1px"
                        }), t.stickySidebar.css({
                            position: "static",
                            width: "",
                            transform: "none"
                        })
                    }
                    var i, t = {};
                    t.sidebar = x(this), t.options = b || {}, t.container = x(t.options.containerSelector), 0 == t.container.length && (t.container = t.sidebar.parent()), t.sidebar.parents().css("-webkit-transform", "none"), t.sidebar.css({
                        position: t.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), t.stickySidebar = t.sidebar.find(".theiaStickySidebar"), 0 == t.stickySidebar.length && (i = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i, t.sidebar.find("script").filter(function (t, e) {
                        return 0 === e.type.length || e.type.match(i)
                    }).remove(), t.stickySidebar = x("<div>").addClass("theiaStickySidebar").append(t.sidebar.children()), t.sidebar.append(t.stickySidebar)), t.marginBottom = parseInt(t.sidebar.css("margin-bottom")), t.paddingTop = parseInt(t.sidebar.css("padding-top")), t.paddingBottom = parseInt(t.sidebar.css("padding-bottom"));
                    var e, s, n, o = t.stickySidebar.offset().top,
                        a = t.stickySidebar.outerHeight();
                    t.stickySidebar.css("padding-top", 1), t.stickySidebar.css("padding-bottom", 1), o -= t.stickySidebar.offset().top, a = t.stickySidebar.outerHeight() - a - o, 0 == o ? (t.stickySidebar.css("padding-top", 0), t.stickySidebarPaddingTop = 0) : t.stickySidebarPaddingTop = 1, 0 == a ? (t.stickySidebar.css("padding-bottom", 0), t.stickySidebarPaddingBottom = 0) : t.stickySidebarPaddingBottom = 1, t.previousScrollTop = null, t.fixedScrollTop = 0, y(), t.onScroll = function (t) {
                        if (t.stickySidebar.is(":visible")) {
                            if (x("body").width() < t.options.minWidth) return void y();
                            if (t.options.disableOnResponsiveLayouts)
                                if (t.sidebar.outerWidth("none" == t.sidebar.css("float")) + 50 > t.container.width()) return void y();
                            var e, i, s, n, o, a, r, l, h, d, c, u, p, f = x(document).scrollTop(),
                                m = "static";
                            f >= t.sidebar.offset().top + (t.paddingTop - t.options.additionalMarginTop) && (e = t.paddingTop + b.additionalMarginTop, i = t.paddingBottom + t.marginBottom + b.additionalMarginBottom, s = t.sidebar.offset().top, n = t.sidebar.offset().top + (g = t.container, v = g.height(), g.children().each(function () {
                                v = Math.max(v, x(this).height())
                            }), v), o = 0 + b.additionalMarginTop, a = t.stickySidebar.outerHeight() + e + i < x(window).height() ? o + t.stickySidebar.outerHeight() : x(window).height() - t.marginBottom - t.paddingBottom - b.additionalMarginBottom, r = s - f + t.paddingTop, l = n - f - t.paddingBottom - t.marginBottom, h = t.stickySidebar.offset().top - f, d = t.previousScrollTop - f, "fixed" == t.stickySidebar.css("position") && "modern" == t.options.sidebarBehavior && (h += d), "stick-to-top" == t.options.sidebarBehavior && (h = b.additionalMarginTop), "stick-to-bottom" == t.options.sidebarBehavior && (h = a - t.stickySidebar.outerHeight()), h = 0 < d ? Math.min(h, o) : Math.max(h, a - t.stickySidebar.outerHeight()), h = Math.max(h, r), h = Math.min(h, l - t.stickySidebar.outerHeight()), m = !(c = t.container.height() == t.stickySidebar.outerHeight()) && h == o || !c && h == a - t.stickySidebar.outerHeight() ? "fixed" : f + h - t.sidebar.offset().top - t.paddingTop <= b.additionalMarginTop ? "static" : "absolute"), "fixed" == m ? (u = x(document).scrollLeft(), t.stickySidebar.css({
                                position: "fixed",
                                width: w(t.stickySidebar) + "px",
                                transform: "translateY(" + h + "px)",
                                left: t.sidebar.offset().left + parseInt(t.sidebar.css("padding-left")) - u + "px",
                                top: "0px"
                            })) : "absolute" == m ? (p = {}, "absolute" != t.stickySidebar.css("position") && (p.position = "absolute", p.transform = "translateY(" + (f + h - t.sidebar.offset().top - t.stickySidebarPaddingTop - t.stickySidebarPaddingBottom) + "px)", p.top = "0px"), p.width = w(t.stickySidebar) + "px", p.left = "", t.stickySidebar.css(p)) : "static" == m && y(), "static" != m && 1 == t.options.updateSidebarHeight && t.sidebar.css({
                                "min-height": t.stickySidebar.outerHeight() + t.stickySidebar.offset().top - t.sidebar.offset().top + t.paddingBottom
                            }), t.previousScrollTop = f
                        }
                        var g, v
                    }, t.onScroll(t), x(document).on("scroll." + t.options.namespace, (n = t, function () {
                        n.onScroll(n)
                    })), x(window).on("resize." + t.options.namespace, (s = t, function () {
                        s.stickySidebar.css({
                            position: "static"
                        }), s.onScroll(s)
                    })), "undefined" != typeof ResizeSensor && new ResizeSensor(t.stickySidebar[0], (e = t, function () {
                        e.onScroll(e)
                    }))
                }), !0);
                var b, i
            }

            function w(t) {
                var e;
                try {
                    e = t[0].getBoundingClientRect().width
                } catch (t) {}
                return void 0 === e && (e = t.width()), e
            }
            var i, s, n, o, a, r;
            return (t = x.extend({
                containerSelector: "",
                additionalMarginTop: 0,
                additionalMarginBottom: 0,
                updateSidebarHeight: !0,
                minWidth: 0,
                disableOnResponsiveLayouts: !0,
                sidebarBehavior: "modern",
                defaultPosition: "relative",
                namespace: "TSS"
            }, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(i = t, s = this) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), x(document).on("scroll." + i.namespace, (a = i, r = s, function (t) {
                e(a, r) && x(this).unbind(t)
            })), x(window).on("resize." + i.namespace, (n = i, o = s, function (t) {
                e(n, o) && x(this).unbind(t)
            }))), this
        }
    }(jQuery),
    function (r, d) {
        var e, o, c = "createElement",
            y = "getElementsByTagName",
            w = "length",
            x = "style",
            h = "title",
            _ = "undefined",
            b = "setAttribute",
            S = "getAttribute",
            T = null,
            E = "__svgInject",
            C = "--inject-",
            k = new RegExp(C + "\\d+", "g"),
            M = "LOAD_FAIL",
            i = "SVG_NOT_SUPPORTED",
            I = "SVG_INVALID",
            u = ["src", "alt", "onload", "onerror"],
            z = d[c]("a"),
            $ = typeof SVGRect != _,
            p = {
                useCache: !0,
                copyAttributes: !0,
                makeIdsUnique: !0
            },
            P = {
                clipPath: ["clip-path"],
                "color-profile": T,
                cursor: T,
                filter: T,
                linearGradient: ["fill", "stroke"],
                marker: ["marker", "marker-end", "marker-mid", "marker-start"],
                mask: T,
                pattern: ["fill", "stroke"],
                radialGradient: ["fill", "stroke"]
            },
            l = 1,
            f = 2,
            L = 1;

        function O(t) {
            return (e = e || new XMLSerializer).serializeToString(t)
        }

        function A(t, e) {
            var i, s, n, o = C + L++,
                a = /url\("?#([a-zA-Z][\w:.-]*)"?\)/g,
                r = t.querySelectorAll("[id]"),
                l = e ? [] : T,
                h = {},
                d = [],
                c = !1;
            if (r[w]) {
                for (v = 0; v < r[w]; v++)(s = r[v].localName) in P && (h[s] = 1);
                for (s in h)(P[s] || [s]).forEach(function (t) {
                    d.indexOf(t) < 0 && d.push(t)
                });
                d[w] && d.push(x);
                for (var u, p, f, m = t[y]("*"), g = t, v = -1; g != T;) {
                    if (g.localName == x)(f = (p = g.textContent) && p.replace(a, function (t, e) {
                        return l && (l[e] = 1), "url(#" + e + o + ")"
                    })) !== p && (g.textContent = f);
                    else if (g.hasAttributes()) {
                        for (n = 0; n < d[w]; n++) u = d[n], (f = (p = g[S](u)) && p.replace(a, function (t, e) {
                            return l && (l[e] = 1), "url(#" + e + o + ")"
                        })) !== p && g[b](u, f);
                        ["xlink:href", "href"].forEach(function (t) {
                            var e = g[S](t);
                            /^\s*#/.test(e) && (e = e.trim(), g[b](t, e + o), l && (l[e.substring(1)] = 1))
                        })
                    }
                    g = m[++v]
                }
                for (v = 0; v < r[w]; v++) i = r[v], l && !l[i.id] || (i.id += o, c = !0)
            }
            return c
        }

        function D(t, e, i, s) {
            var n, o, a, r;
            e ? (e[b]("data-inject-url", i), (n = t.parentNode) && (s.copyAttributes && function (t, e) {
                for (var i, s, n = t.attributes, o = 0; o < n[w]; o++) {
                    var a, r, l = (i = n[o]).name; - 1 == u.indexOf(l) && (s = i.value, l == h ? ((r = e.firstElementChild) && r.localName.toLowerCase() == h ? a = r : (a = d[c + "NS"]("http://www.w3.org/2000/svg", h), e.insertBefore(a, r)), a.textContent = s) : e[b](l, s))
                }
            }(t, e), a = (o = s.beforeInject) && o(t, e) || e, n.replaceChild(a, t), t[E] = l, g(t), (r = s.afterInject) && r(t, a))) : R(t, s)
        }

        function m() {
            for (var t = {}, e = arguments, i = 0; i < e[w]; i++) {
                var s = e[i];
                for (var n in s) s.hasOwnProperty(n) && (t[n] = s[n])
            }
            return t
        }

        function j(t, e) {
            if (e) {
                var i;
                try {
                    s = t, i = (o = o || new DOMParser).parseFromString(s, "text/xml")
                } catch (t) {
                    return T
                }
                return i[y]("parsererror")[w] ? T : i.documentElement
            }
            var s, n = d.createElement("div");
            return n.innerHTML = t, n.firstElementChild
        }

        function g(t) {
            t.removeAttribute("onload")
        }

        function s(t) {
            console.error("SVGInject: " + t)
        }

        function n(t, e, i) {
            t[E] = f, i.onFail ? i.onFail(t, e) : s(e)
        }

        function R(t, e) {
            g(t), n(t, I, e)
        }

        function F(t, e) {
            g(t), n(t, i, e)
        }

        function H(t, e) {
            n(t, M, e)
        }

        function W(t) {
            t.onload = T, t.onerror = T
        }

        function B() {
            s("no img element")
        }
        var t = function t(e, i) {
            var s, n, o, l = m(p, i),
                b = {};

            function a(a, r) {
                r = m(l, r);

                function t(e) {
                    function t() {
                        var t = r.onAllFinish;
                        t && t(), e && e()
                    }
                    if (a && typeof a[w] != _) {
                        var i = 0,
                            s = a[w];
                        if (0 == s) t();
                        else {
                            function n() {
                                ++i == s && t()
                            }
                            for (var o = 0; o < s; o++) h(a[o], r, n)
                        }
                    } else h(a, r, t)
                }
                return typeof Promise == _ ? t() : new Promise(t)
            }

            function h(l, h, t) {
                if (l) {
                    var e = l[E];
                    if (e) Array.isArray(e) ? e.push(t) : t();
                    else {
                        if (W(l), !$) return F(l, h), t(), 0;
                        var i = h.beforeLoad,
                            s = i && i(l) || l[S]("src");
                        if (!s) return "" === s && H(l, h), t(), 0;
                        var n = [];
                        l[E] = n;

                        function d() {
                            t(), n.forEach(function (t) {
                                t()
                            })
                        }

                        function c(e) {
                            p && (b[u].forEach(function (t) {
                                t(e)
                            }), b[u] = e)
                        }
                        var u = (y = s, z.href = y, z.href),
                            p = h.useCache,
                            f = h.makeIdsUnique;
                        if (p) {
                            function o(t) {
                                var e, i, s, n;
                                t === M ? H(l, h) : t === I ? R(l, h) : (i = t[0], s = t[1], n = t[2], f && (i === T ? (i = A(e = j(s, !1), !1), t[0] = i, t[2] = i && O(e)) : i && (s = n.replace(k, C + L++))), e = e || j(s, !1), D(l, e, u, h)), d()
                            }
                            var a;
                            if (typeof (a = b[u]) != _) return a.isCallbackQueue ? a.push(o) : o(a), 0;
                            (a = []).isCallbackQueue = !0, b[u] = a
                        }
                        m = function (t, e) {
                            var i, s, n, o, a = t instanceof Document ? t.documentElement : j(e, !0),
                                r = h.afterLoad;
                            !r || (i = r(a, e) || a) && (e = (s = "string" == typeof i) ? i : O(a), a = s ? j(i, !0) : i), a instanceof SVGElement ? (n = T, f && (n = A(a, !1)), p && (o = n && O(a), c([n, e, o])), D(l, a, u, h)) : (R(l, h), c(I)), d()
                        }, g = function () {
                            H(l, h), c(M), d()
                        }, (r = u) && ((v = new XMLHttpRequest).onreadystatechange = function () {
                            var t;
                            4 == v.readyState && (200 == (t = v.status) ? m(v.responseXML, v.responseText.trim()) : (400 <= t || 0 == t) && g())
                        }, v.open("GET", r, !0), v.send())
                    }
                } else B();
                var r, m, g, v, y
            }
            return $ && (s = 'img[onload^="' + e + '("]{visibility:hidden;}', (o = d[y]("head")[0]) && ((n = d[c](x)).type = "text/css", n.appendChild(d.createTextNode(s)), o.appendChild(n))), a.setOptions = function (t) {
                l = m(l, t)
            }, a.create = t, a.err = function (t, e) {
                t ? t[E] != f && (W(t), $ ? (g(t), H(t, l)) : F(t, l), e && (g(t), t.src = e)) : B()
            }, r[e] = a
        }("SVGInject");
        "object" == typeof module && "object" == typeof module.exports && (module.exports = t)
    }(window, document),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Swiper = e()
    }(this, function () {
        "use strict";
        var m = "undefined" == typeof document ? {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: {
                    blur: function () {},
                    nodeName: ""
                },
                querySelector: function () {
                    return null
                },
                querySelectorAll: function () {
                    return []
                },
                getElementById: function () {
                    return null
                },
                createEvent: function () {
                    return {
                        initEvent: function () {}
                    }
                },
                createElement: function () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function () {},
                        getElementsByTagName: function () {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document,
            nt = "undefined" == typeof window ? {
                document: m,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function () {
                    return this
                },
                addEventListener: function () {},
                removeEventListener: function () {},
                getComputedStyle: function () {
                    return {
                        getPropertyValue: function () {
                            return ""
                        }
                    }
                },
                Image: function () {},
                Date: function () {},
                screen: {},
                setTimeout: function () {},
                clearTimeout: function () {}
            } : window,
            l = function (t) {
                for (var e = 0; e < t.length; e += 1) this[e] = t[e];
                return this.length = t.length, this
            };

        function z(t, e) {
            var i = [],
                s = 0;
            if (t && !e && t instanceof l) return t;
            if (t)
                if ("string" == typeof t) {
                    var n, o, a = t.trim();
                    if (0 <= a.indexOf("<") && 0 <= a.indexOf(">")) {
                        var r = "div";
                        for (0 === a.indexOf("<li") && (r = "ul"), 0 === a.indexOf("<tr") && (r = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (r = "tr"), 0 === a.indexOf("<tbody") && (r = "table"), 0 === a.indexOf("<option") && (r = "select"), (o = m.createElement(r)).innerHTML = a, s = 0; s < o.childNodes.length; s += 1) i.push(o.childNodes[s])
                    } else
                        for (n = e || "#" !== t[0] || t.match(/[ .<>:~]/) ? (e || m).querySelectorAll(t.trim()) : [m.getElementById(t.trim().split("#")[1])], s = 0; s < n.length; s += 1) n[s] && i.push(n[s])
                } else if (t.nodeType || t === nt || t === m) i.push(t);
                else if (0 < t.length && t[0].nodeType)
                    for (s = 0; s < t.length; s += 1) i.push(t[s]);
            return new l(i)
        }

        function o(t) {
            for (var e = [], i = 0; i < t.length; i += 1) - 1 === e.indexOf(t[i]) && e.push(t[i]);
            return e
        }
        z.fn = l.prototype, z.Class = l, z.Dom7 = l;
        var e = {
            addClass: function (t) {
                if (void 0 === t) return this;
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(e[i]);
                return this
            },
            removeClass: function (t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(e[i]);
                return this
            },
            hasClass: function (t) {
                return !!this[0] && this[0].classList.contains(t)
            },
            toggleClass: function (t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(e[i]);
                return this
            },
            attr: function (t, e) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                for (var s = 0; s < this.length; s += 1)
                    if (2 === i.length) this[s].setAttribute(t, e);
                    else
                        for (var n in t) this[s][n] = t[n], this[s].setAttribute(n, t[n]);
                return this
            },
            removeAttr: function (t) {
                for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
                return this
            },
            data: function (t, e) {
                var i;
                if (void 0 !== e) {
                    for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[t] = e;
                    return this
                }
                if (i = this[0]) return i.dom7ElementDataStorage && t in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[t] : i.getAttribute("data-" + t) || void 0
            },
            transform: function (t) {
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransform = t, i.transform = t
                }
                return this
            },
            transition: function (t) {
                "string" != typeof t && (t += "ms");
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransitionDuration = t, i.transitionDuration = t
                }
                return this
            },
            on: function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var i = t[0],
                    o = t[1],
                    a = t[2],
                    s = t[3];

                function n(t) {
                    var e = t.target;
                    if (e) {
                        var i = t.target.dom7EventData || [];
                        if (i.indexOf(t) < 0 && i.unshift(t), z(e).is(o)) a.apply(e, i);
                        else
                            for (var s = z(e).parents(), n = 0; n < s.length; n += 1) z(s[n]).is(o) && a.apply(s[n], i)
                    }
                }

                function r(t) {
                    var e = t && t.target && t.target.dom7EventData || [];
                    e.indexOf(t) < 0 && e.unshift(t), a.apply(this, e)
                }
                "function" == typeof t[1] && (i = t[0], a = t[1], s = t[2], o = void 0), s = s || !1;
                for (var l, h = i.split(" "), d = 0; d < this.length; d += 1) {
                    var c = this[d];
                    if (o)
                        for (l = 0; l < h.length; l += 1) {
                            var u = h[l];
                            c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[u] || (c.dom7LiveListeners[u] = []), c.dom7LiveListeners[u].push({
                                listener: a,
                                proxyListener: n
                            }), c.addEventListener(u, n, s)
                        } else
                        for (l = 0; l < h.length; l += 1) {
                            var p = h[l];
                            c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[p] || (c.dom7Listeners[p] = []), c.dom7Listeners[p].push({
                                listener: a,
                                proxyListener: r
                            }), c.addEventListener(p, r, s)
                        }
                }
                return this
            },
            off: function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var i = t[0],
                    s = t[1],
                    n = t[2],
                    o = t[3];
                "function" == typeof t[1] && (i = t[0], n = t[1], o = t[2], s = void 0), o = o || !1;
                for (var a = i.split(" "), r = 0; r < a.length; r += 1)
                    for (var l = a[r], h = 0; h < this.length; h += 1) {
                        var d = this[h],
                            c = void 0;
                        if (!s && d.dom7Listeners ? c = d.dom7Listeners[l] : s && d.dom7LiveListeners && (c = d.dom7LiveListeners[l]), c && c.length)
                            for (var u = c.length - 1; 0 <= u; --u) {
                                var p = c[u];
                                !(n && p.listener === n || n && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === n) && n || (d.removeEventListener(l, p.proxyListener, o), c.splice(u, 1))
                            }
                    }
                return this
            },
            trigger: function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                for (var i = t[0].split(" "), s = t[1], n = 0; n < i.length; n += 1)
                    for (var o = i[n], a = 0; a < this.length; a += 1) {
                        var r = this[a],
                            l = void 0;
                        try {
                            l = new nt.CustomEvent(o, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (t) {
                            (l = m.createEvent("Event")).initEvent(o, !0, !0), l.detail = s
                        }
                        r.dom7EventData = t.filter(function (t, e) {
                            return 0 < e
                        }), r.dispatchEvent(l), r.dom7EventData = [], delete r.dom7EventData
                    }
                return this
            },
            transitionEnd: function (e) {
                var i, s = ["webkitTransitionEnd", "transitionend"],
                    n = this;

                function o(t) {
                    if (t.target === this)
                        for (e.call(this, t), i = 0; i < s.length; i += 1) n.off(s[i], o)
                }
                if (e)
                    for (i = 0; i < s.length; i += 1) n.on(s[i], o);
                return this
            },
            outerWidth: function (t) {
                if (0 < this.length) {
                    if (t) {
                        var e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function (t) {
                if (0 < this.length) {
                    if (t) {
                        var e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function () {
                if (0 < this.length) {
                    var t = this[0],
                        e = t.getBoundingClientRect(),
                        i = m.body,
                        s = t.clientTop || i.clientTop || 0,
                        n = t.clientLeft || i.clientLeft || 0,
                        o = t === nt ? nt.scrollY : t.scrollTop,
                        a = t === nt ? nt.scrollX : t.scrollLeft;
                    return {
                        top: e.top + o - s,
                        left: e.left + a - n
                    }
                }
                return null
            },
            css: function (t, e) {
                var i;
                if (1 === arguments.length) {
                    if ("string" != typeof t) {
                        for (i = 0; i < this.length; i += 1)
                            for (var s in t) this[i].style[s] = t[s];
                        return this
                    }
                    if (this[0]) return nt.getComputedStyle(this[0], null).getPropertyValue(t)
                }
                if (2 !== arguments.length || "string" != typeof t) return this;
                for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
                return this
            },
            each: function (t) {
                if (!t) return this;
                for (var e = 0; e < this.length; e += 1)
                    if (!1 === t.call(this[e], e, this[e])) return this;
                return this
            },
            html: function (t) {
                if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
                for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                return this
            },
            text: function (t) {
                if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
                return this
            },
            is: function (t) {
                var e, i, s = this[0];
                if (!s || void 0 === t) return !1;
                if ("string" == typeof t) {
                    if (s.matches) return s.matches(t);
                    if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
                    if (s.msMatchesSelector) return s.msMatchesSelector(t);
                    for (e = z(t), i = 0; i < e.length; i += 1)
                        if (e[i] === s) return !0;
                    return !1
                }
                if (t === m) return s === m;
                if (t === nt) return s === nt;
                if (t.nodeType || t instanceof l) {
                    for (e = t.nodeType ? [t] : t, i = 0; i < e.length; i += 1)
                        if (e[i] === s) return !0;
                    return !1
                }
                return !1
            },
            index: function () {
                var t, e = this[0];
                if (e) {
                    for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                    return t
                }
            },
            eq: function (t) {
                if (void 0 === t) return this;
                var e, i = this.length;
                return new l(i - 1 < t ? [] : t < 0 ? (e = i + t) < 0 ? [] : [this[e]] : [this[t]])
            },
            append: function () {
                for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                for (var s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (var n = 0; n < this.length; n += 1)
                        if ("string" == typeof t) {
                            var o = m.createElement("div");
                            for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                        } else if (t instanceof l)
                            for (var a = 0; a < t.length; a += 1) this[n].appendChild(t[a]);
                        else this[n].appendChild(t)
                }
                return this
            },
            prepend: function (t) {
                for (var e, i = 0; i < this.length; i += 1)
                    if ("string" == typeof t) {
                        var s = m.createElement("div");
                        for (s.innerHTML = t, e = s.childNodes.length - 1; 0 <= e; --e) this[i].insertBefore(s.childNodes[e], this[i].childNodes[0])
                    } else if (t instanceof l)
                        for (e = 0; e < t.length; e += 1) this[i].insertBefore(t[e], this[i].childNodes[0]);
                    else this[i].insertBefore(t, this[i].childNodes[0]);
                return this
            },
            next: function (t) {
                return 0 < this.length ? t ? this[0].nextElementSibling && z(this[0].nextElementSibling).is(t) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
            },
            nextAll: function (t) {
                var e = [],
                    i = this[0];
                if (!i) return new l([]);
                for (; i.nextElementSibling;) {
                    var s = i.nextElementSibling;
                    t && !z(s).is(t) || e.push(s), i = s
                }
                return new l(e)
            },
            prev: function (t) {
                if (0 < this.length) {
                    var e = this[0];
                    return t ? e.previousElementSibling && z(e.previousElementSibling).is(t) ? new l([e.previousElementSibling]) : new l([]) : e.previousElementSibling ? new l([e.previousElementSibling]) : new l([])
                }
                return new l([])
            },
            prevAll: function (t) {
                var e = [],
                    i = this[0];
                if (!i) return new l([]);
                for (; i.previousElementSibling;) {
                    var s = i.previousElementSibling;
                    t && !z(s).is(t) || e.push(s), i = s
                }
                return new l(e)
            },
            parent: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1) null === this[i].parentNode || t && !z(this[i].parentNode).is(t) || e.push(this[i].parentNode);
                return z(o(e))
            },
            parents: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].parentNode; s;) t && !z(s).is(t) || e.push(s), s = s.parentNode;
                return z(o(e))
            },
            closest: function (t) {
                var e = this;
                return void 0 === t ? new l([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
            },
            find: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].querySelectorAll(t), n = 0; n < s.length; n += 1) e.push(s[n]);
                return new l(e)
            },
            children: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].childNodes, n = 0; n < s.length; n += 1) t ? 1 === s[n].nodeType && z(s[n]).is(t) && e.push(s[n]) : 1 === s[n].nodeType && e.push(s[n]);
                return new l(o(e))
            },
            filter: function (t) {
                for (var e = [], i = 0; i < this.length; i += 1) t.call(this[i], i, this[i]) && e.push(this[i]);
                return new l(e)
            },
            remove: function () {
                for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                return this
            },
            add: function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                for (var i = 0; i < t.length; i += 1)
                    for (var s = z(t[i]), n = 0; n < s.length; n += 1) this[this.length] = s[n], this.length += 1;
                return this
            },
            styles: function () {
                return this[0] ? nt.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(e).forEach(function (t) {
            z.fn[t] = z.fn[t] || e[t]
        });

        function t(t) {
            void 0 === t && (t = {});
            var e = this;
            e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(function (t) {
                e.on(t, e.params.on[t])
            })
        }
        var ot = {
                deleteProps: function (t) {
                    var e = t;
                    Object.keys(e).forEach(function (t) {
                        try {
                            e[t] = null
                        } catch (t) {}
                        try {
                            delete e[t]
                        } catch (t) {}
                    })
                },
                nextTick: function (t, e) {
                    return void 0 === e && (e = 0), setTimeout(t, e)
                },
                now: function () {
                    return Date.now()
                },
                getTranslate: function (t, e) {
                    var i, s, n;
                    void 0 === e && (e = "x");
                    var o = nt.getComputedStyle(t, null);
                    return nt.WebKitCSSMatrix ? (6 < (s = o.transform || o.webkitTransform).split(",").length && (s = s.split(", ").map(function (t) {
                        return t.replace(",", ".")
                    }).join(", ")), n = new nt.WebKitCSSMatrix("none" === s ? "" : s)) : i = (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === e && (s = nt.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (s = nt.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                },
                parseUrlQuery: function (t) {
                    var e, i, s, n, o = {},
                        a = t || nt.location.href;
                    if ("string" == typeof a && a.length)
                        for (n = (i = (a = -1 < a.indexOf("?") ? a.replace(/\S*\?/, "") : "").split("&").filter(function (t) {
                            return "" !== t
                        })).length, e = 0; e < n; e += 1) s = i[e].replace(/#\S+/g, "").split("="), o[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                    return o
                },
                isObject: function (t) {
                    return "object" == typeof t && null !== t && t.constructor && t.constructor === Object
                },
                extend: function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    for (var i = Object(t[0]), s = 1; s < t.length; s += 1) {
                        var n = t[s];
                        if (null != n)
                            for (var o = Object.keys(Object(n)), a = 0, r = o.length; a < r; a += 1) {
                                var l = o[a],
                                    h = Object.getOwnPropertyDescriptor(n, l);
                                void 0 !== h && h.enumerable && (ot.isObject(i[l]) && ot.isObject(n[l]) ? ot.extend(i[l], n[l]) : !ot.isObject(i[l]) && ot.isObject(n[l]) ? (i[l] = {}, ot.extend(i[l], n[l])) : i[l] = n[l])
                            }
                    }
                    return i
                }
            },
            E = {
                touch: nt.Modernizr && !0 === nt.Modernizr.touch || !!(0 < nt.navigator.maxTouchPoints || "ontouchstart" in nt || nt.DocumentTouch && m instanceof nt.DocumentTouch),
                pointerEvents: !!nt.PointerEvent && "maxTouchPoints" in nt.navigator && 0 < nt.navigator.maxTouchPoints,
                observer: "MutationObserver" in nt || "WebkitMutationObserver" in nt,
                passiveListener: function () {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                        nt.addEventListener("testPassiveListener", null, e)
                    } catch (t) {}
                    return t
                }(),
                gestures: "ongesturestart" in nt
            },
            i = {
                components: {
                    configurable: !0
                }
            };
        t.prototype.on = function (t, e, i) {
            var s = this;
            if ("function" != typeof e) return s;
            var n = i ? "unshift" : "push";
            return t.split(" ").forEach(function (t) {
                s.eventsListeners[t] || (s.eventsListeners[t] = []), s.eventsListeners[t][n](e)
            }), s
        }, t.prototype.once = function (i, s, t) {
            var n = this;
            if ("function" != typeof s) return n;

            function o() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                n.off(i, o), o.f7proxy && delete o.f7proxy, s.apply(n, t)
            }
            return o.f7proxy = s, n.on(i, o, t)
        }, t.prototype.off = function (t, s) {
            var n = this;
            return n.eventsListeners && t.split(" ").forEach(function (i) {
                void 0 === s ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].length && n.eventsListeners[i].forEach(function (t, e) {
                    (t === s || t.f7proxy && t.f7proxy === s) && n.eventsListeners[i].splice(e, 1)
                })
            }), n
        }, t.prototype.emit = function () {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var i, s, n, o = this;
            return o.eventsListeners && (n = "string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0], s = t.slice(1, t.length), o) : (i = t[0].events, s = t[0].data, t[0].context || o), (Array.isArray(i) ? i : i.split(" ")).forEach(function (t) {
                var e;
                o.eventsListeners && o.eventsListeners[t] && (e = [], o.eventsListeners[t].forEach(function (t) {
                    e.push(t)
                }), e.forEach(function (t) {
                    t.apply(n, s)
                }))
            })), o
        }, t.prototype.useModulesParams = function (i) {
            var s = this;
            s.modules && Object.keys(s.modules).forEach(function (t) {
                var e = s.modules[t];
                e.params && ot.extend(i, e.params)
            })
        }, t.prototype.useModules = function (s) {
            void 0 === s && (s = {});
            var n = this;
            n.modules && Object.keys(n.modules).forEach(function (t) {
                var i = n.modules[t],
                    e = s[t] || {};
                i.instance && Object.keys(i.instance).forEach(function (t) {
                    var e = i.instance[t];
                    n[t] = "function" == typeof e ? e.bind(n) : e
                }), i.on && n.on && Object.keys(i.on).forEach(function (t) {
                    n.on(t, i.on[t])
                }), i.create && i.create.bind(n)(e)
            })
        }, i.components.set = function (t) {
            this.use && this.use(t)
        }, t.installModule = function (e) {
            for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
            var s = this;
            s.prototype.modules || (s.prototype.modules = {});
            var n = e.name || Object.keys(s.prototype.modules).length + "_" + ot.now();
            return (s.prototype.modules[n] = e).proto && Object.keys(e.proto).forEach(function (t) {
                s.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(function (t) {
                s[t] = e.static[t]
            }), e.install && e.install.apply(s, t), s
        }, t.use = function (t) {
            for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
            var s = this;
            return Array.isArray(t) ? (t.forEach(function (t) {
                return s.installModule(t)
            }), s) : s.installModule.apply(s, [t].concat(e))
        }, Object.defineProperties(t, i);
        var s, n, a, r, h, d, c, u, p, f, g, v, y, b, w, x = {
                updateSize: function () {
                    var t = this.$el,
                        e = void 0 !== this.params.width ? this.params.width : t[0].clientWidth,
                        i = void 0 !== this.params.height ? this.params.height : t[0].clientHeight;
                    0 === e && this.isHorizontal() || 0 === i && this.isVertical() || (e = e - parseInt(t.css("padding-left"), 10) - parseInt(t.css("padding-right"), 10), i = i - parseInt(t.css("padding-top"), 10) - parseInt(t.css("padding-bottom"), 10), ot.extend(this, {
                        width: e,
                        height: i,
                        size: this.isHorizontal() ? e : i
                    }))
                },
                updateSlides: function () {
                    var e = this.params,
                        t = this.$wrapperEl,
                        i = this.size,
                        s = this.rtlTranslate,
                        n = this.wrongRTL,
                        o = this.virtual && e.virtual.enabled,
                        a = o ? this.virtual.slides.length : this.slides.length,
                        r = t.children("." + this.params.slideClass),
                        l = o ? this.virtual.slides.length : r.length,
                        h = [],
                        d = [],
                        c = [];

                    function u(t) {
                        return !e.cssMode || t !== r.length - 1
                    }
                    var p = e.slidesOffsetBefore;
                    "function" == typeof p && (p = e.slidesOffsetBefore.call(this));
                    var f = e.slidesOffsetAfter;
                    "function" == typeof f && (f = e.slidesOffsetAfter.call(this));
                    var m, g = this.snapGrid.length,
                        v = this.snapGrid.length,
                        y = e.spaceBetween,
                        b = -p,
                        w = 0,
                        x = 0;
                    if (void 0 !== i) {
                        "string" == typeof y && 0 <= y.indexOf("%") && (y = parseFloat(y.replace("%", "")) / 100 * i), this.virtualSize = -y, s ? r.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : r.css({
                            marginRight: "",
                            marginBottom: ""
                        }), 1 < e.slidesPerColumn && (m = Math.floor(l / e.slidesPerColumn) === l / this.params.slidesPerColumn ? l : Math.ceil(l / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (m = Math.max(m, e.slidesPerView * e.slidesPerColumn)));
                        for (var _, S, T, E, C, k = e.slidesPerColumn, M = m / k, I = Math.floor(l / e.slidesPerColumn), z = 0; z < l; z += 1) {
                            X = 0;
                            var $, P, L, O, A, D, j, R, F, H, W, B, N, Y, q, X, G, V, U, Q, K, Z, J = r.eq(z);
                            1 < e.slidesPerColumn && (P = $ = D = void 0, "row" === e.slidesPerColumnFill && 1 < e.slidesPerGroup ? (L = Math.floor(z / (e.slidesPerGroup * e.slidesPerColumn)), O = z - e.slidesPerColumn * e.slidesPerGroup * L, A = 0 === L ? e.slidesPerGroup : Math.min(Math.ceil((l - L * k * e.slidesPerGroup) / k), e.slidesPerGroup), D = ($ = O - (P = Math.floor(O / A)) * A + L * e.slidesPerGroup) + P * m / k, J.css({
                                "-webkit-box-ordinal-group": D,
                                "-moz-box-ordinal-group": D,
                                "-ms-flex-order": D,
                                "-webkit-order": D,
                                order: D
                            })) : "column" === e.slidesPerColumnFill ? (P = z - ($ = Math.floor(z / k)) * k, (I < $ || $ === I && P === k - 1) && (P += 1) >= k && (P = 0, $ += 1)) : $ = z - (P = Math.floor(z / M)) * M, J.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== P && e.spaceBetween && e.spaceBetween + "px")), "none" !== J.css("display") && ("auto" === e.slidesPerView ? (j = nt.getComputedStyle(J[0], null), R = J[0].style.transform, F = J[0].style.webkitTransform, R && (J[0].style.transform = "none"), F && (J[0].style.webkitTransform = "none"), X = e.roundLengths ? this.isHorizontal() ? J.outerWidth(!0) : J.outerHeight(!0) : this.isHorizontal() ? (H = parseFloat(j.getPropertyValue("width")), W = parseFloat(j.getPropertyValue("padding-left")), B = parseFloat(j.getPropertyValue("padding-right")), N = parseFloat(j.getPropertyValue("margin-left")), Y = parseFloat(j.getPropertyValue("margin-right")), (q = j.getPropertyValue("box-sizing")) && "border-box" === q ? H + N + Y : H + W + B + N + Y) : (G = parseFloat(j.getPropertyValue("height")), V = parseFloat(j.getPropertyValue("padding-top")), U = parseFloat(j.getPropertyValue("padding-bottom")), Q = parseFloat(j.getPropertyValue("margin-top")), K = parseFloat(j.getPropertyValue("margin-bottom")), (Z = j.getPropertyValue("box-sizing")) && "border-box" === Z ? G + Q + K : G + V + U + Q + K), R && (J[0].style.transform = R), F && (J[0].style.webkitTransform = F), e.roundLengths && (X = Math.floor(X))) : (X = (i - (e.slidesPerView - 1) * y) / e.slidesPerView, e.roundLengths && (X = Math.floor(X)), r[z] && (this.isHorizontal() ? r[z].style.width = X + "px" : r[z].style.height = X + "px")), r[z] && (r[z].swiperSlideSize = X), c.push(X), e.centeredSlides ? (b = b + X / 2 + w / 2 + y, 0 === w && 0 !== z && (b = b - i / 2 - y), 0 === z && (b = b - i / 2 - y), Math.abs(b) < .001 && (b = 0), e.roundLengths && (b = Math.floor(b)), x % e.slidesPerGroup == 0 && h.push(b), d.push(b)) : (e.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && h.push(b), d.push(b), b = b + X + y), this.virtualSize += X + y, w = X, x += 1)
                        }
                        if (this.virtualSize = Math.max(this.virtualSize, i) + f, s && n && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }), e.setWrapperSize && (this.isHorizontal() ? t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : t.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        })), 1 < e.slidesPerColumn && (this.virtualSize = (X + e.spaceBetween) * m, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : t.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        }), e.centeredSlides)) {
                            _ = [];
                            for (var tt = 0; tt < h.length; tt += 1) {
                                var et = h[tt];
                                e.roundLengths && (et = Math.floor(et)), h[tt] < this.virtualSize + h[0] && _.push(et)
                            }
                            h = _
                        }
                        if (!e.centeredSlides) {
                            _ = [];
                            for (var it = 0; it < h.length; it += 1) {
                                var st = h[it];
                                e.roundLengths && (st = Math.floor(st)), h[it] <= this.virtualSize - i && _.push(st)
                            }
                            h = _, 1 < Math.floor(this.virtualSize - i) - Math.floor(h[h.length - 1]) && h.push(this.virtualSize - i)
                        }
                        0 === h.length && (h = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? r.filter(u).css({
                            marginLeft: y + "px"
                        }) : r.filter(u).css({
                            marginRight: y + "px"
                        }) : r.filter(u).css({
                            marginBottom: y + "px"
                        })), e.centeredSlides && e.centeredSlidesBounds && (S = 0, c.forEach(function (t) {
                            S += t + (e.spaceBetween ? e.spaceBetween : 0)
                        }), T = (S -= e.spaceBetween) - i, h = h.map(function (t) {
                            return t < 0 ? -p : T < t ? T + f : t
                        })), e.centerInsufficientSlides && (E = 0, c.forEach(function (t) {
                            E += t + (e.spaceBetween ? e.spaceBetween : 0)
                        }), (E -= e.spaceBetween) < i && (C = (i - E) / 2, h.forEach(function (t, e) {
                            h[e] = t - C
                        }), d.forEach(function (t, e) {
                            d[e] = t + C
                        }))), ot.extend(this, {
                            slides: r,
                            snapGrid: h,
                            slidesGrid: d,
                            slidesSizesGrid: c
                        }), l !== a && this.emit("slidesLengthChange"), h.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), d.length !== v && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function (t) {
                    var e, i, s = [],
                        n = 0;
                    if ("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView)
                        if (this.params.centeredSlides) this.visibleSlides.each(function (t, e) {
                            s.push(e)
                        });
                        else
                            for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                                var o = this.activeIndex + e;
                                if (o > this.slides.length) break;
                                s.push(this.slides.eq(o)[0])
                            } else s.push(this.slides.eq(this.activeIndex)[0]);
                    for (e = 0; e < s.length; e += 1) {
                        void 0 !== s[e] && (n = n < (i = s[e].offsetHeight) ? i : n)
                    }
                    n && this.$wrapperEl.css("height", n + "px")
                },
                updateSlidesOffset: function () {
                    for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
                },
                updateSlidesProgress: function (t) {
                    void 0 === t && (t = this && this.translate || 0);
                    var e = this.params,
                        i = this.slides,
                        s = this.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var n = s ? t : -t;
                        i.removeClass(e.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                        for (var o = 0; o < i.length; o += 1) {
                            var a, r, l = i[o],
                                h = (n + (e.centeredSlides ? this.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + e.spaceBetween);
                            (e.watchSlidesVisibility || e.centeredSlides && e.autoHeight) && (r = (a = -(n - l.swiperSlideOffset)) + this.slidesSizesGrid[o], (0 <= a && a < this.size - 1 || 1 < r && r <= this.size || a <= 0 && r >= this.size) && (this.visibleSlides.push(l), this.visibleSlidesIndexes.push(o), i.eq(o).addClass(e.slideVisibleClass))), l.progress = s ? -h : h
                        }
                        this.visibleSlides = z(this.visibleSlides)
                    }
                },
                updateProgress: function (t) {
                    var e;
                    void 0 === t && (e = this.rtlTranslate ? -1 : 1, t = this && this.translate && this.translate * e || 0);
                    var i = this.params,
                        s = this.maxTranslate() - this.minTranslate(),
                        n = this.progress,
                        o = this.isBeginning,
                        a = o,
                        r = l = this.isEnd,
                        l = 0 == s ? o = !(n = 0) : (o = (n = (t - this.minTranslate()) / s) <= 0, 1 <= n);
                    ot.extend(this, {
                        progress: n,
                        isBeginning: o,
                        isEnd: l
                    }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(t), o && !a && this.emit("reachBeginning toEdge"), l && !r && this.emit("reachEnd toEdge"), (a && !o || r && !l) && this.emit("fromEdge"), this.emit("progress", n)
                },
                updateSlidesClasses: function () {
                    var t, e = this.slides,
                        i = this.params,
                        s = this.$wrapperEl,
                        n = this.activeIndex,
                        o = this.realIndex,
                        a = this.virtual && i.virtual.enabled;
                    e.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (t = a ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + n + '"]') : e.eq(n)).addClass(i.slideActiveClass), i.loop && (t.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass));
                    var r = t.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === r.length && (r = e.eq(0)).addClass(i.slideNextClass);
                    var l = t.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === l.length && (l = e.eq(-1)).addClass(i.slidePrevClass), i.loop && (r.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
                },
                updateActiveIndex: function (t) {
                    var e, i, s, n = this.rtlTranslate ? this.translate : -this.translate,
                        o = this.slidesGrid,
                        a = this.snapGrid,
                        r = this.params,
                        l = this.activeIndex,
                        h = this.realIndex,
                        d = this.snapIndex,
                        c = t;
                    if (void 0 === c) {
                        for (var u = 0; u < o.length; u += 1) void 0 !== o[u + 1] ? n >= o[u] && n < o[u + 1] - (o[u + 1] - o[u]) / 2 ? c = u : n >= o[u] && n < o[u + 1] && (c = u + 1) : n >= o[u] && (c = u);
                        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                    }(i = 0 <= a.indexOf(n) ? a.indexOf(n) : (e = Math.min(r.slidesPerGroupSkip, c)) + Math.floor((c - e) / r.slidesPerGroup)) >= a.length && (i = a.length - 1), c !== l ? (s = parseInt(this.slides.eq(c).attr("data-swiper-slide-index") || c, 10), ot.extend(this, {
                        snapIndex: i,
                        realIndex: s,
                        previousIndex: l,
                        activeIndex: c
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), h !== s && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")) : i !== d && (this.snapIndex = i, this.emit("snapIndexChange"))
                },
                updateClickedSlide: function (t) {
                    var e = this.params,
                        i = z(t.target).closest("." + e.slideClass)[0],
                        s = !1;
                    if (i)
                        for (var n = 0; n < this.slides.length; n += 1) this.slides[n] === i && (s = !0);
                    if (!i || !s) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                    this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(z(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = z(i).index(), e.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            _ = {
                getTranslate: function (t) {
                    void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                    var e = this.params,
                        i = this.rtlTranslate,
                        s = this.translate,
                        n = this.$wrapperEl;
                    if (e.virtualTranslate) return i ? -s : s;
                    if (e.cssMode) return s;
                    var o = ot.getTranslate(n[0], t);
                    return i && (o = -o), o || 0
                },
                setTranslate: function (t, e) {
                    var i = this.rtlTranslate,
                        s = this.params,
                        n = this.$wrapperEl,
                        o = this.wrapperEl,
                        a = this.progress,
                        r = 0,
                        l = 0;
                    this.isHorizontal() ? r = i ? -t : t : l = t, s.roundLengths && (r = Math.floor(r), l = Math.floor(l)), s.cssMode ? o[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -r : -l : s.virtualTranslate || n.transform("translate3d(" + r + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? r : l;
                    var h = this.maxTranslate() - this.minTranslate();
                    (0 == h ? 0 : (t - this.minTranslate()) / h) !== a && this.updateProgress(t), this.emit("setTranslate", this.translate, e)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (t, e, i, s, n) {
                    var o;
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                    var a = this,
                        r = a.params,
                        l = a.wrapperEl;
                    if (a.animating && r.preventInteractionOnTransition) return !1;
                    var h = a.minTranslate(),
                        d = a.maxTranslate(),
                        c = s && h < t ? h : s && t < d ? d : t;
                    if (a.updateProgress(c), r.cssMode) {
                        var u = a.isHorizontal();
                        return 0 !== e && l.scrollTo ? l.scrollTo(((o = {})[u ? "left" : "top"] = -c, o.behavior = "smooth", o)) : l[u ? "scrollLeft" : "scrollTop"] = -c, !0
                    }
                    return 0 === e ? (a.setTransition(0), a.setTranslate(c), i && (a.emit("beforeTransitionStart", e, n), a.emit("transitionEnd"))) : (a.setTransition(e), a.setTranslate(c), i && (a.emit("beforeTransitionStart", e, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (t) {
                        a && !a.destroyed && t.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            S = {
                slideTo: function (t, e, i, s) {
                    var n;
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                    var o = this,
                        a = t;
                    a < 0 && (a = 0);
                    var r = o.params,
                        l = o.snapGrid,
                        h = o.slidesGrid,
                        d = o.previousIndex,
                        c = o.activeIndex,
                        u = o.rtlTranslate,
                        p = o.wrapperEl;
                    if (o.animating && r.preventInteractionOnTransition) return !1;
                    var f = Math.min(o.params.slidesPerGroupSkip, a),
                        m = f + Math.floor((a - f) / o.params.slidesPerGroup);
                    m >= l.length && (m = l.length - 1), (c || r.initialSlide || 0) === (d || 0) && i && o.emit("beforeSlideChangeStart");
                    var g, v = -l[m];
                    if (o.updateProgress(v), r.normalizeSlideIndex)
                        for (var y = 0; y < h.length; y += 1) - Math.floor(100 * v) >= Math.floor(100 * h[y]) && (a = y);
                    if (o.initialized && a !== c) {
                        if (!o.allowSlideNext && v < o.translate && v < o.minTranslate()) return !1;
                        if (!o.allowSlidePrev && v > o.translate && v > o.maxTranslate() && (c || 0) !== a) return !1
                    }
                    if (g = c < a ? "next" : a < c ? "prev" : "reset", u && -v === o.translate || !u && v === o.translate) return o.updateActiveIndex(a), r.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== r.effect && o.setTranslate(v), "reset" != g && (o.transitionStart(i, g), o.transitionEnd(i, g)), !1;
                    if (r.cssMode) {
                        var b = o.isHorizontal(),
                            w = -v;
                        return u && (w = p.scrollWidth - p.offsetWidth - w), 0 !== e && p.scrollTo ? p.scrollTo(((n = {})[b ? "left" : "top"] = w, n.behavior = "smooth", n)) : p[b ? "scrollLeft" : "scrollTop"] = w, !0
                    }
                    return 0 === e ? (o.setTransition(0), o.setTranslate(v), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", e, s), o.transitionStart(i, g), o.transitionEnd(i, g)) : (o.setTransition(e), o.setTranslate(v), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", e, s), o.transitionStart(i, g), o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function (t) {
                        o && !o.destroyed && t.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(i, g))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function (t, e, i, s) {
                    void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                    var n = t;
                    return this.params.loop && (n += this.loopedSlides), this.slideTo(n, e, i, s)
                },
                slideNext: function (t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var s = this.params,
                        n = this.animating,
                        o = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                    if (s.loop) {
                        if (n) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }
                    return this.slideTo(this.activeIndex + o, t, e, i)
                },
                slidePrev: function (t, e, i) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                    var s = this.params,
                        n = this.animating,
                        o = this.snapGrid,
                        a = this.slidesGrid,
                        r = this.rtlTranslate;
                    if (s.loop) {
                        if (n) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }

                    function l(t) {
                        return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                    }
                    var h, d = l(r ? this.translate : -this.translate),
                        c = o.map(l),
                        u = (a.map(l), o[c.indexOf(d)], o[c.indexOf(d) - 1]);
                    return void 0 === u && s.cssMode && o.forEach(function (t) {
                        !u && t <= d && (u = t)
                    }), void 0 !== u && (h = a.indexOf(u)) < 0 && (h = this.activeIndex - 1), this.slideTo(h, t, e, i)
                },
                slideReset: function (t, e, i) {
                    return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i)
                },
                slideToClosest: function (t, e, i, s) {
                    void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === s && (s = .5);
                    var n, o, a = this.activeIndex,
                        r = Math.min(this.params.slidesPerGroupSkip, a),
                        l = r + Math.floor((a - r) / this.params.slidesPerGroup),
                        h = this.rtlTranslate ? this.translate : -this.translate;
                    return h >= this.snapGrid[l] ? h - (n = this.snapGrid[l]) > (this.snapGrid[l + 1] - n) * s && (a += this.params.slidesPerGroup) : h - (o = this.snapGrid[l - 1]) <= (this.snapGrid[l] - o) * s && (a -= this.params.slidesPerGroup), a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, t, e, i)
                },
                slideToClickedSlide: function () {
                    var t, e = this,
                        i = e.params,
                        s = e.$wrapperEl,
                        n = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView,
                        o = e.clickedIndex;
                    if (i.loop) {
                        if (e.animating) return;
                        t = parseInt(z(e.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < e.loopedSlides - n / 2 || o > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), o = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), ot.nextTick(function () {
                            e.slideTo(o)
                        })) : e.slideTo(o) : o > e.slides.length - n ? (e.loopFix(), o = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), ot.nextTick(function () {
                            e.slideTo(o)
                        })) : e.slideTo(o)
                    } else e.slideTo(o)
                }
            },
            T = {
                loopCreate: function () {
                    var s = this,
                        t = s.params,
                        e = s.$wrapperEl;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
                    var n = e.children("." + t.slideClass);
                    if (t.loopFillGroupWithBlank) {
                        var i = t.slidesPerGroup - n.length % t.slidesPerGroup;
                        if (i !== t.slidesPerGroup) {
                            for (var o = 0; o < i; o += 1) {
                                var a = z(m.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                                e.append(a)
                            }
                            n = e.children("." + t.slideClass)
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length), s.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), s.loopedSlides += t.loopAdditionalSlides, s.loopedSlides > n.length && (s.loopedSlides = n.length);
                    var r = [],
                        l = [];
                    n.each(function (t, e) {
                        var i = z(e);
                        t < s.loopedSlides && l.push(e), t < n.length && t >= n.length - s.loopedSlides && r.push(e), i.attr("data-swiper-slide-index", t)
                    });
                    for (var h = 0; h < l.length; h += 1) e.append(z(l[h].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (var d = r.length - 1; 0 <= d; --d) e.prepend(z(r[d].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function () {
                    this.emit("beforeLoopFix");
                    var t, e = this.activeIndex,
                        i = this.slides,
                        s = this.loopedSlides,
                        n = this.allowSlidePrev,
                        o = this.allowSlideNext,
                        a = this.snapGrid,
                        r = this.rtlTranslate;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0;
                    var l = -a[e] - this.getTranslate();
                    e < s ? (t = i.length - 3 * s + e, t += s, this.slideTo(t, 0, !1, !0) && 0 != l && this.setTranslate((r ? -this.translate : this.translate) - l)) : e >= i.length - s && (t = -i.length + e + s, t += s, this.slideTo(t, 0, !1, !0) && 0 != l && this.setTranslate((r ? -this.translate : this.translate) - l)), this.allowSlidePrev = n, this.allowSlideNext = o, this.emit("loopFix")
                },
                loopDestroy: function () {
                    var t = this.$wrapperEl,
                        e = this.params,
                        i = this.slides;
                    t.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            C = {
                setGrabCursor: function (t) {
                    var e;
                    E.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode || ((e = this.el).style.cursor = "move", e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", e.style.cursor = t ? "-moz-grabbin" : "-moz-grab", e.style.cursor = t ? "grabbing" : "grab")
                },
                unsetGrabCursor: function () {
                    E.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
                }
            },
            k = {
                appendSlide: function (t) {
                    var e = this.$wrapperEl,
                        i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == typeof t && "length" in t)
                        for (var s = 0; s < t.length; s += 1) t[s] && e.append(t[s]);
                    else e.append(t);
                    i.loop && this.loopCreate(), i.observer && E.observer || this.update()
                },
                prependSlide: function (t) {
                    var e = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    e.loop && this.loopDestroy();
                    var n = s + 1;
                    if ("object" == typeof t && "length" in t) {
                        for (var o = 0; o < t.length; o += 1) t[o] && i.prepend(t[o]);
                        n = s + t.length
                    } else i.prepend(t);
                    e.loop && this.loopCreate(), e.observer && E.observer || this.update(), this.slideTo(n, 0, !1)
                },
                addSlide: function (t, e) {
                    var i = this.$wrapperEl,
                        s = this.params,
                        n = this.activeIndex;
                    s.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                    var o = this.slides.length;
                    if (t <= 0) this.prependSlide(e);
                    else if (o <= t) this.appendSlide(e);
                    else {
                        for (var a = t < n ? n + 1 : n, r = [], l = o - 1; t <= l; --l) {
                            var h = this.slides.eq(l);
                            h.remove(), r.unshift(h)
                        }
                        if ("object" == typeof e && "length" in e) {
                            for (var d = 0; d < e.length; d += 1) e[d] && i.append(e[d]);
                            a = t < n ? n + e.length : n
                        } else i.append(e);
                        for (var c = 0; c < r.length; c += 1) i.append(r[c]);
                        s.loop && this.loopCreate(), s.observer && E.observer || this.update(), s.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
                    }
                },
                removeSlide: function (t) {
                    var e = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    e.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + e.slideClass));
                    var n, o = s;
                    if ("object" == typeof t && "length" in t) {
                        for (var a = 0; a < t.length; a += 1) n = t[a], this.slides[n] && this.slides.eq(n).remove(), n < o && --o;
                        o = Math.max(o, 0)
                    } else n = t, this.slides[n] && this.slides.eq(n).remove(), n < o && --o, o = Math.max(o, 0);
                    e.loop && this.loopCreate(), e.observer && E.observer || this.update(), e.loop ? this.slideTo(o + this.loopedSlides, 0, !1) : this.slideTo(o, 0, !1)
                },
                removeAllSlides: function () {
                    for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                    this.removeSlide(t)
                }
            },
            M = (s = nt.navigator.platform, n = nt.navigator.userAgent, a = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!nt.cordova && !nt.phonegap),
                phonegap: !(!nt.cordova && !nt.phonegap),
                electron: !1
            }, r = nt.screen.width, h = nt.screen.height, d = n.match(/(Android);?[\s\/]+([\d.]+)?/), c = n.match(/(iPad).*OS\s([\d_]+)/), u = n.match(/(iPod)(.*OS\s([\d_]+))?/), p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = 0 <= n.indexOf("MSIE ") || 0 <= n.indexOf("Trident/"), g = 0 <= n.indexOf("Edge/"), v = 0 <= n.indexOf("Gecko/") && 0 <= n.indexOf("Firefox/"), y = "Win32" === s, b = 0 <= n.toLowerCase().indexOf("electron"), w = "MacIntel" === s, !c && w && E.touch && (1024 === r && 1366 === h || 834 === r && 1194 === h || 834 === r && 1112 === h || 768 === r && 1024 === h) && (c = n.match(/(Version)\/([\d.]+)/), w = !1), a.ie = f, a.edge = g, a.firefox = v, d && !y && (a.os = "android", a.osVersion = d[2], a.android = !0, a.androidChrome = 0 <= n.toLowerCase().indexOf("chrome")), (c || p || u) && (a.os = "ios", a.ios = !0), p && !u && (a.osVersion = p[2].replace(/_/g, "."), a.iphone = !0), c && (a.osVersion = c[2].replace(/_/g, "."), a.ipad = !0), u && (a.osVersion = u[3] ? u[3].replace(/_/g, ".") : null, a.ipod = !0), a.ios && a.osVersion && 0 <= n.indexOf("Version/") && "10" === a.osVersion.split(".")[0] && (a.osVersion = n.toLowerCase().split("version/")[1].split(" ")[0]), a.webView = !(!(p || c || u) || !n.match(/.*AppleWebKit(?!.*Safari)/i) && !nt.navigator.standalone) || nt.matchMedia && nt.matchMedia("(display-mode: standalone)").matches, a.webview = a.webView, a.standalone = a.webView, a.desktop = !(a.ios || a.android) || b, a.desktop && (a.electron = b, a.macos = w, a.windows = y, a.macos && (a.os = "macos"), a.windows && (a.os = "windows")), a.pixelRatio = nt.devicePixelRatio || 1, a);

        function I() {
            var t, e, i, s = this.params,
                n = this.el;
            n && 0 === n.offsetWidth || (s.breakpoints && this.setBreakpoint(), t = this.allowSlideNext, e = this.allowSlidePrev, i = this.snapGrid, this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === s.slidesPerView || 1 < s.slidesPerView) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = e, this.allowSlideNext = t, this.params.watchOverflow && i !== this.snapGrid && this.checkOverflow())
        }
        var $ = !1;

        function P() {}
        var L, O = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            A = {
                update: x,
                translate: _,
                transition: {
                    setTransition: function (t, e) {
                        this.params.cssMode || this.$wrapperEl.transition(t), this.emit("setTransition", t, e)
                    },
                    transitionStart: function (t, e) {
                        void 0 === t && (t = !0);
                        var i = this.activeIndex,
                            s = this.params,
                            n = this.previousIndex;
                        if (!s.cssMode) {
                            s.autoHeight && this.updateAutoHeight();
                            var o = (o = e) || (n < i ? "next" : i < n ? "prev" : "reset");
                            if (this.emit("transitionStart"), t && i !== n) {
                                if ("reset" === o) return void this.emit("slideResetTransitionStart");
                                this.emit("slideChangeTransitionStart"), "next" === o ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                            }
                        }
                    },
                    transitionEnd: function (t, e) {
                        void 0 === t && (t = !0);
                        var i = this.activeIndex,
                            s = this.previousIndex,
                            n = this.params;
                        if (this.animating = !1, !n.cssMode) {
                            this.setTransition(0);
                            var o = (o = e) || (s < i ? "next" : i < s ? "prev" : "reset");
                            if (this.emit("transitionEnd"), t && i !== s) {
                                if ("reset" === o) return void this.emit("slideResetTransitionEnd");
                                this.emit("slideChangeTransitionEnd"), "next" === o ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                            }
                        }
                    }
                },
                slide: S,
                loop: T,
                grabCursor: C,
                manipulation: k,
                events: {
                    attachEvents: function () {
                        var t = this.params,
                            e = this.touchEvents,
                            i = this.el,
                            s = this.wrapperEl;
                        this.onTouchStart = function (t) {
                            var e, i, s, n, o, a, r, l, h = this.touchEventsData,
                                d = this.params,
                                c = this.touches;
                            this.animating && d.preventInteractionOnTransition || ((e = t).originalEvent && (e = e.originalEvent), i = z(e.target), "wrapper" === d.touchEventsTarget && !i.closest(this.wrapperEl).length || (h.isTouchEvent = "touchstart" === e.type, !h.isTouchEvent && "which" in e && 3 === e.which || !h.isTouchEvent && "button" in e && 0 < e.button || h.isTouched && h.isMoved) || (d.noSwiping && i.closest(d.noSwipingSelector ? d.noSwipingSelector : "." + d.noSwipingClass)[0] ? this.allowClick = !0 : d.swipeHandler && !i.closest(d.swipeHandler)[0] || (c.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, c.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, s = c.currentX, n = c.currentY, o = d.edgeSwipeDetection || d.iOSEdgeSwipeDetection, a = d.edgeSwipeThreshold || d.iOSEdgeSwipeThreshold, o && (s <= a || s >= nt.screen.width - a) || (ot.extend(h, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), c.startX = s, c.startY = n, h.touchStartTime = ot.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, 0 < d.threshold && (h.allowThresholdMove = !1), "touchstart" !== e.type && (r = !0, i.is(h.formElements) && (r = !1), m.activeElement && z(m.activeElement).is(h.formElements) && m.activeElement !== i[0] && m.activeElement.blur(), l = r && this.allowTouchMove && d.touchStartPreventDefault, (d.touchStartForcePreventDefault || l) && e.preventDefault()), this.emit("touchStart", e)))))
                        }.bind(this), this.onTouchMove = function (t) {
                            var e = this.touchEventsData,
                                i = this.params,
                                s = this.touches,
                                n = this.rtlTranslate,
                                o = t;
                            if (o.originalEvent && (o = o.originalEvent), e.isTouched) {
                                if (!e.isTouchEvent || "mousemove" !== o.type) {
                                    var a = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                                        r = "touchmove" === o.type ? a.pageX : o.pageX,
                                        l = "touchmove" === o.type ? a.pageY : o.pageY;
                                    if (o.preventedByNestedSwiper) return s.startX = r, void(s.startY = l);
                                    if (!this.allowTouchMove) return this.allowClick = !1, void(e.isTouched && (ot.extend(s, {
                                        startX: r,
                                        startY: l,
                                        currentX: r,
                                        currentY: l
                                    }), e.touchStartTime = ot.now()));
                                    if (e.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                        if (this.isVertical()) {
                                            if (l < s.startY && this.translate <= this.maxTranslate() || l > s.startY && this.translate >= this.minTranslate()) return e.isTouched = !1, void(e.isMoved = !1)
                                        } else if (r < s.startX && this.translate <= this.maxTranslate() || r > s.startX && this.translate >= this.minTranslate()) return;
                                    if (e.isTouchEvent && m.activeElement && o.target === m.activeElement && z(o.target).is(e.formElements)) return e.isMoved = !0, void(this.allowClick = !1);
                                    if (e.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && 1 < o.targetTouches.length)) {
                                        s.currentX = r, s.currentY = l;
                                        var h, d = s.currentX - s.startX,
                                            c = s.currentY - s.startY;
                                        if (!(this.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(c, 2)) < this.params.threshold))
                                            if (void 0 === e.isScrolling && (this.isHorizontal() && s.currentY === s.startY || this.isVertical() && s.currentX === s.startX ? e.isScrolling = !1 : 25 <= d * d + c * c && (h = 180 * Math.atan2(Math.abs(c), Math.abs(d)) / Math.PI, e.isScrolling = this.isHorizontal() ? h > i.touchAngle : 90 - h > i.touchAngle)), e.isScrolling && this.emit("touchMoveOpposite", o), void 0 === e.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (e.startMoving = !0)), e.isScrolling) e.isTouched = !1;
                                            else if (e.startMoving) {
                                                this.allowClick = !1, i.cssMode || o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation(), e.isMoved || (i.loop && this.loopFix(), e.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), e.allowMomentumBounce = !1, !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), e.isMoved = !0;
                                                var u = this.isHorizontal() ? d : c;
                                                s.diff = u, u *= i.touchRatio, n && (u = -u), this.swipeDirection = 0 < u ? "prev" : "next", e.currentTranslate = u + e.startTranslate;
                                                var p = !0,
                                                    f = i.resistanceRatio;
                                                if (i.touchReleaseOnEdges && (f = 0), 0 < u && e.currentTranslate > this.minTranslate() ? (p = !1, i.resistance && (e.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + e.startTranslate + u, f))) : u < 0 && e.currentTranslate < this.maxTranslate() && (p = !1, i.resistance && (e.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - e.startTranslate - u, f))), p && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && e.currentTranslate < e.startTranslate && (e.currentTranslate = e.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && e.currentTranslate > e.startTranslate && (e.currentTranslate = e.startTranslate), 0 < i.threshold) {
                                                    if (!(Math.abs(u) > i.threshold || e.allowThresholdMove)) return void(e.currentTranslate = e.startTranslate);
                                                    if (!e.allowThresholdMove) return e.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, e.currentTranslate = e.startTranslate, void(s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                                }
                                                i.followFinger && !i.cssMode && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), i.freeMode && (0 === e.velocities.length && e.velocities.push({
                                                    position: s[this.isHorizontal() ? "startX" : "startY"],
                                                    time: e.touchStartTime
                                                }), e.velocities.push({
                                                    position: s[this.isHorizontal() ? "currentX" : "currentY"],
                                                    time: ot.now()
                                                })), this.updateProgress(e.currentTranslate), this.setTranslate(e.currentTranslate))
                                            }
                                    }
                                }
                            } else e.startMoving && e.isScrolling && this.emit("touchMoveOpposite", o)
                        }.bind(this), this.onTouchEnd = function (t) {
                            var e = this,
                                i = e.touchEventsData,
                                s = e.params,
                                n = e.touches,
                                o = e.rtlTranslate,
                                a = e.$wrapperEl,
                                r = e.slidesGrid,
                                l = e.snapGrid,
                                h = t;
                            if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                            s.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                            var d, c, u, p, f, m = ot.now(),
                                g = m - i.touchStartTime;
                            if (e.allowClick && (e.updateClickedSlide(h), e.emit("tap click", h), g < 300 && m - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", h)), i.lastClickTime = ot.now(), ot.nextTick(function () {
                                e.destroyed || (e.allowClick = !0)
                            }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, d = s.followFinger ? o ? e.translate : -e.translate : -i.currentTranslate, !s.cssMode)
                                if (s.freeMode) {
                                    if (d < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                                    if (d > -e.maxTranslate()) return void(e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
                                    if (s.freeModeMomentum) {
                                        1 < i.velocities.length ? (c = i.velocities.pop(), u = i.velocities.pop(), p = c.position - u.position, f = c.time - u.time, e.velocity = p / f, e.velocity /= 2, Math.abs(e.velocity) < s.freeModeMinimumVelocity && (e.velocity = 0), (150 < f || 300 < ot.now() - c.time) && (e.velocity = 0)) : e.velocity = 0, e.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                        var v = 1e3 * s.freeModeMomentumRatio,
                                            y = e.velocity * v,
                                            b = e.translate + y;
                                        o && (b = -b);
                                        var w, x, _, S, T = !1,
                                            E = 20 * Math.abs(e.velocity) * s.freeModeMomentumBounceRatio;
                                        if (b < e.maxTranslate()) s.freeModeMomentumBounce ? (b + e.maxTranslate() < -E && (b = e.maxTranslate() - E), w = e.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = e.maxTranslate(), s.loop && s.centeredSlides && (x = !0);
                                        else if (b > e.minTranslate()) s.freeModeMomentumBounce ? (b - e.minTranslate() > E && (b = e.minTranslate() + E), w = e.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = e.minTranslate(), s.loop && s.centeredSlides && (x = !0);
                                        else if (s.freeModeSticky) {
                                            for (var C, k = 0; k < l.length; k += 1)
                                                if (l[k] > -b) {
                                                    C = k;
                                                    break
                                                } b = -(Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || "next" === e.swipeDirection ? l[C] : l[C - 1])
                                        }
                                        if (x && e.once("transitionEnd", function () {
                                            e.loopFix()
                                        }), 0 !== e.velocity) v = o ? Math.abs((-b - e.translate) / e.velocity) : Math.abs((b - e.translate) / e.velocity), s.freeModeSticky && (v = (_ = Math.abs((o ? -b : b) - e.translate)) < (S = e.slidesSizesGrid[e.activeIndex]) ? s.speed : _ < 2 * S ? 1.5 * s.speed : 2.5 * s.speed);
                                        else if (s.freeModeSticky) return void e.slideToClosest();
                                        s.freeModeMomentumBounce && T ? (e.updateProgress(w), e.setTransition(v), e.setTranslate(b), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd(function () {
                                            e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(s.speed), e.setTranslate(w), a.transitionEnd(function () {
                                                e && !e.destroyed && e.transitionEnd()
                                            }))
                                        })) : e.velocity ? (e.updateProgress(b), e.setTransition(v), e.setTranslate(b), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd(function () {
                                            e && !e.destroyed && e.transitionEnd()
                                        }))) : e.updateProgress(b), e.updateActiveIndex(), e.updateSlidesClasses()
                                    } else if (s.freeModeSticky) return void e.slideToClosest();
                                    (!s.freeModeMomentum || g >= s.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                                } else {
                                    for (var M = 0, I = e.slidesSizesGrid[0], z = 0; z < r.length; z += z < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                                        var $ = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                        void 0 !== r[z + $] ? d >= r[z] && d < r[z + $] && (I = r[(M = z) + $] - r[z]) : d >= r[z] && (M = z, I = r[r.length - 1] - r[r.length - 2])
                                    }
                                    var P = (d - r[M]) / I,
                                        L = M < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                    if (g > s.longSwipesMs) {
                                        if (!s.longSwipes) return void e.slideTo(e.activeIndex);
                                        "next" === e.swipeDirection && (P >= s.longSwipesRatio ? e.slideTo(M + L) : e.slideTo(M)), "prev" === e.swipeDirection && (P > 1 - s.longSwipesRatio ? e.slideTo(M + L) : e.slideTo(M))
                                    } else {
                                        if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
                                        !e.navigation || h.target !== e.navigation.nextEl && h.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(M + L), "prev" === e.swipeDirection && e.slideTo(M)) : h.target === e.navigation.nextEl ? e.slideTo(M + L) : e.slideTo(M)
                                    }
                                }
                        }.bind(this), t.cssMode && (this.onScroll = function () {
                            var t = this.wrapperEl,
                                e = this.rtlTranslate;
                            this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = e ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : this.translate = -t.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                            var i = this.maxTranslate() - this.minTranslate();
                            (0 == i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(e ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
                        }.bind(this)), this.onClick = function (t) {
                            this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                        }.bind(this);
                        var n, o = !!t.nested;
                        !E.touch && E.pointerEvents ? (i.addEventListener(e.start, this.onTouchStart, !1), m.addEventListener(e.move, this.onTouchMove, o), m.addEventListener(e.end, this.onTouchEnd, !1)) : (E.touch && (n = !("touchstart" !== e.start || !E.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        }, i.addEventListener(e.start, this.onTouchStart, n), i.addEventListener(e.move, this.onTouchMove, E.passiveListener ? {
                            passive: !1,
                            capture: o
                        } : o), i.addEventListener(e.end, this.onTouchEnd, n), e.cancel && i.addEventListener(e.cancel, this.onTouchEnd, n), $ || (m.addEventListener("touchstart", P), $ = !0)), (t.simulateTouch && !M.ios && !M.android || t.simulateTouch && !E.touch && M.ios) && (i.addEventListener("mousedown", this.onTouchStart, !1), m.addEventListener("mousemove", this.onTouchMove, o), m.addEventListener("mouseup", this.onTouchEnd, !1))), (t.preventClicks || t.preventClicksPropagation) && i.addEventListener("click", this.onClick, !0), t.cssMode && s.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(M.ios || M.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I, !0) : this.on("observerUpdate", I, !0)
                    },
                    detachEvents: function () {
                        var t, e = this.params,
                            i = this.touchEvents,
                            s = this.el,
                            n = this.wrapperEl,
                            o = !!e.nested;
                        !E.touch && E.pointerEvents ? (s.removeEventListener(i.start, this.onTouchStart, !1), m.removeEventListener(i.move, this.onTouchMove, o), m.removeEventListener(i.end, this.onTouchEnd, !1)) : (E.touch && (t = !("onTouchStart" !== i.start || !E.passiveListener || !e.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        }, s.removeEventListener(i.start, this.onTouchStart, t), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, t), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, t)), (e.simulateTouch && !M.ios && !M.android || e.simulateTouch && !E.touch && M.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), m.removeEventListener("mousemove", this.onTouchMove, o), m.removeEventListener("mouseup", this.onTouchEnd, !1))), (e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), e.cssMode && n.removeEventListener("scroll", this.onScroll), this.off(M.ios || M.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I)
                    }
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var t = this.activeIndex,
                            e = this.initialized,
                            i = this.loopedSlides;
                        void 0 === i && (i = 0);
                        var s, n, o, a, r, l, h, d = this.params,
                            c = this.$el,
                            u = d.breakpoints;
                        !u || u && 0 === Object.keys(u).length || (s = this.getBreakpoint(u)) && this.currentBreakpoint !== s && ((n = s in u ? u[s] : void 0) && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (t) {
                            var e = n[t];
                            void 0 !== e && (n[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
                        }), o = n || this.originalParams, a = 1 < d.slidesPerColumn, r = 1 < o.slidesPerColumn, a && !r ? c.removeClass(d.containerModifierClass + "multirow " + d.containerModifierClass + "multirow-column") : !a && r && (c.addClass(d.containerModifierClass + "multirow"), "column" === o.slidesPerColumnFill && c.addClass(d.containerModifierClass + "multirow-column")), l = o.direction && o.direction !== d.direction, h = d.loop && (o.slidesPerView !== d.slidesPerView || l), l && e && this.changeDirection(), ot.extend(this.params, o), ot.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }), this.currentBreakpoint = s, h && e && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(t - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", o))
                    },
                    getBreakpoint: function (t) {
                        if (t) {
                            var e = !1,
                                i = Object.keys(t).map(function (t) {
                                    if ("string" != typeof t || 0 !== t.indexOf("@")) return {
                                        value: t,
                                        point: t
                                    };
                                    var e = parseFloat(t.substr(1));
                                    return {
                                        value: nt.innerHeight * e,
                                        point: t
                                    }
                                });
                            i.sort(function (t, e) {
                                return parseInt(t.value, 10) - parseInt(e.value, 10)
                            });
                            for (var s = 0; s < i.length; s += 1) {
                                var n = i[s],
                                    o = n.point;
                                n.value <= nt.innerWidth && (e = o)
                            }
                            return e || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var t = this.params,
                            e = this.isLocked,
                            i = 0 < this.slides.length && t.slidesOffsetBefore + t.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                        t.slidesOffsetBefore && t.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function () {
                        var e = this.classNames,
                            i = this.params,
                            t = this.rtl,
                            s = this.$el,
                            n = [];
                        n.push("initialized"), n.push(i.direction), i.freeMode && n.push("free-mode"), i.autoHeight && n.push("autoheight"), t && n.push("rtl"), 1 < i.slidesPerColumn && (n.push("multirow"), "column" === i.slidesPerColumnFill && n.push("multirow-column")), M.android && n.push("android"), M.ios && n.push("ios"), i.cssMode && n.push("css-mode"), n.forEach(function (t) {
                            e.push(i.containerModifierClass + t)
                        }), s.addClass(e.join(" "))
                    },
                    removeClasses: function () {
                        var t = this.$el,
                            e = this.classNames;
                        t.removeClass(e.join(" "))
                    }
                },
                images: {
                    loadImage: function (t, e, i, s, n, o) {
                        var a;

                        function r() {
                            o && o()
                        }(!t.complete || !n) && e ? ((a = new nt.Image).onload = r, a.onerror = r, s && (a.sizes = s), i && (a.srcset = i), e && (a.src = e)) : r()
                    },
                    preloadImages: function () {
                        var t = this;

                        function e() {
                            null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                        }
                        t.imagesToLoad = t.$el.find("img");
                        for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                            var s = t.imagesToLoad[i];
                            t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, e)
                        }
                    }
                }
            },
            D = {},
            j = function (c) {
                function u() {
                    for (var t, n, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                    n = (n = 1 === e.length && e[0].constructor && e[0].constructor === Object ? e[0] : (t = e[0], e[1])) || {}, n = ot.extend({}, n), t && !n.el && (n.el = t), c.call(this, n), Object.keys(A).forEach(function (e) {
                        Object.keys(A[e]).forEach(function (t) {
                            u.prototype[t] || (u.prototype[t] = A[e][t])
                        })
                    });
                    var o = this;
                    void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach(function (t) {
                        var e = o.modules[t];
                        if (e.params) {
                            var i = Object.keys(e.params)[0],
                                s = e.params[i];
                            if ("object" != typeof s || null === s) return;
                            if (!(i in n && "enabled" in s)) return;
                            !0 === n[i] && (n[i] = {
                                enabled: !0
                            }), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = {
                                enabled: !1
                            })
                        }
                    });
                    var s = ot.extend({}, O);
                    o.useModulesParams(s), o.params = ot.extend({}, s, D, n), o.originalParams = ot.extend({}, o.params), o.passedParams = ot.extend({}, n);
                    var a, r, l, h = (o.$ = z)(o.params.el);
                    if (t = h[0]) {
                        if (1 < h.length) {
                            var d = [];
                            return h.each(function (t, e) {
                                var i = ot.extend({}, n, {
                                    el: e
                                });
                                d.push(new u(i))
                            }), d
                        }
                        return t.swiper = o, h.data("swiper", o), t && t.shadowRoot && t.shadowRoot.querySelector ? (a = z(t.shadowRoot.querySelector("." + o.params.wrapperClass))).children = function (t) {
                            return h.children(t)
                        } : a = h.children("." + o.params.wrapperClass), ot.extend(o, {
                            $el: h,
                            el: t,
                            $wrapperEl: a,
                            wrapperEl: a[0],
                            classNames: [],
                            slides: z(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === o.params.direction
                            },
                            isVertical: function () {
                                return "vertical" === o.params.direction
                            },
                            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === h.css("direction"),
                            rtlTranslate: "horizontal" === o.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === h.css("direction")),
                            wrongRTL: "-webkit-box" === a.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: o.params.allowSlideNext,
                            allowSlidePrev: o.params.allowSlidePrev,
                            touchEvents: (r = ["touchstart", "touchmove", "touchend", "touchcancel"], l = ["mousedown", "mousemove", "mouseup"], E.pointerEvents && (l = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
                                start: r[0],
                                move: r[1],
                                end: r[2],
                                cancel: r[3]
                            }, o.touchEventsDesktop = {
                                start: l[0],
                                move: l[1],
                                end: l[2]
                            }, E.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video, label",
                                lastClickTime: ot.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: o.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), o.useModules(), o.params.init && o.init(), o
                    }
                }
                c && (u.__proto__ = c), u.prototype = Object.create(c && c.prototype);
                var t = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return (u.prototype.constructor = u).prototype.slidesPerViewDynamic = function () {
                    var t = this.params,
                        e = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        n = this.activeIndex,
                        o = 1;
                    if (t.centeredSlides) {
                        for (var a, r = e[n].swiperSlideSize, l = n + 1; l < e.length; l += 1) e[l] && !a && (o += 1, (r += e[l].swiperSlideSize) > s && (a = !0));
                        for (var h = n - 1; 0 <= h; --h) e[h] && !a && (o += 1, (r += e[h].swiperSlideSize) > s && (a = !0))
                    } else
                        for (var d = n + 1; d < e.length; d += 1) i[d] - i[n] < s && (o += 1);
                    return o
                }, u.prototype.update = function () {
                    var t, e, i = this;

                    function s() {
                        var t = i.rtlTranslate ? -1 * i.translate : i.translate,
                            e = Math.min(Math.max(t, i.maxTranslate()), i.minTranslate());
                        i.setTranslate(e), i.updateActiveIndex(), i.updateSlidesClasses()
                    }
                    i && !i.destroyed && (t = i.snapGrid, (e = i.params).breakpoints && i.setBreakpoint(), i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.params.freeMode ? (s(), i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || s(), e.watchOverflow && t !== i.snapGrid && i.checkOverflow(), i.emit("update"))
                }, u.prototype.changeDirection = function (i, t) {
                    void 0 === t && (t = !0);
                    var e = this.params.direction;
                    return (i = i || ("horizontal" === e ? "vertical" : "horizontal")) === e || "horizontal" !== i && "vertical" !== i || (this.$el.removeClass("" + this.params.containerModifierClass + e).addClass("" + this.params.containerModifierClass + i), this.params.direction = i, this.slides.each(function (t, e) {
                        "vertical" === i ? e.style.width = "" : e.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }, u.prototype.init = function () {
                    this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                }, u.prototype.destroy = function (t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    var i = this,
                        s = i.params,
                        n = i.$el,
                        o = i.$wrapperEl,
                        a = i.slides;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), e && (i.removeClasses(), n.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (t) {
                        i.off(t)
                    }), !1 !== t && (i.$el[0].swiper = null, i.$el.data("swiper", null), ot.deleteProps(i)), i.destroyed = !0), null
                }, u.extendDefaults = function (t) {
                    ot.extend(D, t)
                }, t.extendedDefaults.get = function () {
                    return D
                }, t.defaults.get = function () {
                    return O
                }, t.Class.get = function () {
                    return c
                }, t.$.get = function () {
                    return z
                }, Object.defineProperties(u, t), u
            }(t),
            R = {
                name: "device",
                proto: {
                    device: M
                },
                static: {
                    device: M
                }
            },
            F = {
                name: "support",
                proto: {
                    support: E
                },
                static: {
                    support: E
                }
            },
            H = {
                isEdge: !!nt.navigator.userAgent.match(/Edge/g),
                isSafari: 0 <= (L = nt.navigator.userAgent.toLowerCase()).indexOf("safari") && L.indexOf("chrome") < 0 && L.indexOf("android") < 0,
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(nt.navigator.userAgent)
            },
            W = {
                name: "browser",
                proto: {
                    browser: H
                },
                static: {
                    browser: H
                }
            },
            B = {
                name: "resize",
                create: function () {
                    var t = this;
                    ot.extend(t, {
                        resize: {
                            resizeHandler: function () {
                                t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
                            },
                            orientationChangeHandler: function () {
                                t && !t.destroyed && t.initialized && t.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function () {
                        nt.addEventListener("resize", this.resize.resizeHandler), nt.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function () {
                        nt.removeEventListener("resize", this.resize.resizeHandler), nt.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            N = {
                func: nt.MutationObserver || nt.WebkitMutationObserver,
                attach: function (t, e) {
                    void 0 === e && (e = {});
                    var i = this,
                        s = new N.func(function (t) {
                            var e;
                            1 !== t.length ? (e = function () {
                                i.emit("observerUpdate", t[0])
                            }, nt.requestAnimationFrame ? nt.requestAnimationFrame(e) : nt.setTimeout(e, 0)) : i.emit("observerUpdate", t[0])
                        });
                    s.observe(t, {
                        attributes: void 0 === e.attributes || e.attributes,
                        childList: void 0 === e.childList || e.childList,
                        characterData: void 0 === e.characterData || e.characterData
                    }), i.observer.observers.push(s)
                },
                init: function () {
                    if (E.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var t = this.$el.parents(), e = 0; e < t.length; e += 1) this.observer.attach(t[e]);
                        this.observer.attach(this.$el[0], {
                            childList: this.params.observeSlideChildren
                        }), this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach(function (t) {
                        t.disconnect()
                    }), this.observer.observers = []
                }
            },
            Y = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function () {
                    ot.extend(this, {
                        observer: {
                            init: N.init.bind(this),
                            attach: N.attach.bind(this),
                            destroy: N.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function () {
                        this.observer.init()
                    },
                    destroy: function () {
                        this.observer.destroy()
                    }
                }
            },
            q = {
                update: function (t) {
                    var e = this,
                        i = e.params,
                        s = i.slidesPerView,
                        n = i.slidesPerGroup,
                        o = i.centeredSlides,
                        a = e.params.virtual,
                        r = a.addSlidesBefore,
                        l = a.addSlidesAfter,
                        h = e.virtual,
                        d = h.from,
                        c = h.to,
                        u = h.slides,
                        p = h.slidesGrid,
                        f = h.renderSlide,
                        m = h.offset;
                    e.updateActiveIndex();
                    var g, v = e.activeIndex || 0,
                        y = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
                        b = o ? (g = Math.floor(s / 2) + n + r, Math.floor(s / 2) + n + l) : (g = s + (n - 1) + r, n + l),
                        w = Math.max((v || 0) - b, 0),
                        x = Math.min((v || 0) + g, u.length - 1),
                        _ = (e.slidesGrid[w] || 0) - (e.slidesGrid[0] || 0);

                    function S() {
                        e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load()
                    }
                    if (ot.extend(e.virtual, {
                        from: w,
                        to: x,
                        offset: _,
                        slidesGrid: e.slidesGrid
                    }), d === w && c === x && !t) return e.slidesGrid !== p && _ !== m && e.slides.css(y, _ + "px"), void e.updateProgress();
                    if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                        offset: _,
                        from: w,
                        to: x,
                        slides: function () {
                            for (var t = [], e = w; e <= x; e += 1) t.push(u[e]);
                            return t
                        }()
                    }), void S();
                    var T = [],
                        E = [];
                    if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
                    else
                        for (var C = d; C <= c; C += 1)(C < w || x < C) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
                    for (var k = 0; k < u.length; k += 1) w <= k && k <= x && (void 0 === c || t ? E.push(k) : (c < k && E.push(k), k < d && T.push(k)));
                    E.forEach(function (t) {
                        e.$wrapperEl.append(f(u[t], t))
                    }), T.sort(function (t, e) {
                        return e - t
                    }).forEach(function (t) {
                        e.$wrapperEl.prepend(f(u[t], t))
                    }), e.$wrapperEl.children(".swiper-slide").css(y, _ + "px"), S()
                },
                renderSlide: function (t, e) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[e]) return this.virtual.cache[e];
                    var s = i.renderSlide ? z(i.renderSlide.call(this, t, e)) : z('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>");
                    return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", e), i.cache && (this.virtual.cache[e] = s), s
                },
                appendSlide: function (t) {
                    if ("object" == typeof t && "length" in t)
                        for (var e = 0; e < t.length; e += 1) t[e] && this.virtual.slides.push(t[e]);
                    else this.virtual.slides.push(t);
                    this.virtual.update(!0)
                },
                prependSlide: function (t) {
                    var s, n, e = this.activeIndex,
                        i = e + 1,
                        o = 1;
                    if (Array.isArray(t)) {
                        for (var a = 0; a < t.length; a += 1) t[a] && this.virtual.slides.unshift(t[a]);
                        i = e + t.length, o = t.length
                    } else this.virtual.slides.unshift(t);
                    this.params.virtual.cache && (s = this.virtual.cache, n = {}, Object.keys(s).forEach(function (t) {
                        var e = s[t],
                            i = e.attr("data-swiper-slide-index");
                        i && e.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(t, 10) + o] = e
                    }), this.virtual.cache = n), this.virtual.update(!0), this.slideTo(i, 0)
                },
                removeSlide: function (t) {
                    if (null != t) {
                        var e = this.activeIndex;
                        if (Array.isArray(t))
                            for (var i = t.length - 1; 0 <= i; --i) this.virtual.slides.splice(t[i], 1), this.params.virtual.cache && delete this.virtual.cache[t[i]], t[i] < e && --e, e = Math.max(e, 0);
                        else this.virtual.slides.splice(t, 1), this.params.virtual.cache && delete this.virtual.cache[t], t < e && --e, e = Math.max(e, 0);
                        this.virtual.update(!0), this.slideTo(e, 0)
                    }
                },
                removeAllSlides: function () {
                    this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
                }
            },
            X = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create: function () {
                    ot.extend(this, {
                        virtual: {
                            update: q.update.bind(this),
                            appendSlide: q.appendSlide.bind(this),
                            prependSlide: q.prependSlide.bind(this),
                            removeSlide: q.removeSlide.bind(this),
                            removeAllSlides: q.removeAllSlides.bind(this),
                            renderSlide: q.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var t;
                        this.params.virtual.enabled && (this.classNames.push(this.params.containerModifierClass + "virtual"), t = {
                            watchSlidesProgress: !0
                        }, ot.extend(this.params, t), ot.extend(this.originalParams, t), this.params.initialSlide || this.virtual.update())
                    },
                    setTranslate: function () {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            },
            G = {
                handle: function (t) {
                    var e = this.rtlTranslate,
                        i = t;
                    i.originalEvent && (i = i.originalEvent);
                    var s = i.keyCode || i.charCode;
                    if (!this.allowSlideNext && (this.isHorizontal() && 39 === s || this.isVertical() && 40 === s || 34 === s)) return !1;
                    if (!this.allowSlidePrev && (this.isHorizontal() && 37 === s || this.isVertical() && 38 === s || 33 === s)) return !1;
                    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || m.activeElement && m.activeElement.nodeName && ("input" === m.activeElement.nodeName.toLowerCase() || "textarea" === m.activeElement.nodeName.toLowerCase()))) {
                        if (this.params.keyboard.onlyInViewport && (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)) {
                            var n = !1;
                            if (0 < this.$el.parents("." + this.params.slideClass).length && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var o = nt.innerWidth,
                                a = nt.innerHeight,
                                r = this.$el.offset();
                            e && (r.left -= this.$el[0].scrollLeft);
                            for (var l = [
                                [r.left, r.top],
                                [r.left + this.width, r.top],
                                [r.left, r.top + this.height],
                                [r.left + this.width, r.top + this.height]
                            ], h = 0; h < l.length; h += 1) {
                                var d = l[h];
                                0 <= d[0] && d[0] <= o && 0 <= d[1] && d[1] <= a && (n = !0)
                            }
                            if (!n) return
                        }
                        this.isHorizontal() ? (33 !== s && 34 !== s && 37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (34 !== s && 39 !== s || e) && (33 !== s && 37 !== s || !e) || this.slideNext(), (33 !== s && 37 !== s || e) && (34 !== s && 39 !== s || !e) || this.slidePrev()) : (33 !== s && 34 !== s && 38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 34 !== s && 40 !== s || this.slideNext(), 33 !== s && 38 !== s || this.slidePrev()), this.emit("keyPress", s)
                    }
                },
                enable: function () {
                    this.keyboard.enabled || (z(m).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                },
                disable: function () {
                    this.keyboard.enabled && (z(m).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                }
            },
            V = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function () {
                    ot.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: G.enable.bind(this),
                            disable: G.disable.bind(this),
                            handle: G.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function () {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            },
            U = {
                lastScrollTime: ot.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: function () {
                    return -1 < nt.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : ((e = "onwheel" in m) || ((t = m.createElement("div")).setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel), !e && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature("", "") && (e = m.implementation.hasFeature("Events.wheel", "3.0")), e ? "wheel" : "mousewheel");
                    var t, e
                },
                normalize: function (t) {
                    var e = 0,
                        i = 0,
                        s = 0,
                        n = 0;
                    return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), s = 10 * e, n = 10 * i, "deltaY" in t && (n = t.deltaY), "deltaX" in t && (s = t.deltaX), t.shiftKey && !s && (s = n, n = 0), (s || n) && t.deltaMode && (1 === t.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !e && (e = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
                        spinX: e,
                        spinY: i,
                        pixelX: s,
                        pixelY: n
                    }
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1
                },
                handle: function (t) {
                    var e = t,
                        i = this,
                        s = i.params.mousewheel;
                    i.params.cssMode && e.preventDefault();
                    var n = i.$el;
                    if ("container" !== i.params.mousewheel.eventsTarged && (n = z(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !n[0].contains(e.target) && !s.releaseOnEdges) return !0;
                    e.originalEvent && (e = e.originalEvent);
                    var o = 0,
                        a = i.rtlTranslate ? -1 : 1,
                        r = U.normalize(e);
                    if (s.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                            o = r.pixelX * a
                        } else {
                            if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                            o = r.pixelY
                        }
                    else o = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * a : -r.pixelY;
                    if (0 === o) return !0;
                    if (s.invert && (o = -o), i.params.freeMode) {
                        var l = {
                                time: ot.now(),
                                delta: Math.abs(o),
                                direction: Math.sign(o)
                            },
                            h = i.mousewheel.lastEventBeforeSnap,
                            d = h && l.time < h.time + 500 && l.delta <= h.delta && l.direction === h.direction;
                        if (!d) {
                            i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                            var c, u, p, f, m = i.getTranslate() + o * s.sensitivity,
                                g = i.isBeginning,
                                v = i.isEnd;
                            if (m >= i.minTranslate() && (m = i.minTranslate()), m <= i.maxTranslate() && (m = i.maxTranslate()), i.setTransition(0), i.setTranslate(m), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!g && i.isBeginning || !v && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0, 15 <= (c = i.mousewheel.recentWheelEvents).length && c.shift(), u = c.length ? c[c.length - 1] : void 0, p = c[0], c.push(l), u && (l.delta > u.delta || l.direction !== u.direction) ? c.splice(0) : 15 <= c.length && l.time - p.time < 500 && 1 <= p.delta - l.delta && l.delta <= 6 && (f = 0 < o ? .8 : .2, i.mousewheel.lastEventBeforeSnap = l, c.splice(0), i.mousewheel.timeout = ot.nextTick(function () {
                                i.slideToClosest(i.params.speed, !0, void 0, f)
                            }, 0)), i.mousewheel.timeout || (i.mousewheel.timeout = ot.nextTick(function () {
                                i.mousewheel.lastEventBeforeSnap = l, c.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }, 500))), d || i.emit("scroll", e), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), m === i.minTranslate() || m === i.maxTranslate()) return !0
                        }
                    } else {
                        var y = {
                                time: ot.now(),
                                delta: Math.abs(o),
                                direction: Math.sign(o),
                                raw: t
                            },
                            b = i.mousewheel.recentWheelEvents;
                        2 <= b.length && b.shift();
                        var w = b.length ? b[b.length - 1] : void 0;
                        if (b.push(y), (!w || y.direction !== w.direction || y.delta > w.delta) && i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                },
                animateSlider: function (t) {
                    return 6 <= t.delta && ot.now() - this.mousewheel.lastScrollTime < 60 || (t.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", t.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", t.raw)), this.mousewheel.lastScrollTime = (new nt.Date).getTime(), !1)
                },
                releaseScroll: function (t) {
                    var e = this.params.mousewheel;
                    if (t.direction < 0) {
                        if (this.isEnd && !this.params.loop && e.releaseOnEdges) return !0
                    } else if (this.isBeginning && !this.params.loop && e.releaseOnEdges) return !0;
                    return !1
                },
                enable: function () {
                    var t = U.event();
                    if (this.params.cssMode) return this.wrapperEl.removeEventListener(t, this.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = z(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(t, this.mousewheel.handle), this.mousewheel.enabled = !0
                },
                disable: function () {
                    var t = U.event();
                    if (this.params.cssMode) return this.wrapperEl.addEventListener(t, this.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = z(this.params.mousewheel.eventsTarged)), e.off(t, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
                }
            },
            Q = {
                update: function () {
                    var t, e, i, s = this.params.navigation;
                    this.params.loop || (e = (t = this.navigation).$nextEl, (i = t.$prevEl) && 0 < i.length && (this.isBeginning ? i.addClass(s.disabledClass) : i.removeClass(s.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](s.lockClass)), e && 0 < e.length && (this.isEnd ? e.addClass(s.disabledClass) : e.removeClass(s.disabledClass), e[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](s.lockClass)))
                },
                onPrevClick: function (t) {
                    t.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
                },
                onNextClick: function (t) {
                    t.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
                },
                init: function () {
                    var t, e, i = this.params.navigation;
                    (i.nextEl || i.prevEl) && (i.nextEl && (t = z(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < t.length && 1 === this.$el.find(i.nextEl).length && (t = this.$el.find(i.nextEl))), i.prevEl && (e = z(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < e.length && 1 === this.$el.find(i.prevEl).length && (e = this.$el.find(i.prevEl))), t && 0 < t.length && t.on("click", this.navigation.onNextClick), e && 0 < e.length && e.on("click", this.navigation.onPrevClick), ot.extend(this.navigation, {
                        $nextEl: t,
                        nextEl: t && t[0],
                        $prevEl: e,
                        prevEl: e && e[0]
                    }))
                },
                destroy: function () {
                    var t = this.navigation,
                        e = t.$nextEl,
                        i = t.$prevEl;
                    e && e.length && (e.off("click", this.navigation.onNextClick), e.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
                }
            },
            K = {
                update: function () {
                    var t = this.rtl,
                        n = this.params.pagination;
                    if (n.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var o, e, i, s, a, r = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            l = this.pagination.$el,
                            h = this.params.loop ? Math.ceil((r - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (this.params.loop ? ((o = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > r - 1 - 2 * this.loopedSlides && (o -= r - 2 * this.loopedSlides), h - 1 < o && (o -= h), o < 0 && "bullets" !== this.params.paginationType && (o = h + o)) : o = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === n.type && this.pagination.bullets && 0 < this.pagination.bullets.length) {
                            var d, c, u, p, f, m, g = this.pagination.bullets;
                            if (n.dynamicBullets && (this.pagination.bulletSize = g.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), l.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), 1 < n.dynamicMainBullets && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += o - this.previousIndex, this.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), d = o - this.pagination.dynamicBulletIndex, u = ((c = d + (Math.min(g.length, n.dynamicMainBullets) - 1)) + d) / 2), g.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), 1 < l.length) g.each(function (t, e) {
                                var i = z(e),
                                    s = i.index();
                                s === o && i.addClass(n.bulletActiveClass), n.dynamicBullets && (d <= s && s <= c && i.addClass(n.bulletActiveClass + "-main"), s === d && i.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), s === c && i.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                            });
                            else {
                                var v = g.eq(o),
                                    y = v.index();
                                if (v.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                    for (var b = g.eq(d), w = g.eq(c), x = d; x <= c; x += 1) g.eq(x).addClass(n.bulletActiveClass + "-main");
                                    if (this.params.loop)
                                        if (y >= g.length - n.dynamicMainBullets) {
                                            for (var _ = n.dynamicMainBullets; 0 <= _; --_) g.eq(g.length - _).addClass(n.bulletActiveClass + "-main");
                                            g.eq(g.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                                        } else b.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), w.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next");
                                    else b.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), w.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                                }
                            }
                            n.dynamicBullets && (p = Math.min(g.length, n.dynamicMainBullets + 4), f = (this.pagination.bulletSize * p - this.pagination.bulletSize) / 2 - u * this.pagination.bulletSize, m = t ? "right" : "left", g.css(this.isHorizontal() ? m : "top", f + "px"))
                        }
                        "fraction" === n.type && (l.find("." + n.currentClass).text(n.formatFractionCurrent(o + 1)), l.find("." + n.totalClass).text(n.formatFractionTotal(h))), "progressbar" === n.type && (e = n.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical", i = (o + 1) / h, a = s = 1, "horizontal" == e ? s = i : a = i, l.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + s + ") scaleY(" + a + ")").transition(this.params.speed)), "custom" === n.type && n.renderCustom ? (l.html(n.renderCustom(this, o + 1, h)), this.emit("paginationRender", this, l[0])) : this.emit("paginationUpdate", this, l[0]), l[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)
                    }
                },
                render: function () {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            i = this.pagination.$el,
                            s = "";
                        if ("bullets" === t.type) {
                            for (var n = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, o = 0; o < n; o += 1) t.renderBullet ? s += t.renderBullet.call(this, o, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            i.html(s), this.pagination.bullets = i.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(this, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(this, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && this.emit("paginationRender", this.pagination.$el[0])
                    }
                },
                init: function () {
                    var t, i = this,
                        e = i.params.pagination;
                    !e.el || 0 !== (t = z(e.el)).length && (i.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === i.$el.find(e.el).length && (t = i.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), i.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (t) {
                        t.preventDefault();
                        var e = z(this).index() * i.params.slidesPerGroup;
                        i.params.loop && (e += i.loopedSlides), i.slideTo(e)
                    }), ot.extend(i.pagination, {
                        $el: t,
                        el: t[0]
                    }))
                },
                destroy: function () {
                    var t, e = this.params.pagination;
                    e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length && ((t = this.pagination.$el).removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass))
                }
            },
            Z = {
                setTranslate: function () {
                    var t, e, i, s, n, o, a, r, l, h;
                    this.params.scrollbar.el && this.scrollbar.el && (t = this.scrollbar, e = this.rtlTranslate, i = this.progress, s = t.dragSize, n = t.trackSize, o = t.$dragEl, a = t.$el, r = this.params.scrollbar, h = (n - (l = s)) * i, e ? 0 < (h = -h) ? (l = s - h, h = 0) : n < -h + s && (l = n + h) : h < 0 ? (l = s + h, h = 0) : n < h + s && (l = n - h), this.isHorizontal() ? (o.transform("translate3d(" + h + "px, 0, 0)"), o[0].style.width = l + "px") : (o.transform("translate3d(0px, " + h + "px, 0)"), o[0].style.height = l + "px"), r.hide && (clearTimeout(this.scrollbar.timeout), a[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                        a[0].style.opacity = 0, a.transition(400)
                    }, 1e3)))
                },
                setTransition: function (t) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t)
                },
                updateSize: function () {
                    var t, e, i, s, n, o, a;
                    this.params.scrollbar.el && this.scrollbar.el && (e = (t = this.scrollbar).$dragEl, i = t.$el, e[0].style.width = "", e[0].style.height = "", s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, o = (n = this.size / this.virtualSize) * (s / this.size), a = "auto" === this.params.scrollbar.dragSize ? s * n : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? e[0].style.width = a + "px" : e[0].style.height = a + "px", i[0].style.display = 1 <= n ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), ot.extend(t, {
                        trackSize: s,
                        divider: n,
                        moveDivider: o,
                        dragSize: a
                    }), t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass))
                },
                getPointerPosition: function (t) {
                    return this.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
                },
                setDragPosition: function (t) {
                    var e = this.scrollbar,
                        i = this.rtlTranslate,
                        s = e.$el,
                        n = e.dragSize,
                        o = e.trackSize,
                        a = e.dragStartPos,
                        r = (e.getPointerPosition(t) - s.offset()[this.isHorizontal() ? "left" : "top"] - (null !== a ? a : n / 2)) / (o - n);
                    r = Math.max(Math.min(r, 1), 0), i && (r = 1 - r);
                    var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * r;
                    this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
                },
                onDragStart: function (t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        n = i.$el,
                        o = i.$dragEl;
                    this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = t.target === o[0] || t.target === o ? i.getPointerPosition(t) - t.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), s.transition(100), o.transition(100), i.setDragPosition(t), clearTimeout(this.scrollbar.dragTimeout), n.transition(0), e.hide && n.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", t)
                },
                onDragMove: function (t) {
                    var e = this.scrollbar,
                        i = this.$wrapperEl,
                        s = e.$el,
                        n = e.$dragEl;
                    this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), i.transition(0), s.transition(0), n.transition(0), this.emit("scrollbarDragMove", t))
                },
                onDragEnd: function (t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        n = i.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), e.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = ot.nextTick(function () {
                        n.css("opacity", 0), n.transition(400)
                    }, 1e3)), this.emit("scrollbarDragEnd", t), e.snapOnRelease && this.slideToClosest())
                },
                enableDraggable: function () {
                    var t, e, i, s, n, o, a;
                    this.params.scrollbar.el && (t = this.scrollbar, e = this.touchEventsTouch, i = this.touchEventsDesktop, s = this.params, n = t.$el[0], o = !(!E.passiveListener || !s.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, a = !(!E.passiveListener || !s.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, E.touch ? (n.addEventListener(e.start, this.scrollbar.onDragStart, o), n.addEventListener(e.move, this.scrollbar.onDragMove, o), n.addEventListener(e.end, this.scrollbar.onDragEnd, a)) : (n.addEventListener(i.start, this.scrollbar.onDragStart, o), m.addEventListener(i.move, this.scrollbar.onDragMove, o), m.addEventListener(i.end, this.scrollbar.onDragEnd, a)))
                },
                disableDraggable: function () {
                    var t, e, i, s, n, o, a;
                    this.params.scrollbar.el && (t = this.scrollbar, e = this.touchEventsTouch, i = this.touchEventsDesktop, s = this.params, n = t.$el[0], o = !(!E.passiveListener || !s.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, a = !(!E.passiveListener || !s.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, E.touch ? (n.removeEventListener(e.start, this.scrollbar.onDragStart, o), n.removeEventListener(e.move, this.scrollbar.onDragMove, o), n.removeEventListener(e.end, this.scrollbar.onDragEnd, a)) : (n.removeEventListener(i.start, this.scrollbar.onDragStart, o), m.removeEventListener(i.move, this.scrollbar.onDragMove, o), m.removeEventListener(i.end, this.scrollbar.onDragEnd, a)))
                },
                init: function () {
                    var t, e, i, s, n;
                    this.params.scrollbar.el && (t = this.scrollbar, e = this.$el, s = z((i = this.params.scrollbar).el), this.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === e.find(i.el).length && (s = e.find(i.el)), 0 === (n = s.find("." + this.params.scrollbar.dragClass)).length && (n = z('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(n)), ot.extend(t, {
                        $el: s,
                        el: s[0],
                        $dragEl: n,
                        dragEl: n[0]
                    }), i.draggable && t.enableDraggable())
                },
                destroy: function () {
                    this.scrollbar.disableDraggable()
                }
            },
            J = {
                setTransform: function (t, e) {
                    var i, s, n = this.rtl,
                        o = z(t),
                        a = n ? -1 : 1,
                        r = o.attr("data-swiper-parallax") || "0",
                        l = o.attr("data-swiper-parallax-x"),
                        h = o.attr("data-swiper-parallax-y"),
                        d = o.attr("data-swiper-parallax-scale"),
                        c = o.attr("data-swiper-parallax-opacity");
                    l || h ? (l = l || "0", h = h || "0") : this.isHorizontal() ? (l = r, h = "0") : (h = r, l = "0"), l = 0 <= l.indexOf("%") ? parseInt(l, 10) * e * a + "%" : l * e * a + "px", h = 0 <= h.indexOf("%") ? parseInt(h, 10) * e + "%" : h * e + "px", null != c && (i = c - (c - 1) * (1 - Math.abs(e)), o[0].style.opacity = i), null == d ? o.transform("translate3d(" + l + ", " + h + ", 0px)") : (s = d - (d - 1) * (1 - Math.abs(e)), o.transform("translate3d(" + l + ", " + h + ", 0px) scale(" + s + ")"))
                },
                setTranslate: function () {
                    var s = this,
                        t = s.$el,
                        e = s.slides,
                        n = s.progress,
                        o = s.snapGrid;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, e) {
                        s.parallax.setTransform(e, n)
                    }), e.each(function (t, e) {
                        var i = e.progress;
                        1 < s.params.slidesPerGroup && "auto" !== s.params.slidesPerView && (i += Math.ceil(t / 2) - n * (o.length - 1)), i = Math.min(Math.max(i, -1), 1), z(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, e) {
                            s.parallax.setTransform(e, i)
                        })
                    })
                },
                setTransition: function (n) {
                    void 0 === n && (n = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, e) {
                        var i = z(e),
                            s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || n;
                        0 === n && (s = 0), i.transition(s)
                    })
                }
            },
            tt = {
                getDistanceBetweenTouches: function (t) {
                    if (t.targetTouches.length < 2) return 1;
                    var e = t.targetTouches[0].pageX,
                        i = t.targetTouches[0].pageY,
                        s = t.targetTouches[1].pageX,
                        n = t.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - e, 2) + Math.pow(n - i, 2))
                },
                onGestureStart: function (t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !E.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, s.scaleStart = tt.getDistanceBetweenTouches(t)
                    }
                    s.$slideEl && s.$slideEl.length || (s.$slideEl = z(t.target).closest("." + this.params.slideClass), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), s.$imageWrapEl = s.$imageEl.parent("." + e.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
                },
                onGestureChange: function (t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!E.gestures) {
                        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, s.scaleMove = tt.getDistanceBetweenTouches(t)
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = E.gestures ? t.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function (t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!E.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !M.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), e.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
                },
                onTouchStart: function (t) {
                    var e = this.zoom,
                        i = e.gesture,
                        s = e.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (M.android && t.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, s.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function (t) {
                    var e = this.zoom,
                        i = e.gesture,
                        s = e.image,
                        n = e.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ot.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ot.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                        var o = s.width * e.scale,
                            a = s.height * e.scale;
                        if (!(o < i.slideWidth && a < i.slideHeight)) {
                            if (s.minX = Math.min(i.slideWidth / 2 - o / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - a / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, s.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !s.isMoved && !e.isScaling) {
                                if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                            }
                            t.preventDefault(), t.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = s.touchesCurrent.x, n.prevPositionY = s.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function () {
                    var t = this.zoom,
                        e = t.gesture,
                        i = t.image,
                        s = t.velocity;
                    if (e.$imageEl && 0 !== e.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var n = 300,
                            o = 300,
                            a = s.x * n,
                            r = i.currentX + a,
                            l = s.y * o,
                            h = i.currentY + l;
                        0 !== s.x && (n = Math.abs((r - i.currentX) / s.x)), 0 !== s.y && (o = Math.abs((h - i.currentY) / s.y));
                        var d = Math.max(n, o);
                        i.currentX = r, i.currentY = h;
                        var c = i.width * t.scale,
                            u = i.height * t.scale;
                        i.minX = Math.min(e.slideWidth / 2 - c / 2, 0), i.maxX = -i.minX, i.minY = Math.min(e.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), e.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function () {
                    var t = this.zoom,
                        e = t.gesture;
                    e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl && e.$imageEl.transform("translate3d(0,0,0) scale(1)"), e.$imageWrapEl && e.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, e.$slideEl = void 0, e.$imageEl = void 0, e.$imageWrapEl = void 0)
                },
                toggle: function (t) {
                    var e = this.zoom;
                    e.scale && 1 !== e.scale ? e.out() : e.in(t)
                },
                in: function (t) {
                    var e, i, s, n, o, a, r, l, h, d, c, u, p, f, m, g, v = this.zoom,
                        y = this.params.zoom,
                        b = v.gesture,
                        w = v.image;
                    b.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? b.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : b.$slideEl = this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)), b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass("" + y.zoomedSlideClass), i = void 0 === w.touchesStart.x && t ? (e = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (e = w.touchesStart.x, w.touchesStart.y), v.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, v.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, t ? (m = b.$slideEl[0].offsetWidth, g = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + m / 2 - e, n = b.$slideEl.offset().top + g / 2 - i, r = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, h = r * v.scale, d = l * v.scale, p = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - d / 2, 0)), (o = s * v.scale) < c && (o = c), p < o && (o = p), (a = n * v.scale) < u && (a = u), f < a && (a = f)) : a = o = 0, b.$imageWrapEl.transition(300).transform("translate3d(" + o + "px, " + a + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + v.scale + ")"))
                },
                out: function () {
                    var t = this.zoom,
                        e = this.params.zoom,
                        i = t.gesture;
                    i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + e.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function () {
                    var t, e, i, s = this.zoom;
                    s.enabled || (s.enabled = !0, t = !("touchstart" !== this.touchEvents.start || !E.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, e = !E.passiveListener || {
                        passive: !1,
                        capture: !0
                    }, i = "." + this.params.slideClass, E.gestures ? (this.$wrapperEl.on("gesturestart", i, s.onGestureStart, t), this.$wrapperEl.on("gesturechange", i, s.onGestureChange, t), this.$wrapperEl.on("gestureend", i, s.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, i, s.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, i, s.onGestureChange, e), this.$wrapperEl.on(this.touchEvents.end, i, s.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, i, s.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, s.onTouchMove, e))
                },
                disable: function () {
                    var t, e, i, s = this.zoom;
                    s.enabled && (this.zoom.enabled = !1, t = !("touchstart" !== this.touchEvents.start || !E.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, e = !E.passiveListener || {
                        passive: !1,
                        capture: !0
                    }, i = "." + this.params.slideClass, E.gestures ? (this.$wrapperEl.off("gesturestart", i, s.onGestureStart, t), this.$wrapperEl.off("gesturechange", i, s.onGestureChange, t), this.$wrapperEl.off("gestureend", i, s.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, i, s.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, i, s.onGestureChange, e), this.$wrapperEl.off(this.touchEvents.end, i, s.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, i, s.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, s.onTouchMove, e))
                }
            },
            et = {
                loadInSlide: function (t, l) {
                    void 0 === l && (l = !0);
                    var h, e, d = this,
                        c = d.params.lazy;
                    void 0 !== t && 0 !== d.slides.length && (e = (h = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : d.slides.eq(t)).find("." + c.elementClass + ":not(." + c.loadedClass + "):not(." + c.loadingClass + ")"), !h.hasClass(c.elementClass) || h.hasClass(c.loadedClass) || h.hasClass(c.loadingClass) || (e = e.add(h[0])), 0 !== e.length && e.each(function (t, e) {
                        var s = z(e);
                        s.addClass(c.loadingClass);
                        var n = s.attr("data-background"),
                            o = s.attr("data-src"),
                            a = s.attr("data-srcset"),
                            r = s.attr("data-sizes");
                        d.loadImage(s[0], o || n, a, r, !1, function () {
                            var t, e, i;
                            null == d || !d || d && !d.params || d.destroyed || (n ? (s.css("background-image", 'url("' + n + '")'), s.removeAttr("data-background")) : (a && (s.attr("srcset", a), s.removeAttr("data-srcset")), r && (s.attr("sizes", r), s.removeAttr("data-sizes")), o && (s.attr("src", o), s.removeAttr("data-src"))), s.addClass(c.loadedClass).removeClass(c.loadingClass), h.find("." + c.preloaderClass).remove(), d.params.loop && l && (t = h.attr("data-swiper-slide-index"), h.hasClass(d.params.slideDuplicateClass) ? (e = d.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + d.params.slideDuplicateClass + ")"), d.lazy.loadInSlide(e.index(), !1)) : (i = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]'), d.lazy.loadInSlide(i.index(), !1))), d.emit("lazyImageReady", h[0], s[0]), d.params.autoHeight && d.updateAutoHeight())
                        }), d.emit("lazyImageLoad", h[0], s[0])
                    }))
                },
                load: function () {
                    var s = this,
                        e = s.$wrapperEl,
                        i = s.params,
                        n = s.slides,
                        t = s.activeIndex,
                        o = s.virtual && i.virtual.enabled,
                        a = i.lazy,
                        r = i.slidesPerView;

                    function l(t) {
                        if (o) {
                            if (e.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return 1
                        } else if (n[t]) return 1
                    }

                    function h(t) {
                        return o ? z(t).attr("data-swiper-slide-index") : z(t).index()
                    }
                    if ("auto" === r && (r = 0), s.lazy.initialImageLoaded || (s.lazy.initialImageLoaded = !0), s.params.watchSlidesVisibility) e.children("." + i.slideVisibleClass).each(function (t, e) {
                        var i = o ? z(e).attr("data-swiper-slide-index") : z(e).index();
                        s.lazy.loadInSlide(i)
                    });
                    else if (1 < r)
                        for (var d = t; d < t + r; d += 1) l(d) && s.lazy.loadInSlide(d);
                    else s.lazy.loadInSlide(t);
                    if (a.loadPrevNext)
                        if (1 < r || a.loadPrevNextAmount && 1 < a.loadPrevNextAmount) {
                            for (var c = a.loadPrevNextAmount, u = r, p = Math.min(t + u + Math.max(c, u), n.length), f = Math.max(t - Math.max(u, c), 0), m = t + r; m < p; m += 1) l(m) && s.lazy.loadInSlide(m);
                            for (var g = f; g < t; g += 1) l(g) && s.lazy.loadInSlide(g)
                        } else {
                            var v = e.children("." + i.slideNextClass);
                            0 < v.length && s.lazy.loadInSlide(h(v));
                            var y = e.children("." + i.slidePrevClass);
                            0 < y.length && s.lazy.loadInSlide(h(y))
                        }
                }
            },
            it = {
                LinearSpline: function (t, e) {
                    var i, s, n, o, a;
                    return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function (t) {
                        return t ? (a = function (t, e) {
                            for (s = -1, i = t.length; 1 < i - s;) t[n = i + s >> 1] <= e ? s = n : i = n;
                            return i
                        }(this.x, t), o = a - 1, (t - this.x[o]) * (this.y[a] - this.y[o]) / (this.x[a] - this.x[o]) + this.y[o]) : 0
                    }, this
                },
                getInterpolateFunction: function (t) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new it.LinearSpline(this.slidesGrid, t.slidesGrid) : new it.LinearSpline(this.snapGrid, t.snapGrid))
                },
                setTranslate: function (t, e) {
                    var i, s, n = this,
                        o = n.controller.control;

                    function a(t) {
                        var e = n.rtlTranslate ? -n.translate : n.translate;
                        "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(t), s = -n.controller.spline.interpolate(-e)), s && "container" !== n.params.controller.by || (i = (t.maxTranslate() - t.minTranslate()) / (n.maxTranslate() - n.minTranslate()), s = (e - n.minTranslate()) * i + t.minTranslate()), n.params.controller.inverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setTranslate(s, n), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (Array.isArray(o))
                        for (var r = 0; r < o.length; r += 1) o[r] !== e && o[r] instanceof j && a(o[r]);
                    else o instanceof j && e !== o && a(o)
                },
                setTransition: function (e, t) {
                    var i, s = this,
                        n = s.controller.control;

                    function o(t) {
                        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && ot.nextTick(function () {
                            t.updateAutoHeight()
                        }), t.$wrapperEl.transitionEnd(function () {
                            n && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                        }))
                    }
                    if (Array.isArray(n))
                        for (i = 0; i < n.length; i += 1) n[i] !== t && n[i] instanceof j && o(n[i]);
                    else n instanceof j && t !== n && o(n)
                }
            },
            st = {
                makeElFocusable: function (t) {
                    return t.attr("tabIndex", "0"), t
                },
                addElRole: function (t, e) {
                    return t.attr("role", e), t
                },
                addElLabel: function (t, e) {
                    return t.attr("aria-label", e), t
                },
                disableEl: function (t) {
                    return t.attr("aria-disabled", !0), t
                },
                enableEl: function (t) {
                    return t.attr("aria-disabled", !1), t
                },
                onEnterKey: function (t) {
                    var e, i = this.params.a11y;
                    13 === t.keyCode && (e = z(t.target), this.navigation && this.navigation.$nextEl && e.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(i.lastSlideMessage) : this.a11y.notify(i.nextSlideMessage)), this.navigation && this.navigation.$prevEl && e.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(i.firstSlideMessage) : this.a11y.notify(i.prevSlideMessage)), this.pagination && e.is("." + this.params.pagination.bulletClass) && e[0].click())
                },
                notify: function (t) {
                    var e = this.a11y.liveRegion;
                    0 !== e.length && (e.html(""), e.html(t))
                },
                updateNavigation: function () {
                    var t, e, i;
                    !this.params.loop && this.navigation && (e = (t = this.navigation).$nextEl, (i = t.$prevEl) && 0 < i.length && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), e && 0 < e.length && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e)))
                },
                updatePagination: function () {
                    var s = this,
                        n = s.params.a11y;
                    s.pagination && s.params.pagination.clickable && s.pagination.bullets && s.pagination.bullets.length && s.pagination.bullets.each(function (t, e) {
                        var i = z(e);
                        s.a11y.makeElFocusable(i), s.a11y.addElRole(i, "button"), s.a11y.addElLabel(i, n.paginationBulletMessage.replace(/{{index}}/, i.index() + 1))
                    })
                },
                init: function () {
                    this.$el.append(this.a11y.liveRegion);
                    var t, e, i = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.prevSlideMessage), e.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                },
                destroy: function () {
                    var t, e;
                    this.a11y.liveRegion && 0 < this.a11y.liveRegion.length && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && t.off("keydown", this.a11y.onEnterKey), e && e.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                }
            },
            at = {
                init: function () {
                    if (this.params.history) {
                        if (!nt.history || !nt.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                        var t = this.history;
                        t.initialized = !0, t.paths = at.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || nt.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function () {
                    this.params.history.replaceState || nt.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function () {
                    this.history.paths = at.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function () {
                    var t = nt.location.pathname.slice(1).split("/").filter(function (t) {
                            return "" !== t
                        }),
                        e = t.length;
                    return {
                        key: t[e - 2],
                        value: t[e - 1]
                    }
                },
                setHistory: function (t, e) {
                    var i, s, n;
                    this.history.initialized && this.params.history.enabled && (i = this.slides.eq(e), s = at.slugify(i.attr("data-history")), nt.location.pathname.includes(t) || (s = t + "/" + s), (n = nt.history.state) && n.value === s || (this.params.history.replaceState ? nt.history.replaceState({
                        value: s
                    }, null, s) : nt.history.pushState({
                        value: s
                    }, null, s)))
                },
                slugify: function (t) {
                    return t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function (t, e, i) {
                    if (e)
                        for (var s = 0, n = this.slides.length; s < n; s += 1) {
                            var o, a = this.slides.eq(s);
                            at.slugify(a.attr("data-history")) !== e || a.hasClass(this.params.slideDuplicateClass) || (o = a.index(), this.slideTo(o, t, i))
                        } else this.slideTo(0, t, i)
                }
            },
            rt = {
                onHashCange: function () {
                    var t = m.location.hash.replace("#", "");
                    if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                        var e = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                        if (void 0 === e) return;
                        this.slideTo(e)
                    }
                },
                setHash: function () {
                    var t, e;
                    this.hashNavigation.initialized && this.params.hashNavigation.enabled && (this.params.hashNavigation.replaceState && nt.history && nt.history.replaceState ? nt.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "") : (e = (t = this.slides.eq(this.activeIndex)).attr("data-hash") || t.attr("data-history"), m.location.hash = e || ""))
                },
                init: function () {
                    if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                        this.hashNavigation.initialized = !0;
                        var t = m.location.hash.replace("#", "");
                        if (t)
                            for (var e = 0, i = this.slides.length; e < i; e += 1) {
                                var s, n = this.slides.eq(e);
                                (n.attr("data-hash") || n.attr("data-history")) !== t || n.hasClass(this.params.slideDuplicateClass) || (s = n.index(), this.slideTo(s, 0, this.params.runCallbacksOnInit, !0))
                            }
                        this.params.hashNavigation.watchState && z(nt).on("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                destroy: function () {
                    this.params.hashNavigation.watchState && z(nt).off("hashchange", this.hashNavigation.onHashCange)
                }
            },
            lt = {
                run: function () {
                    var t = this,
                        e = t.slides.eq(t.activeIndex),
                        i = t.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(t.autoplay.timeout), t.autoplay.timeout = ot.nextTick(function () {
                        t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")), t.params.cssMode && t.autoplay.running && t.autoplay.run()
                    }, i)
                },
                start: function () {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
                },
                stop: function () {
                    return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
                },
                pause: function (t) {
                    this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== t && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
                }
            },
            ht = {
                setTranslate: function () {
                    for (var t = this.slides, e = 0; e < t.length; e += 1) {
                        var i = this.slides.eq(e),
                            s = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (s -= this.translate);
                        var n = 0;
                        this.isHorizontal() || (n = s, s = 0);
                        var o = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: o
                        }).transform("translate3d(" + s + "px, " + n + "px, 0px)")
                    }
                },
                setTransition: function (t) {
                    var i, s = this,
                        e = s.slides,
                        n = s.$wrapperEl;
                    e.transition(t), s.params.virtualTranslate && 0 !== t && (i = !1, e.transitionEnd(function () {
                        if (!i && s && !s.destroyed) {
                            i = !0, s.animating = !1;
                            for (var t = ["webkitTransitionEnd", "transitionend"], e = 0; e < t.length; e += 1) n.trigger(t[e])
                        }
                    }))
                }
            },
            dt = {
                setTranslate: function () {
                    var t, e = this.$el,
                        i = this.$wrapperEl,
                        s = this.slides,
                        n = this.width,
                        o = this.height,
                        a = this.rtlTranslate,
                        r = this.size,
                        l = this.params.cubeEffect,
                        h = this.isHorizontal(),
                        d = this.virtual && this.params.virtual.enabled,
                        c = 0;
                    l.shadow && (h ? (0 === (t = i.find(".swiper-cube-shadow")).length && (t = z('<div class="swiper-cube-shadow"></div>'), i.append(t)), t.css({
                        height: n + "px"
                    })) : 0 === (t = e.find(".swiper-cube-shadow")).length && (t = z('<div class="swiper-cube-shadow"></div>'), e.append(t)));
                    for (var u, p, f, m, g, v = 0; v < s.length; v += 1) {
                        var y = s.eq(v),
                            b = v;
                        d && (b = parseInt(y.attr("data-swiper-slide-index"), 10));
                        var w = 90 * b,
                            x = Math.floor(w / 360);
                        a && (w = -w, x = Math.floor(-w / 360));
                        var _ = Math.max(Math.min(y[0].progress, 1), -1),
                            S = 0,
                            T = 0,
                            E = 0;
                        b % 4 == 0 ? (S = 4 * -x * r, E = 0) : (b - 1) % 4 == 0 ? (S = 0, E = 4 * -x * r) : (b - 2) % 4 == 0 ? (S = r + 4 * x * r, E = r) : (b - 3) % 4 == 0 && (S = -r, E = 3 * r + 4 * r * x), a && (S = -S), h || (T = S, S = 0);
                        var C, k, M = "rotateX(" + (h ? 0 : -w) + "deg) rotateY(" + (h ? w : 0) + "deg) translate3d(" + S + "px, " + T + "px, " + E + "px)";
                        _ <= 1 && -1 < _ && (c = a ? 90 * -b - 90 * _ : 90 * b + 90 * _), y.transform(M), l.slideShadows && (C = h ? y.find(".swiper-slide-shadow-left") : y.find(".swiper-slide-shadow-top"), k = h ? y.find(".swiper-slide-shadow-right") : y.find(".swiper-slide-shadow-bottom"), 0 === C.length && (C = z('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), y.append(C)), 0 === k.length && (k = z('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), y.append(k)), C.length && (C[0].style.opacity = Math.max(-_, 0)), k.length && (k[0].style.opacity = Math.max(_, 0)))
                    }
                    i.css({
                        "-webkit-transform-origin": "50% 50% -" + r / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + r / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + r / 2 + "px",
                        "transform-origin": "50% 50% -" + r / 2 + "px"
                    }), l.shadow && (h ? t.transform("translate3d(0px, " + (n / 2 + l.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + l.shadowScale + ")") : (u = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90), p = 1.5 - (Math.sin(2 * u * Math.PI / 360) / 2 + Math.cos(2 * u * Math.PI / 360) / 2), f = l.shadowScale, m = l.shadowScale / p, g = l.shadowOffset, t.transform("scale3d(" + f + ", 1, " + m + ") translate3d(0px, " + (o / 2 + g) + "px, " + -o / 2 / m + "px) rotateX(-90deg)")));
                    var I = H.isSafari || H.isUiWebView ? -r / 2 : 0;
                    i.transform("translate3d(0px,0," + I + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
                },
                setTransition: function (t) {
                    var e = this.$el;
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
                }
            },
            ct = {
                setTranslate: function () {
                    for (var t = this.slides, e = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                        var s = t.eq(i),
                            n = s[0].progress;
                        this.params.flipEffect.limitRotation && (n = Math.max(Math.min(s[0].progress, 1), -1));
                        var o, a, r = -180 * n,
                            l = 0,
                            h = -s[0].swiperSlideOffset,
                            d = 0;
                        this.isHorizontal() ? e && (r = -r) : (d = h, l = -r, r = h = 0), s[0].style.zIndex = -Math.abs(Math.round(n)) + t.length, this.params.flipEffect.slideShadows && (o = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"), a = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom"), 0 === o.length && (o = z('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(o)), 0 === a.length && (a = z('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(a)), o.length && (o[0].style.opacity = Math.max(-n, 0)), a.length && (a[0].style.opacity = Math.max(n, 0))), s.transform("translate3d(" + h + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + r + "deg)")
                    }
                },
                setTransition: function (t) {
                    var i, s = this,
                        e = s.slides,
                        n = s.activeIndex,
                        o = s.$wrapperEl;
                    e.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), s.params.virtualTranslate && 0 !== t && (i = !1, e.eq(n).transitionEnd(function () {
                        if (!i && s && !s.destroyed) {
                            i = !0, s.animating = !1;
                            for (var t = ["webkitTransitionEnd", "transitionend"], e = 0; e < t.length; e += 1) o.trigger(t[e])
                        }
                    }))
                }
            },
            ut = {
                setTranslate: function () {
                    for (var t = this.width, e = this.height, i = this.slides, s = this.$wrapperEl, n = this.slidesSizesGrid, o = this.params.coverflowEffect, a = this.isHorizontal(), r = this.translate, l = a ? t / 2 - r : e / 2 - r, h = a ? o.rotate : -o.rotate, d = o.depth, c = 0, u = i.length; c < u; c += 1) {
                        var p = i.eq(c),
                            f = n[c],
                            m = (l - p[0].swiperSlideOffset - f / 2) / f * o.modifier,
                            g = a ? h * m : 0,
                            v = a ? 0 : h * m,
                            y = -d * Math.abs(m),
                            b = o.stretch;
                        "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(o.stretch) / 100 * f);
                        var w = a ? 0 : b * m,
                            x = a ? b * m : 0;
                        Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(g) < .001 && (g = 0), Math.abs(v) < .001 && (v = 0);
                        var _, S, T = "translate3d(" + x + "px," + w + "px," + y + "px)  rotateX(" + v + "deg) rotateY(" + g + "deg)";
                        p.transform(T), p[0].style.zIndex = 1 - Math.abs(Math.round(m)), o.slideShadows && (_ = a ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"), S = a ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom"), 0 === _.length && (_ = z('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), p.append(_)), 0 === S.length && (S = z('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), p.append(S)), _.length && (_[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0))
                    }(E.pointerEvents || E.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = l + "px 50%")
                },
                setTransition: function (t) {
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                }
            },
            pt = {
                init: function () {
                    var t = this.params.thumbs,
                        e = this.constructor;
                    t.swiper instanceof e ? (this.thumbs.swiper = t.swiper, ot.extend(this.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), ot.extend(this.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : ot.isObject(t.swiper) && (this.thumbs.swiper = new e(ot.extend({}, t.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
                },
                onThumbClick: function () {
                    var t, e, i, s, n, o, a = this.thumbs.swiper;
                    a && (t = a.clickedIndex, (e = a.clickedSlide) && z(e).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t || (o = a.params.loop ? parseInt(z(a.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop && (i = this.activeIndex, this.slides.eq(i).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, i = this.activeIndex), s = this.slides.eq(i).prevAll('[data-swiper-slide-index="' + o + '"]').eq(0).index(), n = this.slides.eq(i).nextAll('[data-swiper-slide-index="' + o + '"]').eq(0).index(), o = void 0 === s || void 0 !== n && n - i < i - s ? n : s), this.slideTo(o)))
                },
                update: function (t) {
                    var e = this.thumbs.swiper;
                    if (e) {
                        var i, s, n, o, a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : e.params.slidesPerView;
                        this.realIndex !== e.realIndex && (i = e.activeIndex, o = e.params.loop ? (e.slides.eq(i).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, i = e.activeIndex), s = e.slides.eq(i).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(), n = e.slides.eq(i).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(), void 0 === s ? n : void 0 === n ? s : n - i == i - s ? i : n - i < i - s ? n : s) : this.realIndex, e.visibleSlidesIndexes && e.visibleSlidesIndexes.indexOf(o) < 0 && (e.params.centeredSlides ? o = i < o ? o - Math.floor(a / 2) + 1 : o + Math.floor(a / 2) - 1 : i < o && (o = o - a + 1), e.slideTo(o, t ? 0 : void 0)));
                        var r = 1,
                            l = this.params.thumbs.slideThumbActiveClass;
                        if (1 < this.params.slidesPerView && !this.params.centeredSlides && (r = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), e.slides.removeClass(l), e.params.loop || e.params.virtual && e.params.virtual.enabled)
                            for (var h = 0; h < r; h += 1) e.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + h) + '"]').addClass(l);
                        else
                            for (var d = 0; d < r; d += 1) e.slides.eq(this.realIndex + d).addClass(l)
                    }
                }
            },
            ft = [R, F, W, B, Y, X, V, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function () {
                    ot.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: U.enable.bind(this),
                            disable: U.disable.bind(this),
                            handle: U.handle.bind(this),
                            handleMouseEnter: U.handleMouseEnter.bind(this),
                            handleMouseLeave: U.handleMouseLeave.bind(this),
                            animateSlider: U.animateSlider.bind(this),
                            releaseScroll: U.releaseScroll.bind(this),
                            lastScrollTime: ot.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: []
                        }
                    })
                },
                on: {
                    init: function () {
                        !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function () {
                        this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function () {
                    ot.extend(this, {
                        navigation: {
                            init: Q.init.bind(this),
                            update: Q.update.bind(this),
                            destroy: Q.destroy.bind(this),
                            onNextClick: Q.onNextClick.bind(this),
                            onPrevClick: Q.onPrevClick.bind(this)
                        }
                    })
                },
                on: {
                    init: function () {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge: function () {
                        this.navigation.update()
                    },
                    fromEdge: function () {
                        this.navigation.update()
                    },
                    destroy: function () {
                        this.navigation.destroy()
                    },
                    click: function (t) {
                        var e, i = this.navigation,
                            s = i.$nextEl,
                            n = i.$prevEl;
                        !this.params.navigation.hideOnClick || z(t.target).is(n) || z(t.target).is(s) || (s ? e = s.hasClass(this.params.navigation.hiddenClass) : n && (e = n.hasClass(this.params.navigation.hiddenClass)), !0 === e ? this.emit("navigationShow", this) : this.emit("navigationHide", this), s && s.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (t) {
                            return t
                        },
                        formatFractionTotal: function (t) {
                            return t
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function () {
                    ot.extend(this, {
                        pagination: {
                            init: K.init.bind(this),
                            render: K.render.bind(this),
                            update: K.update.bind(this),
                            destroy: K.destroy.bind(this),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function () {
                        this.pagination.init(), this.pagination.render(), this.pagination.update()
                    },
                    activeIndexChange: function () {
                        !this.params.loop && void 0 !== this.snapIndex || this.pagination.update()
                    },
                    snapIndexChange: function () {
                        this.params.loop || this.pagination.update()
                    },
                    slidesLengthChange: function () {
                        this.params.loop && (this.pagination.render(), this.pagination.update())
                    },
                    snapGridLengthChange: function () {
                        this.params.loop || (this.pagination.render(), this.pagination.update())
                    },
                    destroy: function () {
                        this.pagination.destroy()
                    },
                    click: function (t) {
                        this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !z(t.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function () {
                    ot.extend(this, {
                        scrollbar: {
                            init: Z.init.bind(this),
                            destroy: Z.destroy.bind(this),
                            updateSize: Z.updateSize.bind(this),
                            setTranslate: Z.setTranslate.bind(this),
                            setTransition: Z.setTransition.bind(this),
                            enableDraggable: Z.enableDraggable.bind(this),
                            disableDraggable: Z.disableDraggable.bind(this),
                            setDragPosition: Z.setDragPosition.bind(this),
                            getPointerPosition: Z.getPointerPosition.bind(this),
                            onDragStart: Z.onDragStart.bind(this),
                            onDragMove: Z.onDragMove.bind(this),
                            onDragEnd: Z.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function () {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                    },
                    update: function () {
                        this.scrollbar.updateSize()
                    },
                    resize: function () {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function () {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function () {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function (t) {
                        this.scrollbar.setTransition(t)
                    },
                    destroy: function () {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function () {
                    ot.extend(this, {
                        parallax: {
                            setTransform: J.setTransform.bind(this),
                            setTranslate: J.setTranslate.bind(this),
                            setTransition: J.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    init: function () {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTranslate: function () {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTransition: function (t) {
                        this.params.parallax.enabled && this.parallax.setTransition(t)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function () {
                    var s = this,
                        e = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (t) {
                        e[t] = tt[t].bind(s)
                    }), ot.extend(s, {
                        zoom: e
                    });
                    var n = 1;
                    Object.defineProperty(s.zoom, "scale", {
                        get: function () {
                            return n
                        },
                        set: function (t) {
                            var e, i;
                            n !== t && (e = s.zoom.gesture.$imageEl ? s.zoom.gesture.$imageEl[0] : void 0, i = s.zoom.gesture.$slideEl ? s.zoom.gesture.$slideEl[0] : void 0, s.emit("zoomChange", t, e, i)), n = t
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.zoom.enabled && this.zoom.enable()
                    },
                    destroy: function () {
                        this.zoom.disable()
                    },
                    touchStart: function (t) {
                        this.zoom.enabled && this.zoom.onTouchStart(t)
                    },
                    touchEnd: function (t) {
                        this.zoom.enabled && this.zoom.onTouchEnd(t)
                    },
                    doubleTap: function (t) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t)
                    },
                    transitionEnd: function () {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                    },
                    slideChange: function () {
                        this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function () {
                    ot.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: et.load.bind(this),
                            loadInSlide: et.loadInSlide.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                    },
                    init: function () {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                    },
                    scroll: function () {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                    },
                    resize: function () {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    scrollbarDragMove: function () {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    transitionStart: function () {
                        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                    },
                    transitionEnd: function () {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                    },
                    slideChange: function () {
                        this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function () {
                    ot.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction: it.getInterpolateFunction.bind(this),
                            setTranslate: it.setTranslate.bind(this),
                            setTransition: it.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    update: function () {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    resize: function () {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    observerUpdate: function () {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    setTranslate: function (t, e) {
                        this.controller.control && this.controller.setTranslate(t, e)
                    },
                    setTransition: function (t, e) {
                        this.controller.control && this.controller.setTransition(t, e)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function () {
                    var e = this;
                    ot.extend(e, {
                        a11y: {
                            liveRegion: z('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }), Object.keys(st).forEach(function (t) {
                        e.a11y[t] = st[t].bind(e)
                    })
                },
                on: {
                    init: function () {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                    },
                    toEdge: function () {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge: function () {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate: function () {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy: function () {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function () {
                    ot.extend(this, {
                        history: {
                            init: at.init.bind(this),
                            setHistory: at.setHistory.bind(this),
                            setHistoryPopState: at.setHistoryPopState.bind(this),
                            scrollToSlide: at.scrollToSlide.bind(this),
                            destroy: at.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.history.enabled && this.history.init()
                    },
                    destroy: function () {
                        this.params.history.enabled && this.history.destroy()
                    },
                    transitionEnd: function () {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                    },
                    slideChange: function () {
                        this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function () {
                    ot.extend(this, {
                        hashNavigation: {
                            initialized: !1,
                            init: rt.init.bind(this),
                            destroy: rt.destroy.bind(this),
                            setHash: rt.setHash.bind(this),
                            onHashCange: rt.onHashCange.bind(this)
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.hashNavigation.enabled && this.hashNavigation.init()
                    },
                    destroy: function () {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                    },
                    transitionEnd: function () {
                        this.hashNavigation.initialized && this.hashNavigation.setHash()
                    },
                    slideChange: function () {
                        this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function () {
                    var e = this;
                    ot.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: lt.run.bind(e),
                            start: lt.start.bind(e),
                            stop: lt.stop.bind(e),
                            pause: lt.pause.bind(e),
                            onVisibilityChange: function () {
                                "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                            },
                            onTransitionEnd: function (t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                    },
                    beforeTransitionStart: function (t, e) {
                        this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop())
                    },
                    sliderFirstMove: function () {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                    },
                    touchEnd: function () {
                        this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                    },
                    destroy: function () {
                        this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function () {
                    ot.extend(this, {
                        fadeEffect: {
                            setTranslate: ht.setTranslate.bind(this),
                            setTransition: ht.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var t;
                        "fade" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "fade"), t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        }, ot.extend(this.params, t), ot.extend(this.originalParams, t))
                    },
                    setTranslate: function () {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition: function (t) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function () {
                    ot.extend(this, {
                        cubeEffect: {
                            setTranslate: dt.setTranslate.bind(this),
                            setTransition: dt.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var t;
                        "cube" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d"), t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        }, ot.extend(this.params, t), ot.extend(this.originalParams, t))
                    },
                    setTranslate: function () {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition: function (t) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function () {
                    ot.extend(this, {
                        flipEffect: {
                            setTranslate: ct.setTranslate.bind(this),
                            setTransition: ct.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var t;
                        "flip" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d"), t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        }, ot.extend(this.params, t), ot.extend(this.originalParams, t))
                    },
                    setTranslate: function () {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition: function (t) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function () {
                    ot.extend(this, {
                        coverflowEffect: {
                            setTranslate: ut.setTranslate.bind(this),
                            setTransition: ut.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function () {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition: function (t) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t)
                    }
                }
            }, {
                name: "thumbs",
                params: {
                    thumbs: {
                        multipleActiveThumbs: !0,
                        swiper: null,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create: function () {
                    ot.extend(this, {
                        thumbs: {
                            swiper: null,
                            init: pt.init.bind(this),
                            update: pt.update.bind(this),
                            onThumbClick: pt.onThumbClick.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        var t = this.params.thumbs;
                        t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                    },
                    slideChange: function () {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    update: function () {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    resize: function () {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    observerUpdate: function () {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    setTransition: function (t) {
                        var e = this.thumbs.swiper;
                        e && e.setTransition(t)
                    },
                    beforeDestroy: function () {
                        var t = this.thumbs.swiper;
                        t && this.thumbs.swiperCreated && t && t.destroy()
                    }
                }
            }];
        return void 0 === j.use && (j.use = j.Class.use, j.installModule = j.Class.installModule), j.use(ft), j
    }),
    function () {
        "use strict";

        function i(t) {
            if (void 0 === t) throw new Error('Pathformer [constructor]: "element" parameter is required');
            if (t.constructor === String && !(t = document.getElementById(t))) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
            if (!(t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
            this.el = t, this.scan(t)
        }
        var s, e, t, l;

        function n(t, e, i) {
            s(), this.isReady = !1, this.setElement(t, e), this.setOptions(e), this.setCallback(i), this.isReady && this.init()
        }
        i.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"], i.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], i.prototype.scan = function (t) {
            for (var e, i, s, n = t.querySelectorAll(this.TYPES.join(",")), o = 0; o < n.length; o++) i = (0, this[(e = n[o]).tagName.toLowerCase() + "ToPath"])(this.parseAttr(e.attributes)), s = this.pathMaker(e, i), e.parentNode.replaceChild(s, e)
        }, i.prototype.lineToPath = function (t) {
            var e = {},
                i = t.x1 || 0,
                s = t.y1 || 0,
                n = t.x2 || 0,
                o = t.y2 || 0;
            return e.d = "M" + i + "," + s + "L" + n + "," + o, e
        }, i.prototype.rectToPath = function (t) {
            var e, i, s = {},
                n = parseFloat(t.x) || 0,
                o = parseFloat(t.y) || 0,
                a = parseFloat(t.width) || 0,
                r = parseFloat(t.height) || 0;
            return t.rx || t.ry ? (e = parseInt(t.rx, 10) || -1, i = parseInt(t.ry, 10) || -1, e = Math.min(Math.max(e < 0 ? i : e, 0), a / 2), i = Math.min(Math.max(i < 0 ? e : i, 0), r / 2), s.d = "M " + (n + e) + "," + o + " L " + (n + a - e) + "," + o + " A " + e + "," + i + ",0,0,1," + (n + a) + "," + (o + i) + " L " + (n + a) + "," + (o + r - i) + " A " + e + "," + i + ",0,0,1," + (n + a - e) + "," + (o + r) + " L " + (n + e) + "," + (o + r) + " A " + e + "," + i + ",0,0,1," + n + "," + (o + r - i) + " L " + n + "," + (o + i) + " A " + e + "," + i + ",0,0,1," + (n + e) + "," + o) : s.d = "M" + n + " " + o + " L" + (n + a) + " " + o + " L" + (n + a) + " " + (o + r) + " L" + n + " " + (o + r) + " Z", s
        }, i.prototype.polylineToPath = function (t) {
            var e, i = {},
                s = t.points.trim().split(" ");
            if (-1 === t.points.indexOf(",")) {
                for (var n = [], o = 0; o < s.length; o += 2) n.push(s[o] + "," + s[o + 1]);
                s = n
            }
            for (e = "M" + s[0], o = 1; o < s.length; o++) - 1 !== s[o].indexOf(",") && (e += "L" + s[o]);
            return i.d = e, i
        }, i.prototype.polygonToPath = function (t) {
            var e = i.prototype.polylineToPath(t);
            return e.d += "Z", e
        }, i.prototype.ellipseToPath = function (t) {
            var e = {},
                i = parseFloat(t.rx) || 0,
                s = parseFloat(t.ry) || 0,
                n = parseFloat(t.cx) || 0,
                o = parseFloat(t.cy) || 0,
                a = n - i,
                r = o,
                l = parseFloat(n) + parseFloat(i);
            return e.d = "M" + a + "," + r + "A" + i + "," + s + " 0,1,1 " + l + "," + o + "A" + i + "," + s + " 0,1,1 " + a + "," + o, e
        }, i.prototype.circleToPath = function (t) {
            var e = {},
                i = parseFloat(t.r) || 0,
                s = parseFloat(t.cx) || 0,
                n = parseFloat(t.cy) || 0,
                o = s - i,
                a = n,
                r = parseFloat(s) + parseFloat(i);
            return e.d = "M" + o + "," + a + "A" + i + "," + i + " 0,1,1 " + r + "," + n + "A" + i + "," + i + " 0,1,1 " + o + "," + n, e
        }, i.prototype.pathMaker = function (t, e) {
            for (var i, s = document.createElementNS("http://www.w3.org/2000/svg", "path"), n = 0; n < t.attributes.length; n++) i = t.attributes[n], -1 === this.ATTR_WATCH.indexOf(i.name) && s.setAttribute(i.name, i.value);
            for (n in e) s.setAttribute(n, e[n]);
            return s
        }, i.prototype.parseAttr = function (t) {
            for (var e, i = {}, s = 0; s < t.length; s++) {
                if (e = t[s], -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
                i[e.name] = e.value
            }
            return i
        }, n.LINEAR = function (t) {
            return t
        }, n.EASE = function (t) {
            return -Math.cos(t * Math.PI) / 2 + .5
        }, n.EASE_OUT = function (t) {
            return 1 - Math.pow(1 - t, 3)
        }, n.EASE_IN = function (t) {
            return Math.pow(t, 3)
        }, n.EASE_OUT_BOUNCE = function (t) {
            var e = 1 - Math.cos(t * (.5 * Math.PI)),
                i = Math.pow(e, 1.5),
                s = Math.pow(1 - t, 2);
            return 1 - s + (1 - Math.abs(Math.cos(i * (2.5 * Math.PI)))) * s
        }, n.prototype.setElement = function (e, i) {
            var t, s;
            if (void 0 === e) throw new Error('Vivus [constructor]: "element" parameter is required');
            if (e.constructor === String && !(e = document.getElementById(e))) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
            if (this.parentEl = e, i && i.file) {
                s = this, t = function () {
                    var t = document.createElement("div");
                    t.innerHTML = this.responseText;
                    var e = t.querySelector("svg");
                    if (!e) throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : " + i.file);
                    s.el = e, s.el.setAttribute("width", "100%"), s.el.setAttribute("height", "100%"), s.parentEl.appendChild(s.el), s.isReady = !0, s.init(), s = null
                };
                var n = new window.XMLHttpRequest;
                return n.addEventListener("load", t), n.open("GET", i.file), void n.send()
            }
            switch (e.constructor) {
                case window.SVGSVGElement:
                case window.SVGElement:
                case window.SVGGElement:
                    this.el = e, this.isReady = !0;
                    break;
                case window.HTMLObjectElement:
                    s = this, (t = function (t) {
                        if (!s.isReady) {
                            if (s.el = e.contentDocument && e.contentDocument.querySelector("svg"), !s.el && t) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                            s.el && (e.getAttribute("built-by-vivus") && (s.parentEl.insertBefore(s.el, e), s.parentEl.removeChild(e), s.el.setAttribute("width", "100%"), s.el.setAttribute("height", "100%")), s.isReady = !0, s.init(), s = null)
                        }
                    })() || e.addEventListener("load", t);
                    break;
                default:
                    throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
            }
        }, n.prototype.setOptions = function (t) {
            var e = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
                i = ["inViewport", "manual", "autostart"];
            if (void 0 !== t && t.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
            if ((t = t || {}).type && -1 === e.indexOf(t.type)) throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");
            if (this.type = t.type || e[0], t.start && -1 === i.indexOf(t.start)) throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");
            if (this.start = t.start || i[0], this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/"), this.duration = l(t.duration, 120), this.delay = l(t.delay, null), this.dashGap = l(t.dashGap, 1), this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE, this.reverseStack = !!t.reverseStack, this.selfDestroy = !!t.selfDestroy, this.onReady = t.onReady, this.map = [], this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null, this.ignoreInvisible = !!t.hasOwnProperty("ignoreInvisible") && !!t.ignoreInvisible, this.animTimingFunction = t.animTimingFunction || n.LINEAR, this.pathTimingFunction = t.pathTimingFunction || n.LINEAR, this.delay >= this.duration) throw new Error("Vivus [constructor]: delay must be shorter than duration")
        }, n.prototype.setCallback = function (t) {
            if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
            this.callback = t || function () {}
        }, n.prototype.mapping = function () {
            for (var t, e, i, s, n, o = s = n = 0, a = this.el.querySelectorAll("path"), r = 0; r < a.length; r++) t = a[r], this.isInvisible(t) || (i = {
                el: t,
                length: Math.ceil(t.getTotalLength())
            }, isNaN(i.length) ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", t) : (this.map.push(i), t.style.strokeDasharray = i.length + " " + (i.length + 2 * this.dashGap), t.style.strokeDashoffset = i.length + this.dashGap, i.length += this.dashGap, s += i.length, this.renderPath(r)));
            for (s = 0 === s ? 1 : s, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (1 < a.length ? a.length - 1 : 1), this.reverseStack && this.map.reverse(), r = 0; r < this.map.length; r++) {
                switch (i = this.map[r], this.type) {
                    case "delayed":
                        i.startAt = this.delayUnit * r, i.duration = this.duration - this.delay;
                        break;
                    case "oneByOne":
                        i.startAt = n / s * this.duration, i.duration = i.length / s * this.duration;
                        break;
                    case "sync":
                    case "async":
                    case "nsync":
                        i.startAt = 0, i.duration = this.duration;
                        break;
                    case "scenario-sync":
                        t = i.el, e = this.parseAttr(t), i.startAt = o + (l(e["data-delay"], this.delayUnit) || 0), i.duration = l(e["data-duration"], this.duration), o = void 0 !== e["data-async"] ? i.startAt : i.startAt + i.duration, this.frameLength = Math.max(this.frameLength, i.startAt + i.duration);
                        break;
                    case "scenario":
                        t = i.el, e = this.parseAttr(t), i.startAt = l(e["data-start"], this.delayUnit) || 0, i.duration = l(e["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, i.startAt + i.duration)
                }
                n += i.length, this.frameLength = this.frameLength || this.duration
            }
        }, n.prototype.drawer = function () {
            var t = this;
            if (this.currentFrame += this.speed, this.currentFrame <= 0) this.stop(), this.reset();
            else {
                if (!(this.currentFrame >= this.frameLength)) return this.trace(), void(this.handle = e(function () {
                    t.drawer()
                }));
                this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy()
            }
            this.callback(this), this.instanceCallback && (this.instanceCallback(this), this.instanceCallback = null)
        }, n.prototype.trace = function () {
            for (var t, e, i = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, s = 0; s < this.map.length; s++) t = (i - (e = this.map[s]).startAt) / e.duration, t = this.pathTimingFunction(Math.max(0, Math.min(1, t))), e.progress !== t && (e.progress = t, e.el.style.strokeDashoffset = Math.floor(e.length * (1 - t)), this.renderPath(s))
        }, n.prototype.renderPath = function (t) {
            var e, i;
            this.forceRender && this.map && this.map[t] && (i = (e = this.map[t]).el.cloneNode(!0), e.el.parentNode.replaceChild(i, e.el), e.el = i)
        }, n.prototype.init = function () {
            this.frameLength = 0, this.currentFrame = 0, this.map = [], new i(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this)
        }, n.prototype.starter = function () {
            switch (this.start) {
                case "manual":
                    return;
                case "autostart":
                    this.play();
                    break;
                case "inViewport":
                    var t = this,
                        e = function () {
                            t.isInViewport(t.parentEl, 1) && (t.play(), window.removeEventListener("scroll", e))
                        };
                    window.addEventListener("scroll", e), e()
            }
        }, n.prototype.getStatus = function () {
            return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress"
        }, n.prototype.reset = function () {
            return this.setFrameProgress(0)
        }, n.prototype.finish = function () {
            return this.setFrameProgress(1)
        }, n.prototype.setFrameProgress = function (t) {
            return t = Math.min(1, Math.max(0, t)), this.currentFrame = Math.round(this.frameLength * t), this.trace(), this
        }, n.prototype.play = function (t, e) {
            if (this.instanceCallback = null, t && "function" == typeof t) this.instanceCallback = t, t = null;
            else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");
            return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), this.speed = t || 1, this.handle || this.drawer(), this
        }, n.prototype.stop = function () {
            return this.handle && (t(this.handle), this.handle = null), this
        }, n.prototype.destroy = function () {
            var t, e;
            for (this.stop(), t = 0; t < this.map.length; t++)(e = this.map[t]).el.style.strokeDashoffset = null, e.el.style.strokeDasharray = null, this.renderPath(t)
        }, n.prototype.isInvisible = function (t) {
            var e, i = t.getAttribute("data-ignore");
            return null !== i ? "false" !== i : !!this.ignoreInvisible && !(e = t.getBoundingClientRect()).width && !e.height
        }, n.prototype.parseAttr = function (t) {
            var e, i = {};
            if (t && t.attributes)
                for (var s = 0; s < t.attributes.length; s++) i[(e = t.attributes[s]).name] = e.value;
            return i
        }, n.prototype.isInViewport = function (t, e) {
            var i = this.scrollY(),
                s = i + this.getViewportH(),
                n = t.getBoundingClientRect(),
                o = n.height,
                a = i + n.top;
            return a + o * (e = e || 0) <= s && i <= a + o
        }, n.prototype.getViewportH = function () {
            var t = this.docElem.clientHeight,
                e = window.innerHeight;
            return t < e ? e : t
        }, n.prototype.scrollY = function () {
            return window.pageYOffset || this.docElem.scrollTop
        }, s = function () {
            n.prototype.docElem || (n.prototype.docElem = window.document.documentElement, e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                return window.setTimeout(t, 1e3 / 60)
            }, t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
                return window.clearTimeout(t)
            })
        }, l = function (t, e) {
            var i = parseInt(t, 10);
            return 0 <= i ? i : e
        }, "function" == typeof define && define.amd ? define([], function () {
            return n
        }) : "object" == typeof exports ? module.exports = n : window.Vivus = n
    }(),
    function () {
        var e, i, w = [].indexOf || function (t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            x = [].slice;
        e = this, i = function (l, o) {
            var e, a, r, h, i, d, c, n, u, s, p, f, m, g, v, y;

            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, t.data(d, this.id), c[this.id] = this, t.bind(f, function () {
                    var t;
                    if (!e.didScroll && !n) return e.didScroll = !0, t = function () {
                        return e.doScroll(), e.didScroll = !1
                    }, o.setTimeout(t, l[y].settings.scrollThrottle)
                }), t.bind(p, function () {
                    var t;
                    if (!e.didResize) return e.didResize = !0, t = function () {
                        return l[y]("refresh"), e.didResize = !1
                    }, o.setTimeout(t, l[y].settings.resizeThrottle)
                })
            }

            function b(t, e, i) {
                var s, n;
                "bottom-in-view" === (i = l.extend({}, l.fn[v].defaults, i)).offset && (i.offset = function () {
                    var t = l[y]("viewportHeight");
                    return l.isWindow(e.element) || (t = e.$element.height()), t - l(this).outerHeight()
                }), this.$element = t, this.element = t[0], this.axis = i.horizontal ? "horizontal" : "vertical", this.callback = i.handler, this.context = e, this.enabled = i.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = i, e.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, (s = null != (n = t.data(g)) ? n : []).push(this.id), t.data(g, s)
            }
            return e = l(o), n = 0 <= w.call(o, "ontouchstart"), h = {
                horizontal: {},
                vertical: {}
            }, c = {}, d = "waypoints-context-id", p = "resize.waypoints", f = "scroll.waypoints", m = i = 1, g = "waypoints-waypoint-ids", v = "waypoint", y = "waypoints", t.prototype.doScroll = function () {
                var s = this,
                    t = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    };
                return !n || t.vertical.oldScroll && t.vertical.newScroll || l[y]("refresh"), l.each(t, function (t, n) {
                    var o = [],
                        e = n.newScroll > n.oldScroll,
                        i = e ? n.forward : n.backward;
                    return l.each(s.waypoints[t], function (t, e) {
                        var i, s;
                        return n.oldScroll < (i = e.offset) && i <= n.newScroll || n.newScroll < (s = e.offset) && s <= n.oldScroll ? o.push(e) : void 0
                    }), o.sort(function (t, e) {
                        return t.offset - e.offset
                    }), e || o.reverse(), l.each(o, function (t, e) {
                        if (e.options.continuous || t === o.length - 1) return e.trigger([i])
                    })
                }), this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }, t.prototype.refresh = function () {
                var t, e = this,
                    i = l.isWindow(this.element),
                    s = this.$element.offset();
                return this.doScroll(), t = {
                    horizontal: {
                        contextOffset: i ? 0 : s.left,
                        contextScroll: i ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: i ? 0 : s.top,
                        contextScroll: i ? 0 : this.oldScroll.y,
                        contextDimension: i ? l[y]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, l.each(t, function (t, r) {
                    return l.each(e.waypoints[t], function (t, e) {
                        var i, s, n = e.options.offset,
                            o = e.offset,
                            a = l.isWindow(e.element) ? 0 : e.$element.offset()[r.offsetProp];
                        if (l.isFunction(n) ? n = n.apply(e.element) : "string" == typeof n && (n = parseFloat(n), -1 < e.options.offset.indexOf("%") && (n = Math.ceil(r.contextDimension * n / 100))), e.offset = a - r.contextOffset + r.contextScroll - n, (!e.options.onlyOnScroll || null == o) && e.enabled) return null !== o && o < (i = r.oldScroll) && i <= e.offset ? e.trigger([r.backward]) : null !== o && o > (s = r.oldScroll) && s >= e.offset || null === o && r.oldScroll >= e.offset ? e.trigger([r.forward]) : void 0
                    })
                })
            }, t.prototype.checkEmpty = function () {
                if (l.isEmptyObject(this.waypoints.horizontal) && l.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([p, f].join(" ")), delete c[this.id]
            }, a = t, b.prototype.trigger = function (t) {
                if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
            }, b.prototype.disable = function () {
                return this.enabled = !1
            }, b.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0
            }, b.prototype.destroy = function () {
                return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, b.getWaypointsByElement = function (t) {
                var e, i = l(t).data(g);
                return i ? (e = l.extend({}, h.horizontal, h.vertical), l.map(i, function (t) {
                    return e[t]
                })) : []
            }, r = b, s = {
                init: function (t, n) {
                    return null == n && (n = {}), null == n.handler && (n.handler = t), this.each(function () {
                        var t, e, i = l(this),
                            s = null != (e = n.context) ? e : l.fn[v].defaults.context;
                        return l.isWindow(s) || (s = i.closest(s)), s = l(s), t = (t = c[s.data(d)]) || new a(s), new r(i, t, n)
                    }), l[y]("refresh"), this
                },
                disable: function () {
                    return s._invoke(this, "disable")
                },
                enable: function () {
                    return s._invoke(this, "enable")
                },
                destroy: function () {
                    return s._invoke(this, "destroy")
                },
                prev: function (t, e) {
                    return s._traverse.call(this, t, e, function (t, e, i) {
                        if (0 < e) return t.push(i[e - 1])
                    })
                },
                next: function (t, e) {
                    return s._traverse.call(this, t, e, function (t, e, i) {
                        if (e < i.length - 1) return t.push(i[e + 1])
                    })
                },
                _traverse: function (e, t, i) {
                    var s, n;
                    return null == e && (e = "vertical"), null == t && (t = o), n = u.aggregate(t), s = [], this.each(function () {
                        var t = l.inArray(this, n[e]);
                        return i(s, t, n[e])
                    }), this.pushStack(s)
                },
                _invoke: function (t, i) {
                    return t.each(function () {
                        var t = r.getWaypointsByElement(this);
                        return l.each(t, function (t, e) {
                            return e[i](), !0
                        })
                    }), this
                }
            }, l.fn[v] = function () {
                var t = arguments[0],
                    e = 2 <= arguments.length ? x.call(arguments, 1) : [];
                return s[t] ? s[t].apply(this, e) : l.isFunction(t) ? s.init.apply(this, arguments) : l.isPlainObject(t) ? s.init.apply(this, [null, t]) : t ? l.error("The " + t + " method does not exist in jQuery Waypoints.") : l.error("jQuery Waypoints needs a callback function or handler option.")
            }, l.fn[v].defaults = {
                context: o,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, u = {
                refresh: function () {
                    return l.each(c, function (t, e) {
                        return e.refresh()
                    })
                },
                viewportHeight: function () {
                    var t;
                    return null != (t = o.innerHeight) ? t : e.height()
                },
                aggregate: function (t) {
                    var e, i, s = h;
                    return t && (s = null != (i = c[l(t).data(d)]) ? i.waypoints : void 0), s ? (e = {
                        horizontal: [],
                        vertical: []
                    }, l.each(e, function (t, i) {
                        return l.each(s[t], function (t, e) {
                            return i.push(e)
                        }), i.sort(function (t, e) {
                            return t.offset - e.offset
                        }), e[t] = l.map(i, function (t) {
                            return t.element
                        }), e[t] = l.unique(e[t])
                    }), e) : []
                },
                above: function (t) {
                    return null == t && (t = o), u._filter(t, "vertical", function (t, e) {
                        return e.offset <= t.oldScroll.y
                    })
                },
                below: function (t) {
                    return null == t && (t = o), u._filter(t, "vertical", function (t, e) {
                        return e.offset > t.oldScroll.y
                    })
                },
                left: function (t) {
                    return null == t && (t = o), u._filter(t, "horizontal", function (t, e) {
                        return e.offset <= t.oldScroll.x
                    })
                },
                right: function (t) {
                    return null == t && (t = o), u._filter(t, "horizontal", function (t, e) {
                        return e.offset > t.oldScroll.x
                    })
                },
                enable: function () {
                    return u._invoke("enable")
                },
                disable: function () {
                    return u._invoke("disable")
                },
                destroy: function () {
                    return u._invoke("destroy")
                },
                extendFn: function (t, e) {
                    return s[t] = e
                },
                _invoke: function (i) {
                    var t = l.extend({}, h.vertical, h.horizontal);
                    return l.each(t, function (t, e) {
                        return e[i](), !0
                    })
                },
                _filter: function (t, e, i) {
                    var s, n = c[l(t).data(d)];
                    return n ? (s = [], l.each(n.waypoints[e], function (t, e) {
                        if (i(n, e)) return s.push(e)
                    }), s.sort(function (t, e) {
                        return t.offset - e.offset
                    }), l.map(s, function (t) {
                        return t.element
                    })) : []
                }
            }, l[y] = function () {
                var t = arguments[0],
                    e = 2 <= arguments.length ? x.call(arguments, 1) : [];
                return u[t] ? u[t].apply(null, e) : u.aggregate.call(null, t)
            }, l[y].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, e.load(function () {
                return l[y]("refresh")
            })
        }, "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (t) {
            return i(t, e)
        }) : i(e.jQuery, e)
    }.call(this);
