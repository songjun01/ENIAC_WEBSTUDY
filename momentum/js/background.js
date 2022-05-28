const images=["0.JPEG","1.JPEG","2.JPEG","3.JPEG"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`C:/대학교/ENIAC/Web/nomadcoders chrome app/momentum/img/${chosenImage}`;

document.body.appendChild(bgImage);