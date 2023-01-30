import { FONT_SIZES } from '../../constants/sizes'

const Customize = ({handleTextAreaChange, handleInputRangeChange, textAreaRef, inputRangeRef}) => {
  return (
    <div className="my-10">
        <label htmlFor="textAreaTitle" className="block mb-2 text-lg font-medium text-gray-900">
          Edit product title
        </label>
        <textarea
          onChange={(event) => handleTextAreaChange(event)}
          ref={textAreaRef} 
          id="textAreaTitle" 
          rows="4"
          cols="50"
          minLength="1"
          maxLength="64"
          placeholder="Write your thoughts here..." 
          className="resize-none block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        
        <label htmlFor="minmax-range" className="block mb-2 mt-5 text-lg font-medium text-gray-900">
          Adjust font size
        </label>
        <input 
          onChange={(event) => handleInputRangeChange(event)}
          ref={inputRangeRef} 
          id="minmax-range" 
          type="range" 
          min="0"
          max={FONT_SIZES.length - 1}
          defaultValue="0"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        ></input>
    </div>
  )
}

export default Customize