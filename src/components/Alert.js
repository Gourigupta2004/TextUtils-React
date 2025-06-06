import React from 'react';

export default function Alert(props) {

  //Function to capitalize the first letter of the alert type
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{height : '50px'}}>
      {/* //remeber - We use {} to tell JSX to evaluate JavaScript. */}
      {/* props.alert && (....) - this is a conditional rendering pattern */}

      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}

        </div>
      )}
    </div>
  );
}
