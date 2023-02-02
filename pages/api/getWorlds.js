import axios from 'axios';
import getApiEndPoint from './getApiEndPoint';

async function getWorlds(status){
  const apiURL = getApiEndPoint() + '/worlds?status=' + status;
  console.log(apiURL);
  try {
    var appData; 
    await axios({
      method: 'get',
      url: apiURL,
      headers: {
      "Content-Type" : "application/json",
      },
    })
    .then(response => appData = response.data)
    // Rename keys from _id to ID
    for (let i = 0; i < appData.length; i++) {
      let dict = appData[i]
      dict["ID"] = dict["_id"];
      delete dict["_id"];
   }
    console.log("---DB Worlds: ")
    console.log(appData)
    return appData
  } catch (error) {
    console.log(error);
    return []
  }
};

export default getWorlds;