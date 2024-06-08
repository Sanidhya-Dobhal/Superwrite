import img from '../../assets/Star_Icon.png';
export default function Button_4({
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
        newButtonActiveArr[3] = !newButtonActiveArr[3];
        usebuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[3] ? 1 : 0.5 }}
    >
      <img src={img} className="right_panel_logos" />
    </div>
  );
}
