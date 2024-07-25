import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentConfirmation = () => {
  const { amount } = useParams();

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Confirmation</h1>
        <p className="text-gray-600 mb-4">Amount Paid: Rs {amount}</p>
        <p className="text-gray-700">Thank you for your payment!</p>
      </div>
    </div>
  );
}

export default PaymentConfirmation;
