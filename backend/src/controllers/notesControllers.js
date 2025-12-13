import Note from "../models/Note.js";
export async function getNotes(req, res) {
  try {
    const note = await Note.find().sort({ createdAt: -1 });
    return res.status(200).json(note);
  } catch (e) {
    console.error("Error in getNotes Controller", e);
    return res.status(500).json("Oops, Internal server error");
  }
  // res.status(200).json({message:"5 Post unread!"})
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.status(200).json(note);
  } catch (e) {
    console.error("Error in getNoteById Controller", e);
    return res.status(500).json("Internal server error");
  }
  // res.status(200).json({message:"Post updated successfully!"})
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    return res.status(201).json(savedNote);
  } catch (e) {
    console.error("Error in createNote Controller", e);
    return res.status(500).json("Internal server error");
  }
  // res.status(201).json({message:"Post created successfully!"})
}
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: { title, content } },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    return res.status(200).json(updatedNote);
  } catch (e) {
    console.error("Error in updateNote Controller", e);
    return res.status(500).json("Internal server error");
  }
  // res.status(200).json({message:"Post updated successfully!"})
}
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    return res.status(200).json(deletedNote);
  } catch (e) {
    console.error("Error in deleteNote Controller", e);
    return res.status(500).json("Internal server error");
  }
  // res.status(200).json({message:"Post deleted successfully!"})
}
