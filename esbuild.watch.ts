import esbuild from "esbuild";
import config from "./esbuild.base";

esbuild
    .build({
        ...config,
        watch: true,
    })
    .catch(() => {
        process.exit(1);
    });
