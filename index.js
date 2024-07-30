const express = require('express')
const app = express()
const db = require ('quick.db')
const latency = require ('express-latency')
 const { EventEmitter } = require('events');

 
 const profiles = new EventEmitter();
 
 profiles.on('route', ({ req, elapsedMS }) => {
   console.log(req.method, req.url, `${elapsedMS}ms`);
 });
 
 app.use(function profilerMiddleware(req, res, next) {
   const start = Date.now();
   res.once('finish', () => {

     profiles.emit('route', { req, elapsedMS: Date.now() - start });
   });

app.use('/ping', (req, res) => {
  res.send({
    ping: `${start - Date.now}ms`
  })
})
   next();
 });


let beltigar = [
  "https://cdn.discordapp.com/attachments/809130524634775582/809131889104912384/whitetiger4.jpg",
"https://cdn.discordapp.com/attachments/809130524634775582/809131893324513350/whitetiger.jpg",
"https://cdn.discordapp.com/attachments/809130524634775582/809131890891817042/whitetiger2.jpg",
"https://cdn.discordapp.com/attachments/809130524634775582/809131890753273856/whitetiger3.png"
]


let aliga = [
  "https://cdn.discordapp.com/attachments/809130524634775582/809130552316919828/aligator2.jpg",
"https://cdn.discordapp.com/attachments/809130524634775582/809130552782880839/aligator3.jpg",
"https://cdn.discordapp.com/attachments/809130524634775582/809130565533696020/aligator1.jpg"
] // :|
let pingvin = [      
  "https://cdn.discordapp.com/attachments/809130524634775582/809132438437101588/pingvin_kis_penguinbaby_44230580_1200px.jpg",
  "https://cdn.discordapp.com/attachments/809130524634775582/809132448590856282/pingvin-mostphotos-21906crop040740552281resize1280720autoorientquality90density150stripextensionjpgi.jpg", 
  "https://cdn.discordapp.com/attachments/809130524634775582/809132493433340024/ce595aff84e231ed852cec55eeb1d5c3.jpg",
  "https://cdn.discordapp.com/attachments/809130524634775582/809132590941995038/116085001.jpg"
]
  
  anime = [
  "https://cdn.discordapp.com/attachments/667103246858321931/808749802565009488/6e83dd4e58bb9e22ff5c9f61ab390942.gif",
  "https://cdn.discordapp.com/attachments/788086662465978398/809105328922427432/20210210_185538.png",
  "https://cdn.discordapp.com/attachments/667103246858321931/808749820671033355/87d938ab57408de83e9d3c7551cab53c.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808749856456966184/f423c3dbb6d23f4d3e721e0b52d1c222.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808749980030205972/d706284c256e842de7bce749145f3352.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808750221248823406/73ef734ad445391049c07fa3ce956381.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808752656150822983/75f5c2656489ea90f54a656be2a6e49b.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808762612694384640/fa0e6a30658189990ba7e0cbbeacab2f.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808794304524582962/image0.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808858782452154398/a_8cadba6d1a88989ef8bcc5d439015598.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808858783702843422/a_17eaabe7581c95e65fe3dd0098e32413.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058087930953748/4-1.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058097855332422/4-1_1.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058127029731338/a_0ddcd994498b39bcea57674cd8cc93c3.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058179623026728/a_7f60659ca8842f6f68bba567e0b07fda.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058213647351818/a_0034a190e77a63eb8b19ac2933f74cb9.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058258572541972/a_f718f72afcbdf649a34d54c03199d0c6.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058265178177536/a_bc165cf5c9a9a6478960c0108d95ba58.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058271205261312/aad48cc5521e4b6f73f2f98c5fa3872e.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058281133441125/a_1cf4050671b42c3f313896383ded03c2.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058309251924028/a_c7f76d5b2e09a9231ff838f8797fa6c9.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809058357008793630/image0.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/809069524505985064/image0-12.gif",
  "https://cdn.discordapp.com/attachments/770397409284980776/807951385920012318/image1.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/808726691216228412/15.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/808817169864458260/a_4b69ff9fc2ea642c49b9f9cf768de3de.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/809031259384184882/animegift_4.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/808334842219331634/wiccagif_153.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/808462695816626239/a_136df00b29569768666c2df6075f9945.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/809047418666614796/wiccagif_147.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/809047877841715260/wiccagif_144.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/809048040760672276/wiccagif_135.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/808007732820312094/charu_anime_65.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807708283586347058/1486750601_yozora_2.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807522990820425738/wiccagif_162.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807517293432274954/tenor.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807517292849790996/00e64c96d318230eb5e1637a5319fd161ab0ca49r1-540-304_hq.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807517291658870804/a_5ba9627f24c695381f06380b70f053fa.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807370278879363098/a_239eb05d634f3f89b1a471c213f16c1c.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807320555421302864/wiccagif_173.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807320523570413638/wiccagif_174.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807243439368044554/b9160e1096109bc0f04db783c35c9e69.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807243487170396190/89405449d0440581d5a15a74e9c6d918-1.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807129622457614366/ddd.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807112681919741982/8b42dae5d31687aaeb75cc229c932b4d.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807112553137438730/0070f2a06aae07da4f8b7d7ba050dd97.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807112488185102366/62fe1e1447bf6f644168f95c6fababe9.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807112224002932746/1540309956_Zerotwo.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807112046763704330/a_f1b71418ae086f20a9d78348280e7cdc.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807111927301799956/b229c1d0e3bf635bcc920929d0955c5c.gif",
  "https://cdn.discordapp.com/attachments/631918698285891634/807111704130486322/de97cbc3bc8fca6bc920186ce52e2570.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808676784912597022/8fa9fb029452e513fc4225ffb4d549de.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808676762665615360/5be75b98294ba1eefda765900691a98d.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808673364586659870/c561b98a0dd8fe32cefa085ae5f4545f.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808619726707490827/image2.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808619726082932746/image0.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808418508198117376/e958bceb7c214880821ff78bd1526e7f.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808418443325997126/a850b93705ea6c6d4d8df2ba9511404f.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808418428191899732/d2fc9ac6a56e1a3bf015d498057f241c.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808418373201297438/36275c354dd9d27461832e89f348ea63.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808416247406264371/1489234587_tumblr_o6kt80CZXS1tyak95o1_r1_500.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808416245878882354/1528061909_z2.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808416244721516585/cced29d4017a5ca08fb5809b989f627a.gif",
  "https://cdn.discordapp.com/attachments/667103246858321931/808416244180189204/df305e4be3176ec2f85364fab3937913.gif"
]

