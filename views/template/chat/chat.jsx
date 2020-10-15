import React from "react";
export default function chat() {

    return (
        <div id="msonline-chat">

            <h1>Live ChatBox</h1>
            <div id="chat-window">
                <div id="output"></div>
                <div id="feedback"></div>
            </div>
            <input type="text" id="handle" placeholder="Username"/>
            <input type="text" id="message" placeholder="Message"/>
            <button id="send">Send</button>
        </div>
    )
}