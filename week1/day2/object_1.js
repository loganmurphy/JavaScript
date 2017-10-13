// Given the following dictionary, representing a mapping from names to phone numbers:
//
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}
// Write code to do the following:
//
// Print Elizabeth's phone number.
console.log(phonebookDict.Elizabeth);

// Add a entry to the dictionary: Kareem's number is 938-489-1234.
phonebookDict.Kareem = '938-489-1234'

// Delete Alice's phone entry.
delete(phonebookDict.Alice);

// Change Bob's phone number to '968-345-2345'.
phonebookDict.Bob = '968-345-2345';

// Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry. Use a for...in loop to print all the phone entries.
for (var personName in phonebookDict){
  console.log(personName);
}
