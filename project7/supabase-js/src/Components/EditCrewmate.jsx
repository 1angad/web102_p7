import React from "react";
import { useState } from "react";
import { supabase } from "../client.js";

const EditCrewmate = () => {

    const [crewmate, setCrewmate] = useState({name: "", speed: "", color: ""})

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newCrewmate = crewmate;
        console.log(newCrewmate);

        const { error } = await supabase
            .from('crewmates')
            .insert({name: newCrewmate.name, speed: newCrewmate.speed, color: newCrewmate.color})
            .select()

        if (error) {
            console.log(error);
        }

        window.location = "/";
        
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const colors = ["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "Rainbow"];

    return (
        <>
            <h1>Update Your Crewmate!</h1>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" height="100px" width="auto"/>
            
            <form className="form-container">
                <div className="mini-container">
                    <h3>Name</h3>
                    <input type="text" id="name" name="name" value={crewmate.name} placeholder="Enter crewmate's name" onChange={handleChange}/>
                </div>
                <div className="mini-container">
                    <h3>Speed (mph)</h3>
                    <input type="text" id="speed" name="speed" value={crewmate.speed} placeholder="Enter speed in mph" onChange={handleChange}/>
                </div>
                <div className="mini-container">
                    <h3>Color</h3>
                    {colors.map((color, index) => (
                    <div key={index}>
                        <input
                        type="radio"
                        id={color}
                        name="color"
                        value={color}
                        onChange={handleChange}
                        />
                        <label htmlFor={color}>{color}</label>
                    </div>
                    ))}
                </div>
            </form>
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </>
    );

}

export default EditCrewmate;