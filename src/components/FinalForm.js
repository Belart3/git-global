import NewsHeader from "./NewsHeader";
import BtnNext from "./BtnNext";
import BtnBack from "./BtnBack";
import { Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
import { questions } from "../data/FormQuestions";
import ScrollToTop from "./ScrollToTop";

const FinalForm = ({onNext, onPrev, selectedMethod, onSelectionChange}) => {
    const handleSelection = ( e ) => {
        onSelectionChange(e.target.value)
    }
    const handleRedirect = () => {
        setTimeout(() => {
            window.location.href = '/git-global/';
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
                    <div className="mt-10 lg:mt-16 mx-4 md:mx-8 lg:mx-28 2xl:max-w-screen-2xl lg:mx-auto">
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
                                            <Typography className=" ibm-plex-sans-regular !text-lg/20 lg:!text-20/24 !text-B500" >
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
                    <div className="flex flex-row items-center justify-center mt-8 lg:mt-10 mx-4 md:mx-8 lg:mx-28 2xl:max-w-screen-2xl lg:mx-auto gap-4 lg:gap-6">
                        <div className="w-full">
                            <div onClick={onPrev}><BtnBack title="back"/></div>
                        </div>
                        <div className="w-full">
                            <div onClick={onNext} >
                                {
                                    selectedMethod === 'I would like to request a call' 
                                    ?   
                                    <a href="tel:+15154467074">
                                        <BtnNext title="call"  disabled={!selectedMethod} />
                                    </a>
                                    : selectedMethod === 'I would like to schedule a consultation' 
                                    ? 
                                    <a href="https://link.sibanetics.online/widget/bookings/git-global-consultation-appointment" target="_blank" onClick={handleRedirect}>
                                        <BtnNext title="schedule now"  disabled={!selectedMethod} />
                                    </a> 
                                    : 
                                    <BtnNext title="next"  disabled={!selectedMethod} /> 
                                }  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalForm;