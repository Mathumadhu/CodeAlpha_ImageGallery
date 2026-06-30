const filterButtons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".image");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

document
.querySelector(".active")
.classList.remove("active");

button.classList.add("active");

const filter = button.dataset.filter;

images.forEach(img => {

if(filter === "all"){
img.style.display = "block";
}
else{
img.style.display =
img.classList.contains(filter)
? "block"
: "none";
}
});
});
});

const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close");

const prevBtn =
document.querySelector(".prev");

const nextBtn =
document.querySelector(".next");

const counter =
document.querySelector(".counter");

let currentIndex = 0;

function showImage(index){

lightboxImg.src =
galleryImages[index].src;

counter.textContent =
`${index + 1} / ${galleryImages.length}`;
}

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;

showImage(currentIndex);

lightbox.style.display="flex";
});
});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";
});

nextBtn.addEventListener("click",()=>{

currentIndex =
(currentIndex + 1)
% galleryImages.length;

showImage(currentIndex);
});

prevBtn.addEventListener("click",()=>{

currentIndex =
(currentIndex - 1 + galleryImages.length)
% galleryImages.length;

showImage(currentIndex);
});

window.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";
}
});