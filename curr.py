"""
Currency Converter System
A beginner-friendly console application for converting between currencies.
Demonstrates Python fundamentals: loops, functions, conditions, dictionaries, lists, error handling.
"""

import datetime

# Global data structures
currency_rates = {
    'USD': 1.0,      # US Dollar - Base currency
    'EUR': 0.8694,   # Euro
    'GBP': 0.7513,   # British Pound
    'JPY': 158.85,   # Japanese Yen
    'CAD': 1.3657,   # Canadian Dollar
    'AUD': 1.4136,   # Australian Dollar
    'CHF': 0.7869,   # Swiss Franc
    'CNY': 6.8962,   # Chinese Yuan
    'INR': 92.164,   # Indian Rupee
    'MXN': 17.765,   # Mexican Peso
    'ETB': 156.75    # Ethiopian Birr
}

currency_names = {
    'USD': 'US Dollar',
    'EUR': 'Euro',
    'GBP': 'British Pound',
    'JPY': 'Japanese Yen',
    'CAD': 'Canadian Dollar',
    'AUD': 'Australian Dollar',
    'CHF': 'Swiss Franc',
    'CNY': 'Chinese Yuan',
    'INR': 'Indian Rupee',
    'MXN': 'Mexican Peso',
    'ETB': 'Ethiopian Birr'
}

conversion_history = []

def show_title():
    """Display the program title and welcome message."""
    print("\n" + "="*50)
    print("    CURRENCY CONVERTER SYSTEM")
    print("="*50)
    print("Welcome to the Currency Converter!")
    print("Convert between different currencies easily.")
    print("="*50 + "\n")

def show_menu():
    """Display the main menu options."""
    print("MAIN MENU")
    print("-" * 20)
    print("1. Convert Currency")
    print("2. View All Currencies")
    print("3. Add New Currency")
    print("4. Update Currency Rate")
    print("5. View Conversion History")
    print("6. Save Conversion History to File")
    print("7. Convert to All Currencies")
    print("8. Clear Conversion History")
    print("9. Exit")
    print("-" * 20)

def show_currencies():
    """Display all available currencies with their names and exchange rates."""
    print("\nAVAILABLE CURRENCIES")
    print("-" * 60)
    print(f"{'Code':<6} {'Name':<20} {'Rate (to USD)':<15}")
    print("-" * 60)
    
    for code, rate in currency_rates.items():
        name = currency_names.get(code, "Unknown")
        print(f"{code:<6} {name:<20} {rate:<15.4f}")
    
    print("-" * 60)
    print(f"Total currencies available: {len(currency_rates)}\n")

def get_valid_currency(prompt, allow_new=False):
    """Get a valid currency code from user input."""
    while True:
        currency = input(prompt).upper().strip()
        
        if not currency:
            print("Error: Currency code cannot be empty.")
            continue
        
        if len(currency) != 3:
            print("Error: Currency code must be exactly 3 letters (e.g., USD EUR).")
            continue
        
        if not currency.isalpha():
            print("Error: Currency code must contain only letters.")
            continue
        
        if currency in currency_rates or allow_new:
            return currency
        else:
            print(f"Error: Currency '{currency}' not found.")
            print("Available currencies:", ", ".join(currency_rates.keys()))

def get_valid_amount(prompt):
    """Get a valid positive number from user input."""
    while True:
        try:
            amount = float(input(prompt))
            if amount <= 0:
                print("Error: Amount must be greater than 0.")
                continue
            return amount
        except ValueError:
            print("Error: Please enter a valid number.")

def get_valid_rate(prompt):
    """Get a valid positive exchange rate from user input."""
    while True:
        try:
            rate = float(input(prompt))
            if rate <= 0:
                print("Error: Exchange rate must be greater than 0.")
                continue
            return rate
        except ValueError:
            print("Error: Please enter a valid number.")

