import {useProducts} from "@/src/hooks/product.js";
import {Dialog, DialogContent, DialogTrigger} from "@components/ui/dialog.jsx";
import {Button} from "@components/ui/button.jsx";
import {Loader2} from "lucide-react";

export const ProductCard = ({product}) => {
    const {titre, image} = product;
    const {reserveProduct, loading} = useProducts();
    return (
        <div className="h-[300px] flex flex-col justify-between relative">
            <div className="h-full w-full absolute bg-black/30"></div>
            <img src={image} alt="sherlock" className="w-full h-[100%] object-cover"/>
            <div
                className="absolute bottom-0 w-full flex flex-col justify-between">
                <h3 className="font-bold p-2 text-xl text-white">{titre}</h3>
                <Dialog>
                    <DialogTrigger asChild><Button>Reserver</Button></DialogTrigger>
                    <DialogContent>
                        <div className="flex gap-4">
                            <div className="">
                                <img src={image} alt="sherlock" className="w-full h-full object-cover"/>
                            </div>
                            <div className="w-[60%] flex flex-col justify-between">
                                <h3 className="font-bold p-2 text-2xl ">{titre}</h3>
                                <p className="p-2 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                                    ante. Donec eu libero sit..</p>
                                <Button onClick={async () => {
                                    await reserveProduct(product._id)
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