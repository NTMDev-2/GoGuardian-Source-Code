// 6001 - 6281
// This is preparing for the check sum check, using CRC8, dallas-1-wire, CRC16, CCITT, CRC-16-MODBUS, KERMIT, CRC24, JAM
            if (this.isCurrEntityExpired()) this.refreshCurrEntity();
                    else {
                        var A = this.currEntity.entity.viewings;
                        if (!A || !A[A.length - 1]) return this.metrics.increment("entity_manager.update_viewing.current_viewing_undefined"), this.logger.warn("EntityManager.updateViewing called without a current viewing"), this.createViewing();
                        var e = A[A.length - 1],
                            t = {
                                id: e.id,
                                start_time_ms: e.start_time_ms,
                                end_time_ms: Date.now()
                            };
                        A[A.length - 1] = t;
                        var n = s.stripHashFromGoogleDocs(window.location.host, window.location.href);
                        this.toSubmit.push(s.createViewingDiff(this.currEntity.id, n, t))
                    }
                }
            }, A.prototype.flush = function() {
                0 !== this.toSubmit.length && (this.toSubmit = s.mergeEntityDiffs(this.toSubmit), this.ws.send(JSON.stringify(this.toSubmit)), this.toSubmit = [], s.storeEntities(this.entities))
            }, A.prototype.onMessage = function(A) {
                this.messenger.shared.onWebsocketMessage.emit({
                    top: !0,
                    iframes: !1
                }, JSON.parse(A.data))
            }, A.prototype.onError = function() {
                this.metrics.increment("entity_manager.websocket.on_error")
            }, A.prototype.onClose = function(A) {
                this.metrics.increment("entity_manager.websocket.on_close"), this.logger.withFields({
                    code: A.code,
                    reason: A.reason
                }).error("EntityManager.onClose websocket closed")
            }, A
        }();
    e.EntityManager = l
},
function(A, e, t) {
    "use strict";
    (function(A) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = t(4);

        function r(A, e, t) {
            return e in A ? Object.defineProperty(A, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : A[e] = t, A
        }

        function i(A) {
            if (!A) return !1;
            try {
                return new URL(A), !0
            } catch (A) {
                return !1
            }
        }

        function s(A) {
            switch (A) { // These are all the possible block reasons for GoGuardian
                case e.Reason.BlockWebProxies:
                case e.Reason.BlockDirectIPAccess:
                case e.Reason.BlockConsumerAccounts:
                case e.Reason.AdminSiteFilter:
                case e.Reason.AdminSiteCategoryFilter:
                case e.Reason.AdminSafeMode:
                case e.Reason.ParentSiteFilter:
                case e.Reason.ParentPause:
                case e.Reason.ParentScheduledPause:
                case e.Reason.X3Report:
                case e.Reason.TeacherScene:
                case e.Reason.Unknown:
                    return !0; // Returns true if found a block
                default:
                    return !1 // False if not
            }
        }

        function o(A) {
            switch (A) {
                case e.SourceType.ChromiumM:
                case e.SourceType.CIP:
                case e.SourceType.NA:
                case e.SourceType.Shield:
                    return !0;
                default:
                    return !1
            }
        }

        function a(A, e) {
            var t = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(A);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function c(A) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(t), !0).forEach((function(e) {
                    r(A, e, t[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(e) {
                    Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
                }))
            }
            return A
        }

        function l(A, e) {
            var t = "undefined" != typeof Symbol && A[Symbol.iterator] || A["@@iterator"];
            if (!t) {
                if (Array.isArray(A) || (t = function(A, e) {
                        if (!A) return;
                        if ("string" == typeof A) return u(A, e);
                        var t = Object.prototype.toString.call(A).slice(8, -1);
                        "Object" === t && A.constructor && (t = A.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(A);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(A, e)
                    }(A)) || e && A && "number" == typeof A.length) {
                    t && (A = t);
                    var n = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return n >= A.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: A[n++]
                            }
                        },
                        e: function(A) {
                            throw A
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, s = !0,
                o = !1;
            return {
                s: function() {
                    t = t.call(A)
                },
                n: function() {
                    var A = t.next();
                    return s = A.done, A
                },
                e: function(A) {
                    o = !0, i = A
                },
                f: function() {
                    try {
                        s || null == t.return || t.return()
                    } finally {
                        if (o) throw i
                    }
                }
            }
        }

        function u(A, e) {
            (null == e || e > A.length) && (e = A.length);
            for (var t = 0, n = new Array(e); t < e; t++) n[t] = A[t];
            return n
        }
        var h = ["oi", "ou", "st", "rs"],
            w = ["oi", "ou", "st", "rs", "sci", "api", "afi", "pfi", "x3rpi", "tsi", "tsfi"];

        function d(A) {
            var t, n = l(h);
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    if (!A.has(r)) throw new Error("missing required key: ".concat(r))
                }
            } catch (A) {
                n.e(A)
            } finally {
                n.f()
            }
            var a, u = l(w);
            try {
                for (u.s(); !(a = u.n()).done;) {
                    var d = a.value,
                        f = A.getAll(d);
                    if (f.length > 1) throw new Error("too many values for the key: ".concat(d));
                    if (1 === f.length && "" === A.get(d)) throw new Error("empty value for the key: ".concat(d))
                }
            } catch (A) {
                u.e(A)
            } finally {
                u.f()
            }
            var g = Number(A.get("oi"));
            if (m(g)) throw new Error(m(g));
            var B = g / y,
                p = A.get("ou") || "",
                Q = "",
                C = null,
                v = [];
            i(p) ? Q = p : (C = p, v.push("error parsing originalURL: ".concat(p)));
            var U = A.get("st");
            o(U) || (U = e.SourceType.Unknown);
            var _ = A.get("rs");
            s(_) || (_ = e.Reason.Unknown);
            var F = b("sci", A, "siteCategoryID"), // Creating all variables for the possible block categories. 
                E = b("api", A, "adminPolicyID"),
                I = b("afi", A, "adminFilterID"),
                H = b("pfi", A, "parentFilterID"),
                k = b("tsi", A, "teacherSceneID"),
                S = b("tsfi", A, "teacherSceneFilterID"),
                T = A.get("x3rpi"),
                x = A.getAll("tsans");
            if (x.length && x.some(A => !A)) throw new Error("invalid value in teacherSessionAdminNames, idx: ".concat(x.indexOf(""))); // Unsure what idx is. I've pretty sure I've seen it before.
            return c(c(c(c(c(c(c(c(c(c({
                orgID: B,
                originalURL: Q,
                sourceType: U,
                reason: _
            }, C && {
                rawOriginalURL: C // They are assigned here
            }), F && {
                siteCategoryID: F
            }), E && {
                adminPolicyID: E
            }), I && {
                adminFilterID: I
            }), H && {
                parentFilterID: H
            }), T && {
                x3ReportPublicID: T
            }), k && {
                teacherSceneID: k
            }), S && {
                teacherSceneFilterID: S
            }), !!x.length && {
                teacherSessionAdminNames: x
            }), !!v.length && {
                validationErrors: v
            })
        }
        var f, g, B, p, m = A => isNaN(A) || A % y != 0 || A < 0 ? "invalid orgId" : A / y == 0 && "".concat("invalid orgId", " (0 value)"),
            b = (A, e, t) => {
                var n = e.get(A),
                    r = Number(n);
                if (null !== n && isNaN(r) || r < 0) throw new Error("error parsing ".concat(t, "; not a valid number"));
                return r
            },
            Q = "blocked.goguardian.com",
            C = "staging-blocked.goguardian.com";
        e.SourceType = void 0, (f = e.SourceType || (e.SourceType = {})).ChromiumM = "chromium-m", f.CIP = "cip", f.NA = "na", f.Shield = "shield", f.Unknown = "unknown", e.Reason = void 0, (g = e.Reason || (e.Reason = {})).BlockWebProxies = "BLOCK_WEB_PROXIES", g.BlockDirectIPAccess = "BLOCK_DIRECT_IP_ACCESS", g.BlockConsumerAccounts = "BLOCK_CONSUMER_ACCOUNTS", g.AdminSiteFilter = "ADMIN_SITE_FILTER", g.AdminSiteCategoryFilter = "ADMIN_SITE_CATEGORY_FILTER", g.AdminSafeMode = "ADMIN_SAFE_MODE", g.ParentSiteFilter = "PARENT_SITE_FILTER", g.ParentPause = "PARENT_PAUSE", g.ParentScheduledPause = "PARENT_SCHEDULED_PAUSE", g.X3Report = "X3_REPORT", g.TeacherScene = "TEACHER_SCENE", g.Unknown = "UNKNOWN", e.Environment = void 0, (B = e.Environment || (e.Environment = {}))[B.Production = 0] = "Production", B[B.Staging = 1] = "Staging",
            function(A) {
                A.Sum = "sum", A.Ctx = "ctx"
            }(p || (p = {}));
        var y = 1234567,
            v = Number.MAX_SAFE_INTEGER / y,
            U = {
                1: d
            },
            _ = n.Buffer.from && n.Buffer.alloc && n.Buffer.allocUnsafe && n.Buffer.allocUnsafeSlow ? n.Buffer.from : A => new n.Buffer(A);

        function F(A, e) {
            var t = (A, t) => e(A, t) >>> 0;
            return t.signed = e, t.unsigned = t, t.model = A, t
        }
        F("crc1", (function(A, e) { // CRC1 starts here
            n.Buffer.isBuffer(A) || (A = _(A));
            for (var t = ~~e, r = 0, i = 0; i < A.length; i++) {
                r += A[i]
            }
            return (t += r % 256) % 256
        }));
