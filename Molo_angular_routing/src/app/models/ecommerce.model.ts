export interface ECommerce
{
    scarpe: Scarpa[];
    magliette: Maglietta[];
    
}
export class Maglietta{
    public id: number;
    public nome: string;
    public tipologia:string;
    public prezzo:number;

}
export class Scarpa{
    public id:number;
    public nome:string;
    public prezzo:number;
}