import React from 'react';
import Card from './Card/card.js';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: "",
            data1: "",
            data2: "",
            data3: ""
        }
        this.hideNews = this.hideNews.bind(this);
    }
    hideNews() {
        var newspad = document.getElementById("newsTab");
        if (newspad != null && newspad.classList.contains("showNews")) {
            newspad.classList.remove("showNews");
            newspad.className += " hideNews";
        }
    }
    componentWillMount() {
        let cc = this;
        var req = new Request("https://newsapi.org/v2/top-headlines?country=us&apiKey=38f90da811ac4deb8486698e997fe0c6");
        fetch(req)
            .then(data => data.json())
            .then(data => {
                //console.log(data);
                if (data.status == "ok") {
                    cc.setState({ response: data });     // update state variable
                }
                else {
                    cc.setState({ response: "err" });      // update state variable                            
                }
            }).catch(() => {
                cc.setState({ response: "err" });      // update state variable            
            })
    }
    render() {
        var dx = this.state.response.articles;
        if (!navigator.onLine) {
            return (
                <div id="newsTab" className="NoNews hideNews2">
                    <div>Connection to internet is a necessity to enjoy this view</div>
                </div>
            );
        }
        else if (this.state.response == "err") {
            return (
                <div id="newsTab" className="NoNews hideNews2">
                    <div className="close" onClick={this.hideNews}>
                        <i className="material-icons">chevron_left</i>
                        <span>NEWS</span>
                    </div>
                    <div>Apologies.. The news provider is having mood swings.</div>
                    <div>We may have to pay him under the table.. it could take a while.</div>
                </div>
            );
        }
        else {
            if ((dx === undefined) || (dx == "")) {
                return (
                    <div id="newsTab" className="hideNews2">
                    </div>
                );
            }
            else {
                return (
                    <div id="newsTab" className="News hideNews2">
                        <div className="close" onClick={this.hideNews}>
                            <i className="material-icons">chevron_left</i>
                            <span>NEWS</span>
                        </div>
                        <div className="cardHolder">
                            {dx.map(dat => <Card key={dat.url} ary={dat} />)}
                        </div>
                    </div>
                );
            }
        }
    }
}

export default News;