
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";

const countryCodes = [
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+93", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "+211", flag: "🇸🇸", name: "South Sudan" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "+220", flag: "🇬🇲", name: "Gambia" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "+225", flag: "🇨🇮", name: "Ivory Coast" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+229", flag: "🇧🇯", name: "Benin" },
  { code: "+230", flag: "🇲🇺", name: "Mauritius" },
  { code: "+231", flag: "🇱🇷", name: "Liberia" },
  { code: "+232", flag: "🇸🇱", name: "Sierra Leone" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "+236", flag: "🇨🇫", name: "Central African Republic" },
  { code: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "+238", flag: "🇨🇻", name: "Cape Verde" },
  { code: "+239", flag: "🇸🇹", name: "São Tomé and Príncipe" },
  { code: "+240", flag: "🇬🇶", name: "Equatorial Guinea" },
  { code: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "+242", flag: "🇨🇬", name: "Republic of the Congo" },
  { code: "+243", flag: "🇨🇩", name: "Democratic Republic of the Congo" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+245", flag: "🇬🇼", name: "Guinea-Bissau" },
  { code: "+246", flag: "🇮🇴", name: "British Indian Ocean Territory" },
  { code: "+248", flag: "🇸🇨", name: "Seychelles" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+253", flag: "🇩🇯", name: "Djibouti" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+257", flag: "🇧🇮", name: "Burundi" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  // Add any missing ones...
];

export default function AppointmentBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = async () => {
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const appointmentData = { name, email, countryCode, phone, date, time, notes };

    try {
      const response = await fetch("http://localhost:3001/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) throw new Error("Failed to book appointment.");

      const data = await response.json();
      setConfirmation(data.message || "Your appointment has been booked. A confirmation SMS has been sent.");
    } catch (error) {
      alert("Error booking appointment.");
    }
  };

  return (
    <Card>
      <CardContent>
        <Label>Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />

        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label>Phone</Label>
        <div className="flex">
          <Select value={countryCode} onValueChange={setCountryCode}>
            <SelectTrigger>{countryCode}</SelectTrigger>
            <SelectContent>
              {countryCodes.map(({ code, flag, name }) => (
                <SelectItem key={code} value={code}>
                  {flag} {name} ({code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="1234567890" />
        </div>

        <Label>Date</Label>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <Label>Time</Label>
        <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <Label>Notes</Label>
        <Input value={notes} onChange={(e) => setNotes(e.target.value)} />

        <Button onClick={handleSubmit} className="mt-4">Book Appointment</Button>

        {confirmation && <p className="mt-2 text-green-600">{confirmation}</p>}
      </CardContent>
    </Card>
  );
}



