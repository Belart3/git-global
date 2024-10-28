import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import PlusIcon from './PlusIcon';
import MinusIcon from './MinusIcon';

export default function AccordionUsage({question, answer}) {
    const [expanded, setExpanded] = useState(false); // Track expanded state

    const handleChange = () => {
      setExpanded((prev) => !prev); // Toggle expanded state
    };
  return (
    <div className=''>
      <Accordion className='!bg-PE500 !shadow-none border-b !rounded-none border-B500 !py-10 !px-0'
      expanded={expanded} onChange={handleChange}
      >

        <AccordionSummary
        expandIcon={expanded ? <MinusIcon /> : <PlusIcon />}
        aria-controls="panel1-content" id="panel1-header" className='!px-0 !text-xl ibm-plex-sans-regular'
        sx={{
            '& .MuiAccordionSummary-content': {
              margin: '0px',
            },
        }}
        >
            {question}
        </AccordionSummary>

        <AccordionDetails
        className='!py-0 text-B400 text-xl ibm-plex-sans-regular'
        >
          {answer}
        </AccordionDetails>

      </Accordion>
    </div>
  );
}
