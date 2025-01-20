import React, { useState } from 'react'
import SmallHeader from './SmallHeader';

const Faqs = () => {
  const leftFaq = [
    {
      title: "Sample 1",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas at consectetur alias quas laudantium laboriosam illo saepe atque incidunt quia magni accusantium temporibus perspiciatis vero, veniam hic ratione sunt inventore."
    },
    {
      title: "Sample 2",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas at consectetur alias quas laudantium laboriosam illo saepe atque incidunt quia magni accusantium temporibus perspiciatis vero, veniam hic ratione sunt inventore."
    },
    {
      title: "Sample 3",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas at consectetur alias quas laudantium laboriosam illo saepe atque incidunt quia magni accusantium temporibus perspiciatis vero, veniam hic ratione sunt inventore."
    }
  ];

  const rightFaq = [
    {
      title: "Sample 4",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas at consectetur alias quas laudantium laboriosam illo saepe atque incidunt quia magni accusantium temporibus perspiciatis vero, veniam hic ratione sunt inventore."
    },
    {
      title: "Sample 5",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas at consectetur alias quas laudantium laboriosam illo saepe atque incidunt quia magni accusantium temporibus perspiciatis vero, veniam hic ratione sunt inventore."
    },
    {
      title: "Sample 6",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas at consectetur alias quas laudantium laboriosam illo saepe atque incidunt quia magni accusantium temporibus perspiciatis vero, veniam hic ratione sunt inventore."
    }
  ];
  const [ open, setOpen ] = useState(null);


  const handleToggle = (index) => {
    setOpen(open === index ? null : index);

  }

  return (
    <div className='mx-2 lg:mx-40 component'>
      <SmallHeader title="FAQ" desc="Frequently asked questions about " rcy="Red Cross Youth"/>
      <div className="flex flex-col lg:flex-row gap-0 md:gap-2">
        <div className="join join-vertical w-full rounded-none">
          {leftFaq.map((item, index) => (
            <div className="collapse collapse-arrow join-item border-b-[1px]" key={index} onClick={() => handleToggle(index)}>
              <input type="radio" name="my-accordion-4" checked={open===index}  onChange={() => handleToggle(index)} />
              <div className="collapse-title text-md font-medium"
              >
                {item.title}</div>
              <div className="collapse-content">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="join join-vertical w-full rounded-none">
          {rightFaq.map((item, index) => (
            <div className="collapse collapse-arrow join-item border-b-[1px]" key={index + 3} onClick={() => handleToggle(index + 3)}>
              <input type="radio" name="my-accordion-4" checked={open===index + 3} onChange={() => handleToggle(index + 3)} />
              <div className="collapse-title text-md font-medium"
              >{item.title}</div>
              <div className="collapse-content">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs