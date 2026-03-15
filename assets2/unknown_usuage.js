var n = t(33),
  r = t(34),
  i = t(35);

function s() {
  return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}

function o(A, e) {
  if (s() < e) throw new RangeError("Invalid typed array length");
  return a.TYPED_ARRAY_SUPPORT
    ? ((A = new Uint8Array(e)).__proto__ = a.prototype)
    : (null === A && (A = new a(e)), (A.length = e)), A;
}

function a(A, e, t) {
  if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(A, e, t);
  if ("number" == typeof A) {
    if ("string" == typeof e)
      throw new Error("If encoding is specified then the first argument must be a string");
    return u(this, A);
  }
  return c(this, A, e, t);
}

function c(A, e, t, n) {
  if ("number" == typeof e)
    throw new TypeError('"value" argument must not be a number');
  return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
    ? (function (A, e, t, n) {
        if (e.byteLength, t < 0 || e.byteLength < t)
          throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < t + (n || 0))
          throw new RangeError("'length' is out of bounds");
        e =
          void 0 === t && void 0 === n
            ? new Uint8Array(e)
            : void 0 === n
            ? new Uint8Array(e, t)
            : new Uint8Array(e, t, n);
        return a.TYPED_ARRAY_SUPPORT
          ? ((A = e).__proto__ = a.prototype)
          : h(A, e);
      })(A, e, t, n)
    : "string" == typeof e
    ? (function (A, e, t) {
        "string" == typeof t && "" !== t || (t = "utf8");
        if (!a.isEncoding(t))
          throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | d(e, t),
          r = (A = o(A, n)).write(e, t);
        return r !== n && (A = A.slice(0, r)), A;
      })(A, e, t)
    : (function (A, e) {
        if (a.isBuffer(e)) {
          var t = 0 | w(e.length);
          return 0 === (A = o(A, t)).length ? A : (e.copy(A, 0, 0, t), A);
        }
        if (e) {
          if (
            "undefined" != typeof ArrayBuffer &&
            e.buffer instanceof ArrayBuffer &&
            "length" in e
          )
            return "number" != typeof e.length || (n = e.length) != n
              ? o(A, 0)
              : h(A, e);
          if ("Buffer" === e.type && i(e.data)) return h(A, e.data);
        }
        var n;
        throw new TypeError(
          "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
        );
      })(A, e);
}

function l(A) {
  if ("number" != typeof A) throw new TypeError('"size" argument must be a number');
  if (A < 0) throw new RangeError('"size" argument must not be negative');
}

function u(A, e) {
  if ((l(e), (A = o(A, e < 0 ? 0 : 0 | w(e))), !a.TYPED_ARRAY_SUPPORT))
    for (var t = 0; t < e; ++t) A[t] = 0;
  return A;
}

function h(A, e) {
  var t = e.length < 0 ? 0 : 0 | w(e.length);
  A = o(A, t);
  for (var n = 0; n < t; n += 1) A[n] = 255 & e[n];
  return A;
}

function w(A) {
  if (A >= s())
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" +
        s().toString(16) +
        " bytes"
    );
  return 0 | A;
}

function d(A, e) {
  if (a.isBuffer(A)) return A.length;
  if (
    "undefined" != typeof ArrayBuffer &&
    "function" == typeof ArrayBuffer.isView &&
    (ArrayBuffer.isView(A) || A instanceof ArrayBuffer)
  )
    return A.byteLength;
  "string" != typeof A && (A = "" + A);
  var t = A.length;
  if (0 === t) return 0;
  for (var n = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
      case void 0:
        return R(A).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * t;
      case "hex":
        return t >>> 1;
      case "base64":
        return P(A).length;
      default:
        if (n) return R(A).length;
        e = ("" + e).toLowerCase(), (n = !0);
    }
}

