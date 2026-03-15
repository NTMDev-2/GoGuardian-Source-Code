// Unknown usuage
! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 100)
}({
    100: function(e, t, n) {
        "use strict";
        window.XdUtils = window.XdUtils || {
                extend: function(e, t) {
                    var n, o = t || {};
                    for (n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
                    return o
                }
            },
            function() {
                function e(e, t) {
                    var n = XdUtils.extend(t, s);
                    n.id = e, parent.postMessage(JSON.stringify(n), "*")
                }

                function t(t, n) {
                    e(t, {
                        key: n,
                        value: localStorage.getItem(n)
                    })
                }

                function n(t, n, o) {
                    localStorage.setItem(n, o), e(t, {
                        success: localStorage.getItem(n) === o
                    })
                }

                function o(t, n) {
                    localStorage.removeItem(n), e(t, {})
                }

                function r(t, n) {
                    e(t, {
                        key: localStorage.key(n)
                    })
                }

                function a(t) {
                    e(t, {
                        size: JSON.stringify(localStorage).length
                    })
                }

                function i(t) {
                    e(t, {
                        length: localStorage.length
                    })
                }

                function c(t) {
                    localStorage.clear(), e(t, {})
                }

                function l(e) {
                    var l;
                    try {
                        l = JSON.parse(e.data)
                    } catch (e) {}
                    l && l.namespace === u && ("set" === l.action ? n(l.id, l.key, l.value) : "get" === l.action ? t(l.id, l.key) : "remove" === l.action ? o(l.id, l.key) : "key" === l.action ? r(l.id, l.key) : "size" === l.action ? a(l.id) : "length" === l.action ? i(l.id) : "clear" === l.action && c(l.id))
                }
                var u = "cross-domain-local-message",
                    s = {
                        namespace: u
                    };
                window.addEventListener ? window.addEventListener("message", l, !1) : window.attachEvent("onmessage", l),
                    function() {
                        var e = {
                            namespace: u,
                            id: "iframe-ready"
                        };
                        parent.postMessage(JSON.stringify(e), "*")
                    }()
            }()
    }
});
