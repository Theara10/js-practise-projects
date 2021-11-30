import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function PasswordGenerator() {
  const [password, setPassword] = useState("password");

  const generatePassword = () => {
    let random = Math.random().toString(36).slice(-8);
    setPassword(random);
  };

  const handleCopy = () => {
    password.select().execCommand("copy");
  };

  return (
    <div className="password-generator-container">
      <div className="password-generator-card">
        <h2>Password Generator</h2>
        <input value={password} />
        <div className="password-generator-buttons">
          <button onClick={generatePassword}>Generate</button>
          <CopyToClipboard text={password}>
            <button>Copy</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
