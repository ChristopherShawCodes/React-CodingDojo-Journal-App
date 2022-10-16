import React,{useState} from 'react'
import '../App.css'

const Form = ({setEntries,entries}) => {

    const [thought,setThought] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setEntries([...entries,thought])
        setThought("")
    }

  return (
    <div>
    <form className='form' onSubmit={handleSubmit}>
        <label>
        <textarea id="entryField" placeholder='Submit Your Thoughts Here.......' cols="30" rows="10" onChange={e=>setThought(e.target.value)} value={thought}></textarea>
        </label>
        <br></br>
        <button className='btn btn-primary' type="submit" >Submit Thought</button>
    </form>
    </div>
  )
}

export default Form