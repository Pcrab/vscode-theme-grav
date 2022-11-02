import { Palette, ThemeType } from "../types";
import { getThemeName } from "./utils";

const blank = "#00000000";
const buildTheme = (type: ThemeType, palette: Palette) => {
    return {
        name: getThemeName(type),
        type,
        semanticHighlighting: true,
        colors: {
            foreground: palette.gray800,
            focusBorder: blank,
            disabledForeground: palette.slate400,
            // "widget.shadow": palette.gray300,
            // "selection.background": "#888844",
            descriptionForeground: palette.gray800,
            errorForeground: palette.gray800,
            "icon.foreground": palette.gray800,
            "sash.hoverBorder": blank,

            "window.activeBorder": palette.slate400,
            "window.inactiveBorder": palette.slate400,

            "textCodeBlock.background": palette.slate400,
            "textLink.activeForeground": palette.violet400,
            "textLink.foreground": palette.violet900,

            "button.background": palette.violet700,
            "button.hoverBackground": palette.violet800,

            "dropdown.background": palette.violet50,

            "input.background": palette.gray200,
            "input.border": blank,
            "input.foreground": palette.violet900,
            "input.placeholderForeground": `${palette.violet800}88`,

            "scrollbarSlider.background": `${palette.gray300}aa`,
            "scrollbarSlider.hoverBackground": `${palette.gray500}44`,
            "scrollbarSlider.activeBackground": `${palette.gray600}44`,

            "badge.foreground": palette.gray800,
            "badge.background": palette.violet200,

            "progressBar.background": palette.violet200,

            "list.activeSelectionBackground": palette.violet100,
            "list.activeSelectionForeground": palette.gray800,
            "list.inactiveSelectionBackground": palette.violet100,
            "list.hoverBackground": palette.violet100,

            "activityBar.background": palette.violet300,
            "activityBar.foreground": palette.violet800,
            "activityBar.inactiveForeground": palette.violet50,
            "activityBarBadge.background": palette.violet400,

            "sideBar.background": palette.violet50,
            "sideBar.border": palette.gray300,

            "minimap.background": palette.violet50,

            "editorGroupHeader.tabsBackground": palette.violet50,
            "tab.inactiveBackground": palette.violet50,
            "tab.hoverBackground": palette.violet200,
            "tab.activeBorderTop": palette.gray500,
            "tab.border": palette.gray200,

            "editor.background": palette.violet50,
            "editor.foreground": palette.gray700,
            "editorCursor.background": palette.violet200,
            "editorCursor.foreground": palette.gray500,

            "editor.selectionBackground": palette.violet300,
            "editor.inactiveSelectionBackground": `${palette.violet300}aa`,
            "editor.selectionHighlightBackground": `${palette.violet300}88`,
            "editor.wordHighlightBackground": palette.violet300,
            "editor.findMatchBackground": palette.purple400,
            "editor.findMatchHighlightBackground": palette.purple100,
            "editor.hoverHighlightBackground": palette.violet200,
            "editor.lineHighlightBackground": `${palette.gray300}88`,
            "editorLineNumber.foreground": palette.violet400,
            "editorLink.activeForeground": palette.violet800,
            "editorRuler.foreground": palette.gray300,

            "editorBracketHighlight.foreground1": "#ff8787",
            "editorBracketHighlight.foreground2": "#66b395",
            "editorBracketHighlight.foreground3": "#e7d38f",
            "editorBracketHighlight.foreground4": "#6097eb",
            "editorBracketHighlight.foreground5": "#c776dc",
            "editorBracketHighlight.foreground6": "#66cece",
        },
        // tokenColors: [
        //     {
        //         name: "Comments",
        //         scope: ["comment", "punctuation.definition.comment"],
        //         settings: {
        //             fontStyle: "italic",
        //             foreground: "#AAAAAA",
        //         },
        //     },
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
        // ],
    };
};

export default buildTheme;
