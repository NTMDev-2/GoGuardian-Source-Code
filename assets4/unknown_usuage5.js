// 5508 - 6000
// Interesting lines: 96-144
function(A, e, t) {
    "use strict";
    var n = this && this.__importDefault || function(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    };
    e.__esModule = !0;
    var r = n(t(17)),
        i = n(t(57));
    e.default = function(A, e, t) {
        var n, s, o, a, c, l, u = 0,
            h = !1,
            w = !1,
            d = !0,
            f = !e && 0 !== e && "function" == typeof i.default.requestAnimationFrame;
        if ("function" != typeof A) throw new TypeError("Expected a function");

        function g(e) {
            var t = n,
                r = s;
            return n = s = void 0, u = e, a = A.apply(r, t)
        }

        function B(A, e) {
            return f ? (i.default.cancelAnimationFrame(c), i.default.requestAnimationFrame(A)) : setTimeout(A, e)
        }

        function p(A) {
            return u = A, c = B(b, e), h ? g(A) : a
        }

        function m(A) {
            var t = A - l;
            return void 0 === l || t >= e || t < 0 || w && A - u >= o
        }

        function b() {
            var A = Date.now();
            if (m(A)) return Q(A);
            c = B(b, function(A) {
                var t = A - u,
                    n = e - (A - l);
                return w ? Math.min(n, o - t) : n
            }(A))
        }

        function Q(A) {
            return c = void 0, d && n ? g(A) : (n = s = void 0, a)
        }

        function C() {
            for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
            var r = Date.now(),
                i = m(r);
            if (n = A, s = this, l = r, i) {
                if (void 0 === c) return p(l);
                if (w) return c = B(b, e), g(l)
            }
            return void 0 === c && (c = B(b, e)), a
        }
        return e = +e || 0, r.default(t) && (h = !!t.leading, o = (w = "maxWait" in t) ? Math.max(+t.maxWait || 0, e) : o, d = "trailing" in t ? !!t.trailing : d), C.cancel = function() {
            var A;
            void 0 !== c && (A = c, f ? i.default.cancelAnimationFrame(A) : clearTimeout(A)), u = 0, n = l = s = c = void 0
        }, C.flush = function() {
            return void 0 === c ? a : Q(Date.now())
        }, C.pending = function() {
            return void 0 !== c
        }, C
    }
},
function(A, e, t) {
    "use strict";
    var n = this && this.__importDefault || function(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    };
    e.__esModule = !0;
    var r = n(t(58)),
        i = "object" == typeof globalThis && null !== globalThis && globalThis.Object === Object && globalThis,
        s = "object" == typeof self && null !== self && self.Object === Object && self,
        o = i || r.default || s || Function("return this")();
    e.default = o
},
function(A, e, t) {
    "use strict";
    (function(A) {
        e.__esModule = !0;
        var t = "object" == typeof A && null !== A && A.Object === Object && A;
        e.default = t
    }).call(this, t(8))
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(0),
        r = t(6),
        i = function() {
            function A(A) {
                this.state = {
                    wsIsOpen: !1,
                    connectionRetries: 0
                }, this.path = A, this.websocketConnectAddr = n.WEBSOCKET_ENDPOINT, this.initAttempts = 0, this.init()
            }
            return A.prototype.init = function() {
                var A = this,
                    e = new XMLHttpRequest;
                e.onerror = this.onInitError.bind(this), e.onload = function() {
                    if (200 === e.status) {
                        var t = JSON.parse(e.responseText);
                        t.websocketConnectAddr && (A.websocketConnectAddr = t.websocketConnectAddr), A.onInitSuccess()
                    } else A.onInitError()
                }, e.open("GET", n.WEBSOCKET_CONFIG_ENDPOINT, !0), e.send()
            }, A.prototype.onInitError = function() {
                this.initAttempts += 1;
                var A = this.initAttempts * n.WEBSOCKET_INIT_RETRY_DELAY_STEP;
                window.setTimeout(this.init.bind(this), Math.min(A, n.WEBSOCKET_INIT_RETRY_DELAY_MAX))
            }, A.prototype.onInitSuccess = function() {
                this.connect()
            }, A.prototype.onopen = function(A) {}, A.prototype.onclose = function(A) {}, A.prototype.onmessage = function(A) {}, A.prototype.onerror = function(A) {}, A.prototype.send = function(A) {
                if (this.state.wsIsOpen && this.ws) this.ws.send(A);
                else {
                    this.state.connectionRetries < n.WEBSOCKET_MAX_CONNECTION_RETRIES && (this.connect(), this.state.connectionRetries++);
                    var e = new XMLHttpRequest;
                    e.addEventListener("error", this._onerror.bind(this)), e.open("POST", n.WEBSOCKET_HTTP_ENDPOINT + "?script-id=" + r.SCRIPT_ID, !0), e.send(A)
                }
            }, A.prototype.connect = function() {
                var A = new URL(this.websocketConnectAddr || n.WEBSOCKET_ENDPOINT);
                A.searchParams.set("script-id", r.SCRIPT_ID), A.pathname = this.path, this.ws = new WebSocket(A.toString()), this.ws.onopen = this._onopen.bind(this), this.ws.onclose = this._onclose.bind(this), this.ws.onmessage = this._onmessage.bind(this), this.ws.onerror = this._onerror.bind(this)
            }, A.prototype._onopen = function(A) {
                this.state.wsIsOpen = !0, this.onopen(A)
            }, A.prototype._onclose = function(A) {
                this.state.wsIsOpen = !1, this.onclose(A)
            }, A.prototype._onmessage = function(A) {
                this.onmessage(A)
            }, A.prototype._onerror = function(A) {
                this.onerror(A)
            }, A
        }();
    e.WebsocketManager = i
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    for (var n = [], r = 0; r < 256; ++r) n.push((r + 256).toString(16).substr(1));
    e.randomUuidv4 = function() {
        var A = window.crypto || window.msCrypto;
        if (!A || !A.getRandomValues) return null;
        if (A.randomUUID) try {
            return A.randomUUID()
        } catch (A) {}
        try {
            var e = new Uint8Array(16);
            A.getRandomValues(e), e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128;
            var t = Array.from(e).map((function(A) {
                return n[A]
            })).join("");
            return [t.substr(0, 8), t.substr(8, 4), t.substr(12, 4), t.substr(16, 4), t.substr(20, 12)].join("-")
        } catch (A) {
            return null
        }
    }
},
function(A, e, t) {
    "use strict";
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
        };
    e.__esModule = !0;
    var i = t(62),
        s = t(10),
        o = t(3),
        a = t(0);
    ! function(A) {
        A.UNKNOWN = "UNKNOWN", A.ADMIN_YOUTUBE_CATEGORY = "ADMIN_YOUTUBE_CATEGORY", A.ADMIN_YOUTUBE_CHANNEL = "ADMIN_YOUTUBE_CHANNEL", A.ADMIN_YOUTUBE_KEYWORD = "ADMIN_YOUTUBE_KEYWORD", A.ADMIN_YOUTUBE_VIDEO = "ADMIN_YOUTUBE_VIDEO", A.ADMIN_YOUTUBE_AGE_RESTRICTION = "ADMIN_YOUTUBE_AGE_RESTRICTION", A.ADMIN_YOUTUBE_SAFE_MODE = "ADMIN_YOUTUBE_SAFE_MODE"
    }(e.VideoBlockReason || (e.VideoBlockReason = {}));
    var c = {
            "google.com": !0,
            "www.google.com": !0,
            "bing.com": !0,
            "www.bing.com": !0
        },
        l = function() {
            function A(A, e, t, n, r) {
                this.pageInTransition = !1, this.messenger = A, this.logger = e, this.metrics = t, this.ws = n, this.ws.onopen = this.flush.bind(this), this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = this.onMessage.bind(this), this.ws.onerror = this.onError.bind(this), this.toSubmit = [];
                var i = s.stripHashFromGoogleDocs(window.location.host, window.location.href);
                this.entities = s.getEntities(), this.currEntity = this.entities[i], this.lastUrl = i, this.currEntity || this.createEntity(i, !0, r), this.startViewing(), window.addEventListener("blur", this.onBlur.bind(this)), window.addEventListener("focus", this.onFocus.bind(this)), this.watchLocationChanges(), this.messenger.admin.onVideoWatched.addListener(this.addVideoMetadata.bind(this)), this.messenger.admin.onVideoBlocked.addListener(this.addVideoMetadata.bind(this)), this.messenger.admin.onFlaggedActivityReceived.addListener(this.addFlaggedActivityMeta.bind(this)), this.messenger.admin.onPolicyUpdated.addListener(this.recheckPolicy.bind(this)), setInterval(this.flush.bind(this), a.ENTITIES_FLUSH_INTERVAL_MS)
            }
            return A.prototype.isYouTubeHostname = function() {
                return a.YOUTUBE_HOSTNAME_REGEXES.some((function(A) {
                    return new RegExp(A, "gi").test(window.location.host)
                }))
            }, A.prototype.getTitle = function() {
                var A = 500;
                return this.isYouTubeHostname() && (A = 2e3), new Promise((function(e) {
                    setTimeout((function() {
                        e(window.document.title.trim())
                    }), A)
                }))
            }, A.prototype.isCurrEntityExpired = function() {
                var A = this.currEntity.entity;
                return !!A.viewings && !!A.viewings[0] && Date.now() - A.viewings[0].start_time_ms >= a.ENTITIES_MUTATION_WINDOW_MS
            }, A.prototype.refreshCurrEntity = function() {
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(A) {
                        switch (A.label) {
                            case 0:
                                return [4, this.createEntity(this.getCurrEntityUrl())];
                            case 1:
                                return A.sent(), [2]
                        }
                    }))
                }))
            }, A.prototype.createEntity = function(A, e, t) {
                return void 0 === e && (e = !0), n(this, void 0, void 0, (function() {
                    var n, i, o, a;
                    return r(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.getTitle()];
                            case 1:
                                return n = r.sent(), this.currEntity = {
                                    id: s.getEntityId(),
                                    entity: {
                                        url: A,
                                        title: n,
                                        viewings: [{
                                            id: 1,
                                            start_time_ms: Date.now(),
                                            end_time_ms: Date.now()
                                        }],
                                        admin_policy_override_id: t || void 0
                                    }
                                }, "" !== (i = s.getFaviconUrlFromDOM()) ? this.currEntity.entity.favicon_url = i : s.getFaviconUrlFromImg(this.onFaviconLoaded.bind(this, A)), (o = s.getBlockedSites()).length > 0 && (this.currEntity.entity.blocked_sites = o), (a = s.getDoc()) && (this.currEntity.entity.docs = [a]), this.entities[A] = this.currEntity, this.toSubmit.push(this.currEntity), e && this.emitViewingCreated(), [2]
                        }
                    }))
                }))
            }, A.prototype.onFaviconLoaded = function(A, e) {
                var t = this.entities[A];
                t.entity.favicon_url = e, this.toSubmit.push(s.createFaviconUrlDiff(t.id, e))
            }, A.prototype.addVideoMetadata = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e, t;
                    return r(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return this.currEntity ? this.isCurrEntityExpired() ? [4, this.refreshCurrEntity()] : [3, 2] : (setTimeout(this.addVideoMetadata.bind(this, A), 500), [2]);
                            case 1:
                                n.sent(), n.label = 2;
                            case 2:
                                return this.currEntity.entity.videos = this.currEntity.entity.videos || [], e = !1, (t = this.currEntity.entity.videos.find((function(e) {
                                    return e.video_id === A.video_id
                                }))) ? (A.block_metadata && (t.block_metadata && t.block_metadata.reason === A.block_metadata.reason || (t.block_metadata = A.block_metadata, e = !0)), A.admin_policy_override_video_id && t.admin_policy_override_video_id !== A.admin_policy_override_video_id && (t.admin_policy_override_video_id = A.admin_policy_override_video_id, e = !0)) : (this.currEntity.entity.videos.push(A), e = !0), e ? this.toSubmitContainsInitialEntity() ? [2] : (this.toSubmit.push(s.createVideoDiff(this.currEntity.id, A)), [2]) : [2]
                        }
                    }))
                }))
            }, A.prototype.addFlaggedActivityMeta = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e;
                    return r(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return this.currEntity ? this.isCurrEntityExpired() ? [4, this.refreshCurrEntity()] : [3, 2] : (setTimeout(this.addFlaggedActivityMeta.bind(this, A), 500), [2]);
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return this.currEntity.entity.flagged_activity = this.currEntity.entity.flagged_activity || [], e = A.flags.map((function(A) {
                                    return A.term
                                })), this.currEntity.entity.flagged_activity.some((function(A) {
                                    var t = A.flags.map((function(A) {
                                        return A.term
                                    }));
                                    return !o.arrContainsUniqueElem(e, t)
                                })) ? [2] : (this.currEntity.entity.flagged_activity.push(A), this.toSubmitContainsInitialEntity() ? [2] : (this.toSubmit.push(s.createFlaggedActivityDiff(this.currEntity.id, A)), [2]))
                        }
                    }))
                }))
            }, A.prototype.toSubmitContainsInitialEntity = function() {
                var A = this.currEntity.id;
                return this.toSubmit.some((function(e) {
                    return e.id === A && !!e.entity.url
                }))
            }, A.prototype.watchLocationChanges = function() {
                var A;
                window.addEventListener(a.LOCATION_CHANGE_EVENT, this.onLocationChange.bind(this)), history.pushState = function(A) {
                    return function() {
                        var e = A.apply(this, arguments);
                        return window.dispatchEvent(new Event(a.LOCATION_CHANGE_EVENT)), e
                    }
                }.bind(history)(history.pushState), history.replaceState = function(A) {
                    return function() {
                        var e = A.apply(this, arguments);
                        return window.dispatchEvent(new Event(a.LOCATION_CHANGE_EVENT)), e
                    }
                }.bind(history)(history.replaceState), window.addEventListener("popstate", (function() {
                    window.dispatchEvent(new Event(a.LOCATION_CHANGE_EVENT))
                })), window.addEventListener("hashchange", (function() {
                    window.dispatchEvent(new Event(a.LOCATION_CHANGE_EVENT))
                })), A = window.location.href, setInterval((function() {
                    A != window.location.href && (A = window.location.href, window.dispatchEvent(new Event(a.LOCATION_CHANGE_EVENT)))
                }), 100)
            }, A.prototype.onLocationChange = function() {
                var A = s.stripHashFromGoogleDocs(window.location.host, window.location.href);
                A !== this.lastUrl && (this.lastUrl = A, this.pageInTransition = !0, this.checkPolicy(A, window.location.hostname, this.createNewEntityAndViewing.bind(this)))
            }, A.prototype.createNewEntityAndViewing = function(A, e) {
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.createEntity(A, !1, e)];
                            case 1:
                                return t.sent(), this.createViewing(), this.pageInTransition = !1, [2]
                        }
                    }))
                }))
            }, A.prototype.checkPolicy = function(A, e, t) {
                var n = this;
                this.sendViolatesPolicyRequest(A).then((function(r) {
                    var i = r.status,
                        s = r.response;
                    200 === i ? "" == s.redirectUrl ? "" == s.safeSearchUrl || n.isSafeSearchSPARequest(e) ? t(A, s.adminPolicyOverrideID) : window.location.href = s.safeSearchUrl : window.location.href = s.redirectUrl : t(A)
                })).catch((function() {}))
            }, A.prototype.sendViolatesPolicyRequest = function(A) {
                var e = this;
                return new Promise((function(t, n) {
                    var r = Date.now(),
                        i = new XMLHttpRequest;
                    i.addEventListener("error", (function() {
                        n()
                    })), i.addEventListener("load", (function() {
                        e.metrics.histogram("entity_manager.url_violates_request.latency_ms", Date.now() - r);
                        var A = JSON.parse(i.responseText);
                        200 !== i.status && (e.metrics.increment("entity_manager.url_violates_request.error"), e.logger.withFields({
                            status_code: i.status,
                            response: A
                        }).error("EntityManager.checkPolicy failed to determine if url violates policy")), t({
                            status: i.status,
                            response: A
                        })
                    })), i.open("GET", a.POLICY_ENDPOINT + "/violates/url?u=" + encodeURIComponent(A), !0), i.send()
                }))
            }, A.prototype.recheckPolicy = function() {
                var A = this,
                    e = i.isBlockUrl(window.location.href),
                    t = e ? i.parseBlockUrl(window.location.href).blockContext.originalURL : window.location.href;
                this.sendViolatesPolicyRequest(t).then((function(n) {
                    var r = n.status,
                        i = n.response;
                    if (200 === r)
                        if (e && "" == i.redirectUrl) window.location.href = t;
                        else if (!e) {
                        if ("" != i.redirectUrl) return void(window.location.href = i.redirectUrl);
                        if ("" != i.safeSearchUrl && !A.isSafeSearchSPARequest(window.location.host)) return void(window.location.href = i.safeSearchUrl)
                    }
                })).catch((function() {}))
            }, A.prototype.isSafeSearchSPARequest = function(A) {
                return !!c[A]
            }, A.prototype.getCurrEntityUrl = function() {
                return this.currEntity && this.currEntity.entity.url ? this.currEntity.entity.url : s.stripHashFromGoogleDocs(window.location.host, window.location.href)
            }, A.prototype.onBlur = function() {
                this.updateViewing(), this.stopViewing()
            }, A.prototype.onFocus = function() {
                this.pageInTransition || this.createViewing(), this.startViewing()
            }, A.prototype.emitViewingCreated = function() {
                this.messenger.shared.onViewingCreated.emit({
                    top: !0,
                    iframes: !1
                }, {
                    url: this.currEntity.entity.url,
                    entityID: this.currEntity.id
                })
            }, A.prototype.startViewing = function() {
                this.viewIntervId || (this.viewIntervId = window.setInterval(this.updateViewing.bind(this), a.ENTITIES_UPDATE_VIEWING_INTERVAL_MS))
            }, A.prototype.stopViewing = function() {
                this.viewIntervId && (clearInterval(this.viewIntervId), delete this.viewIntervId)
            }, A.prototype.createViewing = function() {
                if (!this.currEntity) return this.metrics.increment("entity_manager.create_viewing.current_entity_undefined"), void this.logger.warn("EntityManager.createViewing called without a current entity");
                if (this.emitViewingCreated(), this.isCurrEntityExpired()) this.refreshCurrEntity();
                else {
                    var A = this.currEntity.entity.viewings,
                        e = {
                            id: A ? A.length + 1 : 1,
                            start_time_ms: Date.now(),
                            end_time_ms: Date.now()
                        };
                    A && A.push(e);
                    var t = s.stripHashFromGoogleDocs(window.location.host, window.location.href);
                    this.toSubmit.push(s.createViewingDiff(this.currEntity.id, t, e))
                }
            }, A.prototype.updateViewing = function() {
                if (!this.pageInTransition) {
                    if (!this.currEntity) return this.metrics.increment("entity_manager.update_viewing.current_entity_undefined"), void this.logger.warn("EntityManager.updateViewing called without a current entity");
