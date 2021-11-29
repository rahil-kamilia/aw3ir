

     function validateEmail(mail) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(mail).toLowerCase());
  }

  
  
  function validation()
  {
      var nom = document.getElementById("nom").value;   
      var prenom = document.getElementById("prenom").value; 
      var date = document.getElementById("date").value;
      var adresse = document.getElementById("adresse").value;            
      var email = document.getElementById("email").value;  
      var myModal = new bootstrap.Modal(document.getElementById('myModal'));
      let dateNow = Date.now()
  
      document.getElementById("error").style.display = 'none' ;                                
      document.getElementById("resultat").style.display = 'none';                                 
  
       
      //nom
      if (nom=="")                                  
      { 
          
          myModal.show();
          document.getElementById("error").innerHTML="veuillez saisir votre nom"; 
          document.getElementById("error").style.display = 'block';                                
          myForm["name"].focus(); // Focus
         alert("Nom obligatoire."); 
         
          return false; 
          
      }else
       if(nom.length<5)
      {
          document.getElementById("error").innerHTML="les champs nom doivent avoir 5 caractères mininum";
          document.getElementById("error").style.display = 'block';
          return false; 
      }
        
      //prenom
      if ( prenom== "")                                  
      { 
          myModal.show();
          document.getElementById("error").innerHTML="veuillez saisir votre prénom";    
          document.getElementById("error").style.display = 'block' ;                          
          myForm["prenom"].focus(); // Focus
          alert("Prénom obligatoire.");            
          
         
          return false; 
      } else
          if(prenom.length<5)
      {
          document.getElementById("error").innerHTML="les champs prenom doivent avoir 5 caractères mininum";
          document.getElementById("error").style.display = 'block';
          return false; 
      }
      //date de  naissance
      if ( date== "")                                  
      { 
          myModal.show();
          document.getElementById("error").innerHTML="veuillez saisir votre date de naissance";  
          document.getElementById("error").style.display = 'block' ;                              
          myForm["date"].focus(); // Focus
          alert("date de naissance obligatoire."); 
                   
          return false;

      }

      let date = new Date(date); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
      let dateTimestamp = date.getTime();
      let nowTimestamp = Date.now()
      if(dateNaissanceTimestamp>nowTimestamp)
      {
          document.getElementById("error").innerHTML="Erreur le code ";  
          document.getElementById("error").style.display = 'block' ;
          return false; 
      }
  
      //adresse
      if ( adresse== "")                                  
      { 
          myModal.show();
          document.getElementById("error").innerHTML="veuillez saisir votre adresse";   
          document.getElementById("error").style.display = 'block';                           
          myForm["adresse"].focus(); // Focus
          alert("adresse obligatoire.");
      
         
          return false; 
      } else
          if(adresse.length<5)
      {
          document.getElementById("error").innerHTML="les champs addresse doivent avoir 5 caractères mininum";
          document.getElementById("error").style.display = 'block';
          return false; 
      }
  
  
  
      //adresse mail
      if ( email== "")                                  
      { 
          myModal.show();
          document.getElementById("error").innerHTML="veuillez saisir votre email";  
          document.getElementById("error").style.display = 'block' ;                             
          myForm["dmail"].focus(); // Focus
          alert("Mettez votre adresse mail."); 
          
         
          return false; 
      } else
          if(email.length<5)
      {
          document.getElementById("error").innerHTML="les champs mail doivent avoir 5 caractères mininum";
          document.getElementById("error").style.display = 'block';                                 
  
          return false; 
      }else if(!validateEmail(email))
      {

          document.getElementById("error").innerHTML="Synthaxe incorrecte";
          document.getElementById("error").style.display = 'block';                                 
  
          return false; 
      }
     
   
    document.getElementById("resultat").innerHTML="Bienvenue Vos Informations sont Validées"+" "+non+" "+prenom ; 
    document.getElementById("resultat").style.display = 'block' ;    
    
    
   
   return true;
   
  }

