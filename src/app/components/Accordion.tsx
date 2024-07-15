'use client';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Collapse,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type Info = {
  title: string;
  content: string;
};

function AccordionItemWithIcon({ title, content }: Info) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AccordionItem w={'full'}>
      <h2>
        <AccordionButton onClick={() => setIsExpanded(!isExpanded)}>
          <HStack w={'full'} display={'flex'} justifyContent={'space-between'}>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            {isExpanded ? (
              <AiOutlineMinus fontSize="12px" />
            ) : (
              <AiOutlinePlus fontSize="12px" />
            )}
          </HStack>
        </AccordionButton>
      </h2>
      
        <AccordionPanel pb={4} 
        transition="transform 1s ease-out, opacity 1s ease-out"
        transform={isExpanded ? 'scaleY(1)' : 'scaleY(0)'}
        opacity={isExpanded ? 3 : 0}
        transformOrigin="top">
        <Collapse in={isExpanded} transition={{ exit: { delay: 1 }, enter: { duration: 2 } }}>
          {content}
          </Collapse>
        </AccordionPanel>
    
    </AccordionItem>
  );
}

function Accordions({ title, content }: Info) {
  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItemWithIcon title={title} content={content} />
      </Accordion>
    </Box>
  );
}

export default Accordions;
