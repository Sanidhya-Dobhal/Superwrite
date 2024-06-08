import SBrowserButton from '../buttons/sBrowserButton';
import ChatButton from '../buttons/chatButton';
import TextEditorButton from '../buttons/textEditorButton';
import RelatedFilesButton from '../buttons/relatedFilesButton';
import SettingsButton from '../buttons/settingsButton';
export default function RightPanel({
  buttonActiveArr,
  usebuttonActiveArr,
}: {
  buttonActiveArr: boolean[];
  usebuttonActiveArr: (newState: boolean[]) => void;
}) {
  return (
    <div id="right_panel">
      <SBrowserButton buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
      <ChatButton buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
      <TextEditorButton buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
      <RelatedFilesButton buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
      <SettingsButton buttonActiveArr={buttonActiveArr} usebuttonActiveArr={usebuttonActiveArr} />
    </div>
  );
}
