import img from '../../assets/starIcon.png';
export default function RelatedFilesButton({
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
        newButtonActiveArr[3] = !newButtonActiveArr[3];
        setbuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[3] ? 1 : 0.5 }}
    >
      <img src={img} className="right-panel-buttons" />
    </div>
  );
}
