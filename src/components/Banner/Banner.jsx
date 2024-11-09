import './Banner.css'
import PropTypes from 'prop-types';

const Banner = ({handleAddCredit}) => {
    return (
        <div style={{
            backgroundImage: `url(${'https://i.postimg.cc/rsVCrR3K/bg-shadow.png'})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: 'black',
        }} className='w-11/12 md:w-10/12 mx-auto rounded-3xl mb-20'>
            <div className="banner p-4 md:p-16">
                <img className='w-36 md:w-60' src={'https://i.postimg.cc/GtT3zqZN/banner-main.png'} alt="" />
                <div className=' w-11/12flex flex-col items-center space-y-4'>
                    <h1 className='text-white text-center
                    text-xl md:text-2xl  lg:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <h4 className='font-inter text-center text-xl lg:text-2xl text-gray-400'>Beyond Boundaries Beyond Limits</h4>
                </div>
                <button onClick={handleAddCredit}><span className='credit-btn buy-btn border-2 border-yellow-400'>Claim Free Credit</span></button>
            </div>
        </div>

    );
};

Banner.propTypes = {
    handleAddCredit:PropTypes.func
}
export default Banner;