import React from "react";

const SpendingLogItem = (props) => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let { category } = props
  return (
    <tr>
      <td>{category.created_at}</td>
      <td>{category.description}</td>
      <td>{category.name}</td>
      <td>{'$' + numberWithCommas(category.amount)}</td>
    </tr>
  );
};

export default SpendingLogItem;