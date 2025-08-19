# Create a rock-paper-scissors game based on user choice. User enters 'quit' to stop the game and can type 'r' for rock, 'p' for paper, or 's' for scissors.

import random

choices = {'r': 'Rock', 'p': 'Paper', 's': 'Scissors'}  # Define possible choices.

while True:
	user_input = input("Enter 'r' for Rock, 'p' for Paper, 's' for Scissors, or 'quit' to exit: ").lower()  # Get user input.
	if user_input == 'quit':
		print("Game exited. Goodbye!")  # Inform the user that the game is exiting.
		break
	if user_input not in choices:
		print("Invalid input. Please try again.")  # Notify user of invalid input.
		continue

	computer_choice = random.choice(list(choices.keys()))  # Randomly select computer's choice.
	print(f"You chose {choices[user_input]}. Computer chose {choices[computer_choice]}.")  # Show choices.

	if user_input == computer_choice:
		print("It's a tie!")  # Handle tie case.
	elif (user_input == 'r' and computer_choice == 's') or \
		 (user_input == 'p' and computer_choice == 'r') or \
		 (user_input == 's' and computer_choice == 'p'):
		print("You win!")  # Handle user win.
	else:
		print("You lose!")  # Handle user loss.
