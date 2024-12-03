// src/components/HomePage.js

/**TODO 버튼, 카드 등을 임포트 했는데 shardCN이라는 tailwind.css의 서드파티 라이브러리에서 가져온듯 함 이걸 해결 해야해
 *
 * */
export default function HomePage() {
    return (
        <main className="flex-grow">
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Find Your Perfect Mouse</h1>
                    <p className="text-xl mb-8">Discover the best mouse for your needs with our expert
                        recommendations</p>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-4 rounded-lg text-lg">
                        Start Quiz
                    </button>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Mice</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">Gaming Mouse {i}</h3>
                                    <p className="text-gray-600 mb-4">High-performance optical sensor</p>
                                    <img
                                        src={`/placeholder.svg?height=200&width=300`}
                                        alt={`Gaming Mouse ${i}`}
                                        className="w-full h-48 object-cover mb-4 rounded"
                                    />
                                    <p className="mb-4">Experience precision and comfort with our top-rated gaming
                                        mouse.</p>
                                    <button
                                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
                    <p className="mb-8">Stay updated with the latest mouse reviews and recommendations</p>
                    <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}