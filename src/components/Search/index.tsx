import React, { useCallback, useRef } from 'react';
import { useMovie } from '../../hooks/useMovie';
import { Form } from './styles';

interface IconProps {
  className?: string;
  onClick?: () => void;
}

function SearchIcon({ className }: IconProps): JSX.Element {
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

function ClearIcon({ className, onClick }: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function Search(): JSX.Element {
  const { input, setQuery } = useMovie();
  const { value, onChange, reset } = input;
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setQuery(value);
  };
  const clearSearch = () => {
    setQuery(undefined);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <button type="submit">
        <SearchIcon />
      </button>
      <input
        placeholder="Search for a movie"
        value={value}
        onChange={onChange}
      />
      {value && <ClearIcon className="clear" onClick={clearSearch} />}
    </Form>
  );
}

export default Search;
