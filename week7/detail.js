const detailcontainer = document.getElementById("detail-container");

const params = new URLSearchParams(location.search);

const title = params.get("title");
const locationData = params.get("location");
const img = params.get("img");
const date = params.get("date");
const photographer = params.get("photographer");
const keyword = params.get("keyword");

const year = date.slice(0,4);
const month = date.slice(4,6);
const day = date.slice(6,8);

const list = document.createElement("div");
list.id = "list";

const image = document.createElement("img");
image.src = img;

const info = document.createElement("span");
info.innerText=`
  📷제목 : ${title}
  🚩장소 : ${locationData}
  🗓️날짜 : ${year}/${month}/${day}
  📷촬영자 : ${photographer}
  📌키워드 : ${keyword} 
`;

const back = document.createElement("button");
back.innerText = "뒤로가기";

back.addEventListener("click", ()=>{
  location.href="index.html";
});

list.appendChild(image);
list.appendChild(info);
list.appendChild(back);
detailcontainer.appendChild(list);