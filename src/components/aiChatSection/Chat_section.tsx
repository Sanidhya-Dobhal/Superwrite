import { useState } from 'react';
import Chat_body from './chatBody';
import User_inp_sec from './user_inp_sec';
import Chat_header from './chat_header';
export default function Chat_section(): JSX.Element {
  const [messages, useMessages] = useState<string[]>([]);
  function entercheck(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Enter') {
      if ((event.target as HTMLInputElement).value != '') {
        useMessages([...messages, (event.target as HTMLInputElement).value]);
        (event.target as HTMLInputElement).value = '';
      }
    }
  }
  return (
    <div id="chat_outer_div" style={{ display: 'block' }}>
      <Chat_header />
      <Chat_body messages={messages} />
      <User_inp_sec entercheck={entercheck} />
    </div>
  );
}
