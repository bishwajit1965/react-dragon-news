import {
  FaArrowLeft,
  FaBookmark,
  FaEye,
  FaHome,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

import EditorsInsights from "../editorsInsights/EditorsInsights";
import Rating from "react-rating";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import moment from "moment";
import { textShortener } from "../../utility/useHelpers";

const News = () => {
  const newsData = useLoaderData();
  const { _id } = useParams();
  let singleNews = newsData.find((nData) => nData._id == _id);

  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    image_url,
    details,
    published_date,
  } = singleNews;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-9">
          <div className="bg-white rounded-lg shadow-lg mb-5">
            <div className="flex justify-between items-center p-2 bg-gray-100">
              <div className="flex items-center space-x-2">
                <div className="">
                  <img src={author.img} alt="" className="w-8 rounded-full" />
                </div>

                <div className="">
                  <div className="">
                    <p className="text-sm">{author.name}</p>
                  </div>
                  <div className="">
                    <p className="text-sm">
                      {moment(author.published_date).format(
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
              <img src={image_url} alt="" className="w-full" />
              <h2 className="text-xl font-bold mb-3">{title}</h2>
              <p>{details}</p>
            </div>
            <div className="p-2">
              <Link to="/">
                <button className="btn btn-md w-full btn-primary capitalize">
                  <FaHome /> Go Home
                </button>
              </Link>
            </div>
            <div className="p-2">
              <EditorsInsights />
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
        </div>
        <div className="col-span-3">
          <RightSideNav />
        </div>
      </div>
    </>
  );
};

export default News;
