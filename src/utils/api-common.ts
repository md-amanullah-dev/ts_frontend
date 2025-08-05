// API Result
export type ApiResult<T = undefined> = {
  total: number;
  status: number;
  message: string;
  messageCode: string;
  payload: T;
};

export type PaginationInfo = {
  currentPage: number;
  nextPage: number | null;
  perPage: number;
  previousPage: number | null;
  total: number;
  totalPages: number;
};

export type ApiResultWithPagination<T = undefined> = {
  paginationInfo: PaginationInfo;
} & ApiResult<T>;

// User
export type User = {
  ID: number;
  key: string;
  s_no: string;
  user_name: string;
  first_name: string;
  last_name: string;
  mobile_no: string;
  email: string;
  statusSlugTxt: string;
  roles: Role[];
};

export type Role = { ID: number; name: string };

export type UserInfo = {
  [x: string]: any;
  ID: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  profileImg: string;
  token: string;
  userType: string;
};

// File
export type UploadType = {
  url: string[];
};

export type MediaUploadType = {
  ID: number;
  url: string;
  fileExtension: string;
  mediaType: string;
  fileType: string;
  mimeType: string;
  thumbnail: string;
};

export type MediaLibraryType = {
  ID: number;
  url: string;
  fileExtension: string;
  mediaType: string;
  mimeType: string;
  fileType: string;
  thumbnail: string;
  title: string;
};
