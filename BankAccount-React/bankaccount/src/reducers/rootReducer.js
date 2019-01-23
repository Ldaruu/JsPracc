const initState = {
    accounts: [
        {name: 'Bob', age: 25, city:'London', balance: 10000, id: 1},
        {name: 'John', age: 33, city:'Budapest',  balance: 15000, id: 2},
        {name: 'Linda', age: 28, city:'NewYork', balance: 20000, id: 3},
        {name: 'Susan', age: 45, city:'Toronto',balance: 330000, id: 4}
      ],
}

const rootReducer = (state = initState, action) =>{
    if(action.type === 'DELETE_ACCOUNT'){
        let newAccounts= state.accounts.filter(account =>{
            return action.id !== account.id
        })
        return{
            ...state,
            accounts: newAccounts
        }
    }
    return state;
}

export default rootReducer