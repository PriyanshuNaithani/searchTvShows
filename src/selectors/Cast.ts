// import { createSelector } from "reselect";
// import { Show } from "../models/Show";
// import { State } from "../store";

// export const castStateSelector = (state: State) => state.cast;

// // export const castQuerySelector = createSelector(castStateSelector , (castState) => castState.);

// export const castMapSelector = createSelector(castStateSelector , (castState) => castState.cast);

// // export const queryShowsMapSelector = createSelector(showsStateSelector , (showsState) => showsState.query_shows);


// // export const castLoadingSelector = createSelector(castStateSelector, (castState) => castState.loading);


// export const castSelector = createSelector(
//     castMapSelector,
//      (castMap) => castMap.map((item) => item.person)
//      );