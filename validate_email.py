import re

def is_valid_email(email):
    # Improved regex for email validation (RFC 5322 compliant for most cases)
    pattern = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
    return re.match(pattern, email) is not None

def main():
    emails = input("Enter email addresses separated by commas: ").split(",")
    emails = [e.strip() for e in emails]
    for email in emails:
        if is_valid_email(email):
            print(f"{email}: Valid")
        else:
            print(f"{email}: Invalid")

if __name__ == "__main__":
    main()
