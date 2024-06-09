import RelatedFilesHeader from './relatedFilesHeader';
import RelatedFilesBody from './relatedFliesBody';
export default function RelatedFilesCont({ buttonActiveArr }: { buttonActiveArr: boolean[] }): JSX.Element {
  return (
    <div id="related-files-section" style={{ display: buttonActiveArr[3] ? 'none' : 'block' }}>
      <RelatedFilesHeader />
      <RelatedFilesBody />
    </div>
  );
}
