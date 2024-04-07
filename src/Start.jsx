import { appWindow } from '@tauri-apps/api/window';

export default function Start() {
    return (
        <div>
            <SimpleButton label="test" onClick={ToggleFullscreen} />
        </div>
    )
}

function SimpleButton(props) {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    )
}

function ToggleFullscreen() {
    
}