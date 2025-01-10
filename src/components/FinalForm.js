import NewsHeader from "./NewsHeader";
import BtnNext from "./BtnNext";
import BtnBack from "./BtnBack";
import { Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
import { questions } from "../data/FormQuestions";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
  

const FinalForm = ({onNext, onPrev, selectedMethod, onSelectionChange}) => {
    const handleSelection = ( e ) => {
        onSelectionChange(e.target.value)
    }
    const [message, setMessage] = useState(false);
    const showMessage = () => {
        setMessage(!message);
        console.log(message)
    }

    const toConsultation = () => {
        window.open("https://link.sibanetics.online/widget/bookings/git-global-consultation-appointment", "_blank");
    }

    const call = () => {
        showMessage();
        handleRedirect();
    }

    const consultation = () => {
        toConsultation();
        handleRedirect();
    }

    const handleRedirect = () => {
        setTimeout(() => {
            window.location.href = '/';
        }, 1000); 
    };
    return(
        <div className="w-full">
            <ScrollToTop />
            <NewsHeader 
                    title="Now that we have your information, how can we help?"
            />
            <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                    <div className="mt-10 lg:mt-16">
                        <RadioGroup className="gap-4 lg:gap-6">
                            {
                                questions.final.map((form) => (
                                    <FormControlLabel
                                        checked={selectedMethod === form.value}
                                        onChange={handleSelection}
                                        key={form.id}
                                        value={form.value}
                                        className={`p-5 lg:p-10 bg-white !m-0 border border-B75 hover:shadow-lg  
                                        ${
                                            selectedMethod === form.value ? 'border-2 border-BL500 shadow-lg' : 'border border-B75'
                                        }`}
                                        control={
                                            <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                fontSize: 24,
                                                },
                                                color: '#001F3D',
                                                padding: 0,
                                                marginInlineEnd: 2,
                                                '&.Mui-checked': {
                                                color: '#001F3D',
                                                },
                                            }}
                                            />
                                        }
                                        label={
                                            <Typography className=" ibm-plex-sans-regular !text-base/20 lg:!text-20/24 !text-B500" >
                                                {form.label}
                                            </Typography>
                                        }
                                    />
                                ))
                            }
                        </RadioGroup>
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex flex-row items-center justify-center mt-8 lg:mt-10 gap-4 lg:gap-6">
                        <div className="w-full">
                            <div onClick={onPrev}><BtnBack title="back"/></div>
                        </div>
                        <div className="w-full">
                            <div onClick={onNext} ><BtnNext title="next"/></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* congratulatory message */}
            {
                message ? 
                <div className=" h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 ">
                    <div className=" w-90 sm:w-500 bg-white h-300 z-50 opacity-100 relative flex items-center justify-center ">
                        <button className="pointer absolute top-5 right-5" onClick={call}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="">
                            <path d="M4.11611 18.116C3.62796 18.6041 3.62796 19.3956 4.11611 19.8838C4.60427 20.3719 5.39573 20.3719 5.88388 19.8838L19.8839 5.88376C20.3721 5.39561 20.3721 4.60415 19.8839 4.11599C19.3958 3.62784 18.6043 3.62784 18.1161 4.11599L4.11611 18.116Z" fill="black"/>
                            <path d="M5.88388 4.11599C5.39573 3.62784 4.60427 3.62784 4.11611 4.11599C3.62796 4.60415 3.62796 5.39561 4.11611 5.88376L18.1161 19.8838C18.6042 20.3719 19.3957 20.3719 19.8838 19.8838C20.372 19.3956 20.372 18.6041 19.8838 18.116L5.88388 4.11599Z" fill="black"/>
                            </svg>
                        </button>
                        <div className="flex flex-col items-start justify-center gap-6 lg:gap-8 p-5 lg:p-8">
                            <h4 className="swear-text capitalize text-48/48 lg:text-64/64 text-start">
                                thank you!
                            </h4>
                            <p className="ibm-plex-sans-regular text-18/27 lg:text-20/30 text-start">
                                One of our team member will contact you! Please allow 48 business hours for our call. We look forward to speaking with you! 
                            </p>
                        </div>
                    </div>
                 </div>
                : null
            }
            
        </div>
    )
}

export default FinalForm;