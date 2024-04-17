import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./Mealitem";

function Meals() {
    const [meals, setMeals] = useState([])
    const getMeals = async() => {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
            
        }

        const mealsData = response.json();
        mealsData.then((data) => {

            // console.log(data);
            setMeals(data);
        })
        return mealsData;
    }

    useEffect(() => {
        getMeals()
    }, [])
    


    return ( <ul id="meals">
        { meals.map((meal) => {
            return <MealItem key={meal.id} item={ meal } />
        })}
    </ul> );
}

export default Meals;