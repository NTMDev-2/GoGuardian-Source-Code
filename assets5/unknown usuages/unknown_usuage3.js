// 2001 - 2665
                        if (w.c >= w.l) return !1;
                        w.c++
                    }
                    return !0
                }

                function g(A, e) {
                    var t, n;
                    if (w.k = w.c, t = w.f_a_b(A, e)) {
                        switch (w.b = w.c, t) {
                            case 1:
                                if (n = w.l - w.c, !w.e_s_b(1, "Ð°") && (w.c = w.l - n, !w.e_s_b(1, "Ñ"))) return !1;
                            case 2:
                                w.s_d()
                        }
                        return !0
                    }
                    return !1
                }

                function B(A, e) {
                    var t;
                    return w.k = w.c, !!(t = w.f_a_b(A, e)) && (w.b = w.c, 1 == t && w.s_d(), !0)
                }

                function p() {
                    return !!B(i, 26) && (g(s, 8), !0)
                }

                function m() {
                    var e;
                    w.k = w.c, (e = w.f_a_b(l, 2)) && (w.b = w.c, A <= w.c && 1 == e && w.s_d())
                }
                this.setCurrent = function(A) {
                    w.s_c(A)
                }, this.getCurrent = function() {
                    return w.g_c()
                }, this.stem = function() {
                    return n = w.l, A = n, d() && (n = w.c, f() && d() && f() && (A = w.c)), w.c = w.l, !(w.c < n) && (w.lb = n, g(r, 9) || (w.c = w.l, B(o, 2) || (w.c = w.l), p() || (w.c = w.l, g(a, 46) || (w.c = w.l, B(c, 36)))), w.c = w.l, w.k = w.c, w.e_s_b(1, "Ð¸") ? (w.b = w.c, w.s_d()) : w.c = w.l, m(), w.c = w.l, function() {
                        var A;
                        if (w.k = w.c, A = w.f_a_b(u, 4)) switch (w.b = w.c, A) {
                            case 1:
                                if (w.s_d(), w.k = w.c, !w.e_s_b(1, "Ð½")) break;
                                w.b = w.c;
                            case 2:
                                if (!w.e_s_b(1, "Ð½")) break;
                            case 3:
                                w.s_d()
                        }
                    }(), !0)
                }
            },
            SpanishStemmer: function() {
                var A, n, r, i = [new e("", -1, 6), new e("Ã¡", 0, 1), new e("Ã©", 0, 2), new e("Ã­", 0, 3), new e("Ã³", 0, 4), new e("Ãº", 0, 5)],
                    s = [new e("la", -1, -1), new e("sela", 0, -1), new e("le", -1, -1), new e("me", -1, -1), new e("se", -1, -1), new e("lo", -1, -1), new e("selo", 5, -1), new e("las", -1, -1), new e("selas", 7, -1), new e("les", -1, -1), new e("los", -1, -1), new e("selos", 10, -1), new e("nos", -1, -1)],
                    o = [new e("ando", -1, 6), new e("iendo", -1, 6), new e("yendo", -1, 7), new e("Ã¡ndo", -1, 2), new e("iÃ©ndo", -1, 1), new e("ar", -1, 6), new e("er", -1, 6), new e("ir", -1, 6), new e("Ã¡r", -1, 3), new e("Ã©r", -1, 4), new e("Ã­r", -1, 5)],
                    a = [new e("ic", -1, -1), new e("ad", -1, -1), new e("os", -1, -1), new e("iv", -1, 1)],
                    c = [new e("able", -1, 1), new e("ible", -1, 1), new e("ante", -1, 1)],
                    l = [new e("ic", -1, 1), new e("abil", -1, 1), new e("iv", -1, 1)],
                    u = [new e("ica", -1, 1), new e("ancia", -1, 2), new e("encia", -1, 5), new e("adora", -1, 2), new e("osa", -1, 1), new e("ista", -1, 1), new e("iva", -1, 9), new e("anza", -1, 1), new e("logÃ­a", -1, 3), new e("idad", -1, 8), new e("able", -1, 1), new e("ible", -1, 1), new e("ante", -1, 2), new e("mente", -1, 7), new e("amente", 13, 6), new e("aciÃ³n", -1, 2), new e("uciÃ³n", -1, 4), new e("ico", -1, 1), new e("ismo", -1, 1), new e("oso", -1, 1), new e("amiento", -1, 1), new e("imiento", -1, 1), new e("ivo", -1, 9), new e("ador", -1, 2), new e("icas", -1, 1), new e("ancias", -1, 2), new e("encias", -1, 5), new e("adoras", -1, 2), new e("osas", -1, 1), new e("istas", -1, 1), new e("ivas", -1, 9), new e("anzas", -1, 1), new e("logÃ­as", -1, 3), new e("idades", -1, 8), new e("ables", -1, 1), new e("ibles", -1, 1), new e("aciones", -1, 2), new e("uciones", -1, 4), new e("adores", -1, 2), new e("antes", -1, 2), new e("icos", -1, 1), new e("ismos", -1, 1), new e("osos", -1, 1), new e("amientos", -1, 1), new e("imientos", -1, 1), new e("ivos", -1, 9)],
                    h = [new e("ya", -1, 1), new e("ye", -1, 1), new e("yan", -1, 1), new e("yen", -1, 1), new e("yeron", -1, 1), new e("yendo", -1, 1), new e("yo", -1, 1), new e("yas", -1, 1), new e("yes", -1, 1), new e("yais", -1, 1), new e("yamos", -1, 1), new e("yÃ³", -1, 1)],
                    w = [new e("aba", -1, 2), new e("ada", -1, 2), new e("ida", -1, 2), new e("ara", -1, 2), new e("iera", -1, 2), new e("Ã­a", -1, 2), new e("arÃ­a", 5, 2), new e("erÃ­a", 5, 2), new e("irÃ­a", 5, 2), new e("ad", -1, 2), new e("ed", -1, 2), new e("id", -1, 2), new e("ase", -1, 2), new e("iese", -1, 2), new e("aste", -1, 2), new e("iste", -1, 2), new e("an", -1, 2), new e("aban", 16, 2), new e("aran", 16, 2), new e("ieran", 16, 2), new e("Ã­an", 16, 2), new e("arÃ­an", 20, 2), new e("erÃ­an", 20, 2), new e("irÃ­an", 20, 2), new e("en", -1, 1), new e("asen", 24, 2), new e("iesen", 24, 2), new e("aron", -1, 2), new e("ieron", -1, 2), new e("arÃ¡n", -1, 2), new e("erÃ¡n", -1, 2), new e("irÃ¡n", -1, 2), new e("ado", -1, 2), new e("ido", -1, 2), new e("ando", -1, 2), new e("iendo", -1, 2), new e("ar", -1, 2), new e("er", -1, 2), new e("ir", -1, 2), new e("as", -1, 2), new e("abas", 39, 2), new e("adas", 39, 2), new e("idas", 39, 2), new e("aras", 39, 2), new e("ieras", 39, 2), new e("Ã­as", 39, 2), new e("arÃ­as", 45, 2), new e("erÃ­as", 45, 2), new e("irÃ­as", 45, 2), new e("es", -1, 1), new e("ases", 49, 2), new e("ieses", 49, 2), new e("abais", -1, 2), new e("arais", -1, 2), new e("ierais", -1, 2), new e("Ã­ais", -1, 2), new e("arÃ­ais", 55, 2), new e("erÃ­ais", 55, 2), new e("irÃ­ais", 55, 2), new e("aseis", -1, 2), new e("ieseis", -1, 2), new e("asteis", -1, 2), new e("isteis", -1, 2), new e("Ã¡is", -1, 2), new e("Ã©is", -1, 1), new e("arÃ©is", 64, 2), new e("erÃ©is", 64, 2), new e("irÃ©is", 64, 2), new e("ados", -1, 2), new e("idos", -1, 2), new e("amos", -1, 2), new e("Ã¡bamos", 70, 2), new e("Ã¡ramos", 70, 2), new e("iÃ©ramos", 70, 2), new e("Ã­amos", 70, 2), new e("arÃ­amos", 74, 2), new e("erÃ­amos", 74, 2), new e("irÃ­amos", 74, 2), new e("emos", -1, 1), new e("aremos", 78, 2), new e("eremos", 78, 2), new e("iremos", 78, 2), new e("Ã¡semos", 78, 2), new e("iÃ©semos", 78, 2), new e("imos", -1, 2), new e("arÃ¡s", -1, 2), new e("erÃ¡s", -1, 2), new e("irÃ¡s", -1, 2), new e("Ã­s", -1, 2), new e("arÃ¡", -1, 2), new e("erÃ¡", -1, 2), new e("irÃ¡", -1, 2), new e("arÃ©", -1, 2), new e("erÃ©", -1, 2), new e("irÃ©", -1, 2), new e("iÃ³", -1, 2)],
                    d = [new e("a", -1, 1), new e("e", -1, 2), new e("o", -1, 1), new e("os", -1, 1), new e("Ã¡", -1, 1), new e("Ã©", -1, 2), new e("Ã­", -1, 1), new e("Ã³", -1, 1)],
                    f = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 10],
                    g = new t;

                function B() {
                    if (g.o_g(f, 97, 252)) {
                        for (; !g.i_g(f, 97, 252);) {
                            if (g.c >= g.l) return !0;
                            g.c++
                        }
                        return !1
                    }
                    return !0
                }

                function p() {
                    var A, e = g.c;
                    if (function() {
                            if (g.i_g(f, 97, 252)) {
                                var A = g.c;
                                if (B()) {
                                    if (g.c = A, !g.i_g(f, 97, 252)) return !0;
                                    for (; !g.o_g(f, 97, 252);) {
                                        if (g.c >= g.l) return !0;
                                        g.c++
                                    }
                                }
                                return !1
                            }
                            return !0
                        }()) {
                        if (g.c = e, !g.o_g(f, 97, 252)) return;
                        if (A = g.c, B()) {
                            if (g.c = A, !g.i_g(f, 97, 252) || g.c >= g.l) return;
                            g.c++
                        }
                    }
                    r = g.c
                }

                function m() {
                    for (; !g.i_g(f, 97, 252);) {
                        if (g.c >= g.l) return !1;
                        g.c++
                    }
                    for (; !g.o_g(f, 97, 252);) {
                        if (g.c >= g.l) return !1;
                        g.c++
                    }
                    return !0
                }

                function b() {
                    return r <= g.c
                }

                function Q() {
                    return A <= g.c
                }

                function C(A, e) {
                    if (!Q()) return !0;
                    g.s_d(), g.k = g.c;
                    var t = g.f_a_b(A, e);
                    return t && (g.b = g.c, 1 == t && Q() && g.s_d()), !1
                }

                function y(A) {
                    return !Q() || (g.s_d(), g.k = g.c, g.e_s_b(2, A) && (g.b = g.c, Q() && g.s_d()), !1)
                }

                function v() {
                    var A;
                    if (g.k = g.c, A = g.f_a_b(u, 46)) {
                        switch (g.b = g.c, A) {
                            case 1:
                                if (!Q()) return !1;
                                g.s_d();
                                break;
                            case 2:
                                if (y("ic")) return !1;
                                break;
                            case 3:
                                if (!Q()) return !1;
                                g.s_f("log");
                                break;
                            case 4:
                                if (!Q()) return !1;
                                g.s_f("u");
                                break;
                            case 5:
                                if (!Q()) return !1;
                                g.s_f("ente");
                                break;
                            case 6:
                                if (!(n <= g.c)) return !1;
                                g.s_d(), g.k = g.c, (A = g.f_a_b(a, 4)) && (g.b = g.c, Q() && (g.s_d(), 1 == A && (g.k = g.c, g.e_s_b(2, "at") && (g.b = g.c, Q() && g.s_d()))));
                                break;
                            case 7:
                                if (C(c, 3)) return !1;
                                break;
                            case 8:
                                if (C(l, 3)) return !1;
                                break;
                            case 9:
                                if (y("at")) return !1
                        }
                        return !0
                    }
                    return !1
                }
                this.setCurrent = function(A) {
                    g.s_c(A)
                }, this.getCurrent = function() {
                    return g.g_c()
                }, this.stem = function() {
                    var e = g.c;
                    return function() {
                            var e = g.c;
                            r = g.l, n = r, A = r, p(), g.c = e, m() && (n = g.c, m() && (A = g.c))
                        }(), g.lb = e, g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, g.f_a_b(s, 13) && (g.b = g.c, (A = g.f_a_b(o, 11)) && b())) switch (A) {
                                case 1:
                                    g.b = g.c, g.s_f("iendo");
                                    break;
                                case 2:
                                    g.b = g.c, g.s_f("ando");
                                    break;
                                case 3:
                                    g.b = g.c, g.s_f("ar");
                                    break;
                                case 4:
                                    g.b = g.c, g.s_f("er");
                                    break;
                                case 5:
                                    g.b = g.c, g.s_f("ir");
                                    break;
                                case 6:
                                    g.s_d();
                                    break;
                                case 7:
                                    g.e_s_b(1, "u") && g.s_d()
                            }
                        }(), g.c = g.l, v() || (g.c = g.l, function() {
                            var A, e;
                            if (g.c >= r && (e = g.lb, g.lb = r, g.k = g.c, A = g.f_a_b(h, 12), g.lb = e, A)) {
                                if (g.b = g.c, 1 == A) {
                                    if (!g.e_s_b(1, "u")) return !1;
                                    g.s_d()
                                }
                                return !0
                            }
                            return !1
                        }() || (g.c = g.l, function() {
                            var A, e, t, n;
                            if (g.c >= r && (e = g.lb, g.lb = r, g.k = g.c, A = g.f_a_b(w, 96), g.lb = e, A)) switch (g.b = g.c, A) {
                                case 1:
                                    t = g.l - g.c, g.e_s_b(1, "u") ? (n = g.l - g.c, g.e_s_b(1, "g") ? g.c = g.l - n : g.c = g.l - t) : g.c = g.l - t, g.b = g.c;
                                case 2:
                                    g.s_d()
                            }
                        }())), g.c = g.l,
                        function() {
                            var A, e;
                            if (g.k = g.c, A = g.f_a_b(d, 8)) switch (g.b = g.c, A) {
                                case 1:
                                    b() && g.s_d();
                                    break;
                                case 2:
                                    b() && (g.s_d(), g.k = g.c, g.e_s_b(1, "u") && (g.b = g.c, e = g.l - g.c, g.e_s_b(1, "g") && (g.c = g.l - e, b() && g.s_d())))
                            }
                        }(), g.c = g.lb,
                        function() {
                            for (var A;;) {
                                if (g.b = g.c, A = g.f_a(i, 6)) switch (g.k = g.c, A) {
                                    case 1:
                                        g.s_f("a");
                                        continue;
                                    case 2:
                                        g.s_f("e");
                                        continue;
                                    case 3:
                                        g.s_f("i");
                                        continue;
                                    case 4:
                                        g.s_f("o");
                                        continue;
                                    case 5:
                                        g.s_f("u");
                                        continue;
                                    case 6:
                                        if (g.c >= g.l) break;
                                        g.c++;
                                        continue
                                }
                                break
                            }
                        }(), !0
                }
            },
            SwedishStemmer: function() {
                var A, n, r = [new e("a", -1, 1), new e("arna", 0, 1), new e("erna", 0, 1), new e("heterna", 2, 1), new e("orna", 0, 1), new e("ad", -1, 1), new e("e", -1, 1), new e("ade", 6, 1), new e("ande", 6, 1), new e("arne", 6, 1), new e("are", 6, 1), new e("aste", 6, 1), new e("en", -1, 1), new e("anden", 12, 1), new e("aren", 12, 1), new e("heten", 12, 1), new e("ern", -1, 1), new e("ar", -1, 1), new e("er", -1, 1), new e("heter", 18, 1), new e("or", -1, 1), new e("s", -1, 2), new e("as", 21, 1), new e("arnas", 22, 1), new e("ernas", 22, 1), new e("ornas", 22, 1), new e("es", 21, 1), new e("ades", 26, 1), new e("andes", 26, 1), new e("ens", 21, 1), new e("arens", 29, 1), new e("hetens", 29, 1), new e("erns", 21, 1), new e("at", -1, 1), new e("andet", -1, 1), new e("het", -1, 1), new e("ast", -1, 1)],
                    i = [new e("dd", -1, -1), new e("gd", -1, -1), new e("nn", -1, -1), new e("dt", -1, -1), new e("gt", -1, -1), new e("kt", -1, -1), new e("tt", -1, -1)],
                    s = [new e("ig", -1, 1), new e("lig", 0, 1), new e("els", -1, 1), new e("fullt", -1, 3), new e("lÃ¶st", -1, 2)],
                    o = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32],
                    a = [119, 127, 149],
                    c = new t;
                this.setCurrent = function(A) {
                    c.s_c(A)
                }, this.getCurrent = function() {
                    return c.g_c()
                }, this.stem = function() {
                    var e = c.c;
                    return function() {
                            var e, t = c.c + 3;
                            if (n = c.l, 0 <= t || t <= c.l) {
                                for (A = t;;) {
                                    if (e = c.c, c.i_g(o, 97, 246)) {
                                        c.c = e;
                                        break
                                    }
                                    if (c.c = e, c.c >= c.l) return;
                                    c.c++
                                }
                                for (; !c.o_g(o, 97, 246);) {
                                    if (c.c >= c.l) return;
                                    c.c++
                                }(n = c.c) < A && (n = A)
                            }
                        }(), c.lb = e, c.c = c.l,
                        function() {
                            var A, e = c.lb;
                            if (c.c >= n && (c.lb = n, c.c = c.l, c.k = c.c, A = c.f_a_b(r, 37), c.lb = e, A)) switch (c.b = c.c, A) {
                                case 1:
                                    c.s_d();
                                    break;
                                case 2:
                                    c.i_g_b(a, 98, 121) && c.s_d()
                            }
                        }(), c.c = c.l,
                        function() {
                            var A = c.lb;
                            c.c >= n && (c.lb = n, c.c = c.l, c.f_a_b(i, 7) && (c.c = c.l, c.k = c.c, c.c > c.lb && (c.b = --c.c, c.s_d())), c.lb = A)
                        }(), c.c = c.l,
                        function() {
                            var A, e;
                            if (c.c >= n) {
                                if (e = c.lb, c.lb = n, c.c = c.l, c.k = c.c, A = c.f_a_b(s, 5)) switch (c.b = c.c, A) {
                                    case 1:
                                        c.s_d();
                                        break;
                                    case 2:
                                        c.s_f("lÃ¶s");
                                        break;
                                    case 3:
                                        c.s_f("full")
                                }
                                c.lb = e
                            }
                        }(), !0
                }
            },
            TurkishStemmer: function() {
                var A, n = [new e("m", -1, -1), new e("n", -1, -1), new e("miz", -1, -1), new e("niz", -1, -1), new e("muz", -1, -1), new e("nuz", -1, -1), new e("mÃ¼z", -1, -1), new e("nÃ¼z", -1, -1), new e("mÄ±z", -1, -1), new e("nÄ±z", -1, -1)],
                    r = [new e("leri", -1, -1), new e("larÄ±", -1, -1)],
                    i = [new e("ni", -1, -1), new e("nu", -1, -1), new e("nÃ¼", -1, -1), new e("nÄ±", -1, -1)],
                    s = [new e("in", -1, -1), new e("un", -1, -1), new e("Ã¼n", -1, -1), new e("Ä±n", -1, -1)],
                    o = [new e("a", -1, -1), new e("e", -1, -1)],
                    a = [new e("na", -1, -1), new e("ne", -1, -1)],
                    c = [new e("da", -1, -1), new e("ta", -1, -1), new e("de", -1, -1), new e("te", -1, -1)],
                    l = [new e("nda", -1, -1), new e("nde", -1, -1)],
                    u = [new e("dan", -1, -1), new e("tan", -1, -1), new e("den", -1, -1), new e("ten", -1, -1)],
                    h = [new e("ndan", -1, -1), new e("nden", -1, -1)],
                    w = [new e("la", -1, -1), new e("le", -1, -1)],
                    d = [new e("ca", -1, -1), new e("ce", -1, -1)],
                    f = [new e("im", -1, -1), new e("um", -1, -1), new e("Ã¼m", -1, -1), new e("Ä±m", -1, -1)],
                    g = [new e("sin", -1, -1), new e("sun", -1, -1), new e("sÃ¼n", -1, -1), new e("sÄ±n", -1, -1)],
                    B = [new e("iz", -1, -1), new e("uz", -1, -1), new e("Ã¼z", -1, -1), new e("Ä±z", -1, -1)],
                    p = [new e("siniz", -1, -1), new e("sunuz", -1, -1), new e("sÃ¼nÃ¼z", -1, -1), new e("sÄ±nÄ±z", -1, -1)],
                    m = [new e("lar", -1, -1), new e("ler", -1, -1)],
                    b = [new e("niz", -1, -1), new e("nuz", -1, -1), new e("nÃ¼z", -1, -1), new e("nÄ±z", -1, -1)],
                    Q = [new e("dir", -1, -1), new e("tir", -1, -1), new e("dur", -1, -1), new e("tur", -1, -1), new e("dÃ¼r", -1, -1), new e("tÃ¼r", -1, -1), new e("dÄ±r", -1, -1), new e("tÄ±r", -1, -1)],
                    C = [new e("casÄ±na", -1, -1), new e("cesine", -1, -1)],
                    y = [new e("di", -1, -1), new e("ti", -1, -1), new e("dik", -1, -1), new e("tik", -1, -1), new e("duk", -1, -1), new e("tuk", -1, -1), new e("dÃ¼k", -1, -1), new e("tÃ¼k", -1, -1), new e("dÄ±k", -1, -1), new e("tÄ±k", -1, -1), new e("dim", -1, -1), new e("tim", -1, -1), new e("dum", -1, -1), new e("tum", -1, -1), new e("dÃ¼m", -1, -1), new e("tÃ¼m", -1, -1), new e("dÄ±m", -1, -1), new e("tÄ±m", -1, -1), new e("din", -1, -1), new e("tin", -1, -1), new e("dun", -1, -1), new e("tun", -1, -1), new e("dÃ¼n", -1, -1), new e("tÃ¼n", -1, -1), new e("dÄ±n", -1, -1), new e("tÄ±n", -1, -1), new e("du", -1, -1), new e("tu", -1, -1), new e("dÃ¼", -1, -1), new e("tÃ¼", -1, -1), new e("dÄ±", -1, -1), new e("tÄ±", -1, -1)],
                    v = [new e("sa", -1, -1), new e("se", -1, -1), new e("sak", -1, -1), new e("sek", -1, -1), new e("sam", -1, -1), new e("sem", -1, -1), new e("san", -1, -1), new e("sen", -1, -1)],
                    U = [new e("miÅŸ", -1, -1), new e("muÅŸ", -1, -1), new e("mÃ¼ÅŸ", -1, -1), new e("mÄ±ÅŸ", -1, -1)],
                    _ = [new e("b", -1, 1), new e("c", -1, 2), new e("d", -1, 3), new e("ÄŸ", -1, 4)],
                    F = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0, 0, 1],
                    E = [1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1],
                    I = [65],
                    H = [65],
                    k = [
                        ["a", [1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 97, 305],
                        ["e", [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130], 101, 252],
                        ["Ä±", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 97, 305],
                        ["i", [17], 101, 105],
                        ["o", I, 111, 117],
                        ["Ã¶", H, 246, 252],
                        ["u", I, 111, 117]
                    ],
                    S = new t;

                function T(A, e, t) {
                    for (;;) {
                        var n = S.l - S.c;
                        if (S.i_g_b(A, e, t)) {
                            S.c = S.l - n;
                            break
                        }
                        if (S.c = S.l - n, S.c <= S.lb) return !1;
                        S.c--
                    }
                    return !0
                }

                function x() {
                    var A, e;
                    A = S.l - S.c, T(F, 97, 305);
                    for (var t = 0; t < k.length; t++) {
                        e = S.l - S.c;
                        var n = k[t];
                        if (S.e_s_b(1, n[0]) && T(n[1], n[2], n[3])) return S.c = S.l - A, !0;
                        S.c = S.l - e
                    }
                    return S.c = S.l - e, !(!S.e_s_b(1, "Ã¼") || !T(H, 246, 252)) && (S.c = S.l - A, !0)
                }

                function L(A, e) {
                    var t, n = S.l - S.c;
                    return A() && (S.c = S.l - n, S.c > S.lb && (S.c--, t = S.l - S.c, e())) ? (S.c = S.l - t, !0) : (S.c = S.l - n, A() ? (S.c = S.l - n, !1) : (S.c = S.l - n, !(S.c <= S.lb) && (S.c--, !!e() && (S.c = S.l - n, !0))))
                }

                function O(A) {
                    return L(A, (function() {
                        return S.i_g_b(F, 97, 305)
                    }))
                }

                function D() {
                    return O((function() {
                        return S.e_s_b(1, "n")
                    }))
                }

                function K() {
                    return O((function() {
                        return S.e_s_b(1, "y")
                    }))
                }

                function M() {
                    return S.f_a_b(n, 10) && L((function() {
                        return S.i_g_b(E, 105, 305)
                    }), (function() {
                        return S.o_g_b(F, 97, 305)
                    }))
                }

                function R() {
                    return x() && S.i_g_b(E, 105, 305) && O((function() {
                        return S.e_s_b(1, "s")
                    }))
                }

                function P() {
                    return S.f_a_b(r, 2)
                }

                function N() {
                    return x() && S.f_a_b(s, 4) && D()
                }

                function V() {
                    return x() && S.f_a_b(c, 4)
                }

                function G() {
                    return x() && S.f_a_b(l, 2)
                }

                function Y() {
                    return x() && S.f_a_b(f, 4) && K()
                }

                function X() {
                    return x() && S.f_a_b(g, 4)
                }

                function J() {
                    return x() && S.f_a_b(B, 4) && K()
                }

                function W() {
                    return S.f_a_b(p, 4)
                }

                function z() {
                    return x() && S.f_a_b(m, 2)
                }

                function j() {
                    return x() && S.f_a_b(Q, 8)
                }

                function Z() {
                    return x() && S.f_a_b(y, 32) && K()
                }

                function q() {
                    return S.f_a_b(v, 8) && K()
                }

                function $() {
                    return x() && S.f_a_b(U, 4) && K()
                }

                function AA() {
                    var A = S.l - S.c;
                    return !($() || (S.c = S.l - A, Z() || (S.c = S.l - A, q() || (S.c = S.l - A, S.e_s_b(3, "ken") && K()))))
                }

                function eA() {
                    if (S.f_a_b(C, 2)) {
                        var A = S.l - S.c;
                        if (W() || (S.c = S.l - A, z() || (S.c = S.l - A, Y() || (S.c = S.l - A, X() || (S.c = S.l - A, J() || (S.c = S.l - A))))), $()) return !1
                    }
                    return !0
                }

                function tA() {
                    if (!x() || !S.f_a_b(b, 4)) return !0;
                    var A = S.l - S.c;
                    return !Z() && (S.c = S.l - A, !q())
                }

                function nA() {
                    var e, t = S.l - S.c;
                    if (S.k = S.c, A = !0, AA() && (S.c = S.l - t, eA() && (S.c = S.l - t, function() {
                            if (z()) {
                                S.b = S.c, S.s_d();
                                var e = S.l - S.c;
                                return S.k = S.c, j() || (S.c = S.l - e, Z() || (S.c = S.l - e, q() || (S.c = S.l - e, $() || (S.c = S.l - e)))), A = !1, !1
                            }
                            return !0
                        }() && (S.c = S.l - t, tA() && (S.c = S.l - t, function() {
                            var A, e = S.l - S.c;
                            return !(W() || (S.c = S.l - e, J() || (S.c = S.l - e, X() || (S.c = S.l - e, Y())))) || (S.b = S.c, S.s_d(), A = S.l - S.c, S.k = S.c, $() || (S.c = S.l - A), !1)
                        }()))))) {
                        if (S.c = S.l - t, !j()) return;
                        S.b = S.c, S.s_d(), S.k = S.c, e = S.l - S.c, W() || (S.c = S.l - e, z() || (S.c = S.l - e, Y() || (S.c = S.l - e, X() || (S.c = S.l - e, J() || (S.c = S.l - e))))), $() || (S.c = S.l - e)
                    }
                    S.b = S.c, S.s_d()
                }

                function rA() {
                    var A, e, t, n;
                    if (S.k = S.c, S.e_s_b(2, "ki")) {
                        if (A = S.l - S.c, V()) return S.b = S.c, S.s_d(), e = S.l - S.c, S.k = S.c, z() ? (S.b = S.c, S.s_d(), rA()) : (S.c = S.l - e, M() && (S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA()))), !0;
                        if (S.c = S.l - A, N()) {
                            if (S.b = S.c, S.s_d(), S.k = S.c, t = S.l - S.c, P()) S.b = S.c, S.s_d();
                            else {
                                if (S.c = S.l - t, S.k = S.c, !M() && (S.c = S.l - t, !R() && (S.c = S.l - t, !rA()))) return !0;
                                S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA())
                            }
                            return !0
                        }
                        if (S.c = S.l - A, G()) {
                            if (n = S.l - S.c, P()) S.b = S.c, S.s_d();
                            else if (S.c = S.l - n, R()) S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA());
                            else if (S.c = S.l - n, !rA()) return !1;
                            return !0
                        }
                    }
                    return !1
                }

                function iA(A) {
                    if (S.k = S.c, !G() && (S.c = S.l - A, !x() || !S.f_a_b(a, 2))) return !1;
                    var e = S.l - S.c;
                    if (P()) S.b = S.c, S.s_d();
                    else if (S.c = S.l - e, R()) S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA());
                    else if (S.c = S.l - e, !rA()) return !1;
                    return !0
                }

                function sA(A) {
                    if (S.k = S.c, !(x() && S.f_a_b(h, 2) || (S.c = S.l - A, x() && S.f_a_b(i, 4)))) return !1;
                    var e = S.l - S.c;
                    return !(!R() && (S.c = S.l - e, !P())) && (S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA()), !0)
                }

                function oA() {
                    var A, e = S.l - S.c;
                    return S.k = S.c, !!(N() || (S.c = S.l - e, x() && S.f_a_b(w, 2) && K())) && (S.b = S.c, S.s_d(), A = S.l - S.c, S.k = S.c, !(!z() || (S.b = S.c, S.s_d(), !rA())) || (S.c = S.l - A, S.k = S.c, !(M() || (S.c = S.l - A, R() || (S.c = S.l - A, rA()))) || (S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA()), !0)))
                }

                function aA() {
                    var A, e, t = S.l - S.c;
                    if (S.k = S.c, !(V() || (S.c = S.l - t, x() && S.i_g_b(E, 105, 305) && K() || (S.c = S.l - t, x() && S.f_a_b(o, 2) && K())))) return !1;
                    if (S.b = S.c, S.s_d(), S.k = S.c, A = S.l - S.c, M()) S.b = S.c, S.s_d(), e = S.l - S.c, S.k = S.c, z() || (S.c = S.l - e);
                    else if (S.c = S.l - A, !z()) return !0;
                    return S.b = S.c, S.s_d(), S.k = S.c, rA(), !0
                }

                function cA() {
                    var A, e, t = S.l - S.c;
                    if (S.k = S.c, z()) return S.b = S.c, S.s_d(), void rA();
                    if (S.c = S.l - t, S.k = S.c, x() && S.f_a_b(d, 2) && D())
                        if (S.b = S.c, S.s_d(), A = S.l - S.c, S.k = S.c, P()) S.b = S.c, S.s_d();
                        else {
                            if (S.c = S.l - A, S.k = S.c, !M() && (S.c = S.l - A, !R())) {
                                if (S.c = S.l - A, S.k = S.c, !z()) return;
                                if (S.b = S.c, S.s_d(), !rA()) return
                            }
                            S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA())
                        }
                    else if (S.c = S.l - t, !iA(t) && (S.c = S.l - t, !sA(t))) {
                        if (S.c = S.l - t, S.k = S.c, x() && S.f_a_b(u, 4)) return S.b = S.c, S.s_d(), S.k = S.c, e = S.l - S.c, void(M() ? (S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA())) : (S.c = S.l - e, z() ? (S.b = S.c, S.s_d(), rA()) : (S.c = S.l - e, rA())));
                        if (S.c = S.l - t, !oA()) {
                            if (S.c = S.l - t, P()) return S.b = S.c, void S.s_d();
                            S.c = S.l - t, rA() || (S.c = S.l - t, aA() || (S.c = S.l - t, S.k = S.c, (M() || (S.c = S.l - t, R())) && (S.b = S.c, S.s_d(), S.k = S.c, z() && (S.b = S.c, S.s_d(), rA()))))
                        }
                    }
                }

                function lA(A, e, t) {
                    if (S.c = S.l - A, function() {
                            for (;;) {
                                var A = S.l - S.c;
                                if (S.i_g_b(F, 97, 305)) {
                                    S.c = S.l - A;
                                    break
                                }
                                if (S.c = S.l - A, S.c <= S.lb) return !1;
                                S.c--
                            }
                            return !0
                        }()) {
                        var n = S.l - S.c;
                        if (!S.e_s_b(1, e) && (S.c = S.l - n, !S.e_s_b(1, t))) return !0;
                        S.c = S.l - A;
                        var r = S.c;
                        return S.i_(S.c, S.c, t), S.c = r, !1
                    }
                    return !0
                }

                function uA(A, e, t) {
                    for (; !S.e_s(e, t);) {
                        if (S.c >= S.l) return !0;
                        S.c++
                    }
                    return e != S.l || (S.c = A, !1)
                }

                function hA() {
                    var A = S.c;
                    return ! function() {
                        var A = S.c;
                        return !uA(A, 2, "ad") || (S.c = A, !uA(A, 5, "soyad"))
                    }() && (S.lb = A, S.c = S.l, function() {
                        var A = S.l - S.c;
                        (S.e_s_b(1, "d") || (S.c = S.l - A, S.e_s_b(1, "g"))) && lA(A, "a", "Ä±") && lA(A, "e", "i") && lA(A, "o", "u") && lA(A, "Ã¶", "Ã¼")
                    }(), S.c = S.l, function() {
                        var A;
                        if (S.k = S.c, A = S.f_a_b(_, 4)) switch (S.b = S.c, A) {
                            case 1:
                                S.s_f("p");
                                break;
                            case 2:
                                S.s_f("Ã§");
                                break;
                            case 3:
                                S.s_f("t");
                                break;
                            case 4:
                                S.s_f("k")
                        }
                    }(), !0)
                }
                this.setCurrent = function(A) {
                    S.s_c(A)
                }, this.getCurrent = function() {
                    return S.g_c()
                }, this.stem = function() {
                    return !!(function() {
                        for (var A, e = S.c, t = 2;;) {
                            for (A = S.c; !S.i_g(F, 97, 305);) {
                                if (S.c >= S.l) return S.c = A, !(t > 0) && (S.c = e, !0);
                                S.c++
                            }
                            t--
                        }
                    }() && (S.lb = S.c, S.c = S.l, nA(), S.c = S.l, A && (cA(), S.c = S.lb, hA())))
                }
            }
        },
        r = A.substring(0, 1).toUpperCase() + A.substring(1).toLowerCase() + "Stemmer";
    return new n[r]
}
},