let cars = [
  "https://cdn.discordapp.com/attachments/748591399493959720/794088644737630298/nissan_skaylayn_ar34.gif",
"https://cdn.discordapp.com/attachments/748591399493959720/794307554086748220/546b4abebe63e_-_wooow-17500770-lg.gif",
"https://cdn.discordapp.com/attachments/748591399493959720/794731848545992735/a_59cd5eafc903ef0d91cfa395c7cd3bb9.gif",
"https://cdn.discordapp.com/attachments/748591399493959720/794731896898322452/1509101876_1497557925_giphy_2.gif",
"https://cdn.discordapp.com/attachments/748591399493959720/796066040940593152/gtr_dc.gif",
"https://cdn.discordapp.com/attachments/748591399493959720/796370085052022844/image0.gif",
"https://cdn.discordapp.com/attachments/748591399493959720/802683100387737600/a_e8bcfcfb4e1e9f5d4cfdfb2f72987dc0.gif"
]

let womans = [
"https://cdn.discordapp.com/avatars/419494685506273280/a_fcea4ea8e14cb9dbf3c05cdd5a4ed567.gif",
"https://cdn.discordapp.com/avatars/502866658482847747/a_1d79c0d14fc5f87282af32d9dd101097.gif",
"https://cdn.discordapp.com/avatars/768074899032899585/a_8c9f2839c317aea17ad68dda0737da43.gif",
"https://cdn.discordapp.com/avatars/386846661328109568/a_70f4f57a38bade2c35a9a082a99c88b8.gif",
"https://cdn.discordapp.com/avatars/779618131211452416/a_8222f50d9794e502d3ce2fd7df91bd6d.gif",
"https://cdn.discordapp.com/avatars/795983853415432233/a_68673f40415f62e7191db67dc2c74495.gif",
"https://cdn.discordapp.com/avatars/756184088888475868/a_6a1247681522e0b40e115654308405b1.gif"
]

