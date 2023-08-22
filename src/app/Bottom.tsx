import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Bottom() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 left-0 right-0">
      <div className="flex flex-row justify-center gap-8 h-12 mt-3.5">
          <Button
            label="Search" 
            onClick={() => { navigate('/search') } }
          />
          <Button
            label="Random"
            onClick={() => { navigate('/Random') } }
          />
      </div>
    </div>
  );
}