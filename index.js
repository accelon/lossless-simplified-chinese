const t2s={},s2t={};

const setup=()=>{
	for (let i=0;i<simplified.length/4;i++) {
		const sc=String.fromCharCode(parseInt(simplified.substr(i*4,4),16))
		const tc=String.fromCharCode(parseInt(traditional.substr(i*4,4),16))
		s2t[sc]=tc;
		t2s[tc]=sc;
	}
	for (let sc in addon) {
		const tc=addon[sc]
		s2t[sc]=tc;
		t2s[tc]=sc;	
	}
}
export const toLosslessSim=(s,map=t2s)=>{
	let out='';
	for (let i=0;i<s.length;i++) out+= map[s[i]] || s[i];
	return out;
}
export const fromLosslessSim=s=>toLosslessSim(s,s2t);

//一對一關係，「髮」「後」保留不變，不轉為「发」「后」 。
//在無損簡體文本中，「发」一對一轉成「發」，「后」不轉成「後」
//「干幹乾」 「胡鬍衚」 音或義差別大，不合併。
const addon={"并":"併",  // 並
//"干":"幹乾"
//"系":"係繫"
"伪":"偽",   //僞
"尽":"盡",   //儘
"汇":"匯",   //彙
"坛":"壇",   //罈
"么":"麼", //幺 麽
"复":"複", //復 覆
"历":"歷",  //曆
"极":"極", 
"冲":"沖",  //衝
"获":"獲",  //穫
"发":"髮",  //發
"荡":"蕩", //盪
"硷":"礆",  //鹼
"绦":"縧", // 絛
"绱":"緔", //鞝
"缰":"繮",  //韁
"脏":"臟",   //髒
"蜡":"蠟",   //蜡
//"胡":"鬍衚
"赝":"贋",   //贗
"锈":"銹",   //鏽
"闲":"閑",   //閒
//"面":"面",  //麵
"须":"須",  //鬚
"䴘":"鷉"    //鷈
"台":"臺",  //檯枱
//"同":"同",  //衕
// "后":"后後",
//"向":"向曏",
// "采":"埰採",
}

