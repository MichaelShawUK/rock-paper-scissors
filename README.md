# rock-paper-scissors
Psuedocode

1 Create function that randomly returns Computer's choice

2 Prompt user for their choice

3 Compare computer's choice vs user's choice and determine winner
	Create function that takes user's and computer's choice as input
	if computer's choice = user's choice return tie
	check user's input vs computer's input
	if user = rock
		cpu = scissors ? return "You Win! Rock beats scissors : return "You Lose! Paper beats Rock"

4 Create function that allows n number of rounds to be played
	Create function that takes number of rounds as input
	create variables to track player and cpu score
	for loop for n number of rounds
		call playRound function
		inspect return value for winner
		increment winners score variable
	compare user's and cpu's score
	output winner as string
	
