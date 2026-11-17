// .menu-buttonは「menuButton」
const menuButton=document.querySelector(".menu-button");
 // sp-menu=spMenu
const spMenu=document.querySelector(".sp-menu");
menuButton.addEventListener("click",function(){
  // メニューボタンをクリックされたら表示
  console.log("クリックされた");
  // spMenuに.is-openをつけたり外したりする
  spMenu.classList.toggle("is-open");
  // menuButtonにis-openをつけたり外したりする
  menuButton.classList.toggle("is-open");
  // もしspMenuにis-openがついていた場合aria-expendedをtrue
  if(spMenu.classList.contains("is-open"))
    {menuButton.setAttribute("aria-expanded","true");
    }
  // ついていない場合false
  else{
    {menuButton.setAttribute("aria-expanded","false")};
  }
});
// どこかをclickされた時に起こす
document.addEventListener("click",function(event){
  // クリックされた対象をコンソールで表示
  console.log(event.target);
  // もしspMenuのなかにクリックされた場合
  if(spMenu.contains(event.target)){
    console.log("true");
  }
  // 違う時
  else{
    console.log("false");
  }
  // もしspMenu以外にクリックかつメニューボタン以外にクリックされたら.is-openを消す
  if(!spMenu.contains(event.target)&&!menuButton.contains(event.target)){
    spMenu.classList.remove("is-open");
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded","false");
  }

});



// 検索ボタンと各選択項目を取得
const searchButton = document.querySelector(".search-button button");
const makerSelect = document.querySelector("#maker");
const typeSelect = document.querySelector("#type");
const bodytypeSelect = document.querySelector("#bodytype");
const priceSelect = document.querySelector("#price");
const yearSelect = document.querySelector("#year");
const mileageSelect = document.querySelector("#mileage");
const searchResult = document.querySelector("#search-result");

// 検索ボタンが押されたときの処理
searchButton.addEventListener("click", function(event) {
  // ページの再読み込みを防ぐ
  event.preventDefault();

  // メーカーと車種が選択されているか確認
  // どれか1つでも未選択ならメッセージを表示
if (
  makerSelect.value === "" ||
  typeSelect.value === "" ||
  bodytypeSelect.value === "" ||
  priceSelect.value === "" ||
  yearSelect.value === "" ||
  mileageSelect.value === ""
) {
  searchResult.textContent = "すべての項目を選択してください";
} else {
  // 全部選択されていたらメッセージを消す
  searchResult.textContent = "";
}
    // 選択した検索条件を表示
    
});




