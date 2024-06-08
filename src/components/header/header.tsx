import Doc_title from './doc_title';
import Right_panel from './right_panel.tsx';
import Logo_title from './logo_title';
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
        <Logo_title />
      </div>
      <Doc_title />
      <Right_panel buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
    </header>
  );
}
