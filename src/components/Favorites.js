import React from 'react';
import { Link } from 'react-router-dom';

import { PoemCard } from './PoemCard';

export const Favorites = () => {

  const [favoritePoems, setFavoritePoems] = React.useState([]);

  const setPoems = () => {
    const keys = Object.keys(localStorage);
    const poems = [];
    for (let i = 0; i < keys.length; i++) {
      poems.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setFavoritePoems(poems);
  }

  const handleRemoveFromFavorites = (id) => {
    localStorage.removeItem(id.toString());
    setPoems();
  }

  React.useEffect(() => {
    setPoems();
  }, [])


  return (
    <>
      <h2>
        Избранное
      </h2>
      <Link
        to="/"
      >
        Назад
      </Link>
      <ul>
        {favoritePoems && favoritePoems.map(poem => (
          <PoemCard key={poem.id} poemData={poem} handleRemoveFromFavorites={handleRemoveFromFavorites}/>
        ))}
      </ul>
    </>
  )
}
