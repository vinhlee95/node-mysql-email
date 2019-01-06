import React, { Component } from 'react';
import { Icon } from '../UI';
import axios from 'axios';

class Filter extends Component {
	state = {
		showOptions: false,
	}

	showOptions = () => {
		this.setState({ showOptions: !this.state.showOptions})
	};

	filterUser = async (type) => {
		const API = process.env.REACT_APP_API;
		const response = await axios.post(`${API}/filter`, {type});
		this.props.updateUsers(response.data);
	}

	renderOptions() {
		return(
			<div
				className='filter-options-container'
			>
				<span onClick={() => this.filterUser('day')}>Last day</span>
				<span onClick={() => this.filterUser('week')}>Last week</span>
				<span onClick={() => this.filterUser('month')}>Last month</span>
			</div>
		)
	}

	render() {
		return (
			<div className='filter-container' onClick={e => e.stopPropagation()}>
				<div className='title-container' onClick={this.showOptions}>
					<h3>Filter</h3>
					<Icon name='filter_list' />
				</div>
				{
					this.state.showOptions ?
					this.renderOptions()
					: null
				}
			</div>
		)
	}
}

export default Filter;
