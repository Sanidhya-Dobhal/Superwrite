import img from '../../assets/Settings.png';
export default function Button_5({
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
        newButtonActiveArr[4] = !newButtonActiveArr[4];
        usebuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[4] ? 1 : 0.5 }}
    >
      <img src={img} className="right_panel_logos" />
    </div>
  );
}
