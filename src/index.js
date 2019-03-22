import React from "react";
import ReactDOM from "react-dom";
import WeatherInfo from "./WeatherInfo";
import omw from "./apis/weatherapi";
import ZipBar from "./ZipBar";
import NavBar from "./NavBar";
import "./stylesheets/index.css";

class App extends React.Component {
  state = { temp: null, city: null, type: null, err: null };

  //API request to omw to gather weather data, using zip entered from ZipBar

  onSearchSubmit = async (zip) => {
    const response = await omw.get("/data/2.5/weather", {
      params: {
        zip: zip,
        APPID: process.env.REACT_APP_WEATHER_API_KEY
      }
    });
    this.setState({
      temp: response.data.main.temp,
      city: response.data.name,
      type: response.data.weather[0].main
    });
    console.log(response);
  };

  renderContent() {
    if (this.state.temp === null && this.state.err === null) {
      return <ZipBar onSubmit={this.onSearchSubmit} />;
    } else if (!isNaN(this.state.temp)) {
      return (
        <WeatherInfo
          temp={this.state.temp}
          type={this.state.type}
          city={this.state.city}
        />
      );
    } else if (this.state.err !== null) {
      return <div>{this.state.err}</div>;
    }
  }

  onClick = () => {
    this.setState({ temp: null, city: null, type: null, err: null });
  };

  render() {
    return (
      <div className={this.state.type}>
        <NavBar onClick={this.onClick} />
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
