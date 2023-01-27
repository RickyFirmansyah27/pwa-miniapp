import { useSelector } from 'react-redux';

const SelectorPage = () => {
    const username = useSelector(state => state.username);
    return (
        <div className="column is-10 main is-pulled-right">
            <div className="box">
                <h3 className="is-bold">Halaman Selector Function</h3>
            </div>
            <div className="box">
                <h3 className="is-bold">Hasil Redux</h3>
                <p>Belajar Redux {username}</p>
            </div>
        </div>
    );
};

export default SelectorPage;
