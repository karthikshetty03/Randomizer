import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		let arr = [ '1S_E9ctwWZNVmLtOwFfL3RmrSHxXJuXgyLaurOuqABz8', '1Zfp4Wu_qeMgh5-50pZlG5f1wSruABKvLV86RDmw5b_E' ];

		let linkArray = [ 'https://forms-1', 'https://forms-2' ];
		let mini = 10000;

		for (let i = 0; i < arr.length; i++) {
			Tabletop.init({
				key: arr[i],
				callback: (googleData) => {
					console.log(googleData.length, i);
					if (googleData.length < mini) {
						this.setState({
							data: linkArray[i]
						});
						mini = googleData.length;
					}
				},
				simpleSheet: true
			});
		}
	}

	render() {
		const { data } = this.state;
		return (
			<div className="App">
				<h1 className="App-title">Disinformation Survey</h1>
				<div>
					<a href={data}>{data}</a>
				</div>
			</div>
		);
	}
}

export default App;
//https://docs.google.com/spreadsheets/d/1S_E9ctwWZNVmLtOwFfL3RmrSHxXJuXgyLaurOuqABz8/edit#gid=0
//https://docs.google.com/spreadsheets/d/1Zfp4Wu_qeMgh5-50pZlG5f1wSruABKvLV86RDmw5b_E/edit
