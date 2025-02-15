var SEP = "|",
	PAIR = "=",
	DEV = "~",
	ver = 1;

function goto(e) {
	window.location.replace(e)
}

function flashfix(e, o, t) {
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1">\n'), document.write('<param name="movie" value="pmfso.swf" />\n'), document.write('<param name="quality" value="high" />\n'), document.write('<param name="bgcolor" value=#FFFFFF />\n'), document.write('<param name="FlashVars" value="gotoUrl=' + o + "%26detect%3D2&sendUrl=" + e + '" />\n'), document.write('<embed src="pmfso.swf" FlashVars="gotoUrl=' + o + "%26detect%3D3&sendUrl=" + e + '" quality="high" bgcolor="#FFFFFF" width="1" height="1" type="application/x-shockwave-flash" />\n'), document.write("<noembed>\n"), document.write("<script>\n"), document.write("goto('" + t + "&detect=5');\n"), document.write("<\/script>\n"), document.write("</noembed>\n"), document.write("<noobject></noobject>\n"), document.write("</embed>\n"), document.write("</object>\n")
}

function activeXDetect(e) {
	return componentVersion = document.body.getComponentVersion("{" + e + "}", "ComponentID"), null != componentVersion && componentVersion
}

function extractVersions(e) {
	extractedVersions = "";
	for (var o = 0; o < e.length; o++) charAtValue = e.charAt(o), ("0" <= charAtValue && charAtValue <= "9" || "." == charAtValue || "_" == charAtValue || "," == charAtValue) && (extractedVersions += charAtValue);
	return extractedVersions
}

function stripIllegalChars(e) {
	for (t = "", e = e.toLowerCase(), i = 0; i < e.length; i++) "\n" != e.charAt(i) && "/" != e.charAt(i) && "\\" != e.charAt(i) ? t += e.charAt(i) : "\n" == e.charAt(i) && (t += "n");
	return t
}

function stripFullPath(e, o) {
	return fileName = e, filenameStart = 0, filenameStart = fileName.lastIndexOf(o), filenameStart < 0 ? e : (filenameFinish = fileName.length, fileName = fileName.substring(filenameStart + o.length, filenameFinish), fileName)
}

function fingerprint_browser() {
	return t = ua + SEP + navigator.appVersion + SEP + navigator.platform, ie ? (t += SEP + navigator.appMinorVersion + SEP + navigator.cpuClass + SEP + navigator.browserLanguage, t += SEP + ScriptEngineBuildVersion()) : moz && (t += SEP + navigator.language), t
}

function fingerprint_display() {
	return t = "", self.screen && (t += screen.colorDepth + SEP + screen.width + SEP + screen.height + SEP + screen.availHeight), t
}

function fingerprint_software() {
	t = "", isFirst = !0;
	var e = new Hashtable;
	if (e.put("npnul32.dll", "def"), e.put("npqtplugin6.dll", "qt6"), e.put("npqtplugin5.dll", "qt5"), e.put("npqtplugin4.dll", "qt4"), e.put("npqtplugin3.dll", "qt3"), e.put("npqtplugin2.dll", "qt2"), e.put("npqtplugin.dll", "qt1"), e.put("nppdf32.dll", "pdf"), e.put("NPSWF32.dll", "swf"), e.put("NPJava11.dll", "j11"), e.put("NPJava12.dll", "j12"), e.put("NPJava13.dll", "j13"), e.put("NPJava32.dll", "j32"), e.put("NPJava14.dll", "j14"), e.put("npoji600.dll", "j61"), e.put("NPJava131_16.dll", "j16"), e.put("NPOFFICE.DLL", "mso"), e.put("npdsplay.dll", "wpm"), e.put("npwmsdrm.dll", "drm"), e.put("npdrmv2.dll", "drn"), e.put("nprjplug.dll", "rjl"), e.put("nppl3260.dll", "rpl"), e.put("nprpjplug.dll", "rpv"), e.put("npchime.dll", "chm"), e.put("npCortona.dll", "cor"), e.put("np32dsw.dll", "dsw"), e.put("np32asw.dll", "asw"), 0 < navigator.plugins.length) {
		for (temp = "", moz = "", key = "", lastDir = "Plugins", i = 0; i < navigator.plugins.length; i++) plugin = navigator.plugins[i], moz = stripFullPath(plugin.filename, lastDir), 1 == isFirst ? (key = e.containsKey(moz), isFirst = (key ? temp += e.get(moz) : temp = "", !1)) : (key = e.containsKey(moz), key ? temp += SEP + e.get(moz) : temp += "");
		t = stripIllegalChars(temp)
	} else if (0 < navigator.mimeTypes.length)
		for (key = "", i = 0; i < navigator.mimeTypes.length; i++) mimeType = navigator.mimeTypes[i], 1 == isFirst ? (key = e.containsKey(mimeType), isFirst = (key ? t += e.get(mimeType) + PAIR + mimeType : t += "unknown" + PAIR + mimeType, !1)) : (key = e.containsKey(mimeType), key ? t += SEP + e.get(mimeType) + PAIR + mimeType : temp += "");
	else if (ie)
		for (names = new Array("abk", "wnt", "aol", "arb", "chs", "cht", "dht", "dhj", "dan", "dsh", "heb", "ie5", "icw", "ibe", "iec", "ieh", "iee", "jap", "krn", "lan", "swf", "shw", "msn", "wmp", "obp", "oex", "net", "pan", "thi", "tks", "uni", "vtc", "vnm", "mvm", "vbs", "wfd"), components = new Array("7790769C-0471-11D2-AF11-00C04FA35D02", "89820200-ECBD-11CF-8B85-00AA005B4340", "47F67D00-9E55-11D1-BAEF-00C04FC2D130", "76C19B38-F0C8-11CF-87CC-0020AFEECF20", "76C19B34-F0C8-11CF-87CC-0020AFEECF20", "76C19B33-F0C8-11CF-87CC-0020AFEECF20", "9381D8F2-0288-11D0-9501-00AA00B911A5", "4F216970-C90C-11D1-B5C7-0000F8051515", "283807B5-2C60-11D0-A31D-00AA00B92C03", "44BBA848-CC51-11CF-AAFA-00AA00B6015C", "76C19B36-F0C8-11CF-87CC-0020AFEECF20", "89820200-ECBD-11CF-8B85-00AA005B4383", "5A8D6EE0-3E18-11D0-821E-444553540000", "630B1DA0-B465-11D1-9948-00C04F98BBC9", "08B0E5C0-4FCB-11CF-AAA5-00401C608555", "45EA75A0-A269-11D1-B5BF-0000F8051515", "DE5AED00-A4BF-11D1-9948-00C04F98BBC9", "76C19B30-F0C8-11CF-87CC-0020AFEECF20", "76C19B31-F0C8-11CF-87CC-0020AFEECF20", "76C19B50-F0C8-11CF-87CC-0020AFEECF20", "D27CDB6E-AE6D-11CF-96B8-444553540000", "2A202491-F00D-11CF-87CC-0020AFEECF20", "5945C046-LE7D-LLDL-BC44-00C04FD912BE", "22D6F312-B0F6-11D0-94AB-0080C74C7E95", "3AF36230-A269-11D1-B5BF-0000F8051515", "44BBA840-CC51-11CF-AAFA-00AA00B6015C", "44BBA842-CC51-11CF-AAFA-00AA00B6015B", "76C19B32-F0C8-11CF-87CC-0020AFEECF20", "76C19B35-F0C8-11CF-87CC-0020AFEECF20", "CC2A9BA0-3BDD-11D0-821E-444553540000", "3BF42070-B3B1-11D1-B5C5-0000F8051515", "10072CEC-8CC1-11D1-986E-00A0C955B42F", "76C19B37-F0C8-11CF-87CC-0020AFEECF20", "08B0E5C0-4FCB-11CF-AAA5-00401C608500", "4F645220-306D-11D2-995D-00C04F98BBC9", "73FA19D0-2D75-11D2-995D-00C04F98BBC9"), document.body.addBehavior("#default#clientCaps"), i = 0; i < components.length; i++) {
			ver = activeXDetect(components[i]);
			var o = names[i];
			ver ? 1 == isFirst ? (t += o + PAIR + ver, isFirst = !1) : t += SEP + o + PAIR + ver : (t += "", isFirst = !1)
		}
	return t
}

function fingerprint_timezone() {
	return (new Date).getTimezoneOffset() / 60 * -1
}

function fingerprint_language() {
	var e = void 0 !== navigator.language ? "lang" + PAIR + navigator.language + SEP : void 0 !== navigator.browserLanguage ? "lang" + PAIR + navigator.browserLanguage + SEP : "lang" + PAIR + SEP;
	return void 0 !== navigator.systemLanguage ? e += "syslang" + PAIR + navigator.systemLanguage + SEP : e += "syslang" + PAIR + SEP, void 0 !== navigator.userLanguage ? e += "userlang" + PAIR + navigator.userLanguage : e += "userlang" + PAIR, e
}

function fingerprint_java() {
	return navigator.javaEnabled() ? 1 : 0
}

function fingerprint_cookie() {
	var e = navigator.cookieEnabled ? 1 : 0;
	return void 0 !== navigator.cookieEnabled || e || (document.cookie = "testcookie", e = -1 != document.cookie.indexOf("testcookie") ? 1 : 0), e
}

function form_add_data(e, o, t) {
	return e && 0 < e.length ? e += "&" : e = "", e += o + "=" + escape(t)
}

function form_add_fingerprint(e, o, t) {
	return e = form_add_data(e, o + "d", t)
}

function asyncpost_fingerprints(e) {
	var o = !1;
	return o || "undefined" == typeof XMLHttpRequest || (o = new XMLHttpRequest), !!o && (o.open("POST", e, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e = form_add_fingerprint(void 0, "fp_browser", fingerprint_browser()), e = form_add_fingerprint(e, "fp_display", fingerprint_display()), e = form_add_fingerprint(e, "fp_software", fingerprint_software()), e = form_add_fingerprint(e, "fp_timezone", fingerprint_timezone()), e = form_add_fingerprint(e, "fp_language", fingerprint_language()), e = form_add_fingerprint(e, "fp_java", fingerprint_java()), e = form_add_fingerprint(e, "fp_cookie", fingerprint_cookie()), o.send(e), !0)
}

function post_fingerprints() {
	return document.loginForm.pm_fp.value = URLencode(add_deviceprint()), !0
}

function post_fingerprints_v2() {
	return document.challengeForm.pm_fp.value = URLencode(add_deviceprint()), !0
}

function post_fingerprintsnoencode() {
	return document.loginForm.pm_fp.value = add_deviceprint(), !0
}

function post_fingerprintsnoencode_v2() {
	return document.challengeForm.pm_fp.value = add_deviceprint(), !0
}

function URLencode(e) {
	return encodedString = escape(e).replace(/\*/g, "%2A").replace(/\+/g, "%2B").replace(/-/g, "%2D").replace(/\./g, "%2E").replace(/\//, "%2F").replace(/_/g, "%5F").replace(/@/g, "%40"), encodedString
}

function add_deviceprint() {
	return "version=" + ver + "&pm_fpua=" + fingerprint_browser("") + "&pm_fpsc=" + fingerprint_display("") + "&pm_fpsw=" + fingerprint_software("") + "&pm_fptz=" + fingerprint_timezone("") + "&pm_fpln=" + fingerprint_language("") + "&pm_fpjv=" + fingerprint_java("") + "&pm_fpco=" + fingerprint_cookie("")
}

function Hashtable() {
	var n = {
			__indexToValue: [],
			__indexToKeys: []
		},
		a = [],
		i = 0,
		s = this;

	function o(e) {
		for (var o = null, t = 0;
			"number" == typeof a[t];) t += 1;
		a[t] = 0, this.hasNext = this.hasMoreElements = function() {
			return a[t] < i || ("number" == typeof a[t] && (a[t] = null), !1)
		}, this.next = this.nextElement = function() {
			return this.hasNext ? (o = a[t], n[e][a[t]++]) : null
		}, this.remove = function() {
			"number" == typeof o && (s.remove(n.__indexToKeys[o]), o = null)
		}
	}
	this.get = function(e) {
		return "number" == typeof n[e] ? n.__indexToValue[n[e]] : null
	}, this.put = function(e, o) {
		"number" == typeof n[e] ? n.__indexToValue[n[e]] = o : (n[e] = i, n.__indexToValue[i] = o, n.__indexToKeys[i++] = e)
	}, this.remove = function(e) {
		var o = n[e];
		if ("number" == typeof o) {
			delete n[e], --i;
			for (var t = o; t < i; t++) n.__indexToValue[t] = n.__indexToValue[t + 1], n[n.__indexToKeys[t] = n.__indexToKeys[t + 1]] = t;
			for (t = 0; t < a.length; t++) a[t] && o < a[t] && --a[t]
		}
	}, this.size = function() {
		return i
	}, this.__enumerate = function(e) {
		return new o(e)
	}, Hashtable.prototype.elements = function() {
		return this.__enumerate("__indexToValue")
	}, Hashtable.prototype.keys = function() {
		return this.__enumerate("__indexToKeys")
	}, Hashtable.prototype.clear = function() {
		for (var e = this.keys(); e.hasNext();) this.remove(e.next())
	}, Hashtable.prototype.toString = function() {
		for (var e, o = this.keys(), t = ""; o.hasNext();) t += (e = o.next()) + " =&gt; " + this.get(e) + "\r\n";
		return t
	}, Hashtable.prototype.contains = function(e) {
		for (var o = this.elements(); o.hasNext();)
			if (o.next() == e) return !0;
		return !1
	}, Hashtable.prototype.containsValue = Hashtable.prototype.contains, Hashtable.prototype.containsKey = function(e) {
		return null != this.get(e)
	}, Hashtable.prototype.isEmpty = function() {
		return 0 == this.size()
	}, Hashtable.prototype.putAll = function(e) {
		if (e.constructor == Hashtable)
			for (var o, t = e.keys(); t.hasNext();) o = t.next(), this.put(o, e.get(o))
	}, Hashtable.prototype.clone = function() {
		var e = new Hashtable;
		return e.putAll(this), e
	}, Hashtable.prototype.equals = function(e) {
		return e == this
	}
}

function fileBB() {
	var e, o;
	isLP() && (e = generateVal(), o = "", o = -1 != location.href.indexOf("discovercard.com") ? "content.discovercard.com" : "content.discover.com", document.getElementById("ssid").value = e, discover.memeberSetup(o, "o7f2hmf6", e))
}

function generateVal() {
	var t = (new Date).getTime();
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx".replace(/[xy]/g, function(e) {
		var o = (t + 16 * Math.random()) % 16 | 0;
		return ("x" == e ? o : 3 & o | 8).toString(16)
	}) + "-" + (new Date).getTime()
}

