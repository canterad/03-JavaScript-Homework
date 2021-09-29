// ************************************************************************************************************************************
// Assignment Code.  Get the first element in the document with id value of "generate".
// ************************************************************************************************************************************
var generateBtn = document.querySelector("#generate");

// **************************************************************************************************************************************
// Use the generate button that was retrieved above to add an event listener for the generate button.  The addEventListener is listening 
// for a click event for the "generate" button and it then calls the writePassword function.
// **************************************************************************************************************************************
generateBtn.addEventListener("click", writePassword);


// **************************************************************************************************************************************
// Function: writePassword: Write password to the #password input.  The function "generatePassword" is called.  The return string
// value is stored in the variable password.  A call is made to querySelector to get the first element in the document with the id value
// of "password".  The password elements value property is set to the password value. 
// **************************************************************************************************************************************
function writePassword() 
{
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
   
  passwordText.value = password;
}

// ***************************************************************************************************************************************
// Function: generatePassword
//
// Set the initial value of the variable isPasswordSizeValid to true;
//
// Prompt the user asking the user to enter the size of the password.  If the user selected the cancel button the return value is null.
//
// Test if the return value is null, if it is then set the variable isPasswordSizeValid to false.
//
// Else - Perform the following operations:
//
//    Test the length of the string returned. If it is zero then set the variable isPasswordSizeValid to false.
//
//        Else - Perform the following operations:
//
//            Loop through the return string. 
//                if the character is not numeric.  Perform the following operations.
//                    Set the variable isPasswordSizeValid to false.
//                    Set the index to the size of the string to exit the for loop.
//
//            If the variable isPasswordSizeValid is true then perform the following operations:
//                Convert the string to an integer value.
//                If the integer value is < 8 or > 128 then set the variable isPasswordSizeValid to false.
//
//  If the Password Size value is not valid then do the following operations:
//      Alert the user that the Password Size value entered is not valid.
//      Return the Operation Failed message.
//
//  Prompt the user for the character types to include in the password.
//
//  If no character types were selected then perform the following operations:
//      Alert the user that they did not select a character type for the password.
//      Return the Operation Failed message.
//
//  if the isLowerCase variable is true then add the lower case string to the szPasswordTypes string.
//  if the isUpperCase variable is true then add the upper case string to the szPasswordTypes string.
//  if the isNumeric variable is true then add the numeric string to the szPasswordTypes string.
//  if the isSpecialCharacter variable is true then add the special characters string to the szPasswordTypes string.
//
//  Loop through a for loop using the Password Size as an index and perform the following operations:  
//      Generate a random float from zero to the PasswordTypes string length. 
//      Round the float value to its nearest whole number with the Math.floor function.  
//      Use the whole number returned as the index into the Password Type string. 
//      Add the character at that position in the PasswordType string to the string szPassword. 
//
//  Return the szPassword string which contains the generated password.
//
// ***************************************************************************************************************************************
function generatePassword()
{
  // Create constant strings for the different character types and failed message.
  const szlowerCase = "abcdefghijklmnopqrstuvwxyz";
  const szUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const szNumeric = "1234567890";
  const szSpecialCharacters = " !\"#$%&\'()*+,-./:;<=>?@[\\]^`{|}~";
  const szOperationFailed = "Operation Failed - Please Try Again";
  
  // Create and set default values for variables.
  let szPassword = "";
  let isLowerCase = false;
  let isUpperCase = false;
  let isNumeric = false;
  let isSpecialCharacters = false;
  let nPasswordSize = 0;
  let szPasswordSize = "";
  let nIndex = 0;
  let isPasswordSizeValid = true;
  let szPasswordTypes = "";
  let nRandomArrayPosition = 0;

  // Prompt user to enter the size of the password.
  szPasswordSize = prompt("Please enter a numeric value for the password size.\r\nIt must be between 8 and 128.");

  // If the Cancel button was selected the return value is null so set the isPasswordSizeValid to false.
  if (szPasswordSize == null) 
  {
    isPasswordSizeValid = false;
  }
  else
  {
    // If the length of the string is zero then set the isPasswordSizeValid to false.
    if (szPasswordSize.length === 0)
    {
      isPasswordSizeValid = false;    
    }
    else
    {
      // Loop through the string characters and test if numeric, if not set the isPasswordSize valid to false
      // and set the nIndex value equal to the szPasswordSize length to exit the for loop.      
      for (nIndex = 0;  nIndex < szPasswordSize.length; nIndex++)
      {
        if (szPasswordSize[nIndex] < '0' || szPasswordSize[nIndex] > '9')
        {
          isPasswordSizeValid = false;
          nIndex = szPasswordSize.length;
        }
      }

      // If the Password Size string contains all numeric values then convert the string to an integer value.
      if (isPasswordSizeValid)
      {
        // Convert the string to an integer value.
        nPasswordSize = parseInt(szPasswordSize);

        // If the integer value is less than 8 or greater than 128 it is out of range so
        // set the isPasswordSizeValid value to false.
        if (nPasswordSize < 8 || nPasswordSize > 128)
        {
          isPasswordSizeValid = false;
        }
      }
    }
  }

  // If the Password Size value is not valid then alert the user and return passing the Operation Failed message.
  if (!isPasswordSizeValid)
  {
    window.alert("You did not enter a valid value.\r\nThe \"Generate Password\" operation could not be performed.\r\nPlease try again.");
    return (szOperationFailed);  
  }
 
  // Prompt the user for the character types:
  isLowerCase = window.confirm("Should the Password include lower case characters?\r\n\r\nOK = \"Yes\"\r\nCancel = \"No\"");
  isUpperCase = window.confirm("Should the Password include upper case characters?\r\n\r\nOK = \"Yes\"\r\nCancel = \"No\"");
  isNumeric = window.confirm("Should the Password include numeric characters?\r\n\r\nOK = \"Yes\"\r\nCancel = \"No\"");
  isSpecialCharacters = window.confirm("Should the Password include special characters?\r\n\r\nOK = \"Yes\"\r\nCancel = \"No\"");

  // Test if all of these are set to false, if so tell the user that they did not select a character type and return
  // passing the Operation Failed message.
  if ((!isLowerCase) && (!isUpperCase) && (!isNumeric) && (!isSpecialCharacters))
  {
    window.alert("You did not select any character types for the password.\r\nThe \"Generate Password\" operation could not be performed.\r\nPlease try again.");
    return (szOperationFailed);      
  }

  // If the isLowerCase variable is true then add the lower case string to the PasswordTypes string.
  if (isLowerCase)
  {
    szPasswordTypes = szPasswordTypes.concat(szlowerCase);
  }

  // If the isUpperCase variable is true then add the upper case string to the PasswordTypes string.
  if (isUpperCase)
  {
    szPasswordTypes = szPasswordTypes.concat(szUpperCase);
  }

  // If the isNumeric variable is true then add the numeric string to the PasswordTypes string.
  if (isNumeric)
  {
    szPasswordTypes = szPasswordTypes.concat(szNumeric);
  }

  // If the isSpecialCharacters variable is true then add the special characters string to the PasswordTypes string.
  if (isSpecialCharacters)
  {
    szPasswordTypes = szPasswordTypes.concat(szSpecialCharacters);
  }
  
  // Loop through a for loop using the Password Size as an index.  For each time through call the function Math.random to generate 
  // a random float number with a range from zero to the PasswordTypes string length.  Call the function Math.floor and round the
  // float value to its nearest whole number.  Use the whole number returned as the index in the Password Type string and 
  // add the character at that position to the string szPassword.
  for (nIndex = 0; nIndex < nPasswordSize; nIndex++)
  {
    nRandomArrayPosition = Math.floor(Math.random() * szPasswordTypes.length);
    szPassword += szPasswordTypes[nRandomArrayPosition];
  }
  
  // Return the generated password.
  return(szPassword);
}


