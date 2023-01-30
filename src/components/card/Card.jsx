
import { useEffect, useRef } from 'react'
import { FONT_SIZES } from '../../constants/sizes'
import image_1_jpg from '../../assets/images/image-1.jpeg';

const Card = ({product, handleProductClick, handleAddToBagBtnClick, handleInputNumberChange}) => {
    const titleRef = useRef(null)

    const removePreviousTitleSize = () => {
        FONT_SIZES.forEach(size => {
            if(titleRef.current.classList.contains(size)){
                titleRef.current.classList.remove(size)
            }
        })
    }

    const applyProductTitleSize = (product) =>{
        removePreviousTitleSize()
        titleRef.current.classList.add(FONT_SIZES[product.title_size])
    }
    
    useEffect(() => {
        applyProductTitleSize(product)
    })
    return (
        <div onClick={() => handleProductClick()} className={`${product.selected === true ? 'border-2 border-gray-500' : 'border border-gray-200'} max-w-xs py-10 mt-5 bg-white hover:border-2 hover:border-gray-500 shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:border-4 dark:hover:border-blue-500`}>
            <img className="rounded-t-lg w-48 mx-auto" src={image_1_jpg} alt="" />
            <div className="p-5">
                <h5 ref={titleRef} className="mb-10 text-xl font-bold tracking-tight text-gray-900 dark:text-white break-words overflow-hidden text-ellipsis">
                    {product.title}
                </h5> 
                {/* <h5 className="mb-10 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                </h5>             */}
                <div className="flex items-center">
                    <label htmlFor="quantity" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white mr-2">$12.00</label>
                    <input onChange={(event) => handleInputNumberChange(parseInt(event.target.value))} id="quantity" min="1" type="number" defaultValue="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <p className="my-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    {product.description}
                </p>
                <div className="grid grid-cols-1 justify-items-center mt-8">
                    <button onClick={() => handleAddToBagBtnClick()} className="w-28 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to bag
                    </button>
                    <p className="cursor-pointer px-3 py-2 text-sm font-medium underline dark:text-white">
                        Learn more
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card