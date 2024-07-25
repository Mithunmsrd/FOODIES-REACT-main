import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// const Payment = () => {
//   return (
//     <div>
      {/* <body class="bg-amber-300">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Restaurant Payment Gateway</h1>
        <form action="" class="max-w-lg mx-auto bg-slate-300 p-8 rounded shadow-lg">
            <div class="mb-4">
                <label for="card_number" class="block text-sm font-medium text-gray-700">Card Number</label>
                <input type="text" id="card_number" name="card_number" placeholder="Enter card number" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
           
            <div class="mb-4">
                <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
                <input type="text" id="amount" name="amount" placeholder="Enter amount" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Pay Now</button>
            </div>
        </form>
    </div>
</body> */}
      

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to payment confirmation page with the amount as a route parameter
    history.push(`/payment-confirmation/${amount}`);
  }

  return (
    <div className="bg-amber-300">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Restaurant Payment Gateway</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-slate-300 p-8 rounded shadow-lg">
          <div className="mb-4">
            <label htmlFor="card_number" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              id="card_number"
              name="card_number"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;

//     </div>
//   )
// }

// export default Payment
