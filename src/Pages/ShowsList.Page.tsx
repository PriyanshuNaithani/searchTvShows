import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { showsQueryChangeAction,  } from "../actions/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../models/Show";
// import { castMapSelector,  castSelector,  castStateSelector } from "../selectors/Cast";
import { showsLoadingSelector, showsQuerySelector, showsSelector } from "../selectors/Shows";
import { State } from "../store";

type ShowListPageProps = ReduxProps;
const showListPage: FC<ShowListPageProps> = ({ query , shows , queryChange , loading , }) => {



  console.log("shows",shows);
  return (
    <div className="mt-2">
      <div className="">
        <SearchBar value={query} onChange={(event) => {
        queryChange(event.target.value);
      }
      }/>
      {loading && <LoadingSpinner />}
      </div>
      {shows && <div className="flex flex-wrap justify-center">
       {shows && shows.map((s: Show) => (<ShowCard key={s.id} show={s}
      />))}
      </div>}
      {
        // cast && cast.map((item) =>item.name )
      }
    </div>
  );
};
    

const mapStateToProps = (state: State) => {
  return {query: showsQuerySelector(state), shows: showsSelector(state), loading: showsLoadingSelector(state) ,  }
};


const mapDispatchToProps = {
  queryChange: showsQueryChangeAction,
};


const connector = connect(mapStateToProps , mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>; 
export default connector(showListPage);
