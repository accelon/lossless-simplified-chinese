import {toLosslessSim,fromLosslessSim} from './index.js'
import {strictEqual} from 'assert'
let passcount=0;
const testcount=3;

const text='大道之行也．天下為公．選賢與能．講信脩睦．故人不獨親其親．不獨子其子．使老有所終．壯有所用．幼有所長．矜寡孤獨廢疾者．皆有所養．男有分．女有歸．貨惡其棄於地也．不必藏於已．力惡其不出於身也．不必為已．是故謀閉而不興．盜竊亂賊而不作．故外戶而不閉．是謂大同';
//console.log('orignal',text,'\nLossless Simplified',toLosslessSim(text),'\nrestore',fromLosslessSim(toLosslessSim(text)));

const text2='廣式炒麵 複雜 覆滅';
const text3='天后宮 後宮佳麗'
console.log(text2,'>>',toLosslessSim(text2));
passcount+= (fromLosslessSim(toLosslessSim(text))==text)?1:0;
passcount+= (fromLosslessSim(toLosslessSim(text2))==text2)?1:0;
passcount+= (fromLosslessSim(toLosslessSim(text3))==text3)?1:0;

console.log(text3,'>>',toLosslessSim(text3));

console.log('Passed test',passcount,'test count',testcount);
