import NewsHeader from "./NewsHeader";
import BtnNext from "./BtnNext";
import BtnBack from "./BtnBack";
import ScrollToTop from "./ScrollToTop";
import { questions } from "../data/FormQuestions"; 
import { useState } from "react";
import FormInput from "./FormInput";

const UserData = ({onNext, onPrev}) => {

    const [isFocused, setIsFocused] = useState(false);
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
    });
    const handleInputChange = (field) => (event) => {
        setInputValues({ ...inputValues, [field]: event.target.value });
    };
      
    return(
        <div className="flex flex-col justify-center items-center">
            <ScrollToTop />
            <NewsHeader 
                title="Please fill out this Form"
            />

            <div className="w-full">
                <div className="mt-10 lg:mt-16 mx-4 md:mx-8 lg:mx-28 2xl:max-w-screen-2xl lg:mx-auto space-y-4 space-y-6">
                    <FormInput 
                        type="text"
                        label="Name"
                        value={inputValues.name}
                        onChange={handleInputChange('name')}
                        onFocus={() => console.log()}
                        onBlur={() => console.log()}
                    />
                    <FormInput 
                        type="email"
                        label="Email"
                        value={inputValues.email}
                        onChange={handleInputChange('email')}
                        onFocus={() => console.log()}
                        onBlur={() => console.log()}
                    />
                    <FormInput 
                        type="tel"
                        label="Phone Number"
                        value={inputValues.phoneNumber}
                        onChange={handleInputChange('phoneNumber')}
                        onFocus={() => console.log()}
                        onBlur={() => console.log()}
                    />
                    <FormInput 
                        type="text"
                        label="Address"
                        value={inputValues.address}
                        onChange={handleInputChange('address')}
                        onFocus={() => console.log()}
                        onBlur={() => console.log()}
                    />
                </div>
            </div>

            <div className="w-full">
                <div className="flex flex-row items-center justify-center mt-8 lg:mt-10 mx-4 md:mx-8 lg:mx-28 2xl:max-w-screen-2xl lg:mx-auto gap-4 lg:gap-6">
                    <div className="w-full">
                        <div onClick={onPrev}><BtnBack title="back"/></div>
                    </div>
                    <div className="w-full">
                        <div onClick={onNext}><BtnNext title="next"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserData;