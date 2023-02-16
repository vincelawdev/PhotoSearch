import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';
import { Photos, Photo } from '../../components/Photos';

const Results = () => {
  const { searchResults } = useSelector((state) => ({
    searchResults: state.form.searchResults,
  }));

  const renderSearchResults = () => searchResults.map(photo => (
    <a key={photo.id} href={photo.links.html} target="_blank" rel="noreferrer"><Photo src={photo.urls.thumb} alt={photo.alt_description} /></a>
  ));  

  if (Array.isArray(searchResults) && searchResults.length > 0) {
    return (
      <Container>
        <h1>Photo Search Form Results</h1>
        <Photos>
          {renderSearchResults()}
        </Photos>
      </Container>
    );
  }

  return null;
};
  
export default Results;
