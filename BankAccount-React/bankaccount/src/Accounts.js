import  React  from 'react';

const Accounts =({accounts, deleteAccout})=>{
    const accList = accounts.map(account => {
        return(
            <tr className="acc" key={account.id}>
                <td> {account.name}</td>
                <td> {account.age}</td>
                <td> {account.city}</td>
                <td> ${account.balance}</td>
                <td><button onClick={() => {deleteAccout(account.id)}}>Delete</button></td>
            </tr>
        )
    })
    return(
     <div className="acc-list">  
         <table>
             <thead>
             <tr>
                 <th>Name</th>
                 <th>Age</th>
                 <th>City</th>
                 <th>Balance</th>
                 <th>Delete</th>
             </tr>
             </thead>
             <tbody>
             {accList}
             </tbody>
         </table>
         
     </div>
    )
}

export default Accounts