mapboxgl.accessToken = 'pk.eyJ1Ijoia2ltc2V1bmdod2EiLCJhIjoiY2tiZ2dwYmlxMTVoZDJ1bWVseXg2dWFreiJ9.aiGGvnGULguEMU_wDX2xSg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [135.767116, 35.012669],
zoom: 10.15
});

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
'<strong>Muelek（ムーレック）</strong><p><a href="http://www.kyotodekuraso.com/p/5732" target="_blank" title="Opens in a new window">ムーレック</a>は,アジアを主にする世界の子供支援するを目的とした、フェアトレードのカフェと雑貨屋です。雑貨はどれも手作りで、カフェは築65年の小さな庭を持つ屋です。<br>営業時間	11:00～18:00 <br>定休日 : 水曜日・木曜日<br>TEL 075-462-3311</p>',
'icon': 'rocket'
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
'<strong>楽天堂(自然食品販売・塾)</strong><p> <a href="https://www.rakutendo.com/index.html" target="_blank" title="Opens in a new window">楽天堂の願いは、</a>世界中の人がこぞって肉を食べれば食糧危機は深刻になるばかりだけど、世界中の人が満ち足りた食事ができるように―これが楽天堂・豆料理クラブの願いです。<br>TEL 075-811-4890,FAX 02046656740,<br>営業日：水～土曜（日～火曜＆祝日休),<br> 営業時間：11-7時</p>',
'icon': 'rocket'
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
'<strong>Globe Mountain Coffee</strong><p><a href="https://shop.globe-mountain-coffee.com/" target="_blank" title="Opens in a new window">Globe Mountain Coffeeは、</a> フェアトレード・オーガニックコーヒー専門店。京都に店舗を構える自家焙煎コーヒーショップです。アジア系のコーヒーを中心に取り揃えています。焙煎したての香り高いコーヒーをお届けします。是非ご利用下さい。<br>TEL075-812-0606<br>営業日：木曜日＆祝日休　<br> 営業時：10時から23時まで</p>',
'icon': 'rocket'
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
'<strong>リボーン(フェアトレードお服販売)</strong><p><a href="http://www.reborn-kyoto.org/" target="_blank" title="Opens in a new window">リボーンは、</a> 日本全国から寄贈された着物地を活用し、主に洋裁の技術指導を通じて途上国の女性の精神的経済的自立を支援している非営利団体。<br>営業時間	10:00～18:00 <br>定休日 : 土曜日・日曜日<br>TEL 075-213-1731</p>',
'icon': 'rocket'
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
'<strong>株式会社 Hibana</strong><p><a href="https://hibana.co.jp/" target="_blank" title="Opens in a new window">株式会社Hibanaは、</a><br>弊社は「森林バイオマスの利用促進」を目的として2006年に設立しました。バイオマスとは、生物（bio）由来の物質（mass）のことを差し、中でも木が由来の資源を森林（木質）バイオマスと言います。木は、素材として利用するだけでなく、燃焼させてエネルギーとして利用することもできます。そして何より持続可能な資源。「環境へやさしい資源」として、今注目を集めています。<br>営業時間	10:00～19:00 <br>定休日 : 水曜日<br>TEL 075-241-6038</p>',
'icon': 'rocket'
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
'<strong>sisam</strong><p><a href="https://sisam.jp/" target="_blank" title="Opens in a new window">sisamは、</a>1999年の創業以来、フェアトレードに事業として携わっています。フェアトレードとはお買いものによって社会経済的に弱い立場にいる人たちの暮らしを支える仕組みであり、そのフェアトレード商品や考え方を広めていくこと自体が社会的なアクションだと考えています。<br>TEL075-212-1653<br> 営業時：11:30時から21時まで<br>住所：〒604-8041 京都府京都市中京区裏寺町 通蛸薬師上ル裏寺町591</p>',
'icon': 'rocket'
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
'<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.031706, 38.914581]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.020945, 38.878241]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.007481, 38.876516]
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

