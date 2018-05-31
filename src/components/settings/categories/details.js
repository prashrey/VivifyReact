import React from 'react';

class Details extends React.Component{
    constructor(props){
        super(props);
        // this.state ={
        //     classes:""
        // }
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
                        <div className="field">Show News
                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <span className="checkmark"></span>
                            </label>
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
                        <div className="field">Show News
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
                        <div className="field">Show News
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
                        <div className="field">Show News
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
                        <div className="field">Show News
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
                        <div className="field">Show News
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
                        <div className="field">Show News
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