// import React, { useState, useEffect, useMemo } from "react";
// import api from "../api/api"; // Your API helper
// import MenuItem from "../components/MenuItem"; // Component to display a single item

// // Define the Drinks menu hierarchy structure in the frontend
// // This maps main groups to their sub-categories (using category names)
// const drinksHierarchy = {
//   "SIGNATURE COCKTAILS & MOCKTAILS": [
//     "Signature Cocktails & Mocktails",
//     "Beer & Breezers",
//   ],
//   WHISKY: [
//     "Single Malts",
//     "Imported Whisky",
//     "Premium Whisky",
//     "Regular Whisky",
//     "Shooters",
//     "Wines",
//     "Sparkling/Champagne",
//     "Liqueurs",
//     "Cocktails",
//     "Mocktails & Shakes",
//   ],
//   "SPIRITS (30ML & 5 SHOTS)": ["Tequila", "Vodka", "Gin", "Rum"],
//   // These are top-level groups that will directly show their items
//   "NON-ALCOHOLIC BEVERAGES": ["Non-Alcoholic Beverages"],
//   "COFFEE (5:30 PM TO 7:00 PM)": ["Coffee"],
// };

// function UserMenu() {
//   const [categories, setCategories] = useState([]);
//   const [items, setItems] = useState([]);
//   const [loadingCategories, setLoadingCategories] = useState(true);
//   const [loadingItems, setLoadingItems] = useState(false);
//   const [error, setError] = useState(null);

//   const [activeMenuType, setActiveMenuType] = useState("Food"); // 'Food' or 'Drinks'

//   // State for Food menu (Category selection)
//   const [selectedFoodCategoryId, setSelectedFoodCategoryId] = useState(null);

//   // State for Drinks menu (3-level selection)
//   const [selectedDrinksGroup, setSelectedDrinksGroup] = useState(null); // e.g., 'WHISKY'
//   const [selectedDrinksSubCategory, setSelectedDrinksSubCategory] =
//     useState(null); // e.g., 'Single Malts'

//   // Memoize the mapping of category IDs to names for quick lookup
//   const categoryIdToNameMap = useMemo(() => {
//     // console.log('useMemo: Building categoryIdToNameMap from', categories.length, 'categories'); // Keep logging for debugging if needed
//     return categories.reduce((map, category) => {
//       // Ensure _id is converted to string when building the map keys
//       // Added check for category._id existence and toString method
//       if (
//         category &&
//         category._id &&
//         typeof category._id.toString === "function"
//       ) {
//         map[category._id.toString()] = category.name; // Map ID (as string) to Name
//       } else {
//         // console.warn('Skipping category in categoryIdToNameMap due to missing or invalid _id:', category); // Keep logging for debugging if needed
//       }
//       return map;
//     }, {});
//   }, [categories]); // Recreate map only when categories change

//   // Memoize the mapping of category names to IDs for quick lookup (still needed for fetching)
//   const categoryNameToIdMap = useMemo(() => {
//     // console.log('useMemo: Building categoryNameToIdMap from', categories.length, 'categories'); // Keep logging for debugging if needed
//     return categories.reduce((map, category) => {
//       // Ensure _id is converted to string when storing as map values
//       // Added check for category._id existence and toString method
//       if (
//         category &&
//         category.name &&
//         category._id &&
//         typeof category._id.toString === "function"
//       ) {
//         map[category.name] = category._id.toString(); // Map Name to ID (as string)
//       } else {
//         // console.warn('Skipping category in categoryNameToIdMap due to missing name or invalid _id:', category); // Keep logging for debugging if needed
//       }
//       return map;
//     }, {});
//   }, [categories]); // Recreate map only when categories change

//   // Fetch categories on component mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         setLoadingCategories(true);
//         const data = await api.getCategories();
//         // console.log('Fetched Categories:', data); // Keep logging for debugging if needed
//         setCategories(data);

//         // --- Initial Selection Logic ---
//         // Default to 'Food' menu
//         setActiveMenuType("Food");
//         // Find and select the first Food category
//         const firstFoodCategory = data.find((cat) => cat.type === "Food");
//         if (firstFoodCategory && firstFoodCategory._id) {
//           // Added check for _id existence
//           setSelectedFoodCategoryId(firstFoodCategory._id.toString()); // Store ID as string
//           // console.log('Initial selection: First Food category', firstFoodCategory.name); // Keep logging for debugging if needed
//         } else {
//           // If no Food categories, check for Drinks categories
//           const firstDrinkCategory = data.find((cat) => cat.type === "Drinks");
//           if (firstDrinkCategory) {
//             setActiveMenuType("Drinks");
//             // For drinks, we start by showing the main groups, so no selection initially
//             setSelectedDrinksGroup(null);
//             setSelectedDrinksSubCategory(null);
//             // console.log('Initial selection: Switched to Drinks, showing groups.'); // Keep logging for debugging if needed
//           } else {
//             // No categories at all
//             setSelectedFoodCategoryId(null);
//             setSelectedDrinksGroup(null);
//             setSelectedDrinksSubCategory(null);
//             // console.log('Initial selection: No categories found.'); // Keep logging for debugging if needed
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//         setError("Failed to load categories.");
//       } finally {
//         setLoadingCategories(false);
//       }
//     };

