import img from '../../assets/chatBubblesIcon.png';
export default function ChatButton({
  buttonActiveArr,
  setbuttonActiveArr,
}: {
  buttonActiveArr: boolean[];
  setbuttonActiveArr: (newState: boolean[]) => void;
}) {
  return (
    <div
      onClick={() => {
        const newButtonActiveArr = [...buttonActiveArr];
        newButtonActiveArr[1] = !newButtonActiveArr[1];
        setbuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[1] ? 1 : 0.5 }}
    >
      <img src={img} className="right-panel-buttons" />
    </div>
  );
}
