import {toSim,fromSim} from './index.js'
let passcount=0;
const testcount=20;

const text='大道之行也．天下為公．選賢與能．講信脩睦．故人不獨親其親．不獨子其子．使老有所終．壯有所用．幼有所長．矜寡孤獨廢疾者．皆有所養．男有分．女有歸．貨惡其棄於地也．不必藏於已．力惡其不出於身也．不必為已．是故謀閉而不興．盜竊亂賊而不作．故外戶而不閉．是謂大同';

const text2='廣式炒麵 複雜 覆滅';
const text3='天后宮 後宮佳麗'
// console.log(text3,'>>',toSim(text3),fromSim(toSim(text3)));
// console.log(text3,'>>',toSim(text3));


passcount+=(toSim('樹幹')=='树幹')          //safe
passcount+=(toSim('樹幹',true)=='树干')     //unsafe
passcount+=(toSim('心願',true)=='心愿')     //safe
passcount+=(toSim('餅乾')=='饼乾')          //safe
passcount+=(toSim('餅乾',true)=='饼干')     //unsafe
 
passcount+=(fromSim('饼干')  =='餅干')        //safe
passcount+=(fromSim('饼干',1)=='餅乾')      //pick the best match
passcount+=(fromSim('饼干',2)=='餅[乾幹干]')//expand other possibility


passcount+= (fromSim(toSim(text))==text)
passcount+= (fromSim(toSim(text2))==text2)
passcount+= (fromSim(toSim(text3))==text3)

passcount+=(toSim('無損簡體')=='无损简體' )       
passcount+=(toSim('無損簡體',true)=='无损简体')   //強制轉換
passcount+=(fromSim('无损简體')=='無損簡體'    )  
passcount+=(fromSim('无损简体')=='無損簡体'     ) 
passcount+=(fromSim('无损简体',1)=='無損簡體'    )
passcount+=(fromSim('无损简体',2)=='無損簡[體体]')

passcount+=(fromSim('树干',1)=='樹乾')

passcount+=(fromSim('国家发展委员会')=='國家发展委員會')
passcount+=(fromSim('国家发展委员会',1)=='國家發展委員會')

console.log('Passed test',passcount,'test count',testcount);