def convert_currency():
    """Handle currency conversion process."""
    print("\nCURRENCY CONVERSION")
    print("-" * 30)
    
    # Show available currencies first
    print("Available currencies:", ", ".join(currency_rates.keys()))
    
    # Get user input
    from_currency = get_valid_currency("Enter FROM currency (e.g., USD): ")
    to_currency = get_valid_currency("Enter TO currency (e.g., EUR): ")
    
    if from_currency == to_currency:
        print("Error: Cannot convert the same currency to itself.")
        return
    
    amount = get_valid_amount("Enter amount to convert: ")
    
    # Perform conversion
    from_rate = currency_rates[from_currency]
    to_rate = currency_rates[to_currency]
    
    # Convert to USD first, then to target currency
    amount_in_usd = amount / from_rate
    result = amount_in_usd * to_rate
    
    # Display result
    print("\n" + "="*50)
    print("CONVERSION RESULT")
    print("="*50)
    print(f"{amount:.2f} {from_currency} = {result:.2f} {to_currency}")
    print(f"Exchange Rate: 1 {from_currency} = {to_rate/from_rate:.4f} {to_currency}")
    print("="*50)
    
    # Add to history
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    conversion_history.append({
        'from_currency': from_currency,
        'to_currency': to_currency,
        'amount': amount,
        'result': result,
        'timestamp': timestamp
    })
    
    print("Conversion completed and saved to history!\n")

def add_currency():
    """Add a new currency to the system."""
    print("\nADD NEW CURRENCY")
    print("-" * 20)
    
    # Get new currency code
    while True:
        new_code = input("Enter new 3-letter currency code: ").upper().strip()
        
        if not new_code:
            print("Error: Currency code cannot be empty.")
            continue
        
        if len(new_code) != 3:
            print("Error: Currency code must be exactly 3 letters.")
            continue
        
        if not new_code.isalpha():
            print("Error: Currency code must contain only letters.")
            continue
        
        if new_code in currency_rates:
            print(f"Error: Currency '{new_code}' already exists.")
            continue
        
        break
    
    # Get currency name
    while True:
        name = input(f"Enter full name for {new_code}: ").strip()
        if name:
            break
        print("Error: Currency name cannot be empty.")
    
    # Get exchange rate
    rate = get_valid_rate(f"Enter exchange rate (1 {new_code} = ? USD): ")
    
    # Add to system
    currency_rates[new_code] = rate
    currency_names[new_code] = name
    
    print(f"\nSuccess! Currency '{new_code} ({name})' added with rate {rate:.4f}")
    print(f"Total currencies: {len(currency_rates)}\n")

def update_currency():
    """Update an existing currency's exchange rate."""
    print("\nUPDATE CURRENCY RATE")
    print("-" * 25)
    
    if not currency_rates:
        print("No currencies available to update.")
        return
    
    # Show available currencies
    print("Available currencies:", ", ".join(currency_rates.keys()))
    
    # Get currency to update
    currency = get_valid_currency("Enter currency code to update: ")
    
    # Show current rate
    current_rate = currency_rates[currency]
    print(f"Current rate for {currency}: {current_rate:.4f}")
    
    # Get new rate
    new_rate = get_valid_rate(f"Enter new exchange rate (1 {currency} = ? USD): ")
    
    # Update the rate
    currency_rates[currency] = new_rate
    
    print(f"\nSuccess! Exchange rate for {currency} updated:")
    print(f"Old rate: {current_rate:.4f}")
    print(f"New rate: {new_rate:.4f}\n")

def show_history():
    """Display the conversion history."""
    print("\nCONVERSION HISTORY")
    print("-" * 80)
    
    if not conversion_history:
        print("No conversion history available.")
        print("-" * 80)
        return
    
    print(f"{'#':<3} {'Date & Time':<20} {'From':<8} {'To':<8} {'Amount':<12} {'Result':<12}")
    print("-" * 80)
    
    for i, record in enumerate(conversion_history, 1):
        timestamp = record['timestamp']
        from_curr = record['from_currency']
        to_curr = record['to_currency']
        amount = record['amount']
        result = record['result']
        
        print(f"{i:<3} {timestamp:<20} {from_curr:<8} {to_curr:<8} {amount:<12.2f} {result:<12.2f}")
    
    print("-" * 80)
    print(f"Total conversions: {len(conversion_history)}\n")

