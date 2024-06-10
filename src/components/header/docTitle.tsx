import { useState } from 'react';
export default function DocTitle() {
  const [docTitleState, setdocTitleState] = useState('2024 is the worst year for engineering jobs');
  return (
    <input
      type="text"
      id="title-text"
      readOnly={false}
      value={docTitleState}
      onChange={function (event) {
        setdocTitleState(event.target.value);
      }}
      onKeyDown={function (event) {
        if (event.key === 'Enter') {
          (event.target as HTMLInputElement).blur();
        }
      }}
    ></input>
  );
}
