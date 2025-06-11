import { useState, useEffect } from "react";

const NoteUpload = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage when page loads
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title || !file) return alert("Please enter title and choose file");

    const newNote = {
      id: Date.now(),
      title,
      fileName: file.name,
    };

    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Clear form
    setTitle("");
    setFile(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Upload a Note
      </h2>

      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>

      {/* Display notes */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          Uploaded Notes
        </h3>
        {notes.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">
            No notes uploaded yet.
          </p>
        ) : (
          <ul className="space-y-2">
            {notes.map((note) => (
              <li
                key={note.id}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded"
              >
                <span className="text-gray-800 dark:text-white">
                  {note.title} ({note.fileName})
                </span>
                <button className="text-blue-600 hover:underline" disabled>
                  Download 🚫
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NoteUpload;
