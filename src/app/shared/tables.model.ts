
export class Tables {
    public product: string;
    public color: string;
    public size: number;
    public description: string;
    public imagePath: string;


    constructor(product: string, color: string, size: number, description: string, imagePath: string) {
        this.product = product;
        this.color = color;
        this.size = size;
        this.description = description;
        this.imagePath = imagePath;
    }
}
