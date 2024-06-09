import img from '../../assets/SBrowser.png';
export default function SBrowserButton({
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
        newButtonActiveArr[0] = !newButtonActiveArr[0];
        setbuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[0] ? 1 : 0.5 }}
    >
      <img src={img} className="right-panel-buttons" />
    </div>
  );
}
