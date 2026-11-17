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


const searchButton=document.querySelector(".search-button button");
const makerSelect=document.querySelector("#maker");
const typeSelect=document.querySelector("#type");
const searchResult=document.querySelector("#search-result");
searchButton.addEventListener("click",function(event){
  console.log("検索");
  event.preventDefault()
  console.log(makerSelect.value);
  if(makerSelect.value===""){
    console.log("メーカーを選択してください");
  }else{
    console.log("検索");
  }
  
  if(typeSelect.value===""){
    console.log("車種を選択してください");
  }else{
    console.log(typeSelect.value);
  }

  if(makerSelect.value===""||typeSelect.value===""){
    console.log("すべて選択してください");
  }else{
    console.log("検索します");
  }
});


  




