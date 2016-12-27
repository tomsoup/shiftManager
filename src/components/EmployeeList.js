//Turning object into an array with lodash
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

//We want to watch for update as soon as component show


class EmployeeList extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  // Life cycle method that will call when we receive a new set of props to run
  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }


  //this will create a new employeeList not matter what
  // this will avoid employeeLIst staying in the globalstate
  createDataSource({ employees }) {
    console.log(employees);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }


  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}


const mapStateToProps = state => {
  //Turning object into an array with lodash
  // state.employees is the object
  // for each key/value pair
  // val is the name, phone and shift

  const employees = _.map(state.employees, (val, uid) => {
      // end result { name: Tom, phone: 123 etc}
      return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
