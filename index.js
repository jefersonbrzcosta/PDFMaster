{
  /* Import libs */
}
const merge = require("easy-pdf-merge");
const fs = require("fs");
const pdf = require("pdf-parse");

{
  /* Create variable */
}
const source_files = [`${__dirname}/file1.pdf`, `${__dirname}/file2.pdf`];
const dest_file_path = `${__dirname}/fileNew3.pdf`;

let dataBuffer = fs.readFileSync(source_files[0]);
let dataBuffer1 = fs.readFileSync(source_files[1]);

{
  /* read pages from 1st file */
}
pdf(dataBuffer).then(function(data) {
  console.log(source_files[0] + " Pages: " + data.numpages);
});

{
  /* read pages from 2nd file */
}
pdf(dataBuffer1).then(function(data1) {
  console.log(source_files[1] + " Pages: " + data1.numpages);
});

merge(source_files, dest_file_path, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("Sucesso");
});
