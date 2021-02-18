// 11. Crie uma função que retorne o ultimo dia de um mês.

const getLastDay = (month, year = 2021) => {
  const date = new Date(year, month, 0);
  console.log(date.getDate());
};

getLastDay(1);
getLastDay(1, 2019);
