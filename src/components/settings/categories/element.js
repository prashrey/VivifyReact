import React from 'react';

class Elem extends React.Component{
    constructor(props){
        super(props);
    }
    open(name, e){
        // alert("Settings 1 Yay!");
        var leftPan = document.getElementById('leftPan');
        var downPan = document.getElementById('downPan');
        var idesc = document.getElementById('desc' + name);

        var isChild,isSelected;

        if(e.target.classList.contains("child")){
            isChild = 0;
        }
        else{
            isChild = 1;
        }

        leftPan.childNodes.forEach((child)=>{
            child.classList.remove("selected");
        });
        
        downPan.childNodes.forEach((child)=>{
            if(!child.classList.contains("noShow"))
            {
                child.classList +=(" noShow");
            }
        });
        
        if(isChild == 0){
            if(!e.target.parentElement.classList.contains("selected")){
                e.target.parentElement.classList += " selected";
                isSelected = true;
            }
            else{
                e.target.parentElement.classList.remove("selected");                
                isSelected = false;
            }
        }
        else{
            if(!e.target.classList.contains("selected")){
                e.target.classList += " selected";
                isSelected = true;
            }
            else{
                e.target.classList.remove("selected");                
                isSelected = false;                
            }
        }

        if(isSelected){
            idesc.classList.remove("noShow");
            if(name == "News"){
                this.props.bindMenus("News");
            }
            else if(name == "Weather"){
                this.props.bindMenus("Weather");
            }
            else if(name == "Time"){
                this.props.bindMenus("Time");
            }
            else if(name == "Note"){
                this.props.bindMenus("Note");
            }
            else if(name == "Social"){
                this.props.bindMenus("Social");
            }
            else if(name == "Quotes"){
                this.props.bindMenus("Quotes");
            }
            else if(name == "Reset"){
                this.props.bindMenus("Reset");
            }
            else{

            }
        }
        else{
            idesc.classList += " noShow";
            this.props.bindMenus("");
        }
    }
    render(){
        var iconName = this.props.eName;
        return(
            <div id={this.props.eName} onClick={this.open.bind(this, iconName)}>
                <i className="material-icons child">{this.props.eIcon}</i>
                <div className="setTip child">{this.props.eName}</div>
            </div>
        );
    }
}

export default Elem;