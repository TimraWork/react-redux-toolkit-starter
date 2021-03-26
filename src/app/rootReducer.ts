import { combineReducers } from "redux";

import counterReducer from "../components/counter/counterSlice";
import postsReducer from "../components/posts/postsSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});

export default rootReducer;
