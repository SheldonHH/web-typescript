import axios, {AxiosResponse} from 'axios';
import {Eventing} from './Eventing'
interface UserProps{
    id?:number
    name?: string;
    age?: number;
}
 
 

export class User{
    public events: Eventing = new Eventing(); 

    constructor(private data: UserProps){}

    get(propName: string): number | string{
        return this.data[propName];
    }

    set(update: UserProps): void{
        Object.assign(this.data, update);
    }

    trigger(eventName: string): void{
        const handlers = this.events[eventName]; // array of callback or undefined
        if(!handlers || handlers.length === 0){
            return;
        } 

        handlers.forEach(callback =>{
            callback();
        })
    }
}