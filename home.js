const newsContainer=document.getElementById("news");


const newsCels= document.createElement("section");
newsCels.classList.add("newscels");


let newsTitles=["Ceci est la premiére news", "Ceci est la seconde news", "Titre de la 3ieme news", "Stellar Blade, c'est cool","ça fonctionne ?", "alors ?"];
let newsTxts=["texte de teste", "Texte de teste n°2","C'est cool", "j'ai entendu dire que ce jeu était bien! c'est vrai ?", "oui je pense ! :/", "non toujours pas :/"];

function newsadded(){
    newsTitles.forEach( (title, index) => {
        const newsCel=document.createElement("article");
        newsCel.classList.add("newscel");
        newsContainer.appendChild(newsCels);
        newsCels.appendChild(newsCel);

        const newsTitle=document.createElement("h2");
        newsTitle.classList.add("newstitle");
        newsTitle.innerHTML=title;
        newsCel.appendChild(newsTitle);

        const newsTxt=document.createElement("p");
        newsTxt.classList.add("newstxt");
        newsTxt.innerHTML=newsTxts[index]
        newsCel.appendChild(newsTxt);
    });

}
newsadded()

function btnScrollNewsBoard (){
    
    for(const [index] of newsTitles){
        [index]+=1;
    }
}