// Drivers license String

var dateOfBirth = '04-04-1990';
var age = 32;
var isOrganDonor = 'false';
var streetAddress = '1234 asdfg street';
var city = 'Denver';
var state = 'Colorado';
var zip = 80027;
var idNumber = 382734758658;
var height = 7;


// String Concatenation 
var myId = 'My name is Dingus ' + dateOfBirth +
' I am ' + age + ' my organ donor status is ' + isOrganDonor + ' I live at ' + streetAddress
+ ' in the city of ' + city + ' in the state of ' + state + ' in the area of '
+ zip + ' my license id number is ' + idNumber + ' my height is ' + height;

console.log(myId);
console.log(typeof myId);
console.log(myId.length)