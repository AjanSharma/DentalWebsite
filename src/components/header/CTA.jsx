import React from 'react'
import CV from '../../assests/resume.docx'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Contact</a>
    </div>
  )
}

export default CTA