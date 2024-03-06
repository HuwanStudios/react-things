const poem = {
    lines: [
      "I write, erase, rewrite",
      "Erase again, and then",
      "A poppy blooms.",
    ],
  };
  
  export default function Poem() {
    return (
      <article>
        {poem.lines.map((line, idx, arr) =>
          idx !== arr.length - 1 ? (
            <p className="frfrffrf">
              {line} you are here <hr />
            </p>
          ) : (
            <p>{line} you sre not here</p>
          )
        )}
      </article>
    );
  }
  