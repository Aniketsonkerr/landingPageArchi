import Input from "@mui/joy/Input";
import Autocomplete from "@mui/joy/Autocomplete";
import Textarea from "@mui/joy/Textarea";

function Contact() {
  const enquiries = [
    { label: "General Inquiry" },
    { label: "Prop Inquiry" },
    { label: "Art Inquiry" },
    { label: "Branding Inquiry" },
    { label: "Others" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black p-6">
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md border border-gray-300">
        <h1 className="text-xl font-semibold mb-2">
          Name <span className="text-gray-600">(required)</span>
        </h1>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700">First Name:</label>
            <Input className="w-full bg-white text-black border border-gray-400 rounded-md" />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700">Last Name:</label>
            <Input className="w-full bg-white text-black border border-gray-400 rounded-md" />
          </div>
        </div>

        <h1 className="text-xl font-semibold mb-2">
          Email <span className="text-gray-600">(required)</span>
        </h1>
        <label className="block text-gray-700">Email:</label>
        <Input className="w-full bg-white text-black border border-gray-400 rounded-md mb-4" />

        <h1 className="text-xl font-semibold mb-2">Type of Enquiry</h1>
        <Autocomplete
          placeholder="Select an option"
          options={enquiries}
          className="w-full bg-white text-black border border-gray-400 rounded-md mb-4"
        />

        <h1 className="text-xl font-semibold mb-2">Subject</h1>
        <Input className="w-full bg-white text-black border border-gray-400 rounded-md mb-4" />

        <h1 className="text-xl font-semibold mb-2">Message</h1>
        <Textarea
          className="w-full bg-white text-black border border-gray-400 rounded-md mb-4"
          placeholder="Type anything…"
        />

        <button className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
