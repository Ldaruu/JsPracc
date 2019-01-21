import  React  from 'react';

const Accounts =({accounts})=>{
    const accList = accounts.map(account => {
        return(
            <tr className="acc" key={account.id}>
                <td> {account.name}</td>
                <td> {account.age}</td>
                <td> {account.city}</td>
                <td> ${account.balance}</td>
            </tr>
        )
    })
    return(
     <div className="acc-list">  
         <table>
             <tr>
                 <th>Name</th>
                 <th>Age</th>
                 <th>City</th>
                 <th>Balance</th>
             </tr>
             {accList}
         </table>
         
     </div>
    )
}

export default Accounts
