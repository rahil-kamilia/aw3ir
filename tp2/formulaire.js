
function validation(){

    var nom=document.getElementById("nom").value;
    var prénom=document.getElementById("prénom").value;
    var date=document.getElementById("date").value;
    var adresse=document.getElementById("adresse").value;
    var mail=document.getElementById("mail").value;

    document.getElementById("error").innerHTML ="";
    document.getElementById("error").style.display="none";
    document.getElementById("resultat").style.display="none";

   if (nom=="" ){ 
       document.getElementById("error").innerHTML +="La saisie du nom est obligatoire <br>";}
       if (prénom=="" ){ 
        document.getElementById("error").innerHTML +="La saisie du prénom est obligatoire <br>";}

        if (date=="" ){ 
            document.getElementById("error").innerHTML +="La saisie du la date de naissance est obligatoire <br>";}

            if (adresse=="" ){ 
                document.getElementById("error").innerHTML +="La saisie d'adresse est obligatoire <br>";}
                if (mail=="" ){ 
                    document.getElementById("error").innerHTML +="La saisie de mail est obligatoire <br>";}

                if (mail=="" ){ 
                    document.getElementById("error").innerHTML +="La saisie de mail est obligatoire <br>";}
                    
                    if(nom.length <5){ document.getElementById("error").innerHTML +="Le nom doit contenir au moins 5 caractéres <br>";}
                    if(prénom.length <5){ document.getElementById("error").innerHTML +="Le prénom doit contenir au moins 5 caractéres  <br>";}
                    if(date.length <5){ document.getElementById("error").innerHTML +="La date de naissance doit contenir au moins 5 caractéres <br>";}
                    if(adresse.length <5){ document.getElementById("error").innerHTML +="L'adresse doit contenir au moins 5 caractéres <br>";}
                    if(mail.length <5){ document.getElementById("error").innerHTML +="Le mail doit contenir au moins 5 caractéres <br>";}
                     if (document.getElementById("error").innerHTML == "") { 
                         document.getElementById("resultat").style.display= 'block';
                         document.getElementById("resultat").innerHTML = 
                     "Bienvenue " + document.querySelector("#nom").value; 
                    }
                    else{
                         document.getElementById("error").style.display = 'block';
                     }


}