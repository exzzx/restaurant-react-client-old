(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn, $updateBtn, $searchBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        initFld();
        findAllUsers();

        $createBtn.click(function(){
            initFld();
            createUser();
        });

        $searchBtn.click(function(){
            initFld();
            userObj = new User($usernameFld.val(), $passwordFld.val(), $firstNameFld.val(),
            $lastNameFld.val(), $roleFld.val());
            if($usernameFld.val()||$passwordFld.val()||$firstNameFld.val()||$lastNameFld.val()||$roleFld.val()){
                userService
                    .findAllUsers()
                    .then(newUsers=>{
                        $tbody.empty();
                        selectedUsers = [];
                        // if($usernameFld.val())
                    
                        for(let newUser of newUsers){
                            if((newUser.username===$usernameFld.val()|| $usernameFld.val()==="")
                            && (newUser.firstName===$firstNameFld.val()|| $firstNameFld.val()==="")
                            && (newUser.lastName===$lastNameFld.val()|| $lastNameFld.val()==="")
                            && (newUser.role===$roleFld.val()|| $roleFld.val()==="") ){
                                selectedUsers.push(newUser);
                            }
                        }
                        renderUsers(selectedUsers);
                        $("#usernameFld").val("");
                        $("#passwordFld").val("");
                        $("#firstNameFld").val("");
                        $("#lastNameFld").val("");
                        $("#roleFld").val("");
                })
            }
        });
    }

    function initFld() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $createBtn = $(".zzx-createBtn");
        $updateBtn = $(".zzx-updateBtn");
        $searchBtn = $(".zzx-searchBtn");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");
        $tbody = $("tbody");
    }

    function convertUserFormater(user){

        // Because we shouldn't have same id among different buttons, here I 
        // don't use the HTML in user-admin.template.client.html.
        // Instead I write another 2 buttons here without any id.
        $userRowTemplate = $(`<tr class="wbdv-template wbdv-user wbdv-hidden">
        <td class="wbdv-username">${user.username}</td>
        <td class="wbdv-password">${"*".repeat((user.password?user.password.length:0))}</td>
        <td class="wbdv-first-name">${user.firstName}</td>
        <td class="wbdv-last-name">${user.lastName}</td>
        <td class="wbdv-role">${user.role}</td>
        <td class="wbdv-actions">
            <span class="float-right zzx-edit-delete-btns">
                <button class="btn zzx-body-remove-button zzx-removeBtn">
                    <i class="fa-2x fa fa-times wbdv-remove"></i>
                </button>
                <button class="btn zzx-body-edit-button zzx-editBtn">
                    <i class="fa-2x fa fa-pencil wbdv-edit"></i>
                </button>
            </span>
        </td>
        </tr>`);
        $("#usernameFld").val("");
        $("#passwordFld").val("");
        $("#firstNameFld").val("");
        $("#lastNameFld").val("");
        $("#roleFld").val("");
        
        return $userRowTemplate;
    }

    function createUser() {
        userObj = new User($usernameFld.val(), $passwordFld.val(), $firstNameFld.val(),
         $lastNameFld.val(), $roleFld.val());
        userService.createUser(userObj)
                    .then(newUser=>{
                            $("#usernameFld").val("")
                            $("#passwordFld").val("")
                            $("#firstNameFld").val("")
                            $("#lastNameFld").val("")
                            $("#roleFld").val("")
                            findAllUsers();
                        })
    }
    function findAllUsers() {
        userService
            .findAllUsers()
            .then(newUsers=>{
                renderUsers(newUsers);
            })
    }
    function findUserById(userId) {
        return userService
                .findUserById(userId)
    }

    function deleteUser(userId) {
        userService
            .deleteUser(userId)
            .then((rsp)=>{
                findAllUsers();
            })
    }

    // the selectUser() function will bring the one with hit edit button to the top form input.
    function selectUser(userId) {
        initFld();
        findUserById(userId).then(thisUser=>{
            $usernameFld.val(thisUser.username);
            $passwordFld.val(thisUser.password);
            $firstNameFld.val(thisUser.firstName);
            $lastNameFld.val(thisUser.lastName);
            $roleFld.val(thisUser.role);
        })
        $updateBtn.click(function(){
            updateUser(userId);
        })
    }
    
    function updateUser(userId) {
        initFld();
        let newUser = new User($usernameFld.val(), $passwordFld.val(), $firstNameFld.val(),
        $lastNameFld.val(), $roleFld.val());
        userService
            .updateUser(userId, newUser)
            .then(updatedUser=>{
                findAllUsers();
            });
        $updateBtn.unbind();
    }

    function renderUser(user) {
        $tbody.append(user);
    }

    function renderUsers(users) {
        $tbody.empty();
        for(let userIndex=0; userIndex<users.length; userIndex++) {
            var $user = convertUserFormater(users[userIndex]);
            $removeBtn = $user.find(".zzx-removeBtn");
            $removeBtn.click(function() {
                deleteUser(users[userIndex]._id);
            })
            $editBtn = $user.find(".zzx-editBtn");
            $editBtn.click(function() {
                selectUser(users[userIndex]._id);
            })
            renderUser($user);
        }
    }
})();
