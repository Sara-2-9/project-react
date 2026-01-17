import "./App.css";
import { useState } from "react";
import Prompt from "./components/prompt";

function App() {
  const [response, setResponse] = useState("");

  return (
    <>
      <div className="h-screen bg-neutral-900 flex flex-col justify-between items-center p-4">
        <h1 className="text-6xl font-bold text-fuchsia-300 p-3">Chat with AI</h1>
        <div className="flex-1 overflow-y-auto min-h-0">
          <p className="text-white px-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet aliquet sapien. Etiam nec orci ac velit laoreet ullamcorper. Pellentesque at dictum ligula, et cursus neque. Duis quis aliquam nulla. Proin porta cursus felis, nec lacinia elit posuere at. Pellentesque sit amet eleifend elit. Ut vehicula, lectus at aliquam elementum, eros leo convallis lorem, non tristique lectus libero non nibh. Mauris euismod leo et nisi faucibus, non venenatis libero porta. Proin tempus dolor ac augue tincidunt, nec feugiat ex tincidunt. Sed feugiat placerat sapien sed dictum. Praesent posuere metus nec velit facilisis, nec pretium urna rhoncus. Praesent rutrum quis nulla id dictum. Aliquam laoreet pulvinar dictum. Pellentesque placerat non velit a porta. Donec aliquam justo nec odio varius, a cursus enim accumsan.

            Nunc porttitor facilisis interdum. Etiam cursus, eros vitae finibus dictum, est sapien dictum enim, id porttitor dolor enim ac libero. Pellentesque eu nunc tempor, dictum mauris non, gravida libero. Morbi sed ipsum diam. Vestibulum aliquet, dui in cursus rhoncus, quam metus lobortis augue, ac lobortis enim risus ac magna. Morbi sed velit luctus, faucibus enim ac, vehicula mauris. Donec maximus lacinia feugiat. Proin volutpat tortor ex, id tincidunt risus luctus in.

            Etiam dictum ex sed feugiat laoreet. Vestibulum eget enim lobortis, tempus nunc eget, consectetur massa. Sed posuere porta sem, sed malesuada tortor sagittis a. Pellentesque cursus, risus id imperdiet feugiat, purus eros vulputate mi, ut viverra lorem mauris a felis. Pellentesque cursus nibh ac enim pulvinar, porta pharetra lacus tempor. In non aliquet eros. Mauris id velit sem. Pellentesque ut lacinia nulla. Maecenas luctus, quam vel cursus semper, magna dolor fermentum enim, nec accumsan eros erat dictum urna.

            Nullam pretium, erat et sodales congue, magna felis malesuada nulla, nec gravida odio lectus nec mauris. Nullam laoreet dui id elit euismod, ut dictum sem pretium. Vestibulum cursus semper arcu ac pharetra. Curabitur pretium eros a nulla posuere luctus. Nam eu ex nulla. Sed tincidunt, massa ut auctor mattis, urna sapien dictum enim, vehicula tristique purus urna vitae erat. Phasellus porttitor augue posuere metus cursus porttitor.

            Aenean a massa ac tortor dictum pulvinar. Fusce porta dictum enim, a tempor quam rutrum id. Pellentesque at egestas sapien, in dignissim neque. Etiam nec condimentum nisl. Donec efficitur, sapien vitae faucibus facilisis, lorem magna faucibus magna, ac dictum neque quam sit amet risus. In hendrerit mauris sit amet cursus posuere. Duis nec fermentum tellus, egestas dictum nisi.
            
            Nullam pretium, erat et sodales congue, magna felis malesuada nulla, nec gravida odio lectus nec mauris. Nullam laoreet dui id elit euismod, ut dictum sem pretium. Vestibulum cursus semper arcu ac pharetra. Curabitur pretium eros a nulla posuere luctus. Nam eu ex nulla. Sed tincidunt, massa ut auctor mattis, urna sapien dictum enim, vehicula tristique purus urna vitae erat. Phasellus porttitor augue posuere metus cursus porttitor.

            Aenean a massa ac tortor dictum pulvinar. Fusce porta dictum enim, a tempor quam rutrum id. Pellentesque at egestas sapien, in dignissim neque. Etiam nec condimentum nisl. Donec efficitur, sapien vitae faucibus facilisis, lorem magna faucibus magna, ac dictum neque quam sit amet risus. In hendrerit mauris sit amet cursus posuere. Duis nec fermentum tellus, egestas dictum nisi.
            <br /><br />
            <span className="font-bold">[Messaggio dell’AI]: </span>
            {response}
          </p>
        </div>
        <Prompt setResponse={setResponse} />
      </div>
    </>
  );
}

export default App;
