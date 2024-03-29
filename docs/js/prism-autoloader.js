!function () {
    if ("undefined" != typeof self && self.Prism && self.document && document.createElement) {
        var r = {
                javascript: "clike",
                actionscript: "javascript",
                arduino: "cpp",
                aspnet: ["markup", "csharp"],
                bison: "c",
                c: "clike",
                csharp: "clike",
                cpp: "c",
                coffeescript: "javascript",
                crystal: "ruby",
                "css-extras": "css",
                d: "clike",
                dart: "clike",
                django: "markup-templating",
                ejs: ["javascript", "markup-templating"],
                erb: ["ruby", "markup-templating"],
                fsharp: "clike",
                flow: "javascript",
                glsl: "clike",
                gml: "clike",
                go: "clike",
                groovy: "clike",
                haml: "ruby",
                handlebars: "markup-templating",
                haxe: "clike",
                java: "clike",
                javadoc: ["markup", "java", "javadoclike"],
                jolie: "clike",
                jsdoc: ["javascript", "javadoclike"],
                "js-extras": "javascript",
                "js-templates": "javascript",
                jsonp: "json",
                json5: "json",
                kotlin: "clike",
                less: "css",
                lilypond: "scheme",
                markdown: "markup",
                "markup-templating": "markup",
                n4js: "javascript",
                nginx: "clike",
                objectivec: "c",
                opencl: "cpp",
                parser: "markup",
                php: ["clike", "markup-templating"],
                phpdoc: ["php", "javadoclike"],
                "php-extras": "php",
                plsql: "sql",
                processing: "clike",
                protobuf: "clike",
                pug: ["markup", "javascript"],
                qore: "clike",
                jsx: ["markup", "javascript"],
                tsx: ["jsx", "typescript"],
                reason: "clike",
                ruby: "clike",
                sass: "css",
                scss: "css",
                scala: "java",
                "shell-session": "bash",
                smarty: "markup-templating",
                soy: "markup-templating",
                swift: "clike",
                tap: "yaml",
                textile: "markup",
                tt2: ["clike", "markup-templating"],
                twig: "markup",
                typescript: "javascript",
                "t4-cs": ["t4-templating", "csharp"],
                "t4-vb": ["t4-templating", "visual-basic"],
                vala: "clike",
                vbnet: "basic",
                velocity: "markup",
                wiki: "markup",
                xeora: "markup",
                xquery: "markup"
            }, n = {
                html: "markup",
                xml: "markup",
                svg: "markup",
                mathml: "markup",
                js: "javascript",
                adoc: "asciidoc",
                shell: "bash",
                rbnf: "bnf",
                cs: "csharp",
                dotnet: "csharp",
                coffee: "coffeescript",
                jinja2: "django",
                "dns-zone": "dns-zone-file",
                dockerfile: "docker",
                gamemakerlanguage: "gml",
                hs: "haskell",
                tex: "latex",
                context: "latex",
                ly: "lilypond",
                emacs: "lisp",
                elisp: "lisp",
                "emacs-lisp": "lisp",
                md: "markdown",
                n4jsd: "n4js",
                objectpascal: "pascal",
                px: "pcaxis",
                py: "python",
                rb: "ruby",
                ts: "typescript",
                t4: "t4-cs",
                vb: "visual-basic",
                xeoracube: "xeora",
                yml: "yaml"
            }, l = {}, e = document.getElementsByTagName("script"), a = e[e.length - 1], t = "components/",
            s = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)js$/i, i = /[\w-]+\.(?:min\.)js$/i;
        if (a.hasAttribute("data-autoloader-path")) t = a.getAttribute("data-autoloader-path").trim().replace(/\/?$/, "/"); else {
            var c = a.src;
            s.test(c) ? t = c.replace(s, "components/") : i.test(c) && (t = c.replace(i, "components/"))
        }
        var p = Prism.plugins.autoloader = {languages_path: t, use_minified: !0, loadLanguages: o};
        Prism.hooks.add("complete", function (e) {
            e.element && e.language && !e.grammar && "none" !== e.language && function (e, a) {
                e in n && (e = n[e]);
                var t = a.getAttribute("data-dependencies"), s = a.parentElement;
                !t && s && "pre" === s.tagName.toLowerCase() && (t = s.getAttribute("data-dependencies")), o(t = t ? t.split(/\s*,\s*/g) : [], function () {
                    m(e, function () {
                        Prism.highlightElement(a)
                    })
                })
            }(e.language, e.element)
        })
    }

    function o(e, a, t) {
        "string" == typeof e && (e = [e]);
        var s = e.length, i = 0, c = !1;

        function r() {
            c || ++i === s && a && a(e)
        }

        0 !== s ? e.forEach(function (e) {
            m(e, r, function () {
                c || (c = !0, t && t(e))
            })
        }) : a && setTimeout(a, 0)
    }

    function m(a, t, s) {
        var i = 0 <= a.indexOf("!");
        a = a.replace("!", ""), a = n[a] || a;
        var e = function () {
            var e = l[a];
            if (e || (e = l[a] = {callbacks: []}), e.callbacks.push({
                success: t,
                error: s
            }), !i && Prism.languages[a]) u(a, "success"); else if (!i && e.error) u(a, "error"); else if (i || !e.loading) {
                e.loading = !0, function (e, a, t) {
                    var s = document.createElement("script");
                    s.src = e, s.async = !0, s.onload = function () {
                        document.body.removeChild(s), a && a()
                    }, s.onerror = function () {
                        document.body.removeChild(s), t && t()
                    }, document.body.appendChild(s)
                }(function (e) {
                    return p.languages_path + "prism-" + e + (p.use_minified ? ".min" : "") + ".js"
                }(a), function () {
                    e.loading = !1, u(a, "success")
                }, function () {
                    e.loading = !1, e.error = !0, u(a, "error")
                })
            }
        }, c = r[a];
        c && c.length ? o(c, e, s) : e()
    }

    function u(e, a) {
        if (l[e]) {
            for (var t = l[e].callbacks, s = 0, i = t.length; s < i; s++) {
                var c = t[s][a];
                c && setTimeout(c, 0)
            }
            t.length = 0
        }
    }
}();