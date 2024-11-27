const elProductsList = document.querySelector(".js-products-list");
const elProductsTemp = document.querySelector(".js-store-temp").content;
const handleGetProductFn = async () => {
    try {
        const req = await fetch(BASE_URL + "product", {
            method: "GET",
            headers: {
                authorization: getItem("token")
            }
        });
        if (req.ok) {
            const res = await req.json();
            return res
        }
    } catch (error) {
        console.log(error);
    }
}
let products = handleGetProductFn();

const handleRenderProducts = async product => {
    product = (await product);
    console.log(product);
    
    elProductsList.innerHTML = "";
    const dockFragment = document.createDocumentFragment();
    product.forEach(({ product_name, product_desc, product_img, product_price, id }) => {
        const clone = elProductsTemp.cloneNode(true);
        clone.querySelector(".js-product-name").textContent = (product_name.split(" ").length > 3 ? product_name.split(" ").slice(0, 4) + " ..." : product_name);
        clone.querySelector(".js-product-description").textContent = (product_desc.split(" ").length > 3 ? product_desc.split(" ").slice(0, 4) + " ..." : product_desc);
        clone.querySelector(".js-product-price").textContent = product_price + " so'm";
        clone.querySelector(".js-save-product-btn").dataset.id = id;
        clone.querySelector(".js-add-basket-product-btn").dataset.id = id;
        clone.querySelector(".js-product-info-btn").dataset.id = id;
        clone.querySelector(".js-store-icon").dataset.id = id;
        dockFragment.append(clone);
    });
    elProductsList.append(dockFragment);
}
handleRenderProducts(products)


