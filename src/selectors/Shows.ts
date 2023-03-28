import { createSelector } from "reselect";
import { Show } from "../models/Show";
import { State } from "../store";

export const showsStateSelector = (state: State) => state.shows;

export const showsQuerySelector = createSelector(showsStateSelector , (showState) => showState.query);

export const showsMapSelector = createSelector(showsStateSelector , (showState) => showState.shows);

export const queryShowsMapSelector = createSelector(showsStateSelector , (showsState) => showsState.query_shows);


export const showsLoadingSelector = createSelector(showsStateSelector, (showsState) => showsState.loading);


export const showsSelector = createSelector(
    showsMapSelector,
     showsQuerySelector,
     queryShowsMapSelector,
     (showsMap , query ,queryShowsMap) => queryShowsMap[query]?.map((showId: number) => showsMap[showId]
     ));