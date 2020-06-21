import React ,  {createContext , useReducer} from 'react';
import AppReducer from './AppReducer';





const initialstate ={
transactions:[

{id : 1 , description :"value 1" , amount : 50},

{id : 2 , description :"value 2" , amount : -50},

{id : 3 , description :"gidt 1" , amount : 520},
{id : 4 , description :"value 1" , amount : 350},

]

}

//creating global context 
export const Globalcontext = createContext(initialstate);

//creating a provider for global context 
export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initialstate)
    return(
        <Globalcontext.Provider value= {
{
    transactions : state.transactions
}

        }>

{children}
            </Globalcontext.Provider>
    )
}


