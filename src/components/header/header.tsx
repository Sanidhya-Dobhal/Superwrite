import DocTitle from './docTitle';
import RightPanel from './rightPanel';
import LogoTitle from './logoTitle';
type ButtonHandler = (event: React.MouseEvent<HTMLDivElement>) => void;
export default function Header({ button_handler }: { button_handler: ButtonHandler }): JSX.Element {
  return (
    <header>
      <div>
        <LogoTitle />
      </div>
      <DocTitle />
      <RightPanel button_handler={button_handler} />
    </header>
  );
}
