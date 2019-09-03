const merge = require("easy-pdf-merge");

const source_files = [`${__dirname}/file1.pdf`, `${__dirname}/file2.pdf`];

const dest_file_path = `${__dirname}/fileNew3.pdf`;

merge(source_files, dest_file_path, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("Success");
});
