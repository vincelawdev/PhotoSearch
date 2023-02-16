import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';

const Results = () => {
  const { searchResults } = useSelector((state) => ({
    searchResults: state.form.searchResults,
  }));

  const renderSearchResults = () => {
    const formattedSearchResults = [];

    return formattedSearchResults;
  };  

  if (Array.isArray(searchResults) && searchResults.length > 0) {
    return (
      <Container>
        <h1>Photo Search Form</h1>
        <table>
          <tbody>
            {renderSearchResults()}
          </tbody>
        </table>
      </Container>
    );
  }

  return null;
};
  
export default Results;
