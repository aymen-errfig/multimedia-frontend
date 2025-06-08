import {HomeLayout} from "@components/layouts/home_layout.jsx";
import {Input} from "@components/ui/input.jsx";
import {Book, Disc, Search} from "lucide-react";
import {ToggleGroup, ToggleGroupItem} from "@components/ui/toggle-group.jsx";
import {Button} from "@components/ui/button.jsx";

function Products() {
    return (
        <HomeLayout>
            <main className="min-h-screen w-[80%] flex flex-col mt-10 gap-6 pb-[100px]">
                <div className="w-full flex justify-between items-center py-2">
                    <div className="relative flex items-center justify-end">
                        <Search className="absolute p-1 mr-1 text-gray-500"/>
                        <Input className="rounded-full pl-2" placeholder="Sherlock Holmes, .."/>
                    </div>
                    <div>
                        <ToggleGroup type="single" className="flex gap-2" defaultValue="books">
                            <ToggleGroupItem size="sm" value="books">
                                <p>books</p>
                            </ToggleGroupItem>
                            <ToggleGroupItem size="sm" value="cd">
                                <p>cds</p>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xl font-bold text-primary">
                    <Book/>
                    Books
                </div>
                <div className="grid gap-2" style={{gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"}}>
                    <div className="h-[300px] flex flex-col justify-between relative">
                        <div className="h-full w-full absolute bg-black/30"></div>
                        <img src="sherlock.jpg" alt="sherlock" className="w-full h-[100%] object-cover"/>
                        <div
                            className="absolute bottom-0 w-full flex flex-col justify-between">
                            <h3 className="font-bold p-2 text-xl text-white">Sherlock Holmes</h3>
                            <Button>Reserver</Button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xl font-bold text-rose-500">
                    <Disc/>
                    CDs
                </div>
                <div className="grid gap-2" style={{gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"}}>
                    <div className="h-[300px] flex flex-col justify-between relative">
                        <div className="h-full w-full absolute bg-black/30"></div>
                        <img src="sherlock.jpg" alt="sherlock" className="w-full h-[100%] object-cover"/>
                        <div
                            className="absolute bottom-0 w-full flex flex-col justify-between">
                            <h3 className="font-bold p-2 text-xl text-white">Sherlock Holmes</h3>
                            <Button>Reserver</Button>
                        </div>
                    </div>
                </div>
            </main>
        </HomeLayout>
    )
}

export default Products;