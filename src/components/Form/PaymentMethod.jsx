import React from "react";
import { PAYMENT_PERIODS_IN_MONTHS } from "../../constants";
import Select from "../Select";
import Input from "../Input";
import SectionHeader from "../SectionHeader";

const PaymentMethod = ({
  paymentType,
  initialPayment,
  paymentPeriod,
  handleInput,
}) => (
  <>
    <SectionHeader title="Forma de pago" subtitle="PERSONALIZA TU COTIZACIÓN" />
    <div className="container p-0">
      <div className="row">
        <label className="form-label">ELIGE TU TIPO DE PAGO</label>
      </div>
      <div className="row">
        <div className="col d-grid">
          <input
            type="radio"
            className="btn-check"
            name="paymentType"
            id="cash"
            onChange={handleInput}
            value="CASH"
            //defaultChecked
          />
          <label className="btn btn-outline-primary btn-lg mt-0" htmlFor="cash">
            <i className="fas fa-money-bill-alt mr-2" /> Contado
          </label>
        </div>
        <div className="col d-grid">
          <input
            type="radio"
            className="btn-check"
            name="paymentType"
            id="credit"
            onChange={handleInput}
            value="CREDIT"
          />
          <label
            className="btn btn-outline-primary btn-lg mt-0"
            htmlFor="credit"
          >
            <i className="fas fa-credit-card mr-2" /> Crédito
          </label>
        </div>
      </div>
      <div className="row mt-4">
        {paymentType === "CREDIT" && (
          <div className="container-lg">
            <div className="row">
              <div className="col-md-6">
                <Input
                  name="initialPayment"
                  label="CANTIDAD DE ENGANCHE"
                  type="number"
                  placeholder="80,000.00"
                  onChange={handleInput}
                  value={initialPayment}
                />
              </div>
              <div className="col-md-6">
                <Select
                  name="paymentPeriod"
                  label="PLAZO"
                  onChange={handleInput}
                  value={paymentPeriod}
                  options={PAYMENT_PERIODS_IN_MONTHS.map(
                    (number) => `${number} MESES`
                  )}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
);

export default PaymentMethod;
