a.prototype.writeFloatBE = function (A, e, t) {
  return O(this, A, e, !1, t);
};
a.prototype.writeDoubleLE = function (A, e, t) {
  return D(this, A, e, !0, t);
};
a.prototype.writeDoubleBE = function (A, e, t) {
  return D(this, A, e, !1, t);
};
a.prototype.copy = function (A, e, t, n) {
  if (
    (t || (t = 0),
    n || 0 === n || (n = this.length),
    e >= A.length && (e = A.length),
    e || (e = 0),
    n > 0 && n < t && (n = t),
    n === t)
  )
    return 0;
  if (0 === A.length || 0 === this.length) return 0;
  if (e < 0) throw new RangeError("targetStart out of bounds");
  if (t < 0 || t >= this.length) throw new RangeError("sourceStart out of bounds");
  if (n < 0) throw new RangeError("sourceEnd out of bounds");
  n > this.length && (n = this.length),
    A.length - e < n - t && (n = A.length - e + t);
  var r,
    i = n - t;
  if (this === A && t < e && e < n)
    for (r = i - 1; r >= 0; --r) A[r + e] = this[r + t];
  else if (i < 1e3 || !a.TYPED_ARRAY_SUPPORT)
    for (r = 0; r < i; ++r) A[r + e] = this[r + t];
  else Uint8Array.prototype.set.call(A, this.subarray(t, t + i), e);
  return i;
};
a.prototype.fill = function (A, e, t, n) {
  if ("string" == typeof A) {
    if (
      ("string" == typeof e
        ? ((n = e), (e = 0), (t = this.length))
        : "string" == typeof t && ((n = t), (t = this.length)),
      1 === A.length)
    ) {
      var r = A.charCodeAt(0);
      r < 256 && (A = r);
    }
    if (void 0 !== n && "string" != typeof n)
      throw new TypeError("encoding must be a string");
    if ("string" == typeof n && !a.isEncoding(n))
      throw new TypeError("Unknown encoding: " + n);
  } else "number" == typeof A && (A &= 255);
  if (e < 0 || this.length < e || this.length < t)
    throw new RangeError("Out of range index");
  if (t <= e) return this;
  var i;
  if (
    ((e >>>= 0), (t = void 0 === t ? this.length : t >>> 0), A || (A = 0), "number" == typeof A)
  )
    for (i = e; i < t; ++i) this[i] = A;
  else {
    var s = a.isBuffer(A) ? A : R(new a(A, n).toString()),
      o = s.length;
    for (i = 0; i < t - e; ++i) this[i + e] = s[i % o];
  }
  return this;
};

var K = /[^+\/0-9A-Za-z-_]/g;

function M(A) {
  return A < 16 ? "0" + A.toString(16) : A.toString(16);
}

