export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getBalance = (): void => {
    console.log('Saldo atual: ' + this.balance);
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Voce depositou ${amount}, seu novo saldo é ${this.balance}`);
    } else {
      console.log("Conta inválida");
    }
  };

  withdraw = (amount: number): void => {
    console.log('Tentando sacar ' + amount);
    if (this.validateWithDraw(amount)) {
      this.balance -= amount;
      console.log(`Voce sacou ${amount}, seu novo saldo é ${this.balance}`);
    } else { 
      console.log("Saldo insuficiente ou conta inválida");
    }
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta inválida");
  };

  private validateWithDraw = (withdrawAmount: number): boolean => {
    if (this.status && withdrawAmount <= this.balance) {
      return true;
    } else {
      return false;
    }
  };
}
