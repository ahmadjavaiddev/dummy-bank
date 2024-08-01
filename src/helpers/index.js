export function formatAmount(amount) {
    return amount.toLocaleString();
}

export function formatCardNumber(cardNumber) {
    const editedCard = cardNumber
        .split("")
        .map((char, index) => char + (index % 4 === 3 ? " " : ""))
        .join("")
        .trim()
        .split(" ")
        .join("-");

    // Check for valid length
    if (editedCard.length !== 19) {
        return "Invalid card number length";
    }

    return editedCard;
}
