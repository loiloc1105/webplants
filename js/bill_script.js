// read data bills from firebase
function readBill(){
    billTableRows.innerHTML = '';
    let listBills = db.ref('orders');
    listBills.on('child_added',(data)=>{
        let billData = data.val();
        console.log('bill data la '+ billData.items[0].sum);
        // add data to table bill
        billTableRows.innerHTML +=`
            <tr>
                <td>${billData.key}</td>
                <td>${billData.nameUser}</td>
                <td>${billData.phone}</td>
                <td>${billData.type}</td>
                <td>${billData.totalAmount}</td>
                <td>${billData.date}</td>
                <td>
                    <button><i class="fa fa-pencil-square-o"></i></button>
                    <button><i class="	fa fa-trash"></i></button>
                </td>
            </tr>
        `
    })
}
const billTableRows = document.querySelector('.bill-rows');
billTableRows.addEventListener('load',readBill());