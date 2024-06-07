import TextEditor from './components/texteditor';
import Chat_section from './components/aiChatSection/Chat_section';
import Header from './components/header/header';
import Related_files_cont from './components/relatedFilesSection/RelatedFilesComp';

type ButtonHandler = (event: React.MouseEvent<HTMLDivElement>) => void;
const button_handler: ButtonHandler = (event: React.MouseEvent<HTMLDivElement>) => {
  if ((event.currentTarget as HTMLElement).style.opacity == '0.5') {
    (event.currentTarget as HTMLElement).style.opacity = '1';
  } else {
    (event.currentTarget as HTMLElement).style.opacity = '0.5';
  }
  which_button_and_element_display(event.currentTarget as HTMLElement);
};

function which_button_and_element_display(ele: HTMLElement) {
  if (ele === document.querySelector('#right_panel div:nth-child(2)')) {
    //This means the chat button has been clicked
    if (ele.style.opacity == '1') {
      (document.getElementById('chat_outer_div') as HTMLElement).style.display = 'none';
    } else {
      (document.getElementById('chat_outer_div') as HTMLElement).style.display = 'block';
    }
  } else if (ele === document.querySelector('#right_panel div:nth-child(4)')) {
    if (ele.style.opacity == '1') {
      (document.getElementById('Related_files_tab') as HTMLElement).style.display = 'none';
    } else {
      (document.getElementById('Related_files_tab') as HTMLElement).style.display = 'block';
    }
  }
}
function App() {
  return (
    <>
      <Header button_handler={button_handler} />
      <div id="flex_box_div">
        <Chat_section />
        <TextEditor />
        <Related_files_cont />
      </div>
    </>
  );
}

export default App;
