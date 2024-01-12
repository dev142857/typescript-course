"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
// const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
//     if(Array.isArray(arg) && arg.length) {
//         return {arg, is: true}
//     }
//     if ( isObj(arg) && Object.keys(arg as keyof T).length) {
//         return { arg, is: true}
//     }
//     return { arg, is: !arg}
// }
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); //modified
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoodValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Dave', sdf: 'sdfsd' }));
// console.log(processUser({ name: 'Dave'}))
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
// console.log(getUsersProperty([{ "id": 1, "name": 'Dave', "sdf": 'sdfsd'}, { "id": 2, "name": 'Davse', "sdf": 'sdfdfsasd'}], 'name'))
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwedborough",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-913-271-5820",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Graham",
        "username": "Antonette",
        "email": "Sincdsere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwedborough",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-913-271-5820",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
];
console.log(getUsersProperty(usersArray, "address"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = 'Dave';
// store.state = 12
const myState = new StateObject([15]);
myState.state = (['Dave', 42, true]);
console.log(myState.state);
