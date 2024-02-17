import { ADD_TO_CART } from "../actions/actions";


const addToCartReducer = (state=[],action)=>{
    console.log(action)
  switch(action.type){
    case ADD_TO_CART:
        return [...state,action.payload]
    default:
        return state
  }
}

export default addToCartReducer