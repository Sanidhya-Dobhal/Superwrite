import logo from '../../assets/superbrainLogo.png';
export default function LogoTitle() {
  return (
    <div id="title_logo_div">
      <span id="back_but">&lt; </span>
      <a target="_blank">
        <img src={logo} alt="Logo" id="logo" />
      </a>
      <span id="title">SuperBrain</span>
    </div>
  );
}
