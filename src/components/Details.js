import React, { Component } from 'react';
import DetailsHeader from './DetailsHeader';
import GoogleMap from './GoogleMap';

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            filtered: [],
            lat: 40.730610,
            lng: -73.935242
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
                this.setState({ locations: data });
            })
            .catch(error => {
                console.error(`fetch operation failed: ${error.message}`);
            });
    }

    reposition(city) {
        this.state.locations.map((location)=> {
            switch (location.cityId) {
                case '1' :
                    this.setState({ lat: 32.0042938, lng: 34.7615399 });
                    break;
                case '2' :
                    this.setState({ lat: 32.0042938, lng: 34.7615399 });
                    break;
                case '3' :
                    this.setState({ lat: 32.0042938, lng: 34.7615399 });
                    break;
                case '4' :
                    this.setState({ lat: 32.0042938, lng: 34.7615399 });
                    break;
                case '5' :
                    this.setState({ lat: 32.0042938, lng: 34.7615399 });
                    break;
                case '6' :
                    this.setState({ lat: 32.0042938, lng: 34.7615399 });
                    break;
                case '7' :
                    this.setState({ lat: 32.0042938, lng: 34.7615399 });
                    break;
                case '8' :
                    this.setState({ lat: 32.0042938, lng: 34.7615399 });
                    break;
            }
        })
    }

    matchLocationId(clickedLocationId) {
        // console.log('i am in');
        // this.state.filtered = this.setState(locations.filter(function(item) {
        //     return item.id == this.props.id;
        // }))
        this.state.locations.map((location)=> {
            if (clickedLocationId == location.id) {
                this.setState(filtered.push(...location));
            }
        })
        console.log(this.state.filtered);
        // this.state.filtered.map((item)=> {
        // })
    }

    render() {
        return (
            <div className="container">
                <header>
                    <img className="detailsImg" src={this.props.path.id}></img>
                    console.log('');
                    <DetailsHeader/>
                </header>
                <hr></hr>
                <div className="hbox mb20">
                    <button onClick={() => this.reposition('tel aviv')}>Tel Aviv</button>
                    <input type="number" min="1" max="15" />
                </div>
                <GoogleMap lat={this.state.lat} lng={this.state.lng} />
            </div>
        )
    }
}