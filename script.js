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
            
        }
    };

    
    

}

//END FUNCION


window.onload = function() {

    var btn = document.getElementById('btn');
    var btn2= document.getElementById('btn2');
    
    console.log(document.getElementById('btn'));
    console.log(document.getElementById('btn2'));
    
    btn.onclick = function () {
        loadDef();
    };
    
    btn2.onclick = function () {
        loadAll();
    };
};

function loadAll(){
    console.log(this);
    
    var httpRequest = new XMLHttpRequest();
    var all = '&all =true';
    var url = "https://info2180-lab6-rijkaa.c9users.io/request.php?q="+all;
    var main = document.getElementById('holder2');
    
    httpRequest.open('GET', url);
    httpRequest.send();
    
    console.log(url);
    
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            main.append('<ol id="tbl"></ol>');
            var tbl = document.getElementById('tbl');
            
            var result = httpRequest.responseText;
            
            for(var i=0; i < result.length; i++){
                tbl.append('<tr><td>'+result[i]+'</td></tr>');
                
            }
        }
    };
}