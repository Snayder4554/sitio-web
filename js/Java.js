var Nombre="Felipino Antonios";
var Direcciones="Guachupita, Santo Domingo";

function validarCampos()
{
	
	if(document.frmContacto.txtNombre.value.length==0)
	{
		alert("Indique el nombre")
		document.frmContacto.txtNombre.focus();
		return false
	}
	if(document.frmContacto.txtApellido.value.length==0)
	{
		alert("Indique el Apellido")
		document.frmContacto.txtApellido.focus();
		return false
	}
	if(document.frmContacto.txtCorreo.value.length==0)
	{
		alert("Indique el correo")
		document.frmContacto.txtCorreo.focus();
		return false
	}
	if(document.frmContacto.txtTelefono.value.length==0)
	{
		alert("Indique el Telefono")
		document.frmContacto.txtTelefono.focus();
		return false
	}
	if(document.frmContacto.txtSexo.selectedIndex==0)
	{
		alert("Indique el sexo")
		document.frmContacto.txtSexo.focus();
		return false
	}
}