//     fetchCategories();
//   }, []); // Empty dependency array means run once on mount

//   // Fetch items based on the currently active selection
//   useEffect(() => {
//     // console.log('--- useEffect: Fetching Items Triggered ---'); // Keep logging for debugging if needed
//     // console.log('Current activeMenuType:', activeMenuType); // Keep logging for debugging if needed
//     // console.log('Current selectedFoodCategoryId:', selectedFoodCategoryId); // Keep logging for debugging if needed
//     // console.log('Current selectedDrinksGroup:', selectedDrinksGroup); // Keep logging for debugging if needed
//     // console.log('Current selectedDrinksSubCategory:', selectedDrinksSubCategory); // Keep logging for debugging if needed
//     // console.log('categoryNameToIdMap (keys):', Object.keys(categoryNameToIdMap)); // Keep logging for debugging if needed

//     let categoryIdToFetch = null;

//     if (activeMenuType === "Food") {
//       // For Food, fetch items based on selectedFoodCategoryId
//       categoryIdToFetch = selectedFoodCategoryId; // This is already stored as string
//       // console.log('Determined categoryIdToFetch (Food):', categoryIdToFetch); // Keep logging for debugging if needed
//     } else {
//       // activeMenuType === 'Drinks'
//       // For Drinks, fetch items based on selectedDrinksSubCategory
//       // We need the _id (as string) of the selected sub-category name
//       if (selectedDrinksSubCategory) {
//         categoryIdToFetch = categoryNameToIdMap[selectedDrinksSubCategory]; // This map stores IDs as strings
//         // console.log(`Looking up ID for "${selectedDrinksSubCategory}" in map:`, categoryIdToFetch); // Keep logging for debugging if needed
//       } else {
//         // console.log('No Drinks sub-category selected, not fetching items.'); // Keep logging for debugging if needed
//       }
//     }

//     // Only fetch if a category ID is determined
//     if (!categoryIdToFetch) {
//       // console.log('categoryIdToFetch is null or undefined, clearing items.'); // Keep logging for debugging if needed
//       setItems([]); // Clear items if no category is selected or derivable
//       return;
//     }

//     const fetchItems = async () => {
//       try {
//         setLoadingItems(true);
//         // console.log(`Calling api.getItems with categoryId: ${categoryIdToFetch}`); // Keep logging for debugging if needed
//         // api.getItems should expect and handle the string ID correctly
//         const data = await api.getItems(categoryIdToFetch);
//         // console.log('Fetched Items:', data); // Keep logging for debugging if needed

//         // --- Add categoryName to each item for MenuItem formatting ---
//         const itemsWithCategoryName = data.map((item) => {
//           let categoryName = "Unknown Category"; // Default fallback

//           // --- ENHANCED LOGGING AND FIX ---
//           // console.log('--- Item Mapping Debug ---'); // Keep logging for debugging if needed
//           // console.log('Item ID:', item._id); // Keep logging for debugging if needed
//           // console.log('Raw item.category:', item.category); // Keep logging for debugging if needed
//           // console.log('Type of item.category:', typeof item.category); // Keep logging for debugging if needed
//           // console.log('Is item.category null/undefined?', item.category == null); // Keep logging for debugging if needed

//           // Check if item.category exists, is an object, and has an _id property with a toString method
//           if (
//             item.category &&
//             typeof item.category === "object" &&
//             item.category._id &&
//             typeof item.category._id.toString === "function"
//           ) {
//             const categoryIdString = item.category._id.toString(); // FIX: Access _id property and call toString()
//             // console.log('item.category._id.toString() result:', categoryIdString); // Keep logging for debugging if needed

//             // Now use the string ID for lookup
//             const foundName = categoryIdToNameMap[categoryIdString];
//             // console.log(`Lookup in categoryIdToNameMap for "${categoryIdString}":`, foundName); // Keep logging for debugging if needed

