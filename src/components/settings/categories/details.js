import React from 'react';
import find from './images/go.svg';

class Details extends React.Component{
    constructor(props){
        super(props);
        // this.state ={
        //     classes:""
        // }
    }
    cityChanged(e){
        var cityName;
        cityName = document.getElementById('txtClimateLoc').value;
        this.props.bindCity(cityName);
    }
    componentDidMount(){
        if(this.props.eType == this.props.display){
            var det = document.getElementById(this.props.eType);
            det.classList.remove("noShow");
        }
    }
    render(){
        var idesc = "desc"+this.props.eType;
        if(this.props.eType == "News"){
            return(
                <div id={idesc} className="details noShow">
                    <div className="descContent">
                        <span>{this.props.eType}</span>
                        <hr/>
                        <div className="field">
                            <div className="txt">Show News</div>
                            <label className="container">
                                <input type="checkbox" ref={(input) => this.input = input}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="field">
                            <div className="txt">Default Screen</div>
                            <label className="container">
                                <input type="checkbox" ref={(input) => this.input = input}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                );
        }
        else if(this.props.eType == "Weather"){
            return(
                <div id={idesc} className="details noShow">
                    <div className="descContent">
                        <span>{this.props.eType}</span>
                        <hr/>
                        <div className="field">
                            <div className="txt">Show Weather</div>
                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="field">
                            <div className="txt">Your City</div>
                            <div id="weatherBox" className="go">
                                <input type="text" id="txtClimateLoc" name="txtClimateLoc" />
                                <div className="btnWcity" onClick={this.cityChanged.bind(this)} ><img src={find} alt="search"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.props.eType == "Time"){
            return(
                <div id={idesc} className="details noShow">
                    <div className="descContent">
                        <span>{this.props.eType}</span>
                        <hr/>
                        <div className="field">
                            <div className="txt">Show Time</div>                        
                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.props.eType == "Note"){
            return(
                <div id={idesc} className="details noShow">
                    <div className="descContent">
                        <span>{this.props.eType}</span>
                        <hr/>
                        <div className="field">
                            <div className="txt">Show Notepad</div>                        
                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.props.eType == "Social"){
            return(
                <div id={idesc} className="details noShow">
                    <div className="descContent">
                        <span>{this.props.eType}</span>
                        <hr/>
                        <div className="field">
                            <div className="txt">Show Social Icons</div>                        
                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.props.eType == "Quotes"){
            return(
                <div id={idesc} className="details noShow">
                    <div className="descContent">
                        <span>{this.props.eType}</span>
                        <hr/>
                        <div className="field">
                            <div className="txt">Show Quotes</div>                        
                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.props.eType == "Reset"){
            return(
                <div id={idesc} className="details noShow">
                    <div className="descContent">
                        <span>{this.props.eType}</span>
                        <hr/>
                        <div className="field">
                            <div className="txt">Reset All</div>
                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div id={idesc} className="details noShow">
                    <div className="descContent">
                        <span>{this.props.eType}</span>
                        <hr/>
                        <div className="field">
                            <div className="txt">(*.*)</div>                        
                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Details;