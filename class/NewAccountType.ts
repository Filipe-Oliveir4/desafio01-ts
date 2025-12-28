import { DioAccount } from "./DioAccount"

export class NewAccountType extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount + 10; // Adiciona um bônus de 10 unidades em cada depósito
      console.log(`Voce depositou ${amount}, seu novo saldo é ${this.balance}`);
    } else {
      console.log("Conta inválida");
    }
  };

}
