// Lines 2001 - 3100
// Interesting lines: 3059
}))
            }
        },
        ut = function(A) {
            return PA(A) || zA(A)
        },
        ht = function(A) {
            return {
                name: "border-".concat(A, "-color"),
                initialValue: "transparent",
                prefix: !1,
                type: 3,
                format: "color"
            }
        },
        wt = ht("top"),
        dt = ht("right"),
        ft = ht("bottom"),
        gt = ht("left"),
        Bt = function(A) {
            return {
                name: "border-radius-".concat(A),
                initialValue: "0 0",
                prefix: !1,
                type: 1,
                parse: function(A, e) {
                    return jA(e.filter(zA))
                }
            }
        },
        pt = Bt("top-left"),
        mt = Bt("top-right"),
        bt = Bt("bottom-right"),
        Qt = Bt("bottom-left"),
        Ct = function(A) {
            return {
                name: "border-".concat(A, "-style"),
                initialValue: "solid",
                prefix: !1,
                type: 2,
                parse: function(A, e) {
                    switch (e) {
                        case "none":
                            return 0;
                        case "dashed":
                            return 2;
                        case "dotted":
                            return 3;
                        case "double":
                            return 4
                    }
                    return 1
                }
            }
        },
        yt = Ct("top"),
        vt = Ct("right"),
        Ut = Ct("bottom"),
        _t = Ct("left"),
        Ft = function(A) {
            return {
                name: "border-".concat(A, "-width"),
                initialValue: "0",
                type: 0,
                prefix: !1,
                parse: function(A, e) {
                    return MA(e) ? e.number : 0
                }
            }
        },
        Et = Ft("top"),
        It = Ft("right"),
        Ht = Ft("bottom"),
        kt = Ft("left"),
        St = {
            name: "color",
            initialValue: "transparent",
            prefix: !1,
            type: 3,
            format: "color"
        },
        Tt = {
            name: "direction",
            initialValue: "ltr",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "rtl":
                        return 1;
                    case "ltr":
                    default:
                        return 0
                }
            }
        },
        xt = {
            name: "display",
            initialValue: "inline-block",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.filter(PA).reduce((function(A, e) {
                    return A | Lt(e.value)
                }), 0)
            }
        },
        Lt = function(A) {
            switch (A) {
                case "block":
                case "-webkit-box":
                    return 2;
                case "inline":
                    return 4;
                case "run-in":
                    return 8;
                case "flow":
                    return 16;
                case "flow-root":
                    return 32;
                case "table":
                    return 64;
                case "flex":
                case "-webkit-flex":
                    return 128;
                case "grid":
                case "-ms-grid":
                    return 256;
                case "ruby":
                    return 512;
                case "subgrid":
                    return 1024;
                case "list-item":
                    return 2048;
                case "table-row-group":
                    return 4096;
                case "table-header-group":
                    return 8192;
                case "table-footer-group":
                    return 16384;
                case "table-row":
                    return 32768;
                case "table-cell":
                    return 65536;
                case "table-column-group":
                    return 131072;
                case "table-column":
                    return 262144;
                case "table-caption":
                    return 524288;
                case "ruby-base":
                    return 1048576;
                case "ruby-text":
                    return 2097152;
                case "ruby-base-container":
                    return 4194304;
                case "ruby-text-container":
                    return 8388608;
                case "contents":
                    return 16777216;
                case "inline-block":
                    return 33554432;
                case "inline-list-item":
                    return 67108864;
                case "inline-table":
                    return 134217728;
                case "inline-flex":
                    return 268435456;
                case "inline-grid":
                    return 536870912
            }
            return 0
        },
        Ot = {
            name: "float",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "left":
                        return 1;
                    case "right":
                        return 2;
                    case "inline-start":
                        return 3;
                    case "inline-end":
                        return 4
                }
                return 0
            }
        },
        Dt = {
            name: "letter-spacing",
            initialValue: "0",
            prefix: !1,
            type: 0,
            parse: function(A, e) {
                return 20 === e.type && "normal" === e.value ? 0 : 17 === e.type ? e.number : 15 === e.type ? e.number : 0
            }
        };
    ! function(A) {
        A.NORMAL = "normal", A.STRICT = "strict"
    }(ct || (ct = {}));
    var Kt, Mt = {
            name: "line-break",
            initialValue: "normal",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "strict":
                        return ct.STRICT;
                    case "normal":
                    default:
                        return ct.NORMAL
                }
            }
        },
        Rt = {
            name: "line-height",
            initialValue: "normal",
            prefix: !1,
            type: 4
        },
        Pt = function(A, e) {
            return PA(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : zA(A) ? ee(A, e) : e
        },
        Nt = {
            name: "list-style-image",
            initialValue: "none",
            type: 0,
            prefix: !1,
            parse: function(A, e) {
                return 20 === e.type && "none" === e.value ? null : tt(A, e)
            }
        },
        Vt = {
            name: "list-style-position",
            initialValue: "outside",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "inside":
                        return 0;
                    case "outside":
                    default:
                        return 1
                }
            }
        },
        Gt = {
            name: "list-style-type",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "disc":
                        return 0;
                    case "circle":
                        return 1;
                    case "square":
                        return 2;
                    case "decimal":
                        return 3;
                    case "cjk-decimal":
                        return 4;
                    case "decimal-leading-zero":
                        return 5;
                    case "lower-roman":
                        return 6;
                    case "upper-roman":
                        return 7;
                    case "lower-greek":
                        return 8;
                    case "lower-alpha":
                        return 9;
                    case "upper-alpha":
                        return 10;
                    case "arabic-indic":
                        return 11;
                    case "armenian":
                        return 12;
                    case "bengali":
                        return 13;
                    case "cambodian":
                        return 14;
                    case "cjk-earthly-branch":
                        return 15;
                    case "cjk-heavenly-stem":
                        return 16;
                    case "cjk-ideographic":
                        return 17;
                    case "devanagari":
                        return 18;
                    case "ethiopic-numeric":
                        return 19;
                    case "georgian":
                        return 20;
                    case "gujarati":
                        return 21;
                    case "gurmukhi":
                        return 22;
                    case "hebrew":
                        return 52;
                    case "hiragana":
                        return 23;
                    case "hiragana-iroha":
                        return 24;
                    case "japanese-formal":
                        return 25;
                    case "japanese-informal":
                        return 26;
                    case "kannada":
                        return 27;
                    case "katakana":
                        return 28;
                    case "katakana-iroha":
                        return 29;
                    case "khmer":
                        return 30;
                    case "korean-hangul-formal":
                        return 31;
                    case "korean-hanja-formal":
                        return 32;
                    case "korean-hanja-informal":
                        return 33;
                    case "lao":
                        return 34;
                    case "lower-armenian":
                        return 35;
                    case "malayalam":
                        return 36;
                    case "mongolian":
                        return 37;
                    case "myanmar":
                        return 38;
                    case "oriya":
                        return 39;
                    case "persian":
                        return 40;
                    case "simp-chinese-formal":
                        return 41;
                    case "simp-chinese-informal":
                        return 42;
                    case "tamil":
                        return 43;
                    case "telugu":
                        return 44;
                    case "thai":
                        return 45;
                    case "tibetan":
                        return 46;
                    case "trad-chinese-formal":
                        return 47;
                    case "trad-chinese-informal":
                        return 48;
                    case "upper-armenian":
                        return 49;
                    case "disclosure-open":
                        return 50;
                    case "disclosure-closed":
                        return 51;
                    case "none":
                    default:
                        return -1
                }
            }
        },
        Yt = function(A) {
            return {
                name: "margin-".concat(A),
                initialValue: "0",
                prefix: !1,
                type: 4
            }
        },
        Xt = Yt("top"),
        Jt = Yt("right"),
        Wt = Yt("bottom"),
        zt = Yt("left"),
        jt = {
            name: "overflow",
            initialValue: "visible",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.filter(PA).map((function(A) {
                    switch (A.value) {
                        case "hidden":
                            return 1;
                        case "scroll":
                            return 2;
                        case "clip":
                            return 3;
                        case "auto":
                            return 4;
                        case "visible":
                        default:
                            return 0
                    }
                }))
            }
        },
        Zt = {
            name: "overflow-wrap",
            initialValue: "normal",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "break-word":
                        return "break-word";
                    case "normal":
                    default:
                        return "normal"
                }
            }
        },
        qt = function(A) {
            return {
                name: "padding-".concat(A),
                initialValue: "0",
                prefix: !1,
                type: 3,
                format: "length-percentage"
            }
        },
        $t = qt("top"),
        An = qt("right"),
        en = qt("bottom"),
        tn = qt("left"),
        nn = {
            name: "text-align",
            initialValue: "left",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "right":
                        return 2;
                    case "center":
                    case "justify":
                        return 1;
                    case "left":
                    default:
                        return 0
                }
            }
        },
        rn = {
            name: "position",
            initialValue: "static",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "relative":
                        return 1;
                    case "absolute":
                        return 2;
                    case "fixed":
                        return 3;
                    case "sticky":
                        return 4
                }
                return 0
            }
        },
        sn = {
            name: "text-shadow",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function(A, e) {
                return 1 === e.length && VA(e[0], "none") ? [] : XA(e).map((function(e) {
                    for (var t = {
                            color: Xe.TRANSPARENT,
                            offsetX: ZA,
                            offsetY: ZA,
                            blur: ZA
                        }, n = 0, r = 0; r < e.length; r++) {
                        var i = e[r];
                        WA(i) ? (0 === n ? t.offsetX = i : 1 === n ? t.offsetY = i : t.blur = i, n++) : t.color = Ke(A, i)
                    }
                    return t
                }))
            }
        },
        on = {
            name: "text-transform",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "uppercase":
                        return 2;
                    case "lowercase":
                        return 1;
                    case "capitalize":
                        return 3
                }
                return 0
            }
        },
        an = {
            name: "transform",
            initialValue: "none",
            prefix: !0,
            type: 0,
            parse: function(A, e) {
                if (20 === e.type && "none" === e.value) return null;
                if (18 === e.type) {
                    var t = cn[e.name];
                    if (void 0 === t) throw new Error('Attempting to parse an unsupported transform function "'.concat(e.name, '"'));
                    return t(A, e.values)
                }
                return null
            }
        },
        cn = {
            matrix: function(A, e) {
                var t = e.filter((function(A) {
                    return 17 === A.type
                })).map((function(A) {
                    return A.number
                }));
                return 6 === t.length ? t : null
            },
            matrix3d: function(A, e) {
                var t = e.filter((function(A) {
                        return 17 === A.type
                    })).map((function(A) {
                        return A.number
                    })),
                    n = t[0],
                    r = t[1];
                t[2], t[3];
                var i = t[4],
                    s = t[5];
                t[6], t[7], t[8], t[9], t[10], t[11];
                var o = t[12],
                    a = t[13];
                return t[14], t[15], 16 === t.length ? [n, r, i, s, o, a] : null
            },
            rotate: function(A, e) {
                if (1 !== e.length) return null;
                var t = e[0],
                    n = 0;
                if (17 === t.type && 0 === t.number) n = 0;
                else {
                    if (15 !== t.type) return null;
                    n = te(A, t)
                }
                var r = Math.cos(n),
                    i = Math.sin(n);
                return [r, i, -i, r, 0, 0]
            }
        },
        ln = {
            type: 16,
            number: 50,
            flags: 4
        },
        un = [ln, ln],
        hn = {
            name: "transform-origin",
            initialValue: "50% 50%",
            prefix: !0,
            type: 1,
            parse: function(A, e) {
                var t = e.filter(zA);
                return 2 !== t.length ? un : [t[0], t[1]]
            }
        },
        wn = {
            name: "rotate",
            initialValue: "none",
            prefix: !1,
            type: 0,
            parse: function(A, e) {
                return 20 === e.type && "none" === e.value ? null : 17 === e.type && 0 === e.number ? 0 : 15 === e.type ? 180 * te(A, e) / Math.PI : null
            }
        },
        dn = {
            name: "visible",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "hidden":
                        return 1;
                    case "collapse":
                        return 2;
                    case "visible":
                    default:
                        return 0
                }
            }
        };
    ! function(A) {
        A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all"
    }(Kt || (Kt = {}));
    for (var fn = {
            name: "word-break",
            initialValue: "normal",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "break-all":
                        return Kt.BREAK_ALL;
                    case "keep-all":
                        return Kt.KEEP_ALL;
                    case "normal":
                    default:
                        return Kt.NORMAL
                }
            }
        }, gn = {
            name: "z-index",
            initialValue: "auto",
            prefix: !1,
            type: 0,
            parse: function(A, e) {
                if (20 === e.type) return {
                    auto: !0,
                    order: 0
                };
                if (RA(e)) return {
                    auto: !1,
                    order: e.number
                };
                throw new Error("Invalid z-index number parsed")
            }
        }, Bn = function(A, e) {
            if (15 === e.type) switch (e.unit.toLowerCase()) {
                case "s":
                    return 1e3 * e.number;
                case "ms":
                    return e.number
            }
            throw new Error("Unsupported time type")
        }, pn = {
            name: "opacity",
            initialValue: "1",
            type: 0,
            prefix: !1,
            parse: function(A, e) {
                return RA(e) ? e.number : 1
            }
        }, mn = {
            name: "text-decoration-color",
            initialValue: "transparent",
            prefix: !1,
            type: 3,
            format: "color"
        }, bn = {
            name: "text-decoration-line",
            initialValue: "none",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.filter(PA).map((function(A) {
                    switch (A.value) {
                        case "underline":
                            return 1;
                        case "overline":
                            return 2;
                        case "line-through":
                            return 3;
                        case "none":
                            return 4
                    }
                    return 0
                })).filter((function(A) {
                    return 0 !== A
                }))
            }
        }, Qn = {
            name: "font-family",
            initialValue: "",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                var t = [],
                    n = [];
                return e.forEach((function(A) {
                    switch (A.type) {
                        case 20:
                        case 0:
                            t.push(A.value);
                            break;
                        case 17:
                            t.push(A.number.toString());
                            break;
                        case 4:
                            n.push(t.join(" ")), t.length = 0
                    }
                })), t.length && n.push(t.join(" ")), n.map((function(A) {
                    return -1 === A.indexOf(" ") ? A : "'".concat(A, "'")
                }))
            }
        }, Cn = {
            name: "font-size",
            initialValue: "0",
            prefix: !1,
            type: 3,
            format: "length"
        }, yn = {
            name: "font-weight",
            initialValue: "normal",
            type: 0,
            prefix: !1,
            parse: function(A, e) {
                if (RA(e)) return e.number;
                if (PA(e)) switch (e.value) {
                    case "bold":
                        return 700;
                    case "normal":
                    default:
                        return 400
                }
                return 400
            }
        }, vn = {
            name: "font-variant",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function(A, e) {
                return e.filter(PA).map((function(A) {
                    return A.value
                }))
            }
        }, Un = {
            name: "font-style",
            initialValue: "normal",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "oblique":
                        return "oblique";
                    case "italic":
                        return "italic";
                    case "normal":
                    default:
                        return "normal"
                }
            }
        }, _n = function(A, e) {
            return 0 != (A & e)
        }, Fn = {
            name: "content",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function(A, e) {
                if (0 === e.length) return [];
                var t = e[0];
                return 20 === t.type && "none" === t.value ? [] : e
            }
        }, En = {
            name: "counter-increment",
            initialValue: "none",
            prefix: !0,
            type: 1,
            parse: function(A, e) {
                if (0 === e.length) return null;
                var t = e[0];
                if (20 === t.type && "none" === t.value) return null;
                for (var n = [], r = e.filter(GA), i = 0; i < r.length; i++) {
                    var s = r[i],
                        o = r[i + 1];
                    if (20 === s.type) {
                        var a = o && RA(o) ? o.number : 1;
                        n.push({
                            counter: s.value,
                            increment: a
                        })
                    }
                }
                return n
            }
        }, In = {
            name: "counter-reset",
            initialValue: "none",
            prefix: !0,
            type: 1,
            parse: function(A, e) {
                if (0 === e.length) return [];
                for (var t = [], n = e.filter(GA), r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = n[r + 1];
                    if (PA(i) && "none" !== i.value) {
                        var o = s && RA(s) ? s.number : 0;
                        t.push({
                            counter: i.value,
                            reset: o
                        })
                    }
                }
                return t
            }
        }, Hn = {
            name: "duration",
            initialValue: "0s",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.filter(MA).map((function(e) {
                    return Bn(A, e)
                }))
            }
        }, kn = {
            name: "quotes",
            initialValue: "none",
            prefix: !0,
            type: 1,
            parse: function(A, e) {
                if (0 === e.length) return null;
                var t = e[0];
                if (20 === t.type && "none" === t.value) return null;
                var n = [],
                    r = e.filter(NA);
                if (r.length % 2 != 0) return null;
                for (var i = 0; i < r.length; i += 2) {
                    var s = r[i].value,
                        o = r[i + 1].value;
                    n.push({
                        open: s,
                        close: o
                    })
                }
                return n
            }
        }, Sn = function(A, e, t) {
            if (!A) return "";
            var n = A[Math.min(e, A.length - 1)];
            return n ? t ? n.open : n.close : ""
        }, Tn = {
            name: "box-shadow",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function(A, e) {
                return 1 === e.length && VA(e[0], "none") ? [] : XA(e).map((function(e) {
                    for (var t = {
                            color: 255,
                            offsetX: ZA,
                            offsetY: ZA,
                            blur: ZA,
                            spread: ZA,
                            inset: !1
                        }, n = 0, r = 0; r < e.length; r++) {
                        var i = e[r];
                        VA(i, "inset") ? t.inset = !0 : WA(i) ? (0 === n ? t.offsetX = i : 1 === n ? t.offsetY = i : 2 === n ? t.blur = i : t.spread = i, n++) : t.color = Ke(A, i)
                    }
                    return t
                }))
            }
        }, xn = {
            name: "paint-order",
            initialValue: "normal",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                var t = [];
                return e.filter(PA).forEach((function(A) {
                    switch (A.value) {
                        case "stroke":
                            t.push(1);
                            break;
                        case "fill":
                            t.push(0);
                            break;
                        case "markers":
                            t.push(2)
                    }
                })), [0, 1, 2].forEach((function(A) {
                    -1 === t.indexOf(A) && t.push(A)
                })), t
            }
        }, Ln = {
            name: "-webkit-text-stroke-color",
            initialValue: "currentcolor",
            prefix: !1,
            type: 3,
            format: "color"
        }, On = {
            name: "-webkit-text-stroke-width",
            initialValue: "0",
            type: 0,
            prefix: !1,
            parse: function(A, e) {
                return MA(e) ? e.number : 0
            }
        }, Dn = {
            name: "objectFit",
            initialValue: "fill",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.filter(PA).reduce((function(A, e) {
                    return A | Kn(e.value)
                }), 0)
            }
        }, Kn = function(A) {
            switch (A) {
                case "contain":
                    return 2;
                case "cover":
                    return 4;
                case "none":
                    return 8;
                case "scale-down":
                    return 16
            }
            return 0
        }, Mn = function() {
            function A(A, e) {
                var t, n;
                this.animationDuration = Nn(A, Hn, e.animationDuration), this.backgroundClip = Nn(A, Je, e.backgroundClip), this.backgroundColor = Nn(A, We, e.backgroundColor), this.backgroundImage = Nn(A, rt, e.backgroundImage), this.backgroundOrigin = Nn(A, it, e.backgroundOrigin), this.backgroundPosition = Nn(A, st, e.backgroundPosition), this.backgroundRepeat = Nn(A, ot, e.backgroundRepeat), this.backgroundSize = Nn(A, lt, e.backgroundSize), this.borderTopColor = Nn(A, wt, e.borderTopColor), this.borderRightColor = Nn(A, dt, e.borderRightColor), this.borderBottomColor = Nn(A, ft, e.borderBottomColor), this.borderLeftColor = Nn(A, gt, e.borderLeftColor), this.borderTopLeftRadius = Nn(A, pt, e.borderTopLeftRadius), this.borderTopRightRadius = Nn(A, mt, e.borderTopRightRadius), this.borderBottomRightRadius = Nn(A, bt, e.borderBottomRightRadius), this.borderBottomLeftRadius = Nn(A, Qt, e.borderBottomLeftRadius), this.borderTopStyle = Nn(A, yt, e.borderTopStyle), this.borderRightStyle = Nn(A, vt, e.borderRightStyle), this.borderBottomStyle = Nn(A, Ut, e.borderBottomStyle), this.borderLeftStyle = Nn(A, _t, e.borderLeftStyle), this.borderTopWidth = Nn(A, Et, e.borderTopWidth), this.borderRightWidth = Nn(A, It, e.borderRightWidth), this.borderBottomWidth = Nn(A, Ht, e.borderBottomWidth), this.borderLeftWidth = Nn(A, kt, e.borderLeftWidth), this.boxShadow = Nn(A, Tn, e.boxShadow), this.color = Nn(A, St, e.color), this.direction = Nn(A, Tt, e.direction), this.display = Nn(A, xt, e.display), this.float = Nn(A, Ot, e.cssFloat), this.fontFamily = Nn(A, Qn, e.fontFamily), this.fontSize = Nn(A, Cn, e.fontSize), this.fontStyle = Nn(A, Un, e.fontStyle), this.fontVariant = Nn(A, vn, e.fontVariant), this.fontWeight = Nn(A, yn, e.fontWeight), this.letterSpacing = Nn(A, Dt, e.letterSpacing), this.lineBreak = Nn(A, Mt, e.lineBreak), this.lineHeight = Nn(A, Rt, e.lineHeight), this.listStyleImage = Nn(A, Nt, e.listStyleImage), this.listStylePosition = Nn(A, Vt, e.listStylePosition), this.listStyleType = Nn(A, Gt, e.listStyleType), this.marginTop = Nn(A, Xt, e.marginTop), this.marginRight = Nn(A, Jt, e.marginRight), this.marginBottom = Nn(A, Wt, e.marginBottom), this.marginLeft = Nn(A, zt, e.marginLeft), this.opacity = Nn(A, pn, e.opacity);
                var r = Nn(A, jt, e.overflow);
                this.overflowX = r[0], this.overflowY = r[r.length > 1 ? 1 : 0], this.overflowWrap = Nn(A, Zt, e.overflowWrap), this.paddingTop = Nn(A, $t, e.paddingTop), this.paddingRight = Nn(A, An, e.paddingRight), this.paddingBottom = Nn(A, en, e.paddingBottom), this.paddingLeft = Nn(A, tn, e.paddingLeft), this.paintOrder = Nn(A, xn, e.paintOrder), this.position = Nn(A, rn, e.position), this.textAlign = Nn(A, nn, e.textAlign), this.textDecorationColor = Nn(A, mn, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color), this.textDecorationLine = Nn(A, bn, null !== (n = e.textDecorationLine) && void 0 !== n ? n : e.textDecoration), this.textShadow = Nn(A, sn, e.textShadow), this.textTransform = Nn(A, on, e.textTransform), this.transform = Nn(A, an, e.transform), this.transformOrigin = Nn(A, hn, e.transformOrigin), this.rotate = Nn(A, wn, e.rotate), this.visibility = Nn(A, dn, e.visibility), this.webkitTextStrokeColor = Nn(A, Ln, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = Nn(A, On, e.webkitTextStrokeWidth), this.wordBreak = Nn(A, fn, e.wordBreak), this.zIndex = Nn(A, gn, e.zIndex), this.objectFit = Nn(A, Dn, e.objectFit)
            }
            return A.prototype.isVisible = function() {
                return this.display > 0 && this.opacity > 0 && 0 === this.visibility
            }, A.prototype.isTransparent = function() {
                return se(this.backgroundColor)
            }, A.prototype.isTransformed = function() {
                return null !== this.transform || null !== this.rotate
            }, A.prototype.isPositioned = function() {
                return 0 !== this.position
            }, A.prototype.isPositionedWithZIndex = function() {
                return this.isPositioned() && !this.zIndex.auto
            }, A.prototype.isFloating = function() {
                return 0 !== this.float
            }, A.prototype.isInlineLevel = function() {
                return _n(this.display, 4) || _n(this.display, 33554432) || _n(this.display, 268435456) || _n(this.display, 536870912) || _n(this.display, 67108864) || _n(this.display, 134217728)
            }, A
        }(), Rn = function(A, e) {
            this.content = Nn(A, Fn, e.content), this.quotes = Nn(A, kn, e.quotes)
        }, Pn = function(A, e) {
            this.counterIncrement = Nn(A, En, e.counterIncrement), this.counterReset = Nn(A, In, e.counterReset)
        }, Nn = function(A, e, t) {
            var n = new DA,
                r = null != t ? t.toString() : e.initialValue;
            n.write(r);
            var i = new KA(n.read());
            switch (e.type) {
                case 2:
                    var s = i.parseComponentValue();
                    return e.parse(A, PA(s) ? s.value : e.initialValue);
                case 0:
                    return e.parse(A, i.parseComponentValue());
                case 1:
                    return e.parse(A, i.parseComponentValues());
                case 4:
                    return i.parseComponentValue();
                case 3:
                    switch (e.format) {
                        case "angle":
                            return te(A, i.parseComponentValue());
                        case "color":
                            return Ke(A, i.parseComponentValue());
                        case "image":
                            return tt(A, i.parseComponentValue());
                        case "length":
                            var o = i.parseComponentValue();
                            return WA(o) ? o : ZA;
                        case "length-percentage":
                            var a = i.parseComponentValue();
                            return zA(a) ? a : ZA;
                        case "time":
                            return Bn(A, i.parseComponentValue())
                    }
            }
        }, Vn = function(A, e) {
            var t = function(A) {
                switch (A.getAttribute("data-html2canvas-debug")) {
                    case "all":
                        return 1;
                    case "clone":
                        return 2;
                    case "parse":
                        return 3;
                    case "render":
                        return 4;
                    default:
                        return 0
                }
            }(A);
            return 1 === t || e === t
        }, Gn = function(A, e) {
            this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Vn(e, 3), this.styles = new Mn(A, window.getComputedStyle(e, null)), Gr(e) && (this.styles.animationDuration.some((function(A) {
                return A > 0
            })) && (e.style.animationDuration = "0s"), null !== this.styles.transform && (e.style.transform = "none"), null !== this.styles.rotate && (e.style.rotate = "none")), this.bounds = o(this.context, e), Vn(e, 4) && (this.flags |= 16)
        }, Yn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xn = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Jn = 0; Jn < Yn.length; Jn++) Xn[Yn.charCodeAt(Jn)] = Jn;
    for (var Wn = function(A, e, t) {
            return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
        }, zn = function() {
            function A(A, e, t, n, r, i) {
                this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = n, this.index = r, this.data = i
            }
            return A.prototype.get = function(A) {
                var e;
                if (A >= 0) {
                    if (A < 55296 || A > 56319 && A <= 65535) return e = ((e = this.index[A >> 5]) << 2) + (31 & A), this.data[e];
                    if (A <= 65535) return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[e];
                    if (A < this.highStart) return e = 2080 + (A >> 11), e = this.index[e], e += A >> 5 & 63, e = ((e = this.index[e]) << 2) + (31 & A), this.data[e];
                    if (A <= 1114111) return this.data[this.highValueIndex]
                }
                return this.errorValue
            }, A
        }(), jn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zn = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), qn = 0; qn < jn.length; qn++) Zn[jn.charCodeAt(qn)] = qn;
    var $n, Ar = 8,
        er = 9,
        tr = 11,
        nr = 12,
        rr = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
            var t = A.length;
            if (!t) return "";
            for (var n = [], r = -1, i = ""; ++r < t;) {
                var s = A[r];
                s <= 65535 ? n.push(s) : (s -= 65536, n.push(55296 + (s >> 10), s % 1024 + 56320)), (r + 1 === t || n.length > 16384) && (i += String.fromCharCode.apply(String, n), n.length = 0)
            }
            return i
        },
        ir = function(A, e) {
            var t, n, r, i = function(A) {
                    var e, t, n, r, i, s = .75 * A.length,
                        o = A.length,
                        a = 0;
                    "=" === A[A.length - 1] && (s--, "=" === A[A.length - 2] && s--);
                    var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s),
                        l = Array.isArray(c) ? c : new Uint8Array(c);
                    for (e = 0; e < o; e += 4) t = Xn[A.charCodeAt(e)], n = Xn[A.charCodeAt(e + 1)], r = Xn[A.charCodeAt(e + 2)], i = Xn[A.charCodeAt(e + 3)], l[a++] = t << 2 | n >> 4, l[a++] = (15 & n) << 4 | r >> 2, l[a++] = (3 & r) << 6 | 63 & i;
                    return c
                }(A),
                s = Array.isArray(i) ? function(A) {
                    for (var e = A.length, t = [], n = 0; n < e; n += 4) t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
                    return t
                }(i) : new Uint32Array(i),
                o = Array.isArray(i) ? function(A) {
                    for (var e = A.length, t = [], n = 0; n < e; n += 2) t.push(A[n + 1] << 8 | A[n]);
                    return t
                }(i) : new Uint16Array(i),
                a = Wn(o, 12, s[4] / 2),
                c = 2 === s[5] ? Wn(o, (24 + s[4]) / 2) : (t = s, n = Math.ceil((24 + s[4]) / 4), t.slice ? t.slice(n, r) : new Uint32Array(Array.prototype.slice.call(t, n, r)));
            return new zn(s[0], s[1], s[2], s[3], a, c)
        }("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="),
        sr = function(A) {
            return ir.get(A)
        },
        or = function(A, e, t) {
            var n = t - 2,
                r = e[n],
                i = e[t - 1],
                s = e[t];
            if (2 === i && 3 === s) return "Ã—";
            if (2 === i || 3 === i || 4 === i) return "Ã·";
            if (2 === s || 3 === s || 4 === s) return "Ã·";
            if (i === Ar && -1 !== [Ar, er, tr, nr].indexOf(s)) return "Ã—";
            if (!(i !== tr && i !== er || s !== er && 10 !== s)) return "Ã—";
            if ((i === nr || 10 === i) && 10 === s) return "Ã—";
            if (13 === s || 5 === s) return "Ã—";
            if (7 === s) return "Ã—";
            if (1 === i) return "Ã—";
            if (13 === i && 14 === s) {
                for (; 5 === r;) r = e[--n];
                if (14 === r) return "Ã—"
            }
            if (15 === i && 15 === s) {
                for (var o = 0; 15 === r;) o++, r = e[--n];
                if (o % 2 == 0) return "Ã—"
            }
            return "Ã·"
        },
        ar = function(A) {
            var e = function(A) {
                    for (var e = [], t = 0, n = A.length; t < n;) {
                        var r = A.charCodeAt(t++);
                        if (r >= 55296 && r <= 56319 && t < n) {
                            var i = A.charCodeAt(t++);
                            56320 == (64512 & i) ? e.push(((1023 & r) << 10) + (1023 & i) + 65536) : (e.push(r), t--)
                        } else e.push(r)
                    }
                    return e
                }(A),
                t = e.length,
                n = 0,
                r = 0,
