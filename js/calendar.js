const today = new Date().toISOString().split('T')[0];
document.getElementById('myDate').setAttribute('min', today);
document.getElementById('myDate').setAttribute('value', today);

const form = document.getElementById('form');
const amountInput = document.getElementById('amount');
const periodSelect = document.getElementById('period');
const resultOutput = document.getElementById('result');

form.addEventListener('change', () => {
  const amount = parseInt(amountInput.value);
  const period = parseInt(periodSelect.value);
  
  if (isNaN(amount) || isNaN(period)) {
    resultOutput.textContent = '...';
    return;
  }
  
  const rate = 0.7;
  const total = amount * rate * period;
  resultOutput.textContent = total.toFixed(0);
});
