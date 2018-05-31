import React from 'react';
import gear from './img/gear.png';
import news from './img/news-icon.png';
import note from './img/note-icon.png';
import save from './img/download.png';

class Clicker extends React.Component{
    constructor(props){
        super(props);
        this.onTap = this.onTap.bind(this);
    }
    onTap(){
        if(this.props.id == "btnSettings"){
            var settingTab = document.getElementById("settingTab");
            if(settingTab.classList.contains("hidden") || settingTab.classList.contains("hidden2")){
                settingTab.classList.remove("hidden");
                settingTab.classList.remove("hidden2");                
                settingTab.className += " showing";
            }
            else if(settingTab.classList.contains("showing")){
                settingTab.classList.remove("showing");                
                settingTab.className += " hidden";

                var leftPan = document.getElementById('leftPan');
                var downPan = document.getElementById('downPan');

                leftPan.childNodes.forEach((child)=>{
                    child.classList.remove("selected");
                });
                
                downPan.childNodes.forEach((child)=>{
                    if(!child.classList.contains("noShow"))
                    {
                        child.classList +=(" noShow");
                    }
                });
            }
            else{
                
            }
        }
        if(this.props.id == "btnNews"){
            var newspad = document.getElementById("newsTab");
            if(newspad.classList.contains("hideNews") || newspad.classList.contains("hideNews2")){            
                newspad.classList.remove("hideNews");
                newspad.classList.remove("hideNews2");                
                newspad.className += " showNews";
            }
        }
        if(this.props.id == "btnImg"){
            var win = window.open(this.props.down, '_blank');
            win.focus();
        }
        if(this.props.id == "btnNote"){
            var notepad = document.getElementById("noteTab");
            if(notepad.classList.contains("noteHide") || notepad.classList.contains("noteHide2")){            
                notepad.classList.remove("noteHide");
                notepad.classList.remove("noteHide2");                
                notepad.className += " noteShow";
            }
            else if(notepad.classList.contains("noteShow")){
                notepad.classList.remove("noteShow");
                notepad.className += " noteHide";
            }
            else{

            }
        }
    }
    render(){
        if(!navigator.onLine && this.props.id == "btnImg"){
            return(
                <div className={this.props.sty}>
                    <img id={this.props.id} alt="" src={this.props.src} height="30px" width="30px"/>
                    <div className="tooltiptext">No background image without internet</div>
                </div>
            );
        }
        else if(!navigator.onLine && this.props.id == "btnNews"){
            return(
                <div className={this.props.sty}>
                    <img id={this.props.id} alt="" src={this.props.src} height="30px" width="30px"/>
                    <div className="tooltiptext">News can't work without internet</div>
                </div>
            );
        }
        else{
            return(
                <div className={this.props.sty}>
                    <img id={this.props.id} alt="" src={this.props.src} height="30px" width="30px" onClick={this.onTap} />
                    <div className="tooltiptext">{this.props.tip}</div>
                </div>
            );
        }
    }
}


class Buttons extends React.Component{
    constructor(props){
        super(props);
        // this.onSettingsClick = this.onSettingsClick.bind(this);
        // this.onNewsClick = this.onNewsClick.bind(this);
        // this.onNoteClick = this.onNoteClick.bind(this);        
    }
    render(){
        return(
            <div className="controlsDiv">
                <Clicker tip="Settings" sty="tooltip" id="btnSettings" src={gear} />
                <Clicker tip="Open News" sty="tooltip" id="btnNews" src={news} />
                <Clicker tip="Open Note" sty="tooltip" id="btnNote" src={note} />
                <Clicker tip="Get background" sty="tooltip" id="btnImg" src={save} down={this.props.download} />                
            </div>
        );
    }
}

export default Buttons;