import SBrowserButton from '../buttons/sBrowserButton';
import ChatButton from '../buttons/chatButton';
import TextEditorButton from '../buttons/textEditorButton';
import RelatedFilesButton from '../buttons/relatedFilesButton';
import SettingsButton from '../buttons/settingsButton';
export default function RightHeaderPanel({
  buttonActiveArr,
  setbuttonActiveArr,
}: {
  buttonActiveArr: boolean[];
  setbuttonActiveArr: (newState: boolean[]) => void;
}) {
  return (
    <div id="right-panel">
      <SBrowserButton buttonActiveArr={buttonActiveArr} setbuttonActiveArr={setbuttonActiveArr} />
      <ChatButton buttonActiveArr={buttonActiveArr} setbuttonActiveArr={setbuttonActiveArr} />
      <TextEditorButton buttonActiveArr={buttonActiveArr} setbuttonActiveArr={setbuttonActiveArr} />
      <RelatedFilesButton buttonActiveArr={buttonActiveArr} setbuttonActiveArr={setbuttonActiveArr} />
      <SettingsButton buttonActiveArr={buttonActiveArr} setbuttonActiveArr={setbuttonActiveArr} />
    </div>
  );
}
