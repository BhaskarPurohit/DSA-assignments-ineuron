class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0);
    let p = l1;
    let q = l2;
    let carry = 0;
    let curr = dummyHead;
  
    while (p !== null || q !== null) {
      const x = p !== null ? p.val : 0;
      const y = q !== null ? q.val : 0;
      const sum = x + y + carry;
      carry = Math.floor(sum / 10);
  
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
  
      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
    }
  
    if (carry > 0) {
      curr.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  