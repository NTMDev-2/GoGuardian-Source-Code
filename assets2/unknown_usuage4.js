function(A, e, t) {
  "use strict";
  var n =
      (this && this.__awaiter) ||
      function (A, e, t, n) {
        return new (t || (t = Promise))(function (r, i) {
          function s(A) {
            try {
              a(n.next(A));
            } catch (A) {
              i(A);
            }
          }
          function o(A) {
            try {
              a(n.throw(A));
            } catch (A) {
              i(A);
            }
          }
          function a(A) {
            var e;
            A.done
              ? r(A.value)
              : ((e = A.value),
                e instanceof t
                  ? e
                  : new t(function (A) {
                      A(e);
                    })).then(s, o);
          }
          a((n = n.apply(A, e || [])).next());
        });
      },
    r =
      (this && this.__generator) ||
      function (A, e) {
        var t,
          n,
          r,
          i,
          s = { label: 0, sent: function () {
              if (1 & r[0]) throw r[1];
              return r[1];
            }, trys: [], ops: [] };
        return (
          (i = { next: o(0), throw: o(1), return: o(2) }),
          "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this;
          }),
          i
        );
        function o(i) {
          return function (o) {
            return (function (i) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((t = 1),
                    n &&
                      (r =
                        2 & i[0]
                          ? n.return
                          : i[0]
                          ? n.throw || ((r = n.return) && r.call(n), 0)
                          : n.next) &&
                      !(r = r.call(n, i[1])).done)
                  )
                    return r;
                  switch (((n = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                    case 0:
                    case 1:
                      r = i;
                      break;
                    case 4:
                      return s.label++, { value: i[1], done: !1 };
                    case 5:
                      s.label++, (n = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                        s.label = i[1];
                        break;
                      }
                      if (6 === i[0] && s.label < r[1]) {
                        (s.label = r[1]), (r = i);
                        break;
                      }
                      if (r && s.label < r[2]) {
                        (s.label = r[2]), s.ops.push(i);
                        break;
                      }
                      r[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  i = e.call(A, s);
                } catch (A) {
                  i = [6, A], (n = 0);
                } finally {
                  t = r = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, o]);
          };
        }
      },
    i =
      (this && this.__read) ||
      function (A, e) {
        var t = "function" == typeof Symbol && A[Symbol.iterator];
        if (!t) return A;
        var n,
          r,
          i = t.call(A),
          s = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; ) s.push(n.value);
        } catch (A) {
          r = { error: A };
        } finally {
          try {
            n && !n.done && (t = i.return) && t.call(i);
          } finally {
            if (r) throw r.error;
          }
        }
        return s;
      },
    s =
      (this && this.__spread) ||
      function () {
        for (var A = [], e = 0; e < arguments.length; e++) A = A.concat(i(arguments[e]));
        return A;
      },
    o =
      (this && this.__importDefault) ||
      function (A) {
        return A && A.__esModule ? A : { default: A };
      };
  e.__esModule = !0;
  var a = o(t(31)),
    c = t(9),
    l = t(50),
    u = t(52),
    h = t(53),
    w = t(0),
    d = t(16),
    f = t(1),
    g = (function () {
      function A(A, e, t) {
        (this.settingsLastFetchTimestampMs = 0),
          (this.cache = new a.default({ stdTTL: 3600 })),
          (this.contentBuffer = []),
          (this.messenger = A),
          (this.metrics = t),
          (this.logger = e),
          (this.predictionContext = {}),
          (this.reportingContext = {}),
          (this.predictionsManager = new u.BeaconPredictionsManager(A, e, t)),
          (this.reportsManager = new h.BeaconReportsManager(A, e, t)),
          this.messenger.beacon.onPrediction.addListener(this.handlePrediction.bind(this)),
          this.messenger.beacon.onCloseMessage.addListener(this.handleCloseMessage.bind(this)),
          this.messenger.shared.onWebsocketMessage.addListener(this.handleMLPipelineNotice.bind(this)),
          this.messenger.miner.onAnalysisTriggered.addListener(this.analyzeMinerContent.bind(this)),
          this.getSettings();
      }
      return (
        (A.prototype.analyzeMinerContent = function (A) {
          return n(this, void 0, void 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.analyze(A.content)];
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (A.prototype.analyze = function (A) {
          return n(this, void 0, void 0, function () {
            var e;
            return r(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.settings
                    ? [4, this.isEnabled()]
                    : (this.contentBuffer.push(A),
                      this.contentBuffer.length > w.BEACON_MAX_CONTENT_BUFFER &&
                        this.contentBuffer.splice(0, 1),
                      [2]);
                case 1:
                  return t.sent()
                    ? ((e = window.location.href), [4, this.getSearchUrl(e)])
                    : [2];
                case 2:
                  return t.sent().isSearch
                    ? [2]
                    : ((this.predictionContext[this.getContextKey()] = { content: A, url: e }),
                      this.predictionsManager.makePrediction(A),
                      [2]);
              }
            });
          });
        }),
        (A.prototype.getPredictionContext = function () {
          return this.predictionContext[this.getContextKey()];
        }),
        (A.prototype.getReportingContext = function () {
          return this.reportingContext[this.getContextKey()];
        }),
        (A.prototype.getContextKey = function () {
          return "v2-" + window.location.href;
        }),
        (A.prototype.deletePredictionContext = function () {
          delete this.predictionContext[this.getContextKey()];
        }),
        (A.prototype.reportPredictionContextError = function () {
          this.metrics.increment("beacon.get_prediction_context.error"),
            this.logger.error("Context not available");
        }),
        (A.prototype.reportReportingContextError = function () {
          this.metrics.increment("beacon.get_reporting_context.error"),
            this.logger.error("Context not available");
        }),
        (A.prototype.handlePrediction = function (A) {
          return n(this, void 0, void 0, function () {
            var e, t, n, i, o, a;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return (e = this.getPredictionContext())
                    ? (this.deletePredictionContext(), [4, this.shouldSkip(A)])
                    : [2, this.reportPredictionContextError()];
                case 1:
                  return r.sent()
                    ? [2]
                    : [4, this.getSettings()];
                case 2:
                  return (
                    (t = r.sent()),
                    (n = this.cache.get(this.getContextKey()) || []),
                    this.cache.set(this.getContextKey(), s(n, [A.phase])),
                    (i = {
                      content: e.content,
                      prediction: A,
                      screenshotDataUrl: null,
                      captureNativeScreenshot: t.captureNativeScreenshot,
                      triggerIds: [],
                      reportId: null,
                      url: e.url,
                    }),
                    (this.reportingContext[this.getContextKey()] = i),
                    A.use_content_fetcher_payload &&
                      ((o = { fullTextEncoded: A.content_fetcher_payload }), (i.content = o)),
                    t.captureNativeScreenshot
                      ? [3, 4]
                      : ((a = i), [4, this.takeScreenshot()])
                  );
                case 3:
                  (a.screenshotDataUrl = r.sent()), (r.label = 4);
                case 4:
                  return [4, this.handleMessaging(i)];
                case 5:
                  return r.sent(), [2];
              }
            });
          });
        }),
        (A.prototype.handleMLPipelineNotice = function (A) {
          return n(this, void 0, void 0, function () {
            var e, t, n;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return !A ||
                    ("beacon-threats-and-violence" !== A.type && "beacon-search" !== A.type)
                    ? [2]
                    : ((e = window.location.href), [4, this.getSearchUrl(e)]);
                case 1:
                  return (t = r.sent()).isSearch
                    ? t.terms !== A.data.searchTerms
                      ? [2]
                      : [4, this.getSettings()]
                    : [2];
                case 2:
                  return (
                    (n = r.sent()),
                    "beacon-search" === A.type && n.sshSettings.messaging.enabled
                      ? [2, l.showMessage(n.sshSettings.messaging.message)]
                      : "beacon-threats-and-violence" === A.type && n.tvSettings.messaging.enabled
                      ? [2, l.showMessage(n.tvSettings.messaging.message)]
                      : [2]
                  );
              }
            });
          });
        }),
        (A.prototype.shouldSkip = function (A) {
          return n(this, void 0, void 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.isEnabled()];
                case 1:
                  return e.sent() &&
                    this.settings &&
                    -1 !== this.settings.sshSettings.allowedPhases.indexOf(A.phase)
                    ? (this.cache.get(this.getContextKey()) || []).includes(A.phase)
                      ? [2, !0]
                      : [2, !1]
                    : [2, !0];
              }
            });
          });
        }),
        (A.prototype.handleCloseMessage = function () {
          return n(this, void 0, void 0, function () {
            var A;
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.getSearchUrl(window.location.href)];
                case 1:
                  return e.sent().isSearch
                    ? (l.closeMessage(), [2])
                    : (A = this.getReportingContext())
                    ? null === A.reportId
                      ? [2]
                      : (this.reportsManager.sendMessageClosed(A.reportId),
                        l.closeMessage(),
                        [2])
                    : [2, this.reportReportingContextError()];
              }
            });
          });
        }),
        (A.prototype.takeScreenshot = function () {
          return n(this, void 0, void 0, function () {
            var A, e, t;
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 2, , 3]), (A = Date.now()), [
                    4,
                    new Promise(function (A, e) {
                      c.takeScreenshot(A, e);
                    }),
                  ];
                case 1:
                  return (
                    (e = n.sent()),
                    this.metrics.histogram("beacon.take_screenshot.latency_ms", Date.now() - A),
                    [2, e]
                  );
                case 2:
                  return (
                    (t = n.sent()) !== c.blocklistError &&
                      (this.metrics.increment("beacon.take_screenshot.error"),
                      this.logger.withError(t).error("Error capturing screenshot")),
                    [2, null]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        (A.prototype.handleMessaging = function (A) {
          return n(this, void 0, void 0, function () {
            var e;
            return r(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.getSettings()];
                case 1:
                  return (
                    (e = t.sent()).sshSettings.messaging.enabled &&
                      l.showMessage(e.sshSettings.messaging.message),
                    this.handleReport(A),
                    [2]
                  );
              }
            });
          });
        }),
        (A.prototype.handleReport = function (A) {
          this.reportsManager.makeReport(
            {
              content: A.content,
              url: A.url,
              timestamp: Date.now(),
              prediction: this.extractReportPrediction(A.prediction),
              didMessage: !0,
              seqId: 1,
              tabScreenshot: A.screenshotDataUrl ? { dataUrl: A.screenshotDataUrl } : null,
              captureNativeScreenshot: A.captureNativeScreenshot,
            },
            function (e) {
              A.reportId = e.reportId;
            }
          );
        }),
        (A.prototype.extractReportPrediction = function (A) {
          return { phase: A.phase, probability: A.probability };
        }),
        (A.prototype.getSearchUrl = function (A) {
          return n(this, void 0, void 0, function () {
            var e;
            return r(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 2, , 3]), [4, d.getSearchUrl(A)];
                case 1:
                  return [2, t.sent()];
                case 2:
                  return (
                    (e = t.sent()),
                    this.logger
                      .withError(e)
                      .withFields({ target_url: A })
                      .warn("BeaconManager.isSearch: error checking search URL"),
                    [2, { isSearch: !1, terms: "" }]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        (A.prototype.getSettings = function () {
          var A,
            e,
            t,
            i,
            s,
            o,
            a,
            c,
            l,
            u,
            h,
            d,
            g,
            B,
            p,
            m,
            b,
            Q,
            C;
          return n(this, void 0, void 0, function () {
            var n, y, v;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = Date.now()),
                    this.settings &&
                    n - this.settingsLastFetchTimestampMs <
                      w.BEACON_SETTINGS_DEBOUNCE_INTERVAL_MS
                      ? [2, this.settings]
                      : [4, f.getFetch()(w.BEACON_SETTINGS_ENDPOINT)]
                  );
                case 1:
                  if (!(y = r.sent()).ok)
                    throw new Error("magic URL returns non-2xx status: " + y.status);
                  return [4, y.json()];
                case 2:
                  return (
                    (v = r.sent()),
                    (this.settings = {
                      enabled: !0 === (null === (A = v) || void 0 === A ? void 0 : A.enabled),
                      captureNativeScreenshot:
                        !0 === (null === (e = v) || void 0 === e ? void 0 : e.captureNativeScreenshot),
                      sshSettings: {
                        allowedPhases:
                          (s =
                            null === (i = null === (t = v) || void 0 === t ? void 0 : t.sshSettings) ||
                            void 0 === i
                              ? void 0
                              : i.allowedPhases) != null
                            ? s
                            : [],
                        messaging: {
                          enabled:
                            !0 ===
                            (null === (c =
                              null === (a = null === (o = v) || void 0 === o ? void 0 : o.sshSettings) ||
                              void 0 === a
                                ? void 0
                                : a.messaging) || void 0 === c
                              ? void 0
                              : c.enabled),
                          message:
                            (d =
                              null === (h =
                                null === (u = null === (l = v) || void 0 === l ? void 0 : l.sshSettings) ||
                                void 0 === u
                                  ? void 0
                                  : u.messaging) || void 0 === h
                                ? void 0
                                : h.message) != null
                              ? d
                              : "",
                        },
                      },
                      tvSettings: {
                        messaging: {
                          enabled:
                            !0 ===
                            (null === (p =
                              null === (B = null === (g = v) || void 0 === g ? void 0 : g.tvSettings) ||
                              void 0 === B
                                ? void 0
                                : B.messaging) || void 0 === p
                              ? void 0
                              : p.enabled),
                          message:
                            (C =
                              null === (Q =
                                null === (b = null === (m = v) || void 0 === m ? void 0 : m.tvSettings) ||
                                void 0 === b
                                  ? void 0
                                  : b.messaging) || void 0 === Q
                                ? void 0
                                : Q.message) != null
                              ? C
                              : "",
                        },
                      },
                    }),
                    (this.settingsLastFetchTimestampMs = n),
                    [2, this.settings]
                  );
              }
            });
          });
        }),
        (A.prototype.isEnabled = function () {
          return n(this, void 0, void 0, function () {
            return r(this, function (A) {
              switch (A.label) {
                case 0:
                  return [4, this.getSettings()];
                case 1:
                  return [2, A.sent().enabled];
              }
            });
          });
        }),
        A
      );
    })();
  e.BeaconManager = g;
},
function(A, e, t) {
  (function () {
    (A.exports = t(32)).version = "5.1.2";
  }).call(this);
},
function(A, e, t) {
  (function (e) {
    (function () {
      var n,
        r,
        i = [].splice,
        s = function (A, e) {
          if (!(A instanceof e))
            throw new Error("Bound instance method accessed before binding");
        },
        o = [].indexOf;
      r = t(36);
      n = t(13).EventEmitter;
      A.exports = (function () {
        class A extends n {
          constructor(A = {}) {
            super(),
              (this.get = this.get.bind(this)),
              (this.mget = this.mget.bind(this)),
              (this.set = this.set.bind(this)),
              (this.mset = this.mset.bind(this)),
              (this.del = this.del.bind(this)),
              (this.take = this.take.bind(this)),
              (this.ttl = this.ttl.bind(this)),
              (this.getTtl = this.getTtl.bind(this)),
              (this.keys = this.keys.bind(this)),
              (this.has = this.has.bind(this)),
              (this.getStats = this.getStats.bind(this)),
              (this.flushAll = this.flushAll.bind(this)),
              (this.flushStats = this.flushStats.bind(this)),
              (this.close = this.close.bind(this)),
              (this._checkData = this._checkData.bind(this)),
              (this._check = this._check.bind(this)),
              (this._isInvalidKey = this._isInvalidKey.bind(this)),
              (this._wrap = this._wrap.bind(this)),
              (this._getValLength = this._getValLength.bind(this)),
              (this._error = this._error.bind(this)),
              (this._initErrors = this._initErrors.bind(this)),
              (this.options = A),
              this._initErrors(),
              (this.data = {}),
              (this.options = Object.assign(
                {
                  forceString: !1,
                  objectValueSize: 80,
                  promiseValueSize: 80,
                  arrayValueSize: 40,
                  stdTTL: 0,
                  checkperiod: 600,
                  useClones: !0,
                  deleteOnExpire: !0,
                  enableLegacyCallbacks: !1,
                  maxKeys: -1,
                },
                this.options
              )),
              this.options.enableLegacyCallbacks &&
                (console.warn(
                  "WARNING! node-cache legacy callback support will drop in v6.x"
                ),
                ["get", "mget", "set", "del", "ttl", "getTtl", "keys", "has"].forEach(
                  (A) => {
                    var e;
                    e = this[A];
                    this[A] = function (...A) {
                      var t, n;
                      if (((n = A), ([...A] = n), ([t] = i.call(A, -1)), "function" != typeof t))
                        return e(...A, t);
                      try {
                        t(null, e(...A));
                      } catch (A) {
                        t(A);
                      }
                    };
                  }
                )),
              (this.stats = { hits: 0, misses: 0, keys: 0, ksize: 0, vsize: 0 }),
              (this.validKeyTypes = ["string", "number"]),
              this._checkData();
          }
          get(e) {
            var t;
            if ((s(this, A), null != (t = this._isInvalidKey(e)))) throw t;
            return null != this.data[e] && this._check(e, this.data[e])
              ? (this.stats.hits++, this._unwrap(this.data[e]))
              : void this.stats.misses++;
          }
          mget(e) {
            var t,
              n,
              r,
              i,
              o;
            if ((s(this, A), !Array.isArray(e))) throw this._error("EKEYSTYPE");
            for (o = {}, n = 0, i = e.length; n < i; n++) {
              if (((r = e[n]), null != (t = this._isInvalidKey(r)))) throw t;
              null != this.data[r] && this._check(r, this.data[r])
                ? ((this.stats.hits++), (o[r] = this._unwrap(this.data[r])))
                : this.stats.misses++;
            }
            return o;
          }
          set(e, t, n) {
            var r, i;
            if (
              (s(this, A),
              this.options.maxKeys > -1 && this.stats.keys >= this.options.maxKeys)
            )
              throw this._error("ECACHEFULL");
            if ((this.options.forceString, null == n && (n = this.options.stdTTL), null != (r = this._isInvalidKey(e))))
              throw r;
            return (
              (i = !1),
              this.data[e] &&
                ((i = !0),
                (this.stats.vsize -= this._getValLength(this._unwrap(this.data[e], !1)))),
              (this.data[e] = this._wrap(t, n)),
              (this.stats.vsize += this._getValLength(t)),
              i ||
                ((this.stats.ksize += this._getKeyLength(e)), this.stats.keys++),
              this.emit("set", e, t),
              !0
            );
          }
          mset(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              c,
              l,
              u;
            if (
              (s(this, A),
              this.options.maxKeys > -1 && this.stats.keys + e.length >= this.options.maxKeys)
            )
              throw this._error("ECACHEFULL");
            for (n = 0, a = e.length; n < a; n++) {
              if (
                ((o = e[n]),
                ({ key: i, val: u, ttl: l } = o),
                l && "number" != typeof l)
              )
                throw this._error("ETTLTYPE");
              if (null != (t = this._isInvalidKey(i))) throw t;
            }
            for (r = 0, c = e.length; r < c; r++)
              (o = e[r]), ({ key: i, val: u, ttl: l } = o), this.set(i, u, l);
            return !0;
          }
          del(e) {
            var t,
              n,
              r,
              i,
              o,
              a;
            for (
              s(this, A), Array.isArray(e) || (e = [e]), t = 0, r = 0, o = e.length;
              r < o;
              r++
            ) {
              if (((i = e[r]), null != (n = this._isInvalidKey(i)))) throw n;
              null != this.data[i] &&
                ((this.stats.vsize -= this._getValLength(this._unwrap(this.data[i], !1))),
                (this.stats.ksize -= this._getKeyLength(i)),
                this.stats.keys--,
                t++,
                (a = this.data[i]),
                delete this.data[i],
                this.emit("del", i, a.v));
            }
            return t;
          }
          take(e) {
            var t;
            return s(this, A), null != (t = this.get(e)) && this.del(e), t;
          }
          ttl(e, t) {
            var n;
            if ((s(this, A), t || (t = this.options.stdTTL), !e)) return !1;
            if (null != (n = this._isInvalidKey(e))) throw n;
            return !(
              null == this.data[e] ||
              !this._check(e, this.data[e])
            ) && (t >= 0
              ? ((this.data[e] = this._wrap(this.data[e].v, t, !1)), !0)
              : (this.del(e), !0));
          }
          getTtl(e) {
            var t;
            if ((s(this, A), e)) {
              if (null != (t = this._isInvalidKey(e))) throw t;
              return null != this.data[e] && this._check(e, this.data[e])
                ? this.data[e].t
                : void 0;
            }
          }
          keys() {
            return s(this, A), Object.keys(this.data);
          }
          has(e) {
            return s(this, A), null != this.data[e] && this._check(e, this.data[e]);
          }
          getStats() {
            return s(this, A), this.stats;
          }
          flushAll(e = !0) {
            s(this, A),
              (this.data = {}),
              (this.stats = { hits: 0, misses: 0, keys: 0, ksize: 0, vsize: 0 }),
              this._killCheckPeriod(),
              this._checkData(e),
              this.emit("flush");
          }
          flushStats() {
            s(this, A),
              (this.stats = { hits: 0, misses: 0, keys: 0, ksize: 0, vsize: 0 }),
              this.emit("flush_stats");
          }
          close() {
            s(this, A), this._killCheckPeriod();
          }
          _checkData(e = !0) {
            var t, n, r;
            for (t in (s(this, A), (n = this.data))) (r = n[t]), this._check(t, r);
            e &&
              this.options.checkperiod > 0 &&
              ((this.checkTimeout = setTimeout(
                this._checkData,
                1e3 * this.options.checkperiod,
                e
              )),
              null != this.checkTimeout &&
                null != this.checkTimeout.unref &&
                this.checkTimeout.unref());
          }
          _killCheckPeriod() {
            if (null != this.checkTimeout) return clearTimeout(this.checkTimeout);
          }
          _check(e, t) {
            var n;
            return (
              s(this, A),
              (n = !0),
              0 !== t.t && t.t < Date.now()
                ? (this.options.deleteOnExpire && ((n = !1), this.del(e)),
                  this.emit("expired", e, this._unwrap(t)),
                  n)
                : n
            );
          }
          _isInvalidKey(e) {
            var t;
            if ((s(this, A), (t = typeof e), o.call(this.validKeyTypes, t) < 0))
              return this._error("EKEYTYPE", { type: typeof e });
          }
          _wrap(e, t, n = !0) {
            var i;
            return (
              s(this, A),
              this.options.useClones || (n = !1),
              (i = Date.now()),
              0,
              1e3,
              {
                t:
                  0 === t
                    ? 0
                    : t
                    ? i + 1e3 * t
                    : 0 === this.options.stdTTL
                    ? this.options.stdTTL
                    : i + 1e3 * this.options.stdTTL,
                v: n ? r(e) : e,
              }
            );
          }
          _unwrap(A, e = !0) {
            return this.options.useClones || (e = !1), null != A.v ? (e ? r(A.v) : A.v) : null;
          }
          _getKeyLength(A) {
            return A.toString().length;
          }
          _getValLength(t) {
            return s(this, A),
              "string" == typeof t
                ? t.length
                : this.options.forceString
                ? JSON.stringify(t).length
                : Array.isArray(t)
                ? this.options.arrayValueSize * t.length
                : "number" == typeof t
                ? 8
                : "function" == typeof (null != t ? t.then : void 0)
                ? this.options.promiseValueSize
                : (null != e ? e.isBuffer(t) : void 0)
                ? t.length
                : null != t && "object" == typeof t
                ? this.options.objectValueSize * Object.keys(t).length
                : "boolean" == typeof t
                ? 8
                : 0;
          }
          _error(e, t = {}) {
            var n;
            return (
              s(this, A),
              ((n = new Error()).name = e),
              (n.errorcode = e),
              (n.message = null != this.ERRORS[e] ? this.ERRORS[e](t) : "-"),
              (n.data = t),
              n
            );
          }
          _initErrors() {
            var e, t, n;
            for (t in (s(this, A), (this.ERRORS = {}), (n = this._ERRORS)))
              (e = n[t]), (this.ERRORS[t] = this.createErrorMessage(e));
          }
          createErrorMessage(A) {
            return function (e) {
              return A.replace("__key", e.type);
            };
          }
        }
        return (A.prototype._ERRORS = {
          ENOTFOUND: "Key `__key` not found",
          ECACHEFULL: "Cache max keys amount exceeded",
          EKEYTYPE: "The key argument has to be of type `string` or `number`. Found: `__key`",
          EKEYSTYPE: "The keys argument has to be an array.",
          ETTLTYPE: "The ttl argument has to be a number.",
        }), A;
      }.call(this));
    }).call(this);
  }).call(this, t(4).Buffer);
},
function(A, e, t) {
  "use strict";
  e.byteLength = function (A) {
    var e = c(A),
      t = e[0],
      n = e[1];
    return (3 * (t + n)) / 4 - n;
  };
