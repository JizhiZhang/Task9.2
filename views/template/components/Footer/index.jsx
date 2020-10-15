
import React from 'react'

const Back = {
    width:'100%',
    height: '80px ',
    // border:'0px #666 solid',
    backgroundColor:'rgba(192,192,192,0.5)',
    float:'left'
}

const title = {
    margin:'30px 20px 10px 10px',
    fontSize:'20px',
    float:'left',
    marginLeft:'200px'
}

const input = {
    marginRight:'15px',
    marginBottom:'50px',
    marginTop:'20px',
    width:'300px',
    float:'left'
}
const button = {
    fontSize:'15px',
    marginTop:'15px',
    width:'110px',
    backgroundColor:'rgba(125,213,125,1)',
    float:'left',
}

const Strong = {
    fontSize:'20px',
    float:'left',
    margin:'30px 20px 10px 10px',
    marginLeft:'100px'
}

const lable = {
    marginLeft:'15px',
    width:'40px',
    height:'40px',
    float:'left',
    margin:'25px 20px 10px 10px'
}

function index(){
    return(
        <div>
        <div style = {Back}>
            <strong style = {title}>NEWSLETTER SIGN</strong>
            <input style = {input}  placeholder = 'Enter your email'></input>
            <button style = {button}>Subscribe</button>
            <strong style = {Strong}>CONNECT US</strong>
            <img style = {lable} src='/images/facebook.png'></img>
            <img style = {lable} src='/images/twitter.jpg'></img>
            <img style = {lable} src='/images/ins.jpg'></img>
        </div>
        </div>
    )
}

export default index