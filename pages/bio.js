import { useState } from "react";

import Navigation from "../components/Navigation";

export default function Bio() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div>
      <div className="content">Bio</div>
      <Navigation isOpened={isOpened} />
    </div>
  );
}