function R(A, e) {
  var t;
  e = e || 1 / 0;
  for (var n = A.length, r = null, i = [], s = 0; s < n; ++s) {
    if ((t = A.charCodeAt(s)) > 55295 && t < 57344) {
      if (!r) {
        if (t > 56319) {
          (e -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        if (s + 1 === n) {
          (e -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        r = t;
        continue;
      }
      if (t < 56320) {
        (e -= 3) > -1 && i.push(239, 191, 189), (r = t);
        continue;
      }
      t = 65536 + (((r - 55296) << 10) | (t - 56320));
    } else r && (e -= 3) > -1 && i.push(239, 191, 189);
    if (((r = null), t < 128)) {
      if ((e -= 1) < 0) break;
      i.push(t);
    } else if (t < 2048) {
      if ((e -= 2) < 0) break;
      i.push((t >> 6) | 192, (63 & t) | 128);
    } else if (t < 65536) {
      if ((e -= 3) < 0) break;
      i.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (63 & t) | 128);
    } else {
      if (!(t < 1114112)) throw new Error("Invalid code point");
      if ((e -= 4) < 0) break;
      i.push((t >> 18) | 240, ((t >> 12) & 63) | 128, ((t >> 6) & 63) | 128, (63 & t) | 128);
    }
  }
  return i;
}

function P(A) {
  return n.toByteArray(
    (function (A) {
      if (
        ((A = (function (A) {
          return A.trim ? A.trim() : A.replace(/^\s+|\s+$/g, "");
        })(A).replace(K, "")),
        A.length < 2)
      )
        return "";
      for (; A.length % 4 != 0; ) A += "=";
      return A;
    })(A)
  );
}

function N(A, e, t, n) {
  for (var r = 0; r < n && !(r + t >= e.length || r >= A.length); ++r)
    e[r + t] = A[r];
  return r;
}
}.call(this, t(8))},
function(A, e, t) {
  "use strict";
  var n =
    (this && this.__importDefault) ||
    function (A) {
      return A && A.__esModule ? A : { default: A };
    };
  e.__esModule = !0;
  var r = n(t(56)),
    i = n(t(17));
  e.default = function (A, e, t) {
    var n = !0,
      s = !0;
    if ("function" != typeof A) throw new TypeError("Expected a function");
    return (
      i.default(t) &&
        ((n = "leading" in t ? !!t.leading : n),
        (s = "trailing" in t ? !!t.trailing : s)),
      r.default(A, e, { leading: n, trailing: s, maxWait: e })
    );
  };
},
function(A, e, t) {
  "use strict";
  e.__esModule = !0;
  var n = t(60),
    r = t(3);
  e.SCRIPT_ID = n.randomUuidv4() || r.randomInt32().toString();
},
function(A, e, t) {
  "use strict";
  e.__esModule = !0;
  var n = (function () {
    function A() {
      (this.shared = {
        onPolicyRequest: new r("gg:shared:policy:request"),
        onPolicyReceived: new r("gg:shared:policy:received"),
        onWebsocketMessage: new r("gg:shared:websocket:message"),
        onViewingCreated: new r("gg:shared:viewing:created"),
      }),
        (this.admin = {
          onVideoWatched: new r("gg:admin:video:watched"),
          onVideoBlocked: new r("gg:admin:video:blocked"),
          onFlaggedActivityReceived: new r("gg:admin:flaggedactivity:received"),
          onSmartAlertsPredictionRequest: new r("gg:admin:smartalerts:prediction:request"),
          onSmartAlertsPredictionReceived: new r("gg:admin:smartalerts:prediction:received"),
          onSmartAlertsReportSkipped: new r("gg:admin:smartalerts:report:skipped"),
          onSmartAlertsCloseMessage: new r("gg:admin:smartalerts:closemessage"),
          onPolicyUpdated: new r("gg:admin:policy:updated"),
        }),
        (this.beacon = {
          onCloseMessage: new r("gg:beacon:closemessage"),
          onPrediction: new r("gg:beacon:prediction"),
        }),
        (this.miner = {
          onContentReceived: new r("gg:miner:content:received"),
          onAnalysisTriggered: new r("gg:miner:analysis:triggered"),
        }),
        (this.extension = {
          onResponseReceived: new r("gg:extension:response:received"),
        }),
        window.addEventListener("message", this.switchboard.bind(this));
    }
    return (
      (A.prototype.switchboard = function (A) {
        var e = A.data;
        if (e)
          switch (e.type) {
            case this.shared.onPolicyRequest.eventName:
              this.shared.onPolicyRequest.callListeners(e.payload);
              break;
            case this.shared.onPolicyReceived.eventName:
              this.shared.onPolicyReceived.callListeners(e.payload);
              break;
            case this.shared.onWebsocketMessage.eventName:
              this.shared.onWebsocketMessage.callListeners(e.payload);
              break;
            case this.shared.onViewingCreated.eventName:
              this.shared.onViewingCreated.callListeners(e.payload);
              break;
            case this.admin.onVideoWatched.eventName:
              this.admin.onVideoWatched.callListeners(e.payload);
              break;
            case this.admin.onVideoBlocked.eventName:
              this.admin.onVideoBlocked.callListeners(e.payload);
              break;
            case this.admin.onFlaggedActivityReceived.eventName:
              this.admin.onFlaggedActivityReceived.callListeners(e.payload);
              break;
            case this.admin.onSmartAlertsPredictionRequest.eventName:
              this.admin.onSmartAlertsPredictionRequest.callListeners(e.payload);
              break;
            case this.admin.onSmartAlertsReportSkipped.eventName:
              this.admin.onSmartAlertsReportSkipped.callListeners(e.payload);
              break;
            case this.admin.onSmartAlertsPredictionReceived.eventName:
              this.admin.onSmartAlertsPredictionReceived.callListeners(e.payload);
              break;
            case this.admin.onSmartAlertsCloseMessage.eventName:
              this.admin.onSmartAlertsCloseMessage.callListeners(e.payload);
              break;
            case this.admin.onPolicyUpdated.eventName:
              this.admin.onPolicyUpdated.callListeners(e.payload);
              break;
            case this.beacon.onCloseMessage.eventName:
              this.beacon.onCloseMessage.callListeners(e.payload);
              break;
            case this.beacon.onPrediction.eventName:
              this.beacon.onPrediction.callListeners(e.payload);
              break;
            case this.miner.onContentReceived.eventName:
              this.miner.onContentReceived.callListeners(e.payload);
              break;
            case this.miner.onAnalysisTriggered.eventName:
              this.miner.onAnalysisTriggered.callListeners(e.payload);
              break;
            case this.extension.onResponseReceived.eventName:
              this.extension.onResponseReceived.callListeners(e.payload);
          }
      }),
      A
    );
  })();
e.Messenger = n;
var r = (function () {
  function A(A, e) {
    (this.eventName = A), (this.listeners = e || []);
  }
  return (
    (A.prototype.addListener = function (A) {
      this.listeners.push(A);
    }),
    (A.prototype.callListeners = function (A) {
      this.listeners.forEach(function (e) {
        e(A);
      });
    }),
    (A.prototype.emit = function (A, e, t) {
      var n = { type: this.eventName, payload: e };
      if (A.top && window.top && window.top.postMessage(n, "*"), A.iframes)
        for (var r = 0; r < window.frames.length; r++)
          window.frames[r].postMessage(n, "*");
    }),
    A
  );
})();
e.CrossEmitter = r;
},
function(A, e) {
  var t;
  t = function () {
    return this;
  }();
  try {
    t = t || new Function("return this")();
  } catch (A) {
    "object" == typeof window && (t = window);
  }
  A.exports = t;
},
function(A, e, t) {
  "use strict";
  var n =
    (this && this.__importDefault) ||
    function (A) {
      return A && A.__esModule ? A : { default: A };
    };
  e.__esModule = !0;
  var r = t(14),
    i = t(0),
    s = n(t(49));

  function o(A) {
    var e = r.urls.stripUrl(A);
    return void 0 !== i.SCREENSHOT_HOSTNAME_BLOCKLIST.find(function (A) {
      var t = r.urls
        .stripUrl(A)
        .replace(/\\/g, "\\\\")
        .replace(/\./g, "\\.")
        .replace(/\*/g, ".*");
      return new RegExp("^" + t, "gi").test(e);
    });
  }
  e.shouldSkipForTest = o;
  e.blocklistError = new Error("url is blocked for screenshots");
  e.takeScreenshot = function (A, t) {
    try {
      var n = {
        x: window.scrollX,
        y: window.scrollY,
        width: window.innerWidth,
        height: window.innerHeight,
        logging: !1,
        allowTaint: !0,
        useCORS: !0,
        scale: 1,
      };
      if (o(window.location.href)) return void t(e.blocklistError);
      document.querySelectorAll("iframe").forEach(function (A) {
        try {
          (A.contentDocument &&
            A.contentDocument.body &&
            A.contentDocument.body.hasChildNodes()) ||
            A.setAttribute("data-html2canvas-ignore", "true");
        } catch (e) {
          console.error("Error accessing iframe content:", e),
            A.setAttribute("data-html2canvas-ignore", "true");
        }
      }),
        s
          .default(document.body, n)
          .then(function (e) {
            var t = e.toDataURL("image/jpeg", 0.5);
            A(t);
          })
          .catch(function (A) {
            var e;
            (e =
              "string" == typeof A
                ? new Error("html2canvas error (string): " + A)
                : A instanceof Error
                ? A
                : new Error("html2canvas error (default): error with typeof " + typeof A)),
              t(e);
          });
    } catch (A) {
      t(A);
    }
  };
},
function(A, e, t) {
  "use strict";
  e.__esModule = !0;
  var n = t(3),
    r = t(0);

  function i(A) {
    if (r.URL_SCHEME_MATCHING_REGEX.test(A))
      return "//" === A.substring(0, 2) && (A = window.location.protocol + A), A;
    if ("/" === A.substring(0, 1))
      return [window.location.protocol, "//", window.location.host, A].join("");
    var e = window.location.href.split("/"),
      t = A.split("/");
    e.pop();
    for (var n = 0; n < t.length; n++)
      "." != t[n] && (".." == t[n] ? e.length > 3 && e.pop() : e.push(t[n]));
    return e.join("/");
  }

  function s(A, e) {
    if (!A) return e;
    var t,
      n = A.map(function (A) {
        return A.id;
      }).indexOf(e[0].id);
    return -1 === n ? (t = A.concat(e)) : ((t = A.slice())[n] = e[0]), t;
  }
  e.getEntityId = function () {
    return n.randomInt32();
  };
  e.getFaviconUrlFromDOM = function () {
    for (var A = document.getElementsByTagName("link"), e = 0; e < A.length; e++) {
      var t = A[e];
      if (-1 !== (t.getAttribute("rel") || "").split(" ").indexOf("icon")) {
        var n = t.getAttribute("href");
        if (n) return i(n);
      }
    }
    return "";
  };
  e.getFaviconUrlFromImg = function (A) {
    var e = "/favicon.ico",
      t = document.createElement("img");
    t.addEventListener("load", function () {
      A(i(e));
    }),
      (t.src = e);
  };
  e.getFullyQualifiedUrl = i;
  e.getBlockedSites = function () {
    var A = [];
    return (
      window.location.host === r.BLOCK_PAGE_HOSTNAME &&
        window.location.search
          .substring(1)
          .split("&")
          .forEach(function (e) {
            var t = e.split("=");
            if ("catIds" === t[0] && 2 === t.length) {
              var n = parseInt(t[1]);
              if (isNaN(n)) return;
              A.push({ category_id: n });
            }
          }),
      A
    );
  };
  e.getDoc = function () {
    var A;
    if (window.location.host === r.GOOGLE_DOCS_HOSTNAME)
      return r.GOOGLE_DOCS_SELECTORS.some(function (e) {
        var t = document.querySelector(e);
        return (
          !!(
            t &&
            t.textContent &&
            t.textContent.length &&
            0 !== t.textContent.indexOf("Untitled")
          ) &&
          ((A = t.textContent), !0)
        );
      }),
      A ? { title: A } : void 0;
  };
  e.stripHashFromGoogleDocs = function (A, e) {
    return A === r.GOOGLE_DOCS_HOSTNAME ? e.split("#")[0] : e;
  };
  e.createFaviconUrlDiff = function (A, e) {
    return { id: A, entity: { favicon_url: e } };
  };
  e.createViewingDiff = function (A, e, t) {
    return { id: A, entity: { url: e, viewings: [t] } };
  };
  e.createVideoDiff = function (A, e) {
    return { id: A, entity: { videos: [e] } };
  };
  e.createFlaggedActivityDiff = function (A, e) {
    return { id: A, entity: { flagged_activity: [e] } };
  };
  e.mergeViewings = s;
  e.mergeEntityDiffs = function (A) {
    var e = [];
    return (
      A.forEach(function (A) {
        var t = e
          .map(function (A) {
            return A && A.id;
          })
          .indexOf(A.id);
        if (-1 !== t) {
          var n = e[t];
          n &&
            (A.entity.favicon_url && (n.entity.favicon_url = A.entity.favicon_url),
            A.entity.videos &&
              0 !== A.entity.videos.length &&
              (n.entity.videos
                ? (n.entity.videos = n.entity.videos.concat(A.entity.videos))
                : (n.entity.videos = A.entity.videos)),
            A.entity.flagged_activity &&
              0 !== A.entity.flagged_activity.length &&
              (n.entity.flagged_activity
                ? (n.entity.flagged_activity = n.entity.flagged_activity.concat(
                    A.entity.flagged_activity
                  ))
                : (n.entity.flagged_activity = A.entity.flagged_activity)),
            A.entity.viewings &&
              0 !== A.entity.viewings.length &&
              (n.entity.viewings = s(n.entity.viewings, A.entity.viewings)),
            A.entity.admin_policy_override_id &&
              (n.entity.admin_policy_override_id = A.entity.admin_policy_override_id));
        } else e.push(A);
      }),
      e
    );
  };
  e.getEntities = function () {
    var A = sessionStorage.getItem(r.ENTITIES_SESSION_STORAGE_KEY),
      e = A ? JSON.parse(A) : {};
    for (var t in e)
      if (e.hasOwnProperty(t)) {
        var n = e[t].entity;
        n.viewings &&
          n.viewings[0] &&
          Date.now() - n.viewings[0].start_time_ms >= r.ENTITIES_MUTATION_WINDOW_MS &&
          delete e[t];
      }
    return e;
  };
  e.storeEntities = function (A) {
    sessionStorage.setItem(r.ENTITIES_SESSION_STORAGE_KEY, JSON.stringify(A));
  };
},
function(A, e, t) {
  "use strict";
  A.exports = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version",
  };
},
function(A, e, t) {
  "use strict";
  window.XdUtils = window.XdUtils || {
    extend: function (A, e) {
      var t,
        n = e || {};
      for (t in A) A.hasOwnProperty(t) && (n[t] = A[t]);
      return n;
    },
  };
  window.xdLocalStorage = window.xdLocalStorage || (function () {
    function A(A) {
      var e;
      try {
        e = JSON.parse(A.data);
      } catch (A) {}
      e &&
        e.namespace === s &&
        ("iframe-ready" === e.id
          ? ((u = !0), o.initCallback())
          : (function A(A) {
              c[A.id] && (c[A.id](A), delete c[A.id]);
            })(e));
    }

    function e(A, e, t, n) {
      a++, (c[a] = n);
      var r = { namespace: s, id: a, action: A, key: e, value: t };
      i.contentWindow.postMessage(JSON.stringify(r), "*");
    }

    function t(e) {
      o = XdUtils.extend(e, o);
      var t = document.createElement("div");
      window.addEventListener
        ? window.addEventListener("message", A, !1)
        : window.attachEvent("onmessage", A),
        (t.innerHTML =
          '<iframe id="' +
          o.iframeId +
          '" src=' +
          o.iframeUrl +
          ' style="display: none;"></iframe>'),
        document.body.appendChild(t),
        (i = document.getElementById(o.iframeId));
    }

    function n() {
      return l
        ? !!u ||
            (console.log(
              "You must wait for iframe ready message before using the api."
            ),
            !1)
        : (console.log("You must call xdLocalStorage.init() before using it."), !1);
    }

    function r() {
      return "complete" === document.readyState;
    }
    var i,
      s = "cross-domain-local-message",
      o = {
        iframeId: "cross-domain-iframe",
        iframeUrl: void 0,
        initCallback: function () {},
      },
      a = -1,
      c = {},
      l = !1,
      u = !0;
    return {
      init: function (A) {
        if (!A.iframeUrl) throw "You must specify iframeUrl";
        l
          ? console.log("xdLocalStorage was already initialized!")
          : ((l = !0),
            r()
              ? t(A)
              : document.addEventListener
              ? document.addEventListener("readystatechange", function () {
                  r() && t(A);
                })
              : document.attachEvent("readystatechange", function () {
                  r() && t(A);
                }));
      },
      setItem: function (A, t, r) {
        n() && e("set", A, t, r);
      },
      getItem: function (A, t) {
        n() && e("get", A, null, t);
      },
      removeItem: function (A, t) {
        n() && e("remove", A, null, t);
      },
      key: function (A, t) {
        n() && e("key", A, null, t);
      },
      getSize: function (A) {
        n() && e("size", null, null, A);
      },
      getLength: function (A) {
        n() && e("length", null, null, A);
      },
      clear: function (A) {
        n() && e("clear", null, null, A);
      },
      wasInit: function () {
        return l;
      },
    };
  })();
},
function(A, e, t) {
  "use strict";
  var n,
    r = "object" == typeof Reflect ? Reflect : null,
    i =
      r && "function" == typeof r.apply
        ? r.apply
        : function (A, e, t) {
            return Function.prototype.apply.call(A, e, t);
          };
  n =
    r && "function" == typeof r.ownKeys
      ? r.ownKeys
      : Object.getOwnPropertySymbols
      ? function (A) {
          return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A));
        }
      : function (A) {
          return Object.getOwnPropertyNames(A);
        };
  var s = Number.isNaN || function (A) {
      return A != A;
    };

  function o() {
    o.init.call(this);
  }
  A.exports = o;
  o.EventEmitter = o;
  o.prototype._events = void 0;
  o.prototype._eventsCount = 0;
  o.prototype._maxListeners = void 0;
  var a = 10;

  function c(A) {
    if ("function" != typeof A)
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' + typeof A
      );
  }

  function l(A) {
    return void 0 === A._maxListeners ? o.defaultMaxListeners : A._maxListeners;
  }

  function u(A, e, t, n) {
    var r, i, s, o;
    if (
      (c(t),
      void 0 === (i = A._events)
        ? ((i = A._events = Object.create(null)), (A._eventsCount = 0))
        : (void 0 !== i.newListener &&
            (A.emit("newListener", e, t.listener ? t.listener : t), (i = A._events)),
          (s = i[e])),
      void 0 === s)
    )
      (s = i[e] = t), ++A._eventsCount;
    else if ("function" == typeof s)
      (s = i[e] = n ? [t, s] : [s, t]), ++A._eventsCount;
    else if (n) s.unshift(t);
    else s.push(t);
    if (((r = l(A)) > 0 && s.length > r && !s.warned)) {
      s.warned = !0;
      var a = new Error(
        "Possible EventEmitter memory leak detected. " +
          s.length +
          " " +
          String(e) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      (a.name = "MaxListenersExceededWarning"),
        (a.emitter = A),
        (a.type = e),
        (a.count = s.length),
        (o = a),
        console && console.warn && console.warn(o);
    }
    return A;
  }

  function h() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        0 === arguments.length
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }

  function w(A, e, t) {
    var n = { fired: !1, wrapFn: void 0, target: A, type: e, listener: t },
      r = h.bind(n);
    return (r.listener = t), (n.wrapFn = r), r;
  }

  function d(A, e, t) {
    var n = A._events;
    if (void 0 === n) return [];
    var r = n[e];
    return void 0 === r
      ? []
      : "function" == typeof r
      ? t
        ? [r.listener || r]
        : [r]
      : t
      ? (function (A) {
          for (var e = new Array(A.length), t = 0; t < e.length; ++t)
            e[t] = A[t].listener || A[t];
          return e;
        })(r)
      : g(r, r.length);
  }

  function f(A) {
    var e = this._events;
    if (void 0 !== e) {
      var t = e[A];
      if ("function" == typeof t) return 1;
      if (void 0 !== t) return t.length;
    }
    return 0;
  }

  function g(A, e) {
    for (var t = new Array(e), n = 0; n < e; ++n) t[n] = A[n];
    return t;
  }
  Object.defineProperty(o, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return a;
    },
    set: function (A) {
      if ("number" != typeof A || A < 0 || s(A))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            A +
            "."
        );
      return (this._maxListeners = A), this;
    }),
    (o.prototype.getMaxListeners = function () {
      return l(this);
    }),
    (o.prototype.emit = function (A) {
      for (var e = [], t = 1; t < arguments.length; t++) e.push(arguments[t]);
      var n = "error" === A,
        r = this._events;
      if (void 0 !== r) n = n && void 0 === r.error;
      else if (!n) return !1;
      if (n) {
        var s;
        if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
        var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw ((o.context = s), o);
      }
      var a = r[A];
      if (void 0 === a) return !1;
      if ("function" == typeof a) i(a, this, e);
      else {
        var c = a.length,
          l = g(a, c);
        for (t = 0; t < c; ++t) i(l[t], this, e);
      }
      return !0;
    }),
    (o.prototype.addListener = function (A, e) {
      return u(this, A, e, !1);
    }),
    (o.prototype.on = o.prototype.addListener),
    (o.prototype.prependListener = function (A, e) {
      return u(this, A, e, !0);
    }),
    (o.prototype.once = function (A, e) {
      return c(e), this.on(A, w(this, A, e)), this;
    }),
    (o.prototype.prependOnceListener = function (A, e) {
      return c(e), this.prependListener(A, w(this, A, e)), this;
    }),
    (o.prototype.removeListener = function (A, e) {
      var t, n, r, i, s;
      if ((c(e), void 0 === (n = this._events))) return this;
      if (void 0 === (t = n[A])) return this;
      if (t === e || t.listener === e)
        0 == --this._eventsCount
          ? (this._events = Object.create(null))
          : (delete n[A], n.removeListener && this.emit("removeListener", A, t.listener || e));
      else if ("function" != typeof t) {
        for (r = -1, i = t.length - 1; i >= 0; i--)
          if (t[i] === e || t[i].listener === e) {
            s = t[i].listener;
            r = i;
            break;
          }
        if (r < 0) return this;
        0 === r
          ? t.shift()
          : (function (A, e) {
              for (; e + 1 < A.length; e++) A[e] = A[e + 1];
              A.pop();
            })(t, r),
          1 === t.length && (n[A] = t[0]),
          void 0 !== n.removeListener && this.emit("removeListener", A, s || e);
      }
      return this;
    }),
    (o.prototype.off = o.prototype.removeListener),
    (o.prototype.removeAllListeners = function (A) {
      var e, t, n;
      if (void 0 === (t = this._events)) return this;
      if (void 0 === t.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : void 0 !== t[A] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete t[A]),
          this
        );
      if (0 === arguments.length) {
        var r,
          i = Object.keys(t);
        for (n = 0; n < i.length; ++n)
          "removeListener" !== (r = i[n]) && this.removeAllListeners(r);
        return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
      }
      if ("function" == typeof (e = t[A])) this.removeListener(A, e);
      else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) this.removeListener(A, e[n]);
      return this;
    }),
    (o.prototype.listeners = function (A) {
      return d(this, A, !0);
    }),
    (o.prototype.rawListeners = function (A) {
      return d(this, A, !1);
    }),
    (o.listenerCount = function (A, e) {
      return "function" == typeof A.listenerCount ? A.listenerCount(e) : f.call(A, e);
    }),
    (o.prototype.listenerCount = f),
    (o.prototype.eventNames = function () {
      return this._eventsCount > 0 ? n(this._events) : [];
    });
},
