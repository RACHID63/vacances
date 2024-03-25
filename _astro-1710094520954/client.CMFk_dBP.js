import {
	s as g,
	d as h,
	e as b
} from "./scrollToSection.ChvhFD9q.js";
import {
	_,
	d as p,
	b as v,
	e as y,
	v as A,
	U as i,
	W as S
} from "./_plugin-vue_export-helper.DFdUoSSK.js";
import {
	ac as w
} from "./index.CZM-Hik8.js";
const R = /\s|&nbsp;/g,
	$ = e => {
		try {
			return e.replaceAll(R, "").toLowerCase()
		} catch {
			return e
		}
	},
	f = (e, t) => {
		e.dataset.qa = $(t.value)
	},
	E = "qa",
	O = {
		beforeMount: (e, t) => f(e, t),
		updated: (e, t) => f(e, t)
	},
	B = p({
		props: {
			to: {
				type: Object,
				default: () => ({})
			}
		}
	}),
	L = ["href"];

function M(e, t, n, r, s, a) {
	return v(), y("a", {
		href: e.to.path
	}, [A(e.$slots, "default")], 8, L)
}
const j = _(B, [
		["render", M]
	]),
	k = () => {
		const e = navigator.userAgent;
		let t, n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], {
			name: "IE",
			version: t[1] || ""
		}) : n[1] === "Chrome" && (t = e.match(/\bOPR|Edge\/(\d+)/), t != null) ? {
			name: "Opera",
			version: t[1]
		} : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], (t = e.match(/version\/(\d+)/i)) != null && n.splice(1, 1, t[1]), {
			name: n[0],
			version: n[1]
		})
	};

function T(e) {
	const n = k().name === w;
	if (typeof e == "object") {
		const {
			query: r,
			path: s,
			hash: a
		} = e, c = r ? `?${new URLSearchParams(r)}` : "";
		s ? window.location.assign(`${s}${c}`) : window.history.pushState(null, null, c), a && g(a, n)
	} else window.location.assign(e)
}
const d = e => {
		e.component("RouterLink", j), e.config.globalProperties.$router = {
			push: t => T(t)
		}, e.directive(E, O)
	},
	x = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: d
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	H = async e => {
		"default" in x && await d(e)
	}, I = p({
		props: {
			value: String,
			name: String,
			hydrate: {
				type: Boolean,
				default: !0
			}
		},
		setup({
			name: e,
			value: t,
			hydrate: n
		}) {
			if (!t) return () => null;
			let r = n ? "astro-slot" : "astro-static-slot";
			return () => i(r, {
				name: e,
				innerHTML: t
			})
		}
	}), F = e => async (t, n, r, {
		client: s
	}) => {
		if (!e.hasAttribute("ssr")) return;
		const a = t.name ? `${t.name} Host` : void 0,
			c = {};
		for (const [o, m] of Object.entries(r)) c[o] = () => i(I, {
			value: m,
			name: o === "default" ? void 0 : o
		});
		const l = s !== "only",
			u = (l ? h : b)({
				name: a,
				render() {
					let o = i(t, n, c);
					return N(t.setup) && (o = i(S, null, o)), o
				}
			});
		await H(u), u.mount(e, l), e.addEventListener("astro:unmount", () => u.unmount(), {
			once: !0
		})
	};

function N(e) {
	const t = e?.constructor;
	return t && t.name === "AsyncFunction"
}
export {
	F as
	default
};