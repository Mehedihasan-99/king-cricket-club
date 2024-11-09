import PropTypes from "prop-types";
import { IoFlag } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import './Player.css'
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Player = ({ player, handleBuyPlayer, handleAddSelect, balance, selects }) => {

    const [choosePlayer, setChoosePlayer] = useState(true);


    const handleAddFunc = (player) => {
        const playerAmount = parseInt(player.price)
        if (choosePlayer) {
            if (selects < 6) {
                if (balance >= playerAmount) {
                    handleAddSelect(player);
                    handleBuyPlayer(player);
                    setChoosePlayer(false)
                    toast(` Congratulations ! ${player.author} added to your teams.`)
                    return
                }
                else {
                    toast.warning('Insufficient balance!  Please Add Balance!');
                    return
                }
            }
            else {
                toast.warning('Player selected limit is full.');
                return
            }
        }
        else {
            toast.warning('Player already selected.');
            return
        }
    }


    const { cover, author, author_img, country, hand_type, player_type, price, rating } = player;
    return (
        <div className='player'>
            <img className='rounded-xl h-40  lg:h-60' src={cover} alt={author} />
            <div className='flex'>
                <img src={author_img} alt="" />
                <h2>{author}</h2>
            </div>
            <div className='space-y-2'>
                <div>
                    <span> <IoFlag /> {country}</span>
                    <span className='border rounded-md p-2 bg-gray-200 text-gray-600'>{player_type}</span>
                </div>
                <hr />
                <div>
                    <h4>Rating</h4>
                    <span>{rating}<FcRating /></span>
                </div>
                <div>
                    <h4>{hand_type}</h4>
                    <span>{hand_type}</span>
                </div>
                <div>
                    <h4>Price : ${price}</h4>
                    <button onClick={() => { handleAddFunc(player) }} className={` p-2 text-xs md:text-base bg-blue-300 ${!choosePlayer && 'active'}`}> Choose Player</button>
                </div>
                
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleBuyPlayer: PropTypes.func.isRequired,
    handleAddSelect: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
    selects: PropTypes.number.isRequired,
}

export default Player;