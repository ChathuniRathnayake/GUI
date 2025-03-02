import React from 'react';
import SignupForm from '../../Components/SignUpForm/SignupForm';
import './SignUpPage.css';

export default function SignUpPage() {
  return (
    <main>
    <div className="pageContainer">
      <div className="contentWrapper">
        <div className="rowContainer">
          <div className="formColumn">
            <SignupForm />
          </div>
          <div className="imageColumn">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/799fd9adc43fe0be473de6cddeb99f5b070765e4b2593555ea59abceaef32819?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
              className="signupImage"
              alt="Signup illustration"></img> 
            
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
