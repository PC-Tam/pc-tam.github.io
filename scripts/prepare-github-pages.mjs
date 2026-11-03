import {cpSync,copyFileSync,existsSync,mkdirSync,writeFileSync} from 'node:fs';
import path from 'node:path';
const root=process.cwd();
if(!existsSync(path.join(root,'dist/client/index.html')))throw new Error('Run the production build first');
const docs=path.join(root,'docs');
mkdirSync(docs,{recursive:true});
cpSync(path.join(root,'dist/client'),docs,{recursive:true,force:true});
writeFileSync(path.join(docs,'.nojekyll'),'');
copyFileSync(path.join(docs,'index.html'),path.join(docs,'404.html'));
for(const route of ['play','myworks']){mkdirSync(path.join(docs,route),{recursive:true});copyFileSync(path.join(docs,'index.html'),path.join(docs,route,'index.html'));}
console.log('GitHub Pages files ready in docs/');
