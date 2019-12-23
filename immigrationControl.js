var numbera = ['日本語表現','パスポートを見せてください','韓国表現','여권을 보여주세요','発音','yeo gwon eul bo yeo ju se yo','録音']

var q = ["(여권 : パスポート) , (보다 : 見る) ,(보여주다 : 見せる),(주세요 : ください)" ];
function immigrationControlgood(slef){
  alert(slef);
	}
function immigrationControlA(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+numbera[0]+'</th>')
document.write( '      <td>'+numbera[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '    <th>'+numbera[2]+'</th>')
   document.write( '      <td><input type="button" value="'+numbera[3]+'" onclick="immigrationControlgood(q)"</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+numbera[4]+'</th>')
document.write( '      <td>'+numbera[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+numbera[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="여권을보여주세요.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};
