document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('bill');
    const tipInput = document.getElementById('tip');
    const tipAmountDisplay = document.getElementById('tip-amount');
    const totalAmountDisplay = document.getElementById('total-amount');

    function calculateTip() {
        const bill = parseFloat(billInput.value);
        const tipPercent = parseFloat(tipInput.value);

        if (isNaN(bill) || bill <= 0) {
            tipAmountDisplay.textContent = '$0.00';
            totalAmountDisplay.textContent = '$0.00';
            return;
        }

        const tipAmount = bill * (tipPercent / 100);
        const totalAmount = bill + tipAmount;

        tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
    }

    billInput.addEventListener('input', calculateTip);
    tipInput.addEventListener('input', calculateTip);
});
