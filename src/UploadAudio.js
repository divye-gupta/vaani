import React, {useState} from 'react'

const UploadAudio = () => {
    const [buttonName, setButtonName] = useState('Play')
    const [audio, setAudio] = useState();

    var a;

    if (audio) {
        a = new Audio(audio)
    }

    const handleClick = () => {
        if (buttonName === 'Play') {
            a.play()
            setButtonName('Pause')
        } else {
            a.pause()
            setButtonName('Play')
        }
    }

    const addFile = (e) => {
        const s = URL.createObjectURL(e.target.files[0])
        setAudio(s)
    }

    return (
        <div>
            <button onClick={handleClick}>Upload your audio</button>
            <input type='file' onChange={addFile} />
        </div >
    )
}

export default UploadAudio