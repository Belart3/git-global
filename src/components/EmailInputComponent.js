import { FormControl, InputLabel, OutlinedInput, Typography, FormHelperText } from '@mui/material';

const EmailInputComponent = ({ id, type, label, value, errorText, onChange, onFocus, name, email, handleEmailChange, validateEmail, emailError }) => {


    return (
        <FormControl fullWidth error={emailError}>
            <InputLabel
                htmlFor={id}
                sx={{
                    color: '#707070',
                    '&.Mui-focused': {
                        color: '#001F3D',
                    },
                }}
            >
                <Typography className="text-base ibm-plex-sans-regular bg-pl px-2">
                    {label}
                </Typography>
            </InputLabel>
            <OutlinedInput
                id={id}
                type={type}
                value={email}
                onChange={handleEmailChange}
                onBlur={() => validateEmail(email)}
                sx={{
                    '& .MuiInputBase-input': {
                        color: '#101010',
                        padding: '16px',
                        fontFamily: 'IBM Plex Sans !important',
                        background: email ? '#FBEAD9' : '#FDF5EC',
                        '&::placeholder': {
                            color: '#707070',
                        },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#CFCFCF',
                        borderRadius: '0px',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#001F3D',
                        borderWidth: '2px',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#001F3D',
                    },
                }}
                placeholder=" " // A space to allow the floating label effect
            />
            {emailError && (
                <FormHelperText error className='text-base ibm-plex-sans-regular' >
                    {errorText}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default EmailInputComponent;
