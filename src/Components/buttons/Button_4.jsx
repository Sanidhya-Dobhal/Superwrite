import img from '../../assets/Star_Icon.png';
export default function Button_4({ button_handler }) {
  return (
    <div onClick={button_handler} style={{ opacity: 0.5 }}>
      <img src={img} className="right_panel_logos" />
    </div>
  );
}
