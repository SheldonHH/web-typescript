export class Eventing {
    events: {[key: string]: Callback[]} = {};

    type Callback = ()=>void;

    on(eventName: string, callback: Callback): void{
        // this.events['Singapore'] = []
        // this.events['sdfd']  = []
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }
}