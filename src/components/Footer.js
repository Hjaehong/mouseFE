// src/components/Footer.js

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">MouseMaster</h3>
                        <p>Your trusted source for mouse recommendations and reviews.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Reviews</a></li>
                            <li><a href="#" className="hover:underline">Compare</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>Email: info@mousemaster.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2023 MouseMaster. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}