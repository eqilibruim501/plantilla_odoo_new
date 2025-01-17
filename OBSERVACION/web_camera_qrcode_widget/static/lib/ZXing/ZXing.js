! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("ZXing", [], e) : "object" == typeof exports ? exports.ZXing = e() : t.ZXing = e()
}(window, function () {
    return r = {}, t.m = e = [function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n = n || {})[o.AZTEC = 0] = "AZTEC", o[o.CODABAR = 1] = "CODABAR", o[o.CODE_39 = 2] = "CODE_39", o[o.CODE_93 = 3] = "CODE_93", o[o.CODE_128 = 4] = "CODE_128", o[o.DATA_MATRIX = 5] = "DATA_MATRIX", o[o.EAN_8 = 6] = "EAN_8", o[o.EAN_13 = 7] = "EAN_13", o[o.ITF = 8] = "ITF", o[o.MAXICODE = 9] = "MAXICODE", o[o.PDF_417 = 10] = "PDF_417", o[o.QR_CODE = 11] = "QR_CODE", o[o.RSS_14 = 12] = "RSS_14", o[o.RSS_EXPANDED = 13] = "RSS_EXPANDED", o[o.UPC_A = 14] = "UPC_A", o[o.UPC_E = 15] = "UPC_E", o[o.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION", e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(14),
            o = r(74),
            a = (i.prototype.getX = function () {
                return this.x
            }, i.prototype.getY = function () {
                return this.y
            }, i.prototype.equals = function (t) {
                if (t instanceof i) {
                    var e = t;
                    return this.x === e.x && this.y === e.y
                }
                return !1
            }, i.prototype.hashCode = function () {
                return 31 * o.default.floatToIntBits(this.x) + o.default.floatToIntBits(this.y)
            }, i.prototype.toString = function () {
                return "(" + this.x + "," + this.y + ")"
            }, i.orderBestPatterns = function (t) {
                var e, r, n, o = this.distance(t[0], t[1]),
                    a = this.distance(t[1], t[2]),
                    i = this.distance(t[0], t[2]);
                if (n = o <= a && i <= a ? (r = t[0], e = t[1], t[2]) : a <= i && o <= i ? (r = t[1], e = t[0], t[2]) : (r = t[2], e = t[0], t[1]), this.crossProductZ(e, r, n) < 0) {
                    var u = e;
                    e = n, n = u
                }
                t[0] = e, t[1] = r, t[2] = n
            }, i.distance = function (t, e) {
                return n.default.distance(t.x, t.y, e.x, e.y)
            }, i.crossProductZ = function (t, e, r) {
                var n = e.x,
                    o = e.y;
                return (r.x - n) * (t.y - o) - (r.y - o) * (t.x - n)
            }, i);

        function i(t, e) {
            this.x = t, this.y = e
        }
        e.default = a
    }, function (t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n = n || {})[o.OTHER = 0] = "OTHER", o[o.PURE_BARCODE = 1] = "PURE_BARCODE", o[o.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", o[o.TRY_HARDER = 3] = "TRY_HARDER", o[o.CHARACTER_SET = 4] = "CHARACTER_SET", o[o.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", o[o.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", o[o.ASSUME_GS1 = 7] = "ASSUME_GS1", o[o.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", o[o.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", o[o.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS", e.default = n
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(73),
            u = (o(s, a = i.CustomError), s);

        function s(t) {
            void 0 === t && (t = void 0);
            var e = a.call(this, t) || this;
            return e.message = t, e
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.arraycopy = function (t, e, r, n, o) {
            for (; o--;) r[n++] = t[e++]
        }, o.currentTimeMillis = function () {
            return Date.now()
        }, o);

        function o() {}
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(15),
            o = r(7),
            a = r(28),
            i = r(11),
            u = r(1),
            s = (f.parseFromBooleanArray = function (t) {
                for (var e = t.length, r = t[0].length, n = new f(r, e), o = 0; o < e; o++)
                    for (var a = t[o], i = 0; i < r; i++) a[i] && n.set(i, o);
                return n
            }, f.parseFromString = function (t, e, r) {
                if (null === t) throw new u.default("stringRepresentation cannot be null");
                for (var n = new Array(t.length), o = 0, a = 0, i = -1, s = 0, d = 0; d < t.length;)
                    if ("\n" === t.charAt(d) || "\r" === t.charAt(d)) {
                        if (a < o) {
                            if (-1 === i) i = o - a;
                            else if (o - a !== i) throw new u.default("row lengths do not match");
                            a = o, s++
                        }
                        d++
                    } else if (t.substring(d, d + e.length) === e) d += e.length, n[o] = !0, o++;
                else {
                    if (t.substring(d, d + r.length) !== r) throw new u.default("illegal character encountered: " + t.substring(d));
                    d += r.length, n[o] = !1, o++
                }
                if (a < o) {
                    if (-1 === i) i = o - a;
                    else if (o - a !== i) throw new u.default("row lengths do not match");
                    s++
                }
                for (var l = new f(i, s), c = 0; c < o; c++) n[c] && l.set(Math.floor(c % i), Math.floor(c / i));
                return l
            }, f.prototype.get = function (t, e) {
                var r = e * this.rowSize + Math.floor(t / 32);
                return 0 != (this.bits[r] >>> (31 & t) & 1)
            }, f.prototype.set = function (t, e) {
                var r = e * this.rowSize + Math.floor(t / 32);
                this.bits[r] |= 1 << (31 & t) & 4294967295
            }, f.prototype.unset = function (t, e) {
                var r = e * this.rowSize + Math.floor(t / 32);
                this.bits[r] &= ~(1 << (31 & t) & 4294967295)
            }, f.prototype.flip = function (t, e) {
                var r = e * this.rowSize + Math.floor(t / 32);
                this.bits[r] ^= 1 << (31 & t) & 4294967295
            }, f.prototype.xor = function (t) {
                if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) throw new u.default("input matrix dimensions do not match");
                for (var e = new n.default(Math.floor(this.width / 32) + 1), r = this.rowSize, o = this.bits, a = 0, i = this.height; a < i; a++)
                    for (var s = a * r, f = t.getRow(a, e).getBitArray(), d = 0; d < r; d++) o[s + d] ^= f[d]
            }, f.prototype.clear = function () {
                for (var t = this.bits, e = t.length, r = 0; r < e; r++) t[r] = 0
            }, f.prototype.setRegion = function (t, e, r, n) {
                if (e < 0 || t < 0) throw new u.default("Left and top must be nonnegative");
                if (n < 1 || r < 1) throw new u.default("Height and width must be at least 1");
                var o = t + r,
                    a = e + n;
                if (a > this.height || o > this.width) throw new u.default("The region must fit inside the matrix");
                for (var i = this.rowSize, s = this.bits, f = e; f < a; f++)
                    for (var d = f * i, l = t; l < o; l++) s[d + Math.floor(l / 32)] |= 1 << (31 & l) & 4294967295
            }, f.prototype.getRow = function (t, e) {
                null == e || e.getSize() < this.width ? e = new n.default(this.width) : e.clear();
                for (var r = this.rowSize, o = this.bits, a = t * r, i = 0; i < r; i++) e.setBulk(32 * i, o[a + i]);
                return e
            }, f.prototype.setRow = function (t, e) {
                o.default.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize)
            }, f.prototype.rotate180 = function () {
                for (var t = this.getWidth(), e = this.getHeight(), r = new n.default(t), o = new n.default(t), a = 0, i = Math.floor((e + 1) / 2); a < i; a++) r = this.getRow(a, r), o = this.getRow(e - 1 - a, o), r.reverse(), o.reverse(), this.setRow(a, o), this.setRow(e - 1 - a, r)
            }, f.prototype.getEnclosingRectangle = function () {
                for (var t = this.width, e = this.height, r = this.rowSize, n = this.bits, o = t, a = e, i = -1, u = -1, s = 0; s < e; s++)
                    for (var f = 0; f < r; f++) {
                        var d = n[s * r + f];
                        if (0 !== d) {
                            if (s < a && (a = s), u < s && (u = s), 32 * f < o) {
                                for (var l = 0; 0 == (d << 31 - l & 4294967295);) l++;
                                32 * f + l < o && (o = 32 * f + l)
                            }
                            if (i < 32 * f + 31) {
                                for (l = 31; d >>> l == 0;) l--;
                                i < 32 * f + l && (i = 32 * f + l)
                            }
                        }
                    }
                return i < o || u < a ? null : Int32Array.from([o, a, i - o + 1, u - a + 1])
            }, f.prototype.getTopLeftOnBit = function () {
                for (var t = this.rowSize, e = this.bits, r = 0; r < e.length && 0 === e[r];) r++;
                if (r === e.length) return null;
                for (var n = r / t, o = r % t * 32, a = e[r], i = 0; 0 == (a << 31 - i & 4294967295);) i++;
                return o += i, Int32Array.from([o, n])
            }, f.prototype.getBottomRightOnBit = function () {
                for (var t = this.rowSize, e = this.bits, r = e.length - 1; 0 <= r && 0 === e[r];) r--;
                if (r < 0) return null;
                for (var n = Math.floor(r / t), o = 32 * Math.floor(r % t), a = e[r], i = 31; a >>> i == 0;) i--;
                return o += i, Int32Array.from([o, n])
            }, f.prototype.getWidth = function () {
                return this.width
            }, f.prototype.getHeight = function () {
                return this.height
            }, f.prototype.getRowSize = function () {
                return this.rowSize
            }, f.prototype.equals = function (t) {
                if (!(t instanceof f)) return !1;
                var e = t;
                return this.width === e.width && this.height === e.height && this.rowSize === e.rowSize && a.default.equals(this.bits, e.bits)
            }, f.prototype.hashCode = function () {
                var t = this.width;
                return 31 * (t = 31 * (t = 31 * (t = 31 * t + this.width) + this.height) + this.rowSize) + a.default.hashCode(this.bits)
            }, f.prototype.toString = function (t, e, r) {
                return void 0 === t && (t = "x"), void 0 === e && (e = " "), void 0 === r && (r = "\n"), this.buildToString(t, e, r)
            }, f.prototype.buildToString = function (t, e, r) {
                var n = new i.default;
                n.append(r);
                for (var o = 0, a = this.height; o < a; o++) {
                    for (var u = 0, s = this.width; u < s; u++) n.append(this.get(u, o) ? t : e);
                    n.append(r)
                }
                return n.toString()
            }, f.prototype.clone = function () {
                return new f(this.width, this.height, this.rowSize, this.bits.slice())
            }, f);

        function f(t, e, r, n) {
            if (this.width = t, this.height = e, this.rowSize = r, this.bits = n, null == e && (e = t), this.height = e, t < 1 || e < 1) throw new u.default("Both dimensions must be greater than 0");
            null == r && (r = Math.floor((t + 31) / 32)), this.rowSize = r, null == n && (this.bits = new Int32Array(this.rowSize * this.height))
        }
        e.default = s
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(3),
            o = r(7),
            a = (i.prototype.getText = function () {
                return this.text
            }, i.prototype.getRawBytes = function () {
                return this.rawBytes
            }, i.prototype.getNumBits = function () {
                return this.numBits
            }, i.prototype.getResultPoints = function () {
                return this.resultPoints
            }, i.prototype.getBarcodeFormat = function () {
                return this.format
            }, i.prototype.getResultMetadata = function () {
                return this.resultMetadata
            }, i.prototype.putMetadata = function (t, e) {
                null === this.resultMetadata && (this.resultMetadata = new Map), this.resultMetadata.set(t, e)
            }, i.prototype.putAllMetadata = function (t) {
                null !== t && (null === this.resultMetadata ? this.resultMetadata = t : this.resultMetadata = new Map(t))
            }, i.prototype.addResultPoints = function (t) {
                var e = this.resultPoints;
                if (null === e) this.resultPoints = t;
                else if (null !== t && 0 < t.length) {
                    var r = new n.default[e.length + t.length];
                    o.default.arraycopy(e, 0, r, 0, e.length), o.default.arraycopy(t, 0, r, e.length, t.length), this.resultPoints = r
                }
            }, i.prototype.getTimestamp = function () {
                return this.timestamp
            }, i.prototype.toString = function () {
                return this.text
            }, i);

        function i(t, e, r, n, a, i) {
            this.text = t, this.rawBytes = e, this.numBits = r, this.resultPoints = n, this.format = a, this.timestamp = i, this.text = t, this.rawBytes = e, this.numBits = null == r ? null == e ? 0 : 8 * e.length : r, this.resultPoints = n, this.format = a, this.resultMetadata = null, this.timestamp = null == i ? o.default.currentTimeMillis() : i
        }
        e.default = a
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(15),
            o = r(4),
            a = r(13),
            i = r(3),
            u = r(0),
            s = (f.prototype.decode = function (t, e) {
                try {
                    return this.doDecode(t, e)
                } catch (h) {
                    if (e && !0 === e.get(o.default.TRY_HARDER) && t.isRotateSupported()) {
                        var r = t.rotateCounterClockwise(),
                            n = this.doDecode(r, e),
                            s = n.getResultMetadata(),
                            f = 270;
                        null !== s && !0 === s.get(a.default.ORIENTATION) && (f += s.get(a.default.ORIENTATION) % 360), n.putMetadata(a.default.ORIENTATION, f);
                        var d = n.getResultPoints();
                        if (null !== d)
                            for (var l = r.getHeight(), c = 0; c < d.length; c++) d[c] = new i.default(l - d[c].getY() - 1, d[c].getX());
                        return n
                    }
                    throw new u.default
                }
            }, f.prototype.reset = function () {}, f.prototype.doDecode = function (t, e) {
                var r, s = t.getWidth(),
                    f = t.getHeight(),
                    d = new n.default(s),
                    l = e && !0 === e.get(o.default.TRY_HARDER),
                    c = Math.max(1, f >> (l ? 8 : 5));
                r = l ? f : 15;
                for (var h = Math.trunc(f / 2), p = 0; p < r; p++) {
                    var w = Math.trunc((p + 1) / 2),
                        g = h + c * (0 == (1 & p) ? w : -w);
                    if (g < 0 || f <= g) break;
                    try {
                        d = t.getBlackRow(g, d)
                    } catch (t) {
                        continue
                    }
                    for (var v = function (t) {
                            if (1 === t && (d.reverse(), e && !0 === e.get(o.default.NEED_RESULT_POINT_CALLBACK))) {
                                var r = new Map;
                                e.forEach(function (t, e) {
                                    return r.set(e, t)
                                }), r.delete(o.default.NEED_RESULT_POINT_CALLBACK), e = r
                            }
                            try {
                                var n = _.decodeRow(g, d, e);
                                if (1 === t) {
                                    n.putMetadata(a.default.ORIENTATION, 180);
                                    var u = n.getResultPoints();
                                    null !== u && (u[0] = new i.default(s - u[0].getX() - 1, u[0].getY()), u[1] = new i.default(s - u[1].getX() - 1, u[1].getY()))
                                }
                                return {
                                    value: n
                                }
                            } catch (t) {}
                        }, _ = this, y = 0; y < 2; y++) {
                        var C = v(y);
                        if ("object" == typeof C) return C.value
                    }
                }
                throw new u.default
            }, f.recordPattern = function (t, e, r) {
                for (var n = r.length, o = 0; o < n; o++) r[o] = 0;
                var a = t.getSize();
                if (a <= e) throw new u.default;
                for (var i = !t.get(e), s = 0, f = e; f < a;) {
                    if (t.get(f) !== i) r[s]++;
                    else {
                        if (++s === n) break;
                        r[s] = 1, i = !i
                    }
                    f++
                }
                if (s !== n && (s !== n - 1 || f !== a)) throw new u.default
            }, f.recordPatternInReverse = function (t, e, r) {
                for (var n = r.length, o = t.get(e); 0 < e && 0 <= n;) t.get(--e) !== o && (n--, o = !o);
                if (0 <= n) throw new u.default;
                f.recordPattern(t, e + 1, r)
            }, f.patternMatchVariance = function (t, e, r) {
                for (var n = t.length, o = 0, a = 0, i = 0; i < n; i++) o += t[i], a += e[i];
                if (o < a) return Number.POSITIVE_INFINITY;
                var u = o / a;
                r *= u;
                for (var s = 0, f = 0; f < n; f++) {
                    var d = t[f],
                        l = e[f] * u,
                        c = l < d ? d - l : l - d;
                    if (r < c) return Number.POSITIVE_INFINITY;
                    s += c
                }
                return s / o
            }, f);

        function f() {}
        e.default = s
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.append = function (t) {
            return this.value += "string" == typeof t ? t.toString() : String.fromCharCode(t), this
        }, o.prototype.length = function () {
            return this.value.length
        }, o.prototype.charAt = function (t) {
            return this.value.charAt(t)
        }, o.prototype.deleteCharAt = function (t) {
            this.value = this.value.substr(0, t) + this.value.substring(t + 1)
        }, o.prototype.setCharAt = function (t, e) {
            this.value = this.value.substr(0, t) + e + this.value.substr(t + 1)
        }, o.prototype.toString = function () {
            return this.value
        }, o.prototype.insert = function (t, e) {
            this.value = this.value.substr(0, t) + e + this.value.substr(t + e.length)
        }, o);

        function o(t) {
            void 0 === t && (t = ""), this.value = t
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n = n || {})[o.OTHER = 0] = "OTHER", o[o.ORIENTATION = 1] = "ORIENTATION", o[o.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", o[o.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", o[o.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", o[o.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", o[o.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", o[o.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", o[o.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", o[o.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", o[o.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY", e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.MathUtils = function () {}, o.round = function (t) {
            return NaN === t ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t + (t < 0 ? -.5 : .5) | 0
        }, o.distance = function (t, e, r, n) {
            var o = t - r,
                a = e - n;
            return Math.sqrt(o * o + a * a)
        }, o.sum = function (t) {
            for (var e = 0, r = 0, n = t.length; r !== n; r++) e += t[r];
            return e
        }, o);

        function o() {}
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(7),
            o = r(23),
            a = r(28),
            i = r(1),
            u = (s.prototype.getSize = function () {
                return this.size
            }, s.prototype.getSizeInBytes = function () {
                return Math.floor((this.size + 7) / 8)
            }, s.prototype.ensureCapacity = function (t) {
                if (t > 32 * this.bits.length) {
                    var e = s.makeArray(t);
                    n.default.arraycopy(this.bits, 0, e, 0, this.bits.length), this.bits = e
                }
            }, s.prototype.get = function (t) {
                return 0 != (this.bits[Math.floor(t / 32)] & 1 << (31 & t))
            }, s.prototype.set = function (t) {
                this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
            }, s.prototype.flip = function (t) {
                this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
            }, s.prototype.getNextSet = function (t) {
                var e = this.size;
                if (e <= t) return e;
                var r = this.bits,
                    n = Math.floor(t / 32),
                    a = r[n];
                a &= ~((1 << (31 & t)) - 1);
                for (var i = r.length; 0 === a;) {
                    if (++n === i) return e;
                    a = r[n]
                }
                var u = 32 * n + o.default.numberOfTrailingZeros(a);
                return e < u ? e : u
            }, s.prototype.getNextUnset = function (t) {
                var e = this.size;
                if (e <= t) return e;
                var r = this.bits,
                    n = Math.floor(t / 32),
                    a = ~r[n];
                a &= ~((1 << (31 & t)) - 1);
                for (var i = r.length; 0 === a;) {
                    if (++n === i) return e;
                    a = ~r[n]
                }
                var u = 32 * n + o.default.numberOfTrailingZeros(a);
                return e < u ? e : u
            }, s.prototype.setBulk = function (t, e) {
                this.bits[Math.floor(t / 32)] = e
            }, s.prototype.setRange = function (t, e) {
                if (e < t || t < 0 || e > this.size) throw new i.default;
                if (e !== t) {
                    e--;
                    for (var r = Math.floor(t / 32), n = Math.floor(e / 32), o = this.bits, a = r; a <= n; a++) {
                        var u = (2 << (a < n ? 31 : 31 & e)) - (1 << (r < a ? 0 : 31 & t));
                        o[a] |= u
                    }
                }
            }, s.prototype.clear = function () {
                for (var t = this.bits.length, e = this.bits, r = 0; r < t; r++) e[r] = 0
            }, s.prototype.isRange = function (t, e, r) {
                if (e < t || t < 0 || e > this.size) throw new i.default;
                if (e === t) return !0;
                e--;
                for (var n = Math.floor(t / 32), o = Math.floor(e / 32), a = this.bits, u = n; u <= o; u++) {
                    var s = (2 << (u < o ? 31 : 31 & e)) - (1 << (n < u ? 0 : 31 & t)) & 4294967295;
                    if ((a[u] & s) != (r ? s : 0)) return !1
                }
                return !0
            }, s.prototype.appendBit = function (t) {
                this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++
            }, s.prototype.appendBits = function (t, e) {
                if (e < 0 || 32 < e) throw new i.default("Num bits must be between 0 and 32");
                this.ensureCapacity(this.size + e), this.appendBit;
                for (var r = e; 0 < r; r--) this.appendBit(1 == (t >> r - 1 & 1))
            }, s.prototype.appendBitArray = function (t) {
                var e = t.size;
                this.ensureCapacity(this.size + e), this.appendBit;
                for (var r = 0; r < e; r++) this.appendBit(t.get(r))
            }, s.prototype.xor = function (t) {
                if (this.size !== t.size) throw new i.default("Sizes don't match");
                for (var e = this.bits, r = 0, n = e.length; r < n; r++) e[r] ^= t.bits[r]
            }, s.prototype.toBytes = function (t, e, r, n) {
                for (var o = 0; o < n; o++) {
                    for (var a = 0, i = 0; i < 8; i++) this.get(t) && (a |= 1 << 7 - i), t++;
                    e[r + o] = a
                }
            }, s.prototype.getBitArray = function () {
                return this.bits
            }, s.prototype.reverse = function () {
                for (var t = new Int32Array(this.bits.length), e = Math.floor((this.size - 1) / 32), r = e + 1, n = this.bits, o = 0; o < r; o++) {
                    var a = n[o];
                    a = (a = (a = (a = (a = a >> 1 & 1431655765 | (1431655765 & a) << 1) >> 2 & 858993459 | (858993459 & a) << 2) >> 4 & 252645135 | (252645135 & a) << 4) >> 8 & 16711935 | (16711935 & a) << 8) >> 16 & 65535 | (65535 & a) << 16, t[e - o] = a
                }
                if (this.size !== 32 * r) {
                    var i = 32 * r - this.size,
                        u = t[0] >>> i;
                    for (o = 1; o < r; o++) {
                        var s = t[o];
                        u |= s << 32 - i, t[o - 1] = u, u = s >>> i
                    }
                    t[r - 1] = u
                }
                this.bits = t
            }, s.makeArray = function (t) {
                return new Int32Array(Math.floor((t + 31) / 32))
            }, s.prototype.equals = function (t) {
                if (!(t instanceof s)) return !1;
                var e = t;
                return this.size === e.size && a.default.equals(this.bits, e.bits)
            }, s.prototype.hashCode = function () {
                return 31 * this.size + a.default.hashCode(this.bits)
            }, s.prototype.toString = function () {
                for (var t = "", e = 0, r = this.size; e < r; e++) 0 == (7 & e) && (t += " "), t += this.get(e) ? "X" : ".";
                return t
            }, s.prototype.clone = function () {
                return new s(this.size, this.bits.slice())
            }, s);

        function s(t, e) {
            void 0 === t ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = t, this.bits = null == e ? s.makeArray(t) : e)
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(24),
            o = r(23),
            a = r(1),
            i = r(57),
            u = (s.prototype.getZero = function () {
                return this.zero
            }, s.prototype.getOne = function () {
                return this.one
            }, s.prototype.buildMonomial = function (t, e) {
                if (t < 0) throw new a.default;
                if (0 === e) return this.zero;
                var r = new Int32Array(t + 1);
                return r[0] = e, new n.default(this, r)
            }, s.addOrSubtract = function (t, e) {
                return t ^ e
            }, s.prototype.exp = function (t) {
                return this.expTable[t]
            }, s.prototype.log = function (t) {
                if (0 === t) throw new a.default;
                return this.logTable[t]
            }, s.prototype.inverse = function (t) {
                if (0 === t) throw new i.default;
                return this.expTable[this.size - this.logTable[t] - 1]
            }, s.prototype.multiply = function (t, e) {
                return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)]
            }, s.prototype.getSize = function () {
                return this.size
            }, s.prototype.getGeneratorBase = function () {
                return this.generatorBase
            }, s.prototype.toString = function () {
                return "GF(0x" + o.default.toHexString(this.primitive) + "," + this.size + ")"
            }, s.prototype.equals = function (t) {
                return t === this
            }, s.AZTEC_DATA_12 = new s(4201, 4096, 1), s.AZTEC_DATA_10 = new s(1033, 1024, 1), s.AZTEC_DATA_6 = new s(67, 64, 1), s.AZTEC_PARAM = new s(19, 16, 1), s.QR_CODE_FIELD_256 = new s(285, 256, 0), s.DATA_MATRIX_FIELD_256 = new s(301, 256, 1), s.AZTEC_DATA_8 = s.DATA_MATRIX_FIELD_256, s.MAXICODE_FIELD_64 = s.AZTEC_DATA_6, s);

        function s(t, e, r) {
            this.primitive = t, this.size = e, this.generatorBase = r;
            for (var o = new Int32Array(e), a = 1, i = 0; i < e; i++) o[i] = a, e <= (a *= 2) && (a ^= t, a &= e - 1);
            this.expTable = o;
            var u = new Int32Array(e);
            for (i = 0; i < e - 1; i++) u[o[i]] = i;
            this.logTable = u, this.zero = new n.default(this, Int32Array.from([0])), this.one = new n.default(this, Int32Array.from([1]))
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n = this && this.__awaiter || function (t, e, r, n) {
                return new(r = r || Promise)(function (o, a) {
                    function i(t) {
                        try {
                            s(n.next(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function u(t) {
                        try {
                            s(n.throw(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function s(t) {
                        t.done ? o(t.value) : new r(function (e) {
                            e(t.value)
                        }).then(i, u)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            o = this && this.__generator || function (t, e) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                    return this
                }), a;

                function u(a) {
                    return function (u) {
                        return function (a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = 0 < (o = i.trys).length && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1], o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(27),
            i = r(45),
            u = r(12),
            s = r(46),
            f = r(5),
            d = r(0),
            l = r(49),
            c = r(50),
            h = (Object.defineProperty(p.prototype, "hasNavigator", {
                get: function () {
                    return "undefined" != typeof navigator
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p.prototype, "isMediaDevicesSuported", {
                get: function () {
                    return this.hasNavigator && !!navigator.mediaDevices
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p.prototype, "canEnumerateDevices", {
                get: function () {
                    return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p.prototype, "timeBetweenDecodingAttempts", {
                get: function () {
                    return this._timeBetweenDecodingAttempts
                },
                set: function (t) {
                    this._timeBetweenDecodingAttempts = t < 0 ? 0 : t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p.prototype, "hints", {
                get: function () {
                    return this._hints
                },
                set: function (t) {
                    this._hints = t || null
                },
                enumerable: !0,
                configurable: !0
            }), p.prototype.listVideoInputDevices = function () {
                return n(this, void 0, void 0, function () {
                    var t, e, r, n, a, i, u, s, f, d;
                    return o(this, function (o) {
                        switch (o.label) {
                            case 0:
                                if (!this.hasNavigator) throw new Error("Can't enumerate devices, navigator is not present.");
                                if (!this.canEnumerateDevices) throw new Error("Can't enumerate devices, method not supported.");
                                return [4, navigator.mediaDevices.enumerateDevices()];
                            case 1:
                                for (t = o.sent(), e = [], r = 0, n = t; r < n.length; r++) a = n[r], "videoinput" === (i = "video" === a.kind ? "videoinput" : a.kind) && (u = a.deviceId || a.id, s = a.label || "Video device " + (e.length + 1), f = a.groupId, d = {
                                    deviceId: u,
                                    label: s,
                                    kind: i,
                                    groupId: f
                                }, e.push(d));
                                return [2, e]
                        }
                    })
                })
            }, p.prototype.getVideoInputDevices = function () {
                return n(this, void 0, void 0, function () {
                    return o(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.listVideoInputDevices()];
                            case 1:
                                return [2, t.sent().map(function (t) {
                                    return new c.VideoInputDevice(t.deviceId, t.label)
                                })]
                        }
                    })
                })
            }, p.prototype.findDeviceById = function (t) {
                return n(this, void 0, void 0, function () {
                    var e;
                    return o(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.listVideoInputDevices()];
                            case 1:
                                return (e = r.sent()) ? [2, e.find(function (e) {
                                    return e.deviceId === t
                                })] : [2, null]
                        }
                    })
                })
            }, p.prototype.decodeFromInputVideoDevice = function (t, e) {
                return n(this, void 0, void 0, function () {
                    return o(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.decodeOnceFromVideoDevice(t, e)];
                            case 1:
                                return [2, r.sent()]
                        }
                    })
                })
            }, p.prototype.decodeOnceFromVideoDevice = function (t, e) {
                return n(this, void 0, void 0, function () {
                    var r;
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return this.reset(), r = {
                                    video: t ? {
                                        deviceId: {
                                            exact: t
                                        }
                                    } : {
                                        facingMode: "environment"
                                    }
                                }, [4, this.decodeOnceFromConstraints(r, e)];
                            case 1:
                                return [2, n.sent()]
                        }
                    })
                })
            }, p.prototype.decodeOnceFromConstraints = function (t, e) {
                return n(this, void 0, void 0, function () {
                    var r;
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, navigator.mediaDevices.getUserMedia(t)];
                            case 1:
                                return r = n.sent(), [4, this.decodeOnceFromStream(r, e)];
                            case 2:
                                return [2, n.sent()]
                        }
                    })
                })
            }, p.prototype.decodeOnceFromStream = function (t, e) {
                return n(this, void 0, void 0, function () {
                    var r;
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return this.reset(), [4, this.attachStreamToVideo(t, e)];
                            case 1:
                                return r = n.sent(), [4, this.decodeOnce(r)];
                            case 2:
                                return [2, n.sent()]
                        }
                    })
                })
            }, p.prototype.decodeFromInputVideoDeviceContinuously = function (t, e, r) {
                return n(this, void 0, void 0, function () {
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.decodeFromVideoDevice(t, e, r)];
                            case 1:
                                return [2, n.sent()]
                        }
                    })
                })
            }, p.prototype.decodeFromVideoDevice = function (t, e, r) {
                return n(this, void 0, void 0, function () {
                    var n;
                    return o(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return n = {
                                    video: t ? {
                                        deviceId: {
                                            exact: t
                                        }
                                    } : {
                                        facingMode: "environment"
                                    }
                                }, [4, this.decodeFromConstraints(n, e, r)];
                            case 1:
                                return [2, o.sent()]
                        }
                    })
                })
            }, p.prototype.decodeFromConstraints = function (t, e, r) {
                return n(this, void 0, void 0, function () {
                    var n;
                    return o(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return [4, navigator.mediaDevices.getUserMedia(t)];
                            case 1:
                                return n = o.sent(), [4, this.decodeFromStream(n, e, r)];
                            case 2:
                                return [2, o.sent()]
                        }
                    })
                })
            }, p.prototype.decodeFromStream = function (t, e, r) {
                return n(this, void 0, void 0, function () {
                    var n;
                    return o(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return this.reset(), [4, this.attachStreamToVideo(t, e)];
                            case 1:
                                return n = o.sent(), [4, this.decodeContinuously(n, r)];
                            case 2:
                                return [2, o.sent()]
                        }
                    })
                })
            }, p.prototype.stopAsyncDecode = function () {
                this._stopAsyncDecode = !0
            }, p.prototype.stopContinuousDecode = function () {
                this._stopContinuousDecode = !0
            }, p.prototype.attachStreamToVideo = function (t, e) {
                return n(this, void 0, void 0, function () {
                    var r;
                    return o(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return r = this.prepareVideoElement(e), this.addVideoSource(r, t), this.videoElement = r, this.stream = t, [4, this.playVideoOnLoadAsync(r)];
                            case 1:
                                return n.sent(), [2, r]
                        }
                    })
                })
            }, p.prototype.playVideoOnLoadAsync = function (t) {
                var e = this;
                return new Promise(function (r, n) {
                    return e.playVideoOnLoad(t, function () {
                        return r()
                    })
                })
            }, p.prototype.playVideoOnLoad = function (t, e) {
                var r = this;
                this.videoEndedListener = function () {
                    return r.stopStreams()
                }, this.videoCanPlayListener = function () {
                    return r.tryPlayVideo(t)
                }, t.addEventListener("ended", this.videoEndedListener), t.addEventListener("canplay", this.videoCanPlayListener), t.addEventListener("playing", e), this.tryPlayVideo(t)
            }, p.prototype.isVideoPlaying = function (t) {
                return 0 < t.currentTime && !t.paused && !t.ended && 2 < t.readyState
            }, p.prototype.tryPlayVideo = function (t) {
                return n(this, void 0, void 0, function () {
                    return o(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (this.isVideoPlaying(t)) return console.warn("Trying to play video that is already playing."), [2];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, t.play()];
                            case 2:
                                return e.sent(), [3, 4];
                            case 3:
                                return e.sent(), console.warn("It was not possible to play the video."), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, p.prototype.getMediaElement = function (t, e) {
                var r = document.getElementById(t);
                if (!r) throw new a.default("element with id '" + t + "' not found");
                if (r.nodeName.toLowerCase() !== e.toLowerCase()) throw new a.default("element with id '" + t + "' must be an " + e + " element");
                return r
            }, p.prototype.decodeFromImage = function (t, e) {
                if (!t && !e) throw new a.default("either imageElement with a src set or an url must be provided");
                return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t)
            }, p.prototype.decodeFromVideo = function (t, e) {
                if (!t && !e) throw new a.default("Either an element with a src set or an URL must be provided");
                return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t)
            }, p.prototype.decodeFromVideoContinuously = function (t, e, r) {
                if (void 0 === t && void 0 === e) throw new a.default("Either an element with a src set or an URL must be provided");
                return e && !t ? this.decodeFromVideoUrlContinuously(e, r) : this.decodeFromVideoElementContinuously(t, r)
            }, p.prototype.decodeFromImageElement = function (t) {
                if (!t) throw new a.default("An image element must be provided.");
                this.reset();
                var e = this.prepareImageElement(t);
                return this.imageElement = e, this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e)
            }, p.prototype.decodeFromVideoElement = function (t) {
                var e = this._decodeFromVideoElementSetup(t);
                return this._decodeOnLoadVideo(e)
            }, p.prototype.decodeFromVideoElementContinuously = function (t, e) {
                var r = this._decodeFromVideoElementSetup(t);
                return this._decodeOnLoadVideoContinuously(r, e)
            }, p.prototype._decodeFromVideoElementSetup = function (t) {
                if (!t) throw new a.default("A video element must be provided.");
                this.reset();
                var e = this.prepareVideoElement(t);
                return this.videoElement = e
            }, p.prototype.decodeFromImageUrl = function (t) {
                if (!t) throw new a.default("An URL must be provided.");
                this.reset();
                var e = this.prepareImageElement();
                this.imageElement = e;
                var r = this._decodeOnLoadImage(e);
                return e.src = t, r
            }, p.prototype.decodeFromVideoUrl = function (t) {
                if (!t) throw new a.default("An URL must be provided.");
                this.reset();
                var e = this.prepareVideoElement(),
                    r = this.decodeFromVideoElement(e);
                return e.src = t, r
            }, p.prototype.decodeFromVideoUrlContinuously = function (t, e) {
                if (!t) throw new a.default("An URL must be provided.");
                this.reset();
                var r = this.prepareVideoElement(),
                    n = this.decodeFromVideoElementContinuously(r, e);
                return r.src = t, n
            }, p.prototype._decodeOnLoadImage = function (t) {
                var e = this;
                return new Promise(function (r, n) {
                    e.imageLoadedListener = function () {
                        return e.decodeOnce(t, !1, !0).then(r, n)
                    }, t.addEventListener("load", e.imageLoadedListener)
                })
            }, p.prototype._decodeOnLoadVideo = function (t) {
                return n(this, void 0, void 0, function () {
                    return o(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.playVideoOnLoadAsync(t)];
                            case 1:
                                return e.sent(), [4, this.decodeOnce(t)];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }, p.prototype._decodeOnLoadVideoContinuously = function (t, e) {
                return n(this, void 0, void 0, function () {
                    return o(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.playVideoOnLoadAsync(t)];
                            case 1:
                                return r.sent(), this.decodeContinuously(t, e), [2]
                        }
                    })
                })
            }, p.prototype.isImageLoaded = function (t) {
                return !!t.complete && 0 !== t.naturalWidth
            }, p.prototype.prepareImageElement = function (t) {
                var e;
                return void 0 === t && ((e = document.createElement("img")).width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(t, "img")), t instanceof HTMLImageElement && (e = t), e
            }, p.prototype.prepareVideoElement = function (t) {
                var e;
                return t || "undefined" == typeof document || ((e = document.createElement("video")).width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(t, "video")), t instanceof HTMLVideoElement && (e = t), e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e
            }, p.prototype.decodeOnce = function (t, e, r) {
                var n = this;
                void 0 === e && (e = !0), void 0 === r && (r = !0), this._stopAsyncDecode = !1;
                var o = function (a, i) {
                    if (n._stopAsyncDecode) return i(new d.default("Video stream has ended before any code could be detected.")), void(n._stopAsyncDecode = void 0);
                    try {
                        var s = n.decode(t);
                        a(s)
                    } catch (s) {
                        var l = e && s instanceof d.default,
                            c = s instanceof u.default || s instanceof f.default;
                        if (l || c && r) return setTimeout(function () {
                            return o(a, i)
                        }, n._timeBetweenDecodingAttempts);
                        i(s)
                    }
                };
                return new Promise(function (t, e) {
                    return o(t, e)
                })
            }, p.prototype.decodeContinuously = function (t, e) {
                var r = this;
                this._stopContinuousDecode = !1;
                var n = function () {
                    if (r._stopContinuousDecode) r._stopContinuousDecode = void 0;
                    else try {
                        var o = r.decode(t);
                        e(o, null), setTimeout(function () {
                            return n()
                        }, r.timeBetweenScansMillis)
                    } catch (o) {
                        e(null, o);
                        var a = o instanceof u.default || o instanceof f.default,
                            i = o instanceof d.default;
                        (a || i) && setTimeout(function () {
                            return n()
                        }, r._timeBetweenDecodingAttempts)
                    }
                };
                n()
            }, p.prototype.decode = function (t) {
                var e = this.createBinaryBitmap(t);
                return this.decodeBitmap(e)
            }, p.prototype.createBinaryBitmap = function (t) {
                var e = this.getCaptureCanvasContext(t);
                this.drawImageOnCanvas(e, t);
                var r = this.getCaptureCanvas(t),
                    n = new l.HTMLCanvasElementLuminanceSource(r),
                    o = new s.default(n);
                return new i.default(o)
            }, p.prototype.getCaptureCanvasContext = function (t) {
                if (!this.captureCanvasContext) {
                    var e = this.getCaptureCanvas(t).getContext("2d");
                    this.captureCanvasContext = e
                }
                return this.captureCanvasContext
            }, p.prototype.getCaptureCanvas = function (t) {
                if (!this.captureCanvas) {
                    var e = this.createCaptureCanvas(t);
                    this.captureCanvas = e
                }
                return this.captureCanvas
            }, p.prototype.drawImageOnCanvas = function (t, e) {
                t.drawImage(e, 0, 0)
            }, p.prototype.decodeBitmap = function (t) {
                return this.reader.decode(t, this._hints)
            }, p.prototype.createCaptureCanvas = function (t) {
                if ("undefined" == typeof document) return this._destroyCaptureCanvas(), null;
                var e, r, n = document.createElement("canvas");
                return void 0 !== t && (t instanceof HTMLVideoElement ? (e = t.videoWidth, r = t.videoHeight) : t instanceof HTMLImageElement && (e = t.naturalWidth || t.width, r = t.naturalHeight || t.height)), n.style.width = e + "px", n.style.height = r + "px", n.width = e, n.height = r, n
            }, p.prototype.stopStreams = function () {
                this.stream && (this.stream.getVideoTracks().forEach(function (t) {
                    return t.stop()
                }), this.stream = void 0), !1 === this._stopAsyncDecode && this.stopAsyncDecode(), !1 === this._stopContinuousDecode && this.stopContinuousDecode()
            }, p.prototype.reset = function () {
                this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas()
            }, p.prototype._destroyVideoElement = function () {
                this.videoElement && (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener("ended", this.videoEndedListener), void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0)
            }, p.prototype._destroyImageElement = function () {
                this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0)
            }, p.prototype._destroyCaptureCanvas = function () {
                this.captureCanvasContext = void 0, this.captureCanvas = void 0
            }, p.prototype.addVideoSource = function (t, e) {
                try {
                    t.srcObject = e
                } catch (r) {
                    t.src = URL.createObjectURL(e)
                }
            }, p.prototype.cleanVideoSource = function (t) {
                try {
                    t.srcObject = null
                } catch (e) {
                    t.src = ""
                }
                this.videoElement.removeAttribute("src")
            }, p);

        function p(t, e, r) {
            void 0 === e && (e = 500), this.reader = t, this.timeBetweenScansMillis = e, this._hints = r, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0
        }
        e.BrowserCodeReader = h
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(19),
            u = (o(s, a = i.default), s.prototype.getRow = function (t, e) {
                for (var r = this.delegate.getRow(t, e), n = this.getWidth(), o = 0; o < n; o++) r[o] = 255 - (255 & r[o]);
                return r
            }, s.prototype.getMatrix = function () {
                for (var t = this.delegate.getMatrix(), e = this.getWidth() * this.getHeight(), r = new Uint8ClampedArray(e), n = 0; n < e; n++) r[n] = 255 - (255 & t[n]);
                return r
            }, s.prototype.isCropSupported = function () {
                return this.delegate.isCropSupported()
            }, s.prototype.crop = function (t, e, r, n) {
                return new s(this.delegate.crop(t, e, r, n))
            }, s.prototype.isRotateSupported = function () {
                return this.delegate.isRotateSupported()
            }, s.prototype.invert = function () {
                return this.delegate
            }, s.prototype.rotateCounterClockwise = function () {
                return new s(this.delegate.rotateCounterClockwise())
            }, s.prototype.rotateCounterClockwise45 = function () {
                return new s(this.delegate.rotateCounterClockwise45())
            }, s);

        function s(t) {
            var e = a.call(this, t.getWidth(), t.getHeight()) || this;
            return e.delegate = t, e
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(11),
            o = r(29),
            a = (i.prototype.getWidth = function () {
                return this.width
            }, i.prototype.getHeight = function () {
                return this.height
            }, i.prototype.isCropSupported = function () {
                return !1
            }, i.prototype.crop = function (t, e, r, n) {
                throw new o.default("This luminance source does not support cropping.")
            }, i.prototype.isRotateSupported = function () {
                return !1
            }, i.prototype.rotateCounterClockwise = function () {
                throw new o.default("This luminance source does not support rotation by 90 degrees.")
            }, i.prototype.rotateCounterClockwise45 = function () {
                throw new o.default("This luminance source does not support rotation by 45 degrees.")
            }, i.prototype.toString = function () {
                for (var t = new Uint8ClampedArray(this.width), e = new n.default, r = 0; r < this.height; r++) {
                    for (var o = this.getRow(r, t), a = 0; a < this.width; a++) {
                        var i, u = 255 & o[a];
                        i = u < 64 ? "#" : u < 128 ? "+" : u < 192 ? "." : " ", e.append(i)
                    }
                    e.append("\n")
                }
                return e.toString()
            }, i);

        function i(t, e) {
            this.width = t, this.height = e
        }
        e.default = a
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(2),
            u = r(4),
            s = r(9),
            f = r(13),
            d = r(3),
            l = r(10),
            c = r(80),
            h = r(0),
            p = r(5),
            w = r(12),
            g = (o(v, a = l.default), v.findStartGuardPattern = function (t) {
                for (var e = !1, r = null, n = 0, o = [0, 0, 0]; !e;) {
                    var a = (r = v.findGuardPattern(t, n, !(o = [0, 0, 0]), this.START_END_PATTERN, o))[0],
                        i = a - ((n = r[1]) - a);
                    0 <= i && (e = t.isRange(i, a, !1))
                }
                return r
            }, v.prototype.decodeRow = function (t, e, r) {
                var n = v.findStartGuardPattern(e),
                    o = null == r ? null : r.get(u.default.NEED_RESULT_POINT_CALLBACK);
                if (null != o) {
                    var a = new d.default((n[0] + n[1]) / 2, t);
                    o.foundPossibleResultPoint(a)
                }
                var l = this.decodeMiddle(e, n, this.decodeRowStringBuffer),
                    g = l.rowOffset,
                    _ = l.resultString;
                if (null != o) {
                    var y = new d.default(g, t);
                    o.foundPossibleResultPoint(y)
                }
                var C = v.decodeEnd(e, g);
                if (null != o) {
                    var A = new d.default((C[0] + C[1]) / 2, t);
                    o.foundPossibleResultPoint(A)
                }
                var m = C[1],
                    E = m + (m - C[0]);
                if (E >= e.getSize() || !e.isRange(m, E, !1)) throw new h.default;
                var S = _.toString();
                if (S.length < 8) throw new p.default;
                if (!v.checkChecksum(S)) throw new w.default;
                var I = (n[1] + n[0]) / 2,
                    O = (C[1] + C[0]) / 2,
                    b = this.getBarcodeFormat(),
                    T = [new d.default(I, t), new d.default(O, t)],
                    M = new s.default(S, null, 0, T, b, (new Date).getTime()),
                    N = 0;
                try {
                    var R = c.default.decodeRow(t, e, C[1]);
                    M.putMetadata(f.default.UPC_EAN_EXTENSION, R.getText()), M.putAllMetadata(R.getResultMetadata()), M.addResultPoints(R.getResultPoints()), N = R.getText().length
                } catch (t) {}
                var P = null == r ? null : r.get(u.default.ALLOWED_EAN_EXTENSIONS);
                if (null != P) {
                    var D = !1;
                    for (var B in P)
                        if (N.toString() === B) {
                            D = !0;
                            break
                        } if (!D) throw new h.default
                }
                return b === i.default.EAN_13 || i.default.UPC_A, M
            }, v.checkChecksum = function (t) {
                return v.checkStandardUPCEANChecksum(t)
            }, v.checkStandardUPCEANChecksum = function (t) {
                var e = t.length;
                if (0 === e) return !1;
                var r = parseInt(t.charAt(e - 1), 10);
                return v.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r
            }, v.getStandardUPCEANChecksum = function (t) {
                for (var e = t.length, r = 0, n = e - 1; 0 <= n; n -= 2) {
                    if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || 9 < o) throw new p.default;
                    r += o
                }
                for (r *= 3, n = e - 2; 0 <= n; n -= 2) {
                    var o;
                    if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || 9 < o) throw new p.default;
                    r += o
                }
                return (1e3 - r) % 10
            }, v.decodeEnd = function (t, e) {
                return v.findGuardPattern(t, e, !1, v.START_END_PATTERN, new Array(v.START_END_PATTERN.length).fill(0))
            }, v.findGuardPattern = function (t, e, r, n, o) {
                for (var a = t.getSize(), i = 0, u = e = r ? t.getNextUnset(e) : t.getNextSet(e), s = n.length, f = r, d = e; d < a; d++)
                    if (t.get(d) !== f) o[i]++;
                    else {
                        if (i === s - 1) {
                            if (l.default.patternMatchVariance(o, n, v.MAX_INDIVIDUAL_VARIANCE) < v.MAX_AVG_VARIANCE) return [u, d];
                            u += o[0] + o[1];
                            for (var c = o.slice(2, o.length), p = 0; p < i - 1; p++) o[p] = c[p];
                            o[i - 1] = 0, o[i] = 0, i--
                        } else i++;
                        o[i] = 1, f = !f
                    } throw new h.default
            }, v.decodeDigit = function (t, e, r, n) {
                this.recordPattern(t, r, e);
                for (var o = this.MAX_AVG_VARIANCE, a = -1, i = n.length, u = 0; u < i; u++) {
                    var s = n[u],
                        f = l.default.patternMatchVariance(e, s, v.MAX_INDIVIDUAL_VARIANCE);
                    f < o && (o = f, a = u)
                }
                if (0 <= a) return a;
                throw new h.default
            }, v.MAX_AVG_VARIANCE = .48, v.MAX_INDIVIDUAL_VARIANCE = .7, v.START_END_PATTERN = [1, 1, 1], v.MIDDLE_PATTERN = [1, 1, 1, 1, 1], v.END_PATTERN = [1, 1, 1, 1, 1, 1], v.L_PATTERNS = [
                [3, 2, 1, 1],
                [2, 2, 2, 1],
                [2, 1, 2, 2],
                [1, 4, 1, 1],
                [1, 1, 3, 2],
                [1, 2, 3, 1],
                [1, 1, 1, 4],
                [1, 3, 1, 2],
                [1, 2, 1, 3],
                [3, 1, 1, 2]
            ], v);

        function v() {
            var t = a.call(this) || this;
            t.decodeRowStringBuffer = "", t.decodeRowStringBuffer = "", v.L_AND_G_PATTERNS = v.L_PATTERNS.map(function (t) {
                return t.slice()
            });
            for (var e = 10; e < 20; e++) {
                for (var r = v.L_PATTERNS[e - 10], n = new Array(r.length), o = 0; o < r.length; o++) n[o] = r[r.length - o - 1];
                v.L_AND_G_PATTERNS[e] = n
            }
            return t
        }
        e.default = g
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, a = r(5);
        (o = n = e.CharacterSetValueIdentifiers || (e.CharacterSetValueIdentifiers = {}))[o.Cp437 = 0] = "Cp437", o[o.ISO8859_1 = 1] = "ISO8859_1", o[o.ISO8859_2 = 2] = "ISO8859_2", o[o.ISO8859_3 = 3] = "ISO8859_3", o[o.ISO8859_4 = 4] = "ISO8859_4", o[o.ISO8859_5 = 5] = "ISO8859_5", o[o.ISO8859_6 = 6] = "ISO8859_6", o[o.ISO8859_7 = 7] = "ISO8859_7", o[o.ISO8859_8 = 8] = "ISO8859_8", o[o.ISO8859_9 = 9] = "ISO8859_9", o[o.ISO8859_10 = 10] = "ISO8859_10", o[o.ISO8859_11 = 11] = "ISO8859_11", o[o.ISO8859_13 = 12] = "ISO8859_13", o[o.ISO8859_14 = 13] = "ISO8859_14", o[o.ISO8859_15 = 14] = "ISO8859_15", o[o.ISO8859_16 = 15] = "ISO8859_16", o[o.SJIS = 16] = "SJIS", o[o.Cp1250 = 17] = "Cp1250", o[o.Cp1251 = 18] = "Cp1251", o[o.Cp1252 = 19] = "Cp1252", o[o.Cp1256 = 20] = "Cp1256", o[o.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", o[o.UTF8 = 22] = "UTF8", o[o.ASCII = 23] = "ASCII", o[o.Big5 = 24] = "Big5", o[o.GB18030 = 25] = "GB18030", o[o.EUC_KR = 26] = "EUC_KR";
        var i = (u.prototype.getValueIdentifier = function () {
            return this.valueIdentifier
        }, u.prototype.getName = function () {
            return this.name
        }, u.prototype.getValue = function () {
            return this.values[0]
        }, u.getCharacterSetECIByValue = function (t) {
            if (t < 0 || 900 <= t) throw new a.default("incorect value");
            var e = u.VALUES_TO_ECI.get(t);
            if (void 0 === e) throw new a.default("incorect value");
            return e
        }, u.getCharacterSetECIByName = function (t) {
            var e = u.NAME_TO_ECI.get(t);
            if (void 0 === e) throw new a.default("incorect value");
            return e
        }, u.prototype.equals = function (t) {
            if (!(t instanceof u)) return !1;
            var e = t;
            return this.getName() === e.getName()
        }, u.VALUE_IDENTIFIER_TO_ECI = new Map, u.VALUES_TO_ECI = new Map, u.NAME_TO_ECI = new Map, u.Cp437 = new u(n.Cp437, Int32Array.from([0, 2]), "Cp437"), u.ISO8859_1 = new u(n.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), u.ISO8859_2 = new u(n.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), u.ISO8859_3 = new u(n.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), u.ISO8859_4 = new u(n.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), u.ISO8859_5 = new u(n.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), u.ISO8859_6 = new u(n.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), u.ISO8859_7 = new u(n.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), u.ISO8859_8 = new u(n.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), u.ISO8859_9 = new u(n.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), u.ISO8859_10 = new u(n.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), u.ISO8859_11 = new u(n.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), u.ISO8859_13 = new u(n.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), u.ISO8859_14 = new u(n.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), u.ISO8859_15 = new u(n.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), u.ISO8859_16 = new u(n.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), u.SJIS = new u(n.SJIS, 20, "SJIS", "Shift_JIS"), u.Cp1250 = new u(n.Cp1250, 21, "Cp1250", "windows-1250"), u.Cp1251 = new u(n.Cp1251, 22, "Cp1251", "windows-1251"), u.Cp1252 = new u(n.Cp1252, 23, "Cp1252", "windows-1252"), u.Cp1256 = new u(n.Cp1256, 24, "Cp1256", "windows-1256"), u.UnicodeBigUnmarked = new u(n.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), u.UTF8 = new u(n.UTF8, 26, "UTF8", "UTF-8"), u.ASCII = new u(n.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), u.Big5 = new u(n.Big5, 28, "Big5"), u.GB18030 = new u(n.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), u.EUC_KR = new u(n.EUC_KR, 30, "EUC_KR", "EUC-KR"), u);

        function u(t, e, r) {
            for (var n = [], o = 3; o < arguments.length; o++) n[o - 3] = arguments[o];
            this.valueIdentifier = t, this.name = r, this.values = "number" == typeof e ? Int32Array.from([e]) : e, this.otherEncodingNames = n, u.VALUE_IDENTIFIER_TO_ECI.set(t, this), u.NAME_TO_ECI.set(r, this);
            for (var a = this.values, i = 0, s = a.length; i !== s; i++) {
                var f = a[i];
                u.VALUES_TO_ECI.set(f, this)
            }
            for (var d = 0, l = n; d < l.length; d++) {
                var c = l[d];
                u.NAME_TO_ECI.set(c, this)
            }
        }
        e.default = i
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.numberOfTrailingZeros = function (t) {
            var e;
            if (0 === t) return 32;
            var r = 31;
            return 0 != (e = t << 16) && (r -= 16, t = e), 0 != (e = t << 8) && (r -= 8, t = e), 0 != (e = t << 4) && (r -= 4, t = e), 0 != (e = t << 2) && (r -= 2, t = e), r - (t << 1 >>> 31)
        }, o.numberOfLeadingZeros = function (t) {
            if (0 === t) return 32;
            var e = 1;
            return t >>> 16 == 0 && (e += 16, t <<= 16), t >>> 24 == 0 && (e += 8, t <<= 8), t >>> 28 == 0 && (e += 4, t <<= 4), t >>> 30 == 0 && (e += 2, t <<= 2), e - (t >>> 31)
        }, o.toHexString = function (t) {
            return t.toString(16)
        }, o.bitCount = function (t) {
            return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135, 63 & (t += t >>> 8) + (t >>> 16)
        }, o.MIN_VALUE_32_BITS = -2147483648, o);

        function o() {}
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(16),
            o = r(7),
            a = r(1),
            i = (u.prototype.getCoefficients = function () {
                return this.coefficients
            }, u.prototype.getDegree = function () {
                return this.coefficients.length - 1
            }, u.prototype.isZero = function () {
                return 0 === this.coefficients[0]
            }, u.prototype.getCoefficient = function (t) {
                return this.coefficients[this.coefficients.length - 1 - t]
            }, u.prototype.evaluateAt = function (t) {
                if (0 === t) return this.getCoefficient(0);
                var e, r = this.coefficients;
                if (1 === t) {
                    for (var o = e = 0, a = r.length; o !== a; o++) {
                        var i = r[o];
                        e = n.default.addOrSubtract(e, i)
                    }
                    return e
                }
                e = r[0];
                var u = r.length,
                    s = this.field;
                for (o = 1; o < u; o++) e = n.default.addOrSubtract(s.multiply(t, e), r[o]);
                return e
            }, u.prototype.addOrSubtract = function (t) {
                if (!this.field.equals(t.field)) throw new a.default("GenericGFPolys do not have same GenericGF field");
                if (this.isZero()) return t;
                if (t.isZero()) return this;
                var e = this.coefficients,
                    r = t.coefficients;
                if (e.length > r.length) {
                    var i = e;
                    e = r, r = i
                }
                var s = new Int32Array(r.length),
                    f = r.length - e.length;
                o.default.arraycopy(r, 0, s, 0, f);
                for (var d = f; d < r.length; d++) s[d] = n.default.addOrSubtract(e[d - f], r[d]);
                return new u(this.field, s)
            }, u.prototype.multiply = function (t) {
                if (!this.field.equals(t.field)) throw new a.default("GenericGFPolys do not have same GenericGF field");
                if (this.isZero() || t.isZero()) return this.field.getZero();
                for (var e = this.coefficients, r = e.length, o = t.coefficients, i = o.length, s = new Int32Array(r + i - 1), f = this.field, d = 0; d < r; d++)
                    for (var l = e[d], c = 0; c < i; c++) s[d + c] = n.default.addOrSubtract(s[d + c], f.multiply(l, o[c]));
                return new u(f, s)
            }, u.prototype.multiplyScalar = function (t) {
                if (0 === t) return this.field.getZero();
                if (1 === t) return this;
                for (var e = this.coefficients.length, r = this.field, n = new Int32Array(e), o = this.coefficients, a = 0; a < e; a++) n[a] = r.multiply(o[a], t);
                return new u(r, n)
            }, u.prototype.multiplyByMonomial = function (t, e) {
                if (t < 0) throw new a.default;
                if (0 === e) return this.field.getZero();
                for (var r = this.coefficients, n = r.length, o = new Int32Array(n + t), i = this.field, s = 0; s < n; s++) o[s] = i.multiply(r[s], e);
                return new u(i, o)
            }, u.prototype.divide = function (t) {
                if (!this.field.equals(t.field)) throw new a.default("GenericGFPolys do not have same GenericGF field");
                if (t.isZero()) throw new a.default("Divide by 0");
                for (var e = this.field, r = e.getZero(), n = this, o = t.getCoefficient(t.getDegree()), i = e.inverse(o); n.getDegree() >= t.getDegree() && !n.isZero();) {
                    var u = n.getDegree() - t.getDegree(),
                        s = e.multiply(n.getCoefficient(n.getDegree()), i),
                        f = t.multiplyByMonomial(u, s),
                        d = e.buildMonomial(u, s);
                    r = r.addOrSubtract(d), n = n.addOrSubtract(f)
                }
                return [r, n]
            }, u.prototype.toString = function () {
                for (var t = "", e = this.getDegree(); 0 <= e; e--) {
                    var r = this.getCoefficient(e);
                    if (0 !== r) {
                        if (r < 0 ? (t += " - ", r = -r) : 0 < t.length && (t += " + "), 0 === e || 1 !== r) {
                            var n = this.field.log(r);
                            0 === n ? t += "1" : 1 === n ? t += "a" : (t += "a^", t += n)
                        }
                        0 !== e && (1 === e ? t += "x" : (t += "x^", t += e))
                    }
                }
                return t
            }, u);

        function u(t, e) {
            if (0 === e.length) throw new a.default;
            this.field = t;
            var r = e.length;
            if (1 < r && 0 === e[0]) {
                for (var n = 1; n < r && 0 === e[n];) n++;
                n === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - n), o.default.arraycopy(e, n, this.coefficients, 0, this.coefficients.length))
            } else this.coefficients = e
        }
        e.default = i
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, a = r(27),
            i = r(1);
        (o = n = e.ErrorCorrectionLevelValues || (e.ErrorCorrectionLevelValues = {}))[o.L = 0] = "L", o[o.M = 1] = "M", o[o.Q = 2] = "Q", o[o.H = 3] = "H";
        var u = (s.prototype.getValue = function () {
            return this.value
        }, s.prototype.getBits = function () {
            return this.bits
        }, s.fromString = function (t) {
            switch (t) {
                case "L":
                    return s.L;
                case "M":
                    return s.M;
                case "Q":
                    return s.Q;
                case "H":
                    return s.H;
                default:
                    throw new a.default(t + "not available")
            }
        }, s.prototype.toString = function () {
            return this.stringValue
        }, s.prototype.equals = function (t) {
            if (!(t instanceof s)) return !1;
            var e = t;
            return this.value === e.value
        }, s.forBits = function (t) {
            if (t < 0 || t >= s.FOR_BITS.size) throw new i.default;
            return s.FOR_BITS.get(t)
        }, s.FOR_BITS = new Map, s.FOR_VALUE = new Map, s.L = new s(n.L, "L", 1), s.M = new s(n.M, "M", 0), s.Q = new s(n.Q, "Q", 3), s.H = new s(n.H, "H", 2), s);

        function s(t, e, r) {
            this.value = t, this.stringValue = e, this.bits = r, s.FOR_BITS.set(r, this), s.FOR_VALUE.set(t, this)
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n = n || {})[o.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", o[o.CHARACTER_SET = 1] = "CHARACTER_SET", o[o.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", o[o.MIN_SIZE = 3] = "MIN_SIZE", o[o.MAX_SIZE = 4] = "MAX_SIZE", o[o.MARGIN = 5] = "MARGIN", o[o.PDF417_COMPACT = 6] = "PDF417_COMPACT", o[o.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", o[o.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", o[o.AZTEC_LAYERS = 9] = "AZTEC_LAYERS", o[o.QR_VERSION = 10] = "QR_VERSION", e.default = n
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(7),
            o = (a.equals = function (t, e) {
                if (!t) return !1;
                if (!e) return !1;
                if (!t.length) return !1;
                if (!e.length) return !1;
                if (t.length !== e.length) return !1;
                for (var r = 0, n = t.length; r < n; r++)
                    if (t[r] !== e[r]) return !1;
                return !0
            }, a.hashCode = function (t) {
                if (null === t) return 0;
                for (var e = 1, r = 0, n = t; r < n.length; r++) e = 31 * e + n[r];
                return e
            }, a.fillUint8Array = function (t, e) {
                for (var r = 0; r !== t.length; r++) t[r] = e
            }, a.copyOf = function (t, e) {
                var r = new Int32Array(e);
                return n.default.arraycopy(t, 0, r, 0, Math.min(t.length, e)), r
            }, a.binarySearch = function (t, e, r) {
                void 0 === r && (r = a.numberComparator);
                for (var n = 0, o = t.length - 1; n <= o;) {
                    var i = o + n >> 1,
                        u = r(e, t[i]);
                    if (0 < u) n = 1 + i;
                    else {
                        if (!(u < 0)) return i;
                        o = i - 1
                    }
                }
                return -n - 1
            }, a.numberComparator = function (t, e) {
                return t - e
            }, a);

        function a() {}
        e.default = o
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(2),
            u = r(51),
            s = r(52),
            f = r(53),
            d = r(4),
            l = r(55),
            c = r(79),
            h = r(0),
            p = r(10),
            w = (o(g, a = p.default), g.prototype.decodeRow = function (t, e, r) {
                for (var n = 0; n < this.readers.length; n++) try {
                    return this.readers[n].decodeRow(t, e, r)
                } catch (t) {}
                throw new h.default
            }, g.prototype.reset = function () {
                this.readers.forEach(function (t) {
                    return t.reset()
                })
            }, g);

        function g(t) {
            var e = a.call(this) || this;
            e.readers = [];
            var r = t ? t.get(d.default.POSSIBLE_FORMATS) : null,
                n = t && void 0 !== t.get(d.default.ASSUME_CODE_39_CHECK_DIGIT);
            return r && ((r.includes(i.default.EAN_13) || r.includes(i.default.EAN_8)) && e.readers.push(new c.default(t)), r.includes(i.default.CODE_39) && e.readers.push(new u.default(n)), r.includes(i.default.CODE_128) && e.readers.push(new s.default), r.includes(i.default.ITF) && e.readers.push(new l.default), r.includes(i.default.RSS_14) && e.readers.push(new f.default)), 0 === e.readers.length && (e.readers.push(new u.default), e.readers.push(new c.default(t)), e.readers.push(new s.default), e.readers.push(new l.default), e.readers.push(new f.default)), e
        }
        e.default = w
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(85),
            o = r(9),
            a = r(2),
            i = r(4),
            u = r(13),
            s = r(8),
            f = r(90),
            d = r(7),
            l = r(0),
            c = (h.prototype.decode = function (t, e) {
                var r, n;
                if (void 0 === e && (e = null), null != e && e.has(i.default.PURE_BARCODE)) {
                    var s = h.extractPureBits(t.getBlackMatrix());
                    r = this.decoder.decode(s), n = h.NO_POINTS
                } else {
                    var l = new f.default(t.getBlackMatrix()).detect();
                    r = this.decoder.decode(l.getBits()), n = l.getPoints()
                }
                var c = r.getRawBytes(),
                    p = new o.default(r.getText(), c, 8 * c.length, n, a.default.DATA_MATRIX, d.default.currentTimeMillis()),
                    w = r.getByteSegments();
                null != w && p.putMetadata(u.default.BYTE_SEGMENTS, w);
                var g = r.getECLevel();
                return null != g && p.putMetadata(u.default.ERROR_CORRECTION_LEVEL, g), p
            }, h.prototype.reset = function () {}, h.extractPureBits = function (t) {
                var e = t.getTopLeftOnBit(),
                    r = t.getBottomRightOnBit();
                if (null == e || null == r) throw new l.default;
                var n = this.moduleSize(e, t),
                    o = e[1],
                    a = r[1],
                    i = e[0],
                    u = (r[0] - i + 1) / n,
                    f = (a - o + 1) / n;
                if (u <= 0 || f <= 0) throw new l.default;
                var d = n / 2;
                o += d, i += d;
                for (var c = new s.default(u, f), h = 0; h < f; h++)
                    for (var p = o + h * n, w = 0; w < u; w++) t.get(i + w * n, p) && c.set(w, h);
                return c
            }, h.moduleSize = function (t, e) {
                for (var r = e.getWidth(), n = t[0], o = t[1]; n < r && e.get(n, o);) n++;
                if (n === r) throw new l.default;
                var a = n - t[0];
                if (0 == a) throw new l.default;
                return a
            }, h.NO_POINTS = [], h);

        function h() {
            this.decoder = new n.default
        }
        e.default = c
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(16),
            o = r(24),
            a = r(58),
            i = r(21),
            u = (s.prototype.decode = function (t, e) {
                for (var r = this.field, i = new o.default(r, t), u = new Int32Array(e), s = !0, f = 0; f < e; f++) {
                    var d = i.evaluateAt(r.exp(f + r.getGeneratorBase()));
                    0 !== (u[u.length - 1 - f] = d) && (s = !1)
                }
                if (!s) {
                    var l = new o.default(r, u),
                        c = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), l, e),
                        h = c[0],
                        p = c[1],
                        w = this.findErrorLocations(h),
                        g = this.findErrorMagnitudes(p, w);
                    for (f = 0; f < w.length; f++) {
                        var v = t.length - 1 - r.log(w[f]);
                        if (v < 0) throw new a.default("Bad error location");
                        t[v] = n.default.addOrSubtract(t[v], g[f])
                    }
                }
            }, s.prototype.runEuclideanAlgorithm = function (t, e, r) {
                if (t.getDegree() < e.getDegree()) {
                    var n = t;
                    t = e, e = n
                }
                for (var o = this.field, u = t, s = e, f = o.getZero(), d = o.getOne(); s.getDegree() >= (r / 2 | 0);) {
                    var l = u,
                        c = f;
                    if (f = d, (u = s).isZero()) throw new a.default("r_{i-1} was zero");
                    s = l;
                    for (var h = o.getZero(), p = u.getCoefficient(u.getDegree()), w = o.inverse(p); s.getDegree() >= u.getDegree() && !s.isZero();) {
                        var g = s.getDegree() - u.getDegree(),
                            v = o.multiply(s.getCoefficient(s.getDegree()), w);
                        h = h.addOrSubtract(o.buildMonomial(g, v)), s = s.addOrSubtract(u.multiplyByMonomial(g, v))
                    }
                    if (d = h.multiply(f).addOrSubtract(c), s.getDegree() >= u.getDegree()) throw new i.default("Division algorithm failed to reduce polynomial?")
                }
                var _ = d.getCoefficient(0);
                if (0 === _) throw new a.default("sigmaTilde(0) was zero");
                var y = o.inverse(_);
                return [d.multiplyScalar(y), s.multiplyScalar(y)]
            }, s.prototype.findErrorLocations = function (t) {
                var e = t.getDegree();
                if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
                for (var r = new Int32Array(e), n = 0, o = this.field, i = 1; i < o.getSize() && n < e; i++) 0 === t.evaluateAt(i) && (r[n] = o.inverse(i), n++);
                if (n !== e) throw new a.default("Error locator degree does not match number of roots");
                return r
            }, s.prototype.findErrorMagnitudes = function (t, e) {
                for (var r = e.length, n = new Int32Array(r), o = this.field, a = 0; a < r; a++) {
                    for (var i = o.inverse(e[a]), u = 1, s = 0; s < r; s++)
                        if (a !== s) {
                            var f = o.multiply(e[s], i),
                                d = 0 == (1 & f) ? 1 | f : -2 & f;
                            u = o.multiply(u, d)
                        } n[a] = o.multiply(t.evaluateAt(i), o.inverse(u)), 0 !== o.getGeneratorBase() && (n[a] = o.multiply(n[a], i))
                }
                return n
            }, s);

        function s(t) {
            this.field = t
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.getRawBytes = function () {
            return this.rawBytes
        }, o.prototype.getNumBits = function () {
            return this.numBits
        }, o.prototype.setNumBits = function (t) {
            this.numBits = t
        }, o.prototype.getText = function () {
            return this.text
        }, o.prototype.getByteSegments = function () {
            return this.byteSegments
        }, o.prototype.getECLevel = function () {
            return this.ecLevel
        }, o.prototype.getErrorsCorrected = function () {
            return this.errorsCorrected
        }, o.prototype.setErrorsCorrected = function (t) {
            this.errorsCorrected = t
        }, o.prototype.getErasures = function () {
            return this.erasures
        }, o.prototype.setErasures = function (t) {
            this.erasures = t
        }, o.prototype.getOther = function () {
            return this.other
        }, o.prototype.setOther = function (t) {
            this.other = t
        }, o.prototype.hasStructuredAppend = function () {
            return 0 <= this.structuredAppendParity && 0 <= this.structuredAppendSequenceNumber
        }, o.prototype.getStructuredAppendParity = function () {
            return this.structuredAppendParity
        }, o.prototype.getStructuredAppendSequenceNumber = function () {
            return this.structuredAppendSequenceNumber
        }, o);

        function o(t, e, r, n, o, a) {
            void 0 === o && (o = -1), void 0 === a && (a = -1), this.rawBytes = t, this.text = e, this.byteSegments = r, this.ecLevel = n, this.structuredAppendSequenceNumber = o, this.structuredAppendParity = a, this.numBits = null == t ? 0 : 8 * t.length
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = (a.prototype.getBitOffset = function () {
                return this.bitOffset
            }, a.prototype.getByteOffset = function () {
                return this.byteOffset
            }, a.prototype.readBits = function (t) {
                if (t < 1 || 32 < t || t > this.available()) throw new n.default("" + t);
                var e = 0,
                    r = this.bitOffset,
                    o = this.byteOffset,
                    a = this.bytes;
                if (0 < r) {
                    var i = 8 - r,
                        u = t < i ? t : i,
                        s = 255 >> 8 - u << (f = i - u);
                    e = (a[o] & s) >> f, t -= u, 8 === (r += u) && (r = 0, o++)
                }
                if (0 < t) {
                    for (; 8 <= t;) e = e << 8 | 255 & a[o], o++, t -= 8;
                    var f;
                    0 < t && (s = 255 >> (f = 8 - t) << f, e = e << t | (a[o] & s) >> f, r += t)
                }
                return this.bitOffset = r, this.byteOffset = o, e
            }, a.prototype.available = function () {
                return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
            }, a);

        function a(t) {
            this.bytes = t, this.byteOffset = 0, this.bitOffset = 0
        }
        e.default = o
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(29),
            o = r(22),
            a = (i.decode = function (t, e) {
                var r = this.encodingName(e);
                return "undefined" == typeof TextDecoder ? this.decodeFallback(t, r) : new TextDecoder(r).decode(t)
            }, i.encode = function (t, e) {
                return i.isBrowser() ? "undefined" == typeof TextEncoder ? this.encodeFallback(t) : (new TextEncoder).encode(t) : new TextEncoder(this.encodingName(e), {
                    NONSTANDARD_allowLegacyEncoding: !0
                }).encode(t)
            }, i.isBrowser = function () {
                return "undefined" != typeof window && "[object Window]" === {}.toString.call(window)
            }, i.encodingName = function (t) {
                return "string" == typeof t ? t : t.getName()
            }, i.encodingCharacterSet = function (t) {
                return o.default.getCharacterSetECIByName(this.encodingName(t))
            }, i.decodeFallback = function (t, e) {
                var r = this.encodingCharacterSet(e);
                if (r.equals(o.default.UTF8) || r.equals(o.default.ISO8859_1) || r.equals(o.default.ASCII)) {
                    for (var a = "", i = 0, u = t.length; i < u; i++) {
                        var s = t[i].toString(16);
                        s.length < 2 && (s = "0" + s), a += "%" + s
                    }
                    return decodeURIComponent(a)
                }
                if (r.equals(o.default.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
                throw new n.default("Encoding " + this.encodingName(e) + " not supported by fallback.")
            }, i.encodeFallback = function (t) {
                for (var e = btoa(unescape(encodeURIComponent(t))).split(""), r = [], n = 0; n < e.length; n++) r.push(e[n].charCodeAt(0));
                return new Uint8Array(r)
            }, i);

        function i() {}
        e.default = a
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.getBits = function () {
            return this.bits
        }, o.prototype.getPoints = function () {
            return this.points
        }, o);

        function o(t, e) {
            this.bits = t, this.points = e
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(59),
            o = (a.setGridSampler = function (t) {
                a.gridSampler = t
            }, a.getInstance = function () {
                return a.gridSampler
            }, a.gridSampler = new n.default, a);

        function a() {}
        e.default = o
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.quadrilateralToQuadrilateral = function (t, e, r, n, a, i, u, s, f, d, l, c, h, p, w, g) {
            var v = o.quadrilateralToSquare(t, e, r, n, a, i, u, s);
            return o.squareToQuadrilateral(f, d, l, c, h, p, w, g).times(v)
        }, o.prototype.transformPoints = function (t) {
            for (var e = t.length, r = this.a11, n = this.a12, o = this.a13, a = this.a21, i = this.a22, u = this.a23, s = this.a31, f = this.a32, d = this.a33, l = 0; l < e; l += 2) {
                var c = t[l],
                    h = t[l + 1],
                    p = o * c + u * h + d;
                t[l] = (r * c + a * h + s) / p, t[l + 1] = (n * c + i * h + f) / p
            }
        }, o.prototype.transformPointsWithValues = function (t, e) {
            for (var r = this.a11, n = this.a12, o = this.a13, a = this.a21, i = this.a22, u = this.a23, s = this.a31, f = this.a32, d = this.a33, l = t.length, c = 0; c < l; c++) {
                var h = t[c],
                    p = e[c],
                    w = o * h + u * p + d;
                t[c] = (r * h + a * p + s) / w, e[c] = (n * h + i * p + f) / w
            }
        }, o.squareToQuadrilateral = function (t, e, r, n, a, i, u, s) {
            var f = t - r + a - u,
                d = e - n + i - s;
            if (0 == f && 0 == d) return new o(r - t, a - r, t, n - e, i - n, e, 0, 0, 1);
            var l = r - a,
                c = u - a,
                h = n - i,
                p = s - i,
                w = l * p - c * h,
                g = (f * p - c * d) / w,
                v = (l * d - f * h) / w;
            return new o(r - t + g * r, u - t + v * u, t, n - e + g * n, s - e + v * s, e, g, v, 1)
        }, o.quadrilateralToSquare = function (t, e, r, n, a, i, u, s) {
            return o.squareToQuadrilateral(t, e, r, n, a, i, u, s).buildAdjoint()
        }, o.prototype.buildAdjoint = function () {
            return new o(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
        }, o.prototype.times = function (t) {
            return new o(this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13, this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23, this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33, this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13, this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23, this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33, this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13, this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23, this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33)
        }, o);

        function o(t, e, r, n, o, a, i, u, s) {
            this.a11 = t, this.a21 = e, this.a31 = r, this.a12 = n, this.a22 = o, this.a32 = a, this.a13 = i, this.a23 = u, this.a33 = s
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = r(4),
            a = r(9),
            i = r(13),
            u = r(8),
            s = r(92),
            f = r(64),
            d = r(99),
            l = r(0),
            c = (h.prototype.getDecoder = function () {
                return this.decoder
            }, h.prototype.decode = function (t, e) {
                var r, u;
                if (null != e && void 0 !== e.get(o.default.PURE_BARCODE)) {
                    var s = h.extractPureBits(t.getBlackMatrix());
                    r = this.decoder.decodeBitMatrix(s, e), u = h.NO_POINTS
                } else {
                    var l = new d.default(t.getBlackMatrix()).detect(e);
                    r = this.decoder.decodeBitMatrix(l.getBits(), e), u = l.getPoints()
                }
                r.getOther() instanceof f.default && r.getOther().applyMirroredCorrection(u);
                var c = new a.default(r.getText(), r.getRawBytes(), void 0, u, n.default.QR_CODE, void 0),
                    p = r.getByteSegments();
                null !== p && c.putMetadata(i.default.BYTE_SEGMENTS, p);
                var w = r.getECLevel();
                return null !== w && c.putMetadata(i.default.ERROR_CORRECTION_LEVEL, w), r.hasStructuredAppend() && (c.putMetadata(i.default.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()), c.putMetadata(i.default.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())), c
            }, h.prototype.reset = function () {}, h.extractPureBits = function (t) {
                var e = t.getTopLeftOnBit(),
                    r = t.getBottomRightOnBit();
                if (null === e || null === r) throw new l.default;
                var n = this.moduleSize(e, t),
                    o = e[1],
                    a = r[1],
                    i = e[0],
                    s = r[0];
                if (s <= i || a <= o) throw new l.default;
                if (a - o != s - i && (s = i + (a - o)) >= t.getWidth()) throw new l.default;
                var f = Math.round((s - i + 1) / n),
                    d = Math.round((a - o + 1) / n);
                if (f <= 0 || d <= 0) throw new l.default;
                if (d !== f) throw new l.default;
                var c = Math.floor(n / 2);
                o += c;
                var h = (i += c) + Math.floor((f - 1) * n) - s;
                if (0 < h) {
                    if (c < h) throw new l.default;
                    i -= h
                }
                var p = o + Math.floor((d - 1) * n) - a;
                if (0 < p) {
                    if (c < p) throw new l.default;
                    o -= p
                }
                for (var w = new u.default(f, d), g = 0; g < d; g++)
                    for (var v = o + Math.floor(g * n), _ = 0; _ < f; _++) t.get(i + Math.floor(_ * n), v) && w.set(_, g);
                return w
            }, h.moduleSize = function (t, e) {
                for (var r = e.getHeight(), n = e.getWidth(), o = t[0], a = t[1], i = !0, u = 0; o < n && a < r;) {
                    if (i !== e.get(o, a)) {
                        if (5 == ++u) break;
                        i = !i
                    }
                    o++, a++
                }
                if (o === n || a === r) throw new l.default;
                return (o - t[0]) / 7
            }, h.NO_POINTS = new Array, h);

        function h() {
            this.decoder = new s.default
        }
        e.default = c
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(8),
            o = r(63),
            a = r(94),
            i = r(95),
            u = r(5),
            s = r(1),
            f = (d.prototype.getVersionNumber = function () {
                return this.versionNumber
            }, d.prototype.getAlignmentPatternCenters = function () {
                return this.alignmentPatternCenters
            }, d.prototype.getTotalCodewords = function () {
                return this.totalCodewords
            }, d.prototype.getDimensionForVersion = function () {
                return 17 + 4 * this.versionNumber
            }, d.prototype.getECBlocksForLevel = function (t) {
                return this.ecBlocks[t.getValue()]
            }, d.getProvisionalVersionForDimension = function (t) {
                if (t % 4 != 1) throw new u.default;
                try {
                    return this.getVersionForNumber((t - 17) / 4)
                } catch (t) {
                    throw new u.default
                }
            }, d.getVersionForNumber = function (t) {
                if (t < 1 || 40 < t) throw new s.default;
                return d.VERSIONS[t - 1]
            }, d.decodeVersionInformation = function (t) {
                for (var e = Number.MAX_SAFE_INTEGER, r = 0, n = 0; n < d.VERSION_DECODE_INFO.length; n++) {
                    var a = d.VERSION_DECODE_INFO[n];
                    if (a === t) return d.getVersionForNumber(n + 7);
                    var i = o.default.numBitsDiffering(t, a);
                    i < e && (r = n + 7, e = i)
                }
                return e <= 3 ? d.getVersionForNumber(r) : null
            }, d.prototype.buildFunctionPattern = function () {
                var t = this.getDimensionForVersion(),
                    e = new n.default(t);
                e.setRegion(0, 0, 9, 9), e.setRegion(t - 8, 0, 8, 9), e.setRegion(0, t - 8, 9, 8);
                for (var r = this.alignmentPatternCenters.length, o = 0; o < r; o++)
                    for (var a = this.alignmentPatternCenters[o] - 2, i = 0; i < r; i++) 0 === o && (0 === i || i === r - 1) || o === r - 1 && 0 === i || e.setRegion(this.alignmentPatternCenters[i] - 2, a, 5, 5);
                return e.setRegion(6, 9, 1, t - 17), e.setRegion(9, 6, t - 17, 1), 6 < this.versionNumber && (e.setRegion(t - 11, 0, 3, 6), e.setRegion(0, t - 11, 6, 3)), e
            }, d.prototype.toString = function () {
                return "" + this.versionNumber
            }, d.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), d.VERSIONS = [new d(1, new Int32Array(0), new a.default(7, new i.default(1, 19)), new a.default(10, new i.default(1, 16)), new a.default(13, new i.default(1, 13)), new a.default(17, new i.default(1, 9))), new d(2, Int32Array.from([6, 18]), new a.default(10, new i.default(1, 34)), new a.default(16, new i.default(1, 28)), new a.default(22, new i.default(1, 22)), new a.default(28, new i.default(1, 16))), new d(3, Int32Array.from([6, 22]), new a.default(15, new i.default(1, 55)), new a.default(26, new i.default(1, 44)), new a.default(18, new i.default(2, 17)), new a.default(22, new i.default(2, 13))), new d(4, Int32Array.from([6, 26]), new a.default(20, new i.default(1, 80)), new a.default(18, new i.default(2, 32)), new a.default(26, new i.default(2, 24)), new a.default(16, new i.default(4, 9))), new d(5, Int32Array.from([6, 30]), new a.default(26, new i.default(1, 108)), new a.default(24, new i.default(2, 43)), new a.default(18, new i.default(2, 15), new i.default(2, 16)), new a.default(22, new i.default(2, 11), new i.default(2, 12))), new d(6, Int32Array.from([6, 34]), new a.default(18, new i.default(2, 68)), new a.default(16, new i.default(4, 27)), new a.default(24, new i.default(4, 19)), new a.default(28, new i.default(4, 15))), new d(7, Int32Array.from([6, 22, 38]), new a.default(20, new i.default(2, 78)), new a.default(18, new i.default(4, 31)), new a.default(18, new i.default(2, 14), new i.default(4, 15)), new a.default(26, new i.default(4, 13), new i.default(1, 14))), new d(8, Int32Array.from([6, 24, 42]), new a.default(24, new i.default(2, 97)), new a.default(22, new i.default(2, 38), new i.default(2, 39)), new a.default(22, new i.default(4, 18), new i.default(2, 19)), new a.default(26, new i.default(4, 14), new i.default(2, 15))), new d(9, Int32Array.from([6, 26, 46]), new a.default(30, new i.default(2, 116)), new a.default(22, new i.default(3, 36), new i.default(2, 37)), new a.default(20, new i.default(4, 16), new i.default(4, 17)), new a.default(24, new i.default(4, 12), new i.default(4, 13))), new d(10, Int32Array.from([6, 28, 50]), new a.default(18, new i.default(2, 68), new i.default(2, 69)), new a.default(26, new i.default(4, 43), new i.default(1, 44)), new a.default(24, new i.default(6, 19), new i.default(2, 20)), new a.default(28, new i.default(6, 15), new i.default(2, 16))), new d(11, Int32Array.from([6, 30, 54]), new a.default(20, new i.default(4, 81)), new a.default(30, new i.default(1, 50), new i.default(4, 51)), new a.default(28, new i.default(4, 22), new i.default(4, 23)), new a.default(24, new i.default(3, 12), new i.default(8, 13))), new d(12, Int32Array.from([6, 32, 58]), new a.default(24, new i.default(2, 92), new i.default(2, 93)), new a.default(22, new i.default(6, 36), new i.default(2, 37)), new a.default(26, new i.default(4, 20), new i.default(6, 21)), new a.default(28, new i.default(7, 14), new i.default(4, 15))), new d(13, Int32Array.from([6, 34, 62]), new a.default(26, new i.default(4, 107)), new a.default(22, new i.default(8, 37), new i.default(1, 38)), new a.default(24, new i.default(8, 20), new i.default(4, 21)), new a.default(22, new i.default(12, 11), new i.default(4, 12))), new d(14, Int32Array.from([6, 26, 46, 66]), new a.default(30, new i.default(3, 115), new i.default(1, 116)), new a.default(24, new i.default(4, 40), new i.default(5, 41)), new a.default(20, new i.default(11, 16), new i.default(5, 17)), new a.default(24, new i.default(11, 12), new i.default(5, 13))), new d(15, Int32Array.from([6, 26, 48, 70]), new a.default(22, new i.default(5, 87), new i.default(1, 88)), new a.default(24, new i.default(5, 41), new i.default(5, 42)), new a.default(30, new i.default(5, 24), new i.default(7, 25)), new a.default(24, new i.default(11, 12), new i.default(7, 13))), new d(16, Int32Array.from([6, 26, 50, 74]), new a.default(24, new i.default(5, 98), new i.default(1, 99)), new a.default(28, new i.default(7, 45), new i.default(3, 46)), new a.default(24, new i.default(15, 19), new i.default(2, 20)), new a.default(30, new i.default(3, 15), new i.default(13, 16))), new d(17, Int32Array.from([6, 30, 54, 78]), new a.default(28, new i.default(1, 107), new i.default(5, 108)), new a.default(28, new i.default(10, 46), new i.default(1, 47)), new a.default(28, new i.default(1, 22), new i.default(15, 23)), new a.default(28, new i.default(2, 14), new i.default(17, 15))), new d(18, Int32Array.from([6, 30, 56, 82]), new a.default(30, new i.default(5, 120), new i.default(1, 121)), new a.default(26, new i.default(9, 43), new i.default(4, 44)), new a.default(28, new i.default(17, 22), new i.default(1, 23)), new a.default(28, new i.default(2, 14), new i.default(19, 15))), new d(19, Int32Array.from([6, 30, 58, 86]), new a.default(28, new i.default(3, 113), new i.default(4, 114)), new a.default(26, new i.default(3, 44), new i.default(11, 45)), new a.default(26, new i.default(17, 21), new i.default(4, 22)), new a.default(26, new i.default(9, 13), new i.default(16, 14))), new d(20, Int32Array.from([6, 34, 62, 90]), new a.default(28, new i.default(3, 107), new i.default(5, 108)), new a.default(26, new i.default(3, 41), new i.default(13, 42)), new a.default(30, new i.default(15, 24), new i.default(5, 25)), new a.default(28, new i.default(15, 15), new i.default(10, 16))), new d(21, Int32Array.from([6, 28, 50, 72, 94]), new a.default(28, new i.default(4, 116), new i.default(4, 117)), new a.default(26, new i.default(17, 42)), new a.default(28, new i.default(17, 22), new i.default(6, 23)), new a.default(30, new i.default(19, 16), new i.default(6, 17))), new d(22, Int32Array.from([6, 26, 50, 74, 98]), new a.default(28, new i.default(2, 111), new i.default(7, 112)), new a.default(28, new i.default(17, 46)), new a.default(30, new i.default(7, 24), new i.default(16, 25)), new a.default(24, new i.default(34, 13))), new d(23, Int32Array.from([6, 30, 54, 78, 102]), new a.default(30, new i.default(4, 121), new i.default(5, 122)), new a.default(28, new i.default(4, 47), new i.default(14, 48)), new a.default(30, new i.default(11, 24), new i.default(14, 25)), new a.default(30, new i.default(16, 15), new i.default(14, 16))), new d(24, Int32Array.from([6, 28, 54, 80, 106]), new a.default(30, new i.default(6, 117), new i.default(4, 118)), new a.default(28, new i.default(6, 45), new i.default(14, 46)), new a.default(30, new i.default(11, 24), new i.default(16, 25)), new a.default(30, new i.default(30, 16), new i.default(2, 17))), new d(25, Int32Array.from([6, 32, 58, 84, 110]), new a.default(26, new i.default(8, 106), new i.default(4, 107)), new a.default(28, new i.default(8, 47), new i.default(13, 48)), new a.default(30, new i.default(7, 24), new i.default(22, 25)), new a.default(30, new i.default(22, 15), new i.default(13, 16))), new d(26, Int32Array.from([6, 30, 58, 86, 114]), new a.default(28, new i.default(10, 114), new i.default(2, 115)), new a.default(28, new i.default(19, 46), new i.default(4, 47)), new a.default(28, new i.default(28, 22), new i.default(6, 23)), new a.default(30, new i.default(33, 16), new i.default(4, 17))), new d(27, Int32Array.from([6, 34, 62, 90, 118]), new a.default(30, new i.default(8, 122), new i.default(4, 123)), new a.default(28, new i.default(22, 45), new i.default(3, 46)), new a.default(30, new i.default(8, 23), new i.default(26, 24)), new a.default(30, new i.default(12, 15), new i.default(28, 16))), new d(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new a.default(30, new i.default(3, 117), new i.default(10, 118)), new a.default(28, new i.default(3, 45), new i.default(23, 46)), new a.default(30, new i.default(4, 24), new i.default(31, 25)), new a.default(30, new i.default(11, 15), new i.default(31, 16))), new d(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new a.default(30, new i.default(7, 116), new i.default(7, 117)), new a.default(28, new i.default(21, 45), new i.default(7, 46)), new a.default(30, new i.default(1, 23), new i.default(37, 24)), new a.default(30, new i.default(19, 15), new i.default(26, 16))), new d(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new a.default(30, new i.default(5, 115), new i.default(10, 116)), new a.default(28, new i.default(19, 47), new i.default(10, 48)), new a.default(30, new i.default(15, 24), new i.default(25, 25)), new a.default(30, new i.default(23, 15), new i.default(25, 16))), new d(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new a.default(30, new i.default(13, 115), new i.default(3, 116)), new a.default(28, new i.default(2, 46), new i.default(29, 47)), new a.default(30, new i.default(42, 24), new i.default(1, 25)), new a.default(30, new i.default(23, 15), new i.default(28, 16))), new d(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new a.default(30, new i.default(17, 115)), new a.default(28, new i.default(10, 46), new i.default(23, 47)), new a.default(30, new i.default(10, 24), new i.default(35, 25)), new a.default(30, new i.default(19, 15), new i.default(35, 16))), new d(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new a.default(30, new i.default(17, 115), new i.default(1, 116)), new a.default(28, new i.default(14, 46), new i.default(21, 47)), new a.default(30, new i.default(29, 24), new i.default(19, 25)), new a.default(30, new i.default(11, 15), new i.default(46, 16))), new d(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new a.default(30, new i.default(13, 115), new i.default(6, 116)), new a.default(28, new i.default(14, 46), new i.default(23, 47)), new a.default(30, new i.default(44, 24), new i.default(7, 25)), new a.default(30, new i.default(59, 16), new i.default(1, 17))), new d(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new a.default(30, new i.default(12, 121), new i.default(7, 122)), new a.default(28, new i.default(12, 47), new i.default(26, 48)), new a.default(30, new i.default(39, 24), new i.default(14, 25)), new a.default(30, new i.default(22, 15), new i.default(41, 16))), new d(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new a.default(30, new i.default(6, 121), new i.default(14, 122)), new a.default(28, new i.default(6, 47), new i.default(34, 48)), new a.default(30, new i.default(46, 24), new i.default(10, 25)), new a.default(30, new i.default(2, 15), new i.default(64, 16))), new d(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new a.default(30, new i.default(17, 122), new i.default(4, 123)), new a.default(28, new i.default(29, 46), new i.default(14, 47)), new a.default(30, new i.default(49, 24), new i.default(10, 25)), new a.default(30, new i.default(24, 15), new i.default(46, 16))), new d(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new a.default(30, new i.default(4, 122), new i.default(18, 123)), new a.default(28, new i.default(13, 46), new i.default(32, 47)), new a.default(30, new i.default(48, 24), new i.default(14, 25)), new a.default(30, new i.default(42, 15), new i.default(32, 16))), new d(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new a.default(30, new i.default(20, 117), new i.default(4, 118)), new a.default(28, new i.default(40, 47), new i.default(7, 48)), new a.default(30, new i.default(43, 24), new i.default(22, 25)), new a.default(30, new i.default(10, 15), new i.default(67, 16))), new d(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new a.default(30, new i.default(19, 118), new i.default(6, 119)), new a.default(28, new i.default(18, 47), new i.default(31, 48)), new a.default(30, new i.default(34, 24), new i.default(34, 25)), new a.default(30, new i.default(20, 15), new i.default(61, 16)))], d);

        function d(t, e) {
            for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
            this.versionNumber = t, this.alignmentPatternCenters = e;
            for (var o = 0, a = (this.ecBlocks = r)[0].getECCodewordsPerBlock(), i = 0, u = r[0].getECBlocks(); i < u.length; i++) {
                var s = u[i];
                o += s.getCount() * (s.getDataCodewords() + a)
            }
            this.totalCodewords = o
        }
        e.default = f
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(26),
            o = r(15),
            a = r(22),
            i = r(16),
            u = r(68),
            s = r(66),
            f = r(40),
            d = r(69),
            l = r(107),
            c = r(42),
            h = r(108),
            p = r(35),
            w = r(109),
            g = r(43),
            v = (_.calculateMaskPenalty = function (t) {
                return d.default.applyMaskPenaltyRule1(t) + d.default.applyMaskPenaltyRule2(t) + d.default.applyMaskPenaltyRule3(t) + d.default.applyMaskPenaltyRule4(t)
            }, _.encode = function (t, e, r) {
                void 0 === r && (r = null);
                var i = _.DEFAULT_BYTE_MODE_ENCODING,
                    u = null !== r && void 0 !== r.get(n.default.CHARACTER_SET);
                u && (i = r.get(n.default.CHARACTER_SET).toString());
                var d = this.chooseMode(t, i),
                    p = new o.default;
                if (d === s.default.BYTE && (u || _.DEFAULT_BYTE_MODE_ENCODING !== i)) {
                    var w = a.default.getCharacterSetECIByName(i);
                    void 0 !== w && this.appendECI(w, p)
                }
                this.appendModeInfo(d, p);
                var v, y = new o.default;
                if (this.appendBytes(t, d, y, i), null !== r && void 0 !== r.get(n.default.QR_VERSION)) {
                    var C = Number.parseInt(r.get(n.default.QR_VERSION).toString(), 10);
                    v = f.default.getVersionForNumber(C);
                    var A = this.calculateBitsNeeded(d, p, y, v);
                    if (!this.willFit(A, v, e)) throw new g.default("Data too big for requested version")
                } else v = this.recommendVersion(e, d, p, y);
                var m = new o.default;
                m.appendBitArray(p);
                var E = d === s.default.BYTE ? y.getSizeInBytes() : t.length;
                this.appendLengthInfo(E, v, d, m), m.appendBitArray(y);
                var S = v.getECBlocksForLevel(e),
                    I = v.getTotalCodewords() - S.getTotalECCodewords();
                this.terminateBits(I, m);
                var O = this.interleaveWithECBytes(m, v.getTotalCodewords(), I, S.getNumBlocks()),
                    b = new c.default;
                b.setECLevel(e), b.setMode(d), b.setVersion(v);
                var T = v.getDimensionForVersion(),
                    M = new l.default(T, T),
                    N = this.chooseMaskPattern(O, e, v, M);
                return b.setMaskPattern(N), h.default.buildMatrix(O, e, v, N, M), b.setMatrix(M), b
            }, _.recommendVersion = function (t, e, r, n) {
                var o = this.calculateBitsNeeded(e, r, n, f.default.getVersionForNumber(1)),
                    a = this.chooseVersion(o, t),
                    i = this.calculateBitsNeeded(e, r, n, a);
                return this.chooseVersion(i, t)
            }, _.calculateBitsNeeded = function (t, e, r, n) {
                return e.getSize() + t.getCharacterCountBits(n) + r.getSize()
            }, _.getAlphanumericCode = function (t) {
                return t < _.ALPHANUMERIC_TABLE.length ? _.ALPHANUMERIC_TABLE[t] : -1
            }, _.chooseMode = function (t, e) {
                if (void 0 === e && (e = null), a.default.SJIS.getName() === e && this.isOnlyDoubleByteKanji(t)) return s.default.KANJI;
                for (var r = !1, n = !1, o = 0, i = t.length; o < i; ++o) {
                    var u = t.charAt(o);
                    if (_.isDigit(u)) r = !0;
                    else {
                        if (-1 === this.getAlphanumericCode(u.charCodeAt(0))) return s.default.BYTE;
                        n = !0
                    }
                }
                return n ? s.default.ALPHANUMERIC : r ? s.default.NUMERIC : s.default.BYTE
            }, _.isOnlyDoubleByteKanji = function (t) {
                var e;
                try {
                    e = p.default.encode(t, a.default.SJIS)
                } catch (t) {
                    return !1
                }
                var r = e.length;
                if (r % 2 != 0) return !1;
                for (var n = 0; n < r; n += 2) {
                    var o = 255 & e[n];
                    if ((o < 129 || 159 < o) && (o < 224 || 235 < o)) return !1
                }
                return !0
            }, _.chooseMaskPattern = function (t, e, r, n) {
                for (var o = Number.MAX_SAFE_INTEGER, a = -1, i = 0; i < c.default.NUM_MASK_PATTERNS; i++) {
                    h.default.buildMatrix(t, e, r, i, n);
                    var u = this.calculateMaskPenalty(n);
                    u < o && (o = u, a = i)
                }
                return a
            }, _.chooseVersion = function (t, e) {
                for (var r = 1; r <= 40; r++) {
                    var n = f.default.getVersionForNumber(r);
                    if (_.willFit(t, n, e)) return n
                }
                throw new g.default("Data too big")
            }, _.willFit = function (t, e, r) {
                return (t + 7) / 8 <= e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords()
            }, _.terminateBits = function (t, e) {
                var r = 8 * t;
                if (e.getSize() > r) throw new g.default("data bits cannot fit in the QR Code" + e.getSize() + " > " + r);
                for (var n = 0; n < 4 && e.getSize() < r; ++n) e.appendBit(!1);
                var o = 7 & e.getSize();
                if (0 < o)
                    for (n = o; n < 8; n++) e.appendBit(!1);
                var a = t - e.getSizeInBytes();
                for (n = 0; n < a; ++n) e.appendBits(0 == (1 & n) ? 236 : 17, 8);
                if (e.getSize() !== r) throw new g.default("Bits size does not equal capacity")
            }, _.getNumDataBytesAndNumECBytesForBlockID = function (t, e, r, n, o, a) {
                if (r <= n) throw new g.default("Block ID too large");
                var i = t % r,
                    u = r - i,
                    s = Math.floor(t / r),
                    f = s + 1,
                    d = Math.floor(e / r),
                    l = d + 1,
                    c = s - d,
                    h = f - l;
                if (c != h) throw new g.default("EC bytes mismatch");
                if (r !== u + i) throw new g.default("RS blocks mismatch");
                if (t !== (d + c) * u + (l + h) * i) throw new g.default("Total bytes mismatch");
                n < u ? (o[0] = d, a[0] = c) : (o[0] = l, a[0] = h)
            }, _.interleaveWithECBytes = function (t, e, r, n) {
                if (t.getSizeInBytes() !== r) throw new g.default("Number of bits and data bytes does not match");
                for (var a = 0, i = 0, u = 0, s = new Array, f = 0; f < n; ++f) {
                    var d = new Int32Array(1),
                        l = new Int32Array(1);
                    _.getNumDataBytesAndNumECBytesForBlockID(e, r, n, f, d, l);
                    var c = d[0],
                        h = new Uint8Array(c);
                    t.toBytes(8 * a, h, 0, c);
                    var p = _.generateECBytes(h, l[0]);
                    s.push(new w.default(h, p)), i = Math.max(i, c), u = Math.max(u, p.length), a += d[0]
                }
                if (r !== a) throw new g.default("Data bytes does not match offset");
                var v = new o.default;
                for (f = 0; f < i; ++f)
                    for (var y = 0, C = s; y < C.length; y++) f < (h = C[y].getDataBytes()).length && v.appendBits(h[f], 8);
                for (f = 0; f < u; ++f)
                    for (var A = 0, m = s; A < m.length; A++) f < (p = m[A].getErrorCorrectionBytes()).length && v.appendBits(p[f], 8);
                if (e !== v.getSizeInBytes()) throw new g.default("Interleaving error: " + e + " and " + v.getSizeInBytes() + " differ.");
                return v
            }, _.generateECBytes = function (t, e) {
                for (var r = t.length, n = new Int32Array(r + e), o = 0; o < r; o++) n[o] = 255 & t[o];
                new u.default(i.default.QR_CODE_FIELD_256).encode(n, e);
                var a = new Uint8Array(e);
                for (o = 0; o < e; o++) a[o] = n[r + o];
                return a
            }, _.appendModeInfo = function (t, e) {
                e.appendBits(t.getBits(), 4)
            }, _.appendLengthInfo = function (t, e, r, n) {
                var o = r.getCharacterCountBits(e);
                if (1 << o <= t) throw new g.default(t + " is bigger than " + ((1 << o) - 1));
                n.appendBits(t, o)
            }, _.appendBytes = function (t, e, r, n) {
                switch (e) {
                    case s.default.NUMERIC:
                        _.appendNumericBytes(t, r);
                        break;
                    case s.default.ALPHANUMERIC:
                        _.appendAlphanumericBytes(t, r);
                        break;
                    case s.default.BYTE:
                        _.append8BitBytes(t, r, n);
                        break;
                    case s.default.KANJI:
                        _.appendKanjiBytes(t, r);
                        break;
                    default:
                        throw new g.default("Invalid mode: " + e)
                }
            }, _.getDigit = function (t) {
                return t.charCodeAt(0) - 48
            }, _.isDigit = function (t) {
                var e = _.getDigit(t);
                return 0 <= e && e <= 9
            }, _.appendNumericBytes = function (t, e) {
                for (var r = t.length, n = 0; n < r;) {
                    var o = _.getDigit(t.charAt(n));
                    if (n + 2 < r) {
                        var a = _.getDigit(t.charAt(n + 1)),
                            i = _.getDigit(t.charAt(n + 2));
                        e.appendBits(100 * o + 10 * a + i, 10), n += 3
                    } else n + 1 < r ? (a = _.getDigit(t.charAt(n + 1)), e.appendBits(10 * o + a, 7), n += 2) : (e.appendBits(o, 4), n++)
                }
            }, _.appendAlphanumericBytes = function (t, e) {
                for (var r = t.length, n = 0; n < r;) {
                    var o = _.getAlphanumericCode(t.charCodeAt(n));
                    if (-1 === o) throw new g.default;
                    if (n + 1 < r) {
                        var a = _.getAlphanumericCode(t.charCodeAt(n + 1));
                        if (-1 === a) throw new g.default;
                        e.appendBits(45 * o + a, 11), n += 2
                    } else e.appendBits(o, 6), n++
                }
            }, _.append8BitBytes = function (t, e, r) {
                var n;
                try {
                    n = p.default.encode(t, r)
                } catch (t) {
                    throw new g.default(t)
                }
                for (var o = 0, a = n.length; o !== a; o++) {
                    var i = n[o];
                    e.appendBits(i, 8)
                }
            }, _.appendKanjiBytes = function (t, e) {
                var r;
                try {
                    r = p.default.encode(t, a.default.SJIS)
                } catch (t) {
                    throw new g.default(t)
                }
                for (var n = r.length, o = 0; o < n; o += 2) {
                    var i = (255 & r[o]) << 8 & 4294967295 | 255 & r[o + 1],
                        u = -1;
                    if (33088 <= i && i <= 40956 ? u = i - 33088 : 57408 <= i && i <= 60351 && (u = i - 49472), -1 === u) throw new g.default("Invalid byte sequence");
                    var s = 192 * (u >> 8) + (255 & u);
                    e.appendBits(s, 13)
                }
            }, _.appendECI = function (t, e) {
                e.appendBits(s.default.ECI.getBits(), 4), e.appendBits(t.getValue(), 8)
            }, _.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), _.DEFAULT_BYTE_MODE_ENCODING = a.default.UTF8.getName(), _);

        function _() {}
        e.default = v
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(11),
            o = (a.prototype.getMode = function () {
                return this.mode
            }, a.prototype.getECLevel = function () {
                return this.ecLevel
            }, a.prototype.getVersion = function () {
                return this.version
            }, a.prototype.getMaskPattern = function () {
                return this.maskPattern
            }, a.prototype.getMatrix = function () {
                return this.matrix
            }, a.prototype.toString = function () {
                var t = new n.default;
                return t.append("<<\n"), t.append(" mode: "), t.append(this.mode ? this.mode.toString() : "null"), t.append("\n ecLevel: "), t.append(this.ecLevel ? this.ecLevel.toString() : "null"), t.append("\n version: "), t.append(this.version ? this.version.toString() : "null"), t.append("\n maskPattern: "), t.append(this.maskPattern.toString()), this.matrix ? (t.append("\n matrix:\n"), t.append(this.matrix.toString())) : t.append("\n matrix: null\n"), t.append(">>\n"), t.toString()
            }, a.prototype.setMode = function (t) {
                this.mode = t
            }, a.prototype.setECLevel = function (t) {
                this.ecLevel = t
            }, a.prototype.setVersion = function (t) {
                this.version = t
            }, a.prototype.setMaskPattern = function (t) {
                this.maskPattern = t
            }, a.prototype.setMatrix = function (t) {
                this.matrix = t
            }, a.isValidMaskPattern = function (t) {
                return 0 <= t && t < a.NUM_MASK_PATTERNS
            }, a.NUM_MASK_PATTERNS = 8, a);

        function a() {
            this.maskPattern = -1
        }
        e.default = o
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(r(72)), n(r(17)), n(r(84)), n(r(91)), n(r(105)), n(r(106)), n(r(49)), n(r(50));
        var o = r(27);
        e.ArgumentException = o.default;
        var a = r(57);
        e.ArithmeticException = a.default;
        var i = r(12);
        e.ChecksumException = i.default;
        var u = r(6);
        e.Exception = u.default;
        var s = r(5);
        e.FormatException = s.default;
        var f = r(1);
        e.IllegalArgumentException = f.default;
        var d = r(21);
        e.IllegalStateException = d.default;
        var l = r(0);
        e.NotFoundException = l.default;
        var c = r(67);
        e.ReaderException = c.default;
        var h = r(58);
        e.ReedSolomonException = h.default;
        var p = r(29);
        e.UnsupportedOperationException = p.default;
        var w = r(43);
        e.WriterException = w.default;
        var g = r(2);
        e.BarcodeFormat = g.default;
        var v = r(48);
        e.Binarizer = v.default;
        var _ = r(45);
        e.BinaryBitmap = _.default;
        var y = r(4);
        e.DecodeHintType = y.default;
        var C = r(18);
        e.InvertedLuminanceSource = C.default;
        var A = r(19);
        e.LuminanceSource = A.default;
        var m = r(62);
        e.MultiFormatReader = m.default;
        var E = r(110);
        e.MultiFormatWriter = E.default;
        var S = r(111);
        e.PlanarYUVLuminanceSource = S.default;
        var I = r(9);
        e.Result = I.default;
        var O = r(13);
        e.ResultMetadataType = O.default;
        var b = r(112);
        e.RGBLuminanceSource = b.default;
        var T = r(15);
        e.BitArray = T.default;
        var M = r(8);
        e.BitMatrix = M.default;
        var N = r(34);
        e.BitSource = N.default;
        var R = r(22);
        e.CharacterSetECI = R.default;
        var P = r(33);
        e.DecoderResult = P.default;
        var D = r(59);
        e.DefaultGridSampler = D.default;
        var B = r(36);
        e.DetectorResult = B.default;
        var k = r(26);
        e.EncodeHintType = k.default;
        var L = r(47);
        e.GlobalHistogramBinarizer = L.default;
        var F = r(60);
        e.GridSampler = F.default;
        var U = r(37);
        e.GridSamplerInstance = U.default;
        var V = r(46);
        e.HybridBinarizer = V.default;
        var x = r(38);
        e.PerspectiveTransform = x.default;
        var H = r(65);
        e.StringUtils = H.default;
        var j = r(14);
        e.MathUtils = j.default;
        var z = r(61);
        e.WhiteRectangleDetector = z.default;
        var G = r(16);
        e.GenericGF = G.default;
        var W = r(24);
        e.GenericGFPoly = W.default;
        var X = r(32);
        e.ReedSolomonDecoder = X.default;
        var K = r(68);
        e.ReedSolomonEncoder = K.default;
        var Y = r(31);
        e.DataMatrixReader = Y.default;
        var Z = r(39);
        e.QRCodeReader = Z.default;
        var Q = r(70);
        e.QRCodeWriter = Q.default;
        var q = r(25);
        e.QRCodeDecoderErrorCorrectionLevel = q.default;
        var J = r(41);
        e.QRCodeEncoder = J.default;
        var $ = r(42);
        e.QRCodeEncoderQRCode = $.default;
        var tt = r(10);
        e.OneDReader = tt.default;
        var et = r(56);
        e.EAN13Reader = et.default;
        var rt = r(52);
        e.Code128Reader = rt.default;
        var nt = r(55);
        e.ITFReader = nt.default;
        var ot = r(51);
        e.Code39Reader = ot.default;
        var at = r(53);
        e.RSS14Reader = at.default;
        var it = r(30);
        e.MultiformatReader = it.default
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = (a.prototype.getWidth = function () {
                return this.binarizer.getWidth()
            }, a.prototype.getHeight = function () {
                return this.binarizer.getHeight()
            }, a.prototype.getBlackRow = function (t, e) {
                return this.binarizer.getBlackRow(t, e)
            }, a.prototype.getBlackMatrix = function () {
                return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
            }, a.prototype.isCropSupported = function () {
                return this.binarizer.getLuminanceSource().isCropSupported()
            }, a.prototype.crop = function (t, e, r, n) {
                var o = this.binarizer.getLuminanceSource().crop(t, e, r, n);
                return new a(this.binarizer.createBinarizer(o))
            }, a.prototype.isRotateSupported = function () {
                return this.binarizer.getLuminanceSource().isRotateSupported()
            }, a.prototype.rotateCounterClockwise = function () {
                var t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                return new a(this.binarizer.createBinarizer(t))
            }, a.prototype.rotateCounterClockwise45 = function () {
                var t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                return new a(this.binarizer.createBinarizer(t))
            }, a.prototype.toString = function () {
                try {
                    return this.getBlackMatrix().toString()
                } catch (t) {
                    return ""
                }
            }, a);

        function a(t) {
            if (null === (this.binarizer = t)) throw new n.default("Binarizer must be non-null.")
        }
        e.default = o
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(47),
            u = r(8),
            s = (o(f, a = i.default), f.prototype.getBlackMatrix = function () {
                if (null !== this.matrix) return this.matrix;
                var t = this.getLuminanceSource(),
                    e = t.getWidth(),
                    r = t.getHeight();
                if (f.MINIMUM_DIMENSION <= e && f.MINIMUM_DIMENSION <= r) {
                    var n = t.getMatrix(),
                        o = e >> f.BLOCK_SIZE_POWER;
                    0 != (e & f.BLOCK_SIZE_MASK) && o++;
                    var i = r >> f.BLOCK_SIZE_POWER;
                    0 != (r & f.BLOCK_SIZE_MASK) && i++;
                    var s = f.calculateBlackPoints(n, o, i, e, r),
                        d = new u.default(e, r);
                    f.calculateThresholdForBlock(n, o, i, e, r, s, d), this.matrix = d
                } else this.matrix = a.prototype.getBlackMatrix.call(this);
                return this.matrix
            }, f.prototype.createBinarizer = function (t) {
                return new f(t)
            }, f.calculateThresholdForBlock = function (t, e, r, n, o, a, i) {
                for (var u = o - f.BLOCK_SIZE, s = n - f.BLOCK_SIZE, d = 0; d < r; d++) {
                    var l = d << f.BLOCK_SIZE_POWER;
                    u < l && (l = u);
                    for (var c = f.cap(d, 2, r - 3), h = 0; h < e; h++) {
                        var p = h << f.BLOCK_SIZE_POWER;
                        s < p && (p = s);
                        for (var w = f.cap(h, 2, e - 3), g = 0, v = -2; v <= 2; v++) {
                            var _ = a[c + v];
                            g += _[w - 2] + _[w - 1] + _[w] + _[w + 1] + _[w + 2]
                        }
                        f.thresholdBlock(t, p, l, g / 25, n, i)
                    }
                }
            }, f.cap = function (t, e, r) {
                return t < e ? e : r < t ? r : t
            }, f.thresholdBlock = function (t, e, r, n, o, a) {
                for (var i = 0, u = r * o + e; i < f.BLOCK_SIZE; i++, u += o)
                    for (var s = 0; s < f.BLOCK_SIZE; s++)(255 & t[u + s]) <= n && a.set(e + s, r + i)
            }, f.calculateBlackPoints = function (t, e, r, n, o) {
                for (var a = o - f.BLOCK_SIZE, i = n - f.BLOCK_SIZE, u = new Array(r), s = 0; s < r; s++) {
                    u[s] = new Int32Array(e);
                    var d = s << f.BLOCK_SIZE_POWER;
                    a < d && (d = a);
                    for (var l = 0; l < e; l++) {
                        var c = l << f.BLOCK_SIZE_POWER;
                        i < c && (c = i);
                        for (var h = 0, p = 255, w = 0, g = 0, v = d * n + c; g < f.BLOCK_SIZE; g++, v += n) {
                            for (var _ = 0; _ < f.BLOCK_SIZE; _++) {
                                var y = 255 & t[v + _];
                                h += y, y < p && (p = y), w < y && (w = y)
                            }
                            if (f.MIN_DYNAMIC_RANGE < w - p)
                                for (g++, v += n; g < f.BLOCK_SIZE; g++, v += n)
                                    for (_ = 0; _ < f.BLOCK_SIZE; _++) h += 255 & t[v + _]
                        }
                        var C = h >> 2 * f.BLOCK_SIZE_POWER;
                        if (w - p <= f.MIN_DYNAMIC_RANGE && (C = p / 2, 0 < s && 0 < l)) {
                            var A = (u[s - 1][l] + 2 * u[s][l - 1] + u[s - 1][l - 1]) / 4;
                            p < A && (C = A)
                        }
                        u[s][l] = C
                    }
                }
                return u
            }, f.BLOCK_SIZE_MASK = (f.BLOCK_SIZE = 1 << (f.BLOCK_SIZE_POWER = 3)) - 1, f.MINIMUM_DIMENSION = 5 * f.BLOCK_SIZE, f.MIN_DYNAMIC_RANGE = 24, f);

        function f(t) {
            var e = a.call(this, t) || this;
            return e.matrix = null, e
        }
        e.default = s
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(48),
            u = r(15),
            s = r(8),
            f = r(0),
            d = (o(l, a = i.default), l.prototype.getBlackRow = function (t, e) {
                var r = this.getLuminanceSource(),
                    n = r.getWidth();
                null == e || e.getSize() < n ? e = new u.default(n) : e.clear(), this.initArrays(n);
                for (var o = r.getRow(t, this.luminances), a = this.buckets, i = 0; i < n; i++) a[(255 & o[i]) >> l.LUMINANCE_SHIFT]++;
                var s = l.estimateBlackPoint(a);
                if (n < 3)
                    for (i = 0; i < n; i++)(255 & o[i]) < s && e.set(i);
                else {
                    var f = 255 & o[0],
                        d = 255 & o[1];
                    for (i = 1; i < n - 1; i++) {
                        var c = 255 & o[i + 1];
                        (4 * d - f - c) / 2 < s && e.set(i), f = d, d = c
                    }
                }
                return e
            }, l.prototype.getBlackMatrix = function () {
                var t = this.getLuminanceSource(),
                    e = t.getWidth(),
                    r = t.getHeight(),
                    n = new s.default(e, r);
                this.initArrays(e);
                for (var o = this.buckets, a = 1; a < 5; a++)
                    for (var i = r * a / 5, u = t.getRow(i, this.luminances), f = Math.floor(4 * e / 5), d = Math.floor(e / 5); d < f; d++) o[(255 & u[d]) >> l.LUMINANCE_SHIFT]++;
                var c = l.estimateBlackPoint(o),
                    h = t.getMatrix();
                for (a = 0; a < r; a++) {
                    var p = a * e;
                    for (d = 0; d < e; d++)(255 & h[p + d]) < c && n.set(d, a)
                }
                return n
            }, l.prototype.createBinarizer = function (t) {
                return new l(t)
            }, l.prototype.initArrays = function (t) {
                this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
                for (var e = this.buckets, r = 0; r < l.LUMINANCE_BUCKETS; r++) e[r] = 0
            }, l.estimateBlackPoint = function (t) {
                for (var e = t.length, r = 0, n = 0, o = 0, a = 0; a < e; a++) t[a] > o && (o = t[n = a]), t[a] > r && (r = t[a]);
                var i = 0,
                    u = 0;
                for (a = 0; a < e; a++) {
                    var s = a - n;
                    u < (p = t[a] * s * s) && (i = a, u = p)
                }
                if (i < n) {
                    var d = n;
                    n = i, i = d
                }
                if (i - n <= e / 16) throw new f.default;
                var c = i - 1,
                    h = -1;
                for (a = i - 1; n < a; a--) {
                    var p, w = a - n;
                    h < (p = w * w * (i - a) * (r - t[a])) && (c = a, h = p)
                }
                return c << l.LUMINANCE_SHIFT
            }, l.LUMINANCE_SHIFT = 8 - (l.LUMINANCE_BITS = 5), l.LUMINANCE_BUCKETS = 1 << l.LUMINANCE_BITS, l.EMPTY = Uint8ClampedArray.from([0]), l);

        function l(t) {
            var e = a.call(this, t) || this;
            return e.luminances = l.EMPTY, e.buckets = new Int32Array(l.LUMINANCE_BUCKETS), e
        }
        e.default = d
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.getLuminanceSource = function () {
            return this.source
        }, o.prototype.getWidth = function () {
            return this.source.getWidth()
        }, o.prototype.getHeight = function () {
            return this.source.getHeight()
        }, o);

        function o(t) {
            this.source = t
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(18),
            u = r(19),
            s = r(1),
            f = (o(d, a = u.default), d.makeBufferFromCanvasImageData = function (t) {
                var e = t.getContext("2d").getImageData(0, 0, t.width, t.height);
                return d.toGrayscaleBuffer(e.data, t.width, t.height)
            }, d.toGrayscaleBuffer = function (t, e, r) {
                for (var n = new Uint8ClampedArray(e * r), o = 0, a = 0, i = t.length; o < i; o += 4, a++) {
                    var u;
                    u = 0 === t[o + 3] ? 255 : 306 * t[o] + 601 * t[o + 1] + 117 * t[o + 2] + 512 >> 10, n[a] = u
                }
                return n
            }, d.prototype.getRow = function (t, e) {
                if (t < 0 || t >= this.getHeight()) throw new s.default("Requested row is outside the image: " + t);
                var r = this.getWidth(),
                    n = t * r;
                return null === e ? e = this.buffer.slice(n, n + r) : (e.length < r && (e = new Uint8ClampedArray(r)), e.set(this.buffer.slice(n, n + r))), e
            }, d.prototype.getMatrix = function () {
                return this.buffer
            }, d.prototype.isCropSupported = function () {
                return !0
            }, d.prototype.crop = function (t, e, r, n) {
                return this.crop(t, e, r, n), this
            }, d.prototype.isRotateSupported = function () {
                return !0
            }, d.prototype.rotateCounterClockwise = function () {
                return this.rotate(-90), this
            }, d.prototype.rotateCounterClockwise45 = function () {
                return this.rotate(-45), this
            }, d.prototype.getTempCanvasElement = function () {
                if (null === this.tempCanvasElement) {
                    var t = this.canvas.ownerDocument.createElement("canvas");
                    t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t
                }
                return this.tempCanvasElement
            }, d.prototype.rotate = function (t) {
                var e = this.getTempCanvasElement(),
                    r = e.getContext("2d"),
                    n = t * d.DEGREE_TO_RADIANS,
                    o = this.canvas.width,
                    a = this.canvas.height,
                    i = Math.ceil(Math.abs(Math.cos(n)) * o + Math.abs(Math.sin(n)) * a),
                    u = Math.ceil(Math.abs(Math.sin(n)) * o + Math.abs(Math.cos(n)) * a);
                return e.width = i, e.height = u, r.translate(i / 2, u / 2), r.rotate(n), r.drawImage(this.canvas, o / -2, a / -2), this.buffer = d.makeBufferFromCanvasImageData(e), this
            }, d.prototype.invert = function () {
                return new i.default(this)
            }, d.DEGREE_TO_RADIANS = Math.PI / 180, d);

        function d(t) {
            var e = a.call(this, t.width, t.height) || this;
            return e.canvas = t, e.tempCanvasElement = null, e.buffer = d.makeBufferFromCanvasImageData(t), e
        }
        e.HTMLCanvasElementLuminanceSource = f
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.toJSON = function () {
            return {
                kind: this.kind,
                groupId: this.groupId,
                deviceId: this.deviceId,
                label: this.label
            }
        }, o);

        function o(t, e, r) {
            this.deviceId = t, this.label = e, this.kind = "videoinput", this.groupId = r || void 0
        }
        e.VideoInputDevice = n
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(2),
            u = r(12),
            s = r(5),
            f = r(0),
            d = r(10),
            l = r(9),
            c = r(3),
            h = (o(p, a = d.default), p.prototype.decodeRow = function (t, e, r) {
                var n = this.counters;
                n.fill(0), this.decodeRowResult = "";
                var o, a, s, d = p.findAsteriskPattern(e, n),
                    h = e.getNextSet(d[1]),
                    w = e.getSize();
                do {
                    p.recordPattern(e, h, n);
                    var g = p.toNarrowWidePattern(n);
                    if (g < 0) throw new f.default;
                    o = p.patternToChar(g), this.decodeRowResult += o, a = h;
                    for (var v = 0, _ = n; v < _.length; v++) h += _[v];
                    h = e.getNextSet(h)
                } while ("*" !== o);
                this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
                for (var y = 0, C = 0, A = n; C < A.length; C++) y += A[C];
                if (h !== w && 2 * (h - a - y) < y) throw new f.default;
                if (this.usingCheckDigit) {
                    for (var m = this.decodeRowResult.length - 1, E = 0, S = 0; S < m; S++) E += p.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(S));
                    if (this.decodeRowResult.charAt(m) !== p.ALPHABET_STRING.charAt(E % 43)) throw new u.default;
                    this.decodeRowResult = this.decodeRowResult.substring(0, m)
                }
                if (0 === this.decodeRowResult.length) throw new f.default;
                s = this.extendedMode ? p.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
                var I = (d[1] + d[0]) / 2,
                    O = a + y / 2;
                return new l.default(s, null, 0, [new c.default(I, t), new c.default(O, t)], i.default.CODE_39, (new Date).getTime())
            }, p.findAsteriskPattern = function (t, e) {
                for (var r = t.getSize(), n = t.getNextSet(0), o = 0, a = n, i = !1, u = e.length, s = n; s < r; s++)
                    if (t.get(s) !== i) e[o]++;
                    else {
                        if (o === u - 1) {
                            if (this.toNarrowWidePattern(e) === p.ASTERISK_ENCODING && t.isRange(Math.max(0, a - Math.floor((s - a) / 2)), a, !1)) return [a, s];
                            a += e[0] + e[1], e.copyWithin(0, 2, 2 + o - 1), e[o - 1] = 0, e[o] = 0, o--
                        } else o++;
                        e[o] = 1, i = !i
                    } throw new f.default
            }, p.toNarrowWidePattern = function (t) {
                var e, r = t.length,
                    n = 0;
                do {
                    for (var o = 2147483647, a = 0, i = t; a < i.length; a++)(d = i[a]) < o && n < d && (o = d);
                    n = o;
                    for (var u = e = 0, s = 0, f = 0; f < r; f++) n < (d = t[f]) && (s |= 1 << r - 1 - f, e++, u += d);
                    if (3 === e) {
                        for (f = 0; f < r && 0 < e; f++) {
                            var d;
                            if (n < (d = t[f]) && (e--, u <= 2 * d)) return -1
                        }
                        return s
                    }
                } while (3 < e);
                return -1
            }, p.patternToChar = function (t) {
                for (var e = 0; e < p.CHARACTER_ENCODINGS.length; e++)
                    if (p.CHARACTER_ENCODINGS[e] === t) return p.ALPHABET_STRING.charAt(e);
                if (t === p.ASTERISK_ENCODING) return "*";
                throw new f.default
            }, p.decodeExtended = function (t) {
                for (var e = t.length, r = "", n = 0; n < e; n++) {
                    var o = t.charAt(n);
                    if ("+" === o || "$" === o || "%" === o || "/" === o) {
                        var a = t.charAt(n + 1),
                            i = "\0";
                        switch (o) {
                            case "+":
                                if (!("A" <= a && a <= "Z")) throw new s.default;
                                i = String.fromCharCode(a.charCodeAt(0) + 32);
                                break;
                            case "$":
                                if (!("A" <= a && a <= "Z")) throw new s.default;
                                i = String.fromCharCode(a.charCodeAt(0) - 64);
                                break;
                            case "%":
                                if ("A" <= a && a <= "E") i = String.fromCharCode(a.charCodeAt(0) - 38);
                                else if ("F" <= a && a <= "J") i = String.fromCharCode(a.charCodeAt(0) - 11);
                                else if ("K" <= a && a <= "O") i = String.fromCharCode(a.charCodeAt(0) + 16);
                                else if ("P" <= a && a <= "T") i = String.fromCharCode(a.charCodeAt(0) + 43);
                                else if ("U" === a) i = "\0";
                                else if ("V" === a) i = "@";
                                else if ("W" === a) i = "`";
                                else {
                                    if ("X" !== a && "Y" !== a && "Z" !== a) throw new s.default;
                                    i = ""
                                }
                                break;
                            case "/":
                                if ("A" <= a && a <= "O") i = String.fromCharCode(a.charCodeAt(0) - 32);
                                else {
                                    if ("Z" !== a) throw new s.default;
                                    i = ":"
                                }
                        }
                        r += i, n++
                    } else r += o
                }
                return r
            }, p.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", p.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], p.ASTERISK_ENCODING = 148, p);

        function p(t, e) {
            void 0 === t && (t = !1), void 0 === e && (e = !1);
            var r = a.call(this) || this;
            return r.usingCheckDigit = t, r.extendedMode = e, r.decodeRowResult = "", r.counters = new Array(9), r
        }
        e.default = h
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(2),
            u = r(4),
            s = r(9),
            f = r(3),
            d = r(10),
            l = r(0),
            c = r(5),
            h = r(12),
            p = (o(w, a = d.default), w.findStartPattern = function (t) {
                for (var e = t.getSize(), r = t.getNextSet(0), n = 0, o = [0, 0, 0, 0, 0, 0], a = r, i = !1, u = r; u < e; u++)
                    if (t.get(u) !== i) o[n]++;
                    else {
                        if (5 === n) {
                            for (var s = w.MAX_AVG_VARIANCE, f = -1, c = w.CODE_START_A; c <= w.CODE_START_C; c++) {
                                var h = d.default.patternMatchVariance(o, w.CODE_PATTERNS[c], w.MAX_INDIVIDUAL_VARIANCE);
                                h < s && (s = h, f = c)
                            }
                            if (0 <= f && t.isRange(Math.max(0, a - (u - a) / 2), a, !1)) return [a, u, f];
                            a += o[0] + o[1], o.splice(0, 2), o[n - 1] = 0, o[n] = 0, n--
                        } else n++;
                        o[n] = 1, i = !i
                    } throw new l.default
            }, w.decodeCode = function (t, e, r) {
                d.default.recordPattern(t, r, e);
                for (var n = w.MAX_AVG_VARIANCE, o = -1, a = 0; a < w.CODE_PATTERNS.length; a++) {
                    var i = w.CODE_PATTERNS[a],
                        u = this.patternMatchVariance(e, i, w.MAX_INDIVIDUAL_VARIANCE);
                    u < n && (n = u, o = a)
                }
                if (0 <= o) return o;
                throw new l.default
            }, w.prototype.decodeRow = function (t, e, r) {
                var n, o = r && !0 === r.get(u.default.ASSUME_GS1),
                    a = w.findStartPattern(e),
                    d = a[2],
                    p = 0,
                    g = new Uint8Array(20);
                switch (g[p++] = d) {
                    case w.CODE_START_A:
                        n = w.CODE_CODE_A;
                        break;
                    case w.CODE_START_B:
                        n = w.CODE_CODE_B;
                        break;
                    case w.CODE_START_C:
                        n = w.CODE_CODE_C;
                        break;
                    default:
                        throw new c.default
                }
                for (var v = !1, _ = !1, y = "", C = a[0], A = a[1], m = [0, 0, 0, 0, 0, 0], E = 0, S = 0, I = d, O = 0, b = !0, T = !1, M = !1; !v;) {
                    var N = _;
                    switch (_ = !1, E = S, S = w.decodeCode(e, m, A), (g[p++] = S) !== w.CODE_STOP && (b = !0), S !== w.CODE_STOP && (I += ++O * S), C = A, A += m.reduce(function (t, e) {
                        return t + e
                    }, 0), S) {
                        case w.CODE_START_A:
                        case w.CODE_START_B:
                        case w.CODE_START_C:
                            throw new c.default
                    }
                    switch (n) {
                        case w.CODE_CODE_A:
                            if (S < 64) y += M === T ? String.fromCharCode(" ".charCodeAt(0) + S) : String.fromCharCode(" ".charCodeAt(0) + S + 128), M = !1;
                            else if (S < 96) y += M === T ? String.fromCharCode(S - 64) : String.fromCharCode(S + 64), M = !1;
                            else switch (S !== w.CODE_STOP && (b = !1), S) {
                                case w.CODE_FNC_1:
                                    o && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
                                    break;
                                case w.CODE_FNC_2:
                                case w.CODE_FNC_3:
                                    break;
                                case w.CODE_FNC_4_A:
                                    M = !T && M ? !(T = !0) : !T || !M || (T = !1);
                                    break;
                                case w.CODE_SHIFT:
                                    _ = !0, n = w.CODE_CODE_B;
                                    break;
                                case w.CODE_CODE_B:
                                    n = w.CODE_CODE_B;
                                    break;
                                case w.CODE_CODE_C:
                                    n = w.CODE_CODE_C;
                                    break;
                                case w.CODE_STOP:
                                    v = !0
                            }
                            break;
                        case w.CODE_CODE_B:
                            if (S < 96) y += M === T ? String.fromCharCode(" ".charCodeAt(0) + S) : String.fromCharCode(" ".charCodeAt(0) + S + 128), M = !1;
                            else switch (S !== w.CODE_STOP && (b = !1), S) {
                                case w.CODE_FNC_1:
                                    o && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
                                    break;
                                case w.CODE_FNC_2:
                                case w.CODE_FNC_3:
                                    break;
                                case w.CODE_FNC_4_B:
                                    M = !T && M ? !(T = !0) : !T || !M || (T = !1);
                                    break;
                                case w.CODE_SHIFT:
                                    _ = !0, n = w.CODE_CODE_A;
                                    break;
                                case w.CODE_CODE_A:
                                    n = w.CODE_CODE_A;
                                    break;
                                case w.CODE_CODE_C:
                                    n = w.CODE_CODE_C;
                                    break;
                                case w.CODE_STOP:
                                    v = !0
                            }
                            break;
                        case w.CODE_CODE_C:
                            if (S < 100) S < 10 && (y += "0"), y += S;
                            else switch (S !== w.CODE_STOP && (b = !1), S) {
                                case w.CODE_FNC_1:
                                    o && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
                                    break;
                                case w.CODE_CODE_A:
                                    n = w.CODE_CODE_A;
                                    break;
                                case w.CODE_CODE_B:
                                    n = w.CODE_CODE_B;
                                    break;
                                case w.CODE_STOP:
                                    v = !0
                            }
                    }
                    N && (n = n === w.CODE_CODE_A ? w.CODE_CODE_B : w.CODE_CODE_A)
                }
                var R = A - C;
                if (A = e.getNextUnset(A), !e.isRange(A, Math.min(e.getSize(), A + (A - C) / 2), !1)) throw new l.default;
                if ((I -= O * E) % 103 !== E) throw new h.default;
                var P = y.length;
                if (0 === P) throw new l.default;
                0 < P && b && (y = n === w.CODE_CODE_C ? y.substring(0, P - 2) : y.substring(0, P - 1));
                for (var D = (a[1] + a[0]) / 2, B = C + R / 2, k = g.length, L = new Uint8Array(k), F = 0; F < k; F++) L[F] = g[F];
                var U = [new f.default(D, t), new f.default(B, t)];
                return new s.default(y, L, 0, U, i.default.CODE_128, (new Date).getTime())
            }, w.CODE_PATTERNS = [
                [2, 1, 2, 2, 2, 2],
                [2, 2, 2, 1, 2, 2],
                [2, 2, 2, 2, 2, 1],
                [1, 2, 1, 2, 2, 3],
                [1, 2, 1, 3, 2, 2],
                [1, 3, 1, 2, 2, 2],
                [1, 2, 2, 2, 1, 3],
                [1, 2, 2, 3, 1, 2],
                [1, 3, 2, 2, 1, 2],
                [2, 2, 1, 2, 1, 3],
                [2, 2, 1, 3, 1, 2],
                [2, 3, 1, 2, 1, 2],
                [1, 1, 2, 2, 3, 2],
                [1, 2, 2, 1, 3, 2],
                [1, 2, 2, 2, 3, 1],
                [1, 1, 3, 2, 2, 2],
                [1, 2, 3, 1, 2, 2],
                [1, 2, 3, 2, 2, 1],
                [2, 2, 3, 2, 1, 1],
                [2, 2, 1, 1, 3, 2],
                [2, 2, 1, 2, 3, 1],
                [2, 1, 3, 2, 1, 2],
                [2, 2, 3, 1, 1, 2],
                [3, 1, 2, 1, 3, 1],
                [3, 1, 1, 2, 2, 2],
                [3, 2, 1, 1, 2, 2],
                [3, 2, 1, 2, 2, 1],
                [3, 1, 2, 2, 1, 2],
                [3, 2, 2, 1, 1, 2],
                [3, 2, 2, 2, 1, 1],
                [2, 1, 2, 1, 2, 3],
                [2, 1, 2, 3, 2, 1],
                [2, 3, 2, 1, 2, 1],
                [1, 1, 1, 3, 2, 3],
                [1, 3, 1, 1, 2, 3],
                [1, 3, 1, 3, 2, 1],
                [1, 1, 2, 3, 1, 3],
                [1, 3, 2, 1, 1, 3],
                [1, 3, 2, 3, 1, 1],
                [2, 1, 1, 3, 1, 3],
                [2, 3, 1, 1, 1, 3],
                [2, 3, 1, 3, 1, 1],
                [1, 1, 2, 1, 3, 3],
                [1, 1, 2, 3, 3, 1],
                [1, 3, 2, 1, 3, 1],
                [1, 1, 3, 1, 2, 3],
                [1, 1, 3, 3, 2, 1],
                [1, 3, 3, 1, 2, 1],
                [3, 1, 3, 1, 2, 1],
                [2, 1, 1, 3, 3, 1],
                [2, 3, 1, 1, 3, 1],
                [2, 1, 3, 1, 1, 3],
                [2, 1, 3, 3, 1, 1],
                [2, 1, 3, 1, 3, 1],
                [3, 1, 1, 1, 2, 3],
                [3, 1, 1, 3, 2, 1],
                [3, 3, 1, 1, 2, 1],
                [3, 1, 2, 1, 1, 3],
                [3, 1, 2, 3, 1, 1],
                [3, 3, 2, 1, 1, 1],
                [3, 1, 4, 1, 1, 1],
                [2, 2, 1, 4, 1, 1],
                [4, 3, 1, 1, 1, 1],
                [1, 1, 1, 2, 2, 4],
                [1, 1, 1, 4, 2, 2],
                [1, 2, 1, 1, 2, 4],
                [1, 2, 1, 4, 2, 1],
                [1, 4, 1, 1, 2, 2],
                [1, 4, 1, 2, 2, 1],
                [1, 1, 2, 2, 1, 4],
                [1, 1, 2, 4, 1, 2],
                [1, 2, 2, 1, 1, 4],
                [1, 2, 2, 4, 1, 1],
                [1, 4, 2, 1, 1, 2],
                [1, 4, 2, 2, 1, 1],
                [2, 4, 1, 2, 1, 1],
                [2, 2, 1, 1, 1, 4],
                [4, 1, 3, 1, 1, 1],
                [2, 4, 1, 1, 1, 2],
                [1, 3, 4, 1, 1, 1],
                [1, 1, 1, 2, 4, 2],
                [1, 2, 1, 1, 4, 2],
                [1, 2, 1, 2, 4, 1],
                [1, 1, 4, 2, 1, 2],
                [1, 2, 4, 1, 1, 2],
                [1, 2, 4, 2, 1, 1],
                [4, 1, 1, 2, 1, 2],
                [4, 2, 1, 1, 1, 2],
                [4, 2, 1, 2, 1, 1],
                [2, 1, 2, 1, 4, 1],
                [2, 1, 4, 1, 2, 1],
                [4, 1, 2, 1, 2, 1],
                [1, 1, 1, 1, 4, 3],
                [1, 1, 1, 3, 4, 1],
                [1, 3, 1, 1, 4, 1],
                [1, 1, 4, 1, 1, 3],
                [1, 1, 4, 3, 1, 1],
                [4, 1, 1, 1, 1, 3],
                [4, 1, 1, 3, 1, 1],
                [1, 1, 3, 1, 4, 1],
                [1, 1, 4, 1, 3, 1],
                [3, 1, 1, 1, 4, 1],
                [4, 1, 1, 1, 3, 1],
                [2, 1, 1, 4, 1, 2],
                [2, 1, 1, 2, 1, 4],
                [2, 1, 1, 2, 3, 2],
                [2, 3, 3, 1, 1, 1, 2]
            ], w.MAX_AVG_VARIANCE = .25, w.MAX_INDIVIDUAL_VARIANCE = .7, w.CODE_SHIFT = 98, w.CODE_CODE_C = 99, w.CODE_CODE_B = 100, w.CODE_CODE_A = 101, w.CODE_FNC_1 = 102, w.CODE_FNC_2 = 97, w.CODE_FNC_3 = 96, w.CODE_FNC_4_A = 101, w.CODE_FNC_4_B = 100, w.CODE_START_A = 103, w.CODE_START_B = 104, w.CODE_START_C = 105, w.CODE_STOP = 106, w);

        function w() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = p
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(75),
            u = r(76),
            s = r(9),
            f = r(4),
            d = r(0),
            l = r(11),
            c = r(2),
            h = r(3),
            p = r(77),
            w = r(54),
            g = r(14),
            v = r(78),
            _ = r(7),
            y = r(10),
            C = (o(A, a = i.default), A.prototype.decodeRow = function (t, e, r) {
                var n = this.decodePair(e, !1, t, r);
                A.addOrTally(this.possibleLeftPairs, n), e.reverse();
                var o = this.decodePair(e, !0, t, r);
                A.addOrTally(this.possibleRightPairs, o), e.reverse();
                for (var a = 0, i = this.possibleLeftPairs; a < i.length; a++) {
                    var u = i[a];
                    if (1 < u.getCount())
                        for (var s = 0, f = this.possibleRightPairs; s < f.length; s++) {
                            var l = f[s];
                            if (1 < l.getCount() && A.checkChecksum(u, l)) return A.constructResult(u, l)
                        }
                }
                throw new d.default
            }, A.addOrTally = function (t, e) {
                if (null != e) {
                    for (var r = !1, n = 0, o = t; n < o.length; n++) {
                        var a = o[n];
                        if (a.getValue() === e.getValue()) {
                            a.incrementCount(), r = !0;
                            break
                        }
                    }
                    r || t.push(e)
                }
            }, A.prototype.reset = function () {
                this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0
            }, A.constructResult = function (t, e) {
                for (var r = 4537077 * t.getValue() + e.getValue(), n = new String(r).toString(), o = new l.default, a = 13 - n.length; 0 < a; a--) o.append("0");
                o.append(n);
                var i = 0;
                for (a = 0; a < 13; a++) {
                    var u = o.charAt(a).charCodeAt(0) - "0".charCodeAt(0);
                    i += 0 == (1 & a) ? 3 * u : u
                }
                10 == (i = 10 - i % 10) && (i = 0), o.append(i.toString());
                var f = t.getFinderPattern().getResultPoints(),
                    d = e.getFinderPattern().getResultPoints();
                return new s.default(o.toString(), null, 0, [f[0], f[1], d[0], d[1]], c.default.RSS_14, (new Date).getTime())
            }, A.checkChecksum = function (t, e) {
                var r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
                    n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
                return 72 < n && n--, 8 < n && n--, r === n
            }, A.prototype.decodePair = function (t, e, r, n) {
                try {
                    var o = this.findFinderPattern(t, e),
                        a = this.parseFoundFinderPattern(t, r, e, o),
                        i = null == n ? null : n.get(f.default.NEED_RESULT_POINT_CALLBACK);
                    if (null != i) {
                        var s = (o[0] + o[1]) / 2;
                        e && (s = t.getSize() - 1 - s), i.foundPossibleResultPoint(new h.default(s, r))
                    }
                    var d = this.decodeDataCharacter(t, a, !0),
                        l = this.decodeDataCharacter(t, a, !1);
                    return new u.default(1597 * d.getValue() + l.getValue(), d.getChecksumPortion() + 4 * l.getChecksumPortion(), a)
                } catch (t) {
                    return null
                }
            }, A.prototype.decodeDataCharacter = function (t, e, r) {
                for (var n = this.getDataCharacterCounters(), o = 0; o < n.length; o++) n[o] = 0;
                if (r) y.default.recordPatternInReverse(t, e.getStartEnd()[0], n);
                else {
                    y.default.recordPattern(t, e.getStartEnd()[1] + 1, n);
                    for (var a = 0, i = n.length - 1; a < i; a++, i--) {
                        var u = n[a];
                        n[a] = n[i], n[i] = u
                    }
                }
                var s = r ? 16 : 15,
                    f = g.default.sum(new Int32Array(n)) / s,
                    l = this.getOddCounts(),
                    c = this.getEvenCounts(),
                    h = this.getOddRoundingErrors(),
                    p = this.getEvenRoundingErrors();
                for (a = 0; a < n.length; a++) {
                    var _ = n[a] / f,
                        C = Math.floor(.5 + _);
                    C < 1 ? C = 1 : 8 < C && (C = 8);
                    var m = Math.floor(a / 2);
                    0 == (1 & a) ? (l[m] = C, h[m] = _ - C) : (c[m] = C, p[m] = _ - C)
                }
                this.adjustOddEvenCounts(r, s);
                var E = 0,
                    S = 0;
                for (a = l.length - 1; 0 <= a; a--) S *= 9, S += l[a], E += l[a];
                var I = 0,
                    O = 0;
                for (a = c.length - 1; 0 <= a; a--) I *= 9, I += c[a], O += c[a];
                var b = S + 3 * I;
                if (r) {
                    if (0 != (1 & E) || 12 < E || E < 4) throw new d.default;
                    var T = 9 - (B = A.OUTSIDE_ODD_WIDEST[D = (12 - E) / 2]),
                        M = v.default.getRSSvalue(l, B, !1),
                        N = v.default.getRSSvalue(c, T, !0),
                        R = A.OUTSIDE_EVEN_TOTAL_SUBSET[D],
                        P = A.OUTSIDE_GSUM[D];
                    return new w.default(M * R + N + P, b)
                }
                if (0 != (1 & O) || 10 < O || O < 4) throw new d.default;
                T = 9 - (B = A.INSIDE_ODD_WIDEST[D = (10 - O) / 2]), M = v.default.getRSSvalue(l, B, !0), N = v.default.getRSSvalue(c, T, !1);
                var D, B, k = A.INSIDE_ODD_TOTAL_SUBSET[D];
                return P = A.INSIDE_GSUM[D], new w.default(N * k + M + P, b)
            }, A.prototype.findFinderPattern = function (t, e) {
                var r = this.getDecodeFinderCounters();
                r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0;
                for (var n = t.getSize(), o = !1, a = 0; a < n && e !== (o = !t.get(a));) a++;
                for (var u = 0, s = a, f = a; f < n; f++)
                    if (t.get(f) !== o) r[u]++;
                    else {
                        if (3 === u) {
                            if (i.default.isFinderPattern(r)) return [s, f];
                            s += r[0] + r[1], r[0] = r[2], r[1] = r[3], r[2] = 0, r[3] = 0, u--
                        } else u++;
                        r[u] = 1, o = !o
                    } throw new d.default
            }, A.prototype.parseFoundFinderPattern = function (t, e, r, n) {
                for (var o = t.get(n[0]), a = n[0] - 1; 0 <= a && o !== t.get(a);) a--;
                a++;
                var i = n[0] - a,
                    u = this.getDecodeFinderCounters(),
                    s = new Array(u.length);
                _.default.arraycopy(u, 0, s, 1, u.length - 1), s[0] = i;
                var f = this.parseFinderValue(s, A.FINDER_PATTERNS),
                    d = a,
                    l = n[1];
                return r && (d = t.getSize() - 1 - d, l = t.getSize() - 1 - l), new p.default(f, [a, n[1]], d, l, e)
            }, A.prototype.adjustOddEvenCounts = function (t, e) {
                var r = g.default.sum(new Int32Array(this.getOddCounts())),
                    n = g.default.sum(new Int32Array(this.getEvenCounts())),
                    o = !1,
                    a = !1,
                    u = !1,
                    s = !1;
                t ? (12 < r ? a = !0 : r < 4 && (o = !0), 12 < n ? s = !0 : n < 4 && (u = !0)) : (11 < r ? a = !0 : r < 5 && (o = !0), 10 < n ? s = !0 : n < 4 && (u = !0));
                var f = r + n - e,
                    l = (1 & r) == (t ? 1 : 0),
                    c = 1 == (1 & n);
                if (1 == f)
                    if (l) {
                        if (c) throw new d.default;
                        a = !0
                    } else {
                        if (!c) throw new d.default;
                        s = !0
                    }
                else if (-1 == f)
                    if (l) {
                        if (c) throw new d.default;
                        o = !0
                    } else {
                        if (!c) throw new d.default;
                        u = !0
                    }
                else {
                    if (0 != f) throw new d.default;
                    if (l) {
                        if (!c) throw new d.default;
                        r < n ? s = o = !0 : u = a = !0
                    } else if (c) throw new d.default
                }
                if (o) {
                    if (a) throw new d.default;
                    i.default.increment(this.getOddCounts(), this.getOddRoundingErrors())
                }
                if (a && i.default.decrement(this.getOddCounts(), this.getOddRoundingErrors()), u) {
                    if (s) throw new d.default;
                    i.default.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                }
                s && i.default.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
            }, A.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], A.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], A.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], A.INSIDE_GSUM = [0, 336, 1036, 1516], A.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], A.INSIDE_ODD_WIDEST = [2, 4, 6, 8], A.FINDER_PATTERNS = [
                [3, 8, 2, 1],
                [3, 5, 5, 1],
                [3, 3, 7, 1],
                [3, 1, 9, 1],
                [2, 7, 4, 1],
                [2, 5, 6, 1],
                [2, 3, 8, 1],
                [1, 5, 7, 1],
                [1, 3, 9, 1]
            ], A);

        function A() {
            var t = null !== a && a.apply(this, arguments) || this;
            return t.possibleLeftPairs = [], t.possibleRightPairs = [], t
        }
        e.default = C
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.getValue = function () {
            return this.value
        }, o.prototype.getChecksumPortion = function () {
            return this.checksumPortion
        }, o.prototype.toString = function () {
            return this.value + "(" + this.checksumPortion + ")"
        }, o.prototype.equals = function (t) {
            if (!(t instanceof o)) return !1;
            var e = t;
            return this.value === e.value && this.checksumPortion === e.checksumPortion
        }, o.prototype.hashCode = function () {
            return this.value ^ this.checksumPortion
        }, o);

        function o(t, e) {
            this.value = t, this.checksumPortion = e
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(2),
            u = r(4),
            s = r(9),
            f = r(3),
            d = r(10),
            l = r(11),
            c = r(7),
            h = r(5),
            p = r(0),
            w = (o(g, a = d.default), g.prototype.decodeRow = function (t, e, r) {
                var n = this.decodeStart(e),
                    o = this.decodeEnd(e),
                    a = new l.default;
                g.decodeMiddle(e, n[1], o[0], a);
                var d = a.toString(),
                    c = null;
                null != r && (c = r.get(u.default.ALLOWED_LENGTHS)), null == c && (c = g.DEFAULT_ALLOWED_LENGTHS);
                for (var p = d.length, w = !1, v = 0, _ = 0, y = c; _ < y.length; _++) {
                    var C = y[_];
                    if (p === C) {
                        w = !0;
                        break
                    }
                    v < C && (v = C)
                }
                if (!w && v < p && (w = !0), !w) throw new h.default;
                var A = [new f.default(n[1], t), new f.default(o[0], t)];
                return new s.default(d, null, 0, A, i.default.ITF, (new Date).getTime())
            }, g.decodeMiddle = function (t, e, r, n) {
                var o = new Array(10),
                    a = new Array(5),
                    i = new Array(5);
                for (o.fill(0), a.fill(0), i.fill(0); e < r;) {
                    d.default.recordPattern(t, e, o);
                    for (var u = 0; u < 5; u++) {
                        var s = 2 * u;
                        a[u] = o[s], i[u] = o[1 + s]
                    }
                    var f = g.decodeDigit(a);
                    n.append(f.toString()), f = this.decodeDigit(i), n.append(f.toString()), o.forEach(function (t) {
                        e += t
                    })
                }
            }, g.prototype.decodeStart = function (t) {
                var e = g.skipWhiteSpace(t),
                    r = g.findGuardPattern(t, e, g.START_PATTERN);
                return this.narrowLineWidth = (r[1] - r[0]) / 4, this.validateQuietZone(t, r[0]), r
            }, g.prototype.validateQuietZone = function (t, e) {
                var r = 10 * this.narrowLineWidth;
                r = r < e ? r : e;
                for (var n = e - 1; 0 < r && 0 <= n && !t.get(n); n--) r--;
                if (0 !== r) throw new p.default
            }, g.skipWhiteSpace = function (t) {
                var e = t.getSize(),
                    r = t.getNextSet(0);
                if (r === e) throw new p.default;
                return r
            }, g.prototype.decodeEnd = function (t) {
                t.reverse();
                try {
                    var e = g.skipWhiteSpace(t),
                        r = void 0;
                    try {
                        r = g.findGuardPattern(t, e, g.END_PATTERN_REVERSED[0])
                    } catch (n) {
                        r = g.findGuardPattern(t, e, g.END_PATTERN_REVERSED[1])
                    }
                    this.validateQuietZone(t, r[0]);
                    var n = r[0];
                    return r[0] = t.getSize() - r[1], r[1] = t.getSize() - n, r
                } finally {
                    t.reverse()
                }
            }, g.findGuardPattern = function (t, e, r) {
                var n = r.length,
                    o = new Array(n),
                    a = t.getSize(),
                    i = !1,
                    u = 0,
                    s = e;
                o.fill(0);
                for (var f = e; f < a; f++)
                    if (t.get(f) !== i) o[u]++;
                    else {
                        if (u === n - 1) {
                            if (d.default.patternMatchVariance(o, r, g.MAX_INDIVIDUAL_VARIANCE) < g.MAX_AVG_VARIANCE) return [s, f];
                            s += o[0] + o[1], c.default.arraycopy(o, 2, o, 0, u - 1), o[u - 1] = 0, o[u] = 0, u--
                        } else u++;
                        o[u] = 1, i = !i
                    } throw new p.default
            }, g.decodeDigit = function (t) {
                for (var e = g.MAX_AVG_VARIANCE, r = -1, n = g.PATTERNS.length, o = 0; o < n; o++) {
                    var a = g.PATTERNS[o],
                        i = d.default.patternMatchVariance(t, a, g.MAX_INDIVIDUAL_VARIANCE);
                    i < e ? (e = i, r = o) : i === e && (r = -1)
                }
                if (0 <= r) return r % 10;
                throw new p.default
            }, g.W = 3, g.w = 2, g.N = 1, g.PATTERNS = [
                [1, 1, 2, 2, 1],
                [2, 1, 1, 1, 2],
                [1, 2, 1, 1, 2],
                [2, 2, 1, 1, 1],
                [1, 1, 2, 1, 2],
                [2, 1, 2, 1, 1],
                [1, 2, 2, 1, 1],
                [1, 1, 1, 2, 2],
                [2, 1, 1, 2, 1],
                [1, 2, 1, 2, 1],
                [1, 1, 3, 3, 1],
                [3, 1, 1, 1, 3],
                [1, 3, 1, 1, 3],
                [3, 3, 1, 1, 1],
                [1, 1, 3, 1, 3],
                [3, 1, 3, 1, 1],
                [1, 3, 3, 1, 1],
                [1, 1, 1, 3, 3],
                [3, 1, 1, 3, 1],
                [1, 3, 1, 3, 1]
            ], g.MAX_AVG_VARIANCE = .38, g.MAX_INDIVIDUAL_VARIANCE = .5, g.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], g.START_PATTERN = [1, 1, 1, 1], g.END_PATTERN_REVERSED = [
                [1, 1, 2],
                [1, 1, 3]
            ], g);

        function g() {
            var t = null !== a && a.apply(this, arguments) || this;
            return t.narrowLineWidth = -1, t
        }
        e.default = w
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(2),
            u = r(20),
            s = r(0),
            f = (o(d, a = u.default), d.prototype.decodeMiddle = function (t, e, r) {
                var n = this.decodeMiddleCounters;
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                for (var o = t.getSize(), a = e[1], i = 0, s = 0; s < 6 && a < o; s++) {
                    var f = u.default.decodeDigit(t, n, a, u.default.L_AND_G_PATTERNS);
                    r += String.fromCharCode("0".charCodeAt(0) + f % 10);
                    for (var l = 0, c = n; l < c.length; l++) a += c[l];
                    10 <= f && (i |= 1 << 5 - s)
                }
                for (r = d.determineFirstDigit(r, i), a = u.default.findGuardPattern(t, a, !0, u.default.MIDDLE_PATTERN, new Array(u.default.MIDDLE_PATTERN.length).fill(0))[1], s = 0; s < 6 && a < o; s++) {
                    f = u.default.decodeDigit(t, n, a, u.default.L_PATTERNS), r += String.fromCharCode("0".charCodeAt(0) + f);
                    for (var h = 0, p = n; h < p.length; h++) a += p[h]
                }
                return {
                    rowOffset: a,
                    resultString: r
                }
            }, d.prototype.getBarcodeFormat = function () {
                return i.default.EAN_13
            }, d.determineFirstDigit = function (t, e) {
                for (var r = 0; r < 10; r++)
                    if (e === this.FIRST_DIGIT_ENCODINGS[r]) return String.fromCharCode("0".charCodeAt(0) + r) + t;
                throw new s.default
            }, d.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], d);

        function d() {
            var t = a.call(this) || this;
            return t.decodeMiddleCounters = [0, 0, 0, 0], t
        }
        e.default = f
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(60),
            u = r(8),
            s = r(38),
            f = r(0),
            d = (o(l, a = i.default), l.prototype.sampleGrid = function (t, e, r, n, o, a, i, u, f, d, l, c, h, p, w, g, v, _, y) {
                var C = s.default.quadrilateralToQuadrilateral(n, o, a, i, u, f, d, l, c, h, p, w, g, v, _, y);
                return this.sampleGridWithTransform(t, e, r, C)
            }, l.prototype.sampleGridWithTransform = function (t, e, r, n) {
                if (e <= 0 || r <= 0) throw new f.default;
                for (var o = new u.default(e, r), a = new Float32Array(2 * e), s = 0; s < r; s++) {
                    for (var d = a.length, l = s + .5, c = 0; c < d; c += 2) a[c] = c / 2 + .5, a[c + 1] = l;
                    n.transformPoints(a), i.default.checkAndNudgePoints(t, a);
                    try {
                        for (c = 0; c < d; c += 2) t.get(Math.floor(a[c]), Math.floor(a[c + 1])) && o.set(c / 2, s)
                    } catch (t) {
                        throw new f.default
                    }
                }
                return o
            }, l);

        function l() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = d
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(0),
            o = (a.checkAndNudgePoints = function (t, e) {
                for (var r = t.getWidth(), o = t.getHeight(), a = !0, i = 0; i < e.length && a; i += 2) {
                    var u = Math.floor(e[i]),
                        s = Math.floor(e[i + 1]);
                    if (u < -1 || r < u || s < -1 || o < s) throw new n.default;
                    a = !1, -1 === u ? a = !(e[i] = 0) : u === r && (e[i] = r - 1, a = !0), -1 === s ? a = !(e[i + 1] = 0) : s === o && (e[i + 1] = o - 1, a = !0)
                }
                for (a = !0, i = e.length - 2; 0 <= i && a; i -= 2) {
                    if (u = Math.floor(e[i]), s = Math.floor(e[i + 1]), u < -1 || r < u || s < -1 || o < s) throw new n.default;
                    a = !1, -1 === u ? a = !(e[i] = 0) : u === r && (e[i] = r - 1, a = !0), -1 === s ? a = !(e[i + 1] = 0) : s === o && (e[i + 1] = o - 1, a = !0)
                }
            }, a);

        function a() {}
        e.default = o
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(3),
            o = r(14),
            a = r(0),
            i = (u.prototype.detect = function () {
                for (var t = this.leftInit, e = this.rightInit, r = this.upInit, n = this.downInit, o = !1, i = !0, u = !1, s = !1, f = !1, d = !1, l = !1, c = this.width, h = this.height; i;) {
                    for (var p = !(i = !1);
                        (p || !s) && e < c;)(p = this.containsBlackPoint(r, n, e, !1)) ? (e++, s = i = !0) : s || e++;
                    if (c <= e) {
                        o = !0;
                        break
                    }
                    for (var w = !0;
                        (w || !f) && n < h;)(w = this.containsBlackPoint(t, e, n, !0)) ? (n++, f = i = !0) : f || n++;
                    if (h <= n) {
                        o = !0;
                        break
                    }
                    for (var g = !0;
                        (g || !d) && 0 <= t;)(g = this.containsBlackPoint(r, n, t, !1)) ? (t--, d = i = !0) : d || t--;
                    if (t < 0) {
                        o = !0;
                        break
                    }
                    for (var v = !0;
                        (v || !l) && 0 <= r;)(v = this.containsBlackPoint(t, e, r, !0)) ? (r--, l = i = !0) : l || r--;
                    if (r < 0) {
                        o = !0;
                        break
                    }
                    i && (u = !0)
                }
                if (o || !u) throw new a.default;
                for (var _ = e - t, y = null, C = 1; null === y && C < _; C++) y = this.getBlackPointOnSegment(t, n - C, t + C, n);
                if (null == y) throw new a.default;
                var A = null;
                for (C = 1; null === A && C < _; C++) A = this.getBlackPointOnSegment(t, r + C, t + C, r);
                if (null == A) throw new a.default;
                var m = null;
                for (C = 1; null === m && C < _; C++) m = this.getBlackPointOnSegment(e, r + C, e - C, r);
                if (null == m) throw new a.default;
                var E = null;
                for (C = 1; null === E && C < _; C++) E = this.getBlackPointOnSegment(e, n - C, e - C, n);
                if (null == E) throw new a.default;
                return this.centerEdges(E, y, m, A)
            }, u.prototype.getBlackPointOnSegment = function (t, e, r, a) {
                for (var i = o.default.round(o.default.distance(t, e, r, a)), u = (r - t) / i, s = (a - e) / i, f = this.image, d = 0; d < i; d++) {
                    var l = o.default.round(t + d * u),
                        c = o.default.round(e + d * s);
                    if (f.get(l, c)) return new n.default(l, c)
                }
                return null
            }, u.prototype.centerEdges = function (t, e, r, o) {
                var a = t.getX(),
                    i = t.getY(),
                    s = e.getX(),
                    f = e.getY(),
                    d = r.getX(),
                    l = r.getY(),
                    c = o.getX(),
                    h = o.getY(),
                    p = u.CORR;
                return a < this.width / 2 ? [new n.default(c - p, h + p), new n.default(s + p, f + p), new n.default(d - p, l - p), new n.default(a + p, i - p)] : [new n.default(c + p, h + p), new n.default(s + p, f - p), new n.default(d - p, l + p), new n.default(a - p, i - p)]
            }, u.prototype.containsBlackPoint = function (t, e, r, n) {
                var o = this.image;
                if (n) {
                    for (var a = t; a <= e; a++)
                        if (o.get(a, r)) return !0
                } else
                    for (var i = t; i <= e; i++)
                        if (o.get(r, i)) return !0;
                return !1
            }, u.INIT_SIZE = 10, u.CORR = 1, u);

        function u(t, e, r, n) {
            this.image = t, this.height = t.getHeight(), this.width = t.getWidth(), null == e && (e = u.INIT_SIZE), null == r && (r = t.getWidth() / 2 | 0), null == n && (n = t.getHeight() / 2 | 0);
            var o = e / 2 | 0;
            if (this.leftInit = r - o, this.rightInit = r + o, this.upInit = n - o, this.downInit = n + o, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) throw new a.default
        }
        e.default = i
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            o = r(2),
            a = r(39),
            i = r(30),
            u = r(31),
            s = r(0),
            f = r(67),
            d = (l.prototype.decode = function (t, e) {
                return this.setHints(e), this.decodeInternal(t)
            }, l.prototype.decodeWithState = function (t) {
                return null !== this.readers && void 0 !== this.readers || this.setHints(null), this.decodeInternal(t)
            }, l.prototype.setHints = function (t) {
                var e = null != (this.hints = t) && void 0 !== t.get(n.default.TRY_HARDER),
                    r = null == t ? null : t.get(n.default.POSSIBLE_FORMATS),
                    s = new Array;
                if (null != r) {
                    var f = r.some(function (t) {
                        return t === o.default.UPC_A || t === o.default.UPC_E || t === o.default.EAN_13 || t === o.default.EAN_8 || t === o.default.CODABAR || t === o.default.CODE_39 || t === o.default.CODE_93 || t === o.default.CODE_128 || t === o.default.ITF || t === o.default.RSS_14 || t === o.default.RSS_EXPANDED
                    });
                    f && !e && s.push(new i.default(t)), r.includes(o.default.QR_CODE) && s.push(new a.default), r.includes(o.default.DATA_MATRIX) && s.push(new u.default), f && e && s.push(new i.default(t))
                }
                0 === s.length && (e || s.push(new i.default(t)), s.push(new a.default), s.push(new u.default), e && s.push(new i.default(t))), this.readers = s
            }, l.prototype.reset = function () {
                if (null !== this.readers)
                    for (var t = 0, e = this.readers; t < e.length; t++) e[t].reset()
            }, l.prototype.decodeInternal = function (t) {
                if (null === this.readers) throw new f.default("No readers where selected, nothing can be read.");
                for (var e = 0, r = this.readers; e < r.length; e++) {
                    var n = r[e];
                    try {
                        return n.decode(t, this.hints)
                    } catch (t) {
                        if (t instanceof f.default) continue
                    }
                }
                throw new s.default("No MultiFormat Readers were able to detect the code.")
            }, l);

        function l() {}
        e.default = d
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(25),
            o = r(23),
            a = (i.numBitsDiffering = function (t, e) {
                return o.default.bitCount(t ^ e)
            }, i.decodeFormatInformation = function (t, e) {
                var r = i.doDecodeFormatInformation(t, e);
                return null !== r ? r : i.doDecodeFormatInformation(t ^ i.FORMAT_INFO_MASK_QR, e ^ i.FORMAT_INFO_MASK_QR)
            }, i.doDecodeFormatInformation = function (t, e) {
                for (var r = Number.MAX_SAFE_INTEGER, n = 0, o = 0, a = i.FORMAT_INFO_DECODE_LOOKUP; o < a.length; o++) {
                    var u = a[o],
                        s = u[0];
                    if (s === t || s === e) return new i(u[1]);
                    var f = i.numBitsDiffering(t, s);
                    f < r && (n = u[1], r = f), t !== e && (f = i.numBitsDiffering(e, s)) < r && (n = u[1], r = f)
                }
                return r <= 3 ? new i(n) : null
            }, i.prototype.getErrorCorrectionLevel = function () {
                return this.errorCorrectionLevel
            }, i.prototype.getDataMask = function () {
                return this.dataMask
            }, i.prototype.hashCode = function () {
                return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
            }, i.prototype.equals = function (t) {
                if (!(t instanceof i)) return !1;
                var e = t;
                return this.errorCorrectionLevel === e.errorCorrectionLevel && this.dataMask === e.dataMask
            }, i.FORMAT_INFO_MASK_QR = 21522, i.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])], i);

        function i(t) {
            this.errorCorrectionLevel = n.default.forBits(t >> 3 & 3), this.dataMask = 7 & t
        }
        e.default = a
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.isMirrored = function () {
            return this.mirrored
        }, o.prototype.applyMirroredCorrection = function (t) {
            if (this.mirrored && null !== t && !(t.length < 3)) {
                var e = t[0];
                t[0] = t[2], t[2] = e
            }
        }, o);

        function o(t) {
            this.mirrored = t
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            o = r(22),
            a = (i.prototype.StringUtils = function () {}, i.guessEncoding = function (t, e) {
                if (null != e && void 0 !== e.get(n.default.CHARACTER_SET)) return e.get(n.default.CHARACTER_SET).toString();
                for (var r = t.length, o = !0, a = !0, u = !0, s = 0, f = 0, d = 0, l = 0, c = 0, h = 0, p = 0, w = 0, g = 0, v = 0, _ = 0, y = 3 < t.length && 239 === t[0] && 187 === t[1] && 191 === t[2], C = 0; C < r && (o || a || u); C++) {
                    var A = 255 & t[C];
                    u && (0 < s ? 0 == (128 & A) ? u = !1 : s-- : 0 != (128 & A) && (0 == (64 & A) ? u = !1 : (s++, 0 == (32 & A) ? f++ : (s++, 0 == (16 & A) ? d++ : (s++, 0 == (8 & A) ? l++ : u = !1))))), o && (127 < A && A < 160 ? o = !1 : 159 < A && (A < 192 || 215 == A || 247 == A) && _++), a && (0 < c ? A < 64 || 127 == A || 252 < A ? a = !1 : c-- : 128 == A || 160 == A || 239 < A ? a = !1 : 160 < A && A < 224 ? (h++, w = 0, g < ++p && (g = p)) : 127 < A ? (c++, p = 0, v < ++w && (v = w)) : w = p = 0)
                }
                return u && 0 < s && (u = !1), a && 0 < c && (a = !1), u && (y || 0 < f + d + l) ? i.UTF8 : a && (i.ASSUME_SHIFT_JIS || 3 <= g || 3 <= v) ? i.SHIFT_JIS : o && a ? 2 === g && 2 === h || r <= 10 * _ ? i.SHIFT_JIS : i.ISO88591 : o ? i.ISO88591 : a ? i.SHIFT_JIS : u ? i.UTF8 : i.PLATFORM_DEFAULT_ENCODING
            }, i.SHIFT_JIS = o.default.SJIS.getName(), i.GB2312 = "GB2312", i.ISO88591 = o.default.ISO8859_1.getName(), i.EUC_JP = "EUC_JP", i.UTF8 = o.default.UTF8.getName(), i.PLATFORM_DEFAULT_ENCODING = i.UTF8, i.ASSUME_SHIFT_JIS = !1, i);

        function i() {}
        e.default = a
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, a = r(1);
        (o = n = e.ModeValues || (e.ModeValues = {}))[o.TERMINATOR = 0] = "TERMINATOR", o[o.NUMERIC = 1] = "NUMERIC", o[o.ALPHANUMERIC = 2] = "ALPHANUMERIC", o[o.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", o[o.BYTE = 4] = "BYTE", o[o.ECI = 5] = "ECI", o[o.KANJI = 6] = "KANJI", o[o.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", o[o.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", o[o.HANZI = 9] = "HANZI";
        var i = (u.forBits = function (t) {
            var e = u.FOR_BITS.get(t);
            if (void 0 === e) throw new a.default;
            return e
        }, u.prototype.getCharacterCountBits = function (t) {
            var e, r = t.getVersionNumber();
            return e = r <= 9 ? 0 : r <= 26 ? 1 : 2, this.characterCountBitsForVersions[e]
        }, u.prototype.getValue = function () {
            return this.value
        }, u.prototype.getBits = function () {
            return this.bits
        }, u.prototype.equals = function (t) {
            if (!(t instanceof u)) return !1;
            var e = t;
            return this.value === e.value
        }, u.prototype.toString = function () {
            return this.stringValue
        }, u.FOR_BITS = new Map, u.FOR_VALUE = new Map, u.TERMINATOR = new u(n.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), u.NUMERIC = new u(n.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), u.ALPHANUMERIC = new u(n.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), u.STRUCTURED_APPEND = new u(n.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), u.BYTE = new u(n.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), u.ECI = new u(n.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), u.KANJI = new u(n.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), u.FNC1_FIRST_POSITION = new u(n.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), u.FNC1_SECOND_POSITION = new u(n.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), u.HANZI = new u(n.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), u);

        function u(t, e, r, n) {
            this.value = t, this.stringValue = e, this.characterCountBitsForVersions = r, this.bits = n, u.FOR_BITS.set(n, this), u.FOR_VALUE.set(t, this)
        }
        e.default = i
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(6),
            u = (o(s, a = i.default), s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(24),
            o = r(7),
            a = r(1),
            i = (u.prototype.buildGenerator = function (t) {
                var e = this.cachedGenerators;
                if (t >= e.length)
                    for (var r = e[e.length - 1], o = this.field, a = e.length; a <= t; a++) {
                        var i = r.multiply(new n.default(o, Int32Array.from([1, o.exp(a - 1 + o.getGeneratorBase())])));
                        e.push(i), r = i
                    }
                return e[t]
            }, u.prototype.encode = function (t, e) {
                if (0 === e) throw new a.default("No error correction bytes");
                var r = t.length - e;
                if (r <= 0) throw new a.default("No data bytes provided");
                var i = this.buildGenerator(e),
                    u = new Int32Array(r);
                o.default.arraycopy(t, 0, u, 0, r);
                for (var s = new n.default(this.field, u), f = (s = s.multiplyByMonomial(e, 1)).divide(i)[1].getCoefficients(), d = e - f.length, l = 0; l < d; l++) t[r + l] = 0;
                o.default.arraycopy(f, 0, t, r + d, f.length)
            }, u);

        function u(t) {
            this.field = t, this.cachedGenerators = [], this.cachedGenerators.push(new n.default(t, Int32Array.from([1])))
        }
        e.default = i
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = (a.applyMaskPenaltyRule1 = function (t) {
                return a.applyMaskPenaltyRule1Internal(t, !0) + a.applyMaskPenaltyRule1Internal(t, !1)
            }, a.applyMaskPenaltyRule2 = function (t) {
                for (var e = 0, r = t.getArray(), n = t.getWidth(), o = t.getHeight(), i = 0; i < o - 1; i++)
                    for (var u = r[i], s = 0; s < n - 1; s++) {
                        var f = u[s];
                        f === u[s + 1] && f === r[i + 1][s] && f === r[i + 1][s + 1] && e++
                    }
                return a.N2 * e
            }, a.applyMaskPenaltyRule3 = function (t) {
                for (var e = 0, r = t.getArray(), n = t.getWidth(), o = t.getHeight(), i = 0; i < o; i++)
                    for (var u = 0; u < n; u++) {
                        var s = r[i];
                        u + 6 < n && 1 === s[u] && 0 === s[u + 1] && 1 === s[u + 2] && 1 === s[u + 3] && 1 === s[u + 4] && 0 === s[u + 5] && 1 === s[u + 6] && (a.isWhiteHorizontal(s, u - 4, u) || a.isWhiteHorizontal(s, u + 7, u + 11)) && e++, i + 6 < o && 1 === r[i][u] && 0 === r[i + 1][u] && 1 === r[i + 2][u] && 1 === r[i + 3][u] && 1 === r[i + 4][u] && 0 === r[i + 5][u] && 1 === r[i + 6][u] && (a.isWhiteVertical(r, u, i - 4, i) || a.isWhiteVertical(r, u, i + 7, i + 11)) && e++
                    }
                return e * a.N3
            }, a.isWhiteHorizontal = function (t, e, r) {
                e = Math.max(e, 0), r = Math.min(r, t.length);
                for (var n = e; n < r; n++)
                    if (1 === t[n]) return !1;
                return !0
            }, a.isWhiteVertical = function (t, e, r, n) {
                r = Math.max(r, 0), n = Math.min(n, t.length);
                for (var o = r; o < n; o++)
                    if (1 === t[o][e]) return !1;
                return !0
            }, a.applyMaskPenaltyRule4 = function (t) {
                for (var e = 0, r = t.getArray(), n = t.getWidth(), o = t.getHeight(), i = 0; i < o; i++)
                    for (var u = r[i], s = 0; s < n; s++) 1 === u[s] && e++;
                var f = t.getHeight() * t.getWidth();
                return Math.floor(10 * Math.abs(2 * e - f) / f) * a.N4
            }, a.getDataMaskBit = function (t, e, r) {
                var o, a;
                switch (t) {
                    case 0:
                        o = r + e & 1;
                        break;
                    case 1:
                        o = 1 & r;
                        break;
                    case 2:
                        o = e % 3;
                        break;
                    case 3:
                        o = (r + e) % 3;
                        break;
                    case 4:
                        o = Math.floor(r / 2) + Math.floor(e / 3) & 1;
                        break;
                    case 5:
                        o = (1 & (a = r * e)) + a % 3;
                        break;
                    case 6:
                        o = (1 & (a = r * e)) + a % 3 & 1;
                        break;
                    case 7:
                        o = (a = r * e) % 3 + (r + e & 1) & 1;
                        break;
                    default:
                        throw new n.default("Invalid mask pattern: " + t)
                }
                return 0 === o
            }, a.applyMaskPenaltyRule1Internal = function (t, e) {
                for (var r = 0, n = e ? t.getHeight() : t.getWidth(), o = e ? t.getWidth() : t.getHeight(), i = t.getArray(), u = 0; u < n; u++) {
                    for (var s = 0, f = -1, d = 0; d < o; d++) {
                        var l = e ? i[u][d] : i[d][u];
                        l === f ? s++ : (5 <= s && (r += a.N1 + (s - 5)), s = 1, f = l)
                    }
                    5 <= s && (r += a.N1 + (s - 5))
                }
                return r
            }, a.N1 = 3, a.N2 = 3, a.N3 = 40, a.N4 = 10, a);

        function a() {}
        e.default = o
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = r(26),
            a = r(8),
            i = r(25),
            u = r(41),
            s = r(1),
            f = r(21),
            d = (l.prototype.encode = function (t, e, r, a, f) {
                if (0 === t.length) throw new s.default("Found empty contents");
                if (e !== n.default.QR_CODE) throw new s.default("Can only encode QR_CODE, but got " + e);
                if (r < 0 || a < 0) throw new s.default("Requested dimensions are too small: " + r + "x" + a);
                var d = i.default.L,
                    c = l.QUIET_ZONE_SIZE;
                null !== f && (void 0 !== f.get(o.default.ERROR_CORRECTION) && (d = i.default.fromString(f.get(o.default.ERROR_CORRECTION).toString())), void 0 !== f.get(o.default.MARGIN) && (c = Number.parseInt(f.get(o.default.MARGIN).toString(), 10)));
                var h = u.default.encode(t, d, f);
                return l.renderResult(h, r, a, c)
            }, l.renderResult = function (t, e, r, n) {
                var o = t.getMatrix();
                if (null === o) throw new f.default;
                for (var i = o.getWidth(), u = o.getHeight(), s = i + 2 * n, d = u + 2 * n, l = Math.max(e, s), c = Math.max(r, d), h = Math.min(Math.floor(l / s), Math.floor(c / d)), p = Math.floor((l - i * h) / 2), w = Math.floor((c - u * h) / 2), g = new a.default(l, c), v = 0, _ = w; v < u; v++, _ += h)
                    for (var y = 0, C = p; y < i; y++, C += h) 1 === o.get(y, v) && g.setRegion(C, _, h, h);
                return g
            }, l.QUIET_ZONE_SIZE = 4, l);

        function l() {}
        e.default = d
    }, function (t, e, r) {
        t.exports = r(44)
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(17),
            u = r(30),
            s = (o(f, a = i.BrowserCodeReader), f);

        function f(t, e) {
            return void 0 === t && (t = 500), a.call(this, new u.default(e), t, e) || this
        }
        e.BrowserBarcodeReader = s
    }, function (t, e, r) {
        function n(t, e) {
            void 0 === e && (e = t.constructor);
            var r = Error.captureStackTrace;
            r && r(t, e)
        }
        var o, a, i;
        o = e, a = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
        }, i = function (t) {
            function e(e) {
                var r = this.constructor,
                    o = t.call(this, e) || this;
                return Object.defineProperty(o, "name", {
                        value: r.name,
                        enumerable: !1
                    }),
                    function (t, e) {
                        var r = Object.setPrototypeOf;
                        r ? r(t, e) : t.__proto__ = e
                    }(o, r.prototype), n(o), o
            }
            return function (t, e) {
                function r() {
                    this.constructor = t
                }
                a(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }(e, t), e
        }(Error), o.CustomError = i, o.customErrorFactory = function (t, e) {
            function r() {
                for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
                if (!(this instanceof r)) return new(r.bind.apply(r, [void 0].concat(o)));
                e.apply(this, o), t.apply(this, o), this.name = t.name || e.name, n(this, r)
            }
            return void 0 === e && (e = Error), Object.defineProperties(r, {
                prototype: {
                    value: Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            writable: !0,
                            configurable: !0
                        }
                    })
                }
            })
        }
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.floatToIntBits = function (t) {
            return t
        }, o);

        function o() {}
        e.default = n
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(10),
            u = r(0),
            s = r(14),
            f = (o(d, a = i.default), d.prototype.getDecodeFinderCounters = function () {
                return this.decodeFinderCounters
            }, d.prototype.getDataCharacterCounters = function () {
                return this.dataCharacterCounters
            }, d.prototype.getOddRoundingErrors = function () {
                return this.oddRoundingErrors
            }, d.prototype.getEvenRoundingErrors = function () {
                return this.evenRoundingErrors
            }, d.prototype.getOddCounts = function () {
                return this.oddCounts
            }, d.prototype.getEvenCounts = function () {
                return this.evenCounts
            }, d.prototype.parseFinderValue = function (t, e) {
                for (var r = 0; r < e.length; r++)
                    if (i.default.patternMatchVariance(t, e[r], d.MAX_INDIVIDUAL_VARIANCE) < d.MAX_AVG_VARIANCE) return r;
                throw new u.default
            }, d.count = function (t) {
                return s.default.sum(new Int32Array(t))
            }, d.increment = function (t, e) {
                for (var r = 0, n = e[0], o = 1; o < t.length; o++) e[o] > n && (n = e[o], r = o);
                t[r]++
            }, d.decrement = function (t, e) {
                for (var r = 0, n = e[0], o = 1; o < t.length; o++) e[o] < n && (n = e[o], r = o);
                t[r]--
            }, d.isFinderPattern = function (t) {
                var e = t[0] + t[1],
                    r = e / (e + t[2] + t[3]);
                if (d.MIN_FINDER_PATTERN_RATIO <= r && r <= d.MAX_FINDER_PATTERN_RATIO) {
                    for (var n = Number.MAX_SAFE_INTEGER, o = Number.MIN_SAFE_INTEGER, a = 0, i = t; a < i.length; a++) {
                        var u = i[a];
                        o < u && (o = u), u < n && (n = u)
                    }
                    return o < 10 * n
                }
                return !1
            }, d.MAX_AVG_VARIANCE = .2, d.MAX_INDIVIDUAL_VARIANCE = .45, d.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, d.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, d);

        function d() {
            var t = a.call(this) || this;
            return t.decodeFinderCounters = new Array(4), t.dataCharacterCounters = new Array(8), t.oddRoundingErrors = new Array(4), t.evenRoundingErrors = new Array(4), t.oddCounts = new Array(t.dataCharacterCounters.length / 2), t.evenCounts = new Array(t.dataCharacterCounters.length / 2), t
        }
        e.default = f
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(54),
            u = (o(s, a = i.default), s.prototype.getFinderPattern = function () {
                return this.finderPattern
            }, s.prototype.getCount = function () {
                return this.count
            }, s.prototype.incrementCount = function () {
                this.count++
            }, s);

        function s(t, e, r) {
            var n = a.call(this, t, e) || this;
            return n.count = 0, n.finderPattern = r, n
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(3),
            o = (a.prototype.getValue = function () {
                return this.value
            }, a.prototype.getStartEnd = function () {
                return this.startEnd
            }, a.prototype.getResultPoints = function () {
                return this.resultPoints
            }, a.prototype.equals = function (t) {
                if (!(t instanceof a)) return !1;
                var e = t;
                return this.value === e.value
            }, a.prototype.hashCode = function () {
                return this.value
            }, a);

        function a(t, e, r, o, a) {
            this.value = t, this.startEnd = e, this.value = t, this.startEnd = e, this.resultPoints = new Array, this.resultPoints.push(new n.default(r, a)), this.resultPoints.push(new n.default(o, a))
        }
        e.default = o
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.RSSUtils = function () {}, o.getRSSvalue = function (t, e, r) {
            for (var n = 0, a = 0, i = t; a < i.length; a++) n += i[a];
            for (var u = 0, s = 0, f = t.length, d = 0; d < f - 1; d++) {
                var l = void 0;
                for (s |= (l = 1) << d; l < t[d]; l++, s &= ~(1 << d)) {
                    var c = o.combins(n - l - 1, f - d - 2);
                    if (r && 0 === s && f - d - 1 <= n - l - (f - d - 1) && (c -= o.combins(n - l - (f - d), f - d - 2)), 1 < f - d - 1) {
                        for (var h = 0, p = n - l - (f - d - 2); e < p; p--) h += o.combins(n - l - p - 1, f - d - 3);
                        c -= h * (f - 1 - d)
                    } else e < n - l && c--;
                    u += c
                }
                n -= l
            }
            return u
        }, o.combins = function (t, e) {
            var r, n;
            r = e < t - e ? t - (n = e) : (n = t - e, e);
            for (var o = 1, a = 1, i = t; r < i; i--) o *= i, a <= n && (o /= a, a++);
            for (; a <= n;) o /= a, a++;
            return o
        }, o);

        function o() {}
        e.default = n
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(2),
            u = r(4),
            s = r(10),
            f = r(56),
            d = r(83),
            l = r(0),
            c = (o(h, a = s.default), h.prototype.decodeRow = function (t, e, r) {
                for (var n = 0, o = this.readers; n < o.length; n++) {
                    var a = o[n];
                    try {
                        return a.decodeRow(t, e, r)
                    } catch (t) {}
                }
                throw new l.default
            }, h.prototype.reset = function () {
                for (var t = 0, e = this.readers; t < e.length; t++) e[t].reset()
            }, h);

        function h(t) {
            var e = a.call(this) || this,
                r = null == t ? null : t.get(u.default.POSSIBLE_FORMATS),
                n = [];
            return null != r && (-1 < r.indexOf(i.default.EAN_13) && n.push(new f.default), -1 < r.indexOf(i.default.EAN_8) && n.push(new d.default)), 0 === n.length && (n.push(new f.default), n.push(new d.default)), e.readers = n, e
        }
        e.default = c
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(20),
            o = r(81),
            a = r(82),
            i = (u.decodeRow = function (t, e, r) {
                var i = n.default.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN, new Array(this.EXTENSION_START_PATTERN.length).fill(0));
                try {
                    return (new o.default).decodeRow(t, e, i)
                } catch (r) {
                    return (new a.default).decodeRow(t, e, i)
                }
            }, u.EXTENSION_START_PATTERN = [1, 1, 2], u);

        function u() {}
        e.default = i
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = r(20),
            a = r(9),
            i = r(3),
            u = r(13),
            s = r(0),
            f = (d.prototype.decodeRow = function (t, e, r) {
                var o = this.decodeRowStringBuffer,
                    u = this.decodeMiddle(e, r, o),
                    s = o.toString(),
                    f = d.parseExtensionString(s),
                    l = [new i.default((r[0] + r[1]) / 2, t), new i.default(u, t)],
                    c = new a.default(s, null, 0, l, n.default.UPC_EAN_EXTENSION, (new Date).getTime());
                return null != f && c.putAllMetadata(f), c
            }, d.prototype.decodeMiddle = function (t, e, r) {
                var n = this.decodeMiddleCounters;
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                for (var a = t.getSize(), i = e[1], u = 0, f = 0; f < 5 && i < a; f++) {
                    var l = o.default.decodeDigit(t, n, i, o.default.L_AND_G_PATTERNS);
                    r += String.fromCharCode("0".charCodeAt(0) + l % 10);
                    for (var c = 0, h = n; c < h.length; c++) i += h[c];
                    10 <= l && (u |= 1 << 4 - f), 4 !== f && (i = t.getNextSet(i), i = t.getNextUnset(i))
                }
                if (5 !== r.length) throw new s.default;
                var p = this.determineCheckDigit(u);
                if (d.extensionChecksum(r.toString()) !== p) throw new s.default;
                return i
            }, d.extensionChecksum = function (t) {
                for (var e = t.length, r = 0, n = e - 2; 0 <= n; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                for (r *= 3, n = e - 1; 0 <= n; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                return (r *= 3) % 10
            }, d.prototype.determineCheckDigit = function (t) {
                for (var e = 0; e < 10; e++)
                    if (t === this.CHECK_DIGIT_ENCODINGS[e]) return e;
                throw new s.default
            }, d.parseExtensionString = function (t) {
                if (5 !== t.length) return null;
                var e = d.parseExtension5String(t);
                return null == e ? null : new Map([
                    [u.default.SUGGESTED_PRICE, e]
                ])
            }, d.parseExtension5String = function (t) {
                var e;
                switch (t.charAt(0)) {
                    case "0":
                        e = "£";
                        break;
                    case "5":
                        e = "$";
                        break;
                    case "9":
                        switch (t) {
                            case "90000":
                                return null;
                            case "99991":
                                return "0.00";
                            case "99990":
                                return "Used"
                        }
                        e = "";
                        break;
                    default:
                        e = ""
                }
                var r = parseInt(t.substring(1)),
                    n = r % 100;
                return e + (r / 100).toString() + "." + (n < 10 ? "0" + n : n.toString())
            }, d);

        function d() {
            this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = [0, 0, 0, 0], this.decodeRowStringBuffer = ""
        }
        e.default = f
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(2),
            o = r(20),
            a = r(9),
            i = r(3),
            u = r(13),
            s = r(0),
            f = (d.prototype.decodeRow = function (t, e, r) {
                var o = this.decodeRowStringBuffer,
                    u = this.decodeMiddle(e, r, o),
                    s = o.toString(),
                    f = d.parseExtensionString(s),
                    l = [new i.default((r[0] + r[1]) / 2, t), new i.default(u, t)],
                    c = new a.default(s, null, 0, l, n.default.UPC_EAN_EXTENSION, (new Date).getTime());
                return null != f && c.putAllMetadata(f), c
            }, d.prototype.decodeMiddle = function (t, e, r) {
                var n = this.decodeMiddleCounters;
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                for (var a = t.getSize(), i = e[1], u = 0, f = 0; f < 2 && i < a; f++) {
                    var d = o.default.decodeDigit(t, n, i, o.default.L_AND_G_PATTERNS);
                    r += String.fromCharCode("0".charCodeAt(0) + d % 10);
                    for (var l = 0, c = n; l < c.length; l++) i += c[l];
                    10 <= d && (u |= 1 << 1 - f), 1 !== f && (i = t.getNextSet(i), i = t.getNextUnset(i))
                }
                if (2 !== r.length) throw new s.default;
                if (parseInt(r.toString()) % 4 !== u) throw new s.default;
                return i
            }, d.parseExtensionString = function (t) {
                return 2 !== t.length ? null : new Map([
                    [u.default.ISSUE_NUMBER, parseInt(t)]
                ])
            }, d);

        function d() {
            this.decodeMiddleCounters = [0, 0, 0, 0], this.decodeRowStringBuffer = ""
        }
        e.default = f
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(2),
            u = r(20),
            s = (o(f, a = u.default), f.prototype.decodeMiddle = function (t, e, r) {
                var n = this.decodeMiddleCounters;
                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                for (var o = t.getSize(), a = e[1], i = 0; i < 4 && a < o; i++) {
                    var s = u.default.decodeDigit(t, n, a, u.default.L_PATTERNS);
                    r += String.fromCharCode("0".charCodeAt(0) + s);
                    for (var f = 0, d = n; f < d.length; f++) a += d[f]
                }
                for (a = u.default.findGuardPattern(t, a, !0, u.default.MIDDLE_PATTERN, new Array(u.default.MIDDLE_PATTERN.length).fill(0))[1], i = 0; i < 4 && a < o; i++) {
                    s = u.default.decodeDigit(t, n, a, u.default.L_PATTERNS), r += String.fromCharCode("0".charCodeAt(0) + s);
                    for (var l = 0, c = n; l < c.length; l++) a += c[l]
                }
                return {
                    rowOffset: a,
                    resultString: r
                }
            }, f.prototype.getBarcodeFormat = function () {
                return i.default.EAN_8
            }, f);

        function f() {
            var t = a.call(this) || this;
            return t.decodeMiddleCounters = [0, 0, 0, 0], t
        }
        e.default = s
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(17),
            u = r(31),
            s = (o(f, a = i.BrowserCodeReader), f);

        function f(t) {
            return void 0 === t && (t = 500), a.call(this, new u.default, t) || this
        }
        e.BrowserDatamatrixCodeReader = s
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(32),
            o = r(16),
            a = r(86),
            i = r(88),
            u = r(89),
            s = r(12),
            f = (d.prototype.decode = function (t) {
                for (var e = new a.default(t), r = e.getVersion(), n = e.readCodewords(), o = i.default.getDataBlocks(n, r), s = 0, f = 0, d = o; f < d.length; f++) s += d[f].getNumDataCodewords();
                for (var l = new Uint8Array(s), c = o.length, h = 0; h < c; h++) {
                    var p = o[h],
                        w = p.getCodewords(),
                        g = p.getNumDataCodewords();
                    this.correctErrors(w, g);
                    for (var v = 0; v < g; v++) l[v * c + h] = w[v]
                }
                return u.default.decode(l)
            }, d.prototype.correctErrors = function (t, e) {
                t.length;
                var r = new Int32Array(t);
                try {
                    this.rsDecoder.decode(r, t.length - e)
                } catch (t) {
                    throw new s.default
                }
                for (var n = 0; n < e; n++) t[n] = r[n]
            }, d);

        function d() {
            this.rsDecoder = new n.default(o.default.DATA_MATRIX_FIELD_256)
        }
        e.default = f
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(8),
            o = r(87),
            a = r(5),
            i = r(1),
            u = (s.prototype.getVersion = function () {
                return this.version
            }, s.readVersion = function (t) {
                var e = t.getHeight(),
                    r = t.getWidth();
                return o.default.getVersionForDimensions(e, r)
            }, s.prototype.readCodewords = function () {
                var t = new Int8Array(this.version.getTotalCodewords()),
                    e = 0,
                    r = 4,
                    n = 0,
                    o = this.mappingBitMatrix.getHeight(),
                    i = this.mappingBitMatrix.getWidth(),
                    u = !1,
                    s = !1,
                    f = !1,
                    d = !1;
                do {
                    if (r !== o || 0 !== n || u)
                        if (r !== o - 2 || 0 !== n || 0 == (3 & i) || s)
                            if (r !== o + 4 || 2 !== n || 0 != (7 & i) || f)
                                if (r !== o - 2 || 0 !== n || 4 != (7 & i) || d) {
                                    for (; r < o && 0 <= n && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, o, i)), n += 2, 0 <= (r -= 2) && n < i;);
                                    for (r += 1, n += 3; 0 <= r && n < i && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, o, i)), n -= 2, (r += 2) < o && 0 <= n;);
                                    r += 3, n += 1
                                } else t[e++] = 255 & this.readCorner4(o, i), r -= 2, n += 2, d = !0;
                    else t[e++] = 255 & this.readCorner3(o, i), r -= 2, n += 2, f = !0;
                    else t[e++] = 255 & this.readCorner2(o, i), r -= 2, n += 2, s = !0;
                    else t[e++] = 255 & this.readCorner1(o, i), r -= 2, n += 2, u = !0
                } while (r < o || n < i);
                if (e !== this.version.getTotalCodewords()) throw new a.default;
                return t
            }, s.prototype.readModule = function (t, e, r, n) {
                return t < 0 && (t += r, e += 4 - (r + 4 & 7)), e < 0 && (e += n, t += 4 - (n + 4 & 7)), this.readMappingMatrix.set(e, t), this.mappingBitMatrix.get(e, t)
            }, s.prototype.readUtah = function (t, e, r, n) {
                var o = 0;
                return this.readModule(t - 2, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t - 2, e - 1, r, n) && (o |= 1), o <<= 1, this.readModule(t - 1, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t - 1, e - 1, r, n) && (o |= 1), o <<= 1, this.readModule(t - 1, e, r, n) && (o |= 1), o <<= 1, this.readModule(t, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t, e - 1, r, n) && (o |= 1), o <<= 1, this.readModule(t, e, r, n) && (o |= 1), o
            }, s.prototype.readCorner1 = function (t, e) {
                var r = 0;
                return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 1, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r
            }, s.prototype.readCorner2 = function (t, e) {
                var r = 0;
                return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 4, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r
            }, s.prototype.readCorner3 = function (t, e) {
                var r = 0;
                return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r
            }, s.prototype.readCorner4 = function (t, e) {
                var r = 0;
                return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r
            }, s.prototype.extractDataRegion = function (t) {
                var e = this.version.getSymbolSizeRows(),
                    r = this.version.getSymbolSizeColumns();
                if (t.getHeight() !== e) throw new i.default("Dimension of bitMatrix must match the version size");
                for (var o = this.version.getDataRegionSizeRows(), a = this.version.getDataRegionSizeColumns(), u = e / o | 0, s = r / a | 0, f = u * o, d = s * a, l = new n.default(d, f), c = 0; c < u; ++c)
                    for (var h = c * o, p = 0; p < s; ++p)
                        for (var w = p * a, g = 0; g < o; ++g)
                            for (var v = c * (o + 2) + 1 + g, _ = h + g, y = 0; y < a; ++y) {
                                var C = p * (a + 2) + 1 + y;
                                if (t.get(C, v)) {
                                    var A = w + y;
                                    l.set(A, _)
                                }
                            }
                return l
            }, s);

        function s(t) {
            var e = t.getHeight();
            if (e < 8 || 144 < e || 0 != (1 & e)) throw new a.default;
            this.version = s.readVersion(t), this.mappingBitMatrix = this.extractDataRegion(t), this.readMappingMatrix = new n.default(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight())
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(5),
            o = (a.prototype.getECCodewords = function () {
                return this.ecCodewords
            }, a.prototype.getECBlocks = function () {
                return this.ecBlocks
            }, a);

        function a(t, e, r) {
            this.ecCodewords = t, this.ecBlocks = [e], r && this.ecBlocks.push(r)
        }
        e.ECBlocks = o;
        var i = (u.prototype.getCount = function () {
            return this.count
        }, u.prototype.getDataCodewords = function () {
            return this.dataCodewords
        }, u);

        function u(t, e) {
            this.count = t, this.dataCodewords = e
        }
        e.ECB = i;
        var s = (f.prototype.getVersionNumber = function () {
            return this.versionNumber
        }, f.prototype.getSymbolSizeRows = function () {
            return this.symbolSizeRows
        }, f.prototype.getSymbolSizeColumns = function () {
            return this.symbolSizeColumns
        }, f.prototype.getDataRegionSizeRows = function () {
            return this.dataRegionSizeRows
        }, f.prototype.getDataRegionSizeColumns = function () {
            return this.dataRegionSizeColumns
        }, f.prototype.getTotalCodewords = function () {
            return this.totalCodewords
        }, f.prototype.getECBlocks = function () {
            return this.ecBlocks
        }, f.getVersionForDimensions = function (t, e) {
            if (0 != (1 & t) || 0 != (1 & e)) throw new n.default;
            for (var r = 0, o = f.VERSIONS; r < o.length; r++) {
                var a = o[r];
                if (a.symbolSizeRows === t && a.symbolSizeColumns === e) return a
            }
            throw new n.default
        }, f.prototype.toString = function () {
            return "" + this.versionNumber
        }, f.buildVersions = function () {
            return [new f(1, 10, 10, 8, 8, new o(5, new i(1, 3))), new f(2, 12, 12, 10, 10, new o(7, new i(1, 5))), new f(3, 14, 14, 12, 12, new o(10, new i(1, 8))), new f(4, 16, 16, 14, 14, new o(12, new i(1, 12))), new f(5, 18, 18, 16, 16, new o(14, new i(1, 18))), new f(6, 20, 20, 18, 18, new o(18, new i(1, 22))), new f(7, 22, 22, 20, 20, new o(20, new i(1, 30))), new f(8, 24, 24, 22, 22, new o(24, new i(1, 36))), new f(9, 26, 26, 24, 24, new o(28, new i(1, 44))), new f(10, 32, 32, 14, 14, new o(36, new i(1, 62))), new f(11, 36, 36, 16, 16, new o(42, new i(1, 86))), new f(12, 40, 40, 18, 18, new o(48, new i(1, 114))), new f(13, 44, 44, 20, 20, new o(56, new i(1, 144))), new f(14, 48, 48, 22, 22, new o(68, new i(1, 174))), new f(15, 52, 52, 24, 24, new o(42, new i(2, 102))), new f(16, 64, 64, 14, 14, new o(56, new i(2, 140))), new f(17, 72, 72, 16, 16, new o(36, new i(4, 92))), new f(18, 80, 80, 18, 18, new o(48, new i(4, 114))), new f(19, 88, 88, 20, 20, new o(56, new i(4, 144))), new f(20, 96, 96, 22, 22, new o(68, new i(4, 174))), new f(21, 104, 104, 24, 24, new o(56, new i(6, 136))), new f(22, 120, 120, 18, 18, new o(68, new i(6, 175))), new f(23, 132, 132, 20, 20, new o(62, new i(8, 163))), new f(24, 144, 144, 22, 22, new o(62, new i(8, 156), new i(2, 155))), new f(25, 8, 18, 6, 16, new o(7, new i(1, 5))), new f(26, 8, 32, 6, 14, new o(11, new i(1, 10))), new f(27, 12, 26, 10, 24, new o(14, new i(1, 16))), new f(28, 12, 36, 10, 16, new o(18, new i(1, 22))), new f(29, 16, 36, 14, 16, new o(24, new i(1, 32))), new f(30, 16, 48, 14, 22, new o(28, new i(1, 49)))]
        }, f.VERSIONS = f.buildVersions(), f);

        function f(t, e, r, n, o, a) {
            this.versionNumber = t, this.symbolSizeRows = e, this.symbolSizeColumns = r, this.dataRegionSizeRows = n, this.dataRegionSizeColumns = o;
            for (var i = 0, u = (this.ecBlocks = a).getECCodewords(), s = 0, f = a.getECBlocks(); s < f.length; s++) {
                var d = f[s];
                i += d.getCount() * (d.getDataCodewords() + u)
            }
            this.totalCodewords = i
        }
        e.default = s
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = (a.getDataBlocks = function (t, e) {
                for (var r = e.getECBlocks(), o = 0, i = r.getECBlocks(), u = 0, s = i; u < s.length; u++) o += (h = s[u]).getCount();
                for (var f = new Array(o), d = 0, l = 0, c = i; l < c.length; l++)
                    for (var h = c[l], p = 0; p < h.getCount(); p++) {
                        var w = h.getDataCodewords(),
                            g = r.getECCodewords() + w;
                        f[d++] = new a(w, new Uint8Array(g))
                    }
                var v = f[0].codewords.length - r.getECCodewords(),
                    _ = v - 1,
                    y = 0;
                for (p = 0; p < _; p++)
                    for (var C = 0; C < d; C++) f[C].codewords[p] = t[y++];
                var A = 24 === e.getVersionNumber(),
                    m = A ? 8 : d;
                for (C = 0; C < m; C++) f[C].codewords[v - 1] = t[y++];
                var E = f[0].codewords.length;
                for (p = v; p < E; p++)
                    for (C = 0; C < d; C++) {
                        var S = A ? (C + 8) % d : C,
                            I = A && 7 < S ? p - 1 : p;
                        f[S].codewords[I] = t[y++]
                    }
                if (y !== t.length) throw new n.default;
                return f
            }, a.prototype.getNumDataCodewords = function () {
                return this.numDataCodewords
            }, a.prototype.getCodewords = function () {
                return this.codewords
            }, a);

        function a(t, e) {
            this.numDataCodewords = t, this.codewords = e
        }
        e.default = o
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, a = r(33),
            i = r(34),
            u = r(11),
            s = r(35),
            f = r(44),
            d = r(5),
            l = r(21);
        (o = n = n || {})[o.PAD_ENCODE = 0] = "PAD_ENCODE", o[o.ASCII_ENCODE = 1] = "ASCII_ENCODE", o[o.C40_ENCODE = 2] = "C40_ENCODE", o[o.TEXT_ENCODE = 3] = "TEXT_ENCODE", o[o.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", o[o.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", o[o.BASE256_ENCODE = 6] = "BASE256_ENCODE";
        var c = (h.decode = function (t) {
            var e = new i.default(t),
                r = new u.default,
                o = new u.default,
                s = new Array,
                f = n.ASCII_ENCODE;
            do {
                if (f === n.ASCII_ENCODE) f = this.decodeAsciiSegment(e, r, o);
                else {
                    switch (f) {
                        case n.C40_ENCODE:
                            this.decodeC40Segment(e, r);
                            break;
                        case n.TEXT_ENCODE:
                            this.decodeTextSegment(e, r);
                            break;
                        case n.ANSIX12_ENCODE:
                            this.decodeAnsiX12Segment(e, r);
                            break;
                        case n.EDIFACT_ENCODE:
                            this.decodeEdifactSegment(e, r);
                            break;
                        case n.BASE256_ENCODE:
                            this.decodeBase256Segment(e, r, s);
                            break;
                        default:
                            throw new d.default
                    }
                    f = n.ASCII_ENCODE
                }
            } while (f !== n.PAD_ENCODE && 0 < e.available());
            return 0 < o.length() && r.append(o.toString()), new a.default(t, r.toString(), 0 === s.length ? null : s, null)
        }, h.decodeAsciiSegment = function (t, e, r) {
            var o = !1;
            do {
                var a = t.readBits(8);
                if (0 === a) throw new d.default;
                if (a <= 128) return o && (a += 128), e.append(String.fromCharCode(a - 1)), n.ASCII_ENCODE;
                if (129 === a) return n.PAD_ENCODE;
                if (a <= 229) {
                    var i = a - 130;
                    i < 10 && e.append("0"), e.append("" + i)
                } else switch (a) {
                    case 230:
                        return n.C40_ENCODE;
                    case 231:
                        return n.BASE256_ENCODE;
                    case 232:
                        e.append(String.fromCharCode(29));
                        break;
                    case 233:
                    case 234:
                        break;
                    case 235:
                        o = !0;
                        break;
                    case 236:
                        e.append("[)>05"), r.insert(0, "");
                        break;
                    case 237:
                        e.append("[)>06"), r.insert(0, "");
                        break;
                    case 238:
                        return n.ANSIX12_ENCODE;
                    case 239:
                        return n.TEXT_ENCODE;
                    case 240:
                        return n.EDIFACT_ENCODE;
                    case 241:
                        break;
                    default:
                        if (254 !== a || 0 !== t.available()) throw new d.default
                }
            } while (0 < t.available());
            return n.ASCII_ENCODE
        }, h.decodeC40Segment = function (t, e) {
            var r = !1,
                n = [],
                o = 0;
            do {
                if (8 === t.available()) return;
                var a = t.readBits(8);
                if (254 === a) return;
                this.parseTwoBytes(a, t.readBits(8), n);
                for (var i = 0; i < 3; i++) {
                    var u = n[i];
                    switch (o) {
                        case 0:
                            if (u < 3) o = u + 1;
                            else {
                                if (!(u < this.C40_BASIC_SET_CHARS.length)) throw new d.default;
                                var s = this.C40_BASIC_SET_CHARS[u];
                                r ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : e.append(s)
                            }
                            break;
                        case 1:
                            r ? (e.append(String.fromCharCode(u + 128)), r = !1) : e.append(String.fromCharCode(u)), o = 0;
                            break;
                        case 2:
                            if (u < this.C40_SHIFT2_SET_CHARS.length) s = this.C40_SHIFT2_SET_CHARS[u], r ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : e.append(s);
                            else switch (u) {
                                case 27:
                                    e.append(String.fromCharCode(29));
                                    break;
                                case 30:
                                    r = !0;
                                    break;
                                default:
                                    throw new d.default
                            }
                            o = 0;
                            break;
                        case 3:
                            r ? (e.append(String.fromCharCode(u + 224)), r = !1) : e.append(String.fromCharCode(u + 96)), o = 0;
                            break;
                        default:
                            throw new d.default
                    }
                }
            } while (0 < t.available())
        }, h.decodeTextSegment = function (t, e) {
            var r = !1,
                n = [],
                o = 0;
            do {
                if (8 === t.available()) return;
                var a = t.readBits(8);
                if (254 === a) return;
                this.parseTwoBytes(a, t.readBits(8), n);
                for (var i = 0; i < 3; i++) {
                    var u = n[i];
                    switch (o) {
                        case 0:
                            if (u < 3) o = u + 1;
                            else {
                                if (!(u < this.TEXT_BASIC_SET_CHARS.length)) throw new d.default;
                                var s = this.TEXT_BASIC_SET_CHARS[u];
                                r ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : e.append(s)
                            }
                            break;
                        case 1:
                            r ? (e.append(String.fromCharCode(u + 128)), r = !1) : e.append(String.fromCharCode(u)), o = 0;
                            break;
                        case 2:
                            if (u < this.TEXT_SHIFT2_SET_CHARS.length) s = this.TEXT_SHIFT2_SET_CHARS[u], r ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : e.append(s);
                            else switch (u) {
                                case 27:
                                    e.append(String.fromCharCode(29));
                                    break;
                                case 30:
                                    r = !0;
                                    break;
                                default:
                                    throw new d.default
                            }
                            o = 0;
                            break;
                        case 3:
                            if (!(u < this.TEXT_SHIFT3_SET_CHARS.length)) throw new d.default;
                            s = this.TEXT_SHIFT3_SET_CHARS[u], r ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : e.append(s), o = 0;
                            break;
                        default:
                            throw new d.default
                    }
                }
            } while (0 < t.available())
        }, h.decodeAnsiX12Segment = function (t, e) {
            var r = [];
            do {
                if (8 === t.available()) return;
                var n = t.readBits(8);
                if (254 === n) return;
                this.parseTwoBytes(n, t.readBits(8), r);
                for (var o = 0; o < 3; o++) {
                    var a = r[o];
                    switch (a) {
                        case 0:
                            e.append("\r");
                            break;
                        case 1:
                            e.append("*");
                            break;
                        case 2:
                            e.append(">");
                            break;
                        case 3:
                            e.append(" ");
                            break;
                        default:
                            if (a < 14) e.append(String.fromCharCode(a + 44));
                            else {
                                if (!(a < 40)) throw new d.default;
                                e.append(String.fromCharCode(a + 51))
                            }
                    }
                }
            } while (0 < t.available())
        }, h.parseTwoBytes = function (t, e, r) {
            var n = (t << 8) + e - 1,
                o = Math.floor(n / 1600);
            n -= 1600 * (r[0] = o), o = Math.floor(n / 40), r[1] = o, r[2] = n - 40 * o
        }, h.decodeEdifactSegment = function (t, e) {
            do {
                if (t.available() <= 16) return;
                for (var r = 0; r < 4; r++) {
                    var n = t.readBits(6);
                    if (31 === n) {
                        var o = 8 - t.getBitOffset();
                        return void(8 != o && t.readBits(o))
                    }
                    0 == (32 & n) && (n |= 64), e.append(String.fromCharCode(n))
                }
            } while (0 < t.available())
        }, h.decodeBase256Segment = function (t, e, r) {
            var n, o = 1 + t.getByteOffset(),
                a = this.unrandomize255State(t.readBits(8), o++);
            if ((n = 0 === a ? t.available() / 8 | 0 : a < 250 ? a : 250 * (a - 249) + this.unrandomize255State(t.readBits(8), o++)) < 0) throw new d.default;
            for (var i = new Uint8Array(n), u = 0; u < n; u++) {
                if (t.available() < 8) throw new d.default;
                i[u] = this.unrandomize255State(t.readBits(8), o++)
            }
            r.push(i);
            try {
                e.append(s.default.decode(i, f.StringUtils.ISO88591))
            } catch (t) {
                throw new l.default("Platform does not support required encoding: " + t.message)
            }
        }, h.unrandomize255State = function (t, e) {
            var r = t - (149 * e % 255 + 1);
            return 0 <= r ? r : 256 + r
        }, h.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], h.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], h.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], h.TEXT_SHIFT2_SET_CHARS = h.C40_SHIFT2_SET_CHARS, h.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)], h);

        function h() {}
        e.default = c
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(3),
            o = r(36),
            a = r(37),
            i = r(14),
            u = r(61),
            s = r(0),
            f = (d.prototype.detect = function () {
                var t = this.rectangleDetector.detect(),
                    e = t[0],
                    r = t[1],
                    a = t[2],
                    i = t[3],
                    u = [];
                u.push(this.transitionsBetween(e, r)), u.push(this.transitionsBetween(e, a)), u.push(this.transitionsBetween(r, i)), u.push(this.transitionsBetween(a, i)), u.sort(l.resultPointsAndTransitionsComparator);
                var f = u[0],
                    c = u[1],
                    h = new Map;
                d.increment(h, f.getFrom()), d.increment(h, f.getTo()), d.increment(h, c.getFrom()), d.increment(h, c.getTo());
                for (var p = null, w = null, g = null, v = 0, _ = Array.from(h.entries()); v < _.length; v++) {
                    var y = _[v],
                        C = y[0];
                    2 === y[1] ? w = C : null == p ? p = C : g = C
                }
                if (null == p || null == w || null == g) throw new s.default;
                var A = [p, w, g];
                n.default.orderBestPatterns(A);
                var m = A[0];
                w = A[1];
                var E, S = A[2];
                E = h.has(e) ? h.has(r) ? h.has(a) ? i : a : r : e;
                var I, O, b = this.transitionsBetween(S, E).getTransitions(),
                    T = this.transitionsBetween(m, E).getTransitions();
                if (1 == (1 & b) && b++, 1 == (1 & T) && T++, 7 * (T += 2) <= 4 * (b += 2) || 7 * b <= 4 * T) null == (O = this.correctTopRightRectangular(w, m, S, E, b, T)) && (O = E), 1 == (1 & (b = this.transitionsBetween(S, O).getTransitions())) && b++, 1 == (1 & (T = this.transitionsBetween(m, O).getTransitions())) && T++, I = d.sampleGrid(this.image, S, w, m, O, b, T);
                else {
                    var M = Math.min(T, b);
                    null == (O = this.correctTopRight(w, m, S, E, M)) && (O = E);
                    var N = Math.max(this.transitionsBetween(S, O).getTransitions(), this.transitionsBetween(m, O).getTransitions());
                    1 == (1 & ++N) && N++, I = d.sampleGrid(this.image, S, w, m, O, N, N)
                }
                return new o.default(I, [S, w, m, O])
            }, d.prototype.correctTopRightRectangular = function (t, e, r, o, a, i) {
                var u = d.distance(t, e) / a,
                    s = d.distance(r, o),
                    f = (o.getX() - r.getX()) / s,
                    l = (o.getY() - r.getY()) / s,
                    c = new n.default(o.getX() + u * f, o.getY() + u * l);
                u = d.distance(t, r) / i, s = d.distance(e, o), f = (o.getX() - e.getX()) / s, l = (o.getY() - e.getY()) / s;
                var h = new n.default(o.getX() + u * f, o.getY() + u * l);
                return this.isValid(c) ? this.isValid(h) ? Math.abs(a - this.transitionsBetween(r, c).getTransitions()) + Math.abs(i - this.transitionsBetween(e, c).getTransitions()) <= Math.abs(a - this.transitionsBetween(r, h).getTransitions()) + Math.abs(i - this.transitionsBetween(e, h).getTransitions()) ? c : h : c : this.isValid(h) ? h : null
            }, d.prototype.correctTopRight = function (t, e, r, o, a) {
                var i = d.distance(t, e) / a,
                    u = d.distance(r, o),
                    s = (o.getX() - r.getX()) / u,
                    f = (o.getY() - r.getY()) / u,
                    l = new n.default(o.getX() + i * s, o.getY() + i * f);
                i = d.distance(t, r) / a, u = d.distance(e, o), s = (o.getX() - e.getX()) / u, f = (o.getY() - e.getY()) / u;
                var c = new n.default(o.getX() + i * s, o.getY() + i * f);
                return this.isValid(l) ? this.isValid(c) ? Math.abs(this.transitionsBetween(r, l).getTransitions() - this.transitionsBetween(e, l).getTransitions()) <= Math.abs(this.transitionsBetween(r, c).getTransitions() - this.transitionsBetween(e, c).getTransitions()) ? l : c : l : this.isValid(c) ? c : null
            }, d.prototype.isValid = function (t) {
                return 0 <= t.getX() && t.getX() < this.image.getWidth() && 0 < t.getY() && t.getY() < this.image.getHeight()
            }, d.distance = function (t, e) {
                return i.default.round(n.default.distance(t, e))
            }, d.increment = function (t, e) {
                var r = t.get(e);
                t.set(e, null == r ? 1 : r + 1)
            }, d.sampleGrid = function (t, e, r, n, o, i, u) {
                return a.default.getInstance().sampleGrid(t, i, u, .5, .5, i - .5, .5, i - .5, u - .5, .5, u - .5, e.getX(), e.getY(), o.getX(), o.getY(), n.getX(), n.getY(), r.getX(), r.getY())
            }, d.prototype.transitionsBetween = function (t, e) {
                var r = 0 | t.getX(),
                    n = 0 | t.getY(),
                    o = 0 | e.getX(),
                    a = 0 | e.getY(),
                    i = Math.abs(a - n) > Math.abs(o - r);
                if (i) {
                    var u = r;
                    r = n, n = u, u = o, o = a, a = u
                }
                for (var s = Math.abs(o - r), f = Math.abs(a - n), d = -s / 2, c = n < a ? 1 : -1, h = r < o ? 1 : -1, p = 0, w = this.image.get(i ? n : r, i ? r : n), g = r, v = n; g !== o; g += h) {
                    var _ = this.image.get(i ? v : g, i ? g : v);
                    if (_ !== w && (p++, w = _), 0 < (d += f)) {
                        if (v === a) break;
                        v += c, d -= s
                    }
                }
                return new l(t, e, p)
            }, d);

        function d(t) {
            this.image = t, this.rectangleDetector = new u.default(t)
        }
        e.default = f;
        var l = (c.prototype.getFrom = function () {
            return this.from
        }, c.prototype.getTo = function () {
            return this.to
        }, c.prototype.getTransitions = function () {
            return this.transitions
        }, c.prototype.toString = function () {
            return this.from + "/" + this.to + "/" + this.transitions
        }, c.resultPointsAndTransitionsComparator = function (t, e) {
            return t.getTransitions() - e.getTransitions()
        }, c);

        function c(t, e, r) {
            this.from = t, this.to = e, this.transitions = r
        }
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(17),
            u = r(62),
            s = (o(f, a = i.BrowserCodeReader), f.prototype.decodeBitmap = function (t) {
                return this.reader.decodeWithState(t)
            }, f);

        function f(t, e) {
            void 0 === t && (t = null), void 0 === e && (e = 500);
            var r = new u.default;
            return r.setHints(t), a.call(this, r, e) || this
        }
        e.BrowserMultiFormatReader = s
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(8),
            o = r(16),
            a = r(32),
            i = r(93),
            u = r(64),
            s = r(97),
            f = r(98),
            d = r(12),
            l = (c.prototype.decodeBooleanArray = function (t, e) {
                return this.decodeBitMatrix(n.default.parseFromBooleanArray(t), e)
            }, c.prototype.decodeBitMatrix = function (t, e) {
                var r = new i.default(t),
                    n = null;
                try {
                    return this.decodeBitMatrixParser(r, e)
                } catch (t) {
                    n = t
                }
                try {
                    r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
                    var o = this.decodeBitMatrixParser(r, e);
                    return o.setOther(new u.default(!0)), o
                } catch (t) {
                    if (null !== n) throw n;
                    throw t
                }
            }, c.prototype.decodeBitMatrixParser = function (t, e) {
                for (var r = t.readVersion(), n = t.readFormatInformation().getErrorCorrectionLevel(), o = t.readCodewords(), a = s.default.getDataBlocks(o, r, n), i = 0, u = 0, d = a; u < d.length; u++) i += (w = d[u]).getNumDataCodewords();
                for (var l = new Uint8Array(i), c = 0, h = 0, p = a; h < p.length; h++) {
                    var w, g = (w = p[h]).getCodewords(),
                        v = w.getNumDataCodewords();
                    this.correctErrors(g, v);
                    for (var _ = 0; _ < v; _++) l[c++] = g[_]
                }
                return f.default.decode(l, r, n, e)
            }, c.prototype.correctErrors = function (t, e) {
                t.length;
                var r = new Int32Array(t);
                try {
                    this.rsDecoder.decode(r, t.length - e)
                } catch (t) {
                    throw new d.default
                }
                for (var n = 0; n < e; n++) t[n] = r[n]
            }, c);

        function c() {
            this.rsDecoder = new a.default(o.default.QR_CODE_FIELD_256)
        }
        e.default = l
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(40),
            o = r(63),
            a = r(96),
            i = r(5),
            u = (s.prototype.readFormatInformation = function () {
                if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
                for (var t = 0, e = 0; e < 6; e++) t = this.copyBit(e, 8, t);
                t = this.copyBit(7, 8, t), t = this.copyBit(8, 8, t), t = this.copyBit(8, 7, t);
                for (var r = 5; 0 <= r; r--) t = this.copyBit(8, r, t);
                var n = this.bitMatrix.getHeight(),
                    a = 0,
                    u = n - 7;
                for (r = n - 1; u <= r; r--) a = this.copyBit(8, r, a);
                for (e = n - 8; e < n; e++) a = this.copyBit(e, 8, a);
                if (this.parsedFormatInfo = o.default.decodeFormatInformation(t, a), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
                throw new i.default
            }, s.prototype.readVersion = function () {
                if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
                var t = this.bitMatrix.getHeight(),
                    e = Math.floor((t - 17) / 4);
                if (e <= 6) return n.default.getVersionForNumber(e);
                for (var r = 0, o = t - 11, a = 5; 0 <= a; a--)
                    for (var u = t - 9; o <= u; u--) r = this.copyBit(u, a, r);
                var s = n.default.decodeVersionInformation(r);
                if (null !== s && s.getDimensionForVersion() === t) return this.parsedVersion = s;
                for (r = 0, u = 5; 0 <= u; u--)
                    for (a = t - 9; o <= a; a--) r = this.copyBit(u, a, r);
                if (null !== (s = n.default.decodeVersionInformation(r)) && s.getDimensionForVersion() === t) return this.parsedVersion = s;
                throw new i.default
            }, s.prototype.copyBit = function (t, e, r) {
                return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? r << 1 | 1 : r << 1
            }, s.prototype.readCodewords = function () {
                var t = this.readFormatInformation(),
                    e = this.readVersion(),
                    r = a.default.values.get(t.getDataMask()),
                    n = this.bitMatrix.getHeight();
                r.unmaskBitMatrix(this.bitMatrix, n);
                for (var o = e.buildFunctionPattern(), u = !0, s = new Uint8Array(e.getTotalCodewords()), f = 0, d = 0, l = 0, c = n - 1; 0 < c; c -= 2) {
                    6 === c && c--;
                    for (var h = 0; h < n; h++)
                        for (var p = u ? n - 1 - h : h, w = 0; w < 2; w++) o.get(c - w, p) || (l++, d <<= 1, this.bitMatrix.get(c - w, p) && (d |= 1), 8 === l && (s[f++] = d, d = l = 0));
                    u = !u
                }
                if (f !== e.getTotalCodewords()) throw new i.default;
                return s
            }, s.prototype.remask = function () {
                if (null !== this.parsedFormatInfo) {
                    var t = a.default.values[this.parsedFormatInfo.getDataMask()],
                        e = this.bitMatrix.getHeight();
                    t.unmaskBitMatrix(this.bitMatrix, e)
                }
            }, s.prototype.setMirror = function (t) {
                this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t
            }, s.prototype.mirror = function () {
                for (var t = this.bitMatrix, e = 0, r = t.getWidth(); e < r; e++)
                    for (var n = e + 1, o = t.getHeight(); n < o; n++) t.get(e, n) !== t.get(n, e) && (t.flip(n, e), t.flip(e, n))
            }, s);

        function s(t) {
            var e = t.getHeight();
            if (e < 21 || 1 != (3 & e)) throw new i.default;
            this.bitMatrix = t
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.getECCodewordsPerBlock = function () {
            return this.ecCodewordsPerBlock
        }, o.prototype.getNumBlocks = function () {
            for (var t = 0, e = 0, r = this.ecBlocks; e < r.length; e++) t += r[e].getCount();
            return t
        }, o.prototype.getTotalECCodewords = function () {
            return this.ecCodewordsPerBlock * this.getNumBlocks()
        }, o.prototype.getECBlocks = function () {
            return this.ecBlocks
        }, o);

        function o(t) {
            for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            this.ecCodewordsPerBlock = t, this.ecBlocks = e
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.getCount = function () {
            return this.count
        }, o.prototype.getDataCodewords = function () {
            return this.dataCodewords
        }, o);

        function o(t, e) {
            this.count = t, this.dataCodewords = e
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        var n, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (o = n = e.DataMaskValues || (e.DataMaskValues = {}))[o.DATA_MASK_000 = 0] = "DATA_MASK_000", o[o.DATA_MASK_001 = 1] = "DATA_MASK_001", o[o.DATA_MASK_010 = 2] = "DATA_MASK_010", o[o.DATA_MASK_011 = 3] = "DATA_MASK_011", o[o.DATA_MASK_100 = 4] = "DATA_MASK_100", o[o.DATA_MASK_101 = 5] = "DATA_MASK_101", o[o.DATA_MASK_110 = 6] = "DATA_MASK_110", o[o.DATA_MASK_111 = 7] = "DATA_MASK_111";
        var a = (i.prototype.unmaskBitMatrix = function (t, e) {
            for (var r = 0; r < e; r++)
                for (var n = 0; n < e; n++) this.isMasked(r, n) && t.flip(n, r)
        }, i.values = new Map([
            [n.DATA_MASK_000, new i(n.DATA_MASK_000, function (t, e) {
                return 0 == (t + e & 1)
            })],
            [n.DATA_MASK_001, new i(n.DATA_MASK_001, function (t, e) {
                return 0 == (1 & t)
            })],
            [n.DATA_MASK_010, new i(n.DATA_MASK_010, function (t, e) {
                return e % 3 == 0
            })],
            [n.DATA_MASK_011, new i(n.DATA_MASK_011, function (t, e) {
                return (t + e) % 3 == 0
            })],
            [n.DATA_MASK_100, new i(n.DATA_MASK_100, function (t, e) {
                return 0 == (Math.floor(t / 2) + Math.floor(e / 3) & 1)
            })],
            [n.DATA_MASK_101, new i(n.DATA_MASK_101, function (t, e) {
                return t * e % 6 == 0
            })],
            [n.DATA_MASK_110, new i(n.DATA_MASK_110, function (t, e) {
                return t * e % 6 < 3
            })],
            [n.DATA_MASK_111, new i(n.DATA_MASK_111, function (t, e) {
                return 0 == (t + e + t * e % 3 & 1)
            })]
        ]), i);

        function i(t, e) {
            this.value = t, this.isMasked = e
        }
        e.default = a
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            o = (a.getDataBlocks = function (t, e, r) {
                if (t.length !== e.getTotalCodewords()) throw new n.default;
                for (var o = e.getECBlocksForLevel(r), i = 0, u = o.getECBlocks(), s = 0, f = u; s < f.length; s++) i += (p = f[s]).getCount();
                for (var d = new Array(i), l = 0, c = 0, h = u; c < h.length; c++)
                    for (var p = h[c], w = 0; w < p.getCount(); w++) {
                        var g = p.getDataCodewords(),
                            v = o.getECCodewordsPerBlock() + g;
                        d[l++] = new a(g, new Uint8Array(v))
                    }
                for (var _ = d[0].codewords.length, y = d.length - 1; 0 <= y && d[y].codewords.length !== _;) y--;
                y++;
                var C = _ - o.getECCodewordsPerBlock(),
                    A = 0;
                for (w = 0; w < C; w++)
                    for (var m = 0; m < l; m++) d[m].codewords[w] = t[A++];
                for (m = y; m < l; m++) d[m].codewords[C] = t[A++];
                var E = d[0].codewords.length;
                for (w = C; w < E; w++)
                    for (m = 0; m < l; m++) {
                        var S = m < y ? w : w + 1;
                        d[m].codewords[S] = t[A++]
                    }
                return d
            }, a.prototype.getNumDataCodewords = function () {
                return this.numDataCodewords
            }, a.prototype.getCodewords = function () {
                return this.codewords
            }, a);

        function a(t, e) {
            this.numDataCodewords = t, this.codewords = e
        }
        e.default = o
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(34),
            o = r(22),
            a = r(33),
            i = r(65),
            u = r(66),
            s = r(11),
            f = r(35),
            d = r(5),
            l = (c.decode = function (t, e, r, i) {
                var f = new n.default(t),
                    l = new s.default,
                    h = new Array,
                    p = -1,
                    w = -1;
                try {
                    var g = null,
                        v = !1,
                        _ = void 0;
                    do {
                        if (f.available() < 4) _ = u.default.TERMINATOR;
                        else {
                            var y = f.readBits(4);
                            _ = u.default.forBits(y)
                        }
                        switch (_) {
                            case u.default.TERMINATOR:
                                break;
                            case u.default.FNC1_FIRST_POSITION:
                            case u.default.FNC1_SECOND_POSITION:
                                v = !0;
                                break;
                            case u.default.STRUCTURED_APPEND:
                                if (f.available() < 16) throw new d.default;
                                p = f.readBits(8), w = f.readBits(8);
                                break;
                            case u.default.ECI:
                                var C = c.parseECIValue(f);
                                if (null === (g = o.default.getCharacterSetECIByValue(C))) throw new d.default;
                                break;
                            case u.default.HANZI:
                                var A = f.readBits(4),
                                    m = f.readBits(_.getCharacterCountBits(e));
                                A === c.GB2312_SUBSET && c.decodeHanziSegment(f, l, m);
                                break;
                            default:
                                var E = f.readBits(_.getCharacterCountBits(e));
                                switch (_) {
                                    case u.default.NUMERIC:
                                        c.decodeNumericSegment(f, l, E);
                                        break;
                                    case u.default.ALPHANUMERIC:
                                        c.decodeAlphanumericSegment(f, l, E, v);
                                        break;
                                    case u.default.BYTE:
                                        c.decodeByteSegment(f, l, E, g, h, i);
                                        break;
                                    case u.default.KANJI:
                                        c.decodeKanjiSegment(f, l, E);
                                        break;
                                    default:
                                        throw new d.default
                                }
                        }
                    } while (_ !== u.default.TERMINATOR)
                } catch (t) {
                    throw new d.default
                }
                return new a.default(t, l.toString(), 0 === h.length ? null : h, null === r ? null : r.toString(), p, w)
            }, c.decodeHanziSegment = function (t, e, r) {
                if (13 * r > t.available()) throw new d.default;
                for (var n = new Uint8Array(2 * r), o = 0; 0 < r;) {
                    var a = t.readBits(13),
                        u = a / 96 << 8 & 4294967295 | a % 96;
                    u += u < 959 ? 41377 : 42657, n[o] = u >> 8 & 255, n[o + 1] = 255 & u, o += 2, r--
                }
                try {
                    e.append(f.default.decode(n, i.default.GB2312))
                } catch (t) {
                    throw new d.default(t)
                }
            }, c.decodeKanjiSegment = function (t, e, r) {
                if (13 * r > t.available()) throw new d.default;
                for (var n = new Uint8Array(2 * r), o = 0; 0 < r;) {
                    var a = t.readBits(13),
                        u = a / 192 << 8 & 4294967295 | a % 192;
                    u += u < 7936 ? 33088 : 49472, n[o] = u >> 8, n[o + 1] = u, o += 2, r--
                }
                try {
                    e.append(f.default.decode(n, i.default.SHIFT_JIS))
                } catch (t) {
                    throw new d.default(t)
                }
            }, c.decodeByteSegment = function (t, e, r, n, o, a) {
                if (8 * r > t.available()) throw new d.default;
                for (var u, s = new Uint8Array(r), l = 0; l < r; l++) s[l] = t.readBits(8);
                u = null === n ? i.default.guessEncoding(s, a) : n.getName();
                try {
                    e.append(f.default.decode(s, u))
                } catch (t) {
                    throw new d.default(t)
                }
                o.push(s)
            }, c.toAlphaNumericChar = function (t) {
                if (t >= c.ALPHANUMERIC_CHARS.length) throw new d.default;
                return c.ALPHANUMERIC_CHARS[t]
            }, c.decodeAlphanumericSegment = function (t, e, r, n) {
                for (var o = e.length(); 1 < r;) {
                    if (t.available() < 11) throw new d.default;
                    var a = t.readBits(11);
                    e.append(c.toAlphaNumericChar(Math.floor(a / 45))), e.append(c.toAlphaNumericChar(a % 45)), r -= 2
                }
                if (1 === r) {
                    if (t.available() < 6) throw new d.default;
                    e.append(c.toAlphaNumericChar(t.readBits(6)))
                }
                if (n)
                    for (var i = o; i < e.length(); i++) "%" === e.charAt(i) && (i < e.length() - 1 && "%" === e.charAt(i + 1) ? e.deleteCharAt(i + 1) : e.setCharAt(i, String.fromCharCode(29)))
            }, c.decodeNumericSegment = function (t, e, r) {
                for (; 3 <= r;) {
                    if (t.available() < 10) throw new d.default;
                    var n = t.readBits(10);
                    if (1e3 <= n) throw new d.default;
                    e.append(c.toAlphaNumericChar(Math.floor(n / 100))), e.append(c.toAlphaNumericChar(Math.floor(n / 10) % 10)), e.append(c.toAlphaNumericChar(n % 10)), r -= 3
                }
                if (2 === r) {
                    if (t.available() < 7) throw new d.default;
                    var o = t.readBits(7);
                    if (100 <= o) throw new d.default;
                    e.append(c.toAlphaNumericChar(Math.floor(o / 10))), e.append(c.toAlphaNumericChar(o % 10))
                } else if (1 === r) {
                    if (t.available() < 4) throw new d.default;
                    var a = t.readBits(4);
                    if (10 <= a) throw new d.default;
                    e.append(c.toAlphaNumericChar(a))
                }
            }, c.parseECIValue = function (t) {
                var e = t.readBits(8);
                if (0 == (128 & e)) return 127 & e;
                if (128 == (192 & e)) return (63 & e) << 8 & 4294967295 | t.readBits(8);
                if (192 != (224 & e)) throw new d.default;
                return (31 & e) << 16 & 4294967295 | t.readBits(16)
            }, c.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", c.GB2312_SUBSET = 1, c);

        function c() {}
        e.default = l
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            o = r(3),
            a = r(36),
            i = r(37),
            u = r(38),
            s = r(14),
            f = r(40),
            d = r(100),
            l = r(103),
            c = r(0),
            h = (p.prototype.getImage = function () {
                return this.image
            }, p.prototype.getResultPointCallback = function () {
                return this.resultPointCallback
            }, p.prototype.detect = function (t) {
                this.resultPointCallback = null == t ? null : t.get(n.default.NEED_RESULT_POINT_CALLBACK);
                var e = new d.default(this.image, this.resultPointCallback).find(t);
                return this.processFinderPatternInfo(e)
            }, p.prototype.processFinderPatternInfo = function (t) {
                var e = t.getTopLeft(),
                    r = t.getTopRight(),
                    n = t.getBottomLeft(),
                    o = this.calculateModuleSize(e, r, n);
                if (o < 1) throw new c.default("No pattern found in proccess finder.");
                var i = p.computeDimension(e, r, n, o),
                    u = f.default.getProvisionalVersionForDimension(i),
                    s = u.getDimensionForVersion() - 7,
                    d = null;
                if (0 < u.getAlignmentPatternCenters().length)
                    for (var l = r.getX() - e.getX() + n.getX(), h = r.getY() - e.getY() + n.getY(), w = 1 - 3 / s, g = Math.floor(e.getX() + w * (l - e.getX())), v = Math.floor(e.getY() + w * (h - e.getY())), _ = 4; _ <= 16; _ <<= 1) try {
                        d = this.findAlignmentInRegion(o, g, v, _);
                        break
                    } catch (t) {
                        if (!(t instanceof c.default)) throw t
                    }
                var y, C = p.createTransform(e, r, n, d, i),
                    A = p.sampleGrid(this.image, C, i);
                return y = null === d ? [n, e, r] : [n, e, r, d], new a.default(A, y)
            }, p.createTransform = function (t, e, r, n, o) {
                var a, i, s, f, d = o - 3.5;
                return f = s = null !== n ? (a = n.getX(), i = n.getY(), d - 3) : (a = e.getX() - t.getX() + r.getX(), i = e.getY() - t.getY() + r.getY(), d), u.default.quadrilateralToQuadrilateral(3.5, 3.5, d, 3.5, s, f, 3.5, d, t.getX(), t.getY(), e.getX(), e.getY(), a, i, r.getX(), r.getY())
            }, p.sampleGrid = function (t, e, r) {
                return i.default.getInstance().sampleGridWithTransform(t, r, r, e)
            }, p.computeDimension = function (t, e, r, n) {
                var a = s.default.round(o.default.distance(t, e) / n),
                    i = s.default.round(o.default.distance(t, r) / n),
                    u = Math.floor((a + i) / 2) + 7;
                switch (3 & u) {
                    case 0:
                        u++;
                        break;
                    case 2:
                        u--;
                        break;
                    case 3:
                        throw new c.default("Dimensions could be not found.")
                }
                return u
            }, p.prototype.calculateModuleSize = function (t, e, r) {
                return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2
            }, p.prototype.calculateModuleSizeOneWay = function (t, e) {
                var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY())),
                    n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()));
                return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14
            }, p.prototype.sizeOfBlackWhiteBlackRunBothWays = function (t, e, r, n) {
                var o = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
                    a = 1,
                    i = t - (r - t);
                i < 0 ? (a = t / (t - i), i = 0) : i >= this.image.getWidth() && (a = (this.image.getWidth() - 1 - t) / (i - t), i = this.image.getWidth() - 1);
                var u = Math.floor(e - (n - e) * a);
                return a = 1, u < 0 ? (a = e / (e - u), u = 0) : u >= this.image.getHeight() && (a = (this.image.getHeight() - 1 - e) / (u - e), u = this.image.getHeight() - 1), i = Math.floor(t + (i - t) * a), (o += this.sizeOfBlackWhiteBlackRun(t, e, i, u)) - 1
            }, p.prototype.sizeOfBlackWhiteBlackRun = function (t, e, r, n) {
                var o = Math.abs(n - e) > Math.abs(r - t);
                if (o) {
                    var a = t;
                    t = e, e = a, a = r, r = n, n = a
                }
                for (var i = Math.abs(r - t), u = Math.abs(n - e), f = -i / 2, d = t < r ? 1 : -1, l = e < n ? 1 : -1, c = 0, h = r + d, p = t, w = e; p !== h; p += d) {
                    var g = o ? w : p,
                        v = o ? p : w;
                    if (1 === c === this.image.get(g, v)) {
                        if (2 === c) return s.default.distance(p, w, t, e);
                        c++
                    }
                    if (0 < (f += u)) {
                        if (w === n) break;
                        w += l, f -= i
                    }
                }
                return 2 === c ? s.default.distance(r + d, n, t, e) : NaN
            }, p.prototype.findAlignmentInRegion = function (t, e, r, n) {
                var o = Math.floor(n * t),
                    a = Math.max(0, e - o),
                    i = Math.min(this.image.getWidth() - 1, e + o);
                if (i - a < 3 * t) throw new c.default("Alignment top exceeds estimated module size.");
                var u = Math.max(0, r - o),
                    s = Math.min(this.image.getHeight() - 1, r + o);
                if (s - u < 3 * t) throw new c.default("Alignment bottom exceeds estimated module size.");
                return new l.default(this.image, a, u, i - a, s - u, t, this.resultPointCallback).find()
            }, p);

        function p(t) {
            this.image = t
        }
        e.default = h
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            o = r(3),
            a = r(101),
            i = r(102),
            u = r(0),
            s = (f.prototype.getImage = function () {
                return this.image
            }, f.prototype.getPossibleCenters = function () {
                return this.possibleCenters
            }, f.prototype.find = function (t) {
                var e = null != t && void 0 !== t.get(n.default.TRY_HARDER),
                    r = null != t && void 0 !== t.get(n.default.PURE_BARCODE),
                    a = this.image,
                    u = a.getHeight(),
                    s = a.getWidth(),
                    d = Math.floor(3 * u / (4 * f.MAX_MODULES));
                (d < f.MIN_SKIP || e) && (d = f.MIN_SKIP);
                for (var l = !1, c = new Int32Array(5), h = d - 1; h < u && !l; h += d) {
                    c[0] = 0, c[1] = 0, c[2] = 0, c[3] = 0;
                    for (var p = c[4] = 0, w = 0; w < s; w++)
                        if (a.get(w, h)) 1 == (1 & p) && p++, c[p]++;
                        else if (0 == (1 & p))
                        if (4 === p)
                            if (f.foundPatternCross(c)) {
                                if (!0 !== this.handlePossibleCenter(c, h, w, r)) {
                                    c[0] = c[2], c[1] = c[3], c[2] = c[4], c[3] = 1, c[4] = 0, p = 3;
                                    continue
                                }
                                if (d = 2, !0 === this.hasSkipped) l = this.haveMultiplyConfirmedCenters();
                                else {
                                    var g = this.findRowSkip();
                                    g > c[2] && (h += g - c[2] - d, w = s - 1)
                                }
                                c[p = 0] = 0, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0
                            } else c[0] = c[2], c[1] = c[3], c[2] = c[4], c[3] = 1, c[4] = 0, p = 3;
                    else c[++p]++;
                    else c[p]++;
                    f.foundPatternCross(c) && !0 === this.handlePossibleCenter(c, h, s, r) && (d = c[0], this.hasSkipped && (l = this.haveMultiplyConfirmedCenters()))
                }
                var v = this.selectBestPatterns();
                return o.default.orderBestPatterns(v), new i.default(v)
            }, f.centerFromEnd = function (t, e) {
                return e - t[4] - t[3] - t[2] / 2
            }, f.foundPatternCross = function (t) {
                for (var e = 0, r = 0; r < 5; r++) {
                    var n = t[r];
                    if (0 === n) return !1;
                    e += n
                }
                if (e < 7) return !1;
                var o = e / 7,
                    a = o / 2;
                return Math.abs(o - t[0]) < a && Math.abs(o - t[1]) < a && Math.abs(3 * o - t[2]) < 3 * a && Math.abs(o - t[3]) < a && Math.abs(o - t[4]) < a
            }, f.prototype.getCrossCheckStateCount = function () {
                var t = this.crossCheckStateCount;
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t
            }, f.prototype.crossCheckDiagonal = function (t, e, r, n) {
                for (var o = this.getCrossCheckStateCount(), a = 0, i = this.image; a <= t && a <= e && i.get(e - a, t - a);) o[2]++, a++;
                if (t < a || e < a) return !1;
                for (; a <= t && a <= e && !i.get(e - a, t - a) && o[1] <= r;) o[1]++, a++;
                if (t < a || e < a || o[1] > r) return !1;
                for (; a <= t && a <= e && i.get(e - a, t - a) && o[0] <= r;) o[0]++, a++;
                if (o[0] > r) return !1;
                var u = i.getHeight(),
                    s = i.getWidth();
                for (a = 1; t + a < u && e + a < s && i.get(e + a, t + a);) o[2]++, a++;
                if (u <= t + a || s <= e + a) return !1;
                for (; t + a < u && e + a < s && !i.get(e + a, t + a) && o[3] < r;) o[3]++, a++;
                if (u <= t + a || s <= e + a || o[3] >= r) return !1;
                for (; t + a < u && e + a < s && i.get(e + a, t + a) && o[4] < r;) o[4]++, a++;
                if (o[4] >= r) return !1;
                var d = o[0] + o[1] + o[2] + o[3] + o[4];
                return Math.abs(d - n) < 2 * n && f.foundPatternCross(o)
            }, f.prototype.crossCheckVertical = function (t, e, r, n) {
                for (var o = this.image, a = o.getHeight(), i = this.getCrossCheckStateCount(), u = t; 0 <= u && o.get(e, u);) i[2]++, u--;
                if (u < 0) return NaN;
                for (; 0 <= u && !o.get(e, u) && i[1] <= r;) i[1]++, u--;
                if (u < 0 || i[1] > r) return NaN;
                for (; 0 <= u && o.get(e, u) && i[0] <= r;) i[0]++, u--;
                if (i[0] > r) return NaN;
                for (u = t + 1; u < a && o.get(e, u);) i[2]++, u++;
                if (u === a) return NaN;
                for (; u < a && !o.get(e, u) && i[3] < r;) i[3]++, u++;
                if (u === a || i[3] >= r) return NaN;
                for (; u < a && o.get(e, u) && i[4] < r;) i[4]++, u++;
                if (i[4] >= r) return NaN;
                var s = i[0] + i[1] + i[2] + i[3] + i[4];
                return 5 * Math.abs(s - n) >= 2 * n ? NaN : f.foundPatternCross(i) ? f.centerFromEnd(i, u) : NaN
            }, f.prototype.crossCheckHorizontal = function (t, e, r, n) {
                for (var o = this.image, a = o.getWidth(), i = this.getCrossCheckStateCount(), u = t; 0 <= u && o.get(u, e);) i[2]++, u--;
                if (u < 0) return NaN;
                for (; 0 <= u && !o.get(u, e) && i[1] <= r;) i[1]++, u--;
                if (u < 0 || i[1] > r) return NaN;
                for (; 0 <= u && o.get(u, e) && i[0] <= r;) i[0]++, u--;
                if (i[0] > r) return NaN;
                for (u = t + 1; u < a && o.get(u, e);) i[2]++, u++;
                if (u === a) return NaN;
                for (; u < a && !o.get(u, e) && i[3] < r;) i[3]++, u++;
                if (u === a || i[3] >= r) return NaN;
                for (; u < a && o.get(u, e) && i[4] < r;) i[4]++, u++;
                if (i[4] >= r) return NaN;
                var s = i[0] + i[1] + i[2] + i[3] + i[4];
                return 5 * Math.abs(s - n) >= n ? NaN : f.foundPatternCross(i) ? f.centerFromEnd(i, u) : NaN
            }, f.prototype.handlePossibleCenter = function (t, e, r, n) {
                var o = t[0] + t[1] + t[2] + t[3] + t[4],
                    i = f.centerFromEnd(t, r),
                    u = this.crossCheckVertical(e, Math.floor(i), t[2], o);
                if (isNaN(u) || (i = this.crossCheckHorizontal(Math.floor(i), Math.floor(u), t[2], o), isNaN(i) || n && !this.crossCheckDiagonal(Math.floor(u), Math.floor(i), t[2], o))) return !1;
                for (var s = o / 7, d = !1, l = this.possibleCenters, c = 0, h = l.length; c < h; c++) {
                    var p = l[c];
                    if (p.aboutEquals(s, u, i)) {
                        l[c] = p.combineEstimate(u, i, s), d = !0;
                        break
                    }
                }
                if (!d) {
                    var w = new a.default(i, u, s);
                    l.push(w), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(w)
                }
                return !0
            }, f.prototype.findRowSkip = function () {
                if (this.possibleCenters.length <= 1) return 0;
                for (var t = null, e = 0, r = this.possibleCenters; e < r.length; e++) {
                    var n = r[e];
                    if (n.getCount() >= f.CENTER_QUORUM) {
                        if (null != t) return this.hasSkipped = !0, Math.floor((Math.abs(t.getX() - n.getX()) - Math.abs(t.getY() - n.getY())) / 2);
                        t = n
                    }
                }
                return 0
            }, f.prototype.haveMultiplyConfirmedCenters = function () {
                for (var t = 0, e = 0, r = this.possibleCenters.length, n = 0, o = this.possibleCenters; n < o.length; n++)(d = o[n]).getCount() >= f.CENTER_QUORUM && (t++, e += d.getEstimatedModuleSize());
                if (t < 3) return !1;
                for (var a = e / r, i = 0, u = 0, s = this.possibleCenters; u < s.length; u++) {
                    var d = s[u];
                    i += Math.abs(d.getEstimatedModuleSize() - a)
                }
                return i <= .05 * e
            }, f.prototype.selectBestPatterns = function () {
                var t = this.possibleCenters.length;
                if (t < 3) throw new u.default;
                var e, r = this.possibleCenters;
                if (3 < t) {
                    for (var n = 0, o = 0, a = 0, i = this.possibleCenters; a < i.length; a++) {
                        var s = i[a].getEstimatedModuleSize();
                        n += s, o += s * s
                    }
                    e = n / t;
                    var f = Math.sqrt(o / t - e * e);
                    r.sort(function (t, r) {
                        var n = Math.abs(r.getEstimatedModuleSize() - e),
                            o = Math.abs(t.getEstimatedModuleSize() - e);
                        return n < o ? -1 : o < n ? 1 : 0
                    });
                    for (var d = Math.max(.2 * e, f), l = 0; l < r.length && 3 < r.length; l++) {
                        var c = r[l];
                        Math.abs(c.getEstimatedModuleSize() - e) > d && (r.splice(l, 1), l--)
                    }
                }
                if (3 < r.length) {
                    for (var h = n = 0, p = r; h < p.length; h++) n += p[h].getEstimatedModuleSize();
                    e = n / r.length, r.sort(function (t, r) {
                        if (r.getCount() !== t.getCount()) return r.getCount() - t.getCount();
                        var n = Math.abs(r.getEstimatedModuleSize() - e),
                            o = Math.abs(t.getEstimatedModuleSize() - e);
                        return n < o ? 1 : o < n ? -1 : 0
                    }), r.splice(3)
                }
                return [r[0], r[1], r[2]]
            }, f.CENTER_QUORUM = 2, f.MIN_SKIP = 3, f.MAX_MODULES = 57, f);

        function f(t, e) {
            this.image = t, this.resultPointCallback = e, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = e
        }
        e.default = s
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(3),
            u = (o(s, a = i.default), s.prototype.getEstimatedModuleSize = function () {
                return this.estimatedModuleSize
            }, s.prototype.getCount = function () {
                return this.count
            }, s.prototype.aboutEquals = function (t, e, r) {
                if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                    var n = Math.abs(t - this.estimatedModuleSize);
                    return n <= 1 || n <= this.estimatedModuleSize
                }
                return !1
            }, s.prototype.combineEstimate = function (t, e, r) {
                var n = this.count + 1;
                return new s((this.count * this.getX() + e) / n, (this.count * this.getY() + t) / n, (this.count * this.estimatedModuleSize + r) / n, n)
            }, s);

        function s(t, e, r, n) {
            var o = a.call(this, t, e) || this;
            return o.estimatedModuleSize = r, void 0 === (o.count = n) && (o.count = 1), o
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.getBottomLeft = function () {
            return this.bottomLeft
        }, o.prototype.getTopLeft = function () {
            return this.topLeft
        }, o.prototype.getTopRight = function () {
            return this.topRight
        }, o);

        function o(t) {
            this.bottomLeft = t[0], this.topLeft = t[1], this.topRight = t[2]
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(104),
            o = r(0),
            a = (i.prototype.find = function () {
                for (var t = this.startX, e = this.height, r = t + this.width, n = this.startY + e / 2, a = new Int32Array(3), i = this.image, u = 0; u < e; u++) {
                    var s = n + (0 == (1 & u) ? Math.floor((u + 1) / 2) : -Math.floor((u + 1) / 2));
                    a[0] = 0, a[1] = 0, a[2] = 0;
                    for (var f = t; f < r && !i.get(f, s);) f++;
                    for (var d = 0; f < r;) {
                        if (i.get(f, s))
                            if (1 === d) a[1]++;
                            else if (2 === d) {
                            var l;
                            if (this.foundPatternCross(a) && null !== (l = this.handlePossibleCenter(a, s, f))) return l;
                            a[0] = a[2], a[1] = 1, a[2] = 0, d = 1
                        } else a[++d]++;
                        else 1 === d && d++, a[d]++;
                        f++
                    }
                    if (this.foundPatternCross(a) && null !== (l = this.handlePossibleCenter(a, s, r))) return l
                }
                if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
                throw new o.default
            }, i.centerFromEnd = function (t, e) {
                return e - t[2] - t[1] / 2
            }, i.prototype.foundPatternCross = function (t) {
                for (var e = this.moduleSize, r = e / 2, n = 0; n < 3; n++)
                    if (Math.abs(e - t[n]) >= r) return !1;
                return !0
            }, i.prototype.crossCheckVertical = function (t, e, r, n) {
                var o = this.image,
                    a = o.getHeight(),
                    u = this.crossCheckStateCount;
                u[0] = 0, u[1] = 0, u[2] = 0;
                for (var s = t; 0 <= s && o.get(e, s) && u[1] <= r;) u[1]++, s--;
                if (s < 0 || u[1] > r) return NaN;
                for (; 0 <= s && !o.get(e, s) && u[0] <= r;) u[0]++, s--;
                if (u[0] > r) return NaN;
                for (s = t + 1; s < a && o.get(e, s) && u[1] <= r;) u[1]++, s++;
                if (s === a || u[1] > r) return NaN;
                for (; s < a && !o.get(e, s) && u[2] <= r;) u[2]++, s++;
                if (u[2] > r) return NaN;
                var f = u[0] + u[1] + u[2];
                return 5 * Math.abs(f - n) >= 2 * n ? NaN : this.foundPatternCross(u) ? i.centerFromEnd(u, s) : NaN
            }, i.prototype.handlePossibleCenter = function (t, e, r) {
                var o = t[0] + t[1] + t[2],
                    a = i.centerFromEnd(t, r),
                    u = this.crossCheckVertical(e, a, 2 * t[1], o);
                if (!isNaN(u)) {
                    for (var s = (t[0] + t[1] + t[2]) / 3, f = 0, d = this.possibleCenters; f < d.length; f++) {
                        var l = d[f];
                        if (l.aboutEquals(s, u, a)) return l.combineEstimate(u, a, s)
                    }
                    var c = new n.default(a, u, s);
                    this.possibleCenters.push(c), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(c)
                }
                return null
            }, i);

        function i(t, e, r, n, o, a, i) {
            this.image = t, this.startX = e, this.startY = r, this.width = n, this.height = o, this.moduleSize = a, this.resultPointCallback = i, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3)
        }
        e.default = a
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(3),
            u = (o(s, a = i.default), s.prototype.aboutEquals = function (t, e, r) {
                if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                    var n = Math.abs(t - this.estimatedModuleSize);
                    return n <= 1 || n <= this.estimatedModuleSize
                }
                return !1
            }, s.prototype.combineEstimate = function (t, e, r) {
                return new s((this.getX() + e) / 2, (this.getY() + t) / 2, (this.estimatedModuleSize + r) / 2)
            }, s);

        function s(t, e, r) {
            var n = a.call(this, t, e) || this;
            return n.estimatedModuleSize = r, n
        }
        e.default = u
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(17),
            u = r(39),
            s = (o(f, a = i.BrowserCodeReader), f);

        function f(t) {
            return void 0 === t && (t = 500), a.call(this, new u.default, t) || this
        }
        e.BrowserQRCodeReader = s
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(26),
            o = r(41),
            a = r(25),
            i = r(1),
            u = r(21),
            s = (f.prototype.write = function (t, e, r, u) {
                if (void 0 === u && (u = null), 0 === t.length) throw new i.default("Found empty contents");
                if (e < 0 || r < 0) throw new i.default("Requested dimensions are too small: " + e + "x" + r);
                var s = a.default.L,
                    d = f.QUIET_ZONE_SIZE;
                null !== u && (void 0 !== u.get(n.default.ERROR_CORRECTION) && (s = a.default.fromString(u.get(n.default.ERROR_CORRECTION).toString())), void 0 !== u.get(n.default.MARGIN) && (d = Number.parseInt(u.get(n.default.MARGIN).toString(), 10)));
                var l = o.default.encode(t, s, u);
                return this.renderResult(l, e, r, d)
            }, f.prototype.writeToDom = function (t, e, r, n, o) {
                void 0 === o && (o = null), "string" == typeof t && (t = document.querySelector(t));
                var a = this.write(e, r, n, o);
                t && t.appendChild(a)
            }, f.prototype.renderResult = function (t, e, r, n) {
                var o = t.getMatrix();
                if (null === o) throw new u.default;
                for (var a = o.getWidth(), i = o.getHeight(), s = a + 2 * n, f = i + 2 * n, d = Math.max(e, s), l = Math.max(r, f), c = Math.min(Math.floor(d / s), Math.floor(l / f)), h = Math.floor((d - a * c) / 2), p = Math.floor((l - i * c) / 2), w = this.createSVGElement(d, l), g = 0, v = p; g < i; g++, v += c)
                    for (var _ = 0, y = h; _ < a; _++, y += c)
                        if (1 === o.get(_, g)) {
                            var C = this.createSvgRectElement(y, v, c, c);
                            w.appendChild(C)
                        } return w
            }, f.prototype.createSVGElement = function (t, e) {
                var r = document.createElementNS(f.SVG_NS, "svg");
                return r.setAttributeNS(null, "height", t.toString()), r.setAttributeNS(null, "width", e.toString()), r
            }, f.prototype.createSvgRectElement = function (t, e, r, n) {
                var o = document.createElementNS(f.SVG_NS, "rect");
                return o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", e.toString()), o.setAttributeNS(null, "height", r.toString()), o.setAttributeNS(null, "width", n.toString()), o.setAttributeNS(null, "fill", "#000000"), o
            }, f.QUIET_ZONE_SIZE = 4, f.SVG_NS = "http://www.w3.org/2000/svg", f);

        function f() {}
        e.BrowserQRCodeSvgWriter = s
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(28),
            o = r(11),
            a = (i.prototype.getHeight = function () {
                return this.height
            }, i.prototype.getWidth = function () {
                return this.width
            }, i.prototype.get = function (t, e) {
                return this.bytes[e][t]
            }, i.prototype.getArray = function () {
                return this.bytes
            }, i.prototype.setNumber = function (t, e, r) {
                this.bytes[e][t] = r
            }, i.prototype.setBoolean = function (t, e, r) {
                this.bytes[e][t] = r ? 1 : 0
            }, i.prototype.clear = function (t) {
                for (var e = 0, r = this.bytes; e < r.length; e++) {
                    var o = r[e];
                    n.default.fillUint8Array(o, t)
                }
            }, i.prototype.equals = function (t) {
                if (!(t instanceof i)) return !1;
                var e = t;
                if (this.width !== e.width) return !1;
                if (this.height !== e.height) return !1;
                for (var r = 0, n = this.height; r < n; ++r)
                    for (var o = this.bytes[r], a = e.bytes[r], u = 0, s = this.width; u < s; ++u)
                        if (o[u] !== a[u]) return !1;
                return !0
            }, i.prototype.toString = function () {
                for (var t = new o.default, e = 0, r = this.height; e < r; ++e) {
                    for (var n = this.bytes[e], a = 0, i = this.width; a < i; ++a) switch (n[a]) {
                        case 0:
                            t.append(" 0");
                            break;
                        case 1:
                            t.append(" 1");
                            break;
                        default:
                            t.append("  ")
                    }
                    t.append("\n")
                }
                return t.toString()
            }, i);

        function i(t, e) {
            this.width = t, this.height = e;
            for (var r = new Array(e), n = 0; n !== e; n++) r[n] = new Uint8Array(t);
            this.bytes = r
        }
        e.default = a
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(15),
            o = r(23),
            a = r(42),
            i = r(69),
            u = r(43),
            s = r(1),
            f = (d.clearMatrix = function (t) {
                t.clear(255)
            }, d.buildMatrix = function (t, e, r, n, o) {
                d.clearMatrix(o), d.embedBasicPatterns(r, o), d.embedTypeInfo(e, n, o), d.maybeEmbedVersionInfo(r, o), d.embedDataBits(t, n, o)
            }, d.embedBasicPatterns = function (t, e) {
                d.embedPositionDetectionPatternsAndSeparators(e), d.embedDarkDotAtLeftBottomCorner(e), d.maybeEmbedPositionAdjustmentPatterns(t, e), d.embedTimingPatterns(e)
            }, d.embedTypeInfo = function (t, e, r) {
                var o = new n.default;
                d.makeTypeInfoBits(t, e, o);
                for (var a = 0, i = o.getSize(); a < i; ++a) {
                    var u = o.get(o.getSize() - 1 - a),
                        s = d.TYPE_INFO_COORDINATES[a],
                        f = s[0],
                        l = s[1];
                    if (r.setBoolean(f, l, u), a < 8) {
                        var c = r.getWidth() - a - 1,
                            h = 8;
                        r.setBoolean(c, h, u)
                    } else c = 8, h = r.getHeight() - 7 + (a - 8), r.setBoolean(c, h, u)
                }
            }, d.maybeEmbedVersionInfo = function (t, e) {
                if (!(t.getVersionNumber() < 7)) {
                    var r = new n.default;
                    d.makeVersionInfoBits(t, r);
                    for (var o = 17, a = 0; a < 6; ++a)
                        for (var i = 0; i < 3; ++i) {
                            var u = r.get(o);
                            o--, e.setBoolean(a, e.getHeight() - 11 + i, u), e.setBoolean(e.getHeight() - 11 + i, a, u)
                        }
                }
            }, d.embedDataBits = function (t, e, r) {
                for (var n = 0, o = -1, a = r.getWidth() - 1, s = r.getHeight() - 1; 0 < a;) {
                    for (6 === a && (a -= 1); 0 <= s && s < r.getHeight();) {
                        for (var f = 0; f < 2; ++f) {
                            var l = a - f;
                            if (d.isEmpty(r.get(l, s))) {
                                var c = void 0;
                                n < t.getSize() ? (c = t.get(n), ++n) : c = !1, 255 !== e && i.default.getDataMaskBit(e, l, s) && (c = !c), r.setBoolean(l, s, c)
                            }
                        }
                        s += o
                    }
                    s += o = -o, a -= 2
                }
                if (n !== t.getSize()) throw new u.default("Not all bits consumed: " + n + "/" + t.getSize())
            }, d.findMSBSet = function (t) {
                return 32 - o.default.numberOfLeadingZeros(t)
            }, d.calculateBCHCode = function (t, e) {
                if (0 === e) throw new s.default("0 polynomial");
                var r = d.findMSBSet(e);
                for (t <<= r - 1; d.findMSBSet(t) >= r;) t ^= e << d.findMSBSet(t) - r;
                return t
            }, d.makeTypeInfoBits = function (t, e, r) {
                if (!a.default.isValidMaskPattern(e)) throw new u.default("Invalid mask pattern");
                var o = t.getBits() << 3 | e;
                r.appendBits(o, 5);
                var i = d.calculateBCHCode(o, d.TYPE_INFO_POLY);
                r.appendBits(i, 10);
                var s = new n.default;
                if (s.appendBits(d.TYPE_INFO_MASK_PATTERN, 15), r.xor(s), 15 !== r.getSize()) throw new u.default("should not happen but we got: " + r.getSize())
            }, d.makeVersionInfoBits = function (t, e) {
                e.appendBits(t.getVersionNumber(), 6);
                var r = d.calculateBCHCode(t.getVersionNumber(), d.VERSION_INFO_POLY);
                if (e.appendBits(r, 12), 18 !== e.getSize()) throw new u.default("should not happen but we got: " + e.getSize())
            }, d.isEmpty = function (t) {
                return 255 === t
            }, d.embedTimingPatterns = function (t) {
                for (var e = 8; e < t.getWidth() - 8; ++e) {
                    var r = (e + 1) % 2;
                    d.isEmpty(t.get(e, 6)) && t.setNumber(e, 6, r), d.isEmpty(t.get(6, e)) && t.setNumber(6, e, r)
                }
            }, d.embedDarkDotAtLeftBottomCorner = function (t) {
                if (0 === t.get(8, t.getHeight() - 8)) throw new u.default;
                t.setNumber(8, t.getHeight() - 8, 1)
            }, d.embedHorizontalSeparationPattern = function (t, e, r) {
                for (var n = 0; n < 8; ++n) {
                    if (!d.isEmpty(r.get(t + n, e))) throw new u.default;
                    r.setNumber(t + n, e, 0)
                }
            }, d.embedVerticalSeparationPattern = function (t, e, r) {
                for (var n = 0; n < 7; ++n) {
                    if (!d.isEmpty(r.get(t, e + n))) throw new u.default;
                    r.setNumber(t, e + n, 0)
                }
            }, d.embedPositionAdjustmentPattern = function (t, e, r) {
                for (var n = 0; n < 5; ++n)
                    for (var o = d.POSITION_ADJUSTMENT_PATTERN[n], a = 0; a < 5; ++a) r.setNumber(t + a, e + n, o[a])
            }, d.embedPositionDetectionPattern = function (t, e, r) {
                for (var n = 0; n < 7; ++n)
                    for (var o = d.POSITION_DETECTION_PATTERN[n], a = 0; a < 7; ++a) r.setNumber(t + a, e + n, o[a])
            }, d.embedPositionDetectionPatternsAndSeparators = function (t) {
                var e = d.POSITION_DETECTION_PATTERN[0].length;
                d.embedPositionDetectionPattern(0, 0, t), d.embedPositionDetectionPattern(t.getWidth() - e, 0, t), d.embedPositionDetectionPattern(0, t.getWidth() - e, t), d.embedHorizontalSeparationPattern(0, 7, t), d.embedHorizontalSeparationPattern(t.getWidth() - 8, 7, t), d.embedHorizontalSeparationPattern(0, t.getWidth() - 8, t), d.embedVerticalSeparationPattern(7, 0, t), d.embedVerticalSeparationPattern(t.getHeight() - 7 - 1, 0, t), d.embedVerticalSeparationPattern(7, t.getHeight() - 7, t)
            }, d.maybeEmbedPositionAdjustmentPatterns = function (t, e) {
                if (!(t.getVersionNumber() < 2))
                    for (var r = t.getVersionNumber() - 1, n = d.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r], o = 0, a = n.length; o !== a; o++) {
                        var i = n[o];
                        if (0 <= i)
                            for (var u = 0; u !== a; u++) {
                                var s = n[u];
                                0 <= s && d.isEmpty(e.get(s, i)) && d.embedPositionAdjustmentPattern(s - 2, i - 2, e)
                            }
                    }
            }, d.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]), d.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), d.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), d.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]), d.VERSION_INFO_POLY = 7973, d.TYPE_INFO_POLY = 1335, d.TYPE_INFO_MASK_PATTERN = 21522, d);

        function d() {}
        e.default = f
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.getDataBytes = function () {
            return this.dataBytes
        }, o.prototype.getErrorCorrectionBytes = function () {
            return this.errorCorrectionBytes
        }, o);

        function o(t, e) {
            this.dataBytes = t, this.errorCorrectionBytes = e
        }
        e.default = n
    }, function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(70),
            o = r(2),
            a = r(1),
            i = (u.prototype.encode = function (t, e, r, i, u) {
                var s;
                switch (e) {
                    case o.default.QR_CODE:
                        s = new n.default;
                        break;
                    default:
                        throw new a.default("No encoder available for format " + e)
                }
                return s.encode(t, e, r, i, u)
            }, u);

        function u() {}
        e.default = i
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, i = r(7),
            u = r(19),
            s = r(18),
            f = r(1),
            d = (o(l, a = u.default), l.prototype.getRow = function (t, e) {
                if (t < 0 || t >= this.getHeight()) throw new f.default("Requested row is outside the image: " + t);
                var r = this.getWidth();
                (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                var n = (t + this.top) * this.dataWidth + this.left;
                return i.default.arraycopy(this.yuvData, n, e, 0, r), e
            }, l.prototype.getMatrix = function () {
                var t = this.getWidth(),
                    e = this.getHeight();
                if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
                var r = t * e,
                    n = new Uint8ClampedArray(r),
                    o = this.top * this.dataWidth + this.left;
                if (t === this.dataWidth) return i.default.arraycopy(this.yuvData, o, n, 0, r), n;
                for (var a = 0; a < e; a++) {
                    var u = a * t;
                    i.default.arraycopy(this.yuvData, o, n, u, t), o += this.dataWidth
                }
                return n
            }, l.prototype.isCropSupported = function () {
                return !0
            }, l.prototype.crop = function (t, e, r, n) {
                return new l(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + e, r, n, !1)
            }, l.prototype.renderThumbnail = function () {
                for (var t = this.getWidth() / l.THUMBNAIL_SCALE_FACTOR, e = this.getHeight() / l.THUMBNAIL_SCALE_FACTOR, r = new Int32Array(t * e), n = this.yuvData, o = this.top * this.dataWidth + this.left, a = 0; a < e; a++) {
                    for (var i = a * t, u = 0; u < t; u++) {
                        var s = 255 & n[o + u * l.THUMBNAIL_SCALE_FACTOR];
                        r[i + u] = 4278190080 | 65793 * s
                    }
                    o += this.dataWidth * l.THUMBNAIL_SCALE_FACTOR
                }
                return r
            }, l.prototype.getThumbnailWidth = function () {
                return this.getWidth() / l.THUMBNAIL_SCALE_FACTOR
            }, l.prototype.getThumbnailHeight = function () {
                return this.getHeight() / l.THUMBNAIL_SCALE_FACTOR
            }, l.prototype.reverseHorizontal = function (t, e) {
                for (var r = this.yuvData, n = 0, o = this.top * this.dataWidth + this.left; n < e; n++, o += this.dataWidth)
                    for (var a = o + t / 2, i = o, u = o + t - 1; i < a; i++, u--) {
                        var s = r[i];
                        r[i] = r[u], r[u] = s
                    }
            }, l.prototype.invert = function () {
                return new s.default(this)
            }, l.THUMBNAIL_SCALE_FACTOR = 2, l);

        function l(t, e, r, n, o, i, u, s) {
            var d = a.call(this, i, u) || this;
            if (d.yuvData = t, d.dataWidth = e, d.dataHeight = r, d.left = n, d.top = o, e < n + i || r < o + u) throw new f.default("Crop rectangle does not fit within image data.");
            return s && d.reverseHorizontal(i, u), d
        }
        e.default = d
    }, function (t, e, r) {
        "use strict";
        var n, o = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r(18);
        var a, i = r(18),
            u = r(19),
            s = r(7),
            f = r(1),
            d = (o(l, a = u.default), l.prototype.getRow = function (t, e) {
                if (t < 0 || t >= this.getHeight()) throw new f.default("Requested row is outside the image: " + t);
                var r = this.getWidth();
                (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                var n = (t + this.top) * this.dataWidth + this.left;
                return s.default.arraycopy(this.luminances, n, e, 0, r), e
            }, l.prototype.getMatrix = function () {
                var t = this.getWidth(),
                    e = this.getHeight();
                if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
                var r = t * e,
                    n = new Uint8ClampedArray(r),
                    o = this.top * this.dataWidth + this.left;
                if (t === this.dataWidth) return s.default.arraycopy(this.luminances, o, n, 0, r), n;
                for (var a = 0; a < e; a++) {
                    var i = a * t;
                    s.default.arraycopy(this.luminances, o, n, i, t), o += this.dataWidth
                }
                return n
            }, l.prototype.isCropSupported = function () {
                return !0
            }, l.prototype.crop = function (t, e, r, n) {
                return new l(this.luminances, r, n, this.dataWidth, this.dataHeight, this.left + t, this.top + e)
            }, l.prototype.invert = function () {
                return new i.default(this)
            }, l);

        function l(t, e, r, n, o, i, u) {
            var s = a.call(this, e, r) || this;
            if (s.dataWidth = n, s.dataHeight = o, s.left = i, s.top = u, 4 === t.BYTES_PER_ELEMENT) {
                for (var d = e * r, l = new Uint8ClampedArray(d), c = 0; c < d; c++) {
                    var h = t[c],
                        p = h >> 16 & 255,
                        w = h >> 7 & 510,
                        g = 255 & h;
                    l[c] = (p + w + g) / 4 & 255
                }
                s.luminances = l
            } else s.luminances = t;
            if (void 0 === n && (s.dataWidth = e), void 0 === o && (s.dataHeight = r), void 0 === i && (s.left = 0), void 0 === u && (s.top = 0), s.left + e > s.dataWidth || s.top + r > s.dataHeight) throw new f.default("Crop rectangle does not fit within image data.");
            return s
        }
        e.default = d
    }], t.c = r, t.d = function (e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: n
        })
    }, t.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, t.t = function (e, r) {
        if (1 & r && (e = t(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e)
            for (var o in e) t.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, t.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, t.p = "", t(t.s = 71);

    function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var e, r
});
//# sourceMappingURL=index.min.js.map