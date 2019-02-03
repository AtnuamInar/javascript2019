
'use strict';

 function checkLeapYear(year) {
     if((year%4 == 0 && year%100 != 0) || year%400 == 0){
         return 1;
     }
     else{
         return 0;
     }
 }

 if (checkLeapYear(1800) == 1){
    console.log("The year is leap year");
 }
 else{
    console.log("The year is not leap year");
 }
