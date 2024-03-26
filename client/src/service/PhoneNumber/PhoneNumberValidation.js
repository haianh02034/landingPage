import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneNumberValidation.css'; // Import CSS file here

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    // Loại bỏ các ký tự không phải là số khỏi số điện thoại
    const cleanedPhoneNumber = value.replace(/[^0-9+]/g, '');
    setPhoneNumber(cleanedPhoneNumber);
    setValid(validatePhoneNumber(cleanedPhoneNumber));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div class="">
      <label>
        <PhoneInput
          country={'in'}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
        />
      </label>
      {!valid && (
        <p className='text-range'>Please enter a valid phone number.</p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;
