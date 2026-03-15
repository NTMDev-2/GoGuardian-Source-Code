// 7246 - 7349
e.__esModule = !0;
    var i = t(18),
        s = t(0),
        o = t(24),
        a = t(1),
        c = function() {
            function A(A, e, t) {
                this.lastRunTime = 0, this.messenger = A, this.metrics = t, this.logger = e, this.messenger.admin.onSmartAlertsPredictionRequest.addListener(this.handlePredictionRequest.bind(this)), this.messenger.admin.onSmartAlertsReportSkipped.addListener(this.resetTimer.bind(this))
            }
            return A.prototype.handlePredictionRequest = function(A) {
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return Date.now() - this.lastRunTime < 1e3 * s.SMART_ALERTS_MAX_CACHE_TIMEOUT ? [2] : [4, o.isAllowlisted(this.logger, A.context.url)];
                            case 1:
                                return e.sent() ? (this.logger.withFields({
                                    url: A.context.url
                                }).debug("[admin/smart-alerts/predictions] prediction skipped, URL is allowlisted"), [2]) : (A.isSelfHarmDisabled ? this.makeV3Prediction(A.context.domExtraction.fullText, A.context) : this.makePrediction(A.context.x3ProcessedContent, A.context), [2])
                        }
                    }))
                }))
            }, A.prototype.resetTimer = function(A) {
                A.predictionCategory === s.SMART_ALERTS_PREDICTOR_CATEGORY.X3 && (this.lastRunTime = 0)
            }, A.prototype.makeV3Prediction = function(A, e) {
                var t = this,
                    n = {
                        fullText: A
                    },
                    r = i.gzip(JSON.stringify(n)),
                    c = Date.now(),
                    l = new AbortController,
                    u = setTimeout((function() {
                        return l.abort()
                    }), s.SMART_ALERTS_PREDICT_TIMEOUT_MS);
                a.getFetch()(s.SMART_ALERTS_PREDICT_V3_ENDPOINT, {
                    method: "POST",
                    body: new Blob([r], {
                        type: "application/binary"
                    }),
                    signal: l.signal
                }).then((function(A) {
                    if (clearTimeout(u), !A.ok) throw new Error("smart alerts v3 prediction returns non-2xx status: " + A.status);
                    return A.json()
                })).then((function(A) {
                    t.metrics.histogram("admin.smart_alerts.v3_prediction.latency_ms", Date.now() - c);
                    var n = {
                            category: A.category,
                            modelVersion: A.modelVersion,
                            probability: A.probability
                        },
                        r = {
                            low: A.threshold.low,
                            medium: A.threshold.medium,
                            high: A.threshold.high
                        },
                        i = o.mapToX3Confidence(n, r),
                        s = {
                            context: e,
                            prediction: i
                        };
                    t.messenger.admin.onSmartAlertsPredictionReceived.emit({
                        top: !0,
                        iframes: !1
                    }, s), t.lastRunTime = Date.now()
                })).catch((function(A) {
                    t.metrics.increment("admin.smart_alerts.v3_prediction.error"), t.logger.withError(A).error("Error requesting v3 prediction")
                }))
            }, A.prototype.makePrediction = function(A, e) {
                var t = this,
                    n = btoa(i.gzip(JSON.stringify({
                        words: A
                    }), {
                        to: "string"
                    })),
                    r = Date.now(),
                    o = new AbortController,
                    c = setTimeout((function() {
                        return o.abort()
                    }), s.SMART_ALERTS_PREDICT_TIMEOUT_MS);
                a.getFetch()(s.SMART_ALERTS_PREDICT_ENDPOINT, {
                    method: "POST",
                    body: n,
                    signal: o.signal
                }).then((function(A) {
                    if (clearTimeout(c), !A.ok) throw new Error("smart alerts prediction returns non-2xx status: " + A.status);
                    return A.json()
                })).then((function(A) {
                    t.metrics.histogram("admin.smart_alerts.prediction.latency_ms", Date.now() - r);
                    var n = {
                        context: e,
                        prediction: A.prediction
                    };
                    t.messenger.admin.onSmartAlertsPredictionReceived.emit({
                        top: !0,
                        iframes: !1
                    }, n), t.lastRunTime = Date.now()
                })).catch((function(A) {
                    t.metrics.increment("admin.smart_alerts.prediction.error"), t.logger.withError(A).error("Error requesting prediction")
                }))
            }, A
        }();
    e.SmartAlertsPredictionsManager = c
},
