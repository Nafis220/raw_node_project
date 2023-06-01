/*
 * Title: Data Library
 * Description: Data Library functions for CRUD
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/20/2020
 *
 */

// dependencies
const fs = require("fs");
const path = require("path");

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

// write data to file
lib.create = (dir, file, data, callback) => {
  // open file for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      // convert data to stirng
      const stringData = JSON.stringify(data);

      // write data to file and then close it
      fs.writeFile(fileDescriptor, stringData, (err2) => {
        if (!err2) {
          fs.close(fileDescriptor, (err3) => {
            if (!err3) {
              callback(false);
            } else {
              callback("Error closing the new file!");
            }
          });
        } else {
          callback("Error writing to new file!");
        }
      });
    } else {
      callback("There was an error, file may already exists!");
    }
  });
};

// read data from file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf8", (err, data) => {
    callback(err, data);
  });
};
//update data
lib.update = (dir, file, data, callback) => {
  //open file for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, "r+", (error, descriptor) => {
    if (!error && descriptor) {
      //convert the data to string
      const stringData = JSON.stringify(data);
      //truncate the file
      fs.ftruncate(descriptor, (error1) => {
        if (!error1) {
          // write to the file and close it
          fs.writeFile(descriptor, stringData, (error2) => {
            if (!error2) {
              //closing the file
              fs.close(descriptor, (error3) => {
                if (!error3) {
                  callback(false);
                } else {
                  callback("error closing the new file");
                }
              });
            } else {
              callback("Error writing the file");
            }
          });
        } else {
          callback("Error Truncating the file");
        }
      });
    } else {
      console.log("Error updating file may not exist");
    }
  });
};
// delete existing file
lib.delete = (dir, file, callback) => {
  // unlink file
  fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback(`Error deleting file`);
    }
  });
};
module.exports = lib;
