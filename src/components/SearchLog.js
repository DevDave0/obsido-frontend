
import React from "react";

const SearchLog = () => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={() => {   
          console.log("Searching...");
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default SearchLog;