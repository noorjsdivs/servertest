import React, { useState } from 'react';
import image1 from '../../../assets/exercise1.jpg';
import image2 from '../../../assets/exercise2.jpg';
import image3 from '../../../assets/exercise3.jpg';
import image4 from '../../../assets/exercise4.jpg';
import image5 from '../../../assets/exercise5.jpg';
import image6 from '../../../assets/exercise6.jpg';
import ActivityCart from '../ActivityCart/ActivityCart';

import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Main.css'
const Main = () => {
    const [activityCart, setActivityCart] = useState([]);
    const exercises = [
        {
            id: 1,
            name: "Landmine Lunge",
            time: 30,
            image: image1
        },
        {
            id: 2,
            name: "Squat Barbell",
            time: 20,
            image: image2
        },
        {
            id: 3,
            name: "Side Plank",
            time: 25,
            image: image3
        },
        {
            id: 4,
            name: "Corner Plank",
            time: 20,
            image: image4
        },
        {
            id: 5,
            name: "Plyomeet",
            time: 35,
            image: image5
        },
        {
            id: 6,
            name: "Dumbling",
            time: 40,
            image: image6
        },
    ];
    const handleAddToCart = (exercise) => {
        const newActivityCart = [...activityCart, exercise];
        setActivityCart(newActivityCart);
    }
    return (
        <div className=' main'>
            <div className='mx-10 lg:mx-0'>
                <ActivityCart activityCart={activityCart}></ActivityCart>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 lg:mt-[120px]'>
                {exercises.map(exercise => <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    handleAddToCart={handleAddToCart}
                ></ExerciseCard>)}
            </div>

        </div>
    );
};

export default Main;