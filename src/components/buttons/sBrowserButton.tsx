import Text_editor_icon from '../../assets/SBrowser.png';
export default function sBrowserButton({
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
        newButtonActiveArr[0] = !newButtonActiveArr[0];
        usebuttonActiveArr(newButtonActiveArr);
      }}
      style={{ opacity: buttonActiveArr[0] ? 1 : 0.5 }}
    >
      <img src={Text_editor_icon} className="right_panel_logos" />
    </div>
  );
}
