import fs from "fs/promises";
import path from "path";
import { themesDir, themeName } from "../constants";
import { ThemeType } from "../types";

const checkDir = async () => {
    await fs.rm(themesDir, { recursive: true });
    await fs.mkdir(themesDir);
};

const getThemeName = (type: ThemeType) => {
    return `${themeName}-${type}`;
};

const writeTheme = async (type: ThemeType, data: unknown) => {
    await fs.writeFile(
        path.join(themesDir, `${getThemeName(type)}.json`),
        JSON.stringify(data),
    );
};

const writeThemes = async (options: { light: unknown; dark: unknown }) => {
    await Promise.all([
        writeTheme("light", options.light),
        writeTheme("dark", options.dark),
    ]);
};

export { checkDir, getThemeName, writeThemes };
