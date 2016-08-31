validirajIme = function () {

    var ime = document.getElementById("ime");

    if (ime.value.length < 2 && (ime.value[0]<'A' || ime.value[0]>'Z' )) {
        ime.style.backgroundColor = "red";
        return false;
	}
    

    else {
        ime.style.backgroundColor = "white";
        return true;
    }
}
validirajPrezime = function () {

    var prezime = document.getElementById("prezime");

    if (prezime.value.length < 2 && (prezime.value[0]<'A' || prezime.value[0]>'Z' )) {
        prezime.style.backgroundColor = "red";
        return false;
	}
    

    else {
        prezime.style.backgroundColor = "white";
        return true;
    }
}

function pitanjeValidacija()
{
var pitanje= document.getElementById("pitanje");
var regex=/^[a-zA-Z\s]*$/;
if(pitanje.length==0 || regex.test(pitanje.value))
	pitanje.style.backgroundColor="red";
else
	pitanje.style.backgroundColor="white";
}

function emailValidacija()
{
	var regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var email = document.getElementById("email");

	if(email.value.length == 0  || !email.value.match(regex))
		email.style.background = "red";
	else
		email.style.background = "white";
}
function telefonValidacija()
{
	var bih= document.getElementById("1").checked;
	var hr= document.getElementById("2").checked;
	var srb= document.getElementById("3").checked;
	var cg= document.getElementById("4").checked;
	var telefon= document.getElementById("tel");
	
	if(bih)
	{
		var tmp= new RegExp("3876[1-3]-[0-9]{3}-[0-9]{3}$");
		var reg= tmp.test(telefon.value);
		if(reg) telefon.style.backgroundColor="white";
		else telefon.style.backgroundColor="red";
	}
	else if(hr)
	{
		var tmp= new RegExp("3856[1-3]-[0-9]{3}-[0-9]{3}$");
		var reg= tmp.test(telefon.value);
		if(reg) telefon.style.backgroundColor="white";
		else telefon.style.backgroundColor="red";
		
	}
	else if(srb)
	{
		var tmp= new RegExp("3816[1-3]-[0-9]{3}-[0-9]{3}$");
		var reg= tmp.test(telefon.value);
		if(reg) telefon.style.backgroundColor="white";
		else telefon.style.backgroundColor="red";
	}
	else if(cg)
	{
		var tmp= new RegExp("3826[1-3]-[0-9]{3}-[0-9]{3}$");
		var reg= tmp.test(telefon.value);
		if(reg) telefon.style.backgroundColor="white";
		else telefon.style.backgroundColor="red";
	}
	else telefon.style.backgroundColor="red";
}
