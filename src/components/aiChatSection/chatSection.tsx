import { useState } from 'react';
import ChatBody from './chatBody';
import UserInpSec from './userInpSec';
import ChatHeader from './chatHeader';
export default function ChatSection({ buttonActiveArr }: { buttonActiveArr: boolean[] }): JSX.Element {
  const [messages, useMessages] = useState<string[]>([]);
  function enterCheck(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Enter') {
      if ((event.target as HTMLInputElement).value != '') {
        useMessages([...messages, (event.target as HTMLInputElement).value]);
        (event.target as HTMLInputElement).value = '';
      }
    }
  }
  return (
    <div id="chat-outer-div" style={{ display: buttonActiveArr[1] ? 'none' : 'block' }}>
      <ChatHeader />
      <ChatBody messages={messages} />
      <UserInpSec enterCheck={enterCheck} />
    </div>
  );
}
