import img from '../../assets/Settings.png';
type ButtonHandler = (event: React.MouseEvent<HTMLDivElement>) => void;
export default function Button_5({ button_handler }: { button_handler: ButtonHandler }) {
  return (
    <div onClick={button_handler} style={{ opacity: 1 }}>
      <img src={img} className="right_panel_logos" />
    </div>
  );
}
