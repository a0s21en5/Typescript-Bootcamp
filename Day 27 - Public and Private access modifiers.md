# Access Modifiers in TypeScript

Access modifiers (public and private) in TypeScript control the visibility of class members (properties and methods):

- **Public:** Default modifier. Allows access from anywhere, inside or outside the class.

- **Private:** Restricts access to only within the class. Prevents access from outside, including subclasses.

```typescript
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}

let account = new BankAccount(1000);
account.deposit(500); // Allowed, modifies private property
console.log(account.getBalance()); // Allowed, accesses private method
```
