// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
//
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7

// str.charCodeAt(index)

function leetspeak(leet){
  special = ['A', 'E', 'G', 'I', 'O', 'S', 'T']
  translate = ["4", "3", "6", "1", "0", "5", "7"]
  message = Array.from(leet)

  for (var i = 0; i < message.length; i++){
      if (message[i] === 'A') {
        message[i] = translate[0];
      }
      else if (message[i] === 'E') {
        message[i] = translate[1];
      }
      else if (message[i] === 'G') {
        message[i] = translate[2];
      }
      else if (message[i] === 'I') {
        message[i] = translate[3];
      }
      else if (message[i] === 'O') {
        message[i] = translate[4];
      }
      else if (message[i] === 'S') {
        message[i] = translate[5];
      }
      else if (message[i] === 'T') {
        message[i] = translate[6];
      }
    }
    leeted = message.join('');
    console.log(leeted.toLowerCase());
  }

leetspeak('LEET');
