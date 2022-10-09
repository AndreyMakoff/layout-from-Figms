import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_title'>Subscribe To Our Newsletter</div>
      <input
        type='email'
        className='footer_input'
        placeholder='Yourmail@mail.com'
      />
      <button className='footer_btn'>Subscribe</button>

      <div className='footer_nav'>
        <div className='footer_nav-logo'>GoTrip</div>
        <ul className='footer_nav-ul'>
          <li className='footer_nav-navEl'>
            <a className='footer_navlink' href='!#'>
              Home
            </a>
          </li>
          <li className='footer_nav-navEl'>
            <a className='footer_navlink' href='!#'>
              Service
            </a>
          </li>
          <li className='footer_nav-navEl'>
            <a className='footer_navlink' href='!#'>
              Pricing
            </a>
          </li>
          <li className='footer_nav-navEl'>
            <a className='footer_navlink' href='!#'>
              Contact
            </a>
          </li>
        </ul>
        <div className='footer_nav-singlog'>
          <a className='footer_nav-singup' href='!#'>
            Sing up
          </a>
        </div>
        <button className='footer_nav_btn'>LogIn</button>
      </div>
    </div>
  );
}

export default Footer;
