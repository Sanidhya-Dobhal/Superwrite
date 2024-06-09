import img from '../../assets/starIcon.png';
export default function RelatedFilesHeader(): JSX.Element {
  return (
    <div id="related-files-section-heading">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={img} id="related-stars-icon" />
      </div>
      <h3>Related Files (Found by AI)</h3>
    </div>
  );
}
