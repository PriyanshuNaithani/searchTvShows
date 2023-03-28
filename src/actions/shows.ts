import { ActionCreator } from ".";
import { Show } from "../models/Show";

export const SHOWS_LOADED = "SHOWS_LOADED";

export const showsLoadedAction: ActionCreator<Show[] > = (shows: Show[] ) => ({
    type: SHOWS_LOADED,
    payload: shows,
});


export const SHOWS_QUERY_CHANGE = "SHOWS_QUERY_CHANGE";

export const showsQueryChangeAction: ActionCreator<string> = (query: string) => ({
    type: SHOWS_QUERY_CHANGE,
    payload: query,
})

export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED";

export const showLoadedAction: ActionCreator<Show> = (show: Show) => ({
    type: SHOW_DETAIL_LOADED,
    payload: show,
});

export const  LOAD_SHOW_ACTION = "LOAD_SHOW_ACTION";

export const loadShowAction: ActionCreator<number> = (showId: number) => ({
    type: LOAD_SHOW_ACTION,
    payload: showId,
});


export const LOAD_SHOW_CAST_ACTION = "LOAD_SHOW_CAST_ACTION";

export const loadShowCastAction: ActionCreator<number> = (showId: number) => ({
    type: LOAD_SHOW_CAST_ACTION,
    payload: showId,
});