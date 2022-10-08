import React from "react";

const Checks = ({ privacyPolicy, promotions, handleInput }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="privacy-policy"
            name="privacyPolicy"
            onChange={handleInput}
            checked={privacyPolicy}
          />
          <label className="form-check-label" htmlFor="privacy-policy">
            He leìdo y acepto el <u>aviso de privacidad</u>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="promotions"
            name="promotions"
            onChange={handleInput}
            checked={promotions}
          />
          <label className="form-check-label" htmlFor="promotions">
            No deseo recibir promociones
          </label>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-end align-items-center">
        <button type="submit" className="btn btn-outline-primary btn-lg">
          Enviar
        </button>
      </div>
    </div>
  </div>
);

export default Checks;
