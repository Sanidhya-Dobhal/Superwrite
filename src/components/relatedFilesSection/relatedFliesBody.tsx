import img from '../../assets/thumbnail.png';
import img2 from '../../assets/youtube.png';
export default function RelatedFilesBody(): JSX.Element {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div id="related-files-section-body">
      <>
        {arr.map((ele) => (
          <div key={ele} className="related-file-elements">
            <img src={img} style={{ width: '5vw' }} />
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img src={img2} className="youtube" />
                <span style={{ marginLeft: 4 }}>Youtube</span>
              </div>
              <h4 style={{ marginLeft: 8 }}>iPhone 15 & its benefits for students in college</h4>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
