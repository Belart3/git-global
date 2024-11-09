import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser'
import { Progress } from "antd";
import FormStart from "../components/FormStart";
import Citizenship from "../components/Citizenship";
import FormService from "../components/FormService";
import UserData from "../components/UserData";
import FinalForm from "../components/FinalForm";

const FormPage = ( ) => {
    const totalSteps = 5;
    const [currentStep, setCurrentStep] = useState(1);
    const [formData , setFormData] = useState({
        citizenshipSelection: '',
        formServiceSelection: '',
        userName: '',
        userEmail: '',
        phoneNumber: '',
        address: '',
        contactMethod: '',
    })
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        const templateParams = {
            citizenship: formData.citizenshipSelection,
            service: formData.formServiceSelection,
            name: formData.userName,
            email: formData.userEmail,
            phone: formData.phoneNumber,
            address: formData.address,
            contactMethod: formData.contactMethod,
        };
        emailjs.send(
            'service_a5qhz9b',
            'template_21n13ib',
            templateParams,
            'hbHBFpUs0m9_O0fCA'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }).catch((error) => {
            console.log('FAILED...', error);
        });
    };

    const handleNextStep = () => {
        if( currentStep < totalSteps){
            setCurrentStep(currentStep + 1);
        }
    };
    const handlePrevStep = () => {
        if (currentStep > 1 ){
            setCurrentStep(currentStep - 1);
        }
    };
    const updateFormData = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    useEffect(() => {
        document.title = 'GIT Global - Form';
    }, []);

    return(
        <div className="w-full bg-Background">
            <div className="pt-[88px] lg:pt-36 mx-4 max-w-screen-md px-0 md:px-8 md:mx-auto">
                <div className="flex space-x-4 lg:space-x-6 mb-16 lg:mb-[100px]">
                    <div className="flex-1">
                        <div className="relative h-full">
                            <Progress 
                                percent={currentStep / totalSteps * 100}
                                strokeColor="#001F3D"
                                showInfo={false}
                                strokeWidth="4px"
                            />
                            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-evenly gap-4">
                                <div className="bg-Background h-full w-4 lg:w-6"></div>
                                <div className="bg-Background h-full w-4 lg:w-6"></div>
                                <div className="bg-Background h-full w-4 lg:w-6"></div>
                                <div className="bg-Background h-full w-4 lg:w-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="w-full" onSubmit={sendEmail} ref={form}>
                    {(() => {
                        switch (currentStep) {
                            case 1:
                                return <FormStart onNext={handleNextStep}/>;
                            case 2:
                                return (
                                    <Citizenship 
                                        // function for the back button                                    
                                        onPrev={handlePrevStep} 
                                        //function for the next button
                                        onNext={handleNextStep} 
                                        selectedValue={formData.citizenshipSelection}
                                        onSelectionChange={(value) => updateFormData('citizenshipSelection', value)}
                                    />
                                )
                            case 3:
                                return (
                                    <FormService 
                                        onPrev={handlePrevStep} 
                                        onNext={handleNextStep} 
                                        selectedValue={formData.formServiceSelection}
                                        onSelectionChange={(value) => updateFormData('formServiceSelection', value)}
                                    /> 
                                )
                            case 4:
                                return (
                                    <UserData 
                                        onPrev={handlePrevStep} 
                                        onNext={handleNextStep}
                                        formData={formData}
                                        setFormData={setFormData}
                                        userName={formData.userName}
                                        userEmail={formData.userEmail}
                                        phoneNumber={formData.phoneNumber}
                                        address={formData.address}
                                        onNameChange={(value) => updateFormData('userName', value)}
                                        onEmailChange={(value) => updateFormData('userEmail', value)}
                                        onPhoneChange={(value) => updateFormData('phoneNumber', value)}
                                        onAddressChange={(value) => updateFormData('address', value)}
                                    />
                                )
                            case 5:
                                return (
                                    <FinalForm
                                        onPrev={handlePrevStep} 
                                        onNext={handleNextStep}
                                        selectedMethod={formData.contactMethod}
                                        onSelectionChange={(value) => updateFormData('contactMethod', value)}
                                    />
                            )
                            default:
                                return null;
                        }
                    })()}
                </form>

            </div>
        </div>
    )
}

export default FormPage;