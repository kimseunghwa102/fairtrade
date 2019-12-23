var selfa = ['日本語表現','はじめまして、私に名前は田中です。','韓国表現','처음뵙겠습니다. 저의 이름은 다나카입니다.','発音','cheoe um boeb ges sseub ni da. je oui ileumeun danaka ibnida.','録音']
var selfb = ['日本語表現','お名前は何ですか？','韓国表現','이름이 뭐예요?','発音','ileumi mwo eyo','録音']
var selfc = ['日本語表現','何歳ですか？','韓国表現','몇살 이에요?','発音','myo sar eyo','録音']
var selfd = ['日本語表現','国はどこですか?','韓国表現','어디서 오셨어요?','発音','eodiseo osyeoss-eoyo','録音']
var selfe = ['日本語表現','趣味は何ですか?','韓国表現','취미가 뭐에요?','発音','chwi mi ga mwo-eyo','録音']




var q = ["(처음 : 始め) , (뵙다 : 御目にかかる) ,(저 : わたくし) ,(이름 : なまえ)"]
var a = ["(이름 : 名前) , (뭐에요? : 何ですか) ,(뭐야 : なに) ,(입니다 : です)"]
var b = ["(몇살 : 何歳)"]
var c = ["(국가,나라 : 国) , (어디서 : どこから) ,(오다 : 来る) ,(왔어요? : 来る+ですか)"]
var d = ["(처음 : 趣味)"]

function Introducebymyself(slef){
  alert(slef);
	}

function Introduce(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+selfa[0]+'</th>')
document.write( '      <td>'+selfa[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '    <th>'+selfa[2]+'</th>')
document.write( '      <td><input type="button" value="'+selfa[3]+'" onclick="Introducebymyself(q)"</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfa[4]+'</th>')
document.write( '      <td>'+selfa[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfa[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="はじめまして私の名前は.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};
function IntroduceA(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+selfb[0]+'</th>')
document.write( '      <td>'+selfb[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '    <th>'+selfb[2]+'</th>')
document.write( '      <td><input type="button" value="'+selfb[3]+'" onclick="Introducebymyself(a)"</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfb[4]+'</th>')
document.write( '      <td>'+selfb[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfb[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="お名前は何ですか.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};
function IntroduceB(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+selfc[0]+'</th>')
document.write( '      <td>'+selfc[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '    <th>'+selfc[2]+'</th>')
document.write( '      <td><input type="button" value="'+selfc[3]+'" onclick="Introducebymyself(b)"</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfc[4]+'</th>')
document.write( '      <td>'+selfc[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfc[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="何歳ですか.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};
function IntroduceC(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+selfd[0]+'</th>')
document.write( '      <td>'+selfd[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '    <th>'+selfd[2]+'</th>')
document.write( '      <td><input type="button" value="'+selfd[3]+'" onclick="Introducebymyself(c)"</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfd[4]+'</th>')
document.write( '      <td>'+selfd[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfd[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="どこから来ましたか.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};

function IntroduceD(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+selfe[0]+'</th>')
document.write( '      <td>'+selfe[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '    <th>'+selfe[2]+'</th>')
document.write( '      <td><input type="button" value="'+selfe[3]+'" onclick="Introducebymyself(d)"</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfe[4]+'</th>')
document.write( '      <td>'+selfe[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfe[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="趣味は何ですか.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};
