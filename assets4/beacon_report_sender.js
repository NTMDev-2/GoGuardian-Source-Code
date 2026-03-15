                    seqId: A.seqId
                },
                s = Date.now();
// Pay attention to the lines below this (5204 - 5273)
            this.sendReport(i, (function(i) {
                e(i), t.metrics.histogram("beacon.report.send_report.latency_ms", Date.now() - s);
                var o = Date.now(),
                    a = r.jsonToBlob(A.content);
                n.upload(i.contentDescriptor, a, (function() {
                    t.metrics.histogram("beacon.report.upload_content.latency_ms", Date.now() - o)
                }), (function(A) {
                    t.metrics.increment("beacon.report.upload_content.error"), t.logger.withError(A).error("Error uploading screenshot")
                }));
                var c = Date.now();
                A.captureNativeScreenshot ? n.captureAndUpload(i.screenshotDescriptor, (function() {
                    t.metrics.histogram("beacon.report.capture_and_upload_screenshot.latency_ms", Date.now() - c)
                }), (function(A) {
                    t.metrics.increment("beacon.report.capture_and_upload_screenshot.error"), t.logger.withError(A).error("Error capturing and uploading screenshot")
                })) : A.tabScreenshot && n.upload(i.screenshotDescriptor, r.dataURItoBlob(A.tabScreenshot.dataUrl), (function() {
                    t.metrics.histogram("beacon.report.upload_screenshot.latency_ms", Date.now() - c)
                }), (function(A) {
                    t.metrics.increment("beacon.report.upload_screenshot.error"), t.logger.withError(A).error("Error uploading screenshot")
                }))
            }), (function(A) {
                t.metrics.increment("beacon.report.send_report.error"), t.logger.withError(A).error("Error sending report")
            }))
        }, A.prototype.sendMessageClosed = function(A) {
            var e = this,
                t = Date.now(),
                n = new AbortController,
                r = setTimeout((function() {
                    return n.abort()
                }), i.BEACON_REPORT_TIMEOUT_MS);
            s.getFetch()(i.BEACON_REPORT_ENDPOINT + "/" + A, {
                method: "PUT",
                body: JSON.stringify({
                    closedMessage: !0
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                signal: n.signal
            }).then((function(A) {
                if (clearTimeout(r), !A.ok) throw new Error("beacon report close returns non-2xx status: " + A.status);
                return A.json()
            })).then((function() {
                e.metrics.histogram("beacon.report.send_message_closed.latency_ms", Date.now() - t)
            })).catch((function(A) {
                e.metrics.increment("beacon.report.send_message_closed.error"), e.logger.withError(Error(A)).error("Error marking message closed")
            }))
        }, A.prototype.sendReport = function(A, e, t) {
            var n = new AbortController,
                r = setTimeout((function() {
                    return n.abort()
                }), i.BEACON_REPORT_TIMEOUT_MS);
            s.getFetch()(i.BEACON_REPORT_ENDPOINT, {
                method: "POST",
                body: JSON.stringify(A),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                signal: n.signal
            }).then((function(A) {
                if (clearTimeout(r), !A.ok) throw new Error("beacon report returns non-2xx status: " + A.status);
                return A.json()
            })).then((function(A) {
                e(A)
            })).catch((function(A) {
                t(A)
            }))
        }, A
    }();
    e.BeaconReportsManager = o
},
