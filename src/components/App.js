import React, { useState } from "react";
import Form from './Form';

function App (props) {
  const [callback, setCallback] = useState(false);

  const handleSubmit = (data) => {
    setCallback(true)
  }

    return (
      <Form
        handleSubmit={handleSubmit}
        callback={callback}
      />
    );

}

export default App;
