import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Show } from "../models/Show";

type showCardProps = {
  show: Show;
}

const placeholderImage = "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"


const ShowCard: FC<showCardProps> = ({show}) => {
  
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={show.image?.medium || show.image?.orignal || placeholderImage}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p dangerouslySetInnerHTML={{__html: show.summary || ""}}></p>
        </div>
        <Link
          to={"/show/" + show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
