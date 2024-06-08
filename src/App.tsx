import TextEditor from './components/texteditor';
import Chat_section from './components/aiChatSection/Chat_section';
import Header from './components/header/header';
import Related_files_cont from './components/relatedFilesSection/RelatedFilesComp';
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
        <Chat_section buttonActiveArr={buttonActiveArr} />
        <TextEditor />
        <Related_files_cont buttonActiveArr={buttonActiveArr} />
      </div>
    </>
  );
}

export default App;
