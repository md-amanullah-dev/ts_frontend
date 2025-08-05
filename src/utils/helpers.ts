import { UploadFile } from 'antd';

import { ApiResult, UploadType } from './api-common';
import { useEffect, useState } from 'react';


const getStoredPermissions = () => {
  return JSON.parse(localStorage.getItem("Module") || "[]");
};


export const usePermissions = () => {
  const [storedPermissions, setStoredPermissions] = useState<any[]>(getStoredPermissions());

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredPermissions(getStoredPermissions());
    };


    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const findModuleBySlug = (modules: any[], slug: string): any | null => {
    for (const mod of modules) {
      if (mod.slug === slug) {
        return mod;
      }
      if (mod.children && mod.children.length > 0) {
        const foundInChildren = findModuleBySlug(mod.children, slug);
        if (foundInChildren) {
          return foundInChildren;
        }
      }
    }
    return null;
  };



  const checkPermission = (
    slug: string,
    permissionType: "aAdd" | "aEdit" | "aDelete" | "aView"
  ): boolean => {
    const module = findModuleBySlug(storedPermissions, slug);
    return module ? module[permissionType] === 1 : false;
  };

  return { checkPermission, storedPermissions };
};


export const createQueryString = (obj: Record<string, string | number | boolean | null | undefined>): string => {
  return Object.keys(obj)
    .filter((key) => obj[key])
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(String(obj[key]))}`)
    .join('&');
};

export const normFile = (e: { fileList: UploadFile<ApiResult<UploadType>>[] }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const getFileTypeFromUrl = (url: string): string => {
  const extension = url.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'pdf':
      return 'application/pdf';
    default:
      return '';
  }
};



export const slugify = (str: string | null) => {
  if (!str) return 'n-a';

  return str
    .normalize('NFKD') // Normalize accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase()
    .replace(/[.;:]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};


export const isAuthenticated = () => {
  return !!localStorage.getItem("CMS_TOKEN");
};
