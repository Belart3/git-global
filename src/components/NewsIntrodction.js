const NewsIntroduction = ({subtitle, body}) => {

    return(
        <div className="flex flex-col gap-10">
            <p className="ibm-plex-sans-regular text-20/30 font-normal text-B400">
            {
                subtitle && 
                <span className="ibm-plex-sans-bold text lg:text-20/30 text-B400">
                    {subtitle}
                </span> 
            }

                {body}
            </p>
        </div>
    );
}

export default NewsIntroduction;