import { appWindow } from '@tauri-apps/api/window';
import ReactPlayer from 'react-player'
import React, { useState } from 'react';
import json from "./confs/playlists.json"

var stream = null;
var sidebar_playlists = []
var json_playlists = json

{/* test source --> "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" */}

export default function Start() {

    var [stream, setStream] = useState("https://yletv.akamaized.net/hls/live/622365/yletv1fin/index.m3u8")

    return (
        <div className='player-wrapper'>
            {/* debug buttons */}
            {/* <SimpleButton label="yle" onClick={() => setStream(stream="https://yletv.akamaized.net/hls/live/622365/yletv1fin/index.m3u8")} />  
            <SimpleButton label="test 2" onClick={() => setStream(stream="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8")} /> */}
            <Log props={stream} />
            <ReactPlayer className="react-player" width="100%" height="100vh" muted={false} playing={true} url={stream}/>
            <Sidebar playlists={json_playlists} />
        </div>
    )
}

function SimpleButton(props) {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    )
}

function Sidebar({ playlists }) {
    for (var prop in playlists) {
        //console.log("Prop: " + prop)
        //console.log("Key:" + prop);
        var id = prop
        var name = playlists[prop]["name"]
        var propstream = playlists[prop]["stream"]
        //console.log(propstream)
        //console.log("Value:" + value);
    }
    return (
      <section className='sidebar'>
        {/* Not working yet, expected behaviour */}
        {channels.map(channel =>
          <NewChannel channel={value} />
        )}
      </section>
    );
}

function NewChannel({ props }) {
return (
    <p>{props.id}</p>
);
}

function Log(props) {
    console.log({props})
}