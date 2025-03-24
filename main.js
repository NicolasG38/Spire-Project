const langFr=document.querySelector("#langFr");
const langEn=document.querySelector("#langEn");
const btnContactEl=document.querySelector("#btn-contact-el");
const logo=document.querySelector(".logo");

logo.addEventListener("click",()=>{
    click=true;
    if(click){
        window.location.href="main.html";
    }
}
);
btnContactEl.addEventListener("click",()=>{
    click=true;
    if(click){
        window.location.href="contact.html";
    }
});

let sbWc=document.querySelector(".sb-wc");
let imgSbWcArr=[
                "Stellar_Blade-Original/Mode-Photo/Stellar Blade_20241221181934.jpg",
                "Stellar_Blade-Original/Mode-Photo/Stellar Blade_20241119202515.jpg",
                "Stellar_Blade-Original/Mode-Photo/Stellar Blade_20241115210936.jpg",
                "Stellar_Blade-Original/Mode-Photo/Stellar Blade_20250127140742.jpg",
                "Stellar_Blade-Original/Mode-Photo/Stellar Blade_20250120180217.jpg",
                "Stellar_Blade-Original/Mode-Photo/Stellar Blade_20250126205834.jpg",];


function carousel(img, index){
    img=document.createElement("img");
    img.src=imgSbWcArr[index];
    img.classList.add("img-sb-wc");
    sbWc.innerHTML="";
    sbWc.appendChild(img);
   const arrowBack=document.querySelector("#arrow_back");
   const arrowForward=document.querySelector("#arrow_forward");
    arrowBack.addEventListener("click",()=>{
        if(index>0){
            index--;

        }else{
            index=imgSbWcArr.length-1;
        }
        img.src=imgSbWcArr[index];
    }
    );
    arrowForward.addEventListener("click",()=>{
        if(index<imgSbWcArr.length-1){
            index++;
        }else{
            index=0;
        }
        img.src=imgSbWcArr[index];
    }
    );
}

imgSbWcArr.forEach((img,index)=>{
    carousel(img, index);
    });
