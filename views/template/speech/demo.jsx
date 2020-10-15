import React,{useState,useEffect} from "react";
import axios from "axios";
/* 将组件改变成函数写法 */
export default function speech() {
    const [file, setfile] = useState("");/* 选择文件 */
    const [result, setresult] = useState("");/* 数据加载状态 */
    const [list, setlist] = useState([]);/* 数据加载状态 */
    const [loading, setloading] = useState(false);/* 加载状态 */
    useEffect(() => {
        formlist()
      }, [])
    function changefile(e) {
        let file = e.target.files[0];
        console.log(file);
        return setfile(file);
    }
    function submitfile() {
        console.log(file)
        if (file == "") {
            setresult("pleace choose your file");
            return false;
            
        }
        setloading(true)
        let formData = new FormData();
        formData.append('avatar',  file);
        // let xhr = new XMLHttpRequest();
        setresult("loading");
        axios.post('/file',formData)
            .then((res) => {
                setloading(false)
                console.log(res.data.message.result.results[0].alternatives[0].transcript)
                setresult(res.data.message.result.results[0].alternatives[0].transcript);
            })
            .catch((err) => {
                setloading(false)
                console.log(err)
                setresult(err);
        })
        // xhr.open('POST', '/file');
        // xhr.onload = function () {
        //     setloading(false)
        //     const datas = JSON.parse(xhr.response);
        //     if (datas.statusText != 'ECONNRESET') {
        //         setresult(datas.message.result.results[0].alternatives[0].transcript);
        //     } else {
        //         setresult('fail restart');
        //     }
            
        // }
        // xhr.send(formData);
    }
    /* 保存文字信息 */
    function savetxt() {
        setloading(true)
        axios.post('/user/add', {
            desc:result
        })
        .then((res)=>{
            setloading(false)
            console.log(res);
            formlist()
            console.log('fadsadfs')
        }
        )
        .catch((err) => {
            setresult("error restart")
        })
    }
    /* 显示列表数据渲染 */
    function formlist() {
        setloading(true)
        axios.get('/user/findAll', {
            desc:result
        })
            .then(function (res) {
                setloading(false)
            // if (res.data.result == 'success') {
               
            // }
            setlist(res.data);
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });
        // setlist()
    }
    return (
        <div className="audio">
        <div>
            <h1 style={{textAlign:"left"}}>Audio</h1>
            <h2>a. Please choose a audio file (.flac)</h2>
            <span  className="file">choose
            <input type="file" onChange={changefile}/>
            </span>
            <br/>
            <button onClick={submitfile} className="runbtn" style={{background:"#20b960", color:"white"}}>Run</button>
            <h2 className="resulttxt">b. Converted Text:<br></br>{result == "" ? "" : result}</h2>
            
            <h2>c. Result</h2>
            <button onClick={savetxt} style={{background:"#20b960", color:"white", paddingLeft:"30px", paddingRight:"30px", marginTop:"30px", marginLeft:"80px"}}>Save</button>
            <div className="conlist">
            <ul className="conlist">
                {list.map((item,i) =>
                    <li key={i} style={{fontSize:"15px"}}>{item.desc}</li>
                )}
            </ul>
            </div>
            <div className={loading==true?"show loading":" loading"}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </div>
        </div>
    )
}
