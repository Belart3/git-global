import React from 'react'
import BtnBack from './BtnBack'
import BtnNext from './BtnNext'
import ScrollToTop from './ScrollToTop'
import NewsHeader from './NewsHeader'
import EmbeddedFrame from './EmbeddedFrame'
import { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'

const GhlForm = ({onNext , onPrev, sendEmail}) => {
    const [message, setMessage] = useState(false);
    const [validEmail, setValidEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [userData, setUserData] = useState(null)
    const showMessage = () => {
        setMessage(true);
    }
    const handleValidEmail = (e) => {
        setValidEmail(e.target.value);
    }

    const fetchUserData = (e) => {
        e.preventDefault()
        setLoading(true);
        setError("")
        console.log(validEmail)
        fetch(`https://git-global.vercel.app/api/user?email=${validEmail}`)
        .then((res) => {
            if(!res.ok){
                throw new Error("User not found")
            }
            return res.json();
        })
        .then((data) => {
            setUserData(data)
            setLoading(false)
            toast(`Your Details are: Name: ${data.name}, Email: ${data.email}`)
        })
        .catch((err) => {
            setError(err.message)
            toast(err.message)
            setUserData(null)
            setLoading(false)
        })
    }

    const closeMessage = () => {
        showMessage(false);
        handleRedirect();
    }

    // const consultation = () => {
    //     toConsultation();
    //     handleRedirect();
    // }

    const handleRedirect = () => {
        setTimeout(() => {
            window.location.href = '/';
        }, 3000); 
    };
  return (
    <div className='w-full'>
        <ScrollToTop />
        <NewsHeader 
        title="Fill out the form below to schedule a consultation"
        />
        <div className="mt-10 lg:mt-16 w-full">
            <EmbeddedFrame />
            <div className='w-full mt-10 flex items-center justify-between gap-2'>
                <input 
                    type="email" 
                    className='p-4 border-[#CFCFCF] border-[2px] focus:border-[#001F3D] !rounded-none focus:!rounded-none w-full' 
                    placeholder='please provide the email you used in filling the above form'
                    value={validEmail}
                    onChange={handleValidEmail}
                />
                <button 
                    disabled={!validEmail}
                    onClick={fetchUserData}
                    className={`border p-4 flex-row items-center justify-center space-x-3 w-[200px] group inline-flex ${
                        !validEmail 
                            ? 'bg-BL100 cursor-not-allowed' 
                            : 'border-BL500 bg-BL500 cursor-pointer lg:hover:scale-90 transition duration-500 ease-in-out'
                    }`}
                >
                    <p className="text-base/16 capitalize text-white ibm-plex-sans-regular">
                    {
                        loading ? "loading" : "check"
                    }
                    </p>
                    <svg className={`size-6 ${validEmail ? 'lg:group-hover:animate-[horizontal_1s_infinite]' : ''}`}  fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow-right-02">
                        <path id="Vector" d="M15.0001 17L20 12L15 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_2" d="M4 12H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                </button>
                <Toaster />
            </div>
            <div className="flex flex-row items-center justify-between">
                {
                    message ? 
                    <div className=" h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 ">
                        <div className=" w-90 sm:w-500 bg-white h-300 z-50 opacity-100 relative flex items-center justify-center ">
                            <button className="pointer absolute top-5 right-5" onClick={closeMessage}>
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
            <div className="w-full">
                <div className="flex flex-row items-center justify-center mt-8 lg:mt-10 gap-4 lg:gap-6 w-full">
                    <div onClick={onPrev} className='w-full'>
                        <BtnBack title="back"/>
                    </div>
                    <div onClick={showMessage} className='w-full'>
                        <BtnNext title="next" disabled={userData == null} type='submit'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GhlForm