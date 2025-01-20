import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import { getRandomQuoteFromShowList } from "./aniquote";

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError("");
      var data = null;
      do {
        data = await getRandomQuoteFromShowList();
      } while (data[0].quote.length > 250);

      setQuote(data[0]);
    } catch (err) {
      setError("Error fetching quote. Please try again." + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleClick = () => {
    fetchQuote();
  };

  return (
    <div className="app">
      <h1 className="text-center text-3xl font-bold my-4">AniQuote of the Day</h1>
      <div>
        {loading ? (
          // <p className="text-center text-gray-500">Loading...</p>
          <div className="loader"></div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          quote && <Card title={quote.show} quote={quote.quote} author={quote.character} />
        )}
      </div>
      <div className="card text-center my-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}

export default App;
