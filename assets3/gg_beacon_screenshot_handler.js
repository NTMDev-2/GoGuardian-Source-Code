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
  
  var t = e.create = function(A, e, t, n, r) { // This function here is most likely to create one of its cookies, gg_policy or gg_entities
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
