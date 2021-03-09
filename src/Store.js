import numReducer from './reducers/numReducer';
import editStatusReducer from './reducers/editStatusReducer';

var redux = require('redux');
// var oldState = {
//   num:["man hinh","chuot","ban phim"],
//   editstatus:true
// }
// var reducer1 = (state=oldState,action) =>{
//   switch (action.type) {
//     case "CHANGE_EDIT_STATUS":
//        return {...state,editstatus:!state.editstatus}
//       break;
//       case "ADD_NEW":
//         return {...state,num:[...state.num,action.newItem]}
//        break;
//       case "DELETE":
//         return {...state,num:state.num.filter((value,i)  => i !== action.index
//           )}
//           break;
//     default:
//       return state
//       break;
//   }
  
// }





const allReducers = redux.combineReducers({
  num:numReducer,
  editstatus:editStatusReducer,
})




var store1 =redux.createStore(allReducers);
store1.subscribe(()=>{ //hàm theo dõi 
  console.log(JSON.stringify(store1.getState()));
})
store1.dispatch({type:"CHANGE_EDIT_STATUS"})

store1.dispatch({
  type:"ADD_NEW",
  newItem:"Tai Nghe"
})


store1.dispatch({
  type:"DELETE",
  index:0
})
export default store1