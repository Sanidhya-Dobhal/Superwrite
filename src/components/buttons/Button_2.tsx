import chat_logo from '../../assets/chatbubbles-outline.png';

type ButtonHandler = (event: React.MouseEvent<HTMLDivElement>) => void;
export default function Button_2({ button_handler }: { button_handler: ButtonHandler }) {
  return (
    <div onClick={button_handler} style={{ opacity: 0.5 }}>
      <img src={chat_logo} className="right_panel_logos" />
    </div>
  );
}
