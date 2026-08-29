import React from 'react';

const Chat = (props) => {
    return (
        <div className={`chat ${props.isLeft && "chat-left"}`}>
            <div className="chat-avatar">
                <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="">
                    <img src={props.avatar} alt="..."/>
                    <i></i>
                </a>
            </div>
            <div className="chat-body">
                <div className="chat-content">
                    <p>{props.text}</p>
                    <time className="chat-time" dateTime={props.time}>{props.time}</time>
                </div>
            </div>
        </div>
    );
};

export default Chat;