import * as esbuild from 'esbuild'
import buildConfig from './buildConfig.mjs';

let context = await esbuild.context(buildConfig);

await context.watch();
console.log("watching for file changes...");