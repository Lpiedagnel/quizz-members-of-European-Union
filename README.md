# Quizz Members of European Union

## Goals of this application

In a previous life, I was actually a history and geography teacher in France. And my students could have a test about the 27 countries members of the European Union. That’s how I have the idea of this application while a learning Javascript and starting to look for projects to make.

After starting the game, the user have only three minutes to typing the name of every single one member of the Union. If the spelling is correct, the country is added automaticaly in a container below.

After three minutes, the application congratulates the user and render the missing countries and display a link to a Wikipedia page for revision purpose.

The text of this application is French. I made this choice in case a French teacher (so I previous colleague, so to speak) wants to use this application for his class. But you can change the language in HTML if you will (or maybe I can develop an English version, that could be fun).


## Development

This is a basic application using Javascript. Each time the user typing a letter, the application verifying if the value matches with one the value of the correction array (which include all 27 countries). If the script found a correct value, the score and render is updated, and the typing field goes back to blank.

I don’t want this application to care about uppercase or lowercase. So each time the user typing something, the letter is converts to uppercase anyway. It’s also convenient for the countries with an accent in their name (like “République-Tchèque”) because typing “É” in uppercase could be particularly difficult for most users.

In my opinion, the time count could be the most complex thing is this script. Like my mental calculation app (which also include the timer), we are converting the time variable to minutes and second and add a 0 to render something like 01:08 instead 1:8 for example.

This application is not the most complex thing in the world (nor the most original) but it’s a good exercise to begin using Javascript on reals projects.