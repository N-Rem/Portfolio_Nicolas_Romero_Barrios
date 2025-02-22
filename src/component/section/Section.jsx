import React from 'react'

const Section = ({children}) => {
// para hacer Las comillas invertidas  alt + 96 ` `
    return (
    <section className='section-container'>
        {children}
    </section>
  )
}

export default Section
