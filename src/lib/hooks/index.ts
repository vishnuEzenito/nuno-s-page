import axios from 'axios';
import { useState } from "react";

const useProductList = () => {
  const [productList, setProductList] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.airtable.com/v0/appgHxtYDfoOCYIKu/tblNoKmg1mu0TwTrh', {
        headers: {
          'Authorization': 'Bearer patejg4nzsIdz7fyU.04ac95280c8fda9825fc8806ad6f0287fcb3b5e85db0435f321cdf0dc07af37f'
        }
      });
      setProductList(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  return { productList, fetchData };
};

export default useProductList;
