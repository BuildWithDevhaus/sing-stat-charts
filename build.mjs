import * as esbuild from 'esbuild'

esbuild.build({
    entryPoints: ['src/charts/chart1.ts'],
    bundle: true,
    outfile: 'dist/out.js',
    minify: true
});

