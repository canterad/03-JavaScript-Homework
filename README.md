# 03-JavaScript-Homework
This Repository contains all of the files for Boot Camp Home work Assignment #3

Developer: Duane Cantera
Date: Oct. 2, 2021
Assignment: 03 JavaScript: Password Generator

*******************
CODE DESIGN ISSUES:
*******************

Issue: Found that I was alerting the user with a lot of error messages.
Solution: I decided to use a boolean variable and set its initial value to true.  Instead of writing out an error message when an error occurred I set the variable to false instead.  I structured my code with series of if - else conditions so the path would only continue if the variable was still true, if it was still true I kept on testing my error conditions.  After I was done testing all my error conditions I then tested the state of the variable so I only had to display one error condition if any of the error conditions occurred.

Issue: Testing if a numeric value was entered for the password size.
Solution: I decided to deal with this by looping through the string that contained the password size and tested each individual character to test if it is not a numeric character.  I did this by testing if it is < the character '0' or > the character '9'.  If any of the characters were not numeric characters then I set an error condition and exited the loop.  After exiting the loop if the error condition was not set then I knew I could safely convert the string to an integer by calling the parseInt function.

Issue: How to generate the password.
Solution:  I create an empty string called szPassword that would hold the generated password.  I had a password type string set as a empty string.  I created constant strings for the character types, upper case, lower case, numeric and special characters.  Based on the users response I then use the concat function to add the constant strings to the password type string.  I looped through a for loop using the Password Size as an index.  For each time through I called the Math.random function to generated a random float value from zero to the PasswordTypes string length, and then rounded it to its nearest whole number by calling the Math.floor function.  I used the whole number returned as the index into the Password Type string and added the character at that position to the szPassword string.  I returned the szPassword string as the generated password.

***************
LINKS:
***************

Link To Deployed Application: https://canterad.github.io/03-JavaScript-Homework/