import {HomeLayout} from "@components/layouts/home_layout.jsx";
import {Button} from "@components/ui/button.jsx";
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <HomeLayout>
            <main className="min-h-screen w-[95%] md:w-[80%] flex flex-col mt-10 gap-14 pb-[100px]">
                <section className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="w-full md:w-1/2 flex items-center">
                        <div className="w-full h-[200px] sm:h-[300px] md:h-[350px] bg-gray-600"
                             style={{
                                 borderRadius: "10px",
                                 backgroundImage: "url('/bg1.jpg')",
                                 backgroundSize: "cover",
                                 backgroundPosition: "center"
                             }}>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold pb-5">READ AND LEAD AND BOOK</h1>
                            <p className="text-muted-foreground pb-6 w-full md:w-[80%] text-sm sm:text-base">
                                Freepik est une entreprise technologique spécialisée dans les outils d’IA pour la création et
                                l’édition de contenus audiovisuels. La société fournit des outils de conception La société fournit des outils de conception
                            </p>
                        </div>
                        <div>
                            <Button>Explore More</Button>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full">
                    <h3 className="font-bold text-lg sm:text-xl">New Media</h3>
                    <div className="w-full mt-6 grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-10">
                        <div className="sm:col-span-1 lg:col-span-3">
                            <div className="w-full h-[200px] sm:h-[300px] md:h-[350px] bg-gray-600 rounded-md"></div>
                        </div>
                        <div className="sm:col-span-1 lg:col-span-4 h-full flex flex-col justify-between">
                            <div>
                                <h2 className="font-bold text-2xl sm:text-3xl">Sherlock Holmes</h2>
                                <p className="text-muted-foreground pt-2 text-sm sm:text-base">
                                    "The Adventures of Sherlock Holmes" by Arthur Conan Doyle is a collection of detective stories written during the late 19th century. The book introduces the legendary detective Sherlock Holmes and his loyal companion, Dr. John Watson, as they embark on various intriguing cases, filled with mystery and clever deductions. The opening of the book presents "A Scandal in Bohemia,"...
                                </p>
                            </div>
                            <div className="flex gap-2 w-full sm:w-[80%] mt-4">
                                <Button variant="outline">Read More</Button>
                                <Button>Buy Now</Button>
                            </div>
                        </div>
                        <div className="sm:col-span-1 lg:col-span-3 mt-6 sm:mt-0">
                            <div className="bg-primary h-[180px] sm:h-[80%] p-5 rounded-md text-white flex flex-col justify-between">
                                <h2 className="text-lg sm:text-xl font-bold">Adhere Now</h2>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-xs sm:text-sm"> - Quotas Illimite</li>
                                    <li className="text-xs sm:text-sm"> - The Adventures of Sherlock Holmes</li>
                                    <li className="text-xs sm:text-sm"> - The Adventures of Sherlock Holmes</li>
                                    <li className="text-xs sm:text-sm"> - The Adventures of Sherlock Holmes</li>
                                </ul>
                                <div className="mt-4">
                                    <Button className="bg-white text-primary">GET IT NOW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full">
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center">
                        <h3 className="font-bold text-lg sm:text-xl pb-4">New Media</h3>
                        <Link to="/products" className="text-primary font-semibold">
                            See More
                        </Link>
                    </div>
                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"}}>
                        <div className="bg-red-500 h-[180px] sm:h-[250px] md:h-[300px] rounded-md"></div>
                        <div className="bg-red-500 h-[180px] sm:h-[250px] md:h-[300px] rounded-md"></div>
                        <div className="bg-red-500 h-[180px] sm:h-[250px] md:h-[300px] rounded-md"></div>
                    </div>
                </section>
            </main>
        </HomeLayout>
    )
}

export {Homepage}