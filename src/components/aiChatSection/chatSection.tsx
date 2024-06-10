import { useState } from 'react';
import ChatBody from './chatBody';
import UserInpSec from './userInpSec';
import ChatHeader from './chatHeader';
export default function ChatSection({ buttonActiveArr }: { buttonActiveArr: boolean[] }): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInputState, setUserInputState] = useState<string>('');
  function enterCheck(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Enter') {
      if ((event.target as HTMLInputElement).value != '') {
        setMessages([...messages, (event.target as HTMLInputElement).value]);
        setUserInputState('');
      }
    }
  }
  return (
    <div id="chat-outer-div" style={{ display: buttonActiveArr[1] ? 'none' : 'block' }}>
      <ChatHeader />
      <ChatBody messages={messages} />
      <UserInpSec enterCheck={enterCheck} userInputState={userInputState} setUserInputState={setUserInputState} />
    </div>
  );
}
