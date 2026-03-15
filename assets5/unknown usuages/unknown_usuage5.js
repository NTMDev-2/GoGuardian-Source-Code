// 3838 - 3969
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
    var i = t(0),
        s = t(10),
        o = t(6),
        a = function() {
            function A(A, e, t) {
                this.enabled = !1, this.messenger = A, this.logger = e, this.metrics = t, this.messenger.miner.onAnalysisTriggered.addListener(this.handleMinerContent.bind(this))
            }
            return A.prototype.setEnabled = function(A) {
                this.enabled !== A && (this.enabled = A, this.enabled && this.submitContent())
            }, A.prototype.handleMinerContent = function(A) {
                var e = A.content;
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(A) {
                        return this.content = e.fullText, this.enabled ? (this.submitContent(), [2]) : [2]
                    }))
                }))
            }, A.prototype.submitContent = function() {
                return n(this, void 0, void 0, (function() {
                    var A;
                    return r(this, (function(e) {
                        return this.content ? ((A = new XMLHttpRequest).open("POST", i.OFF_TASK_ALERTS_URL), A.setRequestHeader("Content-Type", "text/plain"), A.setRequestHeader("Tab-Url", s.stripHashFromGoogleDocs(window.location.host, window.location.href)), A.setRequestHeader("Script-Id", o.SCRIPT_ID), A.send(this.content), [2]) : [2]
                    }))
                }))
            }, A
        }();
    e.OffTaskAlerts = a
}]);
