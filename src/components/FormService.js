import NewsHeader from "./NewsHeader";
import BtnBack from "./BtnBack";
import { Radio, RadioGroup, FormControlLabel, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { questions } from "../data/FormQuestions";
import BtnNext from "./BtnNext";
import ScrollToTop from "../components/ScrollToTop";

const FormService = ({onPrev , onNext, selectedValue, onSelectionChange}) => {
    const handleSelection = ( e ) => {
        onSelectionChange(e.target.value)
    }
    return(
        <div className="w-full">
            <ScrollToTop />
            <NewsHeader 
                title="Which service are you looking for?" 
            />
            <div className="mt-10 lg:mt-16">
                <RadioGroup className="gap-4 lg:gap-6">
                    {
                        questions.service.map((form) => (
                            <Accordion 
                                className={`!m-0 border border-B75 !bg-white !shadow-none !rounded-none hover:!shadow-lg
                                ${
                                    selectedValue === form.value ? 'border-2 border-BL500 !shadow-lg hover:shadow-none' : 'border border-B75'
                                }`}
                                onChange={onSelectionChange}
                                key={form.id}
                                expanded={selectedValue === form.value}
                            >
                      
                              <AccordionSummary
                              aria-controls="panel1-content" 
                              id="panel1-header" 
                              className="bg-white !p-0 !m-0 border-0"
                                sx={{
                                    '& .MuiAccordionSummary-content': {
                                        margin: '0px !important',
                                    },
                                }}
                                >
                                <FormControlLabel
                                    checked={selectedValue === form.value}
                                    onChange={handleSelection}
                                    value={form.value}
                                    className="bg-white !m-0 !p-5 lg:!p-10 border-0 w-full"
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
                              </AccordionSummary>
                      
                              <AccordionDetails
                              className='text-B500 text-base lg:text-lg/27 ibm-plex-sans-regular bg-PE300 !p-5 lg:!p-10'
                              >
                                {form.message}
                              </AccordionDetails>
                      
                            </Accordion>
                        ))
                    }
                </RadioGroup>
            </div>

            <div className="flex flex-row items-center justify-center mt-8 lg:mt-10 gap-4 lg:gap-6">
                <div className="w-full">
                    <div onClick={onPrev}>
                        <BtnBack title="back"/>
                    </div>
                </div>
                <div className="w-full">
                    <div onClick={onNext} >
                        <BtnNext title="next"  disabled={!selectedValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormService;