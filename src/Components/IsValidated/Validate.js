import React from 'react';
import ReactDOM from 'react-dom';

function validate(ID, password, unitcode) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
    if (ID.length === 0) {
      errors.push("ID can't be empty");
    }
  
    if (unitcode.length > 8) {
      errors.push("Email should be 8 charcters long");
    }
    
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
  
    return errors;
  }