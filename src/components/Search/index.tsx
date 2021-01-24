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
  const input = useRef<HTMLInputElement>(null);
  const { setQuery } = useMovie();
  const filterMovies = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const { current } = input;
      setQuery(current?.value);
    },
    [setQuery]
  );

  return (
    <Form onSubmit={filterMovies}>
      <input placeholder="Search for a movie" ref={input} />
      <button type="submit">
        <SearchIcon className="search" />
      </button>
    </Form>
  );
}

export default Search;
