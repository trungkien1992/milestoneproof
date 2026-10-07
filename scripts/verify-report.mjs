import {readFile} from 'node:fs/promises';
import {webcrypto} from 'node:crypto';
import {verifyReport} from '../dist/engine.mjs';
if(!globalThis.crypto)globalThis.crypto=webcrypto;
try{if(!process.argv[2])throw Error('Usage: node scripts/verify-report.mjs report.json');const result=await verifyReport(JSON.parse(await readFile(process.argv[2],'utf8')));console.log(JSON.stringify(result,null,2));}catch(e){console.error(e.message);process.exitCode=1;}
