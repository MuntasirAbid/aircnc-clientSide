import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpCard from '../Components/Card/ExpCard'
import HomeCard from '../Components/Card/HomeCard'
import SearchForm from '../Components/Form/SearchForm'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allExp, setAllExp] = useState([])

  useEffect(() => {
    fetch('expdata.json')
      .then(res => res.json())
      .then(data => {
        setAllExp(data)
      })
  }, [])
  return (
    <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
      <div className='mt-4'><SearchForm></SearchForm></div>

      <div className='flex-1'>
        <div>
          <div className='flex justify-between px-4'>
            <p className='text-xl font-bold mt-10'>Homes</p>
            <Link to='/coming-soon'>
              <p>See All</p>
            </Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {[...Array(3)].map((exp, i) => (
                <HomeCard key={i} exp={exp}></HomeCard>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-between px-4'>
            <p className='text-xl font-bold'>Experience</p>
            <Link to='/coming-soon'>
              <p>See All</p>
            </Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {allExp.slice(0, 4).map((exp, i) => (
                <ExpCard key={i} exp={exp}></ExpCard>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
