import fs from "fs/promises";
import path from "path";

const themesDir = path.join(__dirname, "../../themes");

const themeName = "quark";

const checkDir = async () => {
    await fs.rm(themesDir, { recursive: true });
    await fs.mkdir(themesDir);
};

const writeTheme = async (
    type: "light" | "dark" | "light-highcontract" | "dark-highcontract",
    data: unknown,
) => {
    await fs.writeFile(
        path.join(themesDir, `${themeName}-${type}.json`),
        JSON.stringify(data),
    );
};

const writeThemes = async (options: { light: unknown; dark: unknown }) => {
    await Promise.all([
        async () => await writeTheme("light", options.light),
        async () => await writeTheme("dark", options.dark),
    ]);
};

const generateTheme = async () => {
    await checkDir();
    await writeThemes({ light: {}, dark: {} });
};

export default generateTheme;
