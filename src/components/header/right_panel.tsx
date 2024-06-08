import Button_1 from '../buttons/Button_1';
import Button_2 from '../buttons/Button_2';
import Button_3 from '../buttons/Button_3';
import Button_4 from '../buttons/Button_4';
import Button_5 from '../buttons/Button_5';
export default function Right_panel({
  buttonActiveArr,
  usebuttonActiveArr,
}: {
  buttonActiveArr: boolean[];
  usebuttonActiveArr: (newState: boolean[]) => void;
}) {
  return (
    <div id="right_panel">
      <Button_1 buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
      <Button_2 buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
      <Button_3 buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
      <Button_4 buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
      <Button_5 buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
    </div>
  );
}
