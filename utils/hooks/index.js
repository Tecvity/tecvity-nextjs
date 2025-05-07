import { useEffect, useState } from 'react';
import axios from 'axios';

const usePostData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const reset = () => {
    setError(null);
    setResponse(null);
  };

  const postData = async (url, data) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await axios.post(url, data);
      if (result.status !== 200 && result.status !== 201) {
        throw new Error("Something went wrong.");
      }
      setResponse(result.data);
      return result.data.data;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, error, postData, reset };
};

const useGetData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getData = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error("Something went wrong.");
      }
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, getData };
};

export { usePostData, useGetData };
