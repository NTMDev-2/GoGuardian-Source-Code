},
function(A, e, t) {
  (e.urls = t(37)), (e.strings = t(46)), (e.intervals = t(47)), (e.cookies = t(48));
},
function(A, e, t) {
  "use strict";
  e.__esModule = !0;
  e.dataURItoBlob = function (A) {
    for (
      var e = atob(A.split(",")[1]),
        t = A.split(",")[0].split(":")[1].split(";")[0],
        n = new ArrayBuffer(e.length),
        r = new Uint8Array(n),
        i = 0;
      i < e.length;
      i++
    )
      r[i] = e.charCodeAt(i);
    return new Blob([n], { type: t });
  };
  e.stringToBlob = function (A) {
    for (var e = new ArrayBuffer(A.length), t = new Uint8Array(e), n = 0; n < A.length; n++)
      t[n] = A.charCodeAt(n);
    return new Blob([e], { type: "text/plain" });
  };
  e.jsonToBlob = function (A) {
    return new Blob([JSON.stringify(A)], { type: "application/json" });
  };
},
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
      };
  e.__esModule = !0;
  var i = t(14),
    s = t(0),
    o = t(1);
  e.getSearchUrl = function (A) {
    return n(void 0, void 0, void 0, function () {
      var e, t, n, i, a, c;
      return r(this, function (r) {
        switch (r.label) {
          case 0:
            return (
              (e = new URL(s.POLICY_ENDPOINT + "/url/search")).searchParams.set("u", A),
              [4, o.getFetch()(e.toString(), { method: "POST" })]
            );
          case 1:
            if (!(t = r.sent()).ok)
              throw new Error("magic URL returns non-2xx status: " + t.status);
            return [4, t.json()];
          case 2:
            return (
              (n = r.sent()),
              [
                2,
                {
                  isSearch: !0 === (null === (i = n) || void 0 === i ? void 0 : i.isSearch),
                  terms:
                    (c = null === (a = n) || void 0 === a ? void 0 : a.terms) != null ? c : "",
                },
              ]
            );
        }
      });
    });
  };
  e.isURLInTargets = function (A, e) {
    var t = i.urls.getHost(e);
    return A.some(function (A) {
      return (function (A, e) {
        var t = A.startsWith("*.");
        t && (A = A.substring(2));
        var n = i.urls.getHost(A);
        if (t) return e.endsWith("." + n);
        return e === n;
      })(A, t);
    });
  };
},
function(A, e, t) {
  "use strict";
  e.__esModule = !0;
  e.default = function (A) {
    var e = typeof A;
    return null != A && ("object" === e || "function" === e);
  };
},
function(A, e, t) {
  "use strict";
  var n = {};
  (0, t(2).assign)(n, t(75), t(78), t(23)), (A.exports = n);
},
function(A, e, t) {
  "use strict";
  A.exports = function (A, e, t, n) {
    for (var r = 65535 & A | 0, i = A >>> 16 & 65535 | 0, s = 0; 0 !== t; ) {
      t -= s = t > 2e3 ? 2e3 : t;
      do {
        i = i + (r = r + e[n++] | 0) | 0;
      } while (--s);
      (r %= 65521), (i %= 65521);
    }
    return (r | (i << 16)) | 0;
  };
},
function(A, e, t) {
  "use strict";
  var n = (function () {
    for (var A, e = [], t = 0; t < 256; t++) {
      A = t;
      for (var n = 0; n < 8; n++) A = 1 & A ? 3988292384 ^ (A >>> 1) : A >>> 1;
      e[t] = A;
    }
    return e;
  })();
  A.exports = function (A, e, t, r) {
    var i = n,
      s = r + t;
    A ^= -1;
    for (var o = r; o < s; o++) A = (A >>> 8) ^ i[255 & (A ^ e[o])];
    return (-1 ^ A) >>> 0;
  };
},
function(A, e, t) {
  "use strict";
  var n = t(2),
    r = !0,
    i = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (A) {
    r = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (A) {
    i = !1;
  }
  for (var s = new n.Buf8(256), o = 0; o < 256; o++)
    s[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;

  function a(A, e) {
    if (e < 65534 && ((A.subarray && i) || (!A.subarray && r)))
      return String.fromCharCode.apply(null, n.shrinkBuf(A, e));
    for (var t = "", s = 0; s < e; s++) t += String.fromCharCode(A[s]);
    return t;
  }
  (s[254] = s[254] = 1),
    (e.string2buf = function (A) {
      var e,
        t,
        r,
        i,
        s,
        o = A.length,
        a = 0;
      for (i = 0; i < o; i++)
        (e = A.charCodeAt(i)),
          55296 == (64512 & e) &&
            i + 1 < o &&
            56320 == (64512 & (t = A.charCodeAt(i + 1))) &&
            ((e = 65536 + ((e - 55296) << 10) + (t - 56320)), i++),
          (a += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4);
      for (e = new n.Buf8(a), s = 0, i = 0; s < a; i++)
        (e = A.charCodeAt(i)),
          55296 == (64512 & e) &&
            i + 1 < o &&
            56320 == (64512 & (t = A.charCodeAt(i + 1))) &&
            ((e = 65536 + ((e - 55296) << 10) + (t - 56320)), i++),
          e < 128
            ? (e[s++] = e)
            : e < 2048
            ? ((e[s++] = 192 | (e >>> 6)), (e[s++] = 128 | (63 & e)))
            : e < 65536
            ? ((e[s++] = 224 | (e >>> 12)),
              (e[s++] = 128 | ((e >>> 6) & 63)),
              (e[s++] = 128 | (63 & e)))
            : ((e[s++] = 240 | (e >>> 18)),
              (e[s++] = 128 | ((e >>> 12) & 63)),
              (e[s++] = 128 | ((e >>> 6) & 63)),
              (e[s++] = 128 | (63 & e)));
      return e;
    }),
    (e.buf2binstring = function (A) {
      return a(A, A.length);
    }),
    (e.binstring2buf = function (A) {
      for (var e = new n.Buf8(A.length), t = 0, r = e.length; t < r; t++)
        e[t] = A.charCodeAt(t);
      return e;
    }),
    (e.buf2string = function (A, e) {
      var t,
        n,
        r,
        i,
        o = e || A.length,
        c = new Array(2 * o);
      for (n = 0, t = 0; t < o; )
        if ((r = A[t++]) < 128) c[n++] = r;
        else if ((i = s[r]) > 4) (c[n++] = 65533), (t += i - 1);
        else {
          for (r &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && t < o; )
            (r = (r << 6) | (63 & A[t++])), i--;
          i > 1 ? (c[n++] = 65533) : r < 65536 ? (c[n++] = r) : ((r -= 65536), (c[n++] = 55296 | ((r >> 10) & 1023)), (c[n++] = 56320 | (1023 & r)));
        }
      return a(c, n);
    }),
    (e.utf8border = function (A, e) {
      var t;
      for (
        (e = e || A.length) > A.length && (e = A.length), t = e - 1;
        t >= 0 && 128 == (192 & A[t]);

      )
        t--;
      return t < 0
        ? e
        : 0 === t
        ? e
        : t + s[A[t]] > e
        ? t
        : e;
    });
},
function(A, e, t) {
  "use strict";
  A.exports = function () {
    (this.input = null),
      (this.next_in = 0),
      (this.avail_in = 0),
      (this.total_in = 0),
      (this.output = null),
      (this.next_out = 0),
      (this.avail_out = 0),
      (this.total_out = 0),
      (this.msg = ""),
      (this.state = null),
      (this.data_type = 2),
      (this.adler = 0);
  };
},
function(A, e, t) {
  "use strict";
  A.exports = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8,
  };
},
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
      };
  e.__esModule = !0;
  var i = t(0),
    s = t(1);
  e.mapToX3Confidence = function (A, e) {
    var t,
      n = A.probability;
    return (
      (t =
        n >= e.high
          ? i.CONFIDENCE.VERY_HIGH
          : n >= e.medium
          ? i.CONFIDENCE.HIGH
          : n >= e.low
          ? i.CONFIDENCE.MEDIUM
          : i.CONFIDENCE.NONE),
      { category: A.category, probability: t }
    );
  };
  e.isAllowlisted = function (A, e) {
    return n(this, void 0, void 0, function () {
      var t;
      return r(this, function (n) {
        switch (n.label) {
          case 0:
            return n.trys.push([0, 3, , 4]), [
              4,
              s.getFetch()(i.SMART_ALERTS_IS_ALLOWLISTED_ENDPOINT, {
                method: "POST",
                body: JSON.stringify({ url: e }),
              }),
            ];
          case 1:
            return [4, n.sent().json()];
          case 2:
            return [2, !0 === n.sent().allowlisted];
          case 3:
            return (
              (t = n.sent()),
              A.withError(t).error(
                "[admin/smart-alerts] error checking if URL is allowlisted for smart alerts"
              ),
              [2, !1]
            );
          case 4:
            return [2];
        }
      });
    });
  };
},
function(A, e, t) {
  "use strict";
  e.__esModule = !0;
  var n = t(83),
    r = t(15),
    i = t(0),
    s = t(1);
  !(function (A) {
    (A.TEXT = "text"), (A.IMAGE = "image");
  })(e.Source || (e.Source = {}));
  var o = (function () {
    function A(A, e, t) {
      (this.messenger = A), (this.metrics = t), (this.logger = e);
    }
    return (
      (A.prototype.makeReport = function (A) {
        var e = this,
          t = {
            url: A.url,
            timestamp: A.timestamp,
            sources: A.sources,
            prediction: A.prediction,
            title: A.title,
            triggerIds: A.triggerIds,
          },
          i = Date.now();
        this.sendReport(
          t,
          function (t) {
            e.metrics.histogram(
              "admin.smart_alerts.report.send_report.latency_ms",
              Date.now() - i
            );
            var s = Date.now(),
              o = r.stringToBlob(A.content.join(" "));
            n.upload(
              t.contentDescriptor,
              o,
              function () {
                e.metrics.histogram(
                  "admin.smart_alerts.report.upload_content.latency_ms",
                  Date.now() - s
                );
              },
              function (A) {
                e.metrics.increment("admin.smart_alerts.report.upload_content.error"),
                  e.logger.withError(A).error("Error uploading screenshot");
              }
            );
            var a = Date.now();
            A.captureNativeScreenshot
              ? n.captureAndUpload(
                  t.screenshotDescriptor,
                  function () {
                    e.metrics.histogram(
                      "admin.smart_alerts.report.capture_and_upload_screenshot.latency_ms",
                      Date.now() - a
                    );
                  },
                  function (A) {
                    e.metrics.increment(
                      "admin.smart_alerts.report.capture_and_upload_screenshot.error"
                    ),
                      e.logger.withError(A).error("Error capturing and uploading screenshot");
                  }
                )
              : A.tabScreenshot &&
                n.upload(
                  t.screenshotDescriptor,
                  r.dataURItoBlob(A.tabScreenshot.dataUrl),
                  function () {
                    e.metrics.histogram(
                      "admin.smart_alerts.report.upload_screenshot.latency_ms",
                      Date.now() - a
                    );
                  },
                  function (A) {
                    e.metrics.increment(
                      "admin.smart_alerts.report.upload_screenshot.error"
                    ),
                      e.logger.withError(A).error("Error uploading screenshot");
                  }
                );
          },
          function (A) {
            e.metrics.increment("admin.smart_alerts.report.send_report.error"),
              e.logger.withError(A).error("Error sending report");
          }
        );
      }),
      (A.prototype.sendReport = function (A, e, t) {
        var n = new AbortController(),
          r = setTimeout(function () {
            return n.abort();
          }, i.SMART_ALERTS_REPORT_TIMEOUT_MS);
        s
          .getFetch()(i.SMART_ALERTS_REPORT_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(A),
            headers: { "Content-Type": "application/json; charset=utf-8" },
            signal: n.signal,
          })
          .then(function (A) {
            if ((clearTimeout(r), !A.ok))
              throw new Error("smart alerts v3 report returns non-2xx status: " + A.status);
            return A.json();
          })
          .then(function (A) {
            e(A);
          })
          .catch(function (A) {
            t(A);
          });
      }),
      A
    );
  })();
  e.SmartAlertsReportsManager = o;
},
function(A, e, t) {
  "use strict";
  var n =
    (this && this.__assign) ||
    function () {
      return (n =
        Object.assign ||
        function (A) {
          for (var e, t = 1, n = arguments.length; t < n; t++)
            for (var r in (e = arguments[t]))
              Object.prototype.hasOwnProperty.call(e, r) && (A[r] = e[r]);
          return A;
        }).apply(this, arguments);
    };
  e.__esModule = !0;
  var r = t(92),
    i = t(0);
  e.disable = function () {
    var A = document.getElementById("goguardian-privacy-bubble");
    A && A.parentNode && A.parentNode.removeChild(A), clearInterval(void 0);
  };
  e.enable = function () {
    var A = document.createElement("iframe");
    (A.src = i.LOCALSTORAGE_ENDPOINT), (A.style.display = "none"), document.body.appendChild(A);
    var e = r.getPrivacyBubbleContent(),
      t = document.createElement("div");
    t.setAttribute("id", "goguardian-privacy-bubble"),
      t.setAttribute(
        "style",
        "z-index: 2147483647; position: relative; display: block; height: 0px; min-height: 0px; width: 0px; min-width: 0px; margin: 0px; padding: 0px; border: 0px;"
      ),
      (t.innerHTML += e),
      document.body.appendChild(t),
      r.privacyBubbleScript(void 0);
  };
  e.setPrivacyBubbleState = function (A) {
    window.xdLocalStorage.setItem(i.PRIVACY_BUBBLE_STATE_STORAGE_KEY, JSON.stringify(A));
  };
  e.savePrivacyBubblePosition = function (A, t) {
    window.xdLocalStorage &&
      window.xdLocalStorage.getItem(
        i.PRIVACY_BUBBLE_STATE_STORAGE_KEY,
        function (r) {
          var i = r.value,
            s = {};
          null !== i && (s = JSON.parse(i));
          var o =
            0 === Object.keys(s).length
              ? { clientX: A, clientY: t }
              : n(n({}, s), { clientX: A, clientY: t });
          e.setPrivacyBubbleState(o);
        }
      );
  };
  e.savePrivacyBubbleTextVisibility = function (A) {
    window.xdLocalStorage &&
      window.xdLocalStorage.getItem(
        i.PRIVACY_BUBBLE_STATE_STORAGE_KEY,
        function (t) {
          var r = t.value,
            i = {};
          null !== r && (i = JSON.parse(r));
          var s =
            0 === Object.keys(i).length
              ? { isVisible: A }
              : n(n({}, i), { isVisible: A });
          e.setPrivacyBubbleState(s);
        }
      );
  };
  e.setPrivacyBubblePosition = function (A, e, t) {
    t &&
      null !== t &&
      (t.style.transform = "translate3d(" + A + "px, " + e + "px, 0)");
  };
},
function(A, e, t) {
  "use strict";
  e.__esModule = !0,
    (function (A) {
      (A[(A.TabState = 1)] = "TabState"), (A[(A.TabContent = 2)] = "TabContent");
    })(e.AssetMessageType || (e.AssetMessageType = {})),
    (function (A) {
      (A.Connected = "connected"),
        (A.Redirect = "redirect"),
        (A.Reload = "reload"),
        (A.SetOffTaskAlertsEnabled = "setOffTaskAlertsEnabled"),
        (A.AdminPolicyUpdated = "adminPolicyUpdated");
    })(e.ProxyMessageType || (e.ProxyMessageType = {})),
    (function (A) {
      (A.UNKNOWN = "UNKNOWN"), (A.YOUTUBE = "YOUTUBE");
    })(e.VideoStateType || (e.VideoStateType = {}));
},
function(A, e, t) {
  "use strict";
  var n =
    (this && this.__importDefault) ||
    function (A) {
      return A && A.__esModule ? A : { default: A };
    };
  e.__esModule = !0;
  var r = t(29),
    i = t(30),
    s = t(55),
    o = t(59),
    a = t(61),
    c = t(63),
    l = t(67),
    u = t(68),
    h = t(69),
    w = t(86),
    d = t(90),
    f = t(91),
    g = t(93),
    B = t(94),
    p = n(t(95));
  r.initialize({
    onInit: function (A, e) {
      var t;
      if (!window.GG_SCRIPT_INITIALIZED) {
        window.GG_SCRIPT_INITIALIZED = !0;
        var n = new g.Logging(),
          r = n.getLoggerClient(),
          m = n.getMetricsClient();
        new w.YouTubeManager(A, r, m),
          new c.ContentMiner(A, r),
          window.top === window.self &&
            (new o.WebsocketManager("/"),
            new i.BeaconManager(A, r, m),
            new s.ContextualManager(A, r, m),
            new a.EntityManager(A, r, m, null === (t = e) || void 0 === t ? void 0 : t.apoid),
            new l.ContentCollector(A),
            new d.FlaggedActivityManager(A, r, m),
            new u.PolicyManager(A, r, m),
            new h.SmartAlertsManager(A, r, m),
            new B.SmartAlertsProxyManager(A, r, m),
            new f.PrivacyBannerManager(A, r, m),
            new p.default(A, r, m));
      }
    },
  });
},
function(A, e, t) {
  "use strict";
  e.__esModule = !0;
  var n = t(7),
    r = t(3),
    i = t(0);
  r.fixJSONStringify(),
    (e.initialize = function (A) {
      var e,
        t,
        r = A.onInit,
        s = {
          pna: null === (e = window.GG_INJ_CFG) || void 0 === e ? void 0 : e.pna,
          apoid: null === (t = window.GG_INJ_CFG) || void 0 === t ? void 0 : t.apoid,
        };
      document.addEventListener("DOMContentLoaded", function () {
        if (!window.GG_SCRIPT_LOADED) {
          window.GG_SCRIPT_LOADED = !0;
          var A = new n.Messenger(),
            e = window.navigator,
            t =
              e.userAgentData &&
              e.userAgentData.brands &&
              e.userAgentData.brands.some(function (A) {
                return "Google Chrome" === A.brand;
              });
          if (window.top === window.self && Boolean(t)) {
            A.extension.onResponseReceived.addListener(function (e) {
              var t,
                n = !0 === (null === (t = s) || void 0 === t ? void 0 : t.pna);
              (!e.installed || (n && e.prioritizeNativeAgent)) && r(A, s);
            });
            var o = document.createElement("iframe");
            (o.src = i.EXTENSION_IFRAME_ENDPOINT), (o.style.display = "none"), document.body.appendChild(o);
          } else r(A, s);
        }
      });
    });
},
