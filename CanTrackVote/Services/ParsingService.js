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
    img = LibBill;
  } else if (party === "NDP") {
    img = NDPBill;
  } else if (party === "Conservative") {
    img = ConBill;
  } else if (party === "Green Party") {
    img = GreenBill;
  } else if (party === "Bloc Québecois") {
    img = BlocBill;
  } else {
    img = DefaultBill;
  }




  const recentVotes = houseVoteDetails.slice(-number).map(vote => {
    return {
      billNumber: billNumber,
      image: img,
      party: party,
      voteStage: vote.DivisionSubjectEn,
      voteStatus: vote.DecisionResultNameEn,
      votesYes: vote.DivisionVotesYeas,
      votesNo: vote.DivisionVotesNays,
      date: vote.DecisionDateTime
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


module.exports = {
  getRecentMpVotes,
  getRecentBillVotes, 
  getDetailedBillVotes,
  getPartyByName,
  getPartyByID
}
