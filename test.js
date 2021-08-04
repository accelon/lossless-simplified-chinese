import {toSim,fromSim} from './index.js'
let pass=0;
let test=0;

const text='大道之行也．天下為公．選賢與能．講信脩睦．故人不獨親其親．不獨子其子．使老有所終．壯有所用．幼有所長．矜寡孤獨廢疾者．皆有所養．男有分．女有歸．貨惡其棄於地也．不必藏於已．力惡其不出於身也．不必為已．是故謀閉而不興．盜竊亂賊而不作．故外戶而不閉．是謂大同';

const text2='廣式炒麵 複雜 覆滅';
const text3='天后宮 後宮佳麗'
// console.log(text3,'>>',toSim(text3),fromSim(toSim(text3)));
// console.log(text3,'>>',toSim(text3));


pass+=(toSim('樹幹')=='树幹')   ;test++;       //safe
pass+=(toSim('樹幹',1)=='树干') ;test++;       //unsafe=1
pass+=(toSim('樹乾',1)=='树乾')  ;test++;      //unsafe=1
pass+=(toSim('餅乾')=='饼乾')     ;test++;     //safe
pass+=(toSim('餅乾',1)=='饼乾')     ;test++;     //safe
pass+=(toSim('餅乾',2)=='饼干')   ;test++;       //unsafe=2
pass+=(toSim('心願')=='心願')  ;test++;   
pass+=(toSim('心願',1)=='心愿')  ;test++;   

pass+=(toSim('簡體')=='简體')  ;test++;   
pass+=(toSim('簡體',1)=='简体')  ;test++;   

pass+=(fromSim('饼干')  =='餅干')   ;test++;     //safe
pass+=(fromSim('饼干',1)=='餅幹')     ;test++;  //pick the first match (wrong)
pass+=(fromSim('树干',1)=='樹幹')     ;test++;  //pick the first match (correct)
pass+=(fromSim('饼干',2)=='餅[幹乾干]');test++; //expand other possibility

pass+= (fromSim(toSim(text))==text);test++;
pass+= (fromSim(toSim(text2))==text2);test++;
pass+= (fromSim(toSim(text3))==text3);test++;

pass+=(toSim('無損簡體')=='无损简體' )  ;test++;

pass+=(toSim('無損簡體',1)=='无损简体')   ;test++;
pass+=(toSim('無損簡體',2)=='无损简体')  ;test++;
pass+=(fromSim('无损简體')=='無損簡體'    )  ;test++;
pass+=(fromSim('无损简体')=='無損簡体'     ) ;test++;
pass+=(fromSim('无损简体',1)=='無損簡體'    );test++;
pass+=(fromSim('无损简体',2)=='無損簡[體体]');test++;

pass+=(fromSim('国家发展委员会')=='國家发展委員會');test++;
pass+=(fromSim('国家发展委员会',1)=='國家發展委員會');test++;
pass+=(fromSim('头发')=='頭发');test++;
pass+=(fromSim('头发',1)=='頭發') ;test++; //wrong guest\
pass+=(fromSim('头发',2)=='頭[發髮]');test++;

console.log('Passed test',pass,'test count',test);
