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
          <div key={idx}>
            <p className="frfrffrf">{line} here</p>
            <hr />
          </div>
        ) : (
          <p key={idx}>{line} not here</p>
        )
      )}
    </article>
  );
}