def convert_to_all_currencies():
    """Convert amount from one currency to all other available currencies."""
    print("\nMULTI-CURRENCY CONVERSION")
    print("-" * 35)
    
    # Show available currencies first
    print("Available currencies:", ", ".join(currency_rates.keys()))
    
    # Get user input
    from_currency = get_valid_currency("Enter source currency (e.g., USD): ")
    amount = get_valid_amount("Enter amount to convert: ")
    
    # Get the exchange rate for the source currency
    from_rate = currency_rates[from_currency]
    
    # Convert amount to USD first (base currency)
    amount_in_usd = amount / from_rate
    
    # Display results
    print(f"\n{amount} {from_currency} converts to:")
    print("-" * 30)
    
    # Loop through all currencies
    for currency_code, target_rate in currency_rates.items():
        # Skip converting to the same currency
        if currency_code == from_currency:
            continue
        
        # Convert from USD to target currency
        result = amount_in_usd * target_rate
        
        # Display the conversion result with proper formatting
        print(f"{currency_code:<6} : {result:>10.2f}")
    
    print("-" * 30)
    print("Conversion completed!\n")

def save_history_to_file():
    """Save conversion history to a text file."""
    print("\nSAVE CONVERSION HISTORY TO FILE")
    print("-" * 35)
    
    # Check if there is any history to save
    if not conversion_history:
        print("No conversion history to save.")
        return
    
    try:
        # Open file for writing with UTF-8 encoding (this creates the file if it doesn't exist)
        with open('conversion_history.txt', 'w', encoding='utf-8') as file:
            # Write each conversion record to the file
            for record in conversion_history:
                # Write the record in a readable format
                file.write(f"Date: {record['timestamp']}\n")
                file.write(f"From: {record['from_currency']} -> To: {record['to_currency']}\n")
                file.write(f"Amount: {record['amount']}\n")
                file.write(f"Result: {record['result']}\n")
                file.write("---\n")  # Separator between records
        
        print(f"Success! {len(conversion_history)} conversion(s) saved to 'conversion_history.txt'")
        
    except Exception as e:
        # Handle any errors that might occur during file writing
        print(f"Error saving file: {e}")

def clear_history():
    """Clear all conversion history after user confirmation."""
    print("\nCLEAR CONVERSION HISTORY")
    print("-" * 30)
    
    if not conversion_history:
        print("No conversion history to clear.")
        return
    
    print(f"You have {len(conversion_history)} conversion record(s) in history.")
    
    # Get user confirmation
    while True:
        confirmation = input("Are you sure you want to delete all conversion history? (yes/no): ").lower().strip()
        
        if confirmation == 'yes':
            # Clear the list
            conversion_history.clear()
            print("\nSuccess! All conversion history has been deleted.")
            print(f"Total conversions in history: {len(conversion_history)}\n")
            break
        elif confirmation == 'no':
            print("\nOperation cancelled. No records were deleted.\n")
            break
        else:
            print("Error: Please enter 'yes' or 'no'.")

def get_menu_choice():
    """Get a valid menu choice from user input."""
    while True:
        try:
            choice = int(input("Enter your choice (1-9): "))
            if 1 <= choice <= 9:
                return choice
            else:
                print("Error: Please enter a number between 1 and 9.")
        except ValueError:
            print("Error: Please enter a valid number.")

def main():
    """Main program loop that coordinates all functions."""
    # Show welcome message
    show_title()
    
    # Main program loop
    while True:
        # Display menu
        show_menu()
        
        # Get user choice
        choice = get_menu_choice()
        
        # Execute based on choice
        if choice == 1:
            convert_currency()
        elif choice == 2:
            show_currencies()
        elif choice == 3:
            add_currency()
        elif choice == 4:
            update_currency()
        elif choice == 5:
            show_history()
        elif choice == 6:
            save_history_to_file()
        elif choice == 7:
            convert_to_all_currencies()
        elif choice == 8:
            clear_history()
        elif choice == 9:
            # Exit program
            print("\n" + "="*50)
            print("Thank you for using Currency Converter System!")
            print("Goodbye!")
            print("="*50 + "\n")
            break
        
        # Pause before showing menu again
        input("Press Enter to continue...")

# Run the program
if __name__ == "__main__":
    main()
