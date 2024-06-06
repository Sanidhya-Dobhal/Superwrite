import img from '../../assets/document-text-outline.png';
export default function Button_3({ button_handler }) {
  return (
    <div onClick={button_handler} style={{ opacity: 0.5 }}>
      <img src={img} className="right_panel_logos" />
    </div>
  );
}
