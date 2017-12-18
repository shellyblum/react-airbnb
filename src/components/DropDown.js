import React, { Component } from 'react';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            filtered: []
        }
    }
    componentWillMount() {
        fetch('/static/data/countries.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                //console.table(data);
                // console.log(`${data} items loaded`);
                this.setState({ countries: data });
            })
            .catch(error => {
                console.error(`fetch operation failed: ${error.message}`);
            });
    }
    
    render() {
        return (
            <ul className="dropdown-menu">
                {this.state.countries.map(item =>
                    <li onClick={() => this.props.location_data(item.id)} key={item.id}>{item.name}</li>)}
            </ul>
        )
    }
}
