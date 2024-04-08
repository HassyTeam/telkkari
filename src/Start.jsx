import { appWindow } from '@tauri-apps/api/window';
import ReactPlayer from 'react-player'
import React, { useState } from 'react';

var stream = null;

{/* test source --> "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" */}

export default function Start() {

    var [stream, setStream] = React.useState("https://yletv.akamaized.net/hls/live/622365/yletv1fin/index.m3u8")

    return (
        <div className='player-wrapper'>
            {/* debug buttons */}
            {/* <SimpleButton label="yle" onClick={() => setStream(stream="https://yletv.akamaized.net/hls/live/622365/yletv1fin/index.m3u8")} />  
            <SimpleButton label="test 2" onClick={() => setStream(stream="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8")} /> */}
            <Log props={stream} />
            <ReactPlayer className="react-player" width="100%" height="100vh" muted={false} playing={true} url={stream}/>
        </div>
    )
}

function SimpleButton(props) {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    )
}

function Log(props) {
    console.log({props})
}