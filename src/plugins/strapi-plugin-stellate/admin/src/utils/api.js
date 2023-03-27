import axios from "./axiosInstance";

export const refreshCache = async (type) => {
  if (type === "all") {
    await refreshAllCache();
    return true;
  } else {
    const query = type.replace(type[0], type[0].toUpperCase());
    await refreshCollectionCache(query);
    return true;
  }
};
