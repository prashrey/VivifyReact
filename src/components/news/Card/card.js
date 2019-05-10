import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let url = "url(" + this.props.ary.urlToImage + ")";
        let head = this.props.ary.title.toUpperCase();
        if(head.length > 90){
            head = head.substring(0,89)+"..";
        }
        let stamp = this.props.ary.publishedAt.substring(0,9);
        var description = this.props.ary.description;
        if( description != null && description.length>140){
            description = description.substring(0,119)+"..";
        }
        return(
            <div className="cardParent">
                <img className="card0" src={url.substring(4,url.length-1)} />
                <div className="cardBody">
                    <div className="title0"><a href={this.props.ary.url}>{head}</a></div>                
                    <div className="desc">{description}</div>
                </div>
            </div>
        );
    }
}

export default Card;