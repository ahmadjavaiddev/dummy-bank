import { Link } from "react-router-dom";
import "./style/Header.css";

const Header = () => {
    return (
        <header className="mb-12 header">
            <nav className="fixed top-0 left-0 right-0 bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center px-8">
                    <Link href="#" className="flex items-center">
                        {/* <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        /> */}
                        <span className="text-xl font-semibold whitespace-nowrap text-black">
                            Bank Name
                        </span>
                    </Link>

                    <form action="#" className="ml-8">
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="bg-gray-50 hello-6 sm:w-80 border border-gray-300 text-gray-900 rounded-full px-6 py-2.5 focus:ring-primary-600 focus:border-primary-600 block"
                            placeholder="Search..."
                            required
                        />
                    </form>

                    <div className="flex items-center lg:order-2 ml-8">
                        <i className="fas fa-bell text-white cursor-pointer"></i>
                        <div className="hs-dropdown relative inline-flex">
                            <button
                                id="hs-dropdown-with-dividers"
                                type="button"
                                className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                My Profile
                                <svg
                                    className="hs-dropdown-open:rotate-180 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            <div
                                className="hs-dropdown-menu transition-opacity duration-200 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200"
                                aria-labelledby="hs-dropdown-with-dividers"
                            >
                                <div className="py-2">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        Newsletter
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        Purchases
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        Downloads
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        Team Account
                                    </Link>
                                </div>
                                <div className="py-2">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        Upgrade License
                                    </Link>
                                </div>
                                <div className="py-2">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        Account Settings
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100"
                                    >
                                        Sign out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
