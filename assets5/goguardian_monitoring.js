// Lines 3304 - 3837
// These include: Smart Alerts, GG Teacher Off Task Alerts, and GG Teacher. It also includes how a teacher can forcefully close your tabs. 
function(A, e, t) {
    "use strict";
    (function(A) {
        var n = this && this.__awaiter || function(A, e, t, n) {
                return new(t || (t = Promise))((function(r, i) {
                    function s(A) {
                        try {
                            a(n.next(A))
                        } catch (A) {
                            i(A)
                        }
                    }

                    function o(A) {
                        try {
                            a(n.throw(A))
                        } catch (A) {
                            i(A)
                        }
                    }

                    function a(A) {
                        var e;
                        A.done ? r(A.value) : (e = A.value, e instanceof t ? e : new t((function(A) {
                            A(e)
                        }))).then(s, o)
                    }
                    a((n = n.apply(A, e || [])).next())
                }))
            },
            r = this && this.__generator || function(A, e) {
                var t, n, r, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, i[1])).done) return r;
                                switch (n = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        r = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < r[1]) {
                                            s.label = r[1], r = i;
                                            break
                                        }
                                        if (r && s.label < r[2]) {
                                            s.label = r[2], s.ops.push(i);
                                            break
                                        }
                                        r[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = e.call(A, s)
                            } catch (A) {
                                i = [6, A], n = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            },
            i = this && this.__values || function(A) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    t = e && A[e],
                    n = 0;
                if (t) return t.call(A);
                if (A && "number" == typeof A.length) return {
                    next: function() {
                        return A && n >= A.length && (A = void 0), {
                            value: A && A[n++],
                            done: !A
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            s = this && this.__read || function(A, e) {
                var t = "function" == typeof Symbol && A[Symbol.iterator];
                if (!t) return A;
                var n, r, i = t.call(A),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = i.next()).done;) s.push(n.value)
                } catch (A) {
                    r = {
                        error: A
                    }
                } finally {
                    try {
                        n && !n.done && (t = i.return) && t.call(i)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return s
            };
        e.__esModule = !0;
        var o = t(18),
            a = t(0),
            c = t(25),
            l = t(24),
            u = t(1),
            h = function() {
                function e(A, e, t) {
                    this.lastRunTime = 0, this.useNativeScreenshots = !1, this.contentBuffer = [], this.messenger = A, this.metrics = t, this.logger = e, this.reportsManager = new c.SmartAlertsReportsManager(A, e, t), this.messenger.admin.onSmartAlertsPredictionRequest.addListener(this.handlePredictionRequest.bind(this)), this.messenger.admin.onSmartAlertsReportSkipped.addListener(this.resetTimer.bind(this))
                }
                return e.prototype.shouldSkipPrediction = function(A) {
                    return n(this, void 0, void 0, (function() {
                        return r(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, l.isAllowlisted(this.logger, A)];
                                case 1:
                                    return e.sent() ? (this.logger.withFields({
                                        url: A
                                    }).debug("[admin/smart-alerts/proxies] prediction skipped, URL is allowlisted"), [2, !0]) : [4, this.isPredictionRequired(A)];
                                case 2:
                                    return e.sent() ? [2, !1] : [2, !0]
                            }
                        }))
                    }))
                }, e.prototype.isPredictionRequired = function(A) {
                    return n(this, void 0, void 0, (function() {
                        return r(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.isHostedDomain(A) ? [2, !0] : [4, this.getURLCategoryIds(A)];
                                case 1:
                                    return [2, e.sent().includes(a.UNCATEGORIZED_CATEGORY)]
                            }
                        }))
                    }))
                }, e.prototype.handlePredictionRequest = function(A) {
                    return n(this, void 0, void 0, (function() {
                        var e, t, n, i, s, o;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return A.smartAlertsForProxiesEnabled ? Date.now() - this.lastRunTime < 1e3 * a.SMART_ALERTS_MAX_CACHE_TIMEOUT ? [2] : [4, this.shouldSkipPrediction(A.context.url)] : [2];
                                case 1:
                                    return r.sent() ? [2] : [4, this.getSmartAlertsModelFile()];
                                case 2:
                                    e = r.sent(), t = [];
                                    try {
                                        t = JSON.parse(e.file_contents)
                                    } catch (A) {
                                        return this.logger.withError(A).error("Error parsing model JSON"), this.metrics.increment("admin.smart_alerts.proxy.parse_model.error"), [2]
                                    }
                                    return n = this.getAllAttributes(A.context.domExtraction), (i = this.keywordMatch(t, n)).length > 0 ? (s = {
                                        category: a.SMART_ALERTS_PREDICTOR_CATEGORY.PROXY,
                                        probability: 1,
                                        keywords: i
                                    }, o = {
                                        context: A.context,
                                        prediction: s
                                    }, this.messenger.admin.onSmartAlertsPredictionReceived.emit({
                                        top: !0,
                                        iframes: !1
                                    }, o), [2]) : (A.smartAlertsForProxiesLayer2Enabled && this.makePrediction(n, A.context), [2])
                            }
                        }))
                    }))
                }, e.prototype.getAllAttributes = function(A) {
                    var e, t, n = "";
                    try {
                        for (var r = i(Object.entries(A)), o = r.next(); !o.done; o = r.next()) {
                            var a = s(o.value, 2)[1];
                            Array.isArray(a) && (n += a.join(" ") + " ")
                        }
                    } catch (A) {
                        e = {
                            error: A
                        }
                    } finally {
                        try {
                            o && !o.done && (t = r.return) && t.call(r)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return n.trim()
                }, e.prototype.getURLCategoryIds = function(A) {
                    var e = this;
                    return this.fetchURLCategories(A).then((function(A) {
                        return A ? Object.values(A).reduce((function(A, t) {
                            return t ? A.concat(Object.keys(t).map((function(A) {
                                return parseInt(A, 10)
                            }))) : (e.logger.warn("URL Category is null or undefined"), A)
                        }), []) : (e.logger.warn("URL Categories response is null or undefined"), [])
                    })).catch((function(A) {
                        return e.logger.withError(A).error("Error fetching URL categories"), e.metrics.increment("admin.smart_alerts.fetch_url_categories.error"), []
                    }))
                }, e.prototype.isHostedDomain = function(A) {
                    try {
                        var e = A.split("://"),
                            t = e[0];
                        e.length > 1 && (t = e[1]);
                        for (var n = t.split("/")[0], r = 0; r < a.HOSTED_DOMAINS.length; r++) {
                            var i = a.HOSTED_DOMAINS[r];
                            if (n.includes(i)) return !0
                        }
                    } catch (e) {
                        this.logger.withError(e).error("Invalid URL: " + A)
                    }
                    return !1
                }, e.prototype.keywordMatch = function(A, e) {
                    var t = [],
                        n = A.proxy_keywords;
                    return n && Array.isArray(n) && n.forEach((function(A) {
                        e.includes(A) && t.push(A)
                    })), t
                }, e.prototype.getSmartAlertsModelFile = function() {
                    var A = this,
                        e = new URL(a.EXTERNAL_ENDPOINT + "/smart-alerts/model");
                    return u.getFetch()(e.toString(), {
                        method: "GET"
                    }).then((function(A) {
                        if (!A.ok) throw new Error("Failed to fetch model JSON: " + A.status);
                        return A.json()
                    })).catch((function(e) {
                        throw A.logger.withError(e).error("Error fetching model JSON"), A.metrics.increment("admin.smart_alerts_proxies.get_smart_alerts_model_file.error"), e
                    }))
                }, e.prototype.fetchURLCategories = function(A) {
                    var e = new URL(a.POLICY_ENDPOINT + "/url/categories");
                    return e.searchParams.set("u", A), u.getFetch()(e.toString(), {
                        method: "GET"
                    }).then((function(A) {
                        if (!A.ok) throw new Error("magic URL returns non-2xx status: " + A.status);
                        return A.json()
                    })).then((function(A) {
                        var e = {};
                        return Object.keys(A).forEach((function(t) {
                            var n = A[t];
                            e[t] = {}, Object.keys(n).forEach((function(A) {
                                e[t][parseInt(A, 10)] = {}
                            }))
                        })), e
                    }))
                }, e.prototype.resetTimer = function(A) {
                    A.predictionCategory === a.SMART_ALERTS_PREDICTOR_CATEGORY.PROXY && (this.lastRunTime = 0)
                }, e.prototype.makePrediction = function(e, t) {
                    var n = this,
                        r = {
                            fullText: e,
                            requestID: this.requestID(t.timestamp, t.url)
                        },
                        i = JSON.stringify(r),
                        s = (new TextEncoder).encode(i),
                        c = o.deflate(s, {
                            raw: !1
                        }),
                        h = A.from(c).toString("base64"),
                        w = Date.now(),
                        d = new AbortController,
                        f = setTimeout((function() {
                            return d.abort()
                        }), a.SMART_ALERTS_PREDICT_PROXY_TIMEOUT_MS);
                    u.getFetch()(a.SMART_ALERTS_PREDICT_PROXY_ENDPOINT, {
                        method: "POST",
                        body: new Blob([h], {
                            type: "application/binary"
                        }),
                        signal: d.signal
                    }).then((function(A) {
                        if (clearTimeout(f), !A.ok) throw new Error("smart alerts proxy prediction returns non-2xx status: " + A.status);
                        return A.json()
                    })).then((function(A) {
                        n.metrics.histogram("admin.smart_alerts.proxy.prediction.latency_ms", Date.now() - w);
                        var e = {
                                category: A.category,
                                modelVersion: A.modelVersion,
                                probability: A.probability
                            },
                            r = {
                                low: A.threshold.medium,
                                medium: A.threshold.high,
                                high: A.threshold.very_high
                            },
                            i = l.mapToX3Confidence(e, r),
                            s = {
                                context: t,
                                prediction: i
                            };
                        n.messenger.admin.onSmartAlertsPredictionReceived.emit({
                            top: !0,
                            iframes: !1
                        }, s), n.lastRunTime = Date.now()
                    })).catch((function(A) {
                        n.metrics.increment("admin.smart_alerts.proxy.prediction.error"), n.logger.withError(A).error("Error requesting proxy prediction")
                    }))
                }, e.prototype.requestID = function(A, e) {
                    return new Date(A).toISOString().slice(0, 19).replace("T", " ") + "-" + e.slice(0, 500)
                }, e
            }();
        e.SmartAlertsProxyManager = h
    }).call(this, t(4).Buffer)
},
function(A, e, t) {
    "use strict";
    var n = this && this.__importStar || function(A) {
        if (A && A.__esModule) return A;
        var e = {};
        if (null != A)
            for (var t in A) Object.hasOwnProperty.call(A, t) && (e[t] = A[t]);
        return e.default = A, e
    };
    e.__esModule = !0;
    var r = t(0),
        i = t(10),
        s = n(t(96)),
        o = t(97),
        a = t(27),
        c = t(6),
        l = function() {
            function A(A, e, t) {
                this.messenger = A, this.logger = e, this.metrics = t, this.socketManager = null, this.websocketConnectAddr = r.TEACHER_WS_ADDR, this.offTaskAlerts = null, this.videos = [], this.lastFocus = "visible" === document.visibilityState, this.lastFocusChangeMs = Date.now(), this.initAttempts = 0, this.init()
            }
            return A.prototype.init = function() {
                var A = this,
                    e = new XMLHttpRequest;
                e.onerror = this.onInitError.bind(this), e.onload = function() {
                    if (200 === e.status) {
                        var t = JSON.parse(e.responseText);
                        t.enabled && A.onInitSuccess(t)
                    } else A.onInitError()
                }, e.open("GET", r.TEACHER_CONFIG_ENDPOINT, !0), e.send()
            }, A.prototype.onInitError = function() {
                this.initAttempts += 1;
                var A = 250 * this.initAttempts;
                window.setTimeout(this.init.bind(this), Math.min(A, 1e4))
            }, A.prototype.onInitSuccess = function(A) {
                A.websocketConnectAddr && (this.websocketConnectAddr = A.websocketConnectAddr), this.socketManager = new s.default(this.logger, this.websocketConnectAddr), this.socketManager.on("connect", this.sendState.bind(this)), this.socketManager.on(s.CLOSE_TAB_EVENT, this.handleCloseTab.bind(this)), this.socketManager.on(s.MESSAGE_EVENT, this.handleMessage.bind(this)), this.socketManager.connect(), this.setupListeners(), this.offTaskAlerts = new o.OffTaskAlerts(this.messenger, this.logger, this.metrics), this.offTaskAlerts.setEnabled(A.offTaskAlertsEnabled)
            }, A.prototype.handleCloseTab = function() {
                document.cookie = "GoGuardianCloseTab=" + c.SCRIPT_ID, window.location.reload()
            }, A.prototype.handleMessage = function(A) {
                var e;
                switch (A.type) {
                    case a.ProxyMessageType.Redirect:
                        if (!A.location) {
                            console.log("GoGuardian: missing location in redirect message");
                            break
                        }
                        window.location = A.location;
                        break;
                    case a.ProxyMessageType.Reload:
                        window.location.reload();
                        break;
                    case a.ProxyMessageType.SetOffTaskAlertsEnabled:
                        if ("boolean" != typeof A.enabled) {
                            console.log("GoGuardian: invalid SetOffTaskAlertsEnabled message: invalid `enabled` value:", A.enabled);
                            break
                        }
                        null === (e = this.offTaskAlerts) || void 0 === e || e.setEnabled(A.enabled);
                        break;
                    case a.ProxyMessageType.AdminPolicyUpdated:
                        this.messenger.admin.onPolicyUpdated.emit({
                            top: !0,
                            iframes: !0
                        }, A);
                        break;
                    default:
                        console.log('GoGuardian: ignoring unknown message "' + A.type + '"')
                }
            }, A.prototype.setupListeners = function() {
                var A = this,
                    e = document.querySelector("title");
                e && new MutationObserver((function() {
                    A.sendState()
                })).observe(e, {
                    subtree: !0,
                    characterData: !0,
                    childList: !0
                }), document.addEventListener("visibilitychange", (function() {
                    var e = "visible" === document.visibilityState;
                    e !== A.lastFocus && (A.lastFocus = e, A.lastFocusChangeMs = Date.now(), A.sendState())
                })), window.addEventListener(r.LOCATION_CHANGE_EVENT, (function() {
                    A.videos = [], A.sendState()
                })), this.messenger.admin.onVideoWatched.addListener(this.handleVideo.bind(this)), this.messenger.admin.onVideoBlocked.addListener(this.handleVideo.bind(this))
            }, A.prototype.handleVideo = function(A) {
                var e;
                A.block_metadata && A.block_metadata.admin_policy_id && (e = {
                    reason: A.block_metadata.reason,
                    adminPolicyId: A.block_metadata.admin_policy_id,
                    adminFilterId: A.block_metadata.admin_filter_id
                });
                var t = {
                        id: A.video_id,
                        type: a.VideoStateType.YOUTUBE,
                        blockMetadata: e,
                        adminPolicyOverrideVideoId: A.admin_policy_override_video_id
                    },
                    n = this.videos.findIndex((function(e) {
                        return e.id === A.video_id
                    })); - 1 !== n ? this.videos[n] = t : this.videos.push(t), this.sendState()
            }, A.prototype.sendState = function() {
                if (null != this.socketManager && "connected" === this.socketManager.getState().type) {
                    var A = {
                        title: document.title,
                        url: window.location.href,
                        faviconUrl: i.getFaviconUrlFromDOM(),
                        focused: this.lastFocus,
                        lastFocusChangeMs: this.lastFocusChangeMs,
                        historyLength: window.history.length,
                        videos: this.videos
                    };
                    try {
                        this.socketManager.sendMessage(a.AssetMessageType.TabState, JSON.stringify(A))
                    } catch (A) {
                        this.logger.error(A)
                    }
                }
            }, A
        }();
    e.default = l
},
function(A, e, t) {
    "use strict";
    var n, r = this && this.__extends || (n = function(A, e) {
        return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(A, e) {
                A.__proto__ = e
            } || function(A, e) {
                for (var t in e) e.hasOwnProperty(t) && (A[t] = e[t])
            })(A, e)
    }, function(A, e) {
        function t() {
            this.constructor = A
        }
        n(A, e), A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
    });
    e.__esModule = !0;
    var i = t(13),
        s = t(0),
        o = t(27),
        a = t(6);
    e.CLOSE_TAB_EVENT = "close-tab", e.MESSAGE_EVENT = "message";
    var c = function(A) {
        function t(e, t) {
            var n = A.call(this) || this;
            return n.logger = e, n.baseAddr = t, n.state = {
                type: "disconnected"
            }, n.connectionAttempts = 0, n
        }
        return r(t, A), t.prototype.getState = function() {
            return this.state
        }, t.prototype.connect = function() {
            "disconnected" === this.state.type && (this.state = {
                type: "connecting"
            }, this.ws = new WebSocket("wss://" + this.baseAddr + s.TEACHER_WS_PATH + "?id=" + a.SCRIPT_ID), this.ws.onerror = this.onWsError.bind(this), this.ws.onclose = this.onWsClose.bind(this), this.ws.onmessage = this.onWsMessage.bind(this))
        }, t.prototype.onWsError = function(A) {
            this.logger.debug("teacher manager ws error event: " + A.type)
        }, t.prototype.onWsClose = function(A) {
            var t = this.state;
            if (this.state = {
                    type: "disconnected"
                }, this.emit("disconnect"), 4002 !== A.code || "connected" !== t.type && "connecting" !== t.type) {
                this.connectionAttempts += 1;
                var n = 250 * this.connectionAttempts;
                window.setTimeout(this.connect.bind(this), Math.min(n, 1e4))
            } else this.emit(e.CLOSE_TAB_EVENT)
        }, t.prototype.onWsMessage = function(A) {
            try {
                var e = JSON.parse(A.data);
                switch (e.type) {
                    case o.ProxyMessageType.Connected:
                        if ("connecting" !== this.state.type) return;
                        this.state = {
                            type: "connected"
                        }, this.connectionAttempts = 0, this.emit("connect");
                        break;
                    default:
                        this.emit("message", e)
                }
            } catch (A) {
                this.logger.error("failed to parse ws message: " + A)
            }
        }, t.prototype.sendMessage = function(A, e) {
            if (!this.ws || "connected" !== this.state.type) throw new Error("socket closed");
            var t = (new TextEncoder).encode(e),
                n = new Uint8Array(t.length + 1);
            n[0] = A;
            for (var r = 0; r < t.length; r++) n[r + 1] = t[r];
            this.ws.send(n)
        }, t
    }(i.EventEmitter);
    e.default = c
},
