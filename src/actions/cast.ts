import { ActionCreator } from ".";
import Cast from "../models/Cast";

export const CAST_LOADED = "CAST_LOADED";

export const castLoadedAction: ActionCreator<Cast[] > = (cast: Cast[] ) => ({
    type: CAST_LOADED,
    payload: cast,
});