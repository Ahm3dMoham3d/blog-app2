import { api } from "../utils/axios";
import { useState } from "react";
export default function AddPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [added, setAdded] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(e);
        api
          .post("https://dummyjson.com/posts/add", {
            userId: 1,
            title,
            body,
          })
          .then(() => {
            setAdded(true);
            setTitle("");
            setBody("");
          });
      }}
      className="max-w-screen-lg mx-auto"
    >
      <h4 className="mb-4 text-4xl">Create Post</h4>
      {added && (
        <div className="p-4 mb-4 text-sm rounded-lg bg-blue-50 " role="alert">
          <span className="font-medium">Post added</span> Successfully
        </div>
      )}

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="first_name"
        className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="Title"
        required
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        id="first_name"
        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="Content"
        required
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Send
      </button>
    </form>
  );
}
