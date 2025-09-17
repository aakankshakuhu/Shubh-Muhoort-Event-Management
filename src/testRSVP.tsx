import axios from "axios";

function TestRSVP() {
  const sendRSVP = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/rsvp", {
        name: "Frontend Tester",
        email: "frontend@test.com",
        attendance: "yes"
      });

      alert("✅ Success: " + JSON.stringify(response.data));
    } catch (err: any) {
      alert("❌ Error: " + err.message);
    }
  };

  return (
    <button onClick={sendRSVP} style={{ padding: "10px", background: "lightgreen" }}>
      Send Test RSVP
    </button>
  );
}

export default TestRSVP;
