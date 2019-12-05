import React from 'react'
import NavBar from './NavBar'
import SearchMovie from './SearchMovie'

const Movie = ()=>{
    return(
        <div className='App'>
            <NavBar></NavBar>
            <SearchMovie/>
        </div>
    )
}

export default Movie