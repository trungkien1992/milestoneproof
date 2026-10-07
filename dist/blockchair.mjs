var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/bchaddrjs/dist/bchaddrjs-0.5.2.min.js
var require_bchaddrjs_0_5_2_min = __commonJS({
  "node_modules/bchaddrjs/dist/bchaddrjs-0.5.2.min.js"(exports, module) {
    !(function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.bchaddr = e() : t.bchaddr = e();
    })(exports, (function() {
      return (() => {
        var t = { 861: (t2, e2, r2) => {
          var n = r2(334), i = r2(707), o = r2(764).Buffer, s = { Legacy: "legacy", Bitpay: "bitpay", Cashaddr: "cashaddr" }, a = { Mainnet: "mainnet", Testnet: "testnet" }, u = {};
          function h(t3) {
            return p(t3).format;
          }
          function f(t3) {
            return p(t3).network;
          }
          function l(t3) {
            return p(t3).type;
          }
          u.P2PKH = "p2pkh", u.P2SH = "p2sh";
          var c = {};
          function p(t3) {
            try {
              return (function(t4) {
                try {
                  var e3 = n.decode(t4);
                  if (21 !== e3.length) throw new y();
                  var r3 = e3[0], i2 = Array.prototype.slice.call(e3, 1);
                  switch (r3) {
                    case c[s.Legacy][a.Mainnet][u.P2PKH]:
                      return { hash: i2, format: s.Legacy, network: a.Mainnet, type: u.P2PKH };
                    case c[s.Legacy][a.Mainnet][u.P2SH]:
                      return { hash: i2, format: s.Legacy, network: a.Mainnet, type: u.P2SH };
                    case c[s.Legacy][a.Testnet][u.P2PKH]:
                      return { hash: i2, format: s.Legacy, network: a.Testnet, type: u.P2PKH };
                    case c[s.Legacy][a.Testnet][u.P2SH]:
                      return { hash: i2, format: s.Legacy, network: a.Testnet, type: u.P2SH };
                    case c[s.Bitpay][a.Mainnet][u.P2PKH]:
                      return { hash: i2, format: s.Bitpay, network: a.Mainnet, type: u.P2PKH };
                    case c[s.Bitpay][a.Mainnet][u.P2SH]:
                      return { hash: i2, format: s.Bitpay, network: a.Mainnet, type: u.P2SH };
                  }
                } catch (t5) {
                }
                throw new y();
              })(t3);
            } catch (t4) {
            }
            try {
              return (function(t4) {
                if (-1 !== t4.indexOf(":")) try {
                  return d(t4);
                } catch (t5) {
                }
                else for (var e3 = ["bitcoincash", "bchtest", "bchreg"], r3 = 0; r3 < e3.length; ++r3) try {
                  return d(e3[r3] + ":" + t4);
                } catch (t5) {
                }
                throw new y();
              })(t3);
            } catch (t4) {
            }
            throw new y();
          }
          function d(t3) {
            try {
              var e3 = i.decode(t3), r3 = Array.prototype.slice.call(e3.hash, 0), n2 = "P2PKH" === e3.type ? u.P2PKH : u.P2SH;
              switch (e3.prefix) {
                case "bitcoincash":
                  return { hash: r3, format: s.Cashaddr, network: a.Mainnet, type: n2 };
                case "bchtest":
                case "bchreg":
                  return { hash: r3, format: s.Cashaddr, network: a.Testnet, type: n2 };
              }
            } catch (t4) {
            }
            throw new y();
          }
          function y() {
            var t3 = new Error();
            this.name = t3.name = "InvalidAddressError", this.message = t3.message = "Received an invalid Bitcoin Cash address as input.", this.stack = t3.stack;
          }
          c[s.Legacy] = {}, c[s.Legacy][a.Mainnet] = {}, c[s.Legacy][a.Mainnet][u.P2PKH] = 0, c[s.Legacy][a.Mainnet][u.P2SH] = 5, c[s.Legacy][a.Testnet] = {}, c[s.Legacy][a.Testnet][u.P2PKH] = 111, c[s.Legacy][a.Testnet][u.P2SH] = 196, c[s.Bitpay] = {}, c[s.Bitpay][a.Mainnet] = {}, c[s.Bitpay][a.Mainnet][u.P2PKH] = 28, c[s.Bitpay][a.Mainnet][u.P2SH] = 40, c[s.Bitpay][a.Testnet] = {}, c[s.Bitpay][a.Testnet][u.P2PKH] = 111, c[s.Bitpay][a.Testnet][u.P2SH] = 196, y.prototype = Object.create(Error.prototype), t2.exports = { Format: s, Network: a, Type: u, isValidAddress: function(t3) {
            try {
              return p(t3), true;
            } catch (t4) {
              return false;
            }
          }, detectAddressFormat: h, detectAddressNetwork: f, detectAddressType: l, toLegacyAddress: function(t3) {
            var e3 = p(t3);
            return e3.format === s.Legacy ? t3 : (function(t4) {
              var e4 = c[s.Legacy][t4.network][t4.type], r3 = o.alloc(1 + t4.hash.length);
              return r3[0] = e4, r3.set(t4.hash, 1), n.encode(r3);
            })(e3);
          }, toBitpayAddress: function(t3) {
            var e3 = p(t3);
            return e3.format === s.Bitpay ? t3 : (function(t4) {
              var e4 = c[s.Bitpay][t4.network][t4.type], r3 = o.alloc(1 + t4.hash.length);
              return r3[0] = e4, r3.set(t4.hash, 1), n.encode(r3);
            })(e3);
          }, toCashAddress: function(t3) {
            return e3 = p(t3), r3 = e3.network === a.Mainnet ? "bitcoincash" : "bchtest", n2 = e3.type === u.P2PKH ? "P2PKH" : "P2SH", o2 = new Uint8Array(e3.hash), i.encode(r3, n2, o2);
            var e3, r3, n2, o2;
          }, isLegacyAddress: function(t3) {
            return h(t3) === s.Legacy;
          }, isBitpayAddress: function(t3) {
            return h(t3) === s.Bitpay;
          }, isCashAddress: function(t3) {
            return h(t3) === s.Cashaddr;
          }, isMainnetAddress: function(t3) {
            return f(t3) === a.Mainnet;
          }, isTestnetAddress: function(t3) {
            return f(t3) === a.Testnet;
          }, isP2PKHAddress: function(t3) {
            return l(t3) === u.P2PKH;
          }, isP2SHAddress: function(t3) {
            return l(t3) === u.P2SH;
          }, InvalidAddressError: y };
        }, 162: (t2, e2, r2) => {
          "use strict";
          var n = r2(509).Buffer;
          t2.exports = function(t3) {
            if (t3.length >= 255) throw new TypeError("Alphabet too long");
            for (var e3 = new Uint8Array(256), r3 = 0; r3 < e3.length; r3++) e3[r3] = 255;
            for (var i = 0; i < t3.length; i++) {
              var o = t3.charAt(i), s = o.charCodeAt(0);
              if (255 !== e3[s]) throw new TypeError(o + " is ambiguous");
              e3[s] = i;
            }
            var a = t3.length, u = t3.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
            function l(t4) {
              if ("string" != typeof t4) throw new TypeError("Expected String");
              if (0 === t4.length) return n.alloc(0);
              var r4 = 0;
              if (" " !== t4[r4]) {
                for (var i2 = 0, o2 = 0; t4[r4] === u; ) i2++, r4++;
                for (var s2 = (t4.length - r4) * h + 1 >>> 0, f2 = new Uint8Array(s2); t4[r4]; ) {
                  var l2 = e3[t4.charCodeAt(r4)];
                  if (255 === l2) return;
                  for (var c = 0, p = s2 - 1; (0 !== l2 || c < o2) && -1 !== p; p--, c++) l2 += a * f2[p] >>> 0, f2[p] = l2 % 256 >>> 0, l2 = l2 / 256 >>> 0;
                  if (0 !== l2) throw new Error("Non-zero carry");
                  o2 = c, r4++;
                }
                if (" " !== t4[r4]) {
                  for (var d = s2 - o2; d !== s2 && 0 === f2[d]; ) d++;
                  var y = n.allocUnsafe(i2 + (s2 - d));
                  y.fill(0, 0, i2);
                  for (var g = i2; d !== s2; ) y[g++] = f2[d++];
                  return y;
                }
              }
            }
            return { encode: function(e4) {
              if ((Array.isArray(e4) || e4 instanceof Uint8Array) && (e4 = n.from(e4)), !n.isBuffer(e4)) throw new TypeError("Expected Buffer");
              if (0 === e4.length) return "";
              for (var r4 = 0, i2 = 0, o2 = 0, s2 = e4.length; o2 !== s2 && 0 === e4[o2]; ) o2++, r4++;
              for (var h2 = (s2 - o2) * f + 1 >>> 0, l2 = new Uint8Array(h2); o2 !== s2; ) {
                for (var c = e4[o2], p = 0, d = h2 - 1; (0 !== c || p < i2) && -1 !== d; d--, p++) c += 256 * l2[d] >>> 0, l2[d] = c % a >>> 0, c = c / a >>> 0;
                if (0 !== c) throw new Error("Non-zero carry");
                i2 = p, o2++;
              }
              for (var y = h2 - i2; y !== h2 && 0 === l2[y]; ) y++;
              for (var g = u.repeat(r4); y < h2; ++y) g += t3.charAt(l2[y]);
              return g;
            }, decodeUnsafe: l, decode: function(t4) {
              var e4 = l(t4);
              if (e4) return e4;
              throw new Error("Non-base" + a + " character");
            } };
          };
        }, 742: (t2, e2) => {
          "use strict";
          e2.byteLength = function(t3) {
            var e3 = u(t3), r3 = e3[0], n2 = e3[1];
            return 3 * (r3 + n2) / 4 - n2;
          }, e2.toByteArray = function(t3) {
            var e3, r3, o2 = u(t3), s2 = o2[0], a2 = o2[1], h2 = new i((function(t4, e4, r4) {
              return 3 * (e4 + r4) / 4 - r4;
            })(0, s2, a2)), f = 0, l = a2 > 0 ? s2 - 4 : s2;
            for (r3 = 0; r3 < l; r3 += 4) e3 = n[t3.charCodeAt(r3)] << 18 | n[t3.charCodeAt(r3 + 1)] << 12 | n[t3.charCodeAt(r3 + 2)] << 6 | n[t3.charCodeAt(r3 + 3)], h2[f++] = e3 >> 16 & 255, h2[f++] = e3 >> 8 & 255, h2[f++] = 255 & e3;
            return 2 === a2 && (e3 = n[t3.charCodeAt(r3)] << 2 | n[t3.charCodeAt(r3 + 1)] >> 4, h2[f++] = 255 & e3), 1 === a2 && (e3 = n[t3.charCodeAt(r3)] << 10 | n[t3.charCodeAt(r3 + 1)] << 4 | n[t3.charCodeAt(r3 + 2)] >> 2, h2[f++] = e3 >> 8 & 255, h2[f++] = 255 & e3), h2;
          }, e2.fromByteArray = function(t3) {
            for (var e3, n2 = t3.length, i2 = n2 % 3, o2 = [], s2 = 16383, a2 = 0, u2 = n2 - i2; a2 < u2; a2 += s2) o2.push(h(t3, a2, a2 + s2 > u2 ? u2 : a2 + s2));
            return 1 === i2 ? (e3 = t3[n2 - 1], o2.push(r2[e3 >> 2] + r2[e3 << 4 & 63] + "==")) : 2 === i2 && (e3 = (t3[n2 - 2] << 8) + t3[n2 - 1], o2.push(r2[e3 >> 10] + r2[e3 >> 4 & 63] + r2[e3 << 2 & 63] + "=")), o2.join("");
          };
          for (var r2 = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) r2[s] = o[s], n[o.charCodeAt(s)] = s;
          function u(t3) {
            var e3 = t3.length;
            if (e3 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r3 = t3.indexOf("=");
            return -1 === r3 && (r3 = e3), [r3, r3 === e3 ? 0 : 4 - r3 % 4];
          }
          function h(t3, e3, n2) {
            for (var i2, o2, s2 = [], a2 = e3; a2 < n2; a2 += 3) i2 = (t3[a2] << 16 & 16711680) + (t3[a2 + 1] << 8 & 65280) + (255 & t3[a2 + 2]), s2.push(r2[(o2 = i2) >> 18 & 63] + r2[o2 >> 12 & 63] + r2[o2 >> 6 & 63] + r2[63 & o2]);
            return s2.join("");
          }
          n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63;
        }, 736: (t2, e2, r2) => {
          var n;
          t2 = r2.nmd(t2);
          var i = (function(t3) {
            "use strict";
            var e3 = 1e7, r3 = 9007199254740992, n2 = f(r3), o = Math.log(r3);
            function s(t4, e4) {
              return void 0 === t4 ? s[0] : void 0 !== e4 ? 10 == +e4 ? V(t4) : H(t4, e4) : V(t4);
            }
            function a(t4, e4) {
              this.value = t4, this.sign = e4, this.isSmall = false;
            }
            function u(t4) {
              this.value = t4, this.sign = t4 < 0, this.isSmall = true;
            }
            function h(t4) {
              return -r3 < t4 && t4 < r3;
            }
            function f(t4) {
              return t4 < 1e7 ? [t4] : t4 < 1e14 ? [t4 % 1e7, Math.floor(t4 / 1e7)] : [t4 % 1e7, Math.floor(t4 / 1e7) % 1e7, Math.floor(t4 / 1e14)];
            }
            function l(t4) {
              c(t4);
              var r4 = t4.length;
              if (r4 < 4 && M(t4, n2) < 0) switch (r4) {
                case 0:
                  return 0;
                case 1:
                  return t4[0];
                case 2:
                  return t4[0] + t4[1] * e3;
                default:
                  return t4[0] + (t4[1] + t4[2] * e3) * e3;
              }
              return t4;
            }
            function c(t4) {
              for (var e4 = t4.length; 0 === t4[--e4]; ) ;
              t4.length = e4 + 1;
            }
            function p(t4) {
              for (var e4 = new Array(t4), r4 = -1; ++r4 < t4; ) e4[r4] = 0;
              return e4;
            }
            function d(t4) {
              return t4 > 0 ? Math.floor(t4) : Math.ceil(t4);
            }
            function y(t4, r4) {
              var n3, i2, o2 = t4.length, s2 = r4.length, a2 = new Array(o2), u2 = 0, h2 = e3;
              for (i2 = 0; i2 < s2; i2++) u2 = (n3 = t4[i2] + r4[i2] + u2) >= h2 ? 1 : 0, a2[i2] = n3 - u2 * h2;
              for (; i2 < o2; ) u2 = (n3 = t4[i2] + u2) === h2 ? 1 : 0, a2[i2++] = n3 - u2 * h2;
              return u2 > 0 && a2.push(u2), a2;
            }
            function g(t4, e4) {
              return t4.length >= e4.length ? y(t4, e4) : y(e4, t4);
            }
            function v(t4, r4) {
              var n3, i2, o2 = t4.length, s2 = new Array(o2), a2 = e3;
              for (i2 = 0; i2 < o2; i2++) n3 = t4[i2] - a2 + r4, r4 = Math.floor(n3 / a2), s2[i2] = n3 - r4 * a2, r4 += 1;
              for (; r4 > 0; ) s2[i2++] = r4 % a2, r4 = Math.floor(r4 / a2);
              return s2;
            }
            function b(t4, r4) {
              var n3, i2, o2 = t4.length, s2 = r4.length, a2 = new Array(o2), u2 = 0, h2 = e3;
              for (n3 = 0; n3 < s2; n3++) (i2 = t4[n3] - u2 - r4[n3]) < 0 ? (i2 += h2, u2 = 1) : u2 = 0, a2[n3] = i2;
              for (n3 = s2; n3 < o2; n3++) {
                if (!((i2 = t4[n3] - u2) < 0)) {
                  a2[n3++] = i2;
                  break;
                }
                i2 += h2, a2[n3] = i2;
              }
              for (; n3 < o2; n3++) a2[n3] = t4[n3];
              return c(a2), a2;
            }
            function w(t4, r4, n3) {
              var i2, o2, s2 = t4.length, h2 = new Array(s2), f2 = -r4, c2 = e3;
              for (i2 = 0; i2 < s2; i2++) o2 = t4[i2] + f2, f2 = Math.floor(o2 / c2), o2 %= c2, h2[i2] = o2 < 0 ? o2 + c2 : o2;
              return "number" == typeof (h2 = l(h2)) ? (n3 && (h2 = -h2), new u(h2)) : new a(h2, n3);
            }
            function _(t4, r4) {
              var n3, i2, o2, s2, a2 = t4.length, u2 = r4.length, h2 = p(a2 + u2), f2 = e3;
              for (o2 = 0; o2 < a2; ++o2) {
                s2 = t4[o2];
                for (var l2 = 0; l2 < u2; ++l2) n3 = s2 * r4[l2] + h2[o2 + l2], i2 = Math.floor(n3 / f2), h2[o2 + l2] = n3 - i2 * f2, h2[o2 + l2 + 1] += i2;
              }
              return c(h2), h2;
            }
            function m(t4, r4) {
              var n3, i2, o2 = t4.length, s2 = new Array(o2), a2 = e3, u2 = 0;
              for (i2 = 0; i2 < o2; i2++) n3 = t4[i2] * r4 + u2, u2 = Math.floor(n3 / a2), s2[i2] = n3 - u2 * a2;
              for (; u2 > 0; ) s2[i2++] = u2 % a2, u2 = Math.floor(u2 / a2);
              return s2;
            }
            function E(t4, e4) {
              for (var r4 = []; e4-- > 0; ) r4.push(0);
              return r4.concat(t4);
            }
            function S(t4, e4) {
              var r4 = Math.max(t4.length, e4.length);
              if (r4 <= 30) return _(t4, e4);
              r4 = Math.ceil(r4 / 2);
              var n3 = t4.slice(r4), i2 = t4.slice(0, r4), o2 = e4.slice(r4), s2 = e4.slice(0, r4), a2 = S(i2, s2), u2 = S(n3, o2), h2 = S(g(i2, n3), g(s2, o2)), f2 = g(g(a2, E(b(b(h2, a2), u2), r4)), E(u2, 2 * r4));
              return c(f2), f2;
            }
            function R(t4, r4, n3) {
              return new a(t4 < e3 ? m(r4, t4) : _(r4, f(t4)), n3);
            }
            function A(t4) {
              var r4, n3, i2, o2, s2 = t4.length, a2 = p(s2 + s2), u2 = e3;
              for (i2 = 0; i2 < s2; i2++) {
                n3 = 0 - (o2 = t4[i2]) * o2;
                for (var h2 = i2; h2 < s2; h2++) r4 = o2 * t4[h2] * 2 + a2[i2 + h2] + n3, n3 = Math.floor(r4 / u2), a2[i2 + h2] = r4 - n3 * u2;
                a2[i2 + s2] = n3;
              }
              return c(a2), a2;
            }
            function B(t4, e4) {
              var r4, n3, i2, o2, s2 = t4.length, a2 = p(s2);
              for (i2 = 0, r4 = s2 - 1; r4 >= 0; --r4) i2 = (o2 = 1e7 * i2 + t4[r4]) - (n3 = d(o2 / e4)) * e4, a2[r4] = 0 | n3;
              return [a2, 0 | i2];
            }
            function L(t4, r4) {
              var n3, i2, o2 = V(r4), h2 = t4.value, y2 = o2.value;
              if (0 === y2) throw new Error("Cannot divide by zero");
              if (t4.isSmall) return o2.isSmall ? [new u(d(h2 / y2)), new u(h2 % y2)] : [s[0], t4];
              if (o2.isSmall) {
                if (1 === y2) return [t4, s[0]];
                if (-1 == y2) return [t4.negate(), s[0]];
                var g2 = Math.abs(y2);
                if (g2 < e3) {
                  i2 = l((n3 = B(h2, g2))[0]);
                  var v2 = n3[1];
                  return t4.sign && (v2 = -v2), "number" == typeof i2 ? (t4.sign !== o2.sign && (i2 = -i2), [new u(i2), new u(v2)]) : [new a(i2, t4.sign !== o2.sign), new u(v2)];
                }
                y2 = f(g2);
              }
              var w2 = M(h2, y2);
              if (-1 === w2) return [s[0], t4];
              if (0 === w2) return [s[t4.sign === o2.sign ? 1 : -1], s[0]];
              i2 = (n3 = h2.length + y2.length <= 200 ? (function(t5, r5) {
                var n4, i3, o3, s2, a2, u2, h3, f2 = t5.length, c2 = r5.length, d2 = e3, y3 = p(r5.length), g3 = r5[c2 - 1], v3 = Math.ceil(d2 / (2 * g3)), b2 = m(t5, v3), w3 = m(r5, v3);
                for (b2.length <= f2 && b2.push(0), w3.push(0), g3 = w3[c2 - 1], i3 = f2 - c2; i3 >= 0; i3--) {
                  for (n4 = d2 - 1, b2[i3 + c2] !== g3 && (n4 = Math.floor((b2[i3 + c2] * d2 + b2[i3 + c2 - 1]) / g3)), o3 = 0, s2 = 0, u2 = w3.length, a2 = 0; a2 < u2; a2++) o3 += n4 * w3[a2], h3 = Math.floor(o3 / d2), s2 += b2[i3 + a2] - (o3 - h3 * d2), o3 = h3, s2 < 0 ? (b2[i3 + a2] = s2 + d2, s2 = -1) : (b2[i3 + a2] = s2, s2 = 0);
                  for (; 0 !== s2; ) {
                    for (n4 -= 1, o3 = 0, a2 = 0; a2 < u2; a2++) (o3 += b2[i3 + a2] - d2 + w3[a2]) < 0 ? (b2[i3 + a2] = o3 + d2, o3 = 0) : (b2[i3 + a2] = o3, o3 = 1);
                    s2 += o3;
                  }
                  y3[i3] = n4;
                }
                return b2 = B(b2, v3)[0], [l(y3), l(b2)];
              })(h2, y2) : (function(t5, r5) {
                for (var n4, i3, o3, s2, a2, u2 = t5.length, h3 = r5.length, f2 = [], p2 = [], d2 = e3; u2; ) if (p2.unshift(t5[--u2]), c(p2), M(p2, r5) < 0) f2.push(0);
                else {
                  o3 = p2[(i3 = p2.length) - 1] * d2 + p2[i3 - 2], s2 = r5[h3 - 1] * d2 + r5[h3 - 2], i3 > h3 && (o3 = (o3 + 1) * d2), n4 = Math.ceil(o3 / s2);
                  do {
                    if (M(a2 = m(r5, n4), p2) <= 0) break;
                    n4--;
                  } while (n4);
                  f2.push(n4), p2 = b(p2, a2);
                }
                return f2.reverse(), [l(f2), l(p2)];
              })(h2, y2))[0];
              var _2 = t4.sign !== o2.sign, E2 = n3[1], S2 = t4.sign;
              return "number" == typeof i2 ? (_2 && (i2 = -i2), i2 = new u(i2)) : i2 = new a(i2, _2), "number" == typeof E2 ? (S2 && (E2 = -E2), E2 = new u(E2)) : E2 = new a(E2, S2), [i2, E2];
            }
            function M(t4, e4) {
              if (t4.length !== e4.length) return t4.length > e4.length ? 1 : -1;
              for (var r4 = t4.length - 1; r4 >= 0; r4--) if (t4[r4] !== e4[r4]) return t4[r4] > e4[r4] ? 1 : -1;
              return 0;
            }
            function k(t4) {
              var e4 = t4.abs();
              return !e4.isUnit() && (!!(e4.equals(2) || e4.equals(3) || e4.equals(5)) || !(e4.isEven() || e4.isDivisibleBy(3) || e4.isDivisibleBy(5)) && (!!e4.lesser(49) || void 0));
            }
            function T(t4, e4) {
              for (var r4, n3, o2, a2 = t4.prev(), u2 = a2, h2 = 0; u2.isEven(); ) u2 = u2.divide(2), h2++;
              t: for (n3 = 0; n3 < e4.length; n3++) if (!t4.lesser(e4[n3]) && !(o2 = i(e4[n3]).modPow(u2, t4)).equals(s[1]) && !o2.equals(a2)) {
                for (r4 = h2 - 1; 0 != r4; r4--) {
                  if ((o2 = o2.square().mod(t4)).isUnit()) return false;
                  if (o2.equals(a2)) continue t;
                }
                return false;
              }
              return true;
            }
            a.prototype = Object.create(s.prototype), u.prototype = Object.create(s.prototype), a.prototype.add = function(t4) {
              var e4 = V(t4);
              if (this.sign !== e4.sign) return this.subtract(e4.negate());
              var r4 = this.value, n3 = e4.value;
              return e4.isSmall ? new a(v(r4, Math.abs(n3)), this.sign) : new a(g(r4, n3), this.sign);
            }, a.prototype.plus = a.prototype.add, u.prototype.add = function(t4) {
              var e4 = V(t4), r4 = this.value;
              if (r4 < 0 !== e4.sign) return this.subtract(e4.negate());
              var n3 = e4.value;
              if (e4.isSmall) {
                if (h(r4 + n3)) return new u(r4 + n3);
                n3 = f(Math.abs(n3));
              }
              return new a(v(n3, Math.abs(r4)), r4 < 0);
            }, u.prototype.plus = u.prototype.add, a.prototype.subtract = function(t4) {
              var e4 = V(t4);
              if (this.sign !== e4.sign) return this.add(e4.negate());
              var r4 = this.value, n3 = e4.value;
              return e4.isSmall ? w(r4, Math.abs(n3), this.sign) : (function(t5, e5, r5) {
                var n4;
                return M(t5, e5) >= 0 ? n4 = b(t5, e5) : (n4 = b(e5, t5), r5 = !r5), "number" == typeof (n4 = l(n4)) ? (r5 && (n4 = -n4), new u(n4)) : new a(n4, r5);
              })(r4, n3, this.sign);
            }, a.prototype.minus = a.prototype.subtract, u.prototype.subtract = function(t4) {
              var e4 = V(t4), r4 = this.value;
              if (r4 < 0 !== e4.sign) return this.add(e4.negate());
              var n3 = e4.value;
              return e4.isSmall ? new u(r4 - n3) : w(n3, Math.abs(r4), r4 >= 0);
            }, u.prototype.minus = u.prototype.subtract, a.prototype.negate = function() {
              return new a(this.value, !this.sign);
            }, u.prototype.negate = function() {
              var t4 = this.sign, e4 = new u(-this.value);
              return e4.sign = !t4, e4;
            }, a.prototype.abs = function() {
              return new a(this.value, false);
            }, u.prototype.abs = function() {
              return new u(Math.abs(this.value));
            }, a.prototype.multiply = function(t4) {
              var r4, n3, i2, o2 = V(t4), u2 = this.value, h2 = o2.value, l2 = this.sign !== o2.sign;
              if (o2.isSmall) {
                if (0 === h2) return s[0];
                if (1 === h2) return this;
                if (-1 === h2) return this.negate();
                if ((r4 = Math.abs(h2)) < e3) return new a(m(u2, r4), l2);
                h2 = f(r4);
              }
              return new a(-0.012 * (n3 = u2.length) - 0.012 * (i2 = h2.length) + 15e-6 * n3 * i2 > 0 ? S(u2, h2) : _(u2, h2), l2);
            }, a.prototype.times = a.prototype.multiply, u.prototype._multiplyBySmall = function(t4) {
              return h(t4.value * this.value) ? new u(t4.value * this.value) : R(Math.abs(t4.value), f(Math.abs(this.value)), this.sign !== t4.sign);
            }, a.prototype._multiplyBySmall = function(t4) {
              return 0 === t4.value ? s[0] : 1 === t4.value ? this : -1 === t4.value ? this.negate() : R(Math.abs(t4.value), this.value, this.sign !== t4.sign);
            }, u.prototype.multiply = function(t4) {
              return V(t4)._multiplyBySmall(this);
            }, u.prototype.times = u.prototype.multiply, a.prototype.square = function() {
              return new a(A(this.value), false);
            }, u.prototype.square = function() {
              var t4 = this.value * this.value;
              return h(t4) ? new u(t4) : new a(A(f(Math.abs(this.value))), false);
            }, a.prototype.divmod = function(t4) {
              var e4 = L(this, t4);
              return { quotient: e4[0], remainder: e4[1] };
            }, u.prototype.divmod = a.prototype.divmod, a.prototype.divide = function(t4) {
              return L(this, t4)[0];
            }, u.prototype.over = u.prototype.divide = a.prototype.over = a.prototype.divide, a.prototype.mod = function(t4) {
              return L(this, t4)[1];
            }, u.prototype.remainder = u.prototype.mod = a.prototype.remainder = a.prototype.mod, a.prototype.pow = function(t4) {
              var e4, r4, n3, i2 = V(t4), o2 = this.value, a2 = i2.value;
              if (0 === a2) return s[1];
              if (0 === o2) return s[0];
              if (1 === o2) return s[1];
              if (-1 === o2) return i2.isEven() ? s[1] : s[-1];
              if (i2.sign) return s[0];
              if (!i2.isSmall) throw new Error("The exponent " + i2.toString() + " is too large.");
              if (this.isSmall && h(e4 = Math.pow(o2, a2))) return new u(d(e4));
              for (r4 = this, n3 = s[1]; true & a2 && (n3 = n3.times(r4), --a2), 0 !== a2; ) a2 /= 2, r4 = r4.square();
              return n3;
            }, u.prototype.pow = a.prototype.pow, a.prototype.modPow = function(t4, e4) {
              if (t4 = V(t4), (e4 = V(e4)).isZero()) throw new Error("Cannot take modPow with modulus 0");
              for (var r4 = s[1], n3 = this.mod(e4); t4.isPositive(); ) {
                if (n3.isZero()) return s[0];
                t4.isOdd() && (r4 = r4.multiply(n3).mod(e4)), t4 = t4.divide(2), n3 = n3.square().mod(e4);
              }
              return r4;
            }, u.prototype.modPow = a.prototype.modPow, a.prototype.compareAbs = function(t4) {
              var e4 = V(t4), r4 = this.value, n3 = e4.value;
              return e4.isSmall ? 1 : M(r4, n3);
            }, u.prototype.compareAbs = function(t4) {
              var e4 = V(t4), r4 = Math.abs(this.value), n3 = e4.value;
              return e4.isSmall ? r4 === (n3 = Math.abs(n3)) ? 0 : r4 > n3 ? 1 : -1 : -1;
            }, a.prototype.compare = function(t4) {
              if (t4 === 1 / 0) return -1;
              if (t4 === -1 / 0) return 1;
              var e4 = V(t4), r4 = this.value, n3 = e4.value;
              return this.sign !== e4.sign ? e4.sign ? 1 : -1 : e4.isSmall ? this.sign ? -1 : 1 : M(r4, n3) * (this.sign ? -1 : 1);
            }, a.prototype.compareTo = a.prototype.compare, u.prototype.compare = function(t4) {
              if (t4 === 1 / 0) return -1;
              if (t4 === -1 / 0) return 1;
              var e4 = V(t4), r4 = this.value, n3 = e4.value;
              return e4.isSmall ? r4 == n3 ? 0 : r4 > n3 ? 1 : -1 : r4 < 0 !== e4.sign ? r4 < 0 ? -1 : 1 : r4 < 0 ? 1 : -1;
            }, u.prototype.compareTo = u.prototype.compare, a.prototype.equals = function(t4) {
              return 0 === this.compare(t4);
            }, u.prototype.eq = u.prototype.equals = a.prototype.eq = a.prototype.equals, a.prototype.notEquals = function(t4) {
              return 0 !== this.compare(t4);
            }, u.prototype.neq = u.prototype.notEquals = a.prototype.neq = a.prototype.notEquals, a.prototype.greater = function(t4) {
              return this.compare(t4) > 0;
            }, u.prototype.gt = u.prototype.greater = a.prototype.gt = a.prototype.greater, a.prototype.lesser = function(t4) {
              return this.compare(t4) < 0;
            }, u.prototype.lt = u.prototype.lesser = a.prototype.lt = a.prototype.lesser, a.prototype.greaterOrEquals = function(t4) {
              return this.compare(t4) >= 0;
            }, u.prototype.geq = u.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals, a.prototype.lesserOrEquals = function(t4) {
              return this.compare(t4) <= 0;
            }, u.prototype.leq = u.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals, a.prototype.isEven = function() {
              return 0 == (1 & this.value[0]);
            }, u.prototype.isEven = function() {
              return 0 == (1 & this.value);
            }, a.prototype.isOdd = function() {
              return 1 == (1 & this.value[0]);
            }, u.prototype.isOdd = function() {
              return 1 == (1 & this.value);
            }, a.prototype.isPositive = function() {
              return !this.sign;
            }, u.prototype.isPositive = function() {
              return this.value > 0;
            }, a.prototype.isNegative = function() {
              return this.sign;
            }, u.prototype.isNegative = function() {
              return this.value < 0;
            }, a.prototype.isUnit = function() {
              return false;
            }, u.prototype.isUnit = function() {
              return 1 === Math.abs(this.value);
            }, a.prototype.isZero = function() {
              return false;
            }, u.prototype.isZero = function() {
              return 0 === this.value;
            }, a.prototype.isDivisibleBy = function(t4) {
              var e4 = V(t4), r4 = e4.value;
              return 0 !== r4 && (1 === r4 || (2 === r4 ? this.isEven() : this.mod(e4).equals(s[0])));
            }, u.prototype.isDivisibleBy = a.prototype.isDivisibleBy, a.prototype.isPrime = function(e4) {
              var r4 = k(this);
              if (r4 !== t3) return r4;
              var n3 = this.abs(), o2 = n3.bitLength();
              if (o2 <= 64) return T(n3, [2, 325, 9375, 28178, 450775, 9780504, 1795265022]);
              for (var s2 = Math.log(2) * o2, a2 = Math.ceil(true === e4 ? 2 * Math.pow(s2, 2) : s2), u2 = [], h2 = 0; h2 < a2; h2++) u2.push(i(h2 + 2));
              return T(n3, u2);
            }, u.prototype.isPrime = a.prototype.isPrime, a.prototype.isProbablePrime = function(e4) {
              var r4 = k(this);
              if (r4 !== t3) return r4;
              for (var n3 = this.abs(), o2 = e4 === t3 ? 5 : e4, s2 = [], a2 = 0; a2 < o2; a2++) s2.push(i.randBetween(2, n3.minus(2)));
              return T(n3, s2);
            }, u.prototype.isProbablePrime = a.prototype.isProbablePrime, a.prototype.modInv = function(t4) {
              for (var e4, r4, n3, o2 = i.zero, s2 = i.one, a2 = V(t4), u2 = this.abs(); !u2.equals(i.zero); ) e4 = a2.divide(u2), r4 = o2, n3 = a2, o2 = s2, a2 = u2, s2 = r4.subtract(e4.multiply(s2)), u2 = n3.subtract(e4.multiply(u2));
              if (!a2.equals(1)) throw new Error(this.toString() + " and " + t4.toString() + " are not co-prime");
              return -1 === o2.compare(0) && (o2 = o2.add(t4)), this.isNegative() ? o2.negate() : o2;
            }, u.prototype.modInv = a.prototype.modInv, a.prototype.next = function() {
              var t4 = this.value;
              return this.sign ? w(t4, 1, this.sign) : new a(v(t4, 1), this.sign);
            }, u.prototype.next = function() {
              var t4 = this.value;
              return t4 + 1 < r3 ? new u(t4 + 1) : new a(n2, false);
            }, a.prototype.prev = function() {
              var t4 = this.value;
              return this.sign ? new a(v(t4, 1), true) : w(t4, 1, this.sign);
            }, u.prototype.prev = function() {
              var t4 = this.value;
              return t4 - 1 > -r3 ? new u(t4 - 1) : new a(n2, true);
            };
            for (var I = [1]; 2 * I[I.length - 1] <= e3; ) I.push(2 * I[I.length - 1]);
            var O = I.length, x = I[O - 1];
            function P(t4) {
              return ("number" == typeof t4 || "string" == typeof t4) && +Math.abs(t4) <= e3 || t4 instanceof a && t4.value.length <= 1;
            }
            function U(t4, e4, r4) {
              e4 = V(e4);
              for (var n3 = t4.isNegative(), o2 = e4.isNegative(), s2 = n3 ? t4.not() : t4, a2 = o2 ? e4.not() : e4, u2 = 0, h2 = 0, f2 = null, l2 = null, c2 = []; !s2.isZero() || !a2.isZero(); ) u2 = (f2 = L(s2, x))[1].toJSNumber(), n3 && (u2 = x - 1 - u2), h2 = (l2 = L(a2, x))[1].toJSNumber(), o2 && (h2 = x - 1 - h2), s2 = f2[0], a2 = l2[0], c2.push(r4(u2, h2));
              for (var p2 = 0 !== r4(n3 ? 1 : 0, o2 ? 1 : 0) ? i(-1) : i(0), d2 = c2.length - 1; d2 >= 0; d2 -= 1) p2 = p2.multiply(x).add(i(c2[d2]));
              return p2;
            }
            a.prototype.shiftLeft = function(t4) {
              if (!P(t4)) throw new Error(String(t4) + " is too large for shifting.");
              if ((t4 = +t4) < 0) return this.shiftRight(-t4);
              var e4 = this;
              if (e4.isZero()) return e4;
              for (; t4 >= O; ) e4 = e4.multiply(x), t4 -= O - 1;
              return e4.multiply(I[t4]);
            }, u.prototype.shiftLeft = a.prototype.shiftLeft, a.prototype.shiftRight = function(t4) {
              var e4;
              if (!P(t4)) throw new Error(String(t4) + " is too large for shifting.");
              if ((t4 = +t4) < 0) return this.shiftLeft(-t4);
              for (var r4 = this; t4 >= O; ) {
                if (r4.isZero() || r4.isNegative() && r4.isUnit()) return r4;
                r4 = (e4 = L(r4, x))[1].isNegative() ? e4[0].prev() : e4[0], t4 -= O - 1;
              }
              return (e4 = L(r4, I[t4]))[1].isNegative() ? e4[0].prev() : e4[0];
            }, u.prototype.shiftRight = a.prototype.shiftRight, a.prototype.not = function() {
              return this.negate().prev();
            }, u.prototype.not = a.prototype.not, a.prototype.and = function(t4) {
              return U(this, t4, (function(t5, e4) {
                return t5 & e4;
              }));
            }, u.prototype.and = a.prototype.and, a.prototype.or = function(t4) {
              return U(this, t4, (function(t5, e4) {
                return t5 | e4;
              }));
            }, u.prototype.or = a.prototype.or, a.prototype.xor = function(t4) {
              return U(this, t4, (function(t5, e4) {
                return t5 ^ e4;
              }));
            }, u.prototype.xor = a.prototype.xor;
            function C(t4) {
              var r4 = t4.value, n3 = "number" == typeof r4 ? 1073741824 | r4 : r4[0] + r4[1] * e3 | 1073758208;
              return n3 & -n3;
            }
            function N(t4, e4) {
              if (e4.compareTo(t4) <= 0) {
                var r4 = N(t4, e4.square(e4)), n3 = r4.p, o2 = r4.e, s2 = n3.multiply(e4);
                return s2.compareTo(t4) <= 0 ? { p: s2, e: 2 * o2 + 1 } : { p: n3, e: 2 * o2 };
              }
              return { p: i(1), e: 0 };
            }
            function j(t4, e4) {
              return t4 = V(t4), e4 = V(e4), t4.greater(e4) ? t4 : e4;
            }
            function D(t4, e4) {
              return t4 = V(t4), e4 = V(e4), t4.lesser(e4) ? t4 : e4;
            }
            function q(t4, e4) {
              if (t4 = V(t4).abs(), e4 = V(e4).abs(), t4.equals(e4)) return t4;
              if (t4.isZero()) return e4;
              if (e4.isZero()) return t4;
              for (var r4, n3, i2 = s[1]; t4.isEven() && e4.isEven(); ) r4 = Math.min(C(t4), C(e4)), t4 = t4.divide(r4), e4 = e4.divide(r4), i2 = i2.multiply(r4);
              for (; t4.isEven(); ) t4 = t4.divide(C(t4));
              do {
                for (; e4.isEven(); ) e4 = e4.divide(C(e4));
                t4.greater(e4) && (n3 = e4, e4 = t4, t4 = n3), e4 = e4.subtract(t4);
              } while (!e4.isZero());
              return i2.isUnit() ? t4 : t4.multiply(i2);
            }
            a.prototype.bitLength = function() {
              var t4 = this;
              return t4.compareTo(i(0)) < 0 && (t4 = t4.negate().subtract(i(1))), 0 === t4.compareTo(i(0)) ? i(0) : i(N(t4, i(2)).e).add(i(1));
            }, u.prototype.bitLength = a.prototype.bitLength;
            var H = function(t4, e4) {
              for (var r4 = t4.length, n3 = Math.abs(e4), i2 = 0; i2 < r4; i2++) if ("-" !== (f2 = t4[i2].toLowerCase()) && /[a-z0-9]/.test(f2)) {
                if (/[0-9]/.test(f2) && +f2 >= n3) {
                  if ("1" === f2 && 1 === n3) continue;
                  throw new Error(f2 + " is not a valid digit in base " + e4 + ".");
                }
                if (f2.charCodeAt(0) - 87 >= n3) throw new Error(f2 + " is not a valid digit in base " + e4 + ".");
              }
              if (2 <= e4 && e4 <= 36 && r4 <= o / Math.log(e4)) {
                var s2 = parseInt(t4, e4);
                if (isNaN(s2)) throw new Error(f2 + " is not a valid digit in base " + e4 + ".");
                return new u(parseInt(t4, e4));
              }
              e4 = V(e4);
              var a2 = [], h2 = "-" === t4[0];
              for (i2 = h2 ? 1 : 0; i2 < t4.length; i2++) {
                var f2, l2 = (f2 = t4[i2].toLowerCase()).charCodeAt(0);
                if (48 <= l2 && l2 <= 57) a2.push(V(f2));
                else if (97 <= l2 && l2 <= 122) a2.push(V(f2.charCodeAt(0) - 87));
                else {
                  if ("<" !== f2) throw new Error(f2 + " is not a valid character");
                  var c2 = i2;
                  do {
                    i2++;
                  } while (">" !== t4[i2]);
                  a2.push(V(t4.slice(c2 + 1, i2)));
                }
              }
              return F(a2, e4, h2);
            };
            function F(t4, e4, r4) {
              var n3, i2 = s[0], o2 = s[1];
              for (n3 = t4.length - 1; n3 >= 0; n3--) i2 = i2.add(t4[n3].times(o2)), o2 = o2.times(e4);
              return r4 ? i2.negate() : i2;
            }
            function W(t4) {
              return t4 <= 35 ? "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t4) : "<" + t4 + ">";
            }
            function z(t4, e4) {
              if ((e4 = i(e4)).isZero()) {
                if (t4.isZero()) return { value: [0], isNegative: false };
                throw new Error("Cannot convert nonzero numbers to base 0.");
              }
              if (e4.equals(-1)) {
                if (t4.isZero()) return { value: [0], isNegative: false };
                if (t4.isNegative()) return { value: [].concat.apply([], Array.apply(null, Array(-t4)).map(Array.prototype.valueOf, [1, 0])), isNegative: false };
                var r4 = Array.apply(null, Array(+t4 - 1)).map(Array.prototype.valueOf, [0, 1]);
                return r4.unshift([1]), { value: [].concat.apply([], r4), isNegative: false };
              }
              var n3 = false;
              if (t4.isNegative() && e4.isPositive() && (n3 = true, t4 = t4.abs()), e4.equals(1)) return t4.isZero() ? { value: [0], isNegative: false } : { value: Array.apply(null, Array(+t4)).map(Number.prototype.valueOf, 1), isNegative: n3 };
              for (var o2, s2 = [], a2 = t4; a2.isNegative() || a2.compareAbs(e4) >= 0; ) {
                o2 = a2.divmod(e4), a2 = o2.quotient;
                var u2 = o2.remainder;
                u2.isNegative() && (u2 = e4.minus(u2).abs(), a2 = a2.next()), s2.push(u2.toJSNumber());
              }
              return s2.push(a2.toJSNumber()), { value: s2.reverse(), isNegative: n3 };
            }
            function $(t4, e4) {
              var r4 = z(t4, e4);
              return (r4.isNegative ? "-" : "") + r4.value.map(W).join("");
            }
            function K(t4) {
              if (h(+t4)) {
                var e4 = +t4;
                if (e4 === d(e4)) return new u(e4);
                throw new Error("Invalid integer: " + t4);
              }
              var r4 = "-" === t4[0];
              r4 && (t4 = t4.slice(1));
              var n3 = t4.split(/e/i);
              if (n3.length > 2) throw new Error("Invalid integer: " + n3.join("e"));
              if (2 === n3.length) {
                var i2 = n3[1];
                if ("+" === i2[0] && (i2 = i2.slice(1)), (i2 = +i2) !== d(i2) || !h(i2)) throw new Error("Invalid integer: " + i2 + " is not a valid exponent.");
                var o2 = n3[0], s2 = o2.indexOf(".");
                if (s2 >= 0 && (i2 -= o2.length - s2 - 1, o2 = o2.slice(0, s2) + o2.slice(s2 + 1)), i2 < 0) throw new Error("Cannot include negative exponent part for integers");
                t4 = o2 += new Array(i2 + 1).join("0");
              }
              if (!/^([0-9][0-9]*)$/.test(t4)) throw new Error("Invalid integer: " + t4);
              for (var f2 = [], l2 = t4.length, p2 = l2 - 7; l2 > 0; ) f2.push(+t4.slice(p2, l2)), (p2 -= 7) < 0 && (p2 = 0), l2 -= 7;
              return c(f2), new a(f2, r4);
            }
            function V(t4) {
              return "number" == typeof t4 ? (function(t5) {
                if (h(t5)) {
                  if (t5 !== d(t5)) throw new Error(t5 + " is not an integer.");
                  return new u(t5);
                }
                return K(t5.toString());
              })(t4) : "string" == typeof t4 ? K(t4) : t4;
            }
            a.prototype.toArray = function(t4) {
              return z(this, t4);
            }, u.prototype.toArray = function(t4) {
              return z(this, t4);
            }, a.prototype.toString = function(e4) {
              if (e4 === t3 && (e4 = 10), 10 !== e4) return $(this, e4);
              for (var r4, n3 = this.value, i2 = n3.length, o2 = String(n3[--i2]); --i2 >= 0; ) r4 = String(n3[i2]), o2 += "0000000".slice(r4.length) + r4;
              return (this.sign ? "-" : "") + o2;
            }, u.prototype.toString = function(e4) {
              return e4 === t3 && (e4 = 10), 10 != e4 ? $(this, e4) : String(this.value);
            }, a.prototype.toJSON = u.prototype.toJSON = function() {
              return this.toString();
            }, a.prototype.valueOf = function() {
              return parseInt(this.toString(), 10);
            }, a.prototype.toJSNumber = a.prototype.valueOf, u.prototype.valueOf = function() {
              return this.value;
            }, u.prototype.toJSNumber = u.prototype.valueOf;
            for (var Z = 0; Z < 1e3; Z++) s[Z] = new u(Z), Z > 0 && (s[-Z] = new u(-Z));
            return s.one = s[1], s.zero = s[0], s.minusOne = s[-1], s.max = j, s.min = D, s.gcd = q, s.lcm = function(t4, e4) {
              return t4 = V(t4).abs(), e4 = V(e4).abs(), t4.divide(q(t4, e4)).multiply(e4);
            }, s.isInstance = function(t4) {
              return t4 instanceof a || t4 instanceof u;
            }, s.randBetween = function(t4, r4) {
              var n3 = D(t4 = V(t4), r4 = V(r4)), i2 = j(t4, r4).subtract(n3).add(1);
              if (i2.isSmall) return n3.add(Math.floor(Math.random() * i2));
              for (var o2 = [], s2 = true, h2 = i2.value.length - 1; h2 >= 0; h2--) {
                var f2 = s2 ? i2.value[h2] : e3, c2 = d(Math.random() * f2);
                o2.unshift(c2), c2 < f2 && (s2 = false);
              }
              return o2 = l(o2), n3.add("number" == typeof o2 ? new u(o2) : new a(o2, false));
            }, s.fromArray = function(t4, e4, r4) {
              return F(t4.map(V), V(e4 || 10), r4);
            }, s;
          })();
          t2.hasOwnProperty("exports") && (t2.exports = i), void 0 === (n = function() {
            return i;
          }.apply(e2, [])) || (t2.exports = n);
        }, 191: (t2, e2, r2) => {
          var n = r2(162);
          t2.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
        }, 310: (t2, e2, r2) => {
          "use strict";
          var n = r2(191), i = r2(509).Buffer;
          t2.exports = function(t3) {
            function e3(e4) {
              var r3 = e4.slice(0, -4), n2 = e4.slice(-4), i2 = t3(r3);
              if (!(n2[0] ^ i2[0] | n2[1] ^ i2[1] | n2[2] ^ i2[2] | n2[3] ^ i2[3])) return r3;
            }
            return { encode: function(e4) {
              var r3 = t3(e4);
              return n.encode(i.concat([e4, r3], e4.length + 4));
            }, decode: function(t4) {
              var r3 = e3(n.decode(t4));
              if (!r3) throw new Error("Invalid checksum");
              return r3;
            }, decodeUnsafe: function(t4) {
              var r3 = n.decodeUnsafe(t4);
              if (r3) return e3(r3);
            } };
          };
        }, 334: (t2, e2, r2) => {
          "use strict";
          var n = r2(482), i = r2(310);
          t2.exports = i((function(t3) {
            var e3 = n("sha256").update(t3).digest();
            return n("sha256").update(e3).digest();
          }));
        }, 764: (t2, e2, r2) => {
          "use strict";
          const n = r2(742), i = r2(645), o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
          e2.Buffer = u, e2.SlowBuffer = function(t3) {
            return +t3 != t3 && (t3 = 0), u.alloc(+t3);
          }, e2.INSPECT_MAX_BYTES = 50;
          const s = 2147483647;
          function a(t3) {
            if (t3 > s) throw new RangeError('The value "' + t3 + '" is invalid for option "size"');
            const e3 = new Uint8Array(t3);
            return Object.setPrototypeOf(e3, u.prototype), e3;
          }
          function u(t3, e3, r3) {
            if ("number" == typeof t3) {
              if ("string" == typeof e3) throw new TypeError('The "string" argument must be of type string. Received type number');
              return l(t3);
            }
            return h(t3, e3, r3);
          }
          function h(t3, e3, r3) {
            if ("string" == typeof t3) return (function(t4, e4) {
              if ("string" == typeof e4 && "" !== e4 || (e4 = "utf8"), !u.isEncoding(e4)) throw new TypeError("Unknown encoding: " + e4);
              const r4 = 0 | y(t4, e4);
              let n3 = a(r4);
              const i3 = n3.write(t4, e4);
              return i3 !== r4 && (n3 = n3.slice(0, i3)), n3;
            })(t3, e3);
            if (ArrayBuffer.isView(t3)) return (function(t4) {
              if (G(t4, Uint8Array)) {
                const e4 = new Uint8Array(t4);
                return p(e4.buffer, e4.byteOffset, e4.byteLength);
              }
              return c(t4);
            })(t3);
            if (null == t3) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t3);
            if (G(t3, ArrayBuffer) || t3 && G(t3.buffer, ArrayBuffer)) return p(t3, e3, r3);
            if ("undefined" != typeof SharedArrayBuffer && (G(t3, SharedArrayBuffer) || t3 && G(t3.buffer, SharedArrayBuffer))) return p(t3, e3, r3);
            if ("number" == typeof t3) throw new TypeError('The "value" argument must not be of type number. Received type number');
            const n2 = t3.valueOf && t3.valueOf();
            if (null != n2 && n2 !== t3) return u.from(n2, e3, r3);
            const i2 = (function(t4) {
              if (u.isBuffer(t4)) {
                const e4 = 0 | d(t4.length), r4 = a(e4);
                return 0 === r4.length || t4.copy(r4, 0, 0, e4), r4;
              }
              return void 0 !== t4.length ? "number" != typeof t4.length || Y(t4.length) ? a(0) : c(t4) : "Buffer" === t4.type && Array.isArray(t4.data) ? c(t4.data) : void 0;
            })(t3);
            if (i2) return i2;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t3[Symbol.toPrimitive]) return u.from(t3[Symbol.toPrimitive]("string"), e3, r3);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t3);
          }
          function f(t3) {
            if ("number" != typeof t3) throw new TypeError('"size" argument must be of type number');
            if (t3 < 0) throw new RangeError('The value "' + t3 + '" is invalid for option "size"');
          }
          function l(t3) {
            return f(t3), a(t3 < 0 ? 0 : 0 | d(t3));
          }
          function c(t3) {
            const e3 = t3.length < 0 ? 0 : 0 | d(t3.length), r3 = a(e3);
            for (let n2 = 0; n2 < e3; n2 += 1) r3[n2] = 255 & t3[n2];
            return r3;
          }
          function p(t3, e3, r3) {
            if (e3 < 0 || t3.byteLength < e3) throw new RangeError('"offset" is outside of buffer bounds');
            if (t3.byteLength < e3 + (r3 || 0)) throw new RangeError('"length" is outside of buffer bounds');
            let n2;
            return n2 = void 0 === e3 && void 0 === r3 ? new Uint8Array(t3) : void 0 === r3 ? new Uint8Array(t3, e3) : new Uint8Array(t3, e3, r3), Object.setPrototypeOf(n2, u.prototype), n2;
          }
          function d(t3) {
            if (t3 >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
            return 0 | t3;
          }
          function y(t3, e3) {
            if (u.isBuffer(t3)) return t3.length;
            if (ArrayBuffer.isView(t3) || G(t3, ArrayBuffer)) return t3.byteLength;
            if ("string" != typeof t3) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t3);
            const r3 = t3.length, n2 = arguments.length > 2 && true === arguments[2];
            if (!n2 && 0 === r3) return 0;
            let i2 = false;
            for (; ; ) switch (e3) {
              case "ascii":
              case "latin1":
              case "binary":
                return r3;
              case "utf8":
              case "utf-8":
                return K(t3).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r3;
              case "hex":
                return r3 >>> 1;
              case "base64":
                return V(t3).length;
              default:
                if (i2) return n2 ? -1 : K(t3).length;
                e3 = ("" + e3).toLowerCase(), i2 = true;
            }
          }
          function g(t3, e3, r3) {
            let n2 = false;
            if ((void 0 === e3 || e3 < 0) && (e3 = 0), e3 > this.length) return "";
            if ((void 0 === r3 || r3 > this.length) && (r3 = this.length), r3 <= 0) return "";
            if ((r3 >>>= 0) <= (e3 >>>= 0)) return "";
            for (t3 || (t3 = "utf8"); ; ) switch (t3) {
              case "hex":
                return T(this, e3, r3);
              case "utf8":
              case "utf-8":
                return B(this, e3, r3);
              case "ascii":
                return M(this, e3, r3);
              case "latin1":
              case "binary":
                return k(this, e3, r3);
              case "base64":
                return A(this, e3, r3);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return I(this, e3, r3);
              default:
                if (n2) throw new TypeError("Unknown encoding: " + t3);
                t3 = (t3 + "").toLowerCase(), n2 = true;
            }
          }
          function v(t3, e3, r3) {
            const n2 = t3[e3];
            t3[e3] = t3[r3], t3[r3] = n2;
          }
          function b(t3, e3, r3, n2, i2) {
            if (0 === t3.length) return -1;
            if ("string" == typeof r3 ? (n2 = r3, r3 = 0) : r3 > 2147483647 ? r3 = 2147483647 : r3 < -2147483648 && (r3 = -2147483648), Y(r3 = +r3) && (r3 = i2 ? 0 : t3.length - 1), r3 < 0 && (r3 = t3.length + r3), r3 >= t3.length) {
              if (i2) return -1;
              r3 = t3.length - 1;
            } else if (r3 < 0) {
              if (!i2) return -1;
              r3 = 0;
            }
            if ("string" == typeof e3 && (e3 = u.from(e3, n2)), u.isBuffer(e3)) return 0 === e3.length ? -1 : w(t3, e3, r3, n2, i2);
            if ("number" == typeof e3) return e3 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i2 ? Uint8Array.prototype.indexOf.call(t3, e3, r3) : Uint8Array.prototype.lastIndexOf.call(t3, e3, r3) : w(t3, [e3], r3, n2, i2);
            throw new TypeError("val must be string, number or Buffer");
          }
          function w(t3, e3, r3, n2, i2) {
            let o2, s2 = 1, a2 = t3.length, u2 = e3.length;
            if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
              if (t3.length < 2 || e3.length < 2) return -1;
              s2 = 2, a2 /= 2, u2 /= 2, r3 /= 2;
            }
            function h2(t4, e4) {
              return 1 === s2 ? t4[e4] : t4.readUInt16BE(e4 * s2);
            }
            if (i2) {
              let n3 = -1;
              for (o2 = r3; o2 < a2; o2++) if (h2(t3, o2) === h2(e3, -1 === n3 ? 0 : o2 - n3)) {
                if (-1 === n3 && (n3 = o2), o2 - n3 + 1 === u2) return n3 * s2;
              } else -1 !== n3 && (o2 -= o2 - n3), n3 = -1;
            } else for (r3 + u2 > a2 && (r3 = a2 - u2), o2 = r3; o2 >= 0; o2--) {
              let r4 = true;
              for (let n3 = 0; n3 < u2; n3++) if (h2(t3, o2 + n3) !== h2(e3, n3)) {
                r4 = false;
                break;
              }
              if (r4) return o2;
            }
            return -1;
          }
          function _(t3, e3, r3, n2) {
            r3 = Number(r3) || 0;
            const i2 = t3.length - r3;
            n2 ? (n2 = Number(n2)) > i2 && (n2 = i2) : n2 = i2;
            const o2 = e3.length;
            let s2;
            for (n2 > o2 / 2 && (n2 = o2 / 2), s2 = 0; s2 < n2; ++s2) {
              const n3 = parseInt(e3.substr(2 * s2, 2), 16);
              if (Y(n3)) return s2;
              t3[r3 + s2] = n3;
            }
            return s2;
          }
          function m(t3, e3, r3, n2) {
            return Z(K(e3, t3.length - r3), t3, r3, n2);
          }
          function E(t3, e3, r3, n2) {
            return Z((function(t4) {
              const e4 = [];
              for (let r4 = 0; r4 < t4.length; ++r4) e4.push(255 & t4.charCodeAt(r4));
              return e4;
            })(e3), t3, r3, n2);
          }
          function S(t3, e3, r3, n2) {
            return Z(V(e3), t3, r3, n2);
          }
          function R(t3, e3, r3, n2) {
            return Z((function(t4, e4) {
              let r4, n3, i2;
              const o2 = [];
              for (let s2 = 0; s2 < t4.length && !((e4 -= 2) < 0); ++s2) r4 = t4.charCodeAt(s2), n3 = r4 >> 8, i2 = r4 % 256, o2.push(i2), o2.push(n3);
              return o2;
            })(e3, t3.length - r3), t3, r3, n2);
          }
          function A(t3, e3, r3) {
            return 0 === e3 && r3 === t3.length ? n.fromByteArray(t3) : n.fromByteArray(t3.slice(e3, r3));
          }
          function B(t3, e3, r3) {
            r3 = Math.min(t3.length, r3);
            const n2 = [];
            let i2 = e3;
            for (; i2 < r3; ) {
              const e4 = t3[i2];
              let o2 = null, s2 = e4 > 239 ? 4 : e4 > 223 ? 3 : e4 > 191 ? 2 : 1;
              if (i2 + s2 <= r3) {
                let r4, n3, a2, u2;
                switch (s2) {
                  case 1:
                    e4 < 128 && (o2 = e4);
                    break;
                  case 2:
                    r4 = t3[i2 + 1], 128 == (192 & r4) && (u2 = (31 & e4) << 6 | 63 & r4, u2 > 127 && (o2 = u2));
                    break;
                  case 3:
                    r4 = t3[i2 + 1], n3 = t3[i2 + 2], 128 == (192 & r4) && 128 == (192 & n3) && (u2 = (15 & e4) << 12 | (63 & r4) << 6 | 63 & n3, u2 > 2047 && (u2 < 55296 || u2 > 57343) && (o2 = u2));
                    break;
                  case 4:
                    r4 = t3[i2 + 1], n3 = t3[i2 + 2], a2 = t3[i2 + 3], 128 == (192 & r4) && 128 == (192 & n3) && 128 == (192 & a2) && (u2 = (15 & e4) << 18 | (63 & r4) << 12 | (63 & n3) << 6 | 63 & a2, u2 > 65535 && u2 < 1114112 && (o2 = u2));
                }
              }
              null === o2 ? (o2 = 65533, s2 = 1) : o2 > 65535 && (o2 -= 65536, n2.push(o2 >>> 10 & 1023 | 55296), o2 = 56320 | 1023 & o2), n2.push(o2), i2 += s2;
            }
            return (function(t4) {
              const e4 = t4.length;
              if (e4 <= L) return String.fromCharCode.apply(String, t4);
              let r4 = "", n3 = 0;
              for (; n3 < e4; ) r4 += String.fromCharCode.apply(String, t4.slice(n3, n3 += L));
              return r4;
            })(n2);
          }
          e2.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = (function() {
            try {
              const t3 = new Uint8Array(1), e3 = { foo: function() {
                return 42;
              } };
              return Object.setPrototypeOf(e3, Uint8Array.prototype), Object.setPrototypeOf(t3, e3), 42 === t3.foo();
            } catch (t3) {
              return false;
            }
          })(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", { enumerable: true, get: function() {
            if (u.isBuffer(this)) return this.buffer;
          } }), Object.defineProperty(u.prototype, "offset", { enumerable: true, get: function() {
            if (u.isBuffer(this)) return this.byteOffset;
          } }), u.poolSize = 8192, u.from = function(t3, e3, r3) {
            return h(t3, e3, r3);
          }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t3, e3, r3) {
            return (function(t4, e4, r4) {
              return f(t4), t4 <= 0 ? a(t4) : void 0 !== e4 ? "string" == typeof r4 ? a(t4).fill(e4, r4) : a(t4).fill(e4) : a(t4);
            })(t3, e3, r3);
          }, u.allocUnsafe = function(t3) {
            return l(t3);
          }, u.allocUnsafeSlow = function(t3) {
            return l(t3);
          }, u.isBuffer = function(t3) {
            return null != t3 && true === t3._isBuffer && t3 !== u.prototype;
          }, u.compare = function(t3, e3) {
            if (G(t3, Uint8Array) && (t3 = u.from(t3, t3.offset, t3.byteLength)), G(e3, Uint8Array) && (e3 = u.from(e3, e3.offset, e3.byteLength)), !u.isBuffer(t3) || !u.isBuffer(e3)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (t3 === e3) return 0;
            let r3 = t3.length, n2 = e3.length;
            for (let i2 = 0, o2 = Math.min(r3, n2); i2 < o2; ++i2) if (t3[i2] !== e3[i2]) {
              r3 = t3[i2], n2 = e3[i2];
              break;
            }
            return r3 < n2 ? -1 : n2 < r3 ? 1 : 0;
          }, u.isEncoding = function(t3) {
            switch (String(t3).toLowerCase()) {
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
                return true;
              default:
                return false;
            }
          }, u.concat = function(t3, e3) {
            if (!Array.isArray(t3)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t3.length) return u.alloc(0);
            let r3;
            if (void 0 === e3) for (e3 = 0, r3 = 0; r3 < t3.length; ++r3) e3 += t3[r3].length;
            const n2 = u.allocUnsafe(e3);
            let i2 = 0;
            for (r3 = 0; r3 < t3.length; ++r3) {
              let e4 = t3[r3];
              if (G(e4, Uint8Array)) i2 + e4.length > n2.length ? (u.isBuffer(e4) || (e4 = u.from(e4)), e4.copy(n2, i2)) : Uint8Array.prototype.set.call(n2, e4, i2);
              else {
                if (!u.isBuffer(e4)) throw new TypeError('"list" argument must be an Array of Buffers');
                e4.copy(n2, i2);
              }
              i2 += e4.length;
            }
            return n2;
          }, u.byteLength = y, u.prototype._isBuffer = true, u.prototype.swap16 = function() {
            const t3 = this.length;
            if (t3 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let e3 = 0; e3 < t3; e3 += 2) v(this, e3, e3 + 1);
            return this;
          }, u.prototype.swap32 = function() {
            const t3 = this.length;
            if (t3 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let e3 = 0; e3 < t3; e3 += 4) v(this, e3, e3 + 3), v(this, e3 + 1, e3 + 2);
            return this;
          }, u.prototype.swap64 = function() {
            const t3 = this.length;
            if (t3 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let e3 = 0; e3 < t3; e3 += 8) v(this, e3, e3 + 7), v(this, e3 + 1, e3 + 6), v(this, e3 + 2, e3 + 5), v(this, e3 + 3, e3 + 4);
            return this;
          }, u.prototype.toString = function() {
            const t3 = this.length;
            return 0 === t3 ? "" : 0 === arguments.length ? B(this, 0, t3) : g.apply(this, arguments);
          }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t3) {
            if (!u.isBuffer(t3)) throw new TypeError("Argument must be a Buffer");
            return this === t3 || 0 === u.compare(this, t3);
          }, u.prototype.inspect = function() {
            let t3 = "";
            const r3 = e2.INSPECT_MAX_BYTES;
            return t3 = this.toString("hex", 0, r3).replace(/(.{2})/g, "$1 ").trim(), this.length > r3 && (t3 += " ... "), "<Buffer " + t3 + ">";
          }, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function(t3, e3, r3, n2, i2) {
            if (G(t3, Uint8Array) && (t3 = u.from(t3, t3.offset, t3.byteLength)), !u.isBuffer(t3)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t3);
            if (void 0 === e3 && (e3 = 0), void 0 === r3 && (r3 = t3 ? t3.length : 0), void 0 === n2 && (n2 = 0), void 0 === i2 && (i2 = this.length), e3 < 0 || r3 > t3.length || n2 < 0 || i2 > this.length) throw new RangeError("out of range index");
            if (n2 >= i2 && e3 >= r3) return 0;
            if (n2 >= i2) return -1;
            if (e3 >= r3) return 1;
            if (this === t3) return 0;
            let o2 = (i2 >>>= 0) - (n2 >>>= 0), s2 = (r3 >>>= 0) - (e3 >>>= 0);
            const a2 = Math.min(o2, s2), h2 = this.slice(n2, i2), f2 = t3.slice(e3, r3);
            for (let t4 = 0; t4 < a2; ++t4) if (h2[t4] !== f2[t4]) {
              o2 = h2[t4], s2 = f2[t4];
              break;
            }
            return o2 < s2 ? -1 : s2 < o2 ? 1 : 0;
          }, u.prototype.includes = function(t3, e3, r3) {
            return -1 !== this.indexOf(t3, e3, r3);
          }, u.prototype.indexOf = function(t3, e3, r3) {
            return b(this, t3, e3, r3, true);
          }, u.prototype.lastIndexOf = function(t3, e3, r3) {
            return b(this, t3, e3, r3, false);
          }, u.prototype.write = function(t3, e3, r3, n2) {
            if (void 0 === e3) n2 = "utf8", r3 = this.length, e3 = 0;
            else if (void 0 === r3 && "string" == typeof e3) n2 = e3, r3 = this.length, e3 = 0;
            else {
              if (!isFinite(e3)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              e3 >>>= 0, isFinite(r3) ? (r3 >>>= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r3, r3 = void 0);
            }
            const i2 = this.length - e3;
            if ((void 0 === r3 || r3 > i2) && (r3 = i2), t3.length > 0 && (r3 < 0 || e3 < 0) || e3 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n2 || (n2 = "utf8");
            let o2 = false;
            for (; ; ) switch (n2) {
              case "hex":
                return _(this, t3, e3, r3);
              case "utf8":
              case "utf-8":
                return m(this, t3, e3, r3);
              case "ascii":
              case "latin1":
              case "binary":
                return E(this, t3, e3, r3);
              case "base64":
                return S(this, t3, e3, r3);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return R(this, t3, e3, r3);
              default:
                if (o2) throw new TypeError("Unknown encoding: " + n2);
                n2 = ("" + n2).toLowerCase(), o2 = true;
            }
          }, u.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          };
          const L = 4096;
          function M(t3, e3, r3) {
            let n2 = "";
            r3 = Math.min(t3.length, r3);
            for (let i2 = e3; i2 < r3; ++i2) n2 += String.fromCharCode(127 & t3[i2]);
            return n2;
          }
          function k(t3, e3, r3) {
            let n2 = "";
            r3 = Math.min(t3.length, r3);
            for (let i2 = e3; i2 < r3; ++i2) n2 += String.fromCharCode(t3[i2]);
            return n2;
          }
          function T(t3, e3, r3) {
            const n2 = t3.length;
            (!e3 || e3 < 0) && (e3 = 0), (!r3 || r3 < 0 || r3 > n2) && (r3 = n2);
            let i2 = "";
            for (let n3 = e3; n3 < r3; ++n3) i2 += J[t3[n3]];
            return i2;
          }
          function I(t3, e3, r3) {
            const n2 = t3.slice(e3, r3);
            let i2 = "";
            for (let t4 = 0; t4 < n2.length - 1; t4 += 2) i2 += String.fromCharCode(n2[t4] + 256 * n2[t4 + 1]);
            return i2;
          }
          function O(t3, e3, r3) {
            if (t3 % 1 != 0 || t3 < 0) throw new RangeError("offset is not uint");
            if (t3 + e3 > r3) throw new RangeError("Trying to access beyond buffer length");
          }
          function x(t3, e3, r3, n2, i2, o2) {
            if (!u.isBuffer(t3)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e3 > i2 || e3 < o2) throw new RangeError('"value" argument is out of bounds');
            if (r3 + n2 > t3.length) throw new RangeError("Index out of range");
          }
          function P(t3, e3, r3, n2, i2) {
            F(e3, n2, i2, t3, r3, 7);
            let o2 = Number(e3 & BigInt(4294967295));
            t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2;
            let s2 = Number(e3 >> BigInt(32) & BigInt(4294967295));
            return t3[r3++] = s2, s2 >>= 8, t3[r3++] = s2, s2 >>= 8, t3[r3++] = s2, s2 >>= 8, t3[r3++] = s2, r3;
          }
          function U(t3, e3, r3, n2, i2) {
            F(e3, n2, i2, t3, r3, 7);
            let o2 = Number(e3 & BigInt(4294967295));
            t3[r3 + 7] = o2, o2 >>= 8, t3[r3 + 6] = o2, o2 >>= 8, t3[r3 + 5] = o2, o2 >>= 8, t3[r3 + 4] = o2;
            let s2 = Number(e3 >> BigInt(32) & BigInt(4294967295));
            return t3[r3 + 3] = s2, s2 >>= 8, t3[r3 + 2] = s2, s2 >>= 8, t3[r3 + 1] = s2, s2 >>= 8, t3[r3] = s2, r3 + 8;
          }
          function C(t3, e3, r3, n2, i2, o2) {
            if (r3 + n2 > t3.length) throw new RangeError("Index out of range");
            if (r3 < 0) throw new RangeError("Index out of range");
          }
          function N(t3, e3, r3, n2, o2) {
            return e3 = +e3, r3 >>>= 0, o2 || C(t3, 0, r3, 4), i.write(t3, e3, r3, n2, 23, 4), r3 + 4;
          }
          function j(t3, e3, r3, n2, o2) {
            return e3 = +e3, r3 >>>= 0, o2 || C(t3, 0, r3, 8), i.write(t3, e3, r3, n2, 52, 8), r3 + 8;
          }
          u.prototype.slice = function(t3, e3) {
            const r3 = this.length;
            (t3 = ~~t3) < 0 ? (t3 += r3) < 0 && (t3 = 0) : t3 > r3 && (t3 = r3), (e3 = void 0 === e3 ? r3 : ~~e3) < 0 ? (e3 += r3) < 0 && (e3 = 0) : e3 > r3 && (e3 = r3), e3 < t3 && (e3 = t3);
            const n2 = this.subarray(t3, e3);
            return Object.setPrototypeOf(n2, u.prototype), n2;
          }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t3, e3, r3) {
            t3 >>>= 0, e3 >>>= 0, r3 || O(t3, e3, this.length);
            let n2 = this[t3], i2 = 1, o2 = 0;
            for (; ++o2 < e3 && (i2 *= 256); ) n2 += this[t3 + o2] * i2;
            return n2;
          }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t3, e3, r3) {
            t3 >>>= 0, e3 >>>= 0, r3 || O(t3, e3, this.length);
            let n2 = this[t3 + --e3], i2 = 1;
            for (; e3 > 0 && (i2 *= 256); ) n2 += this[t3 + --e3] * i2;
            return n2;
          }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 1, this.length), this[t3];
          }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 2, this.length), this[t3] | this[t3 + 1] << 8;
          }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 2, this.length), this[t3] << 8 | this[t3 + 1];
          }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 4, this.length), (this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16) + 16777216 * this[t3 + 3];
          }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 4, this.length), 16777216 * this[t3] + (this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3]);
          }, u.prototype.readBigUInt64LE = X((function(t3) {
            W(t3 >>>= 0, "offset");
            const e3 = this[t3], r3 = this[t3 + 7];
            void 0 !== e3 && void 0 !== r3 || z(t3, this.length - 8);
            const n2 = e3 + 256 * this[++t3] + 65536 * this[++t3] + this[++t3] * 2 ** 24, i2 = this[++t3] + 256 * this[++t3] + 65536 * this[++t3] + r3 * 2 ** 24;
            return BigInt(n2) + (BigInt(i2) << BigInt(32));
          })), u.prototype.readBigUInt64BE = X((function(t3) {
            W(t3 >>>= 0, "offset");
            const e3 = this[t3], r3 = this[t3 + 7];
            void 0 !== e3 && void 0 !== r3 || z(t3, this.length - 8);
            const n2 = e3 * 2 ** 24 + 65536 * this[++t3] + 256 * this[++t3] + this[++t3], i2 = this[++t3] * 2 ** 24 + 65536 * this[++t3] + 256 * this[++t3] + r3;
            return (BigInt(n2) << BigInt(32)) + BigInt(i2);
          })), u.prototype.readIntLE = function(t3, e3, r3) {
            t3 >>>= 0, e3 >>>= 0, r3 || O(t3, e3, this.length);
            let n2 = this[t3], i2 = 1, o2 = 0;
            for (; ++o2 < e3 && (i2 *= 256); ) n2 += this[t3 + o2] * i2;
            return i2 *= 128, n2 >= i2 && (n2 -= Math.pow(2, 8 * e3)), n2;
          }, u.prototype.readIntBE = function(t3, e3, r3) {
            t3 >>>= 0, e3 >>>= 0, r3 || O(t3, e3, this.length);
            let n2 = e3, i2 = 1, o2 = this[t3 + --n2];
            for (; n2 > 0 && (i2 *= 256); ) o2 += this[t3 + --n2] * i2;
            return i2 *= 128, o2 >= i2 && (o2 -= Math.pow(2, 8 * e3)), o2;
          }, u.prototype.readInt8 = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 1, this.length), 128 & this[t3] ? -1 * (255 - this[t3] + 1) : this[t3];
          }, u.prototype.readInt16LE = function(t3, e3) {
            t3 >>>= 0, e3 || O(t3, 2, this.length);
            const r3 = this[t3] | this[t3 + 1] << 8;
            return 32768 & r3 ? 4294901760 | r3 : r3;
          }, u.prototype.readInt16BE = function(t3, e3) {
            t3 >>>= 0, e3 || O(t3, 2, this.length);
            const r3 = this[t3 + 1] | this[t3] << 8;
            return 32768 & r3 ? 4294901760 | r3 : r3;
          }, u.prototype.readInt32LE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 4, this.length), this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16 | this[t3 + 3] << 24;
          }, u.prototype.readInt32BE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 4, this.length), this[t3] << 24 | this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3];
          }, u.prototype.readBigInt64LE = X((function(t3) {
            W(t3 >>>= 0, "offset");
            const e3 = this[t3], r3 = this[t3 + 7];
            void 0 !== e3 && void 0 !== r3 || z(t3, this.length - 8);
            const n2 = this[t3 + 4] + 256 * this[t3 + 5] + 65536 * this[t3 + 6] + (r3 << 24);
            return (BigInt(n2) << BigInt(32)) + BigInt(e3 + 256 * this[++t3] + 65536 * this[++t3] + this[++t3] * 2 ** 24);
          })), u.prototype.readBigInt64BE = X((function(t3) {
            W(t3 >>>= 0, "offset");
            const e3 = this[t3], r3 = this[t3 + 7];
            void 0 !== e3 && void 0 !== r3 || z(t3, this.length - 8);
            const n2 = (e3 << 24) + 65536 * this[++t3] + 256 * this[++t3] + this[++t3];
            return (BigInt(n2) << BigInt(32)) + BigInt(this[++t3] * 2 ** 24 + 65536 * this[++t3] + 256 * this[++t3] + r3);
          })), u.prototype.readFloatLE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 4, this.length), i.read(this, t3, true, 23, 4);
          }, u.prototype.readFloatBE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 4, this.length), i.read(this, t3, false, 23, 4);
          }, u.prototype.readDoubleLE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 8, this.length), i.read(this, t3, true, 52, 8);
          }, u.prototype.readDoubleBE = function(t3, e3) {
            return t3 >>>= 0, e3 || O(t3, 8, this.length), i.read(this, t3, false, 52, 8);
          }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t3, e3, r3, n2) {
            t3 = +t3, e3 >>>= 0, r3 >>>= 0, n2 || x(this, t3, e3, r3, Math.pow(2, 8 * r3) - 1, 0);
            let i2 = 1, o2 = 0;
            for (this[e3] = 255 & t3; ++o2 < r3 && (i2 *= 256); ) this[e3 + o2] = t3 / i2 & 255;
            return e3 + r3;
          }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t3, e3, r3, n2) {
            t3 = +t3, e3 >>>= 0, r3 >>>= 0, n2 || x(this, t3, e3, r3, Math.pow(2, 8 * r3) - 1, 0);
            let i2 = r3 - 1, o2 = 1;
            for (this[e3 + i2] = 255 & t3; --i2 >= 0 && (o2 *= 256); ) this[e3 + i2] = t3 / o2 & 255;
            return e3 + r3;
          }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 1, 255, 0), this[e3] = 255 & t3, e3 + 1;
          }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 2, 65535, 0), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, e3 + 2;
          }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 2, 65535, 0), this[e3] = t3 >>> 8, this[e3 + 1] = 255 & t3, e3 + 2;
          }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 4, 4294967295, 0), this[e3 + 3] = t3 >>> 24, this[e3 + 2] = t3 >>> 16, this[e3 + 1] = t3 >>> 8, this[e3] = 255 & t3, e3 + 4;
          }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 4, 4294967295, 0), this[e3] = t3 >>> 24, this[e3 + 1] = t3 >>> 16, this[e3 + 2] = t3 >>> 8, this[e3 + 3] = 255 & t3, e3 + 4;
          }, u.prototype.writeBigUInt64LE = X((function(t3, e3 = 0) {
            return P(this, t3, e3, BigInt(0), BigInt("0xffffffffffffffff"));
          })), u.prototype.writeBigUInt64BE = X((function(t3, e3 = 0) {
            return U(this, t3, e3, BigInt(0), BigInt("0xffffffffffffffff"));
          })), u.prototype.writeIntLE = function(t3, e3, r3, n2) {
            if (t3 = +t3, e3 >>>= 0, !n2) {
              const n3 = Math.pow(2, 8 * r3 - 1);
              x(this, t3, e3, r3, n3 - 1, -n3);
            }
            let i2 = 0, o2 = 1, s2 = 0;
            for (this[e3] = 255 & t3; ++i2 < r3 && (o2 *= 256); ) t3 < 0 && 0 === s2 && 0 !== this[e3 + i2 - 1] && (s2 = 1), this[e3 + i2] = (t3 / o2 >> 0) - s2 & 255;
            return e3 + r3;
          }, u.prototype.writeIntBE = function(t3, e3, r3, n2) {
            if (t3 = +t3, e3 >>>= 0, !n2) {
              const n3 = Math.pow(2, 8 * r3 - 1);
              x(this, t3, e3, r3, n3 - 1, -n3);
            }
            let i2 = r3 - 1, o2 = 1, s2 = 0;
            for (this[e3 + i2] = 255 & t3; --i2 >= 0 && (o2 *= 256); ) t3 < 0 && 0 === s2 && 0 !== this[e3 + i2 + 1] && (s2 = 1), this[e3 + i2] = (t3 / o2 >> 0) - s2 & 255;
            return e3 + r3;
          }, u.prototype.writeInt8 = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 1, 127, -128), t3 < 0 && (t3 = 255 + t3 + 1), this[e3] = 255 & t3, e3 + 1;
          }, u.prototype.writeInt16LE = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 2, 32767, -32768), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, e3 + 2;
          }, u.prototype.writeInt16BE = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 2, 32767, -32768), this[e3] = t3 >>> 8, this[e3 + 1] = 255 & t3, e3 + 2;
          }, u.prototype.writeInt32LE = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 4, 2147483647, -2147483648), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, this[e3 + 2] = t3 >>> 16, this[e3 + 3] = t3 >>> 24, e3 + 4;
          }, u.prototype.writeInt32BE = function(t3, e3, r3) {
            return t3 = +t3, e3 >>>= 0, r3 || x(this, t3, e3, 4, 2147483647, -2147483648), t3 < 0 && (t3 = 4294967295 + t3 + 1), this[e3] = t3 >>> 24, this[e3 + 1] = t3 >>> 16, this[e3 + 2] = t3 >>> 8, this[e3 + 3] = 255 & t3, e3 + 4;
          }, u.prototype.writeBigInt64LE = X((function(t3, e3 = 0) {
            return P(this, t3, e3, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })), u.prototype.writeBigInt64BE = X((function(t3, e3 = 0) {
            return U(this, t3, e3, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })), u.prototype.writeFloatLE = function(t3, e3, r3) {
            return N(this, t3, e3, true, r3);
          }, u.prototype.writeFloatBE = function(t3, e3, r3) {
            return N(this, t3, e3, false, r3);
          }, u.prototype.writeDoubleLE = function(t3, e3, r3) {
            return j(this, t3, e3, true, r3);
          }, u.prototype.writeDoubleBE = function(t3, e3, r3) {
            return j(this, t3, e3, false, r3);
          }, u.prototype.copy = function(t3, e3, r3, n2) {
            if (!u.isBuffer(t3)) throw new TypeError("argument should be a Buffer");
            if (r3 || (r3 = 0), n2 || 0 === n2 || (n2 = this.length), e3 >= t3.length && (e3 = t3.length), e3 || (e3 = 0), n2 > 0 && n2 < r3 && (n2 = r3), n2 === r3) return 0;
            if (0 === t3.length || 0 === this.length) return 0;
            if (e3 < 0) throw new RangeError("targetStart out of bounds");
            if (r3 < 0 || r3 >= this.length) throw new RangeError("Index out of range");
            if (n2 < 0) throw new RangeError("sourceEnd out of bounds");
            n2 > this.length && (n2 = this.length), t3.length - e3 < n2 - r3 && (n2 = t3.length - e3 + r3);
            const i2 = n2 - r3;
            return this === t3 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e3, r3, n2) : Uint8Array.prototype.set.call(t3, this.subarray(r3, n2), e3), i2;
          }, u.prototype.fill = function(t3, e3, r3, n2) {
            if ("string" == typeof t3) {
              if ("string" == typeof e3 ? (n2 = e3, e3 = 0, r3 = this.length) : "string" == typeof r3 && (n2 = r3, r3 = this.length), void 0 !== n2 && "string" != typeof n2) throw new TypeError("encoding must be a string");
              if ("string" == typeof n2 && !u.isEncoding(n2)) throw new TypeError("Unknown encoding: " + n2);
              if (1 === t3.length) {
                const e4 = t3.charCodeAt(0);
                ("utf8" === n2 && e4 < 128 || "latin1" === n2) && (t3 = e4);
              }
            } else "number" == typeof t3 ? t3 &= 255 : "boolean" == typeof t3 && (t3 = Number(t3));
            if (e3 < 0 || this.length < e3 || this.length < r3) throw new RangeError("Out of range index");
            if (r3 <= e3) return this;
            let i2;
            if (e3 >>>= 0, r3 = void 0 === r3 ? this.length : r3 >>> 0, t3 || (t3 = 0), "number" == typeof t3) for (i2 = e3; i2 < r3; ++i2) this[i2] = t3;
            else {
              const o2 = u.isBuffer(t3) ? t3 : u.from(t3, n2), s2 = o2.length;
              if (0 === s2) throw new TypeError('The value "' + t3 + '" is invalid for argument "value"');
              for (i2 = 0; i2 < r3 - e3; ++i2) this[i2 + e3] = o2[i2 % s2];
            }
            return this;
          };
          const D = {};
          function q(t3, e3, r3) {
            D[t3] = class extends r3 {
              constructor() {
                super(), Object.defineProperty(this, "message", { value: e3.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t3}]`, this.stack, delete this.name;
              }
              get code() {
                return t3;
              }
              set code(t4) {
                Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: t4, writable: true });
              }
              toString() {
                return `${this.name} [${t3}]: ${this.message}`;
              }
            };
          }
          function H(t3) {
            let e3 = "", r3 = t3.length;
            const n2 = "-" === t3[0] ? 1 : 0;
            for (; r3 >= n2 + 4; r3 -= 3) e3 = `_${t3.slice(r3 - 3, r3)}${e3}`;
            return `${t3.slice(0, r3)}${e3}`;
          }
          function F(t3, e3, r3, n2, i2, o2) {
            if (t3 > r3 || t3 < e3) {
              const n3 = "bigint" == typeof e3 ? "n" : "";
              let i3;
              throw i3 = o2 > 3 ? 0 === e3 || e3 === BigInt(0) ? `>= 0${n3} and < 2${n3} ** ${8 * (o2 + 1)}${n3}` : `>= -(2${n3} ** ${8 * (o2 + 1) - 1}${n3}) and < 2 ** ${8 * (o2 + 1) - 1}${n3}` : `>= ${e3}${n3} and <= ${r3}${n3}`, new D.ERR_OUT_OF_RANGE("value", i3, t3);
            }
            !(function(t4, e4, r4) {
              W(e4, "offset"), void 0 !== t4[e4] && void 0 !== t4[e4 + r4] || z(e4, t4.length - (r4 + 1));
            })(n2, i2, o2);
          }
          function W(t3, e3) {
            if ("number" != typeof t3) throw new D.ERR_INVALID_ARG_TYPE(e3, "number", t3);
          }
          function z(t3, e3, r3) {
            if (Math.floor(t3) !== t3) throw W(t3, r3), new D.ERR_OUT_OF_RANGE(r3 || "offset", "an integer", t3);
            if (e3 < 0) throw new D.ERR_BUFFER_OUT_OF_BOUNDS();
            throw new D.ERR_OUT_OF_RANGE(r3 || "offset", `>= ${r3 ? 1 : 0} and <= ${e3}`, t3);
          }
          q("ERR_BUFFER_OUT_OF_BOUNDS", (function(t3) {
            return t3 ? `${t3} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
          }), RangeError), q("ERR_INVALID_ARG_TYPE", (function(t3, e3) {
            return `The "${t3}" argument must be of type number. Received type ${typeof e3}`;
          }), TypeError), q("ERR_OUT_OF_RANGE", (function(t3, e3, r3) {
            let n2 = `The value of "${t3}" is out of range.`, i2 = r3;
            return Number.isInteger(r3) && Math.abs(r3) > 2 ** 32 ? i2 = H(String(r3)) : "bigint" == typeof r3 && (i2 = String(r3), (r3 > BigInt(2) ** BigInt(32) || r3 < -(BigInt(2) ** BigInt(32))) && (i2 = H(i2)), i2 += "n"), n2 += ` It must be ${e3}. Received ${i2}`, n2;
          }), RangeError);
          const $ = /[^+/0-9A-Za-z-_]/g;
          function K(t3, e3) {
            let r3;
            e3 = e3 || 1 / 0;
            const n2 = t3.length;
            let i2 = null;
            const o2 = [];
            for (let s2 = 0; s2 < n2; ++s2) {
              if (r3 = t3.charCodeAt(s2), r3 > 55295 && r3 < 57344) {
                if (!i2) {
                  if (r3 > 56319) {
                    (e3 -= 3) > -1 && o2.push(239, 191, 189);
                    continue;
                  }
                  if (s2 + 1 === n2) {
                    (e3 -= 3) > -1 && o2.push(239, 191, 189);
                    continue;
                  }
                  i2 = r3;
                  continue;
                }
                if (r3 < 56320) {
                  (e3 -= 3) > -1 && o2.push(239, 191, 189), i2 = r3;
                  continue;
                }
                r3 = 65536 + (i2 - 55296 << 10 | r3 - 56320);
              } else i2 && (e3 -= 3) > -1 && o2.push(239, 191, 189);
              if (i2 = null, r3 < 128) {
                if ((e3 -= 1) < 0) break;
                o2.push(r3);
              } else if (r3 < 2048) {
                if ((e3 -= 2) < 0) break;
                o2.push(r3 >> 6 | 192, 63 & r3 | 128);
              } else if (r3 < 65536) {
                if ((e3 -= 3) < 0) break;
                o2.push(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128);
              } else {
                if (!(r3 < 1114112)) throw new Error("Invalid code point");
                if ((e3 -= 4) < 0) break;
                o2.push(r3 >> 18 | 240, r3 >> 12 & 63 | 128, r3 >> 6 & 63 | 128, 63 & r3 | 128);
              }
            }
            return o2;
          }
          function V(t3) {
            return n.toByteArray((function(t4) {
              if ((t4 = (t4 = t4.split("=")[0]).trim().replace($, "")).length < 2) return "";
              for (; t4.length % 4 != 0; ) t4 += "=";
              return t4;
            })(t3));
          }
          function Z(t3, e3, r3, n2) {
            let i2;
            for (i2 = 0; i2 < n2 && !(i2 + r3 >= e3.length || i2 >= t3.length); ++i2) e3[i2 + r3] = t3[i2];
            return i2;
          }
          function G(t3, e3) {
            return t3 instanceof e3 || null != t3 && null != t3.constructor && null != t3.constructor.name && t3.constructor.name === e3.name;
          }
          function Y(t3) {
            return t3 != t3;
          }
          const J = (function() {
            const t3 = "0123456789abcdef", e3 = new Array(256);
            for (let r3 = 0; r3 < 16; ++r3) {
              const n2 = 16 * r3;
              for (let i2 = 0; i2 < 16; ++i2) e3[n2 + i2] = t3[r3] + t3[i2];
            }
            return e3;
          })();
          function X(t3) {
            return "undefined" == typeof BigInt ? Q : t3;
          }
          function Q() {
            throw new Error("BigInt not supported");
          }
        }, 653: (t2, e2, r2) => {
          "use strict";
          var n = r2(935).validate, i = { q: 0, p: 1, z: 2, r: 3, y: 4, 9: 5, x: 6, 8: 7, g: 8, f: 9, 2: 10, t: 11, v: 12, d: 13, w: 14, 0: 15, s: 16, 3: 17, j: 18, n: 19, 5: 20, 4: 21, k: 22, h: 23, c: 24, e: 25, 6: 26, m: 27, u: 28, a: 29, 7: 30, l: 31 };
          t2.exports = { encode: function(t3) {
            n(t3 instanceof Uint8Array, "Invalid data: " + t3 + ".");
            for (var e3 = "", r3 = 0; r3 < t3.length; ++r3) {
              var i2 = t3[r3];
              n(0 <= i2 && i2 < 32, "Invalid value: " + i2 + "."), e3 += "qpzry9x8gf2tvdw0s3jn54khce6mua7l"[i2];
            }
            return e3;
          }, decode: function(t3) {
            n("string" == typeof t3, "Invalid base32-encoded string: " + t3 + ".");
            for (var e3 = new Uint8Array(t3.length), r3 = 0; r3 < t3.length; ++r3) {
              var o = t3[r3];
              n(o in i, "Invalid value: " + o + "."), e3[r3] = i[o];
            }
            return e3;
          } };
        }, 707: (t2, e2, r2) => {
          "use strict";
          var n = r2(653), i = r2(736), o = r2(249), s = r2(935), a = s.validate, u = s.ValidationError, h = ["bitcoincash", "bchtest", "bchreg"];
          function f(t3) {
            for (var e3 = new Uint8Array(t3.length), r3 = 0; r3 < t3.length; ++r3) e3[r3] = 31 & t3[r3].charCodeAt(0);
            return e3;
          }
          function l(t3, e3) {
            var r3 = new Uint8Array(t3.length + e3.length);
            return r3.set(t3), r3.set(e3, t3.length), r3;
          }
          function c(t3) {
            for (var e3 = [656907472481, 522768456162, 1044723512260, 748107326120, 130178868336], r3 = i(1), n2 = 0; n2 < t3.length; ++n2) {
              var o2 = t3[n2], s2 = r3.shiftRight(35);
              r3 = r3.and(34359738367).shiftLeft(5).xor(o2);
              for (var a2 = 0; a2 < e3.length; ++a2) s2.shiftRight(a2).and(1).equals(1) && (r3 = r3.xor(e3[a2]));
            }
            return r3.xor(1);
          }
          function p(t3) {
            return t3 === t3.toLowerCase() || t3 === t3.toUpperCase();
          }
          t2.exports = { encode: function(t3, e3, r3) {
            a("string" == typeof t3 && (function(t4) {
              return p(t4) && -1 !== h.indexOf(t4.toLowerCase());
            })(t3), "Invalid prefix: " + t3 + "."), a("string" == typeof e3, "Invalid type: " + e3 + "."), a(r3 instanceof Uint8Array, "Invalid hash: " + r3 + ".");
            var i2, s2 = l(f(t3), new Uint8Array(1)), d = (function(t4) {
              switch (t4) {
                case "P2PKH":
                  return 0;
                case "P2SH":
                  return 8;
                default:
                  throw new u("Invalid type: " + t4 + ".");
              }
            })(e3) + (function(t4) {
              switch (8 * t4.length) {
                case 160:
                  return 0;
                case 192:
                  return 1;
                case 224:
                  return 2;
                case 256:
                  return 3;
                case 320:
                  return 4;
                case 384:
                  return 5;
                case 448:
                  return 6;
                case 512:
                  return 7;
                default:
                  throw new u("Invalid hash size: " + t4.length + ".");
              }
            })(r3), y = (i2 = l(new Uint8Array([d]), r3), o(i2, 8, 5)), g = l(l(s2, y), new Uint8Array(8)), v = l(y, (function(t4) {
              for (var e4 = new Uint8Array(8), r4 = 0; r4 < 8; ++r4) e4[7 - r4] = t4.and(31).toJSNumber(), t4 = t4.shiftRight(5);
              return e4;
            })(c(g)));
            return t3 + ":" + n.encode(v);
          }, decode: function(t3) {
            a("string" == typeof t3 && p(t3), "Invalid address: " + t3 + ".");
            var e3 = t3.toLowerCase().split(":");
            a(2 === e3.length, "Missing prefix: " + t3 + ".");
            var r3 = e3[0], i2 = n.decode(e3[1]);
            a((function(t4, e4) {
              var r4 = l(f(t4), new Uint8Array(1));
              return c(l(r4, e4)).equals(0);
            })(r3, i2), "Invalid checksum: " + t3 + ".");
            var s2, h2 = (s2 = i2.subarray(0, -8), o(s2, 5, 8, true)), d = h2[0], y = h2.subarray(1);
            return a((function(t4) {
              switch (7 & t4) {
                case 0:
                  return 160;
                case 1:
                  return 192;
                case 2:
                  return 224;
                case 3:
                  return 256;
                case 4:
                  return 320;
                case 5:
                  return 384;
                case 6:
                  return 448;
                case 7:
                  return 512;
              }
            })(d) === 8 * y.length, "Invalid hash size: " + t3 + "."), { prefix: r3, type: (function(t4) {
              switch (120 & t4) {
                case 0:
                  return "P2PKH";
                case 8:
                  return "P2SH";
                default:
                  throw new u("Invalid address type in version byte: " + t4 + ".");
              }
            })(d), hash: y };
          }, ValidationError: u };
        }, 249: (t2, e2, r2) => {
          "use strict";
          var n = r2(935).validate;
          t2.exports = function(t3, e3, r3, i) {
            for (var o = i ? Math.floor(t3.length * e3 / r3) : Math.ceil(t3.length * e3 / r3), s = (1 << r3) - 1, a = new Uint8Array(o), u = 0, h = 0, f = 0, l = 0; l < t3.length; ++l) {
              var c = t3[l];
              for (n(0 <= c && c >> e3 == 0, "Invalid value: " + c + "."), h = h << e3 | c, f += e3; f >= r3; ) f -= r3, a[u] = h >> f & s, ++u;
            }
            return i ? n(f < e3 && 0 == (h << r3 - f & s), "Input cannot be converted to " + r3 + " bits without padding, but strict mode was used.") : f > 0 && (a[u] = h << r3 - f & s, ++u), a;
          };
        }, 935: (t2) => {
          "use strict";
          function e2(t3) {
            var e3 = new Error();
            this.name = e3.name = "ValidationError", this.message = e3.message = t3, this.stack = e3.stack;
          }
          e2.prototype = Object.create(Error.prototype), t2.exports = { ValidationError: e2, validate: function(t3, r2) {
            if (!t3) throw new e2(r2);
          } };
        }, 27: (t2, e2, r2) => {
          var n = r2(509).Buffer, i = r2(830).Transform, o = r2(553).s;
          function s(t3) {
            i.call(this), this.hashMode = "string" == typeof t3, this.hashMode ? this[t3] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
          }
          r2(717)(s, i), s.prototype.update = function(t3, e3, r3) {
            "string" == typeof t3 && (t3 = n.from(t3, e3));
            var i2 = this._update(t3);
            return this.hashMode ? this : (r3 && (i2 = this._toString(i2, r3)), i2);
          }, s.prototype.setAutoPadding = function() {
          }, s.prototype.getAuthTag = function() {
            throw new Error("trying to get auth tag in unsupported state");
          }, s.prototype.setAuthTag = function() {
            throw new Error("trying to set auth tag in unsupported state");
          }, s.prototype.setAAD = function() {
            throw new Error("trying to set aad in unsupported state");
          }, s.prototype._transform = function(t3, e3, r3) {
            var n2;
            try {
              this.hashMode ? this._update(t3) : this.push(this._update(t3));
            } catch (t4) {
              n2 = t4;
            } finally {
              r3(n2);
            }
          }, s.prototype._flush = function(t3) {
            var e3;
            try {
              this.push(this.__final());
            } catch (t4) {
              e3 = t4;
            }
            t3(e3);
          }, s.prototype._finalOrDigest = function(t3) {
            var e3 = this.__final() || n.alloc(0);
            return t3 && (e3 = this._toString(e3, t3, true)), e3;
          }, s.prototype._toString = function(t3, e3, r3) {
            if (this._decoder || (this._decoder = new o(e3), this._encoding = e3), this._encoding !== e3) throw new Error("can't switch encodings");
            var n2 = this._decoder.write(t3);
            return r3 && (n2 += this._decoder.end()), n2;
          }, t2.exports = s;
        }, 482: (t2, e2, r2) => {
          "use strict";
          var n = r2(717), i = r2(318), o = r2(785), s = r2(72), a = r2(27);
          function u(t3) {
            a.call(this, "digest"), this._hash = t3;
          }
          n(u, a), u.prototype._update = function(t3) {
            this._hash.update(t3);
          }, u.prototype._final = function() {
            return this._hash.digest();
          }, t2.exports = function(t3) {
            return "md5" === (t3 = t3.toLowerCase()) ? new i() : "rmd160" === t3 || "ripemd160" === t3 ? new o() : new u(s(t3));
          };
        }, 187: (t2) => {
          "use strict";
          var e2, r2 = "object" == typeof Reflect ? Reflect : null, n = r2 && "function" == typeof r2.apply ? r2.apply : function(t3, e3, r3) {
            return Function.prototype.apply.call(t3, e3, r3);
          };
          e2 = r2 && "function" == typeof r2.ownKeys ? r2.ownKeys : Object.getOwnPropertySymbols ? function(t3) {
            return Object.getOwnPropertyNames(t3).concat(Object.getOwnPropertySymbols(t3));
          } : function(t3) {
            return Object.getOwnPropertyNames(t3);
          };
          var i = Number.isNaN || function(t3) {
            return t3 != t3;
          };
          function o() {
            o.init.call(this);
          }
          t2.exports = o, t2.exports.once = function(t3, e3) {
            return new Promise((function(r3, n2) {
              function i2() {
                void 0 !== o2 && t3.removeListener("error", o2), r3([].slice.call(arguments));
              }
              var o2;
              "error" !== e3 && (o2 = function(r4) {
                t3.removeListener(e3, i2), n2(r4);
              }, t3.once("error", o2)), t3.once(e3, i2);
            }));
          }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
          var s = 10;
          function a(t3) {
            if ("function" != typeof t3) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t3);
          }
          function u(t3) {
            return void 0 === t3._maxListeners ? o.defaultMaxListeners : t3._maxListeners;
          }
          function h(t3, e3, r3, n2) {
            var i2, o2, s2, h2;
            if (a(r3), void 0 === (o2 = t3._events) ? (o2 = t3._events = /* @__PURE__ */ Object.create(null), t3._eventsCount = 0) : (void 0 !== o2.newListener && (t3.emit("newListener", e3, r3.listener ? r3.listener : r3), o2 = t3._events), s2 = o2[e3]), void 0 === s2) s2 = o2[e3] = r3, ++t3._eventsCount;
            else if ("function" == typeof s2 ? s2 = o2[e3] = n2 ? [r3, s2] : [s2, r3] : n2 ? s2.unshift(r3) : s2.push(r3), (i2 = u(t3)) > 0 && s2.length > i2 && !s2.warned) {
              s2.warned = true;
              var f2 = new Error("Possible EventEmitter memory leak detected. " + s2.length + " " + String(e3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              f2.name = "MaxListenersExceededWarning", f2.emitter = t3, f2.type = e3, f2.count = s2.length, h2 = f2, console && console.warn && console.warn(h2);
            }
            return t3;
          }
          function f() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function l(t3, e3, r3) {
            var n2 = { fired: false, wrapFn: void 0, target: t3, type: e3, listener: r3 }, i2 = f.bind(n2);
            return i2.listener = r3, n2.wrapFn = i2, i2;
          }
          function c(t3, e3, r3) {
            var n2 = t3._events;
            if (void 0 === n2) return [];
            var i2 = n2[e3];
            return void 0 === i2 ? [] : "function" == typeof i2 ? r3 ? [i2.listener || i2] : [i2] : r3 ? (function(t4) {
              for (var e4 = new Array(t4.length), r4 = 0; r4 < e4.length; ++r4) e4[r4] = t4[r4].listener || t4[r4];
              return e4;
            })(i2) : d(i2, i2.length);
          }
          function p(t3) {
            var e3 = this._events;
            if (void 0 !== e3) {
              var r3 = e3[t3];
              if ("function" == typeof r3) return 1;
              if (void 0 !== r3) return r3.length;
            }
            return 0;
          }
          function d(t3, e3) {
            for (var r3 = new Array(e3), n2 = 0; n2 < e3; ++n2) r3[n2] = t3[n2];
            return r3;
          }
          Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
            return s;
          }, set: function(t3) {
            if ("number" != typeof t3 || t3 < 0 || i(t3)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t3 + ".");
            s = t3;
          } }), o.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, o.prototype.setMaxListeners = function(t3) {
            if ("number" != typeof t3 || t3 < 0 || i(t3)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t3 + ".");
            return this._maxListeners = t3, this;
          }, o.prototype.getMaxListeners = function() {
            return u(this);
          }, o.prototype.emit = function(t3) {
            for (var e3 = [], r3 = 1; r3 < arguments.length; r3++) e3.push(arguments[r3]);
            var i2 = "error" === t3, o2 = this._events;
            if (void 0 !== o2) i2 = i2 && void 0 === o2.error;
            else if (!i2) return false;
            if (i2) {
              var s2;
              if (e3.length > 0 && (s2 = e3[0]), s2 instanceof Error) throw s2;
              var a2 = new Error("Unhandled error." + (s2 ? " (" + s2.message + ")" : ""));
              throw a2.context = s2, a2;
            }
            var u2 = o2[t3];
            if (void 0 === u2) return false;
            if ("function" == typeof u2) n(u2, this, e3);
            else {
              var h2 = u2.length, f2 = d(u2, h2);
              for (r3 = 0; r3 < h2; ++r3) n(f2[r3], this, e3);
            }
            return true;
          }, o.prototype.addListener = function(t3, e3) {
            return h(this, t3, e3, false);
          }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(t3, e3) {
            return h(this, t3, e3, true);
          }, o.prototype.once = function(t3, e3) {
            return a(e3), this.on(t3, l(this, t3, e3)), this;
          }, o.prototype.prependOnceListener = function(t3, e3) {
            return a(e3), this.prependListener(t3, l(this, t3, e3)), this;
          }, o.prototype.removeListener = function(t3, e3) {
            var r3, n2, i2, o2, s2;
            if (a(e3), void 0 === (n2 = this._events)) return this;
            if (void 0 === (r3 = n2[t3])) return this;
            if (r3 === e3 || r3.listener === e3) 0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete n2[t3], n2.removeListener && this.emit("removeListener", t3, r3.listener || e3));
            else if ("function" != typeof r3) {
              for (i2 = -1, o2 = r3.length - 1; o2 >= 0; o2--) if (r3[o2] === e3 || r3[o2].listener === e3) {
                s2 = r3[o2].listener, i2 = o2;
                break;
              }
              if (i2 < 0) return this;
              0 === i2 ? r3.shift() : (function(t4, e4) {
                for (; e4 + 1 < t4.length; e4++) t4[e4] = t4[e4 + 1];
                t4.pop();
              })(r3, i2), 1 === r3.length && (n2[t3] = r3[0]), void 0 !== n2.removeListener && this.emit("removeListener", t3, s2 || e3);
            }
            return this;
          }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(t3) {
            var e3, r3, n2;
            if (void 0 === (r3 = this._events)) return this;
            if (void 0 === r3.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== r3[t3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete r3[t3]), this;
            if (0 === arguments.length) {
              var i2, o2 = Object.keys(r3);
              for (n2 = 0; n2 < o2.length; ++n2) "removeListener" !== (i2 = o2[n2]) && this.removeAllListeners(i2);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if ("function" == typeof (e3 = r3[t3])) this.removeListener(t3, e3);
            else if (void 0 !== e3) for (n2 = e3.length - 1; n2 >= 0; n2--) this.removeListener(t3, e3[n2]);
            return this;
          }, o.prototype.listeners = function(t3) {
            return c(this, t3, true);
          }, o.prototype.rawListeners = function(t3) {
            return c(this, t3, false);
          }, o.listenerCount = function(t3, e3) {
            return "function" == typeof t3.listenerCount ? t3.listenerCount(e3) : p.call(t3, e3);
          }, o.prototype.listenerCount = p, o.prototype.eventNames = function() {
            return this._eventsCount > 0 ? e2(this._events) : [];
          };
        }, 349: (t2, e2, r2) => {
          "use strict";
          var n = r2(509).Buffer, i = r2(473).Transform;
          function o(t3) {
            i.call(this), this._block = n.allocUnsafe(t3), this._blockSize = t3, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = false;
          }
          r2(717)(o, i), o.prototype._transform = function(t3, e3, r3) {
            var n2 = null;
            try {
              this.update(t3, e3);
            } catch (t4) {
              n2 = t4;
            }
            r3(n2);
          }, o.prototype._flush = function(t3) {
            var e3 = null;
            try {
              this.push(this.digest());
            } catch (t4) {
              e3 = t4;
            }
            t3(e3);
          }, o.prototype.update = function(t3, e3) {
            if ((function(t4, e4) {
              if (!n.isBuffer(t4) && "string" != typeof t4) throw new TypeError("Data must be a string or a buffer");
            })(t3), this._finalized) throw new Error("Digest already called");
            n.isBuffer(t3) || (t3 = n.from(t3, e3));
            for (var r3 = this._block, i2 = 0; this._blockOffset + t3.length - i2 >= this._blockSize; ) {
              for (var o2 = this._blockOffset; o2 < this._blockSize; ) r3[o2++] = t3[i2++];
              this._update(), this._blockOffset = 0;
            }
            for (; i2 < t3.length; ) r3[this._blockOffset++] = t3[i2++];
            for (var s = 0, a = 8 * t3.length; a > 0; ++s) this._length[s] += a, (a = this._length[s] / 4294967296 | 0) > 0 && (this._length[s] -= 4294967296 * a);
            return this;
          }, o.prototype._update = function() {
            throw new Error("_update is not implemented");
          }, o.prototype.digest = function(t3) {
            if (this._finalized) throw new Error("Digest already called");
            this._finalized = true;
            var e3 = this._digest();
            void 0 !== t3 && (e3 = e3.toString(t3)), this._block.fill(0), this._blockOffset = 0;
            for (var r3 = 0; r3 < 4; ++r3) this._length[r3] = 0;
            return e3;
          }, o.prototype._digest = function() {
            throw new Error("_digest is not implemented");
          }, t2.exports = o;
        }, 645: (t2, e2) => {
          e2.read = function(t3, e3, r2, n, i) {
            var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, h = u >> 1, f = -7, l = r2 ? i - 1 : 0, c = r2 ? -1 : 1, p = t3[e3 + l];
            for (l += c, o = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; o = 256 * o + t3[e3 + l], l += c, f -= 8) ;
            for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = 256 * s + t3[e3 + l], l += c, f -= 8) ;
            if (0 === o) o = 1 - h;
            else {
              if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
              s += Math.pow(2, n), o -= h;
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - n);
          }, e2.write = function(t3, e3, r2, n, i, o) {
            var s, a, u, h = 8 * o - i - 1, f = (1 << h) - 1, l = f >> 1, c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : o - 1, d = n ? 1 : -1, y = e3 < 0 || 0 === e3 && 1 / e3 < 0 ? 1 : 0;
            for (e3 = Math.abs(e3), isNaN(e3) || e3 === 1 / 0 ? (a = isNaN(e3) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e3) / Math.LN2), e3 * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e3 += s + l >= 1 ? c / u : c * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (e3 * u - 1) * Math.pow(2, i), s += l) : (a = e3 * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; t3[r2 + p] = 255 & a, p += d, a /= 256, i -= 8) ;
            for (s = s << i | a, h += i; h > 0; t3[r2 + p] = 255 & s, p += d, s /= 256, h -= 8) ;
            t3[r2 + p - d] |= 128 * y;
          };
        }, 717: (t2) => {
          "function" == typeof Object.create ? t2.exports = function(t3, e2) {
            e2 && (t3.super_ = e2, t3.prototype = Object.create(e2.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }));
          } : t2.exports = function(t3, e2) {
            if (e2) {
              t3.super_ = e2;
              var r2 = function() {
              };
              r2.prototype = e2.prototype, t3.prototype = new r2(), t3.prototype.constructor = t3;
            }
          };
        }, 318: (t2, e2, r2) => {
          "use strict";
          var n = r2(717), i = r2(349), o = r2(509).Buffer, s = new Array(16);
          function a() {
            i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
          }
          function u(t3, e3) {
            return t3 << e3 | t3 >>> 32 - e3;
          }
          function h(t3, e3, r3, n2, i2, o2, s2) {
            return u(t3 + (e3 & r3 | ~e3 & n2) + i2 + o2 | 0, s2) + e3 | 0;
          }
          function f(t3, e3, r3, n2, i2, o2, s2) {
            return u(t3 + (e3 & n2 | r3 & ~n2) + i2 + o2 | 0, s2) + e3 | 0;
          }
          function l(t3, e3, r3, n2, i2, o2, s2) {
            return u(t3 + (e3 ^ r3 ^ n2) + i2 + o2 | 0, s2) + e3 | 0;
          }
          function c(t3, e3, r3, n2, i2, o2, s2) {
            return u(t3 + (r3 ^ (e3 | ~n2)) + i2 + o2 | 0, s2) + e3 | 0;
          }
          n(a, i), a.prototype._update = function() {
            for (var t3 = s, e3 = 0; e3 < 16; ++e3) t3[e3] = this._block.readInt32LE(4 * e3);
            var r3 = this._a, n2 = this._b, i2 = this._c, o2 = this._d;
            r3 = h(r3, n2, i2, o2, t3[0], 3614090360, 7), o2 = h(o2, r3, n2, i2, t3[1], 3905402710, 12), i2 = h(i2, o2, r3, n2, t3[2], 606105819, 17), n2 = h(n2, i2, o2, r3, t3[3], 3250441966, 22), r3 = h(r3, n2, i2, o2, t3[4], 4118548399, 7), o2 = h(o2, r3, n2, i2, t3[5], 1200080426, 12), i2 = h(i2, o2, r3, n2, t3[6], 2821735955, 17), n2 = h(n2, i2, o2, r3, t3[7], 4249261313, 22), r3 = h(r3, n2, i2, o2, t3[8], 1770035416, 7), o2 = h(o2, r3, n2, i2, t3[9], 2336552879, 12), i2 = h(i2, o2, r3, n2, t3[10], 4294925233, 17), n2 = h(n2, i2, o2, r3, t3[11], 2304563134, 22), r3 = h(r3, n2, i2, o2, t3[12], 1804603682, 7), o2 = h(o2, r3, n2, i2, t3[13], 4254626195, 12), i2 = h(i2, o2, r3, n2, t3[14], 2792965006, 17), r3 = f(r3, n2 = h(n2, i2, o2, r3, t3[15], 1236535329, 22), i2, o2, t3[1], 4129170786, 5), o2 = f(o2, r3, n2, i2, t3[6], 3225465664, 9), i2 = f(i2, o2, r3, n2, t3[11], 643717713, 14), n2 = f(n2, i2, o2, r3, t3[0], 3921069994, 20), r3 = f(r3, n2, i2, o2, t3[5], 3593408605, 5), o2 = f(o2, r3, n2, i2, t3[10], 38016083, 9), i2 = f(i2, o2, r3, n2, t3[15], 3634488961, 14), n2 = f(n2, i2, o2, r3, t3[4], 3889429448, 20), r3 = f(r3, n2, i2, o2, t3[9], 568446438, 5), o2 = f(o2, r3, n2, i2, t3[14], 3275163606, 9), i2 = f(i2, o2, r3, n2, t3[3], 4107603335, 14), n2 = f(n2, i2, o2, r3, t3[8], 1163531501, 20), r3 = f(r3, n2, i2, o2, t3[13], 2850285829, 5), o2 = f(o2, r3, n2, i2, t3[2], 4243563512, 9), i2 = f(i2, o2, r3, n2, t3[7], 1735328473, 14), r3 = l(r3, n2 = f(n2, i2, o2, r3, t3[12], 2368359562, 20), i2, o2, t3[5], 4294588738, 4), o2 = l(o2, r3, n2, i2, t3[8], 2272392833, 11), i2 = l(i2, o2, r3, n2, t3[11], 1839030562, 16), n2 = l(n2, i2, o2, r3, t3[14], 4259657740, 23), r3 = l(r3, n2, i2, o2, t3[1], 2763975236, 4), o2 = l(o2, r3, n2, i2, t3[4], 1272893353, 11), i2 = l(i2, o2, r3, n2, t3[7], 4139469664, 16), n2 = l(n2, i2, o2, r3, t3[10], 3200236656, 23), r3 = l(r3, n2, i2, o2, t3[13], 681279174, 4), o2 = l(o2, r3, n2, i2, t3[0], 3936430074, 11), i2 = l(i2, o2, r3, n2, t3[3], 3572445317, 16), n2 = l(n2, i2, o2, r3, t3[6], 76029189, 23), r3 = l(r3, n2, i2, o2, t3[9], 3654602809, 4), o2 = l(o2, r3, n2, i2, t3[12], 3873151461, 11), i2 = l(i2, o2, r3, n2, t3[15], 530742520, 16), r3 = c(r3, n2 = l(n2, i2, o2, r3, t3[2], 3299628645, 23), i2, o2, t3[0], 4096336452, 6), o2 = c(o2, r3, n2, i2, t3[7], 1126891415, 10), i2 = c(i2, o2, r3, n2, t3[14], 2878612391, 15), n2 = c(n2, i2, o2, r3, t3[5], 4237533241, 21), r3 = c(r3, n2, i2, o2, t3[12], 1700485571, 6), o2 = c(o2, r3, n2, i2, t3[3], 2399980690, 10), i2 = c(i2, o2, r3, n2, t3[10], 4293915773, 15), n2 = c(n2, i2, o2, r3, t3[1], 2240044497, 21), r3 = c(r3, n2, i2, o2, t3[8], 1873313359, 6), o2 = c(o2, r3, n2, i2, t3[15], 4264355552, 10), i2 = c(i2, o2, r3, n2, t3[6], 2734768916, 15), n2 = c(n2, i2, o2, r3, t3[13], 1309151649, 21), r3 = c(r3, n2, i2, o2, t3[4], 4149444226, 6), o2 = c(o2, r3, n2, i2, t3[11], 3174756917, 10), i2 = c(i2, o2, r3, n2, t3[2], 718787259, 15), n2 = c(n2, i2, o2, r3, t3[9], 3951481745, 21), this._a = this._a + r3 | 0, this._b = this._b + n2 | 0, this._c = this._c + i2 | 0, this._d = this._d + o2 | 0;
          }, a.prototype._digest = function() {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var t3 = o.allocUnsafe(16);
            return t3.writeInt32LE(this._a, 0), t3.writeInt32LE(this._b, 4), t3.writeInt32LE(this._c, 8), t3.writeInt32LE(this._d, 12), t3;
          }, t2.exports = a;
        }, 281: (t2) => {
          "use strict";
          var e2 = {};
          function r2(t3, r3, n2) {
            n2 || (n2 = Error);
            var i = (function(t4) {
              var e3, n3;
              function i2(e4, n4, i3) {
                return t4.call(this, (function(t5, e5, n5) {
                  return "string" == typeof r3 ? r3 : r3(t5, e5, n5);
                })(e4, n4, i3)) || this;
              }
              return n3 = t4, (e3 = i2).prototype = Object.create(n3.prototype), e3.prototype.constructor = e3, e3.__proto__ = n3, i2;
            })(n2);
            i.prototype.name = n2.name, i.prototype.code = t3, e2[t3] = i;
          }
          function n(t3, e3) {
            if (Array.isArray(t3)) {
              var r3 = t3.length;
              return t3 = t3.map((function(t4) {
                return String(t4);
              })), r3 > 2 ? "one of ".concat(e3, " ").concat(t3.slice(0, r3 - 1).join(", "), ", or ") + t3[r3 - 1] : 2 === r3 ? "one of ".concat(e3, " ").concat(t3[0], " or ").concat(t3[1]) : "of ".concat(e3, " ").concat(t3[0]);
            }
            return "of ".concat(e3, " ").concat(String(t3));
          }
          r2("ERR_INVALID_OPT_VALUE", (function(t3, e3) {
            return 'The value "' + e3 + '" is invalid for option "' + t3 + '"';
          }), TypeError), r2("ERR_INVALID_ARG_TYPE", (function(t3, e3, r3) {
            var i, o, s, a, u;
            if ("string" == typeof e3 && (o = "not ", e3.substr(0, o.length) === o) ? (i = "must not be", e3 = e3.replace(/^not /, "")) : i = "must be", (function(t4, e4, r4) {
              return (void 0 === r4 || r4 > t4.length) && (r4 = t4.length), t4.substring(r4 - e4.length, r4) === e4;
            })(t3, " argument")) s = "The ".concat(t3, " ").concat(i, " ").concat(n(e3, "type"));
            else {
              var h = ("number" != typeof u && (u = 0), u + ".".length > (a = t3).length || -1 === a.indexOf(".", u) ? "argument" : "property");
              s = 'The "'.concat(t3, '" ').concat(h, " ").concat(i, " ").concat(n(e3, "type"));
            }
            return s + ". Received type ".concat(typeof r3);
          }), TypeError), r2("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r2("ERR_METHOD_NOT_IMPLEMENTED", (function(t3) {
            return "The " + t3 + " method is not implemented";
          })), r2("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r2("ERR_STREAM_DESTROYED", (function(t3) {
            return "Cannot call " + t3 + " after a stream was destroyed";
          })), r2("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r2("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r2("ERR_STREAM_WRITE_AFTER_END", "write after end"), r2("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r2("ERR_UNKNOWN_ENCODING", (function(t3) {
            return "Unknown encoding: " + t3;
          }), TypeError), r2("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t2.exports.q = e2;
        }, 753: (t2, e2, r2) => {
          "use strict";
          var n = Object.keys || function(t3) {
            var e3 = [];
            for (var r3 in t3) e3.push(r3);
            return e3;
          };
          t2.exports = h;
          var i = r2(481), o = r2(229);
          r2(717)(h, i);
          for (var s = n(o.prototype), a = 0; a < s.length; a++) {
            var u = s[a];
            h.prototype[u] || (h.prototype[u] = o.prototype[u]);
          }
          function h(t3) {
            if (!(this instanceof h)) return new h(t3);
            i.call(this, t3), o.call(this, t3), this.allowHalfOpen = true, t3 && (false === t3.readable && (this.readable = false), false === t3.writable && (this.writable = false), false === t3.allowHalfOpen && (this.allowHalfOpen = false, this.once("end", f)));
          }
          function f() {
            this._writableState.ended || process.nextTick(l, this);
          }
          function l(t3) {
            t3.end();
          }
          Object.defineProperty(h.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
            return this._writableState.highWaterMark;
          } }), Object.defineProperty(h.prototype, "writableBuffer", { enumerable: false, get: function() {
            return this._writableState && this._writableState.getBuffer();
          } }), Object.defineProperty(h.prototype, "writableLength", { enumerable: false, get: function() {
            return this._writableState.length;
          } }), Object.defineProperty(h.prototype, "destroyed", { enumerable: false, get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
          }, set: function(t3) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t3, this._writableState.destroyed = t3);
          } });
        }, 725: (t2, e2, r2) => {
          "use strict";
          t2.exports = i;
          var n = r2(605);
          function i(t3) {
            if (!(this instanceof i)) return new i(t3);
            n.call(this, t3);
          }
          r2(717)(i, n), i.prototype._transform = function(t3, e3, r3) {
            r3(null, t3);
          };
        }, 481: (t2, e2, r2) => {
          "use strict";
          var n;
          t2.exports = R, R.ReadableState = S, r2(187).EventEmitter;
          var i, o = function(t3, e3) {
            return t3.listeners(e3).length;
          }, s = r2(503), a = r2(764).Buffer, u = r2.g.Uint8Array || function() {
          }, h = r2(758);
          i = h && h.debuglog ? h.debuglog("stream") : function() {
          };
          var f, l, c, p = r2(327), d = r2(195), y = r2(457).getHighWaterMark, g = r2(281).q, v = g.ERR_INVALID_ARG_TYPE, b = g.ERR_STREAM_PUSH_AFTER_EOF, w = g.ERR_METHOD_NOT_IMPLEMENTED, _ = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
          r2(717)(R, s);
          var m = d.errorOrDestroy, E = ["error", "close", "destroy", "pause", "resume"];
          function S(t3, e3, i2) {
            n = n || r2(753), t3 = t3 || {}, "boolean" != typeof i2 && (i2 = e3 instanceof n), this.objectMode = !!t3.objectMode, i2 && (this.objectMode = this.objectMode || !!t3.readableObjectMode), this.highWaterMark = y(this, t3, "readableHighWaterMark", i2), this.buffer = new p(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = false !== t3.emitClose, this.autoDestroy = !!t3.autoDestroy, this.destroyed = false, this.defaultEncoding = t3.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t3.encoding && (f || (f = r2(553).s), this.decoder = new f(t3.encoding), this.encoding = t3.encoding);
          }
          function R(t3) {
            if (n = n || r2(753), !(this instanceof R)) return new R(t3);
            var e3 = this instanceof n;
            this._readableState = new S(t3, this, e3), this.readable = true, t3 && ("function" == typeof t3.read && (this._read = t3.read), "function" == typeof t3.destroy && (this._destroy = t3.destroy)), s.call(this);
          }
          function A(t3, e3, r3, n2, o2) {
            i("readableAddChunk", e3);
            var s2, h2 = t3._readableState;
            if (null === e3) h2.reading = false, (function(t4, e4) {
              if (i("onEofChunk"), !e4.ended) {
                if (e4.decoder) {
                  var r4 = e4.decoder.end();
                  r4 && r4.length && (e4.buffer.push(r4), e4.length += e4.objectMode ? 1 : r4.length);
                }
                e4.ended = true, e4.sync ? k(t4) : (e4.needReadable = false, e4.emittedReadable || (e4.emittedReadable = true, T(t4)));
              }
            })(t3, h2);
            else if (o2 || (s2 = (function(t4, e4) {
              var r4, n3;
              return n3 = e4, a.isBuffer(n3) || n3 instanceof u || "string" == typeof e4 || void 0 === e4 || t4.objectMode || (r4 = new v("chunk", ["string", "Buffer", "Uint8Array"], e4)), r4;
            })(h2, e3)), s2) m(t3, s2);
            else if (h2.objectMode || e3 && e3.length > 0) if ("string" == typeof e3 || h2.objectMode || Object.getPrototypeOf(e3) === a.prototype || (e3 = (function(t4) {
              return a.from(t4);
            })(e3)), n2) h2.endEmitted ? m(t3, new _()) : B(t3, h2, e3, true);
            else if (h2.ended) m(t3, new b());
            else {
              if (h2.destroyed) return false;
              h2.reading = false, h2.decoder && !r3 ? (e3 = h2.decoder.write(e3), h2.objectMode || 0 !== e3.length ? B(t3, h2, e3, false) : I(t3, h2)) : B(t3, h2, e3, false);
            }
            else n2 || (h2.reading = false, I(t3, h2));
            return !h2.ended && (h2.length < h2.highWaterMark || 0 === h2.length);
          }
          function B(t3, e3, r3, n2) {
            e3.flowing && 0 === e3.length && !e3.sync ? (e3.awaitDrain = 0, t3.emit("data", r3)) : (e3.length += e3.objectMode ? 1 : r3.length, n2 ? e3.buffer.unshift(r3) : e3.buffer.push(r3), e3.needReadable && k(t3)), I(t3, e3);
          }
          Object.defineProperty(R.prototype, "destroyed", { enumerable: false, get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed;
          }, set: function(t3) {
            this._readableState && (this._readableState.destroyed = t3);
          } }), R.prototype.destroy = d.destroy, R.prototype._undestroy = d.undestroy, R.prototype._destroy = function(t3, e3) {
            e3(t3);
          }, R.prototype.push = function(t3, e3) {
            var r3, n2 = this._readableState;
            return n2.objectMode ? r3 = true : "string" == typeof t3 && ((e3 = e3 || n2.defaultEncoding) !== n2.encoding && (t3 = a.from(t3, e3), e3 = ""), r3 = true), A(this, t3, e3, false, r3);
          }, R.prototype.unshift = function(t3) {
            return A(this, t3, null, true, false);
          }, R.prototype.isPaused = function() {
            return false === this._readableState.flowing;
          }, R.prototype.setEncoding = function(t3) {
            f || (f = r2(553).s);
            var e3 = new f(t3);
            this._readableState.decoder = e3, this._readableState.encoding = this._readableState.decoder.encoding;
            for (var n2 = this._readableState.buffer.head, i2 = ""; null !== n2; ) i2 += e3.write(n2.data), n2 = n2.next;
            return this._readableState.buffer.clear(), "" !== i2 && this._readableState.buffer.push(i2), this._readableState.length = i2.length, this;
          };
          var L = 1073741824;
          function M(t3, e3) {
            return t3 <= 0 || 0 === e3.length && e3.ended ? 0 : e3.objectMode ? 1 : t3 != t3 ? e3.flowing && e3.length ? e3.buffer.head.data.length : e3.length : (t3 > e3.highWaterMark && (e3.highWaterMark = (function(t4) {
              return t4 >= L ? t4 = L : (t4--, t4 |= t4 >>> 1, t4 |= t4 >>> 2, t4 |= t4 >>> 4, t4 |= t4 >>> 8, t4 |= t4 >>> 16, t4++), t4;
            })(t3)), t3 <= e3.length ? t3 : e3.ended ? e3.length : (e3.needReadable = true, 0));
          }
          function k(t3) {
            var e3 = t3._readableState;
            i("emitReadable", e3.needReadable, e3.emittedReadable), e3.needReadable = false, e3.emittedReadable || (i("emitReadable", e3.flowing), e3.emittedReadable = true, process.nextTick(T, t3));
          }
          function T(t3) {
            var e3 = t3._readableState;
            i("emitReadable_", e3.destroyed, e3.length, e3.ended), e3.destroyed || !e3.length && !e3.ended || (t3.emit("readable"), e3.emittedReadable = false), e3.needReadable = !e3.flowing && !e3.ended && e3.length <= e3.highWaterMark, C(t3);
          }
          function I(t3, e3) {
            e3.readingMore || (e3.readingMore = true, process.nextTick(O, t3, e3));
          }
          function O(t3, e3) {
            for (; !e3.reading && !e3.ended && (e3.length < e3.highWaterMark || e3.flowing && 0 === e3.length); ) {
              var r3 = e3.length;
              if (i("maybeReadMore read 0"), t3.read(0), r3 === e3.length) break;
            }
            e3.readingMore = false;
          }
          function x(t3) {
            var e3 = t3._readableState;
            e3.readableListening = t3.listenerCount("readable") > 0, e3.resumeScheduled && !e3.paused ? e3.flowing = true : t3.listenerCount("data") > 0 && t3.resume();
          }
          function P(t3) {
            i("readable nexttick read 0"), t3.read(0);
          }
          function U(t3, e3) {
            i("resume", e3.reading), e3.reading || t3.read(0), e3.resumeScheduled = false, t3.emit("resume"), C(t3), e3.flowing && !e3.reading && t3.read(0);
          }
          function C(t3) {
            var e3 = t3._readableState;
            for (i("flow", e3.flowing); e3.flowing && null !== t3.read(); ) ;
          }
          function N(t3, e3) {
            return 0 === e3.length ? null : (e3.objectMode ? r3 = e3.buffer.shift() : !t3 || t3 >= e3.length ? (r3 = e3.decoder ? e3.buffer.join("") : 1 === e3.buffer.length ? e3.buffer.first() : e3.buffer.concat(e3.length), e3.buffer.clear()) : r3 = e3.buffer.consume(t3, e3.decoder), r3);
            var r3;
          }
          function j(t3) {
            var e3 = t3._readableState;
            i("endReadable", e3.endEmitted), e3.endEmitted || (e3.ended = true, process.nextTick(D, e3, t3));
          }
          function D(t3, e3) {
            if (i("endReadableNT", t3.endEmitted, t3.length), !t3.endEmitted && 0 === t3.length && (t3.endEmitted = true, e3.readable = false, e3.emit("end"), t3.autoDestroy)) {
              var r3 = e3._writableState;
              (!r3 || r3.autoDestroy && r3.finished) && e3.destroy();
            }
          }
          function q(t3, e3) {
            for (var r3 = 0, n2 = t3.length; r3 < n2; r3++) if (t3[r3] === e3) return r3;
            return -1;
          }
          R.prototype.read = function(t3) {
            i("read", t3), t3 = parseInt(t3, 10);
            var e3 = this._readableState, r3 = t3;
            if (0 !== t3 && (e3.emittedReadable = false), 0 === t3 && e3.needReadable && ((0 !== e3.highWaterMark ? e3.length >= e3.highWaterMark : e3.length > 0) || e3.ended)) return i("read: emitReadable", e3.length, e3.ended), 0 === e3.length && e3.ended ? j(this) : k(this), null;
            if (0 === (t3 = M(t3, e3)) && e3.ended) return 0 === e3.length && j(this), null;
            var n2, o2 = e3.needReadable;
            return i("need readable", o2), (0 === e3.length || e3.length - t3 < e3.highWaterMark) && i("length less than watermark", o2 = true), e3.ended || e3.reading ? i("reading or ended", o2 = false) : o2 && (i("do read"), e3.reading = true, e3.sync = true, 0 === e3.length && (e3.needReadable = true), this._read(e3.highWaterMark), e3.sync = false, e3.reading || (t3 = M(r3, e3))), null === (n2 = t3 > 0 ? N(t3, e3) : null) ? (e3.needReadable = e3.length <= e3.highWaterMark, t3 = 0) : (e3.length -= t3, e3.awaitDrain = 0), 0 === e3.length && (e3.ended || (e3.needReadable = true), r3 !== t3 && e3.ended && j(this)), null !== n2 && this.emit("data", n2), n2;
          }, R.prototype._read = function(t3) {
            m(this, new w("_read()"));
          }, R.prototype.pipe = function(t3, e3) {
            var r3 = this, n2 = this._readableState;
            switch (n2.pipesCount) {
              case 0:
                n2.pipes = t3;
                break;
              case 1:
                n2.pipes = [n2.pipes, t3];
                break;
              default:
                n2.pipes.push(t3);
            }
            n2.pipesCount += 1, i("pipe count=%d opts=%j", n2.pipesCount, e3);
            var s2 = e3 && false === e3.end || t3 === process.stdout || t3 === process.stderr ? d2 : a2;
            function a2() {
              i("onend"), t3.end();
            }
            n2.endEmitted ? process.nextTick(s2) : r3.once("end", s2), t3.on("unpipe", (function e4(o2, s3) {
              i("onunpipe"), o2 === r3 && s3 && false === s3.hasUnpiped && (s3.hasUnpiped = true, i("cleanup"), t3.removeListener("close", c2), t3.removeListener("finish", p2), t3.removeListener("drain", u2), t3.removeListener("error", l2), t3.removeListener("unpipe", e4), r3.removeListener("end", a2), r3.removeListener("end", d2), r3.removeListener("data", f2), h2 = true, !n2.awaitDrain || t3._writableState && !t3._writableState.needDrain || u2());
            }));
            var u2 = /* @__PURE__ */ (function(t4) {
              return function() {
                var e4 = t4._readableState;
                i("pipeOnDrain", e4.awaitDrain), e4.awaitDrain && e4.awaitDrain--, 0 === e4.awaitDrain && o(t4, "data") && (e4.flowing = true, C(t4));
              };
            })(r3);
            t3.on("drain", u2);
            var h2 = false;
            function f2(e4) {
              i("ondata");
              var o2 = t3.write(e4);
              i("dest.write", o2), false === o2 && ((1 === n2.pipesCount && n2.pipes === t3 || n2.pipesCount > 1 && -1 !== q(n2.pipes, t3)) && !h2 && (i("false write response, pause", n2.awaitDrain), n2.awaitDrain++), r3.pause());
            }
            function l2(e4) {
              i("onerror", e4), d2(), t3.removeListener("error", l2), 0 === o(t3, "error") && m(t3, e4);
            }
            function c2() {
              t3.removeListener("finish", p2), d2();
            }
            function p2() {
              i("onfinish"), t3.removeListener("close", c2), d2();
            }
            function d2() {
              i("unpipe"), r3.unpipe(t3);
            }
            return r3.on("data", f2), (function(t4, e4, r4) {
              if ("function" == typeof t4.prependListener) return t4.prependListener(e4, r4);
              t4._events && t4._events.error ? Array.isArray(t4._events.error) ? t4._events.error.unshift(r4) : t4._events.error = [r4, t4._events.error] : t4.on(e4, r4);
            })(t3, "error", l2), t3.once("close", c2), t3.once("finish", p2), t3.emit("pipe", r3), n2.flowing || (i("pipe resume"), r3.resume()), t3;
          }, R.prototype.unpipe = function(t3) {
            var e3 = this._readableState, r3 = { hasUnpiped: false };
            if (0 === e3.pipesCount) return this;
            if (1 === e3.pipesCount) return t3 && t3 !== e3.pipes || (t3 || (t3 = e3.pipes), e3.pipes = null, e3.pipesCount = 0, e3.flowing = false, t3 && t3.emit("unpipe", this, r3)), this;
            if (!t3) {
              var n2 = e3.pipes, i2 = e3.pipesCount;
              e3.pipes = null, e3.pipesCount = 0, e3.flowing = false;
              for (var o2 = 0; o2 < i2; o2++) n2[o2].emit("unpipe", this, { hasUnpiped: false });
              return this;
            }
            var s2 = q(e3.pipes, t3);
            return -1 === s2 || (e3.pipes.splice(s2, 1), e3.pipesCount -= 1, 1 === e3.pipesCount && (e3.pipes = e3.pipes[0]), t3.emit("unpipe", this, r3)), this;
          }, R.prototype.on = function(t3, e3) {
            var r3 = s.prototype.on.call(this, t3, e3), n2 = this._readableState;
            return "data" === t3 ? (n2.readableListening = this.listenerCount("readable") > 0, false !== n2.flowing && this.resume()) : "readable" === t3 && (n2.endEmitted || n2.readableListening || (n2.readableListening = n2.needReadable = true, n2.flowing = false, n2.emittedReadable = false, i("on readable", n2.length, n2.reading), n2.length ? k(this) : n2.reading || process.nextTick(P, this))), r3;
          }, R.prototype.addListener = R.prototype.on, R.prototype.removeListener = function(t3, e3) {
            var r3 = s.prototype.removeListener.call(this, t3, e3);
            return "readable" === t3 && process.nextTick(x, this), r3;
          }, R.prototype.removeAllListeners = function(t3) {
            var e3 = s.prototype.removeAllListeners.apply(this, arguments);
            return "readable" !== t3 && void 0 !== t3 || process.nextTick(x, this), e3;
          }, R.prototype.resume = function() {
            var t3 = this._readableState;
            return t3.flowing || (i("resume"), t3.flowing = !t3.readableListening, (function(t4, e3) {
              e3.resumeScheduled || (e3.resumeScheduled = true, process.nextTick(U, t4, e3));
            })(this, t3)), t3.paused = false, this;
          }, R.prototype.pause = function() {
            return i("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (i("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
          }, R.prototype.wrap = function(t3) {
            var e3 = this, r3 = this._readableState, n2 = false;
            for (var o2 in t3.on("end", (function() {
              if (i("wrapped end"), r3.decoder && !r3.ended) {
                var t4 = r3.decoder.end();
                t4 && t4.length && e3.push(t4);
              }
              e3.push(null);
            })), t3.on("data", (function(o3) {
              i("wrapped data"), r3.decoder && (o3 = r3.decoder.write(o3)), r3.objectMode && null == o3 || (r3.objectMode || o3 && o3.length) && (e3.push(o3) || (n2 = true, t3.pause()));
            })), t3) void 0 === this[o2] && "function" == typeof t3[o2] && (this[o2] = /* @__PURE__ */ (function(e4) {
              return function() {
                return t3[e4].apply(t3, arguments);
              };
            })(o2));
            for (var s2 = 0; s2 < E.length; s2++) t3.on(E[s2], this.emit.bind(this, E[s2]));
            return this._read = function(e4) {
              i("wrapped _read", e4), n2 && (n2 = false, t3.resume());
            }, this;
          }, "function" == typeof Symbol && (R.prototype[Symbol.asyncIterator] = function() {
            return void 0 === l && (l = r2(850)), l(this);
          }), Object.defineProperty(R.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
            return this._readableState.highWaterMark;
          } }), Object.defineProperty(R.prototype, "readableBuffer", { enumerable: false, get: function() {
            return this._readableState && this._readableState.buffer;
          } }), Object.defineProperty(R.prototype, "readableFlowing", { enumerable: false, get: function() {
            return this._readableState.flowing;
          }, set: function(t3) {
            this._readableState && (this._readableState.flowing = t3);
          } }), R._fromList = N, Object.defineProperty(R.prototype, "readableLength", { enumerable: false, get: function() {
            return this._readableState.length;
          } }), "function" == typeof Symbol && (R.from = function(t3, e3) {
            return void 0 === c && (c = r2(167)), c(R, t3, e3);
          });
        }, 605: (t2, e2, r2) => {
          "use strict";
          t2.exports = f;
          var n = r2(281).q, i = n.ERR_METHOD_NOT_IMPLEMENTED, o = n.ERR_MULTIPLE_CALLBACK, s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING, a = n.ERR_TRANSFORM_WITH_LENGTH_0, u = r2(753);
          function h(t3, e3) {
            var r3 = this._transformState;
            r3.transforming = false;
            var n2 = r3.writecb;
            if (null === n2) return this.emit("error", new o());
            r3.writechunk = null, r3.writecb = null, null != e3 && this.push(e3), n2(t3);
            var i2 = this._readableState;
            i2.reading = false, (i2.needReadable || i2.length < i2.highWaterMark) && this._read(i2.highWaterMark);
          }
          function f(t3) {
            if (!(this instanceof f)) return new f(t3);
            u.call(this, t3), this._transformState = { afterTransform: h.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, t3 && ("function" == typeof t3.transform && (this._transform = t3.transform), "function" == typeof t3.flush && (this._flush = t3.flush)), this.on("prefinish", l);
          }
          function l() {
            var t3 = this;
            "function" != typeof this._flush || this._readableState.destroyed ? c(this, null, null) : this._flush((function(e3, r3) {
              c(t3, e3, r3);
            }));
          }
          function c(t3, e3, r3) {
            if (e3) return t3.emit("error", e3);
            if (null != r3 && t3.push(r3), t3._writableState.length) throw new a();
            if (t3._transformState.transforming) throw new s();
            return t3.push(null);
          }
          r2(717)(f, u), f.prototype.push = function(t3, e3) {
            return this._transformState.needTransform = false, u.prototype.push.call(this, t3, e3);
          }, f.prototype._transform = function(t3, e3, r3) {
            r3(new i("_transform()"));
          }, f.prototype._write = function(t3, e3, r3) {
            var n2 = this._transformState;
            if (n2.writecb = r3, n2.writechunk = t3, n2.writeencoding = e3, !n2.transforming) {
              var i2 = this._readableState;
              (n2.needTransform || i2.needReadable || i2.length < i2.highWaterMark) && this._read(i2.highWaterMark);
            }
          }, f.prototype._read = function(t3) {
            var e3 = this._transformState;
            null === e3.writechunk || e3.transforming ? e3.needTransform = true : (e3.transforming = true, this._transform(e3.writechunk, e3.writeencoding, e3.afterTransform));
          }, f.prototype._destroy = function(t3, e3) {
            u.prototype._destroy.call(this, t3, (function(t4) {
              e3(t4);
            }));
          };
        }, 229: (t2, e2, r2) => {
          "use strict";
          function n(t3) {
            var e3 = this;
            this.next = null, this.entry = null, this.finish = function() {
              !(function(t4, e4, r3) {
                var n2 = t4.entry;
                for (t4.entry = null; n2; ) {
                  var i2 = n2.callback;
                  e4.pendingcb--, i2(void 0), n2 = n2.next;
                }
                e4.corkedRequestsFree.next = t4;
              })(e3, t3);
            };
          }
          var i;
          t2.exports = R, R.WritableState = S;
          var o, s = { deprecate: r2(927) }, a = r2(503), u = r2(764).Buffer, h = r2.g.Uint8Array || function() {
          }, f = r2(195), l = r2(457).getHighWaterMark, c = r2(281).q, p = c.ERR_INVALID_ARG_TYPE, d = c.ERR_METHOD_NOT_IMPLEMENTED, y = c.ERR_MULTIPLE_CALLBACK, g = c.ERR_STREAM_CANNOT_PIPE, v = c.ERR_STREAM_DESTROYED, b = c.ERR_STREAM_NULL_VALUES, w = c.ERR_STREAM_WRITE_AFTER_END, _ = c.ERR_UNKNOWN_ENCODING, m = f.errorOrDestroy;
          function E() {
          }
          function S(t3, e3, o2) {
            i = i || r2(753), t3 = t3 || {}, "boolean" != typeof o2 && (o2 = e3 instanceof i), this.objectMode = !!t3.objectMode, o2 && (this.objectMode = this.objectMode || !!t3.writableObjectMode), this.highWaterMark = l(this, t3, "writableHighWaterMark", o2), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
            var s2 = false === t3.decodeStrings;
            this.decodeStrings = !s2, this.defaultEncoding = t3.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(t4) {
              !(function(t5, e4) {
                var r3 = t5._writableState, n2 = r3.sync, i2 = r3.writecb;
                if ("function" != typeof i2) throw new y();
                if ((function(t6) {
                  t6.writing = false, t6.writecb = null, t6.length -= t6.writelen, t6.writelen = 0;
                })(r3), e4) !(function(t6, e5, r4, n3, i3) {
                  --e5.pendingcb, r4 ? (process.nextTick(i3, n3), process.nextTick(T, t6, e5), t6._writableState.errorEmitted = true, m(t6, n3)) : (i3(n3), t6._writableState.errorEmitted = true, m(t6, n3), T(t6, e5));
                })(t5, r3, n2, e4, i2);
                else {
                  var o3 = M(r3) || t5.destroyed;
                  o3 || r3.corked || r3.bufferProcessing || !r3.bufferedRequest || L(t5, r3), n2 ? process.nextTick(B, t5, r3, o3, i2) : B(t5, r3, o3, i2);
                }
              })(e3, t4);
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = false !== t3.emitClose, this.autoDestroy = !!t3.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new n(this);
          }
          function R(t3) {
            var e3 = this instanceof (i = i || r2(753));
            if (!e3 && !o.call(R, this)) return new R(t3);
            this._writableState = new S(t3, this, e3), this.writable = true, t3 && ("function" == typeof t3.write && (this._write = t3.write), "function" == typeof t3.writev && (this._writev = t3.writev), "function" == typeof t3.destroy && (this._destroy = t3.destroy), "function" == typeof t3.final && (this._final = t3.final)), a.call(this);
          }
          function A(t3, e3, r3, n2, i2, o2, s2) {
            e3.writelen = n2, e3.writecb = s2, e3.writing = true, e3.sync = true, e3.destroyed ? e3.onwrite(new v("write")) : r3 ? t3._writev(i2, e3.onwrite) : t3._write(i2, o2, e3.onwrite), e3.sync = false;
          }
          function B(t3, e3, r3, n2) {
            r3 || (function(t4, e4) {
              0 === e4.length && e4.needDrain && (e4.needDrain = false, t4.emit("drain"));
            })(t3, e3), e3.pendingcb--, n2(), T(t3, e3);
          }
          function L(t3, e3) {
            e3.bufferProcessing = true;
            var r3 = e3.bufferedRequest;
            if (t3._writev && r3 && r3.next) {
              var i2 = e3.bufferedRequestCount, o2 = new Array(i2), s2 = e3.corkedRequestsFree;
              s2.entry = r3;
              for (var a2 = 0, u2 = true; r3; ) o2[a2] = r3, r3.isBuf || (u2 = false), r3 = r3.next, a2 += 1;
              o2.allBuffers = u2, A(t3, e3, true, e3.length, o2, "", s2.finish), e3.pendingcb++, e3.lastBufferedRequest = null, s2.next ? (e3.corkedRequestsFree = s2.next, s2.next = null) : e3.corkedRequestsFree = new n(e3), e3.bufferedRequestCount = 0;
            } else {
              for (; r3; ) {
                var h2 = r3.chunk, f2 = r3.encoding, l2 = r3.callback;
                if (A(t3, e3, false, e3.objectMode ? 1 : h2.length, h2, f2, l2), r3 = r3.next, e3.bufferedRequestCount--, e3.writing) break;
              }
              null === r3 && (e3.lastBufferedRequest = null);
            }
            e3.bufferedRequest = r3, e3.bufferProcessing = false;
          }
          function M(t3) {
            return t3.ending && 0 === t3.length && null === t3.bufferedRequest && !t3.finished && !t3.writing;
          }
          function k(t3, e3) {
            t3._final((function(r3) {
              e3.pendingcb--, r3 && m(t3, r3), e3.prefinished = true, t3.emit("prefinish"), T(t3, e3);
            }));
          }
          function T(t3, e3) {
            var r3 = M(e3);
            if (r3 && ((function(t4, e4) {
              e4.prefinished || e4.finalCalled || ("function" != typeof t4._final || e4.destroyed ? (e4.prefinished = true, t4.emit("prefinish")) : (e4.pendingcb++, e4.finalCalled = true, process.nextTick(k, t4, e4)));
            })(t3, e3), 0 === e3.pendingcb && (e3.finished = true, t3.emit("finish"), e3.autoDestroy))) {
              var n2 = t3._readableState;
              (!n2 || n2.autoDestroy && n2.endEmitted) && t3.destroy();
            }
            return r3;
          }
          r2(717)(R, a), S.prototype.getBuffer = function() {
            for (var t3 = this.bufferedRequest, e3 = []; t3; ) e3.push(t3), t3 = t3.next;
            return e3;
          }, (function() {
            try {
              Object.defineProperty(S.prototype, "buffer", { get: s.deprecate((function() {
                return this.getBuffer();
              }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
            } catch (t3) {
            }
          })(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (o = Function.prototype[Symbol.hasInstance], Object.defineProperty(R, Symbol.hasInstance, { value: function(t3) {
            return !!o.call(this, t3) || this === R && t3 && t3._writableState instanceof S;
          } })) : o = function(t3) {
            return t3 instanceof this;
          }, R.prototype.pipe = function() {
            m(this, new g());
          }, R.prototype.write = function(t3, e3, r3) {
            var n2, i2 = this._writableState, o2 = false, s2 = !i2.objectMode && (n2 = t3, u.isBuffer(n2) || n2 instanceof h);
            return s2 && !u.isBuffer(t3) && (t3 = (function(t4) {
              return u.from(t4);
            })(t3)), "function" == typeof e3 && (r3 = e3, e3 = null), s2 ? e3 = "buffer" : e3 || (e3 = i2.defaultEncoding), "function" != typeof r3 && (r3 = E), i2.ending ? (function(t4, e4) {
              var r4 = new w();
              m(t4, r4), process.nextTick(e4, r4);
            })(this, r3) : (s2 || (function(t4, e4, r4, n3) {
              var i3;
              return null === r4 ? i3 = new b() : "string" == typeof r4 || e4.objectMode || (i3 = new p("chunk", ["string", "Buffer"], r4)), !i3 || (m(t4, i3), process.nextTick(n3, i3), false);
            })(this, i2, t3, r3)) && (i2.pendingcb++, o2 = (function(t4, e4, r4, n3, i3, o3) {
              if (!r4) {
                var s3 = (function(t5, e5, r5) {
                  return t5.objectMode || false === t5.decodeStrings || "string" != typeof e5 || (e5 = u.from(e5, r5)), e5;
                })(e4, n3, i3);
                n3 !== s3 && (r4 = true, i3 = "buffer", n3 = s3);
              }
              var a2 = e4.objectMode ? 1 : n3.length;
              e4.length += a2;
              var h2 = e4.length < e4.highWaterMark;
              if (h2 || (e4.needDrain = true), e4.writing || e4.corked) {
                var f2 = e4.lastBufferedRequest;
                e4.lastBufferedRequest = { chunk: n3, encoding: i3, isBuf: r4, callback: o3, next: null }, f2 ? f2.next = e4.lastBufferedRequest : e4.bufferedRequest = e4.lastBufferedRequest, e4.bufferedRequestCount += 1;
              } else A(t4, e4, false, a2, n3, i3, o3);
              return h2;
            })(this, i2, s2, t3, e3, r3)), o2;
          }, R.prototype.cork = function() {
            this._writableState.corked++;
          }, R.prototype.uncork = function() {
            var t3 = this._writableState;
            t3.corked && (t3.corked--, t3.writing || t3.corked || t3.bufferProcessing || !t3.bufferedRequest || L(this, t3));
          }, R.prototype.setDefaultEncoding = function(t3) {
            if ("string" == typeof t3 && (t3 = t3.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t3 + "").toLowerCase()) > -1)) throw new _(t3);
            return this._writableState.defaultEncoding = t3, this;
          }, Object.defineProperty(R.prototype, "writableBuffer", { enumerable: false, get: function() {
            return this._writableState && this._writableState.getBuffer();
          } }), Object.defineProperty(R.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
            return this._writableState.highWaterMark;
          } }), R.prototype._write = function(t3, e3, r3) {
            r3(new d("_write()"));
          }, R.prototype._writev = null, R.prototype.end = function(t3, e3, r3) {
            var n2 = this._writableState;
            return "function" == typeof t3 ? (r3 = t3, t3 = null, e3 = null) : "function" == typeof e3 && (r3 = e3, e3 = null), null != t3 && this.write(t3, e3), n2.corked && (n2.corked = 1, this.uncork()), n2.ending || (function(t4, e4, r4) {
              e4.ending = true, T(t4, e4), r4 && (e4.finished ? process.nextTick(r4) : t4.once("finish", r4)), e4.ended = true, t4.writable = false;
            })(this, n2, r3), this;
          }, Object.defineProperty(R.prototype, "writableLength", { enumerable: false, get: function() {
            return this._writableState.length;
          } }), Object.defineProperty(R.prototype, "destroyed", { enumerable: false, get: function() {
            return void 0 !== this._writableState && this._writableState.destroyed;
          }, set: function(t3) {
            this._writableState && (this._writableState.destroyed = t3);
          } }), R.prototype.destroy = f.destroy, R.prototype._undestroy = f.undestroy, R.prototype._destroy = function(t3, e3) {
            e3(t3);
          };
        }, 850: (t2, e2, r2) => {
          "use strict";
          var n;
          function i(t3, e3, r3) {
            return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
          }
          var o = r2(610), s = Symbol("lastResolve"), a = Symbol("lastReject"), u = Symbol("error"), h = Symbol("ended"), f = Symbol("lastPromise"), l = Symbol("handlePromise"), c = Symbol("stream");
          function p(t3, e3) {
            return { value: t3, done: e3 };
          }
          function d(t3) {
            var e3 = t3[s];
            if (null !== e3) {
              var r3 = t3[c].read();
              null !== r3 && (t3[f] = null, t3[s] = null, t3[a] = null, e3(p(r3, false)));
            }
          }
          function y(t3) {
            process.nextTick(d, t3);
          }
          var g = Object.getPrototypeOf((function() {
          })), v = Object.setPrototypeOf((i(n = { get stream() {
            return this[c];
          }, next: function() {
            var t3 = this, e3 = this[u];
            if (null !== e3) return Promise.reject(e3);
            if (this[h]) return Promise.resolve(p(void 0, true));
            if (this[c].destroyed) return new Promise((function(e4, r4) {
              process.nextTick((function() {
                t3[u] ? r4(t3[u]) : e4(p(void 0, true));
              }));
            }));
            var r3, n2 = this[f];
            if (n2) r3 = new Promise(/* @__PURE__ */ (function(t4, e4) {
              return function(r4, n3) {
                t4.then((function() {
                  e4[h] ? r4(p(void 0, true)) : e4[l](r4, n3);
                }), n3);
              };
            })(n2, this));
            else {
              var i2 = this[c].read();
              if (null !== i2) return Promise.resolve(p(i2, false));
              r3 = new Promise(this[l]);
            }
            return this[f] = r3, r3;
          } }, Symbol.asyncIterator, (function() {
            return this;
          })), i(n, "return", (function() {
            var t3 = this;
            return new Promise((function(e3, r3) {
              t3[c].destroy(null, (function(t4) {
                t4 ? r3(t4) : e3(p(void 0, true));
              }));
            }));
          })), n), g);
          t2.exports = function(t3) {
            var e3, r3 = Object.create(v, (i(e3 = {}, c, { value: t3, writable: true }), i(e3, s, { value: null, writable: true }), i(e3, a, { value: null, writable: true }), i(e3, u, { value: null, writable: true }), i(e3, h, { value: t3._readableState.endEmitted, writable: true }), i(e3, l, { value: function(t4, e4) {
              var n2 = r3[c].read();
              n2 ? (r3[f] = null, r3[s] = null, r3[a] = null, t4(p(n2, false))) : (r3[s] = t4, r3[a] = e4);
            }, writable: true }), e3));
            return r3[f] = null, o(t3, (function(t4) {
              if (t4 && "ERR_STREAM_PREMATURE_CLOSE" !== t4.code) {
                var e4 = r3[a];
                return null !== e4 && (r3[f] = null, r3[s] = null, r3[a] = null, e4(t4)), void (r3[u] = t4);
              }
              var n2 = r3[s];
              null !== n2 && (r3[f] = null, r3[s] = null, r3[a] = null, n2(p(void 0, true))), r3[h] = true;
            })), t3.on("readable", y.bind(null, r3)), r3;
          };
        }, 327: (t2, e2, r2) => {
          "use strict";
          function n(t3, e3) {
            var r3 = Object.keys(t3);
            if (Object.getOwnPropertySymbols) {
              var n2 = Object.getOwnPropertySymbols(t3);
              e3 && (n2 = n2.filter((function(e4) {
                return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
              }))), r3.push.apply(r3, n2);
            }
            return r3;
          }
          function i(t3, e3, r3) {
            return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
          }
          function o(t3, e3) {
            for (var r3 = 0; r3 < e3.length; r3++) {
              var n2 = e3[r3];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
            }
          }
          var s = r2(764).Buffer, a = r2(758).inspect, u = a && a.custom || "inspect";
          t2.exports = (function() {
            function t3() {
              !(function(t4, e4) {
                if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
              })(this, t3), this.head = null, this.tail = null, this.length = 0;
            }
            var e3, r3;
            return e3 = t3, (r3 = [{ key: "push", value: function(t4) {
              var e4 = { data: t4, next: null };
              this.length > 0 ? this.tail.next = e4 : this.head = e4, this.tail = e4, ++this.length;
            } }, { key: "unshift", value: function(t4) {
              var e4 = { data: t4, next: this.head };
              0 === this.length && (this.tail = e4), this.head = e4, ++this.length;
            } }, { key: "shift", value: function() {
              if (0 !== this.length) {
                var t4 = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t4;
              }
            } }, { key: "clear", value: function() {
              this.head = this.tail = null, this.length = 0;
            } }, { key: "join", value: function(t4) {
              if (0 === this.length) return "";
              for (var e4 = this.head, r4 = "" + e4.data; e4 = e4.next; ) r4 += t4 + e4.data;
              return r4;
            } }, { key: "concat", value: function(t4) {
              if (0 === this.length) return s.alloc(0);
              for (var e4, r4, n2, i2 = s.allocUnsafe(t4 >>> 0), o2 = this.head, a2 = 0; o2; ) e4 = o2.data, r4 = i2, n2 = a2, s.prototype.copy.call(e4, r4, n2), a2 += o2.data.length, o2 = o2.next;
              return i2;
            } }, { key: "consume", value: function(t4, e4) {
              var r4;
              return t4 < this.head.data.length ? (r4 = this.head.data.slice(0, t4), this.head.data = this.head.data.slice(t4)) : r4 = t4 === this.head.data.length ? this.shift() : e4 ? this._getString(t4) : this._getBuffer(t4), r4;
            } }, { key: "first", value: function() {
              return this.head.data;
            } }, { key: "_getString", value: function(t4) {
              var e4 = this.head, r4 = 1, n2 = e4.data;
              for (t4 -= n2.length; e4 = e4.next; ) {
                var i2 = e4.data, o2 = t4 > i2.length ? i2.length : t4;
                if (o2 === i2.length ? n2 += i2 : n2 += i2.slice(0, t4), 0 == (t4 -= o2)) {
                  o2 === i2.length ? (++r4, e4.next ? this.head = e4.next : this.head = this.tail = null) : (this.head = e4, e4.data = i2.slice(o2));
                  break;
                }
                ++r4;
              }
              return this.length -= r4, n2;
            } }, { key: "_getBuffer", value: function(t4) {
              var e4 = s.allocUnsafe(t4), r4 = this.head, n2 = 1;
              for (r4.data.copy(e4), t4 -= r4.data.length; r4 = r4.next; ) {
                var i2 = r4.data, o2 = t4 > i2.length ? i2.length : t4;
                if (i2.copy(e4, e4.length - t4, 0, o2), 0 == (t4 -= o2)) {
                  o2 === i2.length ? (++n2, r4.next ? this.head = r4.next : this.head = this.tail = null) : (this.head = r4, r4.data = i2.slice(o2));
                  break;
                }
                ++n2;
              }
              return this.length -= n2, e4;
            } }, { key: u, value: function(t4, e4) {
              return a(this, (function(t5) {
                for (var e5 = 1; e5 < arguments.length; e5++) {
                  var r4 = null != arguments[e5] ? arguments[e5] : {};
                  e5 % 2 ? n(Object(r4), true).forEach((function(e6) {
                    i(t5, e6, r4[e6]);
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t5, Object.getOwnPropertyDescriptors(r4)) : n(Object(r4)).forEach((function(e6) {
                    Object.defineProperty(t5, e6, Object.getOwnPropertyDescriptor(r4, e6));
                  }));
                }
                return t5;
              })({}, e4, { depth: 0, customInspect: false }));
            } }]) && o(e3.prototype, r3), t3;
          })();
        }, 195: (t2) => {
          "use strict";
          function e2(t3, e3) {
            n(t3, e3), r2(t3);
          }
          function r2(t3) {
            t3._writableState && !t3._writableState.emitClose || t3._readableState && !t3._readableState.emitClose || t3.emit("close");
          }
          function n(t3, e3) {
            t3.emit("error", e3);
          }
          t2.exports = { destroy: function(t3, i) {
            var o = this, s = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
            return s || a ? (i ? i(t3) : t3 && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, process.nextTick(n, this, t3)) : process.nextTick(n, this, t3)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t3 || null, (function(t4) {
              !i && t4 ? o._writableState ? o._writableState.errorEmitted ? process.nextTick(r2, o) : (o._writableState.errorEmitted = true, process.nextTick(e2, o, t4)) : process.nextTick(e2, o, t4) : i ? (process.nextTick(r2, o), i(t4)) : process.nextTick(r2, o);
            })), this);
          }, undestroy: function() {
            this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
          }, errorOrDestroy: function(t3, e3) {
            var r3 = t3._readableState, n2 = t3._writableState;
            r3 && r3.autoDestroy || n2 && n2.autoDestroy ? t3.destroy(e3) : t3.emit("error", e3);
          } };
        }, 610: (t2, e2, r2) => {
          "use strict";
          var n = r2(281).q.ERR_STREAM_PREMATURE_CLOSE;
          function i() {
          }
          t2.exports = function t3(e3, r3, o) {
            if ("function" == typeof r3) return t3(e3, null, r3);
            r3 || (r3 = {}), o = /* @__PURE__ */ (function(t4) {
              var e4 = false;
              return function() {
                if (!e4) {
                  e4 = true;
                  for (var r4 = arguments.length, n2 = new Array(r4), i2 = 0; i2 < r4; i2++) n2[i2] = arguments[i2];
                  t4.apply(this, n2);
                }
              };
            })(o || i);
            var s = r3.readable || false !== r3.readable && e3.readable, a = r3.writable || false !== r3.writable && e3.writable, u = function() {
              e3.writable || f();
            }, h = e3._writableState && e3._writableState.finished, f = function() {
              a = false, h = true, s || o.call(e3);
            }, l = e3._readableState && e3._readableState.endEmitted, c = function() {
              s = false, l = true, a || o.call(e3);
            }, p = function(t4) {
              o.call(e3, t4);
            }, d = function() {
              var t4;
              return s && !l ? (e3._readableState && e3._readableState.ended || (t4 = new n()), o.call(e3, t4)) : a && !h ? (e3._writableState && e3._writableState.ended || (t4 = new n()), o.call(e3, t4)) : void 0;
            }, y = function() {
              e3.req.on("finish", f);
            };
            return (function(t4) {
              return t4.setHeader && "function" == typeof t4.abort;
            })(e3) ? (e3.on("complete", f), e3.on("abort", d), e3.req ? y() : e3.on("request", y)) : a && !e3._writableState && (e3.on("end", u), e3.on("close", u)), e3.on("end", c), e3.on("finish", f), false !== r3.error && e3.on("error", p), e3.on("close", d), function() {
              e3.removeListener("complete", f), e3.removeListener("abort", d), e3.removeListener("request", y), e3.req && e3.req.removeListener("finish", f), e3.removeListener("end", u), e3.removeListener("close", u), e3.removeListener("finish", f), e3.removeListener("end", c), e3.removeListener("error", p), e3.removeListener("close", d);
            };
          };
        }, 167: (t2) => {
          t2.exports = function() {
            throw new Error("Readable.from is not available in the browser");
          };
        }, 946: (t2, e2, r2) => {
          "use strict";
          var n, i = r2(281).q, o = i.ERR_MISSING_ARGS, s = i.ERR_STREAM_DESTROYED;
          function a(t3) {
            if (t3) throw t3;
          }
          function u(t3, e3, i2, o2) {
            o2 = /* @__PURE__ */ (function(t4) {
              var e4 = false;
              return function() {
                e4 || (e4 = true, t4.apply(void 0, arguments));
              };
            })(o2);
            var a2 = false;
            t3.on("close", (function() {
              a2 = true;
            })), void 0 === n && (n = r2(610)), n(t3, { readable: e3, writable: i2 }, (function(t4) {
              if (t4) return o2(t4);
              a2 = true, o2();
            }));
            var u2 = false;
            return function(e4) {
              if (!a2 && !u2) return u2 = true, (function(t4) {
                return t4.setHeader && "function" == typeof t4.abort;
              })(t3) ? t3.abort() : "function" == typeof t3.destroy ? t3.destroy() : void o2(e4 || new s("pipe"));
            };
          }
          function h(t3) {
            t3();
          }
          function f(t3, e3) {
            return t3.pipe(e3);
          }
          function l(t3) {
            return t3.length ? "function" != typeof t3[t3.length - 1] ? a : t3.pop() : a;
          }
          t2.exports = function() {
            for (var t3 = arguments.length, e3 = new Array(t3), r3 = 0; r3 < t3; r3++) e3[r3] = arguments[r3];
            var n2, i2 = l(e3);
            if (Array.isArray(e3[0]) && (e3 = e3[0]), e3.length < 2) throw new o("streams");
            var s2 = e3.map((function(t4, r4) {
              var o2 = r4 < e3.length - 1;
              return u(t4, o2, r4 > 0, (function(t5) {
                n2 || (n2 = t5), t5 && s2.forEach(h), o2 || (s2.forEach(h), i2(n2));
              }));
            }));
            return e3.reduce(f);
          };
        }, 457: (t2, e2, r2) => {
          "use strict";
          var n = r2(281).q.ERR_INVALID_OPT_VALUE;
          t2.exports = { getHighWaterMark: function(t3, e3, r3, i) {
            var o = (function(t4, e4, r4) {
              return null != t4.highWaterMark ? t4.highWaterMark : e4 ? t4[r4] : null;
            })(e3, i, r3);
            if (null != o) {
              if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r3 : "highWaterMark", o);
              return Math.floor(o);
            }
            return t3.objectMode ? 16 : 16384;
          } };
        }, 503: (t2, e2, r2) => {
          t2.exports = r2(187).EventEmitter;
        }, 473: (t2, e2, r2) => {
          (e2 = t2.exports = r2(481)).Stream = e2, e2.Readable = e2, e2.Writable = r2(229), e2.Duplex = r2(753), e2.Transform = r2(605), e2.PassThrough = r2(725), e2.finished = r2(610), e2.pipeline = r2(946);
        }, 785: (t2, e2, r2) => {
          "use strict";
          var n = r2(764).Buffer, i = r2(717), o = r2(349), s = new Array(16), a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], h = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], f = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], l = [0, 1518500249, 1859775393, 2400959708, 2840853838], c = [1352829926, 1548603684, 1836072691, 2053994217, 0];
          function p() {
            o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
          }
          function d(t3, e3) {
            return t3 << e3 | t3 >>> 32 - e3;
          }
          function y(t3, e3, r3, n2, i2, o2, s2, a2) {
            return d(t3 + (e3 ^ r3 ^ n2) + o2 + s2 | 0, a2) + i2 | 0;
          }
          function g(t3, e3, r3, n2, i2, o2, s2, a2) {
            return d(t3 + (e3 & r3 | ~e3 & n2) + o2 + s2 | 0, a2) + i2 | 0;
          }
          function v(t3, e3, r3, n2, i2, o2, s2, a2) {
            return d(t3 + ((e3 | ~r3) ^ n2) + o2 + s2 | 0, a2) + i2 | 0;
          }
          function b(t3, e3, r3, n2, i2, o2, s2, a2) {
            return d(t3 + (e3 & n2 | r3 & ~n2) + o2 + s2 | 0, a2) + i2 | 0;
          }
          function w(t3, e3, r3, n2, i2, o2, s2, a2) {
            return d(t3 + (e3 ^ (r3 | ~n2)) + o2 + s2 | 0, a2) + i2 | 0;
          }
          i(p, o), p.prototype._update = function() {
            for (var t3 = s, e3 = 0; e3 < 16; ++e3) t3[e3] = this._block.readInt32LE(4 * e3);
            for (var r3 = 0 | this._a, n2 = 0 | this._b, i2 = 0 | this._c, o2 = 0 | this._d, p2 = 0 | this._e, _ = 0 | this._a, m = 0 | this._b, E = 0 | this._c, S = 0 | this._d, R = 0 | this._e, A = 0; A < 80; A += 1) {
              var B, L;
              A < 16 ? (B = y(r3, n2, i2, o2, p2, t3[a[A]], l[0], h[A]), L = w(_, m, E, S, R, t3[u[A]], c[0], f[A])) : A < 32 ? (B = g(r3, n2, i2, o2, p2, t3[a[A]], l[1], h[A]), L = b(_, m, E, S, R, t3[u[A]], c[1], f[A])) : A < 48 ? (B = v(r3, n2, i2, o2, p2, t3[a[A]], l[2], h[A]), L = v(_, m, E, S, R, t3[u[A]], c[2], f[A])) : A < 64 ? (B = b(r3, n2, i2, o2, p2, t3[a[A]], l[3], h[A]), L = g(_, m, E, S, R, t3[u[A]], c[3], f[A])) : (B = w(r3, n2, i2, o2, p2, t3[a[A]], l[4], h[A]), L = y(_, m, E, S, R, t3[u[A]], c[4], f[A])), r3 = p2, p2 = o2, o2 = d(i2, 10), i2 = n2, n2 = B, _ = R, R = S, S = d(E, 10), E = m, m = L;
            }
            var M = this._b + i2 + S | 0;
            this._b = this._c + o2 + R | 0, this._c = this._d + p2 + _ | 0, this._d = this._e + r3 + m | 0, this._e = this._a + n2 + E | 0, this._a = M;
          }, p.prototype._digest = function() {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var t3 = n.alloc ? n.alloc(20) : new n(20);
            return t3.writeInt32LE(this._a, 0), t3.writeInt32LE(this._b, 4), t3.writeInt32LE(this._c, 8), t3.writeInt32LE(this._d, 12), t3.writeInt32LE(this._e, 16), t3;
          }, t2.exports = p;
        }, 509: (t2, e2, r2) => {
          var n = r2(764), i = n.Buffer;
          function o(t3, e3) {
            for (var r3 in t3) e3[r3] = t3[r3];
          }
          function s(t3, e3, r3) {
            return i(t3, e3, r3);
          }
          i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t2.exports = n : (o(n, e2), e2.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function(t3, e3, r3) {
            if ("number" == typeof t3) throw new TypeError("Argument must not be a number");
            return i(t3, e3, r3);
          }, s.alloc = function(t3, e3, r3) {
            if ("number" != typeof t3) throw new TypeError("Argument must be a number");
            var n2 = i(t3);
            return void 0 !== e3 ? "string" == typeof r3 ? n2.fill(e3, r3) : n2.fill(e3) : n2.fill(0), n2;
          }, s.allocUnsafe = function(t3) {
            if ("number" != typeof t3) throw new TypeError("Argument must be a number");
            return i(t3);
          }, s.allocUnsafeSlow = function(t3) {
            if ("number" != typeof t3) throw new TypeError("Argument must be a number");
            return n.SlowBuffer(t3);
          };
        }, 189: (t2, e2, r2) => {
          var n = r2(509).Buffer;
          function i(t3, e3) {
            this._block = n.alloc(t3), this._finalSize = e3, this._blockSize = t3, this._len = 0;
          }
          i.prototype.update = function(t3, e3) {
            "string" == typeof t3 && (e3 = e3 || "utf8", t3 = n.from(t3, e3));
            for (var r3 = this._block, i2 = this._blockSize, o = t3.length, s = this._len, a = 0; a < o; ) {
              for (var u = s % i2, h = Math.min(o - a, i2 - u), f = 0; f < h; f++) r3[u + f] = t3[a + f];
              a += h, (s += h) % i2 == 0 && this._update(r3);
            }
            return this._len += o, this;
          }, i.prototype.digest = function(t3) {
            var e3 = this._len % this._blockSize;
            this._block[e3] = 128, this._block.fill(0, e3 + 1), e3 >= this._finalSize && (this._update(this._block), this._block.fill(0));
            var r3 = 8 * this._len;
            if (r3 <= 4294967295) this._block.writeUInt32BE(r3, this._blockSize - 4);
            else {
              var n2 = (4294967295 & r3) >>> 0, i2 = (r3 - n2) / 4294967296;
              this._block.writeUInt32BE(i2, this._blockSize - 8), this._block.writeUInt32BE(n2, this._blockSize - 4);
            }
            this._update(this._block);
            var o = this._hash();
            return t3 ? o.toString(t3) : o;
          }, i.prototype._update = function() {
            throw new Error("_update must be implemented by subclass");
          }, t2.exports = i;
        }, 72: (t2, e2, r2) => {
          var n = t2.exports = function(t3) {
            t3 = t3.toLowerCase();
            var e3 = n[t3];
            if (!e3) throw new Error(t3 + " is not supported (we accept pull requests)");
            return new e3();
          };
          n.sha = r2(448), n.sha1 = r2(336), n.sha224 = r2(432), n.sha256 = r2(499), n.sha384 = r2(686), n.sha512 = r2(816);
        }, 448: (t2, e2, r2) => {
          var n = r2(717), i = r2(189), o = r2(509).Buffer, s = [1518500249, 1859775393, -1894007588, -899497514], a = new Array(80);
          function u() {
            this.init(), this._w = a, i.call(this, 64, 56);
          }
          function h(t3) {
            return t3 << 30 | t3 >>> 2;
          }
          function f(t3, e3, r3, n2) {
            return 0 === t3 ? e3 & r3 | ~e3 & n2 : 2 === t3 ? e3 & r3 | e3 & n2 | r3 & n2 : e3 ^ r3 ^ n2;
          }
          n(u, i), u.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
          }, u.prototype._update = function(t3) {
            for (var e3, r3 = this._w, n2 = 0 | this._a, i2 = 0 | this._b, o2 = 0 | this._c, a2 = 0 | this._d, u2 = 0 | this._e, l = 0; l < 16; ++l) r3[l] = t3.readInt32BE(4 * l);
            for (; l < 80; ++l) r3[l] = r3[l - 3] ^ r3[l - 8] ^ r3[l - 14] ^ r3[l - 16];
            for (var c = 0; c < 80; ++c) {
              var p = ~~(c / 20), d = 0 | ((e3 = n2) << 5 | e3 >>> 27) + f(p, i2, o2, a2) + u2 + r3[c] + s[p];
              u2 = a2, a2 = o2, o2 = h(i2), i2 = n2, n2 = d;
            }
            this._a = n2 + this._a | 0, this._b = i2 + this._b | 0, this._c = o2 + this._c | 0, this._d = a2 + this._d | 0, this._e = u2 + this._e | 0;
          }, u.prototype._hash = function() {
            var t3 = o.allocUnsafe(20);
            return t3.writeInt32BE(0 | this._a, 0), t3.writeInt32BE(0 | this._b, 4), t3.writeInt32BE(0 | this._c, 8), t3.writeInt32BE(0 | this._d, 12), t3.writeInt32BE(0 | this._e, 16), t3;
          }, t2.exports = u;
        }, 336: (t2, e2, r2) => {
          var n = r2(717), i = r2(189), o = r2(509).Buffer, s = [1518500249, 1859775393, -1894007588, -899497514], a = new Array(80);
          function u() {
            this.init(), this._w = a, i.call(this, 64, 56);
          }
          function h(t3) {
            return t3 << 5 | t3 >>> 27;
          }
          function f(t3) {
            return t3 << 30 | t3 >>> 2;
          }
          function l(t3, e3, r3, n2) {
            return 0 === t3 ? e3 & r3 | ~e3 & n2 : 2 === t3 ? e3 & r3 | e3 & n2 | r3 & n2 : e3 ^ r3 ^ n2;
          }
          n(u, i), u.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
          }, u.prototype._update = function(t3) {
            for (var e3, r3 = this._w, n2 = 0 | this._a, i2 = 0 | this._b, o2 = 0 | this._c, a2 = 0 | this._d, u2 = 0 | this._e, c = 0; c < 16; ++c) r3[c] = t3.readInt32BE(4 * c);
            for (; c < 80; ++c) r3[c] = (e3 = r3[c - 3] ^ r3[c - 8] ^ r3[c - 14] ^ r3[c - 16]) << 1 | e3 >>> 31;
            for (var p = 0; p < 80; ++p) {
              var d = ~~(p / 20), y = h(n2) + l(d, i2, o2, a2) + u2 + r3[p] + s[d] | 0;
              u2 = a2, a2 = o2, o2 = f(i2), i2 = n2, n2 = y;
            }
            this._a = n2 + this._a | 0, this._b = i2 + this._b | 0, this._c = o2 + this._c | 0, this._d = a2 + this._d | 0, this._e = u2 + this._e | 0;
          }, u.prototype._hash = function() {
            var t3 = o.allocUnsafe(20);
            return t3.writeInt32BE(0 | this._a, 0), t3.writeInt32BE(0 | this._b, 4), t3.writeInt32BE(0 | this._c, 8), t3.writeInt32BE(0 | this._d, 12), t3.writeInt32BE(0 | this._e, 16), t3;
          }, t2.exports = u;
        }, 432: (t2, e2, r2) => {
          var n = r2(717), i = r2(499), o = r2(189), s = r2(509).Buffer, a = new Array(64);
          function u() {
            this.init(), this._w = a, o.call(this, 64, 56);
          }
          n(u, i), u.prototype.init = function() {
            return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
          }, u.prototype._hash = function() {
            var t3 = s.allocUnsafe(28);
            return t3.writeInt32BE(this._a, 0), t3.writeInt32BE(this._b, 4), t3.writeInt32BE(this._c, 8), t3.writeInt32BE(this._d, 12), t3.writeInt32BE(this._e, 16), t3.writeInt32BE(this._f, 20), t3.writeInt32BE(this._g, 24), t3;
          }, t2.exports = u;
        }, 499: (t2, e2, r2) => {
          var n = r2(717), i = r2(189), o = r2(509).Buffer, s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], a = new Array(64);
          function u() {
            this.init(), this._w = a, i.call(this, 64, 56);
          }
          function h(t3, e3, r3) {
            return r3 ^ t3 & (e3 ^ r3);
          }
          function f(t3, e3, r3) {
            return t3 & e3 | r3 & (t3 | e3);
          }
          function l(t3) {
            return (t3 >>> 2 | t3 << 30) ^ (t3 >>> 13 | t3 << 19) ^ (t3 >>> 22 | t3 << 10);
          }
          function c(t3) {
            return (t3 >>> 6 | t3 << 26) ^ (t3 >>> 11 | t3 << 21) ^ (t3 >>> 25 | t3 << 7);
          }
          function p(t3) {
            return (t3 >>> 7 | t3 << 25) ^ (t3 >>> 18 | t3 << 14) ^ t3 >>> 3;
          }
          n(u, i), u.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
          }, u.prototype._update = function(t3) {
            for (var e3, r3 = this._w, n2 = 0 | this._a, i2 = 0 | this._b, o2 = 0 | this._c, a2 = 0 | this._d, u2 = 0 | this._e, d = 0 | this._f, y = 0 | this._g, g = 0 | this._h, v = 0; v < 16; ++v) r3[v] = t3.readInt32BE(4 * v);
            for (; v < 64; ++v) r3[v] = 0 | (((e3 = r3[v - 2]) >>> 17 | e3 << 15) ^ (e3 >>> 19 | e3 << 13) ^ e3 >>> 10) + r3[v - 7] + p(r3[v - 15]) + r3[v - 16];
            for (var b = 0; b < 64; ++b) {
              var w = g + c(u2) + h(u2, d, y) + s[b] + r3[b] | 0, _ = l(n2) + f(n2, i2, o2) | 0;
              g = y, y = d, d = u2, u2 = a2 + w | 0, a2 = o2, o2 = i2, i2 = n2, n2 = w + _ | 0;
            }
            this._a = n2 + this._a | 0, this._b = i2 + this._b | 0, this._c = o2 + this._c | 0, this._d = a2 + this._d | 0, this._e = u2 + this._e | 0, this._f = d + this._f | 0, this._g = y + this._g | 0, this._h = g + this._h | 0;
          }, u.prototype._hash = function() {
            var t3 = o.allocUnsafe(32);
            return t3.writeInt32BE(this._a, 0), t3.writeInt32BE(this._b, 4), t3.writeInt32BE(this._c, 8), t3.writeInt32BE(this._d, 12), t3.writeInt32BE(this._e, 16), t3.writeInt32BE(this._f, 20), t3.writeInt32BE(this._g, 24), t3.writeInt32BE(this._h, 28), t3;
          }, t2.exports = u;
        }, 686: (t2, e2, r2) => {
          var n = r2(717), i = r2(816), o = r2(189), s = r2(509).Buffer, a = new Array(160);
          function u() {
            this.init(), this._w = a, o.call(this, 128, 112);
          }
          n(u, i), u.prototype.init = function() {
            return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
          }, u.prototype._hash = function() {
            var t3 = s.allocUnsafe(48);
            function e3(e4, r3, n2) {
              t3.writeInt32BE(e4, n2), t3.writeInt32BE(r3, n2 + 4);
            }
            return e3(this._ah, this._al, 0), e3(this._bh, this._bl, 8), e3(this._ch, this._cl, 16), e3(this._dh, this._dl, 24), e3(this._eh, this._el, 32), e3(this._fh, this._fl, 40), t3;
          }, t2.exports = u;
        }, 816: (t2, e2, r2) => {
          var n = r2(717), i = r2(189), o = r2(509).Buffer, s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591], a = new Array(160);
          function u() {
            this.init(), this._w = a, i.call(this, 128, 112);
          }
          function h(t3, e3, r3) {
            return r3 ^ t3 & (e3 ^ r3);
          }
          function f(t3, e3, r3) {
            return t3 & e3 | r3 & (t3 | e3);
          }
          function l(t3, e3) {
            return (t3 >>> 28 | e3 << 4) ^ (e3 >>> 2 | t3 << 30) ^ (e3 >>> 7 | t3 << 25);
          }
          function c(t3, e3) {
            return (t3 >>> 14 | e3 << 18) ^ (t3 >>> 18 | e3 << 14) ^ (e3 >>> 9 | t3 << 23);
          }
          function p(t3, e3) {
            return (t3 >>> 1 | e3 << 31) ^ (t3 >>> 8 | e3 << 24) ^ t3 >>> 7;
          }
          function d(t3, e3) {
            return (t3 >>> 1 | e3 << 31) ^ (t3 >>> 8 | e3 << 24) ^ (t3 >>> 7 | e3 << 25);
          }
          function y(t3, e3) {
            return (t3 >>> 19 | e3 << 13) ^ (e3 >>> 29 | t3 << 3) ^ t3 >>> 6;
          }
          function g(t3, e3) {
            return (t3 >>> 19 | e3 << 13) ^ (e3 >>> 29 | t3 << 3) ^ (t3 >>> 6 | e3 << 26);
          }
          function v(t3, e3) {
            return t3 >>> 0 < e3 >>> 0 ? 1 : 0;
          }
          n(u, i), u.prototype.init = function() {
            return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
          }, u.prototype._update = function(t3) {
            for (var e3 = this._w, r3 = 0 | this._ah, n2 = 0 | this._bh, i2 = 0 | this._ch, o2 = 0 | this._dh, a2 = 0 | this._eh, u2 = 0 | this._fh, b = 0 | this._gh, w = 0 | this._hh, _ = 0 | this._al, m = 0 | this._bl, E = 0 | this._cl, S = 0 | this._dl, R = 0 | this._el, A = 0 | this._fl, B = 0 | this._gl, L = 0 | this._hl, M = 0; M < 32; M += 2) e3[M] = t3.readInt32BE(4 * M), e3[M + 1] = t3.readInt32BE(4 * M + 4);
            for (; M < 160; M += 2) {
              var k = e3[M - 30], T = e3[M - 30 + 1], I = p(k, T), O = d(T, k), x = y(k = e3[M - 4], T = e3[M - 4 + 1]), P = g(T, k), U = e3[M - 14], C = e3[M - 14 + 1], N = e3[M - 32], j = e3[M - 32 + 1], D = O + C | 0, q = I + U + v(D, O) | 0;
              q = (q = q + x + v(D = D + P | 0, P) | 0) + N + v(D = D + j | 0, j) | 0, e3[M] = q, e3[M + 1] = D;
            }
            for (var H = 0; H < 160; H += 2) {
              q = e3[H], D = e3[H + 1];
              var F = f(r3, n2, i2), W = f(_, m, E), z = l(r3, _), $ = l(_, r3), K = c(a2, R), V = c(R, a2), Z = s[H], G = s[H + 1], Y = h(a2, u2, b), J = h(R, A, B), X = L + V | 0, Q = w + K + v(X, L) | 0;
              Q = (Q = (Q = Q + Y + v(X = X + J | 0, J) | 0) + Z + v(X = X + G | 0, G) | 0) + q + v(X = X + D | 0, D) | 0;
              var tt = $ + W | 0, et = z + F + v(tt, $) | 0;
              w = b, L = B, b = u2, B = A, u2 = a2, A = R, a2 = o2 + Q + v(R = S + X | 0, S) | 0, o2 = i2, S = E, i2 = n2, E = m, n2 = r3, m = _, r3 = Q + et + v(_ = X + tt | 0, X) | 0;
            }
            this._al = this._al + _ | 0, this._bl = this._bl + m | 0, this._cl = this._cl + E | 0, this._dl = this._dl + S | 0, this._el = this._el + R | 0, this._fl = this._fl + A | 0, this._gl = this._gl + B | 0, this._hl = this._hl + L | 0, this._ah = this._ah + r3 + v(this._al, _) | 0, this._bh = this._bh + n2 + v(this._bl, m) | 0, this._ch = this._ch + i2 + v(this._cl, E) | 0, this._dh = this._dh + o2 + v(this._dl, S) | 0, this._eh = this._eh + a2 + v(this._el, R) | 0, this._fh = this._fh + u2 + v(this._fl, A) | 0, this._gh = this._gh + b + v(this._gl, B) | 0, this._hh = this._hh + w + v(this._hl, L) | 0;
          }, u.prototype._hash = function() {
            var t3 = o.allocUnsafe(64);
            function e3(e4, r3, n2) {
              t3.writeInt32BE(e4, n2), t3.writeInt32BE(r3, n2 + 4);
            }
            return e3(this._ah, this._al, 0), e3(this._bh, this._bl, 8), e3(this._ch, this._cl, 16), e3(this._dh, this._dl, 24), e3(this._eh, this._el, 32), e3(this._fh, this._fl, 40), e3(this._gh, this._gl, 48), e3(this._hh, this._hl, 56), t3;
          }, t2.exports = u;
        }, 830: (t2, e2, r2) => {
          t2.exports = i;
          var n = r2(187).EventEmitter;
          function i() {
            n.call(this);
          }
          r2(717)(i, n), i.Readable = r2(481), i.Writable = r2(229), i.Duplex = r2(753), i.Transform = r2(605), i.PassThrough = r2(725), i.finished = r2(610), i.pipeline = r2(946), i.Stream = i, i.prototype.pipe = function(t3, e3) {
            var r3 = this;
            function i2(e4) {
              t3.writable && false === t3.write(e4) && r3.pause && r3.pause();
            }
            function o() {
              r3.readable && r3.resume && r3.resume();
            }
            r3.on("data", i2), t3.on("drain", o), t3._isStdio || e3 && false === e3.end || (r3.on("end", a), r3.on("close", u));
            var s = false;
            function a() {
              s || (s = true, t3.end());
            }
            function u() {
              s || (s = true, "function" == typeof t3.destroy && t3.destroy());
            }
            function h(t4) {
              if (f(), 0 === n.listenerCount(this, "error")) throw t4;
            }
            function f() {
              r3.removeListener("data", i2), t3.removeListener("drain", o), r3.removeListener("end", a), r3.removeListener("close", u), r3.removeListener("error", h), t3.removeListener("error", h), r3.removeListener("end", f), r3.removeListener("close", f), t3.removeListener("close", f);
            }
            return r3.on("error", h), t3.on("error", h), r3.on("end", f), r3.on("close", f), t3.on("close", f), t3.emit("pipe", r3), t3;
          };
        }, 553: (t2, e2, r2) => {
          "use strict";
          var n = r2(509).Buffer, i = n.isEncoding || function(t3) {
            switch ((t3 = "" + t3) && t3.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return true;
              default:
                return false;
            }
          };
          function o(t3) {
            var e3;
            switch (this.encoding = (function(t4) {
              var e4 = (function(t5) {
                if (!t5) return "utf8";
                for (var e5; ; ) switch (t5) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t5;
                  default:
                    if (e5) return;
                    t5 = ("" + t5).toLowerCase(), e5 = true;
                }
              })(t4);
              if ("string" != typeof e4 && (n.isEncoding === i || !i(t4))) throw new Error("Unknown encoding: " + t4);
              return e4 || t4;
            })(t3), this.encoding) {
              case "utf16le":
                this.text = u, this.end = h, e3 = 4;
                break;
              case "utf8":
                this.fillLast = a, e3 = 4;
                break;
              case "base64":
                this.text = f, this.end = l, e3 = 3;
                break;
              default:
                return this.write = c, void (this.end = p);
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e3);
          }
          function s(t3) {
            return t3 <= 127 ? 0 : t3 >> 5 == 6 ? 2 : t3 >> 4 == 14 ? 3 : t3 >> 3 == 30 ? 4 : t3 >> 6 == 2 ? -1 : -2;
          }
          function a(t3) {
            var e3 = this.lastTotal - this.lastNeed, r3 = (function(t4, e4, r4) {
              if (128 != (192 & e4[0])) return t4.lastNeed = 0, "\uFFFD";
              if (t4.lastNeed > 1 && e4.length > 1) {
                if (128 != (192 & e4[1])) return t4.lastNeed = 1, "\uFFFD";
                if (t4.lastNeed > 2 && e4.length > 2 && 128 != (192 & e4[2])) return t4.lastNeed = 2, "\uFFFD";
              }
            })(this, t3);
            return void 0 !== r3 ? r3 : this.lastNeed <= t3.length ? (t3.copy(this.lastChar, e3, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t3.copy(this.lastChar, e3, 0, t3.length), void (this.lastNeed -= t3.length));
          }
          function u(t3, e3) {
            if ((t3.length - e3) % 2 == 0) {
              var r3 = t3.toString("utf16le", e3);
              if (r3) {
                var n2 = r3.charCodeAt(r3.length - 1);
                if (n2 >= 55296 && n2 <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t3[t3.length - 2], this.lastChar[1] = t3[t3.length - 1], r3.slice(0, -1);
              }
              return r3;
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t3[t3.length - 1], t3.toString("utf16le", e3, t3.length - 1);
          }
          function h(t3) {
            var e3 = t3 && t3.length ? this.write(t3) : "";
            if (this.lastNeed) {
              var r3 = this.lastTotal - this.lastNeed;
              return e3 + this.lastChar.toString("utf16le", 0, r3);
            }
            return e3;
          }
          function f(t3, e3) {
            var r3 = (t3.length - e3) % 3;
            return 0 === r3 ? t3.toString("base64", e3) : (this.lastNeed = 3 - r3, this.lastTotal = 3, 1 === r3 ? this.lastChar[0] = t3[t3.length - 1] : (this.lastChar[0] = t3[t3.length - 2], this.lastChar[1] = t3[t3.length - 1]), t3.toString("base64", e3, t3.length - r3));
          }
          function l(t3) {
            var e3 = t3 && t3.length ? this.write(t3) : "";
            return this.lastNeed ? e3 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e3;
          }
          function c(t3) {
            return t3.toString(this.encoding);
          }
          function p(t3) {
            return t3 && t3.length ? this.write(t3) : "";
          }
          e2.s = o, o.prototype.write = function(t3) {
            if (0 === t3.length) return "";
            var e3, r3;
            if (this.lastNeed) {
              if (void 0 === (e3 = this.fillLast(t3))) return "";
              r3 = this.lastNeed, this.lastNeed = 0;
            } else r3 = 0;
            return r3 < t3.length ? e3 ? e3 + this.text(t3, r3) : this.text(t3, r3) : e3 || "";
          }, o.prototype.end = function(t3) {
            var e3 = t3 && t3.length ? this.write(t3) : "";
            return this.lastNeed ? e3 + "\uFFFD" : e3;
          }, o.prototype.text = function(t3, e3) {
            var r3 = (function(t4, e4, r4) {
              var n3 = e4.length - 1;
              if (n3 < r4) return 0;
              var i2 = s(e4[n3]);
              return i2 >= 0 ? (i2 > 0 && (t4.lastNeed = i2 - 1), i2) : --n3 < r4 || -2 === i2 ? 0 : (i2 = s(e4[n3])) >= 0 ? (i2 > 0 && (t4.lastNeed = i2 - 2), i2) : --n3 < r4 || -2 === i2 ? 0 : (i2 = s(e4[n3])) >= 0 ? (i2 > 0 && (2 === i2 ? i2 = 0 : t4.lastNeed = i2 - 3), i2) : 0;
            })(this, t3, e3);
            if (!this.lastNeed) return t3.toString("utf8", e3);
            this.lastTotal = r3;
            var n2 = t3.length - (r3 - this.lastNeed);
            return t3.copy(this.lastChar, 0, n2), t3.toString("utf8", e3, n2);
          }, o.prototype.fillLast = function(t3) {
            if (this.lastNeed <= t3.length) return t3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            t3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t3.length), this.lastNeed -= t3.length;
          };
        }, 927: (t2, e2, r2) => {
          function n(t3) {
            try {
              if (!r2.g.localStorage) return false;
            } catch (t4) {
              return false;
            }
            var e3 = r2.g.localStorage[t3];
            return null != e3 && "true" === String(e3).toLowerCase();
          }
          t2.exports = function(t3, e3) {
            if (n("noDeprecation")) return t3;
            var r3 = false;
            return function() {
              if (!r3) {
                if (n("throwDeprecation")) throw new Error(e3);
                n("traceDeprecation") ? console.trace(e3) : console.warn(e3), r3 = true;
              }
              return t3.apply(this, arguments);
            };
          };
        }, 758: () => {
        } }, e = {};
        function r(n) {
          if (e[n]) return e[n].exports;
          var i = e[n] = { id: n, loaded: false, exports: {} };
          return t[n](i, i.exports, r), i.loaded = true, i.exports;
        }
        return r.g = (function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (t2) {
            if ("object" == typeof window) return window;
          }
        })(), r.nmd = (t2) => (t2.paths = [], t2.children || (t2.children = []), t2), r(861);
      })();
    }));
  }
});

