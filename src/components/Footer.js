import React from 'react'

const Footer = () => {
  return (
    <footer className="Footer">
      <h4 className="Footer-title">Connect With Us</h4>
      <div className="Footer-info">
        <ul className="Footer-about">
          <li className="Footer-item">
            <a href="#" className="Footer-link">What's news</a>
          </li>
          <li className="Footer-item">
            <a href="#" className="Footer-link">Pokémon Parents Guide</a>
          </li>
          <li className="Footer-item">
            <a href="#" className="Footer-link">Customer Service</a>
          </li>
          <li className="Footer-item">
            <a href="#" className="Footer-link">About Our Company</a>
          </li>
          <li className="Footer-item">
            <a href="#" className="Footer-link">Pokémon Careers</a>
          </li>
          <li className="Footer-item">
            <a href="#" className="Footer-link">Select a Country</a>
          </li>
        </ul>

        <ul className="Footer-legal">
          <li className="Footer-item">
            <a href="#" className="Footer-link">Terms of Use</a>
          </li>
          <li className="Footer-item">
            <a href="#" className="Footer-link">Privacy Policy</a>
          </li>
          <li className="Footer-item">
            <a href="#" className="Footer-link">Legal Info</a>
          </li>
        </ul>
      </div>

      <span className="Footer-copyright">© 2016 Pokémon/Nintendo</span>
    </footer>
  )
}

export default Footer