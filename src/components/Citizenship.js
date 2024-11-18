import NewsHeader from "./NewsHeader";
import BtnBack from "./BtnBack";
import { Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
import { questions } from "../data/FormQuestions";
import BtnNext from "./BtnNext";
import ScrollToTop from "../components/ScrollToTop";

const Citizenship = ({onPrev , onNext, selectedValue, onSelectionChange,}) => {
    const handleSelection = ( e ) => {
        onSelectionChange(e.target.value)
    }
    return(
        <div className="w-full">
            <ScrollToTop />
            <NewsHeader 
            title="Are you a US Citizen or permanent resident (Green Card holder)?" 
            />
            <div className="mt-10 lg:mt-16">
                <RadioGroup className="gap-4 lg:gap-6">
                    {
                        questions.citizenship.map((form) => (
                            <FormControlLabel
                                checked={selectedValue === form.value}
                                onChange={handleSelection}
                                key={form.id}
                                value={form.value}
                                className={`p-5 lg:p-10 bg-white !m-0 border border-B75 hover:shadow-lg  
                                ${
                                    selectedValue === form.value ? 'border-2 border-BL500 shadow-lg' : 'border border-B75'
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

            <div className="flex flex-row items-center justify-center mt-8 lg:mt-10 gap-6">
                <div className="w-full">
                    <div onClick={onPrev}><BtnBack title="back"/></div>
                </div>
                <div className="w-full">
                    <div onClick={onNext} ><BtnNext title="next"  disabled={!selectedValue} /></div>
                </div>
            </div>
        </div>
    )
}

export default Citizenship;