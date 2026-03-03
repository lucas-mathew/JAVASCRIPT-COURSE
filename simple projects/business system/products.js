    "use strict"
    
    const products = [
      {id:1,name:"Nails",stock:20, buyPrice:1000, salePrice:2000},
      {id:2,name:"Roofs",stock:10, buyPrice:10000, salePrice:20000},
      {id:2,name:"Cement",stock:10, buyPrice:10000, salePrice:20000}

    ]

    //DOM selection 
    const productsContainer = document.querySelector('.js-products-container');
    const totalProducts = document.querySelector('#total-products');
    const productName = document.querySelector('#product-name');
    const productStock = document.querySelector('#stock');
    const buyPricePerProduct = document.querySelector('#buy-price');
    const salePricePerProduct = document.querySelector('#sale-price');
    const addButton = document.querySelector(".addButton")
    const totalProfitDisplayer = document.querySelector('#total-profit-displayer')
    const totalCapitalDisplayer =document.querySelector("#total-capital-displayer")


  //display products on the page;
  function renderProducts(){
     let productsHTML = '';
     let totalProfit = 0;
     let totalCapital = 0;

     products.forEach((product,index) => {
       
       productsHTML += `
       <div class="rows  product-info">
       <div>${product.name}</div>
        <div>${product.stock} </div>
        <div>${product.buyPrice}</div>
        <div>${product.salePrice}</div>
        <div>${calculateProfit(product.buyPrice,product.salePrice,product.stock)} </div>
        <div>${calculateCapital(product.buyPrice,product.stock)} </div>
        <div>
        <button id="edit-buttons">edit</button>
        <button id="delete-buttons" class="delete" data-index="${index}">delete</button>
        </div>
        </div>
        `
         totalProfit += (product.salePrice - product.buyPrice) * product.stock;
         totalCapital += product.buyPrice * product.stock
      })
      
      productsContainer.innerHTML = productsHTML
      calculateTotalProducts()
      deleteProducts()
      totalProfitDisplayer.innerHTML = totalProfit
      totalCapitalDisplayer.innerHTML = totalCapital
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

      if(name === '' || stock === '' || buyPrice === '' || salePrice === ''){
        return;
      }else{
        products.push({
        name,
        stock,
        buyPrice,
        salePrice
      })
      }

      renderProducts()

      productName.value = ""
      productStock.value = ""
      buyPricePerProduct.value = ""
      salePricePerProduct.value = ""
 
    }
  

  addButton.addEventListener('click', () => {
    addProduct()
    renderProducts()
  })


  function calculateTotaProfit(salePrice, buyPrice, stock){
    
     return (salePrice - buyPrice) * stock;
  }
  calculateProfit()

  