import { Heading, Center, Spinner, Flex, Box, useColorModeValue, Stack, Button, Input, Textarea  } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import FeedbackForm from './FeedbackForm';
import Footer from './Footer';

const Feedback = () => {

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
          setTimeout(()=>{ 
              setLoading(false) // After 4 seconds loading should be false
      },1000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])

    return (
        <Box h="800px">
             {
            loading == true  ? 
                <Center mt="200px">
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />
                </Center>
                :
                <>
                <Heading  textAlign={"center"} fontFamily={"AUDIOWIDE"}>Give your valuable feedback, we can improve our service on your feedback</Heading>
                
                {/* below line I imported feedback form here. */}
                <FeedbackForm/> 

                <br />
               
                <Footer/>
                </>
            }
    
        </Box>
    );
}

export default Feedback;
