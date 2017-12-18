import React, {Component} from 'react';

export default class GoogleMap extends Component {
  constructor(props){
    super(props)
  }

  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(nextProps){
    this.map.setCenter({lat:nextProps.lat, lng: nextProps.lng})
  }

  componentDidMount(){
    this.map = new google.maps.Map(this.$map,{
      center:{ lat:this.props.lat, lng: this.props.lng },
      zoom: 8
    })    
  }
  
  render() {
    return (
        <div className="map">
      <div ref={(el) => { this.$map = el; }} style={{height:'90%'}}></div>
      {/*// <div ref="map" style={{height:'90%'}}></div>*/}
      </div>
    );
  }
}