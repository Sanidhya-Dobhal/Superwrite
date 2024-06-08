import chat_logo from '../../assets/chatbubbles-outline.png';
export default function Button_2({
  buttonActiveArr,
  usebuttonActiveArr,
}: {
  buttonActiveArr: boolean[];
  usebuttonActiveArr: (newState: boolean[]) => void;
}) {
  return (
    <div
      onClick={() => {
        let newButtonActiveArr = [...buttonActiveArr];
        newButtonActiveArr[1] = !newButtonActiveArr[1];
        usebuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[1] ? 1 : 0.5 }}
    >
      <img src={chat_logo} className="right_panel_logos" />
    </div>
  );
}
