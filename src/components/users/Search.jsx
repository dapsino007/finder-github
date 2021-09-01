import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
  
    const [userTextInput, setText] = useState('');
  
    const onSubmit = e => {
      e.preventDefault();
      if (userTextInput === '') {
        alertContext.setAlert('Please enter something', 'light');
      } else {
        githubContext.searchUsers(userTextInput);
        setText('');
      }
    };
  
    const onChange = e => setText(e.target.value);
  
    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={userTextInput}
            onChange={onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {githubContext.users.length > 0 && (
          <button
            className='btn btn-light btn-block'
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  };
  

export default Search
