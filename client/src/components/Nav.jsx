import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import OnePiece from "../images/one-piece.jpeg";
import '../styles/nav.css';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <Link to="/">
        <img src={OnePiece} alt="One Piece" />
      </Link>

      <h1>
        <span>Cosplay</span><br />
        <span>Costume</span><br />
        <span>Customisation</span>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
