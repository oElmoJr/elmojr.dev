import { Image } from "./style";

export default function ProfilePiture() {
    const profilePhoto = require('./images/profilephoto.png');

    return <Image src={profilePhoto}/>      
}