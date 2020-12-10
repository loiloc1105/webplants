/// readInformation
const newTableRows = document.querySelector('.rows_new');
newTableRows.addEventListener('load', readNews());
function readNews() {
    newTableRows.innerHTML = '';
    const listNews = db.ref('informations');
    listNews.on('child_added', (data) => {
        let newData = data.val();
        newTableRows.innerHTML += `
            <tr>
                <td>${newData.id}</td>
                <td>${newData.nameInformation}</td>
                <td>${newData.descripInformation}</td>
                <td><img src='${newData.imgInformation}' style="width:40px; height:40px"></td>
                <td>
                    <button data-toggle="modal" data-target="#modalEitNew" type="button" class="btn btn-success btn_edit" onclick = "editNews('${newData.id}','${newData.nameInformation}','${newData.descripInformation}','${newData.imgInformation}')"><i class="fa fa-pencil"></i></button>
                    <button class="btn_delete btn btn-danger" onclick = "deleteNew('${newData.id}')"><i class="	fa fa-trash"></i></button>
                </td>
            </tr>
        `
    })
}

// add new
const btnAddNew = document.getElementById('btnAddNew');
const modalFormAddNew = document.querySelector('.modal-body .modalFormAddNew');
const btnSubmitAddNew = document.getElementById('btnSubmitAddNew');
btnAddNew.addEventListener('click', () => {
    modalFormAddNew.nameInfor.value = '';
    modalFormAddNew.description.value = '';
    modalFormAddNew.imageInfor.value = '';
})

function addNew(id, nameInformation, descripInformation, imgInformation) {
    let news = {
        id: id,
        nameInformation: nameInformation,
        descripInformation: descripInformation,
        imgInformation: imgInformation
    };

    db.ref('informations/' + id).set(news);

}

btnSubmitAddNew.addEventListener('click', () => {
    let id = db.ref('informations').push().key;
    let nameInformation = modalFormAddNew.nameInfor.value;
    let descripInformation = modalFormAddNew.description.value;
    let imgInformation = modalFormAddNew.imageInfor.value;
    addNew(id, nameInformation, descripInformation, imgInformation);
    readNews();
})

// delete news
function deleteNew(id) {
    if (confirm('Do you want remove this element ?')) {
        db.ref('informations/' + id).remove();
        readNews();
    }
}

// edit news

const modalFormEditNew = document.querySelector('.modal-body .modalFormEditNew');
const btnSubmitEditNew = document.getElementById('btnSubmitEditNew');

function editNews(id, nameInformation, descripInformation, imgInformation) {
    modalFormEditNew.nameInfor.value = nameInformation;
    modalFormEditNew.description.value = descripInformation;
    modalFormEditNew.imageInfor.value = imgInformation;

    btnSubmitEditNew.addEventListener('click', () => {
        let nameInformation = modalFormEditNew.nameInfor.value;
        let descripInformation = modalFormEditNew.description.value;
        let imgInformation = modalFormEditNew.imageInfor.value;
        addNew(id,nameInformation,descripInformation,imgInformation);
        document.location.reload(true);
    })
}
