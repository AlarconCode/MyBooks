export class Usuario {

    public id_user:number
    public name:string
    public surname:string
    public email:string
    public url:string

    constructor(id_user:number, name:string, surname:string, email:string, url:string ) {

        this.id_user = id_user
        this.name = name
        this.surname = surname
        this.email = email
        this.url = url

    }

    // methods

    public nameComplete():string {
        
        return `${this.name} ${this.surname}`
   
    }    

}
