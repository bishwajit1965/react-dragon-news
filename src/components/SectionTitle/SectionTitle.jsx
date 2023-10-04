const SectionTitle = ({ title, description }) => {
  return (
    <div className="lg:space-y-2 space-x-2 lg:mt-2 mt-2">
      <h1 className="lg:text-xl  font-bold">{title}</h1>
      <p className="lg:mb-2 mb-2">{description}</p>
    </div>
  );
};

export default SectionTitle;
