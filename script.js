// JavaScript source code
//620043175

//FUNCTION

function loadDef() {
    var httpRequest = new XMLHttpRequest(); 
    var url = "https://info2180-lab6-rijkaa.c9users.io/request.php?q=rick";
    var main = document.getElementById('main');
    console.log(httpRequest);
    httpRequest.open('GET', url);
    httpRequest.send();
    console.log(httpRequest);
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = httpRequest.responseText;
            //main.innerHTML = result;
            window.alert(result);
            window.location.href= url ;
            console.log(result);
            
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