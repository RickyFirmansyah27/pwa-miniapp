import { useSelector } from 'react-redux';

const SimpleSelector = () => {
    const username = useSelector(state => state.username);
    return (
        <div className="column is-5 main is-pulled-left">
            <div className="box">
                <h3 className="is-bold">Hasil Redux</h3>
                <p>Belajar Redux {username}</p>
            </div>
        </div>
    );
};

export default SimpleSelector;
