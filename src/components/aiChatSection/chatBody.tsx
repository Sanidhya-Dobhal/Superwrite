import SuperBrainAiReply from './superBrainAiReply';
import UserChatMessages from './userChatMessages';
export default function chatBody({ messages }: { messages: string[] }): JSX.Element {
  return (
    <div id="chat-body">
      <div>
        {messages.map((item, index) => (
          <div key={index}>
            <UserChatMessages item={item} />
            <SuperBrainAiReply />
          </div>
        ))}
      </div>
    </div>
  );
}
