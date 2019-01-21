var wFlag = false; //w87
var eFlag = false; //e69
var bFlag = false; //b66
var pFlag = false; //p80
var rFlag = false; //r82
var oFlag = false; //o79

var sFlag = false; //s83
var nFlag = false; //n78
var uFlag = false; //u85
var e2Flag = false;

$(window).on('load',function (){
// ここで文字を<span></span>で囲む
  $('.typ').children().andSelf().contents().each(function() {
    if (this.nodeType == 3) {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
    }
  });
// 一文字ずつフェードインさせる
  $('.typ').css({'opacity':1});
  for (var i = 0; i <= $('.typ').children().size(); i++) {
    $('.typ').children('span:eq('+i+')').delay(30*i).animate({'opacity':1},50);
  };
});

function textDraw(s){
// ここで文字を<span></span>で囲む
  $('.intyp').children().andSelf().contents().each(function() {
    if (this.nodeType == 3) {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
    }
  });
// 一文字ずつフェードインさせる
  $('.intyp').css({'opacity':1});
  for (var i = 0; i <= $('.intyp').children().size(); i++) {
    $('.intyp').children('span:eq('+i+')').delay(s*i).animate({'opacity':1},50);
  }
};

//function gazou(){
  //wright('<img src="img/a.png" width="104" height="91" />');
//}

document.onkeydown = keydown;

//enter = 13
//"1" = 49
function keydown() {
  var key = document.getElementById('input');
  var img = document.getElementById('img');
  var code = event.keyCode;;
  //1
  if(code == "49"){
    key.innerHTML = "This page is created by Takabe Isao.<br>It was created as a submission task.<br>Made by jQuery.";
    textDraw(40);
  }
  //2
  else if(code == "50"){
    key.innerHTML = "The official name of TPU is「Tokyo Polytechnic University」.<br>It is called 「Tokyou Kougei Daigaku」in Japanese.";
    textDraw(40);
  }
  //3
  else if (code == "51") {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    key.innerHTML = "Today's date is:"+year+"/"+month+"/"+day;
    textDraw(40);
  }
  //4
  else if (code == "52") {
    var date = new Date();
    var hour = date.getHours();
    var minu = date.getMinutes();
    var sec = date.getSeconds();
    key.innerHTML = "Current time is:"+hour+":"+minu+":"+sec;
    textDraw(40);
  }
  //5
  else if (code == "53") {
    key.innerHTML = "「KINGDOM HEARTS III」1/25 on sale.<br> The price of this game is 8800Yen+tax.<br> You must buy this.";
    textDraw(40);
  }
  //6
  else if (code == "54") {
    key.innerHTML = "The length of this code is 6.<br>First:1-2-3<br>Second:6-1-3 or 6-1-5 or 6-1-19<br>Third:5-3-8<br>Fourth:2-1-19 or 2-1-29 or 2-2-37<br>Fifth,4-1-3 or 4-1-4<br>sixth:3-1-2";
    textDraw(40);
  }

  else if (code == "87") {
    wFlag = true;
  }
  else if (code == "69" && wFlag == true) {
    eFlag = true;
  }
  else if (code == "66" && eFlag == true) {
    bFlag = true;
  }
  else if (code == "80" && bFlag == true) {
    pFlag = true;
  }
  else if (code == "82" && pFlag == true) {
    rFlag = true;
  }
  else if (code == "79" && rFlag == true) {
    oFlag = true;
    pFlag = false;
    rFlag = false;
    key.innerHTML = `........................................<br>
                     !!WARNING!! !!WARNING!! !!WARNING!!<br>
                     ........................................<br><br>
    The code be authenticated.<br>
    Firing a ""Nuclear missile"".<br><br>
    If you stop this firing,pleeas enter「「stop this nuclear missile for life of all human」」until I finish drawing Mark.<br><br><br>
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br>
    MMMMMMMMMMMMMMM#　!..JggNNNNNag-..,7　MMMMMMMMMMMMMMMMM<br>
    MMMMMMMMMMMM　~.,gMMMMMMMMMMMMMMMMMMNg,.?WMMMMMMMMMMMM<br>
    MMMMMMMMM#^.,MMMWMMMMMMMMMMMMMMMMMWMMa,..TMMMMMMMMMMMM<br>
    MMMMMMM#^.MMD!　　?MMMMMMMMMMMMMMMMH!　?MMN,TMMMMMMMMMM<br>
    MMMMMMt.MMD　　 　　?MMMMMMMMMMMMMM@　　　　HMm.WMMMMMMMMM<br>
    MMMMM　M#　　　　　　　(MMMMMMMMMMMMF　　　　　　?MN,TMMMMMMM<br>
    MMMM!JMF　　　　　　　　,MMMMMMMMMMF　　　　　　　　,MN.4MMMMM<br>
    MMM%.MF　　　　　　　　　,MMMMMMMMM$　　　　　　　　　,MN.,MMMM<br>
    MM#.,MM　　　　　　　　　　.MMMMMMML　　　　　　　　　　　JMb,,MM<br>
    MM]-MF　　　　　　　　　　　JM#M!?TMM,　　　　　　　　　　.MN　MM<br>
    MM{-dM　　　　　　　　　　　JM?　　　JM　　　　　　　　　　　WM　Md<br>
    MM{-dMNNNNNNNNNNNNNMMM;　　　..MMNNNNNNNNNNNNNMMMM--dMM<br>
    MM)dMMMMMMMMMMMMMMMNNNN,　　..MMMMMMMMMMMMMMMMMMM　MMMM<br>
    MMb,MMMMMMMMMMMMMMMMMNNNaggMMMMMMMMMMMMMMMMMMMMF.MMMM<br>
    MMN.WMMMMMMMMMMMMMMM　　　　　　　WMMMMMMMMMMMMMMMM^(MMMM<br>
    MMMb.MMMMMMMMMMMMMD　　　　　　　　　UMMMMMMMMMMMMMF.MMMMM<br>
    MMMMb,MMMMMMMMMMM!　　　　　　　　　　　TMMMMMMMMMMF.MMMMMM<br>
    MMMMMh.WMMMMMMMM!　　　　　　　　　　　　?MMMMMMMMMM.MMMMMM<br>
    MMMMMMN,?MMMMMMM　　　　　　　　　　　　　　MMMMNMMD.JMMMMMM<br>
    MMMMMMMMN,?MMMM!　　　　　　　　　　　　　　　MMMNMD-.(MMMMMM<br>
    MMMMMMMMMMNJ,TM　　　　　　　　　　　　　　　.JMMB=.dMMMMMMMM<br>
    MMMMMMMMMMMMMNa,?TWMMMNNgggNMMM.gMMMMMMMMMMMMMMMMMMMM<br>
    MMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br><br>


    congratulations!<br>
    Human extinction was confirmed!`;
  textDraw(55);
  }

  else if (code == "83" && oFlag == true) {
    sFlag = true;
  }
  else if (code == "85" && sFlag == true) {
    uFlag = true;
  }
  else if (code == "78" && uFlag == true) {
    wFlag = false; //w87
    eFlag = false; //e69
    bFlag = false; //b66
    pFlag = false; //p80
    rFlag = false; //r82
    oFlag = false; //o79

    sFlag = false; //s83
    nFlag = false; //n78
    uFlag = false; //u85
    e2Flag = false;
    key.innerHTML = "Stop the missile firing, you save the life of all human beings.";
    textDraw(40);
  }

  else {
    if(oFlag == false){
    key.innerHTML = "data not found.<br>Pleas enter designated number.";
    textDraw(40);
  }
  }
}
