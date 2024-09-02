import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = ({ url }) => {
  const [items, setItems] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/`);
    setItems(response.data.msg)
  };

  const handleDeleteItem = async(id) =>{
    const response = await axios.post(`${url}/api/food/remove`, {id})
    if(response.status === 200){
      const result = fetchList()
      setItems(result.data.msg)
      toast.success('Item deleted Successfullly')
    }
    else{
      toast.error('error')
    }
  }
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list">
      <h3>All Food List</h3>
      <div className="heading">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span>Action</span>
      </div>
      {items.map((item, index) =>{
        console.log(url+'/images/' + item.image)
        return(
          <div className="grid-item">
            <img src={url + '/images/' + item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p onClick={() => handleDeleteItem(item._id)}>x</p>
          </div>
        )
      })}
    </div>
  );
};

export default List;
