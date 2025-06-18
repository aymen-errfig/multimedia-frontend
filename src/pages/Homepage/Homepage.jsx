import {HomeLayout} from "@components/layouts/home_layout.jsx";
import {Button} from "@components/ui/button.jsx";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import Cookies from "universal-cookie";

function Homepage() {
    const cookies = new Cookies();
    useEffect(() => {
        console.log(cookies.get('token'))
    }, []);
    return (
        <HomeLayout>
            <main className="min-h-screen w-[80%] flex flex-col mt-10 gap-14 pb-[100px]">
                <section className="w-full h-full flex">
                    <div className="w-1/2 flex flex-col justify-between">
                        <div>
                            <h1 className="text-6xl font-bold pb-5">READ AND LEAD AND BOOK</h1>
                            <p className="text-muted-foreground pb-6 w-[80%]">Freepik est une entreprise technologique
                                spécialisée
                                dans
                                les outils d’IA pour la création et
                                l’édition de contenus audiovisuels. La société fournit des outils de conception La
                                société fournit des outils de conception</p>
                        </div>
                        <div>
                            <Button>Explore More</Button>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end items-center">
                        <div className="w-[80%] h-[350px] bg-gray-600">

                        </div>
                    </div>
                </section>
                <section className="w-full h-full">
                    <h3 className="font-bold text-xl">New Media</h3>
                    <div className="w-full mt-6 grid gap-10 grid-cols-10">
                        <div className="col-span-3">
                            <div className="w-full h-[350px] bg-gray-600"></div>
                        </div>
                        <div className="col-span-4 h-full flex flex-col justify-between">
                            <div>
                                <h2 className="font-bold text-3xl">Sherlock Holmes</h2>
                                <p className="text-muted-foreground pt-2">"The Adventures of Sherlock Holmes" by Arthur
                                    Conan
                                    Doyle is a collection of detective stories written during the late 19th century. The
                                    book introduces the legendary detective Sherlock Holmes and his loyal companion, Dr.
                                    John Watson, as they embark on various intriguing cases, filled with mystery and
                                    clever
                                    deductions. The opening of the book presents "A Scandal in Bohemia,"... </p>
                            </div>
                            <div className="flex gap-2 w-[80%]">
                                <Button variant="outline">Read More</Button>
                                <Button>Buy Now</Button>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="bg-primary h-[80%] p-5 rounded-md text-white flex flex-col justify-between">
                                <h2 className="text-xl font-bold">Adhere Now</h2>
                                <ul className="flex flex-col gap-2">
                                    <li className="text-sm"> - Sherlock Holmes</li>
                                    <li className="text-sm"> - The Adventures of Sherlock Holmes</li>
                                    <li className="text-sm"> - The Adventures of Sherlock Holmes</li>
                                    <li className="text-sm"> - The Adventures of Sherlock Holmes</li>
                                </ul>
                                <div>
                                    <Button className="bg-white text-primary">GET IT NOW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full">
                    <div className="w-full flex justify-between items-center">
                        <h3 className="font-bold text-xl pb-4">New Media</h3>
                        <Link to="/products" className="text-primary font-semibold">
                            See More
                        </Link>
                    </div>
                    <div className="grid gap-2" style={{gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"}}>
                        <div className="bg-red-500 h-[300px]"></div>
                        <div className="bg-red-500 h-[300px]"></div>
                        <div className="bg-red-500 h-[300px]"></div>

                    </div>
                </section>
            </main>
        </HomeLayout>
    )
}

export {Homepage}