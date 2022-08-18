import Logo from './shared/Logo'
import Menu from './shared/Menu'
import Searchbar from './shared/Searchbar'
const Header = () => {
  return(
    <header className='header container'>
      <nav className="navbar">
        <Logo/>
        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
          <Menu/>
          <Searchbar/>
        </div>
      </nav>
    </header>
    
  )
}

export default Header;