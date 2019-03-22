import React from 'react';
import './stylesheets/ZipBar.css'

class ZipBar extends React.Component {
    state = { zip: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.zip)
    };

    render(){
        return(
            <div className="World">
                <form onSubmit={this.onFormSubmit}>
                    <label>Enter zip code: </label>
                    <input type="text" 
                    value={this.state.zip} 
                    onChange={(e) => this.setState({ zip: e.target.value})}
                    minLength="5"
                    maxLength="5"
                    />
                </form>
            </div>
        ) 
    }
}

export default ZipBar;