const simplified ='345434473439523e360e36af36e337c639183a2b39d064dc3eea40259fce4336433a433b433f433e43ac464c4727478d49829fcf497e49b649b74bc59c834ca34c9d9cda9ce49e6e4e224e714e9a4f2b4f5967654ed14fa34fe34f234fa04f214f254fe94feb4ed34e2a4eec4f2634484f1f343d4fa74fa6343767704f274f1e59074f63506c4f204f1b503a4f24503e507b4ec54f654fa84ec64fa5507e4ef74eea347a4fac4ebf4fa94fed50a74fe64faa507f4f1850a84fea346950a950a54fe85151513f515651854e24518c5e4251c051bb51db51ef51fa522b5220522d5219514b5239522c521a526552505240521b521252675218523d523f525134e55242350952b252a852a152cb80dc52b352bf52da52a252b1529d53005326532e533a534f5374538d538c538953a353c253c14e1b54a4543454505415545954585457542395ee54d1542f5521359e55244e274e54535554df545b556c551d5417545c552254d453f955bd556f545555675c1d551b54d75520557853fd54d3545255745618358a549d54d254dd54d555f354d955b75428549b541354dc565c556e545654994eb855be4e255624556d55eb56a3518154535570563156f156f556fd56f456ed570656fe56e257ef57ad6267575a57a957b457da5c2762a5573a5757831457b257d86d82575e57d95c18581157ab57605815575f57af57a657b1538b579257395786574f57845785575c575d584658ee58f658f85bff591f68a65939594259655941593a5968594b59f9598659d759785a315a0459875a055a3259ab36c05aaa598859aa59a95a345a735aad5a065a755a075af15ad25b375ad45a745a7636e45a085b595b665b6a5bab5bdd5b9e5b815ba151995bbd37665ba05b9d5c064e135bfb5bf95bfc5c345c4a5c385c435c495c615c425c665c5e51885c985c9b5ce15d035c975ce55cbd5c9a37e55d5d5d2d5c965d5a5d025ce45ce35cc45d045c995d585cad5c7f5cbf5ce65dc55def5e055e085e105e265e275e0f384e5e3c5e3b5e1c5e015e2e5e3151e05e93539553a253a953a653a853ae5e9953825e915e9f5e7f5eea5e9053855f115f2a5f205f3a5f395f255f2f5f5d5f5f5f665f685f815f844ece5f955f7b5fd76052803b60a660ae600595f76076607c607d607b723160ec60ab6006607a5ffe613f68176001612060e860ed607860ef60046002865160ad5e86396a5fe760eb392d601c51ed6126616d60ee612460af60035baa5fc660735e94603f61d4603c61d1393d3916607960e961d2600060ac5fcf60e76151604b6206620b6217622c622f620f6237629b635d631f820d626a626b62a139cf631c6323630262e3626c63626325635f6447636363fe62a263b463bc6402631a62a0629f63ba635e63266491632039d1632263b862e8629a625163ff631e631d636162e563b362e951fb632139df62c5636e632439db62df644862e7640163b7626964b7644664de64b839f06270644564b562e262e66484640064ba643a64446512631b644a640563fd8d2553d9654c6570655b6bd96569659365a965ad4e8e65f6664b663c6655665665f87545668266546619665366a765f7663d665266f24e664f1a80e74e1c677f68056746680067a7676167ad68c15f0367a867a3680b3b4e6808681668be68603b4f676867ab68624e1a6769836369856864678467aa68bf69206901692e68686922691d68694e50679e697c680767a23b6468373b74686a673468116866692b68616865673a692d6a2a6aa967fd6863686769da68c06a2f68bc69df67e069db67dc6a7969886809691f6a7c680e6a7169e0680c67a56a6569878616680a69896a31680f67436924683e698468c294a66b276b246b225c815f526b816b8b6b926b873c6e6b9a6b936ba13c696b7c674058f36bc16bb46bf572666be16c076c146c226c296c3251b36ca151b56ce86c796d436cfe51c96cea6e0c6ca66e0a6d9e6d456da351cf6ca86da16d4b6d5151d16d486c646ca951c66c9f6e296d496da26ca7706d6da483656caa6ede6e176d526d506eda6ee16e146e876ca46c496d9f6e0d6da86e866e106d46988d6cfc6d013d0b6f5c6da66d546e836ed76da06da96d476d9d6da76e116cfd6eea6cf66d4d6dc03ce06d4a6d533ce16e7f6cde6e816d556d4e6d9b3cd46ee56f4d6ee86e856cfa6ee46f9b6ee26e0e3cbf6cfb6d4f6fd26cf86ca56f476f466f746cf76fd13cfd6f4b6f9c6ca36ee06d126f136ee9704f6e7e6ee66edf707e4e3a4e4c70c365e070bc709c70df8315711570e670803dbd71748367709d70ed988e70bd70e8706f70e770eb71168425707f70db70e93db670ec711870c1708970c24e8972375c145899724d72758366728a727a72b672ed72c872f072b972f272b872f172ee595672ec72ef730372dd72de3e8d730e72b7517d736d732e7315732173b073d073f273ae739a7410747683b9739b73b1740f740e7391747773f03ec573af7399747873ba743c73d1748e74d274ef4ea74ea96bd5753b5f025f53757453e075c975b475d675af75a175ea761775ae759f760675ad7618759775e875eb760575a0762a75d2759675c775ac765e7663763f763e75c8762b766b769175b176b276b176d776cf76d176d8536277264f1756f077417750770d4056779277867751772c77a977eb784178567817781a78557800781c786e780140b5785978167875789c789b77f6785740c5785a7840788d77ff783a783e77fe783b79847978796f794e79435fa17985793c7962797779c37c7c7a0e79c64149798079cd79f08c37415f7a2379ef989679fe7a5179fd7a337a067a9d6d3c7a777a917a8e7aad7aa57a9c7a8d7aa67a837ade7b147b0b7b1541f27b3a7b5d828283037b517ba77b7c7b037b5b7b5a7ba67bd37baa7b807bd17bab7b5c7b7e5e187bee7b7942647b937bef7ba87c417b3c7b3e7c167bf17ba97ca47cc17caa7cae7c9d7c747c9c7e9f7ea07eaa7ea37ea67ea27ea17ea57ea87eab7eb97eb37ebd7ebe7eaf7eb07ebc7eb17eae7eb87ea77eb77ead7eb47eba43377ec67ec27ec17ec57ebb7ecd7ec07ecb7ed07ecc7ec87ec443397eca7ed77ed37edd7ed47ede7edc7eda7ed97ed27ed67edf4e1d7edb7ee27ed17ee17ee07ee87ee47ee5433c7ecf7efc7f0d7eff7ef87efb7ef67ef47ef97efe7eb27f517f00433d7eb67efa7eee7efd7ef07eeb7ef57ef27f017d277eef7eea7eec7f037f047f027f097f0e7f147f177f187f0c7f167f137f057eac7f117f087ec37f0f7f0784267f197f227f127ec97f237f0a7f1e7f1a7f1c7f1f7f1b53bf7f1d7f217f297eb57f2743387f267d777f157f25603b7ee97ef77f2b7f2a7f2f7ec77f2e7f2d7ed57f0b7ef37ed883277f337f327f3443417ece7ee77f247f31434098a37f2c7ea97eed7d2f7f207f287ea47f357f0694b57f427f5a9a827f627f577f747f8182887f9f4e494e607fda7fd87fd980278022572395fb8054806a58f0803880698042804c804d542c804b808380b480c1810980eb813180c080be80e88136811180bf811a80a0817d815880a443dd80f6817b80c6810d8113442a813881108191814a80ea811481dc4e3481f44e0e51744e3e65e7823182238230823b82708273520d82ce517983465e84830e835a82cb534e82cc83b14e07835d83b453f6836d7740836e82c7836483b3838582cd836a76d683b282c183bc835c848c848b84718311836b83688487835e836c82b883b8835b8489829c842784e38570835f84df82978537835983b68350842844d582e744d3836084dd8369827a836f85ae82c8853c853a841a857282a682cf857485d38539830f84e0841d85025904865a864f53f74e8f866c86f1871586ac8680732c867e871786f38682842445d6877c878086f0874887a8866e874986f2866b86cf868186838747867f86f4877e86ce87cf86ca869586ee672f536b8868886e8885886588c591cc523688c8888688e488e2891b4eb588e5891d88af888488e388c68934889c4653886c88ad895589c189c389c489c589c689c789cb89cd89ce4eb289ca89cf89d089d189c989c889cc89c289de89ef89e68ba08ba28ba38ba18baf8ba78ba88ba68bb18bad8baa8bab8bac8bb08bb98bb68bbc47238bc08bb78bbb8bbf8bbe8bb88bc98bc38bca8bc28bcb8bb58bc88bd28bcf8bc48bd08bc78bce8bc58bcd8be98be28be38bd58bd78be78bdf8be18be08bd88bdd8be58be68bdc8bd98bd68bd48bdb8bd359388ba48bf38bf68bde8bf18bee8bed8bda8beb8bec8bef8bf08bf58bf28bf48c018bfe8c078bfd8c0a8a1a8c038c048c068c088bff8bf78be48bf98bfc8c058bba8c028c008c0d8c1e8c1d8be88c148c1b8c108c0f8c158c188bb38c198c0c8bbd8bf88c1a8c168bfa8c0b8c128c138a8a8bcc8c0e8c1c8c278c118c218c248c268c258bb28c228c238c1f8c2a8c2c8c2b8bb48c288c298bc18c328ba58c2e8bc68c2f8c2d8c318c358bd18bae8c3462a446d38a898bfb8c0953d88a5f472996e08c178ba98c308c368c208c335c827ad64e30732a8c6e732b47598d1d8d1e8d208d1f8d228d218d2b8d278d298d2a8d2f8d238d2e8d338d408d308d358d2c8d378d368d398d348d3b8d388d3a8d328d428d418d3f8d458d448d3e8d3c8d488d4a5bbe8d478d528d498d508d4f8d548d538d2453568d318d4b8d558d288d4c47908d568d578d5a8d598d2d8d5b8d5c8d3d8d588d5f8d608d5e8d618d628d468d518d4e8d638d6a8d768d758d8b8db18ff98df58e0a8dc48df88e528df78df68db88e0c8dfb8dc347e28e2f8dde8e2c8e708df98e518e7f8e9c8e8f8eaf8f668f678f68519b8f6a8f698f6b8f6d8f6f8f778f788f718f748f758f7a8f728f768f7c8f838f828f818f808f7d8f7e8f848f858f7b8f868f8e8f898f8b8f8d8f8a8f878f888f6e8f8c8f918f8f8f938f908f9782068f926bc28f968f958f988f6c8f998f7f8f9a8f708f948f798f738f9f529e8f9e8fab8fa9519c8ff38fd98fde8fdb8fd08fc78fbe8fdd9065900a90128fdc90028fdf8fc1900990578fbd8fc88fd88fe98fb9903b902690cf90ae90d34e6190b990ac90e7909390d190bb90f890ba90d0909d914290e64e11915d533b91719166917f8845917e917d91ca5398948594869487948c948a9489948b948894939490948f94929497948d9495948e497a94af94ab949894ad949a94a0949d94a994a494a39491949e94ae94a7949994ac949b94aa94cc94c894b694c394b494b994cd94b094b894c094bf94be949c94ca94c994c794cb94c294b794b394c694c594ba94b294bc94bd94cf94f094d294ec94ea94f694f394dc94da94e394e894e294ed94eb94e6885494d194f794f194df94f594e594d594ef94d094de951095009511950994dd9512950c94a194e494d7950b94fb950a951394d8950495039514950794d394fa94d69506950294fd950d952f94a2951e5f559516952b952994d495259515951f9524953194ee951b952c952d951c94b19526951a9520952195229519953094fc951d9528952a94949534953395059540953794e19496953b953d9538953295189539953e952e953695179541953f954595519555950195499548954394a884e5954f94e094e9953c955095479552954b954d95539fd4954e955e955f94fe954695599560955d94ff953595579558955b94f2955c95569542933e955a94e79564956a497d94d994f4956394f995669561949f956b956295684985950e950f954495704983956f956d94c1956e94ce94db957194f8956c9554927495729527957494c495739565956794a595759576954a9569952392ae51ff4986957f95e895e995ea95eb95ec95ed95f695f395f095f495f595f896029601960095fa95fd9603960695fe9605960a9609960e960f960d9608960c961295f196149615961196079617961895ff9616961995ef5173961a96139610961b95fc574296499655963596349648964696339667961f963696689645968f966996669690964796b653ea96bd867d53cc96cf67429e2179bb96be4e917535972196fe970196f3972d53c7707553c69753975997659f175de99792979197af97e697e797e897e997ea97ec97eb54cd9875987698779879987a9878987c9882988098839884987d9881987f98879886988c98899890988f59349892988a988b9895989498889893989198979898989d989a989c9899989b98a198a07c7b989f98a2987e98a498a5663e98a69885989e98a798ce98d098d198d2522e98d398d498cf98d698d598d798d898d998da98de99639965996499669968996a996b996c996d996e99749972997199709973997a9978997c9977517b99759979997b997d9981997f9982997e99849983996f99859986996799899987998e9969998f998a998c998d999299909991999399889994997698e8990d998b99959a6c9a6d51af9a6e9a709a6f9a729a739a7b9a7d9a799a759a7e9a809a789a769a7c9a779a889a879a839a869a8e9a8f9a8b9a8d9a939a949a929a919a909a9b9a979a994bc49a9e9a989a9d817e9a7a9a9a9a9f9aa184e69a9c9a969aa09aa29a719a859a959a819aa39a849a8c60ca9a7f9aa49a749aa79aa59aa69a8a9a8980ae9ac54f539acc9acb677e9b13659795f9960b960490c19b369b499b479c7c9c7d9c7e9c809c819c829c7f9c849c859c869c8c9c899c8f9c879c909c8d9c8b9c8a9c929c989c954c9f9c969c949c9b9c919c9c9c939caa9c9d9ca79ca09ca99ca49ca89cac9cbb9caf9cad9c9e9cb79cb49cb19cb59cb29cb39cb89cae9cb09cb69cba9cc09cab9cca9cc89c979cc24ca09cbd9cc74ca19cc59cbe9cc49cc69cc39cd29cd19ccb9ca59ccf4ca29cce9cd09ccd9cc19ca29ccc9cd39cd89ca69ca39cb99cd79cdb9cd49cc99cd99cd59cd69cdf9cdd9cdc9cde9c9f9cbc9c8e9c999ce39ce19ce29c9a9ce09c889ca19e1f51eb9e209e2451e49e239e224d139e299e289e269e309e359e339e329e2e9e319e2a9e2f9e2d9e389e399e3b4d159e3f9e3d4d149e3a9e3c9e409e439e469e419e489e459e449e499e4c9e4f9e509e4e9e4a9e539e4d4d169e2b9e519e529e4b9e599e559e579e569e5b9e5c4d179e2783ba9e5f9e649e609e619e589e639e5a9e629e5e9e5d9e679e659e259e379e689e369e6a9e549e699e6b9e479e6c9e709e6d9e343d899e6f4d199e719e729e2c9e749e669e739e429e3e536454b89e7e76d04e3d9ea69eb89eb99ec49ec970b9515a9eea9ee19ee99efe9f0b9f0d9f399f50658b8d4d9f519f7f9f809f819f829f859f879f839f869f849f889f8a9f899f8b816d9f8c9f9953905e9e4dae9f9a9f9b9f9f47244ca49fd3'
const traditional='346f3473347634e8361a3704370f380f396e3a5c3a733a753efd407b40ee42b742d942da42f942fb43b146614700477c494749514971499b499f4bc04c3e4c774c7d4c814c984d094e1f4e824e9e4f474f594f864f964fb64fc14fd44fe04fe55000500650085009500b5011502b50325049505150745075508c509150965098509950ad50af50b350b450b550b750be50c250c550c950d150d550e550e850f9510051015102510451085109511051145115511f512a513251375138513a513b513c514c5152515751675169518a51aa51c851cd51dc51f151fa5225522a52445247524b524e5257525b525d526e52745275528352875289528a528c528d528f5291529a52c152d552d952db52dd52de52e252e952f152f552f852fb532d533153405354537b539953ad53b253b453c353c453e2541254335436544254bc54e15504551a554f555e555f5562558e559a55aa55ac55ae55b255c655c755ca55ce55da55e955f65606560d5613561456165617561c5629562e562f563056355638563d5653565a565d566056655666566f56725674567856805687568c5695569956a656a856b256b356b456b656c056c156c256c556c856c956d156ea5707570b570d571257135716571857b557e157f75805580a5816581d582f58315834584a584b584f585258575862586458755879588a589c58ae58b358b658be58cb58d358d858d958da58de58df58e058e258e958ea58ef58fa58fc58fd59205922593e595059675969596a596c596e597c599d59cd59e65a1b5a415a665a6d5aa75aaf5ab05abc5abd5ad75af55afb5aff5b035b085b0b5b0c5b195b215b245b2a5b305b385b4b5b4c5b6b5b785b7f5bae5be25be65be75be95beb5bec5bef5bf55bf65c075c085c0b5c0d5c0e5c375c465c4d5c535c5c5c625c645c685c6c5ca15cf45cf65cfd5d0d5d175d225d2c5d505d7e5d815d845d875d945d975da05da25da75dae5db45db85dba5dbc5dcb5dd25dd45df05e255e2b5e335e365e405e435e535e575e585e5f5e635e6b5e6c5e7e5eab5ec15ec25ec45ec85eda5edd5edf5ee05ee15ee25ee35ee95eec5ef35f125f335f355f375f485f4c5f4e5f5e5f605f655f725f815f915f9e5fa05fb95fd7604660656085609e60b560b660e160f160f260fb611b611c612861346137613e613f6144614b614d6158615a615f6163616a616b616e61736176617a6182618a618d6190619161926196619a61a461ab61ae61b261b661c761c961cc61cd61df61e361e461e761e861f261f661f761f861fa61fc61fe6200620762146227622962316232623662cb6329633e6368636b63836384638663976399639b63c063da63db63ee640d64166417643564366451645c645f646f64736476647b6488648f64906493649d649f64a364a564ab64b264b364bb64be64bf64c164c464c764ca64cb64d364d464da64e064e564ec64ef64f064f164f264f464f764fa64fb64fc64fd64fe65046506650f651465166519651b651c651d652265236524652a652c6557655865756578658265836586659565ac65b765bc66426649665d66886689669866a266ab66c466c766c966d666e066e866ec66f266f8670367276771677f67f5687f68946898689d689f68b268c468d668d768df68e168e768f268f6690f6932694a69536968696d69aa69ae69b269bf69cb69cd69e469e769e869ee69f369f669fc6a016a026a056a136a196a1e6a226a236a2b6a336a386a396a3a6a3f6a486a4b6a5f6a626a6b6a816a896a946a9c6a9f6aa26aa36aae6ab36ab86abb6ac36ad36ada6adb6add6ade6adf6ae56ae76ae86aea6aeb6aec6af16af36af86afb6b046b0a6b0f6b126b166b1e6b3d6b506b5f6b616b726b786b7f6b986b9e6ba46ba86bab6bae6baf6bb06bb26bba6bbc6bc06bc66bff6c026c086c0c6c236c2b6c2c6c336c7a6c926cc16ce86d366d796d876dbc6dda6de56dea6df56df66dfa6e196e1b6e226e266e2c6e3e6e4a6e5e6e6f6e886e966e9d6eab6eae6eb36ec46ec56ecc6ece6eec6eef6ef26ef86efb6efe6eff6f016f0a6f1a6f226f236f2c6f326f356f386f3f6f416f516f546f5a6f5b6f646f6f6f706f776f7f6f806f866f876f976fa06fa46fa66fa96fae6fb16fbe6fc16fc36fc46fd56fd86fda6fdc6fdf6fe46fe76feb6ff06ff16ffa6ffc6ffe70027005700670077009700f70157018701d701f702070267027702870307032703e70437044705170557058705d706370647067707d70ba70cf70f47121714971527159716271657169716c717171857192719771b171b271be71c171c871d271d971dc71df71e671ed71f471f671fc71fe720d7210721b722d723a723e72467258727d729672a272a772c072f972fd73197336733b734173447345734e7368736a736b736e73707371737573777378737a737b737c738073fe743a743f744b7452746374647469746a7472748974a174a374a674ab74af74b074b574b874bd74ca74cf74d474da750c7522755d7562756b757075767587758a75d975fe7602760b760d7613761e76217627762e7632763a76427646764776497658765f76627664766576677669766c766d766e767076717672769a76b076b876ba76dc76de76e376e476e77725773e774f775c775e7798779c779e77b677bc77d377da77ef785c78647868786f78a978ad78b878ba78bc78bd78d178da78e078e378e778ef78fd78fe7904790e79197926792a792b792c7931797f798d798e799579a179a679aa79ae79b079b179bf79c87a057a087a0f7a1f7a2e7a317a407a477a4c7a4d7a4e7a607a617a627a697a6d7aa97aaa7aae7aaf7ab57ab67aba7ac47ac57ac77aca7af67b467b4d7b677b747b8b7b8f7bc07bc47bc97bcb7bd47be47be97bf37c007c0d7c1e7c217c237c2b7c397c3d7c3e7c437c4c7c547c597c5b7c5c7c5f7c607c697c6a7c6c7c6e7cb57cdd7cde7ce77cf27cf47cf67cf97cfe7d007d027d047d057d067d077d087d097d0b7d0d7d107d137d147d157d167d177d187d197d1a7d1b7d1c7d1d7d217d2c7d307d317d327d337d357d397d3a7d3c7d3f7d407d427d447d457d467d4e7d507d557d5d7d5e7d617d627d667d687d707d717d727d737d797d817d837d867d887d8c7d8f7d907d937d9c7d9e7da07da27da37dac7dad7daf7db07db17db27db47db57db87db97dba7dbb7dbd7dbe7dbf7dc47dc77dca7dcb7dd27dd37dd77dd87dd97ddd7dde7de07de17de37de67de87de97dec7def7df17df27df47df67df97e087e097e0a7e0b7e107e117e157e177e1b7e1d7e1e7e1f7e237e2b7e2d7e2e7e317e327e337e357e367e377e397e3d7e3e7e437e457e467e527e547e557e5a7e5e7e627e697e6a7e6d7e6f7e707e737e787e797e7c7e7d7e7e7e7f7e877e887e8a7e8c7e8d7e8f7e937e967e987e9c7f3d7f4c7f707f757f777f857f867f887f8b7fa57fa97fd27fec7ff97ffd802c802e8056805e806f8070807280738075807680778079807d807e808580b481058108811b812b8139814e815681618166816b8173817881838195819a819e81a081a981bd81be81bf81c781c981cd81cf81d881da81e081e281e881f4820782088209820a825982648266826b8271827782bb82e78332834a838a839683a283a783ef8407840a842c843484358449845284578464846684778494849e84bc84c084cb84ee84ef84f484fd851e852385258526852d85418546854e85528553855585588562856a856d857785808588858a858c85948598859f85a685a985b385b485b585ba85cd85ce85dd85e585ea85f685f985fa8600860486068607860a861a861e8622863a863f86468655865b865c865f8667866f86fa86fb87068755875f876687788784879e87a287ae87bb87bf87c487c887ce87e387ec87ef87f287f687fb880188058806881088118823882888318836883b8853885b8868889e88ca88dc88dd88e188fd890c8918893289338938893b8947894c894f8956895d89608964896a896c896f89728974898b898e898f89938996899889a189a589a689aa89ac89af89b289b789ba89bd89bf89c089f489f689f88a018a028a038a088a0a8a0c8a0e8a108a128a138a158a168a178a188a1b8a1d8a1f8a228a238a258a298a2a8a2d8a318a348a368a3a8a418a468a4e8a508a528a548a558a568a578a588a5b8a5e8a618a628a638a668a698a6b8a6c8a6d8a6e8a708a718a728a738a758a7c8a7f8a848a858a868a878a8d8a918a928a958a988a9a8a9e8aa08aa18aa38aa48aa58aa68aa88aaa8ab08ab28ab68ab98abc8abe8abf8ac28ac48ac78ac98acb8acd8acf8ad18ad28ad68ad78adb8adc8add8ade8ae28ae48ae68ae78aeb8aed8aee8af18af38af68af78af88afa8afc8afe8b008b018b028b048b058b0a8b0e8b108b148b168b178b198b1a8b1b8b1d8b208b288b2b8b2c8b2d8b338b398b3e8b498b4e8b4f8b568b588b598b5a8b5c8b6b8b6f8b708b748b778b7c8b7d8b808b858b8a8b8b8b8c8b8e8b928b938b958b968b9c8b9e8c488c4e8c508c6c8c768c938c998c9d8c9e8c9f8ca08ca18ca28ca78ca88ca98caa8cab8cac8caf8cb08cb28cb38cb48cb68cb88cba8cbb8cbc8cbd8cbf8cc08cc18cc28cc38cc48cc58cc78cc88cca8cd18cd28cd38cd58cd98cda8cdc8cde8ce08ce18ce28ce38ce48ce68ce78cea8ced8cf08cf48cf58cfa8cfb8cfc8cfd8cfe8d048d058d078d088d0a8d0d8d0f8d108d148d168d1b8d6c8d958d998da88db28de18e108e348e4c8e558e638e7a8e828e898e8a8e8b8e8d8e8e8e918e928e938e958e9a8ea18ea58ea68eaa8ec08eca8ecb8ecc8ecd8ed18ed28ed48edb8edf8ee48eeb8ef28ef88ef98efa8efb8efc8efe8f038f058f078f088f098f0a8f128f148f158f1b8f1c8f1d8f1e8f1f8f258f268f298f2a8f2c8f2f8f338f388f3b8f3e8f3f8f408f428f448f458f468f498f4d8f4e8f548f5f8f618f628f648f9f8fa68fad8fae8faf8fb29015901990239032904b904e905490559059905c905e90609069907290779078907a907c908190849087908a908f909090df90f5910691099112911491169127912d9130913291349136913a91479148919c919e91ab91ac91b191c091c191c391c591cb91d091d291d391d491d591d791d891d991dd91e391e491e791e991f591f791f991fa91fe920092019203920492089209920d920e92109211921292149215921e9223922592269227922e923092339234923792389239923a923d923e923f9240924592489249924b924d925192559257925a925b925e9266926c926d92769278927a927b927f928092839285928d9291929392969298929a929b929c92a092a392a592a692a892a992aa92ab92ac92b192b392b792bb92bc92c192c392c592c792cc92cf92d292d992dd92df92e392e492e592e692e892e992ea92ee92ef92f092f192f692f892fc93019304930693079308930f93109312931593189319931a931b931f932093219322932693289329932b932e932f93339338934093419343934693479348934b934d93549358935a935b9360936493659369936c937093759376937a938293849387938a939493969398939b93a193a293a393a693a793a993aa93ac93ae93b093b293b393b593b693bf93c393c793c893cc93cd93d093d193d793d893dc93dd93de93df93e193e293e493e893f093f593f793f993fa9403940b941094129413941494189419941d94209425942694279428942e942f94329433943594369438943a943f9444944a944c945294549455945e946094639465946d94709471947294779479947c947e947f94819577958095829583958695889589958c958e958f95939594959895a195a395a595a895a995ab95ac95ad95b195b695b995bb95bc95bd95be95bf95c395c895ca95cb95cc95cd95d095d295d395d495d595d695dc95de95e095e195e495e5962a9658965d9663967096739678967d9689968a968e9695969b96a896aa96af96b196b496b896bb96cb96d696d996db96dc96de96e296e396f296fb97229727973d97429744974697489749975a975c97689780978f97bd97c397c997cb97cc97cd97d397d997dc97de97ff980198029803980598069807980a980c980e980f981098119812981398179818981c982198249826982d982e983098329834983798389839983b9846984c984d984e984f985298539859985b985e986298659867986b986c986f987098719873987498a898ad98ae98af98b398b698b898ba98bb98bc98c098c498c698c898db98e098e298e398e598e998ea98eb98ed98ef98f298f498fc98fd98fe98ff9903990499059909990a990c990e990f99119912991399159916991b991c991e99219928993399369937993a993c993e993f99419943994599489949994a994b994c99529957995c995e996299ac99ad99ae99b199b399b499b999c199d099d199d299d499d599d899d999db99dd99df99e299ed99f099f199f899ff9a019a029a059a0c9a0d9a0e9a0f9a169a199a249a279a2b9a2d9a2e9a309a369a379a389a3e9a409a419a429a439a449a459a4a9a4c9a4d9a4f9a559a579a5a9a5b9a5f9a629a649a659a669a6a9a6b9aaf9acf9ad49ad59ad69b069b229b259b279b299b2e9b319b399b4e9b589b5a9b5b9b629b689b6f9b749b779b7a9b819b839b8a9b8b9b8d9b8e9b909b919b929b939b9a9b9c9b9e9ba39ba69baa9bab9bad9bae9bb39bb69bba9bc09bc19bc79bc99bca9bd29bd49bd59bd69bd79bdb9bdd9be19be29be49be79be89bea9beb9bf09bf49bf79bfd9bff9c019c029c039c069c089c099c0c9c0d9c0f9c109c129c139c1c9c1f9c209c239c259c279c289c299c2d9c2e9c319c329c339c359c379c399c3a9c3b9c3c9c3e9c429c459c489c499c529c549c569c579c589c5d9c5f9c609c639c649c679c6d9c6f9c789c7a9ce59ce79ce99cf29cf39cf49cf69cfe9d069d079d099d129d159d1b9d1d9d1e9d1f9d239d269d289d2f9d309d349d379d3b9d3f9d419d429d439d509d519d529d539d5c9d5d9d609d619d6a9d6c9d6e9d6f9d729d779d7e9d849d879d899d8a9d939d969d989d9a9da19da59da99daa9dac9daf9db29db49db99dba9dbb9dbc9dc09dc19dc29dca9dd39dd69dd79dd99dda9de59de69deb9def9df29df39df89df99dfa9dfd9e029e079e0a9e0c9e0f9e159e189e1a9e1b9e1d9e1e9e759e799e7a9e7d9e979ea59ea99eb49ec39ecc9ede9ee89ef29ef69ef79efd9eff9f099f349f4a9f4b9f4e9f4f9f529f549f559f579f599f5c9f5f9f609f619f669f6a9f6c9f729f769f779f8d9f8e9f909f919f949f959f9c9fc19fd09fd2';

setup();

