const question = "ゲーム市場、最も売れたゲームはどれ？";
const answer = [
"スーパーファミコン",
"プレイステーション",
"ニンテンドースイッチ",
"ニンテンドーDS"];
const correct = "ニンテンドーDS";

const $button = document.getElementsByTagName("button");
const buttonlength = $button.length
// クイズの問題文
const setupquiz = () => {
  
  document.getElementById("js-question").textContent = question;
  let buttonindex = 0;
  while(buttonindex < buttonlength) {
    $button[buttonindex].textContent = answer[buttonindex];
    buttonindex++;
  }
}

setupquiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert("大正解！");
  } else {
    window.alert("不正解！");
  }
}
let handlerindex = 0;
while(handlerindex < buttonlength){
  $button[handlerindex].addEventListener("click", (e) => {
  clickHandler(e);
  });
  handlerindex++;
}

