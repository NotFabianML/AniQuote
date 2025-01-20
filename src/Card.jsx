import PropTypes from "prop-types";

const Card = ({ title = "No Title", quote = "No Quote", author = "Unknown" }) => {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="max-w-sm mt-8 rounded overflow-hidden shadow-lg bg-gray-800">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
          <p className="text-primary text-base text-gray-300 mt-4">
            {`“${quote}”`}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
            {`- ${author}`}
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
};

export default Card;
