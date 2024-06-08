type enterCheckFunction = (e: React.KeyboardEvent<HTMLInputElement>) => void;
export default function UserInpSec({ entercheck }: { entercheck: enterCheckFunction }): JSX.Element {
  return (
    <div id="user_inp_sec">
      <input type="text" placeholder="Ask any question you’ll have" style={{ fontSize: 12 }} onKeyDown={entercheck} />
      <button type="submit">+</button>
    </div>
  );
}
