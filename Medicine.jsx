import React, { useState } from "react";
import "./Medicine.css";

export default function Medicine() {
  const [location, setLocation] = useState("");
  const [medicine, setMedicine] = useState("");
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState({
    state: "",
    city: "",
    district: "",
  });

  const [isCheckout, setIsCheckout] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState("");

  const handleSearchPharmacies = () => {
    if (location.trim() === "") {
      alert("Please enter a location to search for pharmacies.");
      return;
    }

    const nearbyPharmacies = [
      "HealthPlus Pharmacy",
      "CareWell Pharmacy",
      "MediCare Central",
      "LifeLine Drugs",
      "QuickMeds Hub",
    ];

    setPharmacies(nearbyPharmacies);
  };

  const handleAddToCart = () => {
    if (medicine.trim() !== "") {
      setCart([...cart, medicine]);
      setMedicine("");
    } else {
      alert("Please enter a valid medicine name.");
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handlePlaceOrder = () => {
    if (!address.state || !address.city || !address.district) {
      alert("Please fill in all address fields.");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before placing an order.");
      return;
    }
    if (!selectedPharmacy) {
      alert("Please select a pharmacy before placing the order.");
      return;
    }

    alert(`Order placed successfully from ${selectedPharmacy}!`);
    setCart([]);
    setAddress({ state: "", city: "", district: "" });
    setSelectedPharmacy("");
    setIsCheckout(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Medicine Delivery</h1>
      </header>
      <main className="main">
        {!isCheckout ? (
          <>
            <div className="search-section">
              <input
                type="text"
                placeholder="Search by location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button onClick={handleSearchPharmacies}>
                Find Nearby Pharmacies
              </button>
            </div>
            {pharmacies.length > 0 && (
              <div className="pharmacy-list">
                <h2>Nearby Pharmacies</h2>
                <ul>
                  {pharmacies.map((pharmacy, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          name="pharmacy"
                          value={pharmacy}
                          checked={selectedPharmacy === pharmacy}
                          onChange={(e) =>
                            setSelectedPharmacy(e.target.value)
                          }
                        />
                        {pharmacy}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="medicine-search">
              <input
                type="text"
                placeholder="Search for medicine"
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
              />
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div className="cart">
              <h2>Cart</h2>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item}{" "}
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              {cart.length > 0 && (
                <button onClick={() => setIsCheckout(true)}>Checkout</button>
              )}
            </div>
          </>
        ) : (
          <div className="checkout">
            <h2>Enter Address</h2>
            <input
              type="text"
              placeholder="State"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) =>
                setAddress({ ...address, city: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="District"
              value={address.district}
              onChange={(e) =>
                setAddress({ ...address, district: e.target.value })
              }
            />
            <button onClick={handlePlaceOrder}>Place Order</button>
            <button onClick={() => setIsCheckout(false)}>Go Back</button>
          </div>
        )}
      </main>
    </div>
  );
}