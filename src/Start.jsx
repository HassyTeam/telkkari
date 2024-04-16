import { appWindow } from '@tauri-apps/api/window';
import ReactPlayer from 'react-player'
import React, { useState } from 'react';
import json from "./confs/playlists.json"

var json_playlists = json

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
            <ReactPlayer className="react-player" width="100%" height="100vh" muted={false} playing={true} url={stream}/>
            <Sidebar playlists={json_playlists} />
        </div>
    )
}

function Sidebar({ json_playlists }) {
    for (var prop in json_playlists) {
        //console.log("Prop: " + prop)
        //console.log("Key:" + prop);
        var id = prop
        var name = json_playlists[prop]["name"]
        var propstream = json_playlists[prop]["stream"]
        //console.log(propstream)
        //console.log("Value:" + value);
        setPlaylistsFunc(args={ "id": id, "name": "'"+name+"'", "stream": "'" + propstream + "'" })
    }

    console.log(setPlaylistsFunc(query = "return"))
    return (
      <section className='sidebar'>
        {/* Not working yet, expected behaviour 
        {channels.map(channel =>
          <NewChannel channel={value} />
        )}
        */}
      </section>
    );
}


// !!IMPORTANT!! This is a standard JS function, dont use props.args, just use args
function setPlaylistsFunc({props}) {
    const [playlists, setPlaylists] = useState([])

    if({props.query}="return"){
        return(
            playlists
        )
    } else{
        setPlaylists([...playlists, {props.args} ])
    }
}

function NewChannel({ props }) {
return (
    <p>{props.id}</p>
);
}

function Log(props) {
    console.log({props})
}