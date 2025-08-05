/**
 * Fetch API with interceptor, token validation feature
 * @param input : same as first parameter of fetch API
 * @param init : same as second parameter of fetch API
 * @param tokenValidation : Whether token is validate or not
 * @param interceptor : Interceptor function
 */

import { CMS_TOKEN, CMS_TEMP_TOKEN, CMS_USERINFO } from '../utils/constants';

type CustomRequestInit = RequestInit & {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

type FeaturedFetchType = {
  input: RequestInfo | URL;
  init?: CustomRequestInit | undefined;
  tokenValidation?: boolean;
  tempToken?: boolean;
  interceptorCb?: () => void;
};

class CustomError extends Error {
  constructor(
    public status: number,
    public message: string,
    public messageCode: string,
    public responseStatus: number,
  ) {
    super(message);
    this.name = 'CustomError';
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

const featuredFetch = async <ResponseType>(props: FeaturedFetchType) => {
  const { input, init, interceptorCb = () => { }, tokenValidation = true, tempToken = false } = props;
  console.log("props",input,init)

  const token = tempToken ? localStorage.getItem(CMS_TEMP_TOKEN) : localStorage.getItem(CMS_TOKEN)
  console.log("baseUrl",token)

  const baseUrl = "http://localhost:5000/api";
  console.log("baseUrl",baseUrl)

  const header: HeadersInit = {};

  if (init?.body && !(init.body instanceof FormData)) {

    header['Content-Type'] = 'application/json';
  }

  if (tokenValidation) {
    header.Authorization = `Bearer ${token}`;
  }

  interceptorCb && interceptorCb();

  try {
    const response: any = await fetch(`${baseUrl}/${input}`, {
      method: init?.method,
      body: init?.body,
      headers: {
        ...header,
        ...init?.headers,
      },
    });



    if (response.status === 401) {
      localStorage.removeItem(CMS_USERINFO);
      localStorage.removeItem(CMS_TOKEN);      
      // window.location.href = '/account/login';
      return await response.json();

    }


    const responseData = await response.json();
    if (!response.ok) {
      throw new CustomError(response.status, responseData.message, responseData.messageCode, responseData.status);
    }

    return responseData as ResponseType;
  } catch (error) {
    if (error instanceof CustomError || error instanceof Error) {
      throw error.message;
    } else {
      throw new Error('Something went wrong !');
    }
  }
};

export default featuredFetch;





// /**
//  * Fetch API with interceptor, token validation feature
//  * @param input : same as first parameter of fetch API
//  * @param init : same as second parameter of fetch API
//  * @param tokenValidation : Whether token is validate or not
//  * @param interceptor : Interceptor function
//  */

// import { CMS_TOKEN, CMS_USERINFO } from '../utils/constants';

// type CustomRequestInit = RequestInit & {
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
// };

// type FeaturedFetchType = {
//   input: RequestInfo | URL;
//   init?: CustomRequestInit | undefined;
//   tokenValidation?: boolean;
//   seasonValidation?: boolean;
//   interceptorCb?: () => void;
// };

// class CustomError extends Error {
//   constructor(
//     public status: number,
//     public message: string,
//     public messageCode: string,
//     public responseStatus: number,
//   ) {
//     super(message);
//     this.name = 'CustomError';
//     Object.setPrototypeOf(this, CustomError.prototype);
//   }
// }

// const featuredFetch = async <ResponseType>(props: FeaturedFetchType) => {
//   const { input, init, interceptorCb = () => {}, tokenValidation = true, seasonValidation = true } = props;

//   const token = localStorage.getItem(CMS_TOKEN);
//   const seasonID = localStorage.getItem('selectedSeason');
//   const baseUrl = import.meta.env.VITE_BASE_API_URL;

//   const header: HeadersInit = {}; 
//   let body: Record<string, any> | undefined = init?.body ? JSON.parse(JSON.stringify(init.body)) : undefined;

//   if (init?.body && !(init.body instanceof FormData)) {
//     header['Content-Type'] = 'application/json';
//   }

//   if (tokenValidation) {
//     header.Authorization = `Bearer ${token}`;
//   }

//   if (seasonValidation) {
//     if (init?.method === 'GET' || init?.method === 'DELETE') {
//       header['X-Season-ID'] = seasonID || '';
//     } else if (body && !(body instanceof FormData)) {
//       body = { ...body, seasonID };
//     }
//   }

//   interceptorCb && interceptorCb();

//   try {
//     const response = await fetch(`${baseUrl}/${input}`, {
//       method: init?.method,
//       body: body ? JSON.stringify(body) : undefined,
//       headers: {
//         ...header,
//         ...init?.headers,
//       },
//     });

//     if (response.status === 401) {
//       localStorage.removeItem(CMS_USERINFO);
//       localStorage.removeItem(CMS_TOKEN);
//       // window.location.href = '/auth/login';
//       return null;
//     }

//     const responseData = await response.json();

//     if (!response.ok) {
//       throw new CustomError(response.status, responseData.message, responseData.messageCode, responseData.status);
//     }

//     return responseData as ResponseType;
//   } catch (error) {
//     if (error instanceof CustomError || error instanceof Error) {
//       throw error.message;
//     } else {
//       throw new Error('Something went wrong!');
//     }
//   }
// };

// export default featuredFetch;

