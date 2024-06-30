import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Web App Development - Overview",
            image: "https://images.pexels.com/photos/3143791/pexels-photo-3143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Web development is the process of creating and maintaining websites and web applications which involves a number of different disciplines.",
        },
        {
            id: 2,
            title: "Healthy Food Habits",
            image: "https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Eating healthy doesn't require drastic changes or fad diets. It's about incorporating wholesome foods into your daily routine.",

        },
        {
            id: 3,
            title: "The Planet Earth",
            image: "https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Earth, our pale blue dot in the vast cosmos, is the third planet from the sun and the only known home to life.",
        },
        {
            id: 4,
            title: "The Perfect Camera",
            image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Modern films boast a vast array of camera techniques, each contributing to the storytelling.",
        },
    ];

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map(post => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.image} alt='' />
                        </div>
                        <div className='content'>
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>                                
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home