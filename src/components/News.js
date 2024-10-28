import { Link } from "react-router-dom/cjs/react-router-dom";

const News = ({src, date,  paragraph, href}) => {
    return (  
        <Link to={href} >
            <div className="flex flex-col gap-3 group cursor-pointer brightness-100 lg:hover:brightness-75 transition ease-in-out">
                <div 
                className="h-300 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${src})` }}
                ></div>
                <div className="flex flex-col gap-3">
                    <h5 className="text-B300 text-xs/12 ibm-plex-sans-regular">
                        {date}
                    </h5>
                    <p className="text-B500 text-lg/22 md:text-xl/24 ibm-plex-sans-regular capitalize lg:group-hover:underline">
                        {paragraph}
                    </p>
                </div>
            </div>
        </Link>
    );
}
 
export default News;