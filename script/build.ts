import { build } from "esbuild";

build({
    target:"es2015",
    platform:"browser",
    entryPoints:["src/index.tsx"],
    outdir:"dist",
    bundle:true,
    minify:true
});