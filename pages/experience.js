import { useState } from "react";

import Navigation from "../components/Navigation";

export default function Experience() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div>
      <div className="content">Experience</div>
      <Navigation isOpened={isOpened} />
    </div>
  );
}
