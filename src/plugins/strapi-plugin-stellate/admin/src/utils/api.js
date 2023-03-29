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

export const refreshAllCache = async () => {
  try {
    const data = await axios({
      url: "/clear-stellate-cache/cache/refreshcache",
      method: "post",
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const refreshCollectionCache = async (query) => {
  try {
    const data = await axios({
      url: `/cache/refreshcollectioncache?collection=${query}`,
      method: "post",
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
