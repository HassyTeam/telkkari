import { appWindow } from '@tauri-apps/api/window';
import ReactPlayer from 'react-player'
import { createContext } from 'react';

{/* test source --> "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" */}

export default function Start() {
    return (
        <div>
            <SimpleButton label="yle" onClick={Yle} />  
            <SimpleButton label="test 2" onClick={Test2} />
            <Player />
        </div>
    )
}

function Player() {
    var stream = Stream();
    console.log (stream)
    return (
        <ReactPlayer muted={true} playing={true} url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"/>
    )
}

function SimpleButton(props) {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    )
}

function Stream(props){
    var stream = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    if(props == null){
        return({stream})
    }else{
        stream={props}
        console.log(stream)
    }
}

function Yle() {

}

function Test2() {
    
}

function Log(props) {
    console.log({props})
}