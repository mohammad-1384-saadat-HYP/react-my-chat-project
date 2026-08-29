import React from 'react';
import Chat from "./Chat";

const Body = (props) => {
    return (
        <div className="panel-body">
            <div className="chats">{
                props.chatList.map((chat, index) => {
                    const isLeft = "received" === chat.type;
                    return <Chat
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

export default Body;