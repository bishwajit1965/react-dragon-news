import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex p-2 bg-slate-300 rounded-md">
      <button className="btn btn-md bg-red-600 text-white rounded-md px-4 py-2 mr-2 capitalize">
        Latest
      </button>
      <Marquee pauseOnHover={true} gradient={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
