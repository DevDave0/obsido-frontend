  
import React from "react";
import SpendingLogItem from './SpendingLogItem'

const SpendingLogList = (props) => {

    let { categories } = props


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {categories.map(category => <SpendingLogItem key={category.id} category={category} />)}
      </tbody>
    </table>
  );
};

export default SpendingLogList;