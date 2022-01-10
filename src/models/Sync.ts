import axios, { AxiosResponse, AxiosPromise } from 'axios';

interface HasId{
    id: number;
}
export class Sync<T extends HasId>{ // Generic type constraints around Sync
    // fetch(id: number): void{ // pass the id you want to retrieve
    //     // axios.get(`http://localhost:3000/users/${this.get('id')}`)
    //     axios.get(`${this.rootUrl}/${this.get('id')}`)
    //     .then((response: AxiosResponse): void =>{
    //         this.set(response.data); //set the object from server in our model
    //     });
    //     //id, name, age
    // }

    fetch(id: number):AxiosPromise{
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data:T): AxiosPromise{ //generic type data
        //if user have id, we update it using PUT
        //else, do POST
        const {id} = data;


        const id = this.get('id');
        if(this.get('id')){ //put 
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        }else{ // post, brand new user
            axios.post('http://localhost:3000/users', this.data);
        }
    }
 }