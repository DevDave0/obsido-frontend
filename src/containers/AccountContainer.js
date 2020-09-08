import React, { Component } from "react";
import SpendingLogList from "../components/SpendingLogList";
import SearchLog from "../components/SearchLog";
import { fetchCategories } from '../actions/index'
import {connect} from 'react-redux';

class AccountContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }


  render() {
    return (
      <div>
        <SearchLog />
        <SpendingLogList
            categories={this.props.categories}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        categories: state.category.categories.map(category => category),
    }
}

export default connect(mapStateToProps, {fetchCategories} )(AccountContainer)