import React from 'react'

const About = () => {
  return (
    <div className='About'>
      <p style={{ margin: "10% 0", fontSize: "large" }}>
        Hi, I’m <b>Vignesh</b>, a Software Engineer from Salem, Tamil Nadu, passionate about coding, teamwork, and solving challenges. I enjoy playing cricket, exploring tech trends, and continuous learning.
        <br /><br />
        Thanks for taking the time to visit my "Simple Social Media App".
        <br /><br />
        If you'd like to get in touch, feel free to connect with me:
        <div style={{ marginTop: "1.5rem" }}>
          <ul style={{
            listStyleType: "none", 
            paddingLeft: "0", 
            fontSize: "18px", 
            fontWeight: "bold",
            lineHeight: "1.8",
            color: "#333"
          }}>
            <li style={{
              marginBottom: "10px",
              fontSize: "16px",
              color: "#007bff"
            }}>
              <a href="mailto:vickymsd.cse.07@gmail.com" style={{ textDecoration: "none", color: "#007bff" }}>Email me</a>
            </li>
            <li style={{
              marginBottom: "10px",
              fontSize: "16px",
              color: "#007bff"
            }}>
              <a href="https://www.linkedin.com/in/vignesh-m-07645219a/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#007bff" }}>LinkedIn</a>
            </li>
          </ul>
        </div>
      </p>
    </div>
  )
}

export default About
