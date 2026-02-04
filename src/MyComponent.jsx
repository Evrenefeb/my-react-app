import React, { useState } from "react";


function MyComponent() {

    let [name, setName] = useState();
    
    let [newName, setNewName] = useState();

    return (
       <div>

            <p>Name: {name}</p>
            <input type="text" onChange={(e) => setNewName(e.target.value)} />
            <button onClick={() => setName(newName)}>Change Name</button>
            <button onClick={() => setName("")}>Reset</button>


       </div>
    );
}

export default MyComponent;