//             if (foundName) {
//               categoryName = foundName;
//             } else {
//               console.warn(
//                 `Category name NOT found in map for ID string: ${categoryIdString}. Map keys:`,
//                 Object.keys(categoryIdToNameMap)
//               );
//             }
//           } else {
//             console.warn(
//               `item.category is not a valid populated category object or is missing _id for item ${item._id}. Value:`,
//               item.category
//             );
//           }
//           // console.log('--- End Item Mapping Debug ---'); // Keep logging for debugging if needed
//           // --- END ENHANCED LOGGING AND FIX ---

//           return {
//             ...item,
//             categoryName: categoryName, // Use the found name or fallback
//           };
//         });

//         setItems(itemsWithCategoryName);
//       } catch (err) {
//         console.error(
//           `Error fetching items for category ${categoryIdToFetch}:`,
//           err
//         );
//         setError("Failed to load menu items.");
//         setItems([]); // Clear items on error
//       } finally {
//         setLoadingItems(false);
//       }
//     };

//     fetchItems();
//   }, [
//     activeMenuType,
//     selectedFoodCategoryId,
//     selectedDrinksGroup,
//     selectedDrinksSubCategory,
//     categoryNameToIdMap,
//     categoryIdToNameMap,
//   ]);

//   // --- Handlers ---

//   // Handle menu type tab click ('Food' or 'Drinks')
//   const handleMenuTypeChange = (type) => {
//     // console.log('handleMenuTypeChange:', type); // Keep logging for debugging if needed
//     setActiveMenuType(type);
//     setError(null); // Clear any previous item loading error

//     if (type === "Food") {
//       // When switching to Food, select the first Food category
//       const firstFoodCategory = categories.find((cat) => cat.type === "Food");
//       if (firstFoodCategory && firstFoodCategory._id) {
//         // Added check for _id existence
//         setSelectedFoodCategoryId(firstFoodCategory._id.toString()); // Store ID as string
//       } else {
//         setSelectedFoodCategoryId(null);
//       }
//       // Clear Drinks selection states
//       setSelectedDrinksGroup(null);
//       setSelectedDrinksSubCategory(null);
//     } else {
//       // type === 'Drinks'
//       // When switching to Drinks, clear Food selection state
//       setSelectedFoodCategoryId(null);
//       // Start at the Drinks main group level
//       setSelectedDrinksGroup(null);
//       setSelectedDrinksSubCategory(null);
//     }
//   };

//   // Handle category selection for Food menu
//   const handleSelectFoodCategory = (categoryId) => {
//     // console.log('handleSelectFoodCategory:', categoryId); // Keep logging for debugging if needed
//     setSelectedFoodCategoryId(categoryId); // categoryId is already a string here
//     setError(null); // Clear any previous item loading error
//   };

//   // Handle selection of a Drinks main group (Level 2 for Drinks)
//   const handleSelectDrinksGroup = (groupName) => {
//     // console.log('handleSelectDrinksGroup:', groupName); // Keep logging for debugging if needed
//     setError(null); // Clear any previous item loading error

//     // If the same group is clicked again, deselect it and go back to top level
//     if (selectedDrinksGroup === groupName) {
//       setSelectedDrinksGroup(null);
//       setSelectedDrinksSubCategory(null);
//       setItems([]); // Clear items immediately on deselect
//       return;
//     }

//     // Check if this group should bypass the sub-category selection
//     if (groupName === "Non-Alcoholic Beverages" || groupName === "Coffee") {
//       setSelectedDrinksGroup(groupName); // Set the group
//       setSelectedDrinksSubCategory(groupName); // Directly set the sub-category to the group name to trigger item fetch
//     } else {
//       // For other groups, proceed to sub-category selection
//       setSelectedDrinksGroup(groupName);
//       setSelectedDrinksSubCategory(null); // Reset sub-category
//     }
//   };

//   // Handle selection of a Drinks sub-category (Level 3 for Drinks)
//   const handleSelectDrinksSubCategory = (subCategoryName) => {
//     // console.log('handleSelectDrinksSubCategory:', subCategoryName); // Keep logging for debugging if needed
//     // If the same sub-category is clicked again, deselect it and go back to group view
//     if (selectedDrinksSubCategory === subCategoryName) {
//       setSelectedDrinksSubCategory(null);
//       setItems([]); // Clear items immediately on deselect
//       return;
//     }
//     setSelectedDrinksSubCategory(subCategoryName);
//     setError(null); // Clear any previous item loading error
//   };

