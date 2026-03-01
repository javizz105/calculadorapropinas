document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('bill');
    const tipSlider = document.getElementById('tip-slider');
    const tipInput = document.getElementById('tip');
    const peopleInput = document.getElementById('people');

    const tipPerPersonDisplay = document.getElementById('tip-per-person');
    const totalPerPersonDisplay = document.getElementById('total-per-person');
    const totalBillDisplay = document.getElementById('total-bill');

    function calculate() {
        const bill = parseFloat(billInput.value) || 0;
        const tipPercent = parseFloat(tipInput.value) || 0;
        const people = parseInt(peopleInput.value) || 1;

        if (bill < 0) return;

        const totalTip = bill * (tipPercent / 100);
        const totalWithTip = bill + totalTip;
        
        const tipPerPerson = totalTip / people;
        const totalPerPerson = totalWithTip / people;

        // Actualizar UI
        tipPerPersonDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
        totalBillDisplay.textContent = `$${totalWithTip.toFixed(2)}`;
    }

    // Sincronizar Slider e Input de Propina
    tipSlider.addEventListener('input', (e) => {
        tipInput.value = e.target.value;
        calculate();
    });

    tipInput.addEventListener('input', (e) => {
        let value = e.target.value;
        if (value > 100) value = 100;
        if (value < 0) value = 0;
        tipSlider.value = value;
        calculate();
    });

    // Eventos para otros campos
    billInput.addEventListener('input', calculate);
    peopleInput.addEventListener('input', () => {
        if (peopleInput.value < 1) peopleInput.value = 1;
        calculate();
    });

    // Inicializar
    calculate();
});
