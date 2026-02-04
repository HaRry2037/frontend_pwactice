import { useState } from "react";
import TextInput from "./Input/TextInput";
import SelectInput from "./Input/SelectInput";
import TextArea from "./Input/TextArea";


const NoteForm = ({notes,setNotes}) => {
   const [formData, setFormData]=useState(
    {
        title:'',
        category:'Work',
        priority:'Medium',
        description:''
    }
    

   );
    const [isFormVisible,setIsFormVisible]=useState(false);

   const handleSubmit=(e)=>{
    e.preventDefault();
    // validation
    if(!formData.title || !formData.description) return;
    //create note object

    const newNote={id:Date.now(),...formData};


    //Add notes
    setNotes([newNote,...notes]);
    // reset form data
    setFormData({
        title:'',
        category:'Work',
        priority:'Medium',
        description:'',
    })

   }
   const handleChange=(e)=>{
       setFormData({
           ...formData,
           [e.target.name]:e.target.value,
        })
    }
    
    return ( 
        <>
        {/* button toggler */}
        <button onClick={()=>setIsFormVisible(!isFormVisible)} className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-300 transition mb-4">
         {isFormVisible
  ? `${"\u{2716}"} Hide form`
  : `${"\u{2795}"} Add new note`
}
        </button>


        {/* form */}
        {isFormVisible && <form onSubmit={handleSubmit} className="mb-6">
      <TextInput
      label='Title'
      name='title'
      value={formData.title}
      onChange={handleChange}
      
      
    //   
      
      />

      <SelectInput
      label='Priority'
      name='priority'
      value={formData.priority}
      onChange={handleChange}
      options={[
        {value:'High', label:'🔴 High'},
        {value:'Medium', label:'🟡 Medium'},
        {value:'Low', label:'🟢 Low'}
      ]} 
      
      
      />

          <SelectInput
      label='Category'
      name='category'
      value={formData.category}
      onChange={handleChange}
      options={[
        {value:'Work', label:'📁 Work'},
        {value:'Personal', label:'🏠 Personal'},
        {value:'Idea', label:'💡 Idea'}
      ]}   />
      <TextArea
      label='Description'
      name='description'
      value={formData.description}
      onChnage={handleChange}
      required
      />
        



         <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-700">Add Note</button>
    </form> }
    
    </>
     );
}
 
export default NoteForm;