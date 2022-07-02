import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
   
    imgPath:
      'https://i.ytimg.com/vi/3fNdPVZEJ1M/maxresdefault.jpg',
  },
  {
   
    imgPath:
      'https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/kgf-chapter-2-to-get-postponed-001.jpg',
  },
  {
 
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRzxt0Vsbpu9s6s0OCkl4GE6E1eQSkIV-2sG2cYtlmO7HWX3KotKrB-uRugOb4yfNLEs&usqp=CAU',
  },
  {
   
    imgPath:
      'https://www.filmibeat.com/img/2022/03/puneethrajkumar-1647425000.jpg',
  },
];

function Carousal() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

 

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>

      
    <div id='slide'>
  
      <Paper 
        square
        elevation={0}
       
      >
        <Typography  >{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img" 
              id='slide'
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
     
   
    </div>
      
     
  </div>
  );
}

export default Carousal;