// src/reused/reconcile.ts
var import_bchaddrjs_0_5_2_min = __toESM(require_bchaddrjs_0_5_2_min(), 1);
var MAX = BigInt("2100000000000000");
var now = () => (/* @__PURE__ */ new Date()).toISOString();
function amountToSats(value) {
  const text = String(value ?? "").trim();
  if (!/^(0|[1-9]\d*)(\.\d{1,8})?$/.test(text)) throw new Error("Use a positive BCH amount with at most 8 decimal places.");
  const [whole, fraction = ""] = text.split(".");
  const sats = BigInt(whole) * BigInt(1e8) + BigInt(fraction.padEnd(8, "0"));
  if (sats <= BigInt(0) || sats > MAX) throw new Error("The BCH amount must be greater than zero and at most 21 million.");
  return sats.toString();
}
function checkedSats(value) {
  const text = String(value ?? "").trim();
  if (!/^(0|[1-9]\d*)$/.test(text)) throw new Error("Satoshi amounts must be whole numbers.");
  const amount = BigInt(text);
  if (amount <= BigInt(0) || amount > MAX) throw new Error("Satoshi amount is outside the supported range.");
  return amount.toString();
}
function normalizeAddress(value) {
  const text = String(value ?? "").trim();
  const candidate = /^[qp][a-z0-9]+$/i.test(text) ? `bitcoincash:${text}` : text;
  if (!import_bchaddrjs_0_5_2_min.default.isValidAddress(candidate) || !import_bchaddrjs_0_5_2_min.default.isMainnetAddress(candidate)) throw new Error("Enter a valid Bitcoin Cash mainnet address (CashAddr or legacy).");
  return import_bchaddrjs_0_5_2_min.default.toCashAddress(candidate).toLowerCase();
}
function field(row, ...names) {
  for (const name of names) if (row[name] !== void 0 && row[name] !== "") return row[name];
  return "";
}
function textField(value, max = 180) {
  const text = String(value ?? "").trim();
  if (text.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(text)) throw new Error("A text field is too long or contains unsupported characters.");
  return text;
}
function parseReceipt(row, source = "import") {
  const txid = textField(field(row, "txid", "transaction_id"), 64).toLowerCase();
  if (!/^[a-f0-9]{64}$/.test(txid)) throw new Error("Every receipt needs a 64-character transaction ID.");
  const voutText = String(field(row, "output_index", "vout"));
  if (!/^\d+$/.test(voutText) || Number(voutText) > 4294967295) throw new Error("output_index must be a non-negative whole number.");
  const confValue = field(row, "confirmations");
  const confirmations = confValue === "" || confValue === null ? null : Number(confValue);
  if (confirmations !== null && (!Number.isSafeInteger(confirmations) || confirmations < 0)) throw new Error("confirmations must be a non-negative whole number or empty.");
  const observed = field(row, "observed_at", "observedAt");
  const observedAt = observed ? String(observed) : now();
  if (Number.isNaN(Date.parse(observedAt))) throw new Error("observed_at must be a valid timestamp.");
  return { txid, vout: Number(voutText), address: normalizeAddress(field(row, "address", "recipient")), amountSats: field(row, "amount_sats", "amountSats") ? checkedSats(field(row, "amount_sats", "amountSats")) : amountToSats(field(row, "amount_bch")), invoiceId: textField(field(row, "invoice_id", "invoiceId"), 80), confirmations, source, observedAt };
}
var receiptKey = (receipt) => `${receipt.txid}:${receipt.vout}`;
function mergeReceipts(existing, incoming) {
  const map = new Map(existing.map((receipt) => [receiptKey(receipt), receipt]));
  let duplicates = 0;
  for (const receipt of incoming) {
    const key = receiptKey(receipt);
    const old = map.get(key);
    if (old) {
      if (old.address !== receipt.address || old.amountSats !== receipt.amountSats || old.invoiceId && receipt.invoiceId && old.invoiceId !== receipt.invoiceId) throw new Error(`Conflicting records for ${key.slice(0, 12)}\u2026:${receipt.vout}. No receipts were imported.`);
      duplicates++;
      if (receipt.source === "blockchair" || old.source !== "blockchair") map.set(key, { ...receipt, invoiceId: receipt.invoiceId || old.invoiceId });
    } else map.set(key, receipt);
  }
  if (map.size > 5e3) throw new Error("This workspace supports at most 5,000 receipt outputs.");
  return { receipts: [...map.values()], duplicates };
}

