// A CSS Grid practice page. The numbered cells exercise grid placement,
// `gap` and responsive column counts.
//
// The counter component below this is kept commented out deliberately: it
// demonstrates a real React bug worth remembering. The original version called
// setState twice in one handler -
//
//     setCounter(counter + 1);
//     setCounter(counter + 20);
//
// Both calls read the same `counter` from the same render, so the second
// overwrites the first and the "+1" is lost. This is why a functional update,
// setCounter(c => c + 1), is the correct form whenever the next value depends on
// the previous one.

import './home.css';

export default function Home() {
  return (
    <div className="container">
      <div className="grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
}
