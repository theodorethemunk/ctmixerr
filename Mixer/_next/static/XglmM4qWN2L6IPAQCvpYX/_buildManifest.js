self.__BUILD_MANIFEST = function(s, e, a, c) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, e, a, c, "static/chunks/pages/index-4fb90425dde1a81a.js"],
        "/_error": ["static/chunks/pages/_error-54de1933a164a1ff.js"],
        "/[id]": [s, e, a, c, "static/chunks/pages/[id]-5a97f435ce9022c3.js"],
        sortedPages: ["/", "/_app", "/_error", "/[id]"]
    }
}("static/chunks/95b64a6e-90e12051a1f4b1f0.js", "static/chunks/1a48c3c1-8c85ee3a0aecbd1f.js", "static/chunks/687-29944013a0c7804e.js", "static/chunks/712-d1a8b8ad53145007.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();