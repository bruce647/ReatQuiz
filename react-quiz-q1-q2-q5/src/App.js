//Author:Guanxing Lan 647-818-4101

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        { room_type: "Queen", vacant_rooms: 5, price: 100 },
        { room_type: "Double", vacant_rooms: 3, price: 75 },
        { room_type: "Twin", vacant_rooms: 8, price: 60 }
      ],
      inputValue: '',
      question2Result: '',
      weatherData: [],
      inputCity: 'Tokyo'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputChangeCity = this.handleInputChangeCity.bind(this);
    this.handleInputSubmitCity = this.handleInputSubmitCity.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div className="App-header">
          <h3>Question1:</h3>
          <ol>
            {
              this.state.rooms.map((item, index) => {
                return (
                  <li key={index}>{item.room_type},{item.vacant_rooms},${item.price}</li>
                )
              })
            }
          </ol>
          <h3>Question2:</h3>
          <div>
            <input value={this.state.inputValue} onChange={this.handleInputChange} placeholder="Enter a number" />
            <button onClick={this.handleInputSubmit}>Submit</button>
            <p>Result:  {this.state.question2Result}</p>
          </div>
          <h3>Question5:</h3>
          <input value={this.state.inputCity} onChange={this.handleInputChangeCity} placeholder='Enter a city' /><button onClick={this.handleInputSubmitCity}>Serach</button>
          {this.state.weatherData}
        </div>
      </Fragment>
    )
  }
  componentWillMount() {

  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleInputChangeCity(e) {
    this.setState({
      inputCity: e.target.value
    })
  }
  handleInputSubmit() {
    const result = this.state.inputValue
    if (Number(result) % 14 === 0) {
      this.setState({
        question2Result: 'foobar',
        inputValue: ''
      })
    } else if (Number(result) % 7 === 0) {
      this.setState({
        question2Result: 'bar',
        inputValue: ''
      })
    } else if (Number(result) % 2 === 0) {
      this.setState({
        question2Result: 'foo',
        inputValue: ''
      })
    } else {
      this.setState({
        question2Result: result,
        inputValue: ''
      })
    }
  }
  handleInputSubmitCity() {
    var self = this;
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: this.state.inputCity,
        lat: '0',
        lon: '0',
        id: '2172797',
        lang: 'null',
        units: '"metric" or "imperial"',
        mode: 'JSON'
      },
      headers: {
        'x-rapidapi-key': '4a339ed2d1msh20ce6b9c3bfb8aep1dfef1jsnc01150187fce',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data.weather[0].description);
      self.setState({
        weatherData: response.data.weather[0].description
      })
    }).catch(function (error) {
      console.error(error.response);
    });
  }
}
export default App;
