import img from '../../assets/Settings.png';
export default function SettingsButton({
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
        newButtonActiveArr[4] = !newButtonActiveArr[4];
        setbuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[4] ? 1 : 0.5 }}
    >
      <img src={img} className="right-panel-buttons" />
    </div>
  );
}
