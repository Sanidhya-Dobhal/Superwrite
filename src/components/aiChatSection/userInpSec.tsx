type enterCheckFunction = (e: React.KeyboardEvent<HTMLInputElement>) => void;
export default function UserInpSec({ enterCheck }: { enterCheck: enterCheckFunction }): JSX.Element {
  return (
    <div id="user-input-section">
      <input type="text" placeholder="Ask any question you’ll have" style={{ fontSize: 12 }} onKeyDown={enterCheck} />
      <button type="submit">+</button>
    </div>
  );
}
