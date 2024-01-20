import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import endpoints from '../Services/MovieServices'

const Home = () => {
  
  return (
    <div>
        <Hero/>
        <MovieRow title="upcoming" url={endpoints.upcoming}/>
        <MovieRow title="top Rated" url={endpoints.topRated}/>
        <MovieRow title="trending" url={endpoints.trending}/>
        <MovieRow title="comedy" url={endpoints.comedy}/>
    </div>
  )
}

export default Home