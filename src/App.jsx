import Form from "./components/From";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="bg-gray-50 px-3 font-bold h-screen flex items-center flex-col gap-20">
      <Home />
      <Form />
    </div>
  );
}
