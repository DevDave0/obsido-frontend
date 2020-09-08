import React, { Component } from "react";
import SpendingLogList from "../components/SpendingLogList";
import SearchLog from "../components/SearchLog";
const baseURL = 'http://localhost:3000/'
const categoryURL = baseURL + 'categories'


class AccountContainer extends Component {

    state = {
        categories: [],
        displayedCategories: [],
    }

    componentDidMount() {
        fetch(categoryURL)
        .then(resp => resp.json())
        .then(categories => {
            const result = categories.data.filter(category => {
                if(parseInt(category.relationships.user.data.id) === parseInt(localStorage.userId)){
                    return category
                } else {
                    return null
                }
            })

            result.forEach(category => {
                this.setState({
                    categories: [...this.state.categories, category.attributes],
                    displayedCategories: [...this.state.categories, category.attributes]
                })
            })


        })
    }

    changeSearch = (term) => {
        let filteredCategories = this.state.categories.filter(category=> category.description.toLowerCase().includes(term.toLowerCase()))
        this.setState({
            displayedCategories: filteredCategories
        })

    }


  render() {
    return (
      <div>
        <SearchLog 
            changeSearch={this.changeSearch}
        />
        <SpendingLogList
            categories={this.state.displayedCategories}
        />
      </div>
    );
  }
}



export default AccountContainer