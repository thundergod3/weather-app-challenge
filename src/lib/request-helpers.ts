/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import { API_URL } from "../constants/values";

interface Props {
  incrementLoading?: () => void;
  decrementLoading?: () => void;
}

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

class RequestHelpers {
  private incrementLoading: any;
  private decrementLoading: any;

  constructor(props?: Props) {
    const { incrementLoading, decrementLoading } = props || {};

    this.incrementLoading = incrementLoading;
    this.decrementLoading = decrementLoading;
  }

  get = async (url: string, params = {}, disableLoading?: boolean) => {
    !disableLoading && this.incrementLoading?.();
    try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      throw handleRequestError(error);
    } finally {
      !disableLoading && this.decrementLoading?.();
    }
  };

  post = async (
    url: string,
    data = {},
    options = {},
    disableLoading?: boolean
  ) => {
    !disableLoading && this.incrementLoading?.();
    try {
      const response = await axiosInstance.post(url, data, options);
      return response.data;
    } catch (error) {
      throw handleRequestError(error);
    } finally {
      !disableLoading && this.decrementLoading?.();
    }
  };

  put = async (
    url: string,
    data = {},
    options = {},
    disableLoading?: boolean
  ) => {
    !disableLoading && this.incrementLoading?.();
    try {
      const response = await axiosInstance.put(url, data, options);
      return response.data;
    } catch (error) {
      throw handleRequestError(error);
    } finally {
      !disableLoading && this.decrementLoading?.();
    }
  };

  patch = async (
    url: string,
    data = {},
    options = {},
    disableLoading?: boolean
  ) => {
    !disableLoading && this.incrementLoading?.();
    try {
      const response = await axiosInstance.patch(url, data, options);
      return response.data;
    } catch (error) {
      throw handleRequestError(error);
    } finally {
      !disableLoading && this.decrementLoading?.();
    }
  };

  delete = async (
    url: string,

    data = {},
    options = {},
    disableLoading?: boolean
  ) => {
    !disableLoading && this.incrementLoading?.();
    try {
      const response = await axiosInstance.delete(url, {
        data,
        ...options,
      });
      return response.data;
    } catch (error) {
      throw handleRequestError(error);
    } finally {
      !disableLoading && this.decrementLoading?.();
    }
  };

  // Add more methods (delete, patch, etc.) as needed

  setAuthorizationToken = (token?: string) => {
    // axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axiosInstance.interceptors.request.use(function (config) {
      //@ts-ignore
      config.headers = {
        ...config.headers,
        Authorization: token ? `Bearer ${token}` : "",
      };
      return config;
    });
  };
}

const handleRequestError = (error: any) => {
  console.error("Request error:", error);
  const errors: any = {};

  if (error.response) {
    // The request was made and the server responded with a status code
    errors.status = error.response.status;
    errors.data = error.response.data;

    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);

    if (error.response.status === 401) {
      // TODO: Implement un-authentication routing
      // window.location.href = "/";

      return errors;
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received:", error.request);
  } else {
    console.error("Error setting up the request:", error.message);
    errors.message = error.message;
  }

  return errors;
};

export default RequestHelpers;
