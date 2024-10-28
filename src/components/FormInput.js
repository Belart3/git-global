import { FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';

const FormInput = ({ id, type, label, value, onChange, onFocus, name }) => {
    return (  
        <div className='w-full'>
            <FormControl fullWidth >
                <InputLabel 
                htmlFor={id} 
                sx={{
                color: '#707070',
                '&.Mui-focused': {
                color: '#001F3D', 
                },
                }}
                >
                    <Typography className="text-base ibm-plex-sans-regular  bg-pl px-2">
                    {label}
                    </Typography>
                </InputLabel>
                <OutlinedInput
                id={id}
                type={type}
                onFocus={onFocus} 
                value={value}
                onChange={onChange}
                name={name}
                placeholder=" "

                sx={{

                '& .MuiInputBase-input': {
                color: '#101010',
                padding: '16px',
                fontFamily: 'IBM Plex Sans !important',
                background: value  ? '#FBEAD9' : '#FDF5EC',

                '&::placeholder': {
                color: '#707070', 
                },

                },

                '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#CFCFCF',
                borderRadius: "0px",
                },

                '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#001F3D',
                borderWidth: '2px',
                },

                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#001F3D',
                },

                }}
                />
            </FormControl>
        </div>
    );
}
 
export default FormInput;