function f(A, e, t) {
  var n = !1;
  if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
  if ((void 0 === t || t > this.length) && (t = this.length), t <= 0) return "";
  if ((t >>>= 0) <= (e >>>= 0)) return "";
  for (A || (A = "utf8"); ; )
    switch (A) {
      case "hex":
        return I(this, e, t);
      case "utf8":
      case "utf-8":
        return _(this, e, t);
      case "ascii":
        return F(this, e, t);
      case "latin1":
      case "binary":
        return E(this, e, t);
      case "base64":
        return U(this, e, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return H(this, e, t);
      default:
        if (n) throw new TypeError("Unknown encoding: " + A);
        A = (A + "").toLowerCase(), (n = !0);
    }
}

function g(A, e, t) {
  var n = A[e];
  (A[e] = A[t]), (A[t] = n);
}

function B(A, e, t, n, r) {
  if (0 === A.length) return -1;
  if (
    ("string" == typeof t ? ((n = t), (t = 0)) : t > 2147483647
      ? (t = 2147483647)
      : t < -2147483648 && (t = -2147483648),
    (t = +t),
    isNaN(t) && (t = r ? 0 : A.length - 1),
    t < 0 && (t = A.length + t),
    t >= A.length)
  ) {
    if (r) return -1;
    t = A.length - 1;
  } else if (t < 0) {
    if (!r) return -1;
    t = 0;
  }
  if (
    ("string" == typeof e && (e = a.from(e, n)),
    a.isBuffer(e))
  )
    return 0 === e.length ? -1 : p(A, e, t, n, r);
  if ("number" == typeof e)
    return (
      (e &= 255),
      a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
        ? r
          ? Uint8Array.prototype.indexOf.call(A, e, t)
          : Uint8Array.prototype.lastIndexOf.call(A, e, t)
        : p(A, [e], t, n, r)
    );
  throw new TypeError("val must be string, number or Buffer");
}

function p(A, e, t, n, r) {
  var i,
    s = 1,
    o = A.length,
    a = e.length;
  if (
    (void 0 !== n &&
      ("ucs2" === (n = String(n).toLowerCase()) ||
        "ucs-2" === n ||
        "utf16le" === n ||
        "utf-16le" === n)) &&
    (A.length < 2 || e.length < 2)
  )
    return -1;
  (s = 2), (o /= 2), (a /= 2), (t /= 2);
  function c(A, e) {
    return 1 === s ? A[e] : A.readUInt16BE(e * s);
  }
  if (r) {
    var l = -1;
    for (i = t; i < o; i++)
      if (c(A, i) === c(e, -1 === l ? 0 : i - l)) {
        if (-1 === l && (l = i), i - l + 1 === a) return l * s;
      } else -1 !== l && (i -= i - l), (l = -1);
  } else
    for (t + a > o && (t = o - a), i = t; i >= 0; i--) {
      for (var u = !0, h = 0; h < a; h++)
        if (c(A, i + h) !== c(e, h)) {
          u = !1;
          break;
        }
      if (u) return i;
    }
  return -1;
}

function m(A, e, t, n) {
  t = Number(t) || 0;
  var r = A.length - t;
  n ? ((n = Number(n)) > r && (n = r)) : (n = r);
  var i = e.length;
  if (i % 2 != 0) throw new TypeError("Invalid hex string");
  n > i / 2 && (n = i / 2);
  for (var s = 0; s < n; ++s) {
    var o = parseInt(e.substr(2 * s, 2), 16);
    if (isNaN(o)) return s;
    A[t + s] = o;
  }
  return s;
}

function b(A, e, t, n) {
  return N(R(e, A.length - t), A, t, n);
}

function Q(A, e, t, n) {
  return N(
    (function (A) {
      for (var e = [], t = 0; t < A.length; ++t) e.push(255 & A.charCodeAt(t));
      return e;
    })(e),
    A,
    t,
    n
  );
}

function C(A, e, t, n) {
  return Q(A, e, t, n);
}

function y(A, e, t, n) {
  return N(P(e), A, t, n);
}

function v(A, e, t, n) {
  return N(
    (function (A, e) {
      for (var t, n, r, i = [], s = 0; s < A.length && !((e -= 2) < 0); ++s)
        (t = A.charCodeAt(s)), (n = t >> 8), (r = t % 256), i.push(r), i.push(n);
      return i;
    })(e, A.length - t),
    A,
    t,
    n
  );
}

function U(A, e, t) {
  return 0 === e && t === A.length
    ? n.fromByteArray(A)
    : n.fromByteArray(A.slice(e, t));
}

function _(A, e, t) {
  t = Math.min(A.length, t);
  for (var n = [], r = e; r < t; ) {
    var i,
      s,
      o,
      a,
      c = A[r],
      l = null,
      u = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
    if (r + u <= t)
      switch (u) {
        case 1:
          c < 128 && (l = c);
          break;
        case 2:
          128 == (192 & (i = A[r + 1])) &&
            (a = ((31 & c) << 6) | (63 & i)) > 127 &&
            (l = a);
          break;
        case 3:
          (i = A[r + 1]),
            (s = A[r + 2]),
            128 == (192 & i) &&
              128 == (192 & s) &&
              (a = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)) > 2047 &&
              (a < 55296 || a > 57343) &&
              (l = a);
          break;
        case 4:
          (i = A[r + 1]),
            (s = A[r + 2]),
            (o = A[r + 3]),
            128 == (192 & i) &&
              128 == (192 & s) &&
              128 == (192 & o) &&
              (a =
                ((15 & c) << 18) |
                ((63 & i) << 12) |
                ((63 & s) << 6) |
                (63 & o)) > 65535 &&
              a < 1114112 &&
              (l = a);
      }
    null === l
      ? ((l = 65533), (u = 1))
      : l > 65535 &&
        ((l -= 65536),
        n.push(((l >>> 10) & 1023) | 55296),
        (l = 56320 | (1023 & l))),
      n.push(l),
      (r += u);
  }
  return (function (A) {
    var e = A.length;
    if (e <= 4096) return String.fromCharCode.apply(String, A);
    var t = "",
      n = 0;
    for (; n < e; )
      t += String.fromCharCode.apply(String, A.slice(n, (n += 4096)));
    return t;
  })(n);
}

