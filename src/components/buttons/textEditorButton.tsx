import img from '../../assets/textEditorIcon.png';
export default function TextEditorButton({
  buttonActiveArr,
  setbuttonActiveArr,
}: {
  buttonActiveArr: boolean[];
  setbuttonActiveArr: (newState: boolean[]) => void;
}) {
  return (
    <div
      onClick={() => {
        let newButtonActiveArr = [...buttonActiveArr];
        newButtonActiveArr[2] = !newButtonActiveArr[2];
        setbuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[2] ? 1 : 0.5 }}
    >
      <img src={img} className="right-panel-buttons" />
    </div>
  );
}
