import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Container from '../../components/Container';
import { Photos, Photo, PhotoBackLink } from '../../components/Photos';
import { resetForm } from '../Home/actions';

const Results = () => {
  const dispatch = useDispatch();
  const { searchResults, keyword } = useSelector((state) => ({
    searchResults: state.form.searchResults,
    keyword: state.form.formFields.keyword,
  }));

  const handleClick = () => {
    dispatch(resetForm());
  };

  const renderSearchResults = () => searchResults.map(photo => (
    <a key={photo.id} href={photo.links.html} target="_blank" rel="noreferrer"><Photo src={photo.urls.thumb} alt={photo.alt_description} /></a>
  ));  

  if (Array.isArray(searchResults) && searchResults.length > 0) {
    return (
      <Container>
        <h1>Photo Search Form Results for &quot;{keyword}&quot;</h1>
        <Photos>
          {renderSearchResults()}
        </Photos>
        <PhotoBackLink>
          <Link to="/" onClick={handleClick}>Back</Link>
        </PhotoBackLink>
      </Container>
    );
  }

  return null;
};
  
export default Results;
