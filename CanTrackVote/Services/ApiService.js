import axios from 'axios';
import { parseString } from 'react-native-xml2js/lib/parser';


async function getMpVotes(mpName, mpID) {
  const nameArr = mpName.split(/[\s']+/, 2).reverse();
  const lastNameFirstName = nameArr.join('');
  const nameWithDash = mpName.replace(' ', '-');
  const url = `https://www.ourcommons.ca/Members/en/${nameWithDash}(${mpID})/votes/xml`;

  try {
    const response = await axios.get(url);
    
    return new Promise((resolve, reject) => {
      parseString(response.data, (err, res) => {
        if (err) {
          console.log('fetch error: ', err);
          reject(err);
        } else {
          console.log("Res is: ", res.ArrayOfMemberVote.MemberVote[0].CaucusShortName);
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
          }
          const imageUrl = `https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/44/${lastNameFirstName}_${partyShort}.jpg`;
          res.image = imageUrl;
          resolve(res);
        }
      });
    });
  } catch (error) {
    console.log('whole thing error: ', error);
    throw error;
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

async function getMpImage(MPName) {
  try {
    // Read the MPList.json file
    const mpListData = await fs.readFile('../assets/MPList.json', 'utf8');
    const mpList = JSON.parse(mpListData);

    // Find the MP's ID based on their name
    let MPID = null;
    for (const mp of mpList) {
      if (mp.name === MPName) {
        MPID = mp.id;
        break;
      }
    }

    if (MPID === null) {
      throw new Error(`MP not found: ${MPName}`);
    }

    // Construct the URL
    const url = `https://www.ourcommons.ca/Members/en/${MPName}(${MPID})`;

    // Fetch the HTML page
    const response = await axios.get(url);

    // Parse the HTML response to find the image URL
    const html = response.data;
    const imageRegex = /<img\s+id="ce-mip-mp-picture"\s+src="([^"]+)"/i;
    const match = html.match(imageRegex);

    if (match) {
      const imageUrl = match[1];
      return imageUrl;
    } else {
      throw new Error('Image not found on the page');
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}



module.exports = {
  getMpVotes,
  getBillInfo,
  getBillsByIssue
};
