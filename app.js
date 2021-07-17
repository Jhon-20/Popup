function modal_01() {
   Swal.fire({
    title:'50% de descuento',
    html:'<span class="parrafo">en todos los productos</span>',
    background:'linear-gradient(#6B11b4,#0F4FAF)',
    input:'text',
    inputPlaceholder:'Ingresa tu correo',
    confirmButtonText:'OBTENGA MI 50% DE DESCUENTO',
    showCancelButton:true,
    cancelButtonText:'No gracias',
    cancelButtonColor:'#FF9A15',
    showCloseButton:true,
    footer:'<span>Gracias por su visita</span>',
    customClass:{
      title:'titulo',
      input:'input',
      confirmButton:'boton_confirmacion',
      footer:	'mi_fotter'
    },
   })
}

function modal_02() {
  Swal.fire({
    html:'Informate mucho <a href="#">más aqui</a>',
    confirmButtonText:'¡Aceptar!',
    toast:true,
    icon:'success',
    padding:'1rem',
    position:'top-right',
    showCloseButton:true,
    timer:'3000',
    timerProgressBar:true, 
    customClass:{
      actions:'content'
    }
  })
 
}
function modal_03() {
Swal.fire({
  title:'Iniciar Sessión',
  padding:'2rem',
  showCloseButton:true,
  showConfirmButton:false,
  html:'<div class="modal-body">'+
  '<div class="buttons_modal">' +
    '<button class="btn_facebook">Ingresa con Facebook</button>'+
    '<button class="btn_google">Ingresa con Google</button>'+
    '<button class="btn_email" id="btn_email">Ingresa con correo electrónico</button>'+
  '</div>'+
  '<form class="form_login" id="form_login" style="display: none;">'+
    '<div class="container_form">'+
      '<span class="text-center">O ingresa tu correo y tu contraseña <br></span>'+
      '<div class="container_inputs_login">'+
        '<div class="mb-3">'+
          '<input type="text" placeholder="Ingrese e-mail" class="form-control text-left" id="recipient-name">'+
        '</div>'+
        '<div class="mb-3">'+
          '<input type="password" placeholder="Ingrese contraseña" class="form-control" id="message-text">'+
        '</div>'+
        '<button type="submit" class="btn_email_ingreso">Ingresa a tu cuenta</button>'+
      '</div>'+
    '</div>'+
  '</form>'+
  '<div class="link_form_registro">'+
    '<p>¿Aún no tienes cuenta? <b class="link_registrate" id="link_modal_registro" data-bs-toggle="modal" data-bs-target="#MuestraModalRegistro">Regístrate</b></p>'+
  '</div>'+
'</div>',	
})
}



