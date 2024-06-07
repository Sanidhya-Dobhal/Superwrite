import img from '../../assets/document-text-outline.png';
type ButtonHandler = (event: React.MouseEvent<HTMLDivElement>) => void;
export default function Button_3({ button_handler }: { button_handler: ButtonHandler }) {
  return (
    <div onClick={button_handler} style={{ opacity: 0.5 }}>
      <img src={img} className="right_panel_logos" />
    </div>
  );
}
