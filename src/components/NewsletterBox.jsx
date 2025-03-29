import React, { useState } from 'react';

const NewsletterBox = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('u', 'YOUR_USER_ID'); // Replace with your Mailchimp unique user ID (u=...)
    formData.append('id', 'YOUR_LIST_ID'); // Replace with your Mailchimp list ID (id=...)
    
    try {
      const response = await fetch('https://YOUR_MAILCHIMP_URL', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubscribed(true);
        setErrorMessage('');
      } else {
        setErrorMessage('There was an issue subscribing. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Error: Unable to subscribe. Please try again later.');
    }
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Stay updated on our 2025 launch. </p>
      <p className='text-gray-400 mt-3'>
        We'll also send you a 20% discount code as a thank you.
      </p>

      {!isSubscribed ? (
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input 
            className='w-full sm:flex-1 outline-none' 
            type="email" 
            placeholder='Enter your email' 
            required
            value={email}
            onChange={onEmailChange}
          />
          <button type='submit' className='bg-black text-white text-xs px-10 py-4'>
            SUBSCRIBE
          </button>
        </form>
      ) : (
        <p className='text-green-500 text-lg'>Thank you for subscribing! Check your inbox for the discount.</p>
      )}

      {errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>}
    </div>
  );
};

export default NewsletterBox;
