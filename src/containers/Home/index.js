import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import Container from '../../components/Container';
import FormErrorBox from '../../components/FormErrorBox';
import FormStatusBox from '../../components/FormStatusBox';
import { setFormField, setFormErrors, searchCustomers } from './actions';

const Form = () => {
  const { keyword, formFields, formErrors, searchLoading, searchError, searchResults } = useSelector((state) => ({
    keyword: state.form.formFields.keyword,
    formFields: state.form.formFields,
    formErrors: state.form.formErrors,
    searchLoading: state.form.searchLoading,
    searchError: state.form.searchError,
    searchResults: state.form.searchResults,
  }));
  const dispatch = useDispatch();

  const validateFormFields = () => {
    const errors = [];

    if (keyword === '') {
      errors.push('Keyword is a required field');
    }

    if (keyword.length < 3) {
      errors.push('Please enter a minimum of three characters for the keyword');
    }

    dispatch(setFormErrors(errors));

    if (errors.length === 0) {
      return true;
    }

    return false;
  };

  const handleChange = (key, value) => {
    dispatch(setFormField(key, value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    if (validateFormFields()) {
      dispatch(searchCustomers(formFields));
    }
  };  

  // redirect to results page if results found
  if (Array.isArray(searchResults) && searchResults.length > 0) {
    return <Navigate to="/results" />
  }

  return (
    <Container>
      <h1>Photo Search Form</h1>
      <h2>Please enter a keyword.</h2>
      
      <FormStatusBox message={searchLoading ? 'Searching...' : ''} />
      <FormStatusBox message={searchError || ''} />
      <FormStatusBox message={(Array.isArray(searchResults) && searchResults.length === 0 && !searchLoading) ? 'There is no such photo.' : ''} />
      <FormErrorBox errors={formErrors} />
      
      <form onSubmit={event => handleSubmit(event)}>        
        <input id="keyword" type="text" value={keyword} onChange={event => handleChange('keyword', event.target.value)} />
            
        <button type="submit">Search</button>
      </form>
    </Container>
  );
}
  
export default Form;
