import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccountType } from './class/NewAccountType'

console.log('---novo tipo de conta---\n');
const newAccount = new NewAccountType('Maria Souza', 789012);
newAccount.deposit(500);
newAccount.getBalance();
newAccount.withdraw(200);
newAccount.getBalance();
newAccount.withdraw(400);
console.log('\n\n');


console.log('---conta empresa---');
const companyAccount = new CompanyAccount('Empresa XYZ', 123456);
companyAccount.deposit(10000);
companyAccount.getLoan(5000);
companyAccount.getBalance();
console.log('\n\n');

console.log('---conta pessoa física---');
const peopleAccount = new PeopleAccount(1,'João Silva', 654321);
peopleAccount.deposit(1000);
peopleAccount.withdraw(200);
peopleAccount.getBalance();
peopleAccount.withdraw(900);
peopleAccount.getBalance();
peopleAccount.deposit(500);
peopleAccount.getBalance();
