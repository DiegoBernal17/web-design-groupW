import React from "react";
import FormHeader from "./FormHeader";

const Form = ({ children, onSubmit }) => {
  return (
    <>
      <FormHeader />
      <form className="form" onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
};

export default Form;
