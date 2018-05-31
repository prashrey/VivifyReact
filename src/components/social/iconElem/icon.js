import React from 'react';

class Icon extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className="IconDiv">
                <div className={this.props.nameClass}>
                    <a href={this.props.url}>
                    <div id="container">
                        <div id="halfclip">
                            <div className="halfcircle" id="clipped">
                            </div>
                        </div>
                        <div className="halfcircle" id="fixed">
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Icon;