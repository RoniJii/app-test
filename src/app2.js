import './App.css';
import React, {useState} from "react";

function App () {
    const [weight, setWeight] = useState(90);
    const [intencity, setIntencity] = useState(1.3);
    const [gender, setGender] =  useState("male");
    const [result, setResult] = useState(0)

    function handlesubit() {
        let calories = 0
        if (gender = "male") {
            calories = (879 + 10.2  * weight) * intencity;
        }
            else {
                calories = (795 + 7.18 * weight) * intencity ;
            }
           
            setResult(calories)
    }

    return(
        <>
            <h3>Calories</h3>
            <form onSubmit={handlesubit}>
                <div>
                    <label>Weight</label>
                    <input name="weight" type="number" step="1"></input>
                </div>
                <div>
                    <label>Intensity</label>
                    <select name="intencity">
                        <option value="1.3">Light</option>
                        <option value="1.5">Usual</option>
                        <option value="1.7">Moderate</option>
                        <option value="2">hard</option>
                        <option value="2.2">Very hard</option>
                    </select>
                </div>
                <div>
                    <label>Gender</label>
                    <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}> Male</input>
                    <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}> Female</input>
                </div>
                <div>
                <output>{result.toFixed(0)}</output>
                </div>
                <button>Calcualte</button>
            </form>
        </>
    )
}