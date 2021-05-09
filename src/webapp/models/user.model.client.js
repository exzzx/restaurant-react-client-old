function User(username, password, firstName, lastName, role, email, phone, dateOfBirth) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;

    this.setUsername = setUsername;
    this.setPassword = setPassword;
    this.setFirstName = setFirstName;
    this.setLastName = setLastName;
    this.setRole = setRole;
    this.setEmail = setEmail;
    this.setPhone = setPhone;
    this.setDateOfBirth = setDateOfBirth;
    this.getUsername = getUsername;
    this.getPassword = getPassword;
    this.getFirstName = getFirstName;
    this.getLastName = getLastName;
    this.getRole =getRole;
    this.getEmail = getEmail;
    this.getPhone = getPhone;
    this.getDateOfBirth =getDateOfBirth;


  
    function setUsername(username) {
      this.username = username;
    }
    function setPassword() {
        this.password = password;
    }
    function setFirstName() {
        this.firstName = firstName;
    }
    function setLastName() {
        this.lastName = lastName;
    }
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
    function getUsername() {
        return this.username;
    }
    function getPassword() {
        return this.password;
    }
    function getFirstName() {
        return this.firstName;
    }
    function getLastName() {
        return this.lastName;
    }
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
  }
  