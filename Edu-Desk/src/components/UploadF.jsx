import { useState, useEffect } from "react";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    uploader: "",
    file: null,
  });

  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: ensure required fields
    if (
      !formData.title ||
      !formData.subject ||
      !formData.uploader ||
      !formData.file
    ) {
      alert("Please fill all fields and choose a file");
      return;
    }

    // Create new note object
    const newNote = {
      id: Date.now(),
      title: formData.title,
      subject: formData.subject,
      uploader: formData.uploader,
      fileName: formData.file.name,
    };

    // Update notes list and save to localStorage
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Clear form
    setFormData({
      title: "",
      subject: "",
      uploader: "",
      file: null,
    });

    alert("Note uploaded successfully!");
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Upload Your Notes
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Subject
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">Select subject</option>
              <option value="OS">Operating System</option>
              <option value="DSA">Data Structures</option>
              <option value="Python">Python</option>
              <option value="CN">Computer Networks</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="uploader"
              value={formData.uploader}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Upload File
            </label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Upload
          </button>
        </form>

        {/* Display uploaded notes */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Uploaded Notes
          </h3>

          {notes.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">
              No notes uploaded yet.
            </p>
          ) : (
            <ul className="space-y-3">
              {notes.map((note) => (
                <li
                  key={note.id}
                  className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4 rounded"
                >
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {note.title}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Subject: {note.subject} | Uploaded by: {note.uploader}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      File: {note.fileName}
                    </p>
                  </div>
                  <button
                    className="text-blue-600 hover:underline"
                    disabled
                    title="Download not implemented"
                  >
                    Download 🚫
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadForm;