function isLP() {
	var e = window.location.href;
	return -1 < e.indexOf("customersvcs") && (-1 < e.indexOf("universalLogin") || -1 < e.indexOf("registration") || -1 < e.indexOf("acctxfer")) && (-1 < e.indexOf("timeout_confirmed") || -1 < e.indexOf("ac_main") || -1 < e.indexOf("forgotuserid") || -1 < e.indexOf("signin") || -1 < e.indexOf("pwdresethome") || -1 < e.indexOf("verifyRegistration") || -1 < e.indexOf("Home")) || !(-1 < e.indexOf("cardmembersvcs"))
}
opera = 0 <= (ua = navigator.userAgent.toLowerCase()).indexOf("opera"), ie = 0 <= ua.indexOf("msie") && !opera, iemac = ie && 0 <= ua.indexOf("mac"), moz = ua.indexOf("mozilla") && !ie && !opera, os = navigator.platform,
	function(n, a) {
		"use strict";
		var i = {
			start: "touchstart",
			end: "touchend"
		};
		n.event.special.tap = {
			setup: function() {
				n(this).off("tap").on(i.start + " " + i.end, function(e) {
					i.E = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : e
				}).on(i.start, function(e) {
					e.which && 1 !== e.which || (i.target = e.target, i.time = (new Date).getTime(), i.X = i.E.pageX, i.Y = i.E.pageY)
				}).on(i.end, function(e) {
					var o = Math.abs(i.X - i.E.pageX),
						t = Math.abs(i.Y - i.E.pageY);
					i.target === e.target && (new Date).getTime() - i.time < 300 && o <= 5 && t <= 5 && (e.type = a, e.pageX = i.E.pageX, e.pageY = i.E.pageY, n.event.dispatch.call(this, e))
				})
			},
			remove: function() {
				n(this).off(i.start + " " + i.end)
			}
		}, n.fn.tap = function(e) {
			return this[e ? "on" : "trigger"](a, e)
		}
	}(jQuery, "tap");
var globalModalMarginTopdesktop, ieVersion, consts = {},
	msie = (ua = window.navigator.userAgent).indexOf("MSIE "),
	doc = $(document),
	globalModalMarginTopmobile = 0;
consts.tapEvnt = "click", consts.isDevice = !1, consts.isIE = !1, consts.isTouchMove = !1, consts.touchStartPos = 0;
var initialSecNavTop, nonSecure = !(consts.touchEndPos = 0),
	secNavLastScrollTop = 0;

function winHeight() {
	return $(window).height()
}

