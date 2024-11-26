/** Header.js
 *  2024 11 05 허재홍 
 * */

import { MousePointer } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-primary text-primary-foreground shadow-lg">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <MousePointer className="h-6 w-6" />
                <span className="text-2xl font-bold">MousePointer</span>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Reviews</a></li>
                    <li><a href="#" className="hover:underline">Compare</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

