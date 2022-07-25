import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG5.png'
import IMG6 from '../../assets/IMG6.png'

const data=[
  {
    id:1,
    image: IMG1,
    title: 'Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:2,
    image: IMG2,
    title: 'Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:3,
    image: IMG3,
    title: 'Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:4,
    image: IMG4,
    title: 'Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:5,
    image: IMG5,
    title: 'Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:6,
    image: IMG6,
    title: 'Dashboard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
       }

        
      </div>
    </section>
  )
}

export default Portfolio