// add modal
const addModal = document.querySelector('.add_modal');
const addModalForm = document.querySelector('.modal-body .formUser');

// edit modal
const editModal = document.querySelector('.edit_modal');
const editModalForm = document.querySelector('.modal-body .editModalFormlUser');


const btnAdd = document.querySelector('.btn-success');

// click add user

// user click anywhere ouside the modal
window.addEventListener('click', e => {
    if (e.target === addModal) {
        addModal.classList.remove('modal_show');
    }
    if (e.target === editModal) {
        editModal.classList.remove('modal_show');
    }
})

// create element and render user

// // <td>${doc.data().id}</td>
// <td>${doc.data().userName}</td>
// <td>${doc.data().fullName}</td>
// <td>${doc.data().password}</td>
// <td>${doc.data().address}</td>
// <td>${doc.data().phone}</td>
// <td>${doc.data().type}</td>
// <td>${doc.data().imgUser}</td>

const tableUser = document.querySelector('.table_users');

// const renderUser = doc => {
//     const tr = `
//     <tr data_id='${doc.id}'>

//     <td>${doc.id}</td>  
//     <td>${doc.userName}</td>
//     <td>${doc.fullName}</td>
//     <td>${doc.password}</td>
//     <td>${doc.address}</td>
//     <td>${doc.phone}</td>
//     <td>${doc.type}</td>
//     <td><img src="${doc.imgUser}" style="width:50px;height:50px"></td>
//     <td>
//         <button class="btn_edit"><i class="fa fa-pencil-square-o"></i></button>
//         <button class="btn_delete"><i class="	fa fa-trash"></i></button>
//     </td>
// </tr>
//     `;
//     tableUser.insertAdjacentHTML('beforeend', tr);

//     // CLICK EDIT USERS
//     // const btnEdit = document.querySelector(`[data_id='${doc.id}'] .btn_edit`);
//     btnEdit.addEventListener('click', () => {
//         editModal.classList.add('modal_show');
//         // id = doc.id;
//         // editModalForm.id.value = doc.data().id;
//         // editModalForm.userName.value = doc.data().userName;
//         // editModalForm.fullName.value = doc.data().fullName;
//         // editModalForm.password.value = doc.data().password;
//         // editModalForm.address.value = doc.data().address;
//         // editModalForm.phone.value = doc.data().phone;
//         // editModalForm.type.value = doc.data().type;
//         // editModalForm.image.value = doc.data().imgUser;

//         id = doc.id;
//         editModalForm.id.value = doc.id;
//         editModalForm.userName.value = doc.userName;
//         editModalForm.fullName.value = doc.fullName;
//         editModalForm.password.value = doc.password;
//         editModalForm.address.value = doc.address;
//         editModalForm.phone.value = doc.phone;
//         editModalForm.type.value = doc.type;
//         editModalForm.image.value = doc.imgUser;

//         updateUser(doc.id);
//     })
//     // click btn delete
//     const btnDelete = document.querySelector(`[data_id='${doc.id}'] .btn_delete`);
//     btnDelete.addEventListener('click', () => {

//         // alert('Do you want to remove element ?')
//         // db.collection('users').doc(`${doc.id}`).delete().then(() => {
//         //     console.log('Document sucessfully deleted!');
//         // }).catch(err => {
//         //     console.log('Erro removing document', err);
//         // });


//         // const keyDelete = Object.keys(snapshot.val())[0];
//         var txt;
//         if (confirm("Press a button!")) {
//             db.ref('users/' + doc.id).remove().then(() => {
//                 console.log('Document sucessfully deleted');
//                 console.log('key la' + doc.id);

//             }).catch(err => {
//                 console.log('Eroo removing document', err)
//             });
//             document.location.reload(true);
//         } else {
//             txt = "You pressed Cancel!";
//         }






//     });
// }

// GET ALL USERS

// db.collection('users').get().then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//         // console.log(doc.data());
//         renderUser(doc);
//     })
// })

// reload();

/// RELOAD USERS
// function reload() {
//     var data_users = db.ref('users');
//     data_users.push();

