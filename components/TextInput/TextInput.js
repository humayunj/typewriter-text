import { useState } from "react";

export default function TextInput({ onInputFinish }) {
  let [text, setText] = useState("");
  let [author, setAuthor] = useState("");
  return (
    <div className="container w-full flex flex-col items-center ">
      <h1 className="text-xl font-bold mb-4">Write Your Text</h1>
      <div className="w-full sm:w-1/2 h-full flex flex-col gap-1">
        <div className="flex-1">
          <textarea
            value={text}
            required={true}
            placeholder="Write Something..."
            onChange={(e) => setText(e.target.value)}
            rows={5}
            className="w-full  border-2 rounded p-1 text-black border-gray-300 focus:border-gray-900 focus:outline-none "
          />
        </div>
        <div className="flex-0 flex flex-col  mt-4 ">
          <label className="text-md font-bold mb-2 ">Author</label>

          <input
            type="text"
            value={author}
            placeholder="Author name"
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full h-full border-2 rounded p-3 text-black border-gray-300 focus:border-gray-900 focus:outline-none "
          />
        </div>
      </div>
      <button
        className="px-3 py-2 text-xl bg-black text-white rounded mt-4 "
        onClick={() => onInputFinish(text,author)}
      >
        Next
      </button>
    </div>
  );
}
