import "./LeftSideNav.css";

import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Sports from "../Sports/Sports";
import useDataFetcher from "../../../utility/useDataFetcher";

const LeftSideNav = () => {
  const { data, error, isLoading } = useDataFetcher("/categories.json");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <span>Error: {error.message}</span>
      </div>
    );
  }
  return (
    <div>
      <SectionTitle title="All categories" />

      <div className="">
        <div className="bg-slate-300 px-2 py-[0.3rem] my-2 rounded-sm">
          <SectionTitle title="National News" />
        </div>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="m-2">
              <NavLink
                to={`/category/${category.id}`}
                key={category.id}
                className={`({ isActive }) => (isActive ? "active" : "")`}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Sports />
    </div>
  );
};

export default LeftSideNav;
