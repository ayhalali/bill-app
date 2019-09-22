
function calculateRate(){
    const totalBill = parseFloat(document.getElementById('total').value)
    const rate = parseFloat(document.getElementById('rate').value)

    const tip = totalBill * (rate / 100)
    const tax = totalBill * (5.5 / 100)
    const grandTotal = totalBill + tip + tax

    document.getElementById('tip').innerHTML = `$${tip.toFixed(2)}`
    document.getElementById('tax').innerHTML = `$${tax.toFixed(2)}`
    document.getElementById('grandTotal').innerHTML = `$${grandTotal.toFixed(2)}`
}

document.getElementById('grandTotal').addEventListener('click', calculate)



// let tip;
// function updateTip() {
//     let total = parseInt(document.querySelector('#total').value);
//     tip = document.querySelector('#rate').value;
//     document.getElementById("tip").innerHTML = tip;
// }

// let tax;
// function updateTax() {
//     let total = parseInt(document.querySelector('#total').value);
//     tax = document.querySelector('#rate').value;
//     tax = total * 0.055;
//     document.getElementById("tax").innerHTML = tax;
// }


// function calculateRate() {
//     let total = parseInt(document.querySelector('#total').value);
//     document.getElementById("grandTotal").innerText =  (total + tip);
//     event.preventDefault();
// }