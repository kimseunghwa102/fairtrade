var menu = ['なんかしたいハングル教室']
var menuA = ['今日の表現']
var menuB = ['文法　（準備中）']
var menuC = ['ハングル　（準備中）']
var menuD = ['トイレ韓国語　（準備中）']

var expr = ['日本語表現','あけましておめでとうございます.','韓国表現','새해복 많이 받으세요.','発音','sae hae bog man hi ba deu se yo.','録音']
var expra = ['日本語表現','今年もよろしくお願いします','韓国表現','올해도 잘 부탁드립니다.','発音','ol hae do jal bu tag deu lib ni da.','録音']
var exprb = ['日本語表現','来年もよろしくお願いします','韓国表現','내년에도 잘 부탁드리겠습니다.','発音','ol hae do jal bu tag deu lib ni da.','録音']
var exprc = ['日本語表現','良いお年をお迎えください','韓国表現','좋은 새해 맞이하세요.','発音','jo　heun sae　hae ma　ji　ha　se　yo.','録音']

function yearc(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+exprc[0]+'</th>')
document.write( '      <td>'+exprc[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
  document.write( '    <th>'+exprc[2]+'</th>')
document.write( '      <td>'+exprc[3]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+exprc[4]+'</th>')
document.write( '      <td>'+exprc[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+exprc[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="よいお年お.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};

function yearb(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+exprb[0]+'</th>')
document.write( '      <td>'+exprb[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
  document.write( '    <th>'+exprb[2]+'</th>')
document.write( '      <td>'+exprb[3]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+exprb[4]+'</th>')
document.write( '      <td>'+exprb[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+exprb[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="来年もよろしくお願い.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};

function yeara(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+expra[0]+'</th>')
document.write( '      <td>'+expra[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
  document.write( '    <th>'+expra[2]+'</th>')
document.write( '      <td>'+expra[3]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+expra[4]+'</th>')
document.write( '      <td>'+expra[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+expra[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="今年もよろしく.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};
function year(self){
 document.write( '  <table>')
 document.write( '    <tr>')
 document.write( '      <th>'+expr[0]+'</th>')
 document.write( '      <td>'+expr[1]+'</td>')
 document.write( '    </tr>')
 document.write( '    <tr>')
   document.write( '    <th>'+expr[2]+'</th>')
 document.write( '      <td>'+expr[3]+'</td>')
 document.write( '    </tr>')
 document.write( '    <tr>')
 document.write( '      <th>'+expr[4]+'</th>')
 document.write( '      <td>'+expr[5]+'</td>')
 document.write( '    </tr>')
 document.write( '    <tr>')
 document.write( '      <th>'+expr[6]+'</th>')
 document.write( '      <td>  <audio controls>')
 document.write( '          <source src="1.mp3" type="audio/mp3">')
 document.write( '          </audio></td>')
 document.write( '    </tr>')
document.write( '  </table>')
};
