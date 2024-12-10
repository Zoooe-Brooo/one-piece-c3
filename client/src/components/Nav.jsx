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
          <img src={OnePiece} width="200px" height="auto" alt="One Piece" />
          <h1>Cosplay Costume Customisation</h1>
        </Link>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
