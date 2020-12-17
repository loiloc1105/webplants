// add modal product
const addModalProduct = document.querySelector('.add_modal_product');
const addModalProductForm = document.querySelector('.modal-body .addProductForm');

// edit modal product
const editModalProduct = document.querySelector('.edit_modal_product');
const editModalProductForm = document.querySelector('.modal-body .editProductForm');


const btnAdd = document.querySelector('.btn_addProduct');

// click add product

// user click anywhere ouside the modal
window.addEventListener('click', e => {
    if (e.target === addModalProduct) {
        addModalProduct.classList.remove('modal_show');
    }
    if (e.target === editModalProduct) {
        editModalProduct.classList.remove('modal_show');
    }
})


// CREATE PRODUCT TO DATABASE
function createProduct(id, nameProduct, origin, price, soil, sunLight, temp, type, water, information, imgProduct) {

    let product = {};
    // let product = {
    //     id: id,
    //     nameProduct: nameProduct,
    //     origin: origin,
    //     price: price,
    //     soil: soil,
    //     sunLight: sunLight,
    //     temp: temp,
    //     type: type,
    //     water: water,
    //     information: information,
    //     imgProduct: imgProduct
    // }
    product.id = id;
    product.nameProduct = nameProduct;
    product.origin = origin;
    product.price = price;
    product.soil = soil;
    product.sunLight = sunLight;
    product.temp = temp;
    product.type = type;
    product.water = water;
    product.information = information;
    product.imgProduct = imgProduct;

    let listProduct = [];
    listProduct.push(id);
    // console.log('id update la' + id)

    db.ref('products/' + id).set(product);
}


// funtion update product
function updateProduct(id, nameProduct, origin, price, soil, sunLight, temp, type, water, information, imgProduct) {
    let product = {
        id: id,
        nameProduct: nameProduct,
        origin: origin,
        price: price,
        soil: soil,
        sunLight: sunLight,
        temp: temp,
        type: type,
        water: water,
        information: information,
        imgProduct: imgProduct
    }
    db.ref('products/' + id).update(product);
    console.log('ten cay la' + nameProduct);

}

/// read product from database  
function readProduct() {
    productTableRow.innerHTML = "";
    let listProduct = db.ref('products');
    listProduct.on('child_added', function (data) {
        let productValue = data.val();
        console.log('data la '+productValue.nameProduct);
        // add data to table on web
        productTableRow.innerHTML += `
            <tr>
                <td>${productValue.id}</td>
                <td>${productValue.nameProduct}</td>
                <td>${productValue.origin}</td>
                <td>$${productValue.price}</td>
                <td>${productValue.soil}mg</td>
                <td>${productValue.sunLight}</td>
                <td>${productValue.temp}*C</td>
                <td>${productValue.water}lần/tuần</td>
                <td><img src='${productValue.imgProduct}' style="width:30px; height:30px"></td>
                <td>
                    <button data-toggle="modal" data-target="#modalEditProduct" type="button" class="btn btn-success btn_edit" onclick="editProduct('${productValue.id}','${productValue.nameProduct}','${productValue.origin}','${productValue.price}','${productValue.soil}','${productValue.sunLight}','${productValue.temp}','${productValue.type}','${productValue.water}','${productValue.information}','${productValue.imgProduct}')"><i class="fa fa-pencil"></i></button>
                    <button class="btn_delete btn btn-danger" onclick="deleteProduct('${productValue.id}')"><i class="	fa fa-trash"></i></button>
                </td>
            </tr>
        `
    });
}



/// call readProduct()
const productTableRow = document.querySelector(".rows_product");
productTableRow.addEventListener('load', readProduct());


/// add product

