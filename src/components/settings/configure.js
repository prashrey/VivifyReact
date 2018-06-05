import React from 'react';
import Elem from './categories/element.js';
import Details from './categories/details.js';

class Settings extends React.Component{
    constructor(props){
        super(props);
        // this.bindMenus = this.bindMenus.bind();
        this.state ={
            toggle: '',
            wCity:""
        };
    }
    bindCity(cName){
        this.props.weatherChanged(cName);
    }
    bindMenus(menu){
        this.setState({toggle: menu});
    }
    render(){
        //#4299fa blue color
        return(
            <div id="settingTab" className="floatingConfig hidden2">
                <div className="setPosition">
                    <div className="tri"></div>
                    <div className="content">
                        <div id="leftPan" className="leftPanel">
                            <Elem eIcon="dashboard" eName="News" bindMenus={this.bindMenus.bind(this)} />
                            <Elem eIcon="cloud_queue" eName="Weather" bindMenus={this.bindMenus.bind(this)} />
                            {/* <Elem eIcon="query_builder" eName="Time" bindMenus={this.bindMenus.bind(this)} /> */}
                            <Elem eIcon="assignment" eName="Note" bindMenus={this.bindMenus.bind(this)} />
                            <Elem eIcon="bubble_chart" eName="Social" bindMenus={this.bindMenus.bind(this)} />
                            <Elem eIcon="format_quote" eName="Quotes" bindMenus={this.bindMenus.bind(this)} />
                            {/* <Elem eIcon="autorenew" eName="Reset" bindMenus={this.bindMenus.bind(this)} /> */}
                        </div>
                        <div id="downPan" className="rightPanel">
                            <Details eType="News" display={this.state.toggle} />
                            <Details eType="Weather" display={this.state.toggle} bindCity={this.bindCity.bind(this)}/>
                            {/* <Details eType="Time" display={this.state.toggle} /> */}
                            <Details eType="Note" display={this.state.toggle} />
                            <Details eType="Social" display={this.state.toggle} />
                            <Details eType="Quotes" display={this.state.toggle} />
                            {/* <Details eType="Reset" display={this.state.toggle} /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;