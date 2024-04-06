import { CiLogout } from "react-icons/ci";
import Logo from './Logo';
import NavLinks from './Navlinks';

const Sidebar = () => {
    return (
        <div className='p-2 lg:w-[300px]'>
            <div className='bg-purple-700 p-1 rounded-md mb-4'>
                <Logo />
            </div>
            <div className='flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col xs:space-x-0 md:space-y-2 md:mt-2'>
                <NavLinks />
                <form action="">

                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <CiLogout className="w-6 size-8" />
                        <p className="hidden md:block pr-32">Sign out</p>
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Sidebar
