const readlineSync = require('readline-sync');

// Formato: YYYY-MM-DD

const checkDate = () => {
  const input = readlineSync.question('Digite uma data (YYYY-MM-DD): ');
  const lastDay = 0;

  const [ year, month, day ] = input.split("-").map((d) => parseInt(d));

  const lastDayOfMonth = (new Date(year, month, lastDay)).getDate();

  if (day > lastDayOfMonth) {
    return false;
  }

  const date = new Date(input);

  if (date.toString() === 'Invalid Date') {
    return false;
  }

  return true;
};

console.log(checkDate())