//   // Handle back button from Drinks sub-categories to main groups
//   const handleBackToDrinksGroups = () => {
//     // console.log('handleBackToDrinksGroups'); // Keep logging for debugging if needed
//     setSelectedDrinksGroup(null);
//     setSelectedDrinksSubCategory(null); // Clear both to go back to group selection
//     setError(null); // Clear any previous item loading error
//     setItems([]); // Clear items immediately on back
//   };

//   // Handle back button from Drinks items list to sub-categories
//   const handleBackToDrinksSubCategories = () => {
//     // console.log('handleBackToDrinksSubCategories'); // Keep logging for debugging if needed
//     // For 'Non-Alcoholic Beverages' and 'Coffee', going back from items should go back to groups directly
//     if (
//       selectedDrinksGroup === "Non-Alcoholic Beverages" ||
//       selectedDrinksGroup === "Coffee"
//     ) {
//       handleBackToDrinksGroups(); // Go back to the main group list
//     } else {
//       // For other groups, go back to the sub-category list for that group
//       setSelectedDrinksSubCategory(null); // Clear sub-category to go back to sub-category list
//       setItems([]); // Clear items immediately on back
//     }
//     setError(null); // Clear any previous item loading error
//   };

//   // --- Derived State for Rendering ---

//   // Filter categories for the Food menu
//   const foodCategories = categories.filter((cat) => cat.type === "Food");

//   // Get the list of Drinks main groups (Level 2 buttons for Drinks)
//   const drinksMainGroups = Object.keys(drinksHierarchy);

//   // Get the list of Drinks sub-categories for the selected group (Level 3 buttons for Drinks)
//   const drinksSubCategoriesForSelectedGroup = selectedDrinksGroup
//     ? drinksHierarchy[selectedDrinksGroup]
//     : [];

//   // Determine the currently displayed category/group/sub-category name for headings/messages
//   const currentSelectionName = useMemo(() => {
//     if (activeMenuType === "Food") {
//       const selectedCat = categories.find(
//         (cat) => cat._id && cat._id.toString() === selectedFoodCategoryId
//       ); // Compare string IDs, added _id check
//       return selectedCat ? selectedCat.name : "Select a Food Category";
//     } else {
//       // activeMenuType === 'Drinks'
//       if (selectedDrinksSubCategory) {
//         return selectedDrinksSubCategory; // Display sub-category name
//       } else if (selectedDrinksGroup) {
//         return selectedDrinksGroup; // Display group name
//       } else {
//         return "Select a Drinks Group"; // Display prompt
//       }
//     }
//   }, [
//     activeMenuType,
//     selectedFoodCategoryId,
//     selectedDrinksGroup,
//     selectedDrinksSubCategory,
//     categories,
//   ]);

//   // --- Render Logic ---

//   if (loadingCategories) {
//     return <div className="text-center py-8">Loading Menu...</div>;
//   }

//   if (error && !loadingItems) {
//     // Only show general error if not currently loading items
//     return <div className="text-center py-8 text-red-600">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto py-4">
//       {/* Menu Type Tabs */}
//       <div className="flex justify-center mb-6 border-b border-gray-300">
//         <button
//           className={`px-6 py-3 text-lg font-semibold ${
//             activeMenuType === "Food"
//               ? "border-b-2 border-black text-black"
//               : "text-gray-600 hover:text-black"
//           }`}
//           onClick={() => handleMenuTypeChange("Food")}
//         >
//           Food Menu
//         </button>
//         <button
//           className={`px-6 py-3 text-lg font-semibold ${
//             activeMenuType === "Drinks"
//               ? "border-b-2 border-black text-black"
//               : "text-gray-600 hover:text-black"
//           }`}
//           onClick={() => handleMenuTypeChange("Drinks")}
//         >
//           Drinks Menu
//         </button>
//       </div>

//       {/* Category/Group/Sub-category Selector Area */}
//       <div className="mb-6">
//         {/* Back Button (Visible when not at the top level of Drinks) */}
//         {(selectedDrinksSubCategory || selectedDrinksGroup) &&
//           activeMenuType === "Drinks" && ( // Only show back button for Drinks when not at top level
//             <button
//               className="px-4 py-2 mb-4 rounded-full text-sm font-medium bg-gray-200 text-black hover:bg-gray-300"
//               onClick={
//                 selectedDrinksSubCategory
//                   ? handleBackToDrinksSubCategories
//                   : handleBackToDrinksGroups
//               }
//             >
//               ← Back
//             </button>
//           )}

