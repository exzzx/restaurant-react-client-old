


function User(id,username, password, first, last, email, phone, address, dateOfBirth, photoURL,role){
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = first;
    this.lastName = last;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.photoURL = photoURL;

    this.setUsername = setUsername;
    this.setPassword = setPassword;
    // this.setFirstName = setFirstName;
    // this.setLastName = setLastName;
    this.setRole = setRole;
    this.setEmail = setEmail;
    this.setPhone = setPhone;
    this.setDateOfBirth = setDateOfBirth;
    this.setPhotoURL = setPhotoURL;
    // this.setDescription = setDescription;
    this.getUsername = getUsername;
    this.getPassword = getPassword;
    // this.getFirstName = getFirstName;
    // this.getLastName = getLastName;
    this.getRole =getRole;
    this.getEmail = getEmail;
    this.getPhone = getPhone;
    this.getDateOfBirth =getDateOfBirth;
    // this.getDescription = getDescription;
    this.getPhotoURL = getPhotoURL;
    this.setId = setId;
    this.getId = getId;

    function setId() {
        this.id = id;
    }
    function getId() {
        return this.id;
    }

    function setUsername(username) {
        this.username = username;
    }
    function setPassword() {
        this.password = password;
    }
    // function setFirstName() {
    //     this.firstName = firstName;
    // }
    // function setLastName() {
    //     this.lastName = lastName;
    // }
    function setRole() {
        this.role = role;
    }
    function setEmail() {
        this.email = email;
    }
    function setPhone() {
        this.phone = phone;
    }
    function setDateOfBirth() {
        this.dateOfBirth = dateOfBirth;
    }
    // function setDescription() {
    //     this.description = description;
    // }
    function setPhotoURL() {
        this.photoURL = photoURL;
    }

    function getUsername() {
        return this.username;
    }
    function getPassword() {
        return this.password;
    }
    // function getFirstName() {
    //     return this.firstName;
    // }
    // function getLastName() {
    //     return this.lastName;
    // }
    function getRole() {
        return this.role;
    }
    function getEmail() {
        return this.email;
    }
    function getPhone() {
        return this.phone;
    }
    function getDateOfBirth() {
        return this.dateOfBirth;
    }
    // function getDescription() {
    //     return this.description;
    // }
    function getPhotoURL() {
        return this.photoURL;
    }
}

export default User;



