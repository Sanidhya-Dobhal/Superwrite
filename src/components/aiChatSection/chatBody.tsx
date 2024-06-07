import { ReactTyped } from 'react-typed';
import usr_img from '../../assets/Ellipse 1.png';
import superBrain_logo from '../../assets/superbrainLogo.png';
export default function Suggested_cont({ messages }: { messages: string[] }): JSX.Element {
  return (
    <div id="Suggested_cont">
      <div>
        {messages.map((item, index) => (
          <div key={index}>
            <div style={{ textAlign: 'end', marginRight: '5%' }}>
              <img src={usr_img} style={{ height: 12, width: 12 }} />
              <span style={{ marginLeft: 3 }}>You</span>
              <p className="usr_messages">{item}</p>
            </div>
            <div className="superbrain_reply_section">
              <div style={{ marginRight: '5%', marginLeft: '5%' }}>
                <img src={superBrain_logo} style={{ height: 12, width: 12 }} />
                <span style={{ marginLeft: 3 }}>SuperBrain AI</span>
              </div>
              <div className="superwrite_messages_div">
                <ReactTyped
                  strings={[
                    `The total job market of India is valued at $18 Billion dollars.
The hiring intent in India is expected to increase by 19% in 2024 compared to the previous year. This growth is largely fueled by investments in artificial intelligence and data analytics, which are enhancing the skilling ecosystem and shaping the future of work (taggd) (Dazeinfo). Sectors such as manufacturing and automotive are particularly robust, with hiring intents of 25% and 20%, respectively (taggd).`,
                  ]}
                  typeSpeed={20}
                  showCursor={false}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
