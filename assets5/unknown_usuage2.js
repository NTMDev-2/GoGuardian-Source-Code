// 1001 - 2000
            }(), g.c = g.l,
                        function() {
                            for (var A, e = 1; g.o_g_b(d, 97, 251);) e--;
                            if (e <= 0) {
                                if (g.k = g.c, A = g.l - g.c, !g.e_s_b(1, "Ã©") && (g.c = g.l - A, !g.e_s_b(1, "Ã¨"))) return;
                                g.b = g.c, g.s_f("e")
                            }
                        }(), g.c = g.lb,
                        function() {
                            for (var A, e; e = g.c, g.b = e, A = g.f_a(s, 4);) switch (g.k = g.c, A) {
                                case 1:
                                    g.s_f("i");
                                    break;
                                case 2:
                                    g.s_f("u");
                                    break;
                                case 3:
                                    g.s_f("y");
                                    break;
                                case 4:
                                    if (g.c >= g.l) return;
                                    g.c++
                            }
                        }(), !0
                }
            },
            GermanStemmer: function() {
                var A, n, r, i = [new e("", -1, 6), new e("U", 0, 2), new e("Y", 0, 1), new e("Ã¤", 0, 3), new e("Ã¶", 0, 4), new e("Ã¼", 0, 5)],
                    s = [new e("e", -1, 2), new e("em", -1, 1), new e("en", -1, 2), new e("ern", -1, 1), new e("er", -1, 1), new e("s", -1, 3), new e("es", 5, 2)],
                    o = [new e("en", -1, 1), new e("er", -1, 1), new e("st", -1, 2), new e("est", 2, 1)],
                    a = [new e("ig", -1, 1), new e("lich", -1, 1)],
                    c = [new e("end", -1, 1), new e("ig", -1, 2), new e("ung", -1, 1), new e("lich", -1, 3), new e("isch", -1, 2), new e("ik", -1, 2), new e("heit", -1, 3), new e("keit", -1, 4)],
                    l = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8],
                    u = [117, 30, 5],
                    h = [117, 30, 4],
                    w = new t;

                function d(A, e, t) {
                    return !(!w.e_s(1, A) || (w.k = w.c, !w.i_g(l, 97, 252))) && (w.s_f(e), w.c = t, !0)
                }

                function f() {
                    for (; !w.i_g(l, 97, 252);) {
                        if (w.c >= w.l) return !0;
                        w.c++
                    }
                    for (; !w.o_g(l, 97, 252);) {
                        if (w.c >= w.l) return !0;
                        w.c++
                    }
                    return !1
                }

                function g() {
                    return r <= w.c
                }

                function B() {
                    return n <= w.c
                }
                this.setCurrent = function(A) {
                    w.s_c(A)
                }, this.getCurrent = function() {
                    return w.g_c()
                }, this.stem = function() {
                    var e = w.c;
                    return function() {
                            for (var A, e, t, n, r = w.c;;)
                                if (A = w.c, w.b = A, w.e_s(1, "ÃŸ")) w.k = w.c, w.s_f("ss");
                                else {
                                    if (A >= w.l) break;
                                    w.c = A + 1
                                } for (w.c = r;;)
                                for (e = w.c;;) {
                                    if (t = w.c, w.i_g(l, 97, 252)) {
                                        if (n = w.c, w.b = n, d("u", "U", t)) break;
                                        if (w.c = n, d("y", "Y", t)) break
                                    }
                                    if (t >= w.l) return void(w.c = e);
                                    w.c = t + 1
                                }
                        }(), w.c = e,
                        function() {
                            r = w.l, n = r;
                            var e = w.c + 3;
                            0 <= e && e <= w.l && (A = e, f() || ((r = w.c) < A && (r = A), f() || (n = w.c)))
                        }(), w.lb = e, w.c = w.l,
                        function() {
                            var A, e, t, n, r = w.l - w.c;
                            if (w.k = w.c, (A = w.f_a_b(s, 7)) && (w.b = w.c, g())) switch (A) {
                                case 1:
                                    w.s_d();
                                    break;
                                case 2:
                                    w.s_d(), w.k = w.c, w.e_s_b(1, "s") && (w.b = w.c, w.e_s_b(3, "nis") && w.s_d());
                                    break;
                                case 3:
                                    w.i_g_b(u, 98, 116) && w.s_d()
                            }
                            if (w.c = w.l - r, w.k = w.c, (A = w.f_a_b(o, 4)) && (w.b = w.c, g())) switch (A) {
                                case 1:
                                    w.s_d();
                                    break;
                                case 2:
                                    if (w.i_g_b(h, 98, 116)) {
                                        var i = w.c - 3;
                                        w.lb <= i && i <= w.l && (w.c = i, w.s_d())
                                    }
                            }
                            if (w.c = w.l - r, w.k = w.c, (A = w.f_a_b(c, 8)) && (w.b = w.c, B())) switch (A) {
                                case 1:
                                    w.s_d(), w.k = w.c, w.e_s_b(2, "ig") && (w.b = w.c, e = w.l - w.c, w.e_s_b(1, "e") || (w.c = w.l - e, B() && w.s_d()));
                                    break;
                                case 2:
                                    t = w.l - w.c, w.e_s_b(1, "e") || (w.c = w.l - t, w.s_d());
                                    break;
                                case 3:
                                    if (w.s_d(), w.k = w.c, n = w.l - w.c, !w.e_s_b(2, "er") && (w.c = w.l - n, !w.e_s_b(2, "en"))) break;
                                    w.b = w.c, g() && w.s_d();
                                    break;
                                case 4:
                                    w.s_d(), w.k = w.c, (A = w.f_a_b(a, 2)) && (w.b = w.c, B() && 1 == A && w.s_d())
                            }
                        }(), w.c = w.lb,
                        function() {
                            for (var A, e;;) {
                                if (e = w.c, w.b = e, !(A = w.f_a(i, 6))) return;
                                switch (w.k = w.c, A) {
                                    case 1:
                                        w.s_f("y");
                                        break;
                                    case 2:
                                    case 5:
                                        w.s_f("u");
                                        break;
                                    case 3:
                                        w.s_f("a");
                                        break;
                                    case 4:
                                        w.s_f("o");
                                        break;
                                    case 6:
                                        if (w.c >= w.l) return;
                                        w.c++
                                }
                            }
                        }(), !0
                }
            },
            HungarianStemmer: function() {
                var A, n = [new e("cs", -1, -1), new e("dzs", -1, -1), new e("gy", -1, -1), new e("ly", -1, -1), new e("ny", -1, -1), new e("sz", -1, -1), new e("ty", -1, -1), new e("zs", -1, -1)],
                    r = [new e("Ã¡", -1, 1), new e("Ã©", -1, 2)],
                    i = [new e("bb", -1, -1), new e("cc", -1, -1), new e("dd", -1, -1), new e("ff", -1, -1), new e("gg", -1, -1), new e("jj", -1, -1), new e("kk", -1, -1), new e("ll", -1, -1), new e("mm", -1, -1), new e("nn", -1, -1), new e("pp", -1, -1), new e("rr", -1, -1), new e("ccs", -1, -1), new e("ss", -1, -1), new e("zzs", -1, -1), new e("tt", -1, -1), new e("vv", -1, -1), new e("ggy", -1, -1), new e("lly", -1, -1), new e("nny", -1, -1), new e("tty", -1, -1), new e("ssz", -1, -1), new e("zz", -1, -1)],
                    s = [new e("al", -1, 1), new e("el", -1, 2)],
                    o = [new e("ba", -1, -1), new e("ra", -1, -1), new e("be", -1, -1), new e("re", -1, -1), new e("ig", -1, -1), new e("nak", -1, -1), new e("nek", -1, -1), new e("val", -1, -1), new e("vel", -1, -1), new e("ul", -1, -1), new e("nÃ¡l", -1, -1), new e("nÃ©l", -1, -1), new e("bÃ³l", -1, -1), new e("rÃ³l", -1, -1), new e("tÃ³l", -1, -1), new e("bÃµl", -1, -1), new e("rÃµl", -1, -1), new e("tÃµl", -1, -1), new e("Ã¼l", -1, -1), new e("n", -1, -1), new e("an", 19, -1), new e("ban", 20, -1), new e("en", 19, -1), new e("ben", 22, -1), new e("kÃ©ppen", 22, -1), new e("on", 19, -1), new e("Ã¶n", 19, -1), new e("kÃ©pp", -1, -1), new e("kor", -1, -1), new e("t", -1, -1), new e("at", 29, -1), new e("et", 29, -1), new e("kÃ©nt", 29, -1), new e("ankÃ©nt", 32, -1), new e("enkÃ©nt", 32, -1), new e("onkÃ©nt", 32, -1), new e("ot", 29, -1), new e("Ã©rt", 29, -1), new e("Ã¶t", 29, -1), new e("hez", -1, -1), new e("hoz", -1, -1), new e("hÃ¶z", -1, -1), new e("vÃ¡", -1, -1), new e("vÃ©", -1, -1)],
                    a = [new e("Ã¡n", -1, 2), new e("Ã©n", -1, 1), new e("Ã¡nkÃ©nt", -1, 3)],
                    c = [new e("stul", -1, 2), new e("astul", 0, 1), new e("Ã¡stul", 0, 3), new e("stÃ¼l", -1, 2), new e("estÃ¼l", 3, 1), new e("Ã©stÃ¼l", 3, 4)],
                    l = [new e("Ã¡", -1, 1), new e("Ã©", -1, 2)],
                    u = [new e("k", -1, 7), new e("ak", 0, 4), new e("ek", 0, 6), new e("ok", 0, 5), new e("Ã¡k", 0, 1), new e("Ã©k", 0, 2), new e("Ã¶k", 0, 3)],
                    h = [new e("Ã©i", -1, 7), new e("Ã¡Ã©i", 0, 6), new e("Ã©Ã©i", 0, 5), new e("Ã©", -1, 9), new e("kÃ©", 3, 4), new e("akÃ©", 4, 1), new e("ekÃ©", 4, 1), new e("okÃ©", 4, 1), new e("Ã¡kÃ©", 4, 3), new e("Ã©kÃ©", 4, 2), new e("Ã¶kÃ©", 4, 1), new e("Ã©Ã©", 3, 8)],
                    w = [new e("a", -1, 18), new e("ja", 0, 17), new e("d", -1, 16), new e("ad", 2, 13), new e("ed", 2, 13), new e("od", 2, 13), new e("Ã¡d", 2, 14), new e("Ã©d", 2, 15), new e("Ã¶d", 2, 13), new e("e", -1, 18), new e("je", 9, 17), new e("nk", -1, 4), new e("unk", 11, 1), new e("Ã¡nk", 11, 2), new e("Ã©nk", 11, 3), new e("Ã¼nk", 11, 1), new e("uk", -1, 8), new e("juk", 16, 7), new e("Ã¡juk", 17, 5), new e("Ã¼k", -1, 8), new e("jÃ¼k", 19, 7), new e("Ã©jÃ¼k", 20, 6), new e("m", -1, 12), new e("am", 22, 9), new e("em", 22, 9), new e("om", 22, 9), new e("Ã¡m", 22, 10), new e("Ã©m", 22, 11), new e("o", -1, 18), new e("Ã¡", -1, 19), new e("Ã©", -1, 20)],
                    d = [new e("id", -1, 10), new e("aid", 0, 9), new e("jaid", 1, 6), new e("eid", 0, 9), new e("jeid", 3, 6), new e("Ã¡id", 0, 7), new e("Ã©id", 0, 8), new e("i", -1, 15), new e("ai", 7, 14), new e("jai", 8, 11), new e("ei", 7, 14), new e("jei", 10, 11), new e("Ã¡i", 7, 12), new e("Ã©i", 7, 13), new e("itek", -1, 24), new e("eitek", 14, 21), new e("jeitek", 15, 20), new e("Ã©itek", 14, 23), new e("ik", -1, 29), new e("aik", 18, 26), new e("jaik", 19, 25), new e("eik", 18, 26), new e("jeik", 21, 25), new e("Ã¡ik", 18, 27), new e("Ã©ik", 18, 28), new e("ink", -1, 20), new e("aink", 25, 17), new e("jaink", 26, 16), new e("eink", 25, 17), new e("jeink", 28, 16), new e("Ã¡ink", 25, 18), new e("Ã©ink", 25, 19), new e("aitok", -1, 21), new e("jaitok", 32, 20), new e("Ã¡itok", -1, 22), new e("im", -1, 5), new e("aim", 35, 4), new e("jaim", 36, 1), new e("eim", 35, 4), new e("jeim", 38, 1), new e("Ã¡im", 35, 2), new e("Ã©im", 35, 3)],
                    f = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 52, 14],
                    g = new t;

                function B() {
                    return A <= g.c
                }

                function p() {
                    var A = g.l - g.c;
                    return !!g.f_a_b(i, 23) && (g.c = g.l - A, !0)
                }

                function m() {
                    if (g.c > g.lb) {
                        g.c--, g.k = g.c;
                        var A = g.c - 1;
                        g.lb <= A && A <= g.l && (g.c = A, g.b = A, g.s_d())
                    }
                }

                function b() {
                    g.k = g.c, g.f_a_b(o, 44) && (g.b = g.c, B() && (g.s_d(), function() {
                        var A;
                        if (g.k = g.c, (A = g.f_a_b(r, 2)) && (g.b = g.c, B())) switch (A) {
                            case 1:
                                g.s_f("a");
                                break;
                            case 2:
                                g.s_f("e")
                        }
                    }()))
                }
                this.setCurrent = function(A) {
                    g.s_c(A)
                }, this.getCurrent = function() {
                    return g.g_c()
                }, this.stem = function() {
                    var e = g.c;
                    return function() {
                            var e, t = g.c;
                            if (A = g.l, g.i_g(f, 97, 252))
                                for (;;) {
                                    if (e = g.c, g.o_g(f, 97, 252)) return g.c = e, g.f_a(n, 8) || (g.c = e, e < g.l && g.c++), void(A = g.c);
                                    if (g.c = e, e >= g.l) return void(A = e);
                                    g.c++
                                }
                            if (g.c = t, g.o_g(f, 97, 252)) {
                                for (; !g.i_g(f, 97, 252);) {
                                    if (g.c >= g.l) return;
                                    g.c++
                                }
                                A = g.c
                            }
                        }(), g.lb = e, g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, (A = g.f_a_b(s, 2)) && (g.b = g.c, B())) {
                                if ((1 == A || 2 == A) && !p()) return;
                                g.s_d(), m()
                            }
                        }(), g.c = g.l, b(), g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, (A = g.f_a_b(a, 3)) && (g.b = g.c, B())) switch (A) {
                                case 1:
                                    g.s_f("e");
                                    break;
                                case 2:
                                case 3:
                                    g.s_f("a")
                            }
                        }(), g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, (A = g.f_a_b(c, 6)) && (g.b = g.c, B())) switch (A) {
                                case 1:
                                case 2:
                                    g.s_d();
                                    break;
                                case 3:
                                    g.s_f("a");
                                    break;
                                case 4:
                                    g.s_f("e")
                            }
                        }(), g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, (A = g.f_a_b(l, 2)) && (g.b = g.c, B())) {
                                if ((1 == A || 2 == A) && !p()) return;
                                g.s_d(), m()
                            }
                        }(), g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, (A = g.f_a_b(h, 12)) && (g.b = g.c, B())) switch (A) {
                                case 1:
                                case 4:
                                case 7:
                                case 9:
                                    g.s_d();
                                    break;
                                case 2:
                                case 5:
                                case 8:
                                    g.s_f("e");
                                    break;
                                case 3:
                                case 6:
                                    g.s_f("a")
                            }
                        }(), g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, (A = g.f_a_b(w, 31)) && (g.b = g.c, B())) switch (A) {
                                case 1:
                                case 4:
                                case 7:
                                case 8:
                                case 9:
                                case 12:
                                case 13:
                                case 16:
                                case 17:
                                case 18:
                                    g.s_d();
                                    break;
                                case 2:
                                case 5:
                                case 10:
                                case 14:
                                case 19:
                                    g.s_f("a");
                                    break;
                                case 3:
                                case 6:
                                case 11:
                                case 15:
                                case 20:
                                    g.s_f("e")
                            }
                        }(), g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, (A = g.f_a_b(d, 42)) && (g.b = g.c, B())) switch (A) {
                                case 1:
                                case 4:
                                case 5:
                                case 6:
                                case 9:
                                case 10:
                                case 11:
                                case 14:
                                case 15:
                                case 16:
                                case 17:
                                case 20:
                                case 21:
                                case 24:
                                case 25:
                                case 26:
                                case 29:
                                    g.s_d();
                                    break;
                                case 2:
                                case 7:
                                case 12:
                                case 18:
                                case 22:
                                case 27:
                                    g.s_f("a");
                                    break;
                                case 3:
                                case 8:
                                case 13:
                                case 19:
                                case 23:
                                case 28:
                                    g.s_f("e")
                            }
                        }(), g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, (A = g.f_a_b(u, 7)) && (g.b = g.c, B())) switch (A) {
                                case 1:
                                    g.s_f("a");
                                    break;
                                case 2:
                                    g.s_f("e");
                                    break;
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    g.s_d()
                            }
                        }(), !0
                }
            },
            ItalianStemmer: function() {
                var A, n, r, i = [new e("", -1, 7), new e("qu", 0, 6), new e("Ã¡", 0, 1), new e("Ã©", 0, 2), new e("Ã­", 0, 3), new e("Ã³", 0, 4), new e("Ãº", 0, 5)],
                    s = [new e("", -1, 3), new e("I", 0, 1), new e("U", 0, 2)],
                    o = [new e("la", -1, -1), new e("cela", 0, -1), new e("gliela", 0, -1), new e("mela", 0, -1), new e("tela", 0, -1), new e("vela", 0, -1), new e("le", -1, -1), new e("cele", 6, -1), new e("gliele", 6, -1), new e("mele", 6, -1), new e("tele", 6, -1), new e("vele", 6, -1), new e("ne", -1, -1), new e("cene", 12, -1), new e("gliene", 12, -1), new e("mene", 12, -1), new e("sene", 12, -1), new e("tene", 12, -1), new e("vene", 12, -1), new e("ci", -1, -1), new e("li", -1, -1), new e("celi", 20, -1), new e("glieli", 20, -1), new e("meli", 20, -1), new e("teli", 20, -1), new e("veli", 20, -1), new e("gli", 20, -1), new e("mi", -1, -1), new e("si", -1, -1), new e("ti", -1, -1), new e("vi", -1, -1), new e("lo", -1, -1), new e("celo", 31, -1), new e("glielo", 31, -1), new e("melo", 31, -1), new e("telo", 31, -1), new e("velo", 31, -1)],
                    a = [new e("ando", -1, 1), new e("endo", -1, 1), new e("ar", -1, 2), new e("er", -1, 2), new e("ir", -1, 2)],
                    c = [new e("ic", -1, -1), new e("abil", -1, -1), new e("os", -1, -1), new e("iv", -1, 1)],
                    l = [new e("ic", -1, 1), new e("abil", -1, 1), new e("iv", -1, 1)],
                    u = [new e("ica", -1, 1), new e("logia", -1, 3), new e("osa", -1, 1), new e("ista", -1, 1), new e("iva", -1, 9), new e("anza", -1, 1), new e("enza", -1, 5), new e("ice", -1, 1), new e("atrice", 7, 1), new e("iche", -1, 1), new e("logie", -1, 3), new e("abile", -1, 1), new e("ibile", -1, 1), new e("usione", -1, 4), new e("azione", -1, 2), new e("uzione", -1, 4), new e("atore", -1, 2), new e("ose", -1, 1), new e("ante", -1, 1), new e("mente", -1, 1), new e("amente", 19, 7), new e("iste", -1, 1), new e("ive", -1, 9), new e("anze", -1, 1), new e("enze", -1, 5), new e("ici", -1, 1), new e("atrici", 25, 1), new e("ichi", -1, 1), new e("abili", -1, 1), new e("ibili", -1, 1), new e("ismi", -1, 1), new e("usioni", -1, 4), new e("azioni", -1, 2), new e("uzioni", -1, 4), new e("atori", -1, 2), new e("osi", -1, 1), new e("anti", -1, 1), new e("amenti", -1, 6), new e("imenti", -1, 6), new e("isti", -1, 1), new e("ivi", -1, 9), new e("ico", -1, 1), new e("ismo", -1, 1), new e("oso", -1, 1), new e("amento", -1, 6), new e("imento", -1, 6), new e("ivo", -1, 9), new e("itÃ ", -1, 8), new e("istÃ ", -1, 1), new e("istÃ¨", -1, 1), new e("istÃ¬", -1, 1)],
                    h = [new e("isca", -1, 1), new e("enda", -1, 1), new e("ata", -1, 1), new e("ita", -1, 1), new e("uta", -1, 1), new e("ava", -1, 1), new e("eva", -1, 1), new e("iva", -1, 1), new e("erebbe", -1, 1), new e("irebbe", -1, 1), new e("isce", -1, 1), new e("ende", -1, 1), new e("are", -1, 1), new e("ere", -1, 1), new e("ire", -1, 1), new e("asse", -1, 1), new e("ate", -1, 1), new e("avate", 16, 1), new e("evate", 16, 1), new e("ivate", 16, 1), new e("ete", -1, 1), new e("erete", 20, 1), new e("irete", 20, 1), new e("ite", -1, 1), new e("ereste", -1, 1), new e("ireste", -1, 1), new e("ute", -1, 1), new e("erai", -1, 1), new e("irai", -1, 1), new e("isci", -1, 1), new e("endi", -1, 1), new e("erei", -1, 1), new e("irei", -1, 1), new e("assi", -1, 1), new e("ati", -1, 1), new e("iti", -1, 1), new e("eresti", -1, 1), new e("iresti", -1, 1), new e("uti", -1, 1), new e("avi", -1, 1), new e("evi", -1, 1), new e("ivi", -1, 1), new e("isco", -1, 1), new e("ando", -1, 1), new e("endo", -1, 1), new e("Yamo", -1, 1), new e("iamo", -1, 1), new e("avamo", -1, 1), new e("evamo", -1, 1), new e("ivamo", -1, 1), new e("eremo", -1, 1), new e("iremo", -1, 1), new e("assimo", -1, 1), new e("ammo", -1, 1), new e("emmo", -1, 1), new e("eremmo", 54, 1), new e("iremmo", 54, 1), new e("immo", -1, 1), new e("ano", -1, 1), new e("iscano", 58, 1), new e("avano", 58, 1), new e("evano", 58, 1), new e("ivano", 58, 1), new e("eranno", -1, 1), new e("iranno", -1, 1), new e("ono", -1, 1), new e("iscono", 65, 1), new e("arono", 65, 1), new e("erono", 65, 1), new e("irono", 65, 1), new e("erebbero", -1, 1), new e("irebbero", -1, 1), new e("assero", -1, 1), new e("essero", -1, 1), new e("issero", -1, 1), new e("ato", -1, 1), new e("ito", -1, 1), new e("uto", -1, 1), new e("avo", -1, 1), new e("evo", -1, 1), new e("ivo", -1, 1), new e("ar", -1, 1), new e("ir", -1, 1), new e("erÃ ", -1, 1), new e("irÃ ", -1, 1), new e("erÃ²", -1, 1), new e("irÃ²", -1, 1)],
                    w = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2, 1],
                    d = [17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2],
                    f = [17],
                    g = new t;

                function B(A, e, t) {
                    return !(!g.e_s(1, A) || (g.k = g.c, !g.i_g(w, 97, 249))) && (g.s_f(e), g.c = t, !0)
                }

                function p(A) {
                    if (g.c = A, !g.i_g(w, 97, 249)) return !1;
                    for (; !g.o_g(w, 97, 249);) {
                        if (g.c >= g.l) return !1;
                        g.c++
                    }
                    return !0
                }

                function m() {
                    var A, e = g.c;
                    if (! function() {
                            if (g.i_g(w, 97, 249)) {
                                var A = g.c;
                                if (g.o_g(w, 97, 249)) {
                                    for (; !g.i_g(w, 97, 249);) {
                                        if (g.c >= g.l) return p(A);
                                        g.c++
                                    }
                                    return !0
                                }
                                return p(A)
                            }
                            return !1
                        }()) {
                        if (g.c = e, !g.o_g(w, 97, 249)) return;
                        if (A = g.c, g.o_g(w, 97, 249)) {
                            for (; !g.i_g(w, 97, 249);) {
                                if (g.c >= g.l) return g.c = A, void(g.i_g(w, 97, 249) && g.c < g.l && g.c++);
                                g.c++
                            }
                            return void(r = g.c)
                        }
                        if (g.c = A, !g.i_g(w, 97, 249) || g.c >= g.l) return;
                        g.c++
                    }
                    r = g.c
                }

                function b() {
                    for (; !g.i_g(w, 97, 249);) {
                        if (g.c >= g.l) return !1;
                        g.c++
                    }
                    for (; !g.o_g(w, 97, 249);) {
                        if (g.c >= g.l) return !1;
                        g.c++
                    }
                    return !0
                }

                function Q() {
                    return r <= g.c
                }

                function C() {
                    return A <= g.c
                }

                function y() {
                    var A;
                    if (g.k = g.c, !(A = g.f_a_b(u, 51))) return !1;
                    switch (g.b = g.c, A) {
                        case 1:
                            if (!C()) return !1;
                            g.s_d();
                            break;
                        case 2:
                            if (!C()) return !1;
                            g.s_d(), g.k = g.c, g.e_s_b(2, "ic") && (g.b = g.c, C() && g.s_d());
                            break;
                        case 3:
                            if (!C()) return !1;
                            g.s_f("log");
                            break;
                        case 4:
                            if (!C()) return !1;
                            g.s_f("u");
                            break;
                        case 5:
                            if (!C()) return !1;
                            g.s_f("ente");
                            break;
                        case 6:
                            if (!Q()) return !1;
                            g.s_d();
                            break;
                        case 7:
                            if (!(n <= g.c)) return !1;
                            g.s_d(), g.k = g.c, (A = g.f_a_b(c, 4)) && (g.b = g.c, C() && (g.s_d(), 1 == A && (g.k = g.c, g.e_s_b(2, "at") && (g.b = g.c, C() && g.s_d()))));
                            break;
                        case 8:
                            if (!C()) return !1;
                            g.s_d(), g.k = g.c, (A = g.f_a_b(l, 3)) && (g.b = g.c, 1 == A && C() && g.s_d());
                            break;
                        case 9:
                            if (!C()) return !1;
                            g.s_d(), g.k = g.c, g.e_s_b(2, "at") && (g.b = g.c, C() && (g.s_d(), g.k = g.c, g.e_s_b(2, "ic") && (g.b = g.c, C() && g.s_d())))
                    }
                    return !0
                }

                function v() {
                    var A;
                    A = g.l - g.c, g.k = g.c, g.i_g_b(d, 97, 242) && (g.b = g.c, Q() && (g.s_d(), g.k = g.c, g.e_s_b(1, "i") && (g.b = g.c, Q()))) ? g.s_d() : g.c = g.l - A, g.k = g.c, g.e_s_b(1, "h") && (g.b = g.c, g.i_g_b(f, 99, 103) && Q() && g.s_d())
                }
                this.setCurrent = function(A) {
                    g.s_c(A)
                }, this.getCurrent = function() {
                    return g.g_c()
                }, this.stem = function() {
                    var e = g.c;
                    return function() {
                            for (var A, e, t, n, r = g.c;;) {
                                if (g.b = g.c, A = g.f_a(i, 7)) switch (g.k = g.c, A) {
                                    case 1:
                                        g.s_f("Ã ");
                                        continue;
                                    case 2:
                                        g.s_f("Ã¨");
                                        continue;
                                    case 3:
                                        g.s_f("Ã¬");
                                        continue;
                                    case 4:
                                        g.s_f("Ã²");
                                        continue;
                                    case 5:
                                        g.s_f("Ã¹");
                                        continue;
                                    case 6:
                                        g.s_f("qU");
                                        continue;
                                    case 7:
                                        if (g.c >= g.l) break;
                                        g.c++;
                                        continue
                                }
                                break
                            }
                            for (g.c = r;;)
                                for (e = g.c;;) {
                                    if (t = g.c, g.i_g(w, 97, 249)) {
                                        if (g.b = g.c, n = g.c, B("u", "U", t)) break;
                                        if (g.c = n, B("i", "I", t)) break
                                    }
                                    if (g.c = t, g.c >= g.l) return void(g.c = e);
                                    g.c++
                                }
                        }(), g.c = e,
                        function() {
                            var e = g.c;
                            r = g.l, n = r, A = r, m(), g.c = e, b() && (n = g.c, b() && (A = g.c))
                        }(), g.lb = e, g.c = g.l,
                        function() {
                            var A;
                            if (g.k = g.c, g.f_a_b(o, 37) && (g.b = g.c, (A = g.f_a_b(a, 5)) && Q())) switch (A) {
                                case 1:
                                    g.s_d();
                                    break;
                                case 2:
                                    g.s_f("e")
                            }
                        }(), g.c = g.l, y() || (g.c = g.l, function() {
                            var A, e;
                            g.c >= r && (e = g.lb, g.lb = r, g.k = g.c, (A = g.f_a_b(h, 87)) && (g.b = g.c, 1 == A && g.s_d()), g.lb = e)
                        }()), g.c = g.l, v(), g.c = g.lb,
                        function() {
                            for (var A; g.b = g.c, A = g.f_a(s, 3);) switch (g.k = g.c, A) {
                                case 1:
                                    g.s_f("i");
                                    break;
                                case 2:
                                    g.s_f("u");
                                    break;
                                case 3:
                                    if (g.c >= g.l) return;
                                    g.c++
                            }
                        }(), !0
                }
            },
            NorwegianStemmer: function() {
                var A, n, r = [new e("a", -1, 1), new e("e", -1, 1), new e("ede", 1, 1), new e("ande", 1, 1), new e("ende", 1, 1), new e("ane", 1, 1), new e("ene", 1, 1), new e("hetene", 6, 1), new e("erte", 1, 3), new e("en", -1, 1), new e("heten", 9, 1), new e("ar", -1, 1), new e("er", -1, 1), new e("heter", 12, 1), new e("s", -1, 2), new e("as", 14, 1), new e("es", 14, 1), new e("edes", 16, 1), new e("endes", 16, 1), new e("enes", 16, 1), new e("hetenes", 19, 1), new e("ens", 14, 1), new e("hetens", 21, 1), new e("ers", 14, 1), new e("ets", 14, 1), new e("et", -1, 1), new e("het", 25, 1), new e("ert", -1, 3), new e("ast", -1, 1)],
                    i = [new e("dt", -1, -1), new e("vt", -1, -1)],
                    s = [new e("leg", -1, 1), new e("eleg", 0, 1), new e("ig", -1, 1), new e("eig", 2, 1), new e("lig", 2, 1), new e("elig", 4, 1), new e("els", -1, 1), new e("lov", -1, 1), new e("elov", 7, 1), new e("slov", 7, 1), new e("hetslov", 9, 1)],
                    o = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128],
                    a = [119, 125, 149, 1],
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
                                    if (e = c.c, c.i_g(o, 97, 248)) {
                                        c.c = e;
                                        break
                                    }
                                    if (e >= c.l) return;
                                    c.c = e + 1
                                }
                                for (; !c.o_g(o, 97, 248);) {
                                    if (c.c >= c.l) return;
                                    c.c++
                                }(n = c.c) < A && (n = A)
                            }
                        }(), c.lb = e, c.c = c.l,
                        function() {
                            var A, e, t;
                            if (c.c >= n && (e = c.lb, c.lb = n, c.k = c.c, A = c.f_a_b(r, 29), c.lb = e, A)) switch (c.b = c.c, A) {
                                case 1:
                                    c.s_d();
                                    break;
                                case 2:
                                    t = c.l - c.c, c.i_g_b(a, 98, 122) ? c.s_d() : (c.c = c.l - t, c.e_s_b(1, "k") && c.o_g_b(o, 97, 248) && c.s_d());
                                    break;
                                case 3:
                                    c.s_f("er")
                            }
                        }(), c.c = c.l,
                        function() {
                            var A, e = c.l - c.c;
                            c.c >= n && (A = c.lb, c.lb = n, c.k = c.c, c.f_a_b(i, 2) ? (c.b = c.c, c.lb = A, c.c = c.l - e, c.c > c.lb && (c.c--, c.b = c.c, c.s_d())) : c.lb = A)
                        }(), c.c = c.l,
                        function() {
                            var A, e;
                            c.c >= n && (e = c.lb, c.lb = n, c.k = c.c, (A = c.f_a_b(s, 11)) ? (c.b = c.c, c.lb = e, 1 == A && c.s_d()) : c.lb = e)
                        }(), !0
                }
            },
            PortugueseStemmer: function() {
                var A, n, r, i = [new e("", -1, 3), new e("Ã£", 0, 1), new e("Ãµ", 0, 2)],
                    s = [new e("", -1, 3), new e("a~", 0, 1), new e("o~", 0, 2)],
                    o = [new e("ic", -1, -1), new e("ad", -1, -1), new e("os", -1, -1), new e("iv", -1, 1)],
                    a = [new e("ante", -1, 1), new e("avel", -1, 1), new e("Ã­vel", -1, 1)],
                    c = [new e("ic", -1, 1), new e("abil", -1, 1), new e("iv", -1, 1)],
                    l = [new e("ica", -1, 1), new e("Ã¢ncia", -1, 1), new e("Ãªncia", -1, 4), new e("ira", -1, 9), new e("adora", -1, 1), new e("osa", -1, 1), new e("ista", -1, 1), new e("iva", -1, 8), new e("eza", -1, 1), new e("logÃ­a", -1, 2), new e("idade", -1, 7), new e("ante", -1, 1), new e("mente", -1, 6), new e("amente", 12, 5), new e("Ã¡vel", -1, 1), new e("Ã­vel", -1, 1), new e("uciÃ³n", -1, 3), new e("ico", -1, 1), new e("ismo", -1, 1), new e("oso", -1, 1), new e("amento", -1, 1), new e("imento", -1, 1), new e("ivo", -1, 8), new e("aÃ§a~o", -1, 1), new e("ador", -1, 1), new e("icas", -1, 1), new e("Ãªncias", -1, 4), new e("iras", -1, 9), new e("adoras", -1, 1), new e("osas", -1, 1), new e("istas", -1, 1), new e("ivas", -1, 8), new e("ezas", -1, 1), new e("logÃ­as", -1, 2), new e("idades", -1, 7), new e("uciones", -1, 3), new e("adores", -1, 1), new e("antes", -1, 1), new e("aÃ§o~es", -1, 1), new e("icos", -1, 1), new e("ismos", -1, 1), new e("osos", -1, 1), new e("amentos", -1, 1), new e("imentos", -1, 1), new e("ivos", -1, 8)],
                    u = [new e("ada", -1, 1), new e("ida", -1, 1), new e("ia", -1, 1), new e("aria", 2, 1), new e("eria", 2, 1), new e("iria", 2, 1), new e("ara", -1, 1), new e("era", -1, 1), new e("ira", -1, 1), new e("ava", -1, 1), new e("asse", -1, 1), new e("esse", -1, 1), new e("isse", -1, 1), new e("aste", -1, 1), new e("este", -1, 1), new e("iste", -1, 1), new e("ei", -1, 1), new e("arei", 16, 1), new e("erei", 16, 1), new e("irei", 16, 1), new e("am", -1, 1), new e("iam", 20, 1), new e("ariam", 21, 1), new e("eriam", 21, 1), new e("iriam", 21, 1), new e("aram", 20, 1), new e("eram", 20, 1), new e("iram", 20, 1), new e("avam", 20, 1), new e("em", -1, 1), new e("arem", 29, 1), new e("erem", 29, 1), new e("irem", 29, 1), new e("assem", 29, 1), new e("essem", 29, 1), new e("issem", 29, 1), new e("ado", -1, 1), new e("ido", -1, 1), new e("ando", -1, 1), new e("endo", -1, 1), new e("indo", -1, 1), new e("ara~o", -1, 1), new e("era~o", -1, 1), new e("ira~o", -1, 1), new e("ar", -1, 1), new e("er", -1, 1), new e("ir", -1, 1), new e("as", -1, 1), new e("adas", 47, 1), new e("idas", 47, 1), new e("ias", 47, 1), new e("arias", 50, 1), new e("erias", 50, 1), new e("irias", 50, 1), new e("aras", 47, 1), new e("eras", 47, 1), new e("iras", 47, 1), new e("avas", 47, 1), new e("es", -1, 1), new e("ardes", 58, 1), new e("erdes", 58, 1), new e("irdes", 58, 1), new e("ares", 58, 1), new e("eres", 58, 1), new e("ires", 58, 1), new e("asses", 58, 1), new e("esses", 58, 1), new e("isses", 58, 1), new e("astes", 58, 1), new e("estes", 58, 1), new e("istes", 58, 1), new e("is", -1, 1), new e("ais", 71, 1), new e("eis", 71, 1), new e("areis", 73, 1), new e("ereis", 73, 1), new e("ireis", 73, 1), new e("Ã¡reis", 73, 1), new e("Ã©reis", 73, 1), new e("Ã­reis", 73, 1), new e("Ã¡sseis", 73, 1), new e("Ã©sseis", 73, 1), new e("Ã­sseis", 73, 1), new e("Ã¡veis", 73, 1), new e("Ã­eis", 73, 1), new e("arÃ­eis", 84, 1), new e("erÃ­eis", 84, 1), new e("irÃ­eis", 84, 1), new e("ados", -1, 1), new e("idos", -1, 1), new e("amos", -1, 1), new e("Ã¡ramos", 90, 1), new e("Ã©ramos", 90, 1), new e("Ã­ramos", 90, 1), new e("Ã¡vamos", 90, 1), new e("Ã­amos", 90, 1), new e("arÃ­amos", 95, 1), new e("erÃ­amos", 95, 1), new e("irÃ­amos", 95, 1), new e("emos", -1, 1), new e("aremos", 99, 1), new e("eremos", 99, 1), new e("iremos", 99, 1), new e("Ã¡ssemos", 99, 1), new e("Ãªssemos", 99, 1), new e("Ã­ssemos", 99, 1), new e("imos", -1, 1), new e("armos", -1, 1), new e("ermos", -1, 1), new e("irmos", -1, 1), new e("Ã¡mos", -1, 1), new e("arÃ¡s", -1, 1), new e("erÃ¡s", -1, 1), new e("irÃ¡s", -1, 1), new e("eu", -1, 1), new e("iu", -1, 1), new e("ou", -1, 1), new e("arÃ¡", -1, 1), new e("erÃ¡", -1, 1), new e("irÃ¡", -1, 1)],
                    h = [new e("a", -1, 1), new e("i", -1, 1), new e("o", -1, 1), new e("os", -1, 1), new e("Ã¡", -1, 1), new e("Ã­", -1, 1), new e("Ã³", -1, 1)],
                    w = [new e("e", -1, 1), new e("Ã§", -1, 2), new e("Ã©", -1, 1), new e("Ãª", -1, 1)],
                    d = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2],
                    f = new t;

                function g() {
                    if (f.o_g(d, 97, 250)) {
                        for (; !f.i_g(d, 97, 250);) {
                            if (f.c >= f.l) return !0;
                            f.c++
                        }
                        return !1
                    }
                    return !0
                }

                function B() {
                    var A, e, t = f.c;
                    if (f.i_g(d, 97, 250))
                        if (A = f.c, g()) {
                            if (f.c = A, function() {
                                    if (f.i_g(d, 97, 250))
                                        for (; !f.o_g(d, 97, 250);) {
                                            if (f.c >= f.l) return !1;
                                            f.c++
                                        }
                                    return r = f.c, !0
                                }()) return
                        } else r = f.c;
                    if (f.c = t, f.o_g(d, 97, 250)) {
                        if (e = f.c, g()) {
                            if (f.c = e, !f.i_g(d, 97, 250) || f.c >= f.l) return;
                            f.c++
                        }
                        r = f.c
                    }
                }

                function p() {
                    for (; !f.i_g(d, 97, 250);) {
                        if (f.c >= f.l) return !1;
                        f.c++
                    }
                    for (; !f.o_g(d, 97, 250);) {
                        if (f.c >= f.l) return !1;
                        f.c++
                    }
                    return !0
                }

                function m() {
                    return r <= f.c
                }

                function b() {
                    return A <= f.c
                }

                function Q() {
                    var A;
                    if (f.k = f.c, !(A = f.f_a_b(l, 45))) return !1;
                    switch (f.b = f.c, A) {
                        case 1:
                            if (!b()) return !1;
                            f.s_d();
                            break;
                        case 2:
                            if (!b()) return !1;
                            f.s_f("log");
                            break;
                        case 3:
                            if (!b()) return !1;
                            f.s_f("u");
                            break;
                        case 4:
                            if (!b()) return !1;
                            f.s_f("ente");
                            break;
                        case 5:
                            if (!(n <= f.c)) return !1;
                            f.s_d(), f.k = f.c, (A = f.f_a_b(o, 4)) && (f.b = f.c, b() && (f.s_d(), 1 == A && (f.k = f.c, f.e_s_b(2, "at") && (f.b = f.c, b() && f.s_d()))));
                            break;
                        case 6:
                            if (!b()) return !1;
                            f.s_d(), f.k = f.c, (A = f.f_a_b(a, 3)) && (f.b = f.c, 1 == A && b() && f.s_d());
                            break;
                        case 7:
                            if (!b()) return !1;
                            f.s_d(), f.k = f.c, (A = f.f_a_b(c, 3)) && (f.b = f.c, 1 == A && b() && f.s_d());
                            break;
                        case 8:
                            if (!b()) return !1;
                            f.s_d(), f.k = f.c, f.e_s_b(2, "at") && (f.b = f.c, b() && f.s_d());
                            break;
                        case 9:
                            if (!m() || !f.e_s_b(1, "e")) return !1;
                            f.s_f("ir")
                    }
                    return !0
                }

                function C(A, e) {
                    if (f.e_s_b(1, A)) {
                        f.b = f.c;
                        var t = f.l - f.c;
                        if (f.e_s_b(1, e)) return f.c = f.l - t, m() && f.s_d(), !1
                    }
                    return !0
                }

                function y() {
                    if (!Q() && (f.c = f.l, ! function() {
                            var A, e;
                            if (f.c >= r) {
                                if (e = f.lb, f.lb = r, f.k = f.c, A = f.f_a_b(u, 120)) return f.b = f.c, 1 == A && f.s_d(), f.lb = e, !0;
                                f.lb = e
                            }
                            return !1
                        }())) return f.c = f.l, f.k = f.c, void((A = f.f_a_b(h, 7)) && (f.b = f.c, 1 == A && m() && f.s_d()));
                    var A;
                    f.c = f.l, f.k = f.c, f.e_s_b(1, "i") && (f.b = f.c, f.e_s_b(1, "c") && (f.c = f.l, m() && f.s_d()))
                }
                this.setCurrent = function(A) {
                    f.s_c(A)
                }, this.getCurrent = function() {
                    return f.g_c()
                }, this.stem = function() {
                    var e = f.c;
                    return function() {
                            for (var A;;) {
                                if (f.b = f.c, A = f.f_a(i, 3)) switch (f.k = f.c, A) {
                                    case 1:
                                        f.s_f("a~");
                                        continue;
                                    case 2:
                                        f.s_f("o~");
                                        continue;
                                    case 3:
                                        if (f.c >= f.l) break;
                                        f.c++;
                                        continue
                                }
                                break
                            }
                        }(), f.c = e,
                        function() {
                            var e = f.c;
                            r = f.l, n = r, A = r, B(), f.c = e, p() && (n = f.c, p() && (A = f.c))
                        }(), f.lb = e, f.c = f.l, y(), f.c = f.l,
                        function() {
                            var A;
                            if (f.k = f.c, A = f.f_a_b(w, 4)) switch (f.b = f.c, A) {
                                case 1:
                                    m() && (f.s_d(), f.k = f.c, f.l - f.c, C("u", "g") && C("i", "c"));
                                    break;
                                case 2:
                                    f.s_f("c")
                            }
                        }(), f.c = f.lb,
                        function() {
                            for (var A;;) {
                                if (f.b = f.c, A = f.f_a(s, 3)) switch (f.k = f.c, A) {
                                    case 1:
                                        f.s_f("Ã£");
                                        continue;
                                    case 2:
                                        f.s_f("Ãµ");
                                        continue;
                                    case 3:
                                        if (f.c >= f.l) break;
                                        f.c++;
                                        continue
                                }
                                break
                            }
                        }(), !0
                }
            },
            RomanianStemmer: function() {
                var A, n, r, i, s = [new e("", -1, 3), new e("I", 0, 1), new e("U", 0, 2)],
                    o = [new e("ea", -1, 3), new e("aÅ£ia", -1, 7), new e("aua", -1, 2), new e("iua", -1, 4), new e("aÅ£ie", -1, 7), new e("ele", -1, 3), new e("ile", -1, 5), new e("iile", 6, 4), new e("iei", -1, 4), new e("atei", -1, 6), new e("ii", -1, 4), new e("ului", -1, 1), new e("ul", -1, 1), new e("elor", -1, 3), new e("ilor", -1, 4), new e("iilor", 14, 4)],
                    a = [new e("icala", -1, 4), new e("iciva", -1, 4), new e("ativa", -1, 5), new e("itiva", -1, 6), new e("icale", -1, 4), new e("aÅ£iune", -1, 5), new e("iÅ£iune", -1, 6), new e("atoare", -1, 5), new e("itoare", -1, 6), new e("Äƒtoare", -1, 5), new e("icitate", -1, 4), new e("abilitate", -1, 1), new e("ibilitate", -1, 2), new e("ivitate", -1, 3), new e("icive", -1, 4), new e("ative", -1, 5), new e("itive", -1, 6), new e("icali", -1, 4), new e("atori", -1, 5), new e("icatori", 18, 4), new e("itori", -1, 6), new e("Äƒtori", -1, 5), new e("icitati", -1, 4), new e("abilitati", -1, 1), new e("ivitati", -1, 3), new e("icivi", -1, 4), new e("ativi", -1, 5), new e("itivi", -1, 6), new e("icitÄƒi", -1, 4), new e("abilitÄƒi", -1, 1), new e("ivitÄƒi", -1, 3), new e("icitÄƒÅ£i", -1, 4), new e("abilitÄƒÅ£i", -1, 1), new e("ivitÄƒÅ£i", -1, 3), new e("ical", -1, 4), new e("ator", -1, 5), new e("icator", 35, 4), new e("itor", -1, 6), new e("Äƒtor", -1, 5), new e("iciv", -1, 4), new e("ativ", -1, 5), new e("itiv", -1, 6), new e("icalÄƒ", -1, 4), new e("icivÄƒ", -1, 4), new e("ativÄƒ", -1, 5), new e("itivÄƒ", -1, 6)],
                    c = [new e("ica", -1, 1), new e("abila", -1, 1), new e("ibila", -1, 1), new e("oasa", -1, 1), new e("ata", -1, 1), new e("ita", -1, 1), new e("anta", -1, 1), new e("ista", -1, 3), new e("uta", -1, 1), new e("iva", -1, 1), new e("ic", -1, 1), new e("ice", -1, 1), new e("abile", -1, 1), new e("ibile", -1, 1), new e("isme", -1, 3), new e("iune", -1, 2), new e("oase", -1, 1), new e("ate", -1, 1), new e("itate", 17, 1), new e("ite", -1, 1), new e("ante", -1, 1), new e("iste", -1, 3), new e("ute", -1, 1), new e("ive", -1, 1), new e("ici", -1, 1), new e("abili", -1, 1), new e("ibili", -1, 1), new e("iuni", -1, 2), new e("atori", -1, 1), new e("osi", -1, 1), new e("ati", -1, 1), new e("itati", 30, 1), new e("iti", -1, 1), new e("anti", -1, 1), new e("isti", -1, 3), new e("uti", -1, 1), new e("iÅŸti", -1, 3), new e("ivi", -1, 1), new e("itÄƒi", -1, 1), new e("oÅŸi", -1, 1), new e("itÄƒÅ£i", -1, 1), new e("abil", -1, 1), new e("ibil", -1, 1), new e("ism", -1, 3), new e("ator", -1, 1), new e("os", -1, 1), new e("at", -1, 1), new e("it", -1, 1), new e("ant", -1, 1), new e("ist", -1, 3), new e("ut", -1, 1), new e("iv", -1, 1), new e("icÄƒ", -1, 1), new e("abilÄƒ", -1, 1), new e("ibilÄƒ", -1, 1), new e("oasÄƒ", -1, 1), new e("atÄƒ", -1, 1), new e("itÄƒ", -1, 1), new e("antÄƒ", -1, 1), new e("istÄƒ", -1, 3), new e("utÄƒ", -1, 1), new e("ivÄƒ", -1, 1)],
                    l = [new e("ea", -1, 1), new e("ia", -1, 1), new e("esc", -1, 1), new e("Äƒsc", -1, 1), new e("ind", -1, 1), new e("Ã¢nd", -1, 1), new e("are", -1, 1), new e("ere", -1, 1), new e("ire", -1, 1), new e("Ã¢re", -1, 1), new e("se", -1, 2), new e("ase", 10, 1), new e("sese", 10, 2), new e("ise", 10, 1), new e("use", 10, 1), new e("Ã¢se", 10, 1), new e("eÅŸte", -1, 1), new e("ÄƒÅŸte", -1, 1), new e("eze", -1, 1), new e("ai", -1, 1), new e("eai", 19, 1), new e("iai", 19, 1), new e("sei", -1, 2), new e("eÅŸti", -1, 1), new e("ÄƒÅŸti", -1, 1), new e("ui", -1, 1), new e("ezi", -1, 1), new e("Ã¢i", -1, 1), new e("aÅŸi", -1, 1), new e("seÅŸi", -1, 2), new e("aseÅŸi", 29, 1), new e("seseÅŸi", 29, 2), new e("iseÅŸi", 29, 1), new e("useÅŸi", 29, 1), new e("Ã¢seÅŸi", 29, 1), new e("iÅŸi", -1, 1), new e("uÅŸi", -1, 1), new e("Ã¢ÅŸi", -1, 1), new e("aÅ£i", -1, 2), new e("eaÅ£i", 38, 1), new e("iaÅ£i", 38, 1), new e("eÅ£i", -1, 2), new e("iÅ£i", -1, 2), new e("Ã¢Å£i", -1, 2), new e("arÄƒÅ£i", -1, 1), new e("serÄƒÅ£i", -1, 2), new e("aserÄƒÅ£i", 45, 1), new e("seserÄƒÅ£i", 45, 2), new e("iserÄƒÅ£i", 45, 1), new e("userÄƒÅ£i", 45, 1), new e("Ã¢serÄƒÅ£i", 45, 1), new e("irÄƒÅ£i", -1, 1), new e("urÄƒÅ£i", -1, 1), new e("Ã¢rÄƒÅ£i", -1, 1), new e("am", -1, 1), new e("eam", 54, 1), new e("iam", 54, 1), new e("em", -1, 2), new e("asem", 57, 1), new e("sesem", 57, 2), new e("isem", 57, 1), new e("usem", 57, 1), new e("Ã¢sem", 57, 1), new e("im", -1, 2), new e("Ã¢m", -1, 2), new e("Äƒm", -1, 2), new e("arÄƒm", 65, 1), new e("serÄƒm", 65, 2), new e("aserÄƒm", 67, 1), new e("seserÄƒm", 67, 2), new e("iserÄƒm", 67, 1), new e("userÄƒm", 67, 1), new e("Ã¢serÄƒm", 67, 1), new e("irÄƒm", 65, 1), new e("urÄƒm", 65, 1), new e("Ã¢rÄƒm", 65, 1), new e("au", -1, 1), new e("eau", 76, 1), new e("iau", 76, 1), new e("indu", -1, 1), new e("Ã¢ndu", -1, 1), new e("ez", -1, 1), new e("eascÄƒ", -1, 1), new e("arÄƒ", -1, 1), new e("serÄƒ", -1, 2), new e("aserÄƒ", 84, 1), new e("seserÄƒ", 84, 2), new e("iserÄƒ", 84, 1), new e("userÄƒ", 84, 1), new e("Ã¢serÄƒ", 84, 1), new e("irÄƒ", -1, 1), new e("urÄƒ", -1, 1), new e("Ã¢rÄƒ", -1, 1), new e("eazÄƒ", -1, 1)],
                    u = [new e("a", -1, 1), new e("e", -1, 1), new e("ie", 1, 1), new e("i", -1, 1), new e("Äƒ", -1, 1)],
                    h = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4],
                    w = new t;

                function d(A, e) {
                    w.e_s(1, A) && (w.k = w.c, w.i_g(h, 97, 259) && w.s_f(e))
                }

                function f() {
                    if (w.o_g(h, 97, 259)) {
                        for (; !w.i_g(h, 97, 259);) {
                            if (w.c >= w.l) return !0;
                            w.c++
                        }
                        return !1
                    }
                    return !0
                }

                function g() {
                    var A, e, t = w.c;
                    if (w.i_g(h, 97, 259)) {
                        if (A = w.c, !f()) return void(i = w.c);
                        if (w.c = A, ! function() {
                                if (w.i_g(h, 97, 259))
                                    for (; !w.o_g(h, 97, 259);) {
                                        if (w.c >= w.l) return !0;
                                        w.c++
                                    }
                                return !1
                            }()) return void(i = w.c)
                    }
                    w.c = t, w.o_g(h, 97, 259) && (e = w.c, f() && (w.c = e, w.i_g(h, 97, 259) && w.c < w.l && w.c++), i = w.c)
                }

                function B() {
                    for (; !w.i_g(h, 97, 259);) {
                        if (w.c >= w.l) return !1;
                        w.c++
                    }
                    for (; !w.o_g(h, 97, 259);) {
                        if (w.c >= w.l) return !1;
                        w.c++
                    }
                    return !0
                }

                function p() {
                    return r <= w.c
                }

                function m() {
                    var e, t = w.l - w.c;
                    if (w.k = w.c, (e = w.f_a_b(a, 46)) && (w.b = w.c, p())) {
                        switch (e) {
                            case 1:
                                w.s_f("abil");
                                break;
                            case 2:
                                w.s_f("ibil");
                                break;
                            case 3:
                                w.s_f("iv");
                                break;
                            case 4:
                                w.s_f("ic");
                                break;
                            case 5:
                                w.s_f("at");
                                break;
                            case 6:
                                w.s_f("it")
                        }
                        return A = !0, w.c = w.l - t, !0
                    }
                    return !1
                }

                function b() {
                    var e, t;
                    for (A = !1;;)
                        if (t = w.l - w.c, !m()) {
                            w.c = w.l - t;
                            break
                        } if (w.k = w.c, (e = w.f_a_b(c, 62)) && (w.b = w.c, n <= w.c)) {
                        switch (e) {
                            case 1:
                                w.s_d();
                                break;
                            case 2:
                                w.e_s_b(1, "Å£") && (w.b = w.c, w.s_f("t"));
                                break;
                            case 3:
                                w.s_f("ist")
                        }
                        A = !0
                    }
                }

                function Q() {
                    var A;
                    w.k = w.c, (A = w.f_a_b(u, 5)) && (w.b = w.c, i <= w.c && 1 == A && w.s_d())
                }
                this.setCurrent = function(A) {
                    w.s_c(A)
                }, this.getCurrent = function() {
                    return w.g_c()
                }, this.stem = function() {
                    var e = w.c;
                    return function() {
                            for (var A, e; A = w.c, w.i_g(h, 97, 259) && (e = w.c, w.b = e, d("u", "U"), w.c = e, d("i", "I")), w.c = A, !(w.c >= w.l);) w.c++
                        }(), w.c = e,
                        function() {
                            var A = w.c;
                            i = w.l, r = i, n = i, g(), w.c = A, B() && (r = w.c, B() && (n = w.c))
                        }(), w.lb = e, w.c = w.l,
                        function() {
                            var A, e;
                            if (w.k = w.c, (A = w.f_a_b(o, 16)) && (w.b = w.c, p())) switch (A) {
                                case 1:
                                    w.s_d();
                                    break;
                                case 2:
                                    w.s_f("a");
                                    break;
                                case 3:
                                    w.s_f("e");
                                    break;
                                case 4:
                                    w.s_f("i");
                                    break;
                                case 5:
                                    e = w.l - w.c, w.e_s_b(2, "ab") || (w.c = w.l - e, w.s_f("i"));
                                    break;
                                case 6:
                                    w.s_f("at");
                                    break;
                                case 7:
                                    w.s_f("aÅ£i")
                            }
                        }(), w.c = w.l, b(), w.c = w.l, A || (w.c = w.l, function() {
                            var A, e, t;
                            if (w.c >= i) {
                                if (e = w.lb, w.lb = i, w.k = w.c, A = w.f_a_b(l, 94)) switch (w.b = w.c, A) {
                                    case 1:
                                        if (t = w.l - w.c, !w.o_g_b(h, 97, 259) && (w.c = w.l - t, !w.e_s_b(1, "u"))) break;
                                    case 2:
                                        w.s_d()
                                }
                                w.lb = e
                            }
                        }(), w.c = w.l), Q(), w.c = w.lb,
                        function() {
                            for (var A;;) {
                                if (w.b = w.c, A = w.f_a(s, 3)) switch (w.k = w.c, A) {
                                    case 1:
                                        w.s_f("i");
                                        continue;
                                    case 2:
                                        w.s_f("u");
                                        continue;
                                    case 3:
                                        if (w.c >= w.l) break;
                                        w.c++;
                                        continue
                                }
                                break
                            }
                        }(), !0
                }
            },
            RussianStemmer: function() {
                var A, n, r = [new e("Ð²", -1, 1), new e("Ð¸Ð²", 0, 2), new e("Ñ‹Ð²", 0, 2), new e("Ð²ÑˆÐ¸", -1, 1), new e("Ð¸Ð²ÑˆÐ¸", 3, 2), new e("Ñ‹Ð²ÑˆÐ¸", 3, 2), new e("Ð²ÑˆÐ¸ÑÑŒ", -1, 1), new e("Ð¸Ð²ÑˆÐ¸ÑÑŒ", 6, 2), new e("Ñ‹Ð²ÑˆÐ¸ÑÑŒ", 6, 2)],
                    i = [new e("ÐµÐµ", -1, 1), new e("Ð¸Ðµ", -1, 1), new e("Ð¾Ðµ", -1, 1), new e("Ñ‹Ðµ", -1, 1), new e("Ð¸Ð¼Ð¸", -1, 1), new e("Ñ‹Ð¼Ð¸", -1, 1), new e("ÐµÐ¹", -1, 1), new e("Ð¸Ð¹", -1, 1), new e("Ð¾Ð¹", -1, 1), new e("Ñ‹Ð¹", -1, 1), new e("ÐµÐ¼", -1, 1), new e("Ð¸Ð¼", -1, 1), new e("Ð¾Ð¼", -1, 1), new e("Ñ‹Ð¼", -1, 1), new e("ÐµÐ³Ð¾", -1, 1), new e("Ð¾Ð³Ð¾", -1, 1), new e("ÐµÐ¼Ñƒ", -1, 1), new e("Ð¾Ð¼Ñƒ", -1, 1), new e("Ð¸Ñ…", -1, 1), new e("Ñ‹Ñ…", -1, 1), new e("ÐµÑŽ", -1, 1), new e("Ð¾ÑŽ", -1, 1), new e("ÑƒÑŽ", -1, 1), new e("ÑŽÑŽ", -1, 1), new e("Ð°Ñ", -1, 1), new e("ÑÑ", -1, 1)],
                    s = [new e("ÐµÐ¼", -1, 1), new e("Ð½Ð½", -1, 1), new e("Ð²Ñˆ", -1, 1), new e("Ð¸Ð²Ñˆ", 2, 2), new e("Ñ‹Ð²Ñˆ", 2, 2), new e("Ñ‰", -1, 1), new e("ÑŽÑ‰", 5, 1), new e("ÑƒÑŽÑ‰", 6, 2)],
                    o = [new e("ÑÑŒ", -1, 1), new e("ÑÑ", -1, 1)],
                    a = [new e("Ð»Ð°", -1, 1), new e("Ð¸Ð»Ð°", 0, 2), new e("Ñ‹Ð»Ð°", 0, 2), new e("Ð½Ð°", -1, 1), new e("ÐµÐ½Ð°", 3, 2), new e("ÐµÑ‚Ðµ", -1, 1), new e("Ð¸Ñ‚Ðµ", -1, 2), new e("Ð¹Ñ‚Ðµ", -1, 1), new e("ÐµÐ¹Ñ‚Ðµ", 7, 2), new e("ÑƒÐ¹Ñ‚Ðµ", 7, 2), new e("Ð»Ð¸", -1, 1), new e("Ð¸Ð»Ð¸", 10, 2), new e("Ñ‹Ð»Ð¸", 10, 2), new e("Ð¹", -1, 1), new e("ÐµÐ¹", 13, 2), new e("ÑƒÐ¹", 13, 2), new e("Ð»", -1, 1), new e("Ð¸Ð»", 16, 2), new e("Ñ‹Ð»", 16, 2), new e("ÐµÐ¼", -1, 1), new e("Ð¸Ð¼", -1, 2), new e("Ñ‹Ð¼", -1, 2), new e("Ð½", -1, 1), new e("ÐµÐ½", 22, 2), new e("Ð»Ð¾", -1, 1), new e("Ð¸Ð»Ð¾", 24, 2), new e("Ñ‹Ð»Ð¾", 24, 2), new e("Ð½Ð¾", -1, 1), new e("ÐµÐ½Ð¾", 27, 2), new e("Ð½Ð½Ð¾", 27, 1), new e("ÐµÑ‚", -1, 1), new e("ÑƒÐµÑ‚", 30, 2), new e("Ð¸Ñ‚", -1, 2), new e("Ñ‹Ñ‚", -1, 2), new e("ÑŽÑ‚", -1, 1), new e("ÑƒÑŽÑ‚", 34, 2), new e("ÑÑ‚", -1, 2), new e("Ð½Ñ‹", -1, 1), new e("ÐµÐ½Ñ‹", 37, 2), new e("Ñ‚ÑŒ", -1, 1), new e("Ð¸Ñ‚ÑŒ", 39, 2), new e("Ñ‹Ñ‚ÑŒ", 39, 2), new e("ÐµÑˆÑŒ", -1, 1), new e("Ð¸ÑˆÑŒ", -1, 2), new e("ÑŽ", -1, 2), new e("ÑƒÑŽ", 44, 2)],
                    c = [new e("Ð°", -1, 1), new e("ÐµÐ²", -1, 1), new e("Ð¾Ð²", -1, 1), new e("Ðµ", -1, 1), new e("Ð¸Ðµ", 3, 1), new e("ÑŒÐµ", 3, 1), new e("Ð¸", -1, 1), new e("ÐµÐ¸", 6, 1), new e("Ð¸Ð¸", 6, 1), new e("Ð°Ð¼Ð¸", 6, 1), new e("ÑÐ¼Ð¸", 6, 1), new e("Ð¸ÑÐ¼Ð¸", 10, 1), new e("Ð¹", -1, 1), new e("ÐµÐ¹", 12, 1), new e("Ð¸ÐµÐ¹", 13, 1), new e("Ð¸Ð¹", 12, 1), new e("Ð¾Ð¹", 12, 1), new e("Ð°Ð¼", -1, 1), new e("ÐµÐ¼", -1, 1), new e("Ð¸ÐµÐ¼", 18, 1), new e("Ð¾Ð¼", -1, 1), new e("ÑÐ¼", -1, 1), new e("Ð¸ÑÐ¼", 21, 1), new e("Ð¾", -1, 1), new e("Ñƒ", -1, 1), new e("Ð°Ñ…", -1, 1), new e("ÑÑ…", -1, 1), new e("Ð¸ÑÑ…", 26, 1), new e("Ñ‹", -1, 1), new e("ÑŒ", -1, 1), new e("ÑŽ", -1, 1), new e("Ð¸ÑŽ", 30, 1), new e("ÑŒÑŽ", 30, 1), new e("Ñ", -1, 1), new e("Ð¸Ñ", 33, 1), new e("ÑŒÑ", 33, 1)],
                    l = [new e("Ð¾ÑÑ‚", -1, 1), new e("Ð¾ÑÑ‚ÑŒ", -1, 1)],
                    u = [new e("ÐµÐ¹ÑˆÐµ", -1, 1), new e("Ð½", -1, 2), new e("ÐµÐ¹Ñˆ", -1, 1), new e("ÑŒ", -1, 3)],
                    h = [33, 65, 8, 232],
                    w = new t;

                function d() {
                    for (; !w.i_g(h, 1072, 1103);) {
                        if (w.c >= w.l) return !1;
                        w.c++
                    }
                    return !0
                }

                function f() {
                    for (; !w.o_g(h, 1072, 1103);) {
