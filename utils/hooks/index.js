import { useState } from 'react';
import axios from 'axios';

const usePostData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const postData = async (url, data) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await axios.post(url, data);
      if (result.status !== 200 && result.status !== 201) {
        throw new Error("Something went wrong.");
      }
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, error, postData };
};

export { usePostData };
