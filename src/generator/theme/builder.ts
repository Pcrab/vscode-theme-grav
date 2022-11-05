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
    ) => `${options[type]}${opacity}`;
    const palette = (key: keyof typeof ThemeColors, opacity: Opacity = "ff") =>
        `${pick(
            {
                light: ThemeColors[key][0],
                dark: ThemeColors[key][1],
            },
            opacity,
        )}`;
    const normal = NormalColors;

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
                light: normal.red[6],
                dark: normal.red[3],
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
            {
                name: "Comments",
                scope: ["comment", "punctuation.definition.comment"],
                settings: {
                    fontStyle: "italic",
                    // foreground: palette.gray400,
                },
            },
            {
                scope: [
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
                settings: {
                    // foreground: palette.gray400,
                },
            },
            //     {
            //         name: "Comments: Preprocessor",
            //         scope: "comment.block.preprocessor",
            //         settings: {
            //             fontStyle: "",
            //             foreground: "#AAAAAA",
            //         },
            //     },
            //     {
            //         name: "Comments: Documentation",
            //         scope: ["comment.documentation", "comment.block.documentation"],
            //         settings: {
            //             foreground: "#448C27",
            //         },
            //     },
            //     {
            //         name: "Invalid - Illegal",
            //         scope: "invalid.illegal",
            //         settings: {
            //             foreground: "#660000",
            //         },
            //     },
            //     {
            //         name: "Operators",
            //         scope: "keyword.operator",
            //         settings: {
            //             foreground: "#777777",
            //         },
            //     },
            //     {
            //         name: "Keywords",
            //         scope: ["keyword", "storage"],
            //         settings: {
            //             foreground: "#4B83CD",
            //         },
            //     },
            //     {
            //         name: "Types",
            //         scope: ["storage.type", "support.type"],
            //         settings: {
            //             foreground: "#7A3E9D",
            //         },
            //     },
            //     {
            //         name: "Language Constants",
            //         scope: [
            //             "constant.language",
            //             "support.constant",
            //             "variable.language",
            //         ],
            //         settings: {
            //             foreground: "#AB6526",
            //         },
            //     },
            //     {
            //         name: "Variables",
            //         scope: ["variable", "support.variable"],
            //         settings: {
            //             foreground: "#7A3E9D",
            //         },
            //     },
            //     {
            //         name: "Functions",
            //         scope: ["entity.name.function", "support.function"],
            //         settings: {
            //             fontStyle: "bold",
            //             foreground: "#AA3731",
            //         },
            //     },
            //     {
            //         name: "Classes",
            //         scope: [
            //             "entity.name.type",
            //             "entity.other.inherited-class",
            //             "support.class",
            //         ],
            //         settings: {
            //             fontStyle: "bold",
            //             foreground: "#7A3E9D",
            //         },
            //     },
            //     {
            //         name: "Exceptions",
            //         scope: "entity.name.exception",
            //         settings: {
            //             foreground: "#660000",
            //         },
            //     },
            //     {
            //         name: "Sections",
            //         scope: "entity.name.section",
            //         settings: {
            //             fontStyle: "bold",
            //         },
            //     },
            //     {
            //         name: "Numbers, Characters",
            //         scope: ["constant.numeric", "constant.character", "constant"],
            //         settings: {
            //             foreground: "#AB6526",
            //         },
            //     },
            //     {
            //         name: "Strings",
            //         scope: "string",
            //         settings: {
            //             foreground: "#448C27",
            //         },
            //     },
            //     {
            //         name: "Strings: Escape Sequences",
            //         scope: "constant.character.escape",
            //         settings: {
            //             foreground: "#777777",
            //         },
            //     },
            //     {
            //         name: "Strings: Regular Expressions",
            //         scope: "string.regexp",
            //         settings: {
            //             foreground: "#4B83CD",
            //         },
            //     },
            //     {
            //         name: "Strings: Symbols",
            //         scope: "constant.other.symbol",
            //         settings: {
            //             foreground: "#AB6526",
            //         },
            //     },
            //     {
            //         name: "Punctuation",
            //         scope: "punctuation",
            //         settings: {
            //             foreground: "#777777",
            //         },
            //     },
            //     {
            //         name: "HTML: Doctype Declaration",
            //         scope: [
            //             "meta.tag.sgml.doctype",
            //             "meta.tag.sgml.doctype string",
            //             "meta.tag.sgml.doctype entity.name.tag",
            //             "meta.tag.sgml punctuation.definition.tag.html",
            //         ],
            //         settings: {
            //             foreground: "#AAAAAA",
            //         },
            //     },
            //     {
            //         name: "HTML: Tags",
            //         scope: [
            //             "meta.tag",
            //             "punctuation.definition.tag.html",
            //             "punctuation.definition.tag.begin.html",
            //             "punctuation.definition.tag.end.html",
            //         ],
            //         settings: {
            //             foreground: "#91B3E0",
            //         },
            //     },
            //     {
            //         name: "HTML: Tag Names",
            //         scope: "entity.name.tag",
            //         settings: {
            //             foreground: "#4B83CD",
            //         },
            //     },
            //     {
            //         name: "HTML: Attribute Names",
            //         scope: [
            //             "meta.tag entity.other.attribute-name",
            //             "entity.other.attribute-name.html",
            //         ],
            //         settings: {
            //             fontStyle: "italic",
            //             foreground: "#91B3E0",
            //         },
            //     },
            //     {
            //         name: "HTML: Entities",
            //         scope: [
            //             "constant.character.entity",
            //             "punctuation.definition.entity",
            //         ],
            //         settings: {
            //             foreground: "#AB6526",
            //         },
            //     },
            //     {
            //         name: "CSS: Selectors",
            //         scope: [
            //             "meta.selector",
            //             "meta.selector entity",
            //             "meta.selector entity punctuation",
            //             "entity.name.tag.css",
            //         ],
            //         settings: {
            //             foreground: "#7A3E9D",
            //         },
            //     },
            //     {
            //         name: "CSS: Property Names",
            //         scope: ["meta.property-name", "support.type.property-name"],
            //         settings: {
            //             foreground: "#AB6526",
            //         },
            //     },
            //     {
            //         name: "CSS: Property Values",
            //         scope: [
            //             "meta.property-value",
            //             "meta.property-value constant.other",
            //             "support.constant.property-value",
            //         ],
            //         settings: {
            //             foreground: "#448C27",
            //         },
            //     },
            //     {
            //         name: "CSS: Important Keyword",
            //         scope: "keyword.other.important",
            //         settings: {
            //             fontStyle: "bold",
            //         },
            //     },
            //     {
            //         name: "Markup: Changed",
            //         scope: "markup.changed",
            //         settings: {
            //             foreground: "#000000",
            //         },
            //     },
            //     {
            //         name: "Markup: Deletion",
            //         scope: "markup.deleted",
            //         settings: {
            //             foreground: "#000000",
            //         },
            //     },
            //     {
            //         name: "Markup: Emphasis",
            //         scope: "markup.italic",
            //         settings: {
            //             fontStyle: "italic",
            //         },
            //     },
            //     {
            //         name: "Markup: Error",
            //         scope: "markup.error",
            //         settings: {
            //             foreground: "#660000",
            //         },
            //     },
            //     {
            //         name: "Markup: Insertion",
            //         scope: "markup.inserted",
            //         settings: {
            //             foreground: "#000000",
            //         },
            //     },
            //     {
            //         name: "Markup: Link",
            //         scope: "meta.link",
            //         settings: {
            //             foreground: "#4B83CD",
            //         },
            //     },
            //     {
            //         name: "Markup: Output",
            //         scope: ["markup.output", "markup.raw"],
            //         settings: {
            //             foreground: "#777777",
            //         },
            //     },
            //     {
            //         name: "Markup: Prompt",
            //         scope: "markup.prompt",
            //         settings: {
            //             foreground: "#777777",
            //         },
            //     },
            //     {
            //         name: "Markup: Heading",
            //         scope: "markup.heading",
            //         settings: {
            //             foreground: "#AA3731",
            //         },
            //     },
            //     {
            //         name: "Markup: Strong",
            //         scope: "markup.bold",
            //         settings: {
            //             fontStyle: "bold",
            //         },
            //     },
            //     {
            //         name: "Markup: Traceback",
            //         scope: "markup.traceback",
            //         settings: {
            //             foreground: "#660000",
            //         },
            //     },
            //     {
            //         name: "Markup: Underline",
            //         scope: "markup.underline",
            //         settings: {
            //             fontStyle: "underline",
            //         },
            //     },
            //     {
            //         name: "Markup Quote",
            //         scope: "markup.quote",
            //         settings: {
            //             foreground: "#7A3E9D",
            //         },
            //     },
            //     {
            //         name: "Markup Lists",
            //         scope: "markup.list",
            //         settings: {
            //             foreground: "#4B83CD",
            //         },
            //     },
            //     {
            //         name: "Markup Styling",
            //         scope: ["markup.bold", "markup.italic"],
            //         settings: {
            //             foreground: "#448C27",
            //         },
            //     },
            //     {
            //         name: "Markup Inline",
            //         scope: "markup.inline.raw",
            //         settings: {
            //             fontStyle: "",
            //             foreground: "#AB6526",
            //         },
            //     },
            //     {
            //         name: "Extra: Diff Range",
            //         scope: ["meta.diff.range", "meta.diff.index", "meta.separator"],
            //         settings: {
            //             foreground: "#434343",
            //         },
            //     },
            //     {
            //         name: "Extra: Diff From",
            //         scope: "meta.diff.header.from-file",
            //         settings: {
            //             foreground: "#434343",
            //         },
            //     },
            //     {
            //         name: "Extra: Diff To",
            //         scope: "meta.diff.header.to-file",
            //         settings: {
            //             foreground: "#434343",
            //         },
            //     },
        ],
    };
};

export default buildTheme;
