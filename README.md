# Unique Password Generator

## Description

We were provided with starter code for HTML, CSS and a few lines of Javascript.  Below is the acceptance criteria:

GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Installation

The user selects which of the four pools of charachters (lower and upper case, numbers or special charachters) and how long the the password will be.  The user must select at least one type of charachter otherwise they will get and error message and be prompeted to try again.  This is accomplished through a series of prompts the pop up after hitting the generate button.  If I were to do this again, I think something like checkboxes or something that limits the user's input type would make for a better user experience

## Usage

I started by defining the possible pools of charachters and combined them based on the user selection.  After taking those parameters (type of charachter and length) I had to ramdomize each charachter in the password and assemble it together.

Once the password is written it is populated into the HTML and shown to the user.

In doing this I used two concepts from outside of class:

Spread: Which I used to take all the charachter pools and chop them into individual charachters:

NaN: I used this to check if the password length input by the user was an number.  Once verified it's a number it also must be between 8-128charachters.

## Credits

I really have enjoyed digging into Javascript and all of it's possibilities.  Katy and Ben have done a good job of explaining the concepts.

Special shout out to my brother Kai Peterson who is a Full-Stack Developer (and UofM Bootcamp grad from 2017) for being my sounding board on this project.

# All code and assets are available for review at https://github.com/tylerpeterson8791/password-generator/tree/main
![Password Generator Pic](https://github.com/tylerpeterson8791/password-generator/assets/75902133/86c74ddb-2824-426b-8688-facac36c67e9)
