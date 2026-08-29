import React, {Component} from 'react';
import Heading from "./Heading";
import Body from "./Body";
import Footer from "./Footer";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "chat",
            chatList: [
                {
                    type: "sent",
                    text: "Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, conseteturLorem ipsum dolor sit amet, consetetur",
                    time: "11:37:08 am"
                },
                {
                    type: "received",
                    text: "ipsumLorem ipsum dolor amet Lorem ipsum dolor siipsumLorem ipsum dolor amet Lorem ipsum dolor sit",
                    time: "11:39:57 am"
                },
                {
                    type: "sent",
                    text: "Lorem ipsum dolor sit amet consetetur sadipscingpsum dolor sit amet consetetur sadipscing elitr",
                    time: "11:40:10 am"
                },
            ],
            avatars: {
                user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
                user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
            }
        }
    }

    addTextFun = text => {
        this.setState(state => {
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {type: "sent", text, time: new Date().toLocaleTimeString()},
                ]
            }
        })
    }

    render() {
        return (
            <div className="container bootstrap snippets">
                <div className="col-md-7 col-xs-12 col-md-offset-2">
                    <div className="panel" id="chat">
                        <Heading title={this.state.title}/>
                        <Body chatList={this.state.chatList} avatars={this.state.avatars}/>
                        <Footer addTextFun={this.addTextFun}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;