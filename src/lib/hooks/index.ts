// useProductList.js
import axios from 'axios';
import { useState } from "react";
import { HomeData } from "@/lib/constants"; 

const useProductList = () => {

  const fetchBookData = async () => {
    try {
      const response = await axios.get('https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblqllWO03N90JhcL', {
        headers: {
          'Authorization': 'Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92'
        }
      });

      // Update HomeData with the fetched data
      HomeData.books.records = response.data.records; 

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const fetchAssessmentData = async () => {
    try {
      const response = await axios.get('https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblz00iwd6V4uDbir', {
        headers: {
          'Authorization': 'Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92'
        }
      });

      // Update HomeData with the fetched data
      HomeData.AssessmentData.list = response.data.records; 

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  const fetchBlogData = async () => {
    try {
      const response = await axios.get('https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblVPg1eQVIkETUT0', {
        headers: {
          'Authorization': 'Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92'
        }
      });

      // Update HomeData with the fetched data
      HomeData.blogapi.records = response.data.records; 

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  return {fetchBookData,fetchAssessmentData,fetchBlogData};
};

export default useProductList;
