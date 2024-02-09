import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Verification = () => {
  const [verificationStatus, setVerificationStatus] = useState("Verifying...");
  // const { token } = useParams(); // Assuming you pass the verification token as a URL parameter

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`http://warals1.ddns.net:8045/api/EmailVerification?token=${token}`);

        if (response.ok) {
          setVerificationStatus("Email Verified Successfully");
        } else {
          setVerificationStatus("Email Verification Failed");
        }
      } catch (error) {
        console.error("Error:", error);
        setVerificationStatus("Email Verification Failed");
      }
    };

    verifyEmail();
  }, []);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{verificationStatus}</p>
      {/* Add more descriptive content here if necessary */}
    </div>
  );
};

export default Verification;
