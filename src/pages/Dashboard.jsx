import React from 'react'
import '../styles/dashboard.css'
import SingleCard from '../components/Cards/SingleCard'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts'
import mileStaticsData from '../assets/dummy-data/mileStatics'

const carObj = {
  title: 'Total Cars',
  totalNumber: 750,
  icon: 'ri-police-car-line',
}

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__wrapper'>
        <div className='dashboard__cards'>
          <SingleCard item={carObj} />
          <SingleCard item={carObj} />
          <SingleCard item={carObj} />
          <SingleCard item={carObj} />
        </div>

        <div className='statics'>
          <div className='stats'>
            <h3 className='stats__title'>Miles Statics</h3>
            <ResponsiveContainer width='100%'>
              <BarChart data={mileStaticsData}>
                <XAxis dataKey='name' stroke='#2884ff' />
                <Bar dataKey='mileStats' stroke='#2884ff' fill='#2884ff' barSize={30} />
                <Tooltip wrapperClassName='tooltip__style' cursor={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className='stats'>
            <ResponsiveContainer width='100%'>
              <BarChart data={mileStaticsData}>
                <XAxis dataKey='name' stroke='#2884ff' />
                <Bar dataKey='mileStats' stroke='#2884ff' fill='#2884ff' barSize={30} />
                <Tooltip wrapperClassName='tooltip__style' cursor={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
