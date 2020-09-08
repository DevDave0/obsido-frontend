
import React from "react";



const SearchLog = (props) => {


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search through your categories"}
        onChange={(e) => { props.changeSearch(e.target.value)}}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};


export default SearchLog