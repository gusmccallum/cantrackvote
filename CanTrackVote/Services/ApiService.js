import axios from 'axios';
import { parseString } from 'react-native-xml2js/lib/parser';

function getLongLat(address) {
  const encodedAddress = encodeURIComponent(address);

  const url = `https://geocode.maps.co/search?q=${encodedAddress}`;
  axios.get(url).then(
      response => {
        console.log('RESPONSE: ' + response);
        console.log('RESPONSE.DATA: ' + response.data);
        return response;
      }
  ).catch(e => { console.log(' apiservice error:' + e)});
}
async function getMpVotes(mpName, mpID) {
  const nameArr = mpName.split(/[\s']+/, 2).reverse();
  const lastNameFirstName = nameArr.join('');
  const nameWithDash = mpName.replace(' ', '-');
  const url = `https://www.ourcommons.ca/Members/en/${nameWithDash}(${mpID})/votes/xml`;

  try {
    const response = await axios.get(url);
    let result;
    parseString(response.data, async (err, res) => {
      if (err) {
        console.log('apiservice error: ', err);
      } else {
        result = res;
        const party = res.ArrayOfMemberVote.MemberVote[0].CaucusShortName;
        let partyShort = "";
        switch (String(party)) {
          case "Conservative":
            partyShort = "CPC";
            break;
          case "Liberal":
            partyShort = "Lib";
            break;
          case "Bloc Québécois":
            partyShort = "BQ";
            break;
          case "NDP":
            partyShort = "NDP";
            break;
          case "Green Party":
            partyShort = "GP";
            break;
          case "Independent":
            partyShort = "IND";
            break;
          default: console.log('no match for the party title');
            break;
        }
        const imageUrl = `https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/44/${lastNameFirstName}_${partyShort}.jpg`;
        result.image = imageUrl;
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
  getBillsByIssue,
  getLongLat
};
