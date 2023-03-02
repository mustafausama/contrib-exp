import Button from "react-bootstrap/Button";

import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Dashbord from "./Dashbord";
// import Review from "./Review";
// import Contribution from "./Contrib";

const MetaConnect = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);
  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
        // console.log(res);
        // const res2 = await window.ethereum.isConnected();
        // console.log(res2);
        // const res3 = await window.ethereum.selectedAddress;
        // console.log(res3);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };
  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
    window.location.reload();
  };

  return (
    <div>
      <h6> Account: {account} </h6>
      <h6>
        Balance: {balance} {balance ? "ETH" : null}
      </h6>
      {!account ? (
        <Button
          className="bg-primary border border-0 m-2"
          onClick={connectHandler}
        >
          Connect Account
        </Button>
      ) : (
        <>
          <Button className="bg-success border border-0 m-2">connected</Button>
          <Dashbord />
        </>
      )}
      {errorMessage ? (
        <p style={{ color: "red" }}>Error: {errorMessage}</p>
      ) : null}
    </div>
  );
};

export default MetaConnect;
