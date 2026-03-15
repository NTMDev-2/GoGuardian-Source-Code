!function() {
  "use strict";
  
  var r = {
    parse: function(A) {
      if ("string" != typeof A) return {};
      A = A.trim().replace(/^(\?|#)/, "");
      if (!A) return {};
      return A.trim()
        .split("&")
        .reduce(function(A, e) {
          var t = e.replace(/\+/g, " ").split("=");
          var n = t[0];
          var r = t[1];
          n = decodeURIComponent(n);
          r = void 0 === r ? null : decodeURIComponent(r);
          if (A.hasOwnProperty(n)) {
            if (Array.isArray(A[n])) {
              A[n].push(r);
            } else {
              A[n] = [A[n], r];
            }
          } else {
            A[n] = r;
          }
          return A;
        }, {});
    },
    
    stringify: function(A) {
      if (!A) return "";
      return Object.keys(A)
        .map(function(e) {
          var t = A[e];
          if (Array.isArray(t)) {
            return t.map(function(A) {
              return encodeURIComponent(e) + "=" + encodeURIComponent(A);
            }).join("&");
          }
          return encodeURIComponent(e) + "=" + encodeURIComponent(t);
        })
        .join("&");
    }
  };
  
  void 0 === (n = function() {
    return r;
  }.call(e, t, e, A)) || (A.exports = n);
}()},

function(A, e) {
  e.allIndexOf = function(A, e) {
    for (var t = [], n = A.indexOf(e); -1 !== n; n = A.indexOf(e, n + 1)) {
      t.push(n);
    }
    return t;
  };
},

function(A, e) {
  var t = e.setLongTimeout = function(A, e) {
    if (e > 2147483647) {
      setTimeout(function() {
        t(A, e - 2147483647);
      }, 2147483647);
    } else {
      setTimeout(A, e);
    }
  };
},

function(A, e) {
  e.read = function(A) {
    for (var e = A + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
      for (var r = t[n]; " " == r.charAt(0);) {
        r = r.substring(1, c.length);
      }
      if (0 === r.indexOf(e)) {
        return r.substring(e.length, r.length);
      }
    }
    return null;
  };
  
  var t = e.create = function(A, e, t, n, r) {
    var i = new Date();
    var s = 365 | t;
    i.setDate(i.getDate() + s);
    var o = A + "=" + e + ";";
    o += "expires=" + i + ";";
    if (n) {
      o += "domain=" + n + ";";
    }
    o += "path=" + r + ";";
    document.cookie = o;
  };
  
  e.erase = function(A) {
    t(A, "", -1);
  };
},

function(A, e, t) {
  "use strict";
  
  var n =
    (this && this.__importDefault) ||
    function(A) {
      return A && A.__esModule ? A : { default: A };
    };
  
  e.__esModule = !0;
  
  var r = n(t(5));
  var i = t(9);
  var s = t(16);
  var o = t(0);
  var a = t(1);
  
  e.shouldUseSingleScreenshotForTest = h;
  
  var c = function() {
    function A(A, e, t, n) {
      this.policyEnabled = !1;
      this.useNativeScreenshots = !1;
      this.shouldScreenshot = !1;
      this.singleScreenshotTaken = !1;
      this.messenger = A;
      this.metrics = t;
      this.logger = e;
      this.beaconManager = n;
      this.messenger.shared.onPolicyReceived.addListener(
        this.policyReceived.bind(this)
      );
      this.messenger.shared.onViewingCreated.addListener(
        this.viewingCreated.bind(this)
      );
      this.throttledSaveScreenshot = r.default(
        this.saveScreenshot.bind(this),
        o.SCREENSHOT_THROTTLE_MS,
        { leading: !0, trailing: !1 }
      );
    }
    
    return (
      (A.prototype.policyReceived = function(A) {
        return n(this, void 0, void 0, function() {
          var e, t;
          return r(this, function(n) {
            switch (n.label) {
              case 0:
                e = this;
                t = !0 === A.features.contextualScreenshotsEnabled;
                if (!t) return [3, 2];
                return [4, this.beaconManager.isEnabled()];
              case 1:
                t = n.sent();
                n.label = 2;
              case 2:
                e.policyEnabled = t;
                this.useNativeScreenshots =
                  !0 === A.features.assetUseNativeScreenshots;
                if (this.policyEnabled && this.bufferSaveScreenshot) {
                  this.saveScreenshot(
                    this.bufferSaveScreenshot.url,
                    this.bufferSaveScreenshot.entityID
                  );
                  this.bufferSaveScreenshot = void 0;
                }
                return [2];
            }
          });
        });
      }),
      
      (A.prototype.viewingCreated = function(A) {
        this.throttledSaveScreenshot(A.url, A.entityID);
      }),
      
      (A.prototype.saveScreenshot = function(A, e) {
        if (this.policyEnabled) {
          if (this.singleScreenshotTaken && h(A)) return;
          this.singleScreenshotTaken = !0;
          if (this.useNativeScreenshots) {
            this.saveScreenshotNative(A, e);
          } else {
            this.saveScreenshotHTML2Canvas(A, e);
          }
        } else {
          this.bufferSaveScreenshot = { url: A, entityID: e };
        }
      }),
      
      (A.prototype.saveScreenshotNative = function(A, e) {
        var t = this;
        var n = Date.now();
        var r = function(A) {
          t.metrics.increment("contextual.localstorage.screenshot_native.error");
          t.logger.withError(A).error("Error requesting localstorage native screenshot");
        };
        var i = new URLSearchParams({ entityID: e });
        
        this.useNativeScreenshots &&
          a
            .getFetch()(o.LOCALSTORAGE_ENDPOINT + "/screenshots/capture?" + i.toString(), {
              method: "GET",
            })
            .then(function(A) {
              if (200 != A.status) {
                r(new Error(A.statusText));
              } else {
                var e = Date.now() - n;
                t.metrics.histogram("contextual.take_screenshot_native.latency_ms", e);
              }
            })
            .catch(function(A) {
              r(A);
            });
      }),
      
      (A.prototype.saveScreenshotHTML2Canvas = function(A, e) {
        var t = this;
        var n = Date.now();
        var r = function(A) {
          t.metrics.increment("contextual.localstorage.screenshot.error");
          t.logger.withError(A).error("Error requesting localstorage screenshot");
        };
        
        i.takeScreenshot(
          function(i) {
            var s = Date.now() - n;
            t.metrics.histogram("contextual.take_screenshot.latency_ms", s);
            
            if (s > 2e3) {
              t.logger
                .withFields({ url: A, latency_ms: s })
                .info("screenshot is taken");
            } else {
              t.logger
                .withFields({ url: A, latency_ms: s })
                .debug("screenshot is taken");
            }
            
            var o = new URLSearchParams({ entityID: e });
            
            a
              .getFetch()(o.LOCALSTORAGE_ENDPOINT + "/screenshots/save?" + o.toString(), {
                method: "POST",
                body: new Blob([i], { type: "text/plain" }),
              })
              .then(function(A) {
                if (200 != A.status) r(new Error(A.statusText));
              })
              .catch(function(A) {
                r(A);
              });
          },
          function(A) {
            if (A !== i.blocklistError) {
              t.metrics.increment("contextual.take_screenshot.error");
              t.logger.withError(A).error("Error taking screenshot");
            }
          }
        );
      }),
      
      A
    );
  }();
  
  function h(A) {
    return s.isURLInTargets(o.SCREENSHOT_SINGLE_SHOT_HOSTNAME_LIST, A);
  }
  
  e.ContextualManager = c;
},
