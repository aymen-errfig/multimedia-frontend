import { HomeLayout } from "@components/layouts/home_layout.jsx";
import { Input } from "@components/ui/input.jsx";
import { Book, Disc, Film, Joystick, Loader2, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useProducts } from "@/src/hooks/product.js";
import { ProductCard } from "@/src/pages/Products/components/product_card.jsx"
import { FilterButton } from "./components/filter_button";
function Products() {
    const {
        products,
        loading,
        error,
        setSearch,
        search,
        filter,
        setFilter,
        fetchProducts
    } = useProducts();
    
    useEffect(() => {
        fetchProducts().then();
    }, [filter, search]);

    if (error) {
        location.href = "/login";
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
                        <Search className="absolute p-1 mr-1 text-gray-500" />
                        <Input
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            value={search}
                            className="rounded-full pl-2 w-52"
                            placeholder="Sherlock Holmes, .."
                        />
                    </div>
                    <div className="flex gap-2">
                        <FilterButton gfilter={filter} setFilter={setFilter} filter={""} />
                        <FilterButton gfilter={filter} setFilter={setFilter} filter={"livre"} />
                        <FilterButton gfilter={filter} setFilter={setFilter} filter={"cd"} />
                        <FilterButton gfilter={filter} setFilter={setFilter} filter={"film"} />
                        <FilterButton gfilter={filter} setFilter={setFilter} filter={"jeu"} />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xl font-bold text-primary">
                    <Book />
                    All
                </div>
                {loading ? <div className="flex justify-center items-center h-96">
                    <Loader2 className="animate-spin text-primary h-10 w-10" />
                </div> : <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
                    {(products) && products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>}
            </main>
        </HomeLayout>
    )
}

export default Products;