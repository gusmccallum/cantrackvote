class Subscription {
  constructor(mp = [], bill = [], issue = []) {
    this.MPs = mp;
    this.Bills = bill;
    this.Issues = issue;
  }

  addMP(name) {
    this.MPs.push(name);
  }

  addBill(title) {
    this.Bills.push(title);
  }

  addIssue(name) {
    this.Issues.push(name);
  }

  removeMP(name) {
    const index = this.MPs.indexOf(name);
    if (index !== -1) {
      this.MPs.splice(index, 1);
    }
  }

  removeBill(title) {
    const index = this.Bills.indexOf(title);
    if (index !== -1) {
      this.Bills.splice(index, 1);
    }
  }

  removeIssue(name) {
    const index = this.Issues.indexOf(name);
    if (index !== -1) {
      this.Issues.splice(index, 1);
    }
  }
}
