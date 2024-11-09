import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";
import Selects from "../Selects/Selects";

const Players = ({ handleBuyPlayer, balance }) => {
    const [players, setPlayers] = useState([]);
    const [selects, setSelects] = useState(0);
    const [selectPlayers, setSelectPlayers] = useState([]);
    const [showAvailable, setShowAvailable] = useState(true)
    const [showSelected, setShowSelected] = useState(false)

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    const handleAddSelect = (player) => {
        if (balance > player.price && selects < 6) {
            setSelects(selects + 1);
            setSelectPlayers([...selectPlayers, player])
            return
        }
    };

    const handleShowAvailable = () =>{
        setShowAvailable(true);
        setShowSelected(false);
    };

    const handleShowSelected = () =>{
        setShowAvailable(false);
        setShowSelected(true);
    };

    return (
        <div className="w-11/12 md:w-10/12 mx-auto mb-52">
            <div className="flex justify-end sticky top-20 z-50">
                <button onClick={handleShowAvailable} className={`bg-blue-300 px-8 py-2 border rounded-s-2xl ${showAvailable && 'active'}`}>Available</button>
                <button onClick={handleShowSelected} className={`bg-blue-300 px-8 py-2 border rounded-e-2xl  ${showSelected && 'active'}`}>Selected ({selects})</button>
            </div>
            <div className={`${showAvailable ? 'flex' : 'hidden'}`}>
                <div className="flex flex-col">
                    <h2 className="text-xl md:text-3xl font-bold py-2 md:py-6"> Available Players : {players.length}</h2>
                    <div className="grid col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            players.map(player => <Player
                                key={player.id}
                                player={player}
                                handleBuyPlayer={handleBuyPlayer}
                                handleAddSelect={handleAddSelect}
                                balance={balance}
                                selects={selects}
                            ></Player>)
                        }
                    </div>
                </div>
            </div>
            <div >
                <Selects
                    selects={selects}
                    selectPlayers={selectPlayers}
                    showSelected={showSelected}
                    handleShowAvailable={handleShowAvailable}
                ></Selects>
            </div>
        </div>
    );
};
Players.propTypes = {
    handleBuyPlayer: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired
}
export default Players;