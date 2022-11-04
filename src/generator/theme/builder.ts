// import { NormalColors, ThemeColors } from "../palette";
import { ThemeColors } from "../palette";
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
const buildTheme = (type: ThemeType) => {
    const pick = (options: { [k in ThemeType]: color }) => options[type];
    const palette = (
        key: keyof typeof ThemeColors,
        opacity: `${hex}${hex}` = "ff",
    ) =>
        `${pick({
            light: ThemeColors[key][0],
            dark: ThemeColors[key][1],
        })}${opacity}`;
    // const normal = NormalColors;

    const background = palette("background");
    const foreground = palette("foreground");
    return {
        name: getThemeName(type),
        type,
        semanticHighlighting: true,
        colors: {
            foreground,
            focusBorder: "#00000000",
            disabledForeground: palette("disabled"),
            "widget.shadow": pick({ light: "#d1d5db", dark: "#" }),
            descriptionForeground: foreground,
            errorForeground: foreground,
            "icon.foreground": foreground,
            "sash.hoverBorder": "#00000000",
            "window.activeBorder": palette("border"),
            "window.inactiveBorder": palette("border"),
            // "textCodeBlock.background": palette.slate400,
            // "textLink.activeForeground": palette.violet400,
            "textLink.foreground": foreground,
            // "button.background": palette.violet700,
            // "button.hoverBackground": palette.violet800,
            "dropdown.background": background,
            // "input.background": `${palette.gray300}44`,
            // "input.border": blank,
            "input.foreground": foreground,
            // "input.placeholderForeground": `${palette.violet800}88`,
            // "scrollbar.shadow": `#6a737d33`,
            // "scrollbarSlider.background": `${palette.gray300}aa`,
            // "scrollbarSlider.hoverBackground": `${palette.gray500}44`,
            // "scrollbarSlider.activeBackground": `${palette.gray600}44`,
            // "badge.foreground": palette.gray800,
            // "badge.background": palette.violet200,
            // "progressBar.background": palette.violet200,
            // "list.activeSelectionBackground": palette.violet100,
            // "list.activeSelectionForeground": palette.gray800,
            // "list.inactiveSelectionBackground": palette.violet100,
            // "list.hoverBackground": palette.violet100,
            // "activityBar.background": palette.violet300,
            // "activityBar.foreground": palette.violet800,
            // "activityBar.inactiveForeground": palette.violet50,
            // "activityBarBadge.background": palette.violet400,
            // "sideBar.background": palette.violet50,
            // "sideBar.border": palette.gray300,
            // "editorGroupHeader.tabsBackground": palette.violet50,
            // "tab.inactiveBackground": palette.violet50,
            // "tab.hoverBackground": palette.violet200,
            // "tab.activeBorderTop": palette.gray500,
            // "tab.border": palette.gray200,
            // "editor.background": palette.violet50,
            // "editor.foreground": palette.gray700,
            // "editorCursor.background": palette.violet200,
            // "editorCursor.foreground": palette.gray500,
            // "editor.selectionBackground": palette.violet300,
            // "editor.inactiveSelectionBackground": `${palette.violet300}aa`,
            // "editor.selectionHighlightBackground": `${palette.violet300}88`,
            // "editor.wordHighlightBackground": palette.violet300,
            // "editor.findMatchBackground": palette.purple400,
            // "editor.findMatchHighlightBackground": palette.purple100,
            // "editor.hoverHighlightBackground": palette.violet200,
            // "editor.lineHighlightBackground": `${palette.violet200}44`,
            // "editorLineNumber.foreground": palette.violet400,
            // "editorLink.activeForeground": palette.violet800,
            // "editorRuler.foreground": palette.gray300,
            // "editorBracketHighlight.foreground1": palette.red600,
            // "editorBracketHighlight.foreground2": palette.cyan500,
            // "editorBracketHighlight.foreground3": palette.yellow500,
            // "editorBracketHighlight.foreground4": palette.blue500,
            // "editorBracketHighlight.foreground5": palette.purple400,
            // "editorBracketHighlight.foreground6": palette.sky500,
            // "diffEditor.insertedTextBackground": palette.cyan50,
            // "diffEditor.removedTextBackground": palette.pink100,
            // "editorWidget.background": palette.violet50,
            // "peekViewEditor.background": palette.violet100,
            // "peekViewResult.background": palette.violet100,
            // "peekViewEditor.matchHighlightBackground": palette.pink100,
            // "statusBar.background": palette.violet50,
            "statusBar.foreground": foreground,
            // "statusBar.debuggingBackground": palette.red200,
            // "statusBar.debuggingForeground": palette.red900,
            // "statusBarItem.errorBackground": palette.red900,
            // "statusBarItem.errorForeground": palette.violet50,
            // "statusBarItem.warningBackground": palette.yellow900,
            // "statusBarItem.warningForeground": palette.violet50,
            // "titleBar.activeBackground": palette.violet50,
            // "titleBar.activeForeground": palette.gray900,
            // "titleBar.inactiveBackground": palette.violet50,
            // "titleBar.inactiveForeground": palette.gray500,
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