e.Buffer = a;
e.SlowBuffer = function (A) {
  +A != A && (A = 0);
  return a.alloc(+A);
};
e.INSPECT_MAX_BYTES = 50;
a.TYPED_ARRAY_SUPPORT =
  void 0 !== A.TYPED_ARRAY_SUPPORT
    ? A.TYPED_ARRAY_SUPPORT
    : (function () {
        try {
          var A = new Uint8Array(1);
          return (
            (A.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            42 === A.foo() &&
              "function" == typeof A.subarray &&
              0 === A.subarray(1, 1).byteLength
          );
        } catch (A) {
          return !1;
        }
      })();
e.kMaxLength = s();
a.poolSize = 8192;
a._augment = function (A) {
  return (A.__proto__ = a.prototype), A;
};
a.from = function (A, e, t) {
  return c(null, A, e, t);
};
a.TYPED_ARRAY_SUPPORT &&
  ((a.prototype.__proto__ = Uint8Array.prototype),
  (a.__proto__ = Uint8Array),
  "undefined" != typeof Symbol &&
    Symbol.species &&
    a[Symbol.species] === a &&
    Object.defineProperty(a, Symbol.species, {
      value: null,
      configurable: !0,
    }));
a.alloc = function (A, e, t) {
  return (function (A, e, t, n) {
    return l(e), e <= 0 ? o(A, e) : void 0 !== t
      ? "string" == typeof n
        ? o(A, e).fill(t, n)
        : o(A, e).fill(t)
      : o(A, e);
  })(null, A, e, t);
};
a.allocUnsafe = function (A) {
  return u(null, A);
};
a.allocUnsafeSlow = function (A) {
  return u(null, A);
};
a.isBuffer = function (A) {
  return !(null == A || !A._isBuffer);
};
a.compare = function (A, e) {
  if (!a.isBuffer(A) || !a.isBuffer(e))
    throw new TypeError("Arguments must be Buffers");
  if (A === e) return 0;
  for (var t = A.length, n = e.length, r = 0, i = Math.min(t, n); r < i; ++r)
    if (A[r] !== e[r]) {
      t = A[r], n = e[r];
      break;
    }
  return t < n ? -1 : n < t ? 1 : 0;
};
a.isEncoding = function (A) {
  switch (String(A).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
a.concat = function (A, e) {
  if (!i(A)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === A.length) return a.alloc(0);
  var t;
  if (void 0 === e)
    for (e = 0, t = 0; t < A.length; ++t) e += A[t].length;
  var n = a.allocUnsafe(e),
    r = 0;
  for (t = 0; t < A.length; ++t) {
    var s = A[t];
    if (!a.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
    s.copy(n, r), (r += s.length);
  }
  return n;
};
a.byteLength = d;
a.prototype._isBuffer = !0;
a.prototype.swap16 = function () {
  var A = this.length;
  if (A % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var e = 0; e < A; e += 2) g(this, e, e + 1);
  return this;
};
a.prototype.swap32 = function () {
  var A = this.length;
  if (A % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var e = 0; e < A; e += 4)
    g(this, e, e + 3), g(this, e + 1, e + 2);
  return this;
};
a.prototype.swap64 = function () {
  var A = this.length;
  if (A % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var e = 0; e < A; e += 8)
    g(this, e, e + 7),
      g(this, e + 1, e + 6),
      g(this, e + 2, e + 5),
      g(this, e + 3, e + 4);
  return this;
};
a.prototype.toString = function () {
  var A = 0 | this.length;
  return 0 === A ? "" : 0 === arguments.length ? _(this, 0, A) : f.apply(this, arguments);
};
a.prototype.equals = function (A) {
  if (!a.isBuffer(A)) throw new TypeError("Argument must be a Buffer");
  return this === A || 0 === a.compare(this, A);
};
a.prototype.inspect = function () {
  var A = "",
    t = e.INSPECT_MAX_BYTES;
  return (
    this.length > 0 &&
      ((A = this.toString("hex", 0, t).match(/.{2}/g).join(" ")),
      this.length > t && (A += " ... ")),
    "<Buffer " + A + ">"
  );
};
a.prototype.compare = function (A, e, t, n, r) {
  if (!a.isBuffer(A)) throw new TypeError("Argument must be a Buffer");
  if (
    ((e = void 0 === e ? 0 : e),
    (t = void 0 === t ? (A ? A.length : 0) : t),
    (n = void 0 === n ? 0 : n),
    (r = void 0 === r ? this.length : r),
    e < 0 || t > A.length || n < 0 || r > this.length)
  )
    throw new RangeError("out of range index");
  if (n >= r && e >= t) return 0;
  if (n >= r) return -1;
  if (e >= t) return 1;
  if (this === A) return 0;
  for (
    var i = (r >>>= 0) - (n >>>= 0), s = (t >>>= 0) - (e >>>= 0), o = Math.min(i, s), c = this.slice(n, r), l = A.slice(e, t), u = 0;
    u < o;
    ++u
  )
    if (c[u] !== l[u]) {
      i = c[u], s = l[u];
      break;
    }
  return i < s ? -1 : s < i ? 1 : 0;
};
a.prototype.includes = function (A, e, t) {
  return -1 !== this.indexOf(A, e, t);
};
a.prototype.indexOf = function (A, e, t) {
  return B(this, A, e, t, !0);
};
a.prototype.lastIndexOf = function (A, e, t) {
  return B(this, A, e, t, !1);
};
a.prototype.write = function (A, e, t, n) {
  if (void 0 === e) (n = "utf8"), (t = this.length), (e = 0);
  else if (void 0 === t && "string" == typeof e) (n = e), (t = this.length), (e = 0);
  else {
    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    (e |= 0),
      isFinite(t) ? ((t |= 0), void 0 === n && (n = "utf8")) : ((n = t), (t = void 0));
  }
  var r = this.length - e;
  if ((void 0 === t || t > r) && (t = r), (A.length > 0 && (t < 0 || e < 0)) || e > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  n || (n = "utf8");
  for (var i = !1; ; )
    switch (n) {
      case "hex":
        return m(this, A, e, t);
      case "utf8":
      case "utf-8":
        return b(this, A, e, t);
      case "ascii":
        return Q(this, A, e, t);
      case "latin1":
      case "binary":
        return C(this, A, e, t);
      case "base64":
        return y(this, A, e, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return v(this, A, e, t);
      default:
        if (i) throw new TypeError("Unknown encoding: " + n);
        n = ("" + n).toLowerCase(), (i = !0);
    }
};
a.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0),
  };
};

function F(A, e, t) {
  var n = "";
  t = Math.min(A.length, t);
  for (var r = e; r < t; ++r) n += String.fromCharCode(127 & A[r]);
  return n;
}

function E(A, e, t) {
  var n = "";
  t = Math.min(A.length, t);
  for (var r = e; r < t; ++r) n += String.fromCharCode(A[r]);
  return n;
}

function I(A, e, t) {
  var n = A.length;
  (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
  for (var r = "", i = e; i < t; ++i) r += M(A[i]);
  return r;
}

function H(A, e, t) {
  for (var n = A.slice(e, t), r = "", i = 0; i < n.length; i += 2)
    r += String.fromCharCode(n[i] + 256 * n[i + 1]);
  return r;
}

function k(A, e, t) {
  if (A % 1 != 0 || A < 0) throw new RangeError("offset is not uint");
  if (A + e > t) throw new RangeError("Trying to access beyond buffer length");
}

function S(A, e, t, n, r, i) {
  if (!a.isBuffer(A)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > r || e < i) throw new RangeError('"value" argument is out of bounds');
  if (t + n > A.length) throw new RangeError("Index out of range");
}

function T(A, e, t, n) {
  e < 0 && (e = 65535 + e + 1);
  for (var r = 0, i = Math.min(A.length - t, 2); r < i; ++r)
    A[t + r] = (e & (255 << (8 * (n ? r : 1 - r)))) >>> (8 * (n ? r : 1 - r));
}

function x(A, e, t, n) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var r = 0, i = Math.min(A.length - t, 4); r < i; ++r)
    A[t + r] = (e >>> (8 * (n ? r : 3 - r))) & 255;
}

function L(A, e, t, n, r, i) {
  if (t + n > A.length) throw new RangeError("Index out of range");
  if (t < 0) throw new RangeError("Index out of range");
}

function O(A, e, t, n, i) {
  return i || L(A, 0, t, 4), r.write(A, e, t, n, 23, 4), t + 4;
}

function D(A, e, t, n, i) {
  return i || L(A, 0, t, 8), r.write(A, e, t, n, 52, 8), t + 8;
}

a.prototype.slice = function (A, e) {
  var t,
    n = this.length;
  if (
    ((A = ~~A) < 0 ? (A += n) < 0 && (A = 0) : A > n && (A = n),
    (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
    e < A && (e = A),
    a.TYPED_ARRAY_SUPPORT)
  )
    (t = this.subarray(A, e)).__proto__ = a.prototype;
  else {
    var r = e - A;
    t = new a(r, void 0);
    for (var i = 0; i < r; ++i) t[i] = this[i + A];
  }
  return t;
};
a.prototype.readUIntLE = function (A, e, t) {
  (A |= 0), (e |= 0), t || k(A, e, this.length);
  for (var n = this[A], r = 1, i = 0; ++i < e && (r *= 256); ) n += this[A + i] * r;
  return n;
};
a.prototype.readUIntBE = function (A, e, t) {
  (A |= 0), (e |= 0), t || k(A, e, this.length);
  for (var n = this[A + --e], r = 1; e > 0 && (r *= 256); ) n += this[A + --e] * r;
  return n;
};
a.prototype.readUInt8 = function (A, e) {
  return e || k(A, 1, this.length), this[A];
};
a.prototype.readUInt16LE = function (A, e) {
  return e || k(A, 2, this.length), this[A] | (this[A + 1] << 8);
};
a.prototype.readUInt16BE = function (A, e) {
  return e || k(A, 2, this.length), (this[A] << 8) | this[A + 1];
};
a.prototype.readUInt32LE = function (A, e) {
  return (
    e || k(A, 4, this.length),
    (this[A] | (this[A + 1] << 8) | (this[A + 2] << 16)) + 16777216 * this[A + 3]
  );
};
a.prototype.readUInt32BE = function (A, e) {
  return (
    e || k(A, 4, this.length),
    16777216 * this[A] + ((this[A + 1] << 16) | (this[A + 2] << 8) | this[A + 3])
  );
};
a.prototype.readIntLE = function (A, e, t) {
  (A |= 0), (e |= 0), t || k(A, e, this.length);
  for (var n = this[A], r = 1, i = 0; ++i < e && (r *= 256); ) n += this[A + i] * r;
  return n >= (r *= 128) && (n -= Math.pow(2, 8 * e)), n;
};
a.prototype.readIntBE = function (A, e, t) {
  (A |= 0), (e |= 0), t || k(A, e, this.length);
  for (var n = e, r = 1, i = this[A + --n]; n > 0 && (r *= 256); ) i += this[A + --n] * r;
  return i >= (r *= 128) && (i -= Math.pow(2, 8 * e)), i;
};
a.prototype.readInt8 = function (A, e) {
  return e || k(A, 1, this.length), 128 & this[A] ? -1 * (255 - this[A] + 1) : this[A];
};
a.prototype.readInt16LE = function (A, e) {
  e || k(A, 2, this.length);
  var t = this[A] | (this[A + 1] << 8);
  return 32768 & t ? 4294901760 | t : t;
};
a.prototype.readInt16BE = function (A, e) {
  e || k(A, 2, this.length);
  var t = this[A + 1] | (this[A] << 8);
  return 32768 & t ? 4294901760 | t : t;
};
a.prototype.readInt32LE = function (A, e) {
  return e || k(A, 4, this.length), this[A] | (this[A + 1] << 8) | (this[A + 2] << 16) | (this[A + 3] << 24);
};
a.prototype.readInt32BE = function (A, e) {
  return e || k(A, 4, this.length), (this[A] << 24) | (this[A + 1] << 16) | (this[A + 2] << 8) | this[A + 3];
};
a.prototype.readFloatLE = function (A, e) {
  return e || k(A, 4, this.length), r.read(this, A, !0, 23, 4);
};
a.prototype.readFloatBE = function (A, e) {
  return e || k(A, 4, this.length), r.read(this, A, !1, 23, 4);
};
a.prototype.readDoubleLE = function (A, e) {
  return e || k(A, 8, this.length), r.read(this, A, !0, 52, 8);
};
a.prototype.readDoubleBE = function (A, e) {
  return e || k(A, 8, this.length), r.read(this, A, !1, 52, 8);
};
a.prototype.writeUIntLE = function (A, e, t, n) {
  (A = +A), (e |= 0), (t |= 0), n || S(this, A, e, t, Math.pow(2, 8 * t) - 1, 0);
  var r = 1,
    i = 0;
  for (this[e] = 255 & A; ++i < t && (r *= 256); ) this[e + i] = (A / r) & 255;
  return e + t;
};
a.prototype.writeUIntBE = function (A, e, t, n) {
  (A = +A), (e |= 0), (t |= 0), n || S(this, A, e, t, Math.pow(2, 8 * t) - 1, 0);
  var r = t - 1,
    i = 1;
  for (this[e + r] = 255 & A; --r >= 0 && (i *= 256); ) this[e + r] = (A / i) & 255;
  return e + t;
};
a.prototype.writeUInt8 = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 1, 255, 0),
    a.TYPED_ARRAY_SUPPORT || (A = Math.floor(A)),
    (this[e] = 255 & A),
    e + 1
  );
};
a.prototype.writeUInt16LE = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 2, 65535, 0),
    a.TYPED_ARRAY_SUPPORT
      ? ((this[e] = 255 & A), (this[e + 1] = A >>> 8))
      : T(this, A, e, !0),
    e + 2
  );
};
a.prototype.writeUInt16BE = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 2, 65535, 0),
    a.TYPED_ARRAY_SUPPORT
      ? ((this[e] = A >>> 8), (this[e + 1] = 255 & A))
      : T(this, A, e, !1),
    e + 2
  );
};
a.prototype.writeUInt32LE = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 4, 4294967295, 0),
    a.TYPED_ARRAY_SUPPORT
      ? ((this[e + 3] = A >>> 24),
        (this[e + 2] = A >>> 16),
        (this[e + 1] = A >>> 8),
        (this[e] = 255 & A))
      : x(this, A, e, !0),
    e + 4
  );
};
a.prototype.writeUInt32BE = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 4, 4294967295, 0),
    a.TYPED_ARRAY_SUPPORT
      ? ((this[e] = A >>> 24),
        (this[e + 1] = A >>> 16),
        (this[e + 2] = A >>> 8),
        (this[e + 3] = 255 & A))
      : x(this, A, e, !1),
    e + 4
  );
};
a.prototype.writeIntLE = function (A, e, t, n) {
  if (((A = +A), (e |= 0), !n)) {
    var r = Math.pow(2, 8 * t - 1);
    S(this, A, e, t, r - 1, -r);
  }
  var i = 0,
    s = 1,
    o = 0;
  for (this[e] = 255 & A; ++i < t && (s *= 256); )
    A < 0 && 0 === o && 0 !== this[e + i - 1] && (o = 1),
      (this[e + i] = (((A / s) >> 0) - o) & 255);
  return e + t;
};
a.prototype.writeIntBE = function (A, e, t, n) {
  if (((A = +A), (e |= 0), !n)) {
    var r = Math.pow(2, 8 * t - 1);
    S(this, A, e, t, r - 1, -r);
  }
  var i = t - 1,
    s = 1,
    o = 0;
  for (this[e + i] = 255 & A; --i >= 0 && (s *= 256); )
    A < 0 && 0 === o && 0 !== this[e + i + 1] && (o = 1),
      (this[e + i] = (((A / s) >> 0) - o) & 255);
  return e + t;
};
a.prototype.writeInt8 = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 1, 127, -128),
    a.TYPED_ARRAY_SUPPORT || (A = Math.floor(A)),
    A < 0 && (A = 255 + A + 1),
    (this[e] = 255 & A),
    e + 1
  );
};
a.prototype.writeInt16LE = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 2, 32767, -32768),
    a.TYPED_ARRAY_SUPPORT
      ? ((this[e] = 255 & A), (this[e + 1] = A >>> 8))
      : T(this, A, e, !0),
    e + 2
  );
};
a.prototype.writeInt16BE = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 2, 32767, -32768),
    a.TYPED_ARRAY_SUPPORT
      ? ((this[e] = A >>> 8), (this[e + 1] = 255 & A))
      : T(this, A, e, !1),
    e + 2
  );
};
a.prototype.writeInt32LE = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 4, 2147483647, -2147483648),
    a.TYPED_ARRAY_SUPPORT
      ? ((this[e] = 255 & A),
        (this[e + 1] = A >>> 8),
        (this[e + 2] = A >>> 16),
        (this[e + 3] = A >>> 24))
      : x(this, A, e, !0),
    e + 4
  );
};
a.prototype.writeInt32BE = function (A, e, t) {
  return (
    (A = +A),
    (e |= 0),
    t || S(this, A, e, 4, 2147483647, -2147483648),
    A < 0 && (A = 4294967295 + A + 1),
    a.TYPED_ARRAY_SUPPORT
      ? ((this[e] = A >>> 24),
        (this[e + 1] = A >>> 16),
        (this[e + 2] = A >>> 8),
        (this[e + 3] = 255 & A))
      : x(this, A, e, !1),
    e + 4
  );
};
a.prototype.writeFloatLE = function (A, e, t) {
  return O(this, A, e, !0, t);
};
