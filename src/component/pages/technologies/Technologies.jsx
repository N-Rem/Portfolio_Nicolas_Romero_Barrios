import React from 'react'
import "./technologies.css"
import SliderTech from '../../sliderTech/SliderTech'

const Technologies = () => {
  return (
    <div id='tech' className='tech-container flex-container-column'>
      <div className='content-tech-container flex-container-column'>
      <h2>Tecnologias</h2>
      <p>Mi formación es FullStack.</p>
      <p>Mi enfoque se centra en la adaptabilidad a nuevas tecnologías y el trabajo en equipo, aplicando metodologías ágiles como Scrum y Kanban.
      </p>
      <p>En Frontend, cuento con experiencia en la creación de aplicaciones web pequeñas y medianas utilizando React, aplicando HTML, CSS y JavaScript, además de desarrollar algunas animaciones. También he trabajado con WordPress, creando complementos personalizados y optimizando funcionalidades.</p>
      <p>En el Backend, manejo C# con ASP.NET Core, Entity Framework y MySQL, permitiéndome desarrollar API REST y gestionar bases de datos de manera eficiente.</p>

      </div>
      <SliderTech/>
    </div>
  )
}

export default Technologies
