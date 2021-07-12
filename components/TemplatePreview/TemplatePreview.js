import TemplatePreviewAlpha from "./TemplateAlpha/TemplatePreviewAlpha";
import TemplatePreviewStains from "./TemplateStains/TemplatePreviewStains";
import TemplatePreviewWhite from "./TemplateWhite/TemplatePreviewWhite";
import TemplatePreviewWhiteSimple from "./TemplateWhiteSimple/TemplatePreviewWhiteSimple";

import { useState, useEffect } from "react";
import downloadBlob from "../utils/downloadBlob";

export default function TemplatePreview({
  text,
  author,
  templateId,

  onNewClick,
}) {
  const [canvas, setCanvas] = useState(null);

  const onDownloadClick = () => {
    if (!canvas.current) return;

    canvas.current.toBlob(
      function (blob) {
        const url = downloadBlob(blob, "image.jpg");

        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 100);
      },
      "image/jpeg",
      1
    );
  };

  let templates = [
    TemplatePreviewAlpha,
    TemplatePreviewWhite,
    TemplatePreviewStains,
    TemplatePreviewWhiteSimple,
  ];

  const Template = templates[templateId];

  return (
    <div className="container w-full flex flex-col items-center ">
      <h1 className="text-xl font-bold mb-4">Preview</h1>
      <div className="w-1/2 justify-center flex gap-1">
        <div
          className=""
          style={{
            width: "256px",
            height: "450px",
          }}
        >
          <Template key={0} text={text} author={author} setCanvas={setCanvas} />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-1">
        <button
          className="px-3 py-2 text-xl border-2 border-black bg-black text-white rounded"
          onClick={onDownloadClick}
        >
          Download
        </button>
        <button
          className="px-3 py-2 text-xl border-2 border-black text-black rounded"
          onClick={onNewClick}
        >
          New
        </button>
      </div>
    </div>
  );
}
