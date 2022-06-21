import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404 - PAGE NOT FOUND</h1>
            <p>Sorry, the page you requested for is not found</p>
            <Link to="/">Click to Go Back</Link>
        </div>
     );
}
 
export default NotFound;