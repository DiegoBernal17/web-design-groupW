import React from "react";
import FormHeader from "../FormHeader";

const Form = ({ children }) => {
  return (
    <>
      <FormHeader />
      <form className="form">{children}</form>
    </>
  );
};

export default Form;
