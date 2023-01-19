import * as esbuild from 'esbuild'

let context = await esbuild.context({
    entryPoints: ['src/charts/chart1.ts'],
    bundle: true,
    outfile: 'dist/out.js',
    minify: true
});

await context.watch();
console.log("watching for file changes...");