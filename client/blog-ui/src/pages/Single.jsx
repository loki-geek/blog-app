import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom'

const Single = () => {
    return (
        <div className='single'>
            <div className='content'>

                <img src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                <div className="user">
                    <div className="user-data">
                        <img src="https://images.pexels.com/photos/5649997/pexels-photo-5649997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="info">
                            <div className="username">
                                <span>Elena</span>
                            </div>
                            <div className="edit-time">
                                <span>Updated 2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="edit">
                        <Link to={`/write/?edit=1`} className='link'>
                            <FaRegEdit className='edit-icon' />
                        </Link>
                        <MdDeleteForever className='delete-icon' />
                    </div>
                </div>
                <div className="post-body" >
                <h1>Reliable Car with Sheer Luxury</h1>
                <p>Audi sedans epitomize luxury and performance in the four-door category. From the compact A4 to the flagship A8, each Audi sedan boasts a sophisticated
                    design language characterized by sharp lines, a prominent grille, and a sleek silhouette. Crafted with premium materials and meticulous attention to
                    detail, the interiors are havens of comfort and technology. Supportive seats, intuitive controls, and a plethora of driver assistance features elevate every ride.
                    <br />
                    <br/>
                    Under the hood, Audi sedans offer a thrilling driving experience. Powerful yet refined engines, paired with smooth-shifting transmissions, deliver exhilarating acceleration.
                    Whether you choose a fuel-efficient option or a high-performance variant with all-wheel drive, Audi sedans prioritize a dynamic driving experience without compromising on
                    everyday comfort. Safety remains a top priority with Audi's commitment to cutting-edge technologies. Automatic emergency braking, lane departure warning, and adaptive cruise
                    control are just a few examples of features designed to keep you and your passengers safe on the road.
                    <br />
                    <br/>
                    Owning an Audi sedan is a statement. It signifies a taste for discernment and a desire for a car that seamlessly integrates luxury, performance, and technology. Whether
                    you're navigating city streets or cruising on the highway, an Audi sedan promises an unforgettable driving experience.
                </p>
                </div>
            </div>
            <div className='menu'>m</div>

        </div>
    )
}

export default Single