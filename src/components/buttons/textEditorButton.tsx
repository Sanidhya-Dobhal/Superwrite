import img from '../../assets/document-text-outline.png';
export default function Button_3({
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
        newButtonActiveArr[2] = !newButtonActiveArr[2];
        usebuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[2] ? 1 : 0.5 }}
    >
      <img src={img} className="right_panel_logos" />
    </div>
  );
}
