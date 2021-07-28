import {sc2tc} from './sc-tc-map.js'
const mapping=sc2tc.split(/\r?\n/);
/*
伪=偽僞   //對應兩個繁體字
㐷=傌     //gb 與 big5 一對一 (繁體無㐷字)
杰~傑     //繁體有「杰」字
*/
const overwrite= //調整順序，首字為較常用字 (但Unicode 值較低)
{"尽":"盡儘","历":"歷曆","获":"獲穫","荡":"蕩盪","绦":"縧絛","缰":"繮韁","赝":"贋贗","䴘":"鷉鷈"}
const t2s={}, t2s_unsafe={} , s2t={};
mapping.forEach(line=>{
	let [m,sc, op,tc]=line.match(/(.)([=~])(.+)/);
	if (overwrite[sc]) tc=overwrite[sc];
	if (op=='=' && tc.length==1) {
		t2s[tc]=sc;
	} else {
		for (let i=0;i<tc.length;i++) {
			t2s_unsafe[tc[i]]=sc;
		}
	}
	if (op=='~') {
		s2t[sc]=tc.replace(sc,'')+sc; //展開自己
	} else s2t[sc]=tc;
});

export const toSim=(s,unsafe=false)=>{
	let out='';
	for (let i=0;i<s.length;i++) {
		let sc=t2s[s[i]];
		if (unsafe && !sc) sc=t2s_unsafe[s[i]];
		out+= sc || s[i];
	}
	return out;
}
export const fromSim=(s,mode=0)=>{ 
	let out='';
	for (let i=0;i<s.length;i++) {
		let tc=s2t[s[i]];
		if (!tc) out+=s[i]; //沒有繁體
		else if (tc.length==1) { //一對一
			out+=tc;
		} else if (mode) { 
			if (mode==1){
				out+=tc[0];//選第一個
			} else {
				out+='['+tc+']'; //展開
			}
		} else out+=s[i]; //保留不變
	}
	return out;
}



/*
//以下字不轉簡體，
並乾余併係傑傭僕價優兒出剋劃勝台同后向噸埰塗壞姦寧屍嶺幹幺幾廠彞
征後復志愿慄憐懷懺捨掛採撲據擾於曏曬曲板极桿棲極構樸機檯櫃氣注準
潔澱濘灑灕異癢癥睏確禦種穀窪範築簾籬網繫繭纍聖聽肴臘致臺與莊萬蕓
薦薴虆蜡蟣蟲蠟蠶衕衚表裡製複覆觸誇豐趕踴辟適醜釐隻離雲面颳驚骯體
鬆鬍鬥鬱鹹麵麼麽黨

//因為對應的簡化字Big5 也收 
并干余并系杰佣仆价优儿出克划胜台同后向吨采涂坏奸宁尸岭干么几厂彝
征后复志愿栗怜怀忏舍挂采扑据扰于向晒曲板极杆栖极构朴机台柜气注准
洁淀泞洒漓异痒症困确御种谷洼范筑帘篱网系茧累圣听肴腊致台与庄万芸
荐苧蔂蜡虮虫蜡蚕同胡表里制复复触夸丰赶踊辟适丑厘只离云面刮惊肮体
松胡斗郁咸面么么党
*/