/** Header.js
 *  2024 11 05 허재홍 
 * */

import { MousePointer } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                    </svg>
                    <span className="text-2xl font-bold">MouseMaster</span>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Reviews</a></li>
                        <li><a href="#" className="hover:underline">Compare</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

