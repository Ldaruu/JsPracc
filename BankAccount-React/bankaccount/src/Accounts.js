import  React  from 'react';

const Accounts =({accounts})=>{
    const accList = accounts.map(account => {
        return(
            <div className="acc" key={account.id}>
                <div>Name: {account.name}</div>
                <div>Age: {account.age}</div>
                <div>Balance: ${account.balance}</div>
            </div>
        )
    })
    return(
     <div className="acc-list">  
         {accList}
     </div>
    )
}

export default Accounts
