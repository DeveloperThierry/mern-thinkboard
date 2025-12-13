import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return
    try{
      await axios.delete(`/api/notes/${id}`)
      toast.success('Note deleted successfully')
      navigate("/")
    }
    catch(error){
      console.log("Error deleting note", error)
      toast.error("Failed to delete note")
    }
  }
  const handleSave = async () => {
    if(!note.title.trim() || !note.content.trim()){
      toast.error("Title and content are required")
      return
    }
    setSaving(true)
    try {
      await axios.put(`/api/notes/${id}`, note)
      toast.success("Updated Successfully")
      navigate("/")
    } catch (error) {
      console.log("Error updating note", error.message)
      toast.error("Failed to update note")
    } finally{
      setSaving(false)
    }
  }
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`/api/notes/${id}`);
        setNote(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error fetching note", error.message);
        toast.error("Failed to load note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);
  while (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost">
            <ArrowLeftIcon className="size-5" />
            Back to notes
          </Link>
          <button onClick={handleDelete} className="btn btn-error btn-outline">
            <Trash2Icon className="size-5" />
            Delete Note
          </button>
        </div>
        <div className="card bg-base-100">
          <div className="card-body">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">
                  Title
                </span>
              </label>
              <input type="text" placeholder="Note title" value={note.title} onChange={(e)=>setNote({...note, title:e.target.value})} 
              className="input input-bordered" />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">
                  Content
                </span>
              </label>
              <textarea type="text" placeholder="Write your note here..." value={note.content} onChange={(e)=>setNote({...note, content:e.target.value})} 
              className="textarea textarea-bordered h-32" />
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
