import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Exercise from '../../../Components/Home/Exercise/Exercise'


const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Exercise></Exercise>
        </div>
    );
};

export default Home;