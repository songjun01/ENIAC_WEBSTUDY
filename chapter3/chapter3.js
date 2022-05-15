const grap=document.getElementById("Grap");       //html의 element 중에서 id가 "Grap"인 element를 찾아 grap에 저장

console.dir(grap);
grap.innerText="Got you!";                         //title의 text 변경

console.log(grap.id);
console.log(grap.className);


const graps=document.getElementsByClassName("Grap");        //class가 "Grap"인 element의 array
console.log(graps);


const hello=document.querySelector(".hello h1");            //element를 css방식으로 검색     hello를 찾고 그 안에 h1을 찾아 저장(첫 번째로 검색된 element)
const hellos=document.querySelectorAll(".hello h1");        //element를 css방식으로 검색     hello를 찾고 그 안에 h1을 찾아 저장(array)
console.log(hello);
console.log(hellos);


const h1=document.querySelector("div.hello h1");
console.dir(h1);
function handleTitleClick(){
    console.log("tItle was clicked!");
    h1.style.color="blue";
}
h1.addEventListener("click",handleTitleClick);
function handleMouseEnter(){
    h1.innerText="mouse is here!";
}
h1.addEventListener("mouseenter",handleMouseEnter);
function handleMouseLeave(){
    h1.innerText="mouse is gone!";
}
h1.addEventListener("mouseleave",handleMouseLeave);


function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
window.addEventListener("resize",handleWindowResize);
function handleWindowCopy(){
    alert("copier!");
}
window.addEventListener("copy",handleWindowCopy);
function handleWindowOffline(){
    alert("SOS no WIFI");
}
window.addEventListener("offline",handleWindowOffline);
function handleWindowOnline(){
    alert("ALL GOOD");
}
window.addEventListener("online",handleWindowOnline);