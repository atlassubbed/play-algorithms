/** You have two numbers represented by a linked list, where each node contains a single digit.
    The digits are stored in reverse order, such that the 1's digit is at the head of the list.
    Write a function that adds the two numbers and returns the sum as a linked list.
    EXAMPLE
      Input:(7-> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
      Output: (2 -> 1 -> 9) That is, 912.
    FOLLOW UP
      Suppose the digits are stored in forward order. Repeat the above problem.
      EXAMPLE
        Input:(6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
        Output:9 -> 1 -> 2. That is, 912. */

// this can be done in O(max(l1, l2)) time

const toNum = (linkedList, isForward=false) => {
  let power = 0, cur = linkedList.head, digits = [];
  do digits.push(cur.data); while(cur = cur.next);
  isForward || digits.reverse();
  return parseInt(digits.join(""));
}
const toList = (number, isForward=false) => {
  let list = {head: null}, cur;
  number = number.toString();
  const n = number.length;
  let i = isForward ? 0 : number.length, node;
  for (; isForward ? i < n : i--; isForward && i++){
    node = {data: Number(number[i]), next: null}
    if (cur) cur = cur.next = node;
    else cur = list.head = node;
  }
  return list;
}
const reverseOrderSum = (l1, l2) => toList(toNum(l1) + toNum(l2));
const forwardOrderSum = (l1, l2) => toList(toNum(l1, true) + toNum(l2, true), true);

const reverseSumWithoutConverting = (l1, l2) => {
  const result = {head: null};
  let cur, p1 = l1.head, p2 = l2.head, carry = 0;
  while(p1 || p2 || carry){
    let data = Number((p1 ? p1.data : 0) + (p2 ? p2.data : 0) + carry);
    carry = data > 9 ? (data-=10, 1) : 0;
    const node = {data, next: null}
    if (cur) cur = cur.next = node;
    else cur = result.head = node;
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  return result;
}

// in this case, the first nodes aren't matching vector components
// 9 -> 6 -> 6
// 9 -> 3 -> 2 -> 7

// we can convert it to:
// 0 -> 9 -> 6 -> 6
// 9 -> 3 -> 2 -> 7
const forwardSumWithoutConverting = (l1, l2) => {
  // then we can add the two nodes, store it in a new node
  // if there's a carry, we subtract 10 and carry it over to the left this time
  //   until the carry has been absorbed.
}

// TODO see if I can do this without converting between formats

module.exports = { reverseOrderSum, forwardOrderSum, reverseSumWithoutConverting };
