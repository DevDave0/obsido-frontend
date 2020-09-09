import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';

const SpendingLogItem = (props) => {

  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

    let { category } = props
  return (
    <tr>
      <td><Moment format='MM/DD/YYYY'>{category.created_at}</Moment></td>
      <td>{category.description}</td>
      <td>{category.name}</td>
      <td>{currencyFormat(category.amount)}</td>
    </tr>
  );
};

export default SpendingLogItem;