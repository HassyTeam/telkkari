import { appWindow } from '@tauri-apps/api/window';
import ReactPlayer from 'react-player'
import React, { useState } from 'react';
import json from "./confs/playlists.json"


{/* test source --> "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" */}

export default function Start() {

    var [stream, setStream] = useState("https://yletv.akamaized.net/hls/live/622365/yletv1fin/index.m3u8")
    console.log("new run")
    return (
        <div className='player-wrapper'>
            {/* debug buttons */}
            {/* <SimpleButton label="yle" onClick={() => setStream(stream="https://yletv.akamaized.net/hls/live/622365/yletv1fin/index.m3u8")} />  
            <SimpleButton label="test 2" onClick={() => setStream(stream="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8")} /> */}
            {/* <Log props={stream} /> */}
            <ReactPlayer className="react-player" width="100%" height="100vh" muted={true} playing={true} url={stream}/>
            <Sidebar />
        </div>
    )
}

function Sidebar() {
    //const [playlists, setPlaylists] = useState([])
    

    return (
        <section className='sidebar'>
            <h1>Channels</h1>
            <>
            {json.map(function(data) {
                return (
                    <h1>{data}</h1>
                )
            })}
            </>
        </section>
    );
}

// why did we choose rust for this project

function NewChannel({ props }) {
return (
    <p>{props.playlist}</p>
);
}

function Log(props) {
    console.log({props})
}