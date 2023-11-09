"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [712], {
        9167: function(e, s, t) {
            var a = t(5893);
            t(7294);
            var l = t(4855);
            let n = e => {
                let {
                    data: s,
                    hash: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "",
                    children: [(0, a.jsx)("div", {
                        className: "grid place-items-center text-center",
                        children: (0, a.jsx)("div", {
                            className: "pb-6",
                            children: (0, a.jsxs)("div", {
                                className: "flex gap-6 flex-col mt-6 px-6",
                                children: [(0, a.jsxs)("div", {
                                    className: "",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-[#6A9FFB]",
                                        children: "Order Completed"
                                    }), (0, a.jsxs)("div", {
                                        className: "text-lg font-bold",
                                        children: ["We Sent : ", null == s ? void 0 : s.order.ordered_amount, " ", null == s ? void 0 : s.order.to_currency]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-[#6A9FFB]",
                                        children: "To"
                                    }), (0, a.jsx)("div", {
                                        className: " text-xs max-w-[200px] md:max-w-full overflow-hidden font-mono whitespace-nowrap text-ellipsi",
                                        children: null == s ? void 0 : s.order.destination
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-[#6A9FFB] mb-2",
                                        children: "Transaction Hash"
                                    }), (0, a.jsx)(l.CopyToClipboard, {
                                        text: null == s ? void 0 : s.txurl,
                                        onCopy: () => alert("Copied"),
                                        children: (0, a.jsx)("div", {
                                            className: "cursor-pointer py-2 px-6 rounded-2xl bg-[#4C00FF] font-mono text-[10px] text-xs max-w-[200px] md:max-w-full overflow-hidden  whitespace-nowrap text-ellipsi",
                                            children: "Click to copy"
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0, a.jsx)("a", {
                        href: "/",
                        className: "bg-accent/20 border border-accent block text-center w-full py-4  font-bold",
                        children: "Mix Again ?"
                    })]
                })
            };
            s.Z = n
        },
        5983: function(e, s, t) {
            t.d(s, {
                Z: function() {
                    return h
                }
            });
            var a = t(5893),
                l = t(7294),
                n = t(7516),
                r = t(1649),
                c = t(7960),
                o = t(6154),
                i = t(1163),
                d = t(4960),
                m = t(7106),
                x = t(9583);

            function u(e) {
                let {
                    items: s,
                    setOpenReceive: t,
                    receive: n,
                    pay: r,
                    setReceive: c,
                    setPay: o
                } = e, i = (0, l.useRef)(null), [u, p] = (0, l.useState)(s[0]), [h, f] = (0, l.useState)(""), v = e => {
                    console.log(e, "sle"), p(e), c({
                        name: e.name,
                        amount: 0,
                        code: e.code
                    }), o({ ...r,
                        amount: 0
                    }), t(!1)
                };
                (0, l.useEffect)(() => {
                    if (i.current) {
                        var e;
                        null === (e = i.current) || void 0 === e || e.click()
                    }
                }, []);
                let g = "" === h ? s : s.filter(e => e.code.toLowerCase().replace(/\s+/g, "").includes(h.toLowerCase().replace(/\s+/g, ""))),
                    j = e => {
                        switch (e.code) {
                            case "ADA":
                                return (0, a.jsx)("img", {
                                    src: "https://flyp.me/assets/img/crypto/".concat(e.name.toLowerCase(), ".svg"),
                                    className: "w-8 "
                                });
                            case "LBTC":
                            case "DGB":
                            case "WBTC":
                            case "SAND":
                                return (0, a.jsx)("img", {
                                    src: "https://flyp.me/assets/img/crypto/".concat(e.code, ".svg"),
                                    className: "w-8 "
                                });
                            case "XMR":
                                return (0, a.jsx)("img", {
                                    src: "https://flyp.me/assets/img/crypto/".concat(e.code.toLowerCase(), ".svg"),
                                    className: "w-8 "
                                });
                            default:
                                return (0, a.jsx)("img", {
                                    src: "https://flyp.me/assets/img/crypto/".concat(e.code, ".png"),
                                    className: "w-8 "
                                })
                        }
                    };
                return (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsx)(d.h, {
                        value: u,
                        onChange: p,
                        children: (0, a.jsxs)("div", {
                            className: "relative mt-1 z-[10]",
                            children: [(0, a.jsxs)("div", {
                                className: "relative w-full  cursor-default h-16 overflow-hidden  rounded-full  text-left  focus:outline-none focus-visible:outline-none    sm:text-sm",
                                children: [(0, a.jsx)(d.h.Input, {
                                    "data-headlessui-state": "open",
                                    className: "w-full border-none bg-[#6A9FFB]/10 font-mono rounded-full  py-2 pl-6 pr-10 h-full focus-within:outline-none text-sm leading-5 text-white ",
                                    displayValue: e => e.name,
                                    onChange: e => f(e.target.value),
                                    onKeyDown: e => {
                                        "Enter" === e.key && t(!1)
                                    }
                                }), (0, a.jsx)(d.h.Button, {
                                    ref: i,
                                    className: "absolute inset-y-0 right-4 flex items-center pr-2",
                                    children: (0, a.jsx)(x.RiI, {
                                        className: "h-5 w-5 text-gray-400",
                                        "aria-hidden": "true"
                                    })
                                })]
                            }), (0, a.jsx)(m.u, {
                                as: l.Fragment,
                                leave: "transition ease-in duration-100",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                afterLeave: () => f(""),
                                children: (0, a.jsx)(d.h.Options, {
                                    className: "absolute mt-1 max-h-60 w-full bg-[#131522] overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                                    children: 0 === g.length && "" !== h ? (0, a.jsx)("div", {
                                        className: "relative cursor-default select-none py-2 px-4 text-white",
                                        children: "Nothing found."
                                    }) : g.map(e => {
                                        if (e.send && e.code != r.code) return (0, a.jsx)(d.h.Option, {
                                            onClick: () => v(e),
                                            onFocus: () => v(e),
                                            className: e => {
                                                let {
                                                    active: s
                                                } = e;
                                                return "relative cursor-default select-none py-2 pl-10 pr-4 ".concat(s ? "bg-[#4C00FF] text-white" : "text-white")
                                            },
                                            value: e,
                                            children: s => {
                                                let {
                                                    selected: t,
                                                    active: l
                                                } = s;
                                                return (0, a.jsxs)("div", {
                                                    className: "flex gap-2 items-center",
                                                    children: [j(e), (0, a.jsxs)("div", {
                                                        children: [(0, a.jsx)("span", {
                                                            className: "block truncate ".concat(t ? "font-medium" : "font-normal"),
                                                            children: e.code
                                                        }), (0, a.jsx)("span", {
                                                            className: "block truncate ".concat(t ? "font-medium" : "font-normal"),
                                                            children: e.name
                                                        })]
                                                    }), t ? (0, a.jsx)("span", {
                                                        className: "absolute inset-y-0 right-4 flex items-center pl-3 ".concat(l ? "text-white" : "text-[#4C00FF]"),
                                                        children: (0, a.jsx)(x.l_A, {
                                                            className: "h-5 w-5",
                                                            "aria-hidden": "true"
                                                        })
                                                    }) : null]
                                                })
                                            }
                                        }, e.code)
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            t(9734);
            let p = e => {
                var s, t, d, m;
                let {} = e, x = (0, i.useRouter)(), [p, h] = (0, l.useState)(null), [f, v] = (0, l.useState)(null), [g, j] = (0, l.useState)(!1), [b, y] = (0, l.useState)(!1), [N, w] = (0, l.useState)(null), [C, F] = (0, l.useState)(!0), [A, k] = (0, l.useState)(null), {
                    pay: _,
                    setPay: R,
                    receive: B,
                    setReceive: D,
                    destination: S,
                    refundAddress: T,
                    setDestination: Z,
                    setRefundAddress: E
                } = (0, c.Z)(e => ({
                    pay: e.pay,
                    receive: e.receive,
                    setPay: e.setPay,
                    setReceive: e.setReceive,
                    destination: e.destination,
                    setDestination: e.setDestination,
                    setRefundAddress: e.setRefundAddress,
                    refundAddress: e.refundAddress
                })), [O, L] = (0, l.useState)(null), M = () => {
                    R(B), D(_)
                }, P = async e => {
                    let {
                        pay: s,
                        receive: t
                    } = e, a = await o.Z.get("https://flyp.me/api/v1/order/limits/".concat(s.code, "/").concat(t.code, "?full=1")), l = a.data;
                    L({
                        name: s.code,
                        ...l
                    })
                }, W = async () => {
                    let e = await o.Z.get("https://flyp.me/api/v1/data/exchange_rates"),
                        s = e.data;
                    v(s), D({ ...B,
                        amount: s["".concat(_.code, "-").concat(B.code)] * _.amount
                    })
                }, H = async e => {
                    let s = e.target.value;
                    s > -1 && R({ ..._,
                        amount: s
                    }), D({ ...B,
                        amount: f["".concat(_.code, "-").concat(B.code)] * s
                    })
                }, I = async e => {
                    let s = e.target.value;
                    s > -1 && D({ ...B,
                        amount: s
                    }), R({ ..._,
                        amount: f["".concat(B.code, "-").concat(_.code)] * s
                    })
                }, X = async () => {
                    let e = await o.Z.get("https://flyp.me/api/v1/currencies"),
                        s = e.data;
                    h(Object.values(s))
                }, z = async () => {
                    F(!0);
                    let e = await o.Z.post("https://flyp.me/api/v1/order/accept", {
                        uuid: N.order.uuid
                    });
                    e.data && x.push("/".concat(N.order.uuid))
                };
                (0, l.useEffect)(() => {
                    P({
                        pay: _,
                        receive: B
                    })
                }, [_, B]), (0, l.useEffect)(() => {
                    W(), X()
                }, []);
                let G = e => {
                        switch (e.code) {
                            case "ADA":
                                return (0, a.jsx)("img", {
                                    src: "https://flyp.me/assets/img/crypto/".concat(e.name.toLowerCase(), ".svg"),
                                    className: "w-4 lg:w-8 "
                                });
                            case "LBTC":
                            case "DGB":
                            case "WBTC":
                            case "SAND":
                                return (0, a.jsx)("img", {
                                    src: "https://flyp.me/assets/img/crypto/".concat(e.code, ".svg"),
                                    className: "w-4 lg:w-8 "
                                });
                            case "XMR":
                                return (0, a.jsx)("img", {
                                    src: "https://flyp.me/assets/img/crypto/".concat(e.code.toLowerCase(), ".svg"),
                                    className: "w-4 lg:w-8 "
                                });
                            default:
                                return (0, a.jsx)("img", {
                                    src: "https://flyp.me/assets/img/crypto/".concat(e.code, ".png"),
                                    className: "w-4 lg:w-8 "
                                })
                        }
                    },
                    U = async e => {
                        Z(e.target.value)
                    },
                    Y = async e => {
                        var s, t;
                        let a = await o.Z.post("https://flyp.me/api/v1/order/new", {
                            order: {
                                from_currency: _.code,
                                to_currency: B.code,
                                invoiced_amount: _.amount,
                                destination: S,
                                refund_address: T || S
                            }
                        }, {
                            signal: e.signal
                        });
                        if (console.log(a.data, "create"), null === (s = a.data.errors) || void 0 === s ? void 0 : s.destination) {
                            k(a.data.errors.destination[0]);
                            return
                        }
                        if (null === (t = a.data.errors) || void 0 === t ? void 0 : t.ordered_amount) {
                            k(a.data.errors.ordered_amount[0]);
                            return
                        }
                        w(a.data), D({ ...B,
                            amount: B.amount
                        }), F(!1), k(null)
                    };
                return (0, l.useEffect)(() => {
                    let e = new AbortController;
                    return Y(e), () => null == e ? void 0 : e.abort()
                }, [_.amount, S, T]), (0, a.jsxs)("div", {
                    children: [(0, a.jsxs)("div", {
                        className: "grid md:flex items-start flex-wrap md:flex-nowrap gap-2 md:gap-6 px-4 py-6 md:p-8",
                        children: [(0, a.jsxs)("div", {
                            className: "flex-grow relative",
                            children: [(0, a.jsxs)("span", {
                                className: " mb-1 inline-block text-[10px] lg:text-base  ml-2",
                                children: ["Send ", null == _ ? void 0 : _.code]
                            }), (0, a.jsxs)("div", {
                                children: [!b && (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, a.jsx)("input", {
                                        value: _.amount,
                                        onChange: H,
                                        placeholder: "0.0",
                                        className: "bg-[#6A9FFB]/10 font-bold rounded-xl text-xs lg:text-lg w-full pl-8  h-12 lg:h-16 focus-within:outline-none"
                                    }), (0, a.jsxs)("button", {
                                        onClick: () => y(!0),
                                        className: "flex absolute top-0  h-[85%] my-1 mr-1 right-0 items-center gap-2 bg-[#3A0D84] py-2 lg:py-3 px-4 lg:px-6 rounded-xl",
                                        children: [G(_), (0, a.jsx)("span", {
                                            className: "font-bold",
                                            children: _.code
                                        }), (0, a.jsx)(n.OrA, {})]
                                    })]
                                }), b && (0, a.jsx)(a.Fragment, {
                                    children: p && (0, a.jsx)(u, {
                                        setOpenReceive: y,
                                        setReceive: R,
                                        setPay: D,
                                        pay: B,
                                        receive: _,
                                        items: p
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex gap-5 mt-2 ml-4 text-xs font-medium opacity-60 uppercase",
                                    children: [(0, a.jsxs)("span", {
                                        children: ["Min: ", parseFloat(null == O ? void 0 : O.from.min).toFixed(2), " ", _.code]
                                    }), (0, a.jsxs)("span", {
                                        children: ["Max: ", parseFloat(null == O ? void 0 : O.from.max).toFixed(2), " ", _.code]
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)("button", {
                            onClick: M,
                            children: (0, a.jsx)(r.nWb, {
                                className: "text-4xl mt-4 md:my-6 lg:my-10  mx-auto rotate-90 md:rotate-0"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex-grow relative",
                            children: [(0, a.jsxs)("span", {
                                className: " mb-1 inline-block text-[10px] lg:text-base  ml-2",
                                children: ["Receive ", null == B ? void 0 : B.code]
                            }), (0, a.jsxs)("div", {
                                children: [!g && (0, a.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, a.jsx)("input", {
                                        disabled: !0,
                                        value: null == B ? void 0 : B.amount,
                                        onChange: I,
                                        placeholder: "0.0",
                                        className: "bg-[#6A9FFB]/10 font-bold rounded-xl text-xs lg:text-lg w-full pl-8  h-12 lg:h-16 focus-within:outline-none"
                                    }), (0, a.jsxs)("button", {
                                        onClick: () => j(!0),
                                        className: "flex absolute top-0 h-[85%] my-1 mr-1  right-0 items-center gap-2 bg-[#3A0D84] py-2 lg:py-3 px-4 lg:px-6 rounded-xl",
                                        children: [G(B), (0, a.jsx)("span", {
                                            className: "font-bold",
                                            children: B.code
                                        }), (0, a.jsx)(n.OrA, {})]
                                    })]
                                }), g && (0, a.jsx)(a.Fragment, {
                                    children: p && (0, a.jsx)(u, {
                                        setOpenReceive: j,
                                        setReceive: D,
                                        setPay: R,
                                        pay: _,
                                        receive: B,
                                        items: p
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "flex justify-end gap-5 mt-2 ml-4 text-xs font-medium opacity-60 uppercase",
                                    children: N && (0, a.jsxs)("span", {
                                        children: ["Fee: ", null == N ? void 0 : null === (s = N.order) || void 0 === s ? void 0 : s.charged_fee, " ", null == N ? void 0 : null === (t = N.order) || void 0 === t ? void 0 : t.to_currency]
                                    })
                                })]
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "grid  items-start gap-6 mt-4 px-4 md:px-8",
                        children: [(0, a.jsxs)("div", {
                            className: "flex-grow",
                            children: [(0, a.jsxs)("label", {
                                class: "block mb-3 text-sm font-medium text-white text-left",
                                name: "name",
                                children: [null !== (d = null == B ? void 0 : B.code) && void 0 !== d ? d : "ETH", " Destination Address *"]
                            }), (0, a.jsx)("input", {
                                value: S,
                                onChange: U,
                                class: "block w-full px-6 py-3 text-white h-16 bg-[#131522]/5 border-white/10 border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-[#3A0D84] focus:outline-none focus:ring-[#3A0D84] sm:text-sm",
                                placeholder: "0x000000"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex-grow",
                            children: [(0, a.jsxs)("label", {
                                class: "block mb-3 text-sm font-medium text-white text-left capitalize",
                                name: "name",
                                children: [null !== (m = null == _ ? void 0 : _.code) && void 0 !== m ? m : "BNB", " Refund wallet address (OPTIONAL)"]
                            }), (0, a.jsx)("input", {
                                value: T,
                                onChange: e => E(e.target.value),
                                class: "block w-full px-6 py-3 h-16 text-white bg-[#131522]/5  border-white/10 border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-[#3A0D84] focus:outline-none focus:ring-[#3A0D84] sm:text-sm",
                                placeholder: "0x00000"
                            })]
                        })]
                    }), (0, a.jsx)("button", {
                        disabled: !!C || !S || _.amount > O.from.max || _.amount < O.from.min,
                        onClick: z,
                        className: "bg-accent/20 border border-accent disabled:bg-gray-900 disabled:cursor-not-allowed w-full py-4 mt-6  font-bold",
                        children: A ? A.toUpperCase() : "Send "
                    })]
                })
            };
            var h = p
        },
        275: function(e, s, t) {
            var a = t(5893);
            t(7294);
            let l = e => {
                let {
                    data: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: "",
                    children: [(0, a.jsx)("div", {
                        className: "grid min-h-[300px] place-items-center",
                        children: (0, a.jsx)("div", {
                            className: "pb-6",
                            children: (0, a.jsx)("div", {
                                className: "flex gap-6 flex-col mt-6 px-6 text-center",
                                children: (0, a.jsxs)("div", {
                                    className: "",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-[#6A9FFB]",
                                        children: "Exchange Complete"
                                    }), (0, a.jsx)("div", {
                                        className: "text-2xl",
                                        children: "Sending to destination wallet address..."
                                    })]
                                })
                            })
                        })
                    }), (0, a.jsx)("a", {
                        href: "/",
                        className: "bg-accent/20 border border-accent block text-center w-full py-4  font-bold",
                        children: "Mix Again ?"
                    })]
                })
            };
            s.Z = l
        },
        9066: function(e, s, t) {
            var a = t(5893);
            t(7294);
            var l = t(8130),
                n = t(4855);
            let r = e => {
                let {
                    data: s,
                    handleCancel: t
                } = e, r = e => {
                    let {
                        hours: s,
                        minutes: t,
                        seconds: l,
                        completed: n
                    } = e;
                    return n ? (0, a.jsx)(Completionist, {}) : (0, a.jsxs)("span", {
                        className: "font-bold",
                        children: [t, ":", l]
                    })
                };
                return (0, a.jsxs)("div", {
                    className: "",
                    children: [(0, a.jsx)("div", {
                        className: "grid ",
                        children: (0, a.jsxs)("div", {
                            className: "p-6",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center justify-between mt-6",
                                children: [(0, a.jsx)("div", {
                                    className: "text-2xl",
                                    children: "Waiting for transfer..."
                                }), (0, a.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-[#6A9FFB] ",
                                        children: "Time Remaining"
                                    }), (0, a.jsx)(l.ZP, {
                                        date: Date.now() + (null == s ? void 0 : s.expires) * 1e3,
                                        renderer: r
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "flex items-center justify-between mt-6 px-6",
                                children: (0, a.jsxs)("div", {
                                    className: "flex-grow space-y-3",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex-grow",
                                        children: [(0, a.jsx)("label", {
                                            class: "block mb-3 text-sm font-medium text-gray-600",
                                            name: "name",
                                            children: "SEND"
                                        }), (0, a.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, a.jsx)("input", {
                                                class: "block w-full px-6 py-3 text-white bg-[#131522] border border-white/10 appearance-none  placeholder:text-gray-400 focus:border-[#4C00FF] focus:outline-none focus:ring-[#4C00FF] sm:text-sm",
                                                value: "".concat(null == s ? void 0 : s.order.invoiced_amount, " ").concat(null == s ? void 0 : s.order.from_currency)
                                            }), (0, a.jsx)(n.CopyToClipboard, {
                                                text: null == s ? void 0 : s.order.invoiced_amount,
                                                onCopy: () => alert("Copied"),
                                                children: (0, a.jsx)("button", {
                                                    className: "bg-white/10 rounded absolute top-1/2 -translate-y-1/2 py-1 text-xs px-3  right-4",
                                                    children: "COPY"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex-grow ",
                                        children: [(0, a.jsx)("label", {
                                            class: "block mb-3 text-sm font-medium text-gray-600",
                                            name: "name",
                                            children: "To Mix wallet address"
                                        }), (0, a.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, a.jsx)("input", {
                                                class: "block w-full px-6 py-3 text-white bg-[#131522] border border-white/10 appearance-none  placeholder:text-gray-400 focus:border-[#4C00FF] focus:outline-none focus:ring-[#4C00FF] sm:text-sm",
                                                value: "".concat(null == s ? void 0 : s.deposit_address, " ")
                                            }), (0, a.jsx)(n.CopyToClipboard, {
                                                text: null == s ? void 0 : s.deposit_address,
                                                onCopy: () => alert("Copied"),
                                                children: (0, a.jsx)("button", {
                                                    className: "bg-white/10 rounded absolute top-1/2 -translate-y-1/2 py-1 text-xs px-3  right-4",
                                                    children: "COPY"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), (0, a.jsx)("button", {
                        onClick: t,
                        className: "bg-red-600/20 border border-red-600 w-full py-4 mt-4  font-bold",
                        children: "Cancel"
                    })]
                })
            };
            s.Z = r
        },
        402: function(e, s, t) {
            var a = t(5893);
            t(7294);
            let l = e => {
                let {
                    data: s,
                    confirm: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "",
                    children: [(0, a.jsx)("div", {
                        className: "grid min-h-[300px] place-items-center",
                        children: (0, a.jsx)("div", {
                            className: "pb-6",
                            children: (0, a.jsxs)("div", {
                                className: "flex gap-6 flex-col mt-6 px-6 text-center",
                                children: [(0, a.jsxs)("div", {
                                    className: "",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-[#6A9FFB]",
                                        children: "Transfer Received"
                                    }), (0, a.jsx)("div", {
                                        className: "text-2xl",
                                        children: "Waiting for confirmation..."
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "",
                                    children: [(0, a.jsx)("div", {
                                        children: "Confirmation Needed"
                                    }), (0, a.jsx)("div", {
                                        className: "text-2xl font-bold text-[#6A9FFB]",
                                        children: t
                                    })]
                                })]
                            })
                        })
                    }), (0, a.jsx)("a", {
                        href: "/",
                        className: "bg-accent/20 border border-accent block text-center w-full py-4   font-bold",
                        children: "Mix Again ?"
                    })]
                })
            };
            s.Z = l
        },
        7960: function(e, s, t) {
            var a = t(4529);
            let l = (0, a.Ue)(e => ({
                pay: {
                    name: "ETH",
                    amount: .1,
                    code: "ETH"
                },
                setPay: s => e({
                    pay: {
                        name: s.name,
                        amount: s.amount,
                        code: s.code
                    }
                }),
                receive: {
                    name: "Monero",
                    amount: 0,
                    code: "XMR"
                },
                setReceive: s => e({
                    receive: {
                        name: s.name,
                        amount: s.amount,
                        code: s.code
                    }
                }),
                destination: null,
                setDestination: s => e({
                    destination: s
                }),
                refundAddress: null,
                setRefundAddress: s => e({
                    refundAddress: s
                })
            }));
            s.Z = l
        }
    }
]);