import generateTheme from "./theme";

generateTheme().catch((e) => {
    console.log(e);
    return;
});
