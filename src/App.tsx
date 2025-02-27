import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(formData.name);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-600 mb-1">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )

}

export default App