import PropTypes from "prop-types";
import Select from "../Select/Select";
const Selects = ({ selects, selectPlayers, showSelected, handleShowAvailable }) => {
    // console.log(selectPlayers)
    return (
        <div className={` w-full ${showSelected ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col w-full">
                <h2 className="text-xl lg:text-3xl font-bold py-2 lg:py-6"> Selected Players : ( {selects} / 6 ) </h2>
                <div>
                    {
                        selectPlayers.map((selectPlayer, idx) => <Select
                            key={idx}
                            selectPlayer={selectPlayer}></Select>)
                    }
                </div>
                <div>
                    <button onClick={handleShowAvailable} className=" bg-blue-300 px-8 py-2 border rounded-2xl">Available</button>
                </div>
            </div>
        </div>
    );
};

Selects.propTypes = {
    selects: PropTypes.number.isRequired,
    selectPlayers: PropTypes.array.isRequired,
    showSelected: PropTypes.bool.isRequired,
    handleShowAvailable: PropTypes.func.isRequired
}
export default Selects;