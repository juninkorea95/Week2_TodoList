import React from 'react';

const InputBox = ({ title, content, setTitle, setContent, handleSubmit, handleKeyDown }) => {
  return (
    <div className="inputBox-style">
      <label className='input-label'>제목:</label>
      <input className='input-button'
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      
      <label className = 'input-label'>내용:</label>
      <input className='input-button'
        type="text" 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="submit-button" onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default InputBox;
