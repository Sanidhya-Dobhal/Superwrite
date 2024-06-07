import Button_1 from '../buttons/Button_1';
import Button_2 from '../buttons/Button_2';
import Button_3 from '../buttons/Button_3';
import Button_4 from '../buttons/Button_4';
import Button_5 from '../buttons/Button_5';
type ButtonHandler = (event: React.MouseEvent<HTMLDivElement>) => void;
export default function RightPanel({ button_handler }: { button_handler: ButtonHandler }): JSX.Element {
  return (
    <div id="right_panel">
      <Button_1 button_handler={button_handler} />
      <Button_2 button_handler={button_handler} />
      <Button_3 button_handler={button_handler} />
      <Button_4 button_handler={button_handler} />
      <Button_5 button_handler={button_handler} />
    </div>
  );
}