//     data_users.once('value', (snapshot) => {
//         snapshot.forEach((chilSnapshot) => {
//             const doc = chilSnapshot.val();
//             const key = chilSnapshot.key;
//             console.log(doc);
//             console.log(key);
//             renderUser(doc);
//         })

//     })
// }






//         REAL TIME LISTENER /////////////////////////////// 
// db.collection('users').onSnapshot(snapshot => {
//     snapshot.docChanges().forEach(change => {

//         console.log(change.type);
//         if(change.type === 'added')
//         {
//             renderUser(change.doc);
//         }
//         if(change.type === 'removed')
//         {
//             let tr = document.querySelector(`[data_id='${change.doc.id}']`);
//             let tbody = tr.parentElement;
//             tableUser.removeChild(tbody);   
//         }
//         if(change.type === 'modified')
//         {
//             let tr = document.querySelector(`[data_id='${change.doc.id}']`);
//             let tbody = tr.parentElement;
//             tableUser.removeChild(tbody);
//             renderUser(change.doc);
//         }
//     })
// })




// click submit in edit modal
// function updateUser(idUpdate) {
//     editModalForm.addEventListener('submit', e => {
//         e.preventDefault();
//         editModal.classList.remove('modal_show');
//         // db.collection('users').doc(id).update({
//         //     id: editModalForm.id.value,
//         //     userName: editModalForm.userName.value,
//         //     fullName: editModalForm.fullName.value,
//         //     password: editModalForm.password.value,
//         //     address: editModalForm.address.value,
//         //     phone: editModalForm.phone.value,
//         //     type: editModalForm.type.value,
//         //     imgUser: editModalForm.image.value
//         // });
//         db.ref('users/' + idUpdate).set({
//             id: idUpdate,
//             userName: editModalForm.userName.value,
//             fullName: editModalForm.fullName.value,
//             password: editModalForm.password.value,
//             address: editModalForm.address.value,
//             phone: editModalForm.phone.value,
//             type: editModalForm.type.value,
//             imgUser: editModalForm.image.value
//         })
//         document.location.reload(true);

//         // console.log('gia tri id la: '+ editModalForm.id.value);
//     })

// }

// editModalForm.addEventListener('submit', e => {
//     e.preventDefault();
//     editModal.classList.remove('modal_show');
//     // db.collection('users').doc(id).update({
//     //     id: editModalForm.id.value,
//     //     userName: editModalForm.userName.value,
//     //     fullName: editModalForm.fullName.value,
//     //     password: editModalForm.password.value,
//     //     address: editModalForm.address.value,
//     //     phone: editModalForm.phone.value,
//     //     type: editModalForm.type.value,
//     //     imgUser: editModalForm.image.value
//     // });
//     db.ref('users/' + editModalForm.id.value).update({
//         id: editModalForm.id.value,
//         userName: editModalForm.userName.value,
//         fullName: editModalForm.fullName.value,
//         password: editModalForm.password.value,
//         address: editModalForm.address.value,
//         phone: editModalForm.phone.value,
//         type: editModalForm.type.value,
//         imgUser: editModalForm.image.value
//     })
//     // console.log('gia tri id la: '+ editModalForm.id.value);
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CREATE USER TO DATABASE


function createUser(id, fullName, userName, password, address, phone, type, imgUser) {
    let user = {
        id: id,
        fullName: fullName,
        userName: userName,
        password: password,
        address: address,
        phone: phone,
        type: type,
        imgUser: imgUser
    };

    //set user to database
    db.ref('users/' + id).set(user);
    console.log('full name: ' + user.fullName);

}

