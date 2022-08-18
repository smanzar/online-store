import Link from "next/link";
const Menu = () => {
  return(
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Men</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="#">Women</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Kids</a></li>
        <li className="nav-item"><a className="nav-link" href="#">FTW</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Accessories</a></li>
      </ul>
  )
}

export default Menu;