//         {activeMenuType === "Food" ? (
//           // --- Food Category Selector (Horizontal Scroll) ---
//           foodCategories.length > 0 ? (
//             <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2">
//               {foodCategories.map((category) => (
//                 <button
//                   key={category._id.toString()} // Use string ID for key
//                   className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
//                     selectedFoodCategoryId === category._id.toString()
//                       ? "bg-black text-white"
//                       : "bg-gray-200 text-black hover:bg-gray-300"
//                   }`} // Compare string IDs
//                   onClick={() =>
//                     handleSelectFoodCategory(category._id.toString())
//                   } // Pass string ID
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-600">
//               No Food categories available.
//             </p>
//           )
//         ) : (
//           // --- Drinks Menu Navigation (3-Level Logic) ---
//           <>
//             {/* Display Drinks Groups (Level 2) - Always show when Drinks is active, Horizontal Scroll */}
//             <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 mb-4">
//               {drinksMainGroups.length > 0 ? (
//                 drinksMainGroups.map((groupName) => (
//                   <button
//                     key={groupName}
//                     className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
//                       selectedDrinksGroup === groupName
//                         ? "bg-black text-white"
//                         : "bg-gray-200 text-black hover:bg-gray-300"
//                     }`}
//                     onClick={() => handleSelectDrinksGroup(groupName)}
//                   >
//                     {groupName}
//                   </button>
//                 ))
//               ) : (
//                 <p className="text-center text-gray-600">
//                   No Drinks groups defined.
//                 </p>
//               )}
//             </div>

//             {/* Display Drinks Sub-categories (Level 3) - Show below groups, Wrapping */}
//             {/* Only show sub-category buttons if a group is selected AND it's NOT one of the direct-to-items groups AND no sub-category is selected */}
//             {selectedDrinksGroup &&
//               !selectedDrinksSubCategory &&
//               selectedDrinksGroup !== "Non-Alcoholic Beverages" &&
//               selectedDrinksGroup !== "Coffee" &&
//               (drinksSubCategoriesForSelectedGroup.length > 0 ? (
//                 <div className="flex flex-wrap gap-2 justify-center mb-4">
//                   {drinksSubCategoriesForSelectedGroup.map(
//                     (subCategoryName) => {
//                       // Find the actual category object to check if it exists in the fetched data
//                       const categoryExists = categories.some(
//                         (cat) =>
//                           cat.name === subCategoryName && cat.type === "Drinks"
//                       );
//                       // Only render button if the corresponding category exists in the fetched data
//                       return categoryExists ? (
//                         <button
//                           key={subCategoryName}
//                           className={`px-4 py-2 rounded-full text-sm font-medium ${
//                             selectedDrinksSubCategory === subCategoryName
//                               ? "bg-black text-white"
//                               : "bg-gray-200 text-black hover:bg-gray-300"
//                           }`}
//                           onClick={() =>
//                             handleSelectDrinksSubCategory(subCategoryName)
//                           }
//                         >
//                           {subCategoryName}
//                         </button>
//                       ) : null; // Don't render button if category doesn't exist
//                     }
//                   )}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-600">
//                   No sub-categories available for {selectedDrinksGroup}.
//                 </p>
//               ))}
//           </>
//         )}
//       </div>

//       {/* Heading for the current selection */}
//       {/* Show heading only when a specific category/sub-category is selected */}
//       {(activeMenuType === "Food" && selectedFoodCategoryId) ||
//       (activeMenuType === "Drinks" && selectedDrinksSubCategory) ? (
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {currentSelectionName}
//         </h2>
//       ) : null}

//       {/* Item List */}
//       {loadingItems ? (
//         <div className="text-center py-8">Loading Items...</div>
//       ) : // Conditional rendering based on active menu type and selection level
//       activeMenuType === "Food" ? (
//         // --- Food Items Display ---
//         items.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {items.map((item) => (
//               // Pass the item which now includes categoryName
//               <MenuItem key={item._id} item={item} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-8 text-gray-600">
//             {selectedFoodCategoryId
//               ? `No items found for this category.`
//               : `Please select a category.`}
//           </div>
//         )
//       ) : // --- Drinks Items Display ---
//       selectedDrinksSubCategory ? ( // Only show items if a sub-category is selected
//         items.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {items.map((item) => (
//               // Pass the item which now includes categoryName
//               <MenuItem key={item._id} item={item} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-8 text-gray-600">
//             No items found for {selectedDrinksSubCategory}.
//           </div>
//         )
//       ) : // Message when a Drinks group is selected but no sub-category
//       selectedDrinksGroup ? (
//         <div className="text-center py-8 text-gray-600">
//           Please select a sub-category from {selectedDrinksGroup}.
//         </div>
//       ) : (
//         // Message when Drinks menu is active but no group is selected
//         <div className="text-center py-8 text-gray-600">
//           Please select a Drinks group.
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserMenu;


















