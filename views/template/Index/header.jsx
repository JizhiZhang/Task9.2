import React, {
    Component
} from 'react'
/**
 *
 * @ author: 
 * @ email: 
 * @ date: 2020-09-19 21:20
 */

export default function index(){
    return (
        <div className="guide fn-clear">
            <span className="logo fl">
                Home
            </span>
            <a href="" className="login fr">Login</a>
            <span className="serchbox fr">
                <input type="text"></input>
                <a href="" className="searchbtn">
                    <img src="/images/search.png" alt=""></img>
                </a>
            </span>
            <ul className="fr">
                <li className="fl"><a href="">Shop</a></li>
                <li className="fl"><a href="">News</a></li>
                <li className="fl"><a href="">Knowledge</a></li>
                <li className="fl"><a
                        href="">Skill</a>
                </li>
            </ul>
        </div>
    )  
}

export default index