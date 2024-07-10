import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { searchPackage } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchPackage) {
      setIsLoading(true);
    }

    const packagesResponses = async () => {
      try {
        const response = await axios.get(
          `https://registry.npmjs.org/-/v1/search`,
          {
            params: {
              text: searchPackage,
            },
          }
        );
        setIsLoading(false);
        setSearchResults(response.data.objects);
      } catch (err) {
        console.error("Erreur lors de la recherche");
      }
    };
    packagesResponses();
  }, [searchPackage]);

  return (
    <div>
      <h1>Results</h1>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result.package.name}>
              <Link to={`/package/${result.package.name}`}>
                {result.package.name}
              </Link>
              <p>{result.package.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchPage;
