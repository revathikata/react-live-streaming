import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// install    -   npm install @zegocloud/zego-uikit-prebuilt
const LiveStreamApp = () => {
    const [roomcode, setroomCode] = useState('')
    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomcode}`)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="">Enter Room code</label>
                    <input type="text" required
                        placeholder='Enter room code'
                        value={roomcode}
                        onChange={(e) => setroomCode(e.target.value)} />
                    <button type='submit'>Enter Room</button>
                </div>
            </form>
        </div>
    )
}

export default LiveStreamApp