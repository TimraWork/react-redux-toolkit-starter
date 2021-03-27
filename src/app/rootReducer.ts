import { combineReducers } from "redux";

import counterReducer from "../components/Counter/counterSlice";
import postsReducer from "../components/Posts/postsSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});

export default rootReducer;
