import {createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numeros: function (state, action){

        switch (action.type) {
            case 'NUM_MIN_ALTERADO':
                return{
                    ...state,
                    min:action.payload
                }
                
                case 'NUM_MAX_ALTERADO':
                    return{
                        ...state,
                        max:action.payload
                    }

            default:
                return{
                    min:7,
                    max:37
                }

        }
                }
            })

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;