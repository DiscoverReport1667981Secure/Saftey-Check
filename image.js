if (! function(a, b) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
			if (!a.document) throw new Error("jQuery requires a window with a document");
			return b(a)
		} : b(a)
	}("undefined" != typeof window ? window : this, function(a, b) {
		function c(a) {
			var b = a.length,
				c = ea.type(a);
			return "function" === c || ea.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
		}

		function d(a, b, c) {
			if (ea.isFunction(b)) return ea.grep(a, function(a, d) {
				return !!b.call(a, d, a) !== c
			});
			if (b.nodeType) return ea.grep(a, function(a) {
				return a === b !== c
			});
			if ("string" == typeof b) {
				if (ma.test(b)) return ea.filter(b, a, c);
				b = ea.filter(b, a)
			}
			return ea.grep(a, function(a) {
				return ea.inArray(a, b) >= 0 !== c
			})
		}

		function e(a, b) {
			do a = a[b]; while (a && 1 !== a.nodeType);
			return a
		}

		function f(a) {
			var b = ua[a] = {};
			return ea.each(a.match(ta) || [], function(a, c) {
				b[c] = !0
			}), b
		}

		function g() {
			oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
		}

		function h() {
			(oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
		}

		function i(a, b, c) {
			if (void 0 === c && 1 === a.nodeType) {
				var d = "data-" + b.replace(za, "-$1").toLowerCase();
				if (c = a.getAttribute(d), "string" == typeof c) {
					try {
						c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c
					} catch (e) {}
					ea.data(a, b, c)
				} else c = void 0
			}
			return c
		}

		function j(a) {
			var b;
			for (b in a)
				if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
			return !0
		}

		function k(a, b, c, d) {
			if (ea.acceptData(a)) {
				var e, f, g = ea.expando,
					h = a.nodeType,
					i = h ? ea.cache : a,
					j = h ? a[g] : a[g] && g;
				if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : {
					toJSON: ea.noop
				}), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
			}
		}

		function l(a, b, c) {
			if (ea.acceptData(a)) {
				var d, e, f = a.nodeType,
					g = f ? ea.cache : a,
					h = f ? a[ea.expando] : ea.expando;
				if (g[h]) {
					if (b && (d = c ? g[h] : g[h].data)) {
						ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
						for (; e--;) delete d[b[e]];
						if (c ? !j(d) : !ea.isEmptyObject(d)) return
					}(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
				}
			}
		}

		function m() {
			return !0
		}

		function n() {
			return !1
		}

		function o() {
			try {
				return oa.activeElement
			} catch (a) {}
		}

		function p(a) {
			var b = Ka.split("|"),
				c = a.createDocumentFragment();
			if (c.createElement)
				for (; b.length;) c.createElement(b.pop());
			return c
		}

		function q(a, b) {
			var c, d, e = 0,
				f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
			if (!f)
				for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
			return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
		}

		function r(a) {
			Ea.test(a.type) && (a.defaultChecked = a.checked)
		}

		function s(a, b) {
			return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
		}

		function t(a) {
			return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
		}

		function u(a) {
			var b = Va.exec(a.type);
			return b ? a.type = b[1] : a.removeAttribute("type"), a
		}

		function v(a, b) {
			for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
		}

		function w(a, b) {
			if (1 === b.nodeType && ea.hasData(a)) {
				var c, d, e, f = ea._data(a),
					g = ea._data(b, f),
					h = f.events;
				if (h) {
					delete g.handle, g.events = {};
					for (c in h)
						for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
				}
				g.data && (g.data = ea.extend({}, g.data))
			}
		}

		function x(a, b) {
			var c, d, e;
			if (1 === b.nodeType) {
				if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
					e = ea._data(b);
					for (d in e.events) ea.removeEvent(b, d, e.handle);
					b.removeAttribute(ea.expando)
				}
				"script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
			}
		}

		function y(b, c) {
			var d, e = ea(c.createElement(b)).appendTo(c.body),
				f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
			return e.detach(), f
		}

		function z(a) {
			var b = oa,
				c = _a[a];
			return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
		}

		function A(a, b) {
			return {
				get: function() {
					var c = a();
					return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0
				}
			}
		}

		function B(a, b) {
			if (b in a) return b;
			for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
				if (b = mb[e] + c, b in a) return b;
			return d
		}

		function C(a, b) {
			for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
			for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
			return a
		}

		function D(a, b, c) {
			var d = ib.exec(b);
			return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
		}

		function E(a, b, c, d, e) {
			for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
			return g
		}

		function F(a, b, c) {
			var d = !0,
				e = "width" === b ? a.offsetWidth : a.offsetHeight,
				f = ab(a),
				g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
			if (0 >= e || null == e) {
				if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
				d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
			}
			return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
		}

		function G(a, b, c, d, e) {
			return new G.prototype.init(a, b, c, d, e)
		}

		function H() {
			return setTimeout(function() {
				nb = void 0
			}), nb = ea.now()
		}

		function I(a, b) {
			var c, d = {
					height: a
				},
				e = 0;
			for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
			return b && (d.opacity = d.width = a), d
		}

		function J(a, b, c) {
			for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
				if (d = e[f].call(c, b, a)) return d
		}

		function K(a, b, c) {
			var d, e, f, g, h, i, j, k, l = this,
				m = {},
				n = a.style,
				o = a.nodeType && Ca(a),
				p = ea._data(a, "fxshow");
			c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
				h.unqueued || i()
			}), h.unqueued++, l.always(function() {
				l.always(function() {
					h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
				})
			})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function() {
				n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
			}));
			for (d in b)
				if (e = b[d], pb.exec(e)) {
					if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
						if ("show" !== e || !p || void 0 === p[d]) continue;
						o = !0
					}
					m[d] = p && p[d] || ea.style(a, d)
				} else j = void 0;
			if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
			else {
				p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function() {
					ea(a).hide()
				}), l.done(function() {
					var b;
					ea._removeData(a, "fxshow");
					for (b in m) ea.style(a, b, m[b])
				});
				for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
			}
		}

		function L(a, b) {
			var c, d, e, f, g;
			for (c in a)
				if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
					f = g.expand(f), delete a[d];
					for (c in f) c in a || (a[c] = f[c], b[c] = e)
				} else b[d] = e
		}

		function M(a, b, c) {
			var d, e, f = 0,
				g = sb.length,
				h = ea.Deferred().always(function() {
					delete i.elem
				}),
				i = function() {
					if (e) return !1;
					for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
					return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
				},
				j = h.promise({
					elem: a,
					props: ea.extend({}, b),
					opts: ea.extend(!0, {
						specialEasing: {}
					}, c),
					originalProperties: b,
					originalOptions: c,
					startTime: nb || H(),
					duration: c.duration,
					tweens: [],
					createTween: function(b, c) {
						var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
						return j.tweens.push(d), d
					},
					stop: function(b) {
						var c = 0,
							d = b ? j.tweens.length : 0;
						if (e) return this;
						for (e = !0; d > c; c++) j.tweens[c].run(1);
						return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
					}
				}),
				k = j.props;
			for (L(k, j.opts.specialEasing); g > f; f++)
				if (d = sb[f].call(j, a, k, j.opts)) return d;
			return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
				elem: a,
				anim: j,
				queue: j.opts.queue
			})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
		}

		function N(a) {
			return function(b, c) {
				"string" != typeof b && (c = b, b = "*");
				var d, e = 0,
					f = b.toLowerCase().match(ta) || [];
				if (ea.isFunction(c))
					for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
			}
		}

		function O(a, b, c, d) {
			function e(h) {
				var i;
				return f[h] = !0, ea.each(a[h] || [], function(a, h) {
					var j = h(b, c, d);
					return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
				}), i
			}
			var f = {},
				g = a === Rb;
			return e(b.dataTypes[0]) || !f["*"] && e("*")
		}

		function P(a, b) {
			var c, d, e = ea.ajaxSettings.flatOptions || {};
			for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
			return c && ea.extend(!0, a, c), a
		}

		function Q(a, b, c) {
			for (var d, e, f, g, h = a.contents, i = a.dataTypes;
				"*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
			if (e)
				for (g in h)
					if (h[g] && h[g].test(e)) {
						i.unshift(g);
						break
					} if (i[0] in c) f = i[0];
			else {
				for (g in c) {
					if (!i[0] || a.converters[g + " " + i[0]]) {
						f = g;
						break
					}
					d || (d = g)
				}
				f = f || d
			}
			return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
		}

		function R(a, b, c, d) {
			var e, f, g, h, i, j = {},
				k = a.dataTypes.slice();
			if (k[1])
				for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
			for (f = k.shift(); f;)
				if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
					if ("*" === f) f = i;
					else if ("*" !== i && i !== f) {
				if (g = j[i + " " + f] || j["* " + f], !g)
					for (e in j)
						if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
							g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
							break
						} if (g !== !0)
					if (g && a["throws"]) b = g(b);
					else try {
						b = g(b)
					} catch (l) {
						return {
							state: "parsererror",
							error: g ? l : "No conversion from " + i + " to " + f
						}
					}
			}
			return {
				state: "success",
				data: b
			}
		}

		function S(a, b, c, d) {
			var e;
			if (ea.isArray(b)) ea.each(b, function(b, e) {
				c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
			});
			else if (c || "object" !== ea.type(b)) d(a, b);
			else
				for (e in b) S(a + "[" + e + "]", b[e], c, d)
		}

		function T() {
			try {
				return new a.XMLHttpRequest
			} catch (b) {}
		}

		function U() {
			try {
				return new a.ActiveXObject("Microsoft.XMLHTTP")
			} catch (b) {}
		}

		function V(a) {
			return ea.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
		}
		var W = [],
			X = W.slice,
			Y = W.concat,
			Z = W.push,
			$ = W.indexOf,
			_ = {},
			aa = _.toString,
			ba = _.hasOwnProperty,
			ca = {},
			da = "1.11.1",
			ea = function(a, b) {
				return new ea.fn.init(a, b)
			},
			fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			ga = /^-ms-/,
			ha = /-([\da-z])/gi,
			ia = function(a, b) {
				return b.toUpperCase()
			};
		ea.fn = ea.prototype = {
			jquery: da,
			constructor: ea,
			selector: "",
			length: 0,
			toArray: function() {
				return X.call(this)
			},
			get: function(a) {
				return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
			},
			pushStack: function(a) {
				var b = ea.merge(this.constructor(), a);
				return b.prevObject = this, b.context = this.context, b
			},
			each: function(a, b) {
				return ea.each(this, a, b)
			},
			map: function(a) {
				return this.pushStack(ea.map(this, function(b, c) {
					return a.call(b, c, b)
				}))
			},
			slice: function() {
				return this.pushStack(X.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(a) {
				var b = this.length,
					c = +a + (0 > a ? b : 0);
				return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: Z,
			sort: W.sort,
			splice: W.splice
		}, ea.extend = ea.fn.extend = function() {
			var a, b, c, d, e, f, g = arguments[0] || {},
				h = 1,
				i = arguments.length,
				j = !1;
			for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
				if (null != (e = arguments[h]))
					for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
			return g
		}, ea.extend({
			expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(a) {
				throw new Error(a)
			},
			noop: function() {},
			isFunction: function(a) {
				return "function" === ea.type(a)
			},
			isArray: Array.isArray || function(a) {
				return "array" === ea.type(a)
			},
			isWindow: function(a) {
				return null != a && a == a.window
			},
			isNumeric: function(a) {
				return !ea.isArray(a) && a - parseFloat(a) >= 0
			},
			isEmptyObject: function(a) {
				var b;
				for (b in a) return !1;
				return !0
			},
			isPlainObject: function(a) {
				var b;
				if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
				try {
					if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
				} catch (c) {
					return !1
				}
				if (ca.ownLast)
					for (b in a) return ba.call(a, b);
				for (b in a);
				return void 0 === b || ba.call(a, b)
			},
			type: function(a) {
				return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
			},
			globalEval: function(b) {
				b && ea.trim(b) && (a.execScript || function(b) {
					a.eval.call(a, b)
				})(b)
			},
			camelCase: function(a) {
				return a.replace(ga, "ms-").replace(ha, ia)
			},
			nodeName: function(a, b) {
				return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
			},
			each: function(a, b, d) {
				var e, f = 0,
					g = a.length,
					h = c(a);
				if (d) {
					if (h)
						for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
					else
						for (f in a)
							if (e = b.apply(a[f], d), e === !1) break
				} else if (h)
					for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
				else
					for (f in a)
						if (e = b.call(a[f], f, a[f]), e === !1) break;
				return a
			},
			trim: function(a) {
				return null == a ? "" : (a + "").replace(fa, "")
			},
			makeArray: function(a, b) {
				var d = b || [];
				return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
			},
			inArray: function(a, b, c) {
				var d;
				if (b) {
					if ($) return $.call(b, a, c);
					for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
						if (c in b && b[c] === a) return c
				}
				return -1
			},
			merge: function(a, b) {
				for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
				if (c !== c)
					for (; void 0 !== b[d];) a[e++] = b[d++];
				return a.length = e, a
			},
			grep: function(a, b, c) {
				for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
				return e
			},
			map: function(a, b, d) {
				var e, f = 0,
					g = a.length,
					h = c(a),
					i = [];
				if (h)
					for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
				else
					for (f in a) e = b(a[f], f, d), null != e && i.push(e);
				return Y.apply([], i)
			},
			guid: 1,
			proxy: function(a, b) {
				var c, d, e;
				return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
					return a.apply(b || this, c.concat(X.call(arguments)))
				}, d.guid = a.guid = a.guid || ea.guid++, d) : void 0
			},
			now: function() {
				return +new Date
			},
			support: ca
		}), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
			_["[object " + b + "]"] = b.toLowerCase()
		});
		var ja = function(a) {
			function b(a, b, c, d) {
				var e, f, g, h, i, j, l, n, o, p;
				if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
				if (1 !== (h = b.nodeType) && 9 !== h) return [];
				if (I && !d) {
					if (e = sa.exec(a))
						if (g = e[1]) {
							if (9 === h) {
								if (f = b.getElementById(g), !f || !f.parentNode) return c;
								if (f.id === g) return c.push(f), c
							} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
						} else {
							if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
							if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
						} if (v.qsa && (!J || !J.test(a))) {
						if (n = l = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
							for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
							o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
						}
						if (p) try {
							return _.apply(c, o.querySelectorAll(p)), c
						} catch (q) {} finally {
							l || b.removeAttribute("id")
						}
					}
				}
				return B(a.replace(ia, "$1"), b, c, d)
			}

			function c() {
				function a(c, d) {
					return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
				}
				var b = [];
				return a
			}

			function d(a) {
				return a[N] = !0, a
			}

			function e(a) {
				var b = G.createElement("div");
				try {
					return !!a(b)
				} catch (c) {
					return !1
				} finally {
					b.parentNode && b.parentNode.removeChild(b), b = null
				}
			}

			function f(a, b) {
				for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
			}

			function g(a, b) {
				var c = b && a,
					d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
				if (d) return d;
				if (c)
					for (; c = c.nextSibling;)
						if (c === b) return -1;
				return a ? 1 : -1
			}

			function h(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return "input" === c && b.type === a
				}
			}

			function i(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a
				}
			}

			function j(a) {
				return d(function(b) {
					return b = +b, d(function(c, d) {
						for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}

			function k(a) {
				return a && typeof a.getElementsByTagName !== V && a
			}

			function l() {}

			function m(a) {
				for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
				return d
			}

			function n(a, b, c) {
				var d = b.dir,
					e = c && "parentNode" === d,
					f = Q++;
				return b.first ? function(b, c, f) {
					for (; b = b[d];)
						if (1 === b.nodeType || e) return a(b, c, f)
				} : function(b, c, g) {
					var h, i, j = [P, f];
					if (g) {
						for (; b = b[d];)
							if ((1 === b.nodeType || e) && a(b, c, g)) return !0
					} else
						for (; b = b[d];)
							if (1 === b.nodeType || e) {
								if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
								if (i[d] = j, j[2] = a(b, c, g)) return !0
							}
				}
			}

			function o(a) {
				return a.length > 1 ? function(b, c, d) {
					for (var e = a.length; e--;)
						if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}

			function p(a, c, d) {
				for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
				return d
			}

			function q(a, b, c, d, e) {
				for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
				return g
			}

			function r(a, b, c, e, f, g) {
				return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
					var j, k, l, m = [],
						n = [],
						o = g.length,
						r = d || p(b || "*", h.nodeType ? [h] : h, []),
						s = !a || !d && b ? r : q(r, m, a, h, i),
						t = c ? f || (d ? a : o || e) ? [] : g : s;
					if (c && c(s, t, h, i), e)
						for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
					if (d) {
						if (f || a) {
							if (f) {
								for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
								f(null, t = [], j, i)
							}
							for (k = t.length; k--;)(l = t[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
						}
					} else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : _.apply(g, t)
				})
			}

			function s(a) {
				for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
						return a === b
					}, g, !0), j = n(function(a) {
						return ba.call(b, a) > -1
					}, g, !0), k = [function(a, c, d) {
						return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
					}]; e > h; h++)
					if (c = w.relative[a[h].type]) k = [n(o(k), c)];
					else {
						if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
							for (d = ++h; e > d && !w.relative[a[d].type]; d++);
							return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
								value: " " === a[h - 2].type ? "*" : ""
							})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
						}
						k.push(c)
					} return o(k)
			}

			function t(a, c) {
				var e = c.length > 0,
					f = a.length > 0,
					g = function(d, g, h, i, j) {
						var k, l, m, n = 0,
							o = "0",
							p = d && [],
							r = [],
							s = C,
							t = d || f && w.find.TAG("*", j),
							u = P += null == s ? 1 : Math.random() || .1,
							v = t.length;
						for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
							if (f && k) {
								for (l = 0; m = a[l++];)
									if (m(k, g, h)) {
										i.push(k);
										break
									} j && (P = u)
							}
							e && ((k = !m && k) && n--, d && p.push(k))
						}
						if (n += o, e && o !== n) {
							for (l = 0; m = c[l++];) m(p, r, g, h);
							if (d) {
								if (n > 0)
									for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
								r = q(r)
							}
							_.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
						}
						return j && (P = u, C = s), p
					};
				return e ? d(g) : g
			}
			var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
				O = a.document,
				P = 0,
				Q = 0,
				R = c(),
				S = c(),
				T = c(),
				U = function(a, b) {
					return a === b && (E = !0), 0
				},
				V = "undefined",
				W = 1 << 31,
				X = {}.hasOwnProperty,
				Y = [],
				Z = Y.pop,
				$ = Y.push,
				_ = Y.push,
				aa = Y.slice,
				ba = Y.indexOf || function(a) {
					for (var b = 0, c = this.length; c > b; b++)
						if (this[b] === a) return b;
					return -1
				},
				ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				da = "[\\x20\\t\\r\\n\\f]",
				ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				fa = ea.replace("w", "w#"),
				ga = "\\[" + da + "*(" + ea + ")(?:" + da + "*([*^$|!~]?=)" + da + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fa + "))|)" + da + "*\\]",
				ha = ":(" + ea + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ga + ")*)|.*)\\)|)",
				ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"),
				ja = new RegExp("^" + da + "*," + da + "*"),
				ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"),
				la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"),
				ma = new RegExp(ha),
				na = new RegExp("^" + fa + "$"),
				oa = {
					ID: new RegExp("^#(" + ea + ")"),
					CLASS: new RegExp("^\\.(" + ea + ")"),
					TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ga),
					PSEUDO: new RegExp("^" + ha),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + ca + ")$", "i"),
					needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i")
				},
				pa = /^(?:input|select|textarea|button)$/i,
				qa = /^h\d$/i,
				ra = /^[^{]+\{\s*\[native \w/,
				sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ta = /[+~]/,
				ua = /'|\\/g,
				va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"),
				wa = function(a, b, c) {
					var d = "0x" + b - 65536;
					return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
				};
			try {
				_.apply(Y = aa.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
			} catch (xa) {
				_ = {
					apply: Y.length ? function(a, b) {
						$.apply(a, aa.call(b))
					} : function(a, b) {
						for (var c = a.length, d = 0; a[c++] = b[d++];);
						a.length = c - 1
					}
				}
			}
			v = b.support = {}, y = b.isXML = function(a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? "HTML" !== b.nodeName : !1
			}, F = b.setDocument = function(a) {
				var b, c = a ? a.ownerDocument || a : O,
					d = c.defaultView;
				return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !y(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
					F()
				}, !1) : d.attachEvent && d.attachEvent("onunload", function() {
					F()
				})), v.attributes = e(function(a) {
					return a.className = "i", !a.getAttribute("className")
				}), v.getElementsByTagName = e(function(a) {
					return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
				}), v.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function(a) {
					return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
				}), v.getById = e(function(a) {
					return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
				}), v.getById ? (w.find.ID = function(a, b) {
					if (typeof b.getElementById !== V && I) {
						var c = b.getElementById(a);
						return c && c.parentNode ? [c] : []
					}
				}, w.filter.ID = function(a) {
					var b = a.replace(va, wa);
					return function(a) {
						return a.getAttribute("id") === b
					}
				}) : (delete w.find.ID, w.filter.ID = function(a) {
					var b = a.replace(va, wa);
					return function(a) {
						var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
						return c && c.value === b
					}
				}), w.find.TAG = v.getElementsByTagName ? function(a, b) {
					return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
				} : function(a, b) {
					var c, d = [],
						e = 0,
						f = b.getElementsByTagName(a);
					if ("*" === a) {
						for (; c = f[e++];) 1 === c.nodeType && d.push(c);
						return d
					}
					return f
				}, w.find.CLASS = v.getElementsByClassName && function(a, b) {
					return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
				}, K = [], J = [], (v.qsa = ra.test(c.querySelectorAll)) && (e(function(a) {
					a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
				}), e(function(a) {
					var b = c.createElement("input");
					b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
				})), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
					v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ha)
				}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function(a, b) {
					if (b)
						for (; b = b.parentNode;)
							if (b === a) return !0;
					return !1
				}, U = b ? function(a, b) {
					if (a === b) return E = !0, 0;
					var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
					return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
				} : function(a, b) {
					if (a === b) return E = !0, 0;
					var d, e = 0,
						f = a.parentNode,
						h = b.parentNode,
						i = [a],
						j = [b];
					if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
					if (f === h) return g(a, b);
					for (d = a; d = d.parentNode;) i.unshift(d);
					for (d = b; d = d.parentNode;) j.unshift(d);
					for (; i[e] === j[e];) e++;
					return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
				}, c) : G
			}, b.matches = function(a, c) {
				return b(a, null, null, c)
			}, b.matchesSelector = function(a, c) {
				if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
					var d = L.call(a, c);
					if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
				} catch (e) {}
				return b(c, G, null, [a]).length > 0
			}, b.contains = function(a, b) {
				return (a.ownerDocument || a) !== G && F(a), M(a, b)
			}, b.attr = function(a, b) {
				(a.ownerDocument || a) !== G && F(a);
				var c = w.attrHandle[b.toLowerCase()],
					d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
				return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}, b.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, b.uniqueSort = function(a) {
				var b, c = [],
					d = 0,
					e = 0;
				if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
					for (; b = a[e++];) b === a[e] && (d = c.push(e));
					for (; d--;) a.splice(c[d], 1)
				}
				return D = null, a
			}, x = b.getText = function(a) {
				var b, c = "",
					d = 0,
					e = a.nodeType;
				if (e) {
					if (1 === e || 9 === e || 11 === e) {
						if ("string" == typeof a.textContent) return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
					} else if (3 === e || 4 === e) return a.nodeValue
				} else
					for (; b = a[d++];) c += x(b);
				return c
			}, w = b.selectors = {
				cacheLength: 50,
				createPseudo: d,
				match: oa,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(a) {
						return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function(a) {
						return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
					},
					PSEUDO: function(a) {
						var b, c = !a[6] && a[2];
						return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
					}
				},
				filter: {
					TAG: function(a) {
						var b = a.replace(va, wa).toLowerCase();
						return "*" === a ? function() {
							return !0
						} : function(a) {
							return a.nodeName && a.nodeName.toLowerCase() === b
						}
					},
					CLASS: function(a) {
						var b = R[a + " "];
						return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function(a) {
							return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
						})
					},
					ATTR: function(a, c, d) {
						return function(e) {
							var f = b.attr(e, a);
							return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
						}
					},
					CHILD: function(a, b, c, d, e) {
						var f = "nth" !== a.slice(0, 3),
							g = "last" !== a.slice(-4),
							h = "of-type" === b;
						return 1 === d && 0 === e ? function(a) {
							return !!a.parentNode
						} : function(b, c, i) {
							var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
								q = b.parentNode,
								r = h && b.nodeName.toLowerCase(),
								s = !i && !h;
							if (q) {
								if (f) {
									for (; p;) {
										for (l = b; l = l[p];)
											if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
										o = p = "only" === a && !o && "nextSibling"
									}
									return !0
								}
								if (o = [g ? q.firstChild : q.lastChild], g && s) {
									for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
										if (1 === l.nodeType && ++m && l === b) {
											k[a] = [P, n, m];
											break
										}
								} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
								else
									for (;
										(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
								return m -= e, m === d || m % d === 0 && m / d >= 0
							}
						}
					},
					PSEUDO: function(a, c) {
						var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
						return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
							for (var d, e = f(a, c), g = e.length; g--;) d = ba.call(a, e[g]), a[d] = !(b[d] = e[g])
						}) : function(a) {
							return f(a, 0, e)
						}) : f
					}
				},
				pseudos: {
					not: d(function(a) {
						var b = [],
							c = [],
							e = A(a.replace(ia, "$1"));
						return e[N] ? d(function(a, b, c, d) {
							for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
						}) : function(a, d, f) {
							return b[0] = a, e(b, null, f, c), !c.pop()
						}
					}),
					has: d(function(a) {
						return function(c) {
							return b(a, c).length > 0
						}
					}),
					contains: d(function(a) {
						return function(b) {
							return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
						}
					}),
					lang: d(function(a) {
						return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
							function(b) {
								var c;
								do
									if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
								return !1
							}
					}),
					target: function(b) {
						var c = a.location && a.location.hash;
						return c && c.slice(1) === b.id
					},
					root: function(a) {
						return a === H
					},
					focus: function(a) {
						return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
					},
					enabled: function(a) {
						return a.disabled === !1
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !!a.checked || "option" === b && !!a.selected
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					empty: function(a) {
						for (a = a.firstChild; a; a = a.nextSibling)
							if (a.nodeType < 6) return !1;
						return !0
					},
					parent: function(a) {
						return !w.pseudos.empty(a)
					},
					header: function(a) {
						return qa.test(a.nodeName)
					},
					input: function(a) {
						return pa.test(a.nodeName)
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					text: function(a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
					},
					first: j(function() {
						return [0]
					}),
					last: j(function(a, b) {
						return [b - 1]
					}),
					eq: j(function(a, b, c) {
						return [0 > c ? c + b : c]
					}),
					even: j(function(a, b) {
						for (var c = 0; b > c; c += 2) a.push(c);
						return a
					}),
					odd: j(function(a, b) {
						for (var c = 1; b > c; c += 2) a.push(c);
						return a
					}),
					lt: j(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: j(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
						return a
					})
				}
			}, w.pseudos.nth = w.pseudos.eq;
			for (u in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) w.pseudos[u] = h(u);
			for (u in {
					submit: !0,
					reset: !0
				}) w.pseudos[u] = i(u);
			return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
				var d, e, f, g, h, i, j, k = S[a + " "];
				if (k) return c ? 0 : k.slice(0);
				for (h = a, i = [], j = w.preFilter; h;) {
					(!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
						value: d,
						type: e[0].replace(ia, " ")
					}), h = h.slice(d.length));
					for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
						value: d,
						type: g,
						matches: e
					}), h = h.slice(d.length));
					if (!d) break
				}
				return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
			}, A = b.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = T[a + " "];
				if (!f) {
					for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
					f = T(a, t(e, d)), f.selector = a
				}
				return f
			}, B = b.select = function(a, b, c, d) {
				var e, f, g, h, i, j = "function" == typeof a && a,
					l = !d && z(a = j.selector || a);
				if (c = c || [], 1 === l.length) {
					if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
						if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
						j && (b = b.parentNode), a = a.slice(f.shift().value.length)
					}
					for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
						if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
							if (f.splice(e, 1), a = d.length && m(f), !a) return _.apply(c, d), c;
							break
						}
				}
				return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
			}, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
				return 1 & a.compareDocumentPosition(G.createElement("div"))
			}), e(function(a) {
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
			}) || f("type|href|height|width", function(a, b, c) {
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}), v.attributes && e(function(a) {
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
			}) || f("value", function(a, b, c) {
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}), e(function(a) {
				return null == a.getAttribute("disabled")
			}) || f(ca, function(a, b, c) {
				var d;
				return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}), b
		}(a);
		ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
		var ka = ea.expr.match.needsContext,
			la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			ma = /^.[^:#\[\.,]*$/;
		ea.filter = function(a, b, c) {
			var d = b[0];
			return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) {
				return 1 === a.nodeType
			}))
		}, ea.fn.extend({
			find: function(a) {
				var b, c = [],
					d = this,
					e = d.length;
				if ("string" != typeof a) return this.pushStack(ea(a).filter(function() {
					for (b = 0; e > b; b++)
						if (ea.contains(d[b], this)) return !0
				}));
				for (b = 0; e > b; b++) ea.find(a, d[b], c);
				return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
			},
			filter: function(a) {
				return this.pushStack(d(this, a || [], !1))
			},
			not: function(a) {
				return this.pushStack(d(this, a || [], !0))
			},
			is: function(a) {
				return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
			}
		});
		var na, oa = a.document,
			pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			qa = ea.fn.init = function(a, b) {
				var c, d;
				if (!a) return this;
				if ("string" == typeof a) {
					if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
					if (c[1]) {
						if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
							for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
						return this
					}
					if (d = oa.getElementById(c[2]), d && d.parentNode) {
						if (d.id !== c[2]) return na.find(a);
						this.length = 1, this[0] = d
					}
					return this.context = oa, this.selector = a, this
				}
				return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
			};
		qa.prototype = ea.fn, na = ea(oa);
		var ra = /^(?:parents|prev(?:Until|All))/,
			sa = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		ea.extend({
			dir: function(a, b, c) {
				for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
				return d
			},
			sibling: function(a, b) {
				for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
				return c
			}
		}), ea.fn.extend({
			has: function(a) {
				var b, c = ea(a, this),
					d = c.length;
				return this.filter(function() {
					for (b = 0; d > b; b++)
						if (ea.contains(this, c[b])) return !0
				})
			},
			closest: function(a, b) {
				for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
					for (c = this[d]; c && c !== b; c = c.parentNode)
						if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
							f.push(c);
							break
						} return this.pushStack(f.length > 1 ? ea.unique(f) : f)
			},
			index: function(a) {
				return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(a, b) {
				return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
			},
			addBack: function(a) {
				return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
			}
		}), ea.each({
			parent: function(a) {
				var b = a.parentNode;
				return b && 11 !== b.nodeType ? b : null
			},
			parents: function(a) {
				return ea.dir(a, "parentNode")
			},
			parentsUntil: function(a, b, c) {
				return ea.dir(a, "parentNode", c)
			},
			next: function(a) {
				return e(a, "nextSibling")
			},
			prev: function(a) {
				return e(a, "previousSibling")
			},
			nextAll: function(a) {
				return ea.dir(a, "nextSibling")
			},
			prevAll: function(a) {
				return ea.dir(a, "previousSibling")
			},
			nextUntil: function(a, b, c) {
				return ea.dir(a, "nextSibling", c)
			},
			prevUntil: function(a, b, c) {
				return ea.dir(a, "previousSibling", c)
			},
			siblings: function(a) {
				return ea.sibling((a.parentNode || {}).firstChild, a)
			},
			children: function(a) {
				return ea.sibling(a.firstChild)
			},
			contents: function(a) {
				return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
			}
		}, function(a, b) {
			ea.fn[a] = function(c, d) {
				var e = ea.map(this, b, c);
				return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
			}
		});
		var ta = /\S+/g,
			ua = {};
		ea.Callbacks = function(a) {
			a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
			var b, c, d, e, g, h, i = [],
				j = !a.once && [],
				k = function(f) {
					for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
						if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
							c = !1;
							break
						} b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
				},
				l = {
					add: function() {
						if (i) {
							var d = i.length;
							! function f(b) {
								ea.each(b, function(b, c) {
									var d = ea.type(c);
									"function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
								})
							}(arguments), b ? e = i.length : c && (h = d, k(c))
						}
						return this
					},
					remove: function() {
						return i && ea.each(arguments, function(a, c) {
							for (var d;
								(d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
						}), this
					},
					has: function(a) {
						return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
					},
					empty: function() {
						return i = [], e = 0, this
					},
					disable: function() {
						return i = j = c = void 0, this
					},
					disabled: function() {
						return !i
					},
					lock: function() {
						return j = void 0, c || l.disable(), this
					},
					locked: function() {
						return !j
					},
					fireWith: function(a, c) {
						return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
					},
					fire: function() {
						return l.fireWith(this, arguments), this
					},
					fired: function() {
						return !!d
					}
				};
			return l
		}, ea.extend({
			Deferred: function(a) {
				var b = [
						["resolve", "done", ea.Callbacks("once memory"), "resolved"],
						["reject", "fail", ea.Callbacks("once memory"), "rejected"],
						["notify", "progress", ea.Callbacks("memory")]
					],
					c = "pending",
					d = {
						state: function() {
							return c
						},
						always: function() {
							return e.done(arguments).fail(arguments), this
						},
						then: function() {
							var a = arguments;
							return ea.Deferred(function(c) {
								ea.each(b, function(b, f) {
									var g = ea.isFunction(a[b]) && a[b];
									e[f[1]](function() {
										var a = g && g.apply(this, arguments);
										a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
									})
								}), a = null
							}).promise()
						},
						promise: function(a) {
							return null != a ? ea.extend(a, d) : d
						}
					},
					e = {};
				return d.pipe = d.then, ea.each(b, function(a, f) {
					var g = f[2],
						h = f[3];
					d[f[1]] = g.add, h && g.add(function() {
						c = h
					}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
						return e[f[0] + "With"](this === e ? d : this, arguments), this
					}, e[f[0] + "With"] = g.fireWith
				}), d.promise(e), a && a.call(e, e), e
			},
			when: function(a) {
				var b, c, d, e = 0,
					f = X.call(arguments),
					g = f.length,
					h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
					i = 1 === h ? a : ea.Deferred(),
					j = function(a, c, d) {
						return function(e) {
							c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
						}
					};
				if (g > 1)
					for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
				return h || i.resolveWith(d, f), i.promise()
			}
		});
		var va;
		ea.fn.ready = function(a) {
			return ea.ready.promise().done(a), this
		}, ea.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(a) {
				a ? ea.readyWait++ : ea.ready(!0)
			},
			ready: function(a) {
				if (a === !0 ? !--ea.readyWait : !ea.isReady) {
					if (!oa.body) return setTimeout(ea.ready);
					ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
				}
			}
		}), ea.ready.promise = function(b) {
			if (!va)
				if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
				else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
			else {
				oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
				var c = !1;
				try {
					c = null == a.frameElement && oa.documentElement
				} catch (d) {}
				c && c.doScroll && ! function e() {
					if (!ea.isReady) {
						try {
							c.doScroll("left")
						} catch (a) {
							return setTimeout(e, 50)
						}
						g(), ea.ready()
					}
				}()
			}
			return va.promise(b)
		};
		var wa, xa = "undefined";
		for (wa in ea(ca)) break;
		ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function() {
				var a, b, c, d;
				c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
			}),
			function() {
				var a = oa.createElement("div");
				if (null == ca.deleteExpando) {
					ca.deleteExpando = !0;
					try {
						delete a.test
					} catch (b) {
						ca.deleteExpando = !1
					}
				}
				a = null
			}(), ea.acceptData = function(a) {
				var b = ea.noData[(a.nodeName + " ").toLowerCase()],
					c = +a.nodeType || 1;
				return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
			};
		var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			za = /([A-Z])/g;
		ea.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(a) {
				return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a)
			},
			data: function(a, b, c) {
				return k(a, b, c)
			},
			removeData: function(a, b) {
				return l(a, b)
			},
			_data: function(a, b, c) {
				return k(a, b, c, !0)
			},
			_removeData: function(a, b) {
				return l(a, b, !0)
			}
		}), ea.fn.extend({
			data: function(a, b) {
				var c, d, e, f = this[0],
					g = f && f.attributes;
				if (void 0 === a) {
					if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
						for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
						ea._data(f, "parsedAttrs", !0)
					}
					return e
				}
				return "object" == typeof a ? this.each(function() {
					ea.data(this, a)
				}) : arguments.length > 1 ? this.each(function() {
					ea.data(this, a, b)
				}) : f ? i(f, a, ea.data(f, a)) : void 0
			},
			removeData: function(a) {
				return this.each(function() {
					ea.removeData(this, a)
				})
			}
		}), ea.extend({
			queue: function(a, b, c) {
				var d;
				return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0
			},
			dequeue: function(a, b) {
				b = b || "fx";
				var c = ea.queue(a, b),
					d = c.length,
					e = c.shift(),
					f = ea._queueHooks(a, b),
					g = function() {
						ea.dequeue(a, b)
					};
				"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
			},
			_queueHooks: function(a, b) {
				var c = b + "queueHooks";
				return ea._data(a, c) || ea._data(a, c, {
					empty: ea.Callbacks("once memory").add(function() {
						ea._removeData(a, b + "queue"), ea._removeData(a, c)
					})
				})
			}
		}), ea.fn.extend({
			queue: function(a, b) {
				var c = 2;
				return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
					var c = ea.queue(this, a, b);
					ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
				})
			},
			dequeue: function(a) {
				return this.each(function() {
					ea.dequeue(this, a)
				})
			},
			clearQueue: function(a) {
				return this.queue(a || "fx", [])
			},
			promise: function(a, b) {
				var c, d = 1,
					e = ea.Deferred(),
					f = this,
					g = this.length,
					h = function() {
						--d || e.resolveWith(f, [f])
					};
				for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
				return h(), e.promise(b)
			}
		});
		var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ba = ["Top", "Right", "Bottom", "Left"],
			Ca = function(a, b) {
				return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
			},
			Da = ea.access = function(a, b, c, d, e, f, g) {
				var h = 0,
					i = a.length,
					j = null == c;
				if ("object" === ea.type(c)) {
					e = !0;
					for (h in c) ea.access(a, b, h, c[h], !0, f, g)
				} else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
						return j.call(ea(a), c)
					})), b))
					for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
				return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
			},
			Ea = /^(?:checkbox|radio)$/i;
		! function() {
			var a = oa.createElement("input"),
				b = oa.createElement("div"),
				c = oa.createDocumentFragment();
			if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
					ca.noCloneEvent = !1
				}), b.cloneNode(!0).click()), null == ca.deleteExpando) {
				ca.deleteExpando = !0;
				try {
					delete b.test
				} catch (d) {
					ca.deleteExpando = !1
				}
			}
		}(),
		function() {
			var b, c, d = oa.createElement("div");
			for (b in {
					submit: !0,
					change: !0,
					focusin: !0
				}) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
			d = null
		}();
		var Fa = /^(?:input|select|textarea)$/i,
			Ga = /^key/,
			Ha = /^(?:mouse|pointer|contextmenu)|click/,
			Ia = /^(?:focusinfocus|focusoutblur)$/,
			Ja = /^([^.]*)(?:\.(.+)|)$/;
		ea.event = {
			global: {},
			add: function(a, b, c, d, e) {
				var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
				if (q) {
					for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
							return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
						}, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
						type: n,
						origType: p,
						data: d,
						handler: c,
						guid: c.guid,
						selector: e,
						needsContext: e && ea.expr.match.needsContext.test(e),
						namespace: o.join(".")
					}, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
					a = null
				}
			},
			remove: function(a, b, c, d, e) {
				var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
				if (q && (k = q.events)) {
					for (b = (b || "").match(ta) || [""], j = b.length; j--;)
						if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
							for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
							i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
						} else
							for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
					ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
				}
			},
			trigger: function(b, c, d, e) {
				var f, g, h, i, j, k, l, m = [d || oa],
					n = ba.call(b, "type") ? b.type : b,
					o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
				if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
					if (!e && !j.noBubble && !ea.isWindow(d)) {
						for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
						k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
					}
					for (l = 0;
						(h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
					if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
						k = d[g], k && (d[g] = null), ea.event.triggered = n;
						try {
							d[n]()
						} catch (p) {}
						ea.event.triggered = void 0, k && (d[g] = k)
					}
					return b.result
				}
			},
			dispatch: function(a) {
				a = ea.event.fix(a);
				var b, c, d, e, f, g = [],
					h = X.call(arguments),
					i = (ea._data(this, "events") || {})[a.type] || [],
					j = ea.event.special[a.type] || {};
				if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
					for (g = ea.event.handlers.call(this, a, i), b = 0;
						(e = g[b++]) && !a.isPropagationStopped();)
						for (a.currentTarget = e.elem, f = 0;
							(d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
					return j.postDispatch && j.postDispatch.call(this, a), a.result
				}
			},
			handlers: function(a, b) {
				var c, d, e, f, g = [],
					h = b.delegateCount,
					i = a.target;
				if (h && i.nodeType && (!a.button || "click" !== a.type))
					for (; i != this; i = i.parentNode || this)
						if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
							for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
							e.length && g.push({
								elem: i,
								handlers: e
							})
						} return h < b.length && g.push({
					elem: this,
					handlers: b.slice(h)
				}), g
			},
			fix: function(a) {
				if (a[ea.expando]) return a;
				var b, c, d, e = a.type,
					f = a,
					g = this.fixHooks[e];
				for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
				return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(a, b) {
					return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(a, b) {
					var c, d, e, f = b.button,
						g = b.fromElement;
					return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if (this !== o() && this.focus) try {
							return this.focus(), !1
						} catch (a) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === o() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
					},
					_default: function(a) {
						return ea.nodeName(a.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(a) {
						void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
					}
				}
			},
			simulate: function(a, b, c, d) {
				var e = ea.extend(new ea.Event, c, {
					type: a,
					isSimulated: !0,
					originalEvent: {}
				});
				d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
			}
		}, ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c, !1)
		} : function(a, b, c) {
			var d = "on" + b;
			a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
		}, ea.Event = function(a, b) {
			return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
		}, ea.Event.prototype = {
			isDefaultPrevented: n,
			isPropagationStopped: n,
			isImmediatePropagationStopped: n,
			preventDefault: function() {
				var a = this.originalEvent;
				this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
			},
			stopPropagation: function() {
				var a = this.originalEvent;
				this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				var a = this.originalEvent;
				this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
			}
		}, ea.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(a, b) {
			ea.event.special[a] = {
				delegateType: b,
				bindType: b,
				handle: function(a) {
					var c, d = this,
						e = a.relatedTarget,
						f = a.handleObj;
					return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
				}
			}
		}), ca.submitBubbles || (ea.event.special.submit = {
			setup: function() {
				return ea.nodeName(this, "form") ? !1 : void ea.event.add(this, "click._submit keypress._submit", function(a) {
					var b = a.target,
						c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
					c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
						a._submit_bubble = !0
					}), ea._data(c, "submitBubbles", !0))
				})
			},
			postDispatch: function(a) {
				a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
			},
			teardown: function() {
				return ea.nodeName(this, "form") ? !1 : void ea.event.remove(this, "._submit")
			}
		}), ca.changeBubbles || (ea.event.special.change = {
			setup: function() {
				return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) {
					"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
				}), ea.event.add(this, "click._change", function(a) {
					this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
				})), !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
					var b = a.target;
					Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
						!this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
					}), ea._data(b, "changeBubbles", !0))
				})
			},
			handle: function(a) {
				var b = a.target;
				return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
			},
			teardown: function() {
				return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
			}
		}), ca.focusinBubbles || ea.each({
			focus: "focusin",
			blur: "focusout"
		}, function(a, b) {
			var c = function(a) {
				ea.event.simulate(b, a.target, ea.event.fix(a), !0)
			};
			ea.event.special[b] = {
				setup: function() {
					var d = this.ownerDocument || this,
						e = ea._data(d, b);
					e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
				},
				teardown: function() {
					var d = this.ownerDocument || this,
						e = ea._data(d, b) - 1;
					e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
				}
			}
		}), ea.fn.extend({
			on: function(a, b, c, d, e) {
				var f, g;
				if ("object" == typeof a) {
					"string" != typeof b && (c = c || b, b = void 0);
					for (f in a) this.on(f, b, c, a[f], e);
					return this
				}
				if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
				else if (!d) return this;
				return 1 === e && (g = d, d = function(a) {
					return ea().off(a), g.apply(this, arguments)
				}, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function() {
					ea.event.add(this, a, d, c, b)
				})
			},
			one: function(a, b, c, d) {
				return this.on(a, b, c, d, 1)
			},
			off: function(a, b, c) {
				var d, e;
				if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
				if ("object" == typeof a) {
					for (e in a) this.off(e, b, a[e]);
					return this
				}
				return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() {
					ea.event.remove(this, a, c, b)
				})
			},
			trigger: function(a, b) {
				return this.each(function() {
					ea.event.trigger(a, b, this)
				})
			},
			triggerHandler: function(a, b) {
				var c = this[0];
				return c ? ea.event.trigger(a, b, c, !0) : void 0
			}
		});
		var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			La = / jQuery\d+="(?:null|\d+)"/g,
			Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
			Na = /^\s+/,
			Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Pa = /<([\w:]+)/,
			Qa = /<tbody/i,
			Ra = /<|&#?\w+;/,
			Sa = /<(?:script|style|link)/i,
			Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ua = /^$|\/(?:java|ecma)script/i,
			Va = /^true\/(.*)/,
			Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Xa = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			Ya = p(oa),
			Za = Ya.appendChild(oa.createElement("div"));
		Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
			clone: function(a, b, c) {
				var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
				if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
					for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
				if (b)
					if (c)
						for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
					else w(a, f);
				return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
			},
			buildFragment: function(a, b, c, d) {
				for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
					if (f = a[o], f || 0 === f)
						if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
						else if (Ra.test(f)) {
					for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
					if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
						for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
					for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
					h = m.lastChild
				} else n.push(b.createTextNode(f));
				for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
					if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
						for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
				return h = null, m
			},
			cleanData: function(a, b) {
				for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
					if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
						if (f.events)
							for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
						i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
					}
			}
		}), ea.fn.extend({
			text: function(a) {
				return Da(this, function(a) {
					return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
				}, null, a, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(a) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var b = s(this, a);
						b.appendChild(a)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(a) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var b = s(this, a);
						b.insertBefore(a, b.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(a) {
					this.parentNode && this.parentNode.insertBefore(a, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(a) {
					this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
				})
			},
			remove: function(a, b) {
				for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
				return this
			},
			empty: function() {
				for (var a, b = 0; null != (a = this[b]); b++) {
					for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
					a.options && ea.nodeName(a, "select") && (a.options.length = 0)
				}
				return this
			},
			clone: function(a, b) {
				return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
					return ea.clone(this, a, b)
				})
			},
			html: function(a) {
				return Da(this, function(a) {
					var b = this[0] || {},
						c = 0,
						d = this.length;
					if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
					if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
						a = a.replace(Oa, "<$1></$2>");
						try {
							for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
							b = 0
						} catch (e) {}
					}
					b && this.empty().append(a)
				}, null, a, arguments.length)
			},
			replaceWith: function() {
				var a = arguments[0];
				return this.domManip(arguments, function(b) {
					a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
				}), a && (a.length || a.nodeType) ? this : this.remove()
			},
			detach: function(a) {
				return this.remove(a, !0)
			},
			domManip: function(a, b) {
				a = Y.apply([], a);
				var c, d, e, f, g, h, i = 0,
					j = this.length,
					k = this,
					l = j - 1,
					m = a[0],
					n = ea.isFunction(m);
				if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function(c) {
					var d = k.eq(c);
					n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
				});
				if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
					for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
					if (e)
						for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
					h = c = null
				}
				return this
			}
		}), ea.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(a, b) {
			ea.fn[a] = function(a) {
				for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
				return this.pushStack(e)
			}
		});
		var $a, _a = {};
		! function() {
			var a;
			ca.shrinkWrapBlocks = function() {
				if (null != a) return a;
				a = !1;
				var b, c, d;
				return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
			}
		}();
		var ab, bb, cb = /^margin/,
			db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
			eb = /^(top|right|bottom|left)$/;
		a.getComputedStyle ? (ab = function(a) {
			return a.ownerDocument.defaultView.getComputedStyle(a, null)
		}, bb = function(a, b, c) {
			var d, e, f, g, h = a.style;
			return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e,
				h.maxWidth = f)), void 0 === g ? g : g + ""
		}) : oa.documentElement.currentStyle && (ab = function(a) {
			return a.currentStyle
		}, bb = function(a, b, c) {
			var d, e, f, g, h = a.style;
			return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
		}), ! function() {
			function b() {
				var b, c, d, e;
				c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
					width: "4px"
				}).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
			}
			var c, d, e, f, g, h, i;
			c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
				reliableHiddenOffsets: function() {
					return null == h && b(), h
				},
				boxSizingReliable: function() {
					return null == g && b(), g
				},
				pixelPosition: function() {
					return null == f && b(), f
				},
				reliableMarginRight: function() {
					return null == i && b(), i
				}
			}))
		}(), ea.swap = function(a, b, c, d) {
			var e, f, g = {};
			for (f in b) g[f] = a.style[f], a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b) a.style[f] = g[f];
			return e
		};
		var fb = /alpha\([^)]*\)/i,
			gb = /opacity\s*=\s*([^)]*)/,
			hb = /^(none|table(?!-c[ea]).+)/,
			ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
			jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
			kb = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			lb = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			mb = ["Webkit", "O", "Moz", "ms"];
		ea.extend({
			cssHooks: {
				opacity: {
					get: function(a, b) {
						if (b) {
							var c = bb(a, "opacity");
							return "" === c ? "1" : c
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": ca.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(a, b, c, d) {
				if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
					var e, f, g, h = ea.camelCase(b),
						i = a.style;
					if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
					if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
						i[b] = c
					} catch (j) {}
				}
			},
			css: function(a, b, c, d) {
				var e, f, g, h = ea.camelCase(b);
				return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
			}
		}), ea.each(["height", "width"], function(a, b) {
			ea.cssHooks[b] = {
				get: function(a, c, d) {
					return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() {
						return F(a, b, d)
					}) : F(a, b, d) : void 0
				},
				set: function(a, c, d) {
					var e = d && ab(a);
					return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
				}
			}
		}), ca.opacity || (ea.cssHooks.opacity = {
			get: function(a, b) {
				return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
			},
			set: function(a, b) {
				var c = a.style,
					d = a.currentStyle,
					e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
					f = d && d.filter || c.filter || "";
				c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
			}
		}), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
			return b ? ea.swap(a, {
				display: "inline-block"
			}, bb, [a, "marginRight"]) : void 0
		}), ea.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(a, b) {
			ea.cssHooks[a + b] = {
				expand: function(c) {
					for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
					return e
				}
			}, cb.test(a) || (ea.cssHooks[a + b].set = D)
		}), ea.fn.extend({
			css: function(a, b) {
				return Da(this, function(a, b, c) {
					var d, e, f = {},
						g = 0;
					if (ea.isArray(b)) {
						for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
						return f
					}
					return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
				}, a, b, arguments.length > 1)
			},
			show: function() {
				return C(this, !0)
			},
			hide: function() {
				return C(this)
			},
			toggle: function(a) {
				return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
					Ca(this) ? ea(this).show() : ea(this).hide()
				})
			}
		}), ea.Tween = G, G.prototype = {
			constructor: G,
			init: function(a, b, c, d, e, f) {
				this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
			},
			cur: function() {
				var a = G.propHooks[this.prop];
				return a && a.get ? a.get(this) : G.propHooks._default.get(this)
			},
			run: function(a) {
				var b, c = G.propHooks[this.prop];
				return this.pos = b = this.options.duration ? ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
			}
		}, G.prototype.init.prototype = G.prototype, G.propHooks = {
			_default: {
				get: function(a) {
					var b;
					return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
				},
				set: function(a) {
					ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
				}
			}
		}, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
			set: function(a) {
				a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
			}
		}, ea.easing = {
			linear: function(a) {
				return a
			},
			swing: function(a) {
				return .5 - Math.cos(a * Math.PI) / 2
			}
		}, ea.fx = G.prototype.init, ea.fx.step = {};
		var nb, ob, pb = /^(?:toggle|show|hide)$/,
			qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
			rb = /queueHooks$/,
			sb = [K],
			tb = {
				"*": [function(a, b) {
					var c = this.createTween(a, b),
						d = c.cur(),
						e = qb.exec(b),
						f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
						g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
						h = 1,
						i = 20;
					if (g && g[3] !== f) {
						f = f || g[3], e = e || [], g = +d || 1;
						do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
					}
					return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
				}]
			};
		ea.Animation = ea.extend(M, {
				tweener: function(a, b) {
					ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
					for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
				},
				prefilter: function(a, b) {
					b ? sb.unshift(a) : sb.push(a)
				}
			}), ea.speed = function(a, b, c) {
				var d = a && "object" == typeof a ? ea.extend({}, a) : {
					complete: c || !c && b || ea.isFunction(a) && a,
					duration: a,
					easing: c && b || b && !ea.isFunction(b) && b
				};
				return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
					ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
				}, d
			}, ea.fn.extend({
				fadeTo: function(a, b, c, d) {
					return this.filter(Ca).css("opacity", 0).show().end().animate({
						opacity: b
					}, a, c, d)
				},
				animate: function(a, b, c, d) {
					var e = ea.isEmptyObject(a),
						f = ea.speed(b, c, d),
						g = function() {
							var b = M(this, ea.extend({}, a), f);
							(e || ea._data(this, "finish")) && b.stop(!0)
						};
					return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
				},
				stop: function(a, b, c) {
					var d = function(a) {
						var b = a.stop;
						delete a.stop, b(c)
					};
					return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
						var b = !0,
							e = null != a && a + "queueHooks",
							f = ea.timers,
							g = ea._data(this);
						if (e) g[e] && g[e].stop && d(g[e]);
						else
							for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
						for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
						(b || !c) && ea.dequeue(this, a)
					})
				},
				finish: function(a) {
					return a !== !1 && (a = a || "fx"), this.each(function() {
						var b, c = ea._data(this),
							d = c[a + "queue"],
							e = c[a + "queueHooks"],
							f = ea.timers,
							g = d ? d.length : 0;
						for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
						for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
						delete c.finish
					})
				}
			}), ea.each(["toggle", "show", "hide"], function(a, b) {
				var c = ea.fn[b];
				ea.fn[b] = function(a, d, e) {
					return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
				}
			}), ea.each({
				slideDown: I("show"),
				slideUp: I("hide"),
				slideToggle: I("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(a, b) {
				ea.fn[a] = function(a, c, d) {
					return this.animate(b, a, c, d)
				}
			}), ea.timers = [], ea.fx.tick = function() {
				var a, b = ea.timers,
					c = 0;
				for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
				b.length || ea.fx.stop(), nb = void 0
			}, ea.fx.timer = function(a) {
				ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
			}, ea.fx.interval = 13, ea.fx.start = function() {
				ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
			}, ea.fx.stop = function() {
				clearInterval(ob), ob = null
			}, ea.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, ea.fn.delay = function(a, b) {
				return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
					var d = setTimeout(b, a);
					c.stop = function() {
						clearTimeout(d)
					}
				})
			},
			function() {
				var a, b, c, d, e;
				b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
			}();
		var ub = /\r/g;
		ea.fn.extend({
			val: function(a) {
				var b, c, d, e = this[0];
				return arguments.length ? (d = ea.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
						return null == a ? "" : a + ""
					})), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				})) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
			}
		}), ea.extend({
			valHooks: {
				option: {
					get: function(a) {
						var b = ea.find.attr(a, "value");
						return null != b ? b : ea.trim(ea.text(a))
					}
				},
				select: {
					get: function(a) {
						for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
							if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
								if (b = ea(c).val(), f) return b;
								g.push(b)
							} return g
					},
					set: function(a, b) {
						for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
							if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
								d.selected = c = !0
							} catch (h) {
								d.scrollHeight
							} else d.selected = !1;
						return c || (a.selectedIndex = -1), e
					}
				}
			}
		}), ea.each(["radio", "checkbox"], function() {
			ea.valHooks[this] = {
				set: function(a, b) {
					return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
				}
			}, ca.checkOn || (ea.valHooks[this].get = function(a) {
				return null === a.getAttribute("value") ? "on" : a.value
			})
		});
		var vb, wb, xb = ea.expr.attrHandle,
			yb = /^(?:checked|selected)$/i,
			zb = ca.getSetAttribute,
			Ab = ca.input;
		ea.fn.extend({
			attr: function(a, b) {
				return Da(this, ea.attr, a, b, arguments.length > 1)
			},
			removeAttr: function(a) {
				return this.each(function() {
					ea.removeAttr(this, a)
				})
			}
		}), ea.extend({
			attr: function(a, b, c) {
				var d, e, f = a.nodeType;
				return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b)) : void 0
			},
			removeAttr: function(a, b) {
				var c, d, e = 0,
					f = b && b.match(ta);
				if (f && 1 === a.nodeType)
					for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
			},
			attrHooks: {
				type: {
					set: function(a, b) {
						if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
							var c = a.value;
							return a.setAttribute("type", b), c && (a.value = c), b
						}
					}
				}
			}
		}), wb = {
			set: function(a, b, c) {
				return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
			}
		}, ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
			var c = xb[b] || ea.find.attr;
			xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) {
				var e, f;
				return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
			} : function(a, b, c) {
				return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
			}
		}), Ab && zb || (ea.attrHooks.value = {
			set: function(a, b, c) {
				return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
			}
		}), zb || (vb = {
			set: function(a, b, c) {
				var d = a.getAttributeNode(c);
				return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
			}
		}, xb.id = xb.name = xb.coords = function(a, b, c) {
			var d;
			return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
		}, ea.valHooks.button = {
			get: function(a, b) {
				var c = a.getAttributeNode(b);
				return c && c.specified ? c.value : void 0
			},
			set: vb.set
		}, ea.attrHooks.contenteditable = {
			set: function(a, b, c) {
				vb.set(a, "" === b ? !1 : b, c)
			}
		}, ea.each(["width", "height"], function(a, b) {
			ea.attrHooks[b] = {
				set: function(a, c) {
					return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
				}
			}
		})), ca.style || (ea.attrHooks.style = {
			get: function(a) {
				return a.style.cssText || void 0
			},
			set: function(a, b) {
				return a.style.cssText = b + ""
			}
		});
		var Bb = /^(?:input|select|textarea|button|object)$/i,
			Cb = /^(?:a|area)$/i;
		ea.fn.extend({
			prop: function(a, b) {
				return Da(this, ea.prop, a, b, arguments.length > 1)
			},
			removeProp: function(a) {
				return a = ea.propFix[a] || a, this.each(function() {
					try {
						this[a] = void 0, delete this[a]
					} catch (b) {}
				})
			}
		}), ea.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(a, b, c) {
				var d, e, f, g = a.nodeType;
				return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
			},
			propHooks: {
				tabIndex: {
					get: function(a) {
						var b = ea.find.attr(a, "tabindex");
						return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
					}
				}
			}
		}), ca.hrefNormalized || ea.each(["href", "src"], function(a, b) {
			ea.propHooks[b] = {
				get: function(a) {
					return a.getAttribute(b, 4)
				}
			}
		}), ca.optSelected || (ea.propHooks.selected = {
			get: function(a) {
				var b = a.parentNode;
				return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
			}
		}), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			ea.propFix[this.toLowerCase()] = this
		}), ca.enctype || (ea.propFix.enctype = "encoding");
		var Db = /[\t\r\n\f]/g;
		ea.fn.extend({
			addClass: function(a) {
				var b, c, d, e, f, g, h = 0,
					i = this.length,
					j = "string" == typeof a && a;
				if (ea.isFunction(a)) return this.each(function(b) {
					ea(this).addClass(a.call(this, b, this.className))
				});
				if (j)
					for (b = (a || "").match(ta) || []; i > h; h++)
						if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
							for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
							g = ea.trim(d), c.className !== g && (c.className = g)
						} return this
			},
			removeClass: function(a) {
				var b, c, d, e, f, g, h = 0,
					i = this.length,
					j = 0 === arguments.length || "string" == typeof a && a;
				if (ea.isFunction(a)) return this.each(function(b) {
					ea(this).removeClass(a.call(this, b, this.className))
				});
				if (j)
					for (b = (a || "").match(ta) || []; i > h; h++)
						if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
							for (f = 0; e = b[f++];)
								for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
							g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
						} return this
			},
			toggleClass: function(a, b) {
				var c = typeof a;
				return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) {
					ea(this).toggleClass(a.call(this, c, this.className, b), b)
				} : function() {
					if ("string" === c)
						for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
					else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
				})
			},
			hasClass: function(a) {
				for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
					if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
				return !1
			}
		}), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
			ea.fn[b] = function(a, c) {
				return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
			}
		}), ea.fn.extend({
			hover: function(a, b) {
				return this.mouseenter(a).mouseleave(b || a)
			},
			bind: function(a, b, c) {
				return this.on(a, null, b, c)
			},
			unbind: function(a, b) {
				return this.off(a, null, b)
			},
			delegate: function(a, b, c, d) {
				return this.on(b, a, c, d)
			},
			undelegate: function(a, b, c) {
				return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
			}
		});
		var Eb = ea.now(),
			Fb = /\?/,
			Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		ea.parseJSON = function(b) {
			if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
			var c, d = null,
				e = ea.trim(b + "");
			return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
				return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
			})) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
		}, ea.parseXML = function(b) {
			var c, d;
			if (!b || "string" != typeof b) return null;
			try {
				a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
			} catch (e) {
				c = void 0
			}
			return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
		};
		var Hb, Ib, Jb = /#.*$/,
			Kb = /([?&])_=[^&]*/,
			Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Nb = /^(?:GET|HEAD)$/,
			Ob = /^\/\//,
			Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			Qb = {},
			Rb = {},
			Sb = "*/".concat("*");
		try {
			Ib = location.href
		} catch (Tb) {
			Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
		}
		Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Ib,
				type: "GET",
				isLocal: Mb.test(Hb[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Sb,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": ea.parseJSON,
					"text xml": ea.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(a, b) {
				return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
			},
			ajaxPrefilter: N(Qb),
			ajaxTransport: N(Rb),
			ajax: function(a, b) {
				function c(a, b, c, d) {
					var e, k, r, s, u, w = b;
					2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
				}
				"object" == typeof a && (b = a, a = void 0), b = b || {};
				var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
					m = l.context || l,
					n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
					o = ea.Deferred(),
					p = ea.Callbacks("once memory"),
					q = l.statusCode || {},
					r = {},
					s = {},
					t = 0,
					u = "canceled",
					v = {
						readyState: 0,
						getResponseHeader: function(a) {
							var b;
							if (2 === t) {
								if (!k)
									for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
								b = k[a.toLowerCase()]
							}
							return null == b ? null : b
						},
						getAllResponseHeaders: function() {
							return 2 === t ? g : null
						},
						setRequestHeader: function(a, b) {
							var c = a.toLowerCase();
							return t || (a = s[c] = s[c] || a, r[a] = b), this
						},
						overrideMimeType: function(a) {
							return t || (l.mimeType = a), this
						},
						statusCode: function(a) {
							var b;
							if (a)
								if (2 > t)
									for (b in a) q[b] = [q[b], a[b]];
								else v.always(a[v.status]);
							return this
						},
						abort: function(a) {
							var b = a || u;
							return j && j.abort(b), c(0, b), this
						}
					};
				if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
				i = l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
				for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
				if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
				u = "abort";
				for (e in {
						success: 1,
						error: 1,
						complete: 1
					}) v[e](l[e]);
				if (j = O(Rb, l, b, v)) {
					v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
						v.abort("timeout")
					}, l.timeout));
					try {
						t = 1, j.send(r, c)
					} catch (w) {
						if (!(2 > t)) throw w;
						c(-1, w)
					}
				} else c(-1, "No Transport");
				return v
			},
			getJSON: function(a, b, c) {
				return ea.get(a, b, c, "json")
			},
			getScript: function(a, b) {
				return ea.get(a, void 0, b, "script")
			}
		}), ea.each(["get", "post"], function(a, b) {
			ea[b] = function(a, c, d, e) {
				return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
					url: a,
					type: b,
					dataType: e,
					data: c,
					success: d
				})
			}
		}), ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
			ea.fn[b] = function(a) {
				return this.on(b, a)
			}
		}), ea._evalUrl = function(a) {
			return ea.ajax({
				url: a,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, ea.fn.extend({
			wrapAll: function(a) {
				if (ea.isFunction(a)) return this.each(function(b) {
					ea(this).wrapAll(a.call(this, b))
				});
				if (this[0]) {
					var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
						for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
						return a
					}).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				return this.each(ea.isFunction(a) ? function(b) {
					ea(this).wrapInner(a.call(this, b))
				} : function() {
					var b = ea(this),
						c = b.contents();
					c.length ? c.wrapAll(a) : b.append(a)
				})
			},
			wrap: function(a) {
				var b = ea.isFunction(a);
				return this.each(function(c) {
					ea(this).wrapAll(b ? a.call(this, c) : a)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
				}).end()
			}
		}), ea.expr.filters.hidden = function(a) {
			return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
		}, ea.expr.filters.visible = function(a) {
			return !ea.expr.filters.hidden(a)
		};
		var Ub = /%20/g,
			Vb = /\[\]$/,
			Wb = /\r?\n/g,
			Xb = /^(?:submit|button|image|reset|file)$/i,
			Yb = /^(?:input|select|textarea|keygen)/i;
		ea.param = function(a, b) {
			var c, d = [],
				e = function(a, b) {
					b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() {
				e(this.name, this.value)
			});
			else
				for (c in a) S(c, a[c], b, e);
			return d.join("&").replace(Ub, "+")
		}, ea.fn.extend({
			serialize: function() {
				return ea.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var a = ea.prop(this, "elements");
					return a ? ea.makeArray(a) : this
				}).filter(function() {
					var a = this.type;
					return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
				}).map(function(a, b) {
					var c = ea(this).val();
					return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
						return {
							name: b.name,
							value: a.replace(Wb, "\r\n")
						}
					}) : {
						name: b.name,
						value: c.replace(Wb, "\r\n")
					}
				}).get()
			}
		}), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
		} : T;
		var Zb = 0,
			$b = {},
			_b = ea.ajaxSettings.xhr();
		a.ActiveXObject && ea(a).on("unload", function() {
			for (var a in $b) $b[a](void 0, !0)
		}), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function(a) {
			if (!a.crossDomain || ca.cors) {
				var b;
				return {
					send: function(c, d) {
						var e, f = a.xhr(),
							g = ++Zb;
						if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
							for (e in a.xhrFields) f[e] = a.xhrFields[e];
						a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
						for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
						f.send(a.hasContent && a.data || null), b = function(c, e) {
							var h, i, j;
							if (b && (e || 4 === f.readyState))
								if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
								else {
									j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
									try {
										i = f.statusText
									} catch (k) {
										i = ""
									}
									h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
								} j && d(h, i, j, f.getAllResponseHeaders())
						}, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
					},
					abort: function() {
						b && b(void 0, !0)
					}
				}
			}
		}), ea.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(a) {
					return ea.globalEval(a), a
				}
			}
		}), ea.ajaxPrefilter("script", function(a) {
			void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
		}), ea.ajaxTransport("script", function(a) {
			if (a.crossDomain) {
				var b, c = oa.head || ea("head")[0] || oa.documentElement;
				return {
					send: function(d, e) {
						b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
							(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
						}, c.insertBefore(b, c.firstChild)
					},
					abort: function() {
						b && b.onload(void 0, !0)
					}
				}
			}
		});
		var ac = [],
			bc = /(=)\?(?=&|$)|\?\?/;
		ea.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var a = ac.pop() || ea.expando + "_" + Eb++;
				return this[a] = !0, a
			}
		}), ea.ajaxPrefilter("json jsonp", function(b, c, d) {
			var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
			return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
				return g || ea.error(e + " was not called"), g[0]
			}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
				g = arguments
			}, d.always(function() {
				a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
			}), "script") : void 0
		}), ea.parseHTML = function(a, b, c) {
			if (!a || "string" != typeof a) return null;
			"boolean" == typeof b && (c = b, b = !1), b = b || oa;
			var d = la.exec(a),
				e = !c && [];
			return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
		};
		var cc = ea.fn.load;
		ea.fn.load = function(a, b, c) {
			if ("string" != typeof a && cc) return cc.apply(this, arguments);
			var d, e, f, g = this,
				h = a.indexOf(" ");
			return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
				url: a,
				type: f,
				dataType: "html",
				data: b
			}).done(function(a) {
				e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
			}).complete(c && function(a, b) {
				g.each(c, e || [a.responseText, b, a])
			}), this
		}, ea.expr.filters.animated = function(a) {
			return ea.grep(ea.timers, function(b) {
				return a === b.elem
			}).length
		};
		var dc = a.document.documentElement;
		ea.offset = {
			setOffset: function(a, b, c) {
				var d, e, f, g, h, i, j, k = ea.css(a, "position"),
					l = ea(a),
					m = {};
				"static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
			}
		}, ea.fn.extend({
			offset: function(a) {
				if (arguments.length) return void 0 === a ? this : this.each(function(b) {
					ea.offset.setOffset(this, a, b)
				});
				var b, c, d = {
						top: 0,
						left: 0
					},
					e = this[0],
					f = e && e.ownerDocument;
				return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
					top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
					left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
				}) : d) : void 0
			},
			position: function() {
				if (this[0]) {
					var a, b, c = {
							top: 0,
							left: 0
						},
						d = this[0];
					return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
						top: b.top - c.top - ea.css(d, "marginTop", !0),
						left: b.left - c.left - ea.css(d, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
					return a || dc
				})
			}
		}), ea.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(a, b) {
			var c = /Y/.test(b);
			ea.fn[a] = function(d) {
				return Da(this, function(a, d, e) {
					var f = V(a);
					return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
				}, a, d, arguments.length, null)
			}
		}), ea.each(["top", "left"], function(a, b) {
			ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
				return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
			})
		}), ea.each({
			Height: "height",
			Width: "width"
		}, function(a, b) {
			ea.each({
				padding: "inner" + a,
				content: b,
				"": "outer" + a
			}, function(c, d) {
				ea.fn[d] = function(d, e) {
					var f = arguments.length && (c || "boolean" != typeof d),
						g = c || (d === !0 || e === !0 ? "margin" : "border");
					return Da(this, function(b, c, d) {
						var e;
						return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
							Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
					}, b, f ? d : void 0, f, null)
				}
			})
		}), ea.fn.size = function() {
			return this.length
		}, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
			return ea
		});
		var ec = a.jQuery,
			fc = a.$;
		return ea.noConflict = function(b) {
			return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea
		}, typeof b === xa && (a.jQuery = a.$ = ea), ea
	}), function(a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
	}(function(a) {
		function b(b, d) {
			var e, f, g, h = b.nodeName.toLowerCase();
			return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
		}

		function c(b) {
			return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
				return "hidden" === a.css(this, "visibility")
			}).length
		}

		function d(a) {
			for (var b, c; a.length && a[0] !== document;) {
				if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
				a = a.parent()
			}
			return 0
		}

		function e() {
			this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
				closeText: "Done",
				prevText: "Prev",
				nextText: "Next",
				currentText: "Today",
				monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				weekHeader: "Wk",
				dateFormat: "mm/dd/yy",
				firstDay: 0,
				isRTL: !1,
				showMonthAfterYear: !1,
				yearSuffix: ""
			}, this._defaults = {
				showOn: "focus",
				showAnim: "fadeIn",
				showOptions: {},
				defaultDate: null,
				appendText: "",
				buttonText: "...",
				buttonImage: "",
				buttonImageOnly: !1,
				hideIfNoPrevNext: !1,
				navigationAsDateFormat: !1,
				gotoCurrent: !1,
				changeMonth: !1,
				changeYear: !1,
				yearRange: "c-10:c+10",
				showOtherMonths: !1,
				selectOtherMonths: !1,
				showWeek: !1,
				calculateWeek: this.iso8601Week,
				shortYearCutoff: "+10",
				minDate: null,
				maxDate: null,
				duration: "fast",
				beforeShowDay: null,
				beforeShow: null,
				onSelect: null,
				onChangeMonthYear: null,
				onClose: null,
				numberOfMonths: 1,
				showCurrentAtPos: 0,
				stepMonths: 1,
				stepBigMonths: 12,
				altField: "",
				altFormat: "",
				constrainInput: !0,
				showButtonPanel: !1,
				autoSize: !1,
				disabled: !1
			}, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = f(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
		}

		function f(b) {
			var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
			return b.delegate(c, "mouseout", function() {
				a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
			}).delegate(c, "mouseover", g)
		}

		function g() {
			a.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
		}

		function h(b, c) {
			a.extend(b, c);
			for (var d in c) null == c[d] && (b[d] = c[d]);
			return b
		}
		a.ui = a.ui || {}, a.extend(a.ui, {
			version: "1.11.4",
			keyCode: {
				BACKSPACE: 8,
				COMMA: 188,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				LEFT: 37,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SPACE: 32,
				TAB: 9,
				UP: 38
			}
		}), a.fn.extend({
			scrollParent: function(b) {
				var c = this.css("position"),
					d = "absolute" === c,
					e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
					f = this.parents().filter(function() {
						var b = a(this);
						return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
					}).eq(0);
				return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
			},
			uniqueId: function() {
				var a = 0;
				return function() {
					return this.each(function() {
						this.id || (this.id = "ui-id-" + ++a)
					})
				}
			}(),
			removeUniqueId: function() {
				return this.each(function() {
					/^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
				})
			}
		}), a.extend(a.expr[":"], {
			data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
				return function(c) {
					return !!a.data(c, b)
				}
			}) : function(b, c, d) {
				return !!a.data(b, d[3])
			},
			focusable: function(c) {
				return b(c, !isNaN(a.attr(c, "tabindex")))
			},
			tabbable: function(c) {
				var d = a.attr(c, "tabindex"),
					e = isNaN(d);
				return (e || d >= 0) && b(c, !e)
			}
		}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
			function d(b, c, d, f) {
				return a.each(e, function() {
					c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
				}), c
			}
			var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
				f = c.toLowerCase(),
				g = {
					innerWidth: a.fn.innerWidth,
					innerHeight: a.fn.innerHeight,
					outerWidth: a.fn.outerWidth,
					outerHeight: a.fn.outerHeight
				};
			a.fn["inner" + c] = function(b) {
				return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
					a(this).css(f, d(this, b) + "px")
				})
			}, a.fn["outer" + c] = function(b, e) {
				return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
					a(this).css(f, d(this, b, !0, e) + "px")
				})
			}
		}), a.fn.addBack || (a.fn.addBack = function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
			return function(c) {
				return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
			}
		}(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
			focus: function(b) {
				return function(c, d) {
					return "number" == typeof c ? this.each(function() {
						var b = this;
						setTimeout(function() {
							a(b).focus(), d && d.call(b)
						}, c)
					}) : b.apply(this, arguments)
				}
			}(a.fn.focus),
			disableSelection: function() {
				var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
				return function() {
					return this.bind(a + ".ui-disableSelection", function(a) {
						a.preventDefault()
					})
				}
			}(),
			enableSelection: function() {
				return this.unbind(".ui-disableSelection")
			},
			zIndex: function(b) {
				if (void 0 !== b) return this.css("zIndex", b);
				if (this.length)
					for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
						if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
						e = e.parent()
					}
				return 0
			}
		}), a.ui.plugin = {
			add: function(b, c, d) {
				var e, f = a.ui[b].prototype;
				for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
			},
			call: function(a, b, c, d) {
				var e, f = a.plugins[b];
				if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
					for (e = 0; f.length > e; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
			}
		};
		var i = 0,
			j = Array.prototype.slice;
		a.cleanData = function(b) {
			return function(c) {
				var d, e, f;
				for (f = 0; null != (e = c[f]); f++) try {
					d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
				} catch (g) {}
				b(c)
			}
		}(a.cleanData), a.widget = function(b, c, d) {
			var e, f, g, h, i = {},
				j = b.split(".")[0];
			return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
				return !!a.data(b, e)
			}, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
				return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
			}, a.extend(g, f, {
				version: d.version,
				_proto: a.extend({}, d),
				_childConstructors: []
			}), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
				return a.isFunction(d) ? void(i[b] = function() {
					var a = function() {
							return c.prototype[b].apply(this, arguments)
						},
						e = function(a) {
							return c.prototype[b].apply(this, a)
						};
					return function() {
						var b, c = this._super,
							f = this._superApply;
						return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
					}
				}()) : void(i[b] = d)
			}), g.prototype = a.widget.extend(h, {
				widgetEventPrefix: f ? h.widgetEventPrefix || b : b
			}, i, {
				constructor: g,
				namespace: j,
				widgetName: b,
				widgetFullName: e
			}), f ? (a.each(f._childConstructors, function(b, c) {
				var d = c.prototype;
				a.widget(d.namespace + "." + d.widgetName, g, c._proto)
			}), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
		}, a.widget.extend = function(b) {
			for (var c, d, e = j.call(arguments, 1), f = 0, g = e.length; g > f; f++)
				for (c in e[f]) d = e[f][c], e[f].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d);
			return b
		}, a.widget.bridge = function(b, c) {
			var d = c.prototype.widgetFullName || b;
			a.fn[b] = function(e) {
				var f = "string" == typeof e,
					g = j.call(arguments, 1),
					h = this;
				return f ? this.each(function() {
					var c, f = a.data(this, d);
					return "instance" === e ? (h = f, !1) : f ? a.isFunction(f[e]) && "_" !== e.charAt(0) ? (c = f[e].apply(f, g), c !== f && void 0 !== c ? (h = c && c.jquery ? h.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + e + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + e + "'")
				}) : (g.length && (e = a.widget.extend.apply(null, [e].concat(g))), this.each(function() {
					var b = a.data(this, d);
					b ? (b.option(e || {}), b._init && b._init()) : a.data(this, d, new c(e, this))
				})), h
			}
		}, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				disabled: !1,
				create: null
			},
			_createWidget: function(b, c) {
				c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
					remove: function(a) {
						a.target === c && this.destroy()
					}
				}), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: a.noop,
			_getCreateEventData: a.noop,
			_create: a.noop,
			_init: a.noop,
			destroy: function() {
				this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
			},
			_destroy: a.noop,
			widget: function() {
				return this.element
			},
			option: function(b, c) {
				var d, e, f, g = b;
				if (0 === arguments.length) return a.widget.extend({}, this.options);
				if ("string" == typeof b)
					if (g = {}, d = b.split("."), b = d.shift(), d.length) {
						for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
						if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
						e[b] = c
					} else {
						if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
						g[b] = c
					} return this._setOptions(g), this
			},
			_setOptions: function(a) {
				var b;
				for (b in a) this._setOption(b, a[b]);
				return this
			},
			_setOption: function(a, b) {
				return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
			},
			enable: function() {
				return this._setOptions({
					disabled: !1
				})
			},
			disable: function() {
				return this._setOptions({
					disabled: !0
				})
			},
			_on: function(b, c, d) {
				var e, f = this;
				"boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
					function h() {
						return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
					}
					"string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
					var i = d.match(/^([\w:-]*)\s*(.*)$/),
						j = i[1] + f.eventNamespace,
						k = i[2];
					k ? e.delegate(k, j, h) : c.bind(j, h)
				})
			},
			_off: function(b, c) {
				c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
			},
			_delay: function(a, b) {
				function c() {
					return ("string" == typeof a ? d[a] : a).apply(d, arguments)
				}
				var d = this;
				return setTimeout(c, b || 0)
			},
			_hoverable: function(b) {
				this.hoverable = this.hoverable.add(b), this._on(b, {
					mouseenter: function(b) {
						a(b.currentTarget).addClass("ui-state-hover")
					},
					mouseleave: function(b) {
						a(b.currentTarget).removeClass("ui-state-hover")
					}
				})
			},
			_focusable: function(b) {
				this.focusable = this.focusable.add(b), this._on(b, {
					focusin: function(b) {
						a(b.currentTarget).addClass("ui-state-focus")
					},
					focusout: function(b) {
						a(b.currentTarget).removeClass("ui-state-focus")
					}
				})
			},
			_trigger: function(b, c, d) {
				var e, f, g = this.options[b];
				if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
					for (e in f) e in c || (c[e] = f[e]);
				return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
			}
		}, a.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(b, c) {
			a.Widget.prototype["_" + b] = function(d, e, f) {
				"string" == typeof e && (e = {
					effect: e
				});
				var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
				e = e || {}, "number" == typeof e && (e = {
					duration: e
				}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
					a(this)[b](), f && f.call(d[0]), c()
				})
			}
		}), a.widget;
		var k = !1;
		a(document).mouseup(function() {
				k = !1
			}), a.widget("ui.mouse", {
				version: "1.11.4",
				options: {
					cancel: "input,textarea,button,select,option",
					distance: 1,
					delay: 0
				},
				_mouseInit: function() {
					var b = this;
					this.element.bind("mousedown." + this.widgetName, function(a) {
						return b._mouseDown(a)
					}).bind("click." + this.widgetName, function(c) {
						return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
					}), this.started = !1
				},
				_mouseDestroy: function() {
					this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
				},
				_mouseDown: function(b) {
					if (!k) {
						this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
						var c = this,
							d = 1 === b.which,
							e = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
						return d && !e && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
							c.mouseDelayMet = !0
						}, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
							return c._mouseMove(a)
						}, this._mouseUpDelegate = function(a) {
							return c._mouseUp(a)
						}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), k = !0, !0)) : !0
					}
				},
				_mouseMove: function(b) {
					if (this._mouseMoved) {
						if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b);
						if (!b.which) return this._mouseUp(b)
					}
					return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
				},
				_mouseUp: function(b) {
					return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), k = !1, !1
				},
				_mouseDistanceMet: function(a) {
					return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
				},
				_mouseDelayMet: function() {
					return this.mouseDelayMet
				},
				_mouseStart: function() {},
				_mouseDrag: function() {},
				_mouseStop: function() {},
				_mouseCapture: function() {
					return !0
				}
			}),
			function() {
				function b(a, b, c) {
					return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
				}

				function c(b, c) {
					return parseInt(a.css(b, c), 10) || 0
				}

				function d(b) {
					var c = b[0];
					return 9 === c.nodeType ? {
						width: b.width(),
						height: b.height(),
						offset: {
							top: 0,
							left: 0
						}
					} : a.isWindow(c) ? {
						width: b.width(),
						height: b.height(),
						offset: {
							top: b.scrollTop(),
							left: b.scrollLeft()
						}
					} : c.preventDefault ? {
						width: 0,
						height: 0,
						offset: {
							top: c.pageY,
							left: c.pageX
						}
					} : {
						width: b.outerWidth(),
						height: b.outerHeight(),
						offset: b.offset()
					}
				}
				a.ui = a.ui || {};
				var e, f, g = Math.max,
					h = Math.abs,
					i = Math.round,
					j = /left|center|right/,
					k = /top|center|bottom/,
					l = /[\+\-]\d+(\.[\d]+)?%?/,
					m = /^\w+/,
					n = /%$/,
					o = a.fn.position;
				a.position = {
						scrollbarWidth: function() {
							if (void 0 !== e) return e;
							var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
								f = d.children()[0];
							return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
						},
						getScrollInfo: function(b) {
							var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
								d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
								e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
								f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
							return {
								width: f ? a.position.scrollbarWidth() : 0,
								height: e ? a.position.scrollbarWidth() : 0
							}
						},
						getWithinInfo: function(b) {
							var c = a(b || window),
								d = a.isWindow(c[0]),
								e = !!c[0] && 9 === c[0].nodeType;
							return {
								element: c,
								isWindow: d,
								isDocument: e,
								offset: c.offset() || {
									left: 0,
									top: 0
								},
								scrollLeft: c.scrollLeft(),
								scrollTop: c.scrollTop(),
								width: d || e ? c.width() : c.outerWidth(),
								height: d || e ? c.height() : c.outerHeight()
							}
						}
					}, a.fn.position = function(e) {
						if (!e || !e.of) return o.apply(this, arguments);
						e = a.extend({}, e);
						var n, p, q, r, s, t, u = a(e.of),
							v = a.position.getWithinInfo(e.within),
							w = a.position.getScrollInfo(v),
							x = (e.collision || "flip").split(" "),
							y = {};
						return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function() {
							var a, b, c = (e[this] || "").split(" ");
							1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
						}), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function() {
							var d, j, k = a(this),
								l = k.outerWidth(),
								m = k.outerHeight(),
								o = c(this, "marginLeft"),
								t = c(this, "marginTop"),
								z = l + o + c(this, "marginRight") + w.width,
								A = m + t + c(this, "marginBottom") + w.height,
								B = a.extend({}, s),
								C = b(y.my, k.outerWidth(), k.outerHeight());
							"right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {
								marginLeft: o,
								marginTop: t
							}, a.each(["left", "top"], function(b, c) {
								a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
									targetWidth: p,
									targetHeight: q,
									elemWidth: l,
									elemHeight: m,
									collisionPosition: d,
									collisionWidth: z,
									collisionHeight: A,
									offset: [n[0] + C[0], n[1] + C[1]],
									my: e.my,
									at: e.at,
									within: v,
									elem: k
								})
							}), e.using && (j = function(a) {
								var b = r.left - B.left,
									c = b + p - l,
									d = r.top - B.top,
									f = d + q - m,
									i = {
										target: {
											element: u,
											left: r.left,
											top: r.top,
											width: p,
											height: q
										},
										element: {
											element: k,
											left: B.left,
											top: B.top,
											width: l,
											height: m
										},
										horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
										vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle"
									};
								l > p && p > h(b + c) && (i.horizontal = "center"), m > q && q > h(d + f) && (i.vertical = "middle"), i.important = g(h(b), h(c)) > g(h(d), h(f)) ? "horizontal" : "vertical", e.using.call(this, a, i)
							}), k.offset(a.extend(B, {
								using: j
							}))
						})
					}, a.ui.position = {
						fit: {
							left: function(a, b) {
								var c, d = b.within,
									e = d.isWindow ? d.scrollLeft : d.offset.left,
									f = d.width,
									h = a.left - b.collisionPosition.marginLeft,
									i = e - h,
									j = h + b.collisionWidth - f - e;
								b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
							},
							top: function(a, b) {
								var c, d = b.within,
									e = d.isWindow ? d.scrollTop : d.offset.top,
									f = b.within.height,
									h = a.top - b.collisionPosition.marginTop,
									i = e - h,
									j = h + b.collisionHeight - f - e;
								b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
							}
						},
						flip: {
							left: function(a, b) {
								var c, d, e = b.within,
									f = e.offset.left + e.scrollLeft,
									g = e.width,
									i = e.isWindow ? e.scrollLeft : e.offset.left,
									j = a.left - b.collisionPosition.marginLeft,
									k = j - i,
									l = j + b.collisionWidth - g - i,
									m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
									n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
									o = -2 * b.offset[0];
								0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || h(k) > c) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > h(d)) && (a.left += m + n + o))
							},
							top: function(a, b) {
								var c, d, e = b.within,
									f = e.offset.top + e.scrollTop,
									g = e.height,
									i = e.isWindow ? e.scrollTop : e.offset.top,
									j = a.top - b.collisionPosition.marginTop,
									k = j - i,
									l = j + b.collisionHeight - g - i,
									m = "top" === b.my[1],
									n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
									o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
									p = -2 * b.offset[1];
								0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, (0 > d || h(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || l > h(c)) && (a.top += n + o + p))
							}
						},
						flipfit: {
							left: function() {
								a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
							},
							top: function() {
								a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
							}
						}
					},
					function() {
						var b, c, d, e, g, h = document.getElementsByTagName("body")[0],
							i = document.createElement("div");
						b = document.createElement(h ? "div" : "body"), d = {
							visibility: "hidden",
							width: 0,
							height: 0,
							border: 0,
							margin: 0,
							background: "none"
						}, h && a.extend(d, {
							position: "absolute",
							left: "-1000px",
							top: "-1000px"
						});
						for (g in d) b.style[g] = d[g];
						b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
					}()
			}(), a.ui.position, a.extend(a.ui, {
				datepicker: {
					version: "1.11.4"
				}
			});
		var l;
		a.extend(e.prototype, {
			markerClassName: "hasDatepicker",
			maxRows: 4,
			_widgetDatepicker: function() {
				return this.dpDiv
			},
			setDefaults: function(a) {
				return h(this._defaults, a || {}), this
			},
			_attachDatepicker: function(b, c) {
				var d, e, f;
				d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
			},
			_newInst: function(b, c) {
				var d = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
				return {
					id: d,
					input: b,
					selectedDay: 0,
					selectedMonth: 0,
					selectedYear: 0,
					drawMonth: 0,
					drawYear: 0,
					inline: c,
					dpDiv: c ? f(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
				}
			},
			_connectDatepicker: function(b, c) {
				var d = a(b);
				c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
			},
			_attachments: function(b, c) {
				var d, e, f, g = this._get(c, "appendText"),
					h = this._get(c, "isRTL");
				c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
					src: f,
					alt: e,
					title: e
				}) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
					src: f,
					alt: e,
					title: e
				}) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
					return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
				}))
			},
			_autoSize: function(a) {
				if (this._get(a, "autoSize") && !a.inline) {
					var b, c, d, e, f = new Date(2009, 11, 20),
						g = this._get(a, "dateFormat");
					g.match(/[DM]/) && (b = function(a) {
						for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, d = e);
						return d
					}, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
				}
			},
			_inlineDatepicker: function(b, c) {
				var d = a(b);
				d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
			},
			_dialogDatepicker: function(b, c, d, e, f) {
				var g, i, j, k, l, m = this._dialogInst;
				return m || (this.uuid += 1, g = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + g + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), h(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this
			},
			_destroyDatepicker: function(b) {
				var c, d = a(b),
					e = a.data(b, "datepicker");
				d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty(), l === e && (l = null))
			},
			_enableDatepicker: function(b) {
				var c, d, e = a(b),
					f = a.data(b, "datepicker");
				e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
					this.disabled = !1
				}).end().filter("img").css({
					opacity: "1.0",
					cursor: ""
				})) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
					return a === b ? null : a
				}))
			},
			_disableDatepicker: function(b) {
				var c, d, e = a(b),
					f = a.data(b, "datepicker");
				e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
					this.disabled = !0
				}).end().filter("img").css({
					opacity: "0.5",
					cursor: "default"
				})) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
					return a === b ? null : a
				}), this._disabledInputs[this._disabledInputs.length] = b)
			},
			_isDisabledDatepicker: function(a) {
				if (!a) return !1;
				for (var b = 0; this._disabledInputs.length > b; b++)
					if (this._disabledInputs[b] === a) return !0;
				return !1
			},
			_getInst: function(b) {
				try {
					return a.data(b, "datepicker")
				} catch (c) {
					throw "Missing instance data for this datepicker"
				}
			},
			_optionDatepicker: function(b, c, d) {
				var e, f, g, i, j = this._getInst(b);
				return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), f = this._getDateDatepicker(b, !0), g = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), h(j.settings, e), null !== g && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, g)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, f), this._updateAlternate(j), this._updateDatepicker(j))))
			},
			_changeDatepicker: function(a, b, c) {
				this._optionDatepicker(a, b, c)
			},
			_refreshDatepicker: function(a) {
				var b = this._getInst(a);
				b && this._updateDatepicker(b)
			},
			_setDateDatepicker: function(a, b) {
				var c = this._getInst(a);
				c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
			},
			_getDateDatepicker: function(a, b) {
				var c = this._getInst(a);
				return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
			},
			_doKeyDown: function(b) {
				var c, d, e, f = a.datepicker._getInst(b.target),
					g = !0,
					h = f.dpDiv.is(".ui-datepicker-rtl");
				if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
					case 9:
						a.datepicker._hideDatepicker(), g = !1;
						break;
					case 13:
						return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
					case 27:
						a.datepicker._hideDatepicker();
						break;
					case 33:
						a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
						break;
					case 34:
						a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
						break;
					case 35:
						(b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
						break;
					case 36:
						(b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
						break;
					case 37:
						(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
						break;
					case 38:
						(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
						break;
					case 39:
						(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
						break;
					case 40:
						(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
						break;
					default:
						g = !1
				} else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
				g && (b.preventDefault(), b.stopPropagation())
			},
			_doKeyPress: function(b) {
				var c, d, e = a.datepicker._getInst(b.target);

				return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0
			},
			_doKeyUp: function(b) {
				var c, d = a.datepicker._getInst(b.target);
				if (d.input.val() !== d.lastVal) try {
					c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
				} catch (e) {}
				return !0
			},
			_showDatepicker: function(b) {
				if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
					var c, e, f, g, i, j, k;
					c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(c, "beforeShow"), f = e ? e.apply(b, [b, c]) : {}, f !== !1 && (h(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
						return g |= "fixed" === a(this).css("position"), !g
					}), i = {
						left: a.datepicker._pos[0],
						top: a.datepicker._pos[1]
					}, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
						position: "absolute",
						display: "block",
						top: "-1000px"
					}), a.datepicker._updateDatepicker(c), i = a.datepicker._checkOffset(c, i, g), c.dpDiv.css({
						position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
						display: "none",
						left: i.left + "px",
						top: i.top + "px"
					}), c.inline || (j = a.datepicker._get(c, "showAnim"), k = a.datepicker._get(c, "duration"), c.dpDiv.css("z-index", d(a(b)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? c.dpDiv.show(j, a.datepicker._get(c, "showOptions"), k) : c.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c))
				}
			},
			_updateDatepicker: function(b) {
				this.maxRows = 4, l = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
				var c, d = this._getNumberOfMonths(b),
					e = d[1],
					f = 17,
					h = b.dpDiv.find("." + this._dayOverClass + " a");
				h.length > 0 && g.apply(h.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", f * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
					c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
				}, 0))
			},
			_shouldFocusInput: function(a) {
				return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
			},
			_checkOffset: function(b, c, d) {
				var e = b.dpDiv.outerWidth(),
					f = b.dpDiv.outerHeight(),
					g = b.input ? b.input.outerWidth() : 0,
					h = b.input ? b.input.outerHeight() : 0,
					i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
					j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
				return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
			},
			_findPos: function(b) {
				for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
				return c = a(b).offset(), [c.left, c.top]
			},
			_hideDatepicker: function(b) {
				var c, d, e, f, g = this._curInst;
				!g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() {
					a.datepicker._tidyDialog(g)
				}, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
					position: "absolute",
					left: "0",
					top: "-100px"
				}), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
			},
			_tidyDialog: function(a) {
				a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
			},
			_checkExternalClick: function(b) {
				if (a.datepicker._curInst) {
					var c = a(b.target),
						d = a.datepicker._getInst(c[0]);
					(c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
				}
			},
			_adjustDate: function(b, c, d) {
				var e = a(b),
					f = this._getInst(e[0]);
				this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
			},
			_gotoToday: function(b) {
				var c, d = a(b),
					e = this._getInst(d[0]);
				this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
			},
			_selectMonthYear: function(b, c, d) {
				var e = a(b),
					f = this._getInst(e[0]);
				f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
			},
			_selectDay: function(b, c, d, e) {
				var f, g = a(b);
				a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
			},
			_clearDate: function(b) {
				var c = a(b);
				this._selectDate(c, "")
			},
			_selectDate: function(b, c) {
				var d, e = a(b),
					f = this._getInst(e[0]);
				c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
			},
			_updateAlternate: function(b) {
				var c, d, e, f = this._get(b, "altField");
				f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
					a(this).val(e)
				}))
			},
			noWeekends: function(a) {
				var b = a.getDay();
				return [b > 0 && 6 > b, ""]
			},
			iso8601Week: function(a) {
				var b, c = new Date(a.getTime());
				return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
			},
			parseDate: function(b, c, d) {
				if (null == b || null == c) throw "Invalid arguments";
				if (c = "object" == typeof c ? "" + c : c + "", "" === c) return null;
				var e, f, g, h, i = 0,
					j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
					k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
					l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
					m = (d ? d.dayNames : null) || this._defaults.dayNames,
					n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
					o = (d ? d.monthNames : null) || this._defaults.monthNames,
					p = -1,
					q = -1,
					r = -1,
					s = -1,
					t = !1,
					u = function(a) {
						var c = b.length > e + 1 && b.charAt(e + 1) === a;
						return c && e++, c
					},
					v = function(a) {
						var b = u(a),
							d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
							e = "y" === a ? d : 1,
							f = RegExp("^\\d{" + e + "," + d + "}"),
							g = c.substring(i).match(f);
						if (!g) throw "Missing number at position " + i;
						return i += g[0].length, parseInt(g[0], 10)
					},
					w = function(b, d, e) {
						var f = -1,
							g = a.map(u(b) ? e : d, function(a, b) {
								return [
									[b, a]
								]
							}).sort(function(a, b) {
								return -(a[1].length - b[1].length)
							});
						if (a.each(g, function(a, b) {
								var d = b[1];
								return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, !1) : void 0
							}), -1 !== f) return f + 1;
						throw "Unknown name at position " + i
					},
					x = function() {
						if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
						i++
					};
				for (e = 0; b.length > e; e++)
					if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
					else switch (b.charAt(e)) {
						case "d":
							r = v("d");
							break;
						case "D":
							w("D", l, m);
							break;
						case "o":
							s = v("o");
							break;
						case "m":
							q = v("m");
							break;
						case "M":
							q = w("M", n, o);
							break;
						case "y":
							p = v("y");
							break;
						case "@":
							h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
							break;
						case "!":
							h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
							break;
						case "'":
							u("'") ? x() : t = !0;
							break;
						default:
							x()
					}
				if (c.length > i && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
				if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k >= p ? 0 : -100)), s > -1)
					for (q = 1, r = s; f = this._getDaysInMonth(p, q - 1), !(f >= r);) q++, r -= f;
				if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
				return h
			},
			ATOM: "yy-mm-dd",
			COOKIE: "D, dd M yy",
			ISO_8601: "yy-mm-dd",
			RFC_822: "D, d M y",
			RFC_850: "DD, dd-M-y",
			RFC_1036: "D, d M y",
			RFC_1123: "D, d M yy",
			RFC_2822: "D, d M yy",
			RSS: "D, d M y",
			TICKS: "!",
			TIMESTAMP: "@",
			W3C: "yy-mm-dd",
			_ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
			formatDate: function(a, b, c) {
				if (!b) return "";
				var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
					f = (c ? c.dayNames : null) || this._defaults.dayNames,
					g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
					h = (c ? c.monthNames : null) || this._defaults.monthNames,
					i = function(b) {
						var c = a.length > d + 1 && a.charAt(d + 1) === b;
						return c && d++, c
					},
					j = function(a, b, c) {
						var d = "" + b;
						if (i(a))
							for (; c > d.length;) d = "0" + d;
						return d
					},
					k = function(a, b, c, d) {
						return i(a) ? d[b] : c[b]
					},
					l = "",
					m = !1;
				if (b)
					for (d = 0; a.length > d; d++)
						if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
						else switch (a.charAt(d)) {
							case "d":
								l += j("d", b.getDate(), 2);
								break;
							case "D":
								l += k("D", b.getDay(), e, f);
								break;
							case "o":
								l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
								break;
							case "m":
								l += j("m", b.getMonth() + 1, 2);
								break;
							case "M":
								l += k("M", b.getMonth(), g, h);
								break;
							case "y":
								l += i("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
								break;
							case "@":
								l += b.getTime();
								break;
							case "!":
								l += 1e4 * b.getTime() + this._ticksTo1970;
								break;
							case "'":
								i("'") ? l += "'" : m = !0;
								break;
							default:
								l += a.charAt(d)
						}
				return l
			},
			_possibleChars: function(a) {
				var b, c = "",
					d = !1,
					e = function(c) {
						var d = a.length > b + 1 && a.charAt(b + 1) === c;
						return d && b++, d
					};
				for (b = 0; a.length > b; b++)
					if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
					else switch (a.charAt(b)) {
						case "d":
						case "m":
						case "y":
						case "@":
							c += "0123456789";
							break;
						case "D":
						case "M":
							return null;
						case "'":
							e("'") ? c += "'" : d = !0;
							break;
						default:
							c += a.charAt(b)
					}
				return c
			},
			_get: function(a, b) {
				return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
			},
			_setDateFromField: function(a, b) {
				if (a.input.val() !== a.lastVal) {
					var c = this._get(a, "dateFormat"),
						d = a.lastVal = a.input ? a.input.val() : null,
						e = this._getDefaultDate(a),
						f = e,
						g = this._getFormatConfig(a);
					try {
						f = this.parseDate(c, d, g) || e
					} catch (h) {
						d = b ? "" : d
					}
					a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
				}
			},
			_getDefaultDate: function(a) {
				return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
			},
			_determineDate: function(b, c, d) {
				var e = function(a) {
						var b = new Date;
						return b.setDate(b.getDate() + a), b
					},
					f = function(c) {
						try {
							return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
						} catch (d) {}
						for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
							switch (j[2] || "d") {
								case "d":
								case "D":
									h += parseInt(j[1], 10);
									break;
								case "w":
								case "W":
									h += 7 * parseInt(j[1], 10);
									break;
								case "m":
								case "M":
									g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
									break;
								case "y":
								case "Y":
									f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
							}
							j = i.exec(c)
						}
						return new Date(f, g, h)
					},
					g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
				return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
			},
			_daylightSavingAdjust: function(a) {
				return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
			},
			_setDate: function(a, b, c) {
				var d = !b,
					e = a.selectedMonth,
					f = a.selectedYear,
					g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
				a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
			},
			_getDate: function(a) {
				var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
				return b
			},
			_attachHandlers: function(b) {
				var c = this._get(b, "stepMonths"),
					d = "#" + b.id.replace(/\\\\/g, "\\");
				b.dpDiv.find("[data-handler]").map(function() {
					var b = {
						prev: function() {
							a.datepicker._adjustDate(d, -c, "M")
						},
						next: function() {
							a.datepicker._adjustDate(d, +c, "M")
						},
						hide: function() {
							a.datepicker._hideDatepicker()
						},
						today: function() {
							a.datepicker._gotoToday(d)
						},
						selectDay: function() {
							return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
						},
						selectMonth: function() {
							return a.datepicker._selectMonthYear(d, this, "M"), !1
						},
						selectYear: function() {
							return a.datepicker._selectMonthYear(d, this, "Y"), !1
						}
					};
					a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
				})
			},
			_generateHTML: function(a) {
				var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
					P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
					Q = this._get(a, "isRTL"),
					R = this._get(a, "showButtonPanel"),
					S = this._get(a, "hideIfNoPrevNext"),
					T = this._get(a, "navigationAsDateFormat"),
					U = this._getNumberOfMonths(a),
					V = this._get(a, "showCurrentAtPos"),
					W = this._get(a, "stepMonths"),
					X = 1 !== U[0] || 1 !== U[1],
					Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
					Z = this._getMinMaxDate(a, "min"),
					$ = this._getMinMaxDate(a, "max"),
					_ = a.drawMonth - V,
					aa = a.drawYear;
				if (0 > _ && (_ += 12, aa--), $)
					for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, 0 > _ && (_ = 11, aa--);
				for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
					for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
						if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
							if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
								case 0:
									B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
									break;
								case U[1] - 1:
									B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
									break;
								default:
									B += " ui-datepicker-group-middle", A = ""
							}
							B += "'>"
						}
						for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
						for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
							for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
							B += K + "</tr>"
						}
						_++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
					}
					u += x
				}
				return u += j, a._keyEvent = !1, u
			},
			_generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
				var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
					r = this._get(a, "changeYear"),
					s = this._get(a, "showMonthAfterYear"),
					t = "<div class='ui-datepicker-title'>",
					u = "";
				if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
				else {
					for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
					u += "</select>"
				}
				if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
					if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
					else {
						for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
								var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
								return isNaN(b) ? m : b
							}, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
						a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
					} return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
			},
			_adjustInstDate: function(a, b, c) {
				var d = a.drawYear + ("Y" === c ? b : 0),
					e = a.drawMonth + ("M" === c ? b : 0),
					f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
					g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
				a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
			},
			_restrictMinMax: function(a, b) {
				var c = this._getMinMaxDate(a, "min"),
					d = this._getMinMaxDate(a, "max"),
					e = c && c > b ? c : b;
				return d && e > d ? d : e
			},
			_notifyChange: function(a) {
				var b = this._get(a, "onChangeMonthYear");
				b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
			},
			_getNumberOfMonths: function(a) {
				var b = this._get(a, "numberOfMonths");
				return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
			},
			_getMinMaxDate: function(a, b) {
				return this._determineDate(a, this._get(a, b + "Date"), null)
			},
			_getDaysInMonth: function(a, b) {
				return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
			},
			_getFirstDayOfMonth: function(a, b) {
				return new Date(a, b, 1).getDay()
			},
			_canAdjustMonth: function(a, b, c, d) {
				var e = this._getNumberOfMonths(a),
					f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
				return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
			},
			_isInRange: function(a, b) {
				var c, d, e = this._getMinMaxDate(a, "min"),
					f = this._getMinMaxDate(a, "max"),
					g = null,
					h = null,
					i = this._get(a, "yearRange");
				return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear())
			},
			_getFormatConfig: function(a) {
				var b = this._get(a, "shortYearCutoff");
				return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
					shortYearCutoff: b,
					dayNamesShort: this._get(a, "dayNamesShort"),
					dayNames: this._get(a, "dayNames"),
					monthNamesShort: this._get(a, "monthNamesShort"),
					monthNames: this._get(a, "monthNames")
				}
			},
			_formatDate: function(a, b, c, d) {
				b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
				var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
				return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
			}
		}), a.fn.datepicker = function(b) {
			if (!this.length) return this;
			a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
			var c = Array.prototype.slice.call(arguments, 1);
			return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
				"string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
			}) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
		}, a.datepicker = new e, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.11.4", a.datepicker, a.widget("ui.menu", {
			version: "1.11.4",
			defaultElement: "<ul>",
			delay: 300,
			options: {
				icons: {
					submenu: "ui-icon-carat-1-e"
				},
				items: "> *",
				menus: "ul",
				position: {
					my: "left-1 top",
					at: "right top"
				},
				role: "menu",
				blur: null,
				focus: null,
				select: null
			},
			_create: function() {
				this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
					role: this.options.role,
					tabIndex: 0
				}), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
					"mousedown .ui-menu-item": function(a) {
						a.preventDefault()
					},
					"click .ui-menu-item": function(b) {
						var c = a(b.target);
						!this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
					},
					"mouseenter .ui-menu-item": function(b) {
						if (!this.previousFilter) {
							var c = a(b.currentTarget);
							c.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
						}
					},
					mouseleave: "collapseAll",
					"mouseleave .ui-menu": "collapseAll",
					focus: function(a, b) {
						var c = this.active || this.element.find(this.options.items).eq(0);
						b || this.focus(a, c)
					},
					blur: function(b) {
						this._delay(function() {
							a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
						})
					},
					keydown: "_keydown"
				}), this.refresh(), this._on(this.document, {
					click: function(a) {
						this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
					}
				})
			},
			_destroy: function() {
				this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
					var b = a(this);
					b.data("ui-menu-submenu-carat") && b.remove()
				}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
			},
			_keydown: function(b) {
				var c, d, e, f, g = !0;
				switch (b.keyCode) {
					case a.ui.keyCode.PAGE_UP:
						this.previousPage(b);
						break;
					case a.ui.keyCode.PAGE_DOWN:
						this.nextPage(b);
						break;
					case a.ui.keyCode.HOME:
						this._move("first", "first", b);
						break;
					case a.ui.keyCode.END:
						this._move("last", "last", b);
						break;
					case a.ui.keyCode.UP:
						this.previous(b);
						break;
					case a.ui.keyCode.DOWN:
						this.next(b);
						break;
					case a.ui.keyCode.LEFT:
						this.collapse(b);
						break;
					case a.ui.keyCode.RIGHT:
						this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
						break;
					case a.ui.keyCode.ENTER:
					case a.ui.keyCode.SPACE:
						this._activate(b);
						break;
					case a.ui.keyCode.ESCAPE:
						this.collapse(b);
						break;
					default:
						g = !1, d = this.previousFilter || "", e = String.fromCharCode(b.keyCode), f = !1, clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
							delete this.previousFilter
						}, 1e3)) : delete this.previousFilter
				}
				g && b.preventDefault()
			},
			_activate: function(a) {
				this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
			},
			refresh: function() {
				var b, c, d = this,
					e = this.options.icons.submenu,
					f = this.element.find(this.options.menus);
				this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
					role: this.options.role,
					"aria-hidden": "true",
					"aria-expanded": "false"
				}).each(function() {
					var b = a(this),
						c = b.parent(),
						d = a("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", !0);
					c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
				}), b = f.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
					var b = a(this);
					d._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider")
				}), c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
					tabIndex: -1,
					role: this._itemRole()
				}), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
			},
			_itemRole: function() {
				return {
					menu: "menuitem",
					listbox: "option"
				} [this.options.role]
			},
			_setOption: function(a, b) {
				"icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this._super(a, b)
			},
			focus: function(a, b) {
				var c, d;
				this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
					this._close()
				}, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
					item: b
				})
			},
			_scrollIntoView: function(b) {
				var c, d, e, f, g, h;
				this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
			},
			blur: function(a, b) {
				b || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
					item: this.active
				}))
			},
			_startOpening: function(a) {
				clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
					this._close(), this._open(a)
				}, this.delay))
			},
			_open: function(b) {
				var c = a.extend({
					of: this.active
				}, this.options.position);
				clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
			},
			collapseAll: function(b, c) {
				clearTimeout(this.timer), this.timer = this._delay(function() {
					var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
					d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
				}, this.delay)
			},
			_close: function(a) {
				a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
			},
			_closeOnDocumentClick: function(b) {
				return !a(b.target).closest(".ui-menu").length
			},
			_isDivider: function(a) {
				return !/[^\-\u2014\u2013\s]/.test(a.text())
			},
			collapse: function(a) {
				var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
				b && b.length && (this._close(), this.focus(a, b))
			},
			expand: function(a) {
				var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
				b && b.length && (this._open(b.parent()), this._delay(function() {
					this.focus(a, b)
				}))
			},
			next: function(a) {
				this._move("next", "first", a)
			},
			previous: function(a) {
				this._move("prev", "last", a)
			},
			isFirstItem: function() {
				return this.active && !this.active.prevAll(".ui-menu-item").length
			},
			isLastItem: function() {
				return this.active && !this.active.nextAll(".ui-menu-item").length
			},
			_move: function(a, b, c) {
				var d;
				this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
			},
			nextPage: function(b) {
				var c, d, e;
				return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top,
					e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
						return c = a(this), 0 > c.offset().top - d - e
					}), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b)
			},
			previousPage: function(b) {
				var c, d, e;
				return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
					return c = a(this), c.offset().top - d + e > 0
				}), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
			},
			_hasScroll: function() {
				return this.element.outerHeight() < this.element.prop("scrollHeight")
			},
			select: function(b) {
				this.active = this.active || a(b.target).closest(".ui-menu-item");
				var c = {
					item: this.active
				};
				this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
			},
			_filterMenuItems: function(b) {
				var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
					d = RegExp("^" + c, "i");
				return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
					return d.test(a.trim(a(this).text()))
				})
			}
		}), a.widget("ui.selectmenu", {
			version: "1.11.4",
			defaultElement: "<select>",
			options: {
				appendTo: null,
				disabled: null,
				icons: {
					button: "ui-icon-triangle-1-s"
				},
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				width: null,
				change: null,
				close: null,
				focus: null,
				open: null,
				select: null
			},
			_create: function() {
				var a = this.element.uniqueId().attr("id");
				this.ids = {
					element: a,
					button: a + "-button",
					menu: a + "-menu"
				}, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
			},
			_drawButton: function() {
				var b = this;
				this.label = a("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
					click: function(a) {
						this.button.focus(), a.preventDefault()
					}
				}), this.element.hide(), this.button = a("<span>", {
					"class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
					tabindex: this.options.disabled ? -1 : 0,
					id: this.ids.button,
					role: "combobox",
					"aria-expanded": "false",
					"aria-autocomplete": "list",
					"aria-owns": this.ids.menu,
					"aria-haspopup": "true"
				}).insertAfter(this.element), a("<span>", {
					"class": "ui-icon " + this.options.icons.button
				}).prependTo(this.button), this.buttonText = a("<span>", {
					"class": "ui-selectmenu-text"
				}).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
					b.menuItems || b._refreshMenu()
				}), this._hoverable(this.button), this._focusable(this.button)
			},
			_drawMenu: function() {
				var b = this;
				this.menu = a("<ul>", {
					"aria-hidden": "true",
					"aria-labelledby": this.ids.button,
					id: this.ids.menu
				}), this.menuWrap = a("<div>", {
					"class": "ui-selectmenu-menu ui-front"
				}).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
					role: "listbox",
					select: function(a, c) {
						a.preventDefault(), b._setSelection(), b._select(c.item.data("ui-selectmenu-item"), a)
					},
					focus: function(a, c) {
						var d = c.item.data("ui-selectmenu-item");
						null != b.focusIndex && d.index !== b.focusIndex && (b._trigger("focus", a, {
							item: d
						}), b.isOpen || b._select(d, a)), b.focusIndex = d.index, b.button.attr("aria-activedescendant", b.menuItems.eq(d.index).attr("id"))
					}
				}).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
					return !1
				}, this.menuInstance._isDivider = function() {
					return !1
				}
			},
			refresh: function() {
				this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
			},
			_refreshMenu: function() {
				this.menu.empty();
				var a, b = this.element.find("option");
				b.length && (this._parseOptions(b), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
			},
			open: function(a) {
				this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", a))
			},
			_position: function() {
				this.menuWrap.position(a.extend({
					of: this.button
				}, this.options.position))
			},
			close: function(a) {
				this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", a))
			},
			widget: function() {
				return this.button
			},
			menuWidget: function() {
				return this.menu
			},
			_renderMenu: function(b, c) {
				var d = this,
					e = "";
				a.each(c, function(c, f) {
					f.optgroup !== e && (a("<li>", {
						"class": "ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
						text: f.optgroup
					}).appendTo(b), e = f.optgroup), d._renderItemData(b, f)
				})
			},
			_renderItemData: function(a, b) {
				return this._renderItem(a, b).data("ui-selectmenu-item", b)
			},
			_renderItem: function(b, c) {
				var d = a("<li>");
				return c.disabled && d.addClass("ui-state-disabled"), this._setText(d, c.label), d.appendTo(b)
			},
			_setText: function(a, b) {
				b ? a.text(b) : a.html("&#160;")
			},
			_move: function(a, b) {
				var c, d, e = ".ui-menu-item";
				this.isOpen ? c = this.menuItems.eq(this.focusIndex) : (c = this.menuItems.eq(this.element[0].selectedIndex), e += ":not(.ui-state-disabled)"), d = "first" === a || "last" === a ? c["first" === a ? "prevAll" : "nextAll"](e).eq(-1) : c[a + "All"](e).eq(0), d.length && this.menuInstance.focus(b, d)
			},
			_getSelectedItem: function() {
				return this.menuItems.eq(this.element[0].selectedIndex)
			},
			_toggle: function(a) {
				this[this.isOpen ? "close" : "open"](a)
			},
			_setSelection: function() {
				var a;
				this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), a.addRange(this.range)) : this.range.select(), this.button.focus())
			},
			_documentClick: {
				mousedown: function(b) {
					this.isOpen && (a(b.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(b))
				}
			},
			_buttonEvents: {
				mousedown: function() {
					var a;
					window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range = a.getRangeAt(0))) : this.range = document.selection.createRange()
				},
				click: function(a) {
					this._setSelection(), this._toggle(a)
				},
				keydown: function(b) {
					var c = !0;
					switch (b.keyCode) {
						case a.ui.keyCode.TAB:
						case a.ui.keyCode.ESCAPE:
							this.close(b), c = !1;
							break;
						case a.ui.keyCode.ENTER:
							this.isOpen && this._selectFocusedItem(b);
							break;
						case a.ui.keyCode.UP:
							b.altKey ? this._toggle(b) : this._move("prev", b);
							break;
						case a.ui.keyCode.DOWN:
							b.altKey ? this._toggle(b) : this._move("next", b);
							break;
						case a.ui.keyCode.SPACE:
							this.isOpen ? this._selectFocusedItem(b) : this._toggle(b);
							break;
						case a.ui.keyCode.LEFT:
							this._move("prev", b);
							break;
						case a.ui.keyCode.RIGHT:
							this._move("next", b);
							break;
						case a.ui.keyCode.HOME:
						case a.ui.keyCode.PAGE_UP:
							this._move("first", b);
							break;
						case a.ui.keyCode.END:
						case a.ui.keyCode.PAGE_DOWN:
							this._move("last", b);
							break;
						default:
							this.menu.trigger(b), c = !1
					}
					c && b.preventDefault()
				}
			},
			_selectFocusedItem: function(a) {
				var b = this.menuItems.eq(this.focusIndex);
				b.hasClass("ui-state-disabled") || this._select(b.data("ui-selectmenu-item"), a)
			},
			_select: function(a, b) {
				var c = this.element[0].selectedIndex;
				this.element[0].selectedIndex = a.index, this._setText(this.buttonText, a.label), this._setAria(a), this._trigger("select", b, {
					item: a
				}), a.index !== c && this._trigger("change", b, {
					item: a
				}), this.close(b)
			},
			_setAria: function(a) {
				var b = this.menuItems.eq(a.index).attr("id");
				this.button.attr({
					"aria-labelledby": b,
					"aria-activedescendant": b
				}), this.menu.attr("aria-activedescendant", b)
			},
			_setOption: function(a, b) {
				"icons" === a && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(b.button), this._super(a, b), "appendTo" === a && this.menuWrap.appendTo(this._appendTo()), "disabled" === a && (this.menuInstance.option("disabled", b), this.button.toggleClass("ui-state-disabled", b).attr("aria-disabled", b), this.element.prop("disabled", b), b ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === a && this._resizeButton()
			},
			_appendTo: function() {
				var b = this.options.appendTo;
				return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
			},
			_toggleAttr: function() {
				this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
			},
			_resizeButton: function() {
				var a = this.options.width;
				a || (a = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(a)
			},
			_resizeMenu: function() {
				this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
			},
			_getCreateOptions: function() {
				return {
					disabled: this.element.prop("disabled")
				}
			},
			_parseOptions: function(b) {
				var c = [];
				b.each(function(b, d) {
					var e = a(d),
						f = e.parent("optgroup");
					c.push({
						element: e,
						index: b,
						value: e.val(),
						label: e.text(),
						optgroup: f.attr("label") || "",
						disabled: f.prop("disabled") || e.prop("disabled")
					})
				}), this.items = c
			},
			_destroy: function() {
				this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
			}
		});
		var m = "ui-effects-",
			n = a;
		a.effects = {
				effect: {}
			},
			function(a, b) {
				function c(a, b, c) {
					var d = l[b.type] || {};
					return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
				}

				function d(c) {
					var d = j(),
						e = d._rgba = [];
					return c = c.toLowerCase(), o(i, function(a, f) {
						var g, h = f.re.exec(c),
							i = h && f.parse(h),
							j = f.space || "rgba";
						return i ? (g = d[j](i), d[k[j].cache] = g[k[j].cache], e = d._rgba = g._rgba, !1) : b
					}), e.length ? ("0,0,0,0" === e.join() && a.extend(e, f.transparent), d) : f[c]
				}

				function e(a, b, c) {
					return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
				}
				var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
					h = /^([\-+])=\s*(\d+\.?\d*)/,
					i = [{
						re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						parse: function(a) {
							return [a[1], a[2], a[3], a[4]]
						}
					}, {
						re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						parse: function(a) {
							return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
						}
					}, {
						re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
						parse: function(a) {
							return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
						}
					}, {
						re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
						parse: function(a) {
							return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
						}
					}, {
						re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						space: "hsla",
						parse: function(a) {
							return [a[1], a[2] / 100, a[3] / 100, a[4]]
						}
					}],
					j = a.Color = function(b, c, d, e) {
						return new a.Color.fn.parse(b, c, d, e)
					},
					k = {
						rgba: {
							props: {
								red: {
									idx: 0,
									type: "byte"
								},
								green: {
									idx: 1,
									type: "byte"
								},
								blue: {
									idx: 2,
									type: "byte"
								}
							}
						},
						hsla: {
							props: {
								hue: {
									idx: 0,
									type: "degrees"
								},
								saturation: {
									idx: 1,
									type: "percent"
								},
								lightness: {
									idx: 2,
									type: "percent"
								}
							}
						}
					},
					l = {
						"byte": {
							floor: !0,
							max: 255
						},
						percent: {
							max: 1
						},
						degrees: {
							mod: 360,
							floor: !0
						}
					},
					m = j.support = {},
					n = a("<p>")[0],
					o = a.each;
				n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
					b.cache = "_" + a, b.props.alpha = {
						idx: 3,
						type: "percent",
						def: 1
					}
				}), j.fn = a.extend(j.prototype, {
					parse: function(e, g, h, i) {
						if (e === b) return this._rgba = [null, null, null, null], this;
						(e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
						var l = this,
							m = a.type(e),
							n = this._rgba = [];
						return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
							n[b.idx] = c(e[b.idx], b)
						}), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
							e[b.cache] && (l[b.cache] = e[b.cache].slice())
						}) : o(k, function(b, d) {
							var f = d.cache;
							o(d.props, function(a, b) {
								if (!l[f] && d.to) {
									if ("alpha" === a || null == e[a]) return;
									l[f] = d.to(l._rgba)
								}
								l[f][b.idx] = c(e[a], b, !0)
							}), l[f] && 0 > a.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
						}), this) : b
					},
					is: function(a) {
						var c = j(a),
							d = !0,
							e = this;
						return o(k, function(a, f) {
							var g, h = c[f.cache];
							return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], o(f.props, function(a, c) {
								return null != h[c.idx] ? d = h[c.idx] === g[c.idx] : b
							})), d
						}), d
					},
					_space: function() {
						var a = [],
							b = this;
						return o(k, function(c, d) {
							b[d.cache] && a.push(c)
						}), a.pop()
					},
					transition: function(a, b) {
						var d = j(a),
							e = d._space(),
							f = k[e],
							g = 0 === this.alpha() ? j("transparent") : this,
							h = g[f.cache] || f.to(g._rgba),
							i = h.slice();
						return d = d[f.cache], o(f.props, function(a, e) {
							var f = e.idx,
								g = h[f],
								j = d[f],
								k = l[e.type] || {};
							null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
						}), this[e](i)
					},
					blend: function(b) {
						if (1 === this._rgba[3]) return this;
						var c = this._rgba.slice(),
							d = c.pop(),
							e = j(b)._rgba;
						return j(a.map(c, function(a, b) {
							return (1 - d) * e[b] + d * a
						}))
					},
					toRgbaString: function() {
						var b = "rgba(",
							c = a.map(this._rgba, function(a, b) {
								return null == a ? b > 2 ? 1 : 0 : a
							});
						return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
					},
					toHslaString: function() {
						var b = "hsla(",
							c = a.map(this.hsla(), function(a, b) {
								return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
							});
						return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
					},
					toHexString: function(b) {
						var c = this._rgba.slice(),
							d = c.pop();
						return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
							return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
						}).join("")
					},
					toString: function() {
						return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
					}
				}), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
					if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
					var b, c, d = a[0] / 255,
						e = a[1] / 255,
						f = a[2] / 255,
						g = a[3],
						h = Math.max(d, e, f),
						i = Math.min(d, e, f),
						j = h - i,
						k = h + i,
						l = .5 * k;
					return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
				}, k.hsla.from = function(a) {
					if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
					var b = a[0] / 360,
						c = a[1],
						d = a[2],
						f = a[3],
						g = .5 >= d ? d * (1 + c) : d + c - d * c,
						h = 2 * d - g;
					return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
				}, o(k, function(d, e) {
					var f = e.props,
						g = e.cache,
						i = e.to,
						k = e.from;
					j.fn[d] = function(d) {
						if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
						var e, h = a.type(d),
							l = "array" === h || "object" === h ? d : arguments,
							m = this[g].slice();
						return o(f, function(a, b) {
							var d = l["object" === h ? a : b.idx];
							null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
						}), k ? (e = j(k(m)), e[g] = m, e) : j(m)
					}, o(f, function(b, c) {
						j.fn[b] || (j.fn[b] = function(e) {
							var f, g = a.type(e),
								i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
								j = this[i](),
								k = j[c.idx];
							return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
						})
					})
				}), j.hook = function(b) {
					var c = b.split(" ");
					o(c, function(b, c) {
						a.cssHooks[c] = {
							set: function(b, e) {
								var f, g, h = "";
								if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
									if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
										for (g = "backgroundColor" === c ? b.parentNode : b;
											("" === h || "transparent" === h) && g && g.style;) try {
											h = a.css(g, "backgroundColor"), g = g.parentNode
										} catch (i) {}
										e = e.blend(h && "transparent" !== h ? h : "_default")
									}
									e = e.toRgbaString()
								}
								try {
									b.style[c] = e
								} catch (i) {}
							}
						}, a.fx.step[c] = function(b) {
							b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
						}
					})
				}, j.hook(g), a.cssHooks.borderColor = {
					expand: function(a) {
						var b = {};
						return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
							b["border" + d + "Color"] = a
						}), b
					}
				}, f = a.Color.names = {
					aqua: "#00ffff",
					black: "#000000",
					blue: "#0000ff",
					fuchsia: "#ff00ff",
					gray: "#808080",
					green: "#008000",
					lime: "#00ff00",
					maroon: "#800000",
					navy: "#000080",
					olive: "#808000",
					purple: "#800080",
					red: "#ff0000",
					silver: "#c0c0c0",
					teal: "#008080",
					white: "#ffffff",
					yellow: "#ffff00",
					transparent: [null, null, null, 0],
					_default: "#ffffff"
				}
			}(n),
			function() {
				function b(b) {
					var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
						f = {};
					if (e && e.length && e[0] && e[e[0]])
						for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
					else
						for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
					return f
				}

				function c(b, c) {
					var d, f, g = {};
					for (d in c) f = c[d], b[d] !== f && (e[d] || (a.fx.step[d] || !isNaN(parseFloat(f))) && (g[d] = f));
					return g
				}
				var d = ["add", "remove", "toggle"],
					e = {
						border: 1,
						borderBottom: 1,
						borderColor: 1,
						borderLeft: 1,
						borderRight: 1,
						borderTop: 1,
						borderWidth: 1,
						margin: 1,
						padding: 1
					};
				a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
					a.fx.step[c] = function(a) {
						("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (n.style(a.elem, c, a.end), a.setAttr = !0)
					}
				}), a.fn.addBack || (a.fn.addBack = function(a) {
					return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
				}), a.effects.animateClass = function(e, f, g, h) {
					var i = a.speed(f, g, h);
					return this.queue(function() {
						var f, g = a(this),
							h = g.attr("class") || "",
							j = i.children ? g.find("*").addBack() : g;
						j = j.map(function() {
							var c = a(this);
							return {
								el: c,
								start: b(this)
							}
						}), f = function() {
							a.each(d, function(a, b) {
								e[b] && g[b + "Class"](e[b])
							})
						}, f(), j = j.map(function() {
							return this.end = b(this.el[0]), this.diff = c(this.start, this.end), this
						}), g.attr("class", h), j = j.map(function() {
							var b = this,
								c = a.Deferred(),
								d = a.extend({}, i, {
									queue: !1,
									complete: function() {
										c.resolve(b)
									}
								});
							return this.el.animate(this.diff, d), c.promise()
						}), a.when.apply(a, j.get()).done(function() {
							f(), a.each(arguments, function() {
								var b = this.el;
								a.each(this.diff, function(a) {
									b.css(a, "")
								})
							}), i.complete.call(g[0])
						})
					})
				}, a.fn.extend({
					addClass: function(b) {
						return function(c, d, e, f) {
							return d ? a.effects.animateClass.call(this, {
								add: c
							}, d, e, f) : b.apply(this, arguments)
						}
					}(a.fn.addClass),
					removeClass: function(b) {
						return function(c, d, e, f) {
							return arguments.length > 1 ? a.effects.animateClass.call(this, {
								remove: c
							}, d, e, f) : b.apply(this, arguments)
						}
					}(a.fn.removeClass),
					toggleClass: function(b) {
						return function(c, d, e, f, g) {
							return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
								add: c
							} : {
								remove: c
							}, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
								toggle: c
							}, d, e, f)
						}
					}(a.fn.toggleClass),
					switchClass: function(b, c, d, e, f) {
						return a.effects.animateClass.call(this, {
							add: c,
							remove: b
						}, d, e, f)
					}
				})
			}(),
			function() {
				function b(b, c, d, e) {
					return a.isPlainObject(b) && (c = b, b = b.effect), b = {
						effect: b
					}, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
				}

				function c(b) {
					return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? a.isFunction(b) ? !0 : "object" != typeof b || b.effect ? !1 : !0 : !0
				}
				a.extend(a.effects, {
					version: "1.11.4",
					save: function(a, b) {
						for (var c = 0; b.length > c; c++) null !== b[c] && a.data(m + b[c], a[0].style[b[c]])
					},
					restore: function(a, b) {
						var c, d;
						for (d = 0; b.length > d; d++) null !== b[d] && (c = a.data(m + b[d]), void 0 === c && (c = ""), a.css(b[d], c))
					},
					setMode: function(a, b) {
						return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
					},
					getBaseline: function(a, b) {
						var c, d;
						switch (a[0]) {
							case "top":
								c = 0;
								break;
							case "middle":
								c = .5;
								break;
							case "bottom":
								c = 1;
								break;
							default:
								c = a[0] / b.height
						}
						switch (a[1]) {
							case "left":
								d = 0;
								break;
							case "center":
								d = .5;
								break;
							case "right":
								d = 1;
								break;
							default:
								d = a[1] / b.width
						}
						return {
							x: d,
							y: c
						}
					},
					createWrapper: function(b) {
						if (b.parent().is(".ui-effects-wrapper")) return b.parent();
						var c = {
								width: b.outerWidth(!0),
								height: b.outerHeight(!0),
								"float": b.css("float")
							},
							d = a("<div></div>").addClass("ui-effects-wrapper").css({
								fontSize: "100%",
								background: "transparent",
								border: "none",
								margin: 0,
								padding: 0
							}),
							e = {
								width: b.width(),
								height: b.height()
							},
							f = document.activeElement;
						try {
							f.id
						} catch (g) {
							f = document.body
						}
						return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
							position: "relative"
						}), b.css({
							position: "relative"
						})) : (a.extend(c, {
							position: b.css("position"),
							zIndex: b.css("z-index")
						}), a.each(["top", "left", "bottom", "right"], function(a, d) {
							c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
						}), b.css({
							position: "relative",
							top: 0,
							left: 0,
							right: "auto",
							bottom: "auto"
						})), b.css(e), d.css(c).show()
					},
					removeWrapper: function(b) {
						var c = document.activeElement;
						return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
					},
					setTransition: function(b, c, d, e) {
						return e = e || {}, a.each(c, function(a, c) {
							var f = b.cssUnit(c);
							f[0] > 0 && (e[c] = f[0] * d + f[1])
						}), e
					}
				}), a.fn.extend({
					effect: function() {
						function c(b) {
							function c() {
								a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
							}
							var e = a(this),
								f = d.complete,
								h = d.mode;
							(e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), c()) : g.call(e[0], d, c)
						}
						var d = b.apply(this, arguments),
							e = d.mode,
							f = d.queue,
							g = a.effects.effect[d.effect];
						return a.fx.off || !g ? e ? this[e](d.duration, d.complete) : this.each(function() {
							d.complete && d.complete.call(this)
						}) : f === !1 ? this.each(c) : this.queue(f || "fx", c)
					},
					show: function(a) {
						return function(d) {
							if (c(d)) return a.apply(this, arguments);
							var e = b.apply(this, arguments);
							return e.mode = "show", this.effect.call(this, e)
						}
					}(a.fn.show),
					hide: function(a) {
						return function(d) {
							if (c(d)) return a.apply(this, arguments);
							var e = b.apply(this, arguments);
							return e.mode = "hide", this.effect.call(this, e)
						}
					}(a.fn.hide),
					toggle: function(a) {
						return function(d) {
							if (c(d) || "boolean" == typeof d) return a.apply(this, arguments);
							var e = b.apply(this, arguments);
							return e.mode = "toggle", this.effect.call(this, e)
						}
					}(a.fn.toggle),
					cssUnit: function(b) {
						var c = this.css(b),
							d = [];
						return a.each(["em", "px", "%", "pt"], function(a, b) {
							c.indexOf(b) > 0 && (d = [parseFloat(c), b])
						}), d
					}
				})
			}(),
			function() {
				var b = {};
				a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
					b[c] = function(b) {
						return Math.pow(b, a + 2)
					}
				}), a.extend(b, {
					Sine: function(a) {
						return 1 - Math.cos(a * Math.PI / 2)
					},
					Circ: function(a) {
						return 1 - Math.sqrt(1 - a * a)
					},
					Elastic: function(a) {
						return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
					},
					Back: function(a) {
						return a * a * (3 * a - 2)
					},
					Bounce: function(a) {
						for (var b, c = 4;
							((b = Math.pow(2, --c)) - 1) / 11 > a;);
						return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
					}
				}), a.each(b, function(b, c) {
					a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
						return 1 - c(1 - a)
					}, a.easing["easeInOut" + b] = function(a) {
						return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
					}
				})
			}(), a.effects, a.effects.effect.blind = function(b, c) {
				var d, e, f, g = a(this),
					h = /up|down|vertical/,
					i = /up|left|vertical|horizontal/,
					j = ["position", "top", "bottom", "left", "right", "height", "width"],
					k = a.effects.setMode(g, b.mode || "hide"),
					l = b.direction || "up",
					m = h.test(l),
					n = m ? "height" : "width",
					o = m ? "top" : "left",
					p = i.test(l),
					q = {},
					r = "show" === k;
				g.parent().is(".ui-effects-wrapper") ? a.effects.save(g.parent(), j) : a.effects.save(g, j), g.show(), d = a.effects.createWrapper(g).css({
					overflow: "hidden"
				}), e = d[n](), f = parseFloat(d.css(o)) || 0, q[n] = r ? e : 0, p || (g.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({
					position: "absolute"
				}), q[o] = r ? f : e + f), r && (d.css(n, 0), p || d.css(o, f + e)), d.animate(q, {
					duration: b.duration,
					easing: b.easing,
					queue: !1,
					complete: function() {
						"hide" === k && g.hide(), a.effects.restore(g, j), a.effects.removeWrapper(g), c()
					}
				})
			}, a.effects.effect.bounce = function(b, c) {
				var d, e, f, g = a(this),
					h = ["position", "top", "bottom", "left", "right", "height", "width"],
					i = a.effects.setMode(g, b.mode || "effect"),
					j = "hide" === i,
					k = "show" === i,
					l = b.direction || "up",
					m = b.distance,
					n = b.times || 5,
					o = 2 * n + (k || j ? 1 : 0),
					p = b.duration / o,
					q = b.easing,
					r = "up" === l || "down" === l ? "top" : "left",
					s = "up" === l || "left" === l,
					t = g.queue(),
					u = t.length;
				for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {
						opacity: 1
					}, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), f = {}, f[r] = 0, d = 0; n > d; d++) e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), m = j ? 2 * m : m / 2;
				j && (e = {
					opacity: 0
				}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function() {
					j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
				}), u > 1 && t.splice.apply(t, [1, 0].concat(t.splice(u, o + 1))), g.dequeue()
			}, a.effects.effect.clip = function(b, c) {
				var d, e, f, g = a(this),
					h = ["position", "top", "bottom", "left", "right", "height", "width"],
					i = a.effects.setMode(g, b.mode || "hide"),
					j = "show" === i,
					k = b.direction || "vertical",
					l = "vertical" === k,
					m = l ? "height" : "width",
					n = l ? "top" : "left",
					o = {};
				a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({
					overflow: "hidden"
				}), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
					queue: !1,
					duration: b.duration,
					easing: b.easing,
					complete: function() {
						j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c()
					}
				})
			}, a.effects.effect.drop = function(b, c) {
				var d, e = a(this),
					f = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
					g = a.effects.setMode(e, b.mode || "hide"),
					h = "show" === g,
					i = b.direction || "left",
					j = "up" === i || "down" === i ? "top" : "left",
					k = "up" === i || "left" === i ? "pos" : "neg",
					l = {
						opacity: h ? 1 : 0
					};
				a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, e.animate(l, {
					queue: !1,
					duration: b.duration,
					easing: b.easing,
					complete: function() {
						"hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
					}
				})
			}, a.effects.effect.explode = function(b, c) {
				function d() {
					t.push(this), t.length === l * m && e()
				}

				function e() {
					n.css({
						visibility: "visible"
					}), a(t).remove(), p || n.hide(), c()
				}
				var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3,
					m = l,
					n = a(this),
					o = a.effects.setMode(n, b.mode || "hide"),
					p = "show" === o,
					q = n.show().css("visibility", "hidden").offset(),
					r = Math.ceil(n.outerWidth() / m),
					s = Math.ceil(n.outerHeight() / l),
					t = [];
				for (f = 0; l > f; f++)
					for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
						position: "absolute",
						visibility: "visible",
						left: -g * r,
						top: -f * s
					}).parent().addClass("ui-effects-explode").css({
						position: "absolute",
						overflow: "hidden",
						width: r,
						height: s,
						left: h + (p ? j * r : 0),
						top: i + (p ? k * s : 0),
						opacity: p ? 0 : 1
					}).animate({
						left: h + (p ? 0 : j * r),
						top: i + (p ? 0 : k * s),
						opacity: p ? 1 : 0
					}, b.duration || 500, b.easing, d)
			}, a.effects.effect.fade = function(b, c) {
				var d = a(this),
					e = a.effects.setMode(d, b.mode || "toggle");
				d.animate({
					opacity: e
				}, {
					queue: !1,
					duration: b.duration,
					easing: b.easing,
					complete: c
				})
			}, a.effects.effect.fold = function(b, c) {
				var d, e, f = a(this),
					g = ["position", "top", "bottom", "left", "right", "height", "width"],
					h = a.effects.setMode(f, b.mode || "hide"),
					i = "show" === h,
					j = "hide" === h,
					k = b.size || 15,
					l = /([0-9]+)%/.exec(k),
					m = !!b.horizFirst,
					n = i !== m,
					o = n ? ["width", "height"] : ["height", "width"],
					p = b.duration / 2,
					q = {},
					r = {};
				a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({
					overflow: "hidden"
				}), e = n ? [d.width(), d.height()] : [d.height(), d.width()], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), i && d.css(m ? {
					height: 0,
					width: k
				} : {
					height: k,
					width: 0
				}), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function() {
					j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c()
				})
			}, a.effects.effect.highlight = function(b, c) {
				var d = a(this),
					e = ["backgroundImage", "backgroundColor", "opacity"],
					f = a.effects.setMode(d, b.mode || "show"),
					g = {
						backgroundColor: d.css("backgroundColor")
					};
				"hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
					backgroundImage: "none",
					backgroundColor: b.color || "#ffff99"
				}).animate(g, {
					queue: !1,
					duration: b.duration,
					easing: b.easing,
					complete: function() {
						"hide" === f && d.hide(), a.effects.restore(d, e), c()
					}
				})
			}, a.effects.effect.size = function(b, c) {
				var d, e, f, g = a(this),
					h = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
					i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
					j = ["width", "height", "overflow"],
					k = ["fontSize"],
					l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
					m = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
					n = a.effects.setMode(g, b.mode || "effect"),
					o = b.restore || "effect" !== n,
					p = b.scale || "both",
					q = b.origin || ["middle", "center"],
					r = g.css("position"),
					s = o ? h : i,
					t = {
						height: 0,
						width: 0,
						outerHeight: 0,
						outerWidth: 0
					};
				"show" === n && g.show(), d = {
					height: g.height(),
					width: g.width(),
					outerHeight: g.outerHeight(),
					outerWidth: g.outerWidth()
				}, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), g.to = b.to || ("hide" === n ? t : d)), f = {
					from: {
						y: g.from.height / d.height,
						x: g.from.width / d.width
					},
					to: {
						y: g.to.height / d.height,
						x: g.to.width / d.width
					}
				}, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y, g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat(["marginTop", "marginBottom"]).concat(k), m = m.concat(["marginLeft", "marginRight"]), j = h.concat(l).concat(m), g.find("*[width]").each(function() {
					var c = a(this),
						d = {
							height: c.height(),
							width: c.width(),
							outerHeight: c.outerHeight(),
							outerWidth: c.outerWidth()
						};
					o && a.effects.save(c, j), c.from = {
						height: d.height * f.from.y,
						width: d.width * f.from.x,
						outerHeight: d.outerHeight * f.from.y,
						outerWidth: d.outerWidth * f.from.x
					}, c.to = {
						height: d.height * f.to.y,
						width: d.width * f.to.x,
						outerHeight: d.height * f.to.y,
						outerWidth: d.width * f.to.x
					}, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function() {
						o && a.effects.restore(c, j)
					})
				})), g.animate(g.to, {
					queue: !1,
					duration: b.duration,
					easing: b.easing,
					complete: function() {
						0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), a.effects.restore(g, s), o || ("static" === r ? g.css({
							position: "relative",
							top: g.to.top,
							left: g.to.left
						}) : a.each(["top", "left"], function(a, b) {
							g.css(b, function(b, c) {
								var d = parseInt(c, 10),
									e = a ? g.to.left : g.to.top;
								return "auto" === c ? e + "px" : d + e + "px"
							})
						})), a.effects.removeWrapper(g), c()
					}
				})
			}, a.effects.effect.scale = function(b, c) {
				var d = a(this),
					e = a.extend(!0, {}, b),
					f = a.effects.setMode(d, b.mode || "effect"),
					g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100),
					h = b.direction || "both",
					i = b.origin,
					j = {
						height: d.height(),
						width: d.width(),
						outerHeight: d.outerHeight(),
						outerWidth: d.outerWidth()
					},
					k = {
						y: "horizontal" !== h ? g / 100 : 1,
						x: "vertical" !== h ? g / 100 : 1
					};
				e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || ["middle", "center"], e.restore = !0), e.from = b.from || ("show" === f ? {
					height: 0,
					width: 0,
					outerHeight: 0,
					outerWidth: 0
				} : j), e.to = {
					height: j.height * k.y,
					width: j.width * k.x,
					outerHeight: j.outerHeight * k.y,
					outerWidth: j.outerWidth * k.x
				}, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, e.to.opacity = 0)), d.effect(e)
			}, a.effects.effect.puff = function(b, c) {
				var d = a(this),
					e = a.effects.setMode(d, b.mode || "hide"),
					f = "hide" === e,
					g = parseInt(b.percent, 10) || 150,
					h = g / 100,
					i = {
						height: d.height(),
						width: d.width(),
						outerHeight: d.outerHeight(),
						outerWidth: d.outerWidth()
					};
				a.extend(b, {
					effect: "scale",
					queue: !1,
					fade: !0,
					mode: e,
					complete: c,
					percent: f ? g : 100,
					from: f ? i : {
						height: i.height * h,
						width: i.width * h,
						outerHeight: i.outerHeight * h,
						outerWidth: i.outerWidth * h
					}
				}), d.effect(b)
			}, a.effects.effect.pulsate = function(b, c) {
				var d, e = a(this),
					f = a.effects.setMode(e, b.mode || "show"),
					g = "show" === f,
					h = "hide" === f,
					i = g || "hide" === f,
					j = 2 * (b.times || 5) + (i ? 1 : 0),
					k = b.duration / j,
					l = 0,
					m = e.queue(),
					n = m.length;
				for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++) e.animate({
					opacity: l
				}, k, b.easing), l = 1 - l;
				e.animate({
					opacity: l
				}, k, b.easing), e.queue(function() {
					h && e.hide(), c()
				}), n > 1 && m.splice.apply(m, [1, 0].concat(m.splice(n, j + 1))), e.dequeue()
			}, a.effects.effect.shake = function(b, c) {
				var d, e = a(this),
					f = ["position", "top", "bottom", "left", "right", "height", "width"],
					g = a.effects.setMode(e, b.mode || "effect"),
					h = b.direction || "left",
					i = b.distance || 20,
					j = b.times || 3,
					k = 2 * j + 1,
					l = Math.round(b.duration / k),
					m = "up" === h || "down" === h ? "top" : "left",
					n = "up" === h || "left" === h,
					o = {},
					p = {},
					q = {},
					r = e.queue(),
					s = r.length;
				for (a.effects.save(e, f),
					e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), d = 1; j > d; d++) e.animate(p, l, b.easing).animate(q, l, b.easing);
				e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function() {
					"hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
				}), s > 1 && r.splice.apply(r, [1, 0].concat(r.splice(s, k + 1))), e.dequeue()
			}, a.effects.effect.slide = function(b, c) {
				var d, e = a(this),
					f = ["position", "top", "bottom", "left", "right", "width", "height"],
					g = a.effects.setMode(e, b.mode || "show"),
					h = "show" === g,
					i = b.direction || "left",
					j = "up" === i || "down" === i ? "top" : "left",
					k = "up" === i || "left" === i,
					l = {};
				a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(e).css({
					overflow: "hidden"
				}), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, e.animate(l, {
					queue: !1,
					duration: b.duration,
					easing: b.easing,
					complete: function() {
						"hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c()
					}
				})
			}, a.effects.effect.transfer = function(b, c) {
				var d = a(this),
					e = a(b.to),
					f = "fixed" === e.css("position"),
					g = a("body"),
					h = f ? g.scrollTop() : 0,
					i = f ? g.scrollLeft() : 0,
					j = e.offset(),
					k = {
						top: j.top - h,
						left: j.left - i,
						height: e.innerHeight(),
						width: e.innerWidth()
					},
					l = d.offset(),
					m = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({
						top: l.top - h,
						left: l.left - i,
						height: d.innerHeight(),
						width: d.innerWidth(),
						position: f ? "fixed" : "absolute"
					}).animate(k, b.duration, b.easing, function() {
						m.remove(), c()
					})
			}
	}), function(a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery || Zepto)
	}(function(a) {
		var b = function(b, c, d) {
			b = a(b);
			var e, f = this,
				g = b.val();
			c = "function" == typeof c ? c(b.val(), void 0, b, d) : c;
			var h = {
				invalid: [],
				getCaret: function() {
					try {
						var a, c = 0,
							d = b.get(0),
							e = document.selection,
							f = d.selectionStart;
						return e && -1 === navigator.appVersion.indexOf("MSIE 10") ? (a = e.createRange(), a.moveStart("character", b.is("input") ? -b.val().length : -b.text().length), c = a.text.length) : (f || "0" === f) && (c = f), c
					} catch (g) {}
				},
				setCaret: function(a) {
					try {
						if (b.is(":focus")) {
							var c, d = b.get(0);
							d.setSelectionRange ? d.setSelectionRange(a, a) : d.createTextRange && (c = d.createTextRange(), c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select())
						}
					} catch (e) {}
				},
				events: function() {
					b.on("input.mask keyup.mask", h.behaviour).on("paste.mask drop.mask", function() {
						setTimeout(function() {
							b.keydown().keyup()
						}, 100)
					}).on("change.mask", function() {
						b.data("changed", !0)
					}).on("blur.mask", function() {
						g === b.val() || b.data("changed") || b.triggerHandler("change"), b.data("changed", !1)
					}).on("blur.mask", function() {
						g = b.val()
					}).on("focus.mask", function(b) {
						d.selectOnFocus === !0 && a(b.target).select()
					}).on("focusout.mask", function() {
						d.clearIfNotMatch && !e.test(h.val()) && h.val("")
					})
				},
				getRegexMask: function() {
					for (var a, b, d, e, g, h, i = [], j = 0; j < c.length; j++) a = f.translation[c.charAt(j)], a ? (b = a.pattern.toString().replace(/.{1}$|^.{1}/g, ""), d = a.optional, e = a.recursive, e ? (i.push(c.charAt(j)), g = {
						digit: c.charAt(j),
						pattern: b
					}) : i.push(d || e ? b + "?" : b)) : i.push(c.charAt(j).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
					return h = i.join(""), g && (h = h.replace(new RegExp("(" + g.digit + "(.*" + g.digit + ")?)"), "($1)?").replace(new RegExp(g.digit, "g"), g.pattern)), new RegExp(h)
				},
				destroyEvents: function() {
					b.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
				},
				val: function(a) {
					var c, d = b.is("input"),
						e = d ? "val" : "text";
					return arguments.length > 0 ? (b[e]() !== a && b[e](a), c = b) : c = b[e](), c
				},
				getMCharsBeforeCount: function(a, b) {
					for (var d = 0, e = 0, g = c.length; g > e && a > e; e++) f.translation[c.charAt(e)] || (a = b ? a + 1 : a, d++);
					return d
				},
				caretPos: function(a, b, d, e) {
					var g = f.translation[c.charAt(Math.min(a - 1, c.length - 1))];
					return g ? Math.min(a + d - b - e, d) : h.caretPos(a + 1, b, d, e)
				},
				behaviour: function(b) {
					if (b = b || window.event, "input" !== b.type) {
						h.invalid = [];
						var c = b.keyCode || b.which;
						if (-1 === a.inArray(c, f.byPassKeys)) {
							var d = h.getCaret(),
								e = h.val(),
								g = e.length,
								i = g > d,
								j = h.getMasked(),
								k = j.length,
								l = h.getMCharsBeforeCount(k - 1) - h.getMCharsBeforeCount(g - 1);
							return h.val(j), !i || 65 === c && b.ctrlKey || (8 !== c && 46 !== c && (d = h.caretPos(d, g, k, l)), h.setCaret(d)), h.callbacks(b)
						}
					}
				},
				getMasked: function(a) {
					var b, e, g = [],
						i = h.val(),
						j = 0,
						k = c.length,
						l = 0,
						m = i.length,
						n = 1,
						o = "push",
						p = -1;
					for (d.reverse ? (o = "unshift", n = -1, b = 0, j = k - 1, l = m - 1, e = function() {
							return j > -1 && l > -1
						}) : (b = k - 1, e = function() {
							return k > j && m > l
						}); e();) {
						var q = c.charAt(j),
							r = i.charAt(l),
							s = f.translation[q];
						s ? (r.match(s.pattern) ? (g[o](r), s.recursive && (-1 === p ? p = j : j === b && (j = p - n), b === p && (j -= n)), j += n) : s.optional ? (j += n, l -= n) : s.fallback ? (g[o](s.fallback), j += n, l -= n) : h.invalid.push({
							p: l,
							v: r,
							e: s.pattern
						}), l += n) : (a || g[o](q), r === q && (l += n), j += n)
					}
					var t = c.charAt(b);
					return k !== m + 1 || f.translation[t] || g.push(t), g.join("")
				},
				callbacks: function(a) {
					var e = h.val(),
						f = e !== g,
						i = [e, a, b, d],
						j = function(a, b, c) {
							"function" == typeof d[a] && b && d[a].apply(this, c)
						};
					j("onChange", f === !0, i), j("onKeyPress", f === !0, i), j("onComplete", e.length === c.length, i), j("onInvalid", h.invalid.length > 0, [e, a, b, h.invalid, d])
				}
			};
			f.mask = c, f.options = d, f.remove = function() {
				var a = h.getCaret();
				return h.destroyEvents(), h.val(f.getCleanVal()), h.setCaret(a - h.getMCharsBeforeCount(a)), b
			}, f.getCleanVal = function() {
				return h.getMasked(!0)
			}, f.init = function(c) {
				if (c = c || !1, d = d || {}, f.byPassKeys = a.jMaskGlobals.byPassKeys, f.translation = a.jMaskGlobals.translation, f.translation = a.extend({}, f.translation, d.translation), f = a.extend(!0, {}, f, d), e = h.getRegexMask(), c === !1) {
					d.placeholder && b.attr("placeholder", d.placeholder), a("input").length && "oninput" in a("input")[0] == !1 && "on" === b.attr("autocomplete") && b.attr("autocomplete", "off"), h.destroyEvents(), h.events();
					var g = h.getCaret();
					h.val(h.getMasked()), h.setCaret(g + h.getMCharsBeforeCount(g, !0))
				} else h.events(), h.val(h.getMasked())
			}, f.init(!b.is("input"))
		};
		a.maskWatchers = {};
		var c = function() {
				var c = a(this),
					e = {},
					f = "data-mask-",
					g = c.attr("data-mask");
				return c.attr(f + "reverse") && (e.reverse = !0), c.attr(f + "clearifnotmatch") && (e.clearIfNotMatch = !0), "true" === c.attr(f + "selectonfocus") && (e.selectOnFocus = !0), d(c, g, e) ? c.data("mask", new b(this, g, e)) : void 0
			},
			d = function(b, c, d) {
				d = d || {};
				var e = a(b).data("mask"),
					f = JSON.stringify,
					g = a(b).val() || a(b).text();
				try {
					return "function" == typeof c && (c = c(g)), "object" != typeof e || f(e.options) !== f(d) || e.mask !== c
				} catch (h) {}
			};
		a.fn.mask = function(c, e) {
			e = e || {};
			var f = this.selector,
				g = a.jMaskGlobals,
				h = a.jMaskGlobals.watchInterval,
				i = function() {
					return d(this, c, e) ? a(this).data("mask", new b(this, c, e)) : void 0
				};
			return a(this).each(i), f && "" !== f && g.watchInputs && (clearInterval(a.maskWatchers[f]), a.maskWatchers[f] = setInterval(function() {
				a(document).find(f).each(i)
			}, h)), this
		}, a.fn.unmask = function() {
			return clearInterval(a.maskWatchers[this.selector]), delete a.maskWatchers[this.selector], this.each(function() {
				var b = a(this).data("mask");
				b && b.remove().removeData("mask")
			})
		}, a.fn.cleanVal = function() {
			return this.data("mask").getCleanVal()
		}, a.applyDataMask = function(b) {
			b = b || a.jMaskGlobals.maskElements;
			var d = b instanceof a ? b : a(b);
			d.filter(a.jMaskGlobals.dataMaskAttr).each(c)
		};
		var e = {
			maskElements: "input,td,span,div",
			dataMaskAttr: "*[data-mask]",
			dataMask: !0,
			watchInterval: 300,
			watchInputs: !0,
			watchDataMask: !1,
			byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
			translation: {
				0: {
					pattern: /\d/
				},
				9: {
					pattern: /\d/,
					optional: !0
				},
				"#": {
					pattern: /\d/,
					recursive: !0
				},
				A: {
					pattern: /[a-zA-Z0-9]/
				},
				S: {
					pattern: /[a-zA-Z]/
				}
			}
		};
		a.jMaskGlobals = a.jMaskGlobals || {}, e = a.jMaskGlobals = a.extend(!0, {}, e, a.jMaskGlobals), e.dataMask && a.applyDataMask(), setInterval(function() {
			a.jMaskGlobals.watchDataMask && a.applyDataMask()
		}, e.watchInterval)
	}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function(b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a(f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.3.4", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function(b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	}, c.prototype.toggle = function() {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		a && this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
		var d = a(c.target);
		d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function(b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, c.prototype.keydown = function(a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function(a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function(a, b) {
		var c = this.getItemIndex(b),
			d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
		if (d && !this.options.wrap) return b;
		var e = "prev" == a ? -1 : 1,
			f = (c + e) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function(a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			b.to(a)
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, c.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, c.prototype.slide = function(b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b ? "left" : "right",
			i = this;
		if (f.hasClass("active")) return this.sliding = !1;
		var j = f[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = d, this
	};
	var e = function(c) {
		var d, e = a(this),
			f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
				h = e.attr("data-slide-to");
			h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
		}
	};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		b && 3 === b.which || (a(e).remove(), a(f).each(function() {
			var d = a(this),
				e = c(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
		}))
	}

	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}

	function d(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.4", g.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if (b(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
			}
			return !1
		}
	}, g.prototype.keydown = function(b) {
		if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
			var d = a(this);
			if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = c(d),
					g = e.hasClass("open");
				if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
					i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
				if (i.length) {
					var j = i.index(b.target);
					38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
	"use strict";

	function b(b, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function(b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function(a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function(b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			d.$element.one("mouseup.dismiss.bs.modal", function(b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function() {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function() {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function(b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function() {
				d.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function() {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function() {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function() {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b)
	};
	c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function(b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function() {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide()
	}, c.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.options.container ? a(this.options.container) : this.$element.parent(),
					p = this.getPosition(o);
				h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var q = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(q, h);
			var r = function() {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
		}
	}, c.prototype.applyPlacement = function(b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
			using: function(a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function(b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
	}, c.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function() {
		return this.getTitle()
	}, c.prototype.getPosition = function(b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = d ? {
				top: 0,
				left: 0
			} : b.offset(),
			g = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			h = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, g, h, f)
	}, c.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function() {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function(a) {
		do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
		return a
	}, c.prototype.tip = function() {
		return this.$tip = this.$tip || a(this.options.template)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function() {
		this.enabled = !0
	}, c.prototype.disable = function() {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function(b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function() {
		var a = this;
		clearTimeout(this.timeout), this.hide(function() {
			a.$element.off("." + a.type).removeData("bs." + a.type)
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = d, this
	}
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();

	}, c.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
		return a.fn.popover = d, this
	}
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b) {
		this.element = a(b)
	};
	c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function(b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
		return a.fn.tab = d, this
	};
	var e = function(c) {
		c.preventDefault(), b.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function(a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
		if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
		var h = null == this.affixed,
			i = h ? e : f.top,
			j = h ? g : b;
		return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
	}, c.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = a(document.body).height();
			"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h ? "-" + h : ""),
					j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
		return a.fn.affix = d, this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery), + function(a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}

	function c(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function(b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function() {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function(a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), + function(a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}

	function c(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.4", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function() {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0]) return this.activeTarget = null, this.clear();
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function() {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			};
		return !1
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function() {
			c = !0
		});
		var e = function() {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function(b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery),
function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
	function b(b) {
		var c = {},
			d = /^jQuery\d+$/;
		return a.each(b.attributes, function(a, b) {
			b.specified && !d.test(b.name) && (c[b.name] = b.value)
		}), c
	}

	function c(b, c) {
		var d = this,
			f = a(d);
		if (d.value == f.attr("placeholder") && f.hasClass(n.customClass))
			if (f.data("placeholder-password")) {
				if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c;
				f.focus()
			} else d.value = "", f.removeClass(n.customClass), d == e() && d.select()
	}

	function d() {
		var d, e = this,
			f = a(e),
			g = this.id;
		if ("" === e.value) {
			if ("password" === e.type) {
				if (!f.data("placeholder-textinput")) {
					try {
						d = f.clone().attr({
							type: "text"
						})
					} catch (h) {
						d = a("<input>").attr(a.extend(b(this), {
							type: "text"
						}))
					}
					d.removeAttr("name").data({
						"placeholder-password": f,
						"placeholder-id": g
					}).bind("focus.placeholder", c), f.data({
						"placeholder-textinput": d,
						"placeholder-id": g
					}).before(d)
				}
				f = f.attr("aria-hidden", "true"), f = f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g).show()
			}
			f.addClass(n.customClass), f[0].value = f.attr("placeholder")
		} else f.removeClass(n.customClass)
	}

	function e() {
		try {
			return document.activeElement
		} catch (a) {}
	}
	var f, g, h, i = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
		j = "placeholder" in document.createElement("input") && !i,
		k = "placeholder" in document.createElement("textarea") && !i,
		l = a.valHooks,
		m = a.propHooks;
	if (j && k) g = a.fn.placeholder = function() {
		return this
	}, g.input = g.textarea = !0;
	else {
		var n = {};
		g = a.fn.placeholder = function(b) {
			var e = {
				customClass: "placeholder"
			};
			n = a.extend({}, e, b);
			var f = this;
			return f.filter((j ? "textarea" : ":input") + "[placeholder]").not("." + n.customClass).bind({
				"focus.placeholder": c,
				"blur.placeholder": d
			}).data("placeholder-enabled", !0).trigger("blur.placeholder"), f
		}, g.input = j, g.textarea = k, f = {
			get: function(b) {
				var c = a(b),
					d = c.data("placeholder-password");
				return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(n.customClass) ? "" : b.value
			},
			set: function(b, f) {
				var g = a(b),
					h = g.data("placeholder-password");
				return h ? h[0].value = f : g.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : g.hasClass(n.customClass) ? c.call(b, !0, f) || (b.value = f) : b.value = f, g) : b.value = f
			}
		}, j || (l.input = f, m.value = f), k || (l.textarea = f, m.value = f), a(function() {
			a(document).delegate("form", "submit.placeholder", function() {
				var b = a("." + n.customClass, this).each(c);
				setTimeout(function() {
					b.each(d)
				}, 10)
			})
		}), a(document).on("click", "a", function(a) {
			h = this
		}), a(window).bind("beforeunload.placeholder", function() {
			void 0 == h ? a("." + n.customClass).each(function() {
				this.value = ""
			}) : h && "javascript:void(0)" !== h.href && "javascript:void(0);" !== h.href && a("." + n.customClass).each(function() {
				this.value = ""
			})
		})
	}
});