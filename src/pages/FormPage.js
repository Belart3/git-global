import { useState } from "react";
import { Progress } from "antd";
import FormStart from "../components/FormStart";
import Citizenship from "../components/Citizenship";
import FormService from "../components/FormService";

const FormPage = ( ) => {
    const totalSteps = 6;
    const [currentStep, setCurrentStep] = useState(1);
    const [formData , setFormData] = useState({
        citizenshipSelection: '',
        formServiceSelection: '',
    })

    const handleNextStep = () => {
        if( currentStep < totalSteps){
            setCurrentStep(currentStep + 1);
            console.log(currentStep)
        }   
    };
    const handlePrevStep = () => {
        if (currentStep > 1 ){
            setCurrentStep(currentStep - 1);
            console.log(currentStep)
        }
    };
    const updateFormData = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return(
        <div className="w-full bg-Background ">
            <div className="pt-[88px] lg:pt-36 max-w-screen-md md:mx-auto">
                <div className="flex space-x-4 lg:space-x-6 mb-16 lg:mb-[100px] mx-4 md:mx-8 lg:mx-28 2xl:max-w-screen-2xl lg:mx-auto">
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
                                <div className="bg-Background h-full w-4 lg:w-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
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
                                return <Citizenship onPrev={handlePrevStep} onNext={handleNextStep}/>
                            case 5:
                                return <Citizenship onPrev={handlePrevStep} onNext={handleNextStep}/>
                            default:
                                return null;
                        }
                    })()}
                </div>

            </div>
        </div>
    )
}

export default FormPage;