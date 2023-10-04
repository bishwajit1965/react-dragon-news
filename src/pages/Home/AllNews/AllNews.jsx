import NewsCard from "../NewsCard/NewsCard";
import { useLoaderData } from "react-router-dom";

const AllNews = () => {
  const allNews = useLoaderData();
  let newsLength = allNews.length;

  return (
    <div>
      {allNews.map((cWiseNews) => (
        <NewsCard
          key={cWiseNews._id}
          cWiseNews={cWiseNews}
          newsLength={newsLength}
        />
      ))}
    </div>
  );
};

export default AllNews;
