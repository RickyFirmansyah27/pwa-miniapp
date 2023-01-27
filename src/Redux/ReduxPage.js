import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SimpleSelector from "./SimpleSelector";

const ReduxPage = () => {
    const dispatch = useDispatch();

    const handleChange = (username) => {
        dispatch({ type: "USERNAME", payload: username });
    };

    const [isDetail, setIsDetail] = useState(false);

    return (
        <div className="column is-10 main is-pulled-right">
            <div className="box">
                <h3 className="is-bold">Halaman Redux Function</h3>
            </div>
            <div className="box">
                <h3 className="is-bold">Username</h3>
                <form>
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                onChange={(e) => handleChange(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </form>
                
                <Link to='/selector'>
                    <button className="mt-5 ml-3">Add</button>
                </Link>
                <button className="mt-5 ml-3" onClick={() => setIsDetail(!isDetail)}>Check</button>
               
            </div>
            {isDetail && <SimpleSelector />}
        </div>

    );
};

export default ReduxPage;
