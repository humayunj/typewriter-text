import { useEffect, useState } from "react";
import TemplateSelector from "../TemplateSelector/TemplateSelector";
import TemplatePreview from "../TemplatePreview/TemplatePreview";
import TextInput from "../TextInput/TextInput";

import templates from "./templates.dat";

const STATE_TEMPLATE = 0;
const STATE_INPUT = 1;
const STATE_PREVIEW = 2;

function Home(props) {
  let [state, setState] = useState(STATE_TEMPLATE);
  let [selectedTemplate, setSelectedTemplate] = useState(-1);

  let [inputText, setInputText] = useState("");
  let [inputAuthor, setInputAuthor] = useState("");

  const onInputFinish = (text, author) => {
    setInputText(text);
    setInputAuthor(author);
    setState(STATE_PREVIEW);
  };
  const onTemplateSelect = (templateInd) => {
    setSelectedTemplate(templateInd);
    setState(STATE_INPUT);
  };

  let component = <h1>Hello</h1>;
  switch (state) {
    case STATE_TEMPLATE:
      component = (
        <TemplateSelector
          templates={templates}
          onTemplateSelect={onTemplateSelect}
        />
      );

      break;
    case STATE_INPUT:
      component = <TextInput onInputFinish={onInputFinish} />;
      break;
    case STATE_PREVIEW:
      component = (
        <TemplatePreview
          templateId={selectedTemplate}
          text={inputText}
          author={inputAuthor}
          onNewClick={() => setState(STATE_TEMPLATE)}
        />
      );
      break;
    default:
      component = <h1>Nothing here...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-screen sm:h-screen p-4 sm:p-0 flex bg-gray-50 flex-col items-center sm:justify-center">
        {component}
      </div>
    </div>
  );
}

export default Home;
