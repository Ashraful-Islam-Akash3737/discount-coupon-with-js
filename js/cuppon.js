function inputText(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.innerText;
    // console.log(inputValueString);
    const inputValueIs = parseFloat(inputValueString);
    return inputValueIs;
}
function inputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    // const inputValueIs = parseFloat(inputValueString);
    return inputValueString;
}

function innerText(inputId, newValue) {
    const pay = document.getElementById(inputId);
    pay.innerText = newValue;
}

document.getElementById('apply-btn').addEventListener('click', function () {
    const totalPrice = inputText('total-price');

    const totalOnly = inputValue('total');
    const totalDiscountAmount = (totalPrice * 30) / 100;

    const totalDiscountAmountValue = totalPrice - totalDiscountAmount;
    const totalPay = inputText('total-pay');
    const newTotalPlay = totalPay + totalDiscountAmountValue;

    console.log("btn active");
    if (totalOnly !== "DISC30") {
        alert('cuppon is not match');
        return;

    }

    else {
        const return1 = innerText('total-pay', newTotalPlay);
        const btn = document.getElementById('apply-btn');
        btn.setAttribute('disabled', true);
        return return1;

        
    }
    

});