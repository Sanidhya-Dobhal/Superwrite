import DocTitle from './docTitle.tsx';
import RightPanel from './rightHeaderPanel.tsx';
import LogoAndTitle from './logoAndTitle.tsx';
export default function Header({
  buttonActiveArr,
  setbuttonActiveArr,
}: {
  buttonActiveArr: boolean[];
  setbuttonActiveArr: (newState: boolean[]) => void;
}) {
  return (
    <header>
      <LogoAndTitle />
      <DocTitle />
      <RightPanel buttonActiveArr={buttonActiveArr} setbuttonActiveArr={setbuttonActiveArr} />
    </header>
  );
}
