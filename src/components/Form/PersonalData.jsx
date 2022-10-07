import React from "react";
import SectionHeader from "../SectionHeader";
import Input from "../Input";

const PersonalData = ({
  names,
  paternalName,
  maternalName,
  email,
  phoneNumber,
  contactMethod,
  handleInput,
}) => (
  <>
    <SectionHeader
      title="Datos personales"
      subtitle="ESCRIBE TUS DATOS PERSONALES"
    />
    <div className="container-lg">
      <div className="row">
        <div className="col-md-4">
          <Input
            name="names"
            label="NOMBRE (S)"
            placeholder="EJ. JUAN"
            onChange={handleInput}
            value={names}
          />
        </div>
        <div className="col-md-4">
          <Input
            name="paternalName"
            label="APELLIDO PATERNO"
            placeholder="EJ. LÓPEZ"
            onChange={handleInput}
            value={paternalName}
          />
        </div>
        <div className="col-md-4">
          <Input
            name="maternalName"
            label="APELLIDO MATERNO"
            placeholder="EJ. TOVAR"
            onChange={handleInput}
            value={maternalName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Input
            name="email"
            label="EMAIL"
            type="email"
            placeholder="TU@EMAIL.COM"
            onChange={handleInput}
            value={email}
          />
        </div>
        <div className="col-md-4">
          <Input
            name="phoneNumber"
            label="TELÉFONO"
            type="tel"
            placeholder="01-844-439-06"
            onChange={handleInput}
            value={phoneNumber}
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
    <div className="container p-0">
      <div className="row">
        <label className="form-label">DESEO SER CONTACTADO POR</label>
      </div>
      <div className="row text-center">
        <div className="col d-grid">
          <input
            //defaultChecked
            type="radio"
            className="btn-check"
            name="contactMethod"
            onChange={handleInput}
            id="contactMethod-phone"
            value="phone"
          />
          <label
            className="btn btn-outline-primary btn-lg mt-0"
            htmlFor="contactMethod-phone"
          >
            TELÉFONO
          </label>
        </div>
        <div className="col d-grid">
          <input
            type="radio"
            className="btn-check"
            name="contactMethod"
            onChange={handleInput}
            id="contactMethod-email"
            value="email"
          />
          <label
            className="btn btn-outline-primary btn-lg mt-0"
            htmlFor="contactMethod-email"
          >
            EMAIL
          </label>
        </div>
        <div className="col d-grid">
          <input
            type="radio"
            className="btn-check"
            name="contactMethod"
            onChange={handleInput}
            id="contactMethod-both"
            value="both"
          />
          <label
            className="btn btn-outline-primary btn-lg mt-0"
            htmlFor="contactMethod-both"
          >
            AMBOS
          </label>
        </div>
      </div>
    </div>
  </>
);

export default PersonalData;
