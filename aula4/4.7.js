// 7 – Peça para o usuário digitar uma data. Exiba separadamente
// o dia, o mês e o ano.

// Data inserida pelo usuário
// Pode ser utilizado também o readline-sync
const date = "2021-01-02";


const parsedDate = new Date(date);

console.log(`
Dia: ${parsedDate.getDate() + 1}
Mês: ${parsedDate.getMonth() + 1}
Ano: ${parsedDate.getFullYear()}
`);
