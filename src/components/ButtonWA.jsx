/* eslint-disable react/prop-types */
import { FaWhatsapp } from "react-icons/fa";

const formatPhoneNumber = (phoneNumber) => {
  // Remove any non-digit characters (optional, based on your input)
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  if (cleanedNumber.length === 0) {
    return null; // Return null or handle empty input as needed
  }

  const firstDigit = cleanedNumber.charAt(0);

  if (firstDigit === "0") {
    // If the first digit is 0, return the number from the second digit onward
    return "62" + cleanedNumber.slice(1); // Remove the first digit
  } else if (firstDigit === "6") {
    // If the first digit is 6, return the entire number
    return "62" + cleanedNumber; // Return the whole number
  } else {
    // Handle other cases if necessary (e.g., invalid numbers)
    return null; // Or return an error message
  }
};

const ButtonWA = ({ phoneNumber, productName, productId }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default button behavior
    const originalString =
      "Apakah " +
      productName +
      " masih tersedia? saya dapat info nya dari https://infobarkas.com/detail/" +
      productId;
    const url =
      `https://wa.me/${formatPhoneNumber(phoneNumber)}` +
      "?text=" +
      originalString; // Construct the URL
    window.open(url, "_blank", "noopener,noreferrer"); // Open in new tab
  };

  return (
    <button className="btn-wa" onClick={handleClick}>
      <FaWhatsapp style={{ marginRight: "5px" }} />
      Kirim WA
    </button>
  );
};

export default ButtonWA;
