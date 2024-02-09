import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DualBarChart from './NewJerseyLic';
import NewJerseyLic from './NewJerseyLic';
import PensyLic from './PensyLic';
import NewYorkLic from './NewYorkLic';
import { Dialog, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { SentimentVeryDissatisfied } from '@mui/icons-material';
import AddLicence from './AddLicence';

const Dashboard = ({ userId }) => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [defaultFinId, setDefaultFinId] = useState(0);
  const [noLicenseFound, setNoLicenseFound] = useState(false);
  const [allResponseData, setAllResponseData] = useState([]);
  const [childComponentResponses, setChildComponentResponses] = useState([]);

  const fetchData = async () => {
    try {
      if (userId) {
        const response = await fetch('http://warals1.ddns.net:8045/api/UserFinYear', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('access_token'),
          },
          body: JSON.stringify({
            RegistrationId: userId,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const handleDataCheck = (result) => {
    setChildComponentResponses(prevResponses => [...prevResponses, result]);
  };

  useEffect(() => {
    if (childComponentResponses.length === 3) {
      const allResponsesMatch = childComponentResponses.every(response => response === true);
      if (allResponsesMatch) {
        setNoLicenseFound(true);
      }
    }
  }, [childComponentResponses]);

  const handleCloseDialog = () => {
    setNoLicenseFound(false);
  };

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };

  useEffect(() => {
    if (selectedItem === '') {
      setSelectedItem(defaultFinId);
    }
  }, [selectedItem, defaultFinId]);

  return (
    <>
      <Helmet>
        <title>Dashboard - Your Website Name</title>
        <meta name="description" content="Description of your dashboard page for SEO" />
      </Helmet>

      <div className="rayan">
        <h1 className=''>Dashboard</h1>
        <Dialog open={noLicenseFound} onClose={handleCloseDialog}>
          <DialogTitle>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              No Licence Found
              <Button onClick={handleCloseDialog}>
                <CloseIcon />
              </Button>
            </div>
          </DialogTitle>
          <DialogContent>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SentimentVeryDissatisfied style={{ fontSize: 48, color: 'red' }} />
              <Typography variant="body1">Please add the licence from the Licence Section.</Typography>
            </div>
            <AddLicence userId={userId} handleCloseDialog={handleCloseDialog} />
          </DialogContent>
        </Dialog>
        <div className="chart-box">
          <div className="chart-container">
            {selectedItem && !data.find((item) => item.FinId === selectedItem) ? (
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <p>Data does not exist for the selected item</p>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="row">
                  <NewJerseyLic userId={userId} FinId={selectedItem} onDataCheck={handleDataCheck} />
                  <PensyLic userId={userId} FinId={selectedItem} onDataCheck={handleDataCheck} />
                  <NewYorkLic  userId={userId} FinId={selectedItem} onDataCheck={handleDataCheck}/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
