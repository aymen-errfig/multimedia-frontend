import {useProducts} from "@/src/hooks/product.js";
import {Dialog, DialogContent, DialogTrigger} from "@components/ui/dialog.jsx";
import {Button} from "@components/ui/button.jsx";
import {Loader2} from "lucide-react";
import { cn } from "@lib/utils";
import { useCallback, useState } from "react";

export const ProductCard = ({product}) => {
    const {titre, image, description} = product;
    const {reserveProduct, loading} = useProducts();
    const [dialogOpen, setDialogOpen] = useState(false);
    const types = ["livre", "cd", "film", "jeu"];
    const colors = ["bg-primary", "bg-rose-500", "bg-purple-500", "bg-green-500"];
    const getColor = useCallback((type) => {
        for (let index = 0; index < types.length; index++) {
            if (types[index] === type)
                return (colors[index]);
        }
    }, []);
    return (
        <div className="h-[300px] flex flex-col justify-between relative">
            <div className={cn("text-sm px-2 py-1 rounded-md font-semibold text-white z-[1] absolute m-2", getColor(product.type))}>{product.type}</div>
            <div className={cn("text-sm px-2 py-1 rounded-md font-semibold bg-white z-[1] absolute right-0 m-2")}>stock : {product.stock}</div>
            <div className="h-full w-full absolute bg-black/30"></div>
            <img src={image} alt="sherlock" className="w-full h-[100%] object-cover"/>
            <div
                className="absolute bottom-0 w-full flex flex-col justify-between">
                <h3 className="font-bold p-2 text-xl text-white">{titre}</h3>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>{product.stock > 0 ? <Button>Reserver</Button> : <Button variant={"destructive"} disabled>Out Of Stock</Button>}</DialogTrigger>
                    <DialogContent>
                        <div className="flex gap-4">
                            <div className="h-[full] w-[200px]">
                                <img src={image} alt="sherlock" className="w-full h-full object-cover"/>
                            </div>
                            <div className="w-[60%] flex flex-col justify-between">
                                <h3 className="font-bold p-2 text-2xl ">{titre}</h3>
                                <p className="p-2 text-muted-foreground">{description.slice(0, 300)}...</p>
                                <Button onClick={async () => {
                                    await reserveProduct(product._id);
                                    setDialogOpen(false);
                                }} className="w-full">
                                    {loading && <Loader2 className="animate-spin"/>}
                                    Reserve Now</Button>
                            </div>
                        </div>

                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}