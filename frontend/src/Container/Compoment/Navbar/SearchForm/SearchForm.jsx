import React from "react";

const SearchForm = () => {
  return (
    <form className="navbar-search">
      <input
        type="text"
        name="nav-search"
        id="nav-search"
        placeholder="Search something ..."
      />
      <span className="material-icons">search</span>
    </form>
  );
};

export default SearchForm;
