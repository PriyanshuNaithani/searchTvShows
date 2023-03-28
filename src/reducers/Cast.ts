// import produce from "immer";
// import { normalize, schema } from "normalizr";
// import { AnyAction } from "redux";
// import { CAST_LOADED } from "../actions/cast";
// import { SHOWS_LOADED, SHOWS_QUERY_CHANGE, SHOW_DETAIL_LOADED } from "../actions/shows";
// import Cast from "../models/Cast";
// import { Show } from "../models/Show";


// export type State = {
//     cast: Cast[]

//     loading: boolean
// }
// export const initialState: State = {
//     cast: [],
//     loading: false,

// };
// function castReducer(state = initialState , action: AnyAction): State {
//     switch (action.type) {
//         case CAST_LOADED:
//             return produce(state, (draft) => {

//                 const cast = action.payload as Cast[];
//                 if(!cast || cast.length === 0) {
//                     return;
//                 }
//                 const castSchema = new schema.Entity("cast");

//                 const normalizedData = normalize(cast , [castSchema]);

//                 draft.loading = false;

//                 draft.cast = {...draft.cast, ...normalizedData.entities.cast};
//             });

           
//         default:
//             return state;
//     }
// }
// export default castReducer;