import axiosInstance from "./axiosInstance";

export const getRandomQuoteFromShowList = async () => {
  const response = await axiosInstance.get(
    "/quotes?show=one piece, naruto, Fullmetal Alchemist: Brotherhood, Shingeki no Kyojin, code geass, Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e, Bungou Stray Dogs&random=1"
  );
  return response.data;
};
