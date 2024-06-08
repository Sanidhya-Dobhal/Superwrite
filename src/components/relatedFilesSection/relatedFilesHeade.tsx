import img from '../../assets/Star_Icon.png';
export default function RelatedFilesHeader(): JSX.Element {
  return (
    <div id="Related_files_tab_heading">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={img} id="Stars_icon" />
      </div>
      <h3>Related Files (Found by AI)</h3>
    </div>
  );
}