// click button add_product
const btAddProduct = document.getElementById("btnAddProduct");
btAddProduct.addEventListener('click', () => {
    addModalProductForm.nameProduct.value = '';
    addModalProductForm.origin.value = '';
    addModalProductForm.price.value = '';
    addModalProductForm.soil.value = '';
    addModalProductForm.sunLight.value = '';
    addModalProductForm.type.value = '';
    addModalProductForm.temp.value = '';
    addModalProductForm.water.value = '';
    addModalProductForm.information.value = '';
    addModalProductForm.imgProduct.value = '';

});
// click submit in modal add product
const btnSubmitAddProduct = document.getElementById("btnSubmitAddProduct");
btnSubmitAddProduct.addEventListener('click', () => {
    let id = db.ref('products').push().key;
    let nameProduct = addModalProductForm.nameProduct.value;
    let origin = addModalProductForm.origin.value;
    let price = parseInt(addModalProductForm.price.value);
    let soil = addModalProductForm.soil.value;
    let sunLight = addModalProductForm.sunLight.value;
    let type = parseInt(addModalProductForm.type.value);
    let information = addModalProductForm.information.value;
    let temp = addModalProductForm.temp.value;
    let water = parseInt(addModalProductForm.water.value);
    let imgProduct = addModalProductForm.imgProduct.value;

    createProduct(id, nameProduct, origin, price, soil, sunLight, temp, type, water, information, imgProduct);
    readProduct();

})

/// delete product
function deleteProduct(id) {
    if (confirm('Do you want to delete element ?')
    ) {
        db.ref('products/' + id).remove();
        readProduct();
    }
}

// edit product



// click button edit

function editProduct(id, nameProduct, origin, price, soil, sunLight, temp, type, water, information, imgProduct) {
    editModalProductForm.nameProduct.value = nameProduct;
    editModalProductForm.origin.value = origin;
    editModalProductForm.price.value = price;
    editModalProductForm.soil.value = soil;
    editModalProductForm.sunLight.value = sunLight;
    editModalProductForm.temp.value = temp;
    editModalProductForm.type.value = type;
    editModalProductForm.water.value = water;
    editModalProductForm.information.value = information;
    editModalProductForm.imgProduct.value = imgProduct;
    // submitUpdate(id)
    const btn_modal_edit_product = document.getElementById('btnSubmitEditProduct');
    btn_modal_edit_product.addEventListener('click', () => {
        // e.preventDefault();
        let nameProduct = editModalProductForm.nameProduct.value;
        let origin = editModalProductForm.origin.value;
        let price = parseInt(editModalProductForm.price.value);
        let soil = editModalProductForm.soil.value;
        let sunLight = editModalProductForm.sunLight.value;
        let temp = editModalProductForm.temp.value;
        let water = editModalProductForm.water.value;
        let information = editModalProductForm.information.value;
        let imgProduct = editModalProductForm.imgProduct.value;
        let type = parseInt(editModalProductForm.type.value);

        updateProduct(id, nameProduct, origin, price, soil, sunLight, temp, type, water, information, imgProduct);

        // let dataProductChange= db.ref('products');
        // dataProductChange.push();
        // dataProductChange.once('value',(snapshot)=>{
        //     snapshot.forEach((childSnapshot)=>{
        //         const dataProduct = childSnapshot.val();
        //     })
        // })
        readProduct();
        
        // document.location.reload(false) ;    

    })

}


function submitUpdate(id) {
    const btn_modal_edit_product = document.getElementById('btnSubmitEditProduct');

    btn_modal_edit_product.addEventListener('click', () => {
        // e.preventDefault();
        let nameProduct = editModalProductForm.nameProduct.value;
        let origin = editModalProductForm.origin.value;
        let price = parseInt(editModalProductForm.price.value);
        let soil = editModalProductForm.soil.value;
        let sunLight = editModalProductForm.sunLight.value;
        let temp = editModalProductForm.temp.value;
        let water = parseInt(editModalProductForm.water.value);
        let information = editModalProductForm.information.value;
        let imgProduct = editModalProductForm.imgProduct.value;
        let type = parseInt(editModalProductForm.type.value);

        updateProduct(id, nameProduct, origin, price, soil, sunLight, temp, type, water, information, imgProduct);

        // let dataProductChange= db.ref('products');
        // dataProductChange.push();
        // dataProductChange.once('value',(snapshot)=>{
        //     snapshot.forEach((childSnapshot)=>{
        //         const dataProduct = childSnapshot.val();
        //     })
        // })
        readProduct();
        document.location.reload(true);
        // document.location.reload(false) ;    

    })
}






