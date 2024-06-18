import ChangingButton from "./ChangingButton";
import "./Footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <ChangingButton
        text="a"
        style="borderless"
        link="https://www.youtube.com/watch?v=6Jfk8ic3KVk"
      />
    </div>
  );
};

export default Footer;
