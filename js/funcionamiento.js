function encriptarMensaje() {
    if(document.getElementById("inputTexto").value.match(/^[a-z ]*$/)){

        const encriptar = document.getElementById('inputTexto').value;
        const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        document.getElementById("texto2").value = encriptado
        document.getElementById("copiar").style.display = "block";
        document.getElementById("texto").style.display = "none";
        document.getElementById("ilustracion").style.display = "none";
        document.getElementById("detective").style.display = "block";

    }else{
        alert("Solo se permiten letras minusculas, sin caracteres especiales, y sin acentos.")
    }
    
}

function desencriptarMensaje(){
    const desencriptar= document.getElementById ("inputTexto").value;
    const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("texto2").value = desencriptado
    document.getElementById("ilustracion").style.display = "none";
    document.getElementById("detective").style.display = "block";
}

function copiar(){
    var copyText = document.getElementById("texto2");
    copyText.select();
    document.execCommand("copy");
}

