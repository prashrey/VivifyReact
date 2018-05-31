import React from 'react';
import Icon from './iconElem/icon.js'

class Stack extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className="socialDiv">
                    <Icon nameClass="twitter" url="https://twitter.com/"/>            
                    <Icon nameClass="linkedin" url="https://linkedin.com/"/>
                    <Icon nameClass="facebook" url="https://www.facebook.com/"/>
                    <Icon nameClass="youtube" url="https://www.youtube.com/"/>
                    <Icon nameClass="gmail" url="https://mail.google.com"/>
            </div>
        );
    }
}

export default Stack;