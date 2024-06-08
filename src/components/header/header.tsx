import DocTitle from './docTitle.tsx';
import RightPanel from './rightPanel.tsx';
import LogoTitle from './logoTitle.tsx';
export default function Header({
  buttonActiveArr,
  usebuttonActiveArr,
}: {
  buttonActiveArr: boolean[];
  usebuttonActiveArr: (newState: boolean[]) => void;
}) {
  return (
    <header>
      <div>
        <LogoTitle />
      </div>
      <DocTitle />
      <RightPanel buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
    </header>
  );
}