function getWin() {
	return window.innerWidth
}
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (consts.tapEvnt = "tap", consts.isDevice = !0), /MSIE (\d+\.\d+);/.test(navigator.userAgent) && (ieVersion = new Number(RegExp.$1)), -1 != (ua = ua.toLowerCase()).indexOf("safari") && (-1 < ua.indexOf("chrome") || $(window).on("pageshow", function(e) {
	0 < $(".forgot-info-pg").length && e.originalEvent.persisted && window.location.reload()
}));
var scErrorsArray, discover_rwd = function() {
		(0 < $("input[type=text]").length || 0 < $("input[type=password]").length || 0 < $("input[type=tel]").length) && ($("input[type=text], input[type=password],  input[type=tel]").val(""), $("input[type=text], input[type=password], input[type=tel]").placeholder());

		function t(e) {
			var o = !0 === /MacPPC|MacIntel/.test(window.navigator.platform),
				t = !1;
			return e.shiftKey ? t = e.shiftKey : e.modifiers && (t = !!(4 & e.modifiers)), (e = String.fromCharCode(e.which)).toUpperCase() === e.toLowerCase() || (e.toUpperCase() === e ? !0 == o && t || (i = !t) : e.toLowerCase() === e && (i = t)), i
		}

		function n(e) {
			return 20 === e.which && "unknown" !== i && (i = !i), i
		}

		function a(e, o) {
			e !== o && ($("body").trigger("capsChanged"), !0 === o ? $("body").trigger("capsOn") : !1 === o ? $("body").trigger("capsOff") : "unknown" === o && $("body").trigger("capsUnknown"))
		}
		var o = function(e) {
				var o = e.find(".modal-header").outerHeight(!0),
					t = e.find(".modal-footer").outerHeight(!0);
				mbodyTopMargin = parseInt($(".modal.in").find(".modal-body").css("margin-top")), mbodyBottomMargin = parseInt($(".modal.in").find(".modal-body").css("margin-bottom")) - t, t = $(window).height() - o - t - mbodyBottomMargin - mbodyTopMargin, getWin() < 730 ? e.find(".modal-body").css({
					height: t + "px",
					overflow: "auto"
				}) : e.find(".modal-body").css({
					height: "auto",
					overflow: "auto"
				})
			},
			i = "unknown";
		return utility = {
			desktopTelephoneDisabled: function() {
				$(".phone-number").removeAttr("role"), 0 < $(".phone-number").length && -1 != $(".phone-number").attr("href").indexOf("tel") && (consts.isDevice ? consts.isDevice && $(".phone-number").addClass("active-phone-link") : $(".phone-number").removeAttr("href").addClass("preventDefaultBehaviour"))
			},
			initSiteCat: function() {
				s_code && document.write(s_code)
			},
			initJsonld: function() {
				$("body").append('<script type="application/ld+json">{"@context":"http://schema.org","@type":"Organization","name":"Discover","logo":"https://www.discover.com/global/images/discover-logo.png","url":"https://www.discover.com","contactPoint":[{"@type":"ContactPoint","telephone":"+1-800-347-2683","contactType":"customer support","contactOption":"TollFree","areaServed":["US","MX"],"availableLanguage":["English","Spanish"]},{"@type":"ContactPoint","telephone":"+1-224-888-7777","contactType":"customer support"},{"@type":"ContactPoint","telephone":"+1-224-888-7777","contactType":"customer support","contactOption":["HearingImpairedSupported","TollFree"]\t\t}]}<\/script>'), $("body").append('<script type="application/ld+json">{"@context":"http://schema.org","@type":"Organization","name":"Discover","logo":"https://www.discover.com/global/images/discover-logo.png","url":"https://www.discover.com","sameAs":["https://twitter.com/discover","https://www.facebook.com/discover","https://www.linkedin.com/company/discover-financial-services","https://www.youtube.com/user/Discover","https://plus.google.com/+Discover/posts"]        }<\/script>')
			},
			initCapsLock: function(e) {
				if (consts.isDevice) return !1;
				$("body, .select-box-wrapper, .header-wrapper").bind("keypress", function(e) {
					var o = i;
					i = t(e), a(o, i)
				}), $("body, .select-box-wrapper, .header-wrapper").bind("input", function(e) {
					var o = i;
					i = t(e), a(o, i)
				}), $("body, .select-box-wrapper, .header-wrapper").bind("keydown", function(e) {
					var o = i;
					i = n(e), a(o, i)
				}), $("body, .select-box-wrapper, .header-wrapper").bind("keyup", function(e) {
					var o = !0 === /MacPPC|MacIntel/.test(window.navigator.platform),
						t = i;
					"keyup" == e.type && !0 == o && (i = n(e)), a(t, i)
				}), $(window).bind("focus", function() {
					a(i, i = "unknown")
				}), a(null, "unknown")
			}
		}, {
			showOverlay: function(e) {
				e = $(e);
				o(e)
			},
			calculateModalBodyHeight: o,
			utility: utility
		}
	}(),
	clearScVars = function() {
		s.prop1 = "", s.prop41 = "", s.prop32 = "", s.eVar74 = "", s.prop10 = "", s.list1 = "", s.prop10 = ""
	},
	setFlag = !1,
	scLoginOverlay = sitecatalyst = {
		sitecatPageload: function() {
			clearScVars(), s.pageName = "cardmembersvcs/loginlogout/app/login-Overlay", s.prop41 = siteObj[cookieData.site], s.prop32 = "View Port:" + scLoginOverlay.checkViewPort(), s.prop1 && delete s.prop1, "event58" == s.events && delete s.events, s.t()
		},
		sitecatLoginClicked: function(e, o) {
			clearScVars(), setFlag || (s.linkTrackVars = s.linkTrackVars + ",prop1,prop32,prop41", s.prop41 = siteObj[cookieData.site], s.prop1 = "Login Overlay Button Clicked:REMEMBER USERID=" + o, s.prop32 = "View Port:" + scLoginOverlay.checkViewPort(), s.prop10 && delete s.prop10, s.list1 && delete s.list1, s.tl(this, "o", s.prop1, s.prop32, s.prop41))
		},
		sitecatCloseCliked: function() {
			clearScVars(), s.linkTrackVars = s.linkTrackVars + ",prop1", s.prop1 = "Login Overlay Close Btn", s.tl(this, "o", s.prop1)
		},
		sitecatLoginError: function(o) {
			clearScVars(), s.linkTrackVars = s.linkTrackVars + ",prop1,prop10,list1,prop32,prop41";
			var t = "",
				n = "";
			$.each(o, function(e) {
				t += o[e] + "|", n += "ERROR:" + o[e] + ","
			}), "|" == t.slice(-1) && (t = t.slice(0, -1)), "," == n.slice(-1) && (n = n.slice(0, -1)), $("#login-form").is(":visible") && (rV = $("#login-form .icon-checkbox").hasClass("selected") ? "Yes" : "No"), $("#login-form-content").is(":visible") && (rV = $("#login-form-content .icon-checkbox").hasClass("selected") ? "Yes" : "No"), s.prop41 = siteObj[cookieData.site], s.prop10 = t, s.list1 = n, s.prop1 = "Login Overlay Button Clicked:REMEMBER USERID=" + rV, s.prop32 = "View Port:" + scLoginOverlay.checkViewPort(), s.events && delete s.events, s.tl(this, "o", s.prop1, s.prop32, s.prop41, s.list1, s.prop10), setFlag = !0
		},
		checkViewPort: function() {
			return 991 < window.innerWidth ? "Wide" : window.innerWidth <= 991 && 730 < window.innerWidth ? "Middle" : "Narrow"
		}
	},
	customInputs = (init = function() {
		this.setEvents()
	}, setEvents = function() {
		$('input[type="radio"],input[type="checkbox"]').on("focusin", function() {
			$(this).parent(".custom-element").addClass("elementfocus")
		}), $('input[type="radio"],input[type="checkbox"]').on("focusout", function() {
			$(this).parent(".custom-element").removeClass("elementfocus")
		}), $(".custom-input").on("change click", function() {
			"radio" == $(this).attr("type") ? ($("custom-checkbox, .custom-radio").siblings().find(".custom-element").removeClass("selected"), $(this).prop("checked") && ($(this).parent(".custom-element").addClass("selected"), $(this).parent(".custom-element").addClass("elementfocus"))) : $(this).prop("checked") ? ($(this).closest(".custom-element").addClass("selected"), $(this).parent(".custom-element").addClass("elementfocus")) : ($(this).closest(".custom-element").removeClass("selected"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(this).parent(".custom-element").removeClass("elementfocus"))
		})
	}, {
		init: init,
		setEvents: setEvents
	}),
	modal = (setEvents = function() {
		modal.positionModalEvents()
	}, calculatePosition = function() {
		var e = $(".in .modal-dialog").find(".modal-content").outerHeight(!0) || $(".in .modal-dialog").find(".modal-content").clientHeight,
			o = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		h = $(window).height() || document.documentElement.clientHeight || document.body.clientHeight, $(".modal.in").find(".modal-body").removeAttr("style"), $(".modal.in").find(".modal-dialog").removeAttr("style"), 730 <= o && e + 60 < h ? ($(".in .modal-dialog").css("margin-top", Math.round(.96 * (h - e) / 2)), globalModalMarginTopdesktop = Math.round(.96 * (h - e) / 2)) : 730 <= o && e + 60 > h ? $(".in .modal-dialog").css({
			"margin-top": 30,
			"margin-bottom": 30,
			overflow: "auto"
		}) : o < 730 && $(".in").hasClass("login-modal") && ($(".in .modal-dialog").css("margin-top", Math.round(.96 * (h - e) / 2)), globalModalMarginTopdesktop = Math.round(.96 * (h - e) / 2), e + 60 > h && $(".in .modal-dialog").css({
			"margin-top": 30,
			"margin-bottom": 30,
			overflow: "auto"
		}))
	}, positionModalEvents = function() {
		$(".modal").each(function() {
			var e = $(this),
				o = e.find(".modal-dialog"),
				t = e.is(".in") ? "in" : "";
			e.removeClass("in").addClass("invisible").modal("show"), o.data("height", o.height()), e.modal("hide").removeClass("invisible").addClass(t)
		}), $(".modal").on("shown.bs.modal", function() {
			$(".header-wrapper").addClass("for-modal"), modal.calculatePosition(), $(".modal-content .custom-focus").length || ($(".modal.in .modal-body").prepend('<a href="#;" class="custom-focus preventDefaultBehaviour" aria-hidden="">.</a>'), $(".modal.in .modal-content").append('<a href="#" class="custom-focus preventDefaultBehaviour" aria-hidden="">.</a>')), $(".modal.in .modal-headline").attr("tabindex", "0").focus(), $(".modal.in .custom-focus").on("focus", function() {
				setTimeout(function() {
					$(".modal.in .modal-headline").attr("tabindex", "0").focus()
				}, 10)
			})
		}), $(".modal").on("hidden.bs.modal", function() {
			$(".header-wrapper").removeClass("for-modal")
		}), $(window).resize(function() {
			!(0 < $(".mobile-responsive").length && window.innerWidth < 730) || $(".in").hasClass("login-modal") ? modal.calculatePosition() : (discover_rwd.showOverlay($(".modal.in")), $(".in .modal-dialog").css("margin-top", globalModalMarginTopmobile))
		})
	}, {
		init: function() {
			this.setEvents()
		},
		setEvents: setEvents,
		positionModalEvents: positionModalEvents,
		calculatePosition: calculatePosition
	}),
	tooltip = function() {
		var i, c = "",
			u = function() {
				var e = i,
					o = $(".tooltip-overlay.open").find("tooltip-header").outerHeight(),
					t = parseInt($(".tooltip-overlay.open .tooltip-body").css("padding-top")),
					n = parseInt($(".tooltip-overlay.open .tooltip-body").css("padding-bottom"));
				e >= winHeight() ? (n = winHeight() - o - t - n, $(".tooltip-overlay.open").hasClass("new-reference-modal-tooltip") ? $(".tooltip-overlay.open").css({
					top: 0
				}) : ($(".tooltip-overlay.open .tooltip-body").css("height", n + "px"), $(".tooltip-overlay.open").css({
					top: 0,
					bottom: 0
				}), $("body").css("position", "fixed"), $(".tooltip-overlay.reference-modal-tooltip .tooltip-body").css("marginTop", "44px")), $(".tooltip-overlay.reference-modal-tooltip .close-link").css("top", "11px")) : $(".tooltip-overlay.open").find("tooltip-body").removeAttr("style")
			};
		return {
			init: function() {
				$(".tooltip-opener").attr("role", "button"), $(".tooltip-overlay a.close-link").attr("role", "button"), doc.on("tap click", ".tooltip-opener", function(e) {
					0 < $(".show-flyout").length && $(".show-flyout, .next-flyout").removeClass("show-flyout next-flyout"), $(".header-wrapper").hasClass("show-menu") && ($(".navbar-wrapper").addClass("animate"), $("body").removeClass("panel-open"), $(".header-wrapper").removeClass("show-menu"), setTimeout(function() {
						$(".navbar-wrapper").removeClass("animate")
					}, 500)), tooltip.closeToolTip();
					var o = $(this).attr("rel");
					$(this).addClass("open-tooltip"), $("#" + o).addClass("open"), $(this).hasClass("reference-modal") && (c = "ref"), getWin() < 730 && ($(this).hasClass("reference-modal") ? ($("body").css("position", "static"), $(".tooltip-overlay.open").removeClass("hide"), $(".tooltip-overlay.open .tooltip-body").css("height", "auto"), i = $(".tooltip-overlay.open").outerHeight(), $(".tooltip-overlay.open").addClass("hide"), c && u()) : $(this).hasClass("new-reference-modal") ? (tooltip.attachEventOnLoad(), tooltip.openTooltip(), $(".tooltip-overlay.open").outerHeight() >= winHeight() && ($("#" + $(this).attr("rel")).addClass("modal-view"), $("body").addClass("modal-open"), $("body").css("position", "static"), $(".tooltip-overlay.open").find(".arrow-focus-down").hide(), $(".tooltip-overlay.open").find(".arrow-focus").hide())) : (c = "", $("body").css("position", "fixed"))), getWin() < 730 && $(this).hasClass("new-reference-modal") || (tooltip.attachEventOnLoad(), tooltip.openTooltip()), e.stopPropagation()
				})
			},
			attachEventOnLoad: function() {
				$(".tooltip-overlay a.close-link, body, .has-fly-out, #mobile-search-btn, .card-type ").on(consts.tapEvnt, function(e) {
					if ($(".tooltip-overlay").hasClass("open")) {
						if ($("body").css("position", "static"), $("body").removeClass("modal-open"), tooltip.closeToolTip(), "undefined" != $(event.target).attr("data-toggle") || "modal" == !$(event.target).attr("data-toggle")) {
							if ("modal" == $(event.target).attr("data-toggle")) return !0;
							e.stopPropagation()
						}
						e.preventDefault()
					}
				}), $("body").on(consts.tapEvnt, ".tooltip-overlay, .tooltip-opener.open-tooltip", function(o) {
					return "modal" == $(o.target).attr("data-toggle") || (e.stopPropagation(), !!$(o.target).is("a") && void 0)
				}), $(".menu-button").on(consts.tapEvnt, function() {
					$(".tooltip-overlay").hasClass("open") && ($(".tooltip-overlay").removeClass("open").addClass("hide"), $(".tooltip-opener").removeClass("open-tooltip"))
				}), $(window).resize(function(e) {
					var o = $(".tooltip-overlay").hasClass("open"),
						t = $(".tooltip-overlay.reference-modal-tooltip").hasClass("open"),
						n = $(".tooltip-overlay.new-reference-modal-tooltip").hasClass("open"),
						a = $(window).scrollTop();
					$(".arrow-focus-down").css("left", 0), 729 < getWin() ? ($(".tooltip-overlay.open").removeAttr("style"), $("body").css("position", "static"), $(".tooltip-overlay.open .tooltip-body").css("height", "auto"), $("body").removeClass("modal-open")) : o && ($(".tooltip-overlay.open").removeAttr("style"), t ? ($("body").css("position", "static"), $(".tooltip-overlay.open .tooltip-body").css("height", "auto"), i = $(".tooltip-overlay.open").outerHeight(), c && u()) : $("body").css("position", "fixed")), o && (n && ($(".tooltip-overlay.open .tooltip-body").css("height", "auto"), i = $(".tooltip-overlay.open .tooltip-body").outerHeight(), c && u(), $("body").css("position", "static"), getWin() < 730 && (i >= winHeight() ? ($(".tooltip-overlay.new-reference-modal-tooltip.open").addClass("modal-view"), $("body").addClass("modal-open"), $(".tooltip-overlay.open").find(".arrow-focus-down").hide(), $(".tooltip-overlay.open").find(".arrow-focus").hide()) : ($(".tooltip-overlay.new-reference-modal-tooltip.open").removeClass("modal-view"), $("body").removeClass("modal-open"), tooltip.openTooltip()))), $(window).scrollTop(a), tooltip.tooltipPosition())
				})
			},
			openTooltip: function() {
				tooltip.tooltipPosition(), $(".tooltip-overlay").find(".custom-focus").remove(), $(".tooltip-overlay.open .tooltip-body").prepend('<a href="#" class="custom-focus preventDefaultBehaviour">.</a>'), $('<a href="#" class="custom-focus preventDefaultBehaviour">.</a>').insertAfter($(".tooltip-overlay.open .close-link")), $(".tooltip-overlay.open .tooltip-body h4:first-child, .tooltip-overlay.open .tooltip-body .tooltip-anchor-heading").attr("tabindex", "0").focus(), $(".tooltip-overlay .custom-focus").on("focus", function() {
					setTimeout(function() {
						$(".tooltip-overlay.open h4:first-child,.tooltip-overlay.open .tooltip-anchor-heading").attr("tabindex", "0").focus()
					}, 50)
				})
			},
			closeToolTip: function() {
				$(".tooltip-overlay").hasClass("open") && ($(".tooltip-overlay.open").find(".arrow-focus").removeAttr("style"), $(".tooltip-overlay.open").addClass("hide").removeClass("open"), $(".tooltip-opener.open-tooltip").focus().removeClass("open-tooltip"), $(".tooltip-overlay").find(".custom-focus").remove())
			},
			tooltipPosition: function() {
				var e = $(".main-content .custom-main-content").length ? $(".custom-main-content") : $(".main-content");
				$(".tooltip-overlay.open").removeClass("hide");
				var o = $(".tooltip-overlay.open").outerHeight(),
					t = $(".tooltip-opener.open-tooltip").outerHeight(),
					n = $(".tooltip-opener.open-tooltip").offset(),
					a = n.top - (o + 18),
					i = n.top - $(window).scrollTop(),
					s = $(window).height() / 2,
					r = e.offset().left + e.outerWidth();
				$(".tooltip-overlay.open .arrow-focus").show(), $(".tooltip-overlay.open .arrow-focus-down").hide();
				var l = n.top + t + 18,
					p = $(".tooltip-overlay.open").outerWidth(),
					t = n.left - 2;
				r < p + t ? (r = p + t - r, arrowLeft = t, d = 0, 729 < getWin() && (d = 5), t = t - r - parseInt(e.css("padding-right")) - d, custArrowLeft = arrowLeft - 5 - t, $(".arrow-focus, .arrow-focus-down").css("left", custArrowLeft + "px")) : $(".arrow-focus, .arrow-focus-down").css("left", "0px");
				var d = 0;
				if ($(".tooltip-opener.open-tooltip .icon-help").length && $(".tooltip-opener.open-tooltip").width() < 25 && (d = 27), getWin() < 730 && !$(".tooltip-overlay.new-reference-modal-tooltip").hasClass("open")) return $(".tooltip-overlay.open").removeAttr("style"), void(c && u());
				$(".tooltip-opener.open-tooltip").hasClass("down") ? ($(".tooltip-overlay.open").offset({
					top: l,
					left: t - d
				}), $(".tooltip-overlay.open").find(".arrow-focus-down").hide(), $(".tooltip-overlay.open").find(".arrow-focus").show()) : ($(".tooltip-overlay.open").offset({
					top: a,
					left: t - d
				}), $(".tooltip-overlay.open").find(".arrow-focus-down").show(), $(".tooltip-overlay.open").find(".arrow-focus").hide()), $(".tooltip-overlay.new-reference-modal-tooltip").hasClass("open") && (i < s ? ($(".tooltip-overlay.open").offset({
					top: l,
					left: t - d
				}), $(".tooltip-overlay.open").find(".arrow-focus-down").hide(), $(".tooltip-overlay.open").find(".arrow-focus").show()) : ($(".tooltip-overlay.open").offset({
					top: a,
					left: t - d
				}), $(".tooltip-overlay.open").find(".arrow-focus-down").show(), $(".tooltip-overlay.open").find(".arrow-focus").hide(), o >= n.top && ($(".tooltip-overlay.open").offset({
					top: l,
					left: t - d
				}), $(".tooltip-overlay.open").find(".arrow-focus-down").hide(), $(".tooltip-overlay.open").find(".arrow-focus").show())))
			}
		}
	}(),
	cookieData = {
		site: "card"
	},
	siteObj = {
		card: "Credit Card",
		"Credit Card": "card",
		bank: "Bank Account",
		"Bank Account": "bank",
		studentLoans: "Student Loans",
		"Student Loans": "studentLoans",
		personalLoans: "Personal Loans",
		"Personal Loans": "personalLoans",
		"Identity Theft Protection": "identityTheftProtection",
		identityTheftProtection: "Identity Theft Protection"
	},
	createCookie = function(e, o, t) {
		var n = t ? ((n = new Date).setTime(n.getTime() + 24 * t * 60 * 60 * 1e3), "; expires=" + n.toGMTString()) : "";
		document.cookie = e + "=" + o + n + "; path=/"
	},
	readCookie = function(e) {
		for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
			for (var a = t[n];
				" " == a.charAt(0);) a = a.substring(1, a.length);
			if (0 === a.indexOf(o)) return a.substring(o.length, a.length)
		}
		return null
	},
	eraseCookie = function(e) {
		createCookie(e, "", -1)
	},
	changedDropdown = !1,
	setLoginInput = function() {},
	loginBox = {
		loginAction: $(".login-container").find("form").attr("action"),
		loginForm: $("#login-form"),
		hiddenInput: $("input[name=accountType]"),
		defaultAccountType: $("input[name=defaultAccountType]"),
		mUserId: $("#userid-content"),
		mCheckBox: $("#id-checkbox"),
		modalUserId: $("#userid"),
		modalDropDown: $(".ui-selectmenu-text"),
		isLoginFormSubmitted: !1,
		userid: "",
		useridVal: "",
		password: "",
		cardType: $(".choose-card"),
		cardTypeVal: null,
		rememberMe: $(".remember-id"),
		loginErrorMsg: "",
		logInButton: $(".log-in-button"),
		loginBoxCloseLink: $(".login-box-modal .close-link"),
		rememberInst: null,
		cardTypeLabel: "",
		capsIconShow: !1,
		init: function() {
			loginBox.CheckCapsLock(), loginBox.dropDownState(), $(".choose-card").selectmenu(), loginBox.getValues("content-login"), loginBox.rememberInst.parents(".micro-animation").length && loginBox.animateCheckbox(loginBox.rememberInst.parent(".icon-checkbox")), loginBox.setEvents(), $(window).resize(function(e) {
				0 < $(".ui-selectmenu-open").length && dropDown.posDropDown()
			}), $(".modal,.modal-body").on("scroll", function(e) {
				0 < $(".ui-selectmenu-open").length && dropDown.posDropDown()
			}), loginBox.setSiteVal(), $(".content-login #login-form-content").attr("name", "loginForm"), $(".content-login #pm_fp").attr("value", $(".modal-login #pm_fp").val()), $(".content-login #ssid").attr("value", $(".modal-login #ssid").val()), 0 < $(".login-container select").length && $("select").each(function() {
				$("#" + $(this).attr("id") + "-menu").parent().addClass("dropdown-style")
			})
		},
		animateCheckbox: function(e) {
			left = 8 == ieVersion ? 4 : 7, e.hasClass("selected") ? e.animate({
				width: "10px",
				borderColor: "#ff6600",
				borderRightWidth: "2px",
				borderBottomWidth: "2px",
				borderLeftWidth: "0",
				borderTopWidth: "0",
				left: left + "px",
				height: "20px"
			}, {
				duration: 200,
				step: function() {
					e.css({
						transform: "rotate(35deg)",
						"-o-transform": "rotate(35deg)",
						"-moz-transform": "rotate(35deg)",
						"-webkit-transform": "rotate(35deg)",
						"-ms-filter": "progid:DXImageTransform.Microsoft.Matrix(SizingMethod='auto expand', M11=0.57357643635104, M12=-0.57357643635104, M21=0.57357643635104, M22=0.57357643635104)",
						filter: "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=0.57357643635104, M12=-0.57357643635104, M21=0.57357643635104, M22=0.57357643635104)"
					})
				}
			}) : e.animate({
				width: "24px",
				borderRightWidth: "2px",
				borderBottomWidth: "2px",
				borderLeftWidth: "2px",
				borderTopWidth: "2px",
				borderColor: "black",
				left: 0,
				height: "24px"
			}, {
				duration: 200,
				step: function() {
					e.css({
						transform: "rotate(0deg)",
						"-o-transform": "rotate(0deg)",
						"-moz-transform": "rotate(0deg)",
						"-webkit-transform": "rotate(0deg)",
						"-ms-filter": "progid:DXImageTransform.Microsoft.Matrix(M11=1, M12=0, M21=0, M22=1, SizingMethod='auto expand')",
						filter: "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)"
					})
				}
			})
		},
		setDropDown: function() {
			function e(e, o) {
				void 0 !== e && "" !== e ? (loginBox.modalUserId.val(e), "" != loginBox.modalUserId.val() ? $(".modal-login.micro-animation .user-id-input").prev("label").css({
					top: "-2px",
					"font-size": "11px"
				}) : $(".modal-login.micro-animation .user-id-input").prev("label").css({
					top: "18px",
					"font-size": "15px"
				}), loginBox.rememberInst.prop("checked", !0), loginBox.rememberInst.parent(".icon-checkbox").addClass("selected"), loginBox.rememberInst.parents(".micro-animation").length && loginBox.animateCheckbox(loginBox.rememberInst.parent(".icon-checkbox")), 0 == loginBox.defaultAccountType.length && (readCookie("mcuid") ? loginBox.mUserId.val(readCookie("mcuid")) : $(".custom-checkbox .icon-checkbox").removeClass("selected")), 0 < loginBox.defaultAccountType.length && "Identity Theft Protection" == loginBox.defaultAccountType.val() && (readCookie("mpiuid") ? loginBox.mUserId.val(readCookie("mpiuid")) : $(".custom-checkbox .icon-checkbox").removeClass("selected"))) : loginBox.clearForm(), null !== loginBox.cardTypeVal && (loginBox.cardTypeLabel.text(o), loginBox.cardType.val(o))
			}
			var o;
			switch (cookieData.site) {
				case "card":
					(o = readCookie("mcuid")) && e(o, "Credit Card");
					break;
				case "bank":
					(o = readCookie("mbuid")) && e(o, "Bank Account");
					break;
				case "identityTheftProtection":
					(o = readCookie("mpiuid")) && e(o, "Identity Theft Protection");
					break;
				case "studentLoans":
					e(cookieData.sid, "Student Loans");
					break;
				case "personalLoans":
					(o = readCookie("mbuid")) && e(o, "Personal Loans")
			}
			loginBox.updateForm(siteObj[cookieData.site])
		},
		setSiteVal: function() {
			0 < loginBox.defaultAccountType.length ? (defaultLoginDropdown = loginBox.defaultAccountType.val(), cookieData.site = readCookie("siteValue") ? readCookie("siteValue") : siteObj[defaultLoginDropdown], loginBox.updateForm(defaultLoginDropdown)) : cookieData.site = readCookie("siteValue") ? readCookie("siteValue") : "card", loginBox.setDropDown()
		},
		getValues: function(e) {
			loginBox.userid = $("." + e + " .userid"), loginBox.password = $("." + e + " input[name='password']"), loginBox.loginForm = $("." + e + " form"), 0 === $("." + e).find(".select-box-wrapper").length || "true" == $("." + e).find(".select-box-wrapper").hasClass("hide") ? loginBox.cardType = null : (loginBox.cardType = $("." + e + " .choose-card"), loginBox.cardTypeVal = loginBox.cardType.val(), loginBox.cardTypeLabel = $("." + e + " .ui-selectmenu-text")), loginBox.rememberInst = $("." + e + " .remember-id"), loginBox.loginErrorMsg = $("." + e + " .errors")
		},
		clearForm: function() {
			$(".modal-login .userid").val(""), $(".modal-login .password").val(""), $(".modal-login.micro-animation .userid").prev("label").css({
				top: "18px",
				"font-size": "15px"
			}), $(".modal-login.micro-animation .password").prev("label").css({
				top: "18px",
				"font-size": "15px"
			}), $(".modal-login .errors").hide(), "card" == cookieData.site && loginBox.hiddenInput.val("Credit Card"), loginBox.rememberInst.attr("checked", !1).parent().removeClass("selected"), loginBox.rememberInst.parents(".micro-animation").length && loginBox.animateCheckbox(loginBox.rememberInst.parent(".icon-checkbox"))
		},
		updateForm: function(e) {
			loginBox.userid.attr("name", "userID"), loginBox.rememberInst.attr("name", "rememberId"), loginBox.password.attr("name", "password"), loginBox.loginForm.removeAttr("onsubmit"), $("input").remove(".bmtype"), "Credit Card" === e ? ($("#userTypeCode1").val("C"), loginBox.loginForm.attr("action", "https://portal.discover.com/customersvcs/universalLogin/signin?"), loginBox.rememberInst.attr("name", "rememberOption")) : "Bank Account" === e ? ($("#userTypeCode1").val("B"), loginBox.loginForm.attr("action", "https://portal.discover.com/customersvcs/universalLogin/signin?"), loginBox.rememberInst.attr("name", "rememberOption")) : "Personal Loans" === e ? ($("#userTypeCode1").val("B"), loginBox.hiddenInput.val("personalLoans"), loginBox.loginForm.attr("action", "https://portal.discover.com/customersvcs/universalLogin/signin?"), loginBox.userid.attr("name", "userID"), loginBox.rememberInst.attr("name", "rememberOption")) : "Student Loans" === e ? (loginBox.userid.attr("name", "UserID"), loginBox.password.attr("name", "UserPWD"), loginBox.loginForm.attr("action", "https://www.discoverstudentloans.com/MFA/EnterUsername.aspx?ReturnUrl=/THEOOnline/login.asp?DEST=THEO"), loginBox.loginForm.attr("onsubmit", "return bmak.form_submit();"), loginBox.loginForm.append('<input class="bmtype" type="hidden" name="bm-telemetry"/>'), loginBox.rememberInst.attr("name", "rememberOption")) : "Identity Theft Protection" === e ? (loginBox.loginForm.attr("action", "https://portal.discover.com/customersvcs/universalLogin/signin?"), $("#userTypeCode1").val("P"), loginBox.rememberInst.attr("name", "rememberOption")) : $("#userTypeCode1").val("")
		},
		setEvents: function() {
			loginBox.logInButton.on(consts.tapEvnt, function(e) {
				if ($(".modal.login-modal").hasClass("in") && loginBox.rememberInst.is(":checked") && createCookie("siteValue", cookieData.site, 365), !$(".modal.login-modal").hasClass("in") && loginBox.rememberInst.is(":checked") && createCookie("siteValue", cookieData.site, 365), "Home Loans" == $(this).parents(".login-container").find(".ui-selectmenu-text").text()) return window.location.href = "https://www.discover.com/home-equity-loans/select-loan-status/", loginBox.loginForm.attr("action", "https://www.discover.com/home-equity-loans/select-loan-status/"), !1;
				var o, t = $(this).parents(".login-container").attr("data-id");
				if (loginBox.checkForBlankField(), ($("." + t).hasClass("modal-login") || $("." + t).hasClass("login-container content-login")) && (o = [], 0 === loginBox.userid.val().length && o.push($(loginBox.userid).attr("data-content")), 0 === loginBox.password.val().length && o.push($(loginBox.password).attr("data-content")), null !== loginBox.cardType && "0" === loginBox.cardTypeVal && o.push("Select an Account"), 0 < o.length && scLoginOverlay.sitecatLoginError(o)), 0 < $("." + t + " .show-error").length) return !1;
				if (loginBox.isLoginFormSubmitted) return !1;
				if (loginBox.isLoginFormSubmitted = !0, null === readCookie("marqueeStatus") && (createCookie("marqueeIndex", "1010", 365), createCookie("marqueeStatus", "known", 365)), loginBox.rememberInst.is(":checked") || ("card" == cookieData.site && (readCookie("mbuid") ? createCookie("siteValue", "bank", 365) : createCookie("siteValue", "identityTheftProtection", 365)), "bank" != cookieData.site && "personalLoans" != cookieData.site || (readCookie("mcuid") ? createCookie("siteValue", "card", 365) : createCookie("siteValue", "identityTheftProtection", 365)), "identityTheftProtection" == cookieData.site && (readCookie("mbuid") ? createCookie("siteValue", "bank", 365) : createCookie("siteValue", "card", 365)), null != readCookie("mcuid") && null != readCookie("mbuid") && null != readCookie("mpiuid") || createCookie("siteValue", "", 365)), ($("." + t).hasClass("modal-login") || $("." + t).hasClass("login-container content-login")) && (t = $("." + t + " .choose-card").val(), loginBox.rememberInst.is(":checked") ? scLoginOverlay.sitecatLoginClicked(t, "Yes") : scLoginOverlay.sitecatLoginClicked(t, "No")), !loginBox.rememberInst.is(":checked")) switch (cookieData.site) {
					case "card":
						eraseCookie("mcuid");
						break;
					case "bank":
						eraseCookie("mbuid");
						break;
					case "studentLoans":
						eraseCookie("sid");
						break;
					case "personalLoans":
						eraseCookie("mbuid");
						break;
					case "identityTheftProtection":
						eraseCookie("mpiuid");
						break;
					case "homeLoans":
						eraseCookie("mhuid")
				}
			}), $(document).on(consts.tapEvnt, ".log-in-link,.log-back-link,.log-back-in-button", function() {
				scLoginOverlay.sitecatPageload(), loginBox.getValues("modal-login"), loginBox.removepopovers(loginBox.userid), loginBox.removepopovers(loginBox.password);
				readCookie("dcuserid");
				var e = readCookie("mcuid") ? readCookie("mcuid") : "",
					o = readCookie("mpiuid") ? readCookie("mpiuid") : "",
					t = readCookie("mbuid") ? readCookie("mbuid") : "";
				"" != e || "" != o || "" != t ? $(".modal-login.micro-animation .user-id-input").prev("label").css({
					top: "-2px",
					"font-size": "11px"
				}) : loginBox.clearForm(), loginBox.setSiteVal(), loginBox.setDropDown(), 0 == loginBox.defaultAccountType.length && ("" == loginBox.hiddenInput.val() || "Credit Card" == loginBox.hiddenInput.val()) && 0 < $(".choose-card").length && "card" == cookieData.site && (readCookie("mcuid") ? loginBox.modalUserId.val(readCookie("mcuid")) : loginBox.clearForm(), $(".ui-selectmenu-text").text("Credit Card"), $(".choose-card").val("Credit Card")), 0 < loginBox.defaultAccountType.length && "Identity Theft Protection" == loginBox.defaultAccountType.val() && 0 < $(".choose-card").length && "identityTheftProtection" == cookieData.site && (readCookie("mpiuid") ? loginBox.modalUserId.val(readCookie("mpiuid")) : (loginBox.modalUserId.val(""), $(".modal-login.micro-animation .userid").prev("label").css({
					top: "18px",
					"font-size": "15px"
				}), loginBox.rememberInst.parents(".micro-animation").length && loginBox.animateCheckbox(loginBox.rememberInst.parent(".icon-checkbox"))), $(".ui-selectmenu-text").text("Identity Theft Protection"), $(".choose-card").val("Identity Theft Protection"))
			}), doc.on(consts.tapEvnt, ".deepLink", function() {
				var e;
				$(".login-container").find("form").attr("action").indexOf("?") < 0 ? (e = $(this).attr("href"), $(".login-container").find("form").attr("action", $(".login-container").find("form").attr("action") + "?link=" + e)) : (e = $(this).attr("href"), $(".login-container").find("form").attr("action", $(".login-container").find("form").attr("action") + "&link=" + e))
			}), $(document).on("focus", ".userid,.password", function(e) {
				loginBox.capsIconShow ? $(this).siblings(".icon-caps-lock").removeClass("invisible") : $(this).siblings(".icon-caps-lock").addClass("invisible"), $(this).parent(".input-wrapper").hasClass("show-error") && loginBox.showpopovers($(this))
			}).on("blur", ".userid,.password", function(e) {
				$(this).siblings(".icon-caps-lock").addClass("invisible"), $(this).parent(".input-wrapper").hasClass("show-error") && loginBox.removepopovers($(this))
			}).on("keyup", ".userid,.password", function(e) {
				loginBox.capsIconShow ? $(this).siblings(".icon-caps-lock").removeClass("invisible") : $(this).siblings(".icon-caps-lock").addClass("invisible"), 0 !== $(this).val().length && (loginBox.removeErrors($(this)), loginBox.removepopovers($(this)), 0 === $(this).parents(".login-container").find(".show-error").length && ($(this).parents(".login-container").find(".errors").hide().attr({
					tabindex: -1,
					"aria-hidden": !0
				}), 1 == $(this).parents(".homepage-login-box").length && $(".icon-drop-arrow").removeClass("account-arrow-hide"), $(this).parents(".login-container").hasClass("content-login") && loginBox.userid.parents(".login-container").removeClass("login-error")))
			}), $(".choose-card").on("selectmenuchange", function(e, o) {
				var t = loginBox.userid.parents(".login-container");
				loginBox.cardTypeVal = loginBox.cardType.val(), loginBox.rememberInst.attr("checked", !1), loginBox.rememberInst.parent(".icon-checkbox").removeClass("selected"), loginBox.rememberInst.parents(".micro-animation").length && loginBox.animateCheckbox(loginBox.rememberInst.parent(".icon-checkbox")), "0" !== loginBox.cardTypeVal ? (loginBox.hiddenInput.val(loginBox.cardType.val()), $("#" + loginBox.cardType.attr("id") + "-menu").parent().removeClass("on-error"), loginBox.cardType.parents(".select-box-wrapper").removeClass("show-error"), loginBox.removepopovers(loginBox.cardType), 0 !== $(e.target).parents(".login-container").find(".userid").val().length && 0 !== $(e.target).parents(".login-container").find(".password").val().length && (loginBox.loginErrorMsg.hide().attr({
					tabindex: -1,
					"aria-hidden": !0
				}), t.hasClass("content-login") && t.removeClass("login-error")), o = o.item.label, cookieData.site = siteObj[o], loginBox.updateForm(o), loginBox.setDropDown()) : (loginBox.cardTypeLabel.text("Select an Account"), loginBox.hiddenInput.val("")), 0 === $(this).parents(".login-container").find(".show-error").length && ($(this).parents(".login-container").find(".errors").hide().attr({
					tabindex: -1,
					"aria-hidden": !0
				}), 1 == $(this).parents(".homepage-login-box").length && $(".icon-drop-arrow").removeClass("account-arrow-hide"), $(this).parents(".login-container").hasClass("content-login") && loginBox.userid.parents(".login-container").removeClass("login-error")), 1 == $(e.target).parents(".homepage-login-box").length && 0 === $(e.target).parents("form").find(".show-error").length && $(".icon-drop-arrow").removeClass("account-arrow-hide")
			}), loginBox.loginBoxCloseLink.on("click tap", function(e) {
				scLoginOverlay.sitecatCloseCliked(), $(".login-container").find("form").attr("action", loginBox.loginAction), loginBox.setSiteVal(), $(this).parents(".login-box-modal").find(".input-wrapper, .select-box-wrapper").removeClass("show-error"), $("#" + loginBox.cardType.attr("id") + "-menu").parent().removeClass("on-error"), loginBox.loginErrorMsg.hide().attr({
					tabindex: -1,
					"aria-hidden": !0
				}), loginBox.getValues("content-login")
			})
		},
		checkForBlankField: function() {
			loginBox.userid.parents(".login-container").attr("data-id");
			var e = loginBox.userid.parents(".login-container"),
				o = !1;
			0 === loginBox.userid.val().length ? (o = !0, loginBox.showErrors(loginBox.userid), loginBox.userid.popover("destroy")) : loginBox.removeErrors(loginBox.userid), 0 === loginBox.password.val().length ? (o = !0, loginBox.showErrors(loginBox.password), loginBox.password.popover("destroy")) : loginBox.removeErrors(loginBox.password), null !== loginBox.cardType && ("0" === loginBox.cardTypeVal ? (o = !0, $("#" + loginBox.cardType.attr("id") + "-menu").parent().addClass("on-error"), loginBox.cardType.parents(".select-box-wrapper").addClass("show-error")) : ($("#" + loginBox.cardType.attr("id") + "-menu").parent().removeClass("on-error"), loginBox.cardType.parents(".select-box-wrapper").removeClass("show-error"))), o && (e.hasClass("content-login") && e.addClass("login-error"), loginBox.loginErrorMsg.show().attr({
				tabindex: 0,
				"aria-hidden": !1
			}).focus())
		},
		showpopovers: function(e) {
			e.popover({
				placement: "bottom",
				trigger: "manual"
			}).on("click", function() {
				return !1
			}).popover("show"), $(".popover .popover-title").attr("aria-hidden", "true"), "#choose-card" == e.selector && e.next().addClass("select-popover")
		},
		removepopovers: function(e) {
			e.popover("destroy")
		},
		showErrors: function(e) {
			e.parents(".input-wrapper").addClass("show-error")
		},
		removeErrors: function(e) {
			e.parents(".input-wrapper").removeClass("show-error")
		},
		dropDownState: function() {
			var e = $("#account-dropdown-state").val();
			"show" == e ? $(".login-container .select-box-wrapper").removeClass("hide") : "hide" == e && ($(".login-container .select-box-wrapper").addClass("hide"), $(".login-container select.choose-card").attr("disabled", "disabled"))
		},
		loginTo: function() {
			var e = $("#log-in-to").val(),
				o = $("#deep-link-url").val();
			"" !== e && "hide" == $("#account-dropdown-state").val() ? ($(".login-container .login-page").text(e), "" !== $("#deep-link-url").val() && $(".login-container").find("form").attr("action", $(".login-container").find("form").attr("action") + "?link=" + o)) : $(".login-container .login-page").hide()
		},
		CheckCapsLock: function() {
			document.msCapsLockWarningOff = !0, $(window).bind("capsOn && $(document.activeElement).siblings('.icon-caps-lock')", function(e) {
				9 < ieVersion || null == ieVersion ? loginBox.capsIconShow = !0 : document.msCapsLockWarningOff = !1
			}), $(window).bind("capsOff", function(e) {
				loginBox.capsIconShow = !1
			}), $(".icon-caps-lock").addClass("invisible"), discover_rwd.utility.initCapsLock()
		}
	},
	secNav = function() {
		var o = function() {
				var e;
				0 < $(".secondary-nav").length && (e = $(".secondary-nav"), t(e)), 0 < $(".page-nav").length && (e = $(".page-nav"), t(e)), n()
			},
			t = function(i) {
				i.find(".nav-select").off(consts.tapEvnt), i.find(".nav li a").off(consts.tapEvnt);
				var s = getWin();
				i.find(".nav-select").hide();
				var e = i.width();
				if ($(".secondary-nav-content .tab-pane").hide(), $(".secondary-nav-content .tab-pane.active").show(), i.find(".nav-tabs").hide(), i.find(".nav-select").find("span").removeClass("up-arrow"), 0 < i.hasClass("global-page-nav") && (i.addClass("in-page-secondary-nav"), i.find(".nav-tabs-list").addClass("in-page")), s < 486) {
					i.find(".nav-select").show(), i.find(".nav-tabs").hide(), i.find(".nav-tabs-list").hide(), i.find(".nav-tabs li").show();
					var o = (0 < i.find("ul.nav-tabs-list").length ? i.find("ul.nav-tabs-list") : i.find("ul.nav-tabs")).children("li.active").index(),
						t = i.find("ul.nav-tabs li");
					$(t[o]).addClass("active").find("span").addClass("orange-border"), i.find("#nav-label .nav-label-text").show().text(i.find("ul.nav-tabs").children("li.active").find("a").text()), $(".tabs.page-nav .nav-select").height($("div#nav-label").outerHeight())
				} else {
					var n = $(".secondary-nav-content .tab-pane"),
						o = $(".secondary-nav-content").children(".active").index();
					$(".secondary-nav-content .tab-pane").removeClass("active"), $(n[o]).addClass("active"), i.find("ul.nav-tabs-list").length;
					n = i.find("ul.nav-tabs"), o = $(n).children("li.active").index();
					t = i.find("ul.nav-tabs-list li");
					n = i.find("ul.nav-tabs li");
					$(t[o]).addClass("active").find("span").addClass("orange-border"), $(n[o]).addClass("active").find("span").addClass("orange-border"), i.find(".nav-tabs-list").show(), i.find("#nav-label .nav-label-text").hide();
					var a = 0 < i.find("nav-select").length ? parseInt((e - 60) / 176) : parseInt(e / 176),
						r = i.find(".nav-tabs").children().length;
					0 === i.find("#nav-label ul").length && (i.find("#nav-label").append('<ul class="nav nav-tabs-list" role="tablist"> </ul>'), i.find("#nav-label .nav-tabs-list").html(i.find(".nav-tabs").html()), 0 < i.hasClass("global-page-nav") && (i.addClass("in-page-secondary-nav"), i.find(".nav-tabs-list").addClass("in-page"))), 0 < i.find(".nav-tabs-list.in-page").length ? (i.find(".nav-select").addClass("in-page-select"), n = i.find(".nav-tabs-list.in-page").children().length, p = i.find(".nav-tabs-list.in-page li"), n < 6 ? (o = (e - n) / n, n = parseInt((e - 60) / o), p.css("width", o + "px"), i.find(".nav-tabs-list.in-page").css("borderRight", "1px solid #DBDBDB"), $(p).removeClass("last-tab"), $(p[n]).addClass("last-tab")) : (p.css("width", "176px"), $(p).removeClass("last-tab"), $(p[a - 1]).addClass("last-tab")), $(p[p.length - 1]).css("borderRightWidth", 0)) : i.find(".nav-select").removeClass("in-page-select"), i.find("#nav-label .nav-tabs-list li").show();
					for (var l = a; l < r; l++) i.find("#nav-label .nav-tabs-list").children().eq(l).hide();
					i.find(".nav-tabs li").show();
					for (l = 0; l < a; l++) i.find(".nav-tabs").children().eq(l).hide();
					i.find(".nav-tabs").children().removeClass("first"), i.find(".nav-tabs").children().eq(a).addClass("first"), 176 * (r = i.find(".nav-tabs-list").children().length) < e ? (i.find(".nav-select").hide(), i.hasClass("secondary-nav") && i.css("borderRight", "1px solid #dbdbdb")) : (i.find(".nav-select").show(), i.hasClass("secondary-nav") && i.css("borderRight", "none"), e = (e - 60) / a, i.find("#nav-label .nav-tabs-list.in-page li").css("width", e + "px")),
						function(e) {
							e.css("height", "auto");
							var o = 0;
							e.each(function() {
								currentHeight = $(this).height(), currentHeight > o && (o = currentHeight)
							}), e.height(o), $(".tabs.page-nav .nav-select").height(o)
						}($(p))
				}
				var p = i.find(".nav-select");
				$(p).on(consts.tapEvnt, function(e) {
					var o = $(this);
					i.find(".nav-tabs").toggle(), $(this).find("span").toggleClass("up-arrow"), s < 486 ? setTimeout(function() {
						o.parents(".tabs").find(".nav-tabs li.active a").focus()
					}, 50) : setTimeout(function() {
						o.parents(".tabs").find(".nav-tabs li.first a").focus()
					}, 50)
				});
				p = i.find(".nav li a");
				$(p).on(consts.tapEvnt, function(e) {
					var o = $(this).attr("aria-controls");
					if (o) {
						var t = $(".secondary-nav-content .tab-pane");
						$(".secondary-nav-content .tab-pane").removeClass("active");
						for (var n = 0; n < t.length; n++) t[n].id == o && $(t[n]).addClass("active");
						var a = $(this).attr("href");
						$(".secondary-nav-content .tab-pane").hide().attr("aria-hidden", "true"), $(a).show().attr("aria-hidden", "false"), setTimeout(function() {
							$(".secondary-nav-content .tab-pane.active").attr("tabindex", "0").focus()
						}, 50)
					}
					i.find(".nav-tabs").hide(), i.find(".nav-select").find("span").hasClass("up-arrow") && i.find(".nav-select").find("span").toggleClass("up-arrow"), i.find(".nav li span").removeClass("orange-border"), i.find(".nav li").removeClass("active"), $(this).parent().find("span").addClass("orange-border"), $(this).parents("li").addClass("active"), i.find(".nav li a").attr("aria-selected", "false"), $(this).attr("aria-selected", "true"), s < 486 && (i.find("#nav-label .nav-label-text").html(i.find("ul.nav-tabs").find("li.active a").attr("title")), i.find(".nav.nav-tabs").hide())
				})
			},
			n = function() {
				0 === $(".tabs.secondary-nav,.tabs.page-nav").find(".nav-tabs").find(".forCustomFocus").length && $(".tabs.secondary-nav,.tabs.page-nav").find(".nav-tabs").append('<a href="#" class="forCustomFocus custom-focus preventDefaultBehaviour">.</a>'), $(".forCustomFocus").on("focus", function(e) {
					var o = $(this);
					setTimeout(function() {
						o.parents(".tabs").find(".nav-select a").attr("tabindex", "0").focus()
					}, 50)
				});
				var e = $(".tab-content").find(".tab-pane");
				$(".tab-content").find(".tab-pane .onNextTab").remove(), $(".tab-content .tab-pane").append('<a href="#" class="onNextTab custom-focus preventDefaultBehaviour">.</a>'), $(e[e.length - 1]).find(".onNextTab").remove(), $(".onNextTab").on("focus", function(e) {
					var o = $(this);
					setTimeout(function() {
						("none" !== o.parents(".tab-content").siblings(".tabs").find(".nav li.active").next("li").css("display") && 0 === o.parents(".tab-content").siblings(".tabs").find(".nav li.active").parents(".nav-tabs").length ? o.parents(".tab-content").siblings(".tabs").find(".nav li.active").next("li").find("a.tab") : o.parents(".tab-content").siblings(".tabs").find(".nav-select a")).attr("tabindex", "0").focus()
					}, 50)
				})
			},
			e = function() {
				$(window).scroll(function() {
					var e = $(window).scrollTop(),
						o = $(".page-nav").offset().top,
						t = $(".header-wrapper").outerHeight(),
						n = $(".page-nav").outerHeight();
					Math.abs(secNavLastScrollTop - e) <= 0 || (o < e && ($(".pagenav-container").addClass("stick-with-header"), $("#recent-improvement-container").css({
						"margin-top": n
					}), initialSecNavTop = o), secNavLastScrollTop < e ? $(".pagenav-container").css({
						top: "0"
					}) : e + $(window).height() < $(document).height() && (e + t <= initialSecNavTop ? ($(".pagenav-container").removeClass("stick-with-header"), $("#recent-improvement-container").css({
						"margin-top": "0"
					})) : $(".header-wrapper").hasClass("absoluteHeader") || $(".pagenav-container").css({
						top: t
					})), secNavLastScrollTop = e)
				})
			};
		return {
			init: function() {
				o(), e(), $(window).resize(function(e) {
					o()
				})
			}
		}
	}(),
	dropDown = {
		posDropDown: function() {
			var e = $(".open-dropdown").next(),
				o = e.width();
			$(".ui-selectmenu-open").css("width", o + "px"), $(".ui-selectmenu-open ul").css("width", o + "px");
			e = dropDown.getPos(e);
			$(".ui-selectmenu-open").offset({
				top: e.top,
				left: e.left
			})
		},
		getPos: function(e) {
			var o = e.offset();
			return o.top = o.top + e.height(), o
		},
		dropdownAX: function() {
			$(".select-box-wrapper select").selectmenu(), $doc.on("selectmenuchange", "select", function(e, o) {
				!1 === consts.isDevice && (e = $(e.target).attr("id"), $("#" + e + "-button").parents(".select-box-wrapper").find(".selected-val").text(o.item.label))
			}), $doc.on("focus", ".ui-selectmenu-button", function() {
				$(".ui-selectmenu-text").attr("aria-hidden", "true"), $(".ui-selectmenu-menu .ui-menu").attr("aria-labelledby", "");
				var e, o = $(this).parents(".select-box-wrapper");
				!0 === consts.isDevice && $(".ui-selectmenu-menu .ui-menu").find("li").removeAttr("id"), !1 === consts.isDevice && (e = $(this).attr("id"), $("#" + e + "-selected-val").length < 1 && ($(this).parents(".select-box-wrapper").append('<span id="' + e + '-selected-val" class="selected-val sr-only"></span>'), e = $(this).find(".ui-selectmenu-text").text(), o.find(".selected-val").text(e))), $(this).attr("aria-activedescendant", ""), $(this).attr("aria-labelledby", ""), !1 === consts.isDevice && ($(this).attr("aria-label", o.find("label").text()), $(this).attr("aria-describedby", o.find(".selected-val").attr("id")))
			}), $doc.on("keydown", ".ui-selectmenu-menu .ui-menu li", function(e) {
				9 === (e.keyCode || e.which) && e.preventDefault()
			}), $doc.on("focus", ".select-access-pre", function(e) {
				var o = $(this).parent();
				setTimeout(function() {
					o.find(".ui-menu li:first").attr("tabindex", 0).focus()
				}, 50)
			}), $doc.on("focus", ".ui-selectmenu-menu .ui-state-focus, .ui-selectmenu-open ul li:first-child, .ui-selectmenu-open ul li:last-child", function(e) {
				e.stopPropagation()
			})
		}
	};
