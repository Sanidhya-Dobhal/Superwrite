import TextEditor from './components/textEditor';
import ChatSection from './components/aiChatSection/chatSection';
import Header from './components/header/header';
import RelatedFilesComp from './components/relatedFilesSection/relatedFilesComp';
import { useState } from 'react';
function App() {
  const [buttonActiveArr, setbuttonActiveArr] = useState([true, false, false, false, true]);
  return (
    <>
      <Header
        buttonActiveArr={buttonActiveArr as boolean[]}
        setbuttonActiveArr={setbuttonActiveArr as (newState: boolean[]) => void}
      />
      <main id="main-flex-box-div">
        <ChatSection buttonActiveArr={buttonActiveArr} />
        <TextEditor />
        <RelatedFilesComp buttonActiveArr={buttonActiveArr} />
      </main>
    </>
  );
}

export default App;
