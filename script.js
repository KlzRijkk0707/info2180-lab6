// JavaScript source code
//620043175

//FUNCTION

function loadDef() {
    var httpRequest = new XMLHttpRequest(); 
    var url = "https://info2180-lab6-rijkaa.c9users.io/request.php?q=";
    var main = document.getElementById('main');
    var text = document.forms["dict"]["word"].value;
    var url2 =url+text;
    
    httpRequest.open('GET', url2);
    httpRequest.send();
    
    console.log(httpRequest);
    console.log(text);
    
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = httpRequest.responseText;
            main.innerHTML = result;
            //window.alert(result);
           // window.location.href= url ;
           
            
        }
    };

    
    

}

//END FUNCION


window.onload = function() {

    var btn = document.getElementById('btn');
    console.log(document.getElementById('btn'));
    btn.onclick = function () {
        //console.log('l;,;,');
        loadDef();
       // console.log('l439570ueoj,');
    };
}



/*
 httpRequest.onreadystatechange = function () {
        console.log(this.status);
        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("main").innerHTML = this.responseText;

         }


    };

 */
