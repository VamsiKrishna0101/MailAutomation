import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://mailautomation-jhu8.onrender.com/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCampaigns(res.data.campaigns);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
<div className="pt-24 pb-40 px-6 mb-30 max-w-6xl mx-auto min-h-[calc(100vh-8rem)]">
      <h2 className="text-2xl font-bold mb-6 text-center">📊 My Campaign Analytics</h2>

      {loading ? (
        <p>Loading...</p>
      ) : campaigns.length === 0 ? (
        <p>No campaigns found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((camp) => (
            <div key={camp._id} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{camp.title}</h3>
              <p className="text-sm text-gray-600 mb-1">📬 Emails Sent: <span className="font-medium">{camp.sentCount}</span></p>
              <p className="text-sm text-blue-600 mb-1">🖱️ Clicked: <span className="font-medium">{camp.clicked}</span></p>
              <p className="text-sm text-green-600">💰 Purchased: <span className="font-medium">{camp.purchased}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
