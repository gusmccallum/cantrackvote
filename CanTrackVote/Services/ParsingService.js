import ApiService from './ApiService';

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


module.exports = {
  getRecentMpVotes,
  getRecentBillVotes
}
