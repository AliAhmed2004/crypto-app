import React, {useState} from 'react'
import './App.scss';


const App = () => {
    const [text, setText] = useState('')
    const [clicked, setClick] = useState(false)
    
    const editText = (event) => {
        setText(event.target.value)
    }

    const toggleView = () => {
        setClick(!clicked)
    }
    
    return (
        <div className="App">
            <h1 className="text-hibah">
                Test
            </h1>
            <h2 className="text-hibah">
                something else
            </h2>
            <input onInput={editText} />
            <button className="hibah-button" onClick={toggleView}>
                Click!
            </button>
            {clicked ? text : ''}
        </div>
    );
};

export default App;
