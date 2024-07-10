import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchPackage, setSearchPackage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchPackage);
    if (searchPackage) {
      navigate(`/search/${searchPackage}`);
    }
  };

  return (
    <div className="container header-content">
      <h2>NPM Registy</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchPackage}
          onChange={(e) => setSearchPackage(e.target.value)}
          placeholder="search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
