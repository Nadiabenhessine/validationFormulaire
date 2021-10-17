//Pour interagir avec les champs de ce formulaire, il nous faut déjà accéder au formulaire en question: 

var form_inscription = document.getElementById("inscription");

/*Ensuite, accédons aux différents champs du formulaire grâce 
 *à un tableau les contenant depuis l objet form_inscription: elements[].
*/

//Récupération des champs du formulaire par leurs name:
var champ_nom = form_inscription.elements["nom"];
var champ_prenom = form_inscription.elements["prenom"];
var champ_telephone = form_inscription.elements["telephone"];
var champ_email = form_inscription.elements["mail"];

/*Il faut maintenant lancer notre vérification lors de l'envoi du formulaire. 
 *Pour cela, nous utilisons l'événement submit de l'objet formulaire DOM. 
 */

function valider(event) {
  
    
    // Test de la conformité des champs
    // le formulaire est-il OK?
    var form_OK = true;

    // si le champ ne contient pas 10 caractères OU  si il n'est pas composé que de nombres
    if (champ_telephone.value.length != 8 || isNaN(champ_telephone.value)) {
        form_OK = false;
        champ_telephone.classList.add("erreur");
        document.getElementById("msgErreurTel").innerHTML ="le numéro doit etre composé de 8 chiffres !";
    }else{
        champ_telephone.classList.remove("erreur");
    }
    //Expression régulière simplifiée de recherche d'un e-mail

    var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
    if (regex.exec(champ_email.value) == null) {
        form_OK = false;
        champ_email.classList.add("erreur");
        document.getElementById("msgErreurEmail").innerHTML ="Adresse mail invalide !";
    }else{
        champ_email.classList.remove("erreur");
    }
    

    //On peut ensuite indiquer à l'internaute quels champs ne sont pas correctement saisis:

    //Vérification le champs du nom:
    if(champ_nom.value == ""){
        form_OK = false;
        champ_nom.classList.add("erreur");
        document.getElementById("msgErreurNom").innerHTML ="vous devez saisir votre nom";

    }else{
        champ_nom.classList.remove("erreur");
    }
        //Vérification le champs du prenom:
    if(champ_prenom.value == ""){
        form_OK = false;
        champ_prenom.classList.add("erreur");
        document.getElementById("msgErreurPrenom").innerHTML ="vous devez saisir votre prenom";

    }else{
        champ_prenom.classList.remove("erreur");
    }


    // Au final, on empeche l'envoi du formulaire si form_OK est faux
    if (!form_OK) {
        event.preventDefault();
    }
}

//ajoute l’événement 
form_inscription.addEventListener('submit', valider);


