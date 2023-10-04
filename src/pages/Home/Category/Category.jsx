import { useLoaderData, useParams } from "react-router-dom";

import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  console.log("ID", id);
  const allNews = useLoaderData();
  const categoryWiseNews = allNews.filter((news) => news.category_id === id);
  console.log("Data", categoryWiseNews);
  let newsLength = categoryWiseNews.length;
  return (
    <div>
      {categoryWiseNews.length > 0 ? (
        categoryWiseNews.map((cWiseNews) => (
          <NewsCard
            key={cWiseNews.id}
            cWiseNews={cWiseNews}
            newsLength={newsLength}
          />
        ))
      ) : (
        <h1 className="text-xl font-bold text-red-500 mt-2">
          No news found in this category...
        </h1>
      )}
    </div>
  );
};

export default Category;
