import React, { useState } from 'react';

const Main = () => {
  const [answer, setAnswer] = useState('');

  const answers = [
    'დარწმუნებული ვარ.',
    'დიახ.',
    'უდაოდ.',
    'შესაძლებელია.',
    'სავარაუდოდ კი.',
    'პასუხის გაცემა მიჭირს, ახლიდან მკითხე.',
    'სჯობს ახლა არ გითხრა.',
    'არა.',
    'არასდროს.',
    'ცუდი იდეაა.',
    'არ გარისკო!',
  ];

  const handlesubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * 11) + 1;

    let answer = answers[randomNum];

    setAnswer(answer);

    e.target.elements[0].value = '';

    console.log(e.target.elements);
  };

  return (
    <div>
      <h2>მკითხე რამე.</h2>
      <form onSubmit={handlesubmit}>
        <label>
          ჩაწერე აქ:
          <input type='text' />
        </label>
        <button>კითხვის მიღება</button>
      </form>
      <p>{answer}</p>
    </div>
  );
};

export default Main;
