import React, {
    Component
} from 'react'

class index extends Component {

    render() {
        return (
            <div className="guide fn-clear">
                <span className="logo fl">
                    iCrowdTask
                </span>
                <a href="https://infinite-hollows-91372.herokuapp.com/" className="login fr">Log In</a>
                <span className="serchbox fr">
                    <input type="text"></input>
                    <a href="" className="searchbtn">
                        <img src="/images/search.png" alt=""></img>
                    </a>
                </span>
                <ul className="fr">
                    <li className="fl"><a href="/index/index">Home</a></li>
                    <li className="fl"><a href="">Requester</a></li>
                    <li className="fl"><a href="">Worker</a></li>
                    <li className="fl"><a href="/index/pic">Image</a></li>
                    <li className="fl"><a href="/index/speech">Audio</a></li>
                    <li className="fl"><a href="/index/chat">Chatbox</a>
                    </li>
                </ul>
            </div>
        )   
    }
}

export default index