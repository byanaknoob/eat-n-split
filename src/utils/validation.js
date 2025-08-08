export const validateBillForm = (bill, paidByUser) => {
  if (!bill || !paidByUser) {
    return { isValid: false, message: "Please fill out the bill and your expense" };
  }
  if (Number(paidByUser) > Number(bill)) {
    return { isValid: false, message: "Your expense cannot be more than the bill amount" };
  }
  return { isValid: true };
};

export const validateFriendForm = (name, image) => {
  if (!name || !image) {
    return { isValid: false, message: "Please fill out the form" };
  }
  return { isValid: true };
};