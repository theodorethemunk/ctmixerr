(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [687], {
        640: function(e, t, r) {
            "use strict";
            var n = r(1742),
                o = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var r, i, a, s, u, l, c, f, p = !1;
                t || (t = {}), a = t.debug || !1;
                try {
                    if (u = n(), l = document.createRange(), c = document.getSelection(), (f = document.createElement("span")).textContent = e, f.ariaHidden = "true", f.style.all = "unset", f.style.position = "fixed", f.style.top = 0, f.style.clip = "rect(0, 0, 0, 0)", f.style.whiteSpace = "pre", f.style.webkitUserSelect = "text", f.style.MozUserSelect = "text", f.style.msUserSelect = "text", f.style.userSelect = "text", f.addEventListener("copy", function(r) {
                            if (r.stopPropagation(), t.format) {
                                if (r.preventDefault(), void 0 === r.clipboardData) {
                                    a && console.warn("unable to use e.clipboardData"), a && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var n = o[t.format] || o.default;
                                    window.clipboardData.setData(n, e)
                                } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e)
                            }
                            t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                        }), document.body.appendChild(f), l.selectNodeContents(f), c.addRange(l), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                    p = !0
                } catch (n) {
                    a && console.error("unable to copy using execCommand: ", n), a && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), p = !0
                    } catch (n) {
                        a && console.error("unable to copy using clipboardData: ", n), a && console.error("falling back to prompt"), r = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter", i = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", s = r.replace(/#{\s*key\s*}/g, i), window.prompt(s, e)
                    }
                } finally {
                    c && ("function" == typeof c.removeRange ? c.removeRange(l) : c.removeAllRanges()), f && document.body.removeChild(f), u()
                }
                return p
            }
        },
        1876: function(e) {
            ! function() {
                var t = {
                        675: function(e, t) {
                            "use strict";
                            t.byteLength = function(e) {
                                var t = u(e),
                                    r = t[0],
                                    n = t[1];
                                return (r + n) * 3 / 4 - n
                            }, t.toByteArray = function(e) {
                                var t, r, i = u(e),
                                    a = i[0],
                                    s = i[1],
                                    l = new o((a + s) * 3 / 4 - s),
                                    c = 0,
                                    f = s > 0 ? a - 4 : a;
                                for (r = 0; r < f; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
                                return 2 === s && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, l[c++] = 255 & t), 1 === s && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t), l
                            }, t.fromByteArray = function(e) {
                                for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383) i.push(function(e, t, n) {
                                    for (var o, i = [], a = t; a < n; a += 3) i.push(r[(o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2])) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                                    return i.join("")
                                }(e, a, a + 16383 > s ? s : a + 16383));
                                return 1 === o ? i.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === o && i.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="), i.join("")
                            };
                            for (var r = [], n = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a) r[a] = i[a], n[i.charCodeAt(a)] = a;

                            function u(e) {
                                var t = e.length;
                                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                                var r = e.indexOf("="); - 1 === r && (r = t);
                                var n = r === t ? 0 : 4 - r % 4;
                                return [r, n]
                            }
                            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
                        },
                        72: function(e, t, r) {
                            "use strict";
                            /*!
                             * The buffer module from node.js, for the browser.
                             *
                             * @author   Feross Aboukhadijeh <https://feross.org>
                             * @license  MIT
                             */
                            var n = r(675),
                                o = r(783),
                                i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                            function a(e) {
                                if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                                var t = new Uint8Array(e);
                                return Object.setPrototypeOf(t, s.prototype), t
                            }

                            function s(e, t, r) {
                                if ("number" == typeof e) {
                                    if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                                    return c(e)
                                }
                                return u(e, t, r)
                            }

                            function u(e, t, r) {
                                if ("string" == typeof e) return function(e, t) {
                                    if (("string" != typeof t || "" === t) && (t = "utf8"), !s.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                                    var r = 0 | d(e, t),
                                        n = a(r),
                                        o = n.write(e, t);
                                    return o !== r && (n = n.slice(0, o)), n
                                }(e, t);
                                if (ArrayBuffer.isView(e)) return f(e);
                                if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                                if (P(e, ArrayBuffer) || e && P(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (P(e, SharedArrayBuffer) || e && P(e.buffer, SharedArrayBuffer))) return function(e, t, r) {
                                    var n;
                                    if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                                    if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                                    return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), s.prototype), n
                                }(e, t, r);
                                if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                                var n = e.valueOf && e.valueOf();
                                if (null != n && n !== e) return s.from(n, t, r);
                                var o = function(e) {
                                    if (s.isBuffer(e)) {
                                        var t, r = 0 | p(e.length),
                                            n = a(r);
                                        return 0 === n.length || e.copy(n, 0, 0, r), n
                                    }
                                    return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? a(0) : f(e) : "Buffer" === e.type && Array.isArray(e.data) ? f(e.data) : void 0
                                }(e);
                                if (o) return o;
                                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
                                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                            }

                            function l(e) {
                                if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
                            }

                            function c(e) {
                                return l(e), a(e < 0 ? 0 : 0 | p(e))
                            }

                            function f(e) {
                                for (var t = e.length < 0 ? 0 : 0 | p(e.length), r = a(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                                return r
                            }

                            function p(e) {
                                if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                                return 0 | e
                            }

                            function d(e, t) {
                                if (s.isBuffer(e)) return e.length;
                                if (ArrayBuffer.isView(e) || P(e, ArrayBuffer)) return e.byteLength;
                                if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                                var r = e.length,
                                    n = arguments.length > 2 && !0 === arguments[2];
                                if (!n && 0 === r) return 0;
                                for (var o = !1;;) switch (t) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return r;
                                    case "utf8":
                                    case "utf-8":
                                        return R(e).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * r;
                                    case "hex":
                                        return r >>> 1;
                                    case "base64":
                                        return C(e).length;
                                    default:
                                        if (o) return n ? -1 : R(e).length;
                                        t = ("" + t).toLowerCase(), o = !0
                                }
                            }

                            function h(e, t, r) {
                                var o, i, a = !1;
                                if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                                for (e || (e = "utf8");;) switch (e) {
                                    case "hex":
                                        return function(e, t, r) {
                                            var n = e.length;
                                            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                                            for (var o = "", i = t; i < r; ++i) o += D[e[i]];
                                            return o
                                        }(this, t, r);
                                    case "utf8":
                                    case "utf-8":
                                        return v(this, t, r);
                                    case "ascii":
                                        return function(e, t, r) {
                                            var n = "";
                                            r = Math.min(e.length, r);
                                            for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                                            return n
                                        }(this, t, r);
                                    case "latin1":
                                    case "binary":
                                        return function(e, t, r) {
                                            var n = "";
                                            r = Math.min(e.length, r);
                                            for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                                            return n
                                        }(this, t, r);
                                    case "base64":
                                        return o = t, i = r, 0 === o && i === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(o, i));
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return function(e, t, r) {
                                            for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                                            return o
                                        }(this, t, r);
                                    default:
                                        if (a) throw TypeError("Unknown encoding: " + e);
                                        e = (e + "").toLowerCase(), a = !0
                                }
                            }

                            function m(e, t, r) {
                                var n = e[t];
                                e[t] = e[r], e[r] = n
                            }

                            function b(e, t, r, n, o) {
                                var i;
                                if (0 === e.length) return -1;
                                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (i = r = +r) != i && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                                    if (o) return -1;
                                    r = e.length - 1
                                } else if (r < 0) {
                                    if (!o) return -1;
                                    r = 0
                                }
                                if ("string" == typeof t && (t = s.from(t, n)), s.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, n, o);
                                if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, o);
                                throw TypeError("val must be string, number or Buffer")
                            }

                            function y(e, t, r, n, o) {
                                var i, a = 1,
                                    s = e.length,
                                    u = t.length;
                                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                    if (e.length < 2 || t.length < 2) return -1;
                                    a = 2, s /= 2, u /= 2, r /= 2
                                }

                                function l(e, t) {
                                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                                }
                                if (o) {
                                    var c = -1;
                                    for (i = r; i < s; i++)
                                        if (l(e, i) === l(t, -1 === c ? 0 : i - c)) {
                                            if (-1 === c && (c = i), i - c + 1 === u) return c * a
                                        } else -1 !== c && (i -= i - c), c = -1
                                } else
                                    for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
                                        for (var f = !0, p = 0; p < u; p++)
                                            if (l(e, i + p) !== l(t, p)) {
                                                f = !1;
                                                break
                                            }
                                        if (f) return i
                                    }
                                return -1
                            }

                            function v(e, t, r) {
                                r = Math.min(e.length, r);
                                for (var n = [], o = t; o < r;) {
                                    var i, a, s, u, l = e[o],
                                        c = null,
                                        f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                                    if (o + f <= r) switch (f) {
                                        case 1:
                                            l < 128 && (c = l);
                                            break;
                                        case 2:
                                            (192 & (i = e[o + 1])) == 128 && (u = (31 & l) << 6 | 63 & i) > 127 && (c = u);
                                            break;
                                        case 3:
                                            i = e[o + 1], a = e[o + 2], (192 & i) == 128 && (192 & a) == 128 && (u = (15 & l) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (c = u);
                                            break;
                                        case 4:
                                            i = e[o + 1], a = e[o + 2], s = e[o + 3], (192 & i) == 128 && (192 & a) == 128 && (192 & s) == 128 && (u = (15 & l) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (c = u)
                                    }
                                    null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), o += f
                                }
                                return function(e) {
                                    var t = e.length;
                                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                                    for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                                    return r
                                }(n)
                            }

                            function g(e, t, r) {
                                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                                if (e + t > r) throw RangeError("Trying to access beyond buffer length")
                            }

                            function E(e, t, r, n, o, i) {
                                if (!s.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                                if (t > o || t < i) throw RangeError('"value" argument is out of bounds');
                                if (r + n > e.length) throw RangeError("Index out of range")
                            }

                            function w(e, t, r, n, o, i) {
                                if (r + n > e.length || r < 0) throw RangeError("Index out of range")
                            }

                            function O(e, t, r, n, i) {
                                return t = +t, r >>>= 0, i || w(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), o.write(e, t, r, n, 23, 4), r + 4
                            }

                            function S(e, t, r, n, i) {
                                return t = +t, r >>>= 0, i || w(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), o.write(e, t, r, n, 52, 8), r + 8
                            }
                            t.Buffer = s, t.SlowBuffer = function(e) {
                                return +e != e && (e = 0), s.alloc(+e)
                            }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 2147483647, s.TYPED_ARRAY_SUPPORT = function() {
                                try {
                                    var e = new Uint8Array(1),
                                        t = {
                                            foo: function() {
                                                return 42
                                            }
                                        };
                                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                                } catch (e) {
                                    return !1
                                }
                            }(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
                                enumerable: !0,
                                get: function() {
                                    if (s.isBuffer(this)) return this.buffer
                                }
                            }), Object.defineProperty(s.prototype, "offset", {
                                enumerable: !0,
                                get: function() {
                                    if (s.isBuffer(this)) return this.byteOffset
                                }
                            }), s.poolSize = 8192, s.from = function(e, t, r) {
                                return u(e, t, r)
                            }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(e, t, r) {
                                return (l(e), e <= 0) ? a(e) : void 0 !== t ? "string" == typeof r ? a(e).fill(t, r) : a(e).fill(t) : a(e)
                            }, s.allocUnsafe = function(e) {
                                return c(e)
                            }, s.allocUnsafeSlow = function(e) {
                                return c(e)
                            }, s.isBuffer = function(e) {
                                return null != e && !0 === e._isBuffer && e !== s.prototype
                            }, s.compare = function(e, t) {
                                if (P(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), P(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                if (e === t) return 0;
                                for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                                    if (e[o] !== t[o]) {
                                        r = e[o], n = t[o];
                                        break
                                    }
                                return r < n ? -1 : n < r ? 1 : 0
                            }, s.isEncoding = function(e) {
                                switch (String(e).toLowerCase()) {
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
                                        return !1
                                }
                            }, s.concat = function(e, t) {
                                if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                                if (0 === e.length) return s.alloc(0);
                                if (void 0 === t)
                                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                                var r, n = s.allocUnsafe(t),
                                    o = 0;
                                for (r = 0; r < e.length; ++r) {
                                    var i = e[r];
                                    if (P(i, Uint8Array) && (i = s.from(i)), !s.isBuffer(i)) throw TypeError('"list" argument must be an Array of Buffers');
                                    i.copy(n, o), o += i.length
                                }
                                return n
                            }, s.byteLength = d, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                                var e = this.length;
                                if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                                for (var t = 0; t < e; t += 2) m(this, t, t + 1);
                                return this
                            }, s.prototype.swap32 = function() {
                                var e = this.length;
                                if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                                for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
                                return this
                            }, s.prototype.swap64 = function() {
                                var e = this.length;
                                if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                                for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
                                return this
                            }, s.prototype.toString = function() {
                                var e = this.length;
                                return 0 === e ? "" : 0 == arguments.length ? v(this, 0, e) : h.apply(this, arguments)
                            }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
                                if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                                return this === e || 0 === s.compare(this, e)
                            }, s.prototype.inspect = function() {
                                var e = "",
                                    r = t.INSPECT_MAX_BYTES;
                                return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
                            }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(e, t, r, n, o) {
                                if (P(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw RangeError("out of range index");
                                if (n >= o && t >= r) return 0;
                                if (n >= o) return -1;
                                if (t >= r) return 1;
                                if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
                                for (var i = o - n, a = r - t, u = Math.min(i, a), l = this.slice(n, o), c = e.slice(t, r), f = 0; f < u; ++f)
                                    if (l[f] !== c[f]) {
                                        i = l[f], a = c[f];
                                        break
                                    }
                                return i < a ? -1 : a < i ? 1 : 0
                            }, s.prototype.includes = function(e, t, r) {
                                return -1 !== this.indexOf(e, t, r)
                            }, s.prototype.indexOf = function(e, t, r) {
                                return b(this, e, t, r, !0)
                            }, s.prototype.lastIndexOf = function(e, t, r) {
                                return b(this, e, t, r, !1)
                            }, s.prototype.write = function(e, t, r, n) {
                                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                                else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                var o, i, a, s, u, l, c, f, p, d, h, m, b = this.length - t;
                                if ((void 0 === r || r > b) && (r = b), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                                n || (n = "utf8");
                                for (var y = !1;;) switch (n) {
                                    case "hex":
                                        return function(e, t, r, n) {
                                            r = Number(r) || 0;
                                            var o = e.length - r;
                                            n ? (n = Number(n)) > o && (n = o) : n = o;
                                            var i = t.length;
                                            n > i / 2 && (n = i / 2);
                                            for (var a = 0; a < n; ++a) {
                                                var s = parseInt(t.substr(2 * a, 2), 16);
                                                if (s != s) break;
                                                e[r + a] = s
                                            }
                                            return a
                                        }(this, e, t, r);
                                    case "utf8":
                                    case "utf-8":
                                        return u = t, l = r, A(R(e, this.length - u), this, u, l);
                                    case "ascii":
                                        return c = t, f = r, A(x(e), this, c, f);
                                    case "latin1":
                                    case "binary":
                                        return o = this, i = e, a = t, s = r, A(x(i), o, a, s);
                                    case "base64":
                                        return p = t, d = r, A(C(e), this, p, d);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return h = t, m = r, A(function(e, t) {
                                            for (var r, n, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) n = (r = e.charCodeAt(i)) >> 8, o.push(r % 256), o.push(n);
                                            return o
                                        }(e, this.length - h), this, h, m);
                                    default:
                                        if (y) throw TypeError("Unknown encoding: " + n);
                                        n = ("" + n).toLowerCase(), y = !0
                                }
                            }, s.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            }, s.prototype.slice = function(e, t) {
                                var r = this.length;
                                e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                                var n = this.subarray(e, t);
                                return Object.setPrototypeOf(n, s.prototype), n
                            }, s.prototype.readUIntLE = function(e, t, r) {
                                e >>>= 0, t >>>= 0, r || g(e, t, this.length);
                                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                                return n
                            }, s.prototype.readUIntBE = function(e, t, r) {
                                e >>>= 0, t >>>= 0, r || g(e, t, this.length);
                                for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
                                return n
                            }, s.prototype.readUInt8 = function(e, t) {
                                return e >>>= 0, t || g(e, 1, this.length), this[e]
                            }, s.prototype.readUInt16LE = function(e, t) {
                                return e >>>= 0, t || g(e, 2, this.length), this[e] | this[e + 1] << 8
                            }, s.prototype.readUInt16BE = function(e, t) {
                                return e >>>= 0, t || g(e, 2, this.length), this[e] << 8 | this[e + 1]
                            }, s.prototype.readUInt32LE = function(e, t) {
                                return e >>>= 0, t || g(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                            }, s.prototype.readUInt32BE = function(e, t) {
                                return e >>>= 0, t || g(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                            }, s.prototype.readIntLE = function(e, t, r) {
                                e >>>= 0, t >>>= 0, r || g(e, t, this.length);
                                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                                return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
                            }, s.prototype.readIntBE = function(e, t, r) {
                                e >>>= 0, t >>>= 0, r || g(e, t, this.length);
                                for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
                                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
                            }, s.prototype.readInt8 = function(e, t) {
                                return (e >>>= 0, t || g(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                            }, s.prototype.readInt16LE = function(e, t) {
                                e >>>= 0, t || g(e, 2, this.length);
                                var r = this[e] | this[e + 1] << 8;
                                return 32768 & r ? 4294901760 | r : r
                            }, s.prototype.readInt16BE = function(e, t) {
                                e >>>= 0, t || g(e, 2, this.length);
                                var r = this[e + 1] | this[e] << 8;
                                return 32768 & r ? 4294901760 | r : r
                            }, s.prototype.readInt32LE = function(e, t) {
                                return e >>>= 0, t || g(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                            }, s.prototype.readInt32BE = function(e, t) {
                                return e >>>= 0, t || g(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                            }, s.prototype.readFloatLE = function(e, t) {
                                return e >>>= 0, t || g(e, 4, this.length), o.read(this, e, !0, 23, 4)
                            }, s.prototype.readFloatBE = function(e, t) {
                                return e >>>= 0, t || g(e, 4, this.length), o.read(this, e, !1, 23, 4)
                            }, s.prototype.readDoubleLE = function(e, t) {
                                return e >>>= 0, t || g(e, 8, this.length), o.read(this, e, !0, 52, 8)
                            }, s.prototype.readDoubleBE = function(e, t) {
                                return e >>>= 0, t || g(e, 8, this.length), o.read(this, e, !1, 52, 8)
                            }, s.prototype.writeUIntLE = function(e, t, r, n) {
                                if (e = +e, t >>>= 0, r >>>= 0, !n) {
                                    var o = Math.pow(2, 8 * r) - 1;
                                    E(this, e, t, r, o, 0)
                                }
                                var i = 1,
                                    a = 0;
                                for (this[t] = 255 & e; ++a < r && (i *= 256);) this[t + a] = e / i & 255;
                                return t + r
                            }, s.prototype.writeUIntBE = function(e, t, r, n) {
                                if (e = +e, t >>>= 0, r >>>= 0, !n) {
                                    var o = Math.pow(2, 8 * r) - 1;
                                    E(this, e, t, r, o, 0)
                                }
                                var i = r - 1,
                                    a = 1;
                                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
                                return t + r
                            }, s.prototype.writeUInt8 = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                            }, s.prototype.writeUInt16LE = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                            }, s.prototype.writeUInt16BE = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                            }, s.prototype.writeUInt32LE = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                            }, s.prototype.writeUInt32BE = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                            }, s.prototype.writeIntLE = function(e, t, r, n) {
                                if (e = +e, t >>>= 0, !n) {
                                    var o = Math.pow(2, 8 * r - 1);
                                    E(this, e, t, r, o - 1, -o)
                                }
                                var i = 0,
                                    a = 1,
                                    s = 0;
                                for (this[t] = 255 & e; ++i < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                                return t + r
                            }, s.prototype.writeIntBE = function(e, t, r, n) {
                                if (e = +e, t >>>= 0, !n) {
                                    var o = Math.pow(2, 8 * r - 1);
                                    E(this, e, t, r, o - 1, -o)
                                }
                                var i = r - 1,
                                    a = 1,
                                    s = 0;
                                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                                return t + r
                            }, s.prototype.writeInt8 = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                            }, s.prototype.writeInt16LE = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                            }, s.prototype.writeInt16BE = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                            }, s.prototype.writeInt32LE = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                            }, s.prototype.writeInt32BE = function(e, t, r) {
                                return e = +e, t >>>= 0, r || E(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                            }, s.prototype.writeFloatLE = function(e, t, r) {
                                return O(this, e, t, !0, r)
                            }, s.prototype.writeFloatBE = function(e, t, r) {
                                return O(this, e, t, !1, r)
                            }, s.prototype.writeDoubleLE = function(e, t, r) {
                                return S(this, e, t, !0, r)
                            }, s.prototype.writeDoubleBE = function(e, t, r) {
                                return S(this, e, t, !1, r)
                            }, s.prototype.copy = function(e, t, r, n) {
                                if (!s.isBuffer(e)) throw TypeError("argument should be a Buffer");
                                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
                                if (t < 0) throw RangeError("targetStart out of bounds");
                                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                                if (n < 0) throw RangeError("sourceEnd out of bounds");
                                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                                var o = n - r;
                                if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                                else if (this === e && r < t && t < n)
                                    for (var i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                                else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                                return o
                            }, s.prototype.fill = function(e, t, r, n) {
                                if ("string" == typeof e) {
                                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                                    if ("string" == typeof n && !s.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                                    if (1 === e.length) {
                                        var o, i = e.charCodeAt(0);
                                        ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                                    }
                                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                                if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                                if (r <= t) return this;
                                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                                    for (o = t; o < r; ++o) this[o] = e;
                                else {
                                    var a = s.isBuffer(e) ? e : s.from(e, n),
                                        u = a.length;
                                    if (0 === u) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                                    for (o = 0; o < r - t; ++o) this[o + t] = a[o % u]
                                }
                                return this
                            };
                            var T = /[^+/0-9A-Za-z-_]/g;

                            function R(e, t) {
                                t = t || 1 / 0;
                                for (var r, n = e.length, o = null, i = [], a = 0; a < n; ++a) {
                                    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                                        if (!o) {
                                            if (r > 56319 || a + 1 === n) {
                                                (t -= 3) > -1 && i.push(239, 191, 189);
                                                continue
                                            }
                                            o = r;
                                            continue
                                        }
                                        if (r < 56320) {
                                            (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                                            continue
                                        }
                                        r = (o - 55296 << 10 | r - 56320) + 65536
                                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                                    if (o = null, r < 128) {
                                        if ((t -= 1) < 0) break;
                                        i.push(r)
                                    } else if (r < 2048) {
                                        if ((t -= 2) < 0) break;
                                        i.push(r >> 6 | 192, 63 & r | 128)
                                    } else if (r < 65536) {
                                        if ((t -= 3) < 0) break;
                                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                                    } else if (r < 1114112) {
                                        if ((t -= 4) < 0) break;
                                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                                    } else throw Error("Invalid code point")
                                }
                                return i
                            }

                            function x(e) {
                                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                                return t
                            }

                            function C(e) {
                                return n.toByteArray(function(e) {
                                    if ((e = (e = e.split("=")[0]).trim().replace(T, "")).length < 2) return "";
                                    for (; e.length % 4 != 0;) e += "=";
                                    return e
                                }(e))
                            }

                            function A(e, t, r, n) {
                                for (var o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o) t[o + r] = e[o];
                                return o
                            }

                            function P(e, t) {
                                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                            }
                            var D = function() {
                                for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
                                    for (var n = 16 * r, o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
                                return t
                            }()
                        },
                        783: function(e, t) { /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
                            t.read = function(e, t, r, n, o) {
                                var i, a, s = 8 * o - n - 1,
                                    u = (1 << s) - 1,
                                    l = u >> 1,
                                    c = -7,
                                    f = r ? o - 1 : 0,
                                    p = r ? -1 : 1,
                                    d = e[t + f];
                                for (f += p, i = d & (1 << -c) - 1, d >>= -c, c += s; c > 0; i = 256 * i + e[t + f], f += p, c -= 8);
                                for (a = i & (1 << -c) - 1, i >>= -c, c += n; c > 0; a = 256 * a + e[t + f], f += p, c -= 8);
                                if (0 === i) i = 1 - l;
                                else {
                                    if (i === u) return a ? NaN : (d ? -1 : 1) * (1 / 0);
                                    a += Math.pow(2, n), i -= l
                                }
                                return (d ? -1 : 1) * a * Math.pow(2, i - n)
                            }, t.write = function(e, t, r, n, o, i) {
                                var a, s, u, l = 8 * i - o - 1,
                                    c = (1 << l) - 1,
                                    f = c >> 1,
                                    p = 23 === o ? 5960464477539062e-23 : 0,
                                    d = n ? 0 : i - 1,
                                    h = n ? 1 : -1,
                                    m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                                for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), a + f >= 1 ? t += p / u : t += p * Math.pow(2, 1 - f), t * u >= 2 && (a++, u /= 2), a + f >= c ? (s = 0, a = c) : a + f >= 1 ? (s = (t * u - 1) * Math.pow(2, o), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; e[r + d] = 255 & s, d += h, s /= 256, o -= 8);
                                for (a = a << o | s, l += o; l > 0; e[r + d] = 255 & a, d += h, a /= 256, l -= 8);
                                e[r + d - h] |= 128 * m
                            }
                        }
                    },
                    r = {};

                function n(e) {
                    var o = r[e];
                    if (void 0 !== o) return o.exports;
                    var i = r[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](i, i.exports, n), a = !1
                    } finally {
                        a && delete r[e]
                    }
                    return i.exports
                }
                n.ab = "//";
                var o = n(72);
                e.exports = o
            }()
        },
        9008: function(e, t, r) {
            e.exports = r(2636)
        },
        1163: function(e, t, r) {
            e.exports = r(6885)
        },
        2703: function(e, t, r) {
            "use strict";
            var n = r(414);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, t, r, o, i, a) {
                    if (a !== n) {
                        var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return r.PropTypes = r, r
            }
        },
        5697: function(e, t, r) {
            e.exports = r(2703)()
        },
        414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        4300: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CopyToClipboard = void 0;
            var o = s(r(7294)),
                i = s(r(640)),
                a = ["text", "onCopy", "options", "children"];

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach(function(t) {
                        h(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && f(e, t)
                }(m, e);
                var t, r, s, u = (t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r = d(m);
                    if (t) {
                        var o = d(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === n(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                        return p(e)
                    }(this, e)
                });

                function m() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, m);
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return h(p(e = u.call.apply(u, [this].concat(r))), "onClick", function(t) {
                        var r = e.props,
                            n = r.text,
                            a = r.onCopy,
                            s = r.children,
                            u = r.options,
                            l = o.default.Children.only(s),
                            c = (0, i.default)(n, u);
                        a && a(n, c), l && l.props && "function" == typeof l.props.onClick && l.props.onClick(t)
                    }), e
                }
                return r = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = (e.text, e.onCopy, e.options, e.children),
                            r = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = function(e, t) {
                                    if (null == e) return {};
                                    var r, n, o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                                }
                                return o
                            }(e, a),
                            n = o.default.Children.only(t);
                        return o.default.cloneElement(n, l(l({}, r), {}, {
                            onClick: this.onClick
                        }))
                    }
                }], c(m.prototype, r), s && c(m, s), Object.defineProperty(m, "prototype", {
                    writable: !1
                }), m
            }(o.default.PureComponent);
            t.CopyToClipboard = m, h(m, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        4855: function(e, t, r) {
            "use strict";
            var n = r(4300).CopyToClipboard;
            n.CopyToClipboard = n, e.exports = n
        },
        8130: function(e, t, r) {
            "use strict";
            var n = r(7294),
                o = r(5697);

            function i(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), e
            }

            function u(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n, o = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (r = n) && ("object" == typeof r || "function" == typeof r) ? r : function(e) {
                        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(this)
                }
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function d(e) {
                var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    n = String(e);
                if (0 === r) return n;
                var o = n.match(/(.*?)([0-9]+)(.*)/),
                    i = o ? o[1] : "",
                    a = o ? o[3] : "",
                    s = o ? o[2] : n,
                    u = s.length >= r ? s : (((function(e) {
                        if (Array.isArray(e)) return p(e)
                    })(t = Array(r)) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return p(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
                        }
                    }(t) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).map(function() {
                        return "0"
                    }).join("") + s).slice(-1 * r);
                return "".concat(i).concat(u).concat(a)
            }
            var h = {
                    daysInHours: !1,
                    zeroPadTime: 2
                },
                m = function(e) {
                    u(r, e);
                    var t = f(r);

                    function r() {
                        var e;
                        return i(this, r), e = t.apply(this, arguments), e.state = {
                            count: e.props.count || 3
                        }, e.startCountdown = function() {
                            e.interval = window.setInterval(function() {
                                0 == e.state.count - 1 ? (e.stopCountdown(), e.props.onComplete && e.props.onComplete()) : e.setState(function(e) {
                                    return {
                                        count: e.count - 1
                                    }
                                })
                            }, 1e3)
                        }, e.stopCountdown = function() {
                            clearInterval(e.interval)
                        }, e.addTime = function(t) {
                            e.stopCountdown(), e.setState(function(e) {
                                return {
                                    count: e.count + t
                                }
                            }, e.startCountdown)
                        }, e
                    }
                    return s(r, [{
                        key: "componentDidMount",
                        value: function() {
                            this.startCountdown()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(this.interval)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.children ? (0, n.cloneElement)(this.props.children, {
                                count: this.state.count
                            }) : null
                        }
                    }]), r
                }(n.Component);
            m.propTypes = {
                count: o.number,
                children: o.element,
                onComplete: o.func
            };
            var b = function(e) {
                u(r, e);
                var t = f(r);

                function r(e) {
                    var o;
                    if (i(this, r), (o = t.call(this, e)).mounted = !1, o.initialTimestamp = o.calcOffsetStartTimestamp(), o.offsetStartTimestamp = o.props.autoStart ? 0 : o.initialTimestamp, o.offsetTime = 0, o.legacyMode = !1, o.legacyCountdownRef = (0, n.createRef)(), o.tick = function() {
                            var e = o.calcTimeDelta(),
                                t = e.completed && !o.props.overtime ? void 0 : o.props.onTick;
                            o.setTimeDeltaState(e, void 0, t)
                        }, o.start = function() {
                            if (!o.isStarted()) {
                                var e = o.offsetStartTimestamp;
                                o.offsetStartTimestamp = 0, o.offsetTime += e ? o.calcOffsetStartTimestamp() - e : 0;
                                var t = o.calcTimeDelta();
                                o.setTimeDeltaState(t, "STARTED", o.props.onStart), o.props.controlled || t.completed && !o.props.overtime || (o.clearTimer(), o.interval = window.setInterval(o.tick, o.props.intervalDelay))
                            }
                        }, o.pause = function() {
                            o.isPaused() || (o.clearTimer(), o.offsetStartTimestamp = o.calcOffsetStartTimestamp(), o.setTimeDeltaState(o.state.timeDelta, "PAUSED", o.props.onPause))
                        }, o.stop = function() {
                            o.isStopped() || (o.clearTimer(), o.offsetStartTimestamp = o.calcOffsetStartTimestamp(), o.offsetTime = o.offsetStartTimestamp - o.initialTimestamp, o.setTimeDeltaState(o.calcTimeDelta(), "STOPPED", o.props.onStop))
                        }, o.isStarted = function() {
                            return o.isStatus("STARTED")
                        }, o.isPaused = function() {
                            return o.isStatus("PAUSED")
                        }, o.isStopped = function() {
                            return o.isStatus("STOPPED")
                        }, o.isCompleted = function() {
                            return o.isStatus("COMPLETED")
                        }, e.date) {
                        var a = o.calcTimeDelta();
                        o.state = {
                            timeDelta: a,
                            status: a.completed ? "COMPLETED" : "STOPPED"
                        }
                    } else o.legacyMode = !0;
                    return o
                }
                return s(r, [{
                    key: "componentDidMount",
                    value: function() {
                        !this.legacyMode && (this.mounted = !0, this.props.onMount && this.props.onMount(this.calcTimeDelta()), this.props.autoStart && this.start())
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.legacyMode || this.props.date === e.date || (this.initialTimestamp = this.calcOffsetStartTimestamp(), this.offsetStartTimestamp = this.initialTimestamp, this.offsetTime = 0, this.setTimeDeltaState(this.calcTimeDelta()))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.legacyMode || (this.mounted = !1, this.clearTimer())
                    }
                }, {
                    key: "calcTimeDelta",
                    value: function() {
                        var e = this.props,
                            t = e.date,
                            r = e.now,
                            n = e.precision,
                            o = e.controlled,
                            i = e.overtime;
                        return function(e) {
                            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = r.now,
                                o = void 0 === n ? Date.now : n,
                                i = r.precision,
                                a = r.controlled,
                                s = r.offsetTime,
                                u = r.overtime;
                            t = "string" == typeof e ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e, a || (t += void 0 === s ? 0 : s);
                            var l = a ? t : t - o(),
                                c = Math.round(1e3 * parseFloat(((u ? l : Math.max(0, l)) / 1e3).toFixed(Math.min(20, Math.max(0, void 0 === i ? 0 : i))))),
                                f = Math.abs(c) / 1e3;
                            return {
                                total: c,
                                days: Math.floor(f / 86400),
                                hours: Math.floor(f / 3600 % 24),
                                minutes: Math.floor(f / 60 % 60),
                                seconds: Math.floor(f % 60),
                                milliseconds: Number((f % 1 * 1e3).toFixed()),
                                completed: c <= 0
                            }
                        }(t, {
                            now: r,
                            precision: n,
                            controlled: o,
                            offsetTime: this.offsetTime,
                            overtime: i
                        })
                    }
                }, {
                    key: "calcOffsetStartTimestamp",
                    value: function() {
                        return Date.now()
                    }
                }, {
                    key: "addTime",
                    value: function(e) {
                        this.legacyCountdownRef.current.addTime(e)
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        window.clearInterval(this.interval)
                    }
                }, {
                    key: "isStatus",
                    value: function(e) {
                        return this.state.status === e
                    }
                }, {
                    key: "setTimeDeltaState",
                    value: function(e, t, r) {
                        var n = this;
                        if (this.mounted) {
                            var o = e.completed && !this.state.timeDelta.completed,
                                i = e.completed && "STARTED" === t;
                            return o && !this.props.overtime && this.clearTimer(), this.setState(function(r) {
                                var o = t || r.status;
                                return e.completed && !n.props.overtime ? o = "COMPLETED" : t || "COMPLETED" !== o || (o = "STOPPED"), {
                                    timeDelta: e,
                                    status: o
                                }
                            }, function() {
                                r && r(n.state.timeDelta), n.props.onComplete && (o || i) && n.props.onComplete(e, i)
                            })
                        }
                    }
                }, {
                    key: "getApi",
                    value: function() {
                        return this.api = this.api || {
                            start: this.start,
                            pause: this.pause,
                            stop: this.stop,
                            isStarted: this.isStarted,
                            isPaused: this.isPaused,
                            isStopped: this.isStopped,
                            isCompleted: this.isCompleted
                        }
                    }
                }, {
                    key: "getRenderProps",
                    value: function() {
                        var e, t, r, n, o, i, a, s, u, l, c = this.props,
                            f = c.daysInHours,
                            p = c.zeroPadTime,
                            m = c.zeroPadDays,
                            b = this.state.timeDelta;
                        return Object.assign(Object.assign({}, b), {
                            api: this.getApi(),
                            props: this.props,
                            formatted: (e = b.days, t = b.hours, r = b.minutes, n = b.seconds, i = (o = Object.assign(Object.assign({}, h), {
                                daysInHours: f,
                                zeroPadTime: p,
                                zeroPadDays: m
                            })).daysInHours, a = o.zeroPadTime, s = o.zeroPadDays, u = Math.min(2, a), l = i ? d(t + 24 * e, a) : d(t, u), {
                                days: i ? "" : d(e, void 0 === s ? a : s),
                                hours: l,
                                minutes: d(r, u),
                                seconds: d(n, u)
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.legacyMode) {
                            var e = this.props,
                                t = e.count,
                                r = e.children,
                                o = e.onComplete;
                            return (0, n.createElement)(m, {
                                ref: this.legacyCountdownRef,
                                count: t,
                                onComplete: o
                            }, r)
                        }
                        var i = this.props,
                            a = i.className,
                            s = i.overtime,
                            u = i.children,
                            l = i.renderer,
                            c = this.getRenderProps();
                        if (l) return l(c);
                        if (u && this.state.timeDelta.completed && !s) return (0, n.cloneElement)(u, {
                            countdown: c
                        });
                        var f = c.formatted,
                            p = f.days,
                            d = f.hours,
                            h = f.minutes,
                            b = f.seconds;
                        return (0, n.createElement)("span", {
                            className: a
                        }, c.total < 0 ? "-" : "", p, p ? ":" : "", d, ":", h, ":", b)
                    }
                }]), r
            }(n.Component);
            b.defaultProps = Object.assign(Object.assign({}, h), {
                controlled: !1,
                intervalDelay: 1e3,
                precision: 0,
                autoStart: !0
            }), b.propTypes = {
                date: (0, o.oneOfType)([(0, o.instanceOf)(Date), o.string, o.number]),
                daysInHours: o.bool,
                zeroPadTime: o.number,
                zeroPadDays: o.number,
                controlled: o.bool,
                intervalDelay: o.number,
                precision: o.number,
                autoStart: o.bool,
                overtime: o.bool,
                className: o.string,
                children: o.element,
                renderer: o.func,
                now: o.func,
                onMount: o.func,
                onStart: o.func,
                onPause: o.func,
                onStop: o.func,
                onTick: o.func,
                onComplete: o.func
            }, t.ZP = b
        },
        1742: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach(function(t) {
                            e.addRange(t)
                        }), t && t.focus()
                    }
            }
        },
        3250: function(e, t, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(7294),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = n.useState,
                a = n.useEffect,
                s = n.useLayoutEffect,
                u = n.useDebugValue;

            function l(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !o(e, r)
                } catch (e) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    n = i({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    o = n[0].inst,
                    c = n[1];
                return s(function() {
                    o.value = r, o.getSnapshot = t, l(o) && c({
                        inst: o
                    })
                }, [e, r, t]), a(function() {
                    return l(o) && c({
                        inst: o
                    }), e(function() {
                        l(o) && c({
                            inst: o
                        })
                    })
                }, [e]), u(r), r
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        139: function(e, t, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(7294),
                o = r(1688),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                a = o.useSyncExternalStore,
                s = n.useRef,
                u = n.useEffect,
                l = n.useMemo,
                c = n.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, r, n, o) {
                var f = s(null);
                if (null === f.current) {
                    var p = {
                        hasValue: !1,
                        value: null
                    };
                    f.current = p
                } else p = f.current;
                f = l(function() {
                    function e(e) {
                        if (!u) {
                            if (u = !0, a = e, e = n(e), void 0 !== o && p.hasValue) {
                                var t = p.value;
                                if (o(t, e)) return s = t
                            }
                            return s = e
                        }
                        if (t = s, i(a, e)) return t;
                        var r = n(e);
                        return void 0 !== o && o(t, r) ? t : (a = e, s = r)
                    }
                    var a, s, u = !1,
                        l = void 0 === r ? null : r;
                    return [function() {
                        return e(t())
                    }, null === l ? void 0 : function() {
                        return e(l())
                    }]
                }, [t, r, n, o]);
                var d = a(e, f[0], f[1]);
                return u(function() {
                    p.hasValue = !0, p.value = d
                }, [d]), c(d), d
            }
        },
        1688: function(e, t, r) {
            "use strict";
            e.exports = r(3250)
        },
        2798: function(e, t, r) {
            "use strict";
            e.exports = r(139)
        },
        4960: function(e, t, r) {
            "use strict";
            r.d(t, {
                h: function() {
                    return ei
                }
            });
            var n, o, i, a, s, u, l, c, f, p, d, h, m = r(7294),
                b = r(6723),
                y = r(3855);

            function v(e, t) {
                let [r, n] = (0, m.useState)(e), o = (0, y.E)(e);
                return (0, b.e)(() => n(o.current), [o, n, ...t]), r
            }
            var g = r(4192),
                E = r(3781),
                w = r(2180),
                O = r(7896);
            let S = null != (h = m.useId) ? h : function() {
                let e = (0, w.H)(),
                    [t, r] = m.useState(e ? () => O.O.nextId() : null);
                return (0, b.e)(() => {
                    null === t && r(O.O.nextId())
                }, [t]), null != t ? "" + t : void 0
            };
            var T = r(2984);

            function R(e) {
                return O.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
            let x = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
            var C = ((n = C || {})[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n),
                A = ((o = A || {})[o.Error = 0] = "Error", o[o.Overflow = 1] = "Overflow", o[o.Success = 2] = "Success", o[o.Underflow = 3] = "Underflow", o),
                P = ((i = P || {})[i.Previous = -1] = "Previous", i[i.Next = 1] = "Next", i),
                D = ((a = D || {})[a.Strict = 0] = "Strict", a[a.Loose = 1] = "Loose", a);

            function I(e, t, r) {
                let n = (0, y.E)(t);
                (0, m.useEffect)(() => {
                    function t(e) {
                        n.current(e)
                    }
                    return document.addEventListener(e, t, r), () => document.removeEventListener(e, t, r)
                }, [e, r])
            }

            function j(e) {
                var t;
                if (e.type) return e.type;
                let r = null != (t = e.as) ? t : "button";
                if ("string" == typeof r && "button" === r.toLowerCase()) return "button"
            }
            var N = r(3784),
                L = ((s = L || {})[s.First = 0] = "First", s[s.Previous = 1] = "Previous", s[s.Next = 2] = "Next", s[s.Last = 3] = "Last", s[s.Specific = 4] = "Specific", s[s.Nothing = 5] = "Nothing", s),
                _ = r(8043),
                k = r(2351);

            function U(e, t) {
                return e ? e + "[" + t + "]" : t
            }
            var B = ((u = B || {})[u.None = 1] = "None", u[u.Focusable = 2] = "Focusable", u[u.Hidden = 4] = "Hidden", u);
            let M = (0, k.yV)(function(e, t) {
                let {
                    features: r = 1,
                    ...n
                } = e, o = {
                    ref: t,
                    "aria-hidden": (2 & r) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & r) == 4 && (2 & r) != 2 && {
                            display: "none"
                        }
                    }
                };
                return (0, k.sY)({
                    ourProps: o,
                    theirProps: n,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            });
            var F = r(6567),
                z = ((l = z || {}).Space = " ", l.Enter = "Enter", l.Escape = "Escape", l.Backspace = "Backspace", l.Delete = "Delete", l.ArrowLeft = "ArrowLeft", l.ArrowUp = "ArrowUp", l.ArrowRight = "ArrowRight", l.ArrowDown = "ArrowDown", l.Home = "Home", l.End = "End", l.PageUp = "PageUp", l.PageDown = "PageDown", l.Tab = "Tab", l);

            function H(e, t) {
                let r = (0, m.useRef)([]),
                    n = (0, E.z)(e);
                (0, m.useEffect)(() => {
                    let e = [...r.current];
                    for (let [o, i] of t.entries())
                        if (r.current[o] !== i) {
                            let o = n(t, e);
                            return r.current = t, o
                        }
                }, [n, ...t])
            }

            function V(e) {
                return [e.screenX, e.screenY]
            }
            var q = ((c = q || {})[c.Open = 0] = "Open", c[c.Closed = 1] = "Closed", c),
                W = ((f = W || {})[f.Single = 0] = "Single", f[f.Multi = 1] = "Multi", f),
                J = ((p = J || {})[p.Pointer = 0] = "Pointer", p[p.Other = 1] = "Other", p),
                $ = ((d = $ || {})[d.OpenCombobox = 0] = "OpenCombobox", d[d.CloseCombobox = 1] = "CloseCombobox", d[d.GoToOption = 2] = "GoToOption", d[d.RegisterOption = 3] = "RegisterOption", d[d.UnregisterOption = 4] = "UnregisterOption", d[d.RegisterLabel = 5] = "RegisterLabel", d);

            function Y(e, t = e => e) {
                let r = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
                    n = function(e, t = e => e) {
                        return e.slice().sort((e, r) => {
                            let n = t(e),
                                o = t(r);
                            if (null === n || null === o) return 0;
                            let i = n.compareDocumentPosition(o);
                            return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                        })
                    }(t(e.options.slice()), e => e.dataRef.current.domRef.current),
                    o = r ? n.indexOf(r) : null;
                return -1 === o && (o = null), {
                    options: n,
                    activeOptionIndex: o
                }
            }
            let G = {
                    1(e) {
                        var t;
                        return null != (t = e.dataRef.current) && t.disabled || 1 === e.comboboxState ? e : { ...e,
                            activeOptionIndex: null,
                            comboboxState: 1
                        }
                    },
                    0(e) {
                        var t;
                        if (null != (t = e.dataRef.current) && t.disabled || 0 === e.comboboxState) return e;
                        let r = e.activeOptionIndex;
                        if (e.dataRef.current) {
                            let {
                                isSelected: t
                            } = e.dataRef.current, n = e.options.findIndex(e => t(e.dataRef.current.value)); - 1 !== n && (r = n)
                        }
                        return { ...e,
                            comboboxState: 0,
                            activeOptionIndex: r
                        }
                    },
                    2(e, t) {
                        var r, n, o, i;
                        if (null != (r = e.dataRef.current) && r.disabled || null != (n = e.dataRef.current) && n.optionsRef.current && !(null != (o = e.dataRef.current) && o.optionsPropsRef.current.static) && 1 === e.comboboxState) return e;
                        let a = Y(e);
                        if (null === a.activeOptionIndex) {
                            let e = a.options.findIndex(e => !e.dataRef.current.disabled); - 1 !== e && (a.activeOptionIndex = e)
                        }
                        let s = function(e, t) {
                            let r = t.resolveItems();
                            if (r.length <= 0) return null;
                            let n = t.resolveActiveIndex(),
                                o = null != n ? n : -1,
                                i = (() => {
                                    switch (e.focus) {
                                        case 0:
                                            return r.findIndex(e => !t.resolveDisabled(e));
                                        case 1:
                                            {
                                                let e = r.slice().reverse().findIndex((e, r, n) => (-1 === o || !(n.length - r - 1 >= o)) && !t.resolveDisabled(e));
                                                return -1 === e ? e : r.length - 1 - e
                                            }
                                        case 2:
                                            return r.findIndex((e, r) => !(r <= o) && !t.resolveDisabled(e));
                                        case 3:
                                            {
                                                let e = r.slice().reverse().findIndex(e => !t.resolveDisabled(e));
                                                return -1 === e ? e : r.length - 1 - e
                                            }
                                        case 4:
                                            return r.findIndex(r => t.resolveId(r) === e.id);
                                        case 5:
                                            return null;
                                        default:
                                            ! function(e) {
                                                throw Error("Unexpected object: " + e)
                                            }(e)
                                    }
                                })();
                            return -1 === i ? n : i
                        }(t, {
                            resolveItems: () => a.options,
                            resolveActiveIndex: () => a.activeOptionIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                        return { ...e,
                            ...a,
                            activeOptionIndex: s,
                            activationTrigger: null != (i = t.trigger) ? i : 1
                        }
                    },
                    3: (e, t) => {
                        var r, n;
                        let o = {
                                id: t.id,
                                dataRef: t.dataRef
                            },
                            i = Y(e, e => [...e, o]);
                        null === e.activeOptionIndex && null != (r = e.dataRef.current) && r.isSelected(t.dataRef.current.value) && (i.activeOptionIndex = i.options.indexOf(o));
                        let a = { ...e,
                            ...i,
                            activationTrigger: 1
                        };
                        return null != (n = e.dataRef.current) && n.__demoMode && void 0 === e.dataRef.current.value && (a.activeOptionIndex = 0), a
                    },
                    4: (e, t) => {
                        let r = Y(e, e => {
                            let r = e.findIndex(e => e.id === t.id);
                            return -1 !== r && e.splice(r, 1), e
                        });
                        return { ...e,
                            ...r,
                            activationTrigger: 1
                        }
                    },
                    5: (e, t) => ({ ...e,
                        labelId: t.id
                    })
                },
                Z = (0, m.createContext)(null);

            function K(e) {
                let t = (0, m.useContext)(Z);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, K), t
                }
                return t
            }
            Z.displayName = "ComboboxActionsContext";
            let X = (0, m.createContext)(null);

            function Q(e) {
                let t = (0, m.useContext)(X);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Q), t
                }
                return t
            }

            function ee(e, t) {
                return (0, T.E)(t.type, G, e, t)
            }
            X.displayName = "ComboboxDataContext";
            let et = m.Fragment,
                er = k.AN.RenderStrategy | k.AN.Static,
                en = (0, k.yV)(function(e, t) {
                    let {
                        value: r,
                        defaultValue: n,
                        onChange: o,
                        name: i,
                        by: a = (e, t) => e === t,
                        disabled: s = !1,
                        __demoMode: u = !1,
                        nullable: l = !1,
                        multiple: c = !1,
                        ...f
                    } = e, [p = c ? [] : void 0, d] = function(e, t, r) {
                        let [n, o] = (0, m.useState)(r), i = void 0 !== e, a = (0, m.useRef)(i), s = (0, m.useRef)(!1), u = (0, m.useRef)(!1);
                        return !i || a.current || s.current ? i || !a.current || u.current || (u.current = !0, a.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (s.current = !0, a.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [i ? e : n, (0, E.z)(e => (i || o(e), null == t ? void 0 : t(e)))]
                    }(r, o, n), [h, y] = (0, m.useReducer)(ee, {
                        dataRef: (0, m.createRef)(),
                        comboboxState: u ? 0 : 1,
                        options: [],
                        activeOptionIndex: null,
                        activationTrigger: 1,
                        labelId: null
                    }), v = (0, m.useRef)(!1), w = (0, m.useRef)({
                        static: !1,
                        hold: !1
                    }), O = (0, m.useRef)(null), S = (0, m.useRef)(null), C = (0, m.useRef)(null), A = (0, m.useRef)(null), P = (0, E.z)("string" == typeof a ? (e, t) => (null == e ? void 0 : e[a]) === (null == t ? void 0 : t[a]) : a), j = (0, m.useCallback)(e => (0, T.E)(N.mode, {
                        1: () => p.some(t => P(t, e)),
                        0: () => P(p, e)
                    }), [p]), N = (0, m.useMemo)(() => ({ ...h,
                        optionsPropsRef: w,
                        labelRef: O,
                        inputRef: S,
                        buttonRef: C,
                        optionsRef: A,
                        value: p,
                        defaultValue: n,
                        disabled: s,
                        mode: c ? 1 : 0,
                        get activeOptionIndex() {
                            if (v.current && null === h.activeOptionIndex && h.options.length > 0) {
                                let e = h.options.findIndex(e => !e.dataRef.current.disabled);
                                if (-1 !== e) return e
                            }
                            return h.activeOptionIndex
                        },
                        compare: P,
                        isSelected: j,
                        nullable: l,
                        __demoMode: u
                    }), [p, n, s, c, l, u, h]), _ = (0, m.useRef)(null !== N.activeOptionIndex ? N.options[N.activeOptionIndex] : null);
                    (0, m.useEffect)(() => {
                        let e = null !== N.activeOptionIndex ? N.options[N.activeOptionIndex] : null;
                        _.current !== e && (_.current = e)
                    }), (0, b.e)(() => {
                        h.dataRef.current = N
                    }, [N]),
                    function(e, t, r = !0) {
                        let n = (0, m.useRef)(!1);

                        function o(r, o) {
                            if (!n.current || r.defaultPrevented) return;
                            let i = function e(t) {
                                    return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                }(e),
                                a = o(r);
                            if (null !== a && a.getRootNode().contains(a)) {
                                for (let e of i) {
                                    if (null === e) continue;
                                    let t = e instanceof HTMLElement ? e : e.current;
                                    if (null != t && t.contains(a) || r.composed && r.composedPath().includes(t)) return
                                }
                                return ! function(e, t = 0) {
                                    var r;
                                    return e !== (null == (r = R(e)) ? void 0 : r.body) && (0, T.E)(t, {
                                        0: () => e.matches(x),
                                        1() {
                                            let t = e;
                                            for (; null !== t;) {
                                                if (t.matches(x)) return !0;
                                                t = t.parentElement
                                            }
                                            return !1
                                        }
                                    })
                                }(a, D.Loose) && -1 !== a.tabIndex && r.preventDefault(), t(r, a)
                            }
                        }(0, m.useEffect)(() => {
                            requestAnimationFrame(() => {
                                n.current = r
                            })
                        }, [r]);
                        let i = (0, m.useRef)(null);
                        I("mousedown", e => {
                            var t, r;
                            n.current && (i.current = (null == (r = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : r[0]) || e.target)
                        }, !0), I("click", e => {
                            i.current && (o(e, () => i.current), i.current = null)
                        }, !0), I("blur", e => o(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
                    }([N.buttonRef, N.inputRef, N.optionsRef], () => K.closeCombobox(), 0 === N.comboboxState);
                    let z = (0, m.useMemo)(() => ({
                            open: 0 === N.comboboxState,
                            disabled: s,
                            activeIndex: N.activeOptionIndex,
                            activeOption: null === N.activeOptionIndex ? null : N.options[N.activeOptionIndex].dataRef.current.value,
                            value: p
                        }), [N, s, p]),
                        H = (0, E.z)(e => {
                            let t = N.options.find(t => t.id === e);
                            t && G(t.dataRef.current.value)
                        }),
                        V = (0, E.z)(() => {
                            if (null !== N.activeOptionIndex) {
                                let {
                                    dataRef: e,
                                    id: t
                                } = N.options[N.activeOptionIndex];
                                G(e.current.value), K.goToOption(L.Specific, t)
                            }
                        }),
                        q = (0, E.z)(() => {
                            y({
                                type: 0
                            }), v.current = !0
                        }),
                        W = (0, E.z)(() => {
                            y({
                                type: 1
                            }), v.current = !1
                        }),
                        J = (0, E.z)((e, t, r) => (v.current = !1, e === L.Specific ? y({
                            type: 2,
                            focus: L.Specific,
                            id: t,
                            trigger: r
                        }) : y({
                            type: 2,
                            focus: e,
                            trigger: r
                        }))),
                        $ = (0, E.z)((e, t) => (y({
                            type: 3,
                            id: e,
                            dataRef: t
                        }), () => {
                            var t;
                            (null == (t = _.current) ? void 0 : t.id) === e && (v.current = !0), y({
                                type: 4,
                                id: e
                            })
                        })),
                        Y = (0, E.z)(e => (y({
                            type: 5,
                            id: e
                        }), () => y({
                            type: 5,
                            id: null
                        }))),
                        G = (0, E.z)(e => (0, T.E)(N.mode, {
                            0: () => null == d ? void 0 : d(e),
                            1() {
                                let t = N.value.slice(),
                                    r = t.findIndex(t => P(t, e));
                                return -1 === r ? t.push(e) : t.splice(r, 1), null == d ? void 0 : d(t)
                            }
                        })),
                        K = (0, m.useMemo)(() => ({
                            onChange: G,
                            registerOption: $,
                            registerLabel: Y,
                            goToOption: J,
                            closeCombobox: W,
                            openCombobox: q,
                            selectActiveOption: V,
                            selectOption: H
                        }), []),
                        Q = (0, m.useRef)(null),
                        er = (0, g.G)();
                    return (0, m.useEffect)(() => {
                        Q.current && void 0 !== n && er.addEventListener(Q.current, "reset", () => {
                            G(n)
                        })
                    }, [Q, G]), m.createElement(Z.Provider, {
                        value: K
                    }, m.createElement(X.Provider, {
                        value: N
                    }, m.createElement(F.up, {
                        value: (0, T.E)(N.comboboxState, {
                            0: F.ZM.Open,
                            1: F.ZM.Closed
                        })
                    }, null != i && null != p && (function e(t = {}, r = null, n = []) {
                        for (let [o, i] of Object.entries(t)) ! function t(r, n, o) {
                            if (Array.isArray(o))
                                for (let [e, i] of o.entries()) t(r, U(n, e.toString()), i);
                            else o instanceof Date ? r.push([n, o.toISOString()]) : "boolean" == typeof o ? r.push([n, o ? "1" : "0"]) : "string" == typeof o ? r.push([n, o]) : "number" == typeof o ? r.push([n, `${o}`]) : null == o ? r.push([n, ""]) : e(o, n, r)
                        }(n, U(r, o), i);
                        return n
                    })({
                        [i]: p
                    }).map(([e, t], r) => m.createElement(M, {
                        features: B.Hidden,
                        ref: 0 === r ? e => {
                            var t;
                            Q.current = null != (t = null == e ? void 0 : e.closest("form")) ? t : null
                        } : void 0,
                        ...(0, k.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            name: e,
                            value: t
                        })
                    })), (0, k.sY)({
                        ourProps: null === t ? {} : {
                            ref: t
                        },
                        theirProps: f,
                        slot: z,
                        defaultTag: et,
                        name: "Combobox"
                    }))))
                }),
                eo = (0, k.yV)(function(e, t) {
                    var r;
                    let n = Q("Combobox.Button"),
                        o = K("Combobox.Button"),
                        i = (0, N.T)(n.buttonRef, t),
                        a = S(),
                        {
                            id: s = `headlessui-combobox-button-${a}`,
                            ...u
                        } = e,
                        l = (0, g.G)(),
                        c = (0, E.z)(e => {
                            switch (e.key) {
                                case z.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), 1 === n.comboboxState && o.openCombobox(), l.nextFrame(() => {
                                        var e;
                                        return null == (e = n.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    });
                                case z.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), 1 === n.comboboxState && (o.openCombobox(), l.nextFrame(() => {
                                        n.value || o.goToOption(L.Last)
                                    })), l.nextFrame(() => {
                                        var e;
                                        return null == (e = n.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    });
                                case z.Escape:
                                    return 0 !== n.comboboxState ? void 0 : (e.preventDefault(), n.optionsRef.current && !n.optionsPropsRef.current.static && e.stopPropagation(), o.closeCombobox(), l.nextFrame(() => {
                                        var e;
                                        return null == (e = n.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                default:
                                    return
                            }
                        }),
                        f = (0, E.z)(e => {
                            if (function(e) {
                                    let t = e.parentElement,
                                        r = null;
                                    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
                                    let n = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                                    return !(n && function(e) {
                                        if (!e) return !1;
                                        let t = e.previousElementSibling;
                                        for (; null !== t;) {
                                            if (t instanceof HTMLLegendElement) return !1;
                                            t = t.previousElementSibling
                                        }
                                        return !0
                                    }(r)) && n
                                }(e.currentTarget)) return e.preventDefault();
                            0 === n.comboboxState ? o.closeCombobox() : (e.preventDefault(), o.openCombobox()), l.nextFrame(() => {
                                var e;
                                return null == (e = n.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            })
                        }),
                        p = v(() => {
                            if (n.labelId) return [n.labelId, s].join(" ")
                        }, [n.labelId, s]),
                        d = (0, m.useMemo)(() => ({
                            open: 0 === n.comboboxState,
                            disabled: n.disabled,
                            value: n.value
                        }), [n]),
                        h = {
                            ref: i,
                            id: s,
                            type: function(e, t) {
                                let [r, n] = (0, m.useState)(() => j(e));
                                return (0, b.e)(() => {
                                    n(j(e))
                                }, [e.type, e.as]), (0, b.e)(() => {
                                    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button")
                                }, [r, t]), r
                            }(e, n.buttonRef),
                            tabIndex: -1,
                            "aria-haspopup": "listbox",
                            "aria-controls": null == (r = n.optionsRef.current) ? void 0 : r.id,
                            "aria-expanded": n.disabled ? void 0 : 0 === n.comboboxState,
                            "aria-labelledby": p,
                            disabled: n.disabled,
                            onClick: f,
                            onKeyDown: c
                        };
                    return (0, k.sY)({
                        ourProps: h,
                        theirProps: u,
                        slot: d,
                        defaultTag: "button",
                        name: "Combobox.Button"
                    })
                }),
                ei = Object.assign(en, {
                    Input: (0, k.yV)(function(e, t) {
                        var r, n, o, i, a;
                        let s = S(),
                            {
                                id: u = `headlessui-combobox-input-${s}`,
                                onChange: l,
                                displayValue: c,
                                type: f = "text",
                                ...p
                            } = e,
                            d = Q("Combobox.Input"),
                            h = K("Combobox.Input"),
                            b = (0, N.T)(d.inputRef, t),
                            y = (0, m.useRef)(!1),
                            w = (0, g.G)();
                        H(([e, t], [r, n]) => {
                            y.current || d.inputRef.current && (0 === n && 1 === t || e !== r) && (d.inputRef.current.value = e)
                        }, ["function" == typeof c && void 0 !== d.value ? null != (a = c(d.value)) ? a : "" : "string" == typeof d.value ? d.value : "", d.comboboxState]), H(([e], [t]) => {
                            if (0 === e && 1 === t) {
                                let e = d.inputRef.current;
                                if (!e) return;
                                let t = e.value,
                                    {
                                        selectionStart: r,
                                        selectionEnd: n,
                                        selectionDirection: o
                                    } = e;
                                e.value = "", e.value = t, null !== o ? e.setSelectionRange(r, n, o) : e.setSelectionRange(r, n)
                            }
                        }, [d.comboboxState]);
                        let O = (0, m.useRef)(!1),
                            R = (0, E.z)(() => {
                                O.current = !0
                            }),
                            x = (0, E.z)(() => {
                                setTimeout(() => {
                                    O.current = !1
                                })
                            }),
                            C = (0, E.z)(e => {
                                switch (y.current = !0, e.key) {
                                    case z.Backspace:
                                    case z.Delete:
                                        if (0 !== d.mode || !d.nullable) return;
                                        let t = e.currentTarget;
                                        w.requestAnimationFrame(() => {
                                            "" === t.value && (h.onChange(null), d.optionsRef.current && (d.optionsRef.current.scrollTop = 0), h.goToOption(L.Nothing))
                                        });
                                        break;
                                    case z.Enter:
                                        if (y.current = !1, 0 !== d.comboboxState || O.current) return;
                                        if (e.preventDefault(), e.stopPropagation(), null === d.activeOptionIndex) {
                                            h.closeCombobox();
                                            return
                                        }
                                        h.selectActiveOption(), 0 === d.mode && h.closeCombobox();
                                        break;
                                    case z.ArrowDown:
                                        return y.current = !1, e.preventDefault(), e.stopPropagation(), (0, T.E)(d.comboboxState, {
                                            0: () => {
                                                h.goToOption(L.Next)
                                            },
                                            1: () => {
                                                h.openCombobox()
                                            }
                                        });
                                    case z.ArrowUp:
                                        return y.current = !1, e.preventDefault(), e.stopPropagation(), (0, T.E)(d.comboboxState, {
                                            0: () => {
                                                h.goToOption(L.Previous)
                                            },
                                            1: () => {
                                                h.openCombobox(), w.nextFrame(() => {
                                                    d.value || h.goToOption(L.Last)
                                                })
                                            }
                                        });
                                    case z.Home:
                                        if (e.shiftKey) break;
                                        return y.current = !1, e.preventDefault(), e.stopPropagation(), h.goToOption(L.First);
                                    case z.PageUp:
                                        return y.current = !1, e.preventDefault(), e.stopPropagation(), h.goToOption(L.First);
                                    case z.End:
                                        if (e.shiftKey) break;
                                        return y.current = !1, e.preventDefault(), e.stopPropagation(), h.goToOption(L.Last);
                                    case z.PageDown:
                                        return y.current = !1, e.preventDefault(), e.stopPropagation(), h.goToOption(L.Last);
                                    case z.Escape:
                                        return y.current = !1, 0 !== d.comboboxState ? void 0 : (e.preventDefault(), d.optionsRef.current && !d.optionsPropsRef.current.static && e.stopPropagation(), h.closeCombobox());
                                    case z.Tab:
                                        if (y.current = !1, 0 !== d.comboboxState) return;
                                        0 === d.mode && h.selectActiveOption(), h.closeCombobox()
                                }
                            }),
                            A = (0, E.z)(e => {
                                h.openCombobox(), null == l || l(e)
                            }),
                            P = (0, E.z)(() => {
                                y.current = !1
                            }),
                            D = v(() => {
                                if (d.labelId) return [d.labelId].join(" ")
                            }, [d.labelId]),
                            I = (0, m.useMemo)(() => ({
                                open: 0 === d.comboboxState,
                                disabled: d.disabled
                            }), [d]),
                            j = {
                                ref: b,
                                id: u,
                                role: "combobox",
                                type: f,
                                "aria-controls": null == (r = d.optionsRef.current) ? void 0 : r.id,
                                "aria-expanded": d.disabled ? void 0 : 0 === d.comboboxState,
                                "aria-activedescendant": null === d.activeOptionIndex || null == (n = d.options[d.activeOptionIndex]) ? void 0 : n.id,
                                "aria-labelledby": D,
                                "aria-autocomplete": "list",
                                defaultValue: null != (i = null != (o = e.defaultValue) ? o : void 0 !== d.defaultValue ? null == c ? void 0 : c(d.defaultValue) : null) ? i : d.defaultValue,
                                disabled: d.disabled,
                                onCompositionStart: R,
                                onCompositionEnd: x,
                                onKeyDown: C,
                                onChange: A,
                                onBlur: P
                            };
                        return (0, k.sY)({
                            ourProps: j,
                            theirProps: p,
                            slot: I,
                            defaultTag: "input",
                            name: "Combobox.Input"
                        })
                    }),
                    Button: eo,
                    Label: (0, k.yV)(function(e, t) {
                        let r = S(),
                            {
                                id: n = `headlessui-combobox-label-${r}`,
                                ...o
                            } = e,
                            i = Q("Combobox.Label"),
                            a = K("Combobox.Label"),
                            s = (0, N.T)(i.labelRef, t);
                        (0, b.e)(() => a.registerLabel(n), [n]);
                        let u = (0, E.z)(() => {
                                var e;
                                return null == (e = i.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }),
                            l = (0, m.useMemo)(() => ({
                                open: 0 === i.comboboxState,
                                disabled: i.disabled
                            }), [i]);
                        return (0, k.sY)({
                            ourProps: {
                                ref: s,
                                id: n,
                                onClick: u
                            },
                            theirProps: o,
                            slot: l,
                            defaultTag: "label",
                            name: "Combobox.Label"
                        })
                    }),
                    Options: (0, k.yV)(function(e, t) {
                        let r = S(),
                            {
                                id: n = `headlessui-combobox-options-${r}`,
                                hold: o = !1,
                                ...i
                            } = e,
                            a = Q("Combobox.Options"),
                            s = (0, N.T)(a.optionsRef, t),
                            u = (0, F.oJ)(),
                            l = null !== u ? (u & F.ZM.Open) === F.ZM.Open : 0 === a.comboboxState;
                        (0, b.e)(() => {
                            var t;
                            a.optionsPropsRef.current.static = null != (t = e.static) && t
                        }, [a.optionsPropsRef, e.static]), (0, b.e)(() => {
                            a.optionsPropsRef.current.hold = o
                        }, [a.optionsPropsRef, o]),
                        function({
                            container: e,
                            accept: t,
                            walk: r,
                            enabled: n = !0
                        }) {
                            let o = (0, m.useRef)(t),
                                i = (0, m.useRef)(r);
                            (0, m.useEffect)(() => {
                                o.current = t, i.current = r
                            }, [t, r]), (0, b.e)(() => {
                                if (!e || !n) return;
                                let t = R(e);
                                if (!t) return;
                                let r = o.current,
                                    a = i.current,
                                    s = Object.assign(e => r(e), {
                                        acceptNode: r
                                    }),
                                    u = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);
                                for (; u.nextNode();) a(u.currentNode)
                            }, [e, n, o, i])
                        }({
                            container: a.optionsRef.current,
                            enabled: 0 === a.comboboxState,
                            accept: e => "option" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                            walk(e) {
                                e.setAttribute("role", "none")
                            }
                        });
                        let c = v(() => {
                                var e, t;
                                return null != (t = a.labelId) ? t : null == (e = a.buttonRef.current) ? void 0 : e.id
                            }, [a.labelId, a.buttonRef.current]),
                            f = (0, m.useMemo)(() => ({
                                open: 0 === a.comboboxState
                            }), [a]),
                            p = {
                                "aria-labelledby": c,
                                role: "listbox",
                                "aria-multiselectable": 1 === a.mode || void 0,
                                id: n,
                                ref: s
                            };
                        return (0, k.sY)({
                            ourProps: p,
                            theirProps: i,
                            slot: f,
                            defaultTag: "ul",
                            features: er,
                            visible: l,
                            name: "Combobox.Options"
                        })
                    }),
                    Option: (0, k.yV)(function(e, t) {
                        var r, n;
                        let o;
                        let i = S(),
                            {
                                id: a = `headlessui-combobox-option-${i}`,
                                disabled: s = !1,
                                value: u,
                                ...l
                            } = e,
                            c = Q("Combobox.Option"),
                            f = K("Combobox.Option"),
                            p = null !== c.activeOptionIndex && c.options[c.activeOptionIndex].id === a,
                            d = c.isSelected(u),
                            h = (0, m.useRef)(null),
                            v = (0, y.E)({
                                disabled: s,
                                value: u,
                                domRef: h,
                                textValue: null == (n = null == (r = h.current) ? void 0 : r.textContent) ? void 0 : n.toLowerCase()
                            }),
                            g = (0, N.T)(t, h),
                            w = (0, E.z)(() => f.selectOption(a));
                        (0, b.e)(() => f.registerOption(a, v), [v, a]);
                        let O = (0, m.useRef)(!c.__demoMode);
                        (0, b.e)(() => {
                            if (!c.__demoMode) return;
                            let e = (0, _.k)();
                            return e.requestAnimationFrame(() => {
                                O.current = !0
                            }), e.dispose
                        }, []), (0, b.e)(() => {
                            if (0 !== c.comboboxState || !p || !O.current || 0 === c.activationTrigger) return;
                            let e = (0, _.k)();
                            return e.requestAnimationFrame(() => {
                                var e, t;
                                null == (t = null == (e = h.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                    block: "nearest"
                                })
                            }), e.dispose
                        }, [h, p, c.comboboxState, c.activationTrigger, c.activeOptionIndex]);
                        let T = (0, E.z)(e => {
                                if (s) return e.preventDefault();
                                w(), 0 === c.mode && f.closeCombobox(), /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0 || /Android/gi.test(window.navigator.userAgent) || requestAnimationFrame(() => {
                                    var e;
                                    return null == (e = c.inputRef.current) ? void 0 : e.focus()
                                })
                            }),
                            R = (0, E.z)(() => {
                                if (s) return f.goToOption(L.Nothing);
                                f.goToOption(L.Specific, a)
                            }),
                            x = (o = (0, m.useRef)([-1, -1]), {
                                wasMoved(e) {
                                    let t = V(e);
                                    return (o.current[0] !== t[0] || o.current[1] !== t[1]) && (o.current = t, !0)
                                },
                                update(e) {
                                    o.current = V(e)
                                }
                            }),
                            C = (0, E.z)(e => x.update(e)),
                            A = (0, E.z)(e => {
                                x.wasMoved(e) && (s || p || f.goToOption(L.Specific, a, 0))
                            }),
                            P = (0, E.z)(e => {
                                x.wasMoved(e) && (s || p && (c.optionsPropsRef.current.hold || f.goToOption(L.Nothing)))
                            }),
                            D = (0, m.useMemo)(() => ({
                                active: p,
                                selected: d,
                                disabled: s
                            }), [p, d, s]);
                        return (0, k.sY)({
                            ourProps: {
                                id: a,
                                ref: g,
                                role: "option",
                                tabIndex: !0 === s ? void 0 : -1,
                                "aria-disabled": !0 === s || void 0,
                                "aria-selected": d,
                                disabled: void 0,
                                onClick: T,
                                onFocus: R,
                                onPointerEnter: C,
                                onMouseEnter: C,
                                onPointerMove: A,
                                onMouseMove: A,
                                onPointerLeave: P,
                                onMouseLeave: P
                            },
                            theirProps: l,
                            slot: D,
                            defaultTag: "li",
                            name: "Combobox.Option"
                        })
                    })
                })
        },
        7106: function(e, t, r) {
            "use strict";
            r.d(t, {
                u: function() {
                    return N
                }
            });
            var n, o = r(7294),
                i = r(2351),
                a = r(6567),
                s = r(2984),
                u = r(6723);

            function l() {
                let e = (0, o.useRef)(!1);
                return (0, u.e)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var c = r(3855),
                f = r(2180),
                p = r(3784),
                d = r(8043);

            function h(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function m(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }
            var b = r(4192),
                y = r(3781),
                v = r(4067),
                g = r(7896);

            function E(e = "") {
                return e.split(" ").filter(e => e.trim().length > 1)
            }
            let w = (0, o.createContext)(null);
            w.displayName = "TransitionContext";
            var O = ((n = O || {}).Visible = "visible", n.Hidden = "hidden", n);
            let S = (0, o.createContext)(null);

            function T(e) {
                return "children" in e ? T(e.children) : e.current.filter(({
                    el: e
                }) => null !== e.current).filter(({
                    state: e
                }) => "visible" === e).length > 0
            }

            function R(e, t) {
                let r = (0, c.E)(e),
                    n = (0, o.useRef)([]),
                    a = l(),
                    u = (0, b.G)(),
                    f = (0, y.z)((e, t = i.l4.Hidden) => {
                        let o = n.current.findIndex(({
                            el: t
                        }) => t === e); - 1 !== o && ((0, s.E)(t, {
                            [i.l4.Unmount]() {
                                n.current.splice(o, 1)
                            },
                            [i.l4.Hidden]() {
                                n.current[o].state = "hidden"
                            }
                        }), u.microTask(() => {
                            var e;
                            !T(n) && a.current && (null == (e = r.current) || e.call(r))
                        }))
                    }),
                    p = (0, y.z)(e => {
                        let t = n.current.find(({
                            el: t
                        }) => t === e);
                        return t ? "visible" !== t.state && (t.state = "visible") : n.current.push({
                            el: e,
                            state: "visible"
                        }), () => f(e, i.l4.Unmount)
                    }),
                    d = (0, o.useRef)([]),
                    h = (0, o.useRef)(Promise.resolve()),
                    m = (0, o.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    v = (0, y.z)((e, r, n) => {
                        d.current.splice(0), t && (t.chains.current[r] = t.chains.current[r].filter(([t]) => t !== e)), null == t || t.chains.current[r].push([e, new Promise(e => {
                            d.current.push(e)
                        })]), null == t || t.chains.current[r].push([e, new Promise(e => {
                            Promise.all(m.current[r].map(([e, t]) => t)).then(() => e())
                        })]), "enter" === r ? h.current = h.current.then(() => null == t ? void 0 : t.wait.current).then(() => n(r)) : n(r)
                    }),
                    g = (0, y.z)((e, t, r) => {
                        Promise.all(m.current[t].splice(0).map(([e, t]) => t)).then(() => {
                            var e;
                            null == (e = d.current.shift()) || e()
                        }).then(() => r(t))
                    });
                return (0, o.useMemo)(() => ({
                    children: n,
                    register: p,
                    unregister: f,
                    onStart: v,
                    onStop: g,
                    wait: h,
                    chains: m
                }), [p, f, n, v, g, m, h])
            }

            function x() {}
            S.displayName = "NestingContext";
            let C = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function A(e) {
                var t;
                let r = {};
                for (let n of C) r[n] = null != (t = e[n]) ? t : x;
                return r
            }
            let P = i.AN.RenderStrategy,
                D = (0, i.yV)(function(e, t) {
                    let {
                        show: r,
                        appear: n = !1,
                        unmount: s,
                        ...l
                    } = e, c = (0, o.useRef)(null), d = (0, p.T)(c, t);
                    (0, f.H)();
                    let h = (0, a.oJ)();
                    if (void 0 === r && null !== h && (r = (h & a.ZM.Open) === a.ZM.Open), ![!0, !1].includes(r)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [m, b] = (0, o.useState)(r ? "visible" : "hidden"), y = R(() => {
                        b("hidden")
                    }), [v, g] = (0, o.useState)(!0), E = (0, o.useRef)([r]);
                    (0, u.e)(() => {
                        !1 !== v && E.current[E.current.length - 1] !== r && (E.current.push(r), g(!1))
                    }, [E, r]);
                    let O = (0, o.useMemo)(() => ({
                        show: r,
                        appear: n,
                        initial: v
                    }), [r, n, v]);
                    (0, o.useEffect)(() => {
                        if (r) b("visible");
                        else if (T(y)) {
                            let e = c.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && b("hidden")
                        } else b("hidden")
                    }, [r, y]);
                    let x = {
                        unmount: s
                    };
                    return o.createElement(S.Provider, {
                        value: y
                    }, o.createElement(w.Provider, {
                        value: O
                    }, (0, i.sY)({
                        ourProps: { ...x,
                            as: o.Fragment,
                            children: o.createElement(I, {
                                ref: d,
                                ...x,
                                ...l
                            })
                        },
                        theirProps: {},
                        defaultTag: o.Fragment,
                        features: P,
                        visible: "visible" === m,
                        name: "Transition"
                    })))
                }),
                I = (0, i.yV)(function(e, t) {
                    var r;
                    let n, {
                            beforeEnter: O,
                            afterEnter: x,
                            beforeLeave: C,
                            afterLeave: D,
                            enter: I,
                            enterFrom: j,
                            enterTo: N,
                            entered: L,
                            leave: _,
                            leaveFrom: k,
                            leaveTo: U,
                            ...B
                        } = e,
                        M = (0, o.useRef)(null),
                        F = (0, p.T)(M, t),
                        z = B.unmount ? i.l4.Unmount : i.l4.Hidden,
                        {
                            show: H,
                            appear: V,
                            initial: q
                        } = function() {
                            let e = (0, o.useContext)(w);
                            if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                            return e
                        }(),
                        [W, J] = (0, o.useState)(H ? "visible" : "hidden"),
                        $ = function() {
                            let e = (0, o.useContext)(S);
                            if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                            return e
                        }(),
                        {
                            register: Y,
                            unregister: G
                        } = $,
                        Z = (0, o.useRef)(null);
                    (0, o.useEffect)(() => Y(M), [Y, M]), (0, o.useEffect)(() => {
                        if (z === i.l4.Hidden && M.current) {
                            if (H && "visible" !== W) {
                                J("visible");
                                return
                            }
                            return (0, s.E)(W, {
                                hidden: () => G(M),
                                visible: () => Y(M)
                            })
                        }
                    }, [W, M, Y, G, H, z]);
                    let K = (0, c.E)({
                            enter: E(I),
                            enterFrom: E(j),
                            enterTo: E(N),
                            entered: E(L),
                            leave: E(_),
                            leaveFrom: E(k),
                            leaveTo: E(U)
                        }),
                        X = (r = {
                            beforeEnter: O,
                            afterEnter: x,
                            beforeLeave: C,
                            afterLeave: D
                        }, n = (0, o.useRef)(A(r)), (0, o.useEffect)(() => {
                            n.current = A(r)
                        }, [r]), n),
                        Q = (0, f.H)();
                    (0, o.useEffect)(() => {
                        if (Q && "visible" === W && null === M.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }, [M, W, Q]);
                    let ee = q && !V,
                        et = !Q || ee || Z.current === H ? "idle" : H ? "enter" : "leave",
                        er = function(e = 0) {
                            let [t, r] = (0, o.useState)(e), n = (0, o.useCallback)(e => r(t => t | e), [t]), i = (0, o.useCallback)(e => Boolean(t & e), [t]);
                            return {
                                flags: t,
                                addFlag: n,
                                hasFlag: i,
                                removeFlag: (0, o.useCallback)(e => r(t => t & ~e), [r]),
                                toggleFlag: (0, o.useCallback)(e => r(t => t ^ e), [r])
                            }
                        }(0),
                        en = (0, y.z)(e => (0, s.E)(e, {
                            enter: () => {
                                er.addFlag(a.ZM.Opening), X.current.beforeEnter()
                            },
                            leave: () => {
                                er.addFlag(a.ZM.Closing), X.current.beforeLeave()
                            },
                            idle: () => {}
                        })),
                        eo = (0, y.z)(e => (0, s.E)(e, {
                            enter: () => {
                                er.removeFlag(a.ZM.Opening), X.current.afterEnter()
                            },
                            leave: () => {
                                er.removeFlag(a.ZM.Closing), X.current.afterLeave()
                            },
                            idle: () => {}
                        })),
                        ei = R(() => {
                            J("hidden"), G(M)
                        }, $);
                    (function({
                        container: e,
                        direction: t,
                        classes: r,
                        onStart: n,
                        onStop: o
                    }) {
                        let i = l(),
                            a = (0, b.G)(),
                            f = (0, c.E)(t);
                        (0, u.e)(() => {
                            let t = (0, d.k)();
                            a.add(t.dispose);
                            let u = e.current;
                            if (u && "idle" !== f.current && i.current) {
                                var l, c, p, b;
                                let e, i, a, y, v, g, E;
                                return t.dispose(), n.current(f.current), t.add((l = u, c = r.current, p = "enter" === f.current, b = () => {
                                    t.dispose(), o.current(f.current)
                                }, i = p ? "enter" : "leave", a = (0, d.k)(), y = void 0 !== b ? (e = {
                                    called: !1
                                }, (...t) => {
                                    if (!e.called) return e.called = !0, b(...t)
                                }) : () => {}, "enter" === i && (l.removeAttribute("hidden"), l.style.display = ""), v = (0, s.E)(i, {
                                    enter: () => c.enter,
                                    leave: () => c.leave
                                }), g = (0, s.E)(i, {
                                    enter: () => c.enterTo,
                                    leave: () => c.leaveTo
                                }), E = (0, s.E)(i, {
                                    enter: () => c.enterFrom,
                                    leave: () => c.leaveFrom
                                }), m(l, ...c.enter, ...c.enterTo, ...c.enterFrom, ...c.leave, ...c.leaveFrom, ...c.leaveTo, ...c.entered), h(l, ...v, ...E), a.nextFrame(() => {
                                    m(l, ...E), h(l, ...g),
                                        function(e, t) {
                                            let r = (0, d.k)();
                                            if (!e) return r.dispose;
                                            let {
                                                transitionDuration: n,
                                                transitionDelay: o
                                            } = getComputedStyle(e), [i, a] = [n, o].map(e => {
                                                let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                                                return t
                                            }), s = i + a;
                                            if (0 !== s) {
                                                r.group(r => {
                                                    r.setTimeout(() => {
                                                        t(), r.dispose()
                                                    }, s), r.addEventListener(e, "transitionrun", e => {
                                                        e.target === e.currentTarget && r.dispose()
                                                    })
                                                });
                                                let n = r.addEventListener(e, "transitionend", e => {
                                                    e.target === e.currentTarget && (t(), n())
                                                })
                                            } else t();
                                            r.add(() => t()), r.dispose
                                        }(l, () => (m(l, ...v), h(l, ...c.entered), y()))
                                }), a.dispose)), t.dispose
                            }
                        }, [t])
                    })({
                        container: M,
                        classes: K,
                        direction: et,
                        onStart: (0, c.E)(e => {
                            ei.onStart(M, e, en)
                        }),
                        onStop: (0, c.E)(e => {
                            ei.onStop(M, e, eo), "leave" !== e || T(ei) || (J("hidden"), G(M))
                        })
                    }), (0, o.useEffect)(() => {
                        ee && (z === i.l4.Hidden ? Z.current = null : Z.current = H)
                    }, [H, ee, W]);
                    let ea = B;
                    return V && H && g.O.isServer && (ea = { ...ea,
                        className: (0, v.A)(B.className, ...K.current.enter, ...K.current.enterFrom)
                    }), o.createElement(S.Provider, {
                        value: ei
                    }, o.createElement(a.up, {
                        value: (0, s.E)(W, {
                            visible: a.ZM.Open,
                            hidden: a.ZM.Closed
                        }) | er.flags
                    }, (0, i.sY)({
                        ourProps: {
                            ref: F
                        },
                        theirProps: ea,
                        defaultTag: "div",
                        features: P,
                        visible: "visible" === W,
                        name: "Transition.Child"
                    })))
                }),
                j = (0, i.yV)(function(e, t) {
                    let r = null !== (0, o.useContext)(w),
                        n = null !== (0, a.oJ)();
                    return o.createElement(o.Fragment, null, !r && n ? o.createElement(D, {
                        ref: t,
                        ...e
                    }) : o.createElement(I, {
                        ref: t,
                        ...e
                    }))
                }),
                N = Object.assign(D, {
                    Child: j,
                    Root: D
                })
        },
        4192: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return i
                }
            });
            var n = r(7294),
                o = r(8043);

            function i() {
                let [e] = (0, n.useState)(o.k);
                return (0, n.useEffect)(() => () => e.dispose(), [e]), e
            }
        },
        3781: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return i
                }
            });
            var n = r(7294),
                o = r(3855);
            let i = function(e) {
                let t = (0, o.E)(e);
                return n.useCallback((...e) => t.current(...e), [t])
            }
        },
        6723: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return i
                }
            });
            var n = r(7294),
                o = r(7896);
            let i = (e, t) => {
                o.O.isServer ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
        },
        3855: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return i
                }
            });
            var n = r(7294),
                o = r(6723);

            function i(e) {
                let t = (0, n.useRef)(e);
                return (0, o.e)(() => {
                    t.current = e
                }, [e]), t
            }
        },
        2180: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return i
                }
            });
            var n = r(7294),
                o = r(7896);

            function i() {
                let [e, t] = (0, n.useState)(o.O.isHandoffComplete);
                return e && !1 === o.O.isHandoffComplete && t(!1), (0, n.useEffect)(() => {
                    !0 !== e && t(!0)
                }, [e]), (0, n.useEffect)(() => o.O.handoff(), []), e
            }
        },
        3784: function(e, t, r) {
            "use strict";
            r.d(t, {
                T: function() {
                    return a
                }
            });
            var n = r(7294),
                o = r(3781);
            let i = Symbol();

            function a(...e) {
                let t = (0, n.useRef)(e);
                (0, n.useEffect)(() => {
                    t.current = e
                }, [e]);
                let r = (0, o.z)(e => {
                    for (let r of t.current) null != r && ("function" == typeof r ? r(e) : r.current = e)
                });
                return e.every(e => null == e || (null == e ? void 0 : e[i])) ? void 0 : r
            }
        },
        6567: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZM: function() {
                    return a
                },
                oJ: function() {
                    return s
                },
                up: function() {
                    return u
                }
            });
            var n, o = r(7294);
            let i = (0, o.createContext)(null);
            i.displayName = "OpenClosedContext";
            var a = ((n = a || {})[n.Open = 1] = "Open", n[n.Closed = 2] = "Closed", n[n.Closing = 4] = "Closing", n[n.Opening = 8] = "Opening", n);

            function s() {
                return (0, o.useContext)(i)
            }

            function u({
                value: e,
                children: t
            }) {
                return o.createElement(i.Provider, {
                    value: e
                }, t)
            }
        },
        4067: function(e, t, r) {
            "use strict";

            function n(...e) {
                return e.filter(Boolean).join(" ")
            }
            r.d(t, {
                A: function() {
                    return n
                }
            })
        },
        8043: function(e, t, r) {
            "use strict";
            r.d(t, {
                k: function() {
                    return function e() {
                        let t = [],
                            r = {
                                addEventListener: (e, t, n, o) => (e.addEventListener(t, n, o), r.add(() => e.removeEventListener(t, n, o))),
                                requestAnimationFrame(...e) {
                                    let t = requestAnimationFrame(...e);
                                    return r.add(() => cancelAnimationFrame(t))
                                },
                                nextFrame: (...e) => r.requestAnimationFrame(() => r.requestAnimationFrame(...e)),
                                setTimeout(...e) {
                                    let t = setTimeout(...e);
                                    return r.add(() => clearTimeout(t))
                                },
                                microTask(...e) {
                                    var t;
                                    let n = {
                                        current: !0
                                    };
                                    return t = () => {
                                        n.current && e[0]()
                                    }, "function" == typeof queueMicrotask ? queueMicrotask(t) : Promise.resolve().then(t).catch(e => setTimeout(() => {
                                        throw e
                                    })), r.add(() => {
                                        n.current = !1
                                    })
                                },
                                style(e, t, r) {
                                    let n = e.style.getPropertyValue(t);
                                    return Object.assign(e.style, {
                                        [t]: r
                                    }), this.add(() => {
                                        Object.assign(e.style, {
                                            [t]: n
                                        })
                                    })
                                },
                                group(t) {
                                    let r = e();
                                    return t(r), this.add(() => r.dispose())
                                },
                                add: e => (t.push(e), () => {
                                    let r = t.indexOf(e);
                                    if (r >= 0)
                                        for (let e of t.splice(r, 1)) e()
                                }),
                                dispose() {
                                    for (let e of t.splice(0)) e()
                                }
                            };
                        return r
                    }
                }
            })
        },
        7896: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return a
                }
            });
            var n = Object.defineProperty,
                o = (e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                i = (e, t, r) => (o(e, "symbol" != typeof t ? t + "" : t, r), r);
            let a = new class {
                constructor() {
                    i(this, "current", this.detect()), i(this, "handoffState", "pending"), i(this, "currentId", 0)
                }
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
            }
        },
        2984: function(e, t, r) {
            "use strict";

            function n(e, t, ...r) {
                if (e in t) {
                    let n = t[e];
                    return "function" == typeof n ? n(...r) : n
                }
                let o = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(o, n), o
            }
            r.d(t, {
                E: function() {
                    return n
                }
            })
        },
        2351: function(e, t, r) {
            "use strict";
            r.d(t, {
                AN: function() {
                    return u
                },
                l4: function() {
                    return l
                },
                oA: function() {
                    return h
                },
                sY: function() {
                    return c
                },
                yV: function() {
                    return d
                }
            });
            var n, o, i = r(7294),
                a = r(4067),
                s = r(2984),
                u = ((n = u || {})[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n),
                l = ((o = l || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

            function c({
                ourProps: e,
                theirProps: t,
                slot: r,
                defaultTag: n,
                features: o,
                visible: i = !0,
                name: a
            }) {
                let u = p(t, e);
                if (i) return f(u, r, n, a);
                let l = null != o ? o : 0;
                if (2 & l) {
                    let {
                        static: e = !1,
                        ...t
                    } = u;
                    if (e) return f(t, r, n, a)
                }
                if (1 & l) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = u;
                    return (0, s.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => f({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, r, n, a)
                    })
                }
                return f(u, r, n, a)
            }

            function f(e, t = {}, r, n) {
                var o;
                let {
                    as: s = r,
                    children: u,
                    refName: l = "ref",
                    ...c
                } = m(e, ["unmount", "static"]), f = void 0 !== e.ref ? {
                    [l]: e.ref
                } : {}, d = "function" == typeof u ? u(t) : u;
                "className" in c && c.className && "function" == typeof c.className && (c.className = c.className(t));
                let b = {};
                if (t) {
                    let e = !1,
                        r = [];
                    for (let [n, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && r.push(n);
                    e && (b["data-headlessui-state"] = r.join(" "))
                }
                if (s === i.Fragment && Object.keys(h(c)).length > 0) {
                    if (!(0, i.isValidElement)(d) || Array.isArray(d) && d.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(c).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
                    let e = (0, a.A)(null == (o = d.props) ? void 0 : o.className, c.className);
                    return (0, i.cloneElement)(d, Object.assign({}, p(d.props, h(m(c, ["ref"]))), b, f, function(...e) {
                        return {
                            ref: e.every(e => null == e) ? void 0 : t => {
                                for (let r of e) null != r && ("function" == typeof r ? r(t) : r.current = t)
                            }
                        }
                    }(d.ref, f.ref), e ? {
                        className: e
                    } : {}))
                }
                return (0, i.createElement)(s, Object.assign({}, m(c, ["ref"]), s !== i.Fragment && f, s !== i.Fragment && b), d)
            }

            function p(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    r = {};
                for (let n of e)
                    for (let e in n) e.startsWith("on") && "function" == typeof n[e] ? (null != r[e] || (r[e] = []), r[e].push(n[e])) : t[e] = n[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map(e => [e, void 0])));
                for (let e in r) Object.assign(t, {
                    [e](t, ...n) {
                        for (let o of r[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            o(t, ...n)
                        }
                    }
                });
                return t
            }

            function d(e) {
                var t;
                return Object.assign((0, i.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function h(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function m(e, t = []) {
                let r = Object.assign({}, e);
                for (let e of t) e in r && delete r[e];
                return r
            }
        },
        6154: function(e, t, r) {
            "use strict";
            let n;

            function o(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
            r.d(t, {
                Z: function() {
                    return e6
                }
            });
            let {
                toString: i
            } = Object.prototype, {
                getPrototypeOf: a
            } = Object, s = (Q = Object.create(null), e => {
                let t = i.call(e);
                return Q[t] || (Q[t] = t.slice(8, -1).toLowerCase())
            }), u = e => (e = e.toLowerCase(), t => s(t) === e), l = e => t => typeof t === e, {
                isArray: c
            } = Array, f = l("undefined"), p = u("ArrayBuffer"), d = l("string"), h = l("function"), m = l("number"), b = e => null !== e && "object" == typeof e, y = e => {
                if ("object" !== s(e)) return !1;
                let t = a(e);
                return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }, v = u("Date"), g = u("File"), E = u("Blob"), w = u("FileList"), O = e => b(e) && h(e.pipe), S = e => {
                let t = "[object FormData]";
                return e && ("function" == typeof FormData && e instanceof FormData || i.call(e) === t || h(e.toString) && e.toString() === t)
            }, T = u("URLSearchParams"), R = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

            function x(e, t, {
                allOwnKeys: r = !1
            } = {}) {
                let n, o;
                if (null != e) {
                    if ("object" != typeof e && (e = [e]), c(e))
                        for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
                    else {
                        let o;
                        let i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
                            a = i.length;
                        for (n = 0; n < a; n++) o = i[n], t.call(null, e[o], o, e)
                    }
                }
            }

            function C(e, t) {
                let r;
                t = t.toLowerCase();
                let n = Object.keys(e),
                    o = n.length;
                for (; o-- > 0;)
                    if (t === (r = n[o]).toLowerCase()) return r;
                return null
            }
            let A = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
                P = e => !f(e) && e !== A,
                D = (e, t, r, {
                    allOwnKeys: n
                } = {}) => (x(t, (t, n) => {
                    r && h(t) ? e[n] = o(t, r) : e[n] = t
                }, {
                    allOwnKeys: n
                }), e),
                I = e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
                j = (e, t, r, n) => {
                    e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                        value: t.prototype
                    }), r && Object.assign(e.prototype, r)
                },
                N = (e, t, r, n) => {
                    let o, i, s;
                    let u = {};
                    if (t = t || {}, null == e) return t;
                    do {
                        for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0;) s = o[i], (!n || n(s, e, t)) && !u[s] && (t[s] = e[s], u[s] = !0);
                        e = !1 !== r && a(e)
                    } while (e && (!r || r(e, t)) && e !== Object.prototype);
                    return t
                },
                L = (e, t, r) => {
                    e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
                    let n = e.indexOf(t, r);
                    return -1 !== n && n === r
                },
                _ = e => {
                    if (!e) return null;
                    if (c(e)) return e;
                    let t = e.length;
                    if (!m(t)) return null;
                    let r = Array(t);
                    for (; t-- > 0;) r[t] = e[t];
                    return r
                },
                k = (ee = "undefined" != typeof Uint8Array && a(Uint8Array), e => ee && e instanceof ee),
                U = (e, t) => {
                    let r;
                    let n = e && e[Symbol.iterator],
                        o = n.call(e);
                    for (;
                        (r = o.next()) && !r.done;) {
                        let n = r.value;
                        t.call(e, n[0], n[1])
                    }
                },
                B = (e, t) => {
                    let r;
                    let n = [];
                    for (; null !== (r = e.exec(t));) n.push(r);
                    return n
                },
                M = u("HTMLFormElement"),
                F = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                    return t.toUpperCase() + r
                }),
                z = (({
                    hasOwnProperty: e
                }) => (t, r) => e.call(t, r))(Object.prototype),
                H = u("RegExp"),
                V = (e, t) => {
                    let r = Object.getOwnPropertyDescriptors(e),
                        n = {};
                    x(r, (r, o) => {
                        !1 !== t(r, o, e) && (n[o] = r)
                    }), Object.defineProperties(e, n)
                },
                q = e => {
                    V(e, (t, r) => {
                        if (h(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                        let n = e[r];
                        if (h(n)) {
                            if (t.enumerable = !1, "writable" in t) {
                                t.writable = !1;
                                return
                            }
                            t.set || (t.set = () => {
                                throw Error("Can not rewrite read-only method '" + r + "'")
                            })
                        }
                    })
                },
                W = (e, t) => {
                    let r = {};
                    return (e => {
                        e.forEach(e => {
                            r[e] = !0
                        })
                    })(c(e) ? e : String(e).split(t)), r
                },
                J = () => {},
                $ = (e, t) => Number.isFinite(e = +e) ? e : t,
                Y = "abcdefghijklmnopqrstuvwxyz",
                G = "0123456789",
                Z = {
                    DIGIT: G,
                    ALPHA: Y,
                    ALPHA_DIGIT: Y + Y.toUpperCase() + G
                },
                K = (e = 16, t = Z.ALPHA_DIGIT) => {
                    let r = "",
                        {
                            length: n
                        } = t;
                    for (; e--;) r += t[Math.random() * n | 0];
                    return r
                },
                X = e => {
                    let t = Array(10),
                        r = (e, n) => {
                            if (b(e)) {
                                if (t.indexOf(e) >= 0) return;
                                if (!("toJSON" in e)) {
                                    t[n] = e;
                                    let o = c(e) ? [] : {};
                                    return x(e, (e, t) => {
                                        let i = r(e, n + 1);
                                        f(i) || (o[t] = i)
                                    }), t[n] = void 0, o
                                }
                            }
                            return e
                        };
                    return r(e, 0)
                };
            var Q, ee, et = {
                isArray: c,
                isArrayBuffer: p,
                isBuffer: function(e) {
                    return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && h(e.constructor.isBuffer) && e.constructor.isBuffer(e)
                },
                isFormData: S,
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && p(e.buffer)
                },
                isString: d,
                isNumber: m,
                isBoolean: e => !0 === e || !1 === e,
                isObject: b,
                isPlainObject: y,
                isUndefined: f,
                isDate: v,
                isFile: g,
                isBlob: E,
                isRegExp: H,
                isFunction: h,
                isStream: O,
                isURLSearchParams: T,
                isTypedArray: k,
                isFileList: w,
                forEach: x,
                merge: function e() {
                    let {
                        caseless: t
                    } = P(this) && this || {}, r = {}, n = (n, o) => {
                        let i = t && C(r, o) || o;
                        y(r[i]) && y(n) ? r[i] = e(r[i], n) : y(n) ? r[i] = e({}, n) : c(n) ? r[i] = n.slice() : r[i] = n
                    };
                    for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && x(arguments[e], n);
                    return r
                },
                extend: D,
                trim: R,
                stripBOM: I,
                inherits: j,
                toFlatObject: N,
                kindOf: s,
                kindOfTest: u,
                endsWith: L,
                toArray: _,
                forEachEntry: U,
                matchAll: B,
                isHTMLForm: M,
                hasOwnProperty: z,
                hasOwnProp: z,
                reduceDescriptors: V,
                freezeMethods: q,
                toObjectSet: W,
                toCamelCase: F,
                noop: J,
                toFiniteNumber: $,
                findKey: C,
                global: A,
                isContextDefined: P,
                ALPHABET: Z,
                generateString: K,
                isSpecCompliantForm: function(e) {
                    return !!(e && h(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
                },
                toJSONObject: X
            };

            function er(e, t, r, n, o) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o)
            }
            et.inherits(er, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: et.toJSONObject(this.config),
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
            });
            let en = er.prototype,
                eo = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
                eo[e] = {
                    value: e
                }
            }), Object.defineProperties(er, eo), Object.defineProperty(en, "isAxiosError", {
                value: !0
            }), er.from = (e, t, r, n, o, i) => {
                let a = Object.create(en);
                return et.toFlatObject(e, a, function(e) {
                    return e !== Error.prototype
                }, e => "isAxiosError" !== e), er.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a
            };
            var ei = r(1876).Buffer;

            function ea(e) {
                return et.isPlainObject(e) || et.isArray(e)
            }

            function es(e) {
                return et.endsWith(e, "[]") ? e.slice(0, -2) : e
            }

            function eu(e, t, r) {
                return e ? e.concat(t).map(function(e, t) {
                    return e = es(e), !r && t ? "[" + e + "]" : e
                }).join(r ? "." : "") : t
            }
            let el = et.toFlatObject(et, {}, null, function(e) {
                return /^is[A-Z]/.test(e)
            });
            var ec = function(e, t, r) {
                if (!et.isObject(e)) throw TypeError("target must be an object");
                t = t || new FormData, r = et.toFlatObject(r, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(e, t) {
                    return !et.isUndefined(t[e])
                });
                let n = r.metaTokens,
                    o = r.visitor || c,
                    i = r.dots,
                    a = r.indexes,
                    s = r.Blob || "undefined" != typeof Blob && Blob,
                    u = s && et.isSpecCompliantForm(t);
                if (!et.isFunction(o)) throw TypeError("visitor must be a function");

                function l(e) {
                    if (null === e) return "";
                    if (et.isDate(e)) return e.toISOString();
                    if (!u && et.isBlob(e)) throw new er("Blob is not supported. Use a Buffer instead.");
                    return et.isArrayBuffer(e) || et.isTypedArray(e) ? u && "function" == typeof Blob ? new Blob([e]) : ei.from(e) : e
                }

                function c(e, r, o) {
                    let s = e;
                    if (e && !o && "object" == typeof e) {
                        if (et.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), e = JSON.stringify(e);
                        else {
                            var u;
                            if (et.isArray(e) && (u = e, et.isArray(u) && !u.some(ea)) || (et.isFileList(e) || et.endsWith(r, "[]")) && (s = et.toArray(e))) return r = es(r), s.forEach(function(e, n) {
                                et.isUndefined(e) || null === e || t.append(!0 === a ? eu([r], n, i) : null === a ? r : r + "[]", l(e))
                            }), !1
                        }
                    }
                    return !!ea(e) || (t.append(eu(o, r, i), l(e)), !1)
                }
                let f = [],
                    p = Object.assign(el, {
                        defaultVisitor: c,
                        convertValue: l,
                        isVisitable: ea
                    });
                if (!et.isObject(e)) throw TypeError("data must be an object");
                return ! function e(r, n) {
                    if (!et.isUndefined(r)) {
                        if (-1 !== f.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                        f.push(r), et.forEach(r, function(r, i) {
                            let a = !(et.isUndefined(r) || null === r) && o.call(t, r, et.isString(i) ? i.trim() : i, n, p);
                            !0 === a && e(r, n ? n.concat(i) : [i])
                        }), f.pop()
                    }
                }(e), t
            };

            function ef(e) {
                let t = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\x00"
                };
                return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
                    return t[e]
                })
            }

            function ep(e, t) {
                this._pairs = [], e && ec(e, this, t)
            }
            let ed = ep.prototype;

            function eh(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function em(e, t, r) {
                let n;
                if (!t) return e;
                let o = r && r.encode || eh,
                    i = r && r.serialize;
                if (n = i ? i(t, r) : et.isURLSearchParams(t) ? t.toString() : new ep(t, r).toString(o)) {
                    let t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + n
                }
                return e
            }
            ed.append = function(e, t) {
                this._pairs.push([e, t])
            }, ed.toString = function(e) {
                let t = e ? function(t) {
                    return e.call(this, t, ef)
                } : ef;
                return this._pairs.map(function(e) {
                    return t(e[0]) + "=" + t(e[1])
                }, "").join("&")
            };
            var eb = class {
                    constructor() {
                        this.handlers = []
                    }
                    use(e, t, r) {
                        return this.handlers.push({
                            fulfilled: e,
                            rejected: t,
                            synchronous: !!r && r.synchronous,
                            runWhen: r ? r.runWhen : null
                        }), this.handlers.length - 1
                    }
                    eject(e) {
                        this.handlers[e] && (this.handlers[e] = null)
                    }
                    clear() {
                        this.handlers && (this.handlers = [])
                    }
                    forEach(e) {
                        et.forEach(this.handlers, function(t) {
                            null !== t && e(t)
                        })
                    }
                },
                ey = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                ev = "undefined" != typeof URLSearchParams ? URLSearchParams : ep,
                eg = "undefined" != typeof FormData ? FormData : null,
                eE = "undefined" != typeof Blob ? Blob : null;
            let ew = ("undefined" == typeof navigator || "ReactNative" !== (n = navigator.product) && "NativeScript" !== n && "NS" !== n) && "undefined" != typeof window && "undefined" != typeof document,
                eO = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
            var eS = {
                    isBrowser: !0,
                    classes: {
                        URLSearchParams: ev,
                        FormData: eg,
                        Blob: eE
                    },
                    isStandardBrowserEnv: ew,
                    isStandardBrowserWebWorkerEnv: eO,
                    protocols: ["http", "https", "file", "blob", "url", "data"]
                },
                eT = function(e) {
                    if (et.isFormData(e) && et.isFunction(e.entries)) {
                        let t = {};
                        return et.forEachEntry(e, (e, r) => {
                            ! function e(t, r, n, o) {
                                let i = t[o++],
                                    a = Number.isFinite(+i),
                                    s = o >= t.length;
                                if (i = !i && et.isArray(n) ? n.length : i, s) return et.hasOwnProp(n, i) ? n[i] = [n[i], r] : n[i] = r, !a;
                                n[i] && et.isObject(n[i]) || (n[i] = []);
                                let u = e(t, r, n[i], o);
                                return u && et.isArray(n[i]) && (n[i] = function(e) {
                                    let t, r;
                                    let n = {},
                                        o = Object.keys(e),
                                        i = o.length;
                                    for (t = 0; t < i; t++) n[r = o[t]] = e[r];
                                    return n
                                }(n[i])), !a
                            }(et.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                        }), t
                    }
                    return null
                };
            let eR = {
                    "Content-Type": void 0
                },
                ex = {
                    transitional: ey,
                    adapter: ["xhr", "http"],
                    transformRequest: [function(e, t) {
                        let r;
                        let n = t.getContentType() || "",
                            o = n.indexOf("application/json") > -1,
                            i = et.isObject(e);
                        i && et.isHTMLForm(e) && (e = new FormData(e));
                        let a = et.isFormData(e);
                        if (a) return o && o ? JSON.stringify(eT(e)) : e;
                        if (et.isArrayBuffer(e) || et.isBuffer(e) || et.isStream(e) || et.isFile(e) || et.isBlob(e)) return e;
                        if (et.isArrayBufferView(e)) return e.buffer;
                        if (et.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                        if (i) {
                            if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                                var s, u;
                                return (s = e, u = this.formSerializer, ec(s, new eS.classes.URLSearchParams, Object.assign({
                                    visitor: function(e, t, r, n) {
                                        return eS.isNode && et.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                                    }
                                }, u))).toString()
                            }
                            if ((r = et.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                                let t = this.env && this.env.FormData;
                                return ec(r ? {
                                    "files[]": e
                                } : e, t && new t, this.formSerializer)
                            }
                        }
                        return i || o ? (t.setContentType("application/json", !1), function(e, t, r) {
                            if (et.isString(e)) try {
                                return (0, JSON.parse)(e), et.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e
                            }
                            return (0, JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function(e) {
                        let t = this.transitional || ex.transitional,
                            r = t && t.forcedJSONParsing,
                            n = "json" === this.responseType;
                        if (e && et.isString(e) && (r && !this.responseType || n)) {
                            let r = t && t.silentJSONParsing;
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                if (!r && n) {
                                    if ("SyntaxError" === e.name) throw er.from(e, er.ERR_BAD_RESPONSE, this, null, this.response);
                                    throw e
                                }
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: eS.classes.FormData,
                        Blob: eS.classes.Blob
                    },
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
            et.forEach(["delete", "get", "head"], function(e) {
                ex.headers[e] = {}
            }), et.forEach(["post", "put", "patch"], function(e) {
                ex.headers[e] = et.merge(eR)
            });
            let eC = et.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
            var eA = e => {
                let t, r, n;
                let o = {};
                return e && e.split("\n").forEach(function(e) {
                    n = e.indexOf(":"), t = e.substring(0, n).trim().toLowerCase(), r = e.substring(n + 1).trim(), !t || o[t] && eC[t] || ("set-cookie" === t ? o[t] ? o[t].push(r) : o[t] = [r] : o[t] = o[t] ? o[t] + ", " + r : r)
                }), o
            };
            let eP = Symbol("internals");

            function eD(e) {
                return e && String(e).trim().toLowerCase()
            }

            function eI(e) {
                return !1 === e || null == e ? e : et.isArray(e) ? e.map(eI) : String(e)
            }

            function ej(e, t, r, n, o) {
                if (et.isFunction(n)) return n.call(this, t, r);
                if (o && (t = r), et.isString(t)) {
                    if (et.isString(n)) return -1 !== t.indexOf(n);
                    if (et.isRegExp(n)) return n.test(t)
                }
            }
            class eN {
                constructor(e) {
                    e && this.set(e)
                }
                set(e, t, r) {
                    let n = this;

                    function o(e, t, r) {
                        let o = eD(t);
                        if (!o) throw Error("header name must be a non-empty string");
                        let i = et.findKey(n, o);
                        i && void 0 !== n[i] && !0 !== r && (void 0 !== r || !1 === n[i]) || (n[i || t] = eI(e))
                    }
                    let i = (e, t) => et.forEach(e, (e, r) => o(e, r, t));
                    if (et.isPlainObject(e) || e instanceof this.constructor) i(e, t);
                    else {
                        var a;
                        et.isString(e) && (e = e.trim()) && (a = e, !/^[-_a-zA-Z]+$/.test(a.trim())) ? i(eA(e), t) : null != e && o(t, e, r)
                    }
                    return this
                }
                get(e, t) {
                    if (e = eD(e)) {
                        let r = et.findKey(this, e);
                        if (r) {
                            let e = this[r];
                            if (!t) return e;
                            if (!0 === t) return function(e) {
                                let t;
                                let r = Object.create(null),
                                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; t = n.exec(e);) r[t[1]] = t[2];
                                return r
                            }(e);
                            if (et.isFunction(t)) return t.call(this, e, r);
                            if (et.isRegExp(t)) return t.exec(e);
                            throw TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
                has(e, t) {
                    if (e = eD(e)) {
                        let r = et.findKey(this, e);
                        return !!(r && void 0 !== this[r] && (!t || ej(this, this[r], r, t)))
                    }
                    return !1
                }
                delete(e, t) {
                    let r = this,
                        n = !1;

                    function o(e) {
                        if (e = eD(e)) {
                            let o = et.findKey(r, e);
                            o && (!t || ej(r, r[o], o, t)) && (delete r[o], n = !0)
                        }
                    }
                    return et.isArray(e) ? e.forEach(o) : o(e), n
                }
                clear(e) {
                    let t = Object.keys(this),
                        r = t.length,
                        n = !1;
                    for (; r--;) {
                        let o = t[r];
                        (!e || ej(this, this[o], o, e, !0)) && (delete this[o], n = !0)
                    }
                    return n
                }
                normalize(e) {
                    let t = this,
                        r = {};
                    return et.forEach(this, (n, o) => {
                        let i = et.findKey(r, o);
                        if (i) {
                            t[i] = eI(n), delete t[o];
                            return
                        }
                        let a = e ? o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(o).trim();
                        a !== o && delete t[o], t[a] = eI(n), r[a] = !0
                    }), this
                }
                concat(...e) {
                    return this.constructor.concat(this, ...e)
                }
                toJSON(e) {
                    let t = Object.create(null);
                    return et.forEach(this, (r, n) => {
                        null != r && !1 !== r && (t[n] = e && et.isArray(r) ? r.join(", ") : r)
                    }), t
                }[Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
                toString() {
                    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n")
                }
                get[Symbol.toStringTag]() {
                    return "AxiosHeaders"
                }
                static from(e) {
                    return e instanceof this ? e : new this(e)
                }
                static concat(e, ...t) {
                    let r = new this(e);
                    return t.forEach(e => r.set(e)), r
                }
                static accessor(e) {
                    let t = this[eP] = this[eP] = {
                            accessors: {}
                        },
                        r = t.accessors,
                        n = this.prototype;

                    function o(e) {
                        let t = eD(e);
                        r[t] || (! function(e, t) {
                            let r = et.toCamelCase(" " + t);
                            ["get", "set", "has"].forEach(n => {
                                Object.defineProperty(e, n + r, {
                                    value: function(e, r, o) {
                                        return this[n].call(this, t, e, r, o)
                                    },
                                    configurable: !0
                                })
                            })
                        }(n, e), r[t] = !0)
                    }
                    return et.isArray(e) ? e.forEach(o) : o(e), this
                }
            }

            function eL(e, t) {
                let r = this || ex,
                    n = t || r,
                    o = eN.from(n.headers),
                    i = n.data;
                return et.forEach(e, function(e) {
                    i = e.call(r, i, o.normalize(), t ? t.status : void 0)
                }), o.normalize(), i
            }

            function e_(e) {
                return !!(e && e.__CANCEL__)
            }

            function ek(e, t, r) {
                er.call(this, null == e ? "canceled" : e, er.ERR_CANCELED, t, r), this.name = "CanceledError"
            }
            eN.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), et.freezeMethods(eN.prototype), et.freezeMethods(eN), et.inherits(ek, er, {
                __CANCEL__: !0
            });
            var eU = eS.isStandardBrowserEnv ? {
                write: function(e, t, r, n, o, i) {
                    let a = [];
                    a.push(e + "=" + encodeURIComponent(t)), et.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), et.isString(n) && a.push("path=" + n), et.isString(o) && a.push("domain=" + o), !0 === i && a.push("secure"), document.cookie = a.join("; ")
                },
                read: function(e) {
                    let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            };

            function eB(e, t) {
                return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e : t
            }
            var eM = eS.isStandardBrowserEnv ? function() {
                    let e;
                    let t = /(msie|trident)/i.test(navigator.userAgent),
                        r = document.createElement("a");

                    function n(e) {
                        let n = e;
                        return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                            href: r.href,
                            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                            host: r.host,
                            search: r.search ? r.search.replace(/^\?/, "") : "",
                            hash: r.hash ? r.hash.replace(/^#/, "") : "",
                            hostname: r.hostname,
                            port: r.port,
                            pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                        }
                    }
                    return e = n(window.location.href),
                        function(t) {
                            let r = et.isString(t) ? n(t) : t;
                            return r.protocol === e.protocol && r.host === e.host
                        }
                }() : function() {
                    return !0
                },
                eF = function(e, t) {
                    let r;
                    e = e || 10;
                    let n = Array(e),
                        o = Array(e),
                        i = 0,
                        a = 0;
                    return t = void 0 !== t ? t : 1e3,
                        function(s) {
                            let u = Date.now(),
                                l = o[a];
                            r || (r = u), n[i] = s, o[i] = u;
                            let c = a,
                                f = 0;
                            for (; c !== i;) f += n[c++], c %= e;
                            if ((i = (i + 1) % e) === a && (a = (a + 1) % e), u - r < t) return;
                            let p = l && u - l;
                            return p ? Math.round(1e3 * f / p) : void 0
                        }
                };

            function ez(e, t) {
                let r = 0,
                    n = eF(50, 250);
                return o => {
                    let i = o.loaded,
                        a = o.lengthComputable ? o.total : void 0,
                        s = i - r,
                        u = n(s);
                    r = i;
                    let l = {
                        loaded: i,
                        total: a,
                        progress: a ? i / a : void 0,
                        bytes: s,
                        rate: u || void 0,
                        estimated: u && a && i <= a ? (a - i) / u : void 0,
                        event: o
                    };
                    l[t ? "download" : "upload"] = !0, e(l)
                }
            }
            let eH = "undefined" != typeof XMLHttpRequest;
            var eV = eH && function(e) {
                return new Promise(function(t, r) {
                    let n, o = e.data,
                        i = eN.from(e.headers).normalize(),
                        a = e.responseType;

                    function s() {
                        e.cancelToken && e.cancelToken.unsubscribe(n), e.signal && e.signal.removeEventListener("abort", n)
                    }
                    et.isFormData(o) && (eS.isStandardBrowserEnv || eS.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
                    let u = new XMLHttpRequest;
                    if (e.auth) {
                        let t = e.auth.username || "",
                            r = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        i.set("Authorization", "Basic " + btoa(t + ":" + r))
                    }
                    let l = eB(e.baseURL, e.url);

                    function c() {
                        if (!u) return;
                        let n = eN.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                            o = a && "text" !== a && "json" !== a ? u.response : u.responseText,
                            i = {
                                data: o,
                                status: u.status,
                                statusText: u.statusText,
                                headers: n,
                                config: e,
                                request: u
                            };
                        ! function(e, t, r) {
                            let n = r.config.validateStatus;
                            !r.status || !n || n(r.status) ? e(r) : t(new er("Request failed with status code " + r.status, [er.ERR_BAD_REQUEST, er.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
                        }(function(e) {
                            t(e), s()
                        }, function(e) {
                            r(e), s()
                        }, i), u = null
                    }
                    if (u.open(e.method.toUpperCase(), em(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout, "onloadend" in u ? u.onloadend = c : u.onreadystatechange = function() {
                            u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(c)
                        }, u.onabort = function() {
                            u && (r(new er("Request aborted", er.ECONNABORTED, e, u)), u = null)
                        }, u.onerror = function() {
                            r(new er("Network Error", er.ERR_NETWORK, e, u)), u = null
                        }, u.ontimeout = function() {
                            let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                n = e.transitional || ey;
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(new er(t, n.clarifyTimeoutError ? er.ETIMEDOUT : er.ECONNABORTED, e, u)), u = null
                        }, eS.isStandardBrowserEnv) {
                        let t = (e.withCredentials || eM(l)) && e.xsrfCookieName && eU.read(e.xsrfCookieName);
                        t && i.set(e.xsrfHeaderName, t)
                    }
                    void 0 === o && i.setContentType(null), "setRequestHeader" in u && et.forEach(i.toJSON(), function(e, t) {
                        u.setRequestHeader(t, e)
                    }), et.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && "json" !== a && (u.responseType = e.responseType), "function" == typeof e.onDownloadProgress && u.addEventListener("progress", ez(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && u.upload && u.upload.addEventListener("progress", ez(e.onUploadProgress)), (e.cancelToken || e.signal) && (n = t => {
                        u && (r(!t || t.type ? new ek(null, e, u) : t), u.abort(), u = null)
                    }, e.cancelToken && e.cancelToken.subscribe(n), e.signal && (e.signal.aborted ? n() : e.signal.addEventListener("abort", n)));
                    let f = function(e) {
                        let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                        return t && t[1] || ""
                    }(l);
                    if (f && -1 === eS.protocols.indexOf(f)) {
                        r(new er("Unsupported protocol " + f + ":", er.ERR_BAD_REQUEST, e));
                        return
                    }
                    u.send(o || null)
                })
            };
            let eq = {
                http: null,
                xhr: eV
            };
            et.forEach(eq, (e, t) => {
                if (e) {
                    try {
                        Object.defineProperty(e, "name", {
                            value: t
                        })
                    } catch (e) {}
                    Object.defineProperty(e, "adapterName", {
                        value: t
                    })
                }
            });
            var eW = {
                getAdapter: e => {
                    let t, r;
                    e = et.isArray(e) ? e : [e];
                    let {
                        length: n
                    } = e;
                    for (let o = 0; o < n && (t = e[o], !(r = et.isString(t) ? eq[t.toLowerCase()] : t)); o++);
                    if (!r) {
                        if (!1 === r) throw new er(`Adapter ${t} is not supported by the environment`, "ERR_NOT_SUPPORT");
                        throw Error(et.hasOwnProp(eq, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`)
                    }
                    if (!et.isFunction(r)) throw TypeError("adapter is not a function");
                    return r
                },
                adapters: eq
            };

            function eJ(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ek(null, e)
            }

            function e$(e) {
                eJ(e), e.headers = eN.from(e.headers), e.data = eL.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
                let t = eW.getAdapter(e.adapter || ex.adapter);
                return t(e).then(function(t) {
                    return eJ(e), t.data = eL.call(e, e.transformResponse, t), t.headers = eN.from(t.headers), t
                }, function(t) {
                    return !e_(t) && (eJ(e), t && t.response && (t.response.data = eL.call(e, e.transformResponse, t.response), t.response.headers = eN.from(t.response.headers))), Promise.reject(t)
                })
            }
            let eY = e => e instanceof eN ? e.toJSON() : e;

            function eG(e, t) {
                t = t || {};
                let r = {};

                function n(e, t, r) {
                    return et.isPlainObject(e) && et.isPlainObject(t) ? et.merge.call({
                        caseless: r
                    }, e, t) : et.isPlainObject(t) ? et.merge({}, t) : et.isArray(t) ? t.slice() : t
                }

                function o(e, t, r) {
                    return et.isUndefined(t) ? et.isUndefined(e) ? void 0 : n(void 0, e, r) : n(e, t, r)
                }

                function i(e, t) {
                    if (!et.isUndefined(t)) return n(void 0, t)
                }

                function a(e, t) {
                    return et.isUndefined(t) ? et.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t)
                }

                function s(r, o, i) {
                    return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0
                }
                let u = {
                    url: i,
                    method: i,
                    data: i,
                    baseURL: a,
                    transformRequest: a,
                    transformResponse: a,
                    paramsSerializer: a,
                    timeout: a,
                    timeoutMessage: a,
                    withCredentials: a,
                    adapter: a,
                    responseType: a,
                    xsrfCookieName: a,
                    xsrfHeaderName: a,
                    onUploadProgress: a,
                    onDownloadProgress: a,
                    decompress: a,
                    maxContentLength: a,
                    maxBodyLength: a,
                    beforeRedirect: a,
                    transport: a,
                    httpAgent: a,
                    httpsAgent: a,
                    cancelToken: a,
                    socketPath: a,
                    responseEncoding: a,
                    validateStatus: s,
                    headers: (e, t) => o(eY(e), eY(t), !0)
                };
                return et.forEach(Object.keys(e).concat(Object.keys(t)), function(n) {
                    let i = u[n] || o,
                        a = i(e[n], t[n], n);
                    et.isUndefined(a) && i !== s || (r[n] = a)
                }), r
            }
            let eZ = "1.3.4",
                eK = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
                eK[e] = function(r) {
                    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
                }
            });
            let eX = {};
            eK.transitional = function(e, t, r) {
                function n(e, t) {
                    return "[Axios v" + eZ + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
                }
                return (r, o, i) => {
                    if (!1 === e) throw new er(n(o, " has been removed" + (t ? " in " + t : "")), er.ERR_DEPRECATED);
                    return t && !eX[o] && (eX[o] = !0, console.warn(n(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, o, i)
                }
            };
            var eQ = {
                assertOptions: function(e, t, r) {
                    if ("object" != typeof e) throw new er("options must be an object", er.ERR_BAD_OPTION_VALUE);
                    let n = Object.keys(e),
                        o = n.length;
                    for (; o-- > 0;) {
                        let i = n[o],
                            a = t[i];
                        if (a) {
                            let t = e[i],
                                r = void 0 === t || a(t, i, e);
                            if (!0 !== r) throw new er("option " + i + " must be " + r, er.ERR_BAD_OPTION_VALUE);
                            continue
                        }
                        if (!0 !== r) throw new er("Unknown option " + i, er.ERR_BAD_OPTION)
                    }
                },
                validators: eK
            };
            let e0 = eQ.validators;
            class e1 {
                constructor(e) {
                    this.defaults = e, this.interceptors = {
                        request: new eb,
                        response: new eb
                    }
                }
                request(e, t) {
                    let r, n, o;
                    "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = eG(this.defaults, t);
                    let {
                        transitional: i,
                        paramsSerializer: a,
                        headers: s
                    } = t;
                    void 0 !== i && eQ.assertOptions(i, {
                        silentJSONParsing: e0.transitional(e0.boolean),
                        forcedJSONParsing: e0.transitional(e0.boolean),
                        clarifyTimeoutError: e0.transitional(e0.boolean)
                    }, !1), void 0 !== a && eQ.assertOptions(a, {
                        encode: e0.function,
                        serialize: e0.function
                    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase(), (r = s && et.merge(s.common, s[t.method])) && et.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                        delete s[e]
                    }), t.headers = eN.concat(r, s);
                    let u = [],
                        l = !0;
                    this.interceptors.request.forEach(function(e) {
                        ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (l = l && e.synchronous, u.unshift(e.fulfilled, e.rejected))
                    });
                    let c = [];
                    this.interceptors.response.forEach(function(e) {
                        c.push(e.fulfilled, e.rejected)
                    });
                    let f = 0;
                    if (!l) {
                        let e = [e$.bind(this), void 0];
                        for (e.unshift.apply(e, u), e.push.apply(e, c), o = e.length, n = Promise.resolve(t); f < o;) n = n.then(e[f++], e[f++]);
                        return n
                    }
                    o = u.length;
                    let p = t;
                    for (f = 0; f < o;) {
                        let e = u[f++],
                            t = u[f++];
                        try {
                            p = e(p)
                        } catch (e) {
                            t.call(this, e);
                            break
                        }
                    }
                    try {
                        n = e$.call(this, p)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    for (f = 0, o = c.length; f < o;) n = n.then(c[f++], c[f++]);
                    return n
                }
                getUri(e) {
                    e = eG(this.defaults, e);
                    let t = eB(e.baseURL, e.url);
                    return em(t, e.params, e.paramsSerializer)
                }
            }
            et.forEach(["delete", "get", "head", "options"], function(e) {
                e1.prototype[e] = function(t, r) {
                    return this.request(eG(r || {}, {
                        method: e,
                        url: t,
                        data: (r || {}).data
                    }))
                }
            }), et.forEach(["post", "put", "patch"], function(e) {
                function t(t) {
                    return function(r, n, o) {
                        return this.request(eG(o || {}, {
                            method: e,
                            headers: t ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: r,
                            data: n
                        }))
                    }
                }
                e1.prototype[e] = t(), e1.prototype[e + "Form"] = t(!0)
            });
            class e2 {
                constructor(e) {
                    let t;
                    if ("function" != typeof e) throw TypeError("executor must be a function.");
                    this.promise = new Promise(function(e) {
                        t = e
                    });
                    let r = this;
                    this.promise.then(e => {
                        if (!r._listeners) return;
                        let t = r._listeners.length;
                        for (; t-- > 0;) r._listeners[t](e);
                        r._listeners = null
                    }), this.promise.then = e => {
                        let t;
                        let n = new Promise(e => {
                            r.subscribe(e), t = e
                        }).then(e);
                        return n.cancel = function() {
                            r.unsubscribe(t)
                        }, n
                    }, e(function(e, n, o) {
                        r.reason || (r.reason = new ek(e, n, o), t(r.reason))
                    })
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason
                }
                subscribe(e) {
                    if (this.reason) {
                        e(this.reason);
                        return
                    }
                    this._listeners ? this._listeners.push(e) : this._listeners = [e]
                }
                unsubscribe(e) {
                    if (!this._listeners) return;
                    let t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                }
                static source() {
                    let e;
                    let t = new e2(function(t) {
                        e = t
                    });
                    return {
                        token: t,
                        cancel: e
                    }
                }
            }
            let e4 = {
                Continue: 100,
                SwitchingProtocols: 101,
                Processing: 102,
                EarlyHints: 103,
                Ok: 200,
                Created: 201,
                Accepted: 202,
                NonAuthoritativeInformation: 203,
                NoContent: 204,
                ResetContent: 205,
                PartialContent: 206,
                MultiStatus: 207,
                AlreadyReported: 208,
                ImUsed: 226,
                MultipleChoices: 300,
                MovedPermanently: 301,
                Found: 302,
                SeeOther: 303,
                NotModified: 304,
                UseProxy: 305,
                Unused: 306,
                TemporaryRedirect: 307,
                PermanentRedirect: 308,
                BadRequest: 400,
                Unauthorized: 401,
                PaymentRequired: 402,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                NotAcceptable: 406,
                ProxyAuthenticationRequired: 407,
                RequestTimeout: 408,
                Conflict: 409,
                Gone: 410,
                LengthRequired: 411,
                PreconditionFailed: 412,
                PayloadTooLarge: 413,
                UriTooLong: 414,
                UnsupportedMediaType: 415,
                RangeNotSatisfiable: 416,
                ExpectationFailed: 417,
                ImATeapot: 418,
                MisdirectedRequest: 421,
                UnprocessableEntity: 422,
                Locked: 423,
                FailedDependency: 424,
                TooEarly: 425,
                UpgradeRequired: 426,
                PreconditionRequired: 428,
                TooManyRequests: 429,
                RequestHeaderFieldsTooLarge: 431,
                UnavailableForLegalReasons: 451,
                InternalServerError: 500,
                NotImplemented: 501,
                BadGateway: 502,
                ServiceUnavailable: 503,
                GatewayTimeout: 504,
                HttpVersionNotSupported: 505,
                VariantAlsoNegotiates: 506,
                InsufficientStorage: 507,
                LoopDetected: 508,
                NotExtended: 510,
                NetworkAuthenticationRequired: 511
            };
            Object.entries(e4).forEach(([e, t]) => {
                e4[t] = e
            });
            let e8 = function e(t) {
                let r = new e1(t),
                    n = o(e1.prototype.request, r);
                return et.extend(n, e1.prototype, r, {
                    allOwnKeys: !0
                }), et.extend(n, r, null, {
                    allOwnKeys: !0
                }), n.create = function(r) {
                    return e(eG(t, r))
                }, n
            }(ex);
            e8.Axios = e1, e8.CanceledError = ek, e8.CancelToken = e2, e8.isCancel = e_, e8.VERSION = eZ, e8.toFormData = ec, e8.AxiosError = er, e8.Cancel = e8.CanceledError, e8.all = function(e) {
                return Promise.all(e)
            }, e8.spread = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }, e8.isAxiosError = function(e) {
                return et.isObject(e) && !0 === e.isAxiosError
            }, e8.mergeConfig = eG, e8.AxiosHeaders = eN, e8.formToJSON = e => eT(et.isHTMLForm(e) ? new FormData(e) : e), e8.HttpStatusCode = e4, e8.default = e8;
            var e6 = e8
        },
        9734: function(e, t, r) {
            "use strict";
            var n = r(7294),
                o = r(1688);
            let i = new WeakMap,
                a = {},
                s = {},
                u = () => {},
                l = u(),
                c = Object,
                f = e => e === l,
                p = e => "function" == typeof e,
                d = (e, t) => ({ ...e,
                    ...t
                }),
                h = "undefined",
                m = typeof window != h,
                b = typeof document != h,
                y = () => m && typeof window.requestAnimationFrame != h,
                v = (e, t) => {
                    let r = i.get(e);
                    return [() => e.get(t) || a, n => {
                        if (!f(t)) {
                            let o = e.get(t);
                            t in s || (s[t] = o), r[5](t, d(o, n), o || a)
                        }
                    }, r[6], () => !f(t) && t in s ? s[t] : e.get(t) || a]
                },
                g = new WeakMap,
                E = 0,
                w = e => {
                    let t, r;
                    let n = typeof e,
                        o = e && e.constructor,
                        i = o == Date;
                    if (c(e) !== e || i || o == RegExp) t = i ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = g.get(e)) return t;
                        if (t = ++E + "~", g.set(e, t), o == Array) {
                            for (r = 0, t = "@"; r < e.length; r++) t += w(e[r]) + ",";
                            g.set(e, t)
                        }
                        if (o == c) {
                            t = "#";
                            let n = c.keys(e).sort();
                            for (; !f(r = n.pop());) f(e[r]) || (t += r + ":" + w(e[r]) + ",");
                            g.set(e, t)
                        }
                    }
                    return t
                },
                O = !0,
                [S, T] = m && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [u, u],
                R = () => {
                    let e = b && document.visibilityState;
                    return f(e) || "hidden" !== e
                },
                x = e => (b && document.addEventListener("visibilitychange", e), S("focus", e), () => {
                    b && document.removeEventListener("visibilitychange", e), T("focus", e)
                }),
                C = e => {
                    let t = () => {
                            O = !0, e()
                        },
                        r = () => {
                            O = !1
                        };
                    return S("online", t), S("offline", r), () => {
                        T("online", t), T("offline", r)
                    }
                },
                A = {
                    initFocus: x,
                    initReconnect: C
                },
                P = !n.useId,
                D = !m || "Deno" in window,
                I = e => y() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                j = D ? n.useEffect : n.useLayoutEffect,
                N = "undefined" != typeof navigator && navigator.connection,
                L = !D && N && (["slow-2g", "2g"].includes(N.effectiveType) || N.saveData),
                _ = e => {
                    if (p(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? w(e) : "", t]
                },
                k = 0,
                U = () => ++k;
            var B = {
                __proto__: null,
                FOCUS_EVENT: 0,
                RECONNECT_EVENT: 1,
                MUTATE_EVENT: 2,
                ERROR_REVALIDATE_EVENT: 3
            };
            async function M(...e) {
                let [t, r, n, o] = e, a = d({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof o ? {
                    revalidate: o
                } : o || {}), s = a.populateCache, u = a.rollbackOnError, c = a.optimisticData, h = !1 !== a.revalidate, m = e => "function" == typeof u ? u(e) : !1 !== u, b = a.throwOnError;
                if (p(r)) {
                    let e = [],
                        n = t.keys();
                    for (let o = n.next(); !o.done; o = n.next()) {
                        let n = o.value;
                        !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n)
                    }
                    return Promise.all(e.map(y))
                }
                return y(r);
                async function y(r) {
                    let o;
                    let [a] = _(r);
                    if (!a) return;
                    let [u, d] = v(t, a), [y, g, E] = i.get(t), w = y[a], O = () => h && (delete E[a], w && w[0]) ? w[0](2).then(() => u().data) : u().data;
                    if (e.length < 3) return O();
                    let S = n,
                        T = U();
                    g[a] = [T, 0];
                    let R = !f(c),
                        x = u(),
                        C = x.data,
                        A = x._c,
                        P = f(A) ? C : A;
                    if (R && d({
                            data: c = p(c) ? c(P) : c,
                            _c: P
                        }), p(S)) try {
                        S = S(P)
                    } catch (e) {
                        o = e
                    }
                    if (S && p(S.then)) {
                        if (S = await S.catch(e => {
                                o = e
                            }), T !== g[a][0]) {
                            if (o) throw o;
                            return S
                        }
                        o && R && m(o) && (s = !0, d({
                            data: S = P,
                            _c: l
                        }))
                    }
                    s && !o && (p(s) && (S = s(S, P)), d({
                        data: S,
                        _c: l
                    })), g[a][1] = U();
                    let D = await O();
                    if (d({
                            _c: l
                        }), o) {
                        if (b) throw o;
                        return
                    }
                    return s ? D : S
                }
            }
            let F = (e, t) => {
                    for (let r in e) e[r][0] && e[r][0](t)
                },
                z = (e, t) => {
                    if (!i.has(e)) {
                        let r = d(A, t),
                            n = {},
                            o = M.bind(l, e),
                            a = u,
                            s = {},
                            c = (e, t) => {
                                let r = s[e] || [];
                                return s[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                            },
                            f = (t, r, n) => {
                                e.set(t, r);
                                let o = s[t];
                                if (o)
                                    for (let e of o) e(r, n)
                            },
                            p = () => {
                                if (!i.has(e) && (i.set(e, [n, {}, {}, {}, o, f, c]), !D)) {
                                    let t = r.initFocus(setTimeout.bind(l, F.bind(l, n, 0))),
                                        o = r.initReconnect(setTimeout.bind(l, F.bind(l, n, 1)));
                                    a = () => {
                                        t && t(), o && o(), i.delete(e)
                                    }
                                }
                            };
                        return p(), [e, o, p, a]
                    }
                    return [e, i.get(e)[4]]
                },
                H = (e, t, r, n, o) => {
                    let i = r.errorRetryCount,
                        a = o.retryCount,
                        s = ~~((Math.random() + .5) * (1 << (a < 8 ? a : 8))) * r.errorRetryInterval;
                    (f(i) || !(a > i)) && setTimeout(n, s, o)
                },
                V = (e, t) => w(e) == w(t),
                [q, W] = z(new Map),
                J = d({
                    onLoadingSlow: u,
                    onSuccess: u,
                    onError: u,
                    onErrorRetry: H,
                    onDiscarded: u,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: L ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: L ? 5e3 : 3e3,
                    compare: V,
                    isPaused: () => !1,
                    cache: q,
                    mutate: W,
                    fallback: {}
                }, {
                    isOnline: () => O,
                    isVisible: R
                }),
                $ = (e, t) => {
                    let r = d(e, t);
                    if (t) {
                        let {
                            use: n,
                            fallback: o
                        } = e, {
                            use: i,
                            fallback: a
                        } = t;
                        n && i && (r.use = n.concat(i)), o && a && (r.fallback = d(o, a))
                    }
                    return r
                },
                Y = (0, n.createContext)({}),
                G = e => {
                    let {
                        value: t
                    } = e, r = (0, n.useContext)(Y), o = p(t), i = (0, n.useMemo)(() => o ? t(r) : t, [o, r, t]), a = (0, n.useMemo)(() => o ? i : $(r, i), [o, r, i]), s = i && i.provider, u = (0, n.useRef)(l);
                    s && !u.current && (u.current = z(s(a.cache || q), i));
                    let c = u.current;
                    return c && (a.cache = c[0], a.mutate = c[1]), j(() => {
                        if (c) return c[2] && c[2](), c[3]
                    }, []), (0, n.createElement)(Y.Provider, d(e, {
                        value: a
                    }))
                },
                Z = m && window.__SWR_DEVTOOLS_USE__,
                K = Z ? window.__SWR_DEVTOOLS_USE__ : [],
                X = e => (t, r, n) => {
                    let o = r && ((...e) => {
                        let n = _(t)[0],
                            [, , , o] = i.get(q),
                            a = o[n];
                        return a ? (delete o[n], a) : r(...e)
                    });
                    return e(t, o, n)
                },
                Q = (K.concat(X), (e, t, r) => {
                    let n = t[e] || (t[e] = []);
                    return n.push(r), () => {
                        let e = n.indexOf(r);
                        e >= 0 && (n[e] = n[n.length - 1], n.pop())
                    }
                });
            Z && (window.__SWR_DEVTOOLS_REACT__ = n);
            let ee = {
                dedupe: !0
            };
            c.defineProperty(G, "defaultValue", {
                value: J
            })
        },
        4529: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ue: function() {
                    return l
                }
            });
            let n = e => {
                    let t;
                    let r = new Set,
                        n = (e, n) => {
                            let o = "function" == typeof e ? e(t) : e;
                            if (!Object.is(o, t)) {
                                let e = t;
                                t = (null != n ? n : "object" != typeof o) ? o : Object.assign({}, t, o), r.forEach(r => r(t, e))
                            }
                        },
                        o = () => t,
                        i = e => (r.add(e), () => r.delete(e)),
                        a = () => {
                            console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                        },
                        s = {
                            setState: n,
                            getState: o,
                            subscribe: i,
                            destroy: a
                        };
                    return t = e(n, o, s), s
                },
                o = e => e ? n(e) : n;
            var i = r(7294),
                a = r(2798);
            let {
                useSyncExternalStoreWithSelector: s
            } = a, u = e => {
                "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
                let t = "function" == typeof e ? o(e) : e,
                    r = (e, r) => (function(e, t = e.getState, r) {
                        let n = s(e.subscribe, e.getState, e.getServerState || e.getState, t, r);
                        return (0, i.useDebugValue)(n), n
                    })(t, e, r);
                return Object.assign(r, t), r
            }, l = e => e ? u(e) : u
        }
    }
]);