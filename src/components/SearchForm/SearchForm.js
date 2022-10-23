import { useState } from 'react';
import { PropTypes } from 'prop-types';


const SearchForm = ({ onSubmit }) => {
  const [movieName, setQuery] = useState('query' ?? '');

  const handleChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setQuery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(movieName); 
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Enter the title of the film"
          value={movieName}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;