import ApiService from './ApiService';

async function getVotes(name, id, number) {
    const response = await ApiService.getMpVotes(name, id);
    const memberVotes = response.ArrayOfMemberVote.MemberVote;
    const voteResults = [];
  
    for (let i = 0; i < Math.min(number, memberVotes.length); i++) {
      const vote = memberVotes[i];
      const billTitle = vote.BillNumberCode || vote.DecisionDivisionDocumentTypeName;
      const description = vote.DecisionDivisionSubject;
      const memberVote = vote.VoteValueName;
      const date = vote.DecisionEventDateTime;
  
      voteResults.push({
        billTitle,
        description,
        memberVote,
        date
      });
    }
  
    return voteResults;
  }
  

  module.exports = {
    getVotes
  }
  