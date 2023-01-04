import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center text-accent mt-16 mb-12'><u>Blog</u></h2>
            <div className='mx-10 md:mx-16 lg:mx-20'>
                <div className='mb-10'>
                    <h3 className='text-2xl'>1. How does react work?</h3>
                    <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.


                    </p>
                </div>

                <div className='mb-10'>
                    <h3 className='text-2xl'>2. What is the difference between props and state?</h3>
                    <p>Ans: Props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes.</p>
                </div>

                <div className='mb-10'>
                    <h3 className='text-2xl'>3. When we use useeffect in react?</h3>
                    <p>Ans: The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;