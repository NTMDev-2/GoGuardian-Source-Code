// 6454 - 7000
e.createBlockUrl = function(t, n, r) {
            var a = function(A) {
                var e = A.orgID,
                    t = A.originalURL,
                    n = A.sourceType,
                    r = A.reason;
                return 0 === e ? "invalid orgID" : e >= v ? "invalid orgID (too big)" : i(t) ? o(n) ? !s(r) && "invalid reason" : "invalid sourceType" : "invalid originalURL"
            }(r);
            if (a) throw new Error("validation error: ".concat(a));
            var c = n ? "https" : "http",
                l = t === e.Environment.Production ? Q : C,
                u = K(r.reason),
                h = new URL("".concat(c, "://").concat(l).concat(u)),
                w = function(e) {
                    var t = e.orgID,
                        n = e.originalURL,
                        r = e.sourceType,
                        i = e.reason,
                        s = e.siteCategoryID,
                        o = e.adminPolicyID,
                        a = e.adminFilterID,
                        c = e.parentFilterID,
                        l = e.x3ReportPublicID,
                        u = e.teacherSceneID,
                        h = e.teacherSceneFilterID,
                        w = e.teacherSessionAdminNames,
                        d = new URLSearchParams({
                            oi: (t * y).toString(),
                            ou: n,
                            st: r,
                            rs: i
                        });
                    s && d.append("sci", s.toString()), o && d.append("api", o.toString()), a && d.append("afi", a.toString()), c && d.append("pfi", c.toString()), l && d.append("x3rpi", l.toString()), u && d.append("tsi", u.toString()), h && d.append("tsfi", h.toString()), w && w.length && w.forEach(A => d.append("tsans", A)), d.append("v", 1..toString()), d.sort();
                    var f = A.from(d.toString()).toString("base64");
                    return {
                        ctx: f,
                        sum: O(f).toString(16).padStart(8, "0")
                    }
                }(r),
                d = w.ctx,
                f = w.sum;
            return h.searchParams.append(p.Ctx, d), h.searchParams.append(p.Sum, f), h
        }, e.createEmptyBlockUrl = function(A, t, n) {
            var r = A === e.Environment.Staging ? C : Q,
                i = t ? "https" : "http",
                s = n ? K(n) : "";
            return new URL("".concat(i, "://").concat(r).concat(s))
        }, e.isBlockDomain = function(A) {
            var e = A.toLowerCase();
            return e === Q || e === C
        }, e.isBlockUrl = function(A) {
            var e = A.toLowerCase();
            if (!e.startsWith("https://") && !e.startsWith("http://")) return !1;
            var t = e.split("://")[1];
            return !(!t.startsWith(Q) && !t.startsWith(C))
        }, e.parseBlockUrl = function(A) {
            if (!A) throw new Error("empty URL");
            var e = new URL(A);
            return {
                environment: P(e.hostname),
                https: e.protocol.includes("https"),
                blockContext: N(e.search)
            }
        }
    }).call(this, t(4).Buffer)
},
function(A, e, t) {
    "use strict";
    var n = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        },
        r = this && this.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var e = {};
            if (null != A)
                for (var t in A) Object.hasOwnProperty.call(A, t) && (e[t] = A[t]);
            return e.default = A, e
        };
    e.__esModule = !0;
    var i = n(t(5)),
        s = t(3),
        o = n(t(64)),
        a = r(t(65)),
        c = t(0),
        l = t(66),
        u = t(1),
        h = function() {
            function A(A, e) {
                if (this.messenger = A, this.logger = e, this.frameId = window.top === window.self ? 0 : s.randomInt32(), this.shouldFetch = l.shouldFetchContent(c.GOOGLE_DOCS_URL, c.GDOC_ENABLED_FOR_MOBILE_BASIC), this.shouldFetch(window.location.href)) setInterval(this.extractAndEmit.bind(this), c.CONTENT_ANALYSIS_INTERVAL), this.extractAndEmit(), this.throttledExtractContent = i.default((function() {}), 0, {});
                else {
                    this.throttledExtractContent = i.default(this.extractAndEmit.bind(this), 1e4, {
                        trailing: !0,
                        leading: !1
                    }), this.mutationObserver = new MutationObserver(this.throttledExtractContent);
                    var t = document.documentElement;
                    t && this.mutationObserver.observe(t, {
                        childList: !0,
                        attributes: !1,
                        characterData: !0,
                        subtree: !0,
                        attributeOldValue: !1,
                        characterDataOldValue: !1
                    }), this.throttledExtractContent()
                }
            }
            return A.prototype.extractAndEmit = function() {
                this.createExtraction()
            }, A.prototype.createExtraction = function() {
                var A = this,
                    e = window.location.href;
                (this.shouldFetch(e) ? this.fetchGDocContent(e).then((function(A) {
                    return {
                        dom: l.toDOMExtraction(A),
                        x3: a.toWords([A.title, A.content].join(" "))
                    }
                })) : this.fetchDOMContent(e).then((function(e) {
                    return {
                        dom: e,
                        x3: new a.default(A.logger).getResult()
                    }
                }))).then((function(e) {
                    return A.emitExtraction(e)
                })).catch((function(e) {
                    return A.logger.warn("failed to extract content: " + e)
                }))
            }, A.prototype.fetchDOMContent = function(A) {
                return new Promise((function(A, e) {
                    try {
                        A(new o.default)
                    } catch (A) {
                        e(A)
                    }
                }))
            }, A.prototype.fetchGDocContent = function(A) {
                return u.getFetch()(c.CONTENT_FETCHER_ENDPOINT + "/google-doc", {
                    method: "POST",
                    body: JSON.stringify({
                        url: A
                    })
                }).then((function(A) {
                    return A.json()
                })).then((function(A) {
                    return A
                }))
            }, A.prototype.emitExtraction = function(A) {
                void 0 !== A.dom ? this.submitContent({
                    dom: A.dom,
                    x3: A.x3
                }) : this.logger.warn("dom extraction is undefined")
            }, A.prototype.submitContent = function(A) {
                w(this.content, A.dom) || (this.content = A.dom, this.x3Content = A.x3, this.messenger.miner.onContentReceived.emit({
                    top: !0,
                    iframes: !1
                }, {
                    frameId: this.frameId,
                    content: this.content,
                    x3Content: this.x3Content
                }))
            }, A
        }();

    function w(A, e) {
        if (!A && !e) return !0;
        if (!A || !e) return !1;
        var t = Object.keys(A),
            n = Object.keys(e);
        if (t.length !== n.length) return !1;
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            if (Array.isArray(A[i])) {
                if (s.arraysEqual(A[i], e[i])) continue;
                return !1
            }
            if (A[i] !== e[i]) return !1
        }
        return !0
    }
    e.ContentMiner = h, e.isDOMContentEqual = w
},
function(A, e, t) {
    "use strict";
    var n = this && this.__values || function(A) {
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
    };
    e.__esModule = !0;
    var r = ["a", "article", "audio", "button", "canvas", "caption", "dialog", "div", "embed", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "img", "input", "label", "li", "main", "meta", "nav", "object", "option", "p", "script", "section", "select", "span", "table", "td", "textarea", "th", "title", "track", "video"],
        i = function() {
            var A = {};
            r.forEach((function(e) {
                A[e] = document.getElementsByTagName(e)
            })), this.a = s(A.a, !0, "innerText"), this.aCount = A.a.length, this.article = s(A.article, !0, "innerText"), this.articleCount = A.article.length, this.audioCount = A.audio.length, this.button = s(A.button, !0, "innerText"), this.buttonCount = A.button.length, this.canvas = s(A.canvas, !0, "innerText"), this.canvasCount = A.canvas.length, this.caption = s(A.caption, !0, "innerText"), this.captionCount = A.caption.length, this.dialog = s(A.dialog, !0, "innerText"), this.dialogCount = A.dialog.length, this.div = s(A.div, !0, "innerText"), this.divCount = A.div.length, this.embedCount = A.embed.length, this.footer = s(A.footer, !0, "innerText"), this.footerCount = A.footer.length, this.formCount = A.form.length, this.fullText = function() {
                if (window.location.href && window.location.href.startsWith("https://docs.google.com/document")) {
                    var A = Array.from(document.querySelectorAll("svg g rect[aria-label]")).map((function(A) {
                        var e = A.getAttribute("aria-label");
                        return e && 0 !== e.length ? e : ""
                    })).join("\n");
                    if (0 !== A.length) return A
                }
                var e = document.documentElement;
                return e && l(e) ? w(e.innerText) : ""
            }(), this.h1 = s(A.h1, !0, "innerText"), this.h1Count = A.h1.length, this.h2 = s(A.h2, !0, "innerText"), this.h2Count = A.h2.length, this.h3 = s(A.h3, !0, "innerText"), this.h3Count = A.h3.length, this.h4 = s(A.h4, !0, "innerText"), this.h4Count = A.h4.length, this.h5 = s(A.h5, !0, "innerText"), this.h5Count = A.h5.length, this.h6 = s(A.h6, !0, "innerText"), this.h6Count = A.h6.length, this.header = s(A.header, !0, "innerText"), this.headerCount = A.header.length, this.iframeCount = A.iframe.length, this.imgAlt = s(A.img, !0, "alt"), this.imgCount = A.img.length, this.imgSrc = s(A.img, !0, "src"), this.inputCount = A.input.length, this.inputValue = s(A.input, !0, "value"), this.label = s(A.label, !0, "innerText"), this.labelCount = A.label.length, this.li = s(A.li, !0, "innerText"), this.liCount = A.li.length, this.main = s(A.main, !0, "innerText"), this.mainCount = A.main.length, this.metaContent = s(A.meta, !1, "content"), this.metaCount = A.meta.length, this.nav = s(A.nav, !0, "innerText"), this.navCount = A.nav.length, this.objectCount = A.object.length, this.option = s(A.option, !1, "innerText"), this.optionCount = A.option.length, this.p = s(A.p, !0, "innerText"), this.pCount = A.p.length, this.scriptSrc = s(A.script, !1, "src"), this.scriptCount = A.script.length, this.section = s(A.section, !0, "innerText"), this.sectionCount = A.section.length, this.selectCount = A.select.length, this.span = s(A.span, !0, "innerText"), this.spanCount = A.span.length, this.tableCount = A.table.length, this.td = s(A.td, !0, "innerText"), this.tdCount = A.td.length, this.textareaCount = A.textarea.length, this.textareaValue = s(A.textarea, !0, "value"), this.th = s(A.th, !0, "innerText"), this.thCount = A.th.length, this.title = s(A.title, !1, "innerText"), this.titleCount = A.title.length, this.trackCount = A.track.length, this.trackSrc = s(A.track, !0, "src"), this.videoCount = A.video.length
        };

    function s(A, e, t) {
        for (var n = [], r = 0; r < A.length; r++) {
            var i = A[r];
            if (!e || l(i)) switch (t) {
                case "innerText":
                    o(i, n);
                    break;
                case "src":
                    a(i, n);
                    break;
                default:
                    c(i, n, t)
            }
        }
        return n
    }

    function o(A, e) {
        var t = void 0 !== A.innerText ? A.innerText : A.textContent;
        if (t) {
            var r = w(t);
            r && function(A) {
                var e, t;
                try {
                    for (var r = n(A.childNodes), i = r.next(); !i.done; i = r.next()) {
                        var s = i.value;
                        if (s.nodeType === Node.TEXT_NODE && s.nodeValue && !u.test(s.nodeValue)) return !0
                    }
                } catch (A) {
                    e = {
                        error: A
                    }
                } finally {
                    try {
                        i && !i.done && (t = r.return) && t.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return !1
            }(A) && e.push(r)
        }
    }

    function a(A, e) {
        var t = A.src;
        t && 0 === t.lastIndexOf("http", 0) && e.push(t)
    }

    function c(A, e, t) {
        var n = w(A[t]);
        n && e.push(n)
    }

    function l(A) {
        return !!(A.offsetWidth || A.offsetHeight || A.getClientRects().length)
    }
    e.default = i;
    var u = /^[\s\xa0]*$/,
        h = /[^0-9]/;

    function w(A) {
        return u.test(A) || !h.test(A) ? "" : function(A) {
            return A.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
        }(A).toLowerCase()
    }
},
function(A, e, t) {
    "use strict";
    var n = this && this.__values || function(A) {
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
    };
    e.__esModule = !0;
    var r = function() {
        function A(A, e) {
            this.logger = A, this.result = e || this.getContent(this.getRoot())
        }
        return A.prototype.getResult = function() {
            return this.result
        }, A.prototype.getRoot = function() {
            if (0 === document.location.href.indexOf("https://docs.google.com/document/d")) {
                var A = document.getElementById("docs-editor");
                return A || document.body
            }
            return document.body
        }, A.prototype.getContent = function(A) {
            return i(this.getText(A))
        }, A.prototype.getText = function(A) {
            var e, t;
            if (A.nodeType === Node.TEXT_NODE) return A.textContent || "";
            var r = "";
            if (A.nodeType === Node.ELEMENT_NODE) {
                var i = A;
                if ("SCRIPT" == i.tagName || "IFRAME" == i.tagName || i.checkVisibility && !i.checkVisibility()) return "";
                try {
                    if (!i.childNodes.length) return i.textContent || "";
                    try {
                        for (var s = n(i.childNodes), o = s.next(); !o.done; o = s.next()) {
                            var a = o.value;
                            r += " " + this.getText(a)
                        }
                    } catch (A) {
                        e = {
                            error: A
                        }
                    } finally {
                        try {
                            o && !o.done && (t = s.return) && t.call(s)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                } catch (A) {
                    this.logger.withError(A).error("Error getting content text")
                }
            }
            return r
        }, A
    }();

    function i(A) {
        var e = /^\d+$/;
        return A.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().split(/\t|\s|\n|\r/).filter((function(A) {
            return !!A && !e.test(A)
        }))
    }
    e.default = r, e.toWords = i
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0, e.shouldFetchContent = function(A, e) {
        var t = ["/pub", "/mobilebasic"];
        return e && (t = ["/pub"]),
            function(e) {
                var n = e.split("?")[0];
                if (!n.startsWith(A)) return !1;
                for (var r in t)
                    if (n.endsWith(t[r])) return !1;
                return !0
            }
    }, e.toDOMExtraction = function(A) {
        if (A.title || A.content) {
            var e = A.title ? A.title.toLowerCase() : "",
                t = A.title ? [e + " - google docs"] : [],
                n = A.title ? [e] : [],
                r = A.content ? [A.content.toLowerCase()] : [];
            return {
                inputValue: n,
                inputCount: 1,
                title: t,
                titleCount: 1,
                div: r,
                divCount: 1,
                metaContent: [],
                fullText: r.length > 0 ? r[0] : ""
            }
        }
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
    var r = n(t(5)),
        i = t(0),
        s = function() {
            function A(A) {
                this.contentByFrame = {}, this.messenger = A, this.messenger.miner.onContentReceived.addListener(this.collect.bind(this))
            }
            return A.prototype.collect = function(A) {
                this.contentByFrame[A.frameId] = A, this.lastFrameId = A.frameId, 0 !== A.frameId || this.throttledTriggerAnalysis || (this.throttledTriggerAnalysis = r.default(this.triggerAnalysis.bind(this), i.CONTENT_ANALYSIS_INTERVAL, {
                    leading: !0,
                    trailing: !0
                })), this.throttledTriggerAnalysis && this.throttledTriggerAnalysis()
            }, A.prototype.triggerAnalysis = function() {
                var A = this,
                    e = Object.keys(this.contentByFrame).map((function(e) {
                        return A.contentByFrame[e].content
                    }));
                if (e.length) {
                    var t = e.reduce(o);
                    this.messenger.miner.onAnalysisTriggered.emit({
                        top: !0,
                        iframes: !1
                    }, {
                        content: t,
                        x3Content: this.contentByFrame[this.lastFrameId].x3Content
                    })
                }
            }, A
        }();

    function o(A, e) {
        var t = JSON.parse(JSON.stringify(A));
        return Object.keys(t).forEach((function(A) {
            switch (typeof t[A]) {
                case "number":
                    t[A] += e[A];
                    break;
                case "string":
                    t[A] += " " + e[A];
                    break;
                case "object":
                    t[A] = t[A].concat(e[A])
            }
        })), t
    }
    e.ContentCollector = s
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(0),
        r = function() {
            function A(A, e, t) {
                this.messenger = A, this.logger = e, this.metrics = t;
                var r = sessionStorage.getItem(n.POLICY_SESSION_STORAGE_KEY);
                this.policy = JSON.parse(r || "{}"), r && this.emitPolicy(), setInterval(this.fetchRemotePolicy.bind(this), n.POLICY_FETCH_INTERVAL_MS), this.fetchRemotePolicy(), this.messenger.shared.onPolicyRequest.addListener(this.fetchLocalPolicy.bind(this))
            }
            return A.prototype.emitPolicy = function() {
                this.messenger.shared.onPolicyReceived.emit({
                    top: !0,
                    iframes: !0
                }, this.policy)
            }, A.prototype.fetchRemotePolicy = function() {
                var A = this,
                    e = Date.now(),
                    t = new XMLHttpRequest;
                t.addEventListener("error", (function() {
                    A.metrics.increment("policy_manager.fetch_remote_policy.error"), A.logger.error("PolicyManager.fetchRemotePolicy failed to fetch remote policy")
                })), t.addEventListener("load", (function() {
                    A.metrics.histogram("policy_manager.fetch_remote_policy.latency_ms", Date.now() - e);
                    var r = JSON.parse(t.responseText);
                    if (200 !== t.status) return A.metrics.increment("policy_manager.fetch_remote_policy.error"), void A.logger.withFields({
                        status_code: t.status,
                        response: r
                    }).error("PolicyManager.fetchRemotePolicy failed to fetch remote policy");
                    A.policy = r, A.emitPolicy(), sessionStorage.setItem(n.POLICY_SESSION_STORAGE_KEY, JSON.stringify(A.policy))
                })), t.open("GET", n.POLICY_ENDPOINT + "/config", !0), t.send()
            }, A.prototype.fetchLocalPolicy = function() {
                this.policy && this.messenger.shared.onPolicyReceived.emit({
                    top: !1,
                    iframes: !0
                }, this.policy)
            }, A
        }();
    e.PolicyManager = r
},
function(A, e, t) {
    "use strict";
    var n = this && this.__read || function(A, e) {
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
        },
        r = this && this.__spread || function() {
            for (var A = [], e = 0; e < arguments.length; e++) A = A.concat(n(arguments[e]));
            return A
        };
    e.__esModule = !0;
    var i = t(9),
        s = t(0),
        o = t(70),
        a = t(72),
        c = t(74),
        l = t(25),
        u = t(84),
        h = function() {
            function A(A, e, t) {
                this.useReducedPredictionTime = !1, this.smartAlertsForProxiesEnabled = !1, this.smartAlertsForProxiesLayer2Enabled = !1, this.useNativeScreenshots = !1, this.contentBuffer = [], this.messenger = A, this.metrics = t, this.logger = e, this.predictionsManager = new c.SmartAlertsPredictionsManager(A, e, t), this.reportsManager = new l.SmartAlertsReportsManager(A, e, t), this.messenger.shared.onPolicyReceived.addListener(this.configure.bind(this)), this.messenger.admin.onSmartAlertsPredictionReceived.addListener(this.handlePrediction.bind(this)), this.messenger.admin.onSmartAlertsCloseMessage.addListener(a.closeMessage), this.messenger.miner.onAnalysisTriggered.addListener(this.analyzeMinerContent.bind(this))
            }
            return A.prototype.configure = function(A) {
                var e, t, n = this;
                this.settings = A.smartAlerts, this.useReducedPredictionTime = !0 === A.features.smartAlertsUseReducedPredictionTime, this.useNativeScreenshots = !0 === A.features.assetUseNativeScreenshots, this.smartAlertsForProxiesEnabled = !0 === A.features.smartAlertsForProxiesEnabled, this.smartAlertsForProxiesLayer2Enabled = !0 === A.features.smartAlertsForProxiesLayer2Enabled, A.schedulingSettings.inSchoolConditionsEnabled ? (e = !A.schedulingSettings.monitorInSchoolOnly || A.schedulingSettings.inSchoolHours && A.schedulingSettings.inSchoolIPRanges, t = !A.schedulingSettings.filterInSchoolOnly || A.schedulingSettings.inSchoolHours && A.schedulingSettings.inSchoolIPRanges) : (e = !0, t = !0), this.orgSettings = {
                    monitorEnabled: e,
                    filterEnabled: t
                }, this.contentBuffer.length > 0 && this.contentBuffer.forEach((function(A) {
                    n.analyze(A.domExtraction, A.title, A.x3)
                }))
            }, A.prototype.analyzeMinerContent = function(A) {
                for (var e = "", t = 0; t < A.content.title.length; t++)
                    if ("" !== A.content.title[t].trim()) {
                        e = A.content.title[t];
                        break
                    } this.analyze(A.content, e, A.x3Content)
            }, A.prototype.analyze = function(A, e, t) {
                if (!this.settings || !this.orgSettings) return this.contentBuffer.push({
                    domExtraction: A,
                    title: e,
                    x3: t
                }), void(this.contentBuffer.length > s.SMART_ALERTS_MAX_CONTENT_BUFFER && this.contentBuffer.splice(0, 1));
                if (this.orgSettings.monitorEnabled || this.orgSettings.filterEnabled) {
                    var n = u.processContent(t),
                        r = n.content,
                        i = n.sampledWordContent,
                        o = {
                            captureNativeScreenshot: this.useNativeScreenshots,
                            domExtraction: A,
