import {HomeLayout} from "@components/layouts/home_layout.jsx";
import {Input} from "@components/ui/input.jsx";
import {Book, Disc, Loader2, Search} from "lucide-react";
import {ToggleGroup, ToggleGroupItem} from "@components/ui/toggle-group.jsx";
import {Button} from "@components/ui/button.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {ProductServices} from "@/src/services/product.js";
import {useProducts} from "@/src/hooks/product.js";
import {ProductCard} from "@/src/pages/Products/components/product_card.jsx"

function Products() {

    // useEffect(() => {
    //     fetch('http://localhost:3001/products/add', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         // const {titre, description, type, image} = req.body;
    //         body: JSON.stringify({
    //             'titre': 'Sherlock Holmes',
    //             'description': '"The Adventures of Sherlock Holmes" by Arthur Conan Doyle is a collection of detective stories written during the late 19th century. The book introduces the legendary detective Sherlock Holmes and his loyal companion, Dr. John Watson, as they embark on various intriguing cases, filled with mystery and clever deductions. The opening of the book presents "A Scandal in Bohemia,"...',
    //             'type': 'livre',
    //             'image': 'data:image/webp;base64,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'
    //         })
    //     }).then((res) => {
    //         console.log(res);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }, []);
    const {
        products,
        loading,
        error,
        fetchProducts
    } = useProducts();
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchProducts().then();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="w-16 h-16 animate-spin text-primary"/>
            </div>
        );
    }
    if (error) {
        return (<div>
            <h1>Error</h1>
            <p>{error}</p>
        </div>);
    }
    return (
        <HomeLayout>
            <main className="min-h-screen w-[80%] flex flex-col mt-10 gap-6 pb-[100px]">
                <div className="w-full flex justify-between items-center py-2">
                    <div className="relative flex items-center justify-end">
                        <Search className="absolute p-1 mr-1 text-gray-500"/>
                        <Input onChange={(e) => {
                            setSearch(e.target.event)
                        }} value={search} className="rounded-full pl-2" placeholder="Sherlock Holmes, .."/>
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
                    {(products) && products.map((product) => (
                        <ProductCard product={product} key={product.id}/>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-xl font-bold text-rose-500">
                    <Disc/>
                    CDs
                </div>
                <div className="grid gap-2" style={{gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"}}>
                    {(products) && products.map((product) => (
                        <ProductCard product={product} key={product.id}/>
                    ))}
                </div>
            </main>
        </HomeLayout>
    )
}

export default Products;