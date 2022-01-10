import {User} froom './models/User';

const user = new User({name: 'new record', age: 0});

user.on('change', ()=>{
    console.log('change!');
})

user.events.trigger('change');