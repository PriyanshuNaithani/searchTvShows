import React, { useEffect } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { IoMdArrowBack } from "react-icons/io";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../store";
import { Show } from "../models/Show";
import { showsMapSelector } from "../selectors/Shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import { loadShowAction, loadShowCastAction } from "../actions/shows";
import { loadShowCast } from "../api";

type OwnProps = WithRouterProps;
type ShowDetailPageProps = ReduxProps & OwnProps;

const placeholderImage = "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params, show ,loadShow, loadShowCast }) => {
  

  useEffect(() => {
    loadShow(+params.showId);
    loadShowCast(+params.showId);
  } ,[params.showId]);

  if(!show){
    return <LoadingSpinner />;
  }
  return (
    <div className="mt-2">
      <Link to="/" className="flex items-center text-xl font-bold" ><IoMdArrowBack /> Back</Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((genere) => <GenrePill name={genere} key={genere} />)}
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image?.medium || placeholderImage}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={{__html: show.summary || ""}}>
          </p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating:{" "} <span className="text-gray-700">{show.rating.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        </div>
        <div className="flex flex-wrap">
          <CastCard avatarLink={show.image?.medium || ""} name={""} />
        </div>
    </div>
  );
};

const mapDispatchToProps = {
  loadShow: loadShowAction,
  loadShowCast: loadShowCastAction,
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return {show: showsMapSelector(state)[+ownProps.params.showId]};
}

 const connector = connect(mapStateToProps , mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>
export default withRouter(connector(ShowDetailPage));



