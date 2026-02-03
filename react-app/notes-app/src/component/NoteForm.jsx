import { useState } from "react";


const NoteForm = () => {
   const [formData, setFormData]=useState(
    {
        title:'',
        category:'Work',
        priority:'Medium',
        description:''
    



    }

   )
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Form Submitted',formData);


   }
   const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value,
    })
   }
    
    return  <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
                Title
            </label>
            <input
            name='title' 
            type="text" 
            className="w-full p-2 border rounded-lg"
            value={formData.title}
            onChange={handleChange}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">
                Priority
            </label>
            <select 
            name='priority'
            type="text" 
            className="w-full p-2 border rounded-lg"
            value={formData.priority}
            onChange={handleChange}
            >
                <option value="High">{"\u{1F534}"} High</option>
                <option value="Medium">{"\u{1F7E1}"} Medium</option>
                <option value="Low"> {"\u{1F7E2}"} Low</option>

            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
                Category
            </label>
            <select 
            name='category'
            type="text" 
            className="w-full p-2 border rounded-lg"
            value={formData.category}
            onChange={handleChange}
            >
                <option value="Work">{"\u{1F4C1}"} Work</option>
                <option value="Personal">{"\u{1F3E0}"} Personal</option>
                <option value="Ideas">{"\u{1F4A1}"} ideas</option>

            </select>
        </div>
         <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
                Description
            </label>
            <textarea 
            name='description'
            type="text" 
            className="w-full p-2 border rounded-lg"
            value={formData.description}
            onChange={handleChange}
            ></textarea>
            <button className="w-full bg-purple-500 text-white py-2 roundedlg cursor pointer hover:bg-purple-700">Add Note</button>
        </div>
    </form> ;
}
 
export default NoteForm;