const fs=require('fs'),path=require('path'),ts=require('typescript');
const root=path.resolve(process.argv[2] || '.');
const files=[];function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(['.git','node_modules','dist'].includes(e.name))continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(/\.(?:[cm]?js|tsx?)$/.test(p))files.push(p);}}walk(root);
function resolve(s,f){let p;if(s.startsWith('.'))p=path.resolve(path.dirname(f),s);else if(s.startsWith('@/'))p=path.join(root,'client/src',s.slice(2));else if(s.startsWith('@shared/'))p=path.join(root,'shared',s.slice(8));else if(s.startsWith('@assets/'))p=path.join(root,'attached_assets',s.slice(8));else return null;
const cs=[p,p+'.ts',p+'.tsx',p+'.js',p+'.mjs',p+'.cjs',p+'.json',path.join(p,'index.ts'),path.join(p,'index.tsx'),path.join(p,'index.js')];if(/\.[cm]?js$/.test(p))cs.push(p.replace(/\.[cm]?js$/,'.ts'),p.replace(/\.[cm]?js$/,'.tsx'));
return cs.find(x=>fs.existsSync(x)&&fs.statSync(x).isFile())||false;}
const graph={},missing=[];for(const f of files){const rel=path.relative(root,f);graph[rel]=[];const src=ts.createSourceFile(f,fs.readFileSync(f,'utf8'),ts.ScriptTarget.Latest,true);function visit(n){let v;if((ts.isImportDeclaration(n)||ts.isExportDeclaration(n))&&n.moduleSpecifier)v=n.moduleSpecifier;else if(ts.isCallExpression(n)&&((n.expression.kind===ts.SyntaxKind.ImportKeyword)||(ts.isIdentifier(n.expression)&&n.expression.text==='require')))v=n.arguments[0];if(v&&ts.isStringLiteral(v)){const p=resolve(v.text,f);if(p===false)missing.push({file:rel,import:v.text});else if(p)graph[rel].push(path.relative(root,p));}ts.forEachChild(n,visit);}visit(src);}
if(process.argv[3])fs.writeFileSync(process.argv[3],JSON.stringify({graph,missing},null,2));
if(missing.length) process.exitCode=1;
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
if(pkg.name==='legalwhat'){for(const p of files){if(/(?:cryptocrawl|cryptara|computationalBeam|quantiComp)\//.test(path.relative(root,p)))throw new Error('Trading implementation remains in LegalWhat: '+p);}}
console.log(JSON.stringify({root,files:files.length,missing:missing.length,examples:missing.slice(0,40)}));
