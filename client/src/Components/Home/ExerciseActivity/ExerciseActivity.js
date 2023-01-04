import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import avatar from '../../../assets/jungkook.jpg'
import { getStoredTime } from '../utilities/FakeDb';

const ExerciseActivity = ({ activityCart }) => {

    const [breakTime, setBreakTime] = useState(0)

    let exerciseTime = 0;
    for (const exercise of activityCart) {
        exerciseTime = exerciseTime + exercise.time;
    }

    useEffect(() => {
        const storedTime = getStoredTime();

        setBreakTime(storedTime);

    }, [breakTime])

    const handleBreakTime = (time) => {
        setBreakTime(time);
        localStorage.setItem('break-time', time)

    }

    const activityComplete = () => {
        toast.success('Activity Completed')
    }

    return (
        <div className='mt-10 bg-slate-100 p-4 rounded-2xl shadow-2xl'>
            <div className="avatar flex justify-start items-start">
                <div className="w-24 rounded-full mr-5">
                    <img src={avatar} alt='' />
                </div>
                <div className='pt-5'>
                    <h3 className='text-xl font-bold'>Jeon Jungkook</h3>
                    <address>Seoul, South Korea</address>
                </div>
            </div>
            <div className='flex justify-between bg-white px-3 py-2 rounded-2xl mb-5'>
                <div>
                    <p className='text-2xl font-bold'>5.11</p>
                    <p>Height</p>
                </div>
                <div>
                    <p className='text-2xl font-bold'>72kg</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p className='text-2xl font-bold'>25yrs</p>
                    <p>Age</p>
                </div>
            </div>
            <p className='mb-5 font-bold text-xl'>Add A Break</p>
            <div className='bg-white px-3 py-2 rounded-2xl flex justify-between mb-8'>
                <button onClick={() => handleBreakTime(10)} className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">10s</button>
                <button onClick={() => handleBreakTime(20)} className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">20s</button>
                <button onClick={() => handleBreakTime(30)} className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">30s</button>
                <button onClick={() => handleBreakTime(40)} className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">40s</button>
                <button onClick={() => handleBreakTime(50)} className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">50s</button>
            </div>
            <p className='mb-5 text-xl font-bold'>Exercise Details</p>
            <div className='flex justify-between bg-white px-3 py-3 rounded-2xl mb-5'>
                <p className='font-bold'>Exercise Time</p>
                <p className='text-slate-500 font-bold'>{exerciseTime} seconds</p>
            </div>
            <div className='flex justify-between bg-white px-3 py-3 rounded-2xl mb-10'>
                <p className='font-bold'>Break Time</p>
                <p className='text-slate-500 font-bold'>{breakTime} seconds</p>
            </div>
            <button onClick={activityComplete} className="btn btn-accent text-white w-full">Activity Completed</button>
        </div>
    );
};

export default ExerciseActivity;