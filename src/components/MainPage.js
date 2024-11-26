// src/components/HomePage.js

import { Button } from "./component/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function HomePage() {
    return (
        <main className="flex-grow">
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Find Your Perfect Mouse</h1>
                    <p className="text-xl mb-8">Discover the best mouse for your needs with our expert recommendations</p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                        Start Quiz
                    </Button>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Mice</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <CardTitle>Gaming Mouse {i}</CardTitle>
                                    <CardDescription>High-performance optical sensor</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <img
                                        src={`/placeholder.svg?height=200&width=300`}
                                        alt={`Gaming Mouse ${i}`}
                                        className="w-full h-48 object-cover mb-4 rounded"
                                    />
                                    <p>Experience precision and comfort with our top-rated gaming mouse.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">View Details</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
                    <p className="mb-8">Stay updated with the latest mouse reviews and recommendations</p>
                    <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                        <Input type="email" placeholder="Enter your email" className="w-full sm:w-64" />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </div>
            </section>
        </main>
    );
}