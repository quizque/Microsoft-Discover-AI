import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Page Not Found!</h1>
            <Link className="not-found-return" to="/">
                Click here to return home!
            </Link>
        </div>
    );
};

export default NotFound;
