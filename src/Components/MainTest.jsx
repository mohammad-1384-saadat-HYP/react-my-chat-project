import React, {Component} from 'react';
import HeadingTest from "./HeadingTest";
import BodyTest from "./BodyTest";
import FooterTest from "./FooterTest";

class MainTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "chat",
            chatList: [
                {
                    type: "sent",
                    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                    time: "11:37:08 am",
                },
                {
                    type: "received",
                    text: "Lorem ipsum dolor sit amet, sit amet, sit amet, sit amet, sit amet, sit amet,",
                    time: "11:39:57 am",
                },
                {
                    type: "sent",
                    text: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,",
                    time: "11:40:10 am",
                },
            ],
            avatars: {
                user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
                user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
            }
        }
    }

    addTextFun = text => {
        this.setState(prevState => {
            return {
                ...prevState,
                chatList: [
                    ...prevState.chatList,
                    {type: "sent", text: text, time: new Date().toLocaleTimeString(),}
                ],
            }
        })
    }

    render() {
        return (
            <div className="container bootstrap snippets">
                <div className="col-md-7 col-xs-12 col-md-offset-2">
                    <div className="panel" id="chat">
                        <HeadingTest title={this.state.title}/>
                        <BodyTest chatList={this.state.chatList} avatars={this.state.avatars}/>
                        <FooterTest addTextFun={this.addTextFun}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainTest;