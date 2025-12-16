var str17 = "一文字ずつ表示します。";
var timerID17 = null;

function hyoji17() {
 
  var cnt17 = document.timer17.moji17.value.length;

  if (cnt17 < str17.length) {

    document.timer17.moji17.value = str17.substr(0, cnt17 + 1);
  } else {
  
    document.timer17.moji17.value = "";
  }

  timerID17 = setTimeout(hyoji17, 1000);
}

function start17() {
  
  if (timerID17 === null) {
    hyoji17();
  }
}
