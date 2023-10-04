import {
  FaBookmark,
  FaEye,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Rating from "react-rating";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import moment from "moment";
import { textShortener } from "../../../utility/useHelpers";

const NewsCard = ({ cWiseNews, newsLength }) => {
  const {
    _id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
    details,
  } = cWiseNews;
  return (
    <div className="bg-white rounded-lg shadow-lg mb-5">
      <SectionTitle title={`Total News ${newsLength}`} />
      <div className="flex justify-between items-center p-2 bg-gray-100">
        <div className="flex items-center space-x-2">
          <div className="">
            <img src={author?.img} alt="" className="w-8 rounded-full" />
          </div>

          <div className="">
            <div className="">
              <p className="text-sm">{author.name}</p>
            </div>
            <div className="">
              <p className="text-sm">
                {moment(author?.published_date).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="p-4">
        {" "}
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <img src={image_url} alt="" />
        <p className="mt-3">
          {textShortener(details, 270)}{" "}
          <Link
            className="text-indigo-600 font-bold text-xs"
            to={`/news/${_id}`}
          >
            Read More
          </Link>{" "}
        </p>
      </div>
      <div className="p-2 bg-gray-100 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={<FaStarHalfAlt className="text-amber-500" />}
              placeholderSymbol={<FaStar className="text-amber-500" />}
              fullSymbol={<FaStar />}
              readonly
              activeColor="#ffd700"
            ></Rating>
          </div>
          <div className="">{rating.number}</div>
        </div>
        <div className="flex items-center space-x-2">
          <FaEye />
          <p>{total_view} views</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
