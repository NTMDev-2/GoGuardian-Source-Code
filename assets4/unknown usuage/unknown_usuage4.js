// Lines 3101 - 5200
i = e.map(sr);
            return {
                next: function() {
                    if (n >= t) return {
                        done: !0,
                        value: null
                    };
                    for (var A = "Ã—"; n < t && "Ã—" === (A = or(0, i, ++n)););
                    if ("Ã—" !== A || n === t) {
                        var s = rr.apply(null, e.slice(r, n));
                        return r = n, {
                            value: s,
                            done: !1
                        }
                    }
                    return {
                        done: !0,
                        value: null
                    }
                }
            }
        },
        cr = function(A) {
            return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
        },
        lr = function(A, e, t, n, r) {
            var i = "http://www.w3.org/2000/svg",
                s = document.createElementNS(i, "svg"),
                o = document.createElementNS(i, "foreignObject");
            return s.setAttributeNS(null, "width", A.toString()), s.setAttributeNS(null, "height", e.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", n.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(o), o.appendChild(r), s
        },
        ur = function(A) {
            return new Promise((function(e, t) {
                var n = new Image;
                n.onload = function() {
                    return e(n)
                }, n.onerror = t, n.src = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent((new XMLSerializer).serializeToString(A)))
            }))
        },
        hr = {
            get SUPPORT_RANGE_BOUNDS() {
                var A = function(A) {
                    if (A.createRange) {
                        var e = A.createRange();
                        if (e.getBoundingClientRect) {
                            var t = A.createElement("boundtest");
                            t.style.height = "".concat(123, "px"), t.style.display = "block", A.body.appendChild(t), e.selectNode(t);
                            var n = e.getBoundingClientRect(),
                                r = Math.round(n.height);
                            if (A.body.removeChild(t), 123 === r) return !0
                        }
                    }
                    return !1
                }(document);
                return Object.defineProperty(hr, "SUPPORT_RANGE_BOUNDS", {
                    value: A
                }), A
            },
            get SUPPORT_WORD_BREAKING() {
                var A = hr.SUPPORT_RANGE_BOUNDS && function(A) {
                    var e = A.createElement("boundtest");
                    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
                    var t = A.createRange();
                    e.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
                    var n = e.firstChild,
                        r = a(n.data).map((function(A) {
                            return c(A)
                        })),
                        i = 0,
                        s = {},
                        o = r.every((function(A, e) {
                            t.setStart(n, i), t.setEnd(n, i + A.length);
                            var r = t.getBoundingClientRect();
                            i += A.length;
                            var o = r.x > s.x || r.y > s.y;
                            return s = r, 0 === e || o
                        }));
                    return A.body.removeChild(e), o
                }(document);
                return Object.defineProperty(hr, "SUPPORT_WORD_BREAKING", {
                    value: A
                }), A
            },
            get SUPPORT_SVG_DRAWING() {
                var A = function(A) {
                    var e = new Image,
                        t = A.createElement("canvas"),
                        n = t.getContext("2d");
                    if (!n) return !1;
                    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                    try {
                        n.drawImage(e, 0, 0), t.toDataURL()
                    } catch (A) {
                        return !1
                    }
                    return !0
                }(document);
                return Object.defineProperty(hr, "SUPPORT_SVG_DRAWING", {
                    value: A
                }), A
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
                var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function(A) {
                    var e = A.createElement("canvas");
                    e.width = 100, e.height = 100;
                    var t = e.getContext("2d");
                    if (!t) return Promise.reject(!1);
                    t.fillStyle = "rgb(0, 255, 0)", t.fillRect(0, 0, 100, 100);
                    var n = new Image,
                        r = e.toDataURL();
                    n.src = r;
                    var i = lr(100, 100, 0, 0, n);
                    return t.fillStyle = "red", t.fillRect(0, 0, 100, 100), ur(i).then((function(e) {
                        t.drawImage(e, 0, 0);
                        var n = t.getImageData(0, 0, 100, 100).data;
                        t.fillStyle = "red", t.fillRect(0, 0, 100, 100);
                        var i = A.createElement("div");
                        return i.style.backgroundImage = "url(".concat(r, ")"), i.style.height = "".concat(100, "px"), cr(n) ? ur(lr(100, 100, 0, 0, i)) : Promise.reject(!1)
                    })).then((function(A) {
                        return t.drawImage(A, 0, 0), cr(t.getImageData(0, 0, 100, 100).data)
                    })).catch((function() {
                        return !1
                    }))
                }(document) : Promise.resolve(!1);
                return Object.defineProperty(hr, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                    value: A
                }), A
            },
            get SUPPORT_CORS_IMAGES() {
                var A = void 0 !== (new Image).crossOrigin;
                return Object.defineProperty(hr, "SUPPORT_CORS_IMAGES", {
                    value: A
                }), A
            },
            get SUPPORT_RESPONSE_TYPE() {
                var A = "string" == typeof(new XMLHttpRequest).responseType;
                return Object.defineProperty(hr, "SUPPORT_RESPONSE_TYPE", {
                    value: A
                }), A
            },
            get SUPPORT_CORS_XHR() {
                var A = "withCredentials" in new XMLHttpRequest;
                return Object.defineProperty(hr, "SUPPORT_CORS_XHR", {
                    value: A
                }), A
            },
            get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
                var A = !("undefined" == typeof Intl || !Intl.Segmenter);
                return Object.defineProperty(hr, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
                    value: A
                }), A
            }
        },
        wr = function(A, e) {
            this.text = A, this.bounds = e
        },
        dr = function(A, e) {
            var t = e.ownerDocument;
            if (t) {
                var n = t.createElement("html2canvaswrapper");
                n.appendChild(e.cloneNode(!0));
                var r = e.parentNode;
                if (r) {
                    r.replaceChild(n, e);
                    var i = o(A, n);
                    return n.firstChild && r.replaceChild(n.firstChild, n), i
                }
            }
            return s.EMPTY
        },
        fr = function(A, e, t) {
            var n = A.ownerDocument;
            if (!n) throw new Error("Node has no owner document");
            var r = n.createRange();
            return r.setStart(A, e), r.setEnd(A, e + t), r
        },
        gr = function(A) {
            if (hr.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                var e = new Intl.Segmenter(void 0, {
                    granularity: "grapheme"
                });
                return Array.from(e.segment(A)).map((function(A) {
                    return A.segment
                }))
            }
            return function(A) {
                for (var e, t = ar(A), n = []; !(e = t.next()).done;) e.value && n.push(e.value.slice());
                return n
            }(A)
        },
        Br = function(A, e) {
            return 0 !== e.letterSpacing ? gr(A) : function(A, e) {
                if (hr.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                    var t = new Intl.Segmenter(void 0, {
                        granularity: "word"
                    });
                    return Array.from(t.segment(A)).map((function(A) {
                        return A.segment
                    }))
                }
                return mr(A, e)
            }(A, e)
        },
        pr = [32, 160, 4961, 65792, 65793, 4153, 4241],
        mr = function(A, e) {
            for (var t, n = function(A, e) {
                    var t = a(A),
                        n = rA(t, e),
                        r = n[0],
                        i = n[1],
                        s = n[2],
                        o = t.length,
                        c = 0,
                        l = 0;
                    return {
                        next: function() {
                            if (l >= o) return {
                                done: !0,
                                value: null
                            };
                            for (var A = "Ã—"; l < o && "Ã—" === (A = nA(t, i, r, ++l, s)););
                            if ("Ã—" !== A || l === o) {
                                var e = new iA(t, A, c, l);
                                return c = l, {
                                    value: e,
                                    done: !1
                                }
                            }
                            return {
                                done: !0,
                                value: null
                            }
                        }
                    }
                }(A, {
                    lineBreak: e.lineBreak,
                    wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak
                }), r = [], i = function() {
                    if (t.value) {
                        var A = t.value.slice(),
                            e = a(A),
                            n = "";
                        e.forEach((function(A) {
                            -1 === pr.indexOf(A) ? n += c(A) : (n.length && r.push(n), r.push(c(A)), n = "")
                        })), n.length && r.push(n)
                    }
                }; !(t = n.next()).done;) i();
            return r
        },
        br = function(A, e, t) {
            this.text = Qr(e.data, t.textTransform), this.textBounds = function(A, e, t, n) {
                var r = Br(e, t),
                    i = [],
                    o = 0;
                return r.forEach((function(e) {
                    if (t.textDecorationLine.length || e.trim().length > 0)
                        if (hr.SUPPORT_RANGE_BOUNDS) {
                            var r = fr(n, o, e.length).getClientRects();
                            if (r.length > 1) {
                                var a = gr(e),
                                    c = 0;
                                a.forEach((function(e) {
                                    i.push(new wr(e, s.fromDOMRectList(A, fr(n, c + o, e.length).getClientRects()))), c += e.length
                                }))
                            } else i.push(new wr(e, s.fromDOMRectList(A, r)))
                        } else {
                            var l = n.splitText(e.length);
                            i.push(new wr(e, dr(A, n))), n = l
                        }
                    else hr.SUPPORT_RANGE_BOUNDS || (n = n.splitText(e.length));
                    o += e.length
                })), i
            }(A, this.text, t, e)
        },
        Qr = function(A, e) {
            switch (e) {
                case 1:
                    return A.toLowerCase();
                case 3:
                    return A.replace(Cr, yr);
                case 2:
                    return A.toUpperCase();
                default:
                    return A
            }
        },
        Cr = /(^|\s|:|-|\(|\))([a-z])/g,
        yr = function(A, e, t) {
            return A.length > 0 ? e + t.toUpperCase() : A
        },
        vr = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this;
                return n.src = t.currentSrc || t.src, n.intrinsicWidth = t.naturalWidth, n.intrinsicHeight = t.naturalHeight, n.context.cache.addImage(n.src), n
            }
            return e(t, A), t
        }(Gn),
        Ur = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this;
                return n.canvas = t, n.intrinsicWidth = t.width, n.intrinsicHeight = t.height, n
            }
            return e(t, A), t
        }(Gn),
        _r = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this,
                    r = new XMLSerializer,
                    i = o(e, t);
                return t.setAttribute("width", "".concat(i.width, "px")), t.setAttribute("height", "".concat(i.height, "px")), n.svg = "data:image/svg+xml,".concat(encodeURIComponent(r.serializeToString(t))), n.intrinsicWidth = t.width.baseVal.value, n.intrinsicHeight = t.height.baseVal.value, n.context.cache.addImage(n.svg), n
            }
            return e(t, A), t
        }(Gn),
        Fr = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this;
                return n.value = t.value, n
            }
            return e(t, A), t
        }(Gn),
        Er = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this;
                return n.start = t.start, n.reversed = "boolean" == typeof t.reversed && !0 === t.reversed, n
            }
            return e(t, A), t
        }(Gn),
        Ir = [{
            type: 15,
            flags: 0,
            unit: "px",
            number: 3
        }],
        Hr = [{
            type: 16,
            flags: 0,
            number: 50
        }],
        kr = "password",
        Sr = function(A) {
            function t(e, t) {
                var n, r, i, o = A.call(this, e, t) || this;
                switch (o.type = t.type.toLowerCase(), o.checked = t.checked, o.value = 0 === (r = (n = t).type === kr ? new Array(n.value.length + 1).join("â€¢") : n.value).length ? n.placeholder || "" : r, "checkbox" !== o.type && "radio" !== o.type || (o.styles.backgroundColor = 3739148031, o.styles.borderTopColor = o.styles.borderRightColor = o.styles.borderBottomColor = o.styles.borderLeftColor = 2779096575, o.styles.borderTopWidth = o.styles.borderRightWidth = o.styles.borderBottomWidth = o.styles.borderLeftWidth = 1, o.styles.borderTopStyle = o.styles.borderRightStyle = o.styles.borderBottomStyle = o.styles.borderLeftStyle = 1, o.styles.backgroundClip = [0], o.styles.backgroundOrigin = [0], o.bounds = (i = o.bounds).width > i.height ? new s(i.left + (i.width - i.height) / 2, i.top, i.height, i.height) : i.width < i.height ? new s(i.left, i.top + (i.height - i.width) / 2, i.width, i.width) : i), o.type) {
                    case "checkbox":
                        o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = Ir;
                        break;
                    case "radio":
                        o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = Hr
                }
                return o
            }
            return e(t, A), t
        }(Gn),
        Tr = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this,
                    r = t.options[t.selectedIndex || 0];
                return n.value = r && r.text || "", n
            }
            return e(t, A), t
        }(Gn),
        xr = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this;
                return n.value = t.value, n
            }
            return e(t, A), t
        }(Gn),
        Lr = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this;
                n.src = t.src, n.width = parseInt(t.width, 10) || 0, n.height = parseInt(t.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
                try {
                    if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
                        n.tree = Mr(e, t.contentWindow.document.documentElement);
                        var r = t.contentWindow.document.documentElement ? Ye(e, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : Xe.TRANSPARENT,
                            i = t.contentWindow.document.body ? Ye(e, getComputedStyle(t.contentWindow.document.body).backgroundColor) : Xe.TRANSPARENT;
                        n.backgroundColor = se(r) ? se(i) ? n.styles.backgroundColor : i : r
                    }
                } catch (A) {}
                return n
            }
            return e(t, A), t
        }(Gn),
        Or = ["OL", "UL", "MENU"],
        Dr = function(A, e, t, n) {
            for (var r = e.firstChild, i = void 0; r; r = i)
                if (i = r.nextSibling, Nr(r) && r.data.length > 0) t.textNodes.push(new br(A, r, t.styles));
                else if (Vr(r))
                if (ri(r) && r.assignedNodes) r.assignedNodes().forEach((function(e) {
                    return Dr(A, e, t, n)
                }));
                else {
                    var s = Kr(A, r);
                    s.styles.isVisible() && (Rr(r, s, n) ? s.flags |= 4 : Pr(s.styles) && (s.flags |= 2), -1 !== Or.indexOf(r.tagName) && (s.flags |= 8), t.elements.push(s), r.slot, r.shadowRoot ? Dr(A, r.shadowRoot, s, n) : ti(r) || zr(r) || ni(r) || Dr(A, r, s, n))
                }
        },
        Kr = function(A, e) {
            return $r(e) ? new vr(A, e) : Zr(e) ? new Ur(A, e) : zr(e) ? new _r(A, e) : Xr(e) ? new Fr(A, e) : Jr(e) ? new Er(A, e) : Wr(e) ? new Sr(A, e) : ni(e) ? new Tr(A, e) : ti(e) ? new xr(A, e) : Ai(e) ? new Lr(A, e) : new Gn(A, e)
        },
        Mr = function(A, e) {
            var t = Kr(A, e);
            return t.flags |= 4, Dr(A, e, t, t), t
        },
        Rr = function(A, e, t) {
            return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || jr(A) && t.styles.isTransparent()
        },
        Pr = function(A) {
            return A.isPositioned() || A.isFloating()
        },
        Nr = function(A) {
            return A.nodeType === Node.TEXT_NODE
        },
        Vr = function(A) {
            return A.nodeType === Node.ELEMENT_NODE
        },
        Gr = function(A) {
            return Vr(A) && void 0 !== A.style && !Yr(A)
        },
        Yr = function(A) {
            return "object" == typeof A.className
        },
        Xr = function(A) {
            return "LI" === A.tagName
        },
        Jr = function(A) {
            return "OL" === A.tagName
        },
        Wr = function(A) {
            return "INPUT" === A.tagName
        },
        zr = function(A) {
            return "svg" === A.tagName
        },
        jr = function(A) {
            return "BODY" === A.tagName
        },
        Zr = function(A) {
            return "CANVAS" === A.tagName
        },
        qr = function(A) {
            return "VIDEO" === A.tagName
        },
        $r = function(A) {
            return "IMG" === A.tagName
        },
        Ai = function(A) {
            return "IFRAME" === A.tagName
        },
        ei = function(A) {
            return "STYLE" === A.tagName
        },
        ti = function(A) {
            return "TEXTAREA" === A.tagName
        },
        ni = function(A) {
            return "SELECT" === A.tagName
        },
        ri = function(A) {
            return "SLOT" === A.tagName
        },
        ii = function(A) {
            return A.tagName.indexOf("-") > 0
        },
        si = function() {
            function A() {
                this.counters = {}
            }
            return A.prototype.getCounterValue = function(A) {
                var e = this.counters[A];
                return e && e.length ? e[e.length - 1] : 1
            }, A.prototype.getCounterValues = function(A) {
                var e = this.counters[A];
                return e || []
            }, A.prototype.pop = function(A) {
                var e = this;
                A.forEach((function(A) {
                    return e.counters[A].pop()
                }))
            }, A.prototype.parse = function(A) {
                var e = this,
                    t = A.counterIncrement,
                    n = A.counterReset,
                    r = !0;
                null !== t && t.forEach((function(A) {
                    var t = e.counters[A.counter];
                    t && 0 !== A.increment && (r = !1, t.length || t.push(1), t[Math.max(0, t.length - 1)] += A.increment)
                }));
                var i = [];
                return r && n.forEach((function(A) {
                    var t = e.counters[A.counter];
                    i.push(A.counter), t || (t = e.counters[A.counter] = []), t.push(A.reset)
                })), i
            }, A
        }(),
        oi = {
            integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        },
        ai = {
            integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["Õ”", "Õ“", "Õ’", "Õ‘", "Õ", "Õ", "ÕŽ", "Õ", "ÕŒ", "Õ‹", "ÕŠ", "Õ‰", "Õˆ", "Õ‡", "Õ†", "Õ…", "Õ„", "Õƒ", "Õ‚", "Õ", "Õ€", "Ô¿", "Ô¾", "Ô½", "Ô¼", "Ô»", "Ôº", "Ô¹", "Ô¸", "Ô·", "Ô¶", "Ôµ", "Ô´", "Ô³", "Ô²", "Ô±"]
        },
        ci = {
            integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["×™×³", "×˜×³", "×—×³", "×–×³", "×•×³", "×”×³", "×“×³", "×’×³", "×‘×³", "××³", "×ª", "×©", "×¨", "×§", "×¦", "×¤", "×¢", "×¡", "× ", "×ž", "×œ", "×›", "×™×˜", "×™×—", "×™×–", "×˜×–", "×˜×•", "×™", "×˜", "×—", "×–", "×•", "×”", "×“", "×’", "×‘", "×"]
        },
        li = {
            integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["áƒµ", "áƒ°", "áƒ¯", "áƒ´", "áƒ®", "áƒ­", "áƒ¬", "áƒ«", "áƒª", "áƒ©", "áƒ¨", "áƒ§", "áƒ¦", "áƒ¥", "áƒ¤", "áƒ³", "áƒ¢", "áƒ¡", "áƒ ", "áƒŸ", "áƒž", "áƒ", "áƒ²", "áƒœ", "áƒ›", "áƒš", "áƒ™", "áƒ˜", "áƒ—", "áƒ±", "áƒ–", "áƒ•", "áƒ”", "áƒ“", "áƒ’", "áƒ‘", "áƒ"]
        },
        ui = function(A, e, t, n, r, i) {
            return A < e || A > t ? gi(A, r, i.length > 0) : n.integers.reduce((function(e, t, r) {
                for (; A >= t;) A -= t, e += n.values[r];
                return e
            }), "") + i
        },
        hi = function(A, e, t, n) {
            var r = "";
            do {
                t || A--, r = n(A) + r, A /= e
            } while (A * e >= e);
            return r
        },
        wi = function(A, e, t, n, r) {
            var i = t - e + 1;
            return (A < 0 ? "-" : "") + (hi(Math.abs(A), i, n, (function(A) {
                return c(Math.floor(A % i) + e)
            })) + r)
        },
        di = function(A, e, t) {
            void 0 === t && (t = ". ");
            var n = e.length;
            return hi(Math.abs(A), n, !1, (function(A) {
                return e[Math.floor(A % n)]
            })) + t
        },
        fi = function(A, e, t, n, r, i) {
            if (A < -9999 || A > 9999) return gi(A, 4, r.length > 0);
            var s = Math.abs(A),
                o = r;
            if (0 === s) return e[0] + o;
            for (var a = 0; s > 0 && a <= 4; a++) {
                var c = s % 10;
                0 === c && _n(i, 1) && "" !== o ? o = e[c] + o : c > 1 || 1 === c && 0 === a || 1 === c && 1 === a && _n(i, 2) || 1 === c && 1 === a && _n(i, 4) && A > 100 || 1 === c && a > 1 && _n(i, 8) ? o = e[c] + (a > 0 ? t[a - 1] : "") + o : 1 === c && a > 0 && (o = t[a - 1] + o), s = Math.floor(s / 10)
            }
            return (A < 0 ? n : "") + o
        },
        gi = function(A, e, t) {
            var n = t ? ". " : "",
                r = t ? "ã€" : "",
                i = t ? ", " : "",
                s = t ? " " : "";
            switch (e) {
                case 0:
                    return "â€¢" + s;
                case 1:
                    return "â—¦" + s;
                case 2:
                    return "â—¾" + s;
                case 5:
                    var o = wi(A, 48, 57, !0, n);
                    return o.length < 4 ? "0".concat(o) : o;
                case 4:
                    return di(A, "ã€‡ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", r);
                case 6:
                    return ui(A, 1, 3999, oi, 3, n).toLowerCase();
                case 7:
                    return ui(A, 1, 3999, oi, 3, n);
                case 8:
                    return wi(A, 945, 969, !1, n);
                case 9:
                    return wi(A, 97, 122, !1, n);
                case 10:
                    return wi(A, 65, 90, !1, n);
                case 11:
                    return wi(A, 1632, 1641, !0, n);
                case 12:
                case 49:
                    return ui(A, 1, 9999, ai, 3, n);
                case 35:
                    return ui(A, 1, 9999, ai, 3, n).toLowerCase();
                case 13:
                    return wi(A, 2534, 2543, !0, n);
                case 14:
                case 30:
                    return wi(A, 6112, 6121, !0, n);
                case 15:
                    return di(A, "å­ä¸‘å¯…å¯è¾°å·³åˆæœªç”³é…‰æˆŒäº¥", r);
                case 16:
                    return di(A, "ç”²ä¹™ä¸™ä¸æˆŠå·±åºšè¾›å£¬ç™¸", r);
                case 17:
                case 48:
                    return fi(A, "é›¶ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", "åç™¾åƒè¬", "è² ", r, 14);
                case 47:
                    return fi(A, "é›¶å£¹è²³åƒè‚†ä¼é™¸æŸ’æŒçŽ–", "æ‹¾ä½°ä»Ÿè¬", "è² ", r, 15);
                case 42:
                    return fi(A, "é›¶ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", "åç™¾åƒè¬", "è´Ÿ", r, 14);
                case 41:
                    return fi(A, "é›¶å£¹è´°åè‚†ä¼é™†æŸ’æŒçŽ–", "æ‹¾ä½°ä»Ÿè¬", "è´Ÿ", r, 15);
                case 26:
                    return fi(A, "ã€‡ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", "åç™¾åƒä¸‡", "ãƒžã‚¤ãƒŠã‚¹", r, 0);
                case 25:
                    return fi(A, "é›¶å£±å¼å‚å››ä¼å…­ä¸ƒå…«ä¹", "æ‹¾ç™¾åƒä¸‡", "ãƒžã‚¤ãƒŠã‚¹", r, 7);
                case 31:
                    return fi(A, "ì˜ì¼ì´ì‚¼ì‚¬ì˜¤ìœ¡ì¹ íŒ”êµ¬", "ì‹­ë°±ì²œë§Œ", "ë§ˆì´ë„ˆìŠ¤", i, 7);
                case 33:
                    return fi(A, "é›¶ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹", "åç™¾åƒè¬", "ë§ˆì´ë„ˆìŠ¤", i, 0);
                case 32:
                    return fi(A, "é›¶å£¹è²³åƒå››äº”å…­ä¸ƒå…«ä¹", "æ‹¾ç™¾åƒ", "ë§ˆì´ë„ˆìŠ¤", i, 7);
                case 18:
                    return wi(A, 2406, 2415, !0, n);
                case 20:
                    return ui(A, 1, 19999, li, 3, n);
                case 21:
                    return wi(A, 2790, 2799, !0, n);
                case 22:
                    return wi(A, 2662, 2671, !0, n);
                case 52:
                    return ui(A, 1, 10999, ci, 3, n);
                case 23:
                    return di(A, "ã‚ã„ã†ãˆãŠã‹ããã‘ã“ã•ã—ã™ã›ããŸã¡ã¤ã¦ã¨ãªã«ã¬ã­ã®ã¯ã²ãµã¸ã»ã¾ã¿ã‚€ã‚ã‚‚ã‚„ã‚†ã‚ˆã‚‰ã‚Šã‚‹ã‚Œã‚ã‚ã‚ã‚‘ã‚’ã‚“");
                case 24:
                    return di(A, "ã„ã‚ã¯ã«ã»ã¸ã¨ã¡ã‚Šã¬ã‚‹ã‚’ã‚ã‹ã‚ˆãŸã‚Œãã¤ã­ãªã‚‰ã‚€ã†ã‚ã®ãŠãã‚„ã¾ã‘ãµã“ãˆã¦ã‚ã•ãã‚†ã‚ã¿ã—ã‚‘ã²ã‚‚ã›ã™");
                case 27:
                    return wi(A, 3302, 3311, !0, n);
                case 28:
                    return di(A, "ã‚¢ã‚¤ã‚¦ã‚¨ã‚ªã‚«ã‚­ã‚¯ã‚±ã‚³ã‚µã‚·ã‚¹ã‚»ã‚½ã‚¿ãƒãƒ„ãƒ†ãƒˆãƒŠãƒ‹ãƒŒãƒãƒŽãƒãƒ’ãƒ•ãƒ˜ãƒ›ãƒžãƒŸãƒ ãƒ¡ãƒ¢ãƒ¤ãƒ¦ãƒ¨ãƒ©ãƒªãƒ«ãƒ¬ãƒ­ãƒ¯ãƒ°ãƒ±ãƒ²ãƒ³", r);
                case 29:
                    return di(A, "ã‚¤ãƒ­ãƒãƒ‹ãƒ›ãƒ˜ãƒˆãƒãƒªãƒŒãƒ«ãƒ²ãƒ¯ã‚«ãƒ¨ã‚¿ãƒ¬ã‚½ãƒ„ãƒãƒŠãƒ©ãƒ ã‚¦ãƒ°ãƒŽã‚ªã‚¯ãƒ¤ãƒžã‚±ãƒ•ã‚³ã‚¨ãƒ†ã‚¢ã‚µã‚­ãƒ¦ãƒ¡ãƒŸã‚·ãƒ±ãƒ’ãƒ¢ã‚»ã‚¹", r);
                case 34:
                    return wi(A, 3792, 3801, !0, n);
                case 37:
                    return wi(A, 6160, 6169, !0, n);
                case 38:
                    return wi(A, 4160, 4169, !0, n);
                case 39:
                    return wi(A, 2918, 2927, !0, n);
                case 40:
                    return wi(A, 1776, 1785, !0, n);
                case 43:
                    return wi(A, 3046, 3055, !0, n);
                case 44:
                    return wi(A, 3174, 3183, !0, n);
                case 45:
                    return wi(A, 3664, 3673, !0, n);
                case 46:
                    return wi(A, 3872, 3881, !0, n);
                case 3:
                default:
                    return wi(A, 48, 57, !0, n)
            }
        },
        Bi = function() {
            function A(A, e, t) {
                if (this.context = A, this.options = t, this.scrolledElements = [], this.referenceElement = e, this.counters = new si, this.quoteDepth = 0, !e.ownerDocument) throw new Error("Cloned element does not have an owner document");
                this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1)
            }
            return A.prototype.toIFrame = function(A, e) {
                var t = this,
                    i = mi(A, e);
                if (!i.contentWindow) return Promise.reject("Unable to find iframe window");
                var s = A.defaultView.pageXOffset,
                    o = A.defaultView.pageYOffset,
                    a = i.contentWindow,
                    c = a.document,
                    l = Ci(i).then((function() {
                        return n(t, void 0, void 0, (function() {
                            var A, t;
                            return r(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.scrolledElements.forEach(Fi), a && (a.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || a.scrollY === e.top && a.scrollX === e.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - e.left, a.scrollY - e.top, 0, 0))), A = this.options.onclone, void 0 === (t = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the ".concat(this.referenceElement.nodeName, " in the cloned document"))] : c.fonts && c.fonts.ready ? [4, c.fonts.ready] : [3, 2];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Qi(c)] : [3, 4];
                                    case 3:
                                        n.sent(), n.label = 4;
                                    case 4:
                                        return "function" == typeof A ? [2, Promise.resolve().then((function() {
                                            return A(c, t)
                                        })).then((function() {
                                            return i
                                        }))] : [2, i]
                                }
                            }))
                        }))
                    })),
                    u = c.baseURI;
                c.open(), c.write("".concat(Ui(document.doctype), "<html></html>")), _i(this.referenceElement.ownerDocument, s, o);
                var h = c.adoptNode(this.documentElement);
                return Si(h, u), c.replaceChild(h, c.documentElement), c.close(), l
            }, A.prototype.createElementClone = function(A) {
                if (Vn(A, 2), Zr(A)) return this.createCanvasClone(A);
                if (qr(A)) return this.createVideoClone(A);
                if (ei(A)) return this.createStyleClone(A);
                var e = A.cloneNode(!1);
                return $r(e) && ($r(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), "lazy" === e.loading && (e.loading = "eager")), ii(e) ? this.createCustomElementClone(e) : e
            }, A.prototype.createCustomElementClone = function(A) {
                var e = document.createElement("html2canvascustomelement");
                return vi(A.style, e), e
            }, A.prototype.createStyleClone = function(A) {
                try {
                    var e = A.sheet;
                    if (e && e.cssRules) {
                        var t = [].slice.call(e.cssRules, 0).reduce((function(A, e) {
                                return e && "string" == typeof e.cssText ? A + e.cssText : A
                            }), ""),
                            n = A.cloneNode(!1);
                        return n.textContent = t, n
                    }
                } catch (A) {
                    if (this.context.logger.error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A
                }
                return A.cloneNode(!1)
            }, A.prototype.createCanvasClone = function(A) {
                var e;
                if (this.options.inlineImages && A.ownerDocument) {
                    var t = A.ownerDocument.createElement("img");
                    try {
                        return t.src = A.toDataURL(), t
                    } catch (e) {
                        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
                    }
                }
                var n = A.cloneNode(!1);
                try {
                    n.width = A.width, n.height = A.height;
                    var r = A.getContext("2d"),
                        i = n.getContext("2d", {
                            willReadFrequently: !0
                        });
                    if (i)
                        if (!this.options.allowTaint && r) i.putImageData(r.getImageData(0, 0, A.width, A.height), 0, 0);
                        else {
                            var s = null !== (e = A.getContext("webgl2")) && void 0 !== e ? e : A.getContext("webgl");
                            if (s) {
                                var o = s.getContextAttributes();
                                !1 === (null == o ? void 0 : o.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A)
                            }
                            i.drawImage(A, 0, 0)
                        } return n
                } catch (e) {
                    this.context.logger.info("Unable to clone canvas as it is tainted", A)
                }
                return n
            }, A.prototype.createVideoClone = function(A) {
                var e = A.ownerDocument.createElement("canvas");
                e.width = A.offsetWidth, e.height = A.offsetHeight;
                var t = e.getContext("2d");
                try {
                    return t && (t.drawImage(A, 0, 0, e.width, e.height), this.options.allowTaint || t.getImageData(0, 0, e.width, e.height)), e
                } catch (e) {
                    this.context.logger.info("Unable to clone video as it is tainted", A)
                }
                var n = A.ownerDocument.createElement("canvas");
                return n.width = A.offsetWidth, n.height = A.offsetHeight, n
            }, A.prototype.appendChildNode = function(A, e, t) {
                Vr(e) && ("SCRIPT" === e.tagName || e.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(e)) || this.options.copyStyles && Vr(e) && ei(e) || A.appendChild(this.cloneNode(e, t))
            }, A.prototype.cloneChildNodes = function(A, e, t) {
                for (var n = this, r = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; r; r = r.nextSibling)
                    if (Vr(r) && ri(r) && "function" == typeof r.assignedNodes) {
                        var i = r.assignedNodes();
                        i.length && i.forEach((function(A) {
                            return n.appendChildNode(e, A, t)
                        }))
                    } else this.appendChildNode(e, r, t)
            }, A.prototype.cloneNode = function(A, e) {
                if (Nr(A)) return document.createTextNode(A.data);
                if (!A.ownerDocument) return A.cloneNode(!1);
                var t = A.ownerDocument.defaultView;
                if (t && Vr(A) && (Gr(A) || Yr(A))) {
                    var n = this.createElementClone(A);
                    n.style.transitionProperty = "none";
                    var r = t.getComputedStyle(A),
                        i = t.getComputedStyle(A, ":before"),
                        s = t.getComputedStyle(A, ":after");
                    this.referenceElement === A && Gr(n) && (this.clonedReferenceElement = n), jr(n) && Hi(n);
                    var o = this.counters.parse(new Pn(this.context, r)),
                        a = this.resolvePseudoContent(A, n, i, $n.BEFORE);
                    ii(A) && (e = !0), qr(A) || this.cloneChildNodes(A, n, e), a && n.insertBefore(a, n.firstChild);
                    var c = this.resolvePseudoContent(A, n, s, $n.AFTER);
                    return c && n.appendChild(c), this.counters.pop(o), (r && (this.options.copyStyles || Yr(A)) && !Ai(A) || e) && vi(r, n), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (ti(A) || ni(A)) && (ti(n) || ni(n)) && (n.value = A.value), n
                }
                return A.cloneNode(!1)
            }, A.prototype.resolvePseudoContent = function(A, e, t, n) {
                var r = this;
                if (t) {
                    var i = t.content,
                        s = e.ownerDocument;
                    if (s && i && "none" !== i && "-moz-alt-content" !== i && "none" !== t.display) {
                        this.counters.parse(new Pn(this.context, t));
                        var o = new Rn(this.context, t),
                            a = s.createElement("html2canvaspseudoelement");
                        vi(t, a), o.content.forEach((function(e) {
                            if (0 === e.type) a.appendChild(s.createTextNode(e.value));
                            else if (22 === e.type) {
                                var t = s.createElement("img");
                                t.src = e.value, t.style.opacity = "1", a.appendChild(t)
                            } else if (18 === e.type) {
                                if ("attr" === e.name) {
                                    var n = e.values.filter(PA);
                                    n.length && a.appendChild(s.createTextNode(A.getAttribute(n[0].value) || ""))
                                } else if ("counter" === e.name) {
                                    var i = e.values.filter(YA),
                                        c = i[0],
                                        l = i[1];
                                    if (c && PA(c)) {
                                        var u = r.counters.getCounterValue(c.value),
                                            h = l && PA(l) ? Gt.parse(r.context, l.value) : 3;
                                        a.appendChild(s.createTextNode(gi(u, h, !1)))
                                    }
                                } else if ("counters" === e.name) {
                                    var w = e.values.filter(YA),
                                        d = (c = w[0], w[1]);
                                    if (l = w[2], c && PA(c)) {
                                        var f = r.counters.getCounterValues(c.value),
                                            g = l && PA(l) ? Gt.parse(r.context, l.value) : 3,
                                            B = d && 0 === d.type ? d.value : "",
                                            p = f.map((function(A) {
                                                return gi(A, g, !1)
                                            })).join(B);
                                        a.appendChild(s.createTextNode(p))
                                    }
                                }
                            } else if (20 === e.type) switch (e.value) {
                                case "open-quote":
                                    a.appendChild(s.createTextNode(Sn(o.quotes, r.quoteDepth++, !0)));
                                    break;
                                case "close-quote":
                                    a.appendChild(s.createTextNode(Sn(o.quotes, --r.quoteDepth, !1)));
                                    break;
                                default:
                                    a.appendChild(s.createTextNode(e.value))
                            }
                        })), a.className = "".concat(Ei, " ").concat(Ii);
                        var c = n === $n.BEFORE ? " ".concat(Ei) : " ".concat(Ii);
                        return Yr(e) ? e.className.baseValue += c : e.className += c, a
                    }
                }
            }, A.destroy = function(A) {
                return !!A.parentNode && (A.parentNode.removeChild(A), !0)
            }, A
        }();
    ! function(A) {
        A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER"
    }($n || ($n = {}));
    var pi, mi = function(A, e) {
            var t = A.createElement("iframe");
            return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute("data-html2canvas-ignore", "true"), A.body.appendChild(t), t
        },
        bi = function(A) {
            return new Promise((function(e) {
                A.complete ? e() : A.src ? (A.onload = e, A.onerror = e) : e()
            }))
        },
        Qi = function(A) {
            return Promise.all([].slice.call(A.images, 0).map(bi))
        },
        Ci = function(A) {
            return new Promise((function(e, t) {
                var n = A.contentWindow;
                if (!n) return t("No window assigned for iframe");
                var r = n.document;
                n.onload = A.onload = function() {
                    n.onload = A.onload = null;
                    var t = setInterval((function() {
                        r.body.childNodes.length > 0 && "complete" === r.readyState && (clearInterval(t), e(A))
                    }), 50)
                }
            }))
        },
        yi = ["all", "d", "content"],
        vi = function(A, e) {
            for (var t = A.length - 1; t >= 0; t--) {
                var n = A.item(t); - 1 === yi.indexOf(n) && e.style.setProperty(n, A.getPropertyValue(n))
            }
            return e
        },
        Ui = function(A) {
            var e = "";
            return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"'.concat(A.publicId, '"')), A.systemId && (e += '"'.concat(A.systemId, '"')), e += ">"), e
        },
        _i = function(A, e, t) {
            A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
        },
        Fi = function(A) {
            var e = A[0],
                t = A[1],
                n = A[2];
            e.scrollLeft = t, e.scrollTop = n
        },
        Ei = "___html2canvas___pseudoelement_before",
        Ii = "___html2canvas___pseudoelement_after",
        Hi = function(A) {
            ki(A, ".".concat(Ei).concat(":before").concat('{\n    content: "" !important;\n    display: none !important;\n}', "\n         .").concat(Ii).concat(":after").concat('{\n    content: "" !important;\n    display: none !important;\n}'))
        },
        ki = function(A, e) {
            var t = A.ownerDocument;
            if (t) {
                var n = t.createElement("style");
                n.textContent = e, A.appendChild(n)
            }
        },
        Si = function(A, e) {
            var t, n = A.ownerDocument.createElement("base");
            n.href = e;
            var r = A.getElementsByTagName("head").item(0);
            null == r || r.insertBefore(n, null !== (t = null == r ? void 0 : r.firstChild) && void 0 !== t ? t : null)
        },
        Ti = function() {
            function A() {}
            return A.getOrigin = function(e) {
                var t = A._link;
                return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank"
            }, A.isSameOrigin = function(e) {
                return A.getOrigin(e) === A._origin
            }, A.setContext = function(e) {
                A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href)
            }, A._origin = "about:blank", A
        }(),
        xi = function() {
            function A(A, e) {
                this.context = A, this._options = e, this._cache = {}
            }
            return A.prototype.addImage = function(A) {
                var e = Promise.resolve();
                return this.has(A) ? e : Pi(A) || Ki(A) ? ((this._cache[A] = this.loadImage(A)).catch((function() {})), e) : e
            }, A.prototype.match = function(A) {
                return this._cache[A]
            }, A.prototype.loadImage = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e, t, n, i, s, o = this;
                    return r(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return "function" != typeof this._options.customIsSameOrigin ? [3, 2] : [4, this._options.customIsSameOrigin(A, Ti.isSameOrigin)];
                            case 1:
                                return t = r.sent(), [3, 3];
                            case 2:
                                t = Ti.isSameOrigin(A), r.label = 3;
                            case 3:
                                return e = t, n = !Mi(A) && !0 === this._options.useCORS && hr.SUPPORT_CORS_IMAGES && !e, i = !Mi(A) && !e && !Pi(A) && "string" == typeof this._options.proxy && hr.SUPPORT_CORS_XHR && !n, e || !1 !== this._options.allowTaint || Mi(A) || Pi(A) || i || n ? (s = A, i ? [4, this.proxy(s)] : [3, 5]) : [2];
                            case 4:
                                s = r.sent(), r.label = 5;
                            case 5:
                                return this.context.logger.debug("Added image ".concat(A.substring(0, 256))), [4, new Promise((function(A, e) {
                                    var t = new Image;
                                    t.onload = function() {
                                        return A(t)
                                    }, t.onerror = e, (Ri(s) || n) && (t.crossOrigin = "anonymous"), t.src = s, !0 === t.complete && setTimeout((function() {
                                        return A(t)
                                    }), 500), o._options.imageTimeout > 0 && setTimeout((function() {
                                        return e("Timed out (".concat(o._options.imageTimeout, "ms) loading image"))
                                    }), o._options.imageTimeout)
                                }))];
                            case 6:
                                return [2, r.sent()]
                        }
                    }))
                }))
            }, A.prototype.has = function(A) {
                return void 0 !== this._cache[A]
            }, A.prototype.keys = function() {
                return Promise.resolve(Object.keys(this._cache))
            }, A.prototype.proxy = function(A) {
                var e = this,
                    t = this._options.proxy;
                if (!t) throw new Error("No proxy defined");
                var n = A.substring(0, 256);
                return new Promise((function(r, i) {
                    var s = hr.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                        o = new XMLHttpRequest;
                    o.onload = function() {
                        if (200 === o.status)
                            if ("text" === s) r(o.response);
                            else {
                                var A = new FileReader;
                                A.addEventListener("load", (function() {
                                    return r(A.result)
                                }), !1), A.addEventListener("error", (function(A) {
                                    return i(A)
                                }), !1), A.readAsDataURL(o.response)
                            }
                        else i("Failed to proxy resource ".concat(n, " with status code ").concat(o.status))
                    }, o.onerror = i;
                    var a = t.indexOf("?") > -1 ? "&" : "?";
                    if (o.open("GET", "".concat(t).concat(a, "url=").concat(encodeURIComponent(A), "&responseType=").concat(s)), "text" !== s && o instanceof XMLHttpRequest && (o.responseType = s), e._options.imageTimeout) {
                        var c = e._options.imageTimeout;
                        o.timeout = c, o.ontimeout = function() {
                            return i("Timed out (".concat(c, "ms) proxying ").concat(n))
                        }
                    }
                    o.send()
                }))
            }, A
        }(),
        Li = /^data:image\/svg\+xml/i,
        Oi = /^data:image\/.*;base64,/i,
        Di = /^data:image\/.*/i,
        Ki = function(A) {
            return hr.SUPPORT_SVG_DRAWING || !Ni(A)
        },
        Mi = function(A) {
            return Di.test(A)
        },
        Ri = function(A) {
            return Oi.test(A)
        },
        Pi = function(A) {
            return "blob" === A.substr(0, 4)
        },
        Ni = function(A) {
            return "svg" === A.substr(-3).toLowerCase() || Li.test(A)
        },
        Vi = function() {
            function A(A, e) {
                this.type = 0, this.x = A, this.y = e
            }
            return A.prototype.add = function(e, t) {
                return new A(this.x + e, this.y + t)
            }, A
        }(),
        Gi = function(A, e, t) {
            return new Vi(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
        },
        Yi = function() {
            function A(A, e, t, n) {
                this.type = 1, this.start = A, this.startControl = e, this.endControl = t, this.end = n
            }
            return A.prototype.subdivide = function(e, t) {
                var n = Gi(this.start, this.startControl, e),
                    r = Gi(this.startControl, this.endControl, e),
                    i = Gi(this.endControl, this.end, e),
                    s = Gi(n, r, e),
                    o = Gi(r, i, e),
                    a = Gi(s, o, e);
                return t ? new A(this.start, n, s, a) : new A(a, o, i, this.end)
            }, A.prototype.add = function(e, t) {
                return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t))
            }, A.prototype.reverse = function() {
                return new A(this.end, this.endControl, this.startControl, this.start)
            }, A
        }(),
        Xi = function(A) {
            return 1 === A.type
        },
        Ji = function(A) {
            var e = A.styles,
                t = A.bounds,
                n = Ae(e.borderTopLeftRadius, t.width, t.height),
                r = n[0],
                i = n[1],
                s = Ae(e.borderTopRightRadius, t.width, t.height),
                o = s[0],
                a = s[1],
                c = Ae(e.borderBottomRightRadius, t.width, t.height),
                l = c[0],
                u = c[1],
                h = Ae(e.borderBottomLeftRadius, t.width, t.height),
                w = h[0],
                d = h[1],
                f = [];
            f.push((r + o) / t.width), f.push((w + l) / t.width), f.push((i + d) / t.height), f.push((a + u) / t.height);
            var g = Math.max.apply(Math, f);
            g > 1 && (r /= g, i /= g, o /= g, a /= g, l /= g, u /= g, w /= g, d /= g);
            var B = t.width - o,
                p = t.height - u,
                m = t.width - l,
                b = t.height - d,
                Q = e.borderTopWidth,
                C = e.borderRightWidth,
                y = e.borderBottomWidth,
                v = e.borderLeftWidth,
                U = ee(e.paddingTop, A.bounds.width),
                _ = ee(e.paddingRight, A.bounds.width),
                F = ee(e.paddingBottom, A.bounds.width),
                E = ee(e.paddingLeft, A.bounds.width);
            this.topLeftBorderDoubleOuterBox = r > 0 || i > 0 ? Wi(t.left + v / 3, t.top + Q / 3, r - v / 3, i - Q / 3, pi.TOP_LEFT) : new Vi(t.left + v / 3, t.top + Q / 3), this.topRightBorderDoubleOuterBox = r > 0 || i > 0 ? Wi(t.left + B, t.top + Q / 3, o - C / 3, a - Q / 3, pi.TOP_RIGHT) : new Vi(t.left + t.width - C / 3, t.top + Q / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || u > 0 ? Wi(t.left + m, t.top + p, l - C / 3, u - y / 3, pi.BOTTOM_RIGHT) : new Vi(t.left + t.width - C / 3, t.top + t.height - y / 3), this.bottomLeftBorderDoubleOuterBox = w > 0 || d > 0 ? Wi(t.left + v / 3, t.top + b, w - v / 3, d - y / 3, pi.BOTTOM_LEFT) : new Vi(t.left + v / 3, t.top + t.height - y / 3), this.topLeftBorderDoubleInnerBox = r > 0 || i > 0 ? Wi(t.left + 2 * v / 3, t.top + 2 * Q / 3, r - 2 * v / 3, i - 2 * Q / 3, pi.TOP_LEFT) : new Vi(t.left + 2 * v / 3, t.top + 2 * Q / 3), this.topRightBorderDoubleInnerBox = r > 0 || i > 0 ? Wi(t.left + B, t.top + 2 * Q / 3, o - 2 * C / 3, a - 2 * Q / 3, pi.TOP_RIGHT) : new Vi(t.left + t.width - 2 * C / 3, t.top + 2 * Q / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || u > 0 ? Wi(t.left + m, t.top + p, l - 2 * C / 3, u - 2 * y / 3, pi.BOTTOM_RIGHT) : new Vi(t.left + t.width - 2 * C / 3, t.top + t.height - 2 * y / 3), this.bottomLeftBorderDoubleInnerBox = w > 0 || d > 0 ? Wi(t.left + 2 * v / 3, t.top + b, w - 2 * v / 3, d - 2 * y / 3, pi.BOTTOM_LEFT) : new Vi(t.left + 2 * v / 3, t.top + t.height - 2 * y / 3), this.topLeftBorderStroke = r > 0 || i > 0 ? Wi(t.left + v / 2, t.top + Q / 2, r - v / 2, i - Q / 2, pi.TOP_LEFT) : new Vi(t.left + v / 2, t.top + Q / 2), this.topRightBorderStroke = r > 0 || i > 0 ? Wi(t.left + B, t.top + Q / 2, o - C / 2, a - Q / 2, pi.TOP_RIGHT) : new Vi(t.left + t.width - C / 2, t.top + Q / 2), this.bottomRightBorderStroke = l > 0 || u > 0 ? Wi(t.left + m, t.top + p, l - C / 2, u - y / 2, pi.BOTTOM_RIGHT) : new Vi(t.left + t.width - C / 2, t.top + t.height - y / 2), this.bottomLeftBorderStroke = w > 0 || d > 0 ? Wi(t.left + v / 2, t.top + b, w - v / 2, d - y / 2, pi.BOTTOM_LEFT) : new Vi(t.left + v / 2, t.top + t.height - y / 2), this.topLeftBorderBox = r > 0 || i > 0 ? Wi(t.left, t.top, r, i, pi.TOP_LEFT) : new Vi(t.left, t.top), this.topRightBorderBox = o > 0 || a > 0 ? Wi(t.left + B, t.top, o, a, pi.TOP_RIGHT) : new Vi(t.left + t.width, t.top), this.bottomRightBorderBox = l > 0 || u > 0 ? Wi(t.left + m, t.top + p, l, u, pi.BOTTOM_RIGHT) : new Vi(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = w > 0 || d > 0 ? Wi(t.left, t.top + b, w, d, pi.BOTTOM_LEFT) : new Vi(t.left, t.top + t.height), this.topLeftPaddingBox = r > 0 || i > 0 ? Wi(t.left + v, t.top + Q, Math.max(0, r - v), Math.max(0, i - Q), pi.TOP_LEFT) : new Vi(t.left + v, t.top + Q), this.topRightPaddingBox = o > 0 || a > 0 ? Wi(t.left + Math.min(B, t.width - C), t.top + Q, B > t.width + C ? 0 : Math.max(0, o - C), Math.max(0, a - Q), pi.TOP_RIGHT) : new Vi(t.left + t.width - C, t.top + Q), this.bottomRightPaddingBox = l > 0 || u > 0 ? Wi(t.left + Math.min(m, t.width - v), t.top + Math.min(p, t.height - y), Math.max(0, l - C), Math.max(0, u - y), pi.BOTTOM_RIGHT) : new Vi(t.left + t.width - C, t.top + t.height - y), this.bottomLeftPaddingBox = w > 0 || d > 0 ? Wi(t.left + v, t.top + Math.min(b, t.height - y), Math.max(0, w - v), Math.max(0, d - y), pi.BOTTOM_LEFT) : new Vi(t.left + v, t.top + t.height - y), this.topLeftContentBox = r > 0 || i > 0 ? Wi(t.left + v + E, t.top + Q + U, Math.max(0, r - (v + E)), Math.max(0, i - (Q + U)), pi.TOP_LEFT) : new Vi(t.left + v + E, t.top + Q + U), this.topRightContentBox = o > 0 || a > 0 ? Wi(t.left + Math.min(B, t.width + v + E), t.top + Q + U, B > t.width + v + E ? 0 : o - v + E, a - (Q + U), pi.TOP_RIGHT) : new Vi(t.left + t.width - (C + _), t.top + Q + U), this.bottomRightContentBox = l > 0 || u > 0 ? Wi(t.left + Math.min(m, t.width - (v + E)), t.top + Math.min(p, t.height + Q + U), Math.max(0, l - (C + _)), u - (y + F), pi.BOTTOM_RIGHT) : new Vi(t.left + t.width - (C + _), t.top + t.height - (y + F)), this.bottomLeftContentBox = w > 0 || d > 0 ? Wi(t.left + v + E, t.top + b, Math.max(0, w - (v + E)), d - (y + F), pi.BOTTOM_LEFT) : new Vi(t.left + v + E, t.top + t.height - (y + F))
        };
    ! function(A) {
        A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
    }(pi || (pi = {}));
    var Wi = function(A, e, t, n, r) {
            var i = (Math.sqrt(2) - 1) / 3 * 4,
                s = t * i,
                o = n * i,
                a = A + t,
                c = e + n;
            switch (r) {
                case pi.TOP_LEFT:
                    return new Yi(new Vi(A, c), new Vi(A, c - o), new Vi(a - s, e), new Vi(a, e));
                case pi.TOP_RIGHT:
                    return new Yi(new Vi(A, e), new Vi(A + s, e), new Vi(a, c - o), new Vi(a, c));
                case pi.BOTTOM_RIGHT:
                    return new Yi(new Vi(a, e), new Vi(a, e + o), new Vi(A + s, c), new Vi(A, c));
                case pi.BOTTOM_LEFT:
                default:
                    return new Yi(new Vi(a, c), new Vi(a - s, c), new Vi(A, e + o), new Vi(A, e))
            }
        },
        zi = function(A) {
            return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
        },
        ji = function(A) {
            return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
        },
        Zi = function(A, e, t) {
            this.offsetX = A, this.offsetY = e, this.matrix = t, this.type = 0, this.target = 6
        },
        qi = function(A, e) {
            this.path = A, this.target = e, this.type = 1
        },
        $i = function(A) {
            this.opacity = A, this.type = 2, this.target = 6
        },
        As = function(A) {
            return 1 === A.type
        },
        es = function(A, e) {
            return A.length === e.length && A.some((function(A, t) {
                return A === e[t]
            }))
        },
        ts = function(A) {
            this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = []
        },
        ns = function() {
            function A(A, e) {
                if (this.container = A, this.parent = e, this.effects = [], this.curves = new Ji(this.container), this.container.styles.opacity < 1 && this.effects.push(new $i(this.container.styles.opacity)), null !== this.container.styles.rotate) {
                    var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number,
                        n = this.container.bounds.top + this.container.styles.transformOrigin[1].number,
                        r = this.container.styles.rotate * Math.PI / 180,
                        i = Math.cos(r),
                        s = Math.sin(r),
                        o = [i, s, -s, i, 0, 0];
                    this.effects.push(new Zi(t, n, o))
                }
                if (null !== this.container.styles.transform) {
                    t = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                    var a = this.container.styles.transform;
                    this.effects.push(new Zi(t, n, a))
                }
                if (0 !== this.container.styles.overflowX) {
                    var c = zi(this.curves),
                        l = ji(this.curves);
                    es(c, l) ? this.effects.push(new qi(c, 6)) : (this.effects.push(new qi(c, 2)), this.effects.push(new qi(l, 4)))
                }
            }
            return A.prototype.getEffects = function(A) {
                for (var e = -1 === [2, 3].indexOf(this.container.styles.position), t = this.parent, n = this.effects.slice(0); t;) {
                    var r = t.effects.filter((function(A) {
                        return !As(A)
                    }));
                    if (e || 0 !== t.container.styles.position || !t.parent) {
                        if (e = -1 === [2, 3].indexOf(t.container.styles.position), 0 !== t.container.styles.overflowX) {
                            var i = zi(t.curves),
                                s = ji(t.curves);
                            es(i, s) || n.unshift(new qi(s, 6))
                        }
                        n.unshift.apply(n, r)
                    } else n.unshift.apply(n, r);
                    t = t.parent
                }
                return n.filter((function(e) {
                    return _n(e.target, A)
                }))
            }, A
        }(),
        rs = function(A, e, t, n) {
            A.container.elements.forEach((function(r) {
                var i = _n(r.flags, 4),
                    s = _n(r.flags, 2),
                    o = new ns(r, A);
                _n(r.styles.display, 2048) && n.push(o);
                var a = _n(r.flags, 8) ? [] : n;
                if (i || s) {
                    var c = i || r.styles.isPositioned() ? t : e,
                        l = new ts(o);
                    if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
                        var u = r.styles.zIndex.order;
                        if (u < 0) {
                            var h = 0;
                            c.negativeZIndex.some((function(A, e) {
                                return u > A.element.container.styles.zIndex.order ? (h = e, !1) : h > 0
                            })), c.negativeZIndex.splice(h, 0, l)
                        } else if (u > 0) {
                            var w = 0;
                            c.positiveZIndex.some((function(A, e) {
                                return u >= A.element.container.styles.zIndex.order ? (w = e + 1, !1) : w > 0
                            })), c.positiveZIndex.splice(w, 0, l)
                        } else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)
                    } else r.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
                    rs(o, l, i ? l : t, a)
                } else r.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o), rs(o, e, t, a);
                _n(r.flags, 8) && is(r, a)
            }))
        },
        is = function(A, e) {
            for (var t = A instanceof Er ? A.start : 1, n = A instanceof Er && A.reversed, r = 0; r < e.length; r++) {
                var i = e[r];
                i.container instanceof Fr && "number" == typeof i.container.value && 0 !== i.container.value && (t = i.container.value), i.listValue = gi(t, i.container.styles.listStyleType, !0), t += n ? -1 : 1
            }
        },
        ss = function(A, e) {
            switch (e) {
                case 0:
                    return as(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                case 1:
                    return as(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                case 2:
                    return as(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                case 3:
                default:
                    return as(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
            }
        },
        os = function(A, e) {
            var t = [];
            return Xi(A) ? t.push(A.subdivide(.5, !1)) : t.push(A), Xi(e) ? t.push(e.subdivide(.5, !0)) : t.push(e), t
        },
        as = function(A, e, t, n) {
            var r = [];
            return Xi(A) ? r.push(A.subdivide(.5, !1)) : r.push(A), Xi(t) ? r.push(t.subdivide(.5, !0)) : r.push(t), Xi(n) ? r.push(n.subdivide(.5, !0).reverse()) : r.push(n), Xi(e) ? r.push(e.subdivide(.5, !1).reverse()) : r.push(e), r
        },
        cs = function(A) {
            var e = A.bounds,
                t = A.styles;
            return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
        },
        ls = function(A) {
            var e = A.styles,
                t = A.bounds,
                n = ee(e.paddingLeft, t.width),
                r = ee(e.paddingRight, t.width),
                i = ee(e.paddingTop, t.width),
                s = ee(e.paddingBottom, t.width);
            return t.add(n + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + n + r), -(e.borderTopWidth + e.borderBottomWidth + i + s))
        },
        us = function(A, e, t) {
            var n = function(A, e) {
                    return 0 === A ? e.bounds : 2 === A ? ls(e) : cs(e)
                }(fs(A.styles.backgroundOrigin, e), A),
                r = function(A, e) {
                    return 0 === A ? e.bounds : 2 === A ? ls(e) : cs(e)
                }(fs(A.styles.backgroundClip, e), A),
                i = ds(fs(A.styles.backgroundSize, e), t, n),
                s = i[0],
                o = i[1],
                a = Ae(fs(A.styles.backgroundPosition, e), n.width - s, n.height - o);
            return [gs(fs(A.styles.backgroundRepeat, e), a, i, n, r), Math.round(n.left + a[0]), Math.round(n.top + a[1]), s = Math.max(1, s), o = Math.max(1, o)]
        },
        hs = function(A) {
            return PA(A) && A.value === Q.AUTO
        },
        ws = function(A) {
            return "number" == typeof A
        },
        ds = function(A, e, t) {
            var n = e[0],
                r = e[1],
                i = e[2],
                s = A[0],
                o = A[1];
            if (!s) return [0, 0];
            if (zA(s) && o && zA(o)) return [ee(s, t.width), ee(o, t.height)];
            var a = ws(i);
            if (PA(s) && (s.value === Q.CONTAIN || s.value === Q.COVER)) return ws(i) ? t.width / t.height < i != (s.value === Q.COVER) ? [t.width, t.width / i] : [t.height * i, t.height] : [t.width, t.height];
            var c = ws(n),
                l = ws(r),
                u = c || l;
            if (hs(s) && (!o || hs(o))) return c && l ? [n, r] : a || u ? u && a ? [c ? n : r * i, l ? r : n / i] : [c ? n : t.width, l ? r : t.height] : [t.width, t.height];
            if (a) {
                var h = 0,
                    w = 0;
                return zA(s) ? h = ee(s, t.width) : zA(o) && (w = ee(o, t.height)), hs(s) ? h = w * i : o && !hs(o) || (w = h / i), [h, w]
            }
            var d = null,
                f = null;
            if (zA(s) ? d = ee(s, t.width) : o && zA(o) && (f = ee(o, t.height)), null === d || o && !hs(o) || (f = c && l ? d / n * r : t.height), null !== f && hs(s) && (d = c && l ? f / r * n : t.width), null !== d && null !== f) return [d, f];
            throw new Error("Unable to calculate background-size for element")
        },
        fs = function(A, e) {
            var t = A[e];
            return void 0 === t ? A[0] : t
        },
        gs = function(A, e, t, n, r) {
            var i = e[0],
                s = e[1],
                o = t[0],
                a = t[1];
            switch (A) {
                case 2:
                    return [new Vi(Math.round(n.left), Math.round(n.top + s)), new Vi(Math.round(n.left + n.width), Math.round(n.top + s)), new Vi(Math.round(n.left + n.width), Math.round(a + n.top + s)), new Vi(Math.round(n.left), Math.round(a + n.top + s))];
                case 3:
                    return [new Vi(Math.round(n.left + i), Math.round(n.top)), new Vi(Math.round(n.left + i + o), Math.round(n.top)), new Vi(Math.round(n.left + i + o), Math.round(n.height + n.top)), new Vi(Math.round(n.left + i), Math.round(n.height + n.top))];
                case 1:
                    return [new Vi(Math.round(n.left + i), Math.round(n.top + s)), new Vi(Math.round(n.left + i + o), Math.round(n.top + s)), new Vi(Math.round(n.left + i + o), Math.round(n.top + s + a)), new Vi(Math.round(n.left + i), Math.round(n.top + s + a))];
                default:
                    return [new Vi(Math.round(r.left), Math.round(r.top)), new Vi(Math.round(r.left + r.width), Math.round(r.top)), new Vi(Math.round(r.left + r.width), Math.round(r.height + r.top)), new Vi(Math.round(r.left), Math.round(r.height + r.top))]
            }
        },
        Bs = function() {
            function A(A) {
                this._data = {}, this._document = A
            }
            return A.prototype.parseMetrics = function(A, e) {
                var t = this._document.createElement("div"),
                    n = this._document.createElement("img"),
                    r = this._document.createElement("span"),
                    i = this._document.body;
                t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = e, t.style.margin = "0", t.style.padding = "0", t.style.whiteSpace = "nowrap", i.appendChild(t), n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", r.style.fontFamily = A, r.style.fontSize = e, r.style.margin = "0", r.style.padding = "0", r.appendChild(this._document.createTextNode("Hidden Text")), t.appendChild(r), t.appendChild(n);
                var s = n.offsetTop - r.offsetTop + 2;
                t.removeChild(r), t.appendChild(this._document.createTextNode("Hidden Text")), t.style.lineHeight = "normal", n.style.verticalAlign = "super";
                var o = n.offsetTop - t.offsetTop + 2;
                return i.removeChild(t), {
                    baseline: s,
                    middle: o
                }
            }, A.prototype.getMetrics = function(A, e) {
                var t = "".concat(A, " ").concat(e);
                return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)), this._data[t]
            }, A
        }(),
        ps = function(A, e) {
            this.context = A, this.options = e
        },
        ms = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this;
                return n._activeEffects = [], n.canvas = t.canvas ? t.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), t.canvas || (n.canvas.width = Math.floor(t.width * t.scale), n.canvas.height = Math.floor(t.height * t.scale), n.canvas.style.width = "".concat(t.width, "px"), n.canvas.style.height = "".concat(t.height, "px")), n.fontMetrics = new Bs(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-t.x, -t.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (".concat(t.width, "x").concat(t.height, ") with scale ").concat(t.scale)), n
            }
            return e(t, A), t.prototype.applyEffects = function(A) {
                for (var e = this; this._activeEffects.length;) this.popEffect();
                A.forEach((function(A) {
                    return e.applyEffect(A)
                }))
            }, t.prototype.applyEffect = function(A) {
                this.ctx.save(),
                    function(A) {
                        return 2 === A.type
                    }(A) && (this.ctx.globalAlpha = A.opacity),
                    function(A) {
                        return 0 === A.type
                    }(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), As(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A)
            }, t.prototype.popEffect = function() {
                this._activeEffects.pop(), this.ctx.restore()
            }, t.prototype.renderStack = function(A) {
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return A.element.container.styles.isVisible() ? [4, this.renderStackContent(A)] : [3, 2];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.renderNode = function(A) {
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return _n(A.container.flags, 16), A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3];
                            case 1:
                                return e.sent(), [4, this.renderNodeContent(A)];
                            case 2:
                                e.sent(), e.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.renderTextWithLetterSpacing = function(A, e, t) {
                var n = this;
                0 === e ? -1 === navigator.userAgent.indexOf("Firefox") ? (this.ctx.textBaseline = "ideographic", this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + A.bounds.height)) : this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + t) : gr(A.text).reduce((function(e, r) {
                    return n.ctx.fillText(r, e, A.bounds.top + t), e + n.ctx.measureText(r).width
                }), A.bounds.left)
            }, t.prototype.createFontStyle = function(A) {
                var e = A.fontVariant.filter((function(A) {
                        return "normal" === A || "small-caps" === A
                    })).join(""),
                    t = vs(A.fontFamily).join(", "),
                    n = MA(A.fontSize) ? "".concat(A.fontSize.number).concat(A.fontSize.unit) : "".concat(A.fontSize.number, "px");
                return [
                    [A.fontStyle, e, A.fontWeight, n, t].join(" "), t, n
                ]
            }, t.prototype.renderTextNode = function(A, e) {
                return n(this, void 0, void 0, (function() {
                    var t, n, i = this;
                    return r(this, (function(r) {
                        return t = this.createFontStyle(e)[0], this.ctx.font = t, this.ctx.direction = 1 === e.direction ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", n = e.paintOrder, A.textBounds.forEach((function(A) {
                            n.forEach((function(t) {
                                switch (t) {
                                    case 0:
                                        i.ctx.fillStyle = oe(e.color), i.renderTextWithLetterSpacing(A, e.letterSpacing, e.fontSize.number);
                                        var n = e.textShadow;
                                        n.length && A.text.trim().length && (n.slice(0).reverse().forEach((function(t) {
                                            i.ctx.shadowColor = oe(t.color), i.ctx.shadowOffsetX = t.offsetX.number * i.options.scale, i.ctx.shadowOffsetY = t.offsetY.number * i.options.scale, i.ctx.shadowBlur = t.blur.number, i.renderTextWithLetterSpacing(A, e.letterSpacing, e.fontSize.number)
                                        })), i.ctx.shadowColor = "", i.ctx.shadowOffsetX = 0, i.ctx.shadowOffsetY = 0, i.ctx.shadowBlur = 0), e.textDecorationLine.length && (i.ctx.fillStyle = oe(e.textDecorationColor || e.color), e.textDecorationLine.forEach((function(e) {
                                            switch (e) {
                                                case 1:
                                                    i.ctx.fillRect(A.bounds.left, A.bounds.top + A.bounds.height - 1, A.bounds.width, 1);
                                                    break;
                                                case 2:
                                                    i.ctx.fillRect(A.bounds.left, A.bounds.top, A.bounds.width, 1);
                                                    break;
                                                case 3:
                                                    i.ctx.fillRect(A.bounds.left, A.bounds.top + (A.bounds.height / 2 - .5), A.bounds.width, 1)
                                            }
                                        })));
                                        break;
                                    case 1:
                                        e.webkitTextStrokeWidth && A.text.trim().length && (i.ctx.strokeStyle = oe(e.webkitTextStrokeColor), i.ctx.lineWidth = e.webkitTextStrokeWidth, i.ctx.lineJoin = window.chrome ? "miter" : "round", i.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + A.bounds.height)), i.ctx.strokeStyle = "", i.ctx.lineWidth = 0, i.ctx.lineJoin = "miter"
                                }
                            }))
                        })), [2]
                    }))
                }))
            }, t.prototype.renderReplacedElement = function(A, e, t) {
                var n = t.naturalWidth || A.intrinsicWidth,
                    r = t.naturalHeight || A.intrinsicHeight;
                if (t && n > 0 && r > 0) {
                    var i = ls(A),
                        s = ji(e);
                    this.path(s), this.ctx.save(), this.ctx.clip();
                    var o = 0,
                        a = 0,
                        c = n,
                        l = r,
                        u = i.left,
                        h = i.top,
                        w = i.width,
                        d = i.height,
                        f = A.styles.objectFit,
                        g = w / d,
                        B = c / l;
                    2 === f ? B > g ? (d = w / B, h += (i.height - d) / 2) : (w = d * B, u += (i.width - w) / 2) : 4 === f ? B > g ? o += (n - (c = l * g)) / 2 : a += (r - (l = c / g)) / 2 : 8 === f ? (c > w ? (o += (c - w) / 2, c = w) : (u += (w - c) / 2, w = c), l > d ? (a += (l - d) / 2, l = d) : (h += (d - l) / 2, d = l)) : 16 === f && ((B > g ? w : d * B) < (c > w ? c : w) ? B > g ? (d = w / B, h += (i.height - d) / 2) : (w = d * B, u += (i.width - w) / 2) : (c > w ? (o += (c - w) / 2, c = w) : (u += (w - c) / 2, w = c), l > d ? (a += (l - d) / 2, l = d) : (h += (d - l) / 2, d = l))), this.ctx.drawImage(t, o, a, c, l, u, h, w, d), this.ctx.restore()
                }
            }, t.prototype.renderNodeContent = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e, n, i, o, a, c, l, u, h, w, d, f, g, B, p, m, b, Q, C;
                    return r(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                this.applyEffects(A.getEffects(4)), e = A.container, n = A.curves, i = e.styles, o = 0, a = e.textNodes, r.label = 1;
                            case 1:
                                return o < a.length ? (c = a[o], [4, this.renderTextNode(c, i)]) : [3, 4];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return o++, [3, 1];
                            case 4:
                                if (!(e instanceof vr)) return [3, 8];
                                r.label = 5;
                            case 5:
                                return r.trys.push([5, 7, , 8]), [4, this.context.cache.match(e.src)];
                            case 6:
                                return m = r.sent(), this.renderReplacedElement(e, n, m), [3, 8];
                            case 7:
                                return r.sent(), this.context.logger.error("Error loading image ".concat(e.src)), [3, 8];
                            case 8:
                                if (e instanceof Ur && this.renderReplacedElement(e, n, e.canvas), !(e instanceof _r)) return [3, 12];
                                r.label = 9;
                            case 9:
                                return r.trys.push([9, 11, , 12]), [4, this.context.cache.match(e.svg)];
                            case 10:
                                return m = r.sent(), this.renderReplacedElement(e, n, m), [3, 12];
                            case 11:
                                return r.sent(), this.context.logger.error("Error loading svg ".concat(e.svg.substring(0, 255))), [3, 12];
                            case 12:
                                return e instanceof Lr && e.tree ? [4, new t(this.context, {
                                    scale: this.options.scale,
                                    backgroundColor: e.backgroundColor,
                                    x: 0,
                                    y: 0,
                                    width: e.width,
                                    height: e.height
                                }).render(e.tree)] : [3, 14];
                            case 13:
                                l = r.sent(), e.width && e.height && this.ctx.drawImage(l, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), r.label = 14;
                            case 14:
                                if (e instanceof Sr && (u = Math.min(e.bounds.width, e.bounds.height), "checkbox" === e.type ? e.checked && (this.ctx.save(), this.path([new Vi(e.bounds.left + .39363 * u, e.bounds.top + .79 * u), new Vi(e.bounds.left + .16 * u, e.bounds.top + .5549 * u), new Vi(e.bounds.left + .27347 * u, e.bounds.top + .44071 * u), new Vi(e.bounds.left + .39694 * u, e.bounds.top + .5649 * u), new Vi(e.bounds.left + .72983 * u, e.bounds.top + .23 * u), new Vi(e.bounds.left + .84 * u, e.bounds.top + .34085 * u), new Vi(e.bounds.left + .39363 * u, e.bounds.top + .79 * u)]), this.ctx.fillStyle = oe(707406591), this.ctx.fill(), this.ctx.restore()) : "radio" === e.type && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + u / 2, e.bounds.top + u / 2, u / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = oe(707406591), this.ctx.fill(), this.ctx.restore())), bs(e) && e.value.length) {
                                    switch (h = this.createFontStyle(i), Q = h[0], w = h[1], d = h[2], f = this.fontMetrics.getMetrics(w, d).baseline, this.ctx.font = Q, this.ctx.fillStyle = oe(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Cs(e.styles.textAlign), C = ls(e), g = 0, e.styles.textAlign) {
                                        case 1:
                                            g += C.width / 2;
                                            break;
                                        case 2:
                                            g += C.width
                                    }
                                    B = C.add(g, 0, 0, -C.height / 2 + 1), this.ctx.save(), this.path([new Vi(C.left, C.top), new Vi(C.left + C.width, C.top), new Vi(C.left + C.width, C.top + C.height), new Vi(C.left, C.top + C.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new wr(e.value, B), i.letterSpacing, f), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left"
                                }
                                if (!_n(e.styles.display, 2048)) return [3, 20];
                                if (null === e.styles.listStyleImage) return [3, 19];
                                if (0 !== (p = e.styles.listStyleImage).type) return [3, 18];
                                m = void 0, b = p.url, r.label = 15;
                            case 15:
                                return r.trys.push([15, 17, , 18]), [4, this.context.cache.match(b)];
                            case 16:
                                return m = r.sent(), this.ctx.drawImage(m, e.bounds.left - (m.width + 10), e.bounds.top), [3, 18];
                            case 17:
                                return r.sent(), this.context.logger.error("Error loading list-style-image ".concat(b)), [3, 18];
                            case 18:
                                return [3, 20];
                            case 19:
                                A.listValue && -1 !== e.styles.listStyleType && (Q = this.createFontStyle(i)[0], this.ctx.font = Q, this.ctx.fillStyle = oe(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", C = new s(e.bounds.left, e.bounds.top + ee(e.styles.paddingTop, e.bounds.width), e.bounds.width, Pt(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new wr(A.listValue, C), i.letterSpacing, Pt(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), r.label = 20;
                            case 20:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.renderStackContent = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e, t, n, i, s, o, a, c, l, u, h, w, d, f, g;
                    return r(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return _n(A.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(A.element)];
                            case 1:
                                r.sent(), e = 0, t = A.negativeZIndex, r.label = 2;
                            case 2:
                                return e < t.length ? (g = t[e], [4, this.renderStack(g)]) : [3, 5];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                return e++, [3, 2];
                            case 5:
                                return [4, this.renderNodeContent(A.element)];
                            case 6:
                                r.sent(), n = 0, i = A.nonInlineLevel, r.label = 7;
                            case 7:
                                return n < i.length ? (g = i[n], [4, this.renderNode(g)]) : [3, 10];
                            case 8:
                                r.sent(), r.label = 9;
                            case 9:
                                return n++, [3, 7];
                            case 10:
                                s = 0, o = A.nonPositionedFloats, r.label = 11;
                            case 11:
                                return s < o.length ? (g = o[s], [4, this.renderStack(g)]) : [3, 14];
                            case 12:
                                r.sent(), r.label = 13;
                            case 13:
                                return s++, [3, 11];
                            case 14:
                                a = 0, c = A.nonPositionedInlineLevel, r.label = 15;
                            case 15:
                                return a < c.length ? (g = c[a], [4, this.renderStack(g)]) : [3, 18];
                            case 16:
                                r.sent(), r.label = 17;
                            case 17:
                                return a++, [3, 15];
                            case 18:
                                l = 0, u = A.inlineLevel, r.label = 19;
                            case 19:
                                return l < u.length ? (g = u[l], [4, this.renderNode(g)]) : [3, 22];
                            case 20:
                                r.sent(), r.label = 21;
                            case 21:
                                return l++, [3, 19];
                            case 22:
                                h = 0, w = A.zeroOrAutoZIndexOrTransformedOrOpacity, r.label = 23;
                            case 23:
                                return h < w.length ? (g = w[h], [4, this.renderStack(g)]) : [3, 26];
                            case 24:
                                r.sent(), r.label = 25;
                            case 25:
                                return h++, [3, 23];
                            case 26:
                                d = 0, f = A.positiveZIndex, r.label = 27;
                            case 27:
                                return d < f.length ? (g = f[d], [4, this.renderStack(g)]) : [3, 30];
                            case 28:
                                r.sent(), r.label = 29;
                            case 29:
                                return d++, [3, 27];
                            case 30:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.mask = function(A) {
                this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath()
            }, t.prototype.path = function(A) {
                this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath()
            }, t.prototype.formatPath = function(A) {
                var e = this;
                A.forEach((function(A, t) {
                    var n = Xi(A) ? A.start : A;
                    0 === t ? e.ctx.moveTo(n.x, n.y) : e.ctx.lineTo(n.x, n.y), Xi(A) && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                }))
            }, t.prototype.renderRepeat = function(A, e, t, n) {
                this.path(A), this.ctx.fillStyle = e, this.ctx.translate(t, n), this.ctx.fill(), this.ctx.translate(-t, -n)
            }, t.prototype.resizeImage = function(A, e, t) {
                var n, r = (null !== (n = this.canvas.ownerDocument) && void 0 !== n ? n : document).createElement("canvas");
                return r.width = Math.max(1, e), r.height = Math.max(1, t), r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), r
            }, t.prototype.renderBackgroundImage = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e, t, n, i, s, o;
                    return r(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                e = A.styles.backgroundImage.length - 1, t = function(t) {
                                    var i, s, o, a, c, l, u, h, w, d, f, g, B, p, m, b, Q, C, y, v, U, _, F, E, I, H, k, S, T, x, L, O, D;
                                    return r(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (0 !== t.type) return [3, 5];
                                                i = void 0, s = t.url, r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 3, , 4]), [4, n.context.cache.match(s)];
                                            case 2:
                                                return i = r.sent(), [3, 4];
                                            case 3:
                                                return r.sent(), n.context.logger.error("Error loading background-image ".concat(s)), [3, 4];
                                            case 4:
                                                return i && (o = isNaN(i.width) || 0 === i.width ? 1 : i.width, a = isNaN(i.height) || 0 === i.height ? 1 : i.height, c = us(A, e, [o, a, o / a]), C = c[0], E = c[1], I = c[2], U = c[3], _ = c[4], b = n.ctx.createPattern(n.resizeImage(i, U, _), "repeat"), n.renderRepeat(C, b, E, I)), [3, 6];
                                            case 5:
                                                1 === t.type ? (l = us(A, e, [null, null, null]), C = l[0], E = l[1], I = l[2], U = l[3], _ = l[4], u = Ze(t.angle, U, _), h = u[0], w = u[1], d = u[2], f = u[3], g = u[4], (B = document.createElement("canvas")).width = U, B.height = _, p = B.getContext("2d"), m = p.createLinearGradient(w, f, d, g), je(t.stops, h || 1).forEach((function(A) {
                                                    return m.addColorStop(A.stop, oe(A.color))
                                                })), p.fillStyle = m, p.fillRect(0, 0, U, _), U > 0 && _ > 0 && (b = n.ctx.createPattern(B, "repeat"), n.renderRepeat(C, b, E, I))) : function(A) {
                                                    return 2 === A.type
                                                }(t) && (Q = us(A, e, [null, null, null]), C = Q[0], y = Q[1], v = Q[2], U = Q[3], _ = Q[4], F = 0 === t.position.length ? [qA] : t.position, E = ee(F[0], U), I = ee(F[F.length - 1], _), H = function(A, e, t, n, r) {
                                                    var i = 0,
                                                        s = 0;
                                                    switch (A.size) {
                                                        case 0:
                                                            0 === A.shape ? i = s = Math.min(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r)) : 1 === A.shape && (i = Math.min(Math.abs(e), Math.abs(e - n)), s = Math.min(Math.abs(t), Math.abs(t - r)));
                                                            break;
                                                        case 2:
                                                            if (0 === A.shape) i = s = Math.min(qe(e, t), qe(e, t - r), qe(e - n, t), qe(e - n, t - r));
                                                            else if (1 === A.shape) {
                                                                var o = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(e), Math.abs(e - n)),
                                                                    a = $e(n, r, e, t, !0),
                                                                    c = a[0],
                                                                    l = a[1];
                                                                s = o * (i = qe(c - e, (l - t) / o))
                                                            }
                                                            break;
                                                        case 1:
                                                            0 === A.shape ? i = s = Math.max(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r)) : 1 === A.shape && (i = Math.max(Math.abs(e), Math.abs(e - n)), s = Math.max(Math.abs(t), Math.abs(t - r)));
                                                            break;
                                                        case 3:
                                                            if (0 === A.shape) i = s = Math.max(qe(e, t), qe(e, t - r), qe(e - n, t), qe(e - n, t - r));
                                                            else if (1 === A.shape) {
                                                                o = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(e), Math.abs(e - n));
                                                                var u = $e(n, r, e, t, !1);
                                                                c = u[0], l = u[1], s = o * (i = qe(c - e, (l - t) / o))
                                                            }
                                                    }
                                                    return Array.isArray(A.size) && (i = ee(A.size[0], n), s = 2 === A.size.length ? ee(A.size[1], r) : i), [i, s]
                                                }(t, E, I, U, _), k = H[0], S = H[1], k > 0 && S > 0 && (T = n.ctx.createRadialGradient(y + E, v + I, 0, y + E, v + I, k), je(t.stops, 2 * k).forEach((function(A) {
                                                    return T.addColorStop(A.stop, oe(A.color))
                                                })), n.path(C), n.ctx.fillStyle = T, k !== S ? (x = A.bounds.left + .5 * A.bounds.width, L = A.bounds.top + .5 * A.bounds.height, D = 1 / (O = S / k), n.ctx.save(), n.ctx.translate(x, L), n.ctx.transform(1, 0, 0, O, 0, 0), n.ctx.translate(-x, -L), n.ctx.fillRect(y, D * (v - L) + L, U, _ * D), n.ctx.restore()) : n.ctx.fill())), r.label = 6;
                                            case 6:
                                                return e--, [2]
                                        }
                                    }))
                                }, n = this, i = 0, s = A.styles.backgroundImage.slice(0).reverse(), a.label = 1;
                            case 1:
                                return i < s.length ? (o = s[i], [5, t(o)]) : [3, 4];
                            case 2:
                                a.sent(), a.label = 3;
                            case 3:
                                return i++, [3, 1];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.renderSolidBorder = function(A, e, t) {
                return n(this, void 0, void 0, (function() {
                    return r(this, (function(n) {
                        return this.path(ss(t, e)), this.ctx.fillStyle = oe(A), this.ctx.fill(), [2]
                    }))
                }))
            }, t.prototype.renderDoubleBorder = function(A, e, t, i) {
                return n(this, void 0, void 0, (function() {
                    var n, s;
                    return r(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e < 3 ? [4, this.renderSolidBorder(A, t, i)] : [3, 2];
                            case 1:
                                return r.sent(), [2];
                            case 2:
                                return n = function(A, e) {
                                    switch (e) {
                                        case 0:
                                            return as(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                                        case 1:
                                            return as(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                                        case 2:
                                            return as(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                                        case 3:
                                        default:
                                            return as(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
                                    }
                                }(i, t), this.path(n), this.ctx.fillStyle = oe(A), this.ctx.fill(), s = function(A, e) {
                                    switch (e) {
                                        case 0:
                                            return as(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                                        case 1:
                                            return as(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                                        case 2:
                                            return as(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                                        case 3:
                                        default:
                                            return as(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
                                    }
                                }(i, t), this.path(s), this.ctx.fill(), [2]
                        }
                    }))
                }))
            }, t.prototype.renderNodeBackgroundAndBorders = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e, t, n, i, s, o, a, c, l = this;
                    return r(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return this.applyEffects(A.getEffects(2)), e = A.container.styles, t = !se(e.backgroundColor) || e.backgroundImage.length, n = [{
                                    style: e.borderTopStyle,
                                    color: e.borderTopColor,
                                    width: e.borderTopWidth
                                }, {
                                    style: e.borderRightStyle,
                                    color: e.borderRightColor,
                                    width: e.borderRightWidth
                                }, {
                                    style: e.borderBottomStyle,
                                    color: e.borderBottomColor,
                                    width: e.borderBottomWidth
                                }, {
                                    style: e.borderLeftStyle,
                                    color: e.borderLeftColor,
                                    width: e.borderLeftWidth
                                }], i = Qs(fs(e.backgroundClip, 0), A.curves), t || e.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), se(e.backgroundColor) || (this.ctx.fillStyle = oe(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(A.container)]) : [3, 2];
                            case 1:
                                r.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach((function(e) {
                                    l.ctx.save();
                                    var t, n, r, i, s, o = zi(A.curves),
                                        a = e.inset ? 0 : 1e4,
                                        c = (t = o, n = -a + (e.inset ? 1 : -1) * e.spread.number, r = (e.inset ? 1 : -1) * e.spread.number, i = e.spread.number * (e.inset ? -2 : 2), s = e.spread.number * (e.inset ? -2 : 2), t.map((function(A, e) {
                                            switch (e) {
                                                case 0:
                                                    return A.add(n, r);
                                                case 1:
                                                    return A.add(n + i, r);
                                                case 2:
                                                    return A.add(n + i, r + s);
                                                case 3:
                                                    return A.add(n, r + s)
                                            }
                                            return A
                                        })));
                                    e.inset ? (l.path(o), l.ctx.clip(), l.mask(c)) : (l.mask(o), l.ctx.clip(), l.path(c)), l.ctx.shadowOffsetX = e.offsetX.number + a, l.ctx.shadowOffsetY = e.offsetY.number, l.ctx.shadowColor = oe(e.color), l.ctx.shadowBlur = e.blur.number, l.ctx.fillStyle = e.inset ? oe(e.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore()
                                })), r.label = 2;
                            case 2:
                                s = 0, o = 0, a = n, r.label = 3;
                            case 3:
                                return o < a.length ? 0 !== (c = a[o]).style && !se(c.color) && c.width > 0 ? 2 !== c.style ? [3, 5] : [4, this.renderDashedDottedBorder(c.color, c.width, s, A.curves, 2)] : [3, 11] : [3, 13];
                            case 4:
                                return r.sent(), [3, 11];
                            case 5:
                                return 3 !== c.style ? [3, 7] : [4, this.renderDashedDottedBorder(c.color, c.width, s, A.curves, 3)];
                            case 6:
                                return r.sent(), [3, 11];
                            case 7:
                                return 4 !== c.style ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, s, A.curves)];
                            case 8:
                                return r.sent(), [3, 11];
                            case 9:
                                return [4, this.renderSolidBorder(c.color, s, A.curves)];
                            case 10:
                                r.sent(), r.label = 11;
                            case 11:
                                s++, r.label = 12;
                            case 12:
                                return o++, [3, 3];
                            case 13:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.renderDashedDottedBorder = function(A, e, t, i, s) {
                return n(this, void 0, void 0, (function() {
                    var n, o, a, c, l, u, h, w, d, f, g, B, p, m, b, Q;
                    return r(this, (function(r) {
                        return this.ctx.save(), n = function(A, e) {
                            switch (e) {
                                case 0:
                                    return os(A.topLeftBorderStroke, A.topRightBorderStroke);
                                case 1:
                                    return os(A.topRightBorderStroke, A.bottomRightBorderStroke);
                                case 2:
                                    return os(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
                                case 3:
                                default:
                                    return os(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
                            }
                        }(i, t), o = ss(i, t), 2 === s && (this.path(o), this.ctx.clip()), Xi(o[0]) ? (a = o[0].start.x, c = o[0].start.y) : (a = o[0].x, c = o[0].y), Xi(o[1]) ? (l = o[1].end.x, u = o[1].end.y) : (l = o[1].x, u = o[1].y), h = 0 === t || 2 === t ? Math.abs(a - l) : Math.abs(c - u), this.ctx.beginPath(), 3 === s ? this.formatPath(n) : this.formatPath(o.slice(0, 2)), w = e < 3 ? 3 * e : 2 * e, d = e < 3 ? 2 * e : e, 3 === s && (w = e, d = e), f = !0, h <= 2 * w ? f = !1 : h <= 2 * w + d ? (w *= g = h / (2 * w + d), d *= g) : (B = Math.floor((h + d) / (w + d)), p = (h - B * w) / (B - 1), d = (m = (h - (B + 1) * w) / B) <= 0 || Math.abs(d - p) < Math.abs(d - m) ? p : m), f && (3 === s ? this.ctx.setLineDash([0, w + d]) : this.ctx.setLineDash([w, d])), 3 === s ? (this.ctx.lineCap = "round", this.ctx.lineWidth = e) : this.ctx.lineWidth = 2 * e + 1.1, this.ctx.strokeStyle = oe(A), this.ctx.stroke(), this.ctx.setLineDash([]), 2 === s && (Xi(o[0]) && (b = o[3], Q = o[0], this.ctx.beginPath(), this.formatPath([new Vi(b.end.x, b.end.y), new Vi(Q.start.x, Q.start.y)]), this.ctx.stroke()), Xi(o[1]) && (b = o[1], Q = o[2], this.ctx.beginPath(), this.formatPath([new Vi(b.end.x, b.end.y), new Vi(Q.start.x, Q.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2]
                    }))
                }))
            }, t.prototype.render = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e;
                    return r(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return this.options.backgroundColor && (this.ctx.fillStyle = oe(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), n = new ns(A, null), r = new ts(n), rs(n, r, r, i = []), is(n.container, i), e = r, [4, this.renderStack(e)];
                            case 1:
                                return t.sent(), this.applyEffects([]), [2, this.canvas]
                        }
                        var n, r, i
                    }))
                }))
            }, t
        }(ps),
        bs = function(A) {
            return A instanceof xr || A instanceof Tr || A instanceof Sr && "radio" !== A.type && "checkbox" !== A.type
        },
        Qs = function(A, e) {
            switch (A) {
                case 0:
                    return zi(e);
                case 2:
                    return function(A) {
                        return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
                    }(e);
                case 1:
                default:
                    return ji(e)
            }
        },
        Cs = function(A) {
            switch (A) {
                case 1:
                    return "center";
                case 2:
                    return "right";
                case 0:
                default:
                    return "left"
            }
        },
        ys = ["-apple-system", "system-ui"],
        vs = function(A) {
            return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter((function(A) {
                return -1 === ys.indexOf(A)
            })) : A
        },
        Us = function(A) {
            function t(e, t) {
                var n = A.call(this, e, t) || this;
                return n.canvas = t.canvas ? t.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = t, n.canvas.width = Math.floor(t.width * t.scale), n.canvas.height = Math.floor(t.height * t.scale), n.canvas.style.width = "".concat(t.width, "px"), n.canvas.style.height = "".concat(t.height, "px"), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-t.x, -t.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (".concat(t.width, "x").concat(t.height, " at ").concat(t.x, ",").concat(t.y, ") with scale ").concat(t.scale)), n
            }
            return e(t, A), t.prototype.render = function(A) {
                return n(this, void 0, void 0, (function() {
                    var e, t;
                    return r(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return e = lr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), [4, _s(e)];
                            case 1:
                                return t = n.sent(), this.options.backgroundColor && (this.ctx.fillStyle = oe(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
                        }
                    }))
                }))
            }, t
        }(ps),
        _s = function(A) {
            return new Promise((function(e, t) {
                var n = new Image;
                n.onload = function() {
                    e(n)
                }, n.onerror = t, n.src = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent((new XMLSerializer).serializeToString(A)))
            }))
        },
        Fs = function() {
            function A(A) {
                var e = A.id,
                    t = A.enabled;
                this.id = e, this.enabled = t, this.start = Date.now()
            }
            return A.prototype.debug = function() {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, i([this.id, "".concat(this.getTime(), "ms")], A, !1)) : this.info.apply(this, A))
            }, A.prototype.getTime = function() {
                return Date.now() - this.start
            }, A.prototype.info = function() {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, i([this.id, "".concat(this.getTime(), "ms")], A, !1))
            }, A.prototype.warn = function() {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, i([this.id, "".concat(this.getTime(), "ms")], A, !1)) : this.info.apply(this, A))
            }, A.prototype.error = function() {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, i([this.id, "".concat(this.getTime(), "ms")], A, !1)) : this.info.apply(this, A))
            }, A.instances = {}, A
        }(),
        Es = function() {
            function A(e, t) {
                var n;
                this.windowBounds = t, this.instanceName = "#".concat(A.instanceCount++), this.logger = new Fs({
                    id: this.instanceName,
                    enabled: e.logging
                }), this.cache = null !== (n = e.cache) && void 0 !== n ? n : new xi(this, e)
            }
            return A.instanceCount = 1, A
        }();
    "undefined" != typeof window && Ti.setContext(window);
    var Is = function(A, e) {
            return n(void 0, void 0, void 0, (function() {
                var n, i, a, c, l, u, h, w, d, f, g, B, p, m, b, Q, C, y, v, U, _, F, E, I, H, k, S, T, x, L, O, D, K, M, R, P, N, V;
                return r(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            if (!A || "object" != typeof A) return [2, Promise.reject("Invalid element provided as first argument")];
                            if (!(n = A.ownerDocument)) throw new Error("Element is not attached to a Document");
                            if (!(i = n.defaultView)) throw new Error("Document is not attached to a Window");
                            return a = {
                                allowTaint: null !== (F = e.allowTaint) && void 0 !== F && F,
                                imageTimeout: null !== (E = e.imageTimeout) && void 0 !== E ? E : 15e3,
                                proxy: e.proxy,
                                useCORS: null !== (I = e.useCORS) && void 0 !== I && I,
                                customIsSameOrigin: e.customIsSameOrigin
                            }, c = t({
                                logging: null === (H = e.logging) || void 0 === H || H,
                                cache: e.cache
                            }, a), l = {
                                windowWidth: null !== (k = e.windowWidth) && void 0 !== k ? k : i.innerWidth,
                                windowHeight: null !== (S = e.windowHeight) && void 0 !== S ? S : i.innerHeight,
                                scrollX: null !== (T = e.scrollX) && void 0 !== T ? T : i.pageXOffset,
                                scrollY: null !== (x = e.scrollY) && void 0 !== x ? x : i.pageYOffset
                            }, u = new s(l.scrollX, l.scrollY, l.windowWidth, l.windowHeight), h = new Es(c, u), w = null !== (L = e.foreignObjectRendering) && void 0 !== L && L, d = {
                                allowTaint: null !== (O = e.allowTaint) && void 0 !== O && O,
                                onclone: e.onclone,
                                ignoreElements: e.ignoreElements,
                                inlineImages: w,
                                copyStyles: w
                            }, h.logger.debug("Starting document clone with size ".concat(u.width, "x").concat(u.height, " scrolled to ").concat(-u.left, ",").concat(-u.top)), f = new Bi(h, A, d), (g = f.clonedReferenceElement) ? [4, f.toIFrame(n, u)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                        case 1:
                            return B = r.sent(), p = jr(g) || "HTML" === g.tagName ? function(A) {
                                var e = A.body,
                                    t = A.documentElement;
                                if (!e || !t) throw new Error("Unable to get document size");
                                var n = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)),
                                    r = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                                return new s(0, 0, n, r)
                            }(g.ownerDocument) : o(h, g), m = p.width, b = p.height, Q = p.left, C = p.top, y = Hs(h, g, e.backgroundColor), v = {
                                canvas: e.canvas,
                                backgroundColor: y,
                                scale: null !== (K = null !== (D = e.scale) && void 0 !== D ? D : i.devicePixelRatio) && void 0 !== K ? K : 1,
                                x: (null !== (M = e.x) && void 0 !== M ? M : 0) + Q,
                                y: (null !== (R = e.y) && void 0 !== R ? R : 0) + C,
                                width: null !== (P = e.width) && void 0 !== P ? P : Math.ceil(m),
                                height: null !== (N = e.height) && void 0 !== N ? N : Math.ceil(b)
                            }, w ? (h.logger.debug("Document cloned, using foreign object rendering"), [4, new Us(h, v).render(g)]) : [3, 3];
                        case 2:
                            return U = r.sent(), [3, 5];
                        case 3:
                            return h.logger.debug("Document cloned, element located at ".concat(Q, ",").concat(C, " with size ").concat(m, "x").concat(b, " using computed rendering")), h.logger.debug("Starting DOM parsing"), _ = Mr(h, g), y === _.styles.backgroundColor && (_.styles.backgroundColor = Xe.TRANSPARENT), h.logger.debug("Starting renderer for element at ".concat(v.x, ",").concat(v.y, " with size ").concat(v.width, "x").concat(v.height)), [4, new ms(h, v).render(_)];
                        case 4:
                            U = r.sent(), r.label = 5;
                        case 5:
                            return (null === (V = e.removeContainer) || void 0 === V || V) && (Bi.destroy(B) || h.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), h.logger.debug("Finished rendering"), [2, U]
                    }
                }))
            }))
        },
        Hs = function(A, e, t) {
            var n = e.ownerDocument,
                r = n.documentElement ? Ye(A, getComputedStyle(n.documentElement).backgroundColor) : Xe.TRANSPARENT,
                i = n.body ? Ye(A, getComputedStyle(n.body).backgroundColor) : Xe.TRANSPARENT,
                s = "string" == typeof t ? Ye(A, t) : null === t ? Xe.TRANSPARENT : 4294967295;
            return e === n.documentElement ? se(r) ? se(i) ? s : i : r : s
        };
    return function(A, e) {
        return void 0 === e && (e = {}), Is(A, e)
    }
}()
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(51);

    function r() {
        var A = document.getElementById("goguardian-beacon-notification");
        A && A.parentNode && A.parentNode.removeChild(A)
    }
    e.closeMessage = r, e.showMessage = function(A) {
        var e;
        r();
        var t = n.getMessageContent(A),
            i = document.createElement("div");
        i.setAttribute("id", "notification-live-region"), i.setAttribute("role", "log"), i.setAttribute("aria-live", "polite"), i.setAttribute("aria-atomic", "true"), document.body.appendChild(i);
        var s = document.createElement("iframe");
        s.setAttribute("id", "goguardian-beacon-notification"), s.setAttribute("title", "Notification"), s.setAttribute("tabindex", "0"), s.setAttribute("style", "position: fixed; top: 20px; right: 20px; width: 400px; max-width: 80%; height: auto; border-radius: 3px; border: 0; box-shadow: 0 0 2px rgba(0,0,0,0.5); z-index: 1000000000"), i.appendChild(s);
        var o = s.contentDocument || (null === (e = s.contentWindow) || void 0 === e ? void 0 : e.document);
        o && (o.open(), o.write(t), o.addEventListener("click", (function(A) {
            var e = A.target;
            e && "close-button" !== e.getAttribute("class") || window.top && window.top.postMessage({
                type: "gg:beacon:closemessage",
                payload: {}
            }, "*")
        }), !1), s.focus())
    }
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0, e.getMessageContent = function(A) {
        return '\n<head>\n  <style>\n    body {\n        font-family: \'Open Sans\', sans-serif;\n        background: rgb(255,255,255);\n        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%);\n        margin: 10px 20px 20px;\n        font-size: 14px;\n    }\n    .heading {\n      font-size: 15px;\n      margin-bottom: 4px;\n    }\n    .message {\n      margin-right: 20px;\n    }\n    .close {\n      position: fixed;\n      right: 5px;\n      bottom: 5px;\n      border-radius: 50%;\n      border: 1px solid white;\n      color: rgba(125, 125, 125, 1);\n      background-color: white;\n      height: 30px;\n      width: 30px;\n      line-height: 30px;\n      font-size: 20px;\n      text-align: center;\n      cursor: pointer;\n    }\n    .close:hover {\n      border: 1px solid rgba(200, 200, 200, 1);\n      color: rgba(0, 0, 0, 1);\n    }\n    .gg-logo {\n      position: fixed;\n      right: 5px;\n      top: 5px;\n      background-color: white;\n      background-image: url("https://static.goguardian.com/images/logos/shared/gg-dark-shield-notification.png");\n      background-position: center;\n      background-size: contain;\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      margin: 0 0 0 10px;\n    }\n  </style>\n  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />\n</head>\n<body>\n  <div class="gg-logo"></div>\n  <div>\n    <h1 class="heading" aria-label="New Message" tabindex="1">New Message</h1>\n    <div class="message" tabindex="2">' + A + '</div>\n  </div>\n  <div class="close" tabindex="3">\n    <a class="close-button" aria-label="close" role="button">&times;</a>\n  </div>\n</body>\n'
    }
},
function(A, e, t) {
    "use strict";
    var n = this && this.__assign || function() {
        return (n = Object.assign || function(A) {
            for (var e, t = 1, n = arguments.length; t < n; t++)
                for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (A[r] = e[r]);
            return A
        }).apply(this, arguments)
    };
    e.__esModule = !0;
    var r = t(0),
        i = t(1),
        s = function() {
            function A(A, e, t) {
                this.messenger = A, this.metrics = t, this.logger = e
            }
            return A.prototype.makePrediction = function(A) {
                var e = this,
                    t = {
                        content: n(n({}, A), {
                            url: window.location.href
                        })
                    },
                    s = JSON.stringify(t.content),
                    o = Date.now(),
                    a = new AbortController,
                    c = setTimeout((function() {
                        return a.abort()
                    }), r.BEACON_PREDICT_TIMEOUT_MS);
                i.getFetch()(r.BEACON_PREDICT_ENDPOINT, {
                    method: "POST",
                    body: s,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    signal: a.signal
                }).then((function(A) {
                    if (clearTimeout(c), !A.ok) throw new Error("beacon prediction returns non-2xx status: " + A.status);
                    return A.json()
                })).then((function(A) {
                    A.code ? e.handleError(new Error(A.msg)) : (e.metrics.histogram("beacon.prediction.latency_ms", Date.now() - o), e.messenger.beacon.onPrediction.emit({
                        top: !0,
                        iframes: !1
                    }, e.extractContentFetcherPrediction(A)))
                })).catch((function(A) {
                    e.handleError(A)
                }))
            }, A.prototype.handleError = function(A) {
                this.metrics.increment("beacon.prediction.error"), this.logger.withError(A).error("Error requesting prediction: " + A.message)
            }, A.prototype.extractContentFetcherPrediction = function(A) {
                return {
                    content_fetcher_payload: A.content_fetcher_payload,
                    phase: A.phase,
                    probability: A.probability,
                    use_content_fetcher_payload: A.use_content_fetcher_payload
                }
            }, A
        }();
    e.BeaconPredictionsManager = s
},
function(A, e, t) {
    "use strict";
    e.__esModule = !0;
    var n = t(54),
        r = t(15),
        i = t(0),
        s = t(1);
    ! function(A) {
        A.TEXT = "text", A.IMAGE = "image"
    }(e.Source || (e.Source = {}));
    var o = function() {
        function A(A, e, t) {
            this.messenger = A, this.metrics = t, this.logger = e
        }
        return A.prototype.makeReport = function(A, e) {
            var t = this,
                i = {
                    url: A.url,
                    timestamp: A.timestamp,
                    prediction: A.prediction,
                    closedMessage: !1,
                    didMessage: A.didMessage,
