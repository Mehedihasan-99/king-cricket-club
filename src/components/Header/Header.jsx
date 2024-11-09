import { BsCoin } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from 'prop-types';
const Header = ({ balance }) => {
    return (
        <div className='sticky -top-1 md:-top-5 z-50 bg-white md:py-3 '>
            <div className='flex flex-row justify-between items-center gap-2 w-10/12 mx-auto py-2 pb-2 lg:py-4'>
                <img className='w-18' src={'https://i.postimg.cc/5tdBmzvs/logo.png'} alt="" />
                <div className='flex flex-row gap-2 md:gap-5 lg:gap-12 justify-center items-center md:items-end lg:items-center'>
                    <ul className=' hidden md:grid grid-cols-4 items-center justify-center lg:gap-5 text-gray-500'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <span className='max-w-44 font-semibold border rounded-md px-2 py-1 md:py-2 flex justify-center items-center gap-2'> ${balance} Coin<BsCoin className='text-yellow-400' /> </span>
                    <div className="dropdown md:hidden ">
                        <div tabIndex={0} role="button" className="btn bg-white border-none text-3xl shadow-none p-0"> <GiHamburgerMenu /> </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white text-right right-0 rounded-box z-[1] gap-2 p-2 shadow">
                            <li>Home</li>
                            <li>Fixture</li>
                            <li>Teams</li>
                            <li>Schedules</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    balance: PropTypes.number
}
export default Header;