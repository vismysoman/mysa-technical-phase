// This function compares version strings (ex.major.minor.patch)
//Returns:
// -1 if a < b
// 1 if a > b
// 0 if a = b

/* Specify the type of the parameters when use typescript
 Better to use meaningful names for paramaters A, B
Also its good if we can specify the scope the function like privte, public, protected.*/
function compareVersionAToVersionBAndReturnGreater(A, B) {
  // We should use let instead of const, as the value of these variables are expected to change
  var i, d, x;
  var regExNoDecimals = /(\.0+)+$/;
  // Case sensitivty issue in paramaters, either we should use A,B or a,b in both places
  var segmentsA = A.replace(regExNoDecimals, "").split(".");
  var segmentsB = B.replace(regExNoDecimals, "").split(".");
  for (i = 0; i < Math.min(segmentsA.length, segmentsB.length); i++) {
    d = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
    if (d) {
      return d;
    }
  }
  return 0;
}
console.log(compareVersionAToVersionBAndReturnGreater("1.11.0", "1.10.0")); // return 1
console.log(compareVersionAToVersionBAndReturnGreater("1.9.0", "1.10.0")); // return -1
console.log(compareVersionAToVersionBAndReturnGreater("1.10.0", "1.10.0")); // return 0
/*
  Review Comments added in line no 7, 8, 9, 11 and 14
  */
