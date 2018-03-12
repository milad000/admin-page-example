
export class Deals {
    public product: string;
    public quantity: number;
    public imagePath: string;


    constructor(product: string, quantity: number, imagePath: string) {
        this.product = product;
        this.quantity = quantity;
        this.imagePath = imagePath;
    }
}
