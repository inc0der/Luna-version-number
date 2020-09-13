//=============================================================================
// Luna_MoreFontsMV.js
//=============================================================================
//=============================================================================
// Build Date: 2020-09-13 18:17:26
//=============================================================================
//=============================================================================
// Made with LunaTea -- Haxe
//=============================================================================


// Generated by Haxe 4.1.3
/*:
@author LunaTechs - Kino
@plugindesc Adds additional fonts to your RPGMakerMV/MZ 
that any plugin developer can use when working on your game <LunaFonts>.

@target MV MZ

@param fonts
@text Fonts 
@desc The list of fonts that you want added to your RPGMakerMV game.
text window.
@type struct<Font>[]

@help
This plugin allows you to add additional fonts to your RPGMakerMV/MZ game
for any other plugin to use.


MIT License
Copyright (c) 2020 LunaTechsDev
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
*/

/*~struct~Font:
*
* @param fontName
* @text Font Name
* @desc The name of the font within RPGMaker.
* @default rmmv-font3
*
* @param fontFileName
* @text Font File Name
* @desc The name of the file name of the font, including extension(.ttf)
* @default rm-font.tff
*
*/


(function ($hx_exports, $global) { "use strict"
class EReg {
	constructor(r,opt) {
		this.r = new RegExp(r,opt.split("u").join(""))
	}
	match(s) {
		if(this.r.global) {
			this.r.lastIndex = 0
		}
		this.r.m = this.r.exec(s)
		this.r.s = s
		return this.r.m != null;
	}
}
EReg.__name__ = true
class Lambda {
	static iter(it,f) {
		let x = $getIterator(it)
		while(x.hasNext()) f(x.next())
	}
}
Lambda.__name__ = true
class LunaFonts {
	static main() {
		let _g = []
		let _g1 = 0
		let _g2 = $plugins
		while(_g1 < _g2.length) {
			let v = _g2[_g1]
			++_g1
			if(new EReg("<LunaFonts>","ig").match(v.description)) {
				_g.push(v)
			}
		}
		let params = _g[0].parameters
		let parsedFonts = JsonEx.parse(params["fonts"]).map(function(fontJson) {
			return JsonEx.parse(fontJson);
		})
		LunaFonts.FontParams = { fonts : parsedFonts}
		Lambda.iter(LunaFonts.FontParams.fonts,function(font) {
			FontManager.load(font.fontName,font.fontFileName)
		})
		console.log("src/LunaFonts.hx:34:",FontManager._states)
		console.log("src/LunaFonts.hx:35:",FontManager._urls)
		console.log("src/LunaFonts.hx:36:",LunaFonts.FontParams)
	}
}
LunaFonts.__name__ = true
Math.__name__ = true
class Reflect {
	static fields(o) {
		let a = []
		if(o != null) {
			let hasOwnProperty = Object.prototype.hasOwnProperty
			for( var f in o ) {
			if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
				a.push(f)
			}
			}
		}
		return a;
	}
}
Reflect.__name__ = true
class Std {
	static string(s) {
		return js_Boot.__string_rec(s,"");
	}
}
Std.__name__ = true
class haxe_Exception extends Error {
	constructor(message,previous,native) {
		super(message)
		this.message = message
		this.__previousException = previous
		this.__nativeException = native != null ? native : this
	}
	get_native() {
		return this.__nativeException;
	}
	static thrown(value) {
		if(((value) instanceof haxe_Exception)) {
			return value.get_native();
		} else if(((value) instanceof Error)) {
			return value;
		} else {
			let e = new haxe_ValueException(value)
			return e;
		}
	}
}
haxe_Exception.__name__ = true
class haxe_ValueException extends haxe_Exception {
	constructor(value,previous,native) {
		super(String(value),previous,native)
		this.value = value
	}
}
haxe_ValueException.__name__ = true
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0
		this.array = array
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
haxe_iterators_ArrayIterator.__name__ = true
class js_Boot {
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		let t = typeof(o)
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object"
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(((o) instanceof Array)) {
				let str = "["
				s += "\t";
				let _g = 0
				let _g1 = o.length
				while(_g < _g1) {
					let i = _g++
					str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
				}
				str += "]";
				return str;
			}
			let tostr
			try {
				tostr = o.toString
			} catch( _g ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				let s2 = o.toString()
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			let str = "{\n"
			s += "\t";
			let hasp = o.hasOwnProperty != null
			let k = null
			for( k in o ) {
			if(hasp && !o.hasOwnProperty(k)) {
				continue
			}
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
				continue
			}
			if(str.length != 2) {
				str += ", \n";
			}
			str += s + k + " : " + js_Boot.__string_rec(o[k],s);
			}
			s = s.substring(1)
			str += "\n" + s + "}";
			return str;
		case "string":
			return o;
		default:
			return String(o);
		}
	}
}
js_Boot.__name__ = true
class _$LTGlobals_$ {
}
_$LTGlobals_$.__name__ = true
class FontManager {
	static load(family,filename) {
		if(FontManager._states[family] != "loaded") {
			if(filename != null) {
				FontManager.startLoading(family,FontManager.makeUrl(filename))
			} else {
				FontManager._urls[family] = ""
				FontManager._states[family] = "loaded"
			}
		}
	}
	static isReady() {
		let access = FontManager._states
		let _g_keys = Reflect.fields(access)
		let _g_index = 0
		while(_g_index < _g_keys.length) {
			let family = access[_g_keys[_g_index++]]
			let state = FontManager._states[family]
			if(state == "loading") {
				return false;
			}
			if(state == "error") {
				FontManager.throwLoadError(family)
			}
		}
		return true;
	}
	static startLoading(family,url) {
		let sourceUrl = "url(" + url + ")"
		let font = new FontFace(family,sourceUrl)
		FontManager._urls[family] = sourceUrl
		FontManager._states[family] = "loading"
		font.load().then(function(loadedFont) {
			window.document.fonts.add(font)
			FontManager._states[family] = "loaded"
			return 0;
		}).catch(function(_) {
			return FontManager._states[family] = "error";
		})
	}
	static throwLoadError(family) {
		let url = FontManager._urls[family]
		let retry = function() {
			FontManager.startLoading(family,url)
		}
		throw haxe_Exception.thrown(["LoadError",url,retry])
	}
	static makeUrl(fileName) {
		return "fonts/" + Std.string(encodeURIComponent(fileName).replace(/%2F/g, "/"););
	}
	static load(family,filename) {
		if(FontManager._states[family] != "loaded") {
			if(filename != null) {
				FontManager.startLoading(family,FontManager.makeUrl(filename))
			} else {
				FontManager._urls[family] = ""
				FontManager._states[family] = "loaded"
			}
		}
	}
	static isReady() {
		let access = FontManager._states
		let _g_keys = Reflect.fields(access)
		let _g_index = 0
		while(_g_index < _g_keys.length) {
			let family = access[_g_keys[_g_index++]]
			let state = FontManager._states[family]
			if(state == "loading") {
				return false;
			}
			if(state == "error") {
				FontManager.throwLoadError(family)
			}
		}
		return true;
	}
	static startLoading(family,url) {
		let sourceUrl = "url(" + url + ")"
		let font = new FontFace(family,sourceUrl)
		FontManager._urls[family] = sourceUrl
		FontManager._states[family] = "loading"
		font.load().then(function(loadedFont) {
			window.document.fonts.add(font)
			FontManager._states[family] = "loaded"
			return 0;
		}).catch(function(_) {
			return FontManager._states[family] = "error";
		})
	}
	static throwLoadError(family) {
		let url = FontManager._urls[family]
		let retry = function() {
			FontManager.startLoading(family,url)
		}
		throw haxe_Exception.thrown(["LoadError",url,retry])
	}
	static makeUrl(fileName) {
		return "fonts/" + Std.string(encodeURIComponent(fileName).replace(/%2F/g, "/"););
	}
}
$hx_exports["FontManager"] = FontManager
FontManager.__name__ = true
class utils_Fn {
	static proto(obj) {
		return obj.prototype;
	}
	static updateProto(obj,fn) {
		return (fn)(obj.prototype);
	}
	static updateEntity(obj,fn) {
		return (fn)(obj);
	}
}
utils_Fn.__name__ = true
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
String.__name__ = true
Array.__name__ = true
js_Boot.__toStr = ({ }).toString
LunaFonts.main()
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {})
