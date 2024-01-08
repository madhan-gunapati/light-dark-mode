import { useState } from "react"

import './index.css'

const Home = ()=>{
    const [mode , setMode] = useState(true)
    function changeMode(){
        setMode((p)=>!p)
    }
return <div className={mode? 'home-container' : 'home-dark-container'}>
    <h1>Click To Change Mode</h1>
    <button type='button' onClick={changeMode}>{mode? 'Dark Mode' : 'Light Mode'}</button>
</div>
}

export default Home