import logo from '../../assets/superbrainLogo.png';
export default function LogoAndTitle() {
  return (
    <div id="title-logo-div">
      <span id="back-but">&lt; </span>
      <a target="_blank" id="logo-and-button">
        <img src={logo} alt="superBrain Logo" id="logo" />
        <span id="title">SuperBrain</span>
      </a>
    </div>
  );
}
