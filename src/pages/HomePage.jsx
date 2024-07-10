import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  console.log("HomePage rendu");
  const [reactPackage, setReactPackage] = useState(null);
  const [typescriptPackage, setTypescriptPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const [reactResponse, typescriptResponse] = await Promise.all([
          axios.get("https://registry.npmjs.org/react"),
          axios.get("https://registry.npmjs.org/typescript"),
        ]);
        setIsLoading(false);
        setReactPackage(reactResponse.data);
        setTypescriptPackage(typescriptResponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des packages", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="container">
      <h3>Bienvenue sur l'explorateur de packages npm</h3>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          {reactPackage && (
            <div className="package-card">
              <h3>
                <Link to={`/package/react`}>React</Link>
              </h3>
              <p>Description : {reactPackage.description}</p>
              <Link to={`/package/react`} className="view-button">
                Voir les détails
              </Link>
            </div>
          )}
          {typescriptPackage && (
            <div className="package-card">
              <h3>
                <Link to={`/package/typescript`}>TypeScript</Link>
              </h3>
              <p>Description : {typescriptPackage.description}</p>
              <Link to={`/package/typescript`} className="view-button">
                Voir les détails
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default HomePage;
