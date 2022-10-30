import esbuild from "esbuild";
import config from "./esbuild.base";

esbuild
    .build({
        ...config,
    })
    .catch(() => {
        process.exit(1);
    });
