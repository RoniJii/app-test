import './App.css';
import React, {useState} from "react";
import Button from '@material-ui/core/Button';

function App() {
    const [Age, setAge] = useState(0);
    const [upper, setUpper] = useState(0);
    const [lower, setLower] = useState(0);
    
    function handlesubmit(e){
        e.preventDefault()
        setUpper((200 - Age) * 0.85);
        setLower((200 - Age) * 0.65);

    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <h2>
                        Calories
                    </h2>
                </div>
        <div>
            <div><label>age</label></div>
            <input type="number" onChange={e => setAge(e.target.value)} value={Age}/>
        </div>
        <div>
        <div><label>Heart Rate Limit</label></div>
        <div>
            <output>{lower} - {upper}</output>
        </div>
        
        </div>
 
        <div><Button variant="contained" type="submit" color="primary">Calculate</Button> </div>
            </form>
        </div>
    )
}
export default App;