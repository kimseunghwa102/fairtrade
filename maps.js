// 기본지도,가게위치,풀 스크린과,드라이브 디력선 코드 믿에 1개, 맵글씨쓰기, 실시간위치
mapboxgl.accessToken = 'pk.eyJ1Ijoia2ltc2V1bmdod2EiLCJhIjoiY2tiZ2dwYmlxMTVoZDJ1bWVseXg2dWFreiJ9.aiGGvnGULguEMU_wDX2xSg';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', //hosted style id
  center: [135.767116, 35.012669], // starting position　
  zoom: 10, // starting zoom　
  minZoom: 1 // keep it local
});
//드라이브 디렉션 네비게이션
//   map.addControl(
//   new MapboxDirections(
// {accessToken: mapboxgl.accessToken}
//   ),
//     'top-left'
//   )
// if(matchMedia('only screen and (min-width: 600px)').matches){
// 풀 스크린 코드
map.addControl(new mapboxgl.FullscreenControl()
);
// 내실간위치
map.addControl(
// Add geolocate control to the map.
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
})
);
// 가게정보표시,기본지도
map.on('load', function() {
map.addSource('places', {
  'type': 'geojson',
  'data': {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Muelek（雑貨屋andカフェ）</strong><a href="quiz.html"class="btn messagequiz">Quiz</a><img src="http://img07.shop-pro.jp/PA01115/312/etc/cafemenu_photo01.jpg"><p><a href="http://muelek.com/" target="_blank" title="Opens in a new window">ムーレック</a>は,アジアを主にする世界の子供支援するを目的とした、フェアトレードのカフェと雑貨屋です。雑貨はどれも手作りで、カフェは築65年の小さな庭を持つ屋です。<br>営業時間	11:00～18:00 <br>定休日 : 水曜日・木曜日<br>TEL 075-462-3311<br>住所：京都府京都市北区等持院南町12-3</p>',
  'icon': 'cafe'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.725103, 35.027078]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>楽天堂(食事・自然食品販売・塾)</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src="https://www.rakutendo.com/m-club/images/phots/no1.jpg"; class="shopsimg"><p><a href="https://www.rakutendo.com/index.html" target="_blank" title="Opens in a new window">楽天堂の願いは、</a>世界中の人がこぞって肉を食べれば食糧危機は深刻になるばかりだけど、世界中の人が満ち足りた食事ができるように―これが楽天堂・豆料理クラブの願いです。<br>TEL 075-811-4890,FAX 02046656740,<br>営業日：水～土曜（日～火曜＆祝日休),<br> 営業時間：11-7時<br>住所：〒602-8354 京都府京都市上京区西東町３６４−１４</p>',
  'icon': 'restaurant'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.737726, 35.020399]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Globe Mountain Coffee</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src="https://base-ec2if.akamaized.net/w=500,a=0,q=90,u=1/images/item/origin/7882d9b10771b2c689ae4031f74ca2eb.jpg"; class="shopsimg"><p><a href="https://shop.globe-mountain-coffee.com/" target="_blank" title="Opens in a new window">Globe Mountain Coffeeは、</a> フェアトレード・オーガニックコーヒー専門店。京都に店舗を構える自家焙煎コーヒーショップです。アジア系のコーヒーを中心に取り揃えています。焙煎したての香り高いコーヒーをお届けします。是非ご利用下さい。<br>TEL075-812-0606<br>営業日：木曜日＆祝日休　<br> 営業時：10時から23時まで<br>住所：〒604-8437 京都府京都市中京区西ノ京東中合町５５ ハイツウエストロード</p>',
  'icon': 'cafe'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.732054, 35.012978]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>リボーン(フェアトレードお服販売)</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src="http://www.reborn-kyoto.org/2014wp/wp-content/themes/reborn/img/header_fairtradestyle.jpg"; class="shopsimg"><p><a href="http://www.reborn-kyoto.org/" target="_blank" title="Opens in a new window">リボーンは、</a> 日本全国から寄贈された着物地を活用し、主に洋裁の技術指導を通じて途上国の女性の精神的経済的自立を支援している非営利団体。<br>営業時間	10:00～18:00 <br>定休日 : 土曜日・日曜日<br>TEL 075-213-1731<br>住所：〒604-8217 京都府京都市中京区西六角町１０１</p>',
  'icon': 'clothing-store'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.755739, 35.007573]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>株式会社 Hibana</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="https://hibana.co.jp/" target="_blank" title="Opens in a new window">株式会社Hibanaは、</a><br>弊社は「森林バイオマスの利用促進」を目的として2006年に設立しました。バイオマスとは、生物（bio）由来の物質（mass）のことを差し、中でも木が由来の資源を森林（木質）バイオマスと言います。木は、素材として利用するだけでなく、燃焼させてエネルギーとして利用することもできます。そして何より持続可能な資源。「環境へやさしい資源」として、今注目を集めています。<br>営業時間	10:00～19:00 <br>定休日 : 水曜日<br>TEL 075-241-6038<br>住所：〒604-0931 京都府京都市中京区 寺町二条下榎木98−7</p>',
  'icon': 'park'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.767359, 35.012882]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>sisam裏寺通店</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="https://sisam.jp/" target="_blank" title="Opens in a new window">sisamは、</a>1999年の創業以来、フェアトレードに事業として携わっています。フェアトレードとはお買いものによって社会経済的に弱い立場にいる人たちの暮らしを支える仕組みであり、そのフェアトレード商品や考え方を広めていくこと自体が社会的なアクションだと考えています。<br>TEL075-212-1653<br> 営業時：11:30時から21時まで<br>住所：〒604-8041 京都府京都市中京区裏寺町 通蛸薬師上ル裏寺町591</p>',
  'icon': 'clothing-store'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.768425, 35.006383]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>JIPPO(COFFEE)</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="https://jippo.or.jp/">JIPPO</a>は、現地調査が必要。<br>検証されていない。<br>住所：〒600-8358 京都府京都市下京区本願寺門前町</p>',
  'icon': 'cafe'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.752268, 34.992977]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Kitten Company Cafe</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="http://kittencompany.net/" target="_blank" title="Opens in a new window"><em>Kitten Company Cafe</em></a>は、キトゥンカンパニー は…、京都・五条烏丸でオーガニックな食材のドリンク・フードメニューを提供していてる茶店。ベジタリアンやビーガンのみんなにもニッコリ楽しんでもらえます。<br>TEL075-344-1591<br> 営業時：11:00時から21時まで(土日は休み)<br>住所：〒600-8170 京都府京都市下京区五条烏丸西入る上諏訪町２９４−１</p>',
  'icon': 'cafe'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.7588714, 34.9958728]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>かぜのね</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="#">かぜのね</a>は、現場検証が必要。<br>住所：〒606-8204 京都府京都市左京区田中下柳町７−２</p>',
  'icon': 'rocket'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.773785, 35.029923]　
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>京都・本店 SISAM</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="https://sisam.jp/">SISAM本店</a>は、1999年の創業以来、フェアトレードに事業として携わっています。フェアトレードとはお買いものによって社会経済的に弱い立場にいる人たちの暮らしを支える仕組みであり、そのフェアトレード商品や考え方を広めていくこと自体が社会的なアクションだと考えています。<br>TEL:075-724-5688<br> 営業時：11:00時から19:30時まで<br>住所：〒606-8224 京都府京都市左京区北白川追分町８０−１</p>',
  'icon': 'clothing-store'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.7800156, 35.0288435]　
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>なやカフェ</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="https://twitter.com/naya_cafe">なやカフェは</a>現場検証が必要。<br>TEL075-<br> 営業時：12:00から20:00まで。<br>火曜日だけオープン<br>住所:〒606-8277 京都府京都市左京区北白川堂ノ前町１ デュ北白川102</p>',
  'icon': 'cafe'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.7890406, 35.0319354]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>キッチンハリーナ（フェアトレード食堂）（新店舗）</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="https://kitchen-halina.jimdofree.com/">キッチンハリーナは</a>、季節のごはんとゆったり空間、よそではちょっと手に入らない選りすぐりのフェアトレードグッズが自慢です。フェアトレードのコーヒー、紅茶、バナナ、塩、砂糖を使ってい、食事を提供。<br>TEL090-9993-9447<br> 営業時：12:00時から19:00時まで(日、月曜日休み土曜日は、18:00から22:00まで)<br>住所:〒606-8267 京都府京都市左京区北白川西町８５−５</p>',
  'icon': 'restaurant'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.7834913, 35.0292086]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>キッチンハリーナ（フェアトレード食堂）（本店）</strong><a href="quiz.html" class="btn messagequiz">Quiz</a><img src=""><p><a href="https://kitchen-halina.jimdofree.com/">キッチンハリーナは</a>、季節のごはんとゆったり空間、よそではちょっと手に入らない選りすぐりのフェアトレードグッズが自慢です。フェアトレードのコーヒー、紅茶、バナナ、塩、砂糖を使ってい、食事を提供。<br>TEL090-9993-9447<br> 営業時：12:00時から19:00時まで(日、月曜日休み土曜日は、18:00から22:00まで)<br>住所:〒606-8267 京都府京都市左京区左京区北白川西町８５−４</p>',
  'icon': 'restaurant'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [135.7835126, 35.0292879]
  }
  }
  ]
  }
  });
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': '{icon}-15',
'icon-allow-overlap': true
}
});
// 기본지도, 가게의정보표시
// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', function(e) {
var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}

new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', function() {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', function() {
map.getCanvas().style.cursor = '';
});
});
