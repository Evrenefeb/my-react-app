import { useState } from "react";


function MyComponent2() {

    const [foods, setFoods] = useState(["Pizza", "Burger", "Tacos", "Pasta"]);

    function handleAddFood(){
        const foodInputobj = document.getElementById("foodInput");
        const newFood = foodInputobj.value;

        foodInputobj.value = "";
        setFoods(f => ([...f, newFood]));
    };

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    };


    return (
        <div>
            <h1>List of Foods</h1>
            <ul>
                {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
            </ul>

            <br></br>
            <input type="text" placeholder="Enter Food Name" id="foodInput"/>
            <button onClick={handleAddFood}>Add Food</button>

        </div>
    );
}

export default MyComponent2;