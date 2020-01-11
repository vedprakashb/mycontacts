import React, {Component} from 'react';
//import uuid from 'uuid';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
const Context = React.createContext();

const reducer = (state,action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
                return {
                    ...state,
                    contacts: state.contacts.filter(contact=>
                    contact.id !== action.payload)
                };            
                case 'ADD_CONTACT':
                    return {
                        ...state,
                        contacts: [action.payload, ...state.contacts]
                    };   
              case 'UPDATE_CONTACT' :
              return {
                ...state,
                contacts : state.contacts.map(contact =>
                    contact.id === action.payload.id 
                    ? (contact = action.payload)
                    :  contact
                )
              };
            default: return state;
    }
}

export class Provider extends Component{

   async componentDidMount(){
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.setState({
            contacts: response.data
        }));
    }
    state ={
        contacts : [
        //     {
        //         id: uuid(),
        //         name: "John Doe",
        //         email : "jdoe@gmail.com",
        //         phone : "555-555-5555"
        //     },
        //     {
        //        id: uuid(),
        //        name: "Karen willims",
        //        email : "kwillims@gmail.com",
        //        phone : "444-444-4444"
        //    },
        //    {
        //        id: uuid(),
        //        name: "Henry Johnson",
        //        email : "hjohnson@gmail.com",
        //        phone : "333-333-3333"
        //    }
        ],
        dispatch : action =>
            this.setState(state => reducer(state,action))   
    };
        render(){
            return(
                <Context.Provider value = {this.state}>
                    {this.props.children}
                </Context.Provider>
            )
        }
}

export const Consumer = Context.Consumer;