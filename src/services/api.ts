import axios, {AxiosResponse} from "axios";

interface ApiProp {
  url: string;
  params?: any;
}
const apiURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;
const apiToken: string | undefined = process.env.API_TOKEN;

const getHeaders = () => ({
  Authorization: `Bearer ${apiToken}`,
  // add y: Request header field cache-control is not allowed by Access-Control-Allow-Headers in preflight response.
});

export const api = async (url: string, params: any = {}): Promise<any> => {
  try {
    let apiUrl = apiURL ? `${apiURL}/api/${url}` : `/api/${url}`;

    // Append query parameters to the URL if params are provided
    if (Object.keys(params).length > 0) {
      apiUrl += `?${new URLSearchParams(params).toString()}`;
    }

    const response: AxiosResponse = await axios.get(apiUrl, {
      headers: getHeaders(),
    });

    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const apiAll = async (arr: ApiProp[]): Promise<any[]> => {
  const requests = arr.map((request: ApiProp) =>
    api(request.url, request.params),
  );

  try {
    const responses: AxiosResponse[] = await axios.all(requests);
    return responses.map((res) => res.data);
  } catch (error: any) {
    return error;
  }
};

export default api;
