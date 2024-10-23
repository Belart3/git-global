import { FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';

const FormInput = ({ id, type, label, value, onChange, onFocus, onBlur, name }) => {
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
                    <Typography className="text-base ibm-plex-sans-regular text-BL500 bg-Background px-2">
                    {label}
                    </Typography>
                </InputLabel>
                <OutlinedInput
                id={id}
                type={type}
                onFocus={onFocus} 
                value={value}
                //onBlur={onBlur}
                onChange={onChange}
                name={name}
                placeholder=" " // A space to allow the floating label effect

                sx={{

                '& .MuiInputBase-input': {
                color: '#101010',
                padding: '16px',
                fontFamily: 'IBM Plex Sans !important',
                background: value  ? '#FBEAD9' : 'transparent',

                '&::placeholder': {
                color: 'transparent', 
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