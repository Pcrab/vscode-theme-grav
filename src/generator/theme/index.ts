import buildTheme from "./builder";
import { checkDir, writeThemes } from "./utils";

const generateTheme = async () => {
    await checkDir();
    const light = buildTheme("light");
    const dark = buildTheme("dark");
    await writeThemes({ light, dark });
};

export default generateTheme;
