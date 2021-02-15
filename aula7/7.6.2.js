const csv = require('csv-parser');
const fs = require('fs'); // File System
const path = require('path');
const filePath = path.join(__dirname, 'workout_export.csv');

const rows = [];

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    rows.push(row);
  })
  .on('end', () => {
    console.log('Finished reading file.');
    const datesExercises = rows
      .filter((row) => row["name"] === "Marcle")
      .map((row) => row["date"]);
    const answer = madePhysicalActivity(datesExercises);

    console.log(`Fez atividade física nos últimos 7 dias? ${answer}`);
  });


function madePhysicalActivity(datesExercises) {
  const aDayMilisec = 86400000;
  const sevenDaysAgoMilisec = new Date().getTime() - (aDayMilisec*7);

  for(let date of datesExercises) {
    if (new Date(date).getTime() > sevenDaysAgoMilisec) {
      return 'SIM';
    }
  }

  return 'NãO';
}
