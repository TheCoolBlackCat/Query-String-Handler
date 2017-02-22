var queryString = location.search.substring(1).split('&'); // 'substring' removes the '?' at the start and 'split' splits the string at the '&'
var query = {}; // Creates the object, blank at first

for (var i = 0; i < queryString.length; i++) { // Loops through the queryString array
  var temp = queryString[i].split('='); // Splits the string (found at index 'i') at the '='
  query[temp[0]] = temp[1]; // Adds the name:value pairs found for that variable in the string
}
