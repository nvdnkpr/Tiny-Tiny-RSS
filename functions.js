var hotkeys_enabled = true;

function disableHotkeys() {
	hotkeys_enabled = false;
}

function enableHotkeys() {
	hotkeys_enabled = true;
}

function xmlhttp_ready(obj) {
	return obj.readyState == 4 || obj.readyState == 0 || !obj.readyState;
}


function notify_callback() {
	var container = document.getElementById('notify');
	if (xmlhttp.readyState == 4) {
		container.innerHTML=xmlhttp.responseText;
	}
}

function rpc_notify_callback() {
	var container = document.getElementById('notify');
	if (xmlhttp_rpc.readyState == 4) {
		container.innerHTML=xmlhttp_rpc.responseText;
	}
}

function param_escape(arg) {
	if (typeof encodeURIComponent != 'undefined')
		return encodeURIComponent(arg);	
	else
		return escape(arg);
}

function param_unescape(arg) {
	if (typeof decodeURIComponent != 'undefined')
		return decodeURIComponent(arg);	
	else
		return unescape(arg);
}

function delay(gap) {
	var then,now; 
	then=new Date().getTime();
	now=then;
	while((now-then)<gap) {
		now=new Date().getTime();
	}
}

function notify(msg) {

	var n = document.getElementById("notify");

	n.innerHTML = msg;

	if (msg.length == 0) {
		n.style.display = "none";
	} else {
		n.style.display = "block";
	}

}

function printLockingError() {
	notify("Please wait until operation finishes");
}

var seq = "";

function hotkey_handler(e) {

	var keycode;

	if (!hotkeys_enabled) return;

	if (window.event) {
		keycode = window.event.keyCode;
	} else if (e) {
		keycode = e.which;
	}

	if (keycode == 13 || keycode == 27) {
		seq = "";
	} else {
		seq = seq + "" + keycode;
	}

	var piggie = document.getElementById("piggie");

	if (seq.match("807371717369")) {
		localPiggieFunction(true);
	} else {
		localPiggieFunction(false);
	}

	if (typeof localHotkeyHandler != 'undefined') {
		localHotkeyHandler(keycode);
	}

}



