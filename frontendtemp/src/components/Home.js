import React from 'react'

const Home = () => {
        return (
            <div>
            <h1>Admin Panel</h1>
            <ul>
            <li><a href="/cities">See all cities</a></li>
            <li><a href="/experience">See all experiences</a></li>
            <li><a href="/bookings">See all Bookings</a></li>
            <li><a href="/users">See all Users</a></li>            
            </ul>
            </div>
        )
}

export default Home;