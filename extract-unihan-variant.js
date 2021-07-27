import {readFileSync,writeFileSync} from 'fs'

const lines=readFileSync('Unihan_Variants.txt','utf8').split(/\r?\n/);

const mapping={};
lines.forEach(line=>{
    const m=line.match(/U\+([\dA-F]{4})\tkSimplifiedVariant\tU\+([\dA-F]{4})$/);
    if (m) {
        const tc=String.fromCharCode(parseInt(m[1],16));
        const sc=String.fromCharCode(parseInt(m[2],16))
        if (!mapping[sc]) mapping[sc]='';
        mapping[sc]+=tc;
    }
})
const onemany=[];
let scstr='',tcstr='';
for (let sc in mapping) {
    const val='"'+sc+'":"'+mapping[sc]+'"';
    if (mapping[sc].length==1) {
        scstr+=sc.charCodeAt(0).toString(16);
        tcstr+=mapping[sc].charCodeAt(0).toString(16);
    }
    else onemany.push(val);
}

writeFileSync('simtra-oneone.txt',scstr+'\n'+tcstr,'utf8');
writeFileSync('simtra-many.json','{'+onemany.join(',\n')+'}','utf8');