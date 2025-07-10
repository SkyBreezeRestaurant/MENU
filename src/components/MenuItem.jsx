// frontend/src/components/MenuItem.jsx
import React from "react";

function MenuItem({ item }) {
  // Helper function to format price based on category name
  const formatPrice = (priceString, categoryName) => {
    if (!priceString) return ""; // Handle cases with no price

    // Helper to format number with commas and currency symbol
    const formatNumber = (numStr) => {
      // Convert string to number, handle potential errors
      const number = parseFloat(numStr);
      if (isNaN(number)) return numStr; // Return original string if not a valid number

      // Format with commas (Indian numbering system) and add currency symbol
      // This is a basic implementation, consider using Intl.NumberFormat for robustness
      const parts = number.toFixed(number % 1 !== 0 ? 2 : 0).split("."); // Keep decimals if present
      const integerPart = parts[0];
      const decimalPart = parts[1] ? "." + parts[1] : "";

      const lastThree = integerPart.substring(integerPart.length - 3);
      const otherNumbers = integerPart.substring(0, integerPart.length - 3);

      const formattedInteger =
        (otherNumbers !== ""
          ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ","
          : "") + lastThree;

      return `₹${formattedInteger}${decimalPart}`;
    };

    const parts = priceString.split(" / ").map((part) => part.trim());

    switch (categoryName) {
      case "Beer & Breezers":
        if (parts.length === 2) {
          return `Pint - ${formatNumber(parts[0])}, Bucket - ${formatNumber(
            parts[1]
          )}`;
        }
        break;

      case "Tequila":
      case "Vodka":
      case "Gin":
      case "Rum":
        if (parts.length === 2) {
          return `30ml - ${formatNumber(parts[0])}, BOTTLE - ${formatNumber(
            parts[1]
          )}`;
        }
        break;

      case "Single Malts":
      case "Imported Whisky":
      case "Premium Whisky":
      case "Regular Whisky":
        if (parts.length === 2) {
          return `30ml - ${formatNumber(parts[0])}, BOTTLE - ${formatNumber(
            parts[1]
          )}`;
        }
        break;

      case "Shooters":
      case "Liqueurs":
        if (parts.length === 2) {
          return `Price - ${formatNumber(parts[0])}, Shot of 5 - ${formatNumber(
            parts[1]
          )}`;
        }
        break;

      case "Wines": // Non-sparkling wines
        if (parts.length === 2) {
          return `Glass - ${formatNumber(parts[0])}, BOTTLE - ${formatNumber(
            parts[1]
          )}`;
        }
        break;

      case "Sparkling/Champagne": // Sparkling/Champagne wines
        // These items in the seed have a single price string like '9099'
        // Your request was "BOTTLE - ₹9,099".
        return `BOTTLE - ${formatNumber(priceString)}`; // Format the single price string

      case "Cocktails":
      case "Mocktails & Shakes":
      case "Non-Alcoholic Beverages":
      case "Coffee":
      case "Signature Cocktails & Mocktails": // Signature Cocktails & Mocktails also have single price
        // These categories have a single price
        return `Price - ${formatNumber(priceString)}`; // Format the single price string

      default:
        // For any other category (like Food), display the price as is (assuming Food prices are already formatted)
        return priceString;
    }

    // Fallback for unexpected formats in specific cases
    return priceString;
  };

  const formattedPrice = formatPrice(item.price, item.categoryName);

  return (
    <div className="bg-white text-black border border-gray-300 rounded-lg p-4 flex flex-col items-center text-center">
      {/* Display item image if available, otherwise a placeholder */}
      <img
        src={item.imageUrl || "/placeholder.png"} // Use item.imageUrl from backend
        alt={item.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
      {/* Only show description if it exists and is not empty */}
      {item.description && item.description.trim() !== "" && (
        <p className="text-sm text-gray-700 mb-2">{item.description}</p>
      )}
      {/* Display formatted price */}
      <p className="text-md font-bold">{formattedPrice}</p>
    </div>
  );
}

export default MenuItem;
