// 5274-5508
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(0),
        r = t(1);

    function i(A, e) {
        var t = new FormData;
        return t.append("Content-Type", A.contentType), t.append("key", A.key), t.append("policy", A.auth.policy), t.append("x-amz-algorithm", A.auth.algorithm), t.append("x-amz-credential", A.auth.credential), t.append("x-amz-date", A.auth.date), t.append("x-amz-signature", A.auth.signature), null !== e && t.append("file", e), t
    }

    function s(A, e, t, n, s) {
        r.getFetch()(A, {
            method: "POST",
            body: i(e, t),
            headers: {
                "X-S3-URL": "https://" + e.bucketName + ".s3.amazonaws.com"
            }
        }).then((function(A) {
            if (!A.ok) throw new Error("beacon upload returns non-2xx status: " + A.status)
        })).then((function() {
            n()
        })).catch((function(A) {
            s(A)
        }))
    }
    e.upload = function(A, e, t, r) {
        s(n.BEACON_UPLOAD_ENDPOINT, A, e, t, r)
    }, e.captureAndUpload = function(A, e, t) {
        s(n.BEACON_UPLOAD_ENDPOINT + "/capture-native", A, null, e, t)
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
        },
        i = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        };
    e.__esModule = !0;
    var s = i(t(5)),
        o = t(9),
        a = t(16),
        c = t(0),
        l = t(1);
    e.shouldUseSingleScreenshotForTest = h;
    var u = function() {
        function A(A, e, t, n) {
            this.policyEnabled = !1, this.useNativeScreenshots = !1, this.shouldScreenshot = !1, this.singleScreenshotTaken = !1, this.messenger = A, this.metrics = t, this.logger = e, this.beaconManager = n, this.messenger.shared.onPolicyReceived.addListener(this.policyReceived.bind(this)), this.messenger.shared.onViewingCreated.addListener(this.viewingCreated.bind(this)), this.throttledSaveScreenshot = s.default(this.saveScreenshot.bind(this), c.SCREENSHOT_THROTTLE_MS, {
                leading: !0,
                trailing: !1
            })
        }
        return A.prototype.policyReceived = function(A) {
            return n(this, void 0, void 0, (function() {
                var e, t;
                return r(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return e = this, (t = !0 === A.features.contextualScreenshotsEnabled) ? [4, this.beaconManager.isEnabled()] : [3, 2];
                        case 1:
                            t = n.sent(), n.label = 2;
                        case 2:
                            return e.policyEnabled = t, this.useNativeScreenshots = !0 === A.features.assetUseNativeScreenshots, this.policyEnabled && this.bufferSaveScreenshot && (this.saveScreenshot(this.bufferSaveScreenshot.url, this.bufferSaveScreenshot.entityID), this.bufferSaveScreenshot = void 0), [2]
                    }
                }))
            }))
        }, A.prototype.viewingCreated = function(A) {
            this.throttledSaveScreenshot(A.url, A.entityID)
        }, A.prototype.saveScreenshot = function(A, e) {
            this.policyEnabled ? this.singleScreenshotTaken && h(A) || (this.singleScreenshotTaken = !0, this.useNativeScreenshots ? this.saveScreenshotNative(A, e) : this.saveScreenshotHTML2Canvas(A, e)) : this.bufferSaveScreenshot = {
                url: A,
                entityID: e
            }
        }, A.prototype.saveScreenshotNative = function(A, e) {
            var t = this,
                n = Date.now(),
                r = function(A) {
                    t.metrics.increment("contextual.localstorage.screenshot_native.error"), t.logger.withError(A).error("Error requesting localstorage native screenshot")
                },
                i = new URLSearchParams({
                    entityID: e
                });
            this.useNativeScreenshots && l.getFetch()(c.LOCALSTORAGE_ENDPOINT + "/screenshots/capture?" + i.toString(), {
                method: "GET"
            }).then((function(A) {
                if (200 != A.status) r(new Error(A.statusText));
                else {
                    var e = Date.now() - n;
                    t.metrics.histogram("contextual.take_screenshot_native.latency_ms", e)
                }
            })).catch((function(A) {
                r(A)
            }))
        }, A.prototype.saveScreenshotHTML2Canvas = function(A, e) {
            var t = this,
                n = Date.now(),
                r = function(A) {
                    t.metrics.increment("contextual.localstorage.screenshot.error"), t.logger.withError(A).error("Error requesting localstorage screenshot")
                };
            o.takeScreenshot((function(i) {
                var s = Date.now() - n;
                t.metrics.histogram("contextual.take_screenshot.latency_ms", s), s > 2e3 ? t.logger.withFields({
                    url: A,
                    latency_ms: s
                }).info("screenshot is taken") : t.logger.withFields({
                    url: A,
                    latency_ms: s
                }).debug("screenshot is taken");
                var o = new URLSearchParams({
                    entityID: e
                });
                l.getFetch()(c.LOCALSTORAGE_ENDPOINT + "/screenshots/save?" + o.toString(), {
                    method: "POST",
                    body: new Blob([i], {
                        type: "text/plain"
                    })
                }).then((function(A) {
                    200 != A.status && r(new Error(A.statusText))
                })).catch((function(A) {
                    r(A)
                }))
            }), (function(A) {
                A !== o.blocklistError && (t.metrics.increment("contextual.take_screenshot.error"), t.logger.withError(A).error("Error taking screenshot"))
            }))
        }, A
    }();

    function h(A) {
        return a.isURLInTargets(c.SCREENSHOT_SINGLE_SHOT_HOSTNAME_LIST, A)
    }
    e.ContextualManager = u
},
