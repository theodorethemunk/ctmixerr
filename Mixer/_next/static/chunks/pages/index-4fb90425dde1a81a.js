(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5728: function(l, e, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(9009)
            }])
        },
        9009: function(l, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return o
                }
            });
            var r = s(5893),
                i = s(9008),
                d = s.n(i),
                f = s(5983);
            s(9066), s(402), s(275), s(9167);
            var t = s(6154);
            s(9734);
            var a = s(7294);

            function o() {
                let [l, e] = (0, a.useState)(null), s = async () => {
                    let l = await t.Z.get("https://flyp.me/api/v1/order/limits/ETH/BNB"),
                        s = l.data;
                    e({
                        name: "ETH",
                        ...s
                    })
                };
                return (0, a.useEffect)(() => {
                    s()
                }, []), (0, r.jsxs)("div", {
                    className: "",
                    children: [(0, r.jsxs)("div", {
                        class: "w-full h-full z-[-10] absolute flex flex-row justify-between left-0 lg:h-full lg:max-w-7xl lg:px-0 mx-auto px-6 right-0",
                        children: [(0, r.jsx)("div", {
                            class: "w-full h-full border-[#f5f5f510]/5 border-dashed border-x"
                        }), (0, r.jsx)("div", {
                            class: "w-full h-full border-[#f5f5f510]/5 border-dashed border-x"
                        }), (0, r.jsx)("div", {
                            class: "w-full h-full border-[#f5f5f510]/5 border-dashed border-x"
                        }), (0, r.jsx)("div", {
                            class: "w-full h-full border-[#f5f5f510]/5 border-dashed border-x"
                        }), (0, r.jsx)("div", {
                            class: "w-full h-full border-[#f5f5f510]/5 border-dashed border-x"
                        }), (0, r.jsx)("div", {
                            class: "w-full h-full border-[#f5f5f510]/5 border-dashed border-x"
                        })]
                    }), (0, r.jsxs)("svg", {
                        class: "blur-3xl absolute opacity-80 right-0 z-[-10]",
                        fill: "none",
                        viewBox: "0 0 400 400",
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "100%",
                        width: "50%",
                        children: [(0, r.jsx)("g", {
                            "clip-path": "url(#clip0_17_60)",
                            children: (0, r.jsxs)("g", {
                                filter: "url(#filter0_f_17_60)",
                                children: [(0, r.jsx)("path", {
                                    d: "M128.6 0H0V322.2L332.5 211.5L128.6 0Z",
                                    fill: "#4D07E3"
                                }), (0, r.jsx)("path", {
                                    d: "M0 322.2V400H240H320L332.5 211.5L0 322.2Z",
                                    fill: "#4C00FF"
                                }), (0, r.jsx)("path", {
                                    d: "M320 400H400V78.75L332.5 211.5L320 400Z",
                                    fill: "#7fcef3"
                                }), (0, r.jsx)("path", {
                                    d: "M400 0H128.6L332.5 211.5L400 78.75V0Z",
                                    fill: "#7fcef3"
                                })]
                            })
                        }), (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("filter", {
                                "color-interpolation-filters": "sRGB",
                                filterUnits: "userSpaceOnUse",
                                height: "719.867",
                                id: "filter0_f_17_60",
                                width: "719.867",
                                x: "-159.933",
                                y: "-159.933",
                                children: [(0, r.jsx)("feFlood", {
                                    "flood-opacity": "0",
                                    result: "BackgroundImageFix"
                                }), (0, r.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "BackgroundImageFix",
                                    mode: "normal",
                                    result: "shape"
                                }), (0, r.jsx)("feGaussianBlur", {
                                    result: "effect1_foregroundBlur_17_60",
                                    stdDeviation: "79.9667"
                                })]
                            })
                        })]
                    }), (0, r.jsxs)(d(), {
                        children: [(0, r.jsx)("title", {
                            children: "ChainTools Mixer"
                        }), (0, r.jsx)("link", {
                            rel: "icon",
                            href: "/logo.png"
                        }), (0, r.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
                            rel: "stylesheet"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "container mx-auto px-6 pb-24 pt-16",
                        children: [(0, r.jsx)("div", {
                            className: "text-center"
                        }), (0, r.jsx)("div", {
                            className: "mt-4",
                            children: (0, r.jsx)("div", {
                                className: "max-w-5xl mx-auto bg-gradient-to-b p-[0.060rem]  shadow-2xl via-indigo-500/5 from-indigo-500 ",
                                children: (0, r.jsx)("div", {
                                    className: "h-full px-4 bg-[rgb(20_21_33/var(--tw-bg-opacity))] lg:py-8 md:px-6",
                                    children: l && (0, r.jsx)(f.Z, {
                                        limit: l
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
            s(7960)
        }
    },
    function(l) {
        l.O(0, [866, 874, 687, 712, 774, 888, 179], function() {
            return l(l.s = 5728)
        }), _N_E = l.O()
    }
]);