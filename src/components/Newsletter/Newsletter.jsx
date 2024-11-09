const Newsletter = () => {
    return (
        <div className="rounded-3xl p-2 md:p-6 border border-white ">
            <div style={{
                backgroundImage: `url(https://i.postimg.cc/VvhJCYQw/bg-shadow.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "#F2EBEB",
            }} className=" flex flex-col items-center text-center w-full rounded-3xl gap-2 md:gap-4 p-2 md:py-20">
                <h2 className="text-xl md:text-3xl font-bold"> Subscribe to our Newsletter</h2>
                <p className="text-xs md:text-xl font-medium font-inter">Get  the latest updates and news right in your inbox!</p>
                <div className="flex flex-col items-center justify-center md:flex-row gap-2 mx-auto">
                    <input type="email" placeholder="Enter your email" className="px-8 py-2 md:py-4 rounded-xl" id="" /><button className="px-8 py-2 md:py-4 rounded-xl bg-pink-200 font-bold" type="submit">Subscribe</button></div>
            </div>
        </div>
    );
};

export default Newsletter;