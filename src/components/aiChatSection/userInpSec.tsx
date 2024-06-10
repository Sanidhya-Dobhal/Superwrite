type enterCheckFunction = (e: React.KeyboardEvent<HTMLInputElement>) => void;
export default function UserInpSec({
  enterCheck,
  userInputState,
  setUserInputState,
}: {
  enterCheck: enterCheckFunction;
  userInputState: string;
  setUserInputState: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <div id="user-input-section">
      <input
        type="text"
        placeholder="Ask any question you'll have"
        style={{ fontSize: 12 }}
        value={userInputState}
        onKeyDown={enterCheck}
        onChange={(event) => {
          setUserInputState(event.target.value);
        }}
      />
      <button type="submit">+</button>
    </div>
  );
}
