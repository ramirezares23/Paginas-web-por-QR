import ChangingButton from "../components/ChangingButton";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src="src\assets\images\placeholder-300x300-1.png" alt="" />
      <ChangingButton
        text="N"
        style="bordered"
        link="https://www.youtube.com/watch?v=6Jfk8ic3KVk"
      />
    </div>
  );
};

export default Hero;