import React, { useState, useEffect, useMemo } from 'react';
// Remove api import: import api from '../api/api';
import MenuItem from '../components/MenuItem'; // Component to display a single item
import { categories as staticCategories, items as staticItems } from '../data/menuData'; // Import static data

// Define the Drinks menu hierarchy structure in the frontend
// This maps main groups to their sub-categories (using category names)
const drinksHierarchy = {
  'SIGNATURE COCKTAILS & MOCKTAILS': ['Signature Cocktails & Mocktails', 'Beer & Breezers'],
  'WHISKY': [
      'Single Malts',
      'Imported Whisky',
      'Premium Whisky',
      'Regular Whisky',
      'Shooters',
      'Wines',
      'Sparkling/Champagne',
      'Liqueurs',
      'Cocktails',
      'Mocktails & Shakes',
  ],
  'SPIRITS (30ML & 5 SHOTS)': ['Tequila', 'Vodka', 'Gin', 'Rum'],
  'Non-Alcoholic Beverages': ['Non-Alcoholic Beverages'],
  'Coffee': ['Coffee'],
};

function UserMenu() {
  // Use static data directly, no need for useState for categories
  const categories = staticCategories;
  // Items will still be filtered based on selection, so keep useState for items
  const [items, setItems] = useState([]);
  // No need for loading states related to API calls
  const [loadingCategories, setLoadingCategories] = useState(false); // Always false
  const [loadingItems, setLoadingItems] = useState(false); // Manage based on local filtering
  const [error, setError] = useState(null); // Keep for potential local errors

  const [activeMenuType, setActiveMenuType] = useState('Food'); // 'Food' or 'Drinks'

  // State for Food menu (Category selection)
  const [selectedFoodCategoryId, setSelectedFoodCategoryId] = useState(null);

  // State for Drinks menu (3-level selection)
  const [selectedDrinksGroup, setSelectedDrinksGroup] = useState(null); // e.g., 'WHISKY'
  const [selectedDrinksSubCategory, setSelectedDrinksSubCategory] = useState(null); // e.g., 'Single Malts'

  // Memoize the mapping of category IDs to names for quick lookup
  // Use staticCategories directly
  const categoryIdToNameMap = useMemo(() => {
    return categories.reduce((map, category) => {
      if (category && category._id && category.name) {
         map[category._id] = category.name; // Use string ID as key
      }
      return map;
    }, {});
  }, [categories]); // Depends on the static categories array

   // Memoize the mapping of category names to IDs for quick lookup
   // Use staticCategories directly
   const categoryNameToIdMap = useMemo(() => {
    return categories.reduce((map, category) => {
       if (category && category.name && category._id) {
         map[category.name] = category._id; // Use string ID as value
       }
      return map;
    }, {});
  }, [categories]); // Depends on the static categories array


  // Effect to perform initial selection on mount
  useEffect(() => {
    // --- Initial Selection Logic ---
    // Default to 'Food' menu
    setActiveMenuType('Food');
    // Find and select the first Food category
    const firstFoodCategory = categories.find(cat => cat.type === 'Food');
    if (firstFoodCategory && firstFoodCategory._id) {
      setSelectedFoodCategoryId(firstFoodCategory._id); // Store ID as string
    } else {
      // If no Food categories, check for Drinks categories
      const firstDrinkCategory = categories.find(cat => cat.type === 'Drinks');
      if (firstDrinkCategory) {
         setActiveMenuType('Drinks');
         // For drinks, we start by showing the main groups, so no selection initially
         setSelectedDrinksGroup(null);
         setSelectedDrinksSubCategory(null);
      } else {
         // No categories at all
         setSelectedFoodCategoryId(null);
         setSelectedDrinksGroup(null);
         setSelectedDrinksSubCategory(null);
      }
    }
    // No API call here, data is already available
  }, [categories]); // Depend on categories (static data)

  // Effect to filter items when selection changes
  useEffect(() => {
    let categoryIdToFilter = null;

    if (activeMenuType === 'Food') {
      categoryIdToFilter = selectedFoodCategoryId;
    } else { // activeMenuType === 'Drinks'
      if (selectedDrinksSubCategory) {
         categoryIdToFilter = categoryNameToIdMap[selectedDrinksSubCategory];
      }
    }

    // Filter items if a category ID is determined
    if (categoryIdToFilter) {
        setLoadingItems(true); // Simulate loading for filtering
        // Filter the static items based on the selected category ID
        const filteredItems = staticItems.filter(item => item.category === categoryIdToFilter);
        setItems(filteredItems);
        setLoadingItems(false);
    } else {
      setItems([]); // Clear items if no category is selected
    }

  }, [activeMenuType, selectedFoodCategoryId, selectedDrinksSubCategory, categoryNameToIdMap]); // Depend on relevant state changes

  // --- Handlers ---
  // Handlers remain largely the same, but they update state which triggers the filtering useEffect

  const handleMenuTypeChange = (type) => {
    setActiveMenuType(type);
    setError(null);

    if (type === 'Food') {
      const firstFoodCategory = categories.find(cat => cat.type === 'Food');
      setSelectedFoodCategoryId(firstFoodCategory ? firstFoodCategory._id : null);
      setSelectedDrinksGroup(null);
      setSelectedDrinksSubCategory(null);
    } else { // type === 'Drinks'
      setSelectedFoodCategoryId(null);
      setSelectedDrinksGroup(null);
      setSelectedDrinksSubCategory(null);
    }
  };

  const handleSelectFoodCategory = (categoryId) => {
    setSelectedFoodCategoryId(categoryId);
    setError(null);
  };

  const handleSelectDrinksGroup = (groupName) => {
    setError(null);

    if (selectedDrinksGroup === groupName) {
        setSelectedDrinksGroup(null);
        setSelectedDrinksSubCategory(null);
        setItems([]);
        return;
    }

    if (groupName === 'Non-Alcoholic Beverages' || groupName === 'Coffee') {
        setSelectedDrinksGroup(groupName);
        setSelectedDrinksSubCategory(groupName); // Direct to items
    } else {
        setSelectedDrinksGroup(groupName);
        setSelectedDrinksSubCategory(null);
    }
  };

  const handleSelectDrinksSubCategory = (subCategoryName) => {
    if (selectedDrinksSubCategory === subCategoryName) {
        setSelectedDrinksSubCategory(null);
        setItems([]);
        return;
    }
    setSelectedDrinksSubCategory(subCategoryName);
    setError(null);
  };

  const handleBackToDrinksGroups = () => {
    setSelectedDrinksGroup(null);
    setSelectedDrinksSubCategory(null);
    setError(null);
    setItems([]);
  };

  const handleBackToDrinksSubCategories = () => {
    if (selectedDrinksGroup === 'Non-Alcoholic Beverages' || selectedDrinksGroup === 'Coffee') {
         handleBackToDrinksGroups();
    } else {
        setSelectedDrinksSubCategory(null);
        setItems([]);
    }
    setError(null);
  };


  // --- Derived State for Rendering ---

  const foodCategories = categories.filter(cat => cat.type === 'Food');
  const drinksMainGroups = Object.keys(drinksHierarchy);
  const drinksSubCategoriesForSelectedGroup = selectedDrinksGroup ? drinksHierarchy[selectedDrinksGroup] : [];

  const currentSelectionName = useMemo(() => {
      if (activeMenuType === 'Food') {
          const selectedCat = categories.find(cat => cat._id === selectedFoodCategoryId); // Use string ID comparison
          return selectedCat ? selectedCat.name : 'Select a Food Category';
      } else { // activeMenuType === 'Drinks'
          if (selectedDrinksSubCategory) {
              return selectedDrinksSubCategory;
          } else if (selectedDrinksGroup) {
              return selectedDrinksGroup;
          } else {
              return 'Select a Drinks Group';
          }
      }
  }, [activeMenuType, selectedFoodCategoryId, selectedDrinksGroup, selectedDrinksSubCategory, categories]);


  // --- Render Logic ---

  if (loadingCategories) {
    return <div className="text-center py-8">Loading Menu...</div>; // This will likely never show now
  }

  if (error && !loadingItems) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-4">
      {/* Menu Type Tabs */}
      <div className="flex justify-center mb-6 border-b border-gray-300">
        <button
          className={`px-6 py-3 text-lg font-semibold ${activeMenuType === 'Food' ? 'border-b-2 border-black text-black' : 'text-gray-600 hover:text-black'}`}
          onClick={() => handleMenuTypeChange('Food')}
        >
          Food Menu
        </button>
        <button
          className={`px-6 py-3 text-lg font-semibold ${activeMenuType === 'Drinks' ? 'border-b-2 border-black text-black' : 'text-gray-600 hover:text-black'}`}
          onClick={() => handleMenuTypeChange('Drinks')}
        >
          Drinks Menu
        </button>
      </div>

      {/* Category/Group/Sub-category Selector Area */}
      <div className="mb-6">
        {/* Back Button (Visible when not at the top level of Drinks) */}
        {(selectedDrinksSubCategory || selectedDrinksGroup) && activeMenuType === 'Drinks' && (
             <button
                className="px-4 py-2 mb-4 rounded-full text-sm font-medium bg-gray-200 text-black hover:bg-gray-300"
                onClick={selectedDrinksSubCategory ? handleBackToDrinksSubCategories : handleBackToDrinksGroups}
            >
                ← Back
            </button>
        )}

        {activeMenuType === 'Food' ? (
          // --- Food Category Selector (Horizontal Scroll) ---
          foodCategories.length > 0 ? (
            <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2">
                {foodCategories.map(category => (
                  <button
                    key={category._id} // Use string ID for key
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${selectedFoodCategoryId === category._id ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`} // Compare string IDs
                    onClick={() => handleSelectFoodCategory(category._id)} // Pass string ID
                  >
                    {category.name}
                  </button>
                ))}
            </div>
          ) : (
             <p className="text-center text-gray-600">No Food categories available.</p>
          )
        ) : (
          // --- Drinks Menu Navigation (3-Level Logic) ---
          <>
            {/* Display Drinks Groups (Level 2) - Always show when Drinks is active, Horizontal Scroll */}
            <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 mb-4">
              {drinksMainGroups.length > 0 ? (
                drinksMainGroups.map(groupName => (
                  <button
                    key={groupName}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${selectedDrinksGroup === groupName ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                    onClick={() => handleSelectDrinksGroup(groupName)}
                  >
                    {groupName}
                  </button>
                ))
              ) : (
                 <p className="text-center text-gray-600">No Drinks groups defined.</p>
              )}
            </div>

            {/* Display Drinks Sub-categories (Level 3) - Show below groups, Wrapping */}
            {/* Only show sub-category buttons if a group is selected AND it's NOT one of the direct-to-items groups AND no sub-category is selected */}
            {selectedDrinksGroup && !selectedDrinksSubCategory &&
             selectedDrinksGroup !== 'Non-Alcoholic Beverages' &&
             selectedDrinksGroup !== 'Coffee' && (
              drinksSubCategoriesForSelectedGroup.length > 0 ? (
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {drinksSubCategoriesForSelectedGroup.map(subCategoryName => {
                        // Check if the corresponding category exists in the static data
                        const categoryExists = categories.some(cat => cat.name === subCategoryName && cat.type === 'Drinks');
                        // Only render button if the corresponding category exists
                        return categoryExists ? (
                            <button
                                key={subCategoryName}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${selectedDrinksSubCategory === subCategoryName ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                                onClick={() => handleSelectDrinksSubCategory(subCategoryName)}
                            >
                                {subCategoryName}
                            </button>
                        ) : null; // Don't render button if category doesn't exist
                    })}
                </div>
              ) : (
                 <p className="text-center text-gray-600">No sub-categories available for {selectedDrinksGroup}.</p>
              )
            )}
          </>
        )}
      </div>

      {/* Heading for the current selection */}
      {(activeMenuType === 'Food' && selectedFoodCategoryId) || (activeMenuType === 'Drinks' && selectedDrinksSubCategory) ? (
           <h2 className="text-2xl font-bold mb-6 text-center">{currentSelectionName}</h2>
      ) : null}


      {/* Item List */}
      {loadingItems ? (
        <div className="text-center py-8">Loading Items...</div>
      ) : (
        // Conditional rendering based on active menu type and selection level
        activeMenuType === 'Food' ? (
            // --- Food Items Display ---
            items.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {items.map(item => (
                    // Pass the item which now includes categoryName
                    <MenuItem key={item._id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-600">
                  {selectedFoodCategoryId ? `No items found for this category.` : `Please select a category.`}
                </div>
              )
        ) : (
            // --- Drinks Items Display ---
            selectedDrinksSubCategory ? ( // Only show items if a sub-category is selected
                items.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {items.map(item => (
                         // Pass the item which now includes categoryName
                        <MenuItem key={item._id} item={item} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-600">
                      No items found for {selectedDrinksSubCategory}.
                    </div>
                  )
            ) : (
                // Message when a Drinks group is selected but no sub-category
                selectedDrinksGroup ? (
                    <div className="text-center py-8 text-gray-600">
                       Please select a sub-category from {selectedDrinksGroup}.
                    </div>
                ) : (
                    // Message when Drinks menu is active but no group is selected
                    <div className="text-center py-8 text-gray-600">
                       Please select a Drinks group.
                    </div>
                )
            )
        )
      )}
    </div>
  );
}

export default UserMenu;