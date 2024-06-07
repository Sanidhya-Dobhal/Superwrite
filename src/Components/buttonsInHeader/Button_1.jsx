import Text_editor_icon from '../../assets/SBrowser.png';
export default function Button_1({ button_handler }) {
  return (
    <div onClick={button_handler} style={{ opacity: 1 }}>
      <img src={Text_editor_icon} className="right_panel_logos" />
    </div>
  );
}
