# `readonly` vs `private` Properties in TypeScript

## `readonly`

- **Purpose:** Ensures a property can only be assigned once, either during declaration or in the constructor, and remains constant thereafter.

- **Example:**

```typescript
class Person {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let person = new Person("Alice");
console.log(person.name); // Output: Alice
person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
```

## `private`

- **Purpose:** Restricts access to a property to within the class it's defined in, preventing external access and modification.

- **Example:**

```typescript
class BankAccount {
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

let account = new BankAccount("123456789", 1000);
console.log(account.accountNumber); // Error: Property 'accountNumber' is private and only accessible within class 'BankAccount'
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
```

### Summary

- **readonly:** Ensures a property's value is set once and cannot be changed.

- **private:** Limits access to a property to within the defining class, enhancing encapsulation by hiding implementation details.
