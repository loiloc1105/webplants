// read data bills from firebase
function readBill(){
    billTableRows.innerHTML = '';
    let listBills = db.ref('orders');
    listBills.on('child_added',(data)=>{
        let billData = data.val();
        // console.log('bill data la '+ billData.items[0].sum);
        // add data to table bill
        billTableRows.innerHTML +=`
            <tr>
                <td>${billData.id}</td>
                <td>${billData.nameUser}</td>
                <td>${billData.fullName}</td>
                <td>${billData.phone}</td>
                <td>${billData.address}</td>
                <td>$${billData.totalAmount}</td>
                <td>${billData.type}</td>
                <td>${billData.date}</td>
                <td>
                    <button data-toggle="modal" data-target="#modalEditOrder" type="button" class="btn btn-success btn_edit" onclick = "submitEditOrder('${billData.id}','${billData.phone}','${billData.address}','${billData.type}','${billData.fullName}')"><i class="fa fa-pencil"></i></button>
                </td>
            </tr>
        `
    })
}
const billTableRows = document.getElementById('rows_order');
billTableRows.addEventListener('load',readBill());

const editModalFormOrder = document.querySelector('.modal-body .formEditOrder');
/// eidt order
function editOrder(id,phone,address,status,fullName){

    let order = {
        id: id,
        phone: phone,
        address: address,
        type: status,
        fullName: fullName,
    }
    db.ref('orders/'+ id).update(order);

}

function submitEditOrder(id,phone,address,status,fullName){
    editModalFormOrder.phone.value = phone;
    editModalFormOrder.address.value = address;
    editModalFormOrder.status.value = status;
    editModalFormOrder.fullname.value = fullName;

    const btnSubmit = document.getElementById('btnSubmitEditOrder');
    btnSubmit.addEventListener('click',()=>{
        let fullName = editModalFormOrder.fullname.value;
        let phone = editModalFormOrder.phone.value;
        let address = editModalFormOrder.address.value;
        let status = parseInt(editModalFormOrder.status.value);
        editOrder(id,phone,address,status,fullName);
        readBill();
        document.location.reload(true)
    })
} 