$(function() {
		tooltip.init(), modal.init();
		var e = 0 < $("#ssid").length,
			o = 0 < $("#pm_fp").length,
			t = 0 < $(".page-nav").length,
			n = 0 < $(".secondary-nav").length;
		o && post_fingerprintsnoencode(), e && $("#ssid").val("DefaultSSID_SCRIPT"), $("select").on("selectmenuopen", function(e, o) {
			$(this).addClass("open-dropdown"), dropDown.posDropDown();
			var t = $(e.target).attr("id");
			$("#" + t + "-menu").parent(".ui-selectmenu-open").addClass(t + "-menu-wrapper"), $("#" + t + "-menu.ui-menu li").removeAttr("tabindex"), $("#" + t).parents(".micro-animation").length || setTimeout(function() {
				$("#" + t + "-menu.ui-menu li.ui-state-focus").attr("tabindex", 0).focus()
			}, 50), consts.isDevice && ($("#" + t + "-menu.ui-menu li").attr("tabindex", 0), e = "<a href='#' class='preventDefaultBehaviour custom-focus select-access-pre'>.</a>", $("#" + t + "-menu").next().hasClass("select-access-pre") || $("#" + t + "-menu").parent().append(e).prepend(e))
		}), $("select").on("selectmenuclose", function(e, o) {
			$(this).removeClass("open-dropdown");
			var t = $(e.target).attr("id");
			setTimeout(function() {
				$("#" + t + "-button").attr("tabindex", 0).focus()
			}, 50)
		}), dropDown.dropdownAX(), fileBB(), customInputs.init(), loginBox.init(), $("span.ui-selectmenu-button").attr("aria-required", "true"), (n || t) && secNav.init(), discover_rwd.utility.desktopTelephoneDisabled(), -1 != location.href.indexOf("discover.com") && discover_rwd.utility.initJsonld()
	}),
	function() {
		var r = {
			submitForm: function() {
				$("#predict-input").val($.trim($(this).find("a").attr("data-search"))), $("#suggestion_form").submit()
			},
			getSuggestions: function() {
				var i, s = $.trim($("#predict-input").val());
				1 <= s.length ? ((i = new XMLHttpRequest).overrideMimeType("application/json"), i.open("POST", "https://discover.api.attiviocloud.com/rest/autocompleteApi/richPost/dictionaryProvider?apikey=uKe4hEzgtKc4Wu20j9kZzY9LjMQXSwW5", !0), i.setRequestHeader("Content-type", "application/json"), i.onreadystatechange = function() {
					if (4 == i.readyState && "200" == i.status) {
						var e = JSON.parse(i.responseText),
							o = "";
						$("#search-suggestions").html("");
						for (var t = 0; t < e.length; t++) {
							var n = "",
								a = e[t].label.search(s.toLowerCase());
							(n = $('<li role="presentation"><a role="menuitem" href="javascript:void(0);" data-search="' + e[t].label + '" >' + e[t].label.substring(0, a) + '<span class="data-higlight">' + e[t].label.substring(a, a + s.length) + "</span>" + e[t].label.substring(a + s.length) + "</a></li>")).click(r.submitForm), $("#search-suggestions").append(n)
						}
						o = "" != $.trim($("#search-suggestions").html()) ? ($("#search-suggestions").css("display", "block"), $("#search-suggestions li").length + " results are available.") : ($("#search-suggestions").css("display", "none"), "No search results"), $("body").find("[aria-live]").text(o)
					} else 4 == i.readyState && i.status
				}, i.send('{"query":"' + s + '","rows":"10"}')) : ($("#search-suggestions").html("").css("display", "none"), $("body").find("[aria-live]").text(""))
			}
		};
		$(function() {
			$("#predict-input").bind("cut copy paste contextmenu", function(e) {
				e.preventDefault()
			}), $("body").on("keypress", "#predict-input", function(e) {
				var o = "&*_-!@#$%^`()+={}:?[]\\/,;<=>;'|.~";
				for (i = 0; i < o.length; i++) 0 === e.which || e.ctrlKey || e.metaKey || e.altKey || o.charAt(i) !== String.fromCharCode(e.which) && '"' !== String.fromCharCode(e.which) || e.preventDefault()
			}), $("body").on("keyup", "#predict-input", function(o) {
				var t = (window.event || e).keyCode;
				38 == t || 40 == t || 9 == t ? (38 == t && $("#search-suggestions li").length && ($("#search-suggestions li").hasClass("focused-item") ? $("#search-suggestions li:first").hasClass("focused-item") ? ($("#search-suggestions li:last").addClass("focused-item"), $("#search-suggestions li:first").removeClass("focused-item")) : (currentFocusedItem = $("#search-suggestions .focused-item"), $("#search-suggestions li").removeClass("focused-item"), currentFocusedItem.prev().addClass("focused-item")) : $("#search-suggestions li:first").addClass("focused-item"), $("#predict-input").val($.trim($("#search-suggestions .focused-item a").attr("data-search")))), 40 == t && $("#search-suggestions li").length && ($("#search-suggestions li").hasClass("focused-item") ? $("#search-suggestions li:last").hasClass("focused-item") ? ($("#search-suggestions li:first").addClass("focused-item"), $("#search-suggestions li:last").removeClass("focused-item")) : (currentFocusedItem = $("#search-suggestions .focused-item"), $("#search-suggestions li").removeClass("focused-item"), currentFocusedItem.next().addClass("focused-item")) : $("#search-suggestions li:first").addClass("focused-item"), $("#predict-input").val($.trim($("#search-suggestions .focused-item a").attr("data-search"))))) : ($("body").find("[aria-live]").text(""), r.getSuggestions())
			}), $("body").on("mouseenter", "#search-suggestions li", function() {
				$("#predict-input").val($.trim($(this).find("a").attr("data-search"))), $("#search-suggestions li").removeClass("focused-item"), $(this).addClass("focused-item")
			})
		})
	}();
