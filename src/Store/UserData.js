import { makeAutoObservable } from "mobx"

class UserData{
    Name = {
        First: "Tiana",
        Second:"Rosser" 
    };
    Role = 'Developer';
    PhotoUrl = 'https://i.ibb.co/jZDWdPJ/Round-Avatars-Image.png';
    constructor(){
        makeAutoObservable(this)
    }
    Media = [
        {
            PhotoId: 1,
            PhotoUrl: 'https://i.ibb.co/yQtMbW8/Rectangle-6.png'
        },
        {
            PhotoId: 2,
            PhotoUrl: 'https://i.ibb.co/YjVNZRn/Rectangle-7.png'
        },
        {
            PhotoId: 3,
            PhotoUrl: 'https://i.ibb.co/5GNC1Gw/Rectangle-9.png'
        },
        {
            PhotoId: 4,
            PhotoUrl: 'https://i.ibb.co/zfZd8vg/Rectangle-8.png'
        },
        {
            PhotoId: 5,
            PhotoUrl: 'https://i.ibb.co/LC8K3Jj/Rectangle-11.png'
        },
        {
            PhotoId: 6,
            PhotoUrl: 'https://i.ibb.co/RgT2VwL/Rectangle-10.png'
        },
        {
            PhotoId: 7,
            PhotoUrl: 'https://i.ibb.co/mBnMn3S/Rectangle-12.png'
        },
        {
            PhotoId: 8,
            PhotoUrl: 'https://i.ibb.co/KhQkYfj/Rectangle-14.png'
        },
        {
            PhotoId: 9,
            PhotoUrl: 'https://i.ibb.co/zPTQjt1/Rectangle-13.png'
        }
    ]
}

export default new UserData()