import React from 'react';

class SearchBar extends React.Component {

	state = { term: ''};

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);

	};
	
	componentDidMount(){


	};

	render(){
		return(
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit} action="submit">
					<div className="field">
						<h2>	
							<label>Image Search</label>
						</h2>
						<input 
							placeholder="your text here" 
							type="text" 
							value={this.state.term} 
							onChange={ e => this.setState({ term: e.target.value })} 
						/>
					</div>
				</form>
			</div>
		); 
	};
};

export default SearchBar;