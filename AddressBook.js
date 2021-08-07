console.log("Welcome to the AddressBook Program");
class Contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
}

let contact1 = new Contact("Lavanya", "Gangadharan", "Kann", "Chennai", "Tamilnadu",609842,9086543215, "lavanya@gmail.com")
console.log(contact1)