// src/reused/blockchair.ts
function normalizeBlockchair(payload, txid, observedAt = (/* @__PURE__ */ new Date()).toISOString()) {
  if (!/^[a-f0-9]{64}$/.test(txid)) throw new Error("Invalid transaction ID.");
  const data = payload;
  if (data?.context?.code !== 200) throw new Error("Blockchair did not return a successful transaction response.");
  const item = data.data?.[txid];
  if (!item) throw new Error("Transaction not found on Bitcoin Cash mainnet.");
  if (item.transaction?.hash !== txid || !Array.isArray(item.outputs) || item.outputs.length > 5e3) throw new Error("The provider returned an unsupported transaction response.");
  const block = item.transaction.block_id;
  const state = data.context.state;
  let confirmations = null;
  if (block === -1) confirmations = 0;
  else if (typeof block === "number" && Number.isSafeInteger(block) && block >= 0 && typeof state === "number" && Number.isSafeInteger(state) && state >= block) confirmations = state - block + 1;
  else if (block !== void 0 && block !== null && !(typeof block === "number" && Number.isSafeInteger(block) && block >= 0)) throw new Error("The provider returned an invalid block height.");
  const receipts = [];
  let skippedOutputs = 0;
  for (const output of item.outputs) {
    if (!["pubkeyhash", "scripthash"].includes(String(output.type)) || output.value === 0 || output.value === "0") {
      skippedOutputs++;
      continue;
    }
    if (output.transaction_hash !== void 0 && output.transaction_hash !== txid) throw new Error("An output belongs to a different transaction.");
    if (typeof output.value === "number" && !Number.isSafeInteger(output.value)) throw new Error("The provider returned an imprecise amount.");
    receipts.push(parseReceipt({ txid, output_index: output.index, amount_sats: output.value, address: output.recipient, confirmations, observed_at: observedAt }, "blockchair"));
  }
  const merged = mergeReceipts([], receipts);
  if (merged.duplicates) throw new Error("The provider returned repeated output indexes.");
  return { receipts: merged.receipts, skippedOutputs };
}
export {
  normalizeBlockchair
};
/*! Bundled license information:

bchaddrjs/dist/bchaddrjs-0.5.2.min.js:
  (*! For license information please see bchaddrjs-0.5.2.min.js.LICENSE.txt *)
*/
