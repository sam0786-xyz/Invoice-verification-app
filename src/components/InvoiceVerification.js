import React, { useState } from 'react';
import { verifyInvoice } from '../services/firebaseService';

function InvoiceVerification() {
  const [companyName, setCompanyName] = useState('');
  const [financialData, setFinancialData] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationResult = await verifyInvoice(companyName, financialData);
    setResult(verificationResult);
  };

  return (
    <div className="invoice-verification">
      <h2>Invoice Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <textarea
          placeholder="Financial Data (JSON format)"
          value={financialData}
          onChange={(e) => setFinancialData(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
      {result && (
        <div className="result">
          <h3>Verification Result:</h3>
          <p>Altman-Z Score: {result.altmanZScore}</p>
          <p>SOM Risk Category: {result.somRiskCategory}</p>
          <p>Credit-worthiness: {result.creditWorthiness}</p>
        </div>
      )}
    </div>
  );
}

export default InvoiceVerification;