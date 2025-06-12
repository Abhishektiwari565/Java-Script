// create a ATM using constructor.

class ATM { // create a class and name ATM.
    constructor(debit, balance) {
        this.debit = debit;
        this.balance = balance;
    }

    setpin(pin) {
        this.pin = pin;
        alert("pin set successfully !");
    }

    deposit(debit, pin, balance) {
        if (this.pin == pin) {
            this.balance = this.balance + balance;
            document.writeln("your balance after deposit: ", this.balance);
        } else {
            document.writeln("please enter valid pin !");
        }
    }
    withdraw(debit, pin, amount) {
        if (this.pin == pin){
            if (amount <this.balance) {
                this.balance = this.balance - amount;
                document.writeln("your current balance after withdraw :", this.balance);
                document.writeln("<br>");
                 document.writeln("your withdraw balance is :", amount);
            } else {
                document.writeln("Insufficient fund !");
            }

        } else {
            document.writeln("please enter valid pin !");
        }
    }

}
const atm = new ATM("debit", 1000);
atm.setpin(1234);
atm.deposit("debit", 1234, 5000);
document.writeln("<br>")
atm.withdraw("debit", 1234, 2000);
