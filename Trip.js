import React, { Component } from 'react';
//import FontAwesome from 'react-fontawesome';
//since use icon to instead of component
import { sortBy } from 'lodash';
import classNames from 'classnames';
import './App.css';

const tripList = [
	{tripDate:"2018-01-01" , tripVehicle:"大巴" , tripAss:"大堂" , tripTime:"2:00-1" , tripPlace:"海边" },
	{tripDate:"2018-01-02" , tripVehicle:"飞机" , tripAss:"大堂" , tripTime:"2:00-2" , tripPlace:"山谷" },
	{tripDate:"2018-01-03" , tripVehicle:"大巴" , tripAss:"大堂" , tripTime:"2:00-1" , tripPlace:"海边" },
	{tripDate:"2018-01-04" , tripVehicle:"飞机" , tripAss:"大堂" , tripTime:"2:00-2" , tripPlace:"山谷" },
	{tripDate:"2018-01-05" , tripVehicle:"大巴" , tripAss:"侧门" , tripTime:"2:00-1" , tripPlace:"海边" },
	{tripDate:"2018-01-06" , tripVehicle:"飞机" , tripAss:"侧门" , tripTime:"2:00-2" , tripPlace:"山谷" },
	{tripDate:"2018-01-07" , tripVehicle:"大巴" , tripAss:"侧门" , tripTime:"2:00-1" , tripPlace:"海边" },
]

//main component
class Trip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trip : tripList[0],
		};
		this.selectDate = this.selectDate.bind(this);
	}

	selectDate(item) {
		this.setState({ 	
			trip : item,
		});
	}
	render() {
		return (
			<div className="trip">
			<div className="tripDate">
			       	 {tripList.map(item  => 
			          		<button key={item.tripDate} onClick={() => this.selectDate(item)}>{item.tripDate}</button>
				)}
			</div>
			<Detail
				currentItem = {this.state.trip}
			/>
			</div>
		)
	}
}

const Detail = ({currentItem}) =>
	<div>
	<div  className="detailDate">
		{currentItem.tripDate}
	</div>
	<div className="detailInfo">
		<div><span>{currentItem.tripVehicle}</span></div>
		<div><span>集合地点</span><span>{currentItem.tripAss}</span></div>
		<div><span>集合时间</span><span>{currentItem.tripTime}</span></div>
		<div><span>行程</span><span>{currentItem.tripPlace}</span></div>
	</div>
	</div>
export default Trip;

export {
	Detail,
};
