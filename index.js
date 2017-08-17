var csv = require("csvtojson");

// convert the csv file to a giant json array and once its done reading it in call the main function
csv().fromFile('pending_entries.csv').on("end_parsed", main)

function main (pendingEntriesArr, flaggedLineNumbers) {
  var linesToFlag = bruteForce(pendingEntriesArr)
  console.log(linesToFlag, linesToFlag.length);
}

function bruteForce (pendingEntriesArr) {
  var linesToFlag = []

  for(var i = 0; i < pendingEntriesArr.length; i++) {
    console.log(i + ' out of ' + pendingEntriesArr.length);
    for(var j = 0; j < pendingEntriesArr.length; j++) {
      if(levenshteinDistance(pendingEntriesArr[i].email, pendingEntriesArr[j].email) == 1) {
        console.log('FOUND 2 SIMILAR EMAILS', pendingEntriesArr[i].email, pendingEntriesArr[j].email)
        linesToFlag.push(i)
        break;
      }
    }
  }
  return linesToFlag
}

function levenshteinDistance (a, b){
  if(a.length == 0) return b.length;
  if(b.length == 0) return a.length;

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

// 12:15 start
