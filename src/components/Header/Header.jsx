import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-5xl mx-auto'>
            <div className="text-4xl font-bold">Knoledge Cafe</div>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;