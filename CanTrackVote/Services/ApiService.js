import axios from 'axios';
import { parseString } from 'react-native-xml2js/lib/parser';


async function getMpVotes(mpName, mpID) {
  const nameWithDash = mpName.replace(' ', '-');
  const url = `https://www.ourcommons.ca/Members/en/${nameWithDash}(${mpID})/votes/xml`;

  try {
    const response = await axios.get(url);
    let result;
    parseString(response.data, (err, res) => {
      if (err) {
        console.log('apiservice error: ', err);
      } else {
        result = res;
      }
    });
    return result;
  } catch (error) {
    console.log('apiservice error: ', error);
  }
}

function getBillInfo(billNumber) {
  const url = `https://www.parl.ca/legisinfo/en/bill/44-1/c-${billNumber}/json`;
  return axios.get(url)
    .then(response => {
      return response.data;
    });
}

function getBillsByIssue(issueName) {
  const url = `https://www.parl.ca/LegisInfo/en/bills/rss?keywords=${issueName}`;
  return axios.get(url)
    .then(response => {
      // parse XML response to JSON
      return parseStringPromise(response.data)
        .then(result => {
          return result;
        });
    });
}

module.exports = {
  getMpVotes,
  getBillInfo,
  getBillsByIssue
};
