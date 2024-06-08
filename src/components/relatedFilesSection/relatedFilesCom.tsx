import RelatedFilesHeader from './relatedFilesHeade';
import RelatedFilesBody from './relatedFliesBod';
export default function Related_files_cont({ buttonActiveArr }: { buttonActiveArr: boolean[] }): JSX.Element {
  return (
    <div id="Related_files_tab" style={{ display: buttonActiveArr[3] ? 'none' : 'block' }}>
      <RelatedFilesHeader />
      <RelatedFilesBody />
    </div>
  );
}