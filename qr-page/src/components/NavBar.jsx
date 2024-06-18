import ChangingButton from "./ChangingButton";
import "./NavBar.style.css"

const NavBar = () => (
    <div className="navbar">
      <div className="navbar-logo-container">
      <img className="navbar-logo" src="src\assets\images\placeholder-300x300-1.png" alt="" />
      </div>
      <div className="navbar-buttons-container">
      <ChangingButton
        text="N"
        style="borderless"
        link="https://www.youtube.com/watch?v=6Jfk8ic3KVk"
      />
      <ChangingButton
        text="N"
        style="borderless"
        link="https://www.youtube.com/watch?v=6Jfk8ic3KVk"
      />
      </div>
    </div>
  );

  export default NavBar;