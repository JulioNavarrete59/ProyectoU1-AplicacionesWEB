
$(document).ready(function () {
    $("#formulario").validate({
        rules: {
            nombre: {
                required: true,
            },
            apellido: {
                required: true,
            },
            telefono: {
                number: true,
                minlength: 10
            },
            correo: {
                required: true,
                email: true
            },
        },
        messages: {
            nombre: {
                required:"Debe ingresar el nombre si desea enviar su información",
                number: "No se debe ingresar valores numéricos",
            },
            apellido: {
                required:"Debe ingresar el apellido si desea enviar su información",
                number: "No se debe ingresar valores numéricos",
            },
            telefono:{
                number: "Debe ingresar valores numéricos",
                minlength: "No se debe ingrese mas de 10 dígitos"
            },
            correo: {
                required:"Debe ingresar su correo electronico si desea que lo contactemos",
                email: "Debe ingresar correctamente el formato para el correo, ejemplo 'abc@gmail.com'"
            },
        }
    });
});
