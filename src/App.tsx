import TextEditor from './components/textEditor';
import ChatSection from './components/aiChatSection/chatSection';
import Header from './components/header/header';
import RelatedFilesComp from './components/relatedFilesSection/relatedFilesComp';
import { useState } from 'react';
function App() {
  const [buttonActiveArr, usebuttonActiveArr] = useState([true, false, false, false, true]);
  return (
    <>
      <Header
        buttonActiveArr={buttonActiveArr as boolean[]}
        usebuttonActiveArr={usebuttonActiveArr as (newState: boolean[]) => void}
      />
      <div id="flex_box_div">
        <ChatSection buttonActiveArr={buttonActiveArr} />
        <TextEditor />
        <RelatedFilesComp buttonActiveArr={buttonActiveArr} />
      </div>
    </>
  );
}

export default App;
