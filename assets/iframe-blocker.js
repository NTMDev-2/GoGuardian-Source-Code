// Code of GoGuardian's iframe-blocker, leaked here.
// Can be found in file: https://extension.goguardian/extension.html

! function(e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
            })
        },
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (t.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var a in e) t.d(i, a, function(n) {
                    return e[n]
                }.bind(null, a));
            return i
        },
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        },
        t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, t.p = "", t(t.s = 98)
}({
    7: function(e, n, t) {
        "use strict";
        n.__esModule = !0;
        var i = function() {
            function e() {
                this.shared = {
                        onPolicyRequest: new a("gg:shared:policy:request"),
                        onPolicyReceived: new a("gg:shared:policy:received"),
                        onWebsocketMessage: new a("gg:shared:websocket:message"),
                        onViewingCreated: new a("gg:shared:viewing:created")
                    },
                    this.admin = {
                        onVideoWatched: new a("gg:admin:video:watched"), // Youtube blocking
                        onVideoBlocked: new a("gg:admin:video:blocked"), // Youtube blocking
                        onFlaggedActivityReceived: new a("gg:admin:flaggedactivity:received"),
                        onSmartAlertsPredictionRequest: new a("gg:admin:smartalerts:prediction:request"),
                        onSmartAlertsPredictionReceived: new a("gg:admin:smartalerts:prediction:received"),
                        onSmartAlertsReportSkipped: new a("gg:admin:smartalerts:report:skipped"),
                        onSmartAlertsCloseMessage: new a("gg:admin:smartalerts:closemessage"),
                        onPolicyUpdated: new a("gg:admin:policy:updated")
                    },
                    this.beacon = {
                        onCloseMessage: new a("gg:beacon:closemessage"),
                        onPrediction: new a("gg:beacon:prediction")
                    },
                    this.miner = {
                        onContentReceived: new a("gg:miner:content:received"),
                        onAnalysisTriggered: new a("gg:miner:analysis:triggered")
                    },
                    this.extension = {
                        onResponseReceived: new a("gg:extension:response:received")
                    },
                    window.addEventListener("message", this.switchboard.bind(this))
            }
            return e.prototype.switchboard = function(e) {
                var n = e.data;
                if (n) switch (n.type) {
                    case this.shared.onPolicyRequest.eventName:
                        this.shared.onPolicyRequest.callListeners(n.payload);
                        break;
                    case this.shared.onPolicyReceived.eventName:
                        this.shared.onPolicyReceived.callListeners(n.payload);
                        break;
                    case this.shared.onWebsocketMessage.eventName:
                        this.shared.onWebsocketMessage.callListeners(n.payload);
                        break;
                    case this.shared.onViewingCreated.eventName:
                        this.shared.onViewingCreated.callListeners(n.payload);
                        break;
                    case this.admin.onVideoWatched.eventName:
                        this.admin.onVideoWatched.callListeners(n.payload);
                        break;
                    case this.admin.onVideoBlocked.eventName:
                        this.admin.onVideoBlocked.callListeners(n.payload);
                        break;
                    case this.admin.onFlaggedActivityReceived.eventName:
                        this.admin.onFlaggedActivityReceived.callListeners(n.payload);
                        break;
                    case this.admin.onSmartAlertsPredictionRequest.eventName:
                        this.admin.onSmartAlertsPredictionRequest.callListeners(n.payload);
                        break;
                    case this.admin.onSmartAlertsReportSkipped.eventName:
                        this.admin.onSmartAlertsReportSkipped.callListeners(n.payload);
                        break;
                    case this.admin.onSmartAlertsPredictionReceived.eventName:
                        this.admin.onSmartAlertsPredictionReceived.callListeners(n.payload);
                        break;
                    case this.admin.onSmartAlertsCloseMessage.eventName:
                        this.admin.onSmartAlertsCloseMessage.callListeners(n.payload);
                        break;
                    case this.admin.onPolicyUpdated.eventName:
                        this.admin.onPolicyUpdated.callListeners(n.payload);
                        break;
                    case this.beacon.onCloseMessage.eventName:
                        this.beacon.onCloseMessage.callListeners(n.payload);
                        break;
                    case this.beacon.onPrediction.eventName:
                        this.beacon.onPrediction.callListeners(n.payload);
                        break;
                    case this.miner.onContentReceived.eventName:
                        this.miner.onContentReceived.callListeners(n.payload);
                        break;
                    case this.miner.onAnalysisTriggered.eventName:
                        this.miner.onAnalysisTriggered.callListeners(n.payload);
                        break;
                    case this.extension.onResponseReceived.eventName:
                        this.extension.onResponseReceived.callListeners(n.payload)
                }
            }, e
        }();
        n.Messenger = i;
        var a = function() {
            function e(e, n) {
                this.eventName = e, this.listeners = n || []
            }
            return e.prototype.addListener = function(e) {
                    this.listeners.push(e)
                },
                e.prototype.callListeners = function(e) {
                    this.listeners.forEach((function(n) {
                        n(e)
                    }))
                },
                e.prototype.emit = function(e, n, t) {
                    var i = {
                        type: this.eventName,
                        payload: n
                    };
                    if (e.top && window.top && window.top.postMessage(i, "*"), e.iframes)
                        for (var a = 0; a < window.frames.length; a++) window.frames[a].postMessage(i, "*")
                },
                e
        }();
        n.CrossEmitter = a
    },
    98: function(e, n, t) {
        "use strict";
        n.__esModule = !0;
        var i = t(7);
        ! function() {
            var e = window.navigator,
                n = e.userAgentData && e.userAgentData.brands && e.userAgentData.brands.some((function(e) {
                    return "Google Chrome" === e.brand
                }));
            if (Boolean(n)) {
                var t = new i.Messenger,
                    a = window.chrome.runtime && window.chrome.runtime.connect;
                if (Boolean(a)) try {
                    var s = chrome.runtime.connect("haldlgldplgnggkjaafhelgiaglafanh", {
                        name: "cip-ext-check"
                    });
                    // This extension ID is very unique. Most GoGuardian Bypassers know it as GoGuardian's google extension ID. This is significant because
                    // GoGuardian is forcing a connection to its extension, making iframes useless since extensions are browser wide, and an iframe must be ran on a browser. [UNPROVEN EXPLANATION]
                    s.onMessage.addListener((function(e) {
                        t.extension.onResponseReceived.emit({
                            top: !0,
                            iframes: !1
                        }, {
                            installed: !0,
                            prioritizeNativeAgent: !!e.prioritizeNativeAgent,
                            error: !1
                        })
                    }));
                    s.onDisconnect.addListener((function() {
                        chrome.runtime.lastError && t.extension.onResponseReceived.emit({
                            top: !0,
                            iframes: !1
                        }, {
                            installed: !1,
                            error: chrome.runtime.lastError.message
                        })
                    }))
                } catch (e) {
                    t.extension.onResponseReceived.emit({
                        top: !0,
                        iframes: !1
                    }, {
                        installed: !1,
                        error: e.message
                    })
                }
                else t.extension.onResponseReceived.emit({
                    top: !0,
                    iframes: !1
                }, {
                    installed: !1,
                    error: "no externally connectable extensions"
                })
            }
        }()
    }
});