var didScroll, utils, appFunctions, discover_rwd = window.discover_rwd || {},
	lastScrollTop = 0,
	previousScrollTop = 0,
	delta = 5,
	navbarHeight = $(".header-wrapper").outerHeight(),
	ua = window.navigator.userAgent,
	$doc = $(document); - 1 != (ua = ua.toLowerCase()).indexOf("safari") && (-1 < ua.indexOf("chrome") || $(window).on("pageshow", function(e) {
	e.originalEvent.persisted && window.location.reload()
})), discover_rwd.hdrFtr = function() {
	init = function() {
		appFunctions.headerFooter.setEvent(), appFunctions.headerFooter.headerInit(), appFunctions.headerFooter.initHeaderAx(), appFunctions.headerFooter.prependSkip()
	}, appFunctions = {
		headerFooter: {
			setEvent: function() {
				$(".js_disabledflyout").removeClass("js_disabledflyout")
			},
			headerInit: function() {
				appFunctions.headerFooterUtility.preventDefaultBehaviour(".preventDefaultBehaviour"), appFunctions.headerFooterUtility.init(), appFunctions.initsearch.init(), this.setHeaderTopPosition = function() {
					var e = $(".header-wrapper").outerHeight();
					($(".header-wrapper").hasClass("absoluteHeader") ? $(".header-wrapper").css({
						top: -e
					}) : $(".header-wrapper")).removeClass("absoluteHeader"), setTimeout(function() {
						$(".header-wrapper").removeClass("absoluteHeader").addClass("animation")
					}, 350)
				}, this.hideHeaderMenu = function() {
					$(".header-content .open").removeClass("open"), this.setHeaderTopPosition(), $("body").hasClass("panel-open") && $(".header-wrapper").removeClass("show-menu")
				}, this.closeLeftPanel = function() {
					$(".left-panel").animate({
						bottom: navbarHeight
					}, 400), $("body").removeClass("panel-open"), $(".left-panel").removeClass("show-panel").attr("aria-hidden", "true"), $(".left-panel .dropdown").removeClass("open"), $(".header-wrapper").removeClass("show-menu"), $(".panel-ax-menu").parent().remove(), $(".header-content .panel-ax-top, .header-content .panel-ax-bottom, .header-content .custom-focus").remove(), $(".credit-list-opener .icon-plus, .bank-list-opener .icon-plus, .home-list-opener .icon-plus").removeClass("icon-minus"), $(".credit-list-opener,.bank-list-opener,.home-list-opener").parent("li").removeClass("open-list"), $(".panel-opener").attr("aria-expanded", "false").removeClass("panel-left-open").find(".device-menu").html("<i class='icon-toggle'></i>Menu"), $(".left-panel .search-tab").find("#search_overlay").parent().siblings(".custom-focus").remove(), $(".left-panel .search-tab").find("#search_overlay").remove(), $(".right-nav .search-tab").find("#search_overlay").length || $(".right-nav .search-tab").append(a), appFunctions.initsearch.init()
				}, this.showFlyout = function(e, o) {
					"suggestion_form-dropdown" !== e.attr("id") && (e.hasClass("open") ? ($(".open").removeClass("open"), $(".header-wrapper").removeClass("absoluteHeader").addClass("animation"), appFunctions.headerFooter.setHeaderTopPosition(), e.find(".dropdown-toggle").attr("aria-expanded", "false")) : (0 < $(".panel-open").length && appFunctions.headerFooter.closeLeftPanel(), $(".open").removeClass("open"), e.addClass("open"), $(".header-wrapper").removeClass("animation"), e.find(".dropdown-toggle").attr("aria-expanded", "true"), e.find(".dropdown-menu").attr("tabindex", "-1").focus(), 0 == $(".links-list").find(".track-here").length && e.find(".links-list").append("<li role='presentation'><a href='#' class='custom-focus track-here'>.</a></li>")), o.preventDefault(), o.stopPropagation())
				};
				var a = $(".right-nav .search-tab").find("#search_overlay")[0].outerHTML;
				$(document).on("focus", ".panel-ax-top, .panel-ax-bottom", function() {
					setTimeout(function() {
						$(".panel-opener").focus()
					}, 50)
				}), $(document).on("focus", ".panel-ax-menu", function() {
					setTimeout(function() {
						$(".credit-list-opener").focus()
					}, 50)
				}), $(document).on("focus", ".before-menu-ax", function() {
					setTimeout(function() {
						$(".search-link").focus()
					}, 50)
				}), $(document).on("focus", ".track-here", function() {
					setTimeout(function() {
						$(".dropdown.open .dropdown-toggle").focus()
					}, 10)
				}), $(".dropdown").not(".search-tab").on("click tap", function(e) {
					0 < $(".panel-open").length ? appFunctions.headerFooter.closeLeftPanel() : (appFunctions.headerFooter.showFlyout($(this), e), r.sitecatHelpOpen())
				}), $(".modal-login.micro-animation .user-id-input, .modal-login.micro-animation .password-input").focus(function() {
					$(this).prev("label").animate({
						top: "-2px",
						"font-size": "11px"
					})
				}).blur(function() {
					"" === $(this).val() && $(this).prev("label").animate({
						top: "18px",
						"font-size": "15px"
					})
				}), $('.micro-animation input[type="radio"],input[type="checkbox"]').on("focusin", function() {
					$(this).parents(".checkbox-wrapper").addClass("wrapper-focus")
				}), $('.micro-animation input[type="radio"],input[type="checkbox"]').on("focusout", function() {
					$(this).parents(".checkbox-wrapper").removeClass("wrapper-focus")
				}), $(document).on("selectmenuclose selectmenuopen", ".micro-animation select", function(e, o) {
					e.preventDefault();
					var t = $(e.target).attr("id");
					$("#" + t + "-menu").slideToggle("fast", function() {
						"false" == $("#" + t + "-menu").attr("aria-hidden") && setTimeout(function() {
							$("#" + t + "-menu.ui-menu li.ui-state-focus").attr("tabindex", 0).focus()
						}, 50)
					})
				}), $(".login-container.micro-animation .checkbox-wrapper").click(function() {
					var e = $(this).find(".custom-element");
					loginBox.animateCheckbox(e)
				}), $(".search-tab").find("a:first-child").on("click tap", function(e) {
					var o = $(this),
						t = o.parent().parent().hasClass("right-nav");
					0 < $(".panel-open").length && t ? appFunctions.headerFooter.closeLeftPanel() : (t = $(".header-wrapper").outerHeight(), $(".search-tab").hasClass("open") ? (o.parent().removeClass("open"), $(".header-wrapper").removeClass("absoluteHeader").addClass("animation"), appFunctions.headerFooter.setHeaderTopPosition(), o.attr("aria-expanded", "false"), $(".search-container").next(".track-here").remove()) : ($(".search-container").css("top", t - 2), appFunctions.initsearch.closeSearch(e), $(".open").removeClass("open"), o.parent().addClass("open"), $(".header-wrapper").removeClass("animation"), o.attr("aria-expanded", "true"), 0 == o.find(".search-link").length && $(".search-container").after("<a href='#' class='custom-focus track-here'>.</a>")), o.parent().find("#predict-input").val("").focus().keyup(), r.sitecatSearchOpen()), e.preventDefault(), e.stopPropagation()
				}), $(".search-tab,.dropdown-menu").on("click tap", function(e) {
					e.stopPropagation()
				}), $(".dropdown > a ,.desktop-extra-links > a").on("focus", function(e) {
					return !$(this).parent().hasClass("open") && void $(".dropdown").removeClass("open")
				}), $(".accordion-title").on(consts.tapEvnt, function(e) {
					$(this).closest(".footer-accordian").toggleClass("open"), $(this).closest(".footer-accordian").hasClass("open") ? $(this).attr("aria-expanded", !0) : $(this).attr("aria-expanded", !1), e.preventDefault()
				}), $(".panel-opener").on("click tap", function(e) {
					$(".right-nav .dropdown").hasClass("open") && $(".right-nav .dropdown").removeClass("open"), e.preventDefault();
					var o = $(".left-panel"),
						t = $(".header-wrapper").outerHeight(),
						n = $(window).height() - t;
					o.hasClass("show-panel") ? (o.attr("aria-hidden", "true"), o.animate({
						bottom: t
					}, 400)) : (o.show().animate({
						bottom: -n + "px"
					}, 400), o.attr("aria-hidden", "false")), o.toggleClass("show-panel"), o.css("height", n + "px"), $(".header-wrapper").toggleClass("show-menu"), $("body").toggleClass("panel-open"), e.stopPropagation(), setTimeout(function() {
						$(".navbar-wrapper").removeClass("animate")
					}, 500), o.hasClass("show-panel") ? ($(this).attr("aria-expanded", "true").addClass("panel-left-open").find(".device-menu").html("<i class='icon-toggle'></i>Close"), setTimeout(function() {
						$(".side-navigation").find(".credit-list-opener").focus()
					}, 50), $(".side-navigation").before("<a href='#' class='custom-focus panel-ax-top'>.</a>").after("<a href='#' class='custom-focus panel-ax-bottom'>.</a>"), $(this).after("<span class='dropdown'><a href='#' class='custom-focus panel-ax-menu'>.</a></span>"), $(this).before("<a href='#' class='custom-focus before-menu-ax'>.</a>"), $(".right-nav .search-tab").find("#search_overlay").remove(), $(".left-panel .search-tab").append(a), appFunctions.initsearch.init()) : appFunctions.headerFooter.closeLeftPanel(), r.sitecatMenuOpen(), e.stopPropagation()
				}), $(".credit-list-opener,.bank-list-opener,.home-list-opener").on("click tap", function(e) {
					e.preventDefault(), e.stopPropagation(), $this = $(this);
					e = $this.parent("li");
					e.toggleClass("open-list"), e.hasClass("open-list") ? (($this.hasClass("credit-list-opener") ? $(".credit-card-list") : $this.hasClass("home-list-opener") ? $(".home-list") : $(".bank-list")).attr("tabindex", "0").focus(), $this.find(".icon-plus").addClass("icon-minus"), $this.attr("aria-expanded", "true")) : ($(".credit-card-list,.bank-list,.home-list").removeAttr("tabindex"), $this.find(".icon-plus").removeClass("icon-minus"), $this.attr("aria-expanded", "false"))
				}), $(".credit-card-list,.bank-list,.home-list").on("keyup", function(e) {
					40 == e.keyCode && $(this).find("li:first-child").find("a").focus()
				}), $(".credit-card-list li:first-child a,.bank-list li:first-child a,.home-list li:first-child a").on("keyup", function(e) {
					38 == e.keyCode && $(this).parents(".open-list").find("a").eq(0).focus()
				}), $(document).on("focus", ".sub-panel-last", function() {
					setTimeout(function() {
						$(".dropdown.open .dropdown-toggle").focus()
					}, 10)
				}), $(document).on("focus", ".sub-panel-first", function() {
					setTimeout(function() {
						$(".dropdown.open .dropdown-toggle").focus()
					}, 10)
				}), $(window).resize(function() {
					var e = $(".header-wrapper").outerHeight(),
						e = $(window).height() - e;
					$(".left-panel").hasClass("show-panel") && ($(".panel-opener").attr("aria-expanded", "true").addClass("panel-left-open").find(".device-menu").html("<i class='icon-toggle'></i>Close"), $(".left-panel").css({
						height: e + "px",
						bottom: -e + "px"
					})), $(".navbar-wrapper").css("height", "auto"), appFunctions.headerFooter.setHeaderPosition(), 451 < appFunctions.headerFooter.getWinWidth() && 0 < $(".footer-accordian.open").length && $(".footer-accordian").removeClass("open")
				})
			},
			getWinWidth: function() {
				return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
			},
			initHeaderAx: function() {
				$doc.on("keyup " + consts.tapEvnt, function(e) {
					"click" !== e.type && "tap" !== e.type || (appFunctions.headerFooter.hideHeaderMenu(), 0 == $(e.target).parents(".left-panel").length && $(".left-panel").hasClass("show-panel") && appFunctions.headerFooter.closeLeftPanel())
				}), $(".discover-logo").on("keyup", function(e) {
					39 === e.keyCode && $(this).parent().siblings(".navbar-wrapper").find(".panel-opener").focus()
				}), $(".credit-list-opener").on("keyup", function(e) {
					38 === e.keyCode && $(".panel-ax-top").focus()
				}), $(".search-link").on("keyup", function(e) {
					40 === e.keyCode && $(".panel-ax-bottom").focus()
				}), $(".dropdown,.desktop-extra-links, .panel-opener").on("keyup", function(e) {
					switch (e.keyCode) {
						case 13:
							if (0 === $(".panel-open").length) $(this).hasClass("search-tab") ? (o = $(".header-wrapper").outerHeight(), $(".search-tab").hasClass("open") ? ($(this).removeClass("open"), $(".header-wrapper").removeClass("absoluteHeader").addClass("animation"), appFunctions.headerFooter.setHeaderTopPosition(), $(this).find(".dropdown-toggle").attr("aria-expanded", "false"), $(".search-container").next(".track-here").remove()) : ($(".header-content").css("position", "static"), $(".search-container").css("top", o - 2), appFunctions.initsearch.closeSearch(e), $(".open").removeClass("open"), $(this).addClass("open"), $(this).find(".dropdown-toggle").attr("aria-expanded", "true"), $(".header-wrapper").removeClass("animation"), $(".search-container").after("<a href='#' class='custom-focus track-here'>.</a>")), $(this).find("#predict-input").val("").focus().keyup()) : $(this).hasClass("open") ? ($(".open").removeClass("open"), $(".header-wrapper").removeClass("absoluteHeader").addClass("animation"), appFunctions.headerFooter.setHeaderTopPosition(), $(".links-list").find(".track-here").parent().remove()) : ($(".header-wrapper").removeClass("animation"), 0 < $(".panel-open").length ? appFunctions.headerFooter.closeLeftPanel() : appFunctions.headerFooter.showFlyout($(this), e)), e.preventDefault(), e.stopPropagation();
							else {
								if (!(0 < $(this).find(".search-link").length)) return !0;
								$(".search-tab").hasClass("open") ? ($(this).removeClass("open"), $(".header-wrapper").removeClass("absoluteHeader").addClass("animation"), appFunctions.headerFooter.setHeaderTopPosition(), $(".search-container").next(".track-here").remove()) : ($(".header-content").css("position", "static"), $(".search-container").css("top", o - 2), appFunctions.initsearch.closeSearch(e), $(".open").removeClass("open"), $(this).addClass("open"), $(".header-wrapper").removeClass("animation")), $(this).find("#predict-input").val("").focus().keyup(), e.preventDefault(), e.stopPropagation()
							}
							break;
						case 32:
							var o;
							$(this).hasClass("search-tab") ? (o = $(".header-wrapper").outerHeight(), $(".search-tab").hasClass("open") ? "predict-input" != e.target.id && ($(this).removeClass("open"), $(".header-wrapper").removeClass("absoluteHeader").addClass("animation"), appFunctions.headerFooter.setHeaderTopPosition(), $(this).find(".dropdown-toggle").attr("aria-expanded", "false"), $(".search-container").next(".track-here").remove()) : ($(".header-content").css("position", "static"), $(".search-container").css("top", o - 2), appFunctions.initsearch.closeSearch(e), $(".open").removeClass("open"), $(this).addClass("open"), $(this).find(".dropdown-toggle").attr("aria-expanded", "true"), $(".header-wrapper").removeClass("animation"), $(".search-container").after("<a href='#' class='custom-focus track-here'>.</a>"), $(this).find("#predict-input").val("").focus().keyup())) : $(this).hasClass("open") ? ($(".open").removeClass("open"), $(".header-wrapper").removeClass("absoluteHeader").addClass("animation"), appFunctions.headerFooter.setHeaderTopPosition(), $(".links-list").find(".track-here").parent().remove()) : $(this).hasClass("panel-opener") ? $(this).trigger("click") : ($(".header-wrapper").removeClass("animation"), 0 < $(".panel-open").length ? appFunctions.headerFooter.closeLeftPanel() : appFunctions.headerFooter.showFlyout($(this), e)), e.preventDefault(), e.stopPropagation();
							break;
						case 39:
							$(this).removeAttr("tabindex"), $(this).next().find(">a").focus(), $(this).removeClass("open"), 0 === $(this).next().length && 0 === $(this).parent(".right-nav").length && $(".right-nav").find(".dropdown-toggle:first").attr("tabindex", "0").focus();
							break;
						case 37:
							$(this).removeAttr("tabindex"), $(this).prev().find(">a").focus(), $(this).removeClass("open"), 0 !== $(this).parent(".right-nav").length ? 0 === $(this).prev().length && $(this).parent().prev().find(".dropdown-toggle:last").attr("tabindex", "0").focus() : $(this).prev().hasClass("dropdown") || $(".discover-logo").attr("tabindex", "0").focus();
							break;
						case 40:
							$(this).hasClass("search-tab") || (0 === $(".panel-open").length ? ($(".header-wrapper").removeClass("animation"), 0 < $(".panel-open").length ? appFunctions.headerFooter.closeLeftPanel() : appFunctions.headerFooter.showFlyout($(this), e), $(this).addClass("open"), e.preventDefault(), e.stopPropagation()) : $(this).hasClass("panel-opener") && $(this).parent().find(".panel-ax-menu").focus(), $(this).find(".dropdown-menu").attr("tabindex", "0").focus());
							break;
						case 27:
							$(this).hasClass("panel-opener") ? ($(this).focus(), appFunctions.headerFooter.closeLeftPanel()) : ((0 < $(this).find(".search-link").length ? $(this).find(".search-link") : $(this).find(".dropdown-toggle")).focus(), appFunctions.headerFooter.hideHeaderMenu())
					}
				}), $(".right-nav li:nth-child(1) .dropdown-menu,.right-nav li:nth-child(1) .dropdown-menu a").on("keyup", function(e) {
					27 == e.keyCode && (appFunctions.headerFooter.hideHeaderMenu(), $(this).parents(".dropdown").find(".dropdown-toggle").focus(), e.stopPropagation())
				}), $(".side-navigation").on("keyup", function(e) {
					27 == e.keyCode && (appFunctions.headerFooter.closeLeftPanel(), $(".panel-opener").focus())
				}), $(".dropdown").on("keydown.bs.dropdown.data-api", ".dropdown-menu", function(e) {
					return e.stopPropagation(), !(9 != e.keyCode && !e.shiftKey && 13 != e.keyCode)
				}), $(".dropdown-menu").on("keyup", function(e) {
					13 == e.keyCode && e.stopPropagation()
				}), $(".dropdown").on("keydown.bs.dropdown.data-api", function(e) {
					return !(9 != e.keyCode && !e.shiftKey) || ("predict-input" !== $(e.target).attr("id") ? (e.stopPropagation(), !1) : void 0)
				}), $(".dropdown-menu a, .left-panel a").on("keydown", function(e) {
					40 != e.keyCode && 38 != e.keyCode || e.preventDefault()
				}), $(".dropdown-menu a, .left-panel a").on("keyup", function(e) {
					switch (e.keyCode) {
						case 40:
							var o = $(this).parent("li");
							$(this).removeAttr("tabindex"), o.hasClass("open-list") ? o.find("ul").children("li").first().find("a").focus() : 0 < o.next().find("a").eq(0).length && o.next().find("a").eq(0).focus(), 0 === o.next().find("a").length && (0 < $(this).closest(".dropdown-wrapper").next().find(".links-list").length ? $(this).closest(".dropdown-wrapper").next().find(".links-list a:first") : 0 < $(this).parents(".open-list").length ? $(this).parents(".open-list").next().find("a").eq(0) : 0 < $(this).closest(".dropdown").next(".dropdown").length ? $(this).closest(".dropdown").next(".dropdown").find("a.dropdown-toggle") : $(".navbar-wrapper .right-nav").find(".dropdown:eq(0)>a")).focus(), e.stopPropagation();
							break;
						case 38:
							$(this).parent("li").prev().find("a").focus(), 0 === $(this).parent("li").prev().find("a").length && (0 < $(this).closest(".dropdown-wrapper").prev(".dropdown-wrapper").find(".links-list").length ? $(this).closest(".dropdown-wrapper").prev(".dropdown-wrapper").find(".links-list a:last") : $(this).closest(".dropdown").find("a.dropdown-toggle")).focus(), e.stopPropagation();
							break;
						case 39:
						case 37:
							e.stopPropagation()
					}
				}), $(".fly-out-wrapper a").on("keyup", function(e) {
					e.stopPropagation()
				}), $(".dropdown-menu").on("keyup", function(e) {
					switch (e.keyCode) {
						case 38:
							$(this).closest(".dropdown").find(">a").focus(), e.stopPropagation();
							break;
						case 40:
							$(this).find(".links-list a:first").attr("tabindex", "0").focus(), e.stopPropagation()
					}
				})
			},
			prependSkip: function() {
				$(".header-wrapper").prepend("<a id='skip-content' href='#main-content-rwd' class='sr-only sr-only-focusable'>Skip to main content</a>"), appFunctions.headerFooter.skipContent()
			},
			adChoices: function() {
				function e(e) {
					(new Image).src = n + "l.betrad.com/pub/p.gif?pid=1142&ocid=1042&i" + e + "=1&mb=" + (a ? "2" : "0") + "&r=" + Math.random()
				}
				var o, t, n, a;
				0 < $("footer .icon-adchoices").length && ($("footer .icon-adchoices").parent("a").attr("id", "_bapw-link"), o = document, t = o.getElementById("_bapw-link"), n = ("https:" == o.location.protocol ? "https" : "http") + "://", o = window._bap_p_overrides, a = o && o.hasOwnProperty(1142) && o[1142].mobile, t.onclick = function() {
					return e("c"), !0
				}, e("i"))
			},
			skipContent: function() {
				$("#skip-content").on(consts.tapEvnt, function(e) {
					var o = "#" + this.href.split("#")[1];
					$(o).attr("tabindex", -1).on("blur focusout", function() {
						$(this).removeAttr("tabindex")
					}).focus(), appFunctions.headerFooter.hasScrolled()
				})
			},
			setHeadnContent: function() {
				var e = $(".header-wrapper").outerHeight();
				$(".mobile-responsive,#container,.main-container").css("padding-top", e), $(".animation").css("position", "fixed")
			},
			hasScrolled: function(e) {
				var o = $(window).scrollTop(),
					t = $(".header-wrapper").outerHeight();
				Math.abs(lastScrollTop - o) <= delta || ($(".header-wrapper").find("li").hasClass("open") || (lastScrollTop < o && 61 < o ? ($(".header-wrapper").find("li").hasClass("open") && ($(".open").addClass("dd-opened"), $(".header-wrapper").find("li").removeClass("open")), $(".header-wrapper").css("top", -t)) : (o + $(window).height() < $(document).height() && $(".header-wrapper").css("top", 0), $(".header-wrapper").find("li").hasClass("dd-opened") && $(".dd-opened").addClass("open").removeClass("dd-opened"))), lastScrollTop = o, this.setHeaderPosition())
			},
			setHeaderPosition: function() {
				var e = $(window).scrollLeft();
				$(".header-wrapper").css("left", -e + "px")
			}
		},
		headerFooterUtility: {
			init: function() {
				var o = this;
				appFunctions.headerFooterUtility.dispCurrentYear("current-year"), $(".new-window").on(consts.tapEvnt, function(e) {
					e.preventDefault();
					e = $(this).attr("href");
					o.openNewWindow(e, "Norton Secured Seal", "height=500,width=550,left=10,top=50,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no")
				})
			},
			dispCurrentYear: function(e) {
				var o = new Date;
				yearVal = o.getFullYear(), $("." + e).text(yearVal)
			},
			preventDefaultBehaviour: function(e) {
				$doc.on("click tap", e, function(e) {
					e.preventDefault()
				})
			},
			openNewWindow: function(e, o, t) {
				window.open(e, o, t)
			}
		},
		initsearch: {
			init: function() {
				var e = $("#suggestion_form");
				this.PredictSearch(e)
			},
			PredictSearch: function(e) {
				this.$element = $(e), this.$textInput = this.$element.find("#predict-input"), this.$element.find("#predict-input").bind("cut copy paste contextmenu", function(e) {
					e.preventDefault()
				}), this.$element.find("#predict-input").on("keypress", function(e) {
					var o = "&*_-!@#$%^`()+={}:?[]\\/,;<=>;'|.~";
					for (i = 0; i < o.length; i++) 0 === e.which || e.ctrlKey || e.metaKey || e.altKey || o.charAt(i) !== String.fromCharCode(e.which) && '"' !== String.fromCharCode(e.which) || e.preventDefault()
				}), this.$submit = this.$element.find("#predict-submit"), this.$mobileSubmit = $("#mobile-search-btn"), this.$dropdown = this.$element.find("#suggestion_form-dropdown"), this.$body = $("body"), this.startListeners()
			},
			startListeners: function() {
				this.$textInput.on("focus", $.proxy(this.expandSearch, this)), this.$body.on("click tap", $.proxy(this.closeSearch, this)), this.$dropdown.on("blur", $.proxy(this.closeSearch, this)), this.$submit.on("focusin", $.proxy(this.closeSearch, this)), this.$submit.on("keyup", $.proxy(this.submitForm, this))
			},
			submitForm: function(e) {
				13 == (e.keyCode || e.which || e.charCode) && $("#suggestion_form").submit()
			},
			showResult: function(e) {
				var o = this.$textInput.val();
				this.$dropdown.addClass("open"), this.$body.find(".dropdown td").attr("tabindex", "0"), 0 !== o.length && 9 !== e.keyCode ? e.stopPropagation() : this.$dropdown.removeClass("open")
			},
			expandSearch: function() {
				this.hideAllFlyOuts(), this.$element.addClass("active"), this.$body.find(".user-nav").addClass("search-active"), "" !== this.$textInput.val() && this.$dropdown.addClass("open")
			},
			closeSearch: function(e) {
				var o = this,
					t = e.type,
					n = e.target,
					n = (e.keyCode, $(n).is("#suggestion_form, #suggestion_form *"));
				("click" != t && "tap" != t || n) && ("blur" != t || this.$dropdown.hasClass("open")) ? "focusin" == t && setTimeout(function() {
					o.resetSearch()
				}, 500): this.resetSearch()
			},
			resetSearch: function() {
				this.$element.removeClass("active"), this.$dropdown.removeClass("open"), this.$element.find("#search-suggestions").html(""), this.$dropdown.find("tbody").remove(), this.$body.find(".user-nav").removeClass("search-active")
			},
			hideAllFlyOuts: function() {
				this.$body.find(".has-fly-out").removeClass("active"), this.$body.find(".fly-out").addClass("visually-hidden"), this.$body.find(".fly-out").css({
					maxHeight: "none"
				})
			}
		}
	}, utils = {};

	function e() {
		s.prop1 = "", s.prop41 = "", s.prop32 = "", s.eVar74 = "", s.prop10 = "", s.list1 = "", s.prop10 = "", s.events = "", s.prop19 = "", s.list2 = ""
	}
	var r = sitecatalyst = {
		sitecatMenuOpen: function() {
			e(), s.linkTrackVars = s.linkTrackVars + ",prop1", s.prop1 = "Discover Home:Header:All Products Expand Menu", s.tl(this, "o", s.prop1)
		},
		sitecatHelpOpen: function() {
			e(), s.linkTrackVars = s.linkTrackVars + ",prop1", s.prop1 = "Discover Home:Header:Help Expand Menu", s.tl(this, "o", s.prop1)
		},
		sitecatSearchOpen: function() {
			e(), s.linkTrackVars = s.linkTrackVars + ",prop1", s.prop1 = "Discover Home:Header:Search Expand", s.tl(this, "o", s.prop1)
		}
	};
	return {
		init: init
	}
}();
var scroll = 0;
$(window).scroll(function() {
	(!$("body").hasClass("panel-open") || 991 < appFunctions.headerFooter.getWinWidth()) && 0 < scroll && (didScroll = !0);
	var e = parseFloat($(".header-wrapper").css("top")),
		o = $(window).scrollTop();
	$(".header-wrapper").find("li").hasClass("open") && (o < previousScrollTop && o <= e ? $(".header-wrapper").css({
		top: 0
	}).removeClass("absoluteHeader") : previousScrollTop < o && !$(".header-wrapper").hasClass("absoluteHeader") && $(".header-wrapper").css({
		top: previousScrollTop + "px"
	}).addClass("absoluteHeader")), appFunctions.headerFooter.setHeaderPosition(), previousScrollTop = o, scroll++
}), setInterval(function() {
	appFunctions.headerFooter.setHeadnContent(), didScroll && (appFunctions.headerFooter.hasScrolled(), didScroll = !1)
}, 250), discover_rwd.hdrFtr.init(), $(document).ready(function() {
	appFunctions.headerFooter.adChoices()
});