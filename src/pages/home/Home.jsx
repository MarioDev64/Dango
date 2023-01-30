
import { useState, useEffect, useRef, useCallback } from 'react'
import { API_URL } from '../../constants/env'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Section from '../../components/section/Section'
import Customize from '../../components/customize/Customize'
import Card from '../../components/card/Card'
import BagModal from '../../components/modal/BagModal'
import CircularLoading from '../../components/loading/CircularLoading'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState(null)
  const [bag, setBag] = useState([])
  const [bagTotals, setBagTotals] = useState({total:0, totalItems:0})
  
  const customizeTextAreaRef = useRef(null)
  const customizeInputRangeRef = useRef(null)

  const requestProducts = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      `${API_URL}/products`
    );
    const products = await response.json();
    setProducts([...products]);
    setIsLoading(false);
  }, []);

  const updateTourmalineTitle = (event) => {
    if(productSelected){
      const titleProduct = products.map(product=>{
        return {...product, title:product.id===productSelected.id 
          ? event.target.value 
          : product.title}
      });
      setProducts(titleProduct)
    }
  }

  const updateTourmalineTitleSize = (event) => {
    if(productSelected){
      const titleSizeProduct = products.map(product=>{
        return {...product, title_size:product.id===productSelected.id 
          ? event.target.value 
          : product.title_size}
      });
      setProducts(titleSizeProduct)
    }
  }

  const updateProductsQuantity = (quantity, updateProduct) => {
    const quantityProduct = products.map(product=>{
      return {...product, quantity:product.id===updateProduct.id 
        ? quantity
        : product.quantity}
    })
    setProducts(quantityProduct)
  }

  const selectProduct = () => {
    const selectedProduct = products.map(product=>{
      return {...product, selected:product.id===productSelected.id ? true : false}
    });
    setProducts(selectedProduct)
  }

  const calculateBagTotal = (bagProducts) => {
    const bagTotal = {
      total: 0,
      totalItems: 0
    }

    bagProducts.forEach(item => {
      bagTotal.total = bagTotal.total + (item.quantity * item.price);
      bagTotal.totalItems = bagTotal.totalItems + item.quantity 
    });

    setBagTotals(bagTotal)
  }

  const addToBag = (toBag) => {
      const product = products.find(product => product.id === toBag.id)
      const productToBag = [...bag, product]
      setBag(productToBag)
      calculateBagTotal(productToBag)
  }

  useEffect(() => {
    if(productSelected){
      console.log('useEffect productSelected', productSelected)
      customizeTextAreaRef.current.value = productSelected.title;
      customizeInputRangeRef.current.value = productSelected.title_size;
      selectProduct()
    }
  }, [productSelected]) 

  useEffect(() => {
    requestProducts()
  }, [])

  return (
    <>
      <Header/>
      <main>
        <Section>
          <Customize
            textAreaRef={customizeTextAreaRef}
            inputRangeRef={customizeInputRangeRef}
            handleTextAreaChange={updateTourmalineTitle} 
            handleInputRangeChange={updateTourmalineTitleSize}
          />
        </Section> 
        <Section >
          {isLoading && (
            <CircularLoading/>
          )}
          <div className="flex flex-wrap gap-6 max-w-md:justify-center">
            {products?.map(product => (
              <Card
                id={`product${product.id}`}
                key={product.id} 
                product={product}
                handleProductClick={() => setProductSelected(product)}
                handleAddToBagBtnClick={() => addToBag(product)}
                handleInputNumberChange={(quantity) => updateProductsQuantity(quantity, product)}
              />
            ))}
          </div>
        </Section>
        <BagModal bag={bag} bagTotals={bagTotals} />  
      </main>
      <Footer/>
    </>
  )
}

export default Home