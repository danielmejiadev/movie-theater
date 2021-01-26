import React, { useCallback, useRef } from 'react';
import { useMovie } from '../../hooks/useMovie';
import { Form } from './styles';

interface SearchIconProps {
  className?: string;
}

function SearchIcon({ className }: SearchIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function Search(): JSX.Element {
  const { input, setQuery } = useMovie();
  const { value, onChange } = input;
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setQuery(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        placeholder="Search for a movie"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </Form>
  );
}

export default Search;
