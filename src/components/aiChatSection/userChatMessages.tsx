import usrImg from '../../assets/chatUserIcon.png';
export default function userChatMessages({ item }: { item: string }) {
  return (
    <div style={{ textAlign: 'end', marginRight: '5%' }}>
      <img src={usrImg} style={{ height: 12, width: 12 }} />
      <span style={{ marginLeft: 3 }}>You</span>
      <p className="user-messages">{item}</p>
    </div>
  );
}
