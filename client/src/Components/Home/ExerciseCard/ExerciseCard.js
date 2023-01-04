import React from 'react';

const ExerciseCard = ({ exercise, handleAddToCart }) => {
    const { name, time, image } = exercise;
    return (
        <div className="card w-68 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Time required: {time}s</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(exercise)} className="btn btn-accent text-white w-full">Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard