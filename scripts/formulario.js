const form = document.getElementById('formulario-contacto');

form.addEventListener('submit', (e)=>{
    e.preventDefault();  


    const nombre = document.getElementById('nombre').value.trim();
    const mail = document.getElementById('mail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    

    if(nombre == ""){
        alert("Ingresa tu nombre")
        return
    }

    
    if(!mail.includes("@")){
        alert("Ingresa un correo electrónico valido")
        return
    }    
    if(isNaN(telefono)){
        alert("El teléfono debe ser un numero")
        return
    }    
    
    if(mensaje == ""){
        alert("Dejanos acá tu mensaje")
        return
    }





    // Mostrar resultados en la consola 
  console.log("Nombre", nombre);
  console.log("Email:", mail);
  console.log("Teléfono:", telefono);
  console.log("Mensaje:", mensaje);


    const contacto = {
        name: nombre,
        email: mail,
        telephone: telefono,
        mensaje: mensaje,
    }
    console.log("contacto antes de guartdar en local storage", contacto)
    localStorage.setItem("contacto", JSON.stringify(contacto))
});

function getContacto(){
    const contactoLocalStorage = JSON.parse(localStorage.getItem("contacto"))
    console.log("contacto recuperado del localstorage", contactoLocalStorage)
}