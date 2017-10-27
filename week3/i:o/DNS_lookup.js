// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:
//
// $ node dns_lookup.
// Domain name: yahoo.com
// IP Address: 98.139.183.24
// Trigger an error condition by providing an invalid domain. See that the error gets displayed.
//
// Hint: Use require('dns') and dns.lookup.

// var fs = require('fs');
var readline = require('readline');
var dns = require('dns');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What domain name do you want to look up? ", function(domain) {
  rl.close();
  dns.lookup(domain, function (error, ip) {
    if (error) {
      console.error(error.message);
      return;
    }
    console.log("Here's the IP for your domain name:", ip);
  });
});
