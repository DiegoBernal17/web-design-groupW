import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import FormHeader from "./components/FormHeader";
import Select from "./components/Select";
import {
  MODELS,
  VERSIONS,
  STATES,
  PAYMENT_PERIODS_IN_MONTHS,
} from "./constants";
import SectionHeader from "./components/SectionHeader";

const App = () => {
  const [selectedModel, setSelectedModel] = useState("");
  const handleSelectModel = (ev) => setSelectedModel(ev.target.value);

  const [paymentType, setPaymentType] = useState("CASH");
  const handlePaymentType = (ev) => setPaymentType(ev.target.value);

  return (
    <div>
      <Header />
      <FormHeader />
      <form className="form">
        <Select
          label="MODELO"
          options={MODELS}
          value={selectedModel}
          onChange={handleSelectModel}
        />
        <Select
          label="VERSION"
          options={selectedModel ? VERSIONS[selectedModel] : []}
        />
        <Select label="ESTADO" options={STATES} />
        <SectionHeader
          title="Datos personales"
          subtitle="ESCRIBE TUS DATOS PERSONALES"
        />
        <Input label="NOMBRE (S)" placeholder="EJ. JUAN" />
        <Input label="APELLIDO PATERNO" placeholder="EJ. LÓPEZ" />
        <Input label="APELLIDO MATERNO" placeholder="EJ. TOVAR" />
        <Input label="EMAIL" type="email" placeholder="TU@EMAIL.COM" />
        <Input label="TELÉFONO" type="tel" placeholder="01-844-439-06" />
        <div className="container">
          <div className="row">
            <label className="form-label">ELIJE TU TIPO DE PAGO</label>
          </div>
          <div className="row text-center">
            <div className="col">
              <input
                type="radio"
                className="btn-check"
                name="contactMethod"
                id="phone"
                defaultChecked
              />
              <label
                style={{ marginTop: 0 }}
                className="btn btn-outline-primary btn-lg"
                htmlFor="phone"
              >
                TELÉFONO
              </label>
            </div>
            <div className="col">
              <input
                type="radio"
                className="btn-check"
                name="contactMethod"
                id="phone"
                defaultChecked
              />
              <label
                style={{ marginTop: 0 }}
                className="btn btn-outline-primary btn-lg"
                htmlFor="phone"
              >
                EMAIL
              </label>
            </div>
            <div className="col">
              <input
                type="radio"
                className="btn-check"
                name="contactMethod"
                id="both"
              />
              <label
                style={{ marginTop: 0 }}
                className="btn btn-outline-primary btn-lg"
                htmlFor="both"
              >
                AMBOS
              </label>
            </div>
          </div>
        </div>
        <SectionHeader
          title="Forma de pago"
          subtitle="PERSONALIZA TU COTIZACIÓN"
        />
        <div className="container">
          <div className="row">
            <label className="form-label">ELIJE TU TIPO DE PAGO</label>
          </div>
          <div className="row">
            <div className="col d-grid">
              <input
                type="radio"
                className="btn-check"
                name="paymentType"
                id="cash"
                onChange={handlePaymentType}
                value="CASH"
                defaultChecked
              />
              <label
                style={{ marginTop: 0 }}
                className="btn btn-outline-primary btn-lg"
                htmlFor="cash"
              >
                Contado
              </label>
            </div>
            <div className="col d-grid">
              <input
                type="radio"
                className="btn-check"
                name="paymentType"
                id="credit"
                onChange={handlePaymentType}
                value="CREDIT"
              />
              <label
                style={{ marginTop: 0 }}
                className="btn btn-outline-primary btn-lg"
                htmlFor="credit"
              >
                Crédito
              </label>
            </div>
          </div>
          <div className="row" style={{ marginTop: 20 }}>
            {paymentType === "CREDIT" && (
              <>
                <Input
                  label="CANTIDAD DE ENGANCHE"
                  type="number"
                  placeholder="80,000.00"
                />
                <Select
                  label="PLAZO"
                  options={PAYMENT_PERIODS_IN_MONTHS.map(
                    (number) => `${number} MESES`
                  )}
                />
              </>
            )}
          </div>
        </div>
        <SectionHeader
          title="Comentarios"
          subtitle="NOS IMPORTAN TUS COMENTARIOS"
        />
        <div style={{ marginBottom: 40 }}>
          <label htmlFor="textarea" className="form-label">
            ¿DUDAS? ¿COMENTARIOS?
          </label>
          <textarea
            rows={4}
            className="form-control"
            placeholder="ESCRÍBENOS"
            id="textarea"
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="privacy-policy"
          />
          <label className="form-check-label" htmlFor="privacy-policy">
            He leìdo y acepto el <u>aviso de privacidad</u>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="promotions"
          />
          <label className="form-check-label" htmlFor="promotions">
            No deseo recibir promociones
          </label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-outline-primary btn-lg ">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