//READ USER FROM DATABASE AND ADD USER TO TABLE
function readUser() {
    userTableRows.innerHTML = "";
    let listUser = db.ref('users');
    listUser.on('child_added', function (data) {
        let userValue = data.val();

        // add data to table
        userTableRows.innerHTML += `
            <tr>
            <td>${userValue.id}</td>  
            <td>${userValue.fullName}</td>
            <td>${userValue.userName}</td>
            <td>${userValue.password}</td>
            <td>${userValue.address}</td>
            <td>${userValue.phone}</td>
            <td>${userValue.type}</td>
            <td><img src="${userValue.imgUser}" style="width:30px;height:30px"></td>
            <td>
                <button data-toggle="modal" data-target="#modalEditUser" type="button" class="btn btn-success btn_edit" onclick="showModalEdit('${userValue.id}','${userValue.fullName}','${userValue.userName}','${userValue.password}','${userValue.address}','${userValue.phone}','${userValue.type}','${userValue.imgUser}')"><i class="fa fa-pencil"></i></button>
                <button class="btn_delete btn btn-danger" onclick="deleteUser('${userValue.id}')"><i class="fa fa-trash-o"></i></button>
            </td>
            </tr>
        `;



    });
}



const userTableRows = document.querySelector(".userRows");
userTableRows.addEventListener('load', readUser());


//////////////////// CREATE USER TO DATABASE WHEN PRESS SUBMIT IN MODAL ADD USER
// click add user
const btAddUser = document.getElementById('btAddUser')
btAddUser.addEventListener('click', () => {
    // addModal.classList.add('modal_show');

    addModalForm.fullName.value = '';
    addModalForm.userName.value = '';
    addModalForm.password.value = '';
    addModalForm.address.value = '';
    addModalForm.phone.value = '';
    addModalForm.type.value = '';
    addModalForm.imgUser.value = '';
    // alert('abc');

});


// click submit in add modal

btnSubmitUser = document.querySelector('.modal-footer .btn-success ')
btnSubmitUser.addEventListener('click', ()=> {
    let id = db.ref('users').push().key;
    let fullName = addModalForm.fullName.value;
    let userName = addModalForm.userName.value;
    let password = addModalForm.password.value;
    let address = addModalForm.address.value;
    let phone = addModalForm.phone.value;
    let type = addModalForm.type.value;
    let imgUser = addModalForm.imgUser.value;
    createUser(id, fullName, userName, password, address, phone, type, imgUser);
    readUser();
    // console.log(addModalForm.userName.value);
    // db.collection('users').add({
    //     id: addModalForm.id.value,
    //     userName: addModalForm.userName.value,
    //     fullName: addModalForm.fullName.value,
    //     password: addModalForm.password.value,
    //     address: addModalForm.address.value,
    //     phone: addModalForm.phone.value,
    //     type: addModalForm.type.value,
    //     imgUser: addModalForm.image.value
    // })
    // const keyUser = db.ref('users').push().key;

    // db.ref('users/' + keyUser).set({

    //     id: keyUser,
    //     userName: addModalForm.userName.value,
    //     fullName: addModalForm.fullName.value,
    //     password: addModalForm.password.value,
    //     address: addModalForm.address.value,
    //     phone: addModalForm.phone.value,
    //     type: addModalForm.type.value,
    //     imgUser: addModalForm.image.value

    // })

});

/// SHOW MODAL EDIT

const modalEditUser = document.getElementById('modalEditUser');
function showModalEdit(id, fullName, userName, password, address, phone, type, imgUser) {
    // editModal.classList.add('modal_show');

    editModalForm.fullName.value = fullName;
    editModalForm.userName.value = userName;
    editModalForm.password.value = password;
    editModalForm.address.value = address;
    editModalForm.phone.value = phone;
    editModalForm.type.value = type;
    editModalForm.imgUser.value = imgUser;
    const bt_submit_edit = document.getElementById('btnSubmitEditUser');
    bt_submit_edit.addEventListener('click', ()=> {
        db.ref('users/' + id).set({
            id:id,
            fullName: editModalForm.fullName.value,
            userName: editModalForm.userName.value,
            password: editModalForm.password.value,
            address: editModalForm.address.value,
            phone: editModalForm.phone.value,
            type: editModalForm.type.value,
            imgUser: editModalForm.imgUser.value

        });
        readUser();
        document.location.reload(true);
    })
}


/////// DELETE USER
function deleteUser(id) {

    var txt;
    if (confirm("Do you want delete this element ?")) {
        db.ref('users/' + id).remove();
        readUser();
    }
    else {
        txt = "You pressed cancel !";
    }
    
}