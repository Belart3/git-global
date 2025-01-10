import React from 'react'
import BtnBack from './BtnBack'
import BtnNext from './BtnNext'
import ScrollToTop from './ScrollToTop'
import NewsHeader from './NewsHeader'
import EmbeddedFrame from './EmbeddedFrame'

const GhlForm = ({onNext , onPrev}) => {
  return (
    <div className='w-full'>
        <ScrollToTop />
        <NewsHeader 
        title="Fill out the form below to schedule a consultation"
        />
        <div className="mt-10 lg:mt-16 w-full">
            <EmbeddedFrame />
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
    </div>
  )
}

export default GhlForm