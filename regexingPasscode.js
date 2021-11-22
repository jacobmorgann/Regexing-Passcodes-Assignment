function check() {
    
    const passcode = document.getElementById("passcode").value;
    let pattern = /[0-9]{3}[a-z]{4}[0-9]/;
    if (pattern.test(passcode)) {
        document.getElementById("response").innerHTML = "OK";
    }
    else {
        document.getElementById("response").innerHTML = "Passcode not in the correct format";
    }
}
