import { FaqCardFunction } from "./components/FaqCardFunction";
import QA from "./assets/QandA.json";
import { QAFunction } from "./components/QAFunction";

function App() {
  return (
    <>
      <FaqCardFunction>
        <QAFunction info={QA} />
      </FaqCardFunction>
    </>
  );
}

export default App;
