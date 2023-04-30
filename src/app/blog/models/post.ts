import { environment } from "src/environments/environment";

export class Post {
    public icon: string;
    public username: string;
    public message: string;

    constructor(other?: any) {
        this.username = other['username'];
        this.message = other['message'];
        this.icon = environment.assetsFolder + (this.username ? this.username + "-icon.png" : '/no-image.png');
    }
}
