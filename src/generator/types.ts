type ThemeType = "light" | "dark" | "light-highcontract" | "dark-highcontract";

type colorEle =
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
    | "f"
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F";
type color = `#${string}`;
interface Palette {
    white: color;
    red: color;
    green: color;
    blue: color;
    yellow: color;
    cyan: color;
    magenta: color;
    black: color;
    main: color;
    secondary: color;
    foreground: color;
}

export { ThemeType, Palette };
