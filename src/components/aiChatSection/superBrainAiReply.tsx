import superBrainLogo from '../../assets/superbrainLogo.png';
import { ReactTyped } from 'react-typed';

export default function SuperBrainAiReply() {
  return (
    <div>
      <div style={{ marginRight: '5%', marginLeft: '5%' }}>
        <img src={superBrainLogo} style={{ height: 12, width: 12 }} />
        <span style={{ marginLeft: 3 }}>SuperBrain AI</span>
      </div>
      <div className="superwriteAI-messages-div">
        <ReactTyped
          strings={[
            `The total job market of India is valued at $18 Billion dollars.
The hiring intent in India is expected to increase by 19% in 2024 compared to the previous year. This growth is largely fueled by investments in artificial intelligence and data analytics, which are enhancing the skilling ecosystem and shaping the future of work (taggd) <a href = " ">(Dazeinfo)</a>. Sectors such as manufacturing and automotive are particularly robust, with hiring intents of 25% and 20%, respectively (taggd).`,
          ]}
          typeSpeed={20}
          showCursor={false}
        />
      </div>
    </div>
  );
}
