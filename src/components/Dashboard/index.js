import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import './style.css'


function Dashboard() {
    return (
        <motion.div initial={
                {
                    opacity: 0,
                    x: 100,
                    y: 100
                }
            }
            animate={
                {
                    opacity: 1,
                    x: 0,
                    y: 0

                }
            }
            transition={
                {duration: 4}
            }
            className="UserDash">


            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Link to="/createinvites">
                            <motion.button whileHover={
                                    {
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px rgb(255,255,255)",
                                        boxShadow: "0px 0px 8px rgb(255,255,255)"
                                    }
                                }
                                className="createInvite">Create an Invite</motion.button>
                        </Link>

                    </div>
                    <div className='col'>
                        <Link to="/viewinvites">
                            <motion.button whileHover={
                                    {
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px rgb(255,255,255)",
                                        boxShadow: "0px 0px 8px rgb(255,255,255)"
                                    }
                                }
                                className="viewInvite">View Invite</motion.button>
                        </Link>
                    </div>
                </div>
                <div className='row '>
                    <div className='col'>
                        <Link to="/itinerary">
                            <motion.button whileHover={
                                    {
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px rgb(255,255,255)",
                                        boxShadow: "0px 0px 8px rgb(255,255,255)"
                                    }
                                }
                                className="Itinerary">View Itinerary</motion.button>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="/guestlist">
                            <motion.button whileHover={
                                    {
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px rgb(255,255,255)",
                                        boxShadow: "0px 0px 8px rgb(255,255,255)"
                                    }
                                }
                                className="guestList">Guest List</motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


export default Dashboard
