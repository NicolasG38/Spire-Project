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

/*let nanoSuitList=document.getElementById("nano-suit-content")*/

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
                "PNG/IMG_021.png",
                "PNG/IMG_022.png",
                "PNG/IMG_023.png",
                "PNG/IMG_024.png",
                "PNG/IMG_025.png",
                "PNG/IMG_026.png",
                "PNG/IMG_027.png",
                "PNG/IMG_028.png",
                "PNG/IMG_029.png",
                "PNG/IMG_030.png",
                "PNG/IMG_031.png",
                "PNG/IMG_032.png",
                "PNG/IMG_033.png",
                "PNG/IMG_034.png",
                "PNG/IMG_035.png",
                "PNG/IMG_036.png",
                "PNG/IMG_037.png",
                "PNG/IMG_038.png",
                "PNG/IMG_039.png",
                "PNG/IMG_040.png",
                "PNG/IMG_041.png",
                "PNG/IMG_042.png",
                "PNG/IMG_043.png",
                "PNG/IMG_044.png",
                "PNG/IMG_045.png",
                "PNG/IMG_046.png",
                "PNG/IMG_047.png",
                "PNG/IMG_048.png",
                "PNG/IMG_049.png",
                "PNG/IMG_050.png",
                "PNG/IMG_051.png",
                "PNG/IMG_052.png",
                "PNG/IMG_053.png",
                "PNG/IMG_054.png",
                "PNG/IMG_055.png",
                "PNG/IMG_056.png",
                "PNG/IMG_057.png",
                "PNG/IMG_058.png",
                "PNG/IMG_059.png",
                "PNG/IMG_060.png",
                "PNG/IMG_061.png",
                "PNG/IMG_062.png",
                "PNG/IMG_063.png",
                "PNG/IMG_064.png",
                "PNG/IMG_065.png",
                "PNG/IMG_066.png",
                "PNG/IMG_067.png",
                "PNG/IMG_068.png",
                "PNG/IMG_069.png",
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
const btnCombinaisonDePlongeePlanetaire6=document.getElementById("combinaison_de_plongee_planetaire_6")
const btnCombinaisonDePlongeePlanetaire_7=document.getElementById("combinaison_de_plongee_planetaire_7")
const btnCombinaisonDePlongeePlanetaire_7V2=document.getElementById("combinaison_de_plongee_planetaire_7-2")
const btnCombinaisonDePlongeePlanetaire_7V3=document.getElementById("combinaison_de_plongee_planetaire_7-3")
const btnCombinaisonDesEtoiles=document.getElementById("combinaison_des_etoiles")
const btnCombinaisonNeurolien=document.getElementById("combinaison_neurolien")
const btnCombinaisonOuverte=document.getElementById("combinaison_ouverte")
const btnCybermage=document.getElementById("cybermage")
const btnEuphorieDuPilote=document.getElementById("euphorie_du_pilote")
const btnFilleDeLAir=document.getElementById("fille_de_l-air")
const btnForceQuotidienne=document.getElementById("force_quotidienne")
const btnFrissonsDeLaVitesse=document.getElementById("frissons_de_la_vitesse")
const btnHautCourtPunk=document.getElementById("haut_court_punk")
const btnIllusionisteCybernetique=document.getElementById("illusioniste_cybernetique")

