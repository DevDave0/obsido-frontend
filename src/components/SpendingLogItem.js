import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import { Button, Icon } from 'semantic-ui-react'

const SpendingLogItem = (props) => {

  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

    let { category, deleteCategory } = props
  return (
    <tr>
      <td><Moment format='MM/DD/YYYY'>{category.created_at}</Moment></td>
      <td>{category.description}</td>
      <td>{category.name}</td>
      <td>{currencyFormat(category.amount)}</td>
      <td>
      <Button animated='vertical' color='red' className='ui fluid'>
      <Button.Content visible>
        <Icon name='trash' />
      </Button.Content>
      <Button.Content hidden onClick={() => deleteCategory(category)}>Delete</Button.Content>
      </Button>
        </td>
    </tr>
  );
};

export default SpendingLogItem;