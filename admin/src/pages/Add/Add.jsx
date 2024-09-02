import React, { useState } from 'react';
import './Add.css'
import { assets } from '../../admin_assets/assets';
import axios from 'axios'
import { toast } from 'react-toastify';
const Add = ({url}) => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
       productName:"",
       productDescription:"",
       productCategory:"Salad",
       productPrice:""
    })
    const onchangeHandler = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setData(prevData =>({...prevData, [name]:value}))
    }

    const onsubmitHandler = async(e) =>{
        e.preventDefault()
        const newData = new FormData()
        newData.append('name', data.productName)
        newData.append('description', data.productDescription)
        newData.append('price', Number(data.productPrice))
        newData.append('category', data.productCategory)
        newData.append('image', image)
        const response = await axios.post(`${url}/api/food/add`, newData)
        if(response.status === 200){
            setImage(prev => (false))
            setData(prev => ({
                productName:"",
                productDescription:"",
                productCategory:"Salad",
                productPrice:""
            }))
            toast.success('Upload Successfully')
        }
        else{
            toast.error('Failed. Try again')
            console.log(['error'])
        }
    }

  return (
    <div className='add'>
      <form onSubmit={onsubmitHandler}>
        <div className="upload div">
            <p>Upload Image</p>
            <img src={image? URL.createObjectURL(image): assets.upload_area} alt="" />
            <input type="file" id='image' required onChange={(e) => setImage(e.target.files[0])} name='image'/>
        </div>
        <div className="product-name div">
            <p>Product name</p>
            <input type="text" name='productName' placeholder='Type Here' value={data.productName} onChange={onchangeHandler}/>
        </div>
        <div className="product-desc div">
            <p>product description</p>
            <textarea name="productDescription" id="desc" rows="6" placeholder='Write content here' onChange={onchangeHandler}value={data.productDescription}></textarea>
        </div>
        <div className="category-price">
            <div className="flex div">
                <p>Prduct Category</p>
                <select name="productCategory" id="cate" onChange={onchangeHandler} value={data.productCategory}>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="flex div">
                <p>Product Price</p>
                <input type="number" name='productPrice' placeholder='$20' onChange={onchangeHandler} value={data.productPrice}/>
            </div>
        </div>
            <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default Add;
