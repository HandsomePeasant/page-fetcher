const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File written!");
      }
    });
});