import axiosClient from './axiosClient';

const wealtherApi = {
  getWelther: city_name => {
    const url = `/data/2.5/weather?q=${city_name}&appid=48a62464f24862ae0fbf19c3b6aa14c0&units=metric`;
    return axiosClient.get(url);
  },
};

export default wealtherApi;
