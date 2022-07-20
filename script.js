//exercitiu 11

function solve(){
    var a= parseInt(document.getElementById("a").value);
    var b= parseInt(document.getElementById("b").value);
    var c= parseInt(document.getElementById("c").value);
    var div = document.getElementById("rez");
   

    if(a==0 && b==0 && c==0){
        div.innerHTML= "“Solutie: Multimea Reala”";
        return;
    }

    if(Math.pow(b, 2) - (4 *a *c)< 0 ){
        div.innerHTML = " “Ecuatia nu are solutii reale”";
    }else{
        div.innerHTML = "solutia X1 = " + (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a) +   " si solutia X2 = " + (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    }
}

//exercitiu 12

function crescator(){

    var nr = parseInt(document.getElementById("nr").value);
    var div =document.getElementById("rez1");
 
    var text = "";

    for ( var i = 1; i <= nr; i++) {
        text += i  + " "  ;
       
      }
    
        div.innerHTML = text;
         i++;
           
}

//exercitiu 13

function descrescator(){

    var nr = parseInt(document.getElementById("no1").value);
    var div = document.getElementById("rez2");

    var text = "";
    var reversetext = "";
    

    for ( var i = 0; nr > i; i++) {
        text += i  + " "  ;
       }
      
        for (var i = text.length - 1; i >= 0; i--) {
           reversetext += text[i] ;
        }

        div.innerHTML = reversetext;
        i--;
}

//exercitiu 14

function valori(){

    var no2 = parseInt(document.getElementById("no2").value);
    var no3 = parseInt(document.getElementById("no3").value);
    var div = document.getElementById("rez3");

    var text = "";

    if(no2>no3){
        div.innerHTML = "introduceti 2 valori crescatoare";
        return;
    }

    if(no2 == no3 || no3 == no2+1 ){
        div.innerHTML = "“Nu exista nici o valoare de afisat”";
        return;
 }

    for ( var i = no2+1 ; i < no3; i++) {
        text += i  + " "  ;
        
    }
    
        div.innerHTML = text;
        i++;





}
