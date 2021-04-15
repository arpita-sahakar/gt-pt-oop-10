function MiniBank(bal) {
  this.statement = [bal];
  this.balance = bal;
  this.setBalance = (value) => {
    this.balance = value;
  };
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.updateStatement = (x) => {
    this.statement.push(x);
  };
  this.getStatement = () => {
    return this.statement;
  };
  this.printStatement = () => {
    this.statement.forEach((ele) => {
      console.log(ele);
    });
  };
  this.deposit = (value) => {
    this.updateStatement(value);
    this.setBalance(this.balance + value);
  };
  this.withdraw = (value) => {
    this.updateStatement(value);
    this.setBalance(this.balance - value);
  };
}

const bank = new MiniBank(100);
bank.deposit(200);
bank.printBalance();
bank.withdraw(50);
bank.printBalance();

//bank.branchName = "Hello"; This is not liked by developer community


console.log(bank);




const bank1 = new MiniBank(1000);

console.log(bank1);





