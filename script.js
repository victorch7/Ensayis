let foto = document.createElement("img");
foto.src = "chelsea.png";

function consultar(){
    let datosJson;
    fetch('resumen.json')
    .then(response => response.json())
    .then((salida)=>{datosJson = salida;

        document.getElementById("nombre");
        nombre.textContent = 'Nombre: ' + salida.nombre;

        document.getElementById("estadio");
        estadio.textContent = 'Estadio: ' + salida.estadio;

        document.getElementById("direccion");
        direccion.textContent = 'Dirección: ' + salida.direccion;

        document.getElementById("ciudad");
        ciudad.textContent = 'Ciudad: ' + salida.ciudad;
        
        document.getElementById("uniformeLocal");
        uniformeLocal.textContent =  'Precio Uniforme local: ' + salida.uniforme[0].precio;
        
        document.getElementById("uniformeVisita");
        uniformeVisita.textContent =  'Precio Uniforme visita: ' + salida.uniforme[1].precio;
        
        document.getElementById("anioFundacion");
        anioFundacion.textContent = 'Año de fundación: ' + salida.anioFundacion;

        let imagen = document.getElementById("foto");
        imagen.appendChild(foto);


    })

}