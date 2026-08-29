import React from 'react';
import ChatTest from "./ChatTest";

const BodyTest = (props) => {
    return (
        <div className="panel-body">
            <div className="chats">{
                props.chatList.map((chat, index) => {
                    const isLeft = "received" === chat.type;
                    return <ChatTest
                        key={index}
                        isLeft={isLeft}
                        avatar={isLeft ? props.avatars.user2 : props.avatars.user1}
                        text={chat.text}
                        time={chat.time}/>
                })
            }</div>
        </div>
    );
};

export default BodyTest;