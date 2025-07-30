import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCampaignForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const[plink,setPlink]=useState('')

  const handleAddCampaign = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login to add a campaign');
      return;
    }

    const userId = parseJwt(token)?.id;
    if (!userId) {
      toast.error('Invalid token');
      return;
    }

    try {
      const res = await axios.post(
        'https://mailautomation-jhu8.onrender.com/api/campaign/add',
        {
          title,
          body,
          plink,
          userId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { campaign } = res.data;
      localStorage.setItem('campaignId', campaign._id);
      toast.success(res.data.message || 'Campaign created successfully!');
      setTitle('');
      setBody('');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Error creating campaign');
    }
  };

  const parseJwt = (token) => {
    try {
      const base64Payload = token.split('.')[1];
      const payload = atob(base64Payload);
      return JSON.parse(payload);
    } catch (e) {
      return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create New Campaign</h2>
      <form onSubmit={handleAddCampaign} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Campaign Title"
          className="w-full border rounded p-2"
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter Email Body"
          rows={5}
          className="w-full border rounded p-2"
          required
        />
        <input
         type='text'
         value={plink}
         onChange={(e)=>setPlink(e.target.value)}
         placeholder='Enter Product Link'
         className='w-full border rounded p-2'
         required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 cursor-pointer"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default AddCampaignForm;
