// 2963 - 3303
function(A, e, t) {
    "use strict";
    e.__esModule = !0, e.default = {
        holder: "position: relative;width: 100%;height: 100%;overflow: hidden;z-index: 4;",
        mobileHolder: "position: absolute;width: 100%;height: 100%;overflow: hidden;z-index: 4;top: 0;",
        titleDiv: "font-size: 15px;overflow: hidden;white-space: nowrap;width: 100%;position:absolute;color:white;top: 0px;left: 0px;background: -webkit-gradient(linear, left top, right top,color-stop(2%,rgba(0,0,0,1)),color-stop(50%,rgba(0,0,0,1)),color-stop(98%,rgba(0, 0, 0, 0.25)),color-stop(100%,rgba(0, 0, 0, 0)));padding: 5px 0px;",
        titleSpan: "margin-left: 10px; margin-right: 10px;",
        lockDiv: "text-align: center;position: absolute;right: 0px;bottom: 0px;padding: 4px;color: #4098D7;width: 100px",
        lockImage: "width: 100%;-webkit-border-image: none;border: none;background: none;",
        blockedDiv: "font-size: 16px;background: -webkit-gradient(linear, left top, right top,color-stop(0%,rgba(0, 0, 0, 0)),color-stop(2%,rgba(0, 0, 0, 0.25)),color-stop(50%,rgba(0,0,0,1)),color-stop(98%,rgba(0, 0, 0, 0.25)),color-stop(100%,rgba(0, 0, 0, 0)));overflow:hidden;line-height: 1.3;width:100%;position: absolute;color:white;top: 45%;left: 0px;text-align: center;padding: 5px 0px;",
        backgroundImage: "position: absolute;top: 0px;left: 0px;background-size: cover;margin: 0px;border: 0px;width: 100%;height: 100%;-webkit-filter: blur(15px);"
    }
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(3),
        r = function() {
            function A(A, e, t) {
                this.messenger = A, this.logger = e, this.metrics = t, this.messenger.shared.onPolicyReceived.addListener(this.configure.bind(this)), this.messenger.miner.onAnalysisTriggered.addListener(this.analyzeMinerContent.bind(this)), this.contentBuffer = []
            }
            return A.prototype.configure = function(A) {
                var e = this;
                this.flaggedTerms = (A.flaggedTerms || []).map((function(A) {
                    try {
                        A.termRegex = new RegExp("\\b" + A.term + "\\b", "gi")
                    } catch (t) {
                        return e.metrics.increment("flagged_activity_manager.configure.term_regex.error"), void e.logger.withError(t).withFields({
                            term: A.term
                        }).error("FlaggedActivityManager.configure unable to create regex for flagged term")
                    }
                    return A
                })).filter((function(A) {
                    return !!A
                })), this.contentBuffer.length > 0 && this.contentBuffer.forEach((function(A) {
                    e.analyze(A)
                }))
            }, A.prototype.analyzeMinerContent = function(A) {
                this.analyze(A.content)
            }, A.prototype.analyze = function(A) {
                if (this.flaggedTerms) {
                    var e = "";
                    A.title.forEach((function(A) {
                        e += A + " "
                    })), A.metaContent.forEach((function(A) {
                        e += A + " "
                    })), e = (e = (e += A.fullText).replace(/[^a-z0-9\s]/gi, " ")).replace(/[\s\t\n\r]+/g, " ");
                    var t = [],
                        r = 0,
                        i = {};
                    if (this.flaggedTerms.forEach((function(A) {
                            var n = e.match(A.termRegex);
                            if (n) {
                                A.categoryId && (i[A.categoryId] = ++i[A.categoryId] || 1);
                                var s = n.length,
                                    o = s > 1 ? A.severity * Math.log(s) : A.severity / 4;
                                o = Math.ceil(100 * o) / 100, r += o, t.push({
                                    term: A.term,
                                    count: s,
                                    calculated_severity: o,
                                    severity: A.severity
                                })
                            }
                        })), 0 !== r) {
                        var s = 0,
                            o = Object.keys(i).map((function(A) {
                                return i[A]
                            }));
                        if (o.length > 0) {
                            var a = n.invertObject(i),
                                c = o.reduce((function(A, e) {
                                    return Math.max(Number(A), Number(e))
                                }));
                            s = parseInt(a[c]) || 0
                        }
                        t.length > 1 ? r = r * Math.log(t.length) / Math.log(10) : r *= .25;
                        var l = t.filter((function(A) {
                            return "suicide" === A.term
                        }));
                        if (l.length > 0 && (r = 1.5 * r * l[0].count), !((r = r >= 10 ? 10 : Math.ceil(100 * r) / 100) <= 1)) {
                            if (this.lastMetadata) {
                                var u = t.map((function(A) {
                                        return A.term
                                    })),
                                    h = this.lastMetadata.flags.map((function(A) {
                                        return A.term
                                    }));
                                if (!n.arrContainsUniqueElem(u, h)) return
                            }
                            this.lastMetadata = {
                                flags: t
                            }, this.messenger.admin.onFlaggedActivityReceived.emit({
                                top: !0,
                                iframes: !1
                            }, {
                                flags: t,
                                severity: r,
                                category_id: s
                            })
                        }
                    }
                } else this.contentBuffer.push(A)
            }, A
        }();
    e.FlaggedActivityManager = r
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(26),
        r = t(0),
        i = function() {
            function A(A, e, t) {
                var n = this;
                this.messenger = A, this.logger = e, this.metrics = t, this.isEnabled = !1, this.getLocalIsEnabled(), this.messenger.shared.onPolicyReceived.addListener((function() {
                    var A = n.isEnabled;
                    n.getLocalIsEnabled(), n.isEnabled !== A && n.handlePrivacyBanner()
                })), this.handlePrivacyBanner()
            }
            return A.prototype.getLocalIsEnabled = function() {
                var A = sessionStorage.getItem(r.POLICY_SESSION_STORAGE_KEY);
                if (A) {
                    var e = JSON.parse(A);
                    this.isEnabled = Boolean(e && e.privacySettings && e.privacySettings.showPrivacyBanner)
                }
            }, A.prototype.handlePrivacyBanner = function() {
                this.isEnabled ? n.enable() : n.disable()
            }, A
        }();
    e.PrivacyBannerManager = i
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0, t(12);
    var n = t(0),
        r = t(26);
    e.privacyBubbleScript = function(A) {
        var e, t, i, s, o, a, c, l = window.xdLocalStorage,
            u = !1,
            h = !1,
            w = !1,
            d = 0,
            f = 0,
            g = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            B = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            p = g / 2,
            m = B / 2,
            b = document.getElementById("privacy-bubble-container"),
            Q = document.getElementById("privacy-bubble-button"),
            C = document.getElementById("privacy-bubble-text"),
            y = document.getElementById("gg-privacy-information"),
            v = document.getElementById("privacy-hide-button");
        window.addEventListener("DOMContentLoaded", (function() {
            var A;
            null === (A = Q) || void 0 === A || A.focus()
        })), null === (e = Q) || void 0 === e || e.addEventListener("keydown", (function(A) {
            "Enter" === A.key && (A.preventDefault(), U())
        })), null === (t = y) || void 0 === t || t.addEventListener("keydown", (function(A) {
            var e;
            "Tab" !== A.key || A.shiftKey || (A.preventDefault(), null === (e = v) || void 0 === e || e.focus())
        })), null === (i = v) || void 0 === i || i.addEventListener("keydown", (function(A) {
            "Enter" === A.key && _()
        }));
        var U = function() {
                C && (C.classList.toggle("visible", !0), y && y.focus())
            },
            _ = function() {
                var A;
                C && (C.classList.toggle("visible", !1), null === (A = Q) || void 0 === A || A.focus())
            };
        setTimeout((function() {
            l.init({
                iframeUrl: n.LOCALSTORAGE_ENDPOINT,
                initCallback: function() {
                    F()
                }
            })
        }), 1e3);
        var F = function() {
                Q && (Q.addEventListener("mousedown", k), Q.addEventListener("mouseup", S), window.addEventListener("mousemove", T), Q.addEventListener("touchstart", k, !1), Q.addEventListener("touchend", S, !1), window.addEventListener("touchmove", T, !1)), v && v.addEventListener("mouseup", S), l.getItem(n.PRIVACY_BUBBLE_STATE_STORAGE_KEY, (function(A) {
                    var e = A.value;
                    if (null !== e) {
                        var t = JSON.parse(e),
                            n = t.clientX,
                            r = t.clientY,
                            i = t.isVisible;
                        n && r && E(n, r), I(i)
                    } else I(!1);
                    b && b.classList.add("visible")
                })), setInterval((function() {
                    l.getItem(n.PRIVACY_BUBBLE_STATE_STORAGE_KEY, (function(A) {
                        var e = A.value;
                        if (null !== e) {
                            var t = JSON.parse(e),
                                n = t.clientX,
                                r = t.clientY,
                                i = t.isVisible;
                            n && r && E(n, r), i !== w && I(i)
                        }
                    }))
                }), n.PRIVACY_BUBBLE_POSITIONING_INTERVAL)
            },
            E = function(A, e) {
                s !== A && o !== e && (s = a = d = A, o = c = f = e, r.setPrivacyBubblePosition(A, e, b), H(s > p, s < p, o > m))
            },
            I = function(A) {
                var e;
                C && C.classList.toggle("visible", A), 1 == A && C ? (C.setAttribute("tabindex", "0"), C.focus()) : null === (e = C) || void 0 === e || e.blur(), w = A, r.savePrivacyBubbleTextVisibility(A)
            },
            H = function(A, e, t) {
                C && C.classList.toggle("gg-privacy-extend-left", A), C && C.classList.toggle("gg-privacy-extend-right", e), C && C.classList.toggle("gg-privacy-extend-up", t)
            },
            k = function(A) {
                "touchstart" === A.type ? (a = A.touches[0].clientX - d, c = A.touches[0].clientY - f, A.preventDefault()) : (a = A.clientX - d, c = A.clientY - f), u = !0
            },
            S = function(A) {
                a = s, c = o, u = !1, h ? (h = !1, H(s > p, s < p, o > m)) : I(!w), "touchend" === A.type && A.preventDefault()
            },
            T = function(A) {
                if (u) {
                    h = !0, "touchmove" === A.type ? (s = A.touches[0].clientX - a, o = A.touches[0].clientY - c) : (s = A.clientX - a, o = A.clientY - c);
                    g = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, B = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, p = g / 2, m = B / 2, s < 0 && (s = 0), s > g - 70 && (s = g - 70), o < 0 && (o = 0), o > B - 120 && (o = B - 120), d = s, f = o, r.setPrivacyBubblePosition(s, o, b), r.savePrivacyBubblePosition(s, o)
                }
            }
    }, e.getPrivacyBubbleContent = function() {
        return '\n    <style>\n      #goguardian-privacy-bubble {\n        font-family: helvetica, arial, sans-serif;\n        font-size: 1rem;\n        font: -apple-system-body;\n        font-weight: 400;\n        line-height: 1.5;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n      #goguardian-privacy-bubble p {\n        font-family: helvetica, arial, sans-serif;\n        font-size: 1rem;\n        font: -apple-system-body;\n        font-weight: 400;\n        line-height: 1.5;\n        padding: 0;\n        margin-bottom: 16px;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n      #goguardian-privacy-bubble .gg-privacy-container {\n        position: fixed; top: 16px; left: 16px; height: 0px; width: 0px;\n        visibility: hidden;\n      }\n      #goguardian-privacy-bubble .gg-privacy-fixed-position {\n        all: unset;\n        position: fixed;\n        z-index: 2147483638;\n        transform: translate3d(0, 0, 0);\n        height: 204px;\n        min-width: 42px;\n        pointer-events: none;\n      }\n      #goguardian-privacy-bubble .gg-privacy-heading {\n        font-family: helvetica, arial, sans-serif;\n        font-size: 1.2rem;\n        font: -apple-system-body;\n        margin-bottom: 4px;\n      }\n      #goguardian-privacy-bubble .gg-privacy-heading strong {\n        font-family: helvetica, arial, sans-serif !important;\n        font-size: 1.2rem;\n        font: -apple-system-body;\n        font-weight: 700;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n      #goguardian-privacy-bubble .gg-privacy-message {\n        background: rgb(255,255,255);\n        border: 1px solid grey;\n        padding: 24px;\n        visibility: hidden;\n        box-sizing: border-box;\n        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\n        color: #6f6f6f;\n        font-size: 12px;\n        width: 320px;\n        overflow: auto;\n        overflow-y: auto;\n        height: auto;\n        max-height: 80vh;\n        position: absolute;\n        word-wrap: break-word;\n        pointer-events: all;\n      }\n      #goguardian-privacy-bubble .visible {\n        visibility: visible;\n      }\n      #goguardian-privacy-bubble .gg-privacy-btn {\n        display: block;\n        position: absolute;\n        z-index: 2200000001;\n        top: 16px;\n        margin-top: auto;\n        margin-bottom: auto;\n        height: 42px;\n        width: 42px;\n        border-radius: 50%;\n        background: rgb(7, 138, 171);\n        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);\n        border: 0;\n        padding: 0;\n        min-width: auto;\n        pointer-events: all;\n      }\n      #goguardian-privacy-bubble .gg-privacy-btn:hover {\n        cursor: pointer;\n      }\n      #goguardian-privacy-bubble .gg-privacy-btn:focus {\n        outline: 5px auto #0097cf;\n      }\n      #goguardian-privacy-bubble .gg-privacy-extend-right {\n        margin-left: 21px;\n        padding-left: 36px;\n        left: 0;\n      }\n      #goguardian-privacy-bubble .gg-privacy-extend-left {\n        margin-right: 21px;\n        padding-right: 36px;\n        right: 0;\n      }\n      #goguardian-privacy-bubble .gg-privacy-extend-up {\n        bottom: 120px;\n      }\n      #goguardian-privacy-bubble .gg-privacy-icon {\n        height: 100%;\n        margin: 0;\n        position: relative;\n      }\n      #goguardian-privacy-bubble .gg-privacy-icon svg {\n        position: absolute;\n      }\n      #goguardian-privacy-bubble .gg-privacy-school-icon {\n        top: 10px;\n        left: 10px;\n      }\n      #goguardian-privacy-bubble .gg-privacy-banner-button {\n        background-color: #D9D9D9;\n        border-radius: 2px;\n        float: right;\n        text-transform: uppercase;\n        border: 1px solid #D9D9D9;\n        color: #000;\n        cursor: pointer;\n        padding: 4px 16px;\n        line-height: 1.5;\n        letter-spacing: 0.5px;\n        font-family: helvetica, arial, sans-serif;\n        font-size: 1rem;\n        font: -apple-system-body;\n        font-weight: 600;\n        -webkit-font-smoothing: antialiased;\n      }\n    </style>\n    <div class="gg-privacy-container" id="privacy-bubble-container" aria-labelledby="privacy-bubble-heading" aria-describedby="privacy-bubble-description" aria-live="polite" aria-atomic="true">\n      <div class="gg-privacy-fixed-position">\n        <button type="button" id="privacy-bubble-button" class="gg-privacy-btn" aria-label="GoGuardian Privacy Information"\n        aria-expanded="false" aria-controls="privacy-bubble-text" tabindex="0">\n        <div class="gg-privacy-icon">\n          <svg\n            id="privacy-bubble-school-icon"\n            width="24"\n            height="21"\n            viewBox="0 0 24 21"\n            style={{ fill: \'none\', marginTop: 10, marginLeft: 9 }}\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n            class="gg-privacy-school-icon"\n            role="none"\n            focusable="false"\n            aria-hidden="true"\n          >\n            <path\n              fillRule="evenodd"\n              clipRule="evenodd"\n              d="M5.27975 7.22H0.239746V20.66H5.27975V7.22ZM5.27951 10.58H2.75951V12.26H5.27951V10.58ZM2.75951 13.1H5.27951V14.78H2.75951V13.1ZM5.27951 15.62H2.75951V17.3H5.27951V15.62Z"\n              fill="white"\n            />\n            <path\n              fillRule="evenodd"\n              clipRule="evenodd"\n              d="M23.7599 13.94H20.3999V20.66H23.7599V13.94ZM21.24 16.46H20.4V19.82H21.24V16.46Z"\n              fill="white"\n            />\n            <path\n              fillRule="evenodd"\n              clipRule="evenodd"\n              d="M13.68 0.919998L6.95996 4.90255V20.66L11.16 20.66V16.46H9.48V15.62H17.88V16.46H16.2V20.66L20.4 20.66V4.90255L13.68 0.919998ZM17.04 8.9C17.04 10.7557 15.5357 12.26 13.68 12.26C11.8243 12.26 10.32 10.7557 10.32 8.9C10.32 7.04432 11.8243 5.54 13.68 5.54C15.5357 5.54 17.04 7.04432 17.04 8.9Z"\n              fill="white"\n            />\n            <circle cx="13.6795" cy="8.9" r="1.68" fill="white" />\n          </svg>\n        </div>\n      </button>\n      <div id="privacy-bubble-text" role="region" aria-modal="false" aria-label="Privacy Information" class="gg-privacy-message gg-privacy-extend-right">\n        <div id="gg-privacy-information" aria-labelledby="gg-privacy-information" tabindex="1">\n          <p id="privacy-bubble-description" tabindex="2">\n            Information on this screen can be visible to the school to\n            help keep you secure and scholarly while you\'re online.\n            Please reach out to the school for more information.\n          </p>\n        </div>\n        <div id="gg-privacy-hide-button" aria-labelledby="privacy-hide-button" tabindex="1">\n          <button type="button" id="privacy-hide-button" class="gg-privacy-banner-button"\n            aria-controls="privacy-bubble-text" aria-label="Hide this window">\n            Hide this\n          </button>\n        </div>\n      </div>\n    </div>\n  '
    }
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(0),
        r = function() {
            function A() {
                this.buffer = this.newBuffer(), this.curLogFields = {}
            }
            return A.prototype.getLoggerClient = function() {
                return {
                    alert: this.alert.bind(this),
                    debug: this.debug.bind(this),
                    error: this.error.bind(this),
                    info: this.info.bind(this),
                    trace: this.trace.bind(this),
                    warn: this.warn.bind(this),
                    withError: this.withError.bind(this),
                    withFields: this.withFields.bind(this)
                }
            }, A.prototype.getMetricsClient = function() {
                return {
                    count: this.count.bind(this),
                    histogram: this.histogram.bind(this),
                    increment: this.increment.bind(this)
                }
            }, A.prototype.newBuffer = function() {
                return {
                    metrics: [],
                    logs: []
                }
            }, A.prototype.alert = function(A) {
                this.submitLog("alert", A, this.curLogFields)
            }, A.prototype.debug = function(A) {
                this.submitLog("debug", A, this.curLogFields)
            }, A.prototype.error = function(A) {
                this.submitLog("error", A, this.curLogFields)
            }, A.prototype.info = function(A) {
                this.submitLog("info", A, this.curLogFields)
            }, A.prototype.trace = function(A) {
                this.submitLog("trace", A, this.curLogFields)
            }, A.prototype.warn = function(A) {
                this.submitLog("warn", A, this.curLogFields)
            }, A.prototype.withError = function(A) {
                return A && A instanceof Error ? this.withFields({
                    error: A.message,
                    stack: A.stack && A.stack.toString()
                }) : this.getLoggerClient()
            }, A.prototype.withFields = function(A) {
                var e = this;
                return Object.keys(A).map((function(t) {
                    var n = A[t];
                    switch (typeof A[t]) {
                        case "string":
                            break;
                        case "boolean":
                        case "number":
                            n = n.toString();
                            break;
                        default:
                            n = JSON.stringify(n)
                    }
                    e.curLogFields[t] = n
                })), this.getLoggerClient()
            }, A.prototype.submitLog = function(A, e, t) {
                var n = Object.assign({}, t, this.extraFields());
                this.buffer.logs.push({
                    level: A,
                    message: e,
                    fields: n
                }), this.curLogFields = {}, this.flush()
            }, A.prototype.count = function(A, e) {
                this.buffer.metrics.push({
                    type: "count",
                    key: A,
                    value: e
                }), this.flush()
            }, A.prototype.histogram = function(A, e) {
                this.buffer.metrics.push({
                    type: "histogram",
                    key: A,
                    value: e
                }), this.flush()
            }, A.prototype.increment = function(A) {
                this.buffer.metrics.push({
                    type: "increment",
                    key: A,
                    value: 1
                }), this.flush()
            }, A.prototype.flush = function() {
                var A = JSON.stringify(this.buffer);
                this.buffer = this.newBuffer();
                var e = new XMLHttpRequest;
                e.addEventListener("error", this.onFlushError.bind(this, A)), e.open("POST", n.LOGS_ENDPOINT, !0), e.send(A)
            }, A.prototype.onFlushError = function(A) {
                var e = this;
                if (A) {
                    var t = JSON.parse(A);
                    t && (t.metrics && t.metrics.map((function(A) {
                        e.buffer.metrics.push(A)
                    })), t.logs && t.logs.map((function(A) {
                        e.buffer.logs.push(A)
                    })))
                }
            }, A.prototype.extraFields = function() {
                var A = window.location.href;
                return {
                    asset_page_url: A.length > 2e3 ? A.slice(0, 2e3) : A,
                    asset_user_agent: navigator.userAgent
                }
            }, A
        }();
    e.Logging = r
},
