// frontend/src/components/QrCodeDisplay.jsx
import React from "react";
// Import the QR code component from react-qr-code
// This library typically uses a default export.
import QRCode from "react-qr-code";

// --- REMOVE these lines that were causing the conflict ---
// import * as QRCodeModule from 'qrcode.react'; // Remove this import
// const QRCode = QRCodeModule.default || QRCodeModule.QRCode; // Remove this line
// ---------------------------------------------------------

function QrCodeDisplay({ value, size = 160, level, includeMargin }) {
  // We are now using the QRCode component imported directly from 'react-qr-code'.
  // We no longer need the check for !QRCode that was used for debugging the previous library.

  if (!value) {
    // Keep the check for missing 'value' prop
    return (
      <div className="text-red-600 text-sm">
        Error: No value provided for QR code.
      </div>
    );
  }

  return (
    <div className="p-2 bg-white inline-block rounded shadow">
      {" "}
      {/* Optional styling wrapper */}
      {/* Use the imported QRCode component from react-qr-code */}
      <QRCode
        value={value} // The URL or text to encode (required)
        size={size} // Size in pixels (optional, defaults based on content)
        // Note: react-qr-code props might differ from qrcode.react
        // Common props are 'value', 'size', 'bgColor', 'fgColor', 'level' (sometimes)
        // 'level' and 'includeMargin' from the old component are not standard props here.
        // If you need error correction level or margin, check react-qr-code documentation.
      />
    </div>
  );
}

export default QrCodeDisplay;
