const container = document.getElementById("container-content")
const nanoSuitContent=document.getElementById("nano-suit-content")
let nanoSuitTitle=document.getElementById("nano-suit-title")
let descriptionP=document.getElementById("description-p")
let whereToFind=document.getElementById("wheretofind")
let whereToFindP=document.getElementById("wheretofind-p")
let nanoImg=document.getElementById("nano-img")

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

//img nano suit
const nanoSuit=[
                "IMG_001.png",
                "IMG_002.png",
                "IMG_003.png",
                "IMG_004.png",
                "IMG_005.png",
                "IMG_006.png",
                "IMG_007.png",
                "IMG_008.png",
                "IMG_009.png",
                "IMG_010.png",
                "IMG_011.png",
                "IMG_012.png",
                "IMG_013.png",
                "IMG_014.png",
                "IMG_015.png",
                "IMG_016.png",
                "IMG_017.png",
                "IMG_018.png",
                "IMG_019.png",
                "IMG_020.png",
            ]

function nanoSuitContentF(e){
e.style.display="flex";
e.style.flexDirection="row";
e.style.margin="-30px 0";
e.style.width="690px";
e.style.height="630px";
}

btnAliceEnsoleillee.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Alice Ensoleillée</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>Découvrez la collection de maillots de bain ensoleillée de Tetrastar C&T : partez en vacances au Pays des merveilles !</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[0]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique </p>`
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
.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[0]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
