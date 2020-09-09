import React, {useEffect} from "react";
// import Moment from 'react-moment';
// import 'moment-timezone';
import {connect} from 'react-redux';
import { Card } from 'semantic-ui-react'
import { fetchCategories } from '../actions/index'


const UserInfoCard = (props) => {

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const totalAmount = props.category.categories.map(category => {
        return category.amount
    })

    const highestCategoryAmount = Math.max(...totalAmount)
    const lowestCategoryAmount = Math.min(...totalAmount)

    let result
    let result2
    let crypto = []
    let stocks = []
    let misc = [] 
    let food = []
    let bills = []
    let shopping = []

    const fillData = props.category.categories.forEach(category => {
        if (category.name === 'Crypto'){
            crypto.push(category.amount)
        } else if (category.name === 'Bills'){
            bills.push(category.amount)
        } else if (category.name === 'Misc'){
            misc.push(category.amount)
        } else if (category.name === 'Stocks'){
            stocks.push(category.amount)
        } else if (category.name === 'Food'){
            food.push(category.amount)
        } else if (category.name === 'Shopping'){
            shopping.push(category.amount)
        }
    })

    const highestCategory = props.category.categories.find(category => {
        if (category.amount === highestCategoryAmount){
            result = category.name
            return category
        }
    })

    const lowestCategory = props.category.categories.find(category => {
        if (category.amount === lowestCategoryAmount){
            result2 = category.name 
            return category 
        }
    })


    // const forLoopMinMax = () => {
    //     let min = totalAmount[0], max = totalAmount[0]
      
    //     for (let i = 1; i < totalAmount.length; i++) {
    //       let value = totalAmount[i]
    //       min = (value < min) ? value : min
    //       max = (value > max) ? value : max
    //     }
      
    //     return [min, max]
    //   }

    // const [forLoopMin, forLoopMax] = forLoopMinMax()
    
    const items = [
        {
          header: 'Total amount of spending',
          description:
          `${currencyFormat(totalAmount.reduce((a,b)=> a + b, 0))}`,
          meta: 'Total amount of spending done by this user',
        },
        {
          header: 'Category with the highest spend',
          description:
            result,
          meta: 'Category that had the highest one time spend event',
        },
        {
          header: 'Category with the lowest spend',
          description:
            result2,
          meta: 'Category that had the lowest one time spend event',
        },
      ]

    const items2 = [
        {
          header: 'Stocks',
          description:
          `${currencyFormat(stocks.reduce((a,b)=> a + b, 0))}`,
          meta: 'Total amount of spending in the Stock Category',
        },
        {
          header: 'Cryptocurrency',
          description:
          `${currencyFormat(crypto.reduce((a,b)=> a + b, 0))}`,
          meta: 'Total amount of spending in cryptocurrencies and digital assets',
        },
        {
          header: 'Food',
          description:
          `${currencyFormat(food.reduce((a,b)=> a + b, 0))}`,
          meta: 'Total amount of spending in the Food Category',
        },
    ]


    const items3 = [
        {
          header: 'Bills',
          description:
          `${currencyFormat(bills.reduce((a,b)=> a + b, 0))}`,
          meta: 'Total amount of spending in the Bills Category',
        },
        {
          header: 'Shopping',
          description:
          `${currencyFormat(shopping.reduce((a,b)=> a + b, 0))}`,
          meta: 'Total amount of spending in the Shopping Category',
        },
        {
          header: 'Misc.',
          description:
          `${currencyFormat(misc.reduce((a,b)=> a + b, 0))}`,
          meta: 'Total amount of spending in the Bills Category',
        },
      ]

    useEffect(() => {
        props.fetchCategories()
        
    },[]);

    return (
        <div>
            {/* {console.log(totalAmount)} */}
            {/* {console.log(stocks.)} */}
            <h1>User Info Cards</h1>
            <Card.Group stackable className='raised ui red' itemsPerRow={3} items={items} />
            <Card.Group stackable className='raised ui orange' itemsPerRow={3} items={items2} />
            <Card.Group stackable className='raised ui yellow' itemsPerRow={3} items={items3} />
        </div>

    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        category: state.category
    }
}

export default connect(mapStateToProps, { fetchCategories })(UserInfoCard)