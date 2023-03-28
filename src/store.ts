import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { LOAD_SHOW_ACTION, LOAD_SHOW_CAST_ACTION, SHOWS_QUERY_CHANGE } from "./actions/shows";
import ShowReducer from "./reducers/Shows";
import { fetchShowDetail, fetchShows } from "./sagas/Shows";
import {debounce, takeEvery, takeLatest} from "redux-saga/effects";
// import castReducer from "./reducers/Cast";
// import { CAST_LOADED } from "./actions/cast";
import { composeWithDevTools } from "redux-devtools-extension";
// import { fetchCast } from "./sagas/Cast";

const reducer = combineReducers({
    shows: ShowReducer,
    // cast: castReducer,
});

function* rootSaga() {
    yield debounce(200,SHOWS_QUERY_CHANGE, fetchShows);
    yield takeEvery(LOAD_SHOW_ACTION , fetchShowDetail);
    // yield takeEvery(CAST_LOADED , fetchCast);
}

const sagaMiddleware = createSagaMiddleware();



const store = createStore(
    reducer , composeWithDevTools(applyMiddleware(sagaMiddleware))
      );


      sagaMiddleware.run(rootSaga);


export type State = ReturnType<typeof reducer>;

export default store;


