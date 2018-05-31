import React from 'react';

class Note extends React.Component{
    constructor(props){
        super(props);
        this.hideNote = this.hideNote.bind(this);
    }
    hideNote(){
        var notepad = document.getElementById("noteTab");
        if(notepad.classList.contains("noteShow")){
            notepad.classList.remove("noteShow");
            notepad.className += " noteHide";
        }
    }
    render(){
        return(
            <div id="noteTab" className="zennable fadeOnLoad noteHide2">
                <div className="NotepadHeader">
                    <div className="NotepadBack" onClick={this.hideNote} ><i className="material-icons">chevron_right</i></div>
                    &nbsp;&nbsp;&nbsp;Notes
                </div>
                <div id="noteBackdrop" className="zen-backdrop">
                    <textarea id="headdingText" placeholder="Your Heading" maxLength="45"></textarea>
                    <hr />
                    <textarea id="note-text" placeholder="Write something here"></textarea>
                </div>
            </div>
        );
    }
}

export default Note;