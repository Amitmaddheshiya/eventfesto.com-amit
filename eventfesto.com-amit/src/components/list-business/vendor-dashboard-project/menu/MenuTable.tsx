import React, { useState } from "react";

type MenuItem = {
  id: number;
  category: string;
  silver: string;
  gold: string;
  platinum: string;
};

type MenuTableProps = {
  initialMenuItems: MenuItem[];
  handleSaveAll: (editedItems: MenuItem[]) => void;
};

const MenuTable: React.FC<MenuTableProps> = ({
  initialMenuItems,
  handleSaveAll,
}) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [nextId, setNextId] = useState(menuItems.length + 1);
  const [editedItems, setEditedItems] = useState<MenuItem[]>([]);
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  const handleAddRow = () => {
    setMenuItems([
      ...menuItems,
      {
        id: nextId,
        category: "",
        silver: "",
        gold: "",
        platinum: "",
      },
    ]);
    setNextId(nextId + 1);
  };

  const handleDeleteRow = (id: number) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
    setEditedItems(editedItems.filter((item) => item.id !== id));
  };

  const handleChange = (id: number, field: keyof MenuItem, value: string) => {
    const updatedItems = menuItems.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setMenuItems(updatedItems);

    const editedItem = updatedItems.find((item) => item.id === id);
    if (editedItem) {
      setEditedItems((prevEditedItems) => {
        const existingItemIndex = prevEditedItems.findIndex(
          (item) => item.id === id
        );
        if (existingItemIndex > -1) {
          const updatedEditedItems = [...prevEditedItems];
          updatedEditedItems[existingItemIndex] = editedItem;
          return updatedEditedItems;
        } else {
          return [...prevEditedItems, editedItem];
        }
      });
    }
  };

  const handleSave = () => {
    handleSaveAll(editedItems);
    setShowSaveNotification(true);
    setTimeout(() => {
      setShowSaveNotification(false);
    }, 2000);
  };

  return (
    <div className="mx-auto py-8 font-serif">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-800 text-white border border-gray-300">
                Category
              </th>
              <th className="py-2 px-4 bg-gray-800 text-white border border-gray-300">
                Silver
              </th>
              <th className="py-2 px-4 bg-yellow-500 text-white border border-gray-300">
                Gold
              </th>
              <th className="py-2 px-4 bg-blue-800 text-white border border-gray-300">
                Platinum
              </th>
              <th className="py-2 px-4 bg-cyan-500 text-white border border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td
                  className={`border px-4 py-2 ${item.id === 15 ? "bg-cyan-500" : ""}`}
                >
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) =>
                      handleChange(item.id, "category", e.target.value)
                    }
                    className={`w-full border-none focus:outline-none ${item.id === 15 ? "bg-cyan-500 cursor-not-allowed" : ""}`}
                    disabled={item.id === 15}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={item.silver}
                    onChange={(e) =>
                      handleChange(item.id, "silver", e.target.value)
                    }
                    className="w-full border-none focus:outline-none"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={item.gold}
                    onChange={(e) =>
                      handleChange(item.id, "gold", e.target.value)
                    }
                    className="w-full border-none focus:outline-none"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={item.platinum}
                    onChange={(e) =>
                      handleChange(item.id, "platinum", e.target.value)
                    }
                    className="w-full border-none focus:outline-none"
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                  {item.id !== 15 && (
                    <button
                      onClick={() => handleDeleteRow(item.id)}
                      className="text-cyan-600 hover:text-cyan-900"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleAddRow}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Row
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save All
        </button>
      </div>
      {showSaveNotification && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
          Changes have been saved successfully!
        </div>
      )}
    </div>
  );
};

export default MenuTable;
