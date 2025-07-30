import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const NodeForm = ({ nodeType }) => {
  const [id, setId] = useState('');
  const [delay, setDelay] = useState(1);
  const [condition, setCondition] = useState({ clicked: '', purchased: '' });
  const [emailBody, setEmailBody] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!token) return toast.error('Please login first');
    if (!id.trim()) return toast.error('Please enter a campaign ID');

    const toastId = toast.loading('📤 Sending campaign emails...');
    setLoading(true);

    try {
      const res = await axios.post(
        'https://mailautomation-jhu8.onrender.com/api/simulate/send',
        { campaignId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.update(toastId, {
        render: res.data.message || '✅ Emails sent successfully',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });

      setId('');
    } catch (err) {
      console.error(err);
      toast.update(toastId, {
        render: '❌ Failed to send campaign',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelaySubmit = async (e) => {
    e.preventDefault();
    if (!token) return toast.error('Please login first');
    if (!id.trim()) return toast.error('Please enter a campaign ID');

    const delayInMs = delay * 24 * 60 * 60 * 1000;
    const toastId = toast.loading('⏳ Scheduling delayed email...');
    setLoading(true);

    try {
      const res = await axios.post(
        'https://mailautomation-jhu8.onrender.com/api/simulate/delay',
        { campaignId: id, delayInMs },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.update(toastId, {
        render: res.data.message || '✅ Delay scheduled successfully',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });

      setId('');
      setDelay(1);
    } catch (err) {
      console.error(err);
      toast.update(toastId, {
        render: '❌ Failed to schedule delay',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

const handleConditionSubmit = async (e) => {
  e.preventDefault();
  if (!token) return toast.error('Please login first');
  if (!id.trim() || !emailBody.trim()) return toast.error('Please enter required fields');
  if (!condition.clicked && !condition.purchased)
    return toast.error('Please select at least one condition');

  const toastId = toast.loading('📊 Sending conditional campaign...');
  setLoading(true);

  try {
    console.log('Sending condition request:', {
      campaignId: id,
      condition: condition,
      emailBody: emailBody,
    });

    const res = await axios.post(
      'https://mailautomation-jhu8.onrender.com/api/simulate/condition',
      {
        campaignId: id,
        condition,
        emailBody, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.update(toastId, {
      render: res.data.message || '✅ Condition-based emails sent',
      type: 'success',
      isLoading: false,
      autoClose: 3000,
    });

    setId('');
    setCondition({ clicked: '', purchased: '' });
    setEmailBody('');
  } catch (err) {
    console.error(err);
    toast.update(toastId, {
      render: '❌ Failed to send condition-based emails',
      type: 'error',
      isLoading: false,
      autoClose: 3000,
    });
  } finally {
    setLoading(false);
  }
};


  const getSubmitHandler = () => {
    if (nodeType === 'delayNode') return handleDelaySubmit;
    if (nodeType === 'conditionNode') return handleConditionSubmit;
    return handleEmailSubmit;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-4 capitalize">
        {nodeType === 'delayNode'
          ? 'Delay Campaign'
          : nodeType === 'conditionNode'
          ? 'Condition Campaign'
          : 'Trigger Campaign'}
      </h3>

      <form onSubmit={getSubmitHandler()} className="space-y-4">
        <input
          type="text"
          name="campaignId"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Campaign ID"
          className="w-full border rounded p-2"
          required
        />

        {nodeType === 'delayNode' && (
          <input
            type="number"
            name="delay"
            min={1}
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
            placeholder="Delay (in days)"
            className="w-full border rounded p-2"
          />
        )}

        {nodeType === 'conditionNode' && (
          <>
<label className="block font-medium">Clicked</label>
<select
  value={condition.clicked}
  onChange={(e) =>
    setCondition({ ...condition, clicked: e.target.value })
  }
  className="w-full border rounded p-2"
  required
>
  <option value="">-- Select Clicked Status --</option>
  <option value="true">Clicked</option>
  <option value="false">Not Clicked</option>
</select>

<label className="block font-medium">Purchased</label>
<select
  value={condition.purchased}
  onChange={(e) =>
    setCondition({ ...condition, purchased: e.target.value })
  }
  className="w-full border rounded p-2"
  required
>
  <option value="">-- Select Purchased Status --</option>
  <option value="true">Purchased</option>
  <option value="false">Not Purchased</option>
</select>


            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              placeholder="Enter email content"
              rows={5}
              className="w-full border rounded p-2"
              required
            />
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`bg-black text-white px-6 py-2 cursor-pointer rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
          }`}
        >
          {loading
            ? nodeType === 'delayNode'
              ? 'Scheduling...'
              : nodeType === 'conditionNode'
              ? 'Processing...'
              : 'Sending...'
            : nodeType === 'delayNode'
            ? 'Schedule Delay'
            : nodeType === 'conditionNode'
            ? 'Send Condition Emails'
            : 'Send Mails'}
        </button>
      </form>
    </div>
  );
};

export default NodeForm;
