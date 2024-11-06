import NewsHeader from "./NewsHeader";
import BtnNext from "./BtnNext";
import BtnBack from "./BtnBack";
import ScrollToTop from "./ScrollToTop";
import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import EmailInputComponent from "./EmailInputComponent";
import PhoneInputComponent from "./PhoneInputComponent";

const UserData = ({onNext, onPrev, userName, userEmail ,phoneNumber , address, setFormData,formData}) => {

    const [isFocused, setIsFocused] = useState(false);
    const handleInputChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };
    const [emailError, setEmailError] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setFormData({ ...formData, userEmail: newEmail }); 
        validateEmail(newEmail);
    };
    const handleNumberChange = (value) => {
        setFormData({ ...formData, phoneNumber: value });
    };

    useEffect(() => {
        if(userEmail !== ''){
            validateEmail(formData.userEmail);
        }
    }, [formData.userEmail]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setEmailError(!isValid);
        setValidEmail(isValid);
    };
      
    return(
        <div className="flex flex-col justify-center items-center">
            <ScrollToTop />
            <NewsHeader 
                title="Please fill out this Form"
            />

            <div className="w-full">
                <div className="mt-10 lg:mt-16 space-y-4 space-y-6">
                    <FormInput 
                        id="userName"
                        type="text"
                        label="Full Name (First name then last name)"
                        value={userName}
                        onChange={handleInputChange('userName')}
                        onFocus={() => console.log()}
                        onBlur={() => console.log()}
                    />
                    <EmailInputComponent 
                        id="userEmail"
                        emailError={emailError}
                        errorText="please enter a valid email address"
                        email={formData.userEmail}
                        handleEmailChange={handleEmailChange}
                        validateEmail={validateEmail}
                        type="email"
                        label="Email"
                        value={userEmail}
                        onChange={handleInputChange('userEmail')}
                    />
                    <PhoneInputComponent 
                        id="phoneNumber"
                        type="tel"
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={handleNumberChange}
                        onFocus={() => console.log()}
                        onBlur={() => console.log()}
                    />
                    <FormInput 
                        id="address"
                        type="text"
                        label="Address"
                        value={address}
                        onChange={handleInputChange('address')}
                        onFocus={() => console.log()}
                        onBlur={() => console.log()}
                    />
                </div>
            </div>

            <div className="w-full">
                <div className="flex flex-row items-center justify-center mt-8 lg:mt-10 gap-4 lg:gap-6">
                    <div className="w-full">
                        <div onClick={onPrev}><BtnBack title="back"/></div>
                    </div>
                    <div className="w-full">
                    <div onClick={onNext} >
                        <BtnNext title="next"  disabled={!userName || !phoneNumber || !address || !validEmail } />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default UserData;