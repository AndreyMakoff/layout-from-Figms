import './header.css';
function Header() {
  return (
    <div className='header'>
      <div className='navbar'>
        <div className='nav'>
          <div className='logo'>GoTrip</div>
          <ul className='ul'>
            <li className='navEl'>
              <a className='link' href='!#'>
                Home
              </a>
            </li>
            <li className='navEl'>
              <a className='link' href='!#'>
                Service
              </a>
            </li>
            <li className='navEl'>
              <a className='link' href='!#'>
                Pricing
              </a>
            </li>
            <li className='navEl'>
              <a className='link' href='!#'>
                Contact
              </a>
            </li>
          </ul>
          <div className='singlog'>
            <a className='singup' href='!#'>
              Sing up
            </a>
          </div>
          <button className='btn'>LogIn</button>
        </div>
      </div>
      <div className='exploer'>
        <div className='exploertext'>exsplore the world</div>
      </div>
      <div className='text'>
        Explore The Natural Beauty Of Halmahera With Us
      </div>
      <div className='textExploer'>
        explore the beauty of god's earth in a beautiful forest and have fun
      </div>
      <button className='btnExpoer'>Exsplore Now</button>
      <div className='fotoelements'>
        <div className='el-1'></div>
        <div className='el-2'></div>
        <div className='el-3'></div>
        <div className='el-4'></div>
        <div className='imageFoto'></div>
      </div>
      <div className='afterHeader'></div>
    </div>
  );
}
export default Header;
