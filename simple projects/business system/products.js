    // "use strict"
    
    const products = [
      {id:"01",name:"Nails",stock:1, buyPrice:1000, salePrice:2000},
      {id:"02",name:"Roofs",stock:2, buyPrice:10000, salePrice:20000},
      {id:"03",name:"Cement",stock:10, buyPrice:10000, salePrice:20000}

    ]

    //DOM selection 
    const productsContainer = document.querySelector('.js-products-container');
    const totalProducts = document.querySelector('#total-products');
    const productName = document.querySelector('#product-name');
    const productStock = document.querySelector('#stock');
    const buyPricePerProduct = document.querySelector('#buy-price');
    const salePricePerProduct = document.querySelector('#sale-price');
    const addButton = document.querySelector(".addButton")
    const totalProfitDisplayer = document.querySelector('#total-profit-displayer');
    const totalCapitalDisplayer = document.querySelector("#total-capital-displayer");
    const totalStockDisplayer = document.querySelector('#total-stock-displayer');
    const searchInput = document.querySelector('#search');

    //Products Form validation Variables
    const alertStockLabel = document.querySelector('.stock-label')
    const alertNameLabel = document.querySelector(".name-label")
    const alertBuypriceLabel = document.querySelector('.buyPrice-label')
    const alertSalepriceLabel = document.querySelector(".salePrice-label")

    //display products on the page;
  function renderProducts(){
     let productsHTML = '';
     let totalProfit = 0;
     let totalCapital = 0;
     let totalStock = 0;
   
    products.forEach((product,index) => {
       
       totalProfit += ((product.salePrice - product.buyPrice) * product.stock);
       totalCapital += product.buyPrice * product.stock
       totalStock += Number(product.stock);
       productsHTML += `
       <div class="rows  product-info">
          <div>${product.name.slice(0,1).toUpperCase()} </div>
          <div>${product.name} </div>
          <div>${product.stock} </div>
          <div>${Number(product.buyPrice).toLocaleString('en-US')}</div>
          <div>${Number(product.salePrice).toLocaleString('en-US')}</div>
          <div>${calculateProfit(product.buyPrice,product.salePrice,product.stock).toLocaleString('en-US')} </div>
          <div>${calculateCapital(product.buyPrice,product.stock).toLocaleString('en-US')} </div>
          <div>
          <button id="edit-buttons" class="edit-buttons">edit</button>
          <button id="delete-buttons" class="delete" data-index="${index}">delete</button>
          </div>
        </div>
        `
      })
      
      productsContainer.innerHTML = productsHTML
      calculateTotalProducts()
      deleteProducts()
      totalProfitDisplayer.innerHTML = totalProfit.toLocaleString('en-US')
      totalCapitalDisplayer.innerHTML = totalCapital.toLocaleString('en-US')
      totalStockDisplayer.innerHTML = totalStock.toLocaleString('en-US')
      
   }
  renderProducts()



    function calculateProfit(buyPrice,salePrice,stock){
      return (salePrice - buyPrice) * stock 
    }

    function calculateCapital(buyPrice,stock){
      return buyPrice * stock
    }

    function calculateTotalProducts(){
      let total = products.length
      totalProducts.innerHTML = total
    }
    
   function deleteProducts(){
     let deleteButtons = document.querySelectorAll('.delete')
       deleteButtons.forEach(button => {
          button.addEventListener( 'click', (event) => {
          let index = event.target.dataset.index
          products.splice(index,1)

          renderProducts()
        })
      })
   }

  
  function addProduct(){
      let name = productName.value;
      let stock = productStock.value;
      let buyPrice = buyPricePerProduct.value;
      let salePrice = salePricePerProduct.value;
      
      buyPrice = buyPrice.toLocaleString('en-US');
      salePrice = salePrice.toLocaleString('en-US')
      
      if(name.trim() === '' || stock.trim() === '' || buyPrice.trim() === '' || salePrice.trim() === ''){
          invalidProductForm()
          return;
        
      }else{
        validProductForm()
        products.push({
        name,
        stock,
        buyPrice,
        salePrice
      })
      }

      // localStorage.setItem("products", JSON.stringify(products))
      renderProducts()

      productName.value = ""
      productStock.value = ""
      buyPricePerProduct.value = ""
      salePricePerProduct.value = ""
    }
  

    addButton.addEventListener('click', () => {
       addButton.innerHTML = "Saving..."
        setTimeout( () => {
          addButton.innerHTML = "Create product"
          addProduct()
          renderProducts()
        },1400)
    
    })


    function calculateTotaProfit(salePrice, buyPrice, stock){
      
      return (salePrice - buyPrice) * stock;
    }
    calculateProfit();



    //Delete all products
    function deleteAll(){

     return products.splice(indexedDB)
    }

    document.querySelector('#delete-all')
     .addEventListener("click", () => {
      deleteAll()
      
      renderProducts()
     })



     // Product Form Validation

     function invalidProductForm(){
          
       if(productName.value === ""){
          alertNameLabel.classList.add("required")
          alertNameLabel.innerHTML = "Product Name required!"
       }
    
       if(productStock.value === ""){
           alertStockLabel.classList.add("required")
           alertStockLabel.innerHTML = "Product Stock required!"
         }
    

        if(buyPricePerProduct.value === ""){
           alertBuypriceLabel.classList.add("required")
           alertBuypriceLabel.innerHTML = "Buy price required!"
        }

        if(salePricePerProduct.value === ""){
           alertSalepriceLabel.classList.add("required")
           alertSalepriceLabel.innerHTML = "Sale price required!"
        }
     }

      function validProductForm(){
          if(productStock !== ""){
            alertStockLabel.classList.remove("required")
          }
          
          alertNameLabel.classList.remove("required")
          
          alertBuypriceLabel.classList.remove("required")
          
          alertSalepriceLabel.classList.remove("required")   
     }

  
 
