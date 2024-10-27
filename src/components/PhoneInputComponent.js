import { FormControl, InputLabel, Typography } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const PhoneInputComponent = ({ id, label, value, onChange, onFocus, name }) => {
    return (  
        <div className='w-full'>
            <FormControl fullWidth>
                <InputLabel 
                    htmlFor={id} 
                    sx={{
                        color: value ? '#001F3D' : '#707070',
                        transform: value ? 'translate(50px, -10px) scale(0.75)' : 'translate(75px, 17px) scale(1)',
                        transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                        opacity: value ? '100%' : '30%',
                    }}
                >
                    <Typography className="text-base ibm-plex-sans-regular bg-pl px-2">
                        {label}
                    </Typography>
                </InputLabel>
                <PhoneInput
                    id={id}
                    country=""
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    name={name}
                    placeholder=" " 
                    international 
                    defaultCountry="US"
                    numberInputProps={{
                        className: `
                            !p-4 hover:border-2 border border-B75 hover:border-BL500 focused:!border-BL500 
                            w-full bg-pl ibm-plex-sans-regular rounded-0 focused:!rounded-0 
                            ${value ? 'bg-typed' : 'bg-pl'}
                            `
                    }}
                    sx={{
                        '& .react-phone-number-input__input': {
                            color: '#101010',
                            padding: '16px !important',
                            fontFamily: 'IBM Plex Sans',
                            background: value ? '#FBEAD9' : '#FDF5EC',
                        },
                        '& .react-phone-number-input__country': {
                            color: '#707070',
                        },
                    }}
                />
            </FormControl>
        </div>
    );
}
 
export default PhoneInputComponent;
