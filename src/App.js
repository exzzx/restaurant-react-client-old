import React from 'react';
import './App.css';
import ZZXRouter from "./routers/router";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
// import LoginReducer from "./reducers/LoginReducer";

// const editorReducer = combineReducers({
//                                           loginReducer: LoginReducer,
//                                       });
// const store = createStore(editorReducer);
//{/*<Provider store={store}>*/}
//{/*</Provider>*/}
function App() {
  return (

      <div>
        <ZZXRouter/>
      </div>

  );
}

export default App;
