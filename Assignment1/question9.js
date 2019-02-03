'use strict';

 function length(string){
     string += '\n';
     let len = 0;
     let i = 0;
     while(string.slice(i,i+1) !== '\n'){
         len++;
         i++;
     }
     alert("Input string: " + string + "\nOutput: " + len);
 }


 let string = prompt('Enter the String: ');
 length(string);
