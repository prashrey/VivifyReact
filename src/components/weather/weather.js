import React from 'react';
import humid from './img/humidity-icon.png'
import wind from './img/wind-icon.png'

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wApi: "",
            wPlace:""
        };
    }
    componentWillReceiveProps(){
        let strRes = this;
        this.setState({wPlace: this.props.city});
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.wPlace + "&units=metric&APPID=924d98f4507d35a3eafb93d90bec4657")
            .then( (response) => {
                return response.json();
            })
            .then( (resp) => {
            if(resp.cod == "404"){
                document.getElementById('weatherBox').style.border = "1px solid red";
            }
            else{
                document.getElementById('weatherBox').style.border = "1px solid #ccc";                
                strRes.setState({wApi: resp});
                //console.log(strRes.state.wApi);
            }
            })
            .catch( () =>{
                document.getElementById('weatherContainer').innerHTML = "<div class='noInternetWeather'><p>Couldn't get weather details, Sorry mate!</p></div>";
            })
    }
    // componentWillMount(){
        
    //     let strRes = this;
    //     this.setState({wPlace: this.props.city});
    //     fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.wPlace + "&units=metric&APPID=924d98f4507d35a3eafb93d90bec4657")
    //         .then( (response) => {
    //             return response.json();
    //         })
    //         .then( (resp) => {
    //         if(resp.cod == "404"){
    //             document.getElementById('weatherContainer').innerText = "No such city bro..";;
    //         }
    //         else{
    //             strRes.setState({wApi: resp});
    //             //console.log(strRes.state.wApi);
    //         }
    //         })
    //         .catch( () =>{
    //             document.getElementById('weatherContainer').innerHTML = "<div class='noInternetWeather'><p>Couldn't get weather details, Sorry mate!</p></div>";
    //         })
    // }
    render(){
        if(this.state.wApi.name !== undefined)
        {
            return(
                // <div id="weatherContainer" className="weatherContainer">
                <div id="weatherContainer" className="roundWeather">
                    <div className="outerRing">
                        {/* <div className="dot one"></div>
                        <div className="dot two"></div>
                        <div className="dot three"></div>*/}
                        {/* <div className="brackets"></div> */}
                        <div className="innerStuff">
                            <div className="place">{this.state.wApi.name}</div>                        
                            <div className="degrees"><span>{this.state.wApi.main.temp}&#8451;</span></div>
                            <div className="status">{this.state.wApi.weather[0].main}</div>
                            <div className="withIcons">
                                <div className="humid"><img alt="" src={humid}/><br/><span>{this.state.wApi.main.humidity}%</span><br/><p>Humidity</p></div>
                                <div className="wind"><img alt="" src={wind}/><br/><span>{this.state.wApi.wind.speed} m/s</span><br/><p>Wind</p></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="weatherColumn">
                        <div className="temp"><span>{this.state.wApi.main.temp_min} &#8451;</span>  <strong>{this.state.wApi.main.temp} &#8451;</strong> <span>{this.state.wApi.main.temp_max} &#8451;</span></div>
                    </div>
                    <div className="weatherColumn wcCenter">
                        <div className="iconDesc">{this.state.wApi.weather[0].main}</div>
                        <div className="icon"><img alt="" src={"http://openweathermap.org/img/w/" + this.state.wApi.weather[0].icon + ".png"}/></div>
                        <div className="city">{this.state.wApi.name}</div>
                    </div>
                    <div className="weatherColumn">
                        <div className="weatherDetails">
                            <ul>
                                <li><img alt="" src={humid}/><span>{this.state.wApi.main.humidity}</span>% humidity </li>
                                <li><img alt="" src={wind}/><span>{this.state.wApi.wind.speed}</span> m/s NW </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            );
        }
        else{
            return(
                <div id="weatherContainer" className="roundWeather">
                    <div className="outerRing">
                        <div className="lds-ripple">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Weather;