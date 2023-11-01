import ApiService from './ApiService';
import MPList from '../assets/MPList.json';
import NDPBill from '../assets/bill_ndp.png';
import LibBill from '../assets/bill_lib.png';
import ConBill from '../assets/bill_con.png';
import BlocBill from '../assets/bill_bloc.png';
import GreenBill from '../assets/bill_green.png';
import DefaultBill from '../assets/bill.png';

async function getRecentMpVotes(name, id, number) {
  const response = await ApiService.getMpVotes(name, id);
  const memberVotes = response.ArrayOfMemberVote.MemberVote;
  const voteResults = [];

  for (let i = 0; i < Math.min(number, memberVotes.length); i++) {
    const vote = memberVotes[i];
    const billTitle = vote.BillNumberCode || vote.DecisionDivisionDocumentTypeName;
    const description = vote.DecisionDivisionSubject;
    const memberVote = vote.VoteValueName;
    const image = response.image;    
    const date = vote.DecisionEventDateTime;

    voteResults.push({
      mpName: name, // Add MP name
      mpID: id,     // Add MP ID
      billTitle,
      description,
      memberVote,
      image,
      date
    });
  }
  
  return voteResults;
}



async function getRecentBillVotes(billNumber, number) {
  const billInfo = await ApiService.getBillInfo(billNumber);
  const houseVoteDetails = billInfo[0].HouseVoteDetails;

  const recentVotes = houseVoteDetails.slice(-number).map(vote => {
    return {
      billNumber: billNumber,
      voteStage: vote.DivisionSubjectEn,
      voteStatus: vote.DecisionResultNameEn,
      votesYes: vote.DivisionVotesYeas,
      votesNo: vote.DivisionVotesNays,
      date: vote.DecisionDateTime
    };
  });

  return recentVotes;
}

async function getDetailedBillVotes(billNumber) {
    const billInfo = await ApiService.getBillInfo(billNumber);
    const houseVoteDetails = billInfo[0].HouseVoteDetails;
    const party = getPartyByName(billInfo[0].SponsorPersonName);
  

  let img;

  if (party === "Liberal") {
    img = require('../assets/bill_lib.png');
  } else if (party === "NDP") {
    img = require('../assets/bill_ndp.png');
  } else if (party === "Conservative") {
    img = require('../assets/bill_con.png');
  } else if (party === "Green Party") {
    img = require('../assets/bill_green.png');
  } else if (party === "Bloc Québecois") {
    img = require('../assets/bill_bloc.png');
  } else {
    img = require('../assets/bill.png');
  }

  console.log("Bill info:  ", billInfo[0].LongTitle);

  const recentVotes = houseVoteDetails.slice(3).map(vote => {
    return {
      billNumber: billNumber,
      image: img,
      party: party,
      sponsorName: billInfo[0].SponsorPersonName,
      voteStage: vote.DivisionSubjectEn,
      voteStatus: vote.DecisionResultNameEn,
      votesYes: vote.DivisionVotesYeas,
      votesNo: vote.DivisionVotesNays,
      date: vote.DecisionDateTime,
      description: billInfo[0].LongTitle
    };
  });

  return recentVotes;
}

function getPartyByName(mpName) {
  for (const mp of MPList) {
    if (mp.name === mpName) {
      return mp.party;
    }
  } return null;
}

function getPartyByID(mpID) {
  for (const mp of MPList) {
    if (mp.ID === mpID) {
      return mp.party;
    }
  } return null;
}

function getMpObject (name, id) {
  // If both name and id parameters are provided, prioritize matching by id
  if (id !== undefined) {
    const mpById = mpList.find((mp) => mp.ID === id);
    if (mpById) {
      return mpById;
    }
  }

  // If id is not provided or no match by id, try matching by name
  if (name !== undefined) {
    const mpByName = mpList.find((mp) => mp.name === name);
    if (mpByName) {
      return mpByName;
    }
  }

  // If no match is found, return null
  return null;
};


module.exports = {
  getRecentMpVotes,
  getRecentBillVotes, 
  getDetailedBillVotes,
  getPartyByName,
  getPartyByID
}
