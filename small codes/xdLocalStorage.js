// Unknown usuage, other than for GoGuardian contacting some database.
! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(o, r, function(n) {
                return e[n]
            }.bind(null, r));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 12)
}({
    12: function(e, n, t) {
        "use strict";
        window.XdUtils = window.XdUtils || {
            extend: function(e, n) {
                var t, o = n || {};
                for (t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
                return o
            }
        }, window.xdLocalStorage = window.xdLocalStorage || function() {
            function e(e) {
                var n;
                try {
                    n = JSON.parse(e.data)
                } catch (e) {}
                n && n.namespace === a && ("iframe-ready" === n.id ? (f = !0, u.initCallback()) : function(e) {
                    c[e.id] && (c[e.id](e), delete c[e.id])
                }(n))
            }

            function n(e, n, t, o) {
                l++, c[l] = o;
                var r = {
                    namespace: a,
                    id: l,
                    action: e,
                    key: n,
                    value: t
                };
                i.contentWindow.postMessage(JSON.stringify(r), "*")
            }

            function t(n) {
                u = XdUtils.extend(n, u);
                var t = document.createElement("div");
                window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent("onmessage", e), t.innerHTML = '<iframe id="' + u.iframeId + '" src=' + u.iframeUrl + ' style="display: none;"></iframe>', document.body.appendChild(t), i = document.getElementById(u.iframeId)
            }

            function o() {
                return d ? !!f || (console.log("You must wait for iframe ready message before using the api."), !1) : (console.log("You must call xdLocalStorage.init() before using it."), !1)
            }

            function r() {
                return "complete" === document.readyState
            }
            var i, a = "cross-domain-local-message",
                u = {
                    iframeId: "cross-domain-iframe",
                    iframeUrl: void 0,
                    initCallback: function() {}
                },
                l = -1,
                c = {},
                d = !1,
                f = !0;
            return {
                init: function(e) {
                    if (!e.iframeUrl) throw "You must specify iframeUrl";
                    d ? console.log("xdLocalStorage was already initialized!") : (d = !0, r() ? t(e) : document.addEventListener ? document.addEventListener("readystatechange", (function() {
                        r() && t(e)
                    })) : document.attachEvent("readystatechange", (function() {
                        r() && t(e)
                    })))
                },
                setItem: function(e, t, r) {
                    o() && n("set", e, t, r)
                },
                getItem: function(e, t) {
                    o() && n("get", e, null, t)
                },
                removeItem: function(e, t) {
                    o() && n("remove", e, null, t)
                },
                key: function(e, t) {
                    o() && n("key", e, null, t)
                },
                getSize: function(e) {
                    o() && n("size", null, null, e)
                },
                getLength: function(e) {
                    o() && n("length", null, null, e)
                },
                clear: function(e) {
                    o() && n("clear", null, null, e)
                },
                wasInit: function() {
                    return d
                }
            }
        }()
    }
});
