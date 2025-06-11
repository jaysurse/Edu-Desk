import { useState, useEffect } from "react";

const staticNotes = [
  {
    id: "static1", // give unique ids to static notes
    title: "Operating System Notes",
    subject: "OS",
    uploader: "Shree Jejurikar",
  },
  {
    id: "static2",
    title: "Data Structures (Stack & Queue)",
    subject: "DSA",
    uploader: "Sujay Dongre",
  },
  {
    id: "static3",
    title: "Python Basics Notes",
    subject: "Python",
    uploader: "Jay Surse",
  },
];

const NotesPreview = () => {
  const [savedNotes, setSavedNotes] = useState([]);

  // Load saved notes from localStorage on mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setSavedNotes(storedNotes);
  }, []);

  // Remove note by id from savedNotes and localStorage
  const handleDelete = (id) => {
    const updatedNotes = savedNotes.filter((note) => note.id !== id);
    setSavedNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  // Combine saved and static notes for display
  const allNotes = [...savedNotes, ...staticNotes];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Recent Notes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allNotes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {note.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  📘 Subject:{" "}
                  <span className="font-medium">{note.subject}</span>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  🧑 Uploaded by:{" "}
                  <span className="font-medium">{note.uploader}</span>
                </p>
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  disabled
                >
                  Download 🚫
                </button>

                {/* Show Delete only for savedNotes (uploaded notes) */}
                {savedNotes.some((n) => n.id === note.id) && (
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotesPreview;
