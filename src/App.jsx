import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Comments from "./components/Form/Comments";
import PaymentMethod from "./components/Form/PaymentMethid";
import PersonalData from "./components/Form/PersonalData";
import FirstPart from "./components/Form/FirstPart";
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

  return (
    <div>
      <Header />
      <Form>
        <FirstPart
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
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-primary btn-lg">
            Enviar
          </button>
        </div>
      </Form>
    </div>
  );
};

export default App;
