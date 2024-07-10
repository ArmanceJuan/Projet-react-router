import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [packageDetails, setPackageDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { packageName } = useParams();

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(
          `https://registry.npmjs.org/${packageName}`
        );
        setIsLoading(false);
        setPackageDetails(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des détails");
      }
    };

    fetchPackageDetails();
  }, [packageName]);

  return (
    <div className="container">
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div className="package-details">
          <h1>{packageDetails.name}</h1>
          <p>Description : {packageDetails.description}</p>
          <h3>Auteur</h3>
          <ul className="maintainers-list">
            {packageDetails.maintainers ? (
              packageDetails.maintainers.map((maintainer, index) => (
                <li key={index}>{maintainer.name}</li>
              ))
            ) : (
              <li>Aucun auteur spécifié</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
export default DetailsPage;
