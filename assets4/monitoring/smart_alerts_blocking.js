// 7001 - 7245
// HTML code for both block pages GoGuardian shows: Lines, 108; 141
hostname: window.location.hostname,
                            sampledWordContent: i,
                            screenshotDataUrl: null,
                            timestamp: Date.now(),
                            title: e,
                            triggerIds: [],
                            url: window.location.href,
                            x3ProcessedContent: r
                        },
                        a = this.settings.blockedCategories,
                        c = {
                            context: o,
                            isSelfHarmDisabled: a && -1 !== a.indexOf("self-harm"),
                            smartAlertsForProxiesEnabled: this.smartAlertsForProxiesEnabled,
                            smartAlertsForProxiesLayer2Enabled: this.smartAlertsForProxiesLayer2Enabled
                        };
                    this.messenger.admin.onSmartAlertsPredictionRequest.emit({
                        top: !0,
                        iframes: !1
                    }, c)
                }
            }, A.prototype.reportContextError = function() {
                this.metrics.increment("admin.smart_alerts.get_context.error"), this.logger.error("Context not available")
            }, A.prototype.handlePrediction = function(A) {
                var e = this,
                    t = A.context;
                if (!t) return this.reportContextError();
                A.prediction && this.shouldSkipReporting(A.prediction) ? this.messenger.admin.onSmartAlertsReportSkipped.emit({
                    top: !0,
                    iframes: !1
                }, {
                    predictionCategory: A.prediction.category
                }) : t.captureNativeScreenshot ? this.handleTriggers(A) : this.takeScreenshot((function(n) {
                    t ? (t.screenshotDataUrl = n, e.handleTriggers(A)) : e.reportContextError()
                }), (function(t) {
                    e.handleTriggers(A)
                }))
            }, A.prototype.shouldSkipReporting = function(A) {
                if (A.probability < s.SMART_ALERTS_REPORT_PROBABILITY_THRESHOLD) return !0;
                var e = this.settings.blockedCategories;
                return !(!e || -1 === e.indexOf(A.category))
            }, A.prototype.takeScreenshot = function(A, e) {
                var t = this,
                    n = Date.now();
                i.takeScreenshot((function(e) {
                    t.metrics.histogram("admin.smart_alerts.take_screenshot.latency_ms", Date.now() - n), A(e)
                }), (function(A) {
                    A !== i.blocklistError && (t.metrics.increment("admin.smart_alerts.take_screenshot.error"), t.logger.withError(A).error("Error capturing screenshot")), e(A)
                }))
            }, A.prototype.handleTriggers = function(A) {
                var e = A.context;
                if (!e) return this.reportContextError();
                if (!this.orgSettings.filterEnabled) return this.handleReport(A);
                var t = this.settings.triggers,
                    n = A.prediction || {},
                    i = n.category,
                    c = n.probability;
                if (!(0 === t.blocks.length && 0 === t.messages.length && (null != c ? c : 0) < s.CONFIDENCE.MEDIUM)) {
                    var l, u, h = t.blocks.filter((function(A) {
                            var e;
                            return "" === (e = A.category, null != e ? e : "").trim() || A.category === i
                        })).map((function(A) {
                            if (!(null != c && A.threshold > c)) return o.showBlock(A), A.triggerId
                        })),
                        w = t.messages.filter((function(A) {
                            var e;
                            return "" === (e = A.category, null != e ? e : "").trim() || A.category === i
                        })).map((function(A) {
                            if (!(null != c && A.threshold > c)) return a.showMessage(A), A.triggerId
                        }));
                    e.triggerIds = (l = h, u = w, Array.from(new Set(r(l, u))) || []).map((function(A) {
                        return A
                    })), this.handleReport(A)
                }
            }, A.prototype.handleReport = function(A) {
                var e = A.context;
                if (!e) return this.reportContextError();
                this.orgSettings.monitorEnabled && this.reportsManager.makeReport({
                    url: window.location.href,
                    timestamp: e.timestamp,
                    sources: [l.Source.TEXT],
                    content: e.sampledWordContent,
                    title: e.title,
                    triggerIds: e.triggerIds,
                    prediction: A.prediction,
                    tabScreenshot: e.screenshotDataUrl ? {
                        dataUrl: e.screenshotDataUrl
                    } : null,
                    captureNativeScreenshot: e.captureNativeScreenshot
                })
            }, A
        }();
    e.SmartAlertsManager = h
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(71);
    e.showBlock = function(A) {
        document.title = "Content Removed", document.getElementsByTagName("html")[0].innerHTML = n.getBlockContent(A.message)
    }
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0, e.getBlockContent = function(A) {
        return '\n<head>\n    <meta charset="UTF-8">\n    <style>\n      body {\n          font-family: \'Open Sans\', sans-serif;\n          background-color: #29414e;\n      }\n\n      .container {\n          width: 400px;\n          margin: 60px auto;\n      }\n\n      .gg-logo {\n          background-color: #fff;\n          background-image: url("https://static.goguardian.com/images/logos/shared/gg-dark-shield-notification.png");\n          background-position: center;\n          background-size: contain;\n          width: 100px;\n          height: 100px;\n          border-radius: 50%;\n          margin: 0 auto;\n          display: block;\n      }\n\n      .message-container {\n          background: #5b7087;\n          color: #fff;\n          padding: 40px;\n          margin: 20px auto;\n          border-radius: 2px;\n          font-size: 16px;\n          text-align: center;\n          position: relative;\n          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n      }\n\n      .message-container:after {\n          content: \'\';\n          position: absolute;\n          display: block;\n          width: 0;\n          height: 0;\n          border-left: 8px solid transparent;\n          border-right: 8px solid transparent;\n          border-bottom: 8px solid #5b7087;\n          top: -8px;\n          left: 50%;\n          margin-left: -8px;\n      }\n\n      #message {\n          transition: opacity 500ms ease-in-out;\n      }\n    </style>\n    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />\n</head>\n<body>\n    <div class="container" tabindex="0">\n        <img class="gg-logo" alt="GoGuardian logo" role="img" aria-label="GoGuardian logo" tabindex="0" \n            src="https://static.goguardian.com/images/logos/shared/gg-dark-shield-notification.png">\n        <div class="message-container">\n            <div id="message" tabindex="0" aria-label="Content Message">\n                ' + (A || "This content has been blocked.") + "\n            </div>\n        </div>\n    </div>\n</body>\n"
    }
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(73);

    function r() {
        var A = document.getElementById("goguardian-notification");
        A && A.parentNode && A.parentNode.removeChild(A)
    }
    e.closeMessage = r, e.showMessage = function(A) {
        var e;
        r();
        var t = n.getMessageContent(A.message),
            i = document.createElement("div");
        i.setAttribute("id", "notification-live-region"), i.setAttribute("role", "log"), i.setAttribute("aria-live", "polite"), i.setAttribute("aria-atomic", "true"), document.body.appendChild(i);
        var s = document.createElement("iframe");
        s.setAttribute("id", "goguardian-notification"), s.setAttribute("title", "Notification"), s.setAttribute("tabindex", "0"), s.setAttribute("style", "position: fixed; top: 20px; right: 20px; width: 400px; max-width: 80%; border-radius: 3px; border: 0; box-shadow: 0 0 2px rgba(0,0,0,0.5); z-index: 1000000000"), i.appendChild(s);
        var o = s.contentDocument || (null === (e = s.contentWindow) || void 0 === e ? void 0 : e.document);
        o && (o.open(), o.write(t), o.addEventListener("click", (function(A) {
            var e = A.target;
            e && "close-button" !== e.getAttribute("class") || window.top && window.top.postMessage({
                type: "gg:admin:smartalerts:closemessage",
                payload: {}
            }, "*")
        }), !1), s.focus())
    }
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0, e.getMessageContent = function(A) {
        return '\n<head>\n  <style>\n    body {\n        font-family: \'Open Sans\', sans-serif;\n        background: rgb(255,255,255);\n        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%);\n        margin: 10px 20px 20px;\n        font-size: 14px;\n    }\n    .heading {\n      font-size: 15px;\n      margin-bottom: 4px;\n    }\n    .message {\n      margin-right: 20px;\n    }\n    .close {\n      position: fixed;\n      right: 5px;\n      bottom: 5px;\n      border-radius: 50%;\n      border: 1px solid white;\n      color: rgba(125, 125, 125, 1);\n      background-color: white;\n      height: 30px;\n      width: 30px;\n      line-height: 30px;\n      font-size: 20px;\n      text-align: center;\n      cursor: pointer;\n    }\n    .close:hover {\n      border: 1px solid rgba(200, 200, 200, 1);\n      color: rgba(0, 0, 0, 1);\n    }\n    .gg-logo {\n      position: fixed;\n      right: 5px;\n      top: 5px;\n      background-color: white;\n      background-image: url("https://static.goguardian.com/images/logos/shared/gg-dark-shield-notification.png");\n      background-position: center;\n      background-size: contain;\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      margin: 0 0 0 10px;\n    }\n  </style>\n  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />\n</head>\n<body aria-live="polite" aria-atomic="true">\n  <div class="gg-logo" aria-label="Go Guardian logo" role="img"></div>\n  <div>\n    <h1 class="heading" aria-label="New Message" tabindex="1">New Message</h1>\n    <div class="message" tabindex="2">' + A + '</div>\n  </div>\n  <div class="close" tabindex="3">\n    <a class="close-button" aria-label="close message" role="button">&times;</a>\n  </div>\n</body>\n'
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
