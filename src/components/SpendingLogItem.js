import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';

const SpendingLogItem = (props) => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let { category } = props
  return (
    <tr>
      <td><Moment format='MM/DD/YYYY'>{category.created_at}</Moment></td>
      <td>{category.description}</td>
      <td>{category.name}</td>
      <td>{'$' + numberWithCommas(category.amount)}</td>
    </tr>
  );
};

export default SpendingLogItem;