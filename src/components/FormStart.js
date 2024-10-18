import NewsHeader from "./NewsHeader";
import BtnNext from "./BtnNext";

const FormStart = ({onNext}) => {
    return(
        <div className="flex flex-col gap-10 justify-center items-center">
            <NewsHeader 
                title="Let’s start by asking you a couple of questions." 
                subtitle="GIT Global is with you from start to finish. We’ve helped many families get their immigration forms prepared. Our experienced team is highly trained on USCIS forms so you avoid mistakes and file the strongest application."
            />

            <div className="w-full flex justify-center items-center">
                <div className="w-full sm:max-w-44 md:w-44  md:max-w-400 mx-4 sm:mx-0">
                    <div onClick={onNext}><BtnNext title="continue"/></div>
                </div>
            </div>
        </div>
    )
}

export default FormStart;