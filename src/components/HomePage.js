import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import DropDown from './DropDown';
import Thumb from './Thumb';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mock: [],
            filterArr: [],
        }
    }

    componentWillMount() {
        fetch('/static/data/locations.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                //console.table(data);
                // console.log(`${data} items loaded`);
                this.setState({ mock: data });
            })
            .catch(error => {
                console.error(`fetch operation failed: ${error.message}`);
            });
    }

    filterCountry(countryId) {
        console.log(countryId);
        for (let i = 0; i < this.state.mock.length; ++i) {
            if (countryId == this.state.mock[i].id) {
                this.setState({ filterArr: this.state.filterArr.push(this.state.mock[i]) });
            }
        }
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron hero-spacer">
                    <h1>
                        <img className="App-logo" src="https://s-media-cache-ak0.pinimg.com/originals/92/bf/b7/92bfb777f072d29e4c09b6feca4e487c.png" />
                        airbnb
                    </h1>
                    {/*<div className="input-group">
                            Price range: from
                                <input type="number" name="quantity" min="1" className="inputNum" />
                            to
                                <input type="number" name="quantity" min="1" className="inputNum" />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-default dropdown-toggle"
                                    data-toggle="dropdown">
                                    Country
                                    <span className="caret"></span>
                                </button>
                                <DropDown location_data={this.filterCountryId.bind(this)} />
                            </div>
                            Guests:
                              <input type="number" name="quantity" min="1" max="12" className="inputNum" />
                            <button type="button" className="btn btn-default">
                                Search
                            </button>
                        </div>*/}
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-secondary-dropdown-toggle" data-toggle="dropdown">
                                Country
                                    <span className="caret"></span>
                            </button>
                            <DropDown location_data={this.filterCountry.bind(this)} />
                            <button type="button" className="btn btn-secondary">Price
			                    <input type="number" name="quantity" min="1" className="inputNum" />
                                To
			                    <input type="number" name="quantity" min="1" className="inputNum" />
                            </button>
                            <button type="button" className="btn btn-secondary">Guests
			                    <input type="number" name="quantity" min="1" className="inputNum" />
                            </button>
                        </div>
                    </div>
                </header>
                <hr></hr>
                <Thumb thumb_data={this.state.filterArr.length > 0 ? this.state.filterArr : this.state.mock} />
            </div>
        )
    }
}