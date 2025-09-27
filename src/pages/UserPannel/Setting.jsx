import React, { useState, useEffect } from "react";

export default function Setting() {
  const [user, setUser] = useState({
    name: "Praveen Diwedi",
    email: "",
    phone: "+916387522649",
    password: "********",
  });

  // load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const sections = [
    {
      id: "name",
      label: "Name",
      value: user.name,
      btn: "Edit",
      desc: "",
    },
    {
      id: "email",
      label: "Email",
      value: user.email || "Not added",
      btn: "Add",
      desc:
        "For stronger account security, add your email. If there’s an unusual sign-in, we’ll email you and verify that it’s really you.",
      warning: !user.email,
    },
    {
      id: "phone",
      label: "Primary mobile number",
      value: user.phone,
      btn: "Edit",
      desc:
        "Quickly sign in, easily recover passwords and receive security notifications with this mobile number.",
    },
    {
      id: "passkey",
      label: "Passkey",
      value: "",
      btn: "Set up",
      desc:
        "Sign in the same way you unlock your device by using your face, fingerprint, or PIN.",
      warning: true,
    },
    {
      id: "password",
      label: "Password",
      value: "********",
      btn: "Edit",
      desc: "",
    },
    {
      id: "2fa",
      label: "2-step verification",
      value: "",
      btn: "Turn on",
      desc: "Add a layer of security. Require a code in addition to your password.",
      warning: true,
    },
    {
      id: "compromised",
      label: "Compromised account?",
      value: "",
      btn: "Start",
      desc:
        "Take steps like changing your password and signing out everywhere.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Login and Security</h1>
      </div>

      {/* Sections */}
      <div className="bg-white border border-gray-200 rounded-lg divide-y">
        {sections.map((s, idx) => (
          <div
            key={s.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-4"
          >
            {/* Left side */}
            <div className="flex-1">
              <h2 className="text-base font-medium text-gray-800">{s.label}</h2>
              {s.value && (
                <p className="text-sm text-gray-700 mt-1">{s.value}</p>
              )}
              {s.desc && (
                <p className="text-sm text-gray-500 mt-1 flex items-start">
                  {s.warning && (
                    <span className="text-yellow-500 font-bold mr-1">⚠</span>
                  )}
                  {s.desc}
                </p>
              )}
            </div>

            {/* Right side */}
            <div className="mt-3 sm:mt-0">
              <button
                className="px-5 py-2 border rounded-full text-sm font-medium bg-white hover:bg-gray-50 transition"
              >
                {s.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
