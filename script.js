// JavaScript source code


//FUNCTION

function request() {
    var httpRequest = new XMLHttpRequest(); 
    var url = "https://info2180-lab6-rijkaa.c9users.io/request.php?q=rick";

    httpRequest.onreadystatechange = doSomething;
    httpRequest.open('GET', url);
    httpRequest.send();

}

//END FUNCION

window.onload = function{
    $("#btn").onclick = function{
        window.alert(request()) ;
    };
};