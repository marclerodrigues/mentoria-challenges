const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'date.csv');

const rows = [];

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    // { "date": "2021-01-01" }
    rows.push(row);
  })
  .on('end', () => {
    const dates = rows.map((row) => row["date"]);

    getLastDate(dates);
  });

const getLastDate = (dates) => {
  let maxDate;

  dates.forEach((date, index) => {
    const convertedDate = new Date(date);

    if (index === 0) {
      maxDate = convertedDate;
    } else {
      if (convertedDate.getTime() > maxDate.getTime()) {
        maxDate = convertedDate;
      }
    }
  });

  console.log(maxDate);
};
