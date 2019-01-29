import {applyMiddleware} from 'redux'
import  thunk  from 'redux-thunk';
const initState = {
    accounts: [
        {name: 'Bob', age: 25, city:'London', balance: 10000, id: 1},
        {name: 'John', age: 33, city:'Budapest',  balance: 15000, id: 2},
        {name: 'Linda', age: 28, city:'NewYork', balance: 20000, id: 3},
        {name: 'Susan', age: 45, city:'Toronto',balance: 330000, id: 4}
      ],
      img:[]
}

applyMiddleware(thunk);

// const imgReducer =(state = initState.img, action) =>{
//     if(action.type === 'RECEIVED_IMG'){
//         return{
//             ...state,
//             img: action.payload
//         }
//     }
//     return state;
// }

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
    if(action.type === 'ADD_ACCOUNT'){
        console.log(action)
        let newAccount =[...state.accounts, action.acc]
        return{
            ...state,
            accounts: newAccount

        }
    }
    if(action.type === 'RECEIVED_IMG'){
        return{
            ...state,
            img: action.payload
        }
    }
    return state;
}
//  const rootReducer = combineReducers({
//     accounts: accReducer,
//     img: imgReducer
// })

export default rootReducer