let boys = [
  "https://cdn.discordapp.com/attachments/608711476219478045/809061634714107914/Zeyrox_Man_80.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809061639060062208/Zeyrox_Man_42.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809061646646902804/Zeyrox_Man_70.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809061651970129940/Zeyrox_Man_48.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809062306436481074/186.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809062348605095977/a_f298518514773660e2dabcb8e0f59c7b.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809062754920693760/a_77abcad1ac30da46a012213a6de1d004.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809062767742287912/a_f1ee662508410fa0a9f8da784151d788.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809062981258051604/allahu_raina_man_gif_15.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809063052543918151/gif.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809063215673114664/a_4728a911c14b0874eb554b1e3f514fc3.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809063336666726510/image0.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809063363912794132/original_9.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809063366261735434/Efeck_Tark.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809073676111577119/a_c5666ec1d5d5976b12c2f63ab72653adx.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809088767343722516/a_04d088656f0f1b2e09813f1b7e49a630.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809088806623903744/37.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809088893806313522/a_ba1dde1b3167a8e8ad2372005c656be2.gif",
  "https://cdn.discordapp.com/attachments/608711476219478045/809089015223418910/a_cab0f54bda03f3154aea8acafdf33e5d.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809038573205979186/dc_pp-2.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809038527815090196/Boys_5.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809038508994986054/a_d17be688e5b1f45ad2957e039a6aa98f.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809038478331478016/a_cbe538dddbe6f1f05eed8a20a35009dd.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809038403294330890/a_2a4156f57a58aa3cfe0bd54e1ff3ca24.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809038351192555530/a_fb267f3de29d9d25b47e8a4108b4917b.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809024863029035028/a_8629c5c17c8c2a07e6d2fa2bbcb3a948.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809024888764760084/Mulan_Gif_52-1.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809023800519688198/53-1.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/809011584424083476/590ad930ba4824c823f39600d868757a.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/808997474424324157/image5.gifd.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/808997474017607710/hit_gif_14.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/808994959540879400/75.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/808994917417615370/a_378d9d35fae693b5357f2d474571d7dc.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/808987198136516648/Man_GIF_11.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/808986877977427978/a_8e274a0e15c1736d3798dadb7cffd8fe.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/808986831654879232/Avatar-1.gif"
]


app.get('/gifs/anime', function (req, res) {
  res.send({
    link: anime[Math.floor(Math.random() * anime.length)]
})

// namerihme problema

app.get('/gifs/womans', function (req, res) {
  res.send({
    link: womans[Math.floor(Math.random() * womans.length)]
})
})
})

const Endpoints = ["/img/pinguin", "/img/whitetiger", "img/aligator", "/gifs/womans", "/gifs/boys", "/gifs/cars", "/gifs/anime"];


app.get('/', function (req, res) {
  res.status(200).send({ endpoints: Endpoints })
});






app.get('/gifs/boys', function (req, res) {
  res.send({
    link: boys[Math.floor(Math.random() * boys.length)]
})
})

app.get('/gifs/cars', function (req, res) {
  res.send({
    link: cars[Math.floor(Math.random() * cars.length)]
})
})


app.get('/img/aligator', function (req, res) {
  res.send({
    link: aliga[Math.floor(Math.random() * aliga.length)]
})
})


app.get('/img/whitetiger', function (req, res) {
  res.send({
    link: beltigar[Math.floor(Math.random() * beltigar.length)]
})
})
app.get('/img/pinguin', function (req, res) {
  res.send({
    link: pingvin[Math.floor(Math.random() * pingvin.length)]
})
}) 

app.get('/img/pingvin', function (req, res) {
  res.get(link) 
  res.send({
    link: pingvin[Math.floor(Math.random() * pingvin.length)]

}) 
})

  

let port = 3000 || 3001 || 3002
app.listen(port)