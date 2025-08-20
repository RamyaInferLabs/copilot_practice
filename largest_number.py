def validate_numbers(numbers):
    """
    Validate the input list of numbers.
    
    Args:
        numbers (list): List of elements to validate
        
    Returns:
        list: Validated list of numbers
        
    Raises:
        TypeError: If input is not a list or contains non-numeric elements
        ValueError: If list is empty
    """
    if not isinstance(numbers, list):
        raise TypeError("Input must be a list")
    
    if not numbers:
        raise ValueError("List cannot be empty")
    
    # Validate each element is numeric
    for num in numbers:
        if not isinstance(num, (int, float)):
            raise TypeError(f"All elements must be numeric. Found: {type(num)}")
    
    return numbers

def largest_number(numbers):
    """
    Find the largest number in a list of numbers.
    
    Args:
        numbers (list): List of numbers to search through
        
    Returns:
        number: The largest number in the list
        
    Raises:
        TypeError: If input is not a list or contains non-numeric elements
        ValueError: If list is empty
    """
    try:
        # Validate input
        numbers = validate_numbers(numbers)
        
        # Find maximum number
        max_num = numbers[0]
        for num in numbers[1:]:
            if num > max_num:
                max_num = num
        return max_num
    
    except (TypeError, ValueError) as e:
        raise e
    except Exception as e:
        raise RuntimeError(f"An unexpected error occurred: {str(e)}")

def get_user_input():
    """
    Get numbers from user input.
    
    Returns:
        list: List of numbers entered by user
    """
    while True:
        try:
            input_str = input("Enter numbers separated by spaces (or 'exit' to quit): ").strip()
            
            if input_str.lower() == 'exit':
                return None
                
            if not input_str:
                print("Please enter some numbers")
                continue
                
            # Convert input string to list of numbers
            numbers = [float(x) for x in input_str.split()]
            
            # Convert to integers if possible
            numbers = [int(x) if x.is_integer() else x for x in numbers]
            
            return numbers
            
        except ValueError:
            print("Invalid input. Please enter valid numbers separated by spaces")

def main():
    """Main function to handle user input and display results."""
    print("Find the largest number in a list")
    print("Type 'exit' to quit the program")
    
    while True:
        try:
            numbers = get_user_input()
            
            if numbers is None:
                print("Exiting program...")
                break
                
            result = largest_number(numbers)
            print(f"\nNumbers: {numbers}")
            print(f"Largest number: {result}")
            print("-" * 50)
            
        except KeyboardInterrupt:
            print("\nProgram interrupted by user")
            break
        except Exception as e:
            print(f"Error: {str(e)}")
            print("-" * 50)

if __name__ == "__main__":
    main()
