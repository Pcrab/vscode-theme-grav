import { BuildOptions } from "esbuild";

const config: BuildOptions = {
    entryPoints: ["./src/extension-client.ts", "./src/extension-web.ts"],
    outdir: "dist",
    bundle: true,
    external: ["vscode"],
    format: "cjs",
    minify: true,
    platform: "node",
    sourcemap: true,
};

export default config;
