import { makeAutoObservable } from "mobx"

class FriendsData{
    Friends = [
        {
            Id:1,
            Name: {
                First: 'Correy',
                Second:"George" 
            },
            Role: 'Developer',
            PhotoUrl: 'https://i.ibb.co/XXPtW4q/12345.png'
        },
        {
            Id:12,
            Name: {
                First: "Ahmad",
                Second:"Vetrovs" 
            },
            Role: 'Developer',
            PhotoUrl: 'https://i.ibb.co/rtJWhRB/1234.png'
        },
        {
            Id:123,
            Name: {
                First: "Cristofer",
                Second:"Workman" 
            },
            Role: 'Developer',
            PhotoUrl: 'https://i.ibb.co/D9PJkgv/123.png'
        },
        // {
        //     Id:1234,
        //     Name: {
        //         First: "Tiana",
        //         Second:"Krosgaard" 
        //     },
        //     Role: 'Developer',
        //     PhotoUrl: 'https://i.ibb.co/nDsFghC/123456.png'
        // },
    ];
    Users = [
        {
            Id:1,
            Name: {
                First: 'Correy',
                Second:"George" 
            },
            Role: 'Developer',
            PhotoUrl: 'https://i.ibb.co/XXPtW4q/12345.png'
        },
        {
            Id:12,
            Name: {
                First: "Ahmad",
                Second:"Vetrovs" 
            },
            Role: 'Developer',
            PhotoUrl: 'https://i.ibb.co/rtJWhRB/1234.png'
        },
        {
            Id:123,
            Name: {
                First: "Cristofer",
                Second:"Workman" 
            },
            Role: 'Developer',
            PhotoUrl: 'https://i.ibb.co/D9PJkgv/123.png'
        },
        {
            Id:1234,
            Name: {
                First: "Tiana",
                Second:"Krosgaard" 
            },
            Role: 'Developer',
            PhotoUrl: 'https://i.ibb.co/nDsFghC/123456.png'
        },
    ];
    constructor(){
        makeAutoObservable(this)
    }
    addFriend(id){
        const chosenUser = this.Users.find(User => User.Id === id)
        this.Friends.push(chosenUser)
        
    }
    removeFriend(id){
        console.log('DELETING!');
        this.Friends = this.Friends.filter(Friend => Friend.Id !== id)
    }
    get PotentionalFriends(){
        const someArray = this.Users.filter(ar => !this.Friends.find(rm => (rm.Id === ar.Id) ))
        return someArray;
    }
}

export default new FriendsData()