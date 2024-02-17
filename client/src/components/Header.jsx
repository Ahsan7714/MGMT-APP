import logo from './../assets/logo.png';

const Header = () => {
  return (
    <nav className='navbar bg-gray-100 mb-4 p-4'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Header
