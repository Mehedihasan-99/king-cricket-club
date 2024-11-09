import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";


const Select = ({selectPlayer}) => {
    const {author, author_img, player_type} = selectPlayer;
    console.log(selectPlayer)
    return (
        <div className="flex justify-between border rounded-xl bg-base-200 items-center px-10 py-4 mb-4">
            <div className="flex gap-4">
                <img className="w-20 h-20 rounded-full" src={author_img} alt="" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">{author}</h2>
                    <p>{player_type}</p>
                </div>
            </div>
            <MdDeleteForever className="text-4xl text-red-500"/>
        </div>
    );
};

Select.propTypes = {
    selectPlayer: PropTypes.object.isRequired
}
export default Select;