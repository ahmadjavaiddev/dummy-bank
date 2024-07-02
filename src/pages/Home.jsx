const Home = () => {
    return (
        <>
            <main className="hello-1 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="grid grid-cols-2 gap-x-20 hello-2">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Status</h2>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 hello-7 rounded-2xl">
                                    <div className="p-4 bg-green-100 rounded-xl">
                                        <div className="font-bold text-xl text-gray-800 leading-none mb-4">
                                            Your Account Balance
                                        </div>
                                        <div className="mt-5">
                                            <button
                                                type="button"
                                                className="hello-8 inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                                            >
                                                Check balance
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 text-gray-800 hello-10">
                                    <div className="font-bold text-xl leading-none">
                                        Your daily plan
                                    </div>
                                    <div className="mt-2">5 of 8 completed</div>
                                </div>
                                <div className="p-4 flex hello-9 rounded-xl cursor-pointer items-center text-gray-800 justify-between">
                                    <div className="">
                                        <div className="font-bold text-xl leading-none">
                                            Send money
                                        </div>
                                        <div className="mt-2 text-xs">Click to send money</div>
                                    </div>
                                    <div className="">
                                        <i className="fa-solid fa-paper-plane text-2xl cursor-pointer"></i>
                                    </div>
                                </div>
                                <div className="p-4 flex hello-9 rounded-xl cursor-pointer items-center text-gray-800 justify-between">
                                    <div className="">
                                        <div className="font-bold text-xl leading-none">
                                            Add money
                                        </div>
                                        <div className="mt-2 text-xs">
                                            Click to Request money
                                        </div>
                                    </div>
                                    <div className="">
                                        <i className="fa-solid fa-plus text-2xl cursor-pointer"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>

                            <div className="space-y-4">
                                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                    <div className="flex justify-between">
                                        <div className="text-gray-400 text-xs">Number 10</div>
                                        <div className="text-gray-400 text-xs">4h</div>
                                    </div>
                                    <a
                                        href="#"
                                        className="font-bold hover:text-yellow-800 hover:underline"
                                    >
                                        Today Transactions
                                    </a>
                                    <div className="text-sm text-gray-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="text-gray-800 inline align-middle mr-1"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                        Today
                                    </div>
                                </div>
                                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                    <div className="flex justify-between">
                                        <div className="text-gray-400 text-xs">
                                            Grace Aroma
                                        </div>
                                        <div className="text-gray-400 text-xs">7d</div>
                                    </div>
                                    <a
                                        href="#"
                                        className="font-bold hover:text-yellow-800 hover:underline"
                                    >
                                        New campaign review
                                    </a>
                                    <div className="text-sm text-gray-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="text-gray-800 inline align-middle mr-1"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                        New feedback
                                    </div>
                                </div>
                                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                    <div className="flex justify-between">
                                        <div className="text-gray-400 text-xs">Petz App</div>
                                        <div className="text-gray-400 text-xs">2h</div>
                                    </div>
                                    <a
                                        href="#"
                                        className="font-bold hover:text-yellow-800 hover:underline"
                                    >
                                        Cross-platform and browser QA
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
