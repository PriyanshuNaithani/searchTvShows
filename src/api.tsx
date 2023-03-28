import axios from "axios"
import { showsLoadedAction } from "./actions/shows";
import { Show } from "./models/Show";
import Cast  from "./models/Cast";

const BASE_URL = "https://api.tvmaze.com/"

export const searchShows = async (keyword: string) => {
    const response = await axios.get<{ show: Show }[]>(BASE_URL + "search/shows?q=" + keyword);
    const shows =  response.data.map((item) => item.show);

    return shows;

    // const castPromises =[];
    // for (let i= 0; i < shows.length ; i++){

    //    castPromises.push(getCast(shows[i]))

    // }

    // return Promise.all(castPromises);
};

// export const getCast =async (show: Show) => {
//     const castResponse = await axios.get<{cast: Cast}[]>(BASE_URL + "shows/" + show.id + "/cast");

//     const cast = castResponse.data.map((item) => item.cast?.person);

//     return { show , cast};

    
    
// }

export const loadShowDetail = async (showId: number) => {
    const response = await axios.get<{show: Show}[]>(BASE_URL + "shows/" + showId);
    return response.data;
}

// export const loadShowCast = async (showId: number) => {
//     const response = await axios.get<{show: Show}[]>(BASE_URL + "shows/" + showId + "/cast");
//     return response.data;

// }


