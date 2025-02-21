const container = document.getElementById("container-content")

const btnExospine=document.getElementById("exospine")
const btnGears=document.getElementById("gears")
const btnOutside=document.getElementById("outside")
const btnFriends=document.getElementById("friends")


//Submenu Gears (nano-combi, équipement...)
const submenuOutside=document.getElementById("submenu-outside")
const ueElSubmenuOutside=document.getElementById("ue-el-submenu-outside")
const submenOutsideNanoSuit=document.getElementById("submenu-outside-nano-suit")
const submenuOutsideNanoFace=document.getElementById("submenu-outside-nano-face")
const submenuOutsideNanoHairdress=document.getElementById("submenu-outside-nano-hairdress")
const submenuOutsideNanoEarring=document.getElementById("submenu-outside-nano-earring")

let nanoSuitList=document.getElementById("nano-suit-content")

//sheet info Nano-suit
const nanoSuitContent=document.getElementById("nano-suit-content")
const btnSuits=document.getElementById("suits")
let nanoSuitTitle=document.getElementById("nano-suit-title")
let descriptionP=document.getElementById("description-p")
let whereToFind=document.getElementById("wheretofind")
let whereToFindP=document.getElementById("wheretofind-p")
let nanoImg=document.getElementById("nano-img")


//img nano suit
const nanoSuit=[
                "PNG/IMG_001.png",
                "PNG/IMG_002.png",
                "PNG/IMG_003.png",
                "PNG/IMG_004.png",
                "PNG/IMG_005.png",
                "PNG/IMG_006.png",
                "PNG/IMG_007.png",
                "PNG/IMG_008.png",
                "PNG/IMG_009.png",
                "PNG/IMG_010.png",
                "PNG/IMG_011.png",
                "PNG/IMG_012.png",
                "PNG/IMG_013.png",
                "PNG/IMG_014.png",
                "PNG/IMG_015.png",
                "PNG/IMG_016.png",
                "PNG/IMG_017.png",
                "PNG/IMG_018.png",
                "PNG/IMG_019.png",
                "PNG/IMG_020.png",
            ]


//list of nano-suits



//btn nano suit 
const btnAliceEnsoleillee=document.getElementById("alice_ensoleillée")
const btnAventuriereDesTerresDésolée=document.getElementById("aventuriere_des_terres_desolee")
const btnBikiniDePlongeeVague=document.getElementById("bikini_de_plongee_vague")
const btnBondageCybernétique=document.getElementById("bondage_cybernétique")
const btnChaperonRougeEnsoleillee=document.getElementById("chaperon_rouge_ensoleillee")
const btnCombinaisonDExplorationDOrca=document.getElementById("combinaison_d-exploration_d-orca")
const btnCombinaisonDePlongeePlanetaire2=document.getElementById("combinaison_de_plongee_planetaire_2")
const btnCombinaisonDePlongeePlanetaire2V2=document.getElementById("combinaison_de_plongee_planetaire_2-2")
const btnCombinaisonDePlongeePlanetaire3=document.getElementById("combinaison_de_plongee_planetaire_3")
const btnCombinaisonDePlongeePlanetaire3V2=document.getElementById("combinaison_de_plongee_planetaire_3-2")
const btncombinaisonDePlongeePlanetaire_7=document.getElementById("combinaison_de_plongee_planetaire_7")
const btncombinaisonDePlongeePlanetaire_7V2=document.getElementById("combinaison_de_plongee_planetaire_7-2")
const btncombinaisonDePlongeePlanetaire_7V3=document.getElementById("combinaison_de_plongee_planetaire_7-3")

function nanoSuitContentF(a){
    a.style.display="flex";
    a.style.width="100%";
    a.style.height="100%";
    a.style.boxSizing= "border-box";

}
btnAliceEnsoleillee.addEventListener("click", function(){
nanoSuitContentF(nanoSuitContent)
nanoSuitTitle.innerHTML=`<h1>Alice Ensoleillée</h1>`
descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>Découvrez la collection de maillots de bain ensoleillée de Tetrastar C&T : partez en vacances au Pays des merveilles !</p>`
nanoImg.innerHTML=`<img class="nano-img" alt="" src="${nanoSuit[0]}">`
whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
    
)
btnAventuriereDesTerresDésolée.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Aventurière des terres désolées</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>Personne ne peut vous arrêter. Traversez les zones hostiles et franchissez les obstacles avec la tenue Aventurière. Bien entendu, n'allez pas chercher de poux dans la tête des Naytibas.</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[1]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique </p>`
    }
)
btnBikiniDePlongeeVague.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Bikini de plongée Vague</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>Suite à la disparition mystérieuse de « Galaxy »
Alan de Tetrastar C&T, « Kitsune » Maria a repris sa position vacante afin de préserver les valeurs de l'entreprise. Maria a ensuite présenté
« Vague », une nouvelle marque respectueuse de l'environnement axée sur la durabilité, qui n'utilise que des matériaux polymères provenant de filets de pêche recyclés. Elle a alors lancé sa collection de maillots de bain, marquant le début de l'ascension inarrêtable de sa carrière.</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[2]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique </p>`
    }
)
btnBondageCybernétique.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Bondage cybernétique</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>Cette tenue de la collection « Sens exotique » a été conçue par le styliste phare de Tetrastar C&T : « Galaxy » Alan. D'après la rumeur, les fibres, la doublure et les nœuds sont constitués de nerfs quantiques qui créent un lien avec le corps et permettent une totale liberté de mouvement.</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[3]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique </p>`
    }
)

btnChaperonRougeEnsoleillee.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Chaperon rouge ensoleillé</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>Découvrez la collection de maillots de bain ensoleillée de Tetrastar C&T : même le grand méchant loup ne pourra pas perturber les vacances du Chaperon rouge !</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[4]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique </p>`
    }
)

btnCombinaisonDExplorationDOrca.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison d'exploration d'Orca</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>La Combinaison d'exploration d'Orca est le fruit de la collaboration entre Tetrastar C&T et Orca Aerospace. Ce haut de compression est conçu pour être porté en dessous d'une combinaison spatiale. N'effectuez iamais de sortie dans le vide intersidéral si vous ne portez rien d'autre !</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[5]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique </p>`
    }
)

btnCombinaisonDePlongeePlanetaire2.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (2)</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>« Enfant né par une nuit étoilée. Accomplis ta mission. Garde à jamais la tête haute. Notre futur est entre tes mains. »</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[6]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique </p>`
    }
)

btnCombinaisonDePlongeePlanetaire2V2.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (2) V2</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>« Enfant né par une nuit étoilée. Accomplis ta mission. Garde à jamais la tête haute. Notre futur est entre tes mains. »</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[7]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnCombinaisonDePlongeePlanetaire3.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (3)</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>« Enfant né par une nuit étoilée. Accomplis ta mission. N'oublie jamais la passion qui irradie ton cœur. Notre futur est entre tes mains. »</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[8]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnCombinaisonDePlongeePlanetaire3V2.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (3) V2</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>« Enfant né par une nuit étoilée. Accomplis ta mission. N'oublie jamais la passion qui irradie ton cœur. Notre futur est entre tes mains. »</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[9]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btncombinaisonDePlongeePlanetaire_7.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (7)</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>« Enfant né par une nuit étoilée. Une mission prestigieuse commence. Illumine la Terre tel un phare dans la nuit. Puisses-tu forger un chemin vers l'avenir. »</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[10]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btncombinaisonDePlongeePlanetaire_7V2.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (7) V2</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[11]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btncombinaisonDePlongeePlanetaire_7V3.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (7) V3</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[12]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
