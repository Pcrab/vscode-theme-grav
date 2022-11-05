import { NormalColors, ThemeColors } from "../palette";
import { color, ThemeType } from "../types";
import { getThemeName } from "./utils";

type hex =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f";
type Opacity = `${hex}${hex}`;
const buildTheme = (type: ThemeType) => {
    const pick = (
        options: { [k in ThemeType]: color },
        opacity: Opacity = "ff",
    ): color => `${options[type]}${opacity}`;

    const palette = (
        key: keyof typeof ThemeColors,
        opacity: Opacity = "ff",
    ): color =>
        `${pick(
            {
                light: ThemeColors[key][0],
                dark: ThemeColors[key][1],
            },
            opacity,
        )}`;

    const normal = NormalColors;

    const token = (
        scope: string[],
        settings: {
            fontStyle?: string;
            foreground?: color;
            background?: color;
            content?: string;
        },
        name?: string,
    ) => {
        return {
            name,
            scope,
            settings,
        };
    };

    const blank = "#00000000";
    const main = normal.violet;

    const primary = palette("primary");
    const background = palette("background");
    const activeBackground = palette("activeBackground");
    const foreground = palette("foreground");
    return {
        name: getThemeName(type),
        type,
        semanticHighlighting: true,
        colors: {
            foreground,
            focusBorder: blank,
            disabledForeground: palette("disabled"),
            "widget.shadow": pick({ light: "#d1d5db", dark: "#" }),
            descriptionForeground: foreground,
            errorForeground: foreground,
            "icon.foreground": foreground,
            "sash.hoverBorder": blank,
            "window.activeBorder": palette("border"),
            "window.inactiveBorder": palette("border"),
            "textCodeBlock.background": background,
            "textLink.activeForeground": main[5],
            "textLink.foreground": pick({
                light: main[8],
                dark: main[2],
            }),
            "button.background": primary,
            "button.foreground": background,
            "button.hoverBackground": pick({
                light: main[8],
                dark: main[2],
            }),
            "dropdown.background": background,
            "input.background": pick({ light: main[2], dark: main[8] }, "88"),
            "input.border": blank,
            "input.foreground": foreground,
            "input.placeholderForeground": pick({
                light: main[8],
                dark: main[2],
            }),
            "scrollbar.shadow": `#6a737d33`,
            "scrollbarSlider.background": pick(
                { light: normal.gray[3], dark: normal.gray[6] },
                "aa",
            ),
            "scrollbarSlider.hoverBackground": `${normal.gray[5]}44`,
            "scrollbarSlider.activeBackground": pick(
                { light: normal.gray[7], dark: normal.gray[4] },
                "44",
            ),
            "badge.foreground": foreground,
            "badge.background": pick({
                light: main[2],
                dark: main[7],
            }),
            "progressBar.background": pick({
                light: main[2],
                dark: main[7],
            }),
            "list.activeSelectionBackground": activeBackground,
            "list.activeSelectionForeground": foreground,
            "list.inactiveSelectionBackground": pick({
                light: main[1],
                dark: main[8],
            }),
            "list.hoverBackground": pick({
                light: main[1],
                dark: main[8],
            }),
            "activityBar.background": pick({
                light: main[3],
                dark: main[6],
            }),
            "activityBar.foreground": pick({
                light: main[8],
                dark: main[1],
            }),
            "activityBar.inactiveForeground": pick({
                light: main[0],
                dark: main[9],
            }),
            "activityBarBadge.background": pick({
                light: main[4],
                dark: main[5],
            }),
            "sideBar.background": background,
            "sideBar.border": pick({
                light: normal.gray[3],
                dark: normal.gray[6],
            }),
            "editorGroupHeader.tabsBackground": background,
            "tab.inactiveBackground": background,
            "tab.hoverBackground": activeBackground,
            "tab.activeBorderTop": normal.gray[5],
            "tab.border": pick({
                light: normal.gray[2],
                dark: normal.gray[7],
            }),
            "editor.background": background,
            "editor.foreground": foreground,
            "editorCursor.background": activeBackground,
            "editorCursor.foreground": pick({
                light: normal.gray[5],
                dark: normal.gray[4],
            }),
            "editor.selectionBackground": pick({
                light: main[3],
                dark: main[6],
            }),
            "editor.inactiveSelectionBackground": pick(
                {
                    light: main[3],
                    dark: main[6],
                },
                "aa",
            ),
            "editor.selectionHighlightBackground": pick(
                {
                    light: main[3],
                    dark: main[6],
                },
                "88",
            ),
            "editor.wordHighlightBackground": pick({
                light: main[3],
                dark: main[6],
            }),
            "editor.findMatchBackground": pick({
                light: main[4],
                dark: main[5],
            }),
            "editor.findMatchHighlightBackground": pick({
                light: main[1],
                dark: main[8],
            }),
            "editor.hoverHighlightBackground": activeBackground,
            "editor.lineHighlightBackground": palette("activeBackground", "44"),
            "editorLineNumber.foreground": pick({
                light: main[8],
                dark: main[2],
            }),
            "editorLink.activeForeground": pick({
                light: main[8],
                dark: main[1],
            }),
            "editorRuler.foreground": pick({
                light: normal.gray[3],
                dark: normal.gray[6],
            }),
            "editorBracketHighlight.foreground1": pick({
                light: normal.red[7],
                dark: normal.red[2],
            }),
            "editorBracketHighlight.foreground2": pick({
                light: normal.cyan[5],
                dark: normal.cyan[4],
            }),
            "editorBracketHighlight.foreground3": pick({
                light: normal.yellow[5],
                dark: normal.yellow[4],
            }),
            "editorBracketHighlight.foreground4": pick({
                light: normal.blue[5],
                dark: normal.blue[4],
            }),
            "editorBracketHighlight.foreground5": pick({
                light: normal.purple[4],
                dark: normal.purple[5],
            }),
            "editorBracketHighlight.foreground6": pick({
                light: normal.sky[5],
                dark: normal.sky[4],
            }),
            "diffEditor.insertedTextBackground": pick({
                light: normal.cyan[0],
                dark: normal.cyan[9],
            }),
            "diffEditor.removedTextBackground": pick({
                light: normal.pink[1],
                dark: normal.pink[8],
            }),
            "editorWidget.background": background,
            "peekViewEditor.background": pick({
                light: main[1],
                dark: main[8],
            }),
            "peekViewResult.background": pick({
                light: main[1],
                dark: main[8],
            }),
            "peekViewEditor.matchHighlightBackground": pick({
                light: normal.pink[1],
                dark: normal.pink[8],
            }),
            "statusBar.background": background,
            "statusBar.foreground": foreground,
            "statusBar.debuggingBackground": pick({
                light: normal.red[2],
                dark: normal.red[7],
            }),
            "statusBar.debuggingForeground": pick({
                light: normal.red[9],
                dark: normal.red[0],
            }),
            "statusBarItem.errorBackground": pick({
                light: normal.red[9],
                dark: normal.red[0],
            }),
            "statusBarItem.errorForeground": background,
            "statusBarItem.warningBackground": pick({
                light: normal.yellow[9],
                dark: normal.yellow[0],
            }),
            "statusBarItem.warningForeground": background,
            "titleBar.activeBackground": background,
            "titleBar.activeForeground": pick({
                light: normal.gray[9],
                dark: normal.gray[0],
            }),
            "titleBar.inactiveBackground": background,
            "titleBar.inactiveForeground": normal.gray[5],
            "titleBar.border": pick({
                light: normal.gray[2],
                dark: normal.gray[7],
            }),
        },
        tokenColors: [
            token(
                ["comment", "punctuation.definition.comment"],
                {
                    fontStyle: "italic",
                    foreground: palette("comment"),
                },
                "Comment",
            ),
            token(
                [
                    "delimiter.bracket",
                    "delimiter",
                    "invalid.illegal.character-not-allowed-here.html",
                    "keyword.operator.rest",
                    "keyword.operator.spread",
                    "keyword.operator.type.annotation",
                    "keyword.operator.relational.ts",
                    "meta.brace",
                    "meta.tag.block.any.html",
                    "meta.tag.inline.any.html",
                    "meta.tag.structure.input.void.html",
                    "meta.type.annotation",
                    "storage.type.function.arrow",
                    "keyword.operator.type",
                    "meta.objectliteral.ts",
                    "punctuation",
                ],
                {
                    foreground: palette("punctuation"),
                },
                "Punctuation",
            ),
            token(
                [
                    "constant",
                    "entity.name.constant",
                    "variable.language",
                    "meta.definition.variable",
                ],
                {
                    foreground: palette("constant"),
                },
                "Constant",
            ),
            token(
                ["entity", "entity.name.function"],
                {
                    foreground: palette("function"),
                },
                "Function",
            ),
            token(["keyword.control"], { fontStyle: "italic" }, "Control"),
            token(
                [
                    "entity.name.tag",
                    "tag.html",
                    "keyword",
                    "storage.type.class.jsdoc",
                ],
                {
                    foreground: palette("keyword"),
                },
                "Keyword",
            ),
            token(
                [
                    "storage",
                    "storage.type",
                    "support.type.builtin",
                    "constant.language.undefined",
                    "constant.language.null",
                ],
                {
                    foreground: palette("builtin"),
                },
            ),
            token(
                [
                    "string",
                    "string punctuation.section.embedded source",
                    "attribute.value",
                ],
                {
                    foreground: palette("string"),
                },
                "String",
            ),
            token(
                [
                    "punctuation.definition.string",
                    "punctuation.support.type.property-name",
                ],
                {
                    foreground: palette("string", "aa"),
                },
                "Trans String",
            ),
            token(
                [
                    "support",
                    "property",
                    "meta.property-name",
                    "meta.object-literal.key",
                    "entity.name.tag.yaml",
                    "attribute.name",
                ],
                {
                    foreground: palette("property"),
                },
                "Property",
            ),
            token(
                [
                    "entity.other.attribute-name",
                    "invalid.deprecated.entity.other.attribute-name.html",
                    "variable",
                    "identifier",
                ],
                {
                    foreground: palette("variable"),
                },
                "Variable",
            ),
            token(
                ["support.type.primitive", "entity.name.type"],
                {
                    foreground: palette("type"),
                },
                "Type",
            ),
            token(
                ["namespace"],
                {
                    foreground: palette("namespace"),
                },
                "Namespace",
            ),
            token(
                ["keyword.operator", "meta.var.expr.ts"],
                {
                    foreground: palette("operator"),
                },
                "Operator",
            ),
            token(
                ["invalid", "message.error"],
                {
                    fontStyle: "italic",
                    foreground: normal.red[7],
                },
                "Invalid",
            ),
            // {
            //     scope: "carriage-return",
            //     settings: {
            //         fontStyle: "italic underline",
            //         background: pick({
            //             light: primer.red[5],
            //             dark: primer.red[6],
            //         }),
            //         foreground: primer.gray[0],
            //         content: "^M",
            //     },
            // },
            // {
            //     scope: "message.error",
            //     settings: {
            //         foreground: primer.red[7],
            //     },
            // },
            // {
            //     scope: "string source",
            //     settings: {
            //         foreground,
            //     },
            // },
            // {
            //     scope: "string variable",
            //     settings: {
            //         foreground: vitesse("string"),
            //     },
            // },
            // {
            //     scope: ["source.regexp", "string.regexp"],
            //     settings: {
            //         foreground: vitesse("regex"),
            //     },
            // },
            // {
            //     scope: [
            //         "string.regexp.character-class",
            //         "string.regexp constant.character.escape",
            //         "string.regexp source.ruby.embedded",
            //         "string.regexp string.regexp.arbitrary-repitition",
            //     ],
            //     settings: {
            //         foreground: vitesse("string"),
            //     },
            // },
            // {
            //     scope: "string.regexp constant.character.escape",
            //     settings: {
            //         foreground: vitesse("yellow"),
            //     },
            // },
            // {
            //     scope: ["support.constant"],
            //     settings: {
            //         foreground: vitesse("constant"),
            //     },
            // },
            // {
            //     scope: ["constant.numeric", "number"],
            //     settings: {
            //         foreground: vitesse("number"),
            //     },
            // },
            // {
            //     scope: ["keyword.other.unit"],
            //     settings: {
            //         foreground: vitesse("builtin"),
            //     },
            // },
            // {
            //     scope: ["constant.language.boolean", "constant.language"],
            //     settings: {
            //         foreground: vitesse("boolean"),
            //     },
            // },
            // {
            //     scope: "meta.module-reference",
            //     settings: {
            //         foreground: primary,
            //     },
            // },
            // {
            //     scope: "punctuation.definition.list.begin.markdown",
            //     settings: {
            //         foreground: vitesse("orange"),
            //     },
            // },
            // {
            //     scope: ["markup.heading", "markup.heading entity.name"],
            //     settings: {
            //         fontStyle: "bold",
            //         foreground: primary,
            //     },
            // },
            // {
            //     scope: "markup.quote",
            //     settings: {
            //         foreground: vitesse("interface"),
            //     },
            // },
            // {
            //     scope: "markup.italic",
            //     settings: {
            //         fontStyle: "italic",
            //         foreground,
            //     },
            // },
            // {
            //     scope: "markup.bold",
            //     settings: {
            //         fontStyle: "bold",
            //         foreground,
            //     },
            // },
            // {
            //     scope: "markup.raw",
            //     settings: {
            //         foreground: primary,
            //     },
            // },
            // {
            //     scope: [
            //         "markup.deleted",
            //         "meta.diff.header.from-file",
            //         "punctuation.definition.deleted",
            //     ],
            //     settings: {
            //         background: primer.red[0],
            //         foreground: primer.red[7],
            //     },
            // },
            // {
            //     scope: [
            //         "markup.inserted",
            //         "meta.diff.header.to-file",
            //         "punctuation.definition.inserted",
            //     ],
            //     settings: {
            //         background: primer.green[0],
            //         foreground: primer.green[6],
            //     },
            // },
            // {
            //     scope: ["markup.changed", "punctuation.definition.changed"],
            //     settings: {
            //         background: primer.orange[1],
            //         foreground: primer.orange[6],
            //     },
            // },
            // {
            //     scope: ["markup.ignored", "markup.untracked"],
            //     settings: {
            //         foreground: primer.gray[1],
            //         background: primer.blue[6],
            //     },
            // },
            // {
            //     scope: "meta.diff.range",
            //     settings: {
            //         foreground: pick({
            //             light: primer.purple[5],
            //             dark: primer.purple[6],
            //         }),
            //         fontStyle: "bold",
            //     },
            // },
            // {
            //     scope: "meta.diff.header",
            //     settings: {
            //         foreground: primer.blue[6],
            //     },
            // },
            // {
            //     scope: "meta.separator",
            //     settings: {
            //         fontStyle: "bold",
            //         foreground: primer.blue[6],
            //     },
            // },
            // {
            //     scope: "meta.output",
            //     settings: {
            //         foreground: primer.blue[6],
            //     },
            // },
            // {
            //     scope: [
            //         "brackethighlighter.tag",
            //         "brackethighlighter.curly",
            //         "brackethighlighter.round",
            //         "brackethighlighter.square",
            //         "brackethighlighter.angle",
            //         "brackethighlighter.quote",
            //     ],
            //     settings: {
            //         foreground: primer.gray[6],
            //     },
            // },
            // {
            //     scope: "brackethighlighter.unmatched",
            //     settings: {
            //         foreground: primer.red[7],
            //     },
            // },
            // {
            //     scope: [
            //         "constant.other.reference.link",
            //         "string.other.link",
            //         "punctuation.definition.string.begin.markdown",
            //         "punctuation.definition.string.end.markdown",
            //     ],
            //     settings: {
            //         foreground: vitesse("string"),
            //     },
            // },
            // {
            //     scope: ["markup.underline.link.markdown"],
            //     settings: {
            //         foreground: secondaryForeground,
            //         fontStyle: "underline",
            //     },
            // },
            // {
            //     scope: ["type.identifier"],
            //     settings: {
            //         foreground: vitesse("class"),
            //     },
            // },
            // {
            //     scope: ["entity.other.attribute-name.html.vue"],
            //     settings: {
            //         foreground: vitesse("function"),
            //     },
            // },
            // {
            //     scope: ["invalid.illegal.unrecognized-tag.html"],
            //     settings: {
            //         fontStyle: "normal",
            //     },
            // },
        ],
    };
};

export default buildTheme;
