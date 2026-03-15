// Lines 801-2000
if (32 === t.type || JA(t, A)) return e;
                    this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), t = this.consumeToken()
                }
            }, A.prototype.consumeFunction = function(A) {
                for (var e = {
                        name: A.value,
                        values: [],
                        type: 18
                    };;) {
                    var t = this.consumeToken();
                    if (32 === t.type || 3 === t.type) return e;
                    this.reconsumeToken(t), e.values.push(this.consumeComponentValue())
                }
            }, A.prototype.consumeToken = function() {
                var A = this._tokens.shift();
                return void 0 === A ? OA : A
            }, A.prototype.reconsumeToken = function(A) {
                this._tokens.unshift(A)
            }, A
        }(),
        MA = function(A) {
            return 15 === A.type
        },
        RA = function(A) {
            return 17 === A.type
        },
        PA = function(A) {
            return 20 === A.type
        },
        NA = function(A) {
            return 0 === A.type
        },
        VA = function(A, e) {
            return PA(A) && A.value === e
        },
        GA = function(A) {
            return 31 !== A.type
        },
        YA = function(A) {
            return 31 !== A.type && 4 !== A.type
        },
        XA = function(A) {
            var e = [],
                t = [];
            return A.forEach((function(A) {
                if (4 === A.type) {
                    if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
                    return e.push(t), void(t = [])
                }
                31 !== A.type && t.push(A)
            })), t.length && e.push(t), e
        },
        JA = function(A, e) {
            return 11 === e && 12 === A.type || 28 === e && 29 === A.type || 2 === e && 3 === A.type
        },
        WA = function(A) {
            return 17 === A.type || 15 === A.type
        },
        zA = function(A) {
            return 16 === A.type || WA(A)
        },
        jA = function(A) {
            return A.length > 1 ? [A[0], A[1]] : [A[0]]
        },
        ZA = {
            type: 17,
            number: 0,
            flags: 4
        },
        qA = {
            type: 16,
            number: 50,
            flags: 4
        },
        $A = {
            type: 16,
            number: 100,
            flags: 4
        },
        Ae = function(A, e, t) {
            var n = A[0],
                r = A[1];
            return [ee(n, e), ee(void 0 !== r ? r : n, t)]
        },
        ee = function(A, e) {
            if (16 === A.type) return A.number / 100 * e;
            if (MA(A)) switch (A.unit) {
                case "rem":
                case "em":
                    return 16 * A.number;
                case "px":
                default:
                    return A.number
            }
            return A.number
        },
        te = function(A, e) {
            if (15 === e.type) switch (e.unit) {
                case "deg":
                    return Math.PI * e.number / 180;
                case "grad":
                    return Math.PI / 200 * e.number;
                case "rad":
                    return e.number;
                case "turn":
                    return 2 * Math.PI * e.number
            }
            throw new Error("Unsupported angle type")
        },
        ne = function(A) {
            return 15 === A.type && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit)
        },
        re = function(A) {
            switch (A.filter(PA).map((function(A) {
                    return A.value
                })).join(" ")) {
                case "to bottom right":
                case "to right bottom":
                case "left top":
                case "top left":
                    return [ZA, ZA];
                case "to top":
                case "bottom":
                    return ie(0);
                case "to bottom left":
                case "to left bottom":
                case "right top":
                case "top right":
                    return [ZA, $A];
                case "to right":
                case "left":
                    return ie(90);
                case "to top left":
                case "to left top":
                case "right bottom":
                case "bottom right":
                    return [$A, $A];
                case "to bottom":
                case "top":
                    return ie(180);
                case "to top right":
                case "to right top":
                case "left bottom":
                case "bottom left":
                    return [$A, ZA];
                case "to left":
                case "right":
                    return ie(270)
            }
            return 0
        },
        ie = function(A) {
            return Math.PI * A / 180
        },
        se = function(A) {
            return 0 == (255 & A)
        },
        oe = function(A) {
            var e = 255 & A,
                t = 255 & A >> 8,
                n = 255 & A >> 16,
                r = 255 & A >> 24;
            return e < 255 ? "rgba(".concat(r, ",").concat(n, ",").concat(t, ",").concat(e / 255, ")") : "rgb(".concat(r, ",").concat(n, ",").concat(t, ")")
        },
        ae = function(A, e, t, n) {
            return (A << 24 | e << 16 | t << 8 | Math.round(255 * n) << 0) >>> 0
        },
        ce = function(A, e) {
            if (17 === A.type) return A.number;
            if (16 === A.type) {
                var t = 3 === e ? 1 : 255;
                return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
            }
            return 0
        },
        le = function(A) {
            return "from" === (20 === A[0].type ? A[0].value : "unknown")
        },
        ue = function(A, e, t) {
            return Math.min(Math.max(A, e), t)
        },
        he = function(A, e) {
            return [A[0] * e[0] + A[1] * e[1] + A[2] * e[2], A[3] * e[0] + A[4] * e[1] + A[5] * e[2], A[6] * e[0] + A[7] * e[1] + A[8] * e[2]]
        },
        we = function(A) {
            var e = A[0],
                t = A[1],
                n = A[2],
                r = A[3],
                i = ke([e, t, n]);
            return ae(ue(Math.round(255 * i[0]), 0, 255), ue(Math.round(255 * i[1]), 0, 255), ue(Math.round(255 * i[2]), 0, 255), r)
        },
        de = function(A) {
            var e = Ie([A[0], A[1], A[2]]);
            return we([e[0], e[1], e[2], A[3]])
        },
        fe = function(A, e) {
            var t = e.filter(YA),
                n = t[0],
                r = t[1],
                i = t[2],
                s = t[3];
            return [(17 === n.type ? ie(n.number) : te(A, n)) / (2 * Math.PI), zA(r) ? r.number / 100 : 0, zA(i) ? i.number / 100 : 0, void 0 !== s && zA(s) ? ee(s, 1) : 1]
        },
        ge = function(A, e) {
            if (le(e)) throw new Error("Relative color not supported for hsl()");
            var t = fe(A, e),
                n = t[0],
                r = t[1],
                i = t[2],
                s = t[3],
                o = ye([n, r, i]);
            return ae(255 * o[0], 255 * o[1], 255 * o[2], 0 === r ? 1 : s)
        },
        Be = function(A) {
            var e = A.filter(YA);
            return [zA(e[0]) ? e[0].number : 0, zA(e[1]) ? e[1].number : 0, RA(e[2]) || MA(e[2]) ? e[2].number : 0, void 0 !== e[4] && zA(e[4]) ? ee(e[4], 1) : 1]
        },
        pe = function(A) {
            var e = A.filter(YA);
            return [16 === e[0].type ? e[0].number / 100 : RA(e[0]) ? e[0].number : 0, 16 === e[1].type ? e[1].number / 100 : RA(e[1]) ? e[1].number : 0, RA(e[2]) || MA(e[2]) ? e[2].number : 0, void 0 !== e[4] && zA(e[4]) ? ee(e[4], 1) : 1]
        },
        me = function(A) {
            var e = A.filter(YA);
            return [16 === e[0].type ? e[0].number / 100 : RA(e[0]) ? e[0].number : 0, 16 === e[1].type ? e[1].number / 100 : RA(e[1]) ? e[1].number : 0, RA(e[2]) || MA(e[2]) ? e[2].number : 0, void 0 !== e[4] && zA(e[4]) ? ee(e[4], 1) : 1]
        },
        be = function(A) {
            return he([1.0479297925449969, .022946870601609652, -.05019226628920524, .02962780877005599, .9904344267538799, -.017073799063418826, -.009243040646204504, .015055191490298152, .7518742814281371], A)
        },
        Qe = function(A) {
            return he([.955473421488075, -.02309845494876471, .06325924320057072, -.0283697093338637, 1.0099953980813041, .021041441191917323, .012314014864481998, -.020507649298898964, 1.330365926242124], A)
        },
        Ce = function(A, e, t) {
            return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
        },
        ye = function(A) {
            var e = A[0],
                t = A[1],
                n = A[2];
            if (0 === t) return [255 * n, 255 * n, 255 * n];
            var r = n <= .5 ? n * (t + 1) : n + t - n * t,
                i = 2 * n - r;
            return [Ce(i, r, e + 1 / 3), Ce(i, r, e), Ce(i, r, e - 1 / 3)]
        },
        ve = function(A) {
            var e = A[0],
                t = A[1],
                n = A[2];
            return t < 0 && (t = 0), isNaN(n) && (n = 0), [e, t * Math.cos(n * Math.PI / 180), t * Math.sin(n * Math.PI / 180)]
        },
        Ue = function(A) {
            var e = he([1, .3963377773761749, .2158037573099136, 1, -.1055613458156586, -.0638541728258133, 1, -.0894841775298119, -1.2914855480194092], A).map((function(A) {
                return Math.pow(A, 3)
            }));
            return he([1.2268798758459243, -.5578149944602171, .2813910456659647, -.0405757452148008, 1.112286803280317, -.0717110580655164, -.0763729366746601, -.4214933324022432, 1.5869240198367816], e)
        },
        _e = function(A) {
            var e = (A[0] + 16) / 116,
                t = A[1] / 500 + e,
                n = e - A[2] / 200,
                r = 24389 / 27,
                i = 24 / 116,
                s = [.3457 * (t > i ? Math.pow(t, 3) : (116 * t - 16) / r) / .3585, A[0] > 8 ? Math.pow(e, 3) : A[0] / r, .2958 * (n > i ? Math.pow(n, 3) : (116 * n - 16) / r) / .3585];
            return Qe([s[0], s[1], s[2]])
        },
        Fe = function(A) {
            return A
        },
        Ee = function(A) {
            return de([A[0], A[1], A[2], A[3]])
        },
        Ie = function(A) {
            return he([3.2409699419045226, -1.537383177570094, -.4986107602930034, -.9692436362808796, 1.8759675015077202, .04155505740717559, .05563007969699366, -.20397695888897652, 1.0569715142428786], A)
        },
        He = function(A) {
            return he([.41239079926595934, .357584339383878, .1804807884018343, .21263900587151027, .715168678767756, .07219231536073371, .01933081871559182, .11919477979462598, .9505321522496607], A)
        },
        ke = function(A) {
            return A.map((function(A) {
                var e = A < 0 ? -1 : 1,
                    t = Math.abs(A);
                return t > .0031308 ? e * (1.055 * Math.pow(t, 1 / 2.4) - .055) : 12.92 * A
            }))
        },
        Se = function(A) {
            return A.map((function(A) {
                var e = A < 0 ? -1 : 1,
                    t = Math.abs(A);
                return t <= .04045 ? A / 12.92 : e * Math.pow((t + .055) / 1.055, 2.4)
            }))
        },
        Te = function(A) {
            var e, t = [A[0], A[1], A[2]].map((function(A) {
                var e = A < 0 ? -1 : 1;
                return A * e <= .04045 ? A / 12.92 : e * Math.pow((A + .055) / 1.055, 2.4) || 0
            }));
            return e = [t[0], t[1], t[2]], he([.4865709486482162, .26566769316909306, .1982172852343625, .2289745640697488, .6917385218365064, .079286914093745, 0, .04511338185890264, 1.043944368900976], e)
        },
        xe = function(A) {
            var e = [A[0], A[1], A[2]].map((function(A) {
                return A < .03125 ? A / 16 : Math.pow(A, 1.8)
            }));
            return Qe(function(A) {
                return he([.7977666449006423, .13518129740053308, .0313477341283922, .2880748288194013, .711835234241873, 8993693872564e-17, 0, 0, .8251046025104602], A)
            }([e[0], e[1], e[2]]))
        },
        Le = 1.09929682680944,
        Oe = .018053968510807,
        De = function(A) {
            var e, t = function(A) {
                return A.map((function(A) {
                    return A < 4.5 * Oe ? A / 4.5 : Math.pow((A + Le - 1) / Le, 1 / .45)
                }))
            }([A[0], A[1], A[2]]);
            return e = [t[0], t[1], t[2]], he([.6369580483012914, .14461690358620832, .1688809751641721, .2627002120112671, .6779980715188708, .05930171646986196, 0, .028072693049087428, 1.060985057710791], e)
        },
        Ke = function(A, e) {
            if (18 === e.type) {
                var t = Ge[e.name];
                if (void 0 === t) throw new Error('Attempting to parse an unsupported color function "'.concat(e.name, '"'));
                return t(A, e.values)
            }
            if (5 === e.type) {
                var n = Me(e),
                    r = n[0],
                    i = n[1],
                    s = n[2],
                    o = n[3];
                return ae(r, i, s, o)
            }
            if (20 === e.type) {
                var a = Xe[e.value.toUpperCase()];
                if (void 0 !== a) return a
            }
            return Xe.TRANSPARENT
        },
        Me = function(A) {
            if (3 === A.value.length) {
                var e = A.value.substring(0, 1),
                    t = A.value.substring(1, 2),
                    n = A.value.substring(2, 3);
                return [parseInt(e + e, 16), parseInt(t + t, 16), parseInt(n + n, 16), 1]
            }
            if (4 === A.value.length) {
                e = A.value.substring(0, 1), t = A.value.substring(1, 2), n = A.value.substring(2, 3);
                var r = A.value.substring(3, 4);
                return [parseInt(e + e, 16), parseInt(t + t, 16), parseInt(n + n, 16), parseInt(r + r, 16) / 255]
            }
            return 6 === A.value.length ? (e = A.value.substring(0, 2), t = A.value.substring(2, 4), n = A.value.substring(4, 6), [parseInt(e, 16), parseInt(t, 16), parseInt(n, 16), 1]) : 8 === A.value.length ? (e = A.value.substring(0, 2), t = A.value.substring(2, 4), n = A.value.substring(4, 6), r = A.value.substring(6, 8), [parseInt(e, 16), parseInt(t, 16), parseInt(n, 16), parseInt(r, 16) / 255]) : [0, 0, 0, 1]
        },
        Re = function(A, e) {
            var t = e.filter(YA);
            if (le(t)) throw new Error("Relative color not supported for rgb()");
            if (3 === t.length) {
                var n = t.map(ce),
                    r = n[0],
                    i = n[1],
                    s = n[2];
                return ae(r, i, s, 1)
            }
            if (4 === t.length) {
                var o = t.map(ce),
                    a = (r = o[0], i = o[1], s = o[2], o[3]);
                return ae(r, i, s, a)
            }
            return 0
        },
        Pe = {
            srgb: function(A) {
                return ae(ue(Math.round(255 * A[0]), 0, 255), ue(Math.round(255 * A[1]), 0, 255), ue(Math.round(255 * A[2]), 0, 255), ue(A[3], 0, 1))
            },
            "srgb-linear": we,
            "display-p3": function(A) {
                var e = Te([A[0], A[1], A[2]]);
                return de([e[0], e[1], e[2], A[3]])
            },
            "a98-rgb": function(A) {
                var e, t = Ie((e = function(A) {
                    var e = A.map((function(A) {
                        var e = A < 0 ? -1 : 1,
                            t = Math.abs(A);
                        return e * Math.pow(t, 563 / 256)
                    }));
                    return [e[0], e[1], e[2]]
                }([A[0], A[1], A[2]]), he([.5766690429101305, .1855582379065463, .1882286462349947, .29734497525053605, .6273635662554661, .0752914584939978, .02703136138641234, .07068885253582723, .9913375368376388], e)));
                return we([t[0], t[1], t[2], A[3]])
            },
            "prophoto-rgb": function(A) {
                var e = xe([A[0], A[1], A[2]]);
                return de([e[0], e[1], e[2], A[3]])
            },
            xyz: Ee,
            "xyz-d50": function(A) {
                var e = function(A) {
                    return Qe([A[0], A[1], A[2]])
                }([A[0], A[1], A[2]]);
                return de([e[0], e[1], e[2], A[3]])
            },
            "xyz-d65": Ee,
            rec2020: function(A) {
                var e = De([A[0], A[1], A[2]]);
                return de([e[0], e[1], e[2], A[3]])
            }
        },
        Ne = {
            rgb: function(A, e) {
                var t = e.filter(YA);
                if (3 === t.length) {
                    var n = t.map(ce),
                        r = n[0],
                        i = n[1],
                        s = n[2],
                        o = Se([r / 255, i / 255, s / 255]),
                        a = He([o[0], o[1], o[2]]);
                    return [a[0], a[1], a[2], 1]
                }
                if (4 === t.length) {
                    var c = t.map(ce),
                        l = (r = c[0], i = c[1], s = c[2], c[3]),
                        u = (o = Se([r / 255, i / 255, s / 255]), He([o[0], o[1], o[2]]));
                    return [u[0], u[1], u[2], l]
                }
                return [0, 0, 0, 1]
            },
            hsl: function(A, e) {
                var t = fe(A, e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = Se(ye([n, r, i])),
                    a = He([o[0], o[1], o[2]]);
                return [a[0], a[1], a[2], s]
            },
            lab: function(A, e) {
                var t = pe(e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = _e([n, r, i]);
                return [o[0], o[1], o[2], s]
            },
            lch: function(A, e) {
                var t = Be(e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = _e(ve([n, r, i]));
                return [o[0], o[1], o[2], s]
            },
            oklab: function(A, e) {
                var t = pe(e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = Ue([n, r, i]);
                return [o[0], o[1], o[2], s]
            },
            oklch: function(A, e) {
                var t = me(e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = Ue(ve([n, r, i]));
                return [o[0], o[1], o[2], s]
            }
        },
        Ve = {
            srgb: function(A) {
                var e = ke(Ie([A[0], A[1], A[2]]));
                return [e[0], e[1], e[2], A[3]]
            },
            "srgb-linear": function(A) {
                var e = Ie([A[0], A[1], A[2]]),
                    t = e[0],
                    n = e[1],
                    r = e[2];
                return [ue(Math.round(255 * t), 0, 255), ue(Math.round(255 * n), 0, 255), ue(Math.round(255 * r), 0, 255), A[3]]
            },
            "display-p3": function(A) {
                var e, t, n = (t = [A[0], A[1], A[2]], e = he([2.493496911941425, -.9313836179191239, -.40271078445071684, -.8294889695615747, 1.7626640603183463, .023624685841943577, .03584583024378447, -.07617238926804182, .9568845240076872], t), ke(e));
                return [n[0], n[1], n[2], A[3]]
            },
            "a98-rgb": function(A) {
                var e, t = function(A) {
                    var e = A.map((function(A) {
                        var e = A < 0 ? -1 : 1,
                            t = Math.abs(A);
                        return e * Math.pow(t, 256 / 563)
                    }));
                    return [e[0], e[1], e[2]]
                }((e = [A[0], A[1], A[2]], he([2.0415879038107465, -.5650069742788596, -.34473135077832956, -.9692436362808795, 1.8759675015077202, .04155505740717557, .013444280632031142, -.11836239223101838, 1.0151749943912054], e)));
                return [t[0], t[1], t[2], A[3]]
            },
            "prophoto-rgb": function(A) {
                var e, t = (e = be([A[0], A[1], A[2]]), he([1.3457868816471583, -.25557208737979464, -.05110186497554526, -.5446307051249019, 1.5082477428451468, .02052744743642139, 0, 0, 1.2119675456389452], e).map((function(A) {
                    return A > 1 / 512 ? Math.pow(A, 1 / 1.8) : 16 * A
                })));
                return [t[0], t[1], t[2], A[3]]
            },
            xyz: Fe,
            "xyz-d50": function(A) {
                var e = be([A[0], A[2], A[3]]);
                return [e[0], e[1], e[2], A[3]]
            },
            "xyz-d65": Fe,
            rec2020: function(A) {
                var e, t = function(A) {
                    return A.map((function(A) {
                        return A >= Oe ? Le * Math.pow(A, .45) - (Le - 1) : 4.5 * A
                    }))
                }((e = [A[0], A[1], A[2]], he([1.716651187971268, -.355670783776392, -.25336628137366, -.666684351832489, 1.616481236634939, .0157685458139111, .017639857445311, -.042770613257809, .942103121235474], e)));
                return [t[0], t[1], t[2], A[3]]
            }
        },
        Ge = {
            hsl: ge,
            hsla: ge,
            rgb: Re,
            rgba: Re,
            lch: function(A, e) {
                if (le(e.filter(YA))) throw new Error("Relative color not supported for lch()");
                var t = Be(e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = ke(Ie(_e(ve([n, r, i]))));
                return ae(ue(Math.round(255 * o[0]), 0, 255), ue(Math.round(255 * o[1]), 0, 255), ue(Math.round(255 * o[2]), 0, 255), s)
            },
            oklch: function(A, e) {
                if (le(e.filter(YA))) throw new Error("Relative color not supported for oklch()");
                var t = me(e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = ke(Ie(Ue(ve([n, r, i]))));
                return ae(ue(Math.round(255 * o[0]), 0, 255), ue(Math.round(255 * o[1]), 0, 255), ue(Math.round(255 * o[2]), 0, 255), s)
            },
            oklab: function(A, e) {
                if (le(e.filter(YA))) throw new Error("Relative color not supported for oklab()");
                var t = pe(e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = ke(Ie(Ue([n, r, i])));
                return ae(ue(Math.round(255 * o[0]), 0, 255), ue(Math.round(255 * o[1]), 0, 255), ue(Math.round(255 * o[2]), 0, 255), s)
            },
            lab: function(A, e) {
                if (le(e.filter(YA))) throw new Error("Relative color not supported for lab()");
                var t = pe(e),
                    n = t[0],
                    r = t[1],
                    i = t[2],
                    s = t[3],
                    o = ke(Ie(_e([n, r, i])));
                return ae(ue(Math.round(255 * o[0]), 0, 255), ue(Math.round(255 * o[1]), 0, 255), ue(Math.round(255 * o[2]), 0, 255), s)
            },
            color: function(A, e) {
                var t = e.filter(YA),
                    n = 20 === t[0].type ? t[0].value : "unknown";
                if (!le(t)) {
                    var r = n,
                        i = Pe[r];
                    if (void 0 === i) throw new Error('Attempting to parse an unsupported color space "'.concat(r, '" for color() function'));
                    return i([B = RA(t[1]) ? t[1].number : 0, p = RA(t[2]) ? t[2].number : 0, m = RA(t[3]) ? t[3].number : 0, b = t.length > 4 && 6 === t[4].type && "/" === t[4].value && RA(t[5]) ? t[5].number : 1])
                }
                var s = function(A, e) {
                        if (RA(e)) return e.number;
                        var t;
                        if (PA(e)) return A["r" === (t = e.value) || "x" === t ? 0 : "g" === t || "y" === t ? 1 : 2];
                        var n = function(A) {
                            for (var e = "(", t = 0, r = A.filter(YA); t < r.length; t++) {
                                var i = r[t];
                                e += 18 === i.type && "calc" === i.name ? n(i.values) : RA(i) ? i.number : 6 === i.type || PA(i) ? i.value : ""
                            }
                            return e += ")"
                        };
                        if (18 === e.type) {
                            var r = e.values.filter(YA);
                            if ("calc" === e.name) {
                                var i = n(r).replace(/r|x/, A[0].toString()).replace(/g|y/, A[1].toString()).replace(/b|z/, A[2].toString());
                                return new Function("return " + i)()
                            }
                        }
                        return null
                    },
                    o = 18 === t[1].type ? t[1].name : PA(t[1]) || 5 === t[1].type ? "rgb" : "unknown",
                    a = PA(t[2]) ? t[2].value : "unknown",
                    c = 18 === t[1].type ? t[1].values : PA(t[1]) ? [t[1]] : [];
                if (PA(t[1])) {
                    if (void 0 === Xe[t[1].value.toUpperCase()]) throw new Error("Attempting to use unknown color in relative color 'from'");
                    var l = Ye(A, t[1].value);
                    c = [{
                        type: 17,
                        number: 255 & l >> 24,
                        flags: 1
                    }, {
                        type: 17,
                        number: 255 & l >> 16,
                        flags: 1
                    }, {
                        type: 17,
                        number: 255 & l >> 8,
                        flags: 1
                    }, {
                        type: 17,
                        number: (u = 255 & l) > 1 ? u / 255 : u,
                        flags: 1
                    }]
                } else if (5 === t[1].type) {
                    var u, h = Me(t[1]);
                    c = [{
                        type: 17,
                        number: h[0],
                        flags: 1
                    }, {
                        type: 17,
                        number: h[1],
                        flags: 1
                    }, {
                        type: 17,
                        number: h[2],
                        flags: 1
                    }, {
                        type: 17,
                        number: (u = h[3]) > 1 ? u / 255 : u,
                        flags: 1
                    }]
                }
                if (0 === c.length) throw new Error("Attempting to use unknown color in relative color 'from'");
                if ("unknown" === a) throw new Error("Attempting to use unknown colorspace in relative color 'to'");
                var w = Ne[o],
                    d = Ve[a],
                    f = Pe[a];
                if (void 0 === w) throw new Error('Attempting to parse an unsupported color space "'.concat(o, '" for color() function'));
                if (void 0 === d) throw new Error('Attempting to parse an unsupported color space "'.concat(a, '" for color() function'));
                var g = d(w(A, c)),
                    B = s(g, t[3]),
                    p = s(g, t[4]),
                    m = s(g, t[5]),
                    b = t.length > 6 && 6 === t[6].type && "/" === t[6].value && RA(t[7]) ? t[7].number : 1;
                if (null === B || null === p || null === m) throw new Error("Invalid relative color in color() function");
                return f([B, p, m, b])
            }
        },
        Ye = function(A, e) {
            return Ke(A, KA.create(e).parseComponentValue())
        },
        Xe = {
            ALICEBLUE: 4042850303,
            ANTIQUEWHITE: 4209760255,
            AQUA: 16777215,
            AQUAMARINE: 2147472639,
            AZURE: 4043309055,
            BEIGE: 4126530815,
            BISQUE: 4293182719,
            BLACK: 255,
            BLANCHEDALMOND: 4293643775,
            BLUE: 65535,
            BLUEVIOLET: 2318131967,
            BROWN: 2771004159,
            BURLYWOOD: 3736635391,
            CADETBLUE: 1604231423,
            CHARTREUSE: 2147418367,
            CHOCOLATE: 3530104575,
            CORAL: 4286533887,
            CORNFLOWERBLUE: 1687547391,
            CORNSILK: 4294499583,
            CRIMSON: 3692313855,
            CYAN: 16777215,
            DARKBLUE: 35839,
            DARKCYAN: 9145343,
            DARKGOLDENROD: 3095837695,
            DARKGRAY: 2846468607,
            DARKGREEN: 6553855,
            DARKGREY: 2846468607,
            DARKKHAKI: 3182914559,
            DARKMAGENTA: 2332068863,
            DARKOLIVEGREEN: 1433087999,
            DARKORANGE: 4287365375,
            DARKORCHID: 2570243327,
            DARKRED: 2332033279,
            DARKSALMON: 3918953215,
            DARKSEAGREEN: 2411499519,
            DARKSLATEBLUE: 1211993087,
            DARKSLATEGRAY: 793726975,
            DARKSLATEGREY: 793726975,
            DARKTURQUOISE: 13554175,
            DARKVIOLET: 2483082239,
            DEEPPINK: 4279538687,
            DEEPSKYBLUE: 12582911,
            DIMGRAY: 1768516095,
            DIMGREY: 1768516095,
            DODGERBLUE: 512819199,
            FIREBRICK: 2988581631,
            FLORALWHITE: 4294635775,
            FORESTGREEN: 579543807,
            FUCHSIA: 4278255615,
            GAINSBORO: 3705462015,
            GHOSTWHITE: 4177068031,
            GOLD: 4292280575,
            GOLDENROD: 3668254975,
            GRAY: 2155905279,
            GREEN: 8388863,
            GREENYELLOW: 2919182335,
            GREY: 2155905279,
            HONEYDEW: 4043305215,
            HOTPINK: 4285117695,
            INDIANRED: 3445382399,
            INDIGO: 1258324735,
            IVORY: 4294963455,
            KHAKI: 4041641215,
            LAVENDER: 3873897215,
            LAVENDERBLUSH: 4293981695,
            LAWNGREEN: 2096890111,
            LEMONCHIFFON: 4294626815,
            LIGHTBLUE: 2916673279,
            LIGHTCORAL: 4034953471,
            LIGHTCYAN: 3774873599,
            LIGHTGOLDENRODYELLOW: 4210742015,
            LIGHTGRAY: 3553874943,
            LIGHTGREEN: 2431553791,
            LIGHTGREY: 3553874943,
            LIGHTPINK: 4290167295,
            LIGHTSALMON: 4288707327,
            LIGHTSEAGREEN: 548580095,
            LIGHTSKYBLUE: 2278488831,
            LIGHTSLATEGRAY: 2005441023,
            LIGHTSLATEGREY: 2005441023,
            LIGHTSTEELBLUE: 2965692159,
            LIGHTYELLOW: 4294959359,
            LIME: 16711935,
            LIMEGREEN: 852308735,
            LINEN: 4210091775,
            MAGENTA: 4278255615,
            MAROON: 2147483903,
            MEDIUMAQUAMARINE: 1724754687,
            MEDIUMBLUE: 52735,
            MEDIUMORCHID: 3126187007,
            MEDIUMPURPLE: 2473647103,
            MEDIUMSEAGREEN: 1018393087,
            MEDIUMSLATEBLUE: 2070474495,
            MEDIUMSPRINGGREEN: 16423679,
            MEDIUMTURQUOISE: 1221709055,
            MEDIUMVIOLETRED: 3340076543,
            MIDNIGHTBLUE: 421097727,
            MINTCREAM: 4127193855,
            MISTYROSE: 4293190143,
            MOCCASIN: 4293178879,
            NAVAJOWHITE: 4292783615,
            NAVY: 33023,
            OLDLACE: 4260751103,
            OLIVE: 2155872511,
            OLIVEDRAB: 1804477439,
            ORANGE: 4289003775,
            ORANGERED: 4282712319,
            ORCHID: 3664828159,
            PALEGOLDENROD: 4008225535,
            PALEGREEN: 2566625535,
            PALETURQUOISE: 2951671551,
            PALEVIOLETRED: 3681588223,
            PAPAYAWHIP: 4293907967,
            PEACHPUFF: 4292524543,
            PERU: 3448061951,
            PINK: 4290825215,
            PLUM: 3718307327,
            POWDERBLUE: 2967529215,
            PURPLE: 2147516671,
            REBECCAPURPLE: 1714657791,
            RED: 4278190335,
            ROSYBROWN: 3163525119,
            ROYALBLUE: 1097458175,
            SADDLEBROWN: 2336560127,
            SALMON: 4202722047,
            SANDYBROWN: 4104413439,
            SEAGREEN: 780883967,
            SEASHELL: 4294307583,
            SIENNA: 2689740287,
            SILVER: 3233857791,
            SKYBLUE: 2278484991,
            SLATEBLUE: 1784335871,
            SLATEGRAY: 1887473919,
            SLATEGREY: 1887473919,
            SNOW: 4294638335,
            SPRINGGREEN: 16744447,
            STEELBLUE: 1182971135,
            TAN: 3535047935,
            TEAL: 8421631,
            THISTLE: 3636451583,
            TOMATO: 4284696575,
            TRANSPARENT: 0,
            TURQUOISE: 1088475391,
            VIOLET: 4001558271,
            WHEAT: 4125012991,
            WHITE: 4294967295,
            WHITESMOKE: 4126537215,
            YELLOW: 4294902015,
            YELLOWGREEN: 2597139199
        },
        Je = {
            name: "background-clip",
            initialValue: "border-box",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.map((function(A) {
                    if (PA(A)) switch (A.value) {
                        case "padding-box":
                            return 1;
                        case "content-box":
                            return 2
                    }
                    return 0
                }))
            }
        },
        We = {
            name: "background-color",
            initialValue: "transparent",
            prefix: !1,
            type: 3,
            format: "color"
        },
        ze = function(A, e) {
            var t = Ke(A, e[0]),
                n = e[1];
            return n && zA(n) ? {
                color: t,
                stop: n
            } : {
                color: t,
                stop: null
            }
        },
        je = function(A, e) {
            var t = A[0],
                n = A[A.length - 1];
            null === t.stop && (t.stop = ZA), null === n.stop && (n.stop = $A);
            for (var r = [], i = 0, s = 0; s < A.length; s++) {
                var o = A[s].stop;
                if (null !== o) {
                    var a = ee(o, e);
                    a > i ? r.push(a) : r.push(i), i = a
                } else r.push(null)
            }
            var c = null;
            for (s = 0; s < r.length; s++) {
                var l = r[s];
                if (null === l) null === c && (c = s);
                else if (null !== c) {
                    for (var u = s - c, h = (l - r[c - 1]) / (u + 1), w = 1; w <= u; w++) r[c + w - 1] = h * w;
                    c = null
                }
            }
            return A.map((function(A, t) {
                return {
                    color: A.color,
                    stop: Math.max(Math.min(1, r[t] / e), 0)
                }
            }))
        },
        Ze = function(A, e, t) {
            var n = "number" == typeof A ? A : function(A, e, t) {
                    var n = e / 2,
                        r = t / 2,
                        i = ee(A[0], e) - n,
                        s = r - ee(A[1], t);
                    return (Math.atan2(s, i) + 2 * Math.PI) % (2 * Math.PI)
                }(A, e, t),
                r = Math.abs(e * Math.sin(n)) + Math.abs(t * Math.cos(n)),
                i = e / 2,
                s = t / 2,
                o = r / 2,
                a = Math.sin(n - Math.PI / 2) * o,
                c = Math.cos(n - Math.PI / 2) * o;
            return [r, i - c, i + c, s - a, s + a]
        },
        qe = function(A, e) {
            return Math.sqrt(A * A + e * e)
        },
        $e = function(A, e, t, n, r) {
            return [
                [0, 0],
                [0, e],
                [A, 0],
                [A, e]
            ].reduce((function(A, e) {
                var i = e[0],
                    s = e[1],
                    o = qe(t - i, n - s);
                return (r ? o < A.optimumDistance : o > A.optimumDistance) ? {
                    optimumCorner: e,
                    optimumDistance: o
                } : A
            }), {
                optimumDistance: r ? 1 / 0 : -1 / 0,
                optimumCorner: null
            }).optimumCorner
        },
        At = function(A, e) {
            var t = ie(180),
                n = [];
            return XA(e).forEach((function(e, r) {
                if (0 === r) {
                    var i = e[0];
                    if (20 === i.type && -1 !== ["top", "left", "right", "bottom"].indexOf(i.value)) return void(t = re(e));
                    if (ne(i)) return void(t = (te(A, i) + ie(270)) % ie(360))
                }
                var s = ze(A, e);
                n.push(s)
            })), {
                angle: t,
                stops: n,
                type: 1
            }
        },
        et = function(A, e) {
            var t = 0,
                n = 3,
                r = [],
                i = [];
            return XA(e).forEach((function(e, s) {
                var o = !0;
                if (0 === s ? o = e.reduce((function(A, e) {
                        if (PA(e)) switch (e.value) {
                            case "center":
                                return i.push(qA), !1;
                            case "top":
                            case "left":
                                return i.push(ZA), !1;
                            case "right":
                            case "bottom":
                                return i.push($A), !1
                        } else if (zA(e) || WA(e)) return i.push(e), !1;
                        return A
                    }), o) : 1 === s && (o = e.reduce((function(A, e) {
                        if (PA(e)) switch (e.value) {
                            case "circle":
                                return t = 0, !1;
                            case "ellipse":
                                return t = 1, !1;
                            case "contain":
                            case "closest-side":
                                return n = 0, !1;
                            case "farthest-side":
                                return n = 1, !1;
                            case "closest-corner":
                                return n = 2, !1;
                            case "cover":
                            case "farthest-corner":
                                return n = 3, !1
                        } else if (WA(e) || zA(e)) return Array.isArray(n) || (n = []), n.push(e), !1;
                        return A
                    }), o)), o) {
                    var a = ze(A, e);
                    r.push(a)
                }
            })), {
                size: n,
                shape: t,
                stops: r,
                position: i,
                type: 2
            }
        },
        tt = function(A, e) {
            if (22 === e.type) {
                var t = {
                    url: e.value,
                    type: 0
                };
                return A.cache.addImage(e.value), t
            }
            if (18 === e.type) {
                var n = nt[e.name];
                if (void 0 === n) throw new Error('Attempting to parse an unsupported image function "'.concat(e.name, '"'));
                return n(A, e.values)
            }
            throw new Error("Unsupported image type ".concat(e.type))
        },
        nt = {
            "linear-gradient": function(A, e) {
                var t = ie(180),
                    n = [];
                return XA(e).forEach((function(e, r) {
                    if (0 === r) {
                        var i = e[0];
                        if (20 === i.type && "to" === i.value) return void(t = re(e));
                        if (ne(i)) return void(t = te(A, i))
                    }
                    var s = ze(A, e);
                    n.push(s)
                })), {
                    angle: t,
                    stops: n,
                    type: 1
                }
            },
            "-moz-linear-gradient": At,
            "-ms-linear-gradient": At,
            "-o-linear-gradient": At,
            "-webkit-linear-gradient": At,
            "radial-gradient": function(A, e) {
                var t = 0,
                    n = 3,
                    r = [],
                    i = [];
                return XA(e).forEach((function(e, s) {
                    var o = !0;
                    if (0 === s) {
                        var a = !1;
                        o = e.reduce((function(A, e) {
                            if (a)
                                if (PA(e)) switch (e.value) {
                                    case "center":
                                        return i.push(qA), A;
                                    case "top":
                                    case "left":
                                        return i.push(ZA), A;
                                    case "right":
                                    case "bottom":
                                        return i.push($A), A
                                } else(zA(e) || WA(e)) && i.push(e);
                                else if (PA(e)) switch (e.value) {
                                case "circle":
                                    return t = 0, !1;
                                case "ellipse":
                                    return t = 1, !1;
                                case "at":
                                    return a = !0, !1;
                                case "closest-side":
                                    return n = 0, !1;
                                case "cover":
                                case "farthest-side":
                                    return n = 1, !1;
                                case "contain":
                                case "closest-corner":
                                    return n = 2, !1;
                                case "farthest-corner":
                                    return n = 3, !1
                            } else if (WA(e) || zA(e)) return Array.isArray(n) || (n = []), n.push(e), !1;
                            return A
                        }), o)
                    }
                    if (o) {
                        var c = ze(A, e);
                        r.push(c)
                    }
                })), {
                    size: n,
                    shape: t,
                    stops: r,
                    position: i,
                    type: 2
                }
            },
            "-moz-radial-gradient": et,
            "-ms-radial-gradient": et,
            "-o-radial-gradient": et,
            "-webkit-radial-gradient": et,
            "-webkit-gradient": function(A, e) {
                var t = ie(180),
                    n = [],
                    r = 1;
                return XA(e).forEach((function(e, t) {
                    var i = e[0];
                    if (0 === t) {
                        if (PA(i) && "linear" === i.value) return void(r = 1);
                        if (PA(i) && "radial" === i.value) return void(r = 2)
                    }
                    if (18 === i.type)
                        if ("from" === i.name) {
                            var s = Ke(A, i.values[0]);
                            n.push({
                                stop: ZA,
                                color: s
                            })
                        } else if ("to" === i.name) s = Ke(A, i.values[0]), n.push({
                        stop: $A,
                        color: s
                    });
                    else if ("color-stop" === i.name) {
                        var o = i.values.filter(YA);
                        if (2 === o.length) {
                            s = Ke(A, o[1]);
                            var a = o[0];
                            RA(a) && n.push({
                                stop: {
                                    type: 16,
                                    number: 100 * a.number,
                                    flags: a.flags
                                },
                                color: s
                            })
                        }
                    }
                })), 1 === r ? {
                    angle: (t + ie(180)) % ie(360),
                    stops: n,
                    type: r
                } : {
                    size: 3,
                    shape: 0,
                    stops: n,
                    position: [],
                    type: r
                }
            }
        },
        rt = {
            name: "background-image",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function(A, e) {
                if (0 === e.length) return [];
                var t = e[0];
                return 20 === t.type && "none" === t.value ? [] : e.filter((function(A) {
                    return YA(A) && function(A) {
                        return !(20 === A.type && "none" === A.value || 18 === A.type && !nt[A.name])
                    }(A)
                })).map((function(e) {
                    return tt(A, e)
                }))
            }
        },
        it = {
            name: "background-origin",
            initialValue: "border-box",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.map((function(A) {
                    if (PA(A)) switch (A.value) {
                        case "padding-box":
                            return 1;
                        case "content-box":
                            return 2
                    }
                    return 0
                }))
            }
        },
        st = {
            name: "background-position",
            initialValue: "0% 0%",
            type: 1,
            prefix: !1,
            parse: function(A, e) {
                return XA(e).map((function(A) {
                    return A.filter(zA)
                })).map(jA)
            }
        },
        ot = {
            name: "background-repeat",
            initialValue: "repeat",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return XA(e).map((function(A) {
                    return A.filter(PA).map((function(A) {
                        return A.value
                    })).join(" ")
                })).map(at)
            }
        },
        at = function(A) {
            switch (A) {
                case "no-repeat":
                    return 1;
                case "repeat-x":
                case "repeat no-repeat":
                    return 2;
                case "repeat-y":
                case "no-repeat repeat":
                    return 3;
                case "repeat":
                default:
                    return 0
            }
        };
    ! function(A) {
        A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover"
    }(Q || (Q = {}));
    var ct, lt = {
            name: "background-size",
            initialValue: "0",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return XA(e).map((function(A) {
                    return A.filter(ut)
