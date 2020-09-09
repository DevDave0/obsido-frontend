import React, { Component } from "react";
import SpendingLogList from "../components/SpendingLogList";
import SearchLog from "../components/SearchLog";
import SortLog from "../components/SortLog";
const baseURL = 'http://localhost:3000/'
const categoryURL = baseURL + 'categories/'


class AccountContainer extends Component {

    state = {
        categories: [],
        displayedCategories: [],
        sortBy: 'None'
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

    changeSortBy = (sort) => {this.setState({ sortBy: sort})}

    sortInvoke = () => {
        let categories = [...this.state.displayedCategories]
        let sortBy = this.state.sortBy 
    
        if ( sortBy === 'Category') {
            categories.sort((t1, t2) => t1.name.localeCompare(t2.name))
        } else if ( sortBy === 'Description') {
            categories.sort((t1, t2) => t1.description.localeCompare(t2.description))
        } 
        return categories
    }
    

    deleteCategory = (category) => {

        fetch( categoryURL + category.id, {
            method: "DELETE",
            headers: {
            "Content-Type" : "application/json"
            }
        })
        .then(resp => resp.json())
        .then(() => {
            let remainingCategories = this.state.displayedCategories.filter( t => !(t === category))
            this.setState({
                categories: remainingCategories,
                displayedCategories: remainingCategories
            })
        })
    }


    render() {
        return (
        <div className='ui segment raised stacked padded'>
            <SearchLog 
                changeSearch={this.changeSearch}
            />
            <br></br>
            <SortLog 
                changeSortBy={this.changeSortBy}
                sortBy={this.state.sortBy}
            />

            <SpendingLogList
                categories={this.sortInvoke()}
                deleteCategory={this.deleteCategory}
            />

        </div>
        );
    }
}



export default AccountContainer