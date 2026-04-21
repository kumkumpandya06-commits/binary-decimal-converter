function binaryToDecimal() {
    let binary = document.getElementById("binary").value;

    // validation
    if (!/^[01]+$/.test(binary)) {
        document.getElementById("result").innerText = "Invalid Binary Number!";
        return;
    }

    let decimal = parseInt(binary, 2);
    document.getElementById("result").innerText = "Decimal: " + decimal;
}

function decimalToBinary() {
    let decimal = document.getElementById("decimal").value;

    if (decimal === "" || isNaN(decimal)) {
        document.getElementById("result").innerText = "Invalid Decimal Number!";
        return;
    }

    let binary = Number(decimal).toString(2);
    document.getElementById("result").innerText = "Binary: " + binary;
}