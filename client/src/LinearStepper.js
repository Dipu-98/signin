import React, { useState } from "react";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Avatar,
  Input,
  IconButton,
 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Create Your Account",
    "Personal Information",
    "Employement Details",
    "Upload Documents",
    // "complete"
  ];
}
const CreateYourAccountForm = () => {
  const { control } = useFormContext();

  return (
    <>
    <Box>
<Avatar

/>
    {/*  */}

    </Box>  
    <Box>
      <Controller
        control={control}
        name="Name"
        render={({ field }) => (
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            placeholder="Enter Your  Name"
            
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            id="email"
            label="email"
            variant="outlined"
            placeholder="Enter Your email"
            
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextField
            id="password"
            label="password"
            variant="outlined"
            placeholder="Enter Your password"
            // fullWidth
            margin="normal"
            {...field}


          />
        )}
      />
       <Controller
        control={control}
        name="Conferm password"
        render={({ field }) => (
          <TextField
            id="confermpassword"
            label="confermpassword"
            variant="outlined"
            placeholder="Conferm your password"
           
            margin="normal"
            {...field}
          />
        )}
      />
      </Box>
    </>
  );
};
const PersonalInformationForm = () => {
  const { control } = useFormContext();
  return (
    <>
    <Box>
     

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            // fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="DateOfBirth"
        render={({ field }) => (
          <TextField
            id="Date Of Birth"
            label="Date Of Birth"
            variant="outlined"
            placeholder="Enter Your Date Of Birth"
            // fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
       <Controller
        control={control}
        name="Address"
        render={({ field }) => (
          <TextField
            id="Address"
            label="Address"
            variant="outlined"
            placeholder="Enter Your Address"
            // fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
       </Box>
    </>
   
  );
};
const EmployementDetailsForm = () => {
  const { control } = useFormContext();
  return (
    <>
    <Box>
      <Controller
        control={control}
        name="Employee id"
        render={({ field }) => (
          <TextField
            id="Employee id"
            label="Employee id"
            variant="outlined"
            placeholder="Enter Your Employee Id"
         
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Designation"
        render={({ field }) => (
          <TextField
            id="Designation"
            label="Designation "
            variant="outlined"
            placeholder="Enter Your Designation"
            // fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="experience"
        render={({ field }) => (
          <TextField
            id="experience"
            label="experience"
            variant="outlined"
            placeholder="Enter Your experience (yr)"
            // fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      </Box>
    </>
  );
};
const UploadDocumentsForm = () => {
  const [image, setImage] = useState('')
  const postDetails=()=>{
   
    const data = new FormData();

   
    data.append("file", image)
    data.append("cloud_name", "dipss")
    data.append("upload_preset", "signin")
    fetch("https://api.cloudinary.com/v1_1/dipss/image/upload",{
      method:"post",
      body:data,
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const { control } = useFormContext();
  return (
    <>
     
<label htmlFor="contained-button-file">
  <Input accept="image/*" onChange={(e)=>setImage(e.target.files[0])} id="contained-button-file" multiple type="file" />
  <Button onClick variant="contained" component="span">
    Upload Your Identity Card
  </Button>
</label>

<label htmlFor="contained-button-file">
  <Input accept="image/*" onChange={(e)=>setImage(e.target.files[0])} id="contained-button-file" multiple type="file" />
  <Button variant="contained" component="span">
    Upload Your Aadhar Card
  </Button>
</label>
     
     
<label htmlFor="contained-button-file">
  <Input accept="image/*" onChange={(e)=>setImage(e.target.files[0])} id="contained-button-file" multiple type="file" />
  <Button onClick={postDetails()}variant="contained" component="span">
    Upload Your Pan Card
  </Button>
</label>
<label htmlFor="contained-button-file">
  <Input accept="file" id="contained-button-file" multiple type="file" />
  <Button variant="contained" component="span">
    Upload Your Voting Card
  </Button>
</label>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CreateYourAccountForm />;

    case 1:
      return <PersonalInformationForm />;
    case 2:
      return <EmployementDetailsForm />;
    case 3:
      return <UploadDocumentsForm />;
    default:
      return "completestep";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
   const methods = useForm({
     defaultValues: {
      Name: "",
      email: "",
       password: "",
      confermpassword: "",
       phoneNumber: "",
       DateOfBirth: "",
       address: "",
      
       employeeid: "",
       designation: "",
       experience: "",
      
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);

  const PostData=()=>{
    fetch("https://jsonplaceholder.typicode.com/comments",{
      method:"post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
      Name: "",
      email: "",
      password: "",
      confermpassword: "",
      phoneNumber: "",
      DateOfBirth: "",
      address: "",
      
      employeeid: "",
      designation: "",
      experience: "",
      })
    }).then(res=>res.json()).then(data=>{
      console.log(data);
    })

  }

  
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      //
      fetch("http://localhost:5000/signup")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

   const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
   };

 
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: "block" }}
          //     >
          //       optional
          //     </Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods
          }>
            <form onSubmit={
             methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
               onClick={PostData()}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
          
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
