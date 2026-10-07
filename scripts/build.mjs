import {build} from 'esbuild';
import {mkdir,cp,writeFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
await cp('evidence/fictional-evidence.html','dist/sample-evidence.html');
await build({entryPoints:['src/engine.ts'],outfile:'dist/engine.mjs',bundle:true,platform:'browser',format:'esm',target:'es2022',legalComments:'eof'});
await build({entryPoints:['src/reused/blockchair.ts'],outfile:'dist/blockchair.mjs',bundle:true,platform:'node',format:'esm',target:'es2022',legalComments:'eof'});
await writeFile('dist/build-info.json',JSON.stringify({product:'MilestoneProof',version:'0.1.0',scope:'BCH coin evidence assembly'},null,2));
console.log('Built MilestoneProof static app and reproducible report engine.');
