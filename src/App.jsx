import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CarInformation from "./components/Form/CarInformation";
import PersonalData from "./components/Form/PersonalData";
import PaymentMethod from "./components/Form/PaymentMethod";
import Comments from "./components/Form/Comments";
import Checks from "./components/Form/Checks";

const App = () => {
  const [formData, setFormData] = useState({
    model: "",
    version: "",
    state: "",
    distributor: "",
    names: "",
    paternalName: "",
    maternalName: "",
    email: "",
    phoneNumber: "",
    contactMethod: "",
    paymentType: "",
    initialPayment: "",
    paymentPeriod: "",
    comments: "",
    privacyPolicy: false,
    promotions: false,
  });

  const handleInput = ({ target: { name, value, checked, type } }) => {
    setFormData((formData) => ({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (ev) => ev.preventDefault();

  return (
    <div>
      <Header />
      <Form onSubmit={handleSubmit}>
        <CarInformation
          model={formData.model}
          version={formData.version}
          state={formData.state}
          distributor={formData.distributor}
          handleInput={handleInput}
        />
        <PersonalData
          names={formData.names}
          paternalName={formData.paternalName}
          maternalName={formData.maternalName}
          email={formData.email}
          phoneNumber={formData.phoneNumber}
          contactMethod={formData.contactMethod}
          handleInput={handleInput}
        />
        <PaymentMethod
          paymentType={formData.paymentType}
          initialPayment={formData.initialPayment}
          paymentPeriod={formData.paymentPeriod}
          handleInput={handleInput}
        />
        <Comments comments={formData.comments} handleInput={handleInput} />
        <Checks
          privacyPolicy={formData.privacyPolicy}
          promotions={formData.promotions}
          handleInput={handleInput}
        />
      </Form>
    </div>
  );
};

export default App;
