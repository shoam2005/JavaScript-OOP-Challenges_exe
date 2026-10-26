class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        if(this.balance>amount)
            this.balance-=amount;
        else
            throw new Error('אין אפשרות למשיכה');
            
    }
}
class Bank{
    constructor(){
        this.acconts=[]
    }
    addAccount(account){
        this.acconts.push(account)
    }
    transfer(fromName,toName,amount){
        const fromACC=this.acconts.find(a=>a.owner===fromName)
        const toACC=this.acconts.find(a=>a.owner===toName)
       fromACC.withdraw(amount);
       toACC.deposit(amount); 
    }
    showBalance(){
        this.acconts.forEach(account => {
            console.log(`account's owner:${account.owner} balance:${account.balance}`)       
        });
    }

}