export class Flight
{
    
        id:number=0;
        flightNumber:string ="";
        airline:string ="";
        departureCity:string ="";
        arrivalCity:string ="";
        dayDeparture:string ="";
        estimatedDeparture:string ="";
        business_Class:string ="";
        nonBusiness_Class:string ="";
        ticket_cost:string ="";
    
    

constructor(id:number,flightNumber:string,airline:string,departureCity:string,arrivalCity:string,dayDeparture:string,estimatedDeparture:string,business_Class:string,nonBusiness_Class:string,ticket_cost:string)
{
    this.id=id;
    this.flightNumber=flightNumber;
    this.airline=airline;
    this.departureCity=departureCity;
    this.arrivalCity=arrivalCity;
    this.dayDeparture=dayDeparture;
    this.estimatedDeparture=estimatedDeparture;
    this.business_Class=business_Class;
    this.nonBusiness_Class=nonBusiness_Class;
    this.ticket_cost=ticket_cost;
}
}
