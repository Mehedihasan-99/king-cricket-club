import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="w-10/12 mx-auto relative">
                <div className="w-full absolute bottom-[92%] md:bottom-3/4 z-30">
                    <Newsletter></Newsletter>
                </div>
                <div className="pt-32 md:pt-60 text-gray-500 flex flex-col justify-center items-center">
                    <img className="pb-16" src={'https://i.postimg.cc/FHYstgQP/logo-footer.png'} alt="" />
                    <div className="flex flex-col md:flex-row items-center  md:items-start pb-16  lg:justify-between gap-10 lg:gap-44 border-b-2 border-gray-400">
                        <div className=" flex flex-col justify-center w-full text-left gap-2 lg:space-y-4">
                            <h3>About Us</h3>
                            <p className="w-full text-xs md:text-base lg:text-xl lg:w-1/2">We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div className="w-1/3 lg:w-1/3 mx-auto lg:space-y-4">
                            <h3>Quick Links</h3>
                            <ol className="list-disc font-inter lg:space-y-4 px-4">
                                <li>Home</li>
                                <li>Service</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ol>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center space-y-2 lg:space-y-4">
                            <h3>Subscribe</h3>
                            <p className="text-xs md:text-base lg:text-xl">Subscribe to our newsletter for the latest updates</p>
                            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
                                <input type="email" placeholder="Enter your email" className="py-2 lg:py-4 px-8 rounded-xl lg:rounded-none lg:rounded-s-xl" id="" />
                                <button className="bg-pink-200 py-2 lg:py-4 px-8 rounded-xl lg:rounded-none lg:rounded-e-xl">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-center py-3 lg:py-8">@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;