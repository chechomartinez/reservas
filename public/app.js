document.querySelector('#submit').addEventListener('click',function(){


    let nombre = document.querySelector('#nombre_cliente').value;
    let correo = document.querySelector('#correo').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let jornada = document.querySelector('#jornada').value;
    let fecha = document.querySelector('#fecha').value;
    

    let url = "https://api.whatsapp.com/send?phone=5493517890035&text=*_myc_equipamentos*_%0A*Reserva:*%0A" + nombre +"%0A*Correo:*%0A" + correo + "%0A*Telefono:*%0A" +
    telefono + "%0A*Dirreción:*%0A" + direccion +"%0A*Tipo de jornada:*%0A" + jornada +"%0A*Fecha:*%0A" + fecha;

    window.open(url);
    

    
});