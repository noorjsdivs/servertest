import React, { useState } from 'react';
import ExerciseActivity from '../ExerciseActivity/ExerciseActivity';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import image1 from '../../../assets/exercise1.jpg';
import image2 from '../../../assets/exercise2.jpg';
import image3 from '../../../assets/exercise3.jpg';
import image4 from '../../../assets/exercise4.jpg';
import image5 from '../../../assets/exercise5.jpg';
import image6 from '../../../assets/exercise6.jpg';


const Exercise = () => {
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
    ]

    const handleAddToCart = (exercise) => {
        const newActivityCart = [...activityCart, exercise];
        setActivityCart(newActivityCart);
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='grid grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>
                {exercises.map(exercise => <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    handleAddToCart={handleAddToCart}
                ></ExerciseCard>)}
            </div>
            <div className='mx-10 md:mx-0'>
                <ExerciseActivity activityCart={activityCart}></ExerciseActivity>
            </div>
        </div>
    );
};

export default Exercise;