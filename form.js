function check() {
	if (document.form1.name.value == "") {
		alert("No name");
		document.form1.name.focus();
		return false;
	}
	if (document.form1.email.value == "") {
		alert("No email");
		document.form1.email.focus();
		return false;
	}
	if ((document.form1.email.value.indexOf('@',0) == -1)||(document.form1.email.value.indexOf('.',0) == -1)) {
		alert("email wrong");
		document.form1.email.focus();
		return false;
	}
	if (document.form1.pass.value.length < 6) {
		alert("Password too short");
		document.form1.pass.focus();
		return false;
	}
	if (document.form1.pass.value!=document.form1.confirm.value) {
		alert("Password wrong");
		document.form1.pass.focus();
		return false;	
	}
	return true;
}		