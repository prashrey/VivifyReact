import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock/Clock.js'
import registerServiceWorker from './registerServiceWorker';
import Weather from './components/weather/weather.js'
import Social from './components/social/stack.js'
import Controls from './components/controls/buttons.js'
import Note from './components/notepad/note.js';
import News from './components/news/news.js';
import Settings from './components/settings/configure.js';

class Rvivify extends React.Component{
    constructor(props) {
        super(props);                           // Mandatory!!! similar to super constructor call in java
        this.state = {
            imageUrl: "",
            property: "",
            weatherLocation: "Ghaziabad"
        };
    }
    weatherChanged(cityName){
        this.setState({weatherLocation: cityName});        
    }
    componentWillMount(){        
        let strUri;
        let cc = this;
        fetch("https://picsum.photos/1080/720/?random")
        .then(resp => {
            strUri = "url(" + resp.url + ")";
            cc.setState({property: strUri});      // update state variable
            cc.setState({imageUrl: resp.url});      // update state variable            
        }).catch(() => {
            strUri = "linear-gradient(40deg, #2096ff, #05ffa3)";            
            cc.setState({property: strUri});      // update state variable            
        })

        
    }
    render(){
        return (
            <div>
            <Settings weatherChanged={this.weatherChanged.bind(this)}/>
                <div id="wall" style={{background: this.state.property}}>
                    <Controls download={this.state.imageUrl}/>
                    <Note/>
                    <Clock />
                    <Weather city={this.state.weatherLocation}/>
                    {/* <Quote/> */}
                    <Social/>
                </div>
            <News/>
        </div>            
        )
    };
};

ReactDOM.render(<Rvivify/>, document.getElementById('mainx'));

registerServiceWorker();