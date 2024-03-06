import { Fragment } from "react";

const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export default function Poem() {
    let itemContent = name;

    return (
      <section>
        {poem.lines.map((line, index) =>
          <p key={index}>
            {line}<hr/>
          </p>
        )}
      </section>
    );
  }
  

  import { Fragment } from 'react';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}

const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export default function Poem() {
    let output = [];
  
    // Fill the output array
    poem.lines.forEach((line, i) => {
      output.push(
        <hr key={i + '-separator'} />
      );
      output.push(
        <p key={i + '-text'}>
          {line}
        </p>
      );
    });
    // Remove the first <hr />
    output.shift();
  
    return (
      <article>
        {output}
      </article>
    );
  }

  
