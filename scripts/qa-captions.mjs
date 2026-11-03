import { readFileSync } from 'node:fs';
// Usage: node scripts/qa-captions.mjs article.gutenberg.html
// Deterministic caption checks supplement editorial visual review.
const file=process.argv[2];
if(!file){ console.error('Usage: node scripts/qa-captions.mjs FILE'); process.exit(2); }
const html=readFileSync(file,'utf8');
const figures=[...html.matchAll(/<figure\b[\s\S]*?<\/figure>/g)].map(x=>x[0]).filter(s=>/<img\b/i.test(s));
const errors=[];
if(!figures.length)errors.push('No image figures found');
figures.forEach((f,i)=>{
  const img=f.indexOf('<img');
  const endImg=f.indexOf('>',img);
  const cap=f.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i);
  if(!cap){errors.push('Figure '+(i+1)+' has no caption');return;}
  if(f.indexOf('<figcaption')<endImg)errors.push('Figure '+(i+1)+' caption comes before image');
  const words=cap[1].replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
  if(/\b(?:not a|not an|not the|isn't|wasn't|were not|does not)\b/i.test(words))
    errors.push('Figure '+(i+1)+' uses contrast-negation wording; describe content and source');
});
if(errors.length){errors.forEach(e=>console.error(e));process.exit(1);}
console.log('PASS: '+figures.length+' images with following, descriptive captions');
