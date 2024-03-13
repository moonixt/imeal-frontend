import React, { useState } from "react";

const Celular = () => {
  let sendphoneotp = async (celular) => {
    const res = await fetch("http://127.0.0.1:8000/otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        celular: celular,
      }),
    });

    if (!res.ok) {
      console.log(res.statusText);
    }

    const sent_otp = await res.json();
    return sent_otp;
  };

  const phonesubmit = async () => {
    let result_telefone = sendphoneotp(Celular);
    alert(result_telefone["error_no_phone_account"]);
  };

  const [Celular, setCelular] = useState("");

  return (
    <div>
      <form onSubmit={phonesubmit}>
        <input
          className="username-pass"
          name="celular"
          placeholder=" Insira o telefone"
          onChange={(e) => setCelular(e.target.value)}
        />
        <input className="username-pass" type="submit" />
      </form>
    </div>
  );
};

export default Celular;
