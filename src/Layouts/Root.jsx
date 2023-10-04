import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import Home from "../pages/Home/Home/Home";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Root;
