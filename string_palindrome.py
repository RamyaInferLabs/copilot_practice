def validate_input(input_str):
    """Validate the input string."""
    if not isinstance(input_str, str):
        raise TypeError("Input must be a string")
    if len(input_str) > 1000:  # Reasonable limit for string length
        raise ValueError("Input string is too long (max 1000 characters)")
    return input_str

def reverse_string(input_str):
    """
    Reverse a string while maintaining all characters including spaces.
    
    Args:
        input_str (str): The string to reverse
        
    Returns:
        str: The reversed string
        
    Raises:
        TypeError: If input is not a string
        ValueError: If input string is too long
    """
    try:
        # Validate input
        input_str = validate_input(input_str)
        
        # Convert string to list of characters
        chars = list(input_str)
        
        # Initialize pointers for the start and end of the string
        left = 0
        right = len(chars) - 1
        
        # Reverse all characters including spaces
        while left < right:
            chars[left], chars[right] = chars[right], chars[left]
            left += 1
            right -= 1
        
        # Convert back to string
        return ''.join(chars)
    
    except (TypeError, ValueError) as e:
        raise e
    except Exception as e:
        raise RuntimeError(f"An unexpected error occurred: {str(e)}")

def main():
    """Main function to handle user input and display results."""
    try:
        # Get input from user with a prompt
        print("Type 'exit' to quit the program")
        while True:
            input_str = input("Enter a string to reverse (max 1000 chars): ").strip()
            
            if input_str.lower() == 'exit':
                print("Exiting program...")
                break
            
            if not input_str:
                print("Please enter a non-empty string")
                continue
                
            # Get the reversed string
            reversed_str = reverse_string(input_str)
            
            # Print the result
            print(f"Original string: {input_str}")
            print(f"Reversed string: {reversed_str}")
            print("-" * 50)
            
    except KeyboardInterrupt:
        print("\nProgram interrupted by user")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()