const btnIngenieurDOrca=document.getElementById("ingenieur_d-orca")
const btnJeanDechireFoursecond=document.getElementById("jean_dechire_foursecond")
const btnJeanNoirFoursecond=document.getElementById("jean_noir_foursecond")
const btnJeanQuotidien=document.getElementById("jean_quotidien")
const btnKunoichiBlanc=document.getElementById("kunoichi_blanc")
const btnKunoichiNoire=document.getElementById("kunoichi_noire")
const btnLaVieEnRose=document.getElementById("la_vie_en_rose")
const btnLapinDEte=document.getElementById("lapin_d_ete")
const btnMaillotLapinou=document.getElementById("maillot_lapinou")
const btnMascotteQuotidienne=document.getElementById("mascotte_quotidienne")
const btnMecanicienneDebrouillarde=document.getElementById("mecanicienne_debrouillarde")
const btnMonokiniVagueOblique=document.getElementById("monokini_vague_oblique")
const btnMotardeQuotidienne=document.getElementById("motarde_quotidienne")
const btnMotivation=document.getElementById("motivation")
const btnMoussonBlanche=document.getElementById("mousson_blanche")
const btnMoussonBleue=document.getElementById("mousson_bleue")
const btnNavigatriceQuotidienne=document.getElementById("navigatrice_quotidienne")
const btnNounoursRose=document.getElementById("nounours_rose")
const btnOursToutDoux=document.getElementById("ours_tout_doux")
const btnPassionEmeraude=document.getElementById("passion_emeraude")
const btnPassionRouge=document.getElementById("passion_rouge")
const btnPerleNoire=document.getElementById("perle_noire")
const btnPhotogenique=document.getElementById("photogenique")
const btnPiloteDException=document.getElementById("pilote_d-exception")
const btnPionniereDOrca=document.getElementById("pionniere_d-orca")
const btnPionniereDesTerresDesolees=document.getElementById("pionniere_des_terres_desolees")
const btnPivoineMoutan=document.getElementById("pivoine_moutan")
const btnPrestidigitatriceCybernetique=document.getElementById("prestidigitatrice_cybernetique")
const btnPrototypeDeCombinaisonDePlongeePlanetaire=document.getElementById("prototype_de_combinaison_de_plongee_planetaire")
const btnPrototypeDeCombinaisonDePlongeePlanetaireV2=document.getElementById("prototype_de_combinaison_de_plongee_planetaire_V2")
const btnResonnace=document.getElementById("resonnace")
const btnRobeDeGuerre=document.getElementById("robe_de_guerre")
const btnRobeDeMereNoel=document.getElementById("robe_de_mere_noel")
const btnRobeNoire=document.getElementById("robe_noire")
const btnRobeTricoteeConfortable=document.getElementById("robe_tricotee_confortable")
const btnRobeTricoteeQuotidienne=document.getElementById("robe_tricotee_quotidienne")
const btnRoseAngelique=document.getElementById("rose_angelique")
const btnRoseNoire=document.getElementById("rose_noire")
const btnSecondPeau=document.getElementById("second_peau")
const btnStyle_Punk=document.getElementById("style_punk")
const btnTechnicienneDOrca=document.getElementById("technicienne_d-orca")
const btnTelegenique=document.getElementById("telegenique")
const btnTenueDeMarinConfortable=document.getElementById("tenue_de_marin_confortable")
const btnTenueDeRaven=document.getElementById("tenue_de_raven")
const btnTenueOuverte=document.getElementById("tenue_ouverte")
const btnTenueCybernetique=document.getElementById("tenue_cybernetique")
const btnTenueDeForceTranquille=document.getElementById("tenue_de_force_tranquille")
const btnTenueDeMascotteConfortable=document.getElementById("tenue_de_mascotte_confortable")
const btnTenueDeSportElectrique=document.getElementById("tenue_de_sport_electrique")
const btnTenueDeSportJaune=document.getElementById("tenue_de_sport_jaune")
const btnTenueNeurolien=document.getElementById("tenue_neurolien")
const btnTenueSimpleFoursecond=document.getElementById("tenue_simple_foursecond")
const btnUniformeConceptuel=document.getElementById("uniforme_conceptuel")
const btnUniformeDeCeremonieNonOfficielYORHA=document.getElementById("uniforme_de_ceremonie_non_officiel_yorha")
const btnUniformeYORHA1=document.getElementById("uniforme_yorha_1")
const btnUniformeYORHANo2TypeB=document.getElementById("uniforme_yorha_no2_type_B")
const btnUniformeYORHAANo2=document.getElementById("uniforme_yorha_A_no2")
const btnVagueDeferlante=document.getElementById("vague_deferlante")
const btnVagueNoire=document.getElementById("vague_noire")

function nanoSuitContentF(a){
    a.style.display="flex";
    a.style.width="100%";
    a.style.height="100%";
    a.style.boxSizing= "border-box";
}
submenOutsideNanoSuit.addEventListener("click", function(){
    nanoSuitContent.style.display= "flex";
})
function AliceEnsoleillee(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Alice Ensoleillée</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>Découvrez la collection de maillots de bain ensoleillée de Tetrastar C&T : partez en vacances au Pays des merveilles !</p>`
    nanoImg.innerHTML=`<img class="nano-img" alt="" src="${nanoSuit[0]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
        }
function AventuriereDesTerresDésolée(){
            nanoSuitContentF(nanoSuitContent)
            nanoSuitTitle.innerHTML=`<h1>Aventurière des terres désolées</h1>`
            descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>Personne ne peut vous arrêter. Traversez les zones hostiles et franchissez les obstacles avec la tenue Aventurière. Bien entendu, n'allez pas chercher de poux dans la tête des Naytibas.</p>`
            nanoImg.innerHTML=`<img alt="" src="${nanoSuit[1]}">`
            whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
            whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique </p>`
            }

btnAliceEnsoleillee.addEventListener("click", AliceEnsoleillee)







/*btnBikiniDePlongeeVague.addEventListener("click", function(){
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
btnCombinaisonDePlongeePlanetaire6.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (7)</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>« Enfant né par une nuit étoilée. Une mission prestigieuse commence. Illumine la Terre tel un phare dans la nuit. Puisses-tu forger un chemin vers l'avenir. »</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[10]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnCombinaisonDePlongeePlanetaire_7.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (7)</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br>« Enfant né par une nuit étoilée. Une mission prestigieuse commence. Illumine la Terre tel un phare dans la nuit. Puisses-tu forger un chemin vers l'avenir. »</p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[11]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnCombinaisonDePlongeePlanetaire_7V2.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (7) V2</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[12]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnCombinaisonDePlongeePlanetaire_7V3.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison de plongée planétaire (7) V3</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[13]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnCombinaisonDesEtoiles.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison des étoiles</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[14]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnCombinaisonNeurolien.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1>Combinaison neurolien</h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[15]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Combattez tous les boss du menu "Duel de boss" en mode normal</p>`
    }
)
btnCombinaisonOuverte.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[16]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnCybermage.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[17]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnEuphorieDuPilote.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[18]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnFilleDeLAir.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[19]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnForceQuotidienne.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[20]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnFrissonsDeLaVitesse.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[21]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnHautCourtPunk.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[22]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
btnIllusionisteCybernetique.addEventListener("click", function(){
    nanoSuitContentF(nanoSuitContent)
    nanoSuitTitle.innerHTML=`<h1></h1>`
    descriptionP.innerHTML=`<p class="nano-suit-txt">Permet de modifier l'apparence d'EVE <br><br></p>`
    nanoImg.innerHTML=`<img alt="" src="${nanoSuit[23]}">`
    whereToFind.innerHTML=`<h3>Où la trouver ?</h3>`
    whereToFindP.innerHTML=`<p>Elle se trouve dans la boutique</p>`
    }
)
*/
