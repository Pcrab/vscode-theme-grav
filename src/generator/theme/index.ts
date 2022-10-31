import { darkPalette, lightPalette } from "../palette";
import buildTheme from "./builder";
import { checkDir, writeThemes } from "./utils";

const generateTheme = async () => {
    await checkDir();
    const light = buildTheme("light", lightPalette);
    const dark = buildTheme("dark", darkPalette);
    await writeThemes({ light, dark });
};

export default